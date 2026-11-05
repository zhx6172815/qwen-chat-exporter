chrome.runtime.onMessage.addListener((message,sender,respond)=>{
 if(sender.id!==chrome.runtime.id||message?.type!=='openConverter')return;
 const source=detectConversation(sender.tab?.url||'');
 if(!source||!/^[0-9a-f-]{36}$/.test(message.key||'')){respond({ok:false,error:'原聊天页面已改变，请重新导出。'});return;}
 const params=new URLSearchParams({tabId:sender.tab.id,id:source.id,origin:source.origin,snapshot:message.key});
 chrome.tabs.create({url:chrome.runtime.getURL('export.html#'+params)}).then(()=>respond({ok:true}),()=>respond({ok:false,error:'转换窗口未能打开，请重试。'}));
 return true;
});
