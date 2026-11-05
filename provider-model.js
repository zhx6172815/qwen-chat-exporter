// Strict shared data contract. Missing ancestors/cursors/totals never become a complete export.
function aiFailure(code, detail = "") {
  const error = new Error(AI_ERROR_ZH[code] || code);
  error.code = code;
  error.detail = detail;
  return error;
}

function aiRole(role) {
  const value = String(role ?? "").toLowerCase();
  return ({human: "user", bot: "assistant", ai: "assistant"})[value] || value;
}

function aiMessage(id, role, text, parent = undefined) {
  if (id == null || String(id) === "" || !["user", "assistant", "system", "tool"].includes(aiRole(role))) throw aiFailure("providerSchema");
  if (["user", "assistant"].includes(aiRole(role)) && !String(text ?? "").trim()) throw aiFailure("providerSchema");
  return {id: String(id), author: {role: aiRole(role)}, content: {content_type: "text", parts: [String(text ?? "")]}, _parent: parent};
}

function aiMergePages(pages, getMessages) {
  const all = new Map();
  for (const page of pages) {
    const entries = getMessages(page);
    if (!Array.isArray(entries)) throw aiFailure("providerSchema");
    let added = 0;
    for (const entry of entries) {
      if (!entry.id) throw aiFailure("providerSchema");
      const previous = all.get(entry.id);
      if (previous && JSON.stringify(previous) !== JSON.stringify(entry)) throw aiFailure("providerChanged");
      if (!previous) { all.set(entry.id, entry); added += 1; }
    }
    if (pages.length > 1 && !added && entries.length) throw aiFailure("providerStalled");
  }
  return [...all.values()];
}

function aiChain(messages, current, {rootValues = [null, undefined, "", 0, "0"]} = {}) {
  const map = new Map(messages.map(message => [message.id, message]));
  if (map.size !== messages.length || current == null || !map.has(String(current))) throw aiFailure("providerBranch");
  const chain = [], seen = new Set();
  let cursor = String(current);
  while (!rootValues.includes(cursor)) {
    if (seen.has(cursor) || !map.has(cursor)) throw aiFailure("providerBranch");
    seen.add(cursor);
    const message = map.get(cursor);
    chain.push(message);
    const parent = message._parent;
    if (rootValues.includes(parent)) break;
    if (parent == null) throw aiFailure("providerBranch");
    cursor = String(parent);
  }
  if (!chain.length) throw aiFailure("providerBranch");
  return chain.reverse();
}

function aiResult(source, messages, raw, pages, proof) {
  if (!proof || proof.complete !== true || !messages.length) throw aiFailure("providerIncomplete");
  const ids = new Set();
  for (const message of messages) {
    if (!message.id || ids.has(message.id)) throw aiFailure("providerSchema");
    ids.add(message.id);
  }
  return {provider: source.provider, sourceUrl: source.url, method: "provider", pages,
    proof, raw: {title: raw.title || document.title || providerTitle(source.provider),
      conversation_id: source.id, messages,
      page_info: {has_previous_page: false, has_next_page: false},
      _provider: source.provider, _original: raw}};
}

function normalizeConversation(result, id, origin) {
  if (result.method !== "provider") { roleLabels.assistant = "ChatGPT"; return normalizeChatGPTConversation(result, id, origin); }
  if (result.proof?.complete !== true) throw aiFailure("providerIncomplete");
  roleLabels.assistant = providerTitle(result.provider);
  const conversation = normalizeChatGPTConversation(result, id, origin);
  conversation.url = result.sourceUrl;
  conversation.provider = result.provider;
  conversation.completeness = result.proof;
  return conversation;
}

