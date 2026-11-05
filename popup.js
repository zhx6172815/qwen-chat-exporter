const buttons=[...document.querySelectorAll('[data-format]')],status=document.querySelector('#status');
document.querySelector('#product-title').textContent=providerTitle(AI_EXPORTER_BUILD.product)+' 聊天记录导出器';
localizeInterface(document.body);
addLanguageControl(document.body,{firstRun:true,onReady:()=>document.body.removeAttribute('data-first-language')});
async function currentConversation(){const [tab]=await chrome.tabs.query({active:true,currentWindow:true});const source=detectConversation(tab?.url||'');return source?{...source,tabId:tab.id}:null;}
async function exportChat(format){
 buttons.forEach(b=>b.disabled=true);
 try{
  const source=await currentConversation();if(!source)throw Error(AI_ERROR_ZH.providerUnsupported);
  await chrome.scripting.executeScript({target:{tabId:source.tabId},files:['runtime.js']});
  await chrome.scripting.executeScript({target:{tabId:source.tabId},func:(format,id,language)=>globalThis.__gptChatExporter.open(format,id,language),args:[format,source.id,currentLanguage]});
  window.close();
 }catch(error){status.textContent=interfaceError(error,'无法打开导出弹窗，请刷新对话后重试。');status.classList.add('error');buttons.forEach(b=>b.disabled=false);}
}
buttons.forEach(button=>button.addEventListener('click',()=>exportChat(button.dataset.format)));
currentConversation().then(source=>{
 status.textContent=source?'自动读取完整消息历史，无需向上翻页。':AI_ERROR_ZH.providerUnsupported;
 document.querySelector('#adapter-status').textContent=source&&source.status==='experimental'?'实验适配 · 需真实账号核验完整性':'';
}).catch(()=>{status.textContent='无法读取当前标签页。';});
