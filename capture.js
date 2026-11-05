// Runs inside the authenticated ChatGPT tab in the extension's isolated world.
async function collectChatGPTConversation(expectedId, signal, onProgress = () => {}) {
  const id = location.pathname.match(/\/c\/([a-zA-Z0-9-]+)(?:\/|$)/)?.[1];
  if (!["chatgpt.com", "chat.openai.com"].includes(location.hostname) || id !== expectedId) {
    throw new Error("当前对话已改变，请从需要导出的对话重新打开扩展。");
  }
  const job = {count: 0, pages: 0};
  function report(stage, details = {}) {
    onProgress({...job, stage, ...details});
  }

  async function pause(ms) {
    if (signal.aborted) throw new Error("导出已取消。");
    await new Promise((resolve, reject) => {
      const onAbort = () => { clearTimeout(timer); reject(new Error("导出已取消。")); };
      const timer = setTimeout(() => {
        signal.removeEventListener("abort", onAbort);
        resolve();
      }, ms);
      signal.addEventListener("abort", onAbort, {once: true});
    });
  }

  async function request(path, token = "") {
    for (let attempt = 0; attempt < 3; attempt += 1) {
      let response;
      const requestSignal = AbortSignal.any([signal, AbortSignal.timeout(45000)]);
      report(token ? "waiting" : "auth", {attempt});
      try {
        response = await fetch(path, {
          credentials: "include",
          headers: token ? {Authorization: "Bearer " + token} : {},
          cache: "no-store",
          signal: requestSignal
        });
      } catch {
        if (signal.aborted) throw new Error("导出已取消。");
        if (attempt === 2) throw new Error("网络请求失败或超时，请检查网络后重试。");
        await pause(1500 * (attempt + 1));
        continue;
      }
      if (response.status === 429 || response.status >= 500) {
        if (attempt === 2) throw new Error("ChatGPT 暂时限流或服务繁忙，请稍后重试。");
        const retry = response.headers.get("Retry-After");
        const seconds = retry ? Number(retry) : NaN;
        const delay = Number.isFinite(seconds) ? seconds * 1000 :
          retry ? Date.parse(retry) - Date.now() : 1500 * (attempt + 1);
        if (delay > 60000) throw new Error("ChatGPT 要求等待较长时间，请稍后重新导出。");
        await pause(Math.max(1000, Number.isFinite(delay) ? delay : 1500));
        continue;
      }
      if ([404, 405, 410].includes(response.status)) return {unsupported: true};
      if ([401, 403].includes(response.status)) {
        throw new Error("ChatGPT 登录已过期或请求被拦截。请回到原对话确认已登录并刷新，再重试。");
      }
      if (!response.ok) throw new Error("ChatGPT 请求失败（HTTP " + response.status + "）。");
      try {
        if (!token) return {data: await response.json()};
        const length = Number(response.headers.get("Content-Length"));
        const encoding = response.headers.get("Content-Encoding");
        const totalBytes = Number.isSafeInteger(length) && length > 0 && (!encoding || encoding === "identity") ? length : null;
        const reader = response.body?.getReader();
        if (!reader) {
          report("parsing");
          return {data: await response.json()};
        }
        const decoder = new TextDecoder();
        const parts = [];
        let receivedBytes = 0;
        report("receiving", {receivedBytes, totalBytes});
        try {
          while (true) {
            const {value, done} = await reader.read();
            if (done) break;
            receivedBytes += value.byteLength;
            parts.push(decoder.decode(value, {stream: true}));
            report("receiving", {receivedBytes, totalBytes});
          }
          parts.push(decoder.decode());
        } finally {
          reader.releaseLock();
        }
        if (requestSignal.aborted) throw new Error("Request aborted");
        report("parsing", {receivedBytes, totalBytes});
        // Yield once so the parsing stage can paint before JSON parsing.
        await pause(0);
        return {data: JSON.parse(parts.join(""))};
      } catch {
        if (signal.aborted) throw new Error("导出已取消。");
        if (requestSignal.aborted) throw new Error("网络请求失败或超时，请检查网络后重试。");
        throw new Error("ChatGPT 返回了无法识别的数据，请刷新对话后重试。");
      }
    }
  }

  async function collect() {
    const session = await request("/api/auth/session");
    const token = session.data?.accessToken;
    if (!token) throw new Error("请先在原 ChatGPT 标签页登录，再重新导出。");
    const base = "/backend-api/conversations/" + encodeURIComponent(id);
    let result = await request("/backend-api/conversation/" + encodeURIComponent(id), token);
    if (result.unsupported) {
      result = await request(base + "?num_turns=100", token);
    }
    if (result.unsupported || !result.data) throw new Error("无法读取此对话，请确认对话已经保存且你有访问权限。");
    const latest = result.data;
    if ((latest.conversation_id || latest.id) && (latest.conversation_id || latest.id) !== id) {
      throw new Error("服务端返回的对话编号不一致，已停止导出。");
    }
    if (latest.mapping && typeof latest.mapping === "object" && !Array.isArray(latest.mapping)) {
      if (latest.page_info?.has_previous_page || latest.page_info?.has_next_page) {
        throw new Error("服务端返回的消息树不完整，已停止导出。");
      }
      job.count = Object.values(latest.mapping).filter(node => node.message).length;
      job.pages = 1;
      report("page");
      return {raw: latest, method: "mapping", pages: 1};
    }
    if (!Array.isArray(latest.messages) || !latest.page_info ||
        typeof latest.page_info.has_previous_page !== "boolean" ||
        typeof latest.page_info.has_next_page !== "boolean") {
      throw new Error("ChatGPT 对话数据格式已变化，无法确认消息是否完整。");
    }
    if (latest.page_info.has_next_page) throw new Error("最新一页仍有后续消息，无法确认完整性，请刷新后重试。");

    const pages = [];
    const seenMessages = new Map();
    const seenCursors = new Set();
    let page = latest;
    let firstPage = latest;
    while (true) {
      if (!Array.isArray(page.messages) || !page.page_info ||
          typeof page.page_info.has_previous_page !== "boolean" ||
          typeof page.page_info.has_next_page !== "boolean") {
        throw new Error("分页数据缺失，已停止导出，避免保存不完整记录。");
      }
      if ((page.conversation_id || page.id) && (page.conversation_id || page.id) !== id) {
        throw new Error("分页返回了其他对话，已停止导出。");
      }
      const unique = [];
      for (const entry of page.messages) {
        const message = entry.message || entry;
        const messageId = message.id || entry.id;
        if (!messageId) throw new Error("消息缺少编号，无法核对分页完整性。");
        if (seenMessages.has(messageId)) {
          const previous = seenMessages.get(messageId);
          if (JSON.stringify([previous.author, previous.content]) !== JSON.stringify([message.author, message.content])) throw new Error("导出过程中对话内容发生变化，请等待回复完成后重试。");
        } else {
          seenMessages.set(messageId, message);
          unique.push(entry);
        }
      }
      if (pages.length && !unique.length) throw new Error("分页没有返回更早的消息，已停止导出。");
      pages.push(unique);
      job.count = seenMessages.size;
      job.pages = pages.length;
      report("page");
      firstPage = page;
      if (!page.page_info.has_previous_page) break;
      const cursor = page.page_info.start_cursor;
      if (typeof cursor !== "string" || !cursor || seenCursors.has(cursor)) {
        throw new Error("分页游标缺失或重复，已停止导出。");
      }
      seenCursors.add(cursor);
      const previous = await request(base + "?num_turns=100&before=" + encodeURIComponent(cursor), token);
      if (!previous.data) throw new Error("更早的消息读取失败，已停止导出。");
      page = previous.data;
    }
    return {
      raw: {
        ...latest,
        messages: pages.reverse().flat(),
        page_info: {...latest.page_info, start_cursor: firstPage.page_info.start_cursor,
          has_previous_page: false, has_next_page: false}
      },
      method: "paginated",
      pages: pages.length
    };
  }

  return collect();
}
