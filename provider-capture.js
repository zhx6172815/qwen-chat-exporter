async function collectConversation(expectedId, signal, onProgress = () => {}) {
  const source = detectConversation(location.href);
  if (!source || source.id !== expectedId) throw aiFailure("providerLocation");
  if (source.provider === "chatgpt") return collectChatGPTConversation(expectedId, signal, onProgress);
  if (source.provider === "gemini") return collectGeminiConversation(source, signal, onProgress);
  let pages = 0;
  const report = (stage, extra = {}) => onProgress({stage, pages, count: 0, ...extra});
  const check = () => {
    if (signal.aborted) throw new Error("导出已取消。");
    const active = detectConversation(location.href);
    if (!active || active.id !== source.id || active.provider !== source.provider || active.origin !== source.origin) throw aiFailure("providerLocation");
  };
  const pause = ms => new Promise((resolve, reject) => {
    check();
    const timer = setTimeout(done, ms);
    const aborted = () => { clearTimeout(timer); signal.removeEventListener("abort", aborted); reject(new Error("导出已取消。")); };
    function done() { signal.removeEventListener("abort", aborted); resolve(); }
    signal.addEventListener("abort", aborted, {once: true});
  });
  function tokenFrom(keys) {
    for (const key of keys) {
      const value = localStorage.getItem(key);
      if (!value) continue;
      try {
        const parsed = JSON.parse(value);
        const token = typeof parsed === "string" ? parsed : parsed?.value || parsed?.token || parsed?.access_token;
        if (typeof token === "string" && token) return token;
      } catch { return value; }
    }
    return "";
  }
  async function jsonRequest(path, {body, headers = {}} = {}) {
    const url = new URL(path, source.origin);
    const allowed = [source.origin];
    if (source.provider === "qianwen") allowed.push("https://chat2-api.qianwen.com");
    if (!allowed.includes(url.origin) || url.username || url.password) throw aiFailure("providerLocation");
    for (let attempt = 0; attempt < 3; attempt++) {
      check();
      report("waiting", {attempt});
      const timeout = new AbortController();
      const abort = () => timeout.abort();
      signal.addEventListener("abort", abort, {once: true});
      const timer = setTimeout(abort, 45000);
      try {
        const response = await fetch(url.href, {method: body === undefined ? "GET" : "POST",
          credentials: "include", cache: "no-store", signal: timeout.signal,
          headers: {Accept: "application/json", ...(body === undefined ? {} : {"Content-Type": "application/json"}), ...headers},
          ...(body === undefined ? {} : {body: JSON.stringify(body)})});
        if ([401, 403].includes(response.status)) throw aiFailure("providerLogin");
        if ([404, 405, 410].includes(response.status)) throw aiFailure("providerUnavailable");
        if (response.status === 429 || response.status >= 500) {
          if (attempt === 2) throw aiFailure("providerBusy");
          const seconds = Number(response.headers.get("Retry-After"));
          if (Number.isFinite(seconds) && seconds > 60) throw aiFailure("providerBusy");
          await pause(Math.max(1000, Number.isFinite(seconds) && seconds > 0 ? seconds * 1000 : (attempt + 1) * 1200));
          continue;
        }
        if (!response.ok) throw aiFailure("providerRequest");
        const total = Number(response.headers.get("Content-Length"));
        const totalBytes = total > 0 && !response.headers.get("Content-Encoding") ? total : null;
        const reader = response.body?.getReader();
        if (!reader) return await response.json();
        const chunks = [], decoder = new TextDecoder();
        let receivedBytes = 0;
        try {
          while (true) {
            check();
            const part = await reader.read();
            if (part.done) break;
            receivedBytes += part.value.length;
            chunks.push(decoder.decode(part.value, {stream: true}));
            report("receiving", {receivedBytes, totalBytes});
          }
        } finally { reader.releaseLock(); }
        chunks.push(decoder.decode());
        report("parsing");
        await pause(0);
        try { return JSON.parse(chunks.join("")); } catch { throw aiFailure("providerSchema"); }
      } catch (error) {
        check();
        if (error.code) throw error;
        if (attempt === 2) throw aiFailure("providerRequest");
        await pause(1200 * (attempt + 1));
      } finally {
        clearTimeout(timer);
        signal.removeEventListener("abort", abort);
      }
    }
  }
  function acceptPage() { pages++; report("page"); }
  const adapters = {deepseek, kimi, qwen, qianwen, doubao};
  report("auth");
  const result = await adapters[source.provider]();
  check();
  return result;

  async function deepseek() {
    const token = tokenFrom(["userToken", "token", "authToken"]);
    if (!token) throw aiFailure("providerLogin");
    const rawPages = [], cursors = new Set();
    let cursor = "", session;
    for (let index = 0; index < 10000; index++) {
      let path = "/api/v0/chat/history_messages?chat_session_id=" + encodeURIComponent(source.id) + "&cache_version=0";
      if (cursor) path += "&cursor=" + encodeURIComponent(cursor);
      const response = await jsonRequest(path, {headers: {Authorization: "Bearer " + token, "x-client-platform": "web"}});
      if (response.code !== 0 || !Array.isArray(response.data?.biz_data?.chat_messages)) throw aiFailure("providerSchema");
      const page = response.data.biz_data;
      if (page.chat_session?.id && String(page.chat_session.id) !== source.id) throw aiFailure("providerLocation");
      session ||= page.chat_session;
      rawPages.push(page);
      acceptPage();
      if (page.has_more === true) {
        const next = page.next_cursor;
        if (next == null || !String(next) || cursors.has(String(next))) throw aiFailure("providerCursor");
        cursors.add(String(next)); cursor = String(next); continue;
      }
      if (page.has_more != null && page.has_more !== false) throw aiFailure("providerSchema");
      const messages = aiMergePages(rawPages, p => p.chat_messages.map(message => {
        if (!Object.hasOwn(message, "parent_id")) throw aiFailure("providerBranch");
        const role = aiRole(message.role);
        const fragments = Array.isArray(message.fragments) ? message.fragments : [];
        const text = fragments.filter(fragment => fragment.type === (role === "user" ? "REQUEST" : "RESPONSE"))
          .map(fragment => fragment.content || "").join("\n\n") || (typeof message.content === "string" ? message.content : "");
        return aiMessage(message.message_id ?? message.id, role, text, message.parent_id);
      }));
      // A connected chain ending at the server's selected leaf proves this branch reaches its root,
      // even on responses without an explicit pagination flag. No leaf => no completeness claim.
      const branch = aiChain(messages, session?.current_message_id);
      return aiResult(source, branch, {title: session?.title, pages: rawPages}, pages,
        {complete: true, type: "selected-parent-chain", selectedLeaf: String(session.current_message_id)});
    }
    throw aiFailure("providerIncomplete");
  }

  async function qwen() {
    const token = tokenFrom(["token"]);
    const response = await jsonRequest("/api/v2/chats/" + encodeURIComponent(source.id) + "/", {
      headers: token ? {Authorization: "Bearer " + token} : {}});
    const chat = response.data?.chat;
    if (!chat || !chat.history?.messages || chat.history.currentId == null) throw aiFailure("providerSchema");
    if (chat.id && String(chat.id) !== source.id) throw aiFailure("providerLocation");
    const mapping = {};
    for (const [key, message] of Object.entries(chat.history.messages)) {
      if (!message || !Object.hasOwn(message, "parentId") || String(message.id ?? key) !== key) throw aiFailure("providerSchema");
      let text = typeof message.content === "string" ? message.content : "";
      if (Array.isArray(message.content_list)) text = message.content_list.filter(part => part.phase === "answer")
        .map(part => typeof part.content === "string" ? part.content : "").join("\n\n") || text;
      mapping[key] = {parent: message.parentId ?? null, children: message.childrenIds,
        message: aiMessage(key, message.role, text, message.parentId)};
    }
    const raw = {title: chat.title, mapping, current_node: String(chat.history.currentId)};
    const selected = selectedMessages(raw);
    acceptPage();
    return aiResult(source, selected, {title: chat.title, response}, pages,
      {complete: true, type: "validated-message-tree", selectedLeaf: raw.current_node});
  }

  async function doubao() {
    // The site's own resource list supplies the currently valid gateway URL and query parameters.
    // Never manufacture request signatures or reuse cross-origin endpoints.
    const endpoint = performance.getEntriesByType("resource").map(entry => entry.name).reverse().find(name => {
      try { const url = new URL(name); return url.origin === source.origin && url.pathname.endsWith("/im/chain/single"); } catch { return false; }
    });
    if (!endpoint) throw aiFailure("providerRefresh");
    const rawPages = [], anchors = new Set();
    let anchor = Number.MAX_SAFE_INTEGER;
    for (let index = 0; index < 10000; index++) {
      if (anchors.has(anchor)) throw aiFailure("providerCursor");
      anchors.add(anchor);
      const response = await jsonRequest(endpoint, {headers: {"Agw-Js-Conv": "str", "Content-Type": "application/json; encoding=utf-8"},
        body: {cmd: 3100, sequence_id: crypto.randomUUID(), channel: 2, version: "1",
          uplink_body: {pull_singe_chain_uplink_body: {conversation_id: source.id, anchor_index: anchor,
            conversation_type: 3, direction: 1, limit: 100, ext: {}, filter: {index_list: []}, evaluate_ab_params: "", evaluate_common_params: ""}}}});
      const page = response.downlink_body?.pull_singe_chain_downlink_body;
      if (response.status_code !== 0 || !Array.isArray(page?.messages) || typeof page.has_more !== "boolean") throw aiFailure("providerSchema");
      for (const message of page.messages) if (message.conversation_id && String(message.conversation_id) !== source.id) throw aiFailure("providerLocation");
      rawPages.push(page); acceptPage();
      if (!page.has_more) {
        const entries = new Map();
        for (const p of rawPages) for (const m of p.messages) {
          const id = String(m.message_id ?? "");
          if (!id) throw aiFailure("providerSchema");
          if (entries.has(id) && JSON.stringify(entries.get(id)) !== JSON.stringify(m)) throw aiFailure("providerChanged");
          entries.set(id, m);
        }
        const ordered = [...entries.values()].sort((a, b) => Number(a.index_in_conv) - Number(b.index_in_conv));
        const indexes = new Set();
        const messages = ordered.map(message => {
          const position = Number(message.index_in_conv);
          if (!Number.isSafeInteger(position) || indexes.has(position)) throw aiFailure("providerSchema");
          indexes.add(position);
          const blocks = Array.isArray(message.content_block) ? message.content_block : [];
          const thinking = new Set(blocks.filter(block => block.content?.thinking_block).map(block => String(block.block_id)));
          const text = blocks.filter(block => !thinking.has(String(block.parent_id))).map(block => {
            const content = block.content || {};
            if (content.thinking_block) return "";
            if (content.text_block) return content.text_block.text || "";
            if (!content.artifact_block && Object.keys(content).length) throw aiFailure("providerSchema");
            if (content.artifact_block) return "[附件：" + (content.artifact_block.title || content.artifact_block.resource_id || "文件") + "]";
            return "";
          }).filter(Boolean).join("\n\n") || (typeof message.content === "string" ? message.content : "");
          const role = Number(message.user_type) === 1 ? "user" : Number(message.user_type) === 2 ? "assistant" : "system";
          return aiMessage(message.message_id, role, text);
        });
        return aiResult(source, messages, {pages: rawPages}, pages, {complete: true, type: "terminal-pagination"});
      }
      const next = Number(page.next_index);
      if (!Number.isSafeInteger(next) || next < 0 || next >= anchor || !page.messages.length) throw aiFailure("providerCursor");
      anchor = next;
    }
    throw aiFailure("providerIncomplete");
  }

  async function kimi() {
    // Legacy JSON history protocol. Newer Kimi protocols must pass this schema or fail explicitly.
    const token = tokenFrom(["access_token"]);
    const rawPages = [], cursors = new Set();
    let cursor = "";
    for (let index = 0; index < 10000; index++) {
      const response = await jsonRequest("/api/chat/" + encodeURIComponent(source.id) + "/segment/scroll", {
        body: cursor ? {last_id: cursor, limit: 100} : {limit: 100}, headers: token ? {Authorization: "Bearer " + token} : {}});
      if (!Array.isArray(response.items) || typeof response.has_more !== "boolean") throw aiFailure("providerIncomplete");
      rawPages.push(response); acceptPage();
      if (!response.has_more) {
        const ordered = aiMergePages([...rawPages].reverse(), p => [...p.items].reverse().map(item => {
          let text = typeof item.content === "string" ? item.content : "";
          if (Array.isArray(item.contents?.zones)) text = item.contents.zones.flatMap(zone => zone.sections || [])
            .filter(section => section.view === "cmpl" && typeof section.cmpl === "string").map(section => section.cmpl).join("\n\n");
          return aiMessage(item.id, item.role, text);
        }));
        return aiResult(source, ordered, {pages: rawPages}, pages, {complete: true, type: "terminal-pagination"});
      }
      const next = response.next_cursor || response.last_id;
      if (!next || cursors.has(String(next)) || !response.items.length) throw aiFailure("providerCursor");
      cursors.add(String(next)); cursor = String(next);
    }
    throw aiFailure("providerIncomplete");
  }

  async function qianwen() {
    const path = "https://chat2-api.qianwen.com/api/v1/session/msg/list?session_id=" + encodeURIComponent(source.id) + "&biz_id=ai_qwen";
    const response = await jsonRequest(path);
    if (response.code !== 0 || !Array.isArray(response.data?.list)) throw aiFailure("providerSchema");
    const data = response.data;
    // Do not guess undocumented page parameters. A server-declared total or terminal flag is required.
    const total = data.total ?? data.total_count;
    const proven = data.has_more === false || (Number.isSafeInteger(total) && total === data.list.length);
    if (!proven || data.has_more === true) throw aiFailure("providerIncomplete");
    const messages = [];
    for (const entry of [...data.list].reverse()) {
      const id = entry.msg_id ?? entry.message_id ?? entry.id;
      if (id == null) throw aiFailure("providerSchema");
      const user = (entry.request_messages || []).filter(message => message.mime_type === "text/plain")
        .map(message => message.content || "").join("\n\n");
      const answer = (entry.response_messages || []).filter(message => ["text/plain", "text/markdown", "multi_load/iframe"].includes(message.mime_type))
        .map(message => typeof message.content === "string" ? message.content : "").join("\n\n");
      if (user) messages.push(aiMessage(String(id) + ":user", "user", user));
      if (answer) messages.push(aiMessage(String(id) + ":assistant", "assistant", answer));
      if ((entry.response_messages?.length && !answer) || (!user && !answer)) throw aiFailure("providerSchema");
    }
    acceptPage();
    return aiResult(source, messages, {response}, pages, {complete: true, type: "server-total-or-terminal"});
  }
}
