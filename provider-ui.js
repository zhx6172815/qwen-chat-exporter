const AI_LANGUAGE_ROWS = [
 ["{1} 聊天记录导出器", "{1} Chat Exporter", "{1} 会話エクスポーター"],
 ["实验适配 · 需真实账号核验完整性", "Experimental adapter · Real-session completeness testing pending", "実験的対応 · 実アカウントでの完全性検証待ち"],
 ["仅在本地处理 · 无水印和次数限制", "Processed locally · No watermark or export limit", "ローカル処理 · 透かし・回数制限なし"],
  ["providerLocation", "The conversation changed. Reopen the extension from the saved chat.", "会話が変わりました。保存済みの会話で拡張機能を開き直してください。"],
  ["providerLogin", "Sign in on the original chat page, refresh it, and try again.", "元の会話ページでログインしてから再読み込みしてください。"],
  ["providerUnavailable", "This history interface is unavailable. This platform needs another compatibility update.", "履歴インターフェースを利用できません。このサービスへの対応更新が必要です。"],
  ["providerSchema", "The platform returned an unrecognized history format. No partial file was saved.", "履歴形式を認識できません。不完全なファイルは保存していません。"],
  ["providerIncomplete", "The beginning or end of this history could not be verified. Export stopped.", "履歴の先頭または末尾を確認できないため、出力を停止しました。"],
  ["providerBranch", "Some ancestors or the selected branch are missing. Export stopped.", "会話の上文または選択中の分岐が不足しているため、出力を停止しました。"],
  ["providerCursor", "The history cursor is missing or repeated. Export stopped.", "履歴のカーソルがないか重複しているため、出力を停止しました。"],
  ["providerChanged", "This conversation changed during export. Wait for the reply to finish and retry.", "出力中に会話が変更されました。返答の完了後に再実行してください。"],
  ["providerStalled", "No earlier messages were returned. Export stopped.", "以前のメッセージを取得できないため、出力を停止しました。"],
  ["providerRefresh", "Open the saved conversation again and refresh its page so its history request can be located.", "保存済みの会話を開き、履歴の通信を確認できるようページを再読み込みしてください。"],
  ["providerBusy", "The platform is busy or rate limiting requests. Try again later.", "サービスが混雑中か通信を制限しています。後でお試しください。"],
  ["providerRequest", "History request failed or timed out. Check your connection and retry.", "履歴の取得に失敗またはタイムアウトしました。接続を確認してください。"],
  ["providerUnsupported", "Open a saved conversation on a platform supported by this product.", "この製品が対応するサービスの保存済み会話を開いてください。"]
];
const AI_ERROR_ZH = {
  providerLocation: "当前对话已改变，请从已保存的对话重新打开扩展。",
  providerLogin: "请在原对话页登录并刷新，然后重新导出。",
  providerUnavailable: "此平台的历史接口暂不可用，需要继续适配。",
  providerSchema: "平台返回的历史格式尚未识别，未保存不完整文件。",
  providerIncomplete: "无法核实历史的起点或终点，已停止导出。",
  providerBranch: "缺少上文或当前分支，已停止导出。",
  providerCursor: "分页游标缺失或重复，已停止导出。",
  providerChanged: "导出期间对话发生变化，请等待回复结束后重试。",
  providerStalled: "未能读取更早的消息，已停止导出。",
  providerRefresh: "请重新打开这段已保存的对话并刷新，以定位历史数据请求。",
  providerBusy: "平台繁忙或正在限制请求，请稍后重试。",
  providerRequest: "历史请求失败或超时，请检查网络后重试。",
  providerUnsupported: "请先打开本产品支持平台的一段已保存对话。",
};
for (const row of AI_LANGUAGE_ROWS) if (AI_ERROR_ZH[row[0]]) row[0] = AI_ERROR_ZH[row[0]];
function aiBrand(text) {
  if (typeof text !== "string") return text;
  const source = detectConversation(location.href);
  const product = globalThis.AI_EXPORTER_BUILD?.product || "all";
  const name = source?.name || (product === "all" ? "AI" : providerTitle(product));
  return text.replaceAll("ChatGPT", name);
}

