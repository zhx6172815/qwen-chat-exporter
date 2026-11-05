const params = new URLSearchParams(location.hash.slice(1));
const sourceTabId = Number(params.get("tabId"));
const sourceId = params.get("id");
const sourceOrigin = params.get("origin");
const snapshotKey = params.get("snapshot");
const status = document.querySelector("#status");
const paper = document.querySelector("#conversation");
const printButton = document.querySelector("#print");
const cancelButton = document.querySelector("#cancel");
const retryButton = document.querySelector("#retry");
const buttons = [...document.querySelectorAll("[data-format]")];
localizeInterface(document.body);
const languageControl = addLanguageControl(document.body);
let conversation;
let running = false;
let cancelled = false;

async function callJob(command, offset = 0) {
  const [response] = await chrome.scripting.executeScript({
    target: {tabId: sourceTabId},
    func: (action, key, position) => {
      const app = globalThis.__gptChatExporter;
      if (action === "clear") {
        app?.releaseSnapshot(key);
        return {state: "cleared"};
      }
      if (!app) return {state: "error", error: "读取记录已失效，请回到聊天页重新导出。"};
      const result = app.readSnapshot(key, position);
      return result.error ? {state: "error", error: result.error} : {state: "done", ...result};
    },
    args: [command, snapshotKey, offset]
  });
  if (!response?.result) throw new Error("原对话标签页已关闭或发生跳转，请回到原对话重新导出。");
  return response.result;
}

function download(format) {
  try {
    const mime = {md: "text/markdown", txt: "text/plain", json: "application/json"};
    const blob = new Blob([formatConversation(conversation, format)], {type: mime[format] + ";charset=utf-8"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = exportFilename(conversation.title) + "." + format;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30000);
  } catch {
    status.textContent = "文件生成失败，请重试或选择其他格式。";
  }
}

function nextFrame() {
  return new Promise(resolve => setTimeout(resolve, 0));
}

async function render() {
  document.title = conversation.title;
  paper.replaceChildren();
  const heading = document.createElement("h1");
  heading.textContent = conversation.title;
  const source = document.createElement("p");
  source.className = "source";
  source.textContent = conversation.url + " · " + conversation.messages.length + " messages";
  paper.append(heading, source);
  for (let offset = 0; offset < conversation.messages.length; offset += 50) {
    if (cancelled) throw new Error("导出已取消。");
    const fragment = document.createDocumentFragment();
    for (let index = offset; index < Math.min(offset + 50, conversation.messages.length); index += 1) {
      const message = conversation.messages[index];
      const section = document.createElement("section");
      section.className = "message";
      const label = document.createElement("h2");
      label.textContent = (index + 1) + ". " + (message.role === "user" ? "User" : "Assistant");
      const body = document.createElement("div");
      body.className = "message-body";
      body.innerHTML = markdownHTML(message.markdown);
      section.append(label, body);
      fragment.append(section);
    }
    paper.append(fragment);
    status.textContent = "完整记录已读取，正在排版 " + Math.min(offset + 50, conversation.messages.length) +
      " / " + conversation.messages.length + " 条消息…";
    await nextFrame();
  }
  paper.hidden = false;
}

async function run() {
  if (running) return;
  running = true;
  cancelled = false;
  conversation = null;
  paper.hidden = true;
  retryButton.hidden = true;
  cancelButton.hidden = false;
  printButton.disabled = true;
  buttons.forEach(button => { button.disabled = true; });
  try {
    if (!Number.isSafeInteger(sourceTabId) || sourceTabId < 0 ||
        !/^[a-zA-Z0-9-]+$/.test(sourceId || "") ||
        !Object.values(AI_PROVIDERS).some(provider => provider.hosts.some(host => "https://" + host === sourceOrigin)) ||
        !/^[0-9a-f-]{36}$/.test(snapshotKey || "")) {
      throw new Error("导出来源无效，请从 ChatGPT 对话页打开扩展。");
    }
    status.textContent = "正在打开刚才读取的完整记录…";
    let result = await callJob("start");
    if (result.state !== "done") throw new Error(result.error || "无法确认完整性，已停止导出。");

    const chunks = [];
    const length = result.length;
    let offset = 0;
    while (offset < length) {
      if (cancelled) throw new Error("导出已取消。");
      if (result.state !== "done" || result.length !== length || !result.chunk) {
        throw new Error("对话数据传输中断，请重新导出。");
      }
      chunks.push(result.chunk);
      offset += result.chunk.length;
      status.textContent = "正在打开已有记录 · " + Math.round(offset / length * 100) + "%";
      if (offset < length) result = await callJob("read", offset);
    }
    const complete = JSON.parse(chunks.join(""));
    conversation = normalizeConversation(complete, sourceId, sourceOrigin);
    await callJob("clear");
    await render();
    printButton.disabled = false;
    buttons.forEach(button => { button.disabled = false; });
    status.textContent = "完整读取完成 · 共 " + conversation.messages.length + " 条消息";
  } catch (error) {
    paper.hidden = true;
    conversation = null;
    status.textContent = cancelled ? "已取消打开转换窗口，可回到聊天页再次点击「转换其他格式」。" :
      interfaceError(error, "无法读取原对话，请确认原标签页仍然打开。");
  } finally {
    await callJob("clear").catch(() => {});
    cancelButton.hidden = true;
    running = false;
  }
}

cancelButton.addEventListener("click", () => {
  cancelled = true;
  void callJob("clear").catch(() => {});
});
retryButton.addEventListener("click", run);
printButton.addEventListener("click", () => window.print());
buttons.forEach(button => button.addEventListener("click", () => download(button.dataset.format)));
window.addEventListener("pagehide", () => { if (running) void callJob("clear").catch(() => {}); });
void languageControl.ready.then(run);
