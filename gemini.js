// Experimental Gemini history reader. Protocol references are in GEMINI_PROTOCOL.md.
// Authentication stays in memory and is never included in the exported raw records.
async function collectGeminiConversation(source, signal, onProgress) {
  let pages = 0, count = 0;
  const report = (stage, extra = {}) => onProgress({stage, pages, count, ...extra});
  const check = () => {
    if (signal.aborted) throw new Error('Export cancelled.');
    const active = detectConversation(location.href);
    if (!active || active.provider !== 'gemini' || active.url !== source.url) throw aiFailure('providerLocation');
  };
  async function request(url, options = {}) {
    check(); report('waiting');
    const controller = new AbortController();
    const abort = () => controller.abort();
    signal.addEventListener('abort', abort, {once:true});
    const timeout = setTimeout(abort, 45000);
    try {
      const response = await fetch(url, {...options, credentials:'same-origin', cache:'no-store', signal:controller.signal});
      if ([401,403].includes(response.status)) throw aiFailure('providerLogin');
      if (response.status === 429) throw aiFailure('providerBusy');
      if (!response.ok || (response.url && new URL(response.url).origin !== source.origin)) throw aiFailure('providerRequest');
      const reader = response.body?.getReader();
      if (!reader) return response.text();
      const decoder = new TextDecoder(), pieces = []; let receivedBytes = 0;
      try { for (;;) {
        check(); const chunk = await reader.read(); if (chunk.done) break;
        receivedBytes += chunk.value.byteLength;
        pieces.push(decoder.decode(chunk.value, {stream:true})); report('receiving', {receivedBytes, totalBytes:null});
      }} finally { reader.releaseLock(); }
      pieces.push(decoder.decode()); return pieces.join('');
    } catch (error) { check(); if (error.code) throw error; throw aiFailure('providerRequest'); }
    finally {clearTimeout(timeout); signal.removeEventListener('abort',abort);}
  }
  report('auth');
  // Fetch the account-scoped application document; do not request cookie permissions.
  const scope = location.pathname.match(/^\/u\/\d+(?=\/)/)?.[0] || '';
  const html = await request(source.origin + scope + '/app');
  const config = {};
  for (const key of ['SNlM0e','cfb2h','FdrFJe']) {
    const match = html.match(new RegExp('"' + key + '"\\s*:\\s*("(?:[^"\\\\]|\\\\.)*")'));
    try {config[key] = match ? JSON.parse(match[1]) : null;} catch {throw aiFailure('providerLogin');}
    if (typeof config[key] !== 'string' || !config[key]) throw aiFailure('providerLogin');
  }
  const seenCursors = new Set(), seenTurns = new Map(), rawPages = [];
  let cursor = null, ordered = [];
  for (let index = 0; index < 10000; index++) {
    check();
    const query = new URLSearchParams({rpcids:'hNvQHb', 'source-path':location.pathname,
      bl:config.cfb2h, 'f.sid':config.FdrFJe, rt:'c'});
    const args = ['c_' + source.id, 100, cursor, 1, [0], [4], null, 1];
    const body = new URLSearchParams({'f.req':JSON.stringify([[['hNvQHb',JSON.stringify(args),null,'generic']]]),at:config.SNlM0e});
    const text = await request(source.origin + scope + '/_/BardChatUi/data/batchexecute?' + query,
      {method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8','X-Same-Domain':'1'},body:body.toString()});
    report('parsing');
    const page = geminiDecodeHistory(text);
    if (!Array.isArray(page) || !Array.isArray(page[0]) || page.length < 2) throw aiFailure('providerSchema');
    const turns = [];
    for (const turn of page[0]) {
      const identity = turn?.[0];
      if (!Array.isArray(identity) || identity[0] !== 'c_' + source.id || typeof identity[1] !== 'string' || !identity[1]) throw aiFailure('providerLocation');
      const id = identity[1], previous = seenTurns.get(id), signature = JSON.stringify(turn);
      if (previous && previous !== signature) throw aiFailure('providerChanged');
      if (!previous) {seenTurns.set(id,signature); turns.push(turn);}
    }
    if (page[0].length && !turns.length) throw aiFailure('providerStalled');
    ordered = turns.reverse().concat(ordered); rawPages.push(page); pages++;
    count = seenTurns.size * 2; report('page');
    const next = page[1];
    if (next == null || next === '' || (Array.isArray(next) && !next.length)) {
      const messages = [];
      for (const turn of ordered) {
        const id = turn[0][1], prompt = turn?.[2]?.[0]?.[0], candidates = turn?.[3]?.[0];
        if (typeof prompt !== 'string' || !Array.isArray(candidates) || !candidates.length) throw aiFailure('providerSchema');
        const selected = turn?.[1]?.[2];
        const answer = candidates.length === 1 ? candidates[0] : candidates.find(c => c?.[0] === selected);
        const parts = answer?.[1];
        if (!Array.isArray(parts) || !parts.length || parts.some(p => typeof p !== 'string')) throw aiFailure('providerBranch');
        messages.push(aiMessage(id + ':user','user',prompt),aiMessage(id + ':assistant','assistant',parts.join('\n\n')));
      }
      check();
      return aiResult(source,messages,{title:document.title,pages:rawPages},pages,
        {complete:true,type:'exhausted-history-cursor',turns:seenTurns.size});
    }
    if (!(typeof next === 'string' || Array.isArray(next)) || !page[0].length) throw aiFailure('providerCursor');
    const key = JSON.stringify(next);
    if (seenCursors.has(key)) throw aiFailure('providerCursor');
    seenCursors.add(key); cursor = next;
  }
  throw aiFailure('providerIncomplete');
}

function geminiDecodeHistory(text) {
  // Google frames contain newline-delimited JSON arrays after an optional XSSI prefix.
  const matches = [];
  for (const line of text.split('\n')) {
    if (!line.trim().startsWith('[')) continue;
    let rows; try {rows = JSON.parse(line);} catch {throw aiFailure('providerSchema');}
    if (!Array.isArray(rows)) continue;
    for (const row of rows) if (Array.isArray(row) && row[0] === 'wrb.fr' && row[1] === 'hNvQHb') {
      if (typeof row[2] !== 'string') throw aiFailure('providerSchema');
      try {matches.push(JSON.parse(row[2]));} catch {throw aiFailure('providerSchema');}
    }
  }
  if (matches.length !== 1) throw aiFailure('providerSchema');
  return matches[0];
}
