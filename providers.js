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

