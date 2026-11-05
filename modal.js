const snapshots = new Map();
let activeModal;

function uiFrame() {
  return new Promise(resolve => setTimeout(resolve, 0));
}

function openExporter(format, id, language) {
  const originalSource = detectConversation(location.href);
  if (!["md", "txt", "json", "pdf"].includes(format)) return;
  activeModal?.close();
  applyLanguage(language);
  const host = document.createElement("div");
  host.id = "gpt-chat-exporter";
  const shadow = host.attachShadow({mode: "open"});
  const style = document.createElement("style");
  style.textContent = modalStyles + "\n" + languageStyles;
  const dialog = document.createElement("dialog");
  // All dynamic conversation content is assigned through textContent.
  dialog.innerHTML = '<button class="close" type="button" aria-label="关闭">×</button>' +
    '<div class="heading"><span class="symbol" aria-hidden="true">↓</span><div><h2>正在导出 ' +
    ({md: "Markdown", txt: "TXT", json: "JSON", pdf: "PDF"})[format] +
    '</h2><p>读取当前对话的完整历史</p></div></div>' +
    '<progress aria-label="导出进度"></progress><p class="status" role="status" aria-live="polite"></p>' +
    '<p class="meta"></p><div class="actions">' +
    '<button class="primary cancel" type="button">取消导出</button>' +
    '<button class="primary save" type="button" hidden></button>' +
    '<button class="convert" type="button" hidden>转换其他格式</button>' +
    '<button class="retry" type="button" hidden>重新读取</button>' +
    '<button class="done" type="button" hidden>完成</button></div>';
  shadow.append(style, dialog);
  const languageControl = addLanguageControl(dialog);
  const stopLocalization = localizeInterface(shadow);
  document.documentElement.append(host);
  const status = shadow.querySelector(".status");
  const meta = shadow.querySelector(".meta");
  const subtitle = shadow.querySelector(".heading p");
  const progress = shadow.querySelector("progress");
  const title = shadow.querySelector("h2");
  const cancelButton = shadow.querySelector(".cancel");
  const saveButton = shadow.querySelector(".save");
  const convertButton = shadow.querySelector(".convert");
  const retryButton = shadow.querySelector(".retry");
  const doneButton = shadow.querySelector(".done");
  const previousFocus = document.activeElement;
  let controller;
  let conversation;
  let complete;
  let closed = false;
  let busy = false;
  let started;
  let lastPages = 0;
  let timer;
  let phase = "";
  let phaseStarted = 0;
  let lastReceivedBytes = 0;
  let lastTotalBytes = null;
  let currentAttempt = 0;

  function showProgress(event) {
    lastPages = event.pages;
    if (phase !== event.stage) {
      phase = event.stage;
      phaseStarted = performance.now();
      progress.removeAttribute("value");
    }
    if (event.stage === "auth" || event.stage === "waiting") currentAttempt = event.attempt;
    if (event.stage === "receiving") {
      lastReceivedBytes = event.receivedBytes;
      lastTotalBytes = event.totalBytes;
      if (lastTotalBytes) {
        progress.max = lastTotalBytes;
        progress.value = Math.min(lastReceivedBytes, lastTotalBytes);
      }
    }
    showStage();
  }

  function showStage() {
    const seconds = ((performance.now() - phaseStarted) / 1000).toFixed(1);
    if (phase === "auth") status.textContent = "正在检查登录状态…";
    if (phase === "waiting") status.textContent = "已登录，等待 ChatGPT 返回对话数据 · " + seconds + " 秒";
    if (phase === "receiving") {
      const received = (lastReceivedBytes / 1048576).toFixed(2);
      status.textContent = lastTotalBytes ?
        "正在接收对话数据 · " + received + " / " + (lastTotalBytes / 1048576).toFixed(2) + " MB" :
        "正在接收对话数据 · 已接收 " + received + " MB";
    }
    if (phase === "parsing") status.textContent = "数据已接收，正在解析完整记录…";
    if (phase === "page") status.textContent = "正在核对完整对话…";
    meta.textContent = (lastPages ? "已读取 " + lastPages + " 页 · " : "") +
      "耗时 " + elapsed() + (currentAttempt ? " · 正在重试" : "");
  }

  function elapsed() {
    return ((performance.now() - started) / 1000).toFixed(1) + " 秒";
  }

  function checkCancelled() {
    if (closed || controller.signal.aborted) throw new Error("导出已取消。");
    const currentSource = detectConversation(location.href);
    if (!originalSource || !currentSource || currentSource.id !== originalSource.id || currentSource.origin !== originalSource.origin || currentSource.provider !== originalSource.provider) throw aiFailure("providerLocation");
  }

  function close() {
    closed = true;
    controller?.abort();
    clearInterval(timer);
    stopLocalization();
    languageControl.dispose();
    dialog.close();
    host.remove();
    if (previousFocus?.isConnected) previousFocus.focus({preventScroll: true});
    if (activeModal?.host === host) activeModal = null;
  }

  async function save() {
    checkCancelled();
    const parts = [];
    if (format === "json") {
      status.textContent = "正在生成完整 JSON…";
      await uiFrame();
      checkCancelled();
      parts.push(formatConversation(conversation, format));
    } else {
      parts.push(formatHeading(conversation.title, format) + "\n\n");
      const separator = format === "md" ? "\n\n---\n\n" : "\n\n";
      progress.max = conversation.messages.length || 1;
      for (let offset = 0; offset < conversation.messages.length; offset += 64) {
        checkCancelled();
        const end = Math.min(offset + 64, conversation.messages.length);
        for (let index = offset; index < end; index += 1) {
          if (index) parts.push(separator);
          parts.push(formatMessage(conversation.messages[index], format));
        }
        progress.value = end;
        status.textContent = "正在生成文件 · " + end + " / " + conversation.messages.length + " 条聊天消息";
        await uiFrame();
      }
      parts.push("\n");
    }
    checkCancelled();
    const mime = {md: "text/markdown", txt: "text/plain", json: "application/json"};
    const url = URL.createObjectURL(new Blob(parts, {type: mime[format] + ";charset=utf-8"}));
    const link = document.createElement("a");
    link.href = url;
    link.download = exportFilename(conversation.title) + "." + format;
    link.hidden = true;
    document.documentElement.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30000);
  }

  async function printPDF() {
    checkCancelled();
    saveButton.disabled = true;
    const frame = document.createElement("iframe");
    frame.title = translate("GPT 对话 PDF 打印");
    frame.setAttribute("aria-hidden", "true");
    frame.style.cssText = "position:fixed;left:-10000px;top:0;width:840px;height:1px;border:0;";
    const loaded = new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error("无法准备打印窗口，请重试。")), 5000);
      frame.addEventListener("load", () => { clearTimeout(timeout); resolve(); }, {once: true});
    });
    frame.src = "about:blank";
    document.documentElement.append(frame);
    let cleanupTimer;
    try {
      await loaded;
      checkCancelled();
      const doc = frame.contentDocument;
      const css = doc.createElement("style");
      css.textContent = printStyles;
      doc.head.append(css);
      doc.title = conversation.title;
      const paper = doc.createElement("main");
      paper.className = "paper";
      const heading = doc.createElement("h1");
      heading.textContent = conversation.title;
      paper.append(heading);
      doc.body.append(paper);
      progress.max = conversation.messages.length || 1;
      for (let offset = 0; offset < conversation.messages.length; offset += 50) {
        checkCancelled();
        const fragment = doc.createDocumentFragment();
        for (const message of conversation.messages.slice(offset, offset + 50)) {
          const section = doc.createElement("section");
          section.className = "message";
          const label = doc.createElement("h2");
          label.textContent = message.role === "user" ? "User" : "Assistant";
          const body = doc.createElement("div");
          body.className = "message-body";
          body.innerHTML = markdownHTML(message.markdown);
          section.append(label, body);
          fragment.append(section);
        }
        paper.append(fragment);
        const count = Math.min(offset + 50, conversation.messages.length);
        status.textContent = "正在准备 PDF · " + count + " / " + conversation.messages.length + " 条聊天消息";
        progress.value = count;
        await uiFrame();
      }
      await Promise.race([doc.fonts.ready, new Promise(resolve => setTimeout(resolve, 3000))]);
      checkCancelled();
      frame.contentWindow.addEventListener("afterprint", () => {
        clearTimeout(cleanupTimer);
        frame.remove();
      }, {once: true});
      cleanupTimer = setTimeout(() => frame.remove(), 120000);
      status.textContent = "在打印窗口选择「另存为 PDF」。";
      frame.contentWindow.print();
    } catch (error) {
      frame.remove();
      throw error;
    } finally {
      saveButton.disabled = false;
    }
  }

  function finish(error) {
    busy = false;
    clearInterval(timer);
    cancelButton.hidden = true;
    retryButton.hidden = false;
    doneButton.hidden = false;
    progress.hidden = Boolean(error);
    if (error) {
      status.classList.add("error");
      status.textContent = controller.signal.aborted ? "导出已取消。" : interfaceError(error, "导出失败，请重试。");
      title.textContent = controller.signal.aborted ? "已取消" : "导出未完成";
    } else {
      progress.value = 1;
      progress.max = 1;
      title.textContent = format === "pdf" ? "PDF 已就绪" : "导出完成";
      status.textContent = "共 " + conversation.messages.length + " 条消息";
      subtitle.textContent = format === "pdf" ? "点击「打印 / 保存 PDF」生成文件。" : conversation.title;
      if (format !== "pdf") subtitle.setAttribute("data-no-translate", "");
      meta.textContent = "耗时 " + elapsed();
      saveButton.textContent = format === "pdf" ? "打印 / 保存 PDF" : "再次下载";
      saveButton.hidden = false;
      convertButton.hidden = false;
    }
  }

  async function run() {
    if (busy || closed) return;
    busy = true;
    conversation = null;
    complete = null;
    controller = new AbortController();
    started = performance.now();
    lastPages = 0;
    phase = "";
    subtitle.removeAttribute("data-no-translate");
    subtitle.textContent = "读取当前对话的完整历史";
    status.classList.remove("error");
    title.textContent = "正在导出 " + ({md: "Markdown", txt: "TXT", json: "JSON", pdf: "PDF"})[format];
    status.textContent = "正在连接当前账号…";
    progress.removeAttribute("value");
    progress.hidden = false;
    cancelButton.hidden = false;
    saveButton.hidden = true;
    convertButton.hidden = true;
    retryButton.hidden = true;
    doneButton.hidden = true;
    timer = setInterval(() => {
      if (phase) showStage();
    }, 100);
    let failure;
    try {
      checkCancelled();
      complete = await collectConversation(id, controller.signal, showProgress);
      checkCancelled();
      phase = "";
      status.textContent = "完整历史已读取，正在整理聊天正文…";
      await uiFrame();
      checkCancelled();
      conversation = normalizeConversation(complete, id, location.origin);
      if (format !== "pdf") await save();
      checkCancelled();
    } catch (error) {
      failure = error;
    }
    if (!closed) finish(failure);
  }

  cancelButton.addEventListener("click", () => controller?.abort());
  shadow.querySelector(".close").addEventListener("click", close);
  doneButton.addEventListener("click", close);
  dialog.addEventListener("cancel", event => { event.preventDefault(); close(); });
  retryButton.addEventListener("click", run);
  saveButton.addEventListener("click", async () => {
    if (busy) return;
    busy = true;
    saveButton.disabled = true;
    try {
      if (format === "pdf") await printPDF();
      else {
        await save();
        status.textContent = "文件已重新生成并交给浏览器下载。";
      }
    } catch (error) {
      status.textContent = interfaceError(error, "导出失败，请重试。");
    } finally {
      busy = false;
      saveButton.disabled = false;
    }
  });
  convertButton.addEventListener("click", async () => {
    if (!complete || busy) return;
    convertButton.disabled = true;
    const key = crypto.randomUUID();
    const expiry = setTimeout(() => snapshots.delete(key), 10 * 60 * 1000);
    snapshots.set(key, {data: complete, expiry});
    try {
      const result = await chrome.runtime.sendMessage({type: "openConverter", key});
      if (!result?.ok) throw new Error(result?.error || "转换窗口未能打开，请重试。");
    } catch (error) {
      clearTimeout(expiry);
      snapshots.delete(key);
      status.textContent = interfaceError(error, "转换窗口未能打开，请重试。");
    } finally {
      convertButton.disabled = false;
    }
  });
  activeModal = {host, close};
  dialog.showModal();
  void languageControl.ready.then(run);
}

globalThis.__gptChatExporter = {
  version: AI_EXPORTER_BUILD.version,
  product: AI_EXPORTER_BUILD.product,
  open: openExporter,
  readSnapshot(key, offset = 0) {
    const snapshot = snapshots.get(key);
    if (!snapshot) return {error: "读取记录已失效，请回到聊天页重新导出。"};
    if (!Number.isSafeInteger(offset) || offset < 0) return {error: "数据传输偏移无效。"};
    if (!snapshot.text) snapshot.text = JSON.stringify(snapshot.data);
    return {length: snapshot.text.length, chunk: snapshot.text.slice(offset, offset + 524288)};
  },
  releaseSnapshot(key) {
    clearTimeout(snapshots.get(key)?.expiry);
    snapshots.delete(key);
  },
  dispose() {
    activeModal?.close();
    for (const snapshot of snapshots.values()) clearTimeout(snapshot.expiry);
    snapshots.clear();
    chrome.storage.onChanged.removeListener(languageStorageChanged);
  }
};
