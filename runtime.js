(()=>{
;
if(globalThis.__gptChatExporter?.version==="0.1.0"&&globalThis.__gptChatExporter?.product==="qwen")return;
;
globalThis.__gptChatExporter?.dispose();
;
const modalStyles=":host { all: initial; color-scheme: light; font: 14px/1.6 \"Segoe UI\", \"Microsoft YaHei\", sans-serif; }\ndialog {\n  width: min(440px, calc(100vw - 40px)); box-sizing: border-box;\n  max-height: calc(100dvh - 32px); overflow: auto;\n  padding: 28px; border: 1px solid #d7e5e0; border-radius: 18px;\n  background: #fff; color: #173d35; font: inherit;\n}\ndialog::backdrop { background: rgba(5, 18, 16, .48); }\n.heading { display: flex; align-items: center; gap: 12px; padding-right: 18px; }\n.symbol {\n  display: grid; place-items: center; width: 42px; height: 42px; border-radius: 12px;\n  background: #e4f5ee; color: #145d50; font-size: 23px; flex: none;\n}\nh2 { margin: 0; font-size: 21px; line-height: 1.3; }\np { margin: 4px 0 0; color: #48675e; }\n.close {\n  position: absolute; top: 12px; right: 12px; border: 0; padding: 2px 8px;\n  min-height: 30px; font-size: 22px; background: transparent; color: #48675e;\n}\nprogress { width: 100%; height: 8px; margin: 24px 0 8px; accent-color: #168565; }\nprogress::-webkit-progress-bar { background: #e9f0ed; border-radius: 8px; }\nprogress::-webkit-progress-value { background: #168565; border-radius: 8px; }\n.status { min-height: 46px; margin: 12px 0; overflow-wrap: anywhere; }\n.meta { font-size: 12px; color: #5c746d; }\n.actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }\nbutton {\n  min-height: 40px; padding: 8px 13px; border: 1px solid #b9cec6; border-radius: 8px;\n  background: white; color: #245146; font: inherit; cursor: pointer;\n}\nbutton.primary { background: #145d50; color: white; border-color: #145d50; }\nbutton:hover { filter: brightness(.96); }\nbutton:focus-visible { outline: 2px solid #2869b5; outline-offset: 2px; }\nbutton:disabled { opacity: .5; cursor: default; }\n.error { color: #ae3027; }\n[hidden] { display: none !important; }";
;
const printStyles=":root {\n  color-scheme: light;\n  color: #172927;\n  font: 15px/1.7 \"Segoe UI\", \"Microsoft YaHei\", sans-serif;\n  background: #edf3f1;\n}\n\nbody { margin: 0; }\n.toolbar {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px max(20px, calc((100vw - 840px) / 2));\n  border-bottom: 1px solid #c4d9d3;\n  background: #f7faf9;\n}\n\n.toolbar strong, .toolbar span { display: block; }\n.toolbar span { color: #486360; font-size: 12px; }\n.actions { display: flex; flex-wrap: wrap; gap: 6px; }\n.hint { max-width: 840px; margin: 18px auto; padding-inline: 20px; font-size: 13px; }\n[hidden] { display: none !important; }\nbutton {\n  background: #145d50;\n  color: #fff;\n  padding: 8px 14px;\n  border: 1px solid #145d50;\n  border-radius: 8px;\n  font: inherit;\n  cursor: pointer;\n}\nbutton:focus-visible { outline: 2px solid #215aab; outline-offset: 2px; }\nbutton:disabled { opacity: .55; cursor: default; }\n\n.paper {\n  box-sizing: border-box;\n  max-width: 840px;\n  margin: 26px auto;\n  padding: 38px clamp(18px, 5vw, 56px);\n  background: white;\n  border: 1px solid #d2e0dc;\n  overflow-wrap: anywhere;\n}\n.paper > h1 { font-size: 27px; line-height: 1.3; margin: 0 0 7px; }\n.source { margin: 0 0 24px; font-size: 11px; color: #486360; }\n.message { border-top: 1px solid #a8c1ba; margin: 20px 0 0; padding: 12px 0 0; }\n.message > h2 { font-size: 13px; color: #155b50; margin: 0 0 6px; }\n.message-body > :first-child, .message-body p:first-child { margin-top: 0; }\n.message-body > :last-child, .message-body p:last-child { margin-bottom: 0; }\npre, code, .formula { font-family: Consolas, \"Microsoft YaHei\", monospace; }\npre { white-space: pre-wrap; padding: 8px 10px; border: 1px solid #c4d9d3; }\na { color: #145d50; }\nblockquote { margin-inline: 0; padding-inline: 12px; border-inline-start: 3px solid #a8c1ba; }\ntable { width: 100%; border-collapse: collapse; }\nth, td { padding: 4px 8px; text-align: start; border: 1px solid #a8c1ba; }\n\n@page { size: A4; margin: 15mm; }\n@media print {\n  :root { background: white; font-size: 10.5pt; }\n  .toolbar, .hint { display: none; }\n  .paper { max-width: none; margin: 0; padding: 0; border: 0; }\n  .paper > h1 { font-size: 19pt; }\n  h1, h2, h3, h4, h5, h6 { break-after: avoid; }\n  tr { break-inside: avoid; }\n}";
;
const languageStyles=".language-control { margin: 0 0 14px; font: 13px/1.5 \"Segoe UI\", \"Microsoft YaHei\", \"Yu Gothic\", sans-serif; color: #173d35; }\n.language-button { min-height: 32px; padding: 5px 10px; border: 1px solid #b9cec6; border-radius: 8px; background: #fff; color: #245146; font: inherit; cursor: pointer; }\n.language-panel { padding: 14px; margin: 8px 0; background: #f2f8f5; border: 1px solid #c7dcd3; border-radius: 10px; max-width: 440px; }\n.language-panel p { margin: 0 0 8px; }\n.language-title { font-weight: 600; }\n.language-note { font-size: 12px; color: #48675e; }\n.language-error { color: #ae3027; font-size: 12px; }\n.language-choices { display: flex; flex-wrap: wrap; gap: 6px; }\n.language-choices button { min-height: 36px; padding: 6px 12px; border: 1px solid #b9cec6; border-radius: 8px; background: white; color: #245146; font: inherit; cursor: pointer; }\n.language-choices button[aria-pressed=\"true\"] { border-color: #145d50; background: #e1f3eb; }\n.language-control button:focus-visible { outline: 2px solid #2869b5; outline-offset: 2px; }\n.language-control [hidden], [hidden] { display: none !important; }\nbody > .language-control { padding: 12px 20px 0; margin-bottom: 0; }\nbody[data-first-language] > header, body[data-first-language] > main, body[data-first-language] > footer { display: none; }\nbody[data-first-language] { min-height: 205px; }\nbody[data-first-language] .language-button { display: none; }\n@media print { .language-control { display: none !important; } }";
;
globalThis.AI_EXPORTER_BUILD=Object.freeze({"product":"qwen","edition":"community","version":"0.1.0"});
;
const AI_PROVIDERS=Object.freeze({"qwen":{name:"Qwen",hosts:["chat.qwen.ai"],path:/^\/c\/([\w-]+)(?:\/|$)/,status:"experimental"}});
function detectConversation(input, restrict = globalThis.AI_EXPORTER_BUILD?.product || "all") {
  let url;
  try { url = new URL(input); } catch { return null; }
  if (url.protocol !== "https:" || url.port || url.username || url.password) return null;
  for (const [provider, config] of Object.entries(AI_PROVIDERS)) {
    if (restrict !== "all" && restrict !== provider && !(restrict === "qwen" && provider === "qianwen")) continue;
    if (!config.hosts.includes(url.hostname)) continue;
    const id = url.pathname.match(config.path)?.[1];
    if (id && id.length <= 160) return {provider, id, origin: url.origin, url: url.origin + url.pathname, name: config.name, status: config.status};
  }
  return null;
}

function providerTitle(provider) {
  return AI_PROVIDERS[provider]?.name || "AI";
}
;
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
;
/**
 * marked v18.1.3 - a markdown parser
 * Copyright (c) 2018-2026, MarkedJS. (MIT License)
 * Copyright (c) 2011-2018, Christopher Jeffrey. (MIT License)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */
(function(g,f){if(typeof exports=="object"&&typeof module<"u"){module.exports=f()}else if("function"==typeof define && define.amd){define("marked",f)}else {g["marked"]=f()}}(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : this,function(){var exports={};var __exports=exports;var module={exports};
"use strict";var se=Object.defineProperty;var He=Object.getOwnPropertyDescriptor;var je=Object.getOwnPropertyNames;var Ge=Object.prototype.hasOwnProperty;var Ne=(a,e)=>{for(var t in e)se(a,t,{get:e[t],enumerable:!0})},Fe=(a,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of je(e))!Ge.call(a,s)&&s!==t&&se(a,s,{get:()=>e[s],enumerable:!(n=He(e,s))||n.enumerable});return a};var Qe=a=>Fe(se({},"__esModule",{value:!0}),a);var Jt={};Ne(Jt,{Hooks:()=>L,Lexer:()=>O,Marked:()=>Q,Parser:()=>w,Renderer:()=>$,TextRenderer:()=>A,Tokenizer:()=>_,defaults:()=>P,getDefaults:()=>D,lexer:()=>Vt,marked:()=>m,options:()=>Ft,parse:()=>Kt,parseInline:()=>Wt,parser:()=>Xt,setOptions:()=>Qt,use:()=>ve,walkTokens:()=>Ut});module.exports=Qe(Jt);function D(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var P=D();function ie(a){P=a}var q={exec:()=>null};function B(a){let e=[];return t=>{let n=Math.max(0,Math.min(3,t-1)),s=e[n];return s||(s=a(n),e[n]=s),s}}function c(a,e=""){let t=typeof a=="string"?a:a.source,n={replace:(s,r)=>{let o=typeof r=="string"?r:r.source;return o=o.replace(T.caret,"$1"),t=t.replace(s,o),n},getRegex:()=>new RegExp(t,e)};return n}var Oe=((a="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+a)}catch{return!1}})(),T={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+)[ \t]*)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,blockquoteMarkerWhitespace:/^( {0,3}>)([ \t]+)/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\][ \t]+\S/,listReplaceTask:/^\[[ xX]\][ \t]+/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,numericCharacterReferenceOrAmpersand:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:a=>new RegExp(`^( {0,3}${a})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:B(a=>new RegExp(`^ {0,${a}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:B(a=>new RegExp(`^ {0,${a}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:B(a=>new RegExp(`^ {0,${a}}(?:\`\`\`|~~~)`)),headingBeginRegex:B(a=>new RegExp(`^ {0,${a}}#{1,6}(?:\\s|$)`)),pedanticHeadingBeginRegex:B(a=>new RegExp(`^ {0,${a}}#`)),htmlBeginRegex:B(a=>new RegExp(`^ {0,${a}}(?:</?(?:${X})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`,"i")),blockquoteBeginRegex:B(a=>new RegExp(`^ {0,${a}}>`))},Ue=/^(?:[ \t]*(?:\n|$))+/,We=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Ke=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}(?:(?=`)\1`*|(?=~)\1~*) *(?=\n|$)|$)/,K=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Xe=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ae=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,we=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+)[ \t]*(?:\n+|$)/,Pe=c(we).replace(/bull/g,ae).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Ve=c(we).replace(/bull/g,ae).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),le=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,Je=/^[^\n]+/,ue=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\\n]|\n(?![ \t]*\n))+/,Ye=c(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ue).replace("title",/(?:"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\\n]|\n(?!\n))*'|\((?:\\[\s\S]|[^()\\])*\))/).getRegex(),et=c(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,ae).getRegex(),X="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",pe=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,tt=c("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?:[ \\t]+|\\n|/?>|$)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",pe).replace("tag",X).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Se=a=>c(le).replace("hr",K).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",a).replace("html"," {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag",X).getRegex(),nt=Se(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),rt=Se(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),st=c(/^( {0,3}> ?(?:(?![ \t]*(?:\n|$))(paragraph)|[^\n]*)(?:\n|$))+/).replace("paragraph",rt).getRegex(),ce={blockquote:st,code:We,def:Ye,fences:Ke,heading:Xe,hr:K,html:tt,lheading:Pe,list:et,newline:Ue,paragraph:nt,table:q,text:Je},be=c("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",K).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html"," {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag",X).getRegex(),it={...ce,lheading:Ve,table:be,paragraph:c(le).replace("hr",K).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",be).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html"," {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag",X).getRegex()},ot={...ce,html:c(`^ *(?:comment(?: *\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1>(?: *\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?>(?: *\\n{2,}|\\s*$))`).replace("comment",pe).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:q,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:c(le).replace("hr",K).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Pe).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},at=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,lt=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ye=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,ut=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,C=/[\p{P}\p{S}]/u,j=/[\s\p{P}\p{S}]/u,V=/[^\s\p{P}\p{S}]/u,pt=c(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,j).getRegex(),ct=/[\p{Pi}\p{Ps}"']/u,_e=/(?!~)[\p{P}\p{S}]/u,ht=/(?!~)[\s\p{P}\p{S}]/u,dt=/(?:[^\s\p{P}\p{S}]|~)/u,gt=c(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Oe?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),$e=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,kt=c($e,"u").replace(/punct/g,C).getRegex(),ft=c($e,"u").replace(/punct/g,_e).getRegex(),mt=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,xt=c(mt,"u").replace(/openQuote/g,ct).replace(/punct/g,C).getRegex(),Le="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",bt=c(Le,"gu").replace(/notPunctSpace/g,V).replace(/punctSpace/g,j).replace(/punct/g,C).getRegex(),Rt=c(Le,"gu").replace(/notPunctSpace/g,dt).replace(/punctSpace/g,ht).replace(/punct/g,_e).getRegex(),Tt="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",Ot=c(Tt,"gu").replace(/notPunctSpace/g,V).replace(/punctSpace/g,j).replace(/punct/g,C).getRegex(),wt=c("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,V).replace(/punctSpace/g,j).replace(/punct/g,C).getRegex(),Pt="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",St=c(Pt,"gu").replace(/notPunctSpace/g,V).replace(/punctSpace/g,j).replace(/punct/g,C).getRegex(),yt=c(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,C).getRegex(),_t="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",$t=c(_t,"gu").replace(/notPunctSpace/g,V).replace(/punctSpace/g,j).replace(/punct/g,C).getRegex(),Lt=c(/\\(punct)/,"gu").replace(/punct/g,C).getRegex(),Ct=c(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/,"gu").replace(/punct/g,C).getRegex(),It=c(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),At=c(pe).replace("(?:-->|$)","-->").getRegex(),Et=c("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",At).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ce=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,re=c(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets",Ce).getRegex(),zt=c(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace("label",re).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|\((?:\\[\s\S]|[^)\\])*\)/).getRegex(),Mt=c(/^!?\[(label)\]\[(ref)\]/).replace("label",re).replace("ref",ue).getRegex(),Dt=c(/^!?\[(ref)\](?:\[\])?/).replace("ref",ue).getRegex(),Re=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,Bt=c(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets",Ce).getRegex(),qt=c("reflink|nolink(?!\\()","g").replace("reflink",c(/^!?\[(label)\]\[(ref)\]/).replace("label",Bt).replace("ref",Re).getRegex()).replace("nolink",c(/^!?\[(ref)\](?:\[\])?/).replace("ref",Re).getRegex()).getRegex(),Te=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,vt=/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/,Zt=c(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,vt).getRegex(),he={_backpedal:q,anyPunctuation:Lt,anyPunctuationOutsideCode:Ct,autolink:It,blockSkip:gt,br:ye,code:lt,del:q,delLDelim:q,delRDelim:q,emStrongLDelim:kt,emStrongRDelimAst:bt,emStrongRDelimUnd:wt,escape:at,link:zt,nolink:Dt,punctuation:pt,reflink:Mt,reflinkSearch:qt,tag:Et,text:ut,url:q},Ht={...he,emStrongLDelim:xt,emStrongRDelimAst:Ot,emStrongRDelimUnd:St,link:c(/^!?\[(label)\]\((.*?)\)/).replace("label",re).getRegex(),reflink:c(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",re).getRegex()},oe={...he,emStrongRDelimAst:Rt,emStrongLDelim:ft,delLDelim:yt,delRDelim:$t,url:c(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol",Zt).replace("protocol",Te).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:c(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|wwwStart|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol",Te).replace(/emailProtocol/g,/(?:mailto|xmpp):/).replace("wwwStart",Oe?"(?<![^\\s*_~(])www\\.":"www\\.").getRegex()},jt={...oe,br:c(ye).replace("{2,}","*").getRegex(),text:c(oe.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},J={normal:ce,gfm:it,pedantic:ot},G={normal:he,gfm:oe,breaks:jt,pedantic:Ht};var Gt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ie=a=>Gt[a];function S(a,e){if(e){if(T.escapeTest.test(a))return a.replace(T.escapeReplace,Ie)}else if(T.escapeTestNoEncode.test(a))return a.replace(T.escapeReplaceNoEncode,Ie);return a}function Ae(a){return T.numericCharacterReference.test(a)?a.replace(T.numericCharacterReferenceOrAmpersand,(e,t,n)=>{if(t===void 0&&n===void 0)return"&amp;";let s=t===void 0?Number.parseInt(n,16):Number.parseInt(t,10);return s===0||s>1114111||s>=55296&&s<=57343?"\uFFFD":s===38?"&amp;":String.fromCodePoint(s)}):a}function de(a){try{a=encodeURI(a).replace(T.percentDecode,"%")}catch{return null}return a}function ge(a,e){let t=a.replace(T.findPipe,(r,o,i)=>{let l=!1,p=o;for(;--p>=0&&i[p]==="\\";)l=!l;return l?"|":" |"}),n=t.split(T.splitPipe),s=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(T.slashPipe,"|");return n}function I(a,e,t){let n=a.length;if(n===0)return"";let s=0;for(;s<n;){let r=a.charAt(n-s-1);if(r===e&&!t)s++;else if(r!==e&&t)s++;else break}return a.slice(0,n-s)}function ke(a){let e=a.split(`
`),t=e.length-1;for(;t>=0&&T.blankLine.test(e[t]);)t--;return e.length-t<=2?a:e.slice(0,t+1).join(`
`)}function F(a){return a.trim().replace(T.multipleSpaceGlobal," ").toLowerCase().toUpperCase().toLowerCase()}function fe(a,e){if(a.indexOf(e[0])===-1&&a.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<a.length;n++)if(a[n]==="\\")n++;else if(a[n]===e[0])t++;else if(a[n]===e[1]&&(t--,t<0))return n;return t>0?-2:-1}var N=new WeakMap;function me(a){let e={"*":-1,_:-1},t=-1,n=a.length;for(let s=0;s<n;s++){let r=a[s];if(r!=="*"&&r!=="_"&&r!=="~")continue;let o=s===0?`
`:a[s-1],i=s+1;for(;i<n&&a[i]===r;)i++;o!==" "&&o!=="	"&&o!==`
`&&o!=="\r"&&o!=="\f"&&(r==="~"?t=s:e[r]=s),s=i-1}return{maskedSrc:a,lastPossibleEmStrongCloserIndex:e,lastPossibleDelCloserIndex:t}}function Ee(a,e){let t=me(e),n=N.get(a);n?n.push(t):N.set(a,[t])}function ze(a){let e=N.get(a);e&&(e.pop(),e.length===0&&N.delete(a))}function Me(a,e,t){let n=N.get(a)?.at(-1);return n&&n.maskedSrc===e?n.lastPossibleEmStrongCloserIndex[t]:me(e).lastPossibleEmStrongCloserIndex[t]}function De(a,e){let t=N.get(a)?.at(-1);return t&&t.maskedSrc===e?t.lastPossibleDelCloserIndex:me(e).lastPossibleDelCloserIndex}function Y(a,e=0){let t=e,n="";for(let s of a)if(s==="	"){let r=4-t%4;n+=" ".repeat(r),t+=r}else n+=s,t++;return n}function Be(a,e,t,n,s){let r=e.href,o=e.title||null,i=a[1].replace(s.other.outputLinkReplace,"$1"),l=a[0].charAt(0)==="!",p=n.state.inLink,h=n.state.linkEmitted,u=n.state.inRawBlock;n.state.inLink=!0,n.state.linkEmitted=!1;let d=n.inlineTokens(i),k=n.state.linkEmitted;if(n.state.linkEmitted=h,n.state.inLink=p,!l){if(k){n.state.inRawBlock=u;return}n.state.linkEmitted=!0}return{type:l?"image":"link",raw:t,href:r,title:o,text:i,tokens:d}}function Nt(a,e,t){let n=a.match(t.other.indentCodeCompensation);if(n===null)return e;let s=n[1];return e.split(`
`).map(r=>{let o=r.match(t.other.beginningSpace);if(o===null)return r;let[i]=o;return r.slice(Math.min(i.length,s.length))}).join(`
`)}function qe(a,e,t,n){if(!e.includes("<"))return!1;for(let s=0;s<e.length;s++){if(e[s]==="\\"){s++;continue}if(e[s]==="`"){let i=n.inline.code.exec(e.slice(s));if(i){s+=i[0].length-1;continue}}if(e[s]!=="<")continue;let r=a.slice(t+s),o=n.inline.tag.exec(r)||n.inline.autolink.exec(r);if(o){if(o[0].length>e.length-s)return!0;s+=o[0].length-1}}return!1}var _=class{options;rules;lexer;constructor(e){this.options=e||P}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=this.options.pedantic?t[0]:ke(t[0]),s=n.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n,codeBlockStyle:"indented",text:s}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],s=Nt(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let s=I(n,"#");(this.options.pedantic||!s||this.rules.other.endingSpaceTabChar.test(s))&&(n=s.trim())}return{type:"heading",raw:I(t[0],`
`),depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:I(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=I(t[0],`
`).split(`
`),s="",r="",o=[];for(;n.length>0;){let i=!1,l=[],p;for(p=0;p<n.length;p++)if(this.rules.other.blockquoteStart.test(n[p]))l.push(n[p]),i=!0;else if(!i)l.push(n[p]);else break;n=n.slice(p);let h=l.join(`
`),u=h.replace(this.rules.other.blockquoteMarkerWhitespace,(g,b,x)=>b+Y(x,b.length)).replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");s=s?`${s}
${h}`:h,r=r?`${r}
${u}`:u;let d=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,o,!0),this.lexer.state.top=d,n.length===0)break;let k=o.at(-1);if(k?.type==="code"||k?.type==="heading"||k?.type==="hr"||k?.type==="html"||k?.type==="table")break;if(k?.type==="blockquote"){let g=k,b=n.join(`
`),x=g.raw+`
`+b.replace(this.rules.other.blockquoteSetextReplace2,""),f=this.blockquote(x);o[o.length-1]=f;let y=x.substring(f.raw.length).replace(/^\n/,""),R=y?y.split(`
`).length:0,E=R?n.slice(0,-R):n;if(E.length>0&&(s=`${s}
${E.join(`
`)}`),r=r.substring(0,r.length-g.text.length)+f.text,n=n.slice(E.length),n.length>0&&this.rules.other.blockquoteStart.test(n[0]))continue;break}else if(k?.type==="list"){let g=k,b=g.raw+`
`+n.join(`
`),x=this.list(b);o[o.length-1]=x;let f=x.raw.length>g.raw.length?b.slice(g.raw.length+1,x.raw.length).split(`
`).length:0;if(f>0){let y=n.slice(0,f).join(`
`);s=`${s}
${y}`,r=`${r}
${y}`}n=n.slice(f);continue}}return{type:"blockquote",raw:s,tokens:o,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=e,s=()=>n.length-e.length,r=t[1].trim(),o=r.length>1,i={type:"list",raw:"",ordered:o,start:o?+r.slice(0,-1):"",loose:!1,items:[]};r=o?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=o?r:"[*+-]");let l=this.rules.other.listItemRegex(r),p=!1;for(;e;){let u=!1,d="";if(!(t=l.exec(e))||this.rules.block.hr.test(e))break;let k=s();e=e.substring(t[0].length);let g=t[2].split(`
`,1)[0],b=t[1].length,x=this.options.pedantic?Y(g,b):g.replace(this.rules.other.leadingSpaceTab,Z=>Y(Z,b)),f=e.split(`
`,1)[0],y=!x.trim(),R=0;if(this.options.pedantic?(R=2,d=x.trimStart()):y?R=b+1:(R=x.search(this.rules.other.nonSpaceChar),R=R>4?1:R,d=x.slice(R),R+=b),y&&this.rules.other.blankLine.test(f)&&(e=e.substring(f.length+1),u=!0),!u){let Z=this.rules.other.nextBulletRegex(R),U=this.rules.other.hrRegex(R),ee=this.rules.other.fencesBeginRegex(R),te=this.options.pedantic?this.rules.other.pedanticHeadingBeginRegex(R):this.rules.other.headingBeginRegex(R),M=this.rules.other.htmlBeginRegex(R),ne=this.rules.other.blockquoteBeginRegex(R);for(;e;){let W=e.split(`
`,1)[0],H;if(f=W,this.options.pedantic?(f=f.replace(this.rules.other.listReplaceNesting,"  "),H=f):H=f.replace(this.rules.other.leadingSpaceTab,xe=>Y(xe)),ee.test(f)||te.test(f)||M.test(f)||ne.test(f)||Z.test(f)||U.test(f))break;if(H.search(this.rules.other.nonSpaceChar)>=R||!f.trim())d+=`
`+H.slice(R);else{if(y||x.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||ee.test(x)||te.test(x)||M.test(x)||U.test(x))break;let Ze=!this.options.pedantic&&/^ {0,3}(?:=+|-+) *$/.test(f)&&this.rules.block.lheading.test(`${x}
${f}`)?`    ${H.replace(/^ {0,3}/,"")}`:f;d+=`
`+Ze}y=!f.trim(),e=e.substring(W.length+1),x=H.slice(R)}}let E=n.slice(k,s());i.loose||(p?i.loose=!0:this.rules.other.doubleBlankLine.test(E)&&(p=!0)),i.items.push({type:"list_item",raw:E,task:!!this.options.gfm&&this.rules.other.listIsTask.test(d),loose:!1,text:d,tokens:[]})}let h=i.items.at(-1);if(h)h.raw=h.raw.trimEnd(),h.text=h.text.trimEnd();else return;i.raw=n.slice(0,s()).trimEnd();for(let u of i.items)if(this.lexer.state.top=!1,u.tokens=this.lexer.blockTokens(u.text,[]),!i.loose){let d=u.tokens.filter(g=>g.type==="space"),k=d.length>0&&d.some(g=>this.rules.other.anyLine.test(g.raw));i.loose=k}for(let u of i.items){let d=u.tokens[0];if(u.task&&(d?.type==="text"||d?.type==="paragraph")){u.text=u.text.replace(this.rules.other.listReplaceTask,""),d.raw=d.raw.replace(this.rules.other.listReplaceTask,""),d.text=d.text.replace(this.rules.other.listReplaceTask,"");for(let g=this.lexer.inlineQueue.length-1;g>=0;g--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[g].src)){this.lexer.inlineQueue[g].src=this.lexer.inlineQueue[g].src.replace(this.rules.other.listReplaceTask,"");break}let k=this.rules.other.listTaskCheckbox.exec(u.raw);if(k){let g={type:"checkbox",raw:k[0]+" ",checked:k[0]!=="[ ]"};u.checked=g.checked,i.loose?u.tokens[0]&&["paragraph","text"].includes(u.tokens[0].type)&&"tokens"in u.tokens[0]&&u.tokens[0].tokens?(u.tokens[0].raw=g.raw+u.tokens[0].raw,u.tokens[0].text=g.raw+u.tokens[0].text,u.tokens[0].tokens.unshift(g)):u.tokens.unshift({type:"paragraph",raw:g.raw,text:g.raw,tokens:[g]}):u.tokens.unshift(g)}}else u.task&&(u.task=!1)}if(i.loose)for(let u of i.items){u.loose=!0;for(let d of u.tokens)d.type==="text"&&(d.type="paragraph")}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let n=ke(t[0]);return{type:"html",block:!0,raw:n,pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:n}}}def(e){let t=this.rules.block.def.exec(e);if(t){if(!this.rules.other.startAngleBracket.test(t[2])&&fe(t[2],"()")!==-1)return;let n=F(t[1]),s=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:I(t[0],`
`),href:s,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=ge(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],o={type:"table",raw:I(t[0],`
`),header:[],align:[],rows:[]};if(n.length===s.length){for(let i of s)this.rules.other.tableAlignRight.test(i)?o.align.push("right"):this.rules.other.tableAlignCenter.test(i)?o.align.push("center"):this.rules.other.tableAlignLeft.test(i)?o.align.push("left"):o.align.push(null);for(let i=0;i<n.length;i++)o.header.push({text:n[i],tokens:this.lexer.inline(n[i]),header:!0,align:o.align[i]});for(let i of r)o.rows.push(ge(i,o.header.length).map((l,p)=>({text:l,tokens:this.lexer.inline(l),header:!1,align:o.align[p]})));return o}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let n=t[1].trim();return{type:"heading",raw:I(t[0],`
`),depth:t[2].charAt(0)==="="?1:2,text:n,tokens:this.lexer.inline(n)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){if(this.lexer.state.linkParenPossible===!1)return;let t=this.rules.inline.link.exec(e);if(t){let n=t[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&qe(e,t[1],n,this.rules))return;let s=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(s)){if(!this.rules.other.endAngleBracket.test(s))return;let l=I(s.slice(0,-1),"\\");if((s.length-l.length)%2===0)return}else{let l=fe(t[2],"()");if(l===-2)return;if(l>-1){let h=(t[0].indexOf("!")===0?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,h).trim(),t[3]=""}}let r=I(t[0].slice(0,-1),"\\");if((t[0].length-r.length)%2===0)return;let o=t[2],i="";if(this.options.pedantic){let l=this.rules.other.pedanticHrefTitle.exec(o);l&&(o=l[1],i=l[3])}else i=t[3]?t[3].slice(1,-1):"";return o=o.trim(),this.rules.other.startAngleBracket.test(o)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(s)?o=o.slice(1):o=o.slice(1,-1)),Be(t,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let s=n[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&qe(e,n[1],s,this.rules))return;let r=t[F(n[2]||n[1])];if(!r){let o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return Be(n,r,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||!s[1]&&!s[2]&&!s[3]&&!s[4])return;let r=s[0][0],o=n===r,i=t.length-e.length,l=i;for(;!this.options.pedantic&&l>0&&t[l-1]===r;)l--;let p=[...t.slice(Math.max(0,l-2),l)].at(-1)??"",h=p==="*"||p==="_"||!!this.rules.inline.punctuation.exec(p);l<i&&(n=p);let u=l<i?h:!!this.rules.inline.punctuation.exec(n);if(s[4]&&n.match(this.rules.other.unicodeAlphaNumeric))return;let d=s[1]||s[3]||"";if(!d||!n||u){let k=[...s[0]].length-1,g,b,x=k,f=0,y=i-l+k,R=!this.options.pedantic&&!!p.trim()&&(!!d||r==="*"&&!h);if(r!=="*"&&r!=="_")return;let E=r==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd,Z=Me(this,t,r),U=t.length-e.length+k;if(Z<U)return;t=t.slice(-1*e.length+k);let ee=Z-U;for(E.lastIndex=0;(s=E.exec(t))!==null&&!(s.index>ee);){if(g=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!g)continue;if(b=[...g].length,s[3]||s[4]){x+=b;continue}else if(s[5]||s[6]||R){if(o&&(s[5]||s[6]))break;if(y%3&&!((y+b)%3)){f+=b;continue}}if(x-=b,x>0)continue;b=Math.min(b,b+x+f);let te=[...s[0]][0].length,M=e.slice(0,k+s.index+te+b);if(Math.min(k,b)%2){let W=M.slice(1,-1);return{type:"em",raw:M,text:W,tokens:this.lexer.inlineTokens(W)}}let ne=M.slice(2,-2);return{type:"strong",raw:M,text:ne,tokens:this.lexer.inlineTokens(ne)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," "),s=this.rules.other.nonSpaceChar.test(n),r=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return s&&r&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e,t,n=""){let s=this.rules.inline.delLDelim.exec(e);if(!s)return;if(!(s[1]||"")||!n||this.rules.inline.punctuation.exec(n)){let o=[...s[0]].length-1,i,l,p=o,h=this.rules.inline.delRDelim,u=De(this,t),d=t.length-e.length+o;if(u<d)return;t=t.slice(-1*e.length+o);let k=u-d;for(h.lastIndex=0;(s=h.exec(t))!==null&&!(s.index>k);){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i||(l=[...i].length,l!==o))continue;if(s[3]||s[4]){p+=l;continue}if(p-=l,p>0)continue;l=Math.min(l,l+p);let g=[...s[0]][0].length,b=e.slice(0,o+s.index+g+l),x=b.slice(o,-o);return{type:"del",raw:b,text:x,tokens:this.lexer.inlineTokens(x)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=t[1],s="mailto:"+n):(n=t[1],s=n),{type:"link",raw:t[0],text:n,href:s,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,s;if(t[2]==="@")n=t[0],s="mailto:"+n;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(r!==t[0]);n=t[0],t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:n,href:s,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:n?t[0]:Ae(t[0]),escaped:n}}}};var O=class a{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||P,this.options.tokenizer=this.options.tokenizer||new _,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let t={other:T,block:J.normal,inline:G.normal};this.options.pedantic?(t.block=J.pedantic,t.inline=G.pedantic):this.options.gfm&&(t.block=J.gfm,this.options.breaks?t.inline=G.breaks:t.inline=G.gfm),this.tokenizer.rules=t}static get rules(){return{block:J,inline:G}}static lex(e,t){return new a(t).lex(e)}static lexInline(e,t){return new a(t).inlineTokens(e)}lex(e){e=e.replace(T.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let n=this.inlineQueue[t];this.state.inRawBlock=!1,this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(T.tabCharGlobal,"    ").replace(T.spaceLine,""));let s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let r;if(this.options.extensions?.block?.some(i=>(r=i.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let i=t.at(-1);r.raw.length===1&&i!==void 0?i.raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let i=t.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+r.raw,i.text+=`
`+r.text,this.inlineQueue.at(-1).src=i.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let i=t.at(-1);i?.type==="paragraph"||i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+r.raw,i.text+=`
`+r.raw,this.inlineQueue.at(-1).src=i.text):(this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title}),t.push(r));continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}let o=e;if(this.options.extensions?.startBlock){let i=1/0,l=e.slice(1),p;this.options.extensions.startBlock.forEach(h=>{p=h.call({lexer:this},l),typeof p=="number"&&p>=0&&(i=Math.min(i,p))}),i<1/0&&i>=0&&(o=e.substring(0,i+1))}if(this.state.top&&(r=this.tokenizer.paragraph(o))){let i=t.at(-1);n&&i?.type==="paragraph"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+r.raw,i.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):t.push(r),n=o.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let i=t.at(-1);i?.type==="text"?(i.raw+=(i.raw.endsWith(`
`)?"":`
`)+r.raw,i.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):t.push(r);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}linkInText(e){if(!e.includes("["))return!1;let t=this.tokenizer.rules.inline.link;for(let n of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(t.test(n[0])&&e.charAt(n.index-1)!=="!")return!0;for(let n of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let s=n[0],r=s.lastIndexOf("[");if(!(s.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,F(s.slice(r+1,-1))))&&!(r>1&&this.linkInText(s.slice(1,r-1))))return!0}return!1}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=this.state.linkParenPossible;this.state.linkParenPossible=n&&e.includes(")");try{return this.#e(e,t)}finally{this.state.linkParenPossible=n}}#e(e,t){let n=e.includes("*")||e.includes("_")||e.includes("~")||this.options.hooks?.emStrongMask||this.tokenizer.emStrong!==_.prototype.emStrong||this.tokenizer.del!==_.prototype.del?this.#n(e):e;Ee(this.tokenizer,n);try{return this.#t(e,n,t)}finally{ze(this.tokenizer)}}#t(e,t,n){let s=!1,r="",o=1/0;for(;e;){if(e.length<o)o=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}s||(r=""),s=!1;let i;if(this.options.extensions?.inline?.some(p=>(i=p.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))continue;if(i=this.tokenizer.escape(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.tag(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.link(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(i.raw.length);let p=n.at(-1);i.type==="text"&&p?.type==="text"?(p.raw+=i.raw,p.text+=i.text):n.push(i);continue}if(i=this.tokenizer.emStrong(e,t,r)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.codespan(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.br(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.del(e,t,r)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.autolink(e)){e=e.substring(i.raw.length),n.push(i);continue}if(!this.state.inLink&&(i=this.tokenizer.url(e))){e=e.substring(i.raw.length),n.push(i);continue}let l=e;if(this.options.extensions?.startInline){let p=1/0,h=e.slice(1),u;this.options.extensions.startInline.forEach(d=>{u=d.call({lexer:this},h),typeof u=="number"&&u>=0&&(p=Math.min(p,u))}),p<1/0&&p>=0&&(l=e.substring(0,p+1))}if(i=this.tokenizer.inlineText(l)){e=e.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(r=i.raw.slice(-1)),s=!0;let p=n.at(-1);p?.type==="text"?(p.raw+=i.raw,p.text+=i.text):n.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return n}#n(e){let t=e;if(this.tokens.links&&e.includes("[")){let n=this.tokenizer.rules.inline.reflinkSearch,s=r=>{let o=r.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,F(r.slice(o+1,-1))))return r;if(o>1&&r.charAt(0)!=="!"){let i=r.slice(1,o-1);if(this.linkInText(i))return"["+i.replace(n,s)+"]["+"a".repeat(r.length-o-2)+"]"}return"["+"a".repeat(r.length-2)+"]"};t=t.replace(n,s)}return t=t.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode,(n,s,r)=>r?"+".repeat(n.length):s?s+n.slice(s.length,-s.length).replace(/`/g,"+")+s:n),t=t.replace(this.tokenizer.rules.inline.blockSkip,(n,s,r)=>{let o=r?r.length:0;return n.slice(0,o)+"["+"a".repeat(n.length-o-2)+"]"}),t=this.options.hooks?.emStrongMask?.call({lexer:this},t)??t,t}infiniteLoopError(e){let t="Infinite loop on byte: "+e;if(this.options.silent)console.error(t);else throw new Error(t)}};var $=class{options;parser;constructor(e){this.options=e||P}space(e){return""}code({text:e,lang:t,escaped:n}){let s=(t||"").match(T.notSpaceStart)?.[0],r=e?e.replace(T.endingNewline,"")+`
`:"";return s?'<pre><code class="language-'+S(s)+'">'+(n?r:S(r,!0))+`</code></pre>
`:"<pre><code>"+(n?r:S(r,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,s="";for(let i=0;i<e.items.length;i++){let l=e.items[i];s+=this.listitem(l)}let r=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+r+o+`>
`+s+"</"+r+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let r=0;r<e.header.length;r++)n+=this.tablecell(e.header[r]);t+=this.tablerow({text:n});let s="";for(let r=0;r<e.rows.length;r++){let o=e.rows[r];n="";for(let i=0;i<o.length;i++)n+=this.tablecell(o[i]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+s+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${S(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,text:n,tokens:s,autolink:r}){let o=r?S(n,!0):this.parser.parseInline(s),i=de(e);if(i===null)return o;e=S(i,r);let l='<a href="'+e+'"';return t&&(l+=' title="'+S(t)+'"'),l+=">"+o+"</a>",l}image({href:e,title:t,text:n,tokens:s}){s&&(n=this.parser.parseInline(s,this.parser.textRenderer));let r=de(e);if(r===null)return S(n);e=r;let o=`<img src="${S(e)}" alt="${S(n)}"`;return t&&(o+=` title="${S(t)}"`),o+=">",o}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:S(e.text)}};var A=class{parser;strong({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}em({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}codespan({text:e}){return e}del({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}html({text:e}){return e}text({text:e}){return e}link({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}image({text:e,tokens:t}){return t?this.parser.parseInline(t,this):e}br(){return""}checkbox({raw:e}){return e}};var w=class a{options;renderer;textRenderer;constructor(e){this.options=e||P,this.options.renderer=this.options.renderer||new $,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new A,this.textRenderer.parser=this}static parse(e,t){return new a(t).parse(e)}static parseInline(e,t){return new a(t).parseInline(e)}parse(e){this.renderer.parser=this;let t="";for(let n=0;n<e.length;n++){let s=e[n];if(this.options.extensions?.renderers?.[s.type]){let o=s,i=this.options.extensions.renderers[o.type].call({parser:this},o);if(i!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(o.type)){t+=i||"";continue}}let r=s;switch(r.type){case"space":{t+=this.renderer.space(r);break}case"hr":{t+=this.renderer.hr(r);break}case"heading":{t+=this.renderer.heading(r);break}case"code":{t+=this.renderer.code(r);break}case"table":{t+=this.renderer.table(r);break}case"blockquote":{t+=this.renderer.blockquote(r);break}case"list":{t+=this.renderer.list(r);break}case"checkbox":{t+=this.renderer.checkbox(r);break}case"html":{t+=this.renderer.html(r);break}case"def":{t+=this.renderer.def(r);break}case"paragraph":{t+=this.renderer.paragraph(r);break}case"text":{t+=this.renderer.text(r);break}default:{let o='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n="";for(let s=0;s<e.length;s++){let r=e[s];if(this.options.extensions?.renderers?.[r.type]){let i=this.options.extensions.renderers[r.type].call({parser:this},r);if(i!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(r.type)){n+=i||"";continue}}let o=r;switch(o.type){case"escape":{n+=t.text(o);break}case"html":{n+=t.html(o);break}case"link":{n+=t.link(o);break}case"image":{n+=t.image(o);break}case"checkbox":{n+=t.checkbox(o);break}case"strong":{n+=t.strong(o);break}case"em":{n+=t.em(o);break}case"codespan":{n+=t.codespan(o);break}case"br":{n+=t.br(o);break}case"del":{n+=t.del(o);break}case"text":{n+=t.text(o);break}default:{let i='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return n}};var L=class{options;block;constructor(e){this.options=e||P}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?O.lex:O.lexInline}provideParser(e=this.block){return e?w.parse:w.parseInline}};function z(a,e){if(Array.isArray(e))for(let t=0;t<e.length;t++)a.push(e[t]);else a.push(e)}var Q=class{defaults=D();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=w;Renderer=$;TextRenderer=A;Lexer=O;Tokenizer=_;Hooks=L;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let s of e)switch(z(n,t.call(this,s)),s.type){case"table":{let r=s;for(let o of r.header)z(n,this.walkTokens(o.tokens,t));for(let o of r.rows)for(let i of o)z(n,this.walkTokens(i.tokens,t));break}case"list":{let r=s;z(n,this.walkTokens(r.items,t));break}default:{let r=s;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(o=>{let i=r[o].flat(1/0);z(n,this.walkTokens(i,t))}):r.tokens&&z(n,this.walkTokens(r.tokens,t))}}return n}use(...e){let t=this.defaults.extensions||{renderers:Object.create(null),childTokens:Object.create(null)};return e.forEach(n=>{let s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let o=t.renderers[r.name];o?t.renderers[r.name]=function(...i){let l=r.renderer.apply(this,i);return l===!1&&(l=o.apply(this,i)),l}:t.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let o=t[r.level];o?o.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),s.extensions=t),n.renderer){let r=this.defaults.renderer||new $(this.defaults);for(let o in n.renderer){if(!(o in r))throw new Error(`renderer '${o}' does not exist`);if(["options","parser"].includes(o))continue;let i=o,l=n.renderer[i],p=r[i];r[i]=(...h)=>{let u=l.apply(r,h);return u===!1&&(u=p.apply(r,h)),u===!1?"":u??""}}s.renderer=r}if(n.tokenizer){let r=this.defaults.tokenizer||new _(this.defaults);for(let o in n.tokenizer){if(!(o in r))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;let i=o,l=n.tokenizer[i],p=r[i];r[i]=(...h)=>{let u=l.apply(r,h);return u===!1&&(u=p.apply(r,h)),u}}s.tokenizer=r}if(n.hooks){let r=this.defaults.hooks||new L;for(let o in n.hooks){if(!(o in r))throw new Error(`hook '${o}' does not exist`);if(["options","block"].includes(o))continue;let i=o,l=n.hooks[i],p=r[i];L.passThroughHooks.has(o)?r[i]=h=>{if(r.options.async&&L.passThroughHooksRespectAsync.has(o))return(async()=>{let d=await l.call(r,h);return p.call(r,d)})();let u=l.call(r,h);return p.call(r,u)}:r[i]=(...h)=>{if(r.options.async)return(async()=>{let d=await l.apply(r,h);return d===!1&&(d=await p.apply(r,h)),d})();let u=l.apply(r,h);return u===!1&&(u=p.apply(r,h)),u}}s.hooks=r}if(n.walkTokens){let r=this.defaults.walkTokens,o=n.walkTokens;s.walkTokens=function(i){let l=[];return z(l,o.call(this,i)),r&&z(l,r.call(this,i)),l}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return O.lex(e,t??this.defaults)}parser(e,t){return w.parse(e,t??this.defaults)}parseMarkdown(e){return(n,s)=>{let r={...s},o={...this.defaults,...r},i=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&r.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(o.hooks&&(o.hooks.options=o,o.hooks.block=e),o.async)return(async()=>{let l=o.hooks?await o.hooks.preprocess(n):n,h=await(o.hooks?await o.hooks.provideLexer(e):e?O.lex:O.lexInline)(l,o),u=o.hooks?await o.hooks.processAllTokens(h):h;o.walkTokens&&await Promise.all(this.walkTokens(u,o.walkTokens));let k=await(o.hooks?await o.hooks.provideParser(e):e?w.parse:w.parseInline)(u,o);return o.hooks?await o.hooks.postprocess(k):k})().catch(i);try{o.hooks&&(n=o.hooks.preprocess(n));let p=(o.hooks?o.hooks.provideLexer(e):e?O.lex:O.lexInline)(n,o);o.hooks&&(p=o.hooks.processAllTokens(p)),o.walkTokens&&this.walkTokens(p,o.walkTokens);let u=(o.hooks?o.hooks.provideParser(e):e?w.parse:w.parseInline)(p,o);return o.hooks&&(u=o.hooks.postprocess(u)),u}catch(l){return i(l)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let s="<p>An error occurred:</p><pre>"+S(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}}};var v=new Q;function m(a,e){return v.parse(a,e)}m.options=m.setOptions=function(a){return v.setOptions(a),m.defaults=v.defaults,ie(m.defaults),m};m.getDefaults=D;m.defaults=P;function ve(...a){return v.use(...a),m.defaults=v.defaults,ie(m.defaults),m}m.use=ve;m.walkTokens=function(a,e){return v.walkTokens(a,e)};m.parseInline=v.parseInline;m.Parser=w;m.parser=w.parse;m.Renderer=$;m.TextRenderer=A;m.Lexer=O;m.lexer=O.lex;m.Tokenizer=_;m.Hooks=L;m.parse=m;var Ft=m.options,Qt=m.setOptions,Ut=m.walkTokens,Wt=m.parseInline,Kt=m,Xt=w.parse,Vt=O.lex;

if(__exports != exports)module.exports = exports;return module.exports}));
//# sourceMappingURL=marked.umd.js.map
;
/*! @license DOMPurify 3.4.17 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.17/LICENSE */
(function(global, factory) {
	typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define([], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.DOMPurify = factory());
})(this, function() {
	"use strict";
	function _OverloadYield(e, d) {
		this.v = e, this.k = d;
	}
	function _arrayLikeToArray(r, a) {
		(null == a || a > r.length) && (a = r.length);
		for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
		return n;
	}
	function _arrayWithHoles(r) {
		if (Array.isArray(r)) return r;
	}
	function _iterableToArrayLimit(r, l) {
		var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
		if (null != t) {
			var e, n, i, u, a = [], f = !0, o = !1;
			try {
				if (i = (t = t.call(r)).next, 0 === l) {
					if (Object(t) !== t) return;
					f = !1;
				} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
			} catch (r) {
				o = !0, n = r;
			} finally {
				try {
					if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
				} finally {
					if (o) throw n;
				}
			}
			return a;
		}
	}
	function _nonIterableRest() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
	function _slicedToArray(r, e) {
		return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
	}
	function _unsupportedIterableToArray(r, a) {
		if (r) {
			if ("string" == typeof r) return _arrayLikeToArray(r, a);
			var t = {}.toString.call(r).slice(8, -1);
			return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
		}
	}
	function AsyncGenerator(e) {
		var t, n;
		function resume(t, n) {
			try {
				var r = e[t](n), o = r.value, u = o instanceof _OverloadYield;
				Promise.resolve(u ? o.v : o).then(function(n) {
					if (u) {
						var i = "return" === t && o.k ? t : "next";
						if (!o.k || n.done) return resume(i, n);
						n = e[i](n).value;
					}
					settle(!!r.done, n);
				}, function(e) {
					resume("throw", e);
				});
			} catch (e) {
				settle(2, e);
			}
		}
		function settle(e, r) {
			2 === e ? t.reject(r) : t.resolve({
				value: r,
				done: e
			}), (t = t.next) ? resume(t.key, t.arg) : n = null;
		}
		this._invoke = function(e, r) {
			return new Promise(function(o, u) {
				var i = {
					key: e,
					arg: r,
					resolve: o,
					reject: u,
					next: null
				};
				n ? n = n.next = i : (t = n = i, resume(e, r));
			});
		}, "function" != typeof e.return && (this.return = void 0);
	}
	AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
		return this;
	}, AsyncGenerator.prototype.next = function(e) {
		return this._invoke("next", e);
	}, AsyncGenerator.prototype.throw = function(e) {
		return this._invoke("throw", e);
	}, AsyncGenerator.prototype.return = function(e) {
		return this._invoke("return", e);
	};
	const entries = Object.entries;
	const setPrototypeOf = Object.setPrototypeOf;
	const isFrozen = Object.isFrozen;
	const getPrototypeOf = Object.getPrototypeOf;
	const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	let freeze = Object.freeze;
	let seal = Object.seal;
	let create = Object.create;
	let _ref = typeof Reflect !== "undefined" && Reflect;
	let apply = _ref.apply;
	let construct = _ref.construct;
	if (!freeze) freeze = function freeze(x) {
		return x;
	};
	if (!seal) seal = function seal(x) {
		return x;
	};
	if (!apply) apply = function apply(func, thisArg) {
		for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
		return func.apply(thisArg, args);
	};
	if (!construct) construct = function construct(Func) {
		for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
		return new Func(...args);
	};
	const arrayForEach = unapply(Array.prototype.forEach);
	Array.prototype.indexOf;
	const arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
	const arrayPop = unapply(Array.prototype.pop);
	const arrayPush = unapply(Array.prototype.push);
	const arraySlice = unapply(Array.prototype.slice);
	const arraySplice = unapply(Array.prototype.splice);
	const arrayIsArray = Array.isArray;
	const setCreate = unconstruct(Set);
	const setAdd = unapply(Set.prototype.add);
	const setHas = unapply(Set.prototype.has);
	const stringToLowerCase = unapply(String.prototype.toLowerCase);
	const stringToString = unapply(String.prototype.toString);
	const stringMatch = unapply(String.prototype.match);
	const stringReplace = unapply(String.prototype.replace);
	const stringIndexOf = unapply(String.prototype.indexOf);
	const stringTrim = unapply(String.prototype.trim);
	const numberToString = unapply(Number.prototype.toString);
	const booleanToString = unapply(Boolean.prototype.toString);
	const bigintToString = typeof BigInt === "undefined" ? null : unapply(BigInt.prototype.toString);
	const symbolToString = typeof Symbol === "undefined" ? null : unapply(Symbol.prototype.toString);
	const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
	const objectToString = unapply(Object.prototype.toString);
	const regExpTest = unapply(RegExp.prototype.test);
	const typeErrorCreate = unconstruct(TypeError);
	/**
	* Creates a new function that calls the given function with a specified thisArg and arguments.
	*
	* @param func - The function to be wrapped and called.
	* @returns A new function that calls the given function with a specified thisArg and arguments.
	*/
	function unapply(func) {
		return function(thisArg) {
			if (thisArg instanceof RegExp) thisArg.lastIndex = 0;
			for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) args[_key3 - 1] = arguments[_key3];
			return apply(func, thisArg, args);
		};
	}
	/**
	* Creates a new function that constructs an instance of the given constructor function with the provided arguments.
	*
	* @param func - The constructor function to be wrapped and called.
	* @returns A new function that constructs an instance of the given constructor function with the provided arguments.
	*/
	function unconstruct(Func) {
		return function() {
			for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
			return construct(Func, args);
		};
	}
	/**
	* Add properties to a lookup table
	*
	* @param set - The set to which elements will be added.
	* @param array - The array containing elements to be added to the set.
	* @param transformCaseFunc - An optional function to transform the case of each element before adding to the set.
	* @returns The modified set with added elements.
	*/
	function addToSet(set, array) {
		let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
		if (setPrototypeOf) setPrototypeOf(set, null);
		if (!arrayIsArray(array)) return set;
		let l = array.length;
		while (l--) {
			let element = array[l];
			if (typeof element === "string") {
				const lcElement = transformCaseFunc(element);
				if (lcElement !== element) {
					if (!isFrozen(array)) array[l] = lcElement;
					element = lcElement;
				}
			}
			set[element] = true;
		}
		return set;
	}
	/**
	* Clean up an array to harden against CSPP
	*
	* @param array - The array to be cleaned.
	* @returns The cleaned version of the array
	*/
	function cleanArray(array) {
		for (let index = 0; index < array.length; index++) if (!objectHasOwnProperty(array, index)) array[index] = null;
		return array;
	}
	/**
	* Shallow clone an object
	*
	* @param object - The object to be cloned.
	* @returns A new object that copies the original.
	*/
	function clone(object) {
		const newObject = create(null);
		for (const _ref2 of entries(object)) {
			var _ref3 = _slicedToArray(_ref2, 2);
			const property = _ref3[0];
			const value = _ref3[1];
			if (objectHasOwnProperty(object, property)) {
				if (arrayIsArray(value)) newObject[property] = cleanArray(value);
				else if (value && typeof value === "object" && value.constructor === Object) newObject[property] = clone(value);
				else newObject[property] = value;
			}
		}
		return newObject;
	}
	/**
	* Convert non-node values into strings without depending on direct property access.
	*
	* @param value - The value to stringify.
	* @returns A string representation of the provided value.
	*/
	function stringifyValue(value) {
		switch (typeof value) {
			case "string": return value;
			case "number": return numberToString(value);
			case "boolean": return booleanToString(value);
			case "bigint": return bigintToString ? bigintToString(value) : "0";
			case "symbol": return symbolToString ? symbolToString(value) : "Symbol()";
			case "undefined": return objectToString(value);
			case "function":
			case "object": {
				if (value === null) return objectToString(value);
				const valueAsRecord = value;
				const valueToString = lookupGetter(valueAsRecord, "toString");
				if (typeof valueToString === "function") {
					const stringified = valueToString(valueAsRecord);
					return typeof stringified === "string" ? stringified : objectToString(stringified);
				}
				return objectToString(value);
			}
			default: return objectToString(value);
		}
	}
	/**
	* This method automatically checks if the prop is function or getter and behaves accordingly.
	*
	* @param object - The object to look up the getter function in its prototype chain.
	* @param prop - The property name for which to find the getter function.
	* @returns The getter function found in the prototype chain or a fallback function.
	*/
	function lookupGetter(object, prop) {
		while (object !== null) {
			const desc = getOwnPropertyDescriptor(object, prop);
			if (desc) {
				if (desc.get) return unapply(desc.get);
				if (typeof desc.value === "function") return unapply(desc.value);
			}
			object = getPrototypeOf(object);
		}
		function fallbackValue() {
			return null;
		}
		return fallbackValue;
	}
	/**
	* Like lookupGetter, but for accessor properties only, and returns null
	* instead of a null-returning fallback when no getter exists on the chain.
	* Lets a caller fall back to a direct property read in environments that
	* lack the getter, where a fallback returning null would be indistinguishable
	* from a legitimate null value (e.g. namespaceURI of a no-namespace element).
	*
	* @param object - The object (usually a prototype) to start the lookup at.
	* @param prop - The accessor property name.
	* @returns The unapplied getter, or null if none was found.
	*/
	function lookupAccessor(object, prop) {
		while (object !== null) {
			const desc = getOwnPropertyDescriptor(object, prop);
			if (desc) return desc.get ? unapply(desc.get) : null;
			object = getPrototypeOf(object);
		}
		return null;
	}
	function isRegex(value) {
		try {
			regExpTest(value, "");
			return true;
		} catch (_unused) {
			return false;
		}
	}
	const html$1 = freeze([
		"a",
		"abbr",
		"acronym",
		"address",
		"area",
		"article",
		"aside",
		"audio",
		"b",
		"bdi",
		"bdo",
		"big",
		"blink",
		"blockquote",
		"body",
		"br",
		"button",
		"canvas",
		"caption",
		"center",
		"cite",
		"code",
		"col",
		"colgroup",
		"content",
		"data",
		"datalist",
		"dd",
		"decorator",
		"del",
		"details",
		"dfn",
		"dialog",
		"dir",
		"div",
		"dl",
		"dt",
		"element",
		"em",
		"fieldset",
		"figcaption",
		"figure",
		"font",
		"footer",
		"form",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"head",
		"header",
		"hgroup",
		"hr",
		"html",
		"i",
		"img",
		"input",
		"ins",
		"kbd",
		"label",
		"legend",
		"li",
		"main",
		"map",
		"mark",
		"marquee",
		"menu",
		"menuitem",
		"meter",
		"nav",
		"nobr",
		"ol",
		"optgroup",
		"option",
		"output",
		"p",
		"picture",
		"pre",
		"progress",
		"q",
		"rp",
		"rt",
		"ruby",
		"s",
		"samp",
		"search",
		"section",
		"select",
		"shadow",
		"slot",
		"small",
		"source",
		"spacer",
		"span",
		"strike",
		"strong",
		"style",
		"sub",
		"summary",
		"sup",
		"table",
		"tbody",
		"td",
		"template",
		"textarea",
		"tfoot",
		"th",
		"thead",
		"time",
		"tr",
		"track",
		"tt",
		"u",
		"ul",
		"var",
		"video",
		"wbr"
	]);
	const svg$1 = freeze([
		"svg",
		"a",
		"altglyph",
		"altglyphdef",
		"altglyphitem",
		"animatecolor",
		"animatemotion",
		"animatetransform",
		"circle",
		"clippath",
		"defs",
		"desc",
		"ellipse",
		"enterkeyhint",
		"exportparts",
		"filter",
		"font",
		"g",
		"glyph",
		"glyphref",
		"hkern",
		"image",
		"inputmode",
		"line",
		"lineargradient",
		"marker",
		"mask",
		"metadata",
		"mpath",
		"part",
		"path",
		"pattern",
		"polygon",
		"polyline",
		"radialgradient",
		"rect",
		"stop",
		"style",
		"switch",
		"symbol",
		"text",
		"textpath",
		"title",
		"tref",
		"tspan",
		"view",
		"vkern"
	]);
	const svgFilters = freeze([
		"feBlend",
		"feColorMatrix",
		"feComponentTransfer",
		"feComposite",
		"feConvolveMatrix",
		"feDiffuseLighting",
		"feDisplacementMap",
		"feDistantLight",
		"feDropShadow",
		"feFlood",
		"feFuncA",
		"feFuncB",
		"feFuncG",
		"feFuncR",
		"feGaussianBlur",
		"feImage",
		"feMerge",
		"feMergeNode",
		"feMorphology",
		"feOffset",
		"fePointLight",
		"feSpecularLighting",
		"feSpotLight",
		"feTile",
		"feTurbulence"
	]);
	const svgDisallowed = freeze([
		"animate",
		"color-profile",
		"cursor",
		"discard",
		"font-face",
		"font-face-format",
		"font-face-name",
		"font-face-src",
		"font-face-uri",
		"foreignobject",
		"hatch",
		"hatchpath",
		"mesh",
		"meshgradient",
		"meshpatch",
		"meshrow",
		"missing-glyph",
		"script",
		"set",
		"solidcolor",
		"unknown",
		"use"
	]);
	const mathMl$1 = freeze([
		"math",
		"menclose",
		"merror",
		"mfenced",
		"mfrac",
		"mglyph",
		"mi",
		"mlabeledtr",
		"mmultiscripts",
		"mn",
		"mo",
		"mover",
		"mpadded",
		"mphantom",
		"mroot",
		"mrow",
		"ms",
		"mspace",
		"msqrt",
		"mstyle",
		"msub",
		"msup",
		"msubsup",
		"mtable",
		"mtd",
		"mtext",
		"mtr",
		"munder",
		"munderover",
		"mprescripts"
	]);
	const mathMlDisallowed = freeze([
		"maction",
		"maligngroup",
		"malignmark",
		"mlongdiv",
		"mscarries",
		"mscarry",
		"msgroup",
		"mstack",
		"msline",
		"msrow",
		"semantics",
		"annotation",
		"annotation-xml",
		"mprescripts",
		"none"
	]);
	const text = freeze(["#text"]);
	const html = freeze([
		"accept",
		"action",
		"align",
		"alt",
		"autocapitalize",
		"autocomplete",
		"autopictureinpicture",
		"autoplay",
		"background",
		"bgcolor",
		"border",
		"capture",
		"cellpadding",
		"cellspacing",
		"checked",
		"cite",
		"class",
		"clear",
		"color",
		"cols",
		"colspan",
		"command",
		"commandfor",
		"controls",
		"controlslist",
		"coords",
		"crossorigin",
		"datetime",
		"decoding",
		"default",
		"dir",
		"disabled",
		"disablepictureinpicture",
		"disableremoteplayback",
		"download",
		"draggable",
		"enctype",
		"enterkeyhint",
		"exportparts",
		"face",
		"for",
		"headers",
		"height",
		"hidden",
		"high",
		"href",
		"hreflang",
		"id",
		"inert",
		"inputmode",
		"integrity",
		"ismap",
		"kind",
		"label",
		"lang",
		"list",
		"loading",
		"loop",
		"low",
		"max",
		"maxlength",
		"media",
		"method",
		"min",
		"minlength",
		"multiple",
		"muted",
		"name",
		"nonce",
		"noshade",
		"novalidate",
		"nowrap",
		"open",
		"optimum",
		"part",
		"pattern",
		"placeholder",
		"playsinline",
		"popover",
		"popovertarget",
		"popovertargetaction",
		"poster",
		"preload",
		"pubdate",
		"radiogroup",
		"readonly",
		"rel",
		"required",
		"rev",
		"reversed",
		"role",
		"rows",
		"rowspan",
		"spellcheck",
		"scope",
		"selected",
		"shape",
		"size",
		"sizes",
		"slot",
		"span",
		"srclang",
		"start",
		"src",
		"srcset",
		"step",
		"style",
		"summary",
		"tabindex",
		"title",
		"translate",
		"type",
		"usemap",
		"valign",
		"value",
		"width",
		"wrap",
		"xmlns"
	]);
	const svg = freeze([
		"accent-height",
		"accumulate",
		"additive",
		"alignment-baseline",
		"amplitude",
		"ascent",
		"attributename",
		"attributetype",
		"azimuth",
		"basefrequency",
		"baseline-shift",
		"begin",
		"bias",
		"by",
		"class",
		"clip",
		"clippathunits",
		"clip-path",
		"clip-rule",
		"color",
		"color-interpolation",
		"color-interpolation-filters",
		"color-profile",
		"color-rendering",
		"cx",
		"cy",
		"d",
		"dx",
		"dy",
		"diffuseconstant",
		"direction",
		"display",
		"divisor",
		"dominant-baseline",
		"dur",
		"edgemode",
		"elevation",
		"end",
		"exponent",
		"fill",
		"fill-opacity",
		"fill-rule",
		"filter",
		"filterunits",
		"flood-color",
		"flood-opacity",
		"font-family",
		"font-size",
		"font-size-adjust",
		"font-stretch",
		"font-style",
		"font-variant",
		"font-weight",
		"fx",
		"fy",
		"g1",
		"g2",
		"glyph-name",
		"glyphref",
		"gradientunits",
		"gradienttransform",
		"height",
		"href",
		"id",
		"image-rendering",
		"in",
		"in2",
		"intercept",
		"k",
		"k1",
		"k2",
		"k3",
		"k4",
		"kerning",
		"keypoints",
		"keysplines",
		"keytimes",
		"lang",
		"lengthadjust",
		"letter-spacing",
		"kernelmatrix",
		"kernelunitlength",
		"lighting-color",
		"local",
		"marker-end",
		"marker-mid",
		"marker-start",
		"markerheight",
		"markerunits",
		"markerwidth",
		"maskcontentunits",
		"maskunits",
		"max",
		"mask",
		"mask-type",
		"media",
		"method",
		"mode",
		"min",
		"name",
		"numoctaves",
		"offset",
		"operator",
		"opacity",
		"order",
		"orient",
		"orientation",
		"origin",
		"overflow",
		"paint-order",
		"path",
		"pathlength",
		"patterncontentunits",
		"patterntransform",
		"patternunits",
		"pointer-events",
		"points",
		"preservealpha",
		"preserveaspectratio",
		"primitiveunits",
		"r",
		"rx",
		"ry",
		"radius",
		"refx",
		"refy",
		"repeatcount",
		"repeatdur",
		"restart",
		"result",
		"rotate",
		"scale",
		"seed",
		"shape-rendering",
		"slope",
		"specularconstant",
		"specularexponent",
		"spreadmethod",
		"startoffset",
		"stddeviation",
		"stitchtiles",
		"stop-color",
		"stop-opacity",
		"stroke-dasharray",
		"stroke-dashoffset",
		"stroke-linecap",
		"stroke-linejoin",
		"stroke-miterlimit",
		"stroke-opacity",
		"stroke",
		"stroke-width",
		"style",
		"surfacescale",
		"systemlanguage",
		"tabindex",
		"tablevalues",
		"targetx",
		"targety",
		"transform",
		"transform-origin",
		"text-anchor",
		"text-decoration",
		"text-orientation",
		"text-rendering",
		"textlength",
		"type",
		"u1",
		"u2",
		"unicode",
		"values",
		"vector-effect",
		"viewbox",
		"visibility",
		"version",
		"vert-adv-y",
		"vert-origin-x",
		"vert-origin-y",
		"width",
		"word-spacing",
		"wrap",
		"writing-mode",
		"xchannelselector",
		"ychannelselector",
		"x",
		"x1",
		"x2",
		"xmlns",
		"y",
		"y1",
		"y2",
		"z",
		"zoomandpan"
	]);
	const mathMl = freeze([
		"accent",
		"accentunder",
		"align",
		"bevelled",
		"close",
		"columnalign",
		"columnlines",
		"columnspacing",
		"columnspan",
		"denomalign",
		"depth",
		"dir",
		"display",
		"displaystyle",
		"encoding",
		"fence",
		"frame",
		"height",
		"href",
		"id",
		"largeop",
		"length",
		"linethickness",
		"lquote",
		"lspace",
		"mathbackground",
		"mathcolor",
		"mathsize",
		"mathvariant",
		"maxsize",
		"minsize",
		"movablelimits",
		"notation",
		"numalign",
		"open",
		"rowalign",
		"rowlines",
		"rowspacing",
		"rowspan",
		"rspace",
		"rquote",
		"scriptlevel",
		"scriptminsize",
		"scriptsizemultiplier",
		"selection",
		"separator",
		"separators",
		"stretchy",
		"subscriptshift",
		"supscriptshift",
		"symmetric",
		"voffset",
		"width",
		"xmlns"
	]);
	const xml = freeze([
		"xlink:href",
		"xml:id",
		"xlink:title",
		"xml:space",
		"xmlns:xlink"
	]);
	const MUSTACHE_EXPR = seal(/{{[\w\W]*|^[\w\W]*}}/g);
	const ERB_EXPR = seal(/<%[\w\W]*|^[\w\W]*%>/g);
	const TMPLIT_EXPR = seal(/\${[\w\W]*/g);
	const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
	const ARIA_ATTR = seal(/^aria-[\-\w]+$/);
	const IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
	const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
	const ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
	const DOCTYPE_NAME = seal(/^html$/i);
	const CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
	const ELEMENT_MARKUP_PROBE = seal(/<[/\w!]/g);
	const COMMENT_MARKUP_PROBE = seal(/<[/\w]/g);
	const FALLBACK_TAG_CLOSE = seal(/<\/no(script|embed|frames)/i);
	const SELF_CLOSING_TAG = seal(/\/>/i);
	const NODE_TYPE = {
		element: 1,
		attribute: 2,
		text: 3,
		cdataSection: 4,
		entityReference: 5,
		entityNode: 6,
		processingInstruction: 7,
		comment: 8,
		document: 9,
		documentType: 10,
		documentFragment: 11,
		notation: 12
	};
	const LITERAL_TEXT_ELEMENTS = freeze(addToSet({}, [
		"style",
		"script",
		"xmp",
		"iframe",
		"noembed",
		"noframes",
		"plaintext",
		"noscript"
	]));
	const getGlobal = function getGlobal() {
		return typeof window === "undefined" ? null : window;
	};
	/**
	* Creates a no-op policy for internal use only.
	* Don't export this function outside this module!
	* @param trustedTypes The policy factory.
	* @param purifyHostElement The Script element used to load DOMPurify (to determine policy name suffix).
	* @return The policy created (or null, if Trusted Types
	* are not supported or creating the policy failed).
	*/
	const _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, purifyHostElement) {
		if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") return null;
		let suffix = null;
		const ATTR_NAME = "data-tt-policy-suffix";
		if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) suffix = purifyHostElement.getAttribute(ATTR_NAME);
		const policyName = "dompurify" + (suffix ? "#" + suffix : "");
		try {
			return trustedTypes.createPolicy(policyName, {
				createHTML(html) {
					return html;
				},
				createScriptURL(scriptUrl) {
					return scriptUrl;
				}
			});
		} catch (_) {
			console.warn("TrustedTypes policy " + policyName + " could not be created.");
			return null;
		}
	};
	const _createHooksMap = function _createHooksMap() {
		return {
			afterSanitizeAttributes: [],
			afterSanitizeElements: [],
			afterSanitizeShadowDOM: [],
			beforeSanitizeAttributes: [],
			beforeSanitizeElements: [],
			beforeSanitizeShadowDOM: [],
			uponSanitizeAttribute: [],
			uponSanitizeElement: [],
			uponSanitizeShadowNode: []
		};
	};
	/**
	* Resolve a set-valued configuration option: a fresh set built from
	* cfg[key] when it is an own array property (seeded with a clone of
	* options.base when given, case-normalized via options.transform),
	* the fallback set otherwise.
	*
	* @param cfg the cloned, prototype-free configuration object
	* @param key the configuration property to read
	* @param fallback the set to use when the option is absent or not an array
	* @param options transform and optional base set to merge into
	* @returns the resolved set
	*/
	const _resolveSetOption = function _resolveSetOption(cfg, key, fallback, options) {
		return objectHasOwnProperty(cfg, key) && arrayIsArray(cfg[key]) ? addToSet(options.base ? clone(options.base) : {}, cfg[key], options.transform) : fallback;
	};
	/**
	* Resolve an object-valued configuration option: a prototype-free clone
	* of cfg[key] when it is an own, truthy object property, else a fresh
	* fallback built by makeFallback (fresh on every parse, so a previous
	* parse can never leak state into the next one).
	*
	* @param cfg the cloned, prototype-free configuration object
	* @param key the configuration property to read
	* @param makeFallback builds the fallback value when the option is absent
	* @returns the resolved object
	*/
	const _resolveObjectOption = function _resolveObjectOption(cfg, key, makeFallback) {
		const value = objectHasOwnProperty(cfg, key) ? cfg[key] : void 0;
		return value && typeof value === "object" ? clone(value) : makeFallback();
	};
	function createDOMPurify() {
		let window = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
		const DOMPurify = (root) => createDOMPurify(root);
		DOMPurify.version = "3.4.17";
		DOMPurify.removed = [];
		if (!window || !window.document || window.document.nodeType !== NODE_TYPE.document || !window.Element) {
			DOMPurify.isSupported = false;
			return DOMPurify;
		}
		let document = window.document;
		const originalDocument = document;
		const currentScript = originalDocument.currentScript;
		window.DocumentFragment;
		const HTMLTemplateElement = window.HTMLTemplateElement, Node = window.Node, Element = window.Element, NodeFilter = window.NodeFilter;
		window.NamedNodeMap === void 0 && (window.NamedNodeMap || window.MozNamedAttrMap);
		window.HTMLFormElement;
		const DOMParser = window.DOMParser, trustedTypes = window.trustedTypes;
		const ElementPrototype = Element.prototype;
		const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
		const remove = lookupGetter(ElementPrototype, "remove");
		const removeAttributeNode = lookupGetter(ElementPrototype, "removeAttributeNode");
		const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
		const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
		const getParentNode = lookupGetter(ElementPrototype, "parentNode");
		const getShadowRoot = lookupGetter(ElementPrototype, "shadowRoot");
		const getAttributes = lookupGetter(ElementPrototype, "attributes");
		const getNodeType = Node && Node.prototype ? lookupGetter(Node.prototype, "nodeType") : null;
		const getNodeName = Node && Node.prototype ? lookupGetter(Node.prototype, "nodeName") : null;
		const getOwnerDocument = Node && Node.prototype ? lookupGetter(Node.prototype, "ownerDocument") : null;
		const _readNodeType = function _readNodeType(node) {
			return getNodeType ? getNodeType(node) : node.nodeType;
		};
		const _readNodeName = function _readNodeName(node) {
			return getNodeName ? getNodeName(node) : node.nodeName;
		};
		const getNamespaceURI = lookupAccessor(ElementPrototype, "namespaceURI");
		const _readNamespaceURI = function _readNamespaceURI(element) {
			return getNamespaceURI ? getNamespaceURI(element) : element.namespaceURI;
		};
		if (typeof HTMLTemplateElement === "function") {
			const template = document.createElement("template");
			if (template.content && template.content.ownerDocument) document = template.content.ownerDocument;
		}
		let trustedTypesPolicy;
		let emptyHTML = "";
		let defaultTrustedTypesPolicy;
		let defaultTrustedTypesPolicyResolved = false;
		let IN_TRUSTED_TYPES_POLICY = 0;
		const _assertNotInTrustedTypesPolicy = function _assertNotInTrustedTypesPolicy() {
			if (IN_TRUSTED_TYPES_POLICY > 0) throw typeErrorCreate("A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the \"DOMPurify and Trusted Types\" section of the README.");
		};
		const _createTrustedHTML = function _createTrustedHTML(html) {
			_assertNotInTrustedTypesPolicy();
			IN_TRUSTED_TYPES_POLICY++;
			try {
				return trustedTypesPolicy.createHTML(html);
			} finally {
				IN_TRUSTED_TYPES_POLICY--;
			}
		};
		const _createTrustedScriptURL = function _createTrustedScriptURL(scriptUrl) {
			_assertNotInTrustedTypesPolicy();
			IN_TRUSTED_TYPES_POLICY++;
			try {
				return trustedTypesPolicy.createScriptURL(scriptUrl);
			} finally {
				IN_TRUSTED_TYPES_POLICY--;
			}
		};
		const _getDefaultTrustedTypesPolicy = function _getDefaultTrustedTypesPolicy() {
			if (!defaultTrustedTypesPolicyResolved) {
				defaultTrustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
				defaultTrustedTypesPolicyResolved = true;
			}
			return defaultTrustedTypesPolicy;
		};
		const _document = document, implementation = _document.implementation, createNodeIterator = _document.createNodeIterator, createDocumentFragment = _document.createDocumentFragment, getElementsByTagName = _document.getElementsByTagName;
		const importNode = originalDocument.importNode;
		let hooks = _createHooksMap();
		/**
		* Expose whether this browser supports running the full DOMPurify.
		*/
		DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
		const MUSTACHE_EXPR$1 = MUSTACHE_EXPR, ERB_EXPR$1 = ERB_EXPR, TMPLIT_EXPR$1 = TMPLIT_EXPR, DATA_ATTR$1 = DATA_ATTR, ARIA_ATTR$1 = ARIA_ATTR, IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA, ATTR_WHITESPACE$1 = ATTR_WHITESPACE, CUSTOM_ELEMENT$1 = CUSTOM_ELEMENT;
		let IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
		/**
		* We consider the elements and attributes below to be safe. Ideally
		* don't add any new ones but feel free to remove unwanted ones.
		*/
		let ALLOWED_TAGS = null;
		const DEFAULT_ALLOWED_TAGS = addToSet({}, [
			...html$1,
			...svg$1,
			...svgFilters,
			...mathMl$1,
			...text
		]);
		let ALLOWED_ATTR = null;
		const DEFAULT_ALLOWED_ATTR = addToSet({}, [
			...html,
			...svg,
			...mathMl,
			...xml
		]);
		let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
			tagNameCheck: {
				writable: true,
				configurable: false,
				enumerable: true,
				value: null
			},
			attributeNameCheck: {
				writable: true,
				configurable: false,
				enumerable: true,
				value: null
			},
			allowCustomizedBuiltInElements: {
				writable: true,
				configurable: false,
				enumerable: true,
				value: false
			}
		}));
		let FORBID_TAGS = null;
		let FORBID_ATTR = null;
		const EXTRA_ELEMENT_HANDLING = Object.seal(create(null, {
			tagCheck: {
				writable: true,
				configurable: false,
				enumerable: true,
				value: null
			},
			attributeCheck: {
				writable: true,
				configurable: false,
				enumerable: true,
				value: null
			}
		}));
		let ALLOW_ARIA_ATTR = true;
		let ALLOW_DATA_ATTR = true;
		let ALLOW_UNKNOWN_PROTOCOLS = false;
		let ALLOW_SELF_CLOSE_IN_ATTR = true;
		let SAFE_FOR_TEMPLATES = false;
		let SAFE_FOR_XML = true;
		let WHOLE_DOCUMENT = false;
		let SET_CONFIG = false;
		let SET_CONFIG_ALLOWED_TAGS = null;
		let SET_CONFIG_ALLOWED_ATTR = null;
		let FORCE_BODY = false;
		let RETURN_DOM = false;
		let RETURN_DOM_FRAGMENT = false;
		let RETURN_TRUSTED_TYPE = false;
		let SANITIZE_DOM = true;
		let SANITIZE_NAMED_PROPS = false;
		const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
		let KEEP_CONTENT = true;
		let IN_PLACE = false;
		let IN_PLACE_VISITED = null;
		let USE_PROFILES = {};
		let FORBID_CONTENTS = null;
		const DEFAULT_FORBID_CONTENTS = addToSet({}, [
			"annotation-xml",
			"audio",
			"colgroup",
			"desc",
			"foreignobject",
			"head",
			"iframe",
			"math",
			"mi",
			"mn",
			"mo",
			"ms",
			"mtext",
			"noembed",
			"noframes",
			"noscript",
			"plaintext",
			"script",
			"selectedcontent",
			"style",
			"svg",
			"template",
			"thead",
			"title",
			"video",
			"xmp"
		]);
		let DATA_URI_TAGS = null;
		const DEFAULT_DATA_URI_TAGS = addToSet({}, [
			"audio",
			"video",
			"img",
			"source",
			"image",
			"track"
		]);
		let URI_SAFE_ATTRIBUTES = null;
		const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, [
			"alt",
			"class",
			"for",
			"id",
			"label",
			"name",
			"pattern",
			"placeholder",
			"role",
			"summary",
			"title",
			"value",
			"style",
			"xmlns"
		]);
		const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
		const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
		const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
		let NAMESPACE = HTML_NAMESPACE;
		let IS_EMPTY_INPUT = false;
		let ALLOWED_NAMESPACES = null;
		const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [
			MATHML_NAMESPACE,
			SVG_NAMESPACE,
			HTML_NAMESPACE
		], stringToString);
		const DEFAULT_MATHML_TEXT_INTEGRATION_POINTS = freeze([
			"mi",
			"mo",
			"mn",
			"ms",
			"mtext"
		]);
		let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, DEFAULT_MATHML_TEXT_INTEGRATION_POINTS);
		const DEFAULT_HTML_INTEGRATION_POINTS = freeze(["annotation-xml"]);
		let HTML_INTEGRATION_POINTS = addToSet({}, DEFAULT_HTML_INTEGRATION_POINTS);
		const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, [
			"title",
			"style",
			"font",
			"a",
			"script"
		]);
		let PARSER_MEDIA_TYPE = null;
		const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
		const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
		let transformCaseFunc = null;
		let CONFIG = null;
		const formElement = document.createElement("form");
		const isRegexOrFunction = function isRegexOrFunction(testValue) {
			return testValue instanceof RegExp || testValue instanceof Function;
		};
		/**
		* _parseConfig
		*
		* @param cfg optional config literal
		*/
		const _parseConfig = function _parseConfig() {
			let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			if (CONFIG && CONFIG === cfg) return;
			if (!cfg || typeof cfg !== "object") cfg = {};
			cfg = clone(cfg);
			PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
			transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
			ALLOWED_TAGS = _resolveSetOption(cfg, "ALLOWED_TAGS", DEFAULT_ALLOWED_TAGS, { transform: transformCaseFunc });
			ALLOWED_ATTR = _resolveSetOption(cfg, "ALLOWED_ATTR", DEFAULT_ALLOWED_ATTR, { transform: transformCaseFunc });
			ALLOWED_NAMESPACES = _resolveSetOption(cfg, "ALLOWED_NAMESPACES", DEFAULT_ALLOWED_NAMESPACES, { transform: stringToString });
			URI_SAFE_ATTRIBUTES = _resolveSetOption(cfg, "ADD_URI_SAFE_ATTR", DEFAULT_URI_SAFE_ATTRIBUTES, {
				transform: transformCaseFunc,
				base: DEFAULT_URI_SAFE_ATTRIBUTES
			});
			DATA_URI_TAGS = _resolveSetOption(cfg, "ADD_DATA_URI_TAGS", DEFAULT_DATA_URI_TAGS, {
				transform: transformCaseFunc,
				base: DEFAULT_DATA_URI_TAGS
			});
			FORBID_CONTENTS = _resolveSetOption(cfg, "FORBID_CONTENTS", DEFAULT_FORBID_CONTENTS, { transform: transformCaseFunc });
			FORBID_TAGS = _resolveSetOption(cfg, "FORBID_TAGS", clone({}), { transform: transformCaseFunc });
			FORBID_ATTR = _resolveSetOption(cfg, "FORBID_ATTR", clone({}), { transform: transformCaseFunc });
			USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES && typeof cfg.USE_PROFILES === "object" ? clone(cfg.USE_PROFILES) : cfg.USE_PROFILES : false;
			ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
			ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
			ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
			ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
			SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
			SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
			WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
			RETURN_DOM = cfg.RETURN_DOM || false;
			RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
			RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
			FORCE_BODY = cfg.FORCE_BODY || false;
			SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
			SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
			KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
			IN_PLACE = cfg.IN_PLACE || false;
			IS_ALLOWED_URI$1 = isRegex(cfg.ALLOWED_URI_REGEXP) ? cfg.ALLOWED_URI_REGEXP : IS_ALLOWED_URI;
			NAMESPACE = typeof cfg.NAMESPACE === "string" ? cfg.NAMESPACE : HTML_NAMESPACE;
			MATHML_TEXT_INTEGRATION_POINTS = _resolveObjectOption(cfg, "MATHML_TEXT_INTEGRATION_POINTS", () => addToSet({}, DEFAULT_MATHML_TEXT_INTEGRATION_POINTS));
			HTML_INTEGRATION_POINTS = _resolveObjectOption(cfg, "HTML_INTEGRATION_POINTS", () => addToSet({}, DEFAULT_HTML_INTEGRATION_POINTS));
			const customElementHandling = _resolveObjectOption(cfg, "CUSTOM_ELEMENT_HANDLING", () => create(null));
			CUSTOM_ELEMENT_HANDLING = create(null);
			if (objectHasOwnProperty(customElementHandling, "tagNameCheck") && isRegexOrFunction(customElementHandling.tagNameCheck)) CUSTOM_ELEMENT_HANDLING.tagNameCheck = customElementHandling.tagNameCheck;
			if (objectHasOwnProperty(customElementHandling, "attributeNameCheck") && isRegexOrFunction(customElementHandling.attributeNameCheck)) CUSTOM_ELEMENT_HANDLING.attributeNameCheck = customElementHandling.attributeNameCheck;
			if (objectHasOwnProperty(customElementHandling, "allowCustomizedBuiltInElements") && typeof customElementHandling.allowCustomizedBuiltInElements === "boolean") CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = customElementHandling.allowCustomizedBuiltInElements;
			seal(CUSTOM_ELEMENT_HANDLING);
			if (SAFE_FOR_TEMPLATES) ALLOW_DATA_ATTR = false;
			if (RETURN_DOM_FRAGMENT) RETURN_DOM = true;
			if (USE_PROFILES) {
				ALLOWED_TAGS = addToSet({}, text);
				ALLOWED_ATTR = create(null);
				if (USE_PROFILES.html === true) {
					addToSet(ALLOWED_TAGS, html$1);
					addToSet(ALLOWED_ATTR, html);
				}
				if (USE_PROFILES.svg === true) {
					addToSet(ALLOWED_TAGS, svg$1);
					addToSet(ALLOWED_ATTR, svg);
					addToSet(ALLOWED_ATTR, xml);
				}
				if (USE_PROFILES.svgFilters === true) {
					addToSet(ALLOWED_TAGS, svgFilters);
					addToSet(ALLOWED_ATTR, svg);
					addToSet(ALLOWED_ATTR, xml);
				}
				if (USE_PROFILES.mathMl === true) {
					addToSet(ALLOWED_TAGS, mathMl$1);
					addToSet(ALLOWED_ATTR, mathMl);
					addToSet(ALLOWED_ATTR, xml);
				}
			}
			EXTRA_ELEMENT_HANDLING.tagCheck = null;
			EXTRA_ELEMENT_HANDLING.attributeCheck = null;
			if (objectHasOwnProperty(cfg, "ADD_TAGS")) {
				if (typeof cfg.ADD_TAGS === "function") EXTRA_ELEMENT_HANDLING.tagCheck = cfg.ADD_TAGS;
				else if (arrayIsArray(cfg.ADD_TAGS)) {
					if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) ALLOWED_TAGS = clone(ALLOWED_TAGS);
					addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
				}
			}
			if (objectHasOwnProperty(cfg, "ADD_ATTR")) {
				if (typeof cfg.ADD_ATTR === "function") EXTRA_ELEMENT_HANDLING.attributeCheck = cfg.ADD_ATTR;
				else if (arrayIsArray(cfg.ADD_ATTR)) {
					if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) ALLOWED_ATTR = clone(ALLOWED_ATTR);
					addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
				}
			}
			if (objectHasOwnProperty(cfg, "ADD_FORBID_CONTENTS") && arrayIsArray(cfg.ADD_FORBID_CONTENTS)) {
				if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) FORBID_CONTENTS = clone(FORBID_CONTENTS);
				addToSet(FORBID_CONTENTS, cfg.ADD_FORBID_CONTENTS, transformCaseFunc);
			}
			if (KEEP_CONTENT) ALLOWED_TAGS["#text"] = true;
			if (WHOLE_DOCUMENT) addToSet(ALLOWED_TAGS, [
				"html",
				"head",
				"body"
			]);
			if (ALLOWED_TAGS.table) {
				addToSet(ALLOWED_TAGS, ["tbody"]);
				delete FORBID_TAGS.tbody;
			}
			if (cfg.TRUSTED_TYPES_POLICY) {
				if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") throw typeErrorCreate("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
				if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") throw typeErrorCreate("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
				const previousTrustedTypesPolicy = trustedTypesPolicy;
				trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
				try {
					emptyHTML = _createTrustedHTML("");
				} catch (error) {
					trustedTypesPolicy = previousTrustedTypesPolicy;
					throw error;
				}
			} else if (cfg.TRUSTED_TYPES_POLICY === null) {
				trustedTypesPolicy = void 0;
				emptyHTML = "";
			} else {
				if (trustedTypesPolicy === void 0) trustedTypesPolicy = _getDefaultTrustedTypesPolicy();
				if (trustedTypesPolicy && typeof emptyHTML === "string") emptyHTML = _createTrustedHTML("");
			}
			if (freeze) freeze(cfg);
			CONFIG = cfg;
		};
		const ALL_SVG_TAGS = addToSet({}, [
			...svg$1,
			...svgFilters,
			...svgDisallowed
		]);
		const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
		/**
		* Namespace rules for an element in the SVG namespace.
		*
		* @param tagName the element's lowercase tag name
		* @param parent the (possibly simulated) parent node
		* @param parentTagName the parent's lowercase tag name
		* @returns true if a spec-compliant parser could produce this element
		*/
		const _checkSvgNamespace = function _checkSvgNamespace(tagName, parent, parentTagName) {
			if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "svg";
			if (parent.namespaceURI === MATHML_NAMESPACE) return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
			return Boolean(ALL_SVG_TAGS[tagName]);
		};
		/**
		* Namespace rules for an element in the MathML namespace.
		*
		* @param tagName the element's lowercase tag name
		* @param parent the (possibly simulated) parent node
		* @param parentTagName the parent's lowercase tag name
		* @returns true if a spec-compliant parser could produce this element
		*/
		const _checkMathMlNamespace = function _checkMathMlNamespace(tagName, parent, parentTagName) {
			if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "math";
			if (parent.namespaceURI === SVG_NAMESPACE) return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
			return Boolean(ALL_MATHML_TAGS[tagName]);
		};
		/**
		* Namespace rules for an element in the HTML namespace.
		*
		* @param tagName the element's lowercase tag name
		* @param parent the (possibly simulated) parent node
		* @param parentTagName the parent's lowercase tag name
		* @returns true if a spec-compliant parser could produce this element
		*/
		const _checkHtmlNamespace = function _checkHtmlNamespace(tagName, parent, parentTagName) {
			if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) return false;
			if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) return false;
			return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
		};
		/**
		* @param element a DOM element whose namespace is being checked
		* @returns Return false if the element has a
		*  namespace that a spec-compliant parser would never
		*  return. Return true otherwise.
		*/
		const _checkValidNamespace = function _checkValidNamespace(element) {
			const elementNamespace = _readNamespaceURI(element);
			const tagName = stringToLowerCase(_readNodeName(element));
			const parentNode = getParentNode(element);
			let parent;
			let parentTagName;
			if (parentNode && _readNodeType(parentNode) === NODE_TYPE.element) {
				parent = { namespaceURI: _readNamespaceURI(parentNode) };
				parentTagName = stringToLowerCase(_readNodeName(parentNode));
			} else {
				parent = { namespaceURI: NAMESPACE };
				parentTagName = "template";
			}
			if (!ALLOWED_NAMESPACES[elementNamespace]) return false;
			if (elementNamespace === SVG_NAMESPACE) return _checkSvgNamespace(tagName, parent, parentTagName);
			if (elementNamespace === MATHML_NAMESPACE) return _checkMathMlNamespace(tagName, parent, parentTagName);
			if (elementNamespace === HTML_NAMESPACE) return _checkHtmlNamespace(tagName, parent, parentTagName);
			if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[elementNamespace]) return true;
			return false;
		};
		/**
		* _forceRemove
		*
		* @param node a DOM node
		*/
		const _forceRemove = function _forceRemove(node) {
			arrayPush(DOMPurify.removed, { element: node });
			try {
				getParentNode(node).removeChild(node);
			} catch (_) {
				remove(node);
				if (!getParentNode(node)) throw typeErrorCreate("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
			}
		};
		/**
		* _stripAttributeNode
		*
		* Remove a single Attr node case/namespace-exactly on an attribute-teardown
		* path. Name-based removeAttribute() ASCII-lowercases its lookup key for an
		* HTML element in an HTML document and so silently misses a case-preserved
		* handler (e.g. `ONERROR` off an XML/XHTML import) - the same defect
		* _removeAttribute() was fixed for, which a name-based call would reintroduce
		* on these IN_PLACE teardown paths. Unlike _removeAttribute this does not
		* record into DOMPurify.removed: the neutralize passes intentionally do not
		* book-keep. A clobbered/detached node falls back to best-effort name-based
		* removal.
		*
		* @param element the element to strip the attribute from
		* @param attribute the Attr node to remove
		* @param name the attribute's name, for the fallback path
		*/
		const _stripAttributeNode = function _stripAttributeNode(element, attribute, name) {
			try {
				removeAttributeNode(element, attribute);
			} catch (_) {
				try {
					element.removeAttribute(name);
				} catch (_) {}
			}
		};
		/**
		* Fail-closed teardown of an in-place root: strip every disallowed attribute
		* in the subtree first, so nothing armed is left behind, then remove all
		* children and the root's own attributes.
		*
		* @param root the in-place root to empty
		*/
		const _neutralizeRoot = function _neutralizeRoot(root) {
			_neutralizeSubtree(root);
			const childNodes = getChildNodes(root);
			if (childNodes) arrayForEach(arraySlice(childNodes), (child) => {
				try {
					remove(child);
				} catch (_) {}
			});
			const attributes = _readNodeType(root) === NODE_TYPE.element ? getAttributes(root) : null;
			if (attributes) for (let i = attributes.length - 1; i >= 0; --i) {
				const attribute = attributes[i];
				const name = attribute && attribute.name;
				if (typeof name === "string") _stripAttributeNode(root, attribute, name);
			}
		};
		/**
		* Removes an attribute, preferably as its exact Attr node: name-based
		* removal lowercases the name in HTML documents and misses case-preserved
		* names, e.g. from imported XHTML.
		*
		* @param name an Attribute name
		* @param element a DOM node
		* @param attr the exact Attr node to remove, when the caller has it
		*/
		const _removeAttribute = function _removeAttribute(name, element, attr) {
			if (!attr) try {
				attr = element.getAttributeNode(name);
			} catch (_) {
				attr = null;
			}
			arrayPush(DOMPurify.removed, {
				attribute: attr || null,
				from: element
			});
			try {
				if (attr) removeAttributeNode(element, attr);
				else element.removeAttribute(name);
			} catch (_) {
				try {
					element.removeAttribute(name);
				} catch (_) {}
			}
			if (name === "is") {
				if (RETURN_DOM || RETURN_DOM_FRAGMENT) try {
					_forceRemove(element);
				} catch (_) {}
				else try {
					element.setAttribute(name, "");
				} catch (_) {}
			}
		};
		/**
		* Removes every attribute the configuration does not allow. Used to
		* neutralize nodes discarded from an in-place tree.
		*
		* @param element the element to strip
		*/
		const _stripDisallowedAttributes = function _stripDisallowedAttributes(element) {
			const attributes = getAttributes(element);
			if (!attributes) return;
			for (let i = attributes.length - 1; i >= 0; --i) {
				const attribute = attributes[i];
				const name = attribute && attribute.name;
				if (typeof name !== "string" || ALLOWED_ATTR[transformCaseFunc(name)]) continue;
				_stripAttributeNode(element, attribute, name);
			}
		};
		/**
		* Iterative depth-first walk, so deep trees cannot overflow the call stack,
		* reading through the cached getters, so clobbering cannot hide children.
		* When `visit` returns false, the node's children are skipped. With
		* `intoShadow`, open shadow roots are walked after their host's children.
		*
		* @param root where to start
		* @param visit called for every node
		* @param intoShadow whether to enter open shadow roots
		*/
		const _walkTree = function _walkTree(root, visit) {
			let intoShadow = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
			const stack = [root];
			while (stack.length > 0) {
				const node = stack.pop();
				if (visit(node) === false) continue;
				if (intoShadow && _readNodeType(node) === NODE_TYPE.element) {
					const shadowRoot = getShadowRoot(node);
					if (_isDocumentFragment(shadowRoot)) stack.push(shadowRoot);
				}
				const childNodes = getChildNodes(node);
				if (childNodes) for (let i = childNodes.length - 1; i >= 0; --i) stack.push(childNodes[i]);
			}
		};
		/**
		* Strips disallowed attributes from every element of a discarded subtree,
		* so a handler that is already queued (a loading image) cannot fire.
		*
		* @param root the root of a removed subtree
		*/
		const _neutralizeSubtree = function _neutralizeSubtree(root) {
			_walkTree(root, (node) => {
				if (_readNodeType(node) === NODE_TYPE.element) _stripDisallowedAttributes(node);
			});
		};
		/**
		* All nodes under `root`, root first, including open shadow roots. Template
		* content is not entered, it is inert.
		*
		* @param root the in-place root
		* @return the nodes
		*/
		const _collectLiveNodes = function _collectLiveNodes(root) {
			const nodes = [];
			_walkTree(root, (node) => {
				nodes.push(node);
			}, true);
			return nodes;
		};
		/**
		* Strips disallowed attributes from every element that was under the
		* in-place root when the call started and no longer is, whatever removed
		* or moved it.
		*
		* @param root the in-place root
		* @param before the root's nodes, collected before the walk
		*/
		const _neutralizeEscapedElements = function _neutralizeEscapedElements(root, before) {
			const reachable = setCreate();
			arrayForEach(_collectLiveNodes(root), (node) => {
				if (_readNodeType(node) === NODE_TYPE.element) setAdd(reachable, node);
			});
			arrayForEach(before, (node) => {
				if (_readNodeType(node) === NODE_TYPE.element && !setHas(reachable, node)) _stripDisallowedAttributes(node);
			});
		};
		/**
		* Neutralizes everything that left the in-place tree during the call: what
		* DOMPurify removed, and what hooks or custom elements removed or moved out.
		*
		* @param root the in-place root
		* @param before the root's nodes, collected before the walk
		* @return true if the root itself was removed
		*/
		const _neutralizeDiscarded = function _neutralizeDiscarded(root, before) {
			let rootRemoved = false;
			arrayForEach(DOMPurify.removed, (entry) => {
				if (entry.element) {
					rootRemoved = rootRemoved || entry.element === root;
					_neutralizeSubtree(entry.element);
				}
			});
			_neutralizeEscapedElements(root, before);
			return rootRemoved;
		};
		const MAX_UNVISITED_ROUNDS = 8;
		/**
		* The walk only moves forward, so a node moved to a position it already
		* passed is never visited. Give every original node that is still in the
		* tree but unvisited the normal treatment, hooks included. Nodes created
		* during the call are left alone. Fails closed if the tree keeps changing.
		*
		* @param root the in-place root
		* @param before the root's nodes, collected before the walk
		*/
		const _sanitizeUnvisitedNodes = function _sanitizeUnvisitedNodes(root, before) {
			const visited = IN_PLACE_VISITED;
			let original = null;
			const getOriginal = () => {
				if (!original) {
					original = setCreate();
					arrayForEach(before, (beforeNode) => {
						setAdd(original, beforeNode);
					});
				}
				return original;
			};
			for (let round = 0;; round++) {
				const live = _collectLiveNodes(root);
				const containers = [root];
				let pending = false;
				arrayForEach(live, (node) => {
					if (_readNodeType(node) === NODE_TYPE.documentFragment) arrayPush(containers, node);
					else if (!pending && !setHas(visited, node)) pending = setHas(getOriginal(), node);
				});
				if (!pending) return;
				if (round >= MAX_UNVISITED_ROUNDS) throw typeErrorCreate("the tree kept changing during in-place sanitization; refusing to return it");
				arrayForEach(containers, (container, index) => {
					_sanitizeUnvisitedIn(container, index > 0, root, getOriginal());
				});
			}
		};
		/**
		* One _sanitizeUnvisitedNodes pass over the root or an open shadow root.
		*
		* @param container the root or an open shadow root
		* @param inShadow whether container is a shadow root
		* @param root the in-place root
		* @param original the root's nodes collected before the walk, as a set
		*/
		const _sanitizeUnvisitedIn = function _sanitizeUnvisitedIn(container, inShadow, root, original) {
			const iterator = _createNodeIterator(container);
			let node;
			while (node = iterator.nextNode()) {
				if (!setHas(original, node) || setHas(IN_PLACE_VISITED, node)) continue;
				if (inShadow) _executeHooks(hooks.uponSanitizeShadowNode, node, null);
				_sanitizeElements(node, root);
				_sanitizeAttributes(node, root);
				if (_isDocumentFragment(node.content)) _sanitizeShadowDOM2(node.content);
			}
		};
		/**
		* Records that _sanitizeElements processed `node`. No-op outside IN_PLACE.
		*
		* @param node the node being processed
		*/
		const _markVisited = function _markVisited(node) {
			if (IN_PLACE_VISITED) setAdd(IN_PLACE_VISITED, node);
		};
		/**
		* Patch-linkage attributes (declarative partial updates): `patchsrc`
		* always, `for` everywhere except on <label> and <output>. Gated on
		* SAFE_FOR_XML. Shared by the IN_PLACE pre-pass and _isValidAttribute.
		*
		* @param lcName the transformCaseFunc'd attribute name
		* @param lcTag the transformCaseFunc'd tag name of the carrying element
		* @return true if the attribute is patch linkage and must be dropped
		*/
		const _isPatchLinkageAttribute = function _isPatchLinkageAttribute(lcName, lcTag) {
			if (!SAFE_FOR_XML) return false;
			if (lcName === "patchsrc") return true;
			return lcName === "for" && lcTag !== "label" && lcTag !== "output";
		};
		/**
		* IN_PLACE pre-pass: sever all patch linkage before the walk, so no patch
		* can fire mid-walk into a part of the tree the walker already passed.
		* Removes range markers (processing instructions, comments with markup)
		* and strips linkage attributes. It cannot undo a patch that already fired.
		*
		* TODO: if the shipped feature can patch through `for` on <label>/<output>,
		* drop that pair here too (see test/declarative-patch-probe.html).
		*
		* @param root the in-place root to sweep
		*/
		const _neutralizePatchLinkage = function _neutralizePatchLinkage(root) {
			if (!SAFE_FOR_XML) return;
			_walkTree(root, (node) => {
				const nodeType = _readNodeType(node);
				if (nodeType === NODE_TYPE.processingInstruction || nodeType === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, node.data)) {
					try {
						remove(node);
					} catch (_) {}
					return false;
				}
				if (nodeType === NODE_TYPE.element) {
					const element = node;
					const lcTag = transformCaseFunc(_readNodeName(node));
					try {
						if (element.hasAttribute && element.hasAttribute("patchsrc")) element.removeAttribute("patchsrc");
						if (element.hasAttribute && element.hasAttribute("for") && _isPatchLinkageAttribute("for", lcTag)) element.removeAttribute("for");
					} catch (_) {}
				}
				return true;
			});
		};
		/**
		* _initDocument
		*
		* @param dirty - a string of dirty markup
		* @return a DOM, filled with the dirty markup
		*/
		const _initDocument = function _initDocument(dirty) {
			let doc = null;
			let leadingWhitespace = null;
			if (FORCE_BODY) dirty = "<remove></remove>" + dirty;
			else {
				const matches = stringMatch(dirty, /^[\r\n\t ]+/);
				leadingWhitespace = matches && matches[0];
			}
			if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) dirty = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + dirty + "</body></html>";
			const dirtyPayload = trustedTypesPolicy ? _createTrustedHTML(dirty) : dirty;
			if (NAMESPACE === HTML_NAMESPACE) try {
				doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
			} catch (_) {}
			if (!doc || !doc.documentElement) {
				doc = implementation.createDocument(NAMESPACE, "template", null);
				try {
					doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
				} catch (_) {}
			}
			const body = doc.body || doc.documentElement;
			if (dirty && leadingWhitespace) body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
			if (NAMESPACE === HTML_NAMESPACE) return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
			return WHOLE_DOCUMENT ? doc.documentElement : body;
		};
		/**
		* Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
		*
		* @param root The root element or node to start traversing on.
		* @return The created NodeIterator
		*/
		const _createNodeIterator = function _createNodeIterator(root) {
			const doc = getOwnerDocument ? getOwnerDocument(root) : root.ownerDocument;
			return createNodeIterator.call(doc || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
		};
		/**
		* Replace template expression syntax (mustache, ERB, template
		* literal) with a space; shared by all SAFE_FOR_TEMPLATES scrub
		* sites. Order matters: mustache, then ERB, then template literal.
		*
		* @param value the string to scrub
		* @returns the scrubbed string
		*/
		const _stripTemplateExpressions = function _stripTemplateExpressions(value) {
			value = stringReplace(value, MUSTACHE_EXPR$1, " ");
			value = stringReplace(value, ERB_EXPR$1, " ");
			value = stringReplace(value, TMPLIT_EXPR$1, " ");
			return value;
		};
		/**
		* Strip template-engine expressions ({{...}}, ${...}, <%...%>) from the
		* character data of an element subtree. Used as the final safety net for
		* SAFE_FOR_TEMPLATES on every DOM-returning code path so that expressions
		* which only form after text-node normalization (e.g. fragments split across
		* stripped elements) cannot survive into a template-evaluating framework.
		*
		* Walks text/comment/CDATA/processing-instruction nodes and mutates `.data`
		* in place rather than round-tripping through innerHTML. This preserves
		* descendant node references (important for IN_PLACE callers), avoids a
		* serialize/reparse cycle, and reads literal character data — which means
		* `<%...%>` in text content matches the ERB regex against its real bytes
		* instead of the HTML-entity-escaped form innerHTML would produce.
		*
		* Attribute values are not visited here; SAFE_FOR_TEMPLATES handling for
		* attributes is performed during the per-node `_sanitizeAttributes` pass.
		*
		* @param node The root element whose character data should be scrubbed.
		*/
		const _scrubTemplateExpressions2 = function _scrubTemplateExpressions(node) {
			var _node$querySelectorAl;
			_scrubOwnCharacterData(node);
			const templates = (_node$querySelectorAl = node.querySelectorAll) === null || _node$querySelectorAl === void 0 ? void 0 : _node$querySelectorAl.call(node, "template");
			if (templates) arrayForEach(templates, (tmpl) => {
				if (_isDocumentFragment(tmpl.content)) _scrubTemplateExpressions2(tmpl.content);
			});
		};
		/**
		* _scrubOwnCharacterData
		*
		* Non-recursive core of _scrubTemplateExpressions: normalize `node` and
		* strip template expressions from its own character data only. Does not
		* enter <template>.content or attached shadow roots (NodeIterator never
		* does). Used by _sanitizeShadowDOM, where every nested template content
		* and shadow root is already walked - and therefore scrubbed - by its own
		* recursive _sanitizeShadowDOM call; recursing here as well would rescrub
		* each nested fragment once per ancestor, which is quadratic in nesting
		* depth.
		*
		* @param node The root whose own character data should be scrubbed.
		*/
		const _scrubOwnCharacterData = function _scrubOwnCharacterData(node) {
			node.normalize();
			const doc = getOwnerDocument ? getOwnerDocument(node) : node.ownerDocument;
			const walker = createNodeIterator.call(doc || node, node, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_CDATA_SECTION | NodeFilter.SHOW_PROCESSING_INSTRUCTION, null);
			let currentNode = walker.nextNode();
			while (currentNode) {
				currentNode.data = _stripTemplateExpressions(currentNode.data);
				currentNode = walker.nextNode();
			}
		};
		/**
		* _isClobbered
		*
		* Detect DOM-clobbering on HTMLFormElement nodes. Form is the only HTML
		* interface with [LegacyOverrideBuiltIns]; a descendant element with a
		* `name` attribute matching a prototype property shadows that property
		* on direct reads. We use this check at the IN_PLACE entry-point and
		* during attribute sanitization to refuse clobbered forms.
		*
		* @param element element to check for clobbering attacks
		* @return true if clobbered, false if safe
		*/
		const _isClobbered = function _isClobbered(element) {
			const realTagName = getNodeName ? getNodeName(element) : null;
			if (typeof realTagName !== "string") return false;
			if (transformCaseFunc(realTagName) !== "form") return false;
			return typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || element.attributes !== getAttributes(element) || typeof element.removeAttribute !== "function" || typeof element.removeAttributeNode !== "function" || typeof element.getAttributeNode !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function" || element.nodeType !== getNodeType(element) || element.childNodes !== getChildNodes(element);
		};
		/**
		* Checks whether the given value is a DocumentFragment from any realm.
		*
		* The realm-independent replacement reads `nodeType` through the cached
		* Node.prototype getter and compares to the DOCUMENT_FRAGMENT_NODE
		* constant (11). nodeType is a numeric value resolved from the node's
		* internal slot, identical across realms for the same kind of node.
		*
		* @param value object to check
		* @return true if value is a DocumentFragment-shaped node from any realm
		*/
		const _isDocumentFragment = function _isDocumentFragment(value) {
			if (!getNodeType || typeof value !== "object" || value === null) return false;
			try {
				return getNodeType(value) === NODE_TYPE.documentFragment;
			} catch (_) {
				return false;
			}
		};
		/**
		* Checks whether the given object is a DOM node, including nodes that
		* originate from a different window/realm (e.g. an iframe's
		* contentDocument). The previous `value instanceof Node` check was
		* realm-bound: nodes from a different window failed it, causing
		* sanitize() to silently stringify them and reset IN_PLACE to false,
		* returning the original node unsanitized. See GHSA-4w3q-35jp-p934.
		*
		* @param value object to check whether it's a DOM node
		* @return true if value is a DOM node from any realm
		*/
		const _isNode = function _isNode(value) {
			if (!getNodeType || typeof value !== "object" || value === null) return false;
			try {
				return typeof getNodeType(value) === "number";
			} catch (_) {
				return false;
			}
		};
		function _executeHooks(hooks, currentNode, data) {
			if (hooks.length === 0) return;
			arrayForEach(hooks, (hook) => {
				hook.call(DOMPurify, currentNode, data, CONFIG);
			});
		}
		/**
		* Structural-threat checks that condemn a node regardless of the
		* allowlists: mXSS via namespace confusion, risky CSS construction,
		* processing instructions, markup-bearing comments. Pure predicate;
		* the caller removes. Check order is load-bearing.
		*
		* @param currentNode the node to inspect
		* @param tagName the node's transformCaseFunc'd tag name
		* @return true if the node must be removed
		*/
		const _isUnsafeNode = function _isUnsafeNode(currentNode, tagName) {
			if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.textContent) && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.innerHTML)) return true;
			if (SAFE_FOR_XML && LITERAL_TEXT_ELEMENTS[tagName] && _readNodeType(currentNode) === NODE_TYPE.element && _readNamespaceURI(currentNode) === HTML_NAMESPACE && (_isNode(currentNode.firstElementChild) || typeof currentNode.textContent === "string" && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.textContent))) return true;
			if (currentNode.nodeType === NODE_TYPE.processingInstruction) return true;
			if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, currentNode.data)) return true;
			return false;
		};
		/**
		* Evaluate a CUSTOM_ELEMENT_HANDLING check (a RegExp or a predicate
		* function, per the validation in _parseConfig) against a name.
		* Additional arguments are forwarded to predicate functions - the
		* attributeNameCheck predicate receives the tag name as its second
		* argument. A null/absent check never matches.
		*
		* @param check the configured tagNameCheck / attributeNameCheck value
		* @param name the name to test
		* @param args extra arguments forwarded to a predicate function
		* @return true if the check matches the name
		*/
		const _matchesNameCheck = function _matchesNameCheck(check, name) {
			if (check instanceof RegExp) return regExpTest(check, name);
			if (check instanceof Function) {
				for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
				return Boolean(check(name, ...args));
			}
			return false;
		};
		/**
		* Handle a node whose tag is forbidden or not allowlisted: keep
		* allowed custom elements (false return exits _sanitizeElements
		* early - the namespace and fallback-tag removal checks are
		* intentionally skipped for kept custom elements), else hoist
		* content per KEEP_CONTENT and remove.
		*
		* A kept custom element is the ONLY case in which this function
		* returns false, so the caller uses that return value to run the
		* afterSanitizeElements hook on the kept element and keep the
		* element-hook lifecycle consistent with normal allowlisted
		* elements (GHSA-c2j3-45gr-mqc4).
		*
		* @param currentNode the disallowed node
		* @param tagName the node's transformCaseFunc'd tag name
		* @return true if the node was removed, false if kept
		*/
		const _sanitizeDisallowedNode = function _sanitizeDisallowedNode(currentNode, tagName, root) {
			if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName) && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
			if (KEEP_CONTENT && !FORBID_CONTENTS[tagName] && !FORBID_CONTENTS[stringToLowerCase(tagName)]) {
				const parentNode = getParentNode(currentNode);
				const childNodes = getChildNodes(currentNode);
				if (childNodes && parentNode) {
					const childCount = childNodes.length;
					for (let i = childCount - 1; i >= 0; --i) {
						const hoisted = currentNode === root ? cloneNode(childNodes[i], true) : childNodes[i];
						parentNode.insertBefore(hoisted, getNextSibling(currentNode));
					}
				}
			}
			_forceRemove(currentNode);
			return true;
		};
		/**
		* Fork a hook-mutable allowlist off its shared binding the first time a
		* (possibly lazily-installed) uponSanitize* hook is about to see it, so the
		* hook cannot widen the per-instance default or the setConfig binding by
		* reference and leak past the call. Returns the set unchanged once it is
		* already call-local, so repeated calls across elements are idempotent.
		*
		* @param hookList the uponSanitize* hook array for this event
		* @param set the current ALLOWED_TAGS / ALLOWED_ATTR binding
		* @param defaultSet the per-instance DEFAULT_ALLOWED_* constant
		* @param setConfigSet the captured setConfig() binding, or null
		* @return a call-local clone if a hook is present and set is still shared,
		*   else set unchanged
		*/
		const _forkSharedAllowlist = function _forkSharedAllowlist(hookList, set, defaultSet, setConfigSet) {
			if (hookList.length === 0) return set;
			return set === defaultSet || set === setConfigSet ? clone(set) : set;
		};
		/**
		* A hook may have detached the node it was called for. If so, treat it as
		* removed and stop processing it; the walk root is exempt. On the IN_PLACE
		* path the detached subtree is neutralized right away.
		*
		* @param currentNode the node a hook may have detached
		* @param root the current walk root
		* @return true if the node was detached
		*/
		const _handleHookDetachedNode = function _handleHookDetachedNode(currentNode, root) {
			if (currentNode === root || getParentNode(currentNode) !== null) return false;
			if (IN_PLACE) _neutralizeSubtree(currentNode);
			return true;
		};
		/**
		* _sanitizeElements
		*
		* @protect nodeName
		* @protect textContent
		* @protect removeChild
		* @param currentNode to check for permission to exist
		* @return true if node was killed, false if left alive
		*/
		const _sanitizeElements = function _sanitizeElements(currentNode, root) {
			_markVisited(currentNode);
			_executeHooks(hooks.beforeSanitizeElements, currentNode, null);
			if (_handleHookDetachedNode(currentNode, root)) return true;
			if (_isClobbered(currentNode)) {
				_forceRemove(currentNode);
				return true;
			}
			const tagName = transformCaseFunc(_readNodeName(currentNode));
			ALLOWED_TAGS = _forkSharedAllowlist(hooks.uponSanitizeElement, ALLOWED_TAGS, DEFAULT_ALLOWED_TAGS, SET_CONFIG_ALLOWED_TAGS);
			_executeHooks(hooks.uponSanitizeElement, currentNode, {
				tagName,
				allowedTags: ALLOWED_TAGS
			});
			if (_handleHookDetachedNode(currentNode, root)) return true;
			if (_isUnsafeNode(currentNode, tagName)) {
				_forceRemove(currentNode);
				return true;
			}
			if (FORBID_TAGS[tagName] || !(EXTRA_ELEMENT_HANDLING.tagCheck instanceof Function && EXTRA_ELEMENT_HANDLING.tagCheck(tagName)) && !ALLOWED_TAGS[tagName]) {
				const removed = _sanitizeDisallowedNode(currentNode, tagName, root);
				if (removed === false) {
					_executeHooks(hooks.afterSanitizeElements, currentNode, null);
					if (_handleHookDetachedNode(currentNode, root)) return true;
				}
				return removed;
			}
			if (_readNodeType(currentNode) === NODE_TYPE.element && !_checkValidNamespace(currentNode)) {
				_forceRemove(currentNode);
				return true;
			}
			if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(FALLBACK_TAG_CLOSE, currentNode.innerHTML)) {
				_forceRemove(currentNode);
				return true;
			}
			if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
				const content = _stripTemplateExpressions(currentNode.textContent);
				if (currentNode.textContent !== content) {
					arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
					currentNode.textContent = content;
				}
			}
			_executeHooks(hooks.afterSanitizeElements, currentNode, null);
			return _handleHookDetachedNode(currentNode, root);
		};
		/**
		* _isValidAttribute
		*
		* @param lcTag Lowercase tag name of containing element.
		* @param lcName Lowercase attribute name.
		* @param value Attribute value.
		* @return Returns true if `value` is valid, otherwise false.
		*/
		const _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
			if (FORBID_ATTR[lcName]) return false;
			if (_isPatchLinkageAttribute(lcName, lcTag)) return false;
			if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document || value in formElement)) return false;
			const nameIsPermitted = ALLOWED_ATTR[lcName] || EXTRA_ELEMENT_HANDLING.attributeCheck instanceof Function && EXTRA_ELEMENT_HANDLING.attributeCheck(lcName, lcTag);
			if (ALLOW_DATA_ATTR && regExpTest(DATA_ATTR$1, lcName)) return true;
			if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) return true;
			if (!nameIsPermitted) return _isBasicCustomElement(lcTag) && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName, lcTag) || lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value);
			if (URI_SAFE_ATTRIBUTES[lcName]) return true;
			if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) return true;
			if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) return true;
			if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) return true;
			return !value;
		};
		const RESERVED_CUSTOM_ELEMENT_NAMES = addToSet({}, [
			"annotation-xml",
			"color-profile",
			"font-face",
			"font-face-format",
			"font-face-name",
			"font-face-src",
			"font-face-uri",
			"missing-glyph"
		]);
		/**
		* _isBasicCustomElement
		* checks if at least one dash is included in tagName, and it's not the first char
		* for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
		*
		* @param tagName name of the tag of the node to sanitize
		* @returns Returns true if the tag name meets the basic criteria for a custom element, otherwise false.
		*/
		const _isBasicCustomElement = function _isBasicCustomElement(tagName) {
			return !RESERVED_CUSTOM_ELEMENT_NAMES[stringToLowerCase(tagName)] && regExpTest(CUSTOM_ELEMENT$1, tagName);
		};
		/**
		* Wrap an attribute value in the matching Trusted Types object when
		* the active policy requires it. Namespaced attributes pass through
		* unchanged (no TT support yet, see
		* https://bugs.chromium.org/p/chromium/issues/detail?id=1305293).
		*
		* @param lcTag lowercase tag name of the containing element
		* @param lcName lowercase attribute name
		* @param namespaceURI the attribute's namespace, if any
		* @param value the attribute value to wrap
		* @return the value, wrapped when Trusted Types demand it
		*/
		const _applyTrustedTypesToAttribute = function _applyTrustedTypesToAttribute(lcTag, lcName, namespaceURI, value) {
			if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function" && !namespaceURI) switch (trustedTypes.getAttributeType(lcTag, lcName)) {
				case "TrustedHTML": return _createTrustedHTML(value);
				case "TrustedScriptURL": return _createTrustedScriptURL(value);
			}
			return value;
		};
		/**
		* Write a modified attribute value back onto the element. On
		* success, re-probe for clobbering introduced by the new value and
		* remove the element when found; otherwise, when this writeback is the
		* recreate half of the SANITIZE_NAMED_PROPS remove-and-recreate, pop the
		* removal entry that path recorded so it does not show as removed. On
		* failure, remove the attribute instead.
		*
		* Returns true only on a clean write (the value was set and the new value
		* introduced no clobbering). The caller uses that, together with its own
		* knowledge of whether this attribute pushed a DOMPurify.removed record, to
		* decide whether to pop that record. The pop must happen ONLY for the
		* named-prop remove-and-recreate; popping on any other value change (trim,
		* template scrubbing, Trusted Types) would consume an unrelated _forceRemove
		* subtree-cleanup record and let that detached subtree keep a live event
		* handler through the IN_PLACE neutralization pass (SO-001).
		*
		* @param currentNode the element carrying the attribute
		* @param name the attribute name as present on the element
		* @param namespaceURI the attribute's namespace, if any
		* @param value the new attribute value
		* @return true if the value was written without introducing clobbering
		*/
		const _setAttributeValue = function _setAttributeValue(currentNode, name, namespaceURI, value) {
			try {
				if (namespaceURI) currentNode.setAttributeNS(namespaceURI, name, value);
				else currentNode.setAttribute(name, value);
				if (_isClobbered(currentNode)) {
					_forceRemove(currentNode);
					return false;
				}
				return true;
			} catch (_) {
				_removeAttribute(name, currentNode);
				return false;
			}
		};
		/**
		* _isUnsafeAttributeValue
		*
		* Value-based attribute checks that the attribute walk applies before any
		* hook can force-keep an attribute, shared with the public
		* isValidAttribute() so that it never approves a value sanitize() would
		* strip.
		*
		* @param name the attribute name as found on the node (case preserved)
		* @param value the attribute value
		* @returns true if the attribute must be removed because of its value
		*/
		const _isUnsafeAttributeValue = function _isUnsafeAttributeValue(name, value) {
			if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, value)) return true;
			return stringToLowerCase(name) === "attributename" && stringMatch(value, "href") !== null;
		};
		/**
		* _sanitizeAttributes
		*
		* @protect attributes
		* @protect nodeName
		* @protect removeAttribute
		* @protect setAttribute
		*
		* @param currentNode to sanitize
		* @param root the current walk root
		*/
		const _sanitizeAttributes = function _sanitizeAttributes(currentNode, root) {
			_executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
			if (_handleHookDetachedNode(currentNode, root)) return;
			const attributes = currentNode.attributes;
			if (!attributes || _isClobbered(currentNode)) return;
			ALLOWED_ATTR = _forkSharedAllowlist(hooks.uponSanitizeAttribute, ALLOWED_ATTR, DEFAULT_ALLOWED_ATTR, SET_CONFIG_ALLOWED_ATTR);
			const hookEvent = {
				attrName: "",
				attrValue: "",
				keepAttr: true,
				allowedAttributes: ALLOWED_ATTR,
				forceKeepAttr: void 0
			};
			let l = attributes.length;
			const lcTag = transformCaseFunc(currentNode.nodeName);
			while (l--) {
				const attr = attributes[l];
				const name = attr.name, namespaceURI = attr.namespaceURI, attrValue = attr.value;
				const lcName = transformCaseFunc(name);
				const initValue = attrValue;
				let value = name === "value" ? initValue : stringTrim(initValue);
				let recreatedNamedProp = false;
				hookEvent.attrName = lcName;
				hookEvent.attrValue = value;
				hookEvent.keepAttr = true;
				hookEvent.forceKeepAttr = void 0;
				_executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
				value = hookEvent.attrValue;
				if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name") && stringIndexOf(value, SANITIZE_NAMED_PROPS_PREFIX) !== 0) {
					_removeAttribute(name, currentNode, attr);
					value = SANITIZE_NAMED_PROPS_PREFIX + value;
					recreatedNamedProp = true;
				}
				if (_isUnsafeAttributeValue(name, value)) {
					_removeAttribute(name, currentNode, attr);
					continue;
				}
				if (hookEvent.forceKeepAttr) continue;
				if (!hookEvent.keepAttr) {
					_removeAttribute(name, currentNode, attr);
					continue;
				}
				if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(SELF_CLOSING_TAG, value)) {
					_removeAttribute(name, currentNode, attr);
					continue;
				}
				if (SAFE_FOR_TEMPLATES) value = _stripTemplateExpressions(value);
				if (!_isValidAttribute(lcTag, lcName, value)) {
					_removeAttribute(name, currentNode, attr);
					continue;
				}
				value = _applyTrustedTypesToAttribute(lcTag, lcName, namespaceURI, value);
				if (value !== initValue) {
					if (_setAttributeValue(currentNode, name, namespaceURI, value) && recreatedNamedProp) arrayPop(DOMPurify.removed);
				}
			}
			_executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
			_handleHookDetachedNode(currentNode, root);
		};
		/**
		* _sanitizeShadowDOM
		*
		* @param fragment to iterate over recursively
		*/
		const _sanitizeShadowDOM2 = function _sanitizeShadowDOM(fragment) {
			let shadowNode = null;
			const shadowIterator = _createNodeIterator(fragment);
			_executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
			while (shadowNode = shadowIterator.nextNode()) {
				_executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
				_sanitizeElements(shadowNode, fragment);
				_sanitizeAttributes(shadowNode, fragment);
				if (_isDocumentFragment(shadowNode.content)) _sanitizeShadowDOM2(shadowNode.content);
				if (_readNodeType(shadowNode) === NODE_TYPE.element) {
					const innerSr = getShadowRoot(shadowNode);
					if (_isDocumentFragment(innerSr)) {
						_sanitizeAttachedShadowRoots(innerSr);
						_sanitizeShadowDOM2(innerSr);
					}
				}
			}
			if (SAFE_FOR_TEMPLATES) _scrubOwnCharacterData(fragment);
			_executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
		};
		/**
		* Sanitizes every attached shadow root under `root`, since the node
		* iterator does not enter shadow trees. Needed for IN_PLACE input and for
		* DOM input whose clonable shadow roots were copied by importNode().
		*
		* @param root the subtree root to walk for attached shadow roots
		*/
		const _sanitizeAttachedShadowRoots = function _sanitizeAttachedShadowRoots(root) {
			const stack = [{
				node: root,
				shadow: null
			}];
			while (stack.length > 0) {
				const item = stack.pop();
				if (item.shadow) {
					_sanitizeShadowDOM2(item.shadow);
					continue;
				}
				const node = item.node;
				const isElement = _readNodeType(node) === NODE_TYPE.element;
				const childNodes = getChildNodes(node);
				if (childNodes) for (let i = childNodes.length - 1; i >= 0; --i) stack.push({
					node: childNodes[i],
					shadow: null
				});
				if (isElement) {
					const rootName = getNodeName ? getNodeName(node) : null;
					if (typeof rootName === "string" && transformCaseFunc(rootName) === "template") {
						const content = node.content;
						if (_isDocumentFragment(content)) stack.push({
							node: content,
							shadow: null
						});
					}
				}
				if (isElement) {
					const sr = getShadowRoot(node);
					if (_isDocumentFragment(sr)) stack.push({
						node: null,
						shadow: sr
					}, {
						node: sr,
						shadow: null
					});
				}
			}
		};
		DOMPurify.sanitize = function(dirty) {
			let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
			let body = null;
			let importedNode = null;
			let currentNode = null;
			let returnNode = null;
			IS_EMPTY_INPUT = !dirty;
			if (IS_EMPTY_INPUT) dirty = "<!-->";
			if (typeof dirty !== "string" && !_isNode(dirty)) {
				dirty = stringifyValue(dirty);
				if (typeof dirty !== "string") throw typeErrorCreate("dirty is not a string, aborting");
			}
			if (!DOMPurify.isSupported) return dirty;
			if (SET_CONFIG) {
				ALLOWED_TAGS = SET_CONFIG_ALLOWED_TAGS;
				ALLOWED_ATTR = SET_CONFIG_ALLOWED_ATTR;
			} else _parseConfig(cfg);
			if (hooks.uponSanitizeElement.length > 0 || hooks.uponSanitizeAttribute.length > 0) ALLOWED_TAGS = clone(ALLOWED_TAGS);
			if (hooks.uponSanitizeAttribute.length > 0) ALLOWED_ATTR = clone(ALLOWED_ATTR);
			DOMPurify.removed = [];
			const inPlace = IN_PLACE && typeof dirty !== "string" && _isNode(dirty);
			let inPlaceNodes = [];
			const outerVisited = IN_PLACE_VISITED;
			if (inPlace) {
				_neutralizePatchLinkage(dirty);
				const nn = _readNodeName(dirty);
				if (typeof nn === "string") {
					const tagName = transformCaseFunc(nn);
					if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
						_neutralizeRoot(dirty);
						throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
					}
				}
				if (_isClobbered(dirty)) {
					_neutralizeRoot(dirty);
					throw typeErrorCreate("root node is clobbered and cannot be sanitized in-place");
				}
				inPlaceNodes = _collectLiveNodes(dirty);
				IN_PLACE_VISITED = setCreate();
			} else if (_isNode(dirty)) {
				body = _initDocument("<!---->");
				importedNode = body.ownerDocument.importNode(dirty, true);
				if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") body = importedNode;
				else if (importedNode.nodeName === "HTML") body = importedNode;
				else body.appendChild(importedNode);
				_sanitizeAttachedShadowRoots(body);
			} else {
				if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf("<") === -1) return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(dirty) : dirty;
				body = _initDocument(dirty);
				if (!body) return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
			}
			if (body && FORCE_BODY) _forceRemove(body.firstChild);
			const walkRoot = inPlace ? dirty : body;
			try {
				if (inPlace) _sanitizeAttachedShadowRoots(dirty);
				const nodeIterator = _createNodeIterator(walkRoot);
				while (currentNode = nodeIterator.nextNode()) {
					_sanitizeElements(currentNode, walkRoot);
					_sanitizeAttributes(currentNode, walkRoot);
					if (_isDocumentFragment(currentNode.content)) _sanitizeShadowDOM2(currentNode.content);
				}
				if (inPlace) _sanitizeUnvisitedNodes(dirty, inPlaceNodes);
			} catch (error) {
				if (inPlace) {
					_neutralizeRoot(dirty);
					_neutralizeDiscarded(dirty, inPlaceNodes);
				}
				throw error;
			} finally {
				IN_PLACE_VISITED = outerVisited;
			}
			if (inPlace) {
				if (_neutralizeDiscarded(dirty, inPlaceNodes)) throw typeErrorCreate("a node selected for removal could not be safely returned; refusing to sanitize in place");
				if (SAFE_FOR_TEMPLATES) _scrubTemplateExpressions2(dirty);
				return dirty;
			}
			if (RETURN_DOM) {
				if (SAFE_FOR_TEMPLATES) _scrubTemplateExpressions2(body);
				if (RETURN_DOM_FRAGMENT) {
					returnNode = createDocumentFragment.call(body.ownerDocument);
					while (body.firstChild) returnNode.appendChild(body.firstChild);
				} else returnNode = body;
				if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) returnNode = importNode.call(originalDocument, returnNode, true);
				return returnNode;
			}
			let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
			if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
			if (SAFE_FOR_TEMPLATES) serializedHTML = _stripTemplateExpressions(serializedHTML);
			return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(serializedHTML) : serializedHTML;
		};
		DOMPurify.setConfig = function() {
			let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			_parseConfig(cfg);
			SET_CONFIG = true;
			SET_CONFIG_ALLOWED_TAGS = ALLOWED_TAGS;
			SET_CONFIG_ALLOWED_ATTR = ALLOWED_ATTR;
		};
		DOMPurify.clearConfig = function() {
			CONFIG = null;
			SET_CONFIG = false;
			SET_CONFIG_ALLOWED_TAGS = null;
			SET_CONFIG_ALLOWED_ATTR = null;
			trustedTypesPolicy = defaultTrustedTypesPolicy;
			emptyHTML = "";
		};
		DOMPurify.isValidAttribute = function(tag, attr, value) {
			if (!CONFIG) _parseConfig({});
			const lcTag = transformCaseFunc(tag);
			const lcName = transformCaseFunc(attr);
			if (typeof value === "string" && (_isUnsafeAttributeValue(attr, value) || !ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(SELF_CLOSING_TAG, value))) return false;
			return _isValidAttribute(lcTag, lcName, value);
		};
		DOMPurify.addHook = function(entryPoint, hookFunction) {
			if (typeof hookFunction !== "function") return;
			if (!objectHasOwnProperty(hooks, entryPoint)) return;
			arrayPush(hooks[entryPoint], hookFunction);
		};
		DOMPurify.removeHook = function(entryPoint, hookFunction) {
			if (!objectHasOwnProperty(hooks, entryPoint)) return;
			if (hookFunction !== void 0) {
				const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
				return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
			}
			return arrayPop(hooks[entryPoint]);
		};
		DOMPurify.removeHooks = function(entryPoint) {
			if (!objectHasOwnProperty(hooks, entryPoint)) return;
			hooks[entryPoint] = [];
		};
		DOMPurify.removeAllHooks = function() {
			hooks = _createHooksMap();
		};
		return DOMPurify;
	}
	return createDOMPurify();
});

//# sourceMappingURL=purify.js.map
;
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
;
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
;
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
;
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
;
async function collectConversation(expectedId, signal, onProgress = () => {}) {
  const source = detectConversation(location.href);
  if (!source || source.id !== expectedId) throw aiFailure("providerLocation");
  if (source.provider === "chatgpt") return collectChatGPTConversation(expectedId, signal, onProgress);
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
;
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
;
})();
