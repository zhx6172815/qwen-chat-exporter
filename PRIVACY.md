# Privacy · 隐私 · プライバシー

## 中文

Qwen Chat Exporter 是免费本地导出扩展。用户主动点击后，扩展使用对应 AI 网站当前登录会话读取所选对话，在浏览器中生成文件。请求仅发送给对应聊天平台，不发送到开发者服务器。会话凭证不会写入导出文件。扩展不读取浏览器账号，不含会员、支付、广告或统计服务器，不限制导出次数。

界面语言保存在扩展本地存储。转换快照只存在原聊天页的扩展内存中，最多保留十分钟，页面关闭后失效。JSON 可能包含接口返回的原始聊天结构与资源引用；用户自行保管导出文件。图片及附件原始二进制文件不打包。可通过扩展管理页卸载并清除本地设置；已下载文件需另行删除。

独立版仅请求对应服务域名权限；整合版在用户点击后临时获取当前标签页权限，并通过平台白名单检查后才读取。问题反馈使用 GitHub Issues，请不要公开私人对话或凭证。

## English

The extension reads the chosen conversation using your existing AI-site session only after you invoke it. Files are generated locally. It does not upload chats or credentials to a developer server, use a browser account, impose an export quota, or connect to membership, payment, advertising or analytics services.

Language preferences are stored locally. Conversion snapshots stay in source-tab extension memory for up to ten minutes or until the page closes. Exported JSON may contain raw chat structures and resource references. You control downloaded files; uninstalling does not delete them. Standalone editions request only their service hosts; the integrated edition uses an explicitly invoked activeTab permission with a supported-site allowlist.

## 日本語

ユーザーの操作に応じて、AIサイトの既存のログイン状態で選択した会話を取得し、ブラウザー内でファイルを生成します。開発者サーバーへ会話や認証情報を送信せず、ブラウザーアカウントを読み取りません。会員・決済・広告・アクセス解析サービスと出力回数制限はありません。

表示言語はローカルに保存します。形式変換の一時データは元のタブ内で最大10分間保持し、ページを閉じると失われます。JSONには会話の元データやリソース参照が含まれる場合があります。ダウンロードしたファイルはユーザー自身で管理してください。単独版の権限は対象サービスのドメインに限定し、統合版は操作時のactiveTabと対応サービスの確認を使用します。

## Firefox authentication disclosure

Firefox安装时会明确请求认证信息使用同意。扩展仅在用户点击后把现有AI网站的登录凭据发送给该AI网站自身，用于读取所选历史；不发送给开发者服务器。拒绝同意时可取消安装。

Firefox requires consent for authentication information. Existing AI-site credentials go only to the same service for the explicitly requested history. They are never sent to a developer service.

Firefoxでは認証情報の利用への同意を表示します。既存のAIサイトの認証情報は、ユーザーが選択した履歴を取得するため同じサービスだけに送信し、開発者サーバーには送信しません。
