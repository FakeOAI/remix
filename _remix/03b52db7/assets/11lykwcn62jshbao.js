import{az as f,aA as M,aB as A,b as v,L as S,aC as B}from"./grb1rrh8esowjpbm.js";import{t as K}from"./c176p1tvb72ey8bx.js";import{a8 as L,r as w,bq as D,R as P,P as T,d as E,D as x,a5 as R}from"./e9n3rg14pzg374g3.js";import{T as g}from"./h0laljsy4ysc90hu.js";import{u as F,U as p,G as k}from"./ioz8cfcg5s4hqq33.js";const G=/```.*?\n([\s\S]+?)\n?```[^`]*$/gms;function U(){return/Mac|iPod|iPhone|iPad/.test(window.navigator.platform)}const e={Mod:"mod",Comma:",",...f.Key},V={[e.Mod]:U()?"⌘":"Ctrl",[e.Comma]:",",[e.Enter]:"⏎",[e.Escape]:"Esc",[e.ArrowUp]:"↑",[e.ArrowDown]:"↓",[e.ArrowLeft]:"←",[e.ArrowRight]:"→",[e.Backspace]:"⌫",[e.Delete]:"⌦",[e.Tab]:"⇥",[e.Control]:"Ctrl",[e.Shift]:"Shift"},J=t=>t.map(o=>V[o]??o),i=R({newChat:{id:"keyboardActions.newChat",defaultMessage:"Open new chat"},focusPromptTextarea:{id:"keyboardActions.focusPromptTextarea",defaultMessage:"Focus chat input"},copyLastCodeBlock:{id:"keyboardActions.copyLastCodeBlock",defaultMessage:"Copy last code block"},copyLastResponse:{id:"keyboardActions.copyLastResponse",defaultMessage:"Copy last response"},toggleCustomInstructions:{id:"keyboardActions.toggleCustomInstructions",defaultMessage:"Set custom instructions"},navigationToggle:{id:"keyboardActions.navigationToggle",defaultMessage:"Toggle sidebar"},deleteChat:{id:"keyboardActions.deleteChat",defaultMessage:"Delete chat"},archiveChat:{id:"keyboardActions.archiveChat",defaultMessage:"Archive chat"},toggleKeyboardActions:{id:"keyboardActions.toggleKeyboardActions",defaultMessage:"Show shortcuts"}}),N=new M,_=({resetThreadAction:t,clientThreadId:o,focusPromptTextareaAction:n,toaster:a,isFannyPackEnabled:r})=>[{key:"newChat",action:t||D,actionMessageDescriptor:i.newChat,group:"Core",keyboardBinding:[e.Mod,e.Shift,"o"],altKeyboardBindings:r?[]:[[e.Mod,"k"]]},{key:"focusPromptTextarea",action:n??K,actionMessageDescriptor:i.focusPromptTextarea,group:"Chat",keyboardBinding:[e.Shift,e.Escape]},{key:"copyLastCodeBlock",action:s=>{if(o!=null){const c=g.getThreadCurrentLeafId(o),b=g.getThreadConversationTurns(o,c);for(let l=b.length-1;l>=0;l--){const{messages:C}=b[l],u=[...C.reduce((y,d)=>d.err==null&&d.message.author.role===P.Assistant&&d.message.recipient==="all"?y+(y?`

`:"")+v(d.message):y,"").matchAll(G)],h=u.length?u[u.length-1][1]:null;if(h!=null){S(h,a,s).then(()=>{a.success("Copied code block to clipboard")});break}}}},actionMessageDescriptor:i.copyLastCodeBlock,group:"Chat",keyboardBinding:[e.Mod,e.Shift,";"],altKeyboardBindings:[[e.Mod,e.Shift,":"]]},{key:"copyLastResponse",action:s=>{o!=null&&g.copyLastMessageToClipboard(o,a,s,"keyboard").then(()=>{a.success("Last response copied to clipboard")})},actionMessageDescriptor:i.copyLastResponse,group:"Chat",keyboardBinding:[e.Mod,e.Shift,"c"]},{key:"toggleCustomInstructions",action:()=>p.toggleModal(k.UserContext),actionMessageDescriptor:i.toggleCustomInstructions,group:"Settings",keyboardBinding:[e.Mod,e.Shift,"i"]},{key:"navigationToggle",action:()=>p.toggleNavSidebar(),actionMessageDescriptor:i.navigationToggle,group:"Core",keyboardBinding:[e.Mod,e.Shift,"s"]},{key:"deleteChat",action:()=>{if(o){const s=g.getServerThreadId(o);s&&N.publish({kind:"deleteChat",serverThreadId:s})}},actionMessageDescriptor:i.deleteChat,group:"Chat",keyboardBinding:[e.Mod,e.Shift,e.Backspace],altKeyboardBindings:[[e.Mod,e.Shift,e.Delete]]},{key:"toggleKeyboardActions",action:()=>p.toggleModal(k.KeyboardActions),actionMessageDescriptor:i.toggleKeyboardActions,group:"Settings",keyboardBinding:[e.Mod,"/"]}],m=t=>B(t,o=>{T.logEvent(E.keyboardShortcut,{keyboardActionKey:o.key}),x.addAction("chatgpt_keyboard_shortcut",{keyboardActionKey:o.key})},{enabled:!0}),O=({resetThreadAction:t,clientThreadId:o,focusPromptTextareaAction:n}={})=>{const a=L(),{isFannyPackEnabled:r}=A();return w.useMemo(()=>_({resetThreadAction:t,clientThreadId:o,focusPromptTextareaAction:n,toaster:a,isFannyPackEnabled:r}).filter(({enabled:c=!0})=>c),[a,o,t,r,n])},Q=({resetThreadAction:t,clientThreadId:o,focusPromptTextareaAction:n})=>{const a=O({resetThreadAction:t,clientThreadId:o,focusPromptTextareaAction:n}),s=F(c=>c.isVoiceActive)?[]:a;m(s)},W=({setSelectedVoiceIndex:t,prevVoiceIndex:o,nextVoiceIndex:n,setDirection:a})=>{const r=[{key:"selectPrevVoice",action:()=>{a(-1),t(o)},actionMessageDescriptor:{defaultMessage:"Select previous voice"},group:"Chat",keyboardBinding:[e.ArrowLeft]},{key:"selectNextVoice",action:()=>{a(1),t(n)},actionMessageDescriptor:{defaultMessage:"Select next voice"},group:"Chat",keyboardBinding:[e.ArrowRight]}];m(r)};export{N as G,W as a,O as b,J as g,U as i,Q as u};
//# sourceMappingURL=11lykwcn62jshbao.js.map