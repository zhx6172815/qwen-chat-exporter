const roleLabels = {user: "用户", assistant: "ChatGPT", system: "系统", tool: "工具", developer: "开发者"};

function escapeHTML(text) {
  return String(text).replace(/[&<>"']/g, char =>
    ({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"})[char]);
}

function markdownHTML(text) {
  const renderer = new marked.Renderer();
  renderer.image = ({text}) => escapeHTML("[图片：" + (text || "无描述") + "]");
  return DOMPurify.sanitize(marked.parse(text, {renderer, async: false}), {
    ALLOWED_TAGS: ["p", "div", "span", "br", "hr", "h1", "h2", "h3", "h4", "h5", "h6",
      "strong", "b", "em", "i", "del", "s", "sub", "sup", "pre", "code",
      "ul", "ol", "li", "blockquote", "a", "table", "thead", "tbody", "tr", "th", "td"],
    ALLOWED_ATTR: ["href", "title", "start", "colspan", "rowspan"],
    ALLOW_DATA_ATTR: false
  });
}

function plainText(html) {
  const root = new DOMParser().parseFromString(html, "text/html").body;
  const blocks = new Set(["P", "DIV", "BLOCKQUOTE", "H1", "H2", "H3", "H4", "H5", "H6", "UL", "OL", "TABLE"]);
  const codeBlocks = [];
  function read(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      // ChatGPT also uses emphasis touching Chinese punctuation that CommonMark
      // leaves as literal text. Remove the remaining paired marks in prose.
      return node.data.replace(/\*\*(?=\S)([^\n]*?\S)\*\*/g, "$1")
        .replace(/~~(?=\S)([^\n]*?\S)~~/g, "$1");
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return "";
    if (node.tagName === "PRE") return "\n\n\0" + (codeBlocks.push(node.textContent) - 1) + "\0\n\n";
    if (node.tagName === "CODE") return "\0" + (codeBlocks.push(node.textContent) - 1) + "\0";
    if (node.tagName === "BR") return "\n";
    if (node.tagName === "HR") return "\n\n";
    if (node.tagName === "TR") return "\n" + Array.from(node.cells, cell => read(cell).trim()).join("\t") + "\n";
    const content = Array.from(node.childNodes, read).join("");
    if (node.tagName === "LI") return "\n" + content.trim() + "\n";
    if (node.tagName === "A" && node.hasAttribute("href")) {
      const url = node.getAttribute("href");
      return content.trim() === url ? content : content + " (" + url + ")";
    }
    return blocks.has(node.tagName) ? "\n\n" + content + "\n\n" : content;
  }
  return Array.from(root.childNodes, read).join("").replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n").trim().replace(/\0(\d+)\0/g, (_match, index) => codeBlocks[index]);
}

function exportFilename(title) {
  let name = Array.from(title.replace(/[<>:"/\\|?*\u0000-\u001f]/g, "-").trim())
    .slice(0, 95).join("").replace(/[ .]+$/, "");
  if (/^(con|prn|aux|nul|com[1-9¹²³]|lpt[1-9¹²³])(?:\.|$)/i.test(name)) name = "_" + name;
  return name || "ChatGPT 对话";
}

function selectedMessages(raw) {
  if (raw.mapping) {
    const nodes = raw.mapping;
    const keys = Object.keys(nodes);
    const children = new Map(keys.map(key => [key, []]));
    const roots = [];
    for (const key of keys) {
      const node = nodes[key];
      if (!node || typeof node !== "object") throw new Error("消息树节点无效，已停止导出。");
      if (node.parent == null) roots.push(key);
      else {
        if (!children.has(node.parent)) throw new Error("消息树缺少上文节点，无法确认完整性。");
        children.get(node.parent).push(key);
      }
      if (Array.isArray(node.children) && node.children.some(child => !Object.hasOwn(nodes, child))) {
        throw new Error("消息树缺少后续节点，无法确认完整性。");
      }
    }
    if (roots.length !== 1) throw new Error("无法定位唯一的对话起点，已停止导出。");
    const queue = [roots[0]];
    for (let index = 0; index < queue.length; index += 1) {
      for (const child of children.get(queue[index])) queue.push(child);
    }
    if (queue.length !== keys.length) throw new Error("消息树存在断开或循环节点，已停止导出。");
    if (!raw.current_node || !Object.hasOwn(nodes, raw.current_node)) {
      throw new Error("缺少当前分支的末尾节点，无法确认完整性。");
    }
    const chain = [];
    let cursor = raw.current_node;
    while (cursor != null) {
      const node = nodes[cursor];
      if (node.message) chain.push(node.message);
      cursor = node.parent;
    }
    return chain.reverse();
  }
  if (raw.page_info?.has_previous_page || raw.page_info?.has_next_page) {
    throw new Error("对话仍有未读取的分页，已停止导出。");
  }
  if (!Array.isArray(raw.messages)) throw new Error("没有可识别的完整消息记录。");
  return raw.messages.map(entry => entry.message || entry);
}

function codeFence(text, language = "") {
  const longest = Math.max(2, ...Array.from(text.matchAll(/\x60+/g), match => match[0].length));
  const fence = String.fromCharCode(96).repeat(longest + 1);
  return fence + language.replace(/[^\w+#.-]/g, "") + "\n" + text + "\n" + fence;
}

function contentMarkdown(content) {
  if (typeof content === "string") return content;
  if (!content || typeof content !== "object") return "";
  if (Array.isArray(content.parts)) {
    return content.parts.map(part => typeof part === "string" ? part : contentMarkdown(part)).join("\n\n");
  }
  const type = content.content_type || "";
  if (type === "code") return codeFence(content.text || "", content.language || "");
  if (type === "thoughts" && Array.isArray(content.thoughts)) {
    return content.thoughts.map(thought => [thought.summary, thought.content].filter(Boolean).join("\n\n")).join("\n\n");
  }
  if (typeof content.text === "string") return content.text;
  if (typeof content.content === "string") return content.content;
  if (type === "image_asset_pointer") return "[图片：" + (content.asset_pointer || "原始资源见 JSON") + "]";
  // The JSON export retains the full structured content.
  return "[结构化消息，详见 JSON 原始记录]";
}

function readableMessage(message) {
  const role = message.author?.role;
  if (role !== "user" && role !== "assistant") return false;
  if (message.recipient && message.recipient !== "all") return false;
  if (message.channel && !["final", "commentary"].includes(message.channel)) return false;
  const metadata = message.metadata || {};
  if (metadata.is_visually_hidden_from_conversation || metadata.is_thinking_preamble_message) return false;
  return !["thoughts", "reasoning_recap", "reasoning_summary", "execution_output",
    "user_editable_context", "model_editable_context"].includes(message.content?.content_type);
}

function normalizeChatGPTConversation(result, id, origin) {
  const raw = result.raw;
  const entries = selectedMessages(raw);
  const ids = new Set();
  const messages = [];
  for (const message of entries) {
    if (!message.id || ids.has(message.id)) throw new Error("消息编号缺失或重复，无法确认完整性。");
    ids.add(message.id);
    if (!readableMessage(message)) continue;
    let text = contentMarkdown(message.content);
    const fallback = message.metadata?.model_dil_v2?.fallbackMarkdown;
    if (typeof fallback === "string") text = fallback;
    for (const ref of message.metadata?.content_references || []) {
      if (typeof ref.matched_text === "string" && ref.matched_text && typeof ref.alt === "string") {
        text = text.split(ref.matched_text).join(ref.alt);
      }
    }
    for (const attachment of message.metadata?.attachments || []) {
      text += "\n\n[附件：" + (attachment.name || attachment.id || "未命名附件") + "]";
    }
    if (!text.trim()) continue;
    const role = message.author?.role || "unknown";
    messages.push({id: message.id, role, markdown: text});
  }
  if (!entries.length) throw new Error("此对话没有可导出的消息。");
  const total = raw.mapping ? Object.values(raw.mapping).filter(node => node.message).length : entries.length;
  const userMessages = messages.filter(message => message.role === "user").length;
  return {
    title: String(raw.title || "ChatGPT 对话"),
    url: origin + "/c/" + id,
    exportedAt: new Date().toISOString(),
    pages: result.pages,
    totalMessages: total,
    branchMessages: entries.length,
    userMessages,
    assistantMessages: messages.length - userMessages,
    filteredMessages: entries.length - messages.length,
    messages,
    raw
  };
}

function formatConversation(conversation, format) {
  const {title, url, exportedAt, messages, raw, pages, totalMessages, branchMessages} = conversation;
  if (format === "json") {
    return JSON.stringify({...raw, _export: {version: 3, url, exportedAt, complete: true, pages,
      selectedBranchMessages: branchMessages, readableMessages: messages.length, totalMessages,
      userMessages: conversation.userMessages, assistantMessages: conversation.assistantMessages,
      filteredMessages: conversation.filteredMessages}}, null, 2) + "\n";
  }
  return formatHeading(title, format) + "\n\n" +
    messages.map(message => formatMessage(message, format)).join(format === "md" ? "\n\n---\n\n" : "\n\n") + "\n";
}

function formatHeading(title, format) {
  return format === "md" ? "# " + title.replace(/[\r\n]/g, " ").replace(/[\\\x60*_[\]<>#~&]/g, "\\$&") : title;
}

function formatMessage(message, format) {
  const label = message.role === "user" ? "User" : "Assistant";
  const body = format === "txt" ? plainText(markdownHTML(message.markdown)) : message.markdown;
  return format === "md" ? "**" + label + ":**\n\n" + body : label + ":\n" + body;
}
