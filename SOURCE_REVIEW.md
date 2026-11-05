# Source and security review notes

runtime.js is an offline concatenation of the readable JavaScript/CSS sources beside it. It is rebuilt by scripts/build-runtime.cjs, with --check verifying byte-for-byte reproducibility. There is no remote code loading, eval-based downloaded code, server component, payment code or export quota.

Bundled third-party libraries: Marked (vendor/marked.js) and DOMPurify (vendor/purify.js). License files are included in vendor/. Upstream sources: https://github.com/markedjs/marked and https://github.com/cure53/DOMPurify . Do not remove their license headers.

Mozilla lint may flag innerHTML assignments. Conversation Markdown is passed through markdownHTML(), which calls DOMPurify.sanitize with an explicit tag/attribute allowlist before insertion. The dialog markup uses fixed UI strings and a format selected from a fixed enum; conversation text is assigned through textContent. The remaining warning inside DOMPurify is part of the local sanitizer implementation. These notes explain the code paths; they do not replace human review or claim AMO approval.

Firefox packages declare minimum 142 to cover the manifest data-collection declarations consistently. Actual Firefox runtime and real platform account acceptance remain separately tracked. Screenshots named DEMO use test fixtures, not private user chats.
