// UI-only localization. Conversation text is never passed to the translator.
const languageRows = [
  [
    "GPT 对话导出器",
    "GPT Chat Exporter",
    "GPT チャットエクスポーター"
  ],
  [
    "保存完整 ChatGPT 对话",
    "Save complete ChatGPT conversations",
    "ChatGPT の会話をすべて保存"
  ],
  [
    "导出 PDF",
    "Export PDF",
    "PDF を出力"
  ],
  [
    "打印 / 另存为 PDF →",
    "Print / Save as PDF →",
    "印刷 / PDF に保存 →"
  ],
  [
    "文本导出格式",
    "Text export formats",
    "テキスト出力形式"
  ],
  [
    "仅在本地处理 · 无水印和次数限制",
    "Processed locally · No watermarks or export limits",
    "ローカル処理 · 透かしなし・回数制限なし"
  ],
  [
    "自动读取完整消息历史，无需向上翻页。",
    "Fetches the complete history. No scrolling needed.",
    "スクロールせずに全履歴を取得します。"
  ],
  [
    "请先打开一段已保存的 ChatGPT 对话。",
    "Open a saved ChatGPT conversation first.",
    "保存済みの ChatGPT の会話を開いてください。"
  ],
  [
    "无法读取当前标签页。",
    "Unable to read the current tab.",
    "現在のタブを読み取れません。"
  ],
  [
    "无法打开导出弹窗，请刷新对话后重试。",
    "Unable to open the export dialog. Refresh the conversation and try again.",
    "出力画面を開けません。会話を再読み込みしてお試しください。"
  ],
  [
    "关闭",
    "Close",
    "閉じる"
  ],
  [
    "读取当前对话的完整历史",
    "Fetching the complete conversation history",
    "会話の全履歴を取得します"
  ],
  [
    "导出进度",
    "Export progress",
    "出力の進行状況"
  ],
  [
    "取消导出",
    "Cancel export",
    "出力をキャンセル"
  ],
  [
    "转换其他格式",
    "Convert to other formats",
    "別の形式に変換"
  ],
  [
    "重新读取",
    "Fetch again",
    "再取得"
  ],
  [
    "完成",
    "Done",
    "完了"
  ],
  [
    "再次下载",
    "Download again",
    "再ダウンロード"
  ],
  [
    "打印 / 保存 PDF",
    "Print / Save PDF",
    "印刷 / PDF に保存"
  ],
  [
    "正在导出 {1}",
    "Exporting {1}",
    "{1} を出力中"
  ],
  [
    "正在连接当前账号…",
    "Connecting to your account…",
    "アカウントに接続中…"
  ],
  [
    "正在生成完整 JSON…",
    "Generating the complete JSON…",
    "完全な JSON を生成中…"
  ],
  [
    "正在生成文件 · {1} / {2} 条聊天消息",
    "Generating file · {1} / {2} chat messages",
    "ファイル生成中 · {1} / {2} 件"
  ],
  [
    "正在准备 PDF · {1} / {2} 条聊天消息",
    "Preparing PDF · {1} / {2} chat messages",
    "PDF を準備中 · {1} / {2} 件"
  ],
  [
    "正在读取完整历史 · 已读 {1} 条消息 / {2} 页",
    "Fetching full history · {1} messages / {2} pages",
    "全履歴を取得中 · {1} 件 / {2} ページ"
  ],
  [
    "已读取 {1} 条原始记录 · {2} 页 · {3} 秒",
    "Fetched {1} raw records · {2} pages · {3} s",
    "原始レコード {1} 件取得 · {2} ページ · {3} 秒"
  ],
  [
    "完整读取 {1} 条原始记录 · {2} 页 · {3} 秒",
    "Fetched all {1} raw records · {2} pages · {3} s",
    "原始レコード全 {1} 件取得 · {2} ページ · {3} 秒"
  ],
  [
    "完整历史已读取，正在整理聊天正文…",
    "Full history fetched. Preparing the conversation…",
    "全履歴の取得完了。会話本文を整理中…"
  ],
  [
    "{1} · {2} 条聊天消息",
    "{1} · {2} chat messages",
    "{1} · 会話 {2} 件"
  ],
  [
    "导出完成",
    "Export complete",
    "出力完了"
  ],
  [
    "导出未完成",
    "Export did not complete",
    "出力未完了"
  ],
  [
    "已取消",
    "Cancelled",
    "キャンセル済み"
  ],
  [
    "导出已取消。",
    "Export cancelled.",
    "出力をキャンセルしました。"
  ],
  [
    "文件已重新生成并交给浏览器下载。",
    "File regenerated. Your browser is downloading it.",
    "ファイルを再生成しました。ブラウザーでダウンロード中です。"
  ],
  [
    "在打印窗口选择「另存为 PDF」。",
    "Choose “Save as PDF” in the print dialog.",
    "印刷画面で「PDF に保存」を選択してください。"
  ],
  [
    "GPT 对话 PDF 打印",
    "Print ChatGPT conversation to PDF",
    "ChatGPT の会話を PDF に印刷"
  ],
  [
    "无法准备打印窗口，请重试。",
    "Unable to prepare printing. Please try again.",
    "印刷の準備ができません。もう一度お試しください。"
  ],
  [
    "转换窗口未能打开，请重试。",
    "Unable to open the format converter. Please try again.",
    "形式変換画面を開けません。もう一度お試しください。"
  ],
  [
    "读取记录已失效，请回到聊天页重新导出。",
    "The fetched data has expired. Export again from the chat page.",
    "取得データの有効期限が切れました。会話ページから再度出力してください。"
  ],
  [
    "数据传输偏移无效。",
    "Invalid data transfer position.",
    "データの転送位置が無効です。"
  ],
  [
    "无法定位原聊天标签页。",
    "Unable to locate the original chat tab.",
    "元の会話タブが見つかりません。"
  ],
  [
    "原聊天页面已改变，请重新导出。",
    "The original chat page has changed. Please export again.",
    "元の会話ページが変わりました。再度出力してください。"
  ],
  [
    "当前对话已改变，请从需要导出的对话重新打开扩展。",
    "The conversation has changed. Open the extension again from the conversation you want to export.",
    "会話が変わりました。出力したい会話で拡張機能を開き直してください。"
  ],
  [
    "网络请求失败或超时，请检查网络后重试。",
    "The request failed or timed out. Check your connection and try again.",
    "通信に失敗したかタイムアウトしました。接続を確認してお試しください。"
  ],
  [
    "ChatGPT 暂时限流或服务繁忙，请稍后重试。",
    "ChatGPT is rate-limiting requests or is busy. Please try again later.",
    "ChatGPT がリクエストを制限しているか混雑しています。後でお試しください。"
  ],
  [
    "ChatGPT 要求等待较长时间，请稍后重新导出。",
    "ChatGPT requires a longer wait. Please export again later.",
    "ChatGPT による待機が必要です。しばらくしてから再度出力してください。"
  ],
  [
    "ChatGPT 登录已过期或请求被拦截。请回到原对话确认已登录并刷新，再重试。",
    "Your ChatGPT session expired or the request was blocked. Sign in, refresh the original conversation and try again.",
    "ChatGPT のログインが期限切れか、通信がブロックされました。元の会話でログインを確認して再読み込みしてください。"
  ],
  [
    "ChatGPT 请求失败（HTTP {1}）。",
    "ChatGPT request failed (HTTP {1}).",
    "ChatGPT へのリクエストに失敗しました（HTTP {1}）。"
  ],
  [
    "ChatGPT 返回了无法识别的数据，请刷新对话后重试。",
    "ChatGPT returned unrecognized data. Refresh the conversation and try again.",
    "ChatGPT のデータを認識できません。会話を再読み込みしてお試しください。"
  ],
  [
    "请先在原 ChatGPT 标签页登录，再重新导出。",
    "Sign in on the original ChatGPT tab, then export again.",
    "元の ChatGPT タブでログインしてから、再度出力してください。"
  ],
  [
    "无法读取此对话，请确认对话已经保存且你有访问权限。",
    "Unable to read this conversation. Check that it is saved and you have access.",
    "会話を読み取れません。保存済みでアクセス権があることを確認してください。"
  ],
  [
    "服务端返回的对话编号不一致，已停止导出。",
    "The server returned a different conversation ID. Export stopped.",
    "サーバーから異なる会話 ID が返されました。出力を停止しました。"
  ],
  [
    "服务端返回的消息树不完整，已停止导出。",
    "The server returned an incomplete message tree. Export stopped.",
    "不完全なメッセージツリーが返されました。出力を停止しました。"
  ],
  [
    "ChatGPT 对话数据格式已变化，无法确认消息是否完整。",
    "The ChatGPT data format has changed. Completeness could not be verified.",
    "ChatGPT のデータ形式が変わり、完全性を確認できません。"
  ],
  [
    "最新一页仍有后续消息，无法确认完整性，请刷新后重试。",
    "The latest page still has newer messages. Refresh and try again to verify completeness.",
    "最新ページに続きがあります。再読み込みしてお試しください。"
  ],
  [
    "分页数据缺失，已停止导出，避免保存不完整记录。",
    "Pagination data is missing. Export stopped to prevent an incomplete file.",
    "ページ情報が不足しています。不完全なファイルの保存を避けるため停止しました。"
  ],
  [
    "分页返回了其他对话，已停止导出。",
    "A page returned a different conversation. Export stopped.",
    "別の会話のページが返されました。出力を停止しました。"
  ],
  [
    "消息缺少编号，无法核对分页完整性。",
    "A message ID is missing. Pagination completeness could not be verified.",
    "メッセージ ID が不足し、全ページの完全性を確認できません。"
  ],
  [
    "导出过程中对话内容发生变化，请等待回复完成后重试。",
    "The conversation changed during export. Wait for the reply to finish and try again.",
    "出力中に会話が変わりました。返答が完了してからお試しください。"
  ],
  [
    "分页没有返回更早的消息，已停止导出。",
    "Pagination returned no earlier messages. Export stopped.",
    "前のメッセージが返されませんでした。出力を停止しました。"
  ],
  [
    "分页游标缺失或重复，已停止导出。",
    "A pagination cursor is missing or repeated. Export stopped.",
    "ページのカーソルが不足または重複しています。出力を停止しました。"
  ],
  [
    "更早的消息读取失败，已停止导出。",
    "Unable to fetch earlier messages. Export stopped.",
    "前のメッセージを取得できません。出力を停止しました。"
  ],
  [
    "消息树节点无效，已停止导出。",
    "Invalid message tree node. Export stopped.",
    "メッセージツリーのノードが無効です。出力を停止しました。"
  ],
  [
    "消息树缺少上文节点，无法确认完整性。",
    "A parent message is missing. Completeness could not be verified.",
    "親メッセージが不足し、完全性を確認できません。"
  ],
  [
    "消息树缺少后续节点，无法确认完整性。",
    "A child message is missing. Completeness could not be verified.",
    "後続メッセージが不足し、完全性を確認できません。"
  ],
  [
    "无法定位唯一的对话起点，已停止导出。",
    "Unable to identify a unique conversation root. Export stopped.",
    "会話の起点を特定できません。出力を停止しました。"
  ],
  [
    "消息树存在断开或循环节点，已停止导出。",
    "The message tree contains disconnected or cyclic nodes. Export stopped.",
    "メッセージツリーが分断または循環しています。出力を停止しました。"
  ],
  [
    "缺少当前分支的末尾节点，无法确认完整性。",
    "The current branch's final node is missing. Completeness could not be verified.",
    "現在の分岐の末尾がなく、完全性を確認できません。"
  ],
  [
    "对话仍有未读取的分页，已停止导出。",
    "The conversation still has unread pages. Export stopped.",
    "未取得のページがあります。出力を停止しました。"
  ],
  [
    "没有可识别的完整消息记录。",
    "No recognizable complete message history was found.",
    "認識可能な完全な会話履歴がありません。"
  ],
  [
    "消息编号缺失或重复，无法确认完整性。",
    "Message IDs are missing or repeated. Completeness could not be verified.",
    "メッセージ ID が不足または重複し、完全性を確認できません。"
  ],
  [
    "此对话没有可导出的消息。",
    "This conversation has no messages to export.",
    "出力できるメッセージがありません。"
  ],
  [
    "准备打开已有记录…",
    "Preparing fetched records…",
    "取得済みの記録を準備中…"
  ],
  [
    "取消",
    "Cancel",
    "キャンセル"
  ],
  [
    "使用刚才已读取的完整记录，可在此保存为其他格式。打开完成前请保持原聊天标签页开启。",
    "Save the fetched conversation in other formats here. Keep the original chat tab open until loading finishes.",
    "取得済みの会話を別の形式で保存できます。読み込みが終わるまで元の会話タブを開いたままにしてください。"
  ],
  [
    "原对话标签页已关闭或发生跳转，请回到原对话重新导出。",
    "The original chat tab was closed or navigated away. Export again from the conversation.",
    "元の会話タブが閉じられたか移動しました。会話から再度出力してください。"
  ],
  [
    "文件生成失败，请重试或选择其他格式。",
    "File generation failed. Try again or select another format.",
    "ファイルの生成に失敗しました。再試行するか別の形式を選んでください。"
  ],
  [
    "完整记录已读取，正在排版 {1} / {2} 条消息…",
    "History loaded. Formatting {1} / {2} messages…",
    "記録を読み込みました。{1} / {2} 件を整形中…"
  ],
  [
    "导出来源无效，请从 ChatGPT 对话页打开扩展。",
    "Invalid export source. Open the extension from a ChatGPT conversation.",
    "出力元が無効です。ChatGPT の会話から拡張機能を開いてください。"
  ],
  [
    "正在打开刚才读取的完整记录…",
    "Opening the complete history already fetched…",
    "取得済みの全履歴を読み込み中…"
  ],
  [
    "无法确认完整性，已停止导出。",
    "Completeness could not be verified. Export stopped.",
    "完全性を確認できません。出力を停止しました。"
  ],
  [
    "对话数据传输中断，请重新导出。",
    "Data transfer was interrupted. Please export again.",
    "データ転送が中断されました。再度出力してください。"
  ],
  [
    "正在打开已有记录 · {1}%",
    "Opening fetched records · {1}%",
    "取得済みの記録を読み込み中 · {1}%"
  ],
  [
    "完整读取完成 · {1} 条聊天消息 · 原始记录 {2} 条 / {3} 页{4}。",
    "Full history loaded · {1} chat messages · {2} raw records / {3} pages{4}.",
    "全履歴の読み込み完了 · 会話 {1} 件 · 原始記録 {2} 件 / {3} ページ{4}。"
  ],
  [
    "；JSON 另含其他分支，共 {1} 条",
    "; JSON also includes other branches, {1} records in total",
    "。JSON には他の分岐を含む計 {1} 件を保存"
  ],
  [
    "已取消打开转换窗口，可回到聊天页再次点击「转换其他格式」。",
    "Loading cancelled. Return to the chat and select “Convert to other formats” again.",
    "読み込みをキャンセルしました。会話に戻り「別の形式に変換」を選択してください。"
  ],
  [
    "无法读取原对话，请确认原标签页仍然打开。",
    "Unable to read the conversation. Check that the original tab is still open.",
    "会話を読み取れません。元のタブが開いているか確認してください。"
  ],
  [
    "语言设置",
    "Language settings",
    "言語設定"
  ],
  [
    "请选择插件语言",
    "Choose your extension language",
    "拡張機能の言語を選択"
  ],
  [
    "此选择会保存，之后可通过语言按钮修改。",
    "Your choice will be saved. You can change it with the language button.",
    "選択は保存されます。言語ボタンからいつでも変更できます。"
  ],
  [
    "语言设置保存失败，请重试。",
    "Unable to save your language. Please try again.",
    "言語設定を保存できません。もう一度お試しください。"
  ]
];
languageRows.push(
  ["PDF 已就绪", "PDF ready", "PDF の準備完了"],
  ["导出失败，请重试。", "Export failed. Please try again.", "出力に失敗しました。もう一度お試しください。"],
  ["点击「打印 / 保存 PDF」生成文件。", "Select “Print / Save PDF” to create the file.", "「印刷 / PDF に保存」を選んでファイルを作成してください。"]
);
languageRows.push(...[["正在检查登录状态…","Checking sign-in status…","ログイン状態を確認中…"],["已登录，等待 ChatGPT 返回对话数据 · {1} 秒","Signed in. Waiting for ChatGPT to return the conversation · {1} s","ログイン済み。ChatGPT の会話データを待機中 · {1} 秒"],["正在接收对话数据 · {1} / {2} MB","Receiving conversation data · {1} / {2} MB","会話データを受信中 · {1} / {2} MB"],["正在接收对话数据 · 已接收 {1} MB","Receiving conversation data · {1} MB received","会話データを受信中 · {1} MB 受信済み"],["数据已接收，正在解析完整记录…","Data received. Parsing the complete records…","データの受信完了。全記録を解析中…"],["已核对 {1} 条原始记录，继续检查完整性…","Verified {1} raw records. Checking completeness…","原始レコード {1} 件を照合済み。完全性を確認中…"],["耗时 {1} 秒","Elapsed time · {1} s","所要時間 · {1} 秒"],["耗时 {1} 秒 · 正在重试","Elapsed time · {1} s · Retrying","所要時間 · {1} 秒 · 再試行中"],["查看计数说明","How messages are counted","件数の内訳"],["用户 {1} 条 + 助手 {2} 条 = {3} 条聊天消息","{1} user messages + {2} assistant messages = {3} chat messages","ユーザー {1} 件 + アシスタント {2} 件 = 会話 {3} 件"],["当前分支原始记录 {1} 条 = 聊天消息 {2} 条 + 已过滤记录 {3} 条。过滤项包括工具执行、系统、隐藏及空记录。","Current branch: {1} raw records = {2} chat messages + {3} filtered records. Filters remove tool execution, system, hidden and empty records.","現在の分岐の原始記録 {1} 件 = 会話 {2} 件 + 除外記録 {3} 件。ツール実行・システム・非表示・空の記録を除外しています。"],["完整读取完成 · {1} 条聊天消息。","Full history loaded · {1} chat messages.","全履歴の読み込み完了 · 会話 {1} 件。"]]);
languageRows.push(...[["已读取 {1} 页 · 耗时 {2} 秒","Fetched {1} pages · Elapsed time {2} s","{1} ページ取得済み · 所要時間 {2} 秒"],["已读取 {1} 页 · 耗时 {2} 秒 · 正在重试","Fetched {1} pages · Elapsed time {2} s · Retrying","{1} ページ取得済み · 所要時間 {2} 秒 · 再試行中"]]);
languageRows.push(...[
  [
    "正在核对完整对话…",
    "Verifying the complete conversation…",
    "会話全体を確認中…"
  ],
  [
    "共 {1} 条消息",
    "{1} messages in total",
    "全 {1} 件のメッセージ"
  ],
  [
    "完整读取完成 · 共 {1} 条消息",
    "Full history loaded · {1} messages in total",
    "全履歴の読み込み完了 · 全 {1} 件のメッセージ"
  ]
]);
languageRows.push(...AI_LANGUAGE_ROWS);
const languageNames = {zh: "中文", en: "English", ja: "日本語"};
let currentLanguage = "zh";
const languageViews = new Set();
const languageTemplates = languageRows.filter(row => row[0].includes("{")).map(row => ({
  row,
  pattern: new RegExp("^" + row[0].split(/(\{\d+\})/g).map(part =>
    /^\{\d+\}$/.test(part) ? "([\\s\\S]*?)" : part.replace(/[.*+?^{}$()|[\]\\]/g, "\\$&")
  ).join("") + "$")
}));
const languageExact = new Map(languageRows.filter(row => !row[0].includes("{")).map(row => [row[0], row]));

function translate(text, language = currentLanguage) {
  const index = {zh: 0, en: 1, ja: 2}[language] || 0;
  if (!index || typeof text !== "string") return aiBrand(text);
  const exact = languageExact.get(text);
  if (exact) return aiBrand(exact[index]);
  for (const {row, pattern} of languageTemplates) {
    const match = text.match(pattern);
    if (match) return row[index].replace(/\{(\d+)\}/g, (_all, position) => translate(match[Number(position)], language));
  }
  return aiBrand(text);
}

function interfaceError(error, fallback) {
  const message = error?.message || "";
  return languageExact.has(message) || languageTemplates.some(({pattern}) => pattern.test(message)) ?
    message : fallback;
}

function applyLanguage(language) {
  currentLanguage = Object.hasOwn(languageNames, language) ? language : "zh";
  for (const refresh of languageViews) refresh();
}

async function saveLanguage(language) {
  if (!Object.hasOwn(languageNames, language)) return;
  await chrome.storage.local.set({language});
  applyLanguage(language);
}

function localizeInterface(root) {
  const originals = new WeakMap();
  function applyValue(node, name, value) {
    let record = originals.get(node);
    if (!record) { record = {}; originals.set(node, record); }
    const previous = record[name];
    const original = previous && value === previous.rendered ? previous.original : value;
    const rendered = translate(original);
    record[name] = {original, rendered};
    if (rendered !== value) {
      if (name === "text") node.nodeValue = rendered;
      else node.setAttribute(name, rendered);
    }
  }
  const observer = new MutationObserver(refresh);
  const options = {subtree: true, childList: true, characterData: true, attributes: true,
    attributeFilter: ["aria-label", "title", "placeholder"]};
  function refresh() {
    observer.disconnect();
    function visit(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        applyValue(node, "text", node.nodeValue);
        return;
      }
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.matches("script, style, #conversation, [data-no-translate]")) return;
        for (const name of ["aria-label", "title", "placeholder"]) {
          if (node.hasAttribute(name)) applyValue(node, name, node.getAttribute(name));
        }
      }
      for (const child of node.childNodes) visit(child);
    }
    visit(root);
    if (root.host) root.host.lang = currentLanguage === "zh" ? "zh-CN" : currentLanguage;
    else document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : currentLanguage;
    observer.observe(root, options);
  }
  languageViews.add(refresh);
  refresh();
  return () => { observer.disconnect(); languageViews.delete(refresh); };
}

function addLanguageControl(container, {firstRun = false, onReady = () => {}} = {}) {
  const control = document.createElement("div");
  control.className = "language-control";
  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "language-button";
  toggle.setAttribute("aria-label", "语言设置");
  const panel = document.createElement("section");
  panel.className = "language-panel";
  panel.hidden = true;
  panel.setAttribute("role", "group");
  panel.innerHTML = '<p class="language-title">语言设置</p><p class="language-note">' +
    '此选择会保存，之后可通过语言按钮修改。</p><div class="language-choices" data-no-translate></div>' +
    '<p class="language-error" role="status"></p>';
  const choices = panel.querySelector(".language-choices");
  for (const [language, name] of Object.entries(languageNames)) {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.language = language;
    button.textContent = name;
    button.lang = language === "zh" ? "zh-CN" : language;
    button.addEventListener("click", async () => {
      const buttons = [...choices.querySelectorAll("button")];
      buttons.forEach(item => { item.disabled = true; });
      try {
        await saveLanguage(language);
        panel.hidden = true;
        for (const selector of [".language-title", ".language-note"]) {
          panel.querySelector(selector).removeAttribute("data-no-translate");
        }
        panel.querySelector(".language-title").textContent = "语言设置";
        panel.querySelector(".language-note").textContent = "此选择会保存，之后可通过语言按钮修改。";
        toggle.setAttribute("aria-expanded", "false");
        container.removeAttribute("data-first-language");
        onReady();
      } catch {
        panel.querySelector(".language-error").textContent = "语言设置保存失败，请重试。";
      } finally {
        buttons.forEach(item => { item.disabled = false; });
      }
    });
    choices.append(button);
  }
  toggle.addEventListener("click", () => {
    panel.hidden = !panel.hidden;
    toggle.setAttribute("aria-expanded", String(!panel.hidden));
  });
  function refresh() {
    toggle.textContent = "◎ " + languageNames[currentLanguage];
    toggle.setAttribute("aria-expanded", String(!panel.hidden));
    for (const button of choices.querySelectorAll("button")) {
      button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
    }
  }
  languageViews.add(refresh);
  control.append(toggle, panel);
  container.prepend(control);
  const ready = chrome.storage.local.get("language").then(({language}) => {
    if (Object.hasOwn(languageNames, language)) {
      applyLanguage(language);
      onReady();
    } else if (firstRun) {
      container.setAttribute("data-first-language", "");
      panel.hidden = false;
      panel.querySelector(".language-title").textContent = "Language / 语言 / 言語";
      panel.querySelector(".language-title").setAttribute("data-no-translate", "");
      panel.querySelector(".language-note").textContent = "Choose once · 随时可修改 · 後で変更できます";
      panel.querySelector(".language-note").setAttribute("data-no-translate", "");
      refresh();
    } else {
      applyLanguage("en");
      onReady();
    }
    refresh();
  }).catch(() => {
    container.setAttribute("data-first-language", "");
    panel.hidden = false;
    panel.querySelector(".language-error").textContent = "语言设置保存失败，请重试。";
    refresh();
  });
  refresh();
  return {ready, dispose: () => { languageViews.delete(refresh); control.remove(); }};
}

function languageStorageChanged(changes, area) {
  if (area === "local" && changes.language?.newValue) applyLanguage(changes.language.newValue);
}
chrome.storage.onChanged.addListener(languageStorageChanged);
