# Qwen Chat Exporter · 聊天记录导出器 · 会話エクスポーター

**免费、无水印、不限导出次数、无需扩展账号。**
**Free, no watermark, no export quota, no extension account.**
**無料・透かしなし・回数制限なし・拡張機能アカウント不要。**

> 开发测试版：新增平台仅完成模拟接口验证，尚需真实登录账号验收。不能确认完整历史时停止导出。
> Beta: new platforms are fixture-tested, with live-account validation pending. Incomplete history is rejected.
> ベータ版：新サービスは模擬データで検証済みですが、実アカウントでの検証は未完了です。

[下载 / Downloads / ダウンロード](https://github.com/zhx6172815/qwen-chat-exporter/releases/tag/v0.1.0-beta.1) · [隐私 / Privacy](PRIVACY.md) · [产品目录 / Catalog](https://github.com/zhx6172815/ai-chat-exporter#products)

## 中文

Qwen Chat Exporter 帮助用户导出、下载、保存和备份自己有权访问的对话、聊天记录与消息。支持 Markdown、纯文本 TXT、JSON 和浏览器打印为 PDF。文件在浏览器内生成，不上传至开发者服务器。

这是 Qwen 专用版，仅请求对应服务域名的访问权限，不会在其他 AI 网站运行。Qwen 国际站与千问中国站是两个独立版本。

1. 从 Releases 下载 Chromium ZIP 并解压。
2. Edge 打开 `edge://extensions`，Chrome 打开 `chrome://extensions`。开启开发人员模式，加载包含 `manifest.json` 的目录。
3. 打开一段已保存的受支持对话，点扩展，首次选择中文/English/日本語。
4. 在原聊天页面的进度弹窗导出；完成后可使用“转换其他格式”，不重复拉取。
5. Firefox ZIP 必须先通过 Mozilla 签名才能常规安装；开发测试可通过 `about:debugging` 临时加载 manifest。当前下载不是已签名 XPI。

图片、音视频和附件目前保留已识别的文字或资源引用，不打包原始二进制文件。平台内部接口变化、登录状态和访问权限可能影响导出。

## English

Export, download, save and back up Qwen conversations, chat history and messages as Markdown, plain TXT, JSON or print to PDF. Use an in-page progress dialog and convert a cached conversation to another format without fetching again. Chinese, English and Japanese UI preferences are saved. No developer-operated payment, account, analytics or chat-upload service is included.

This standalone edition is restricted to Qwen service hosts. It is not a launcher for the integrated edition.
Download the Chromium ZIP from Releases, extract it and load its manifest folder in developer mode. Firefox ZIPs are unsigned development packages until Mozilla signing completes. Browser-store approval is tracked separately from GitHub publication.

## 日本語

Qwen の会話履歴・メッセージをエクスポート、ダウンロード、保存、バックアップする無料ツールです。Markdown、TXT、JSON、PDF印刷、中国語・英語・日本語、ページ内進捗と取得済み履歴の形式変換に対応します。開発者向けのチャット送信・会員・決済サービスは含みません。

Releases の Chromium ZIP を解凍し、開発者モードで manifest.json のフォルダーを読み込んでください。Firefox ZIP は署名前の開発用パッケージです。ブラウザーストアへの登録状況と GitHub の公開は別に管理しています。

## Development

Source files are included alongside runtime.js. Rebuild after editing:

```sh
node scripts/build-runtime.cjs
node scripts/build-runtime.cjs --check
```

Marked and DOMPurify are bundled locally, with their license files in vendor/. This is an independent project, unaffiliated with the AI service providers. Public source availability is not a claim of store approval.
