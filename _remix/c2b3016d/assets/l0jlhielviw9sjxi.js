import{aJ as M,aK as f,aL as A,A as v,o as K,_ as S,a0 as p,aD as k,aM as B}from"./jt9rrlbcub4nr1o1.js";import{t as L}from"./eksdfk2a9y27t5sp.js";import{aK as w,r as D,X as P,R as T,P as E,a as x,D as R,a0 as F}from"./mi4ha5f7fhlqv21j.js";import{T as g}from"./crlpptjypvmi8lo4.js";const G=/```.*?\n([\s\S]+?)\n?```[^`]*$/gms;function U(){return/Mac|iPod|iPhone|iPad/.test(window.navigator.platform)}const e={Mod:"mod",Comma:",",...M.Key},V={[e.Mod]:U()?"⌘":"Ctrl",[e.Comma]:",",[e.Enter]:"⏎",[e.Escape]:"Esc",[e.ArrowUp]:"↑",[e.ArrowDown]:"↓",[e.ArrowLeft]:"←",[e.ArrowRight]:"→",[e.Backspace]:"⌫",[e.Delete]:"⌦",[e.Tab]:"⇥",[e.Control]:"Ctrl",[e.Shift]:"Shift"},q=t=>t.map(o=>V[o]??o),i=F({newChat:{id:"keyboardActions.newChat",defaultMessage:"Open new chat"},focusPromptTextarea:{id:"keyboardActions.focusPromptTextarea",defaultMessage:"Focus chat input"},copyLastCodeBlock:{id:"keyboardActions.copyLastCodeBlock",defaultMessage:"Copy last code block"},copyLastResponse:{id:"keyboardActions.copyLastResponse",defaultMessage:"Copy last response"},toggleCustomInstructions:{id:"keyboardActions.toggleCustomInstructions",defaultMessage:"Set custom instructions"},navigationToggle:{id:"keyboardActions.navigationToggle",defaultMessage:"Toggle sidebar"},deleteChat:{id:"keyboardActions.deleteChat",defaultMessage:"Delete chat"},archiveChat:{id:"keyboardActions.archiveChat",defaultMessage:"Archive chat"},toggleKeyboardActions:{id:"keyboardActions.toggleKeyboardActions",defaultMessage:"Show shortcuts"}}),_=new f,N=({resetThreadAction:t,clientThreadId:o,focusPromptTextareaAction:n,toaster:a,isFannyPackEnabled:r})=>[{key:"newChat",action:t||P,actionMessageDescriptor:i.newChat,group:"Core",keyboardBinding:[e.Mod,e.Shift,"o"],altKeyboardBindings:r?[]:[[e.Mod,"k"]]},{key:"focusPromptTextarea",action:n??L,actionMessageDescriptor:i.focusPromptTextarea,group:"Chat",keyboardBinding:[e.Shift,e.Escape]},{key:"copyLastCodeBlock",action:s=>{if(o!=null){const c=g.getThreadCurrentLeafId(o),b=g.getThreadConversationTurns(o,c);for(let l=b.length-1;l>=0;l--){const{messages:C}=b[l],u=[...C.reduce((y,d)=>d.err==null&&d.message.author.role===T.Assistant&&d.message.recipient==="all"?y+(y?`

`:"")+K(d.message):y,"").matchAll(G)],h=u.length?u[u.length-1][1]:null;if(h!=null){S(h,a,s).then(()=>{a.success("Copied code block to clipboard")});break}}}},actionMessageDescriptor:i.copyLastCodeBlock,group:"Chat",keyboardBinding:[e.Mod,e.Shift,";"],altKeyboardBindings:[[e.Mod,e.Shift,":"]]},{key:"copyLastResponse",action:s=>{o!=null&&g.copyLastMessageToClipboard(o,a,s,"keyboard").then(()=>{a.success("Last response copied to clipboard")})},actionMessageDescriptor:i.copyLastResponse,group:"Chat",keyboardBinding:[e.Mod,e.Shift,"c"]},{key:"toggleCustomInstructions",action:()=>p.toggleModal(k.UserContext),actionMessageDescriptor:i.toggleCustomInstructions,group:"Settings",keyboardBinding:[e.Mod,e.Shift,"i"]},{key:"navigationToggle",action:()=>p.toggleNavSidebar(),actionMessageDescriptor:i.navigationToggle,group:"Core",keyboardBinding:[e.Mod,e.Shift,"s"]},{key:"deleteChat",action:()=>{if(o){const s=g.getServerThreadId(o);s&&_.publish({kind:"deleteChat",serverThreadId:s})}},actionMessageDescriptor:i.deleteChat,group:"Chat",keyboardBinding:[e.Mod,e.Shift,e.Backspace],altKeyboardBindings:[[e.Mod,e.Shift,e.Delete]]},{key:"toggleKeyboardActions",action:()=>p.toggleModal(k.KeyboardActions),actionMessageDescriptor:i.toggleKeyboardActions,group:"Settings",keyboardBinding:[e.Mod,"/"]}],m=t=>B(t,o=>{E.logEvent(x.keyboardShortcut,{keyboardActionKey:o.key}),R.addAction("chatgpt_keyboard_shortcut",{keyboardActionKey:o.key})},{enabled:!0}),O=({resetThreadAction:t,clientThreadId:o,focusPromptTextareaAction:n}={})=>{const a=w(),{isFannyPackEnabled:r}=A();return D.useMemo(()=>N({resetThreadAction:t,clientThreadId:o,focusPromptTextareaAction:n,toaster:a,isFannyPackEnabled:r}).filter(({enabled:c=!0})=>c),[a,o,t,r,n])},z=({resetThreadAction:t,clientThreadId:o,focusPromptTextareaAction:n})=>{const a=O({resetThreadAction:t,clientThreadId:o,focusPromptTextareaAction:n}),s=v(c=>c.isVoiceActive)?[]:a;m(s)},I=({setSelectedVoiceIndex:t,previousVoiceIndex:o,nextVoiceIndex:n,setDirection:a})=>{const r=[{key:"selectPreviousVoice",action:()=>{a(-1),t(o)},actionMessageDescriptor:{defaultMessage:"Select previous voice"},group:"Chat",keyboardBinding:[e.ArrowLeft]},{key:"selectNextVoice",action:()=>{a(1),t(n)},actionMessageDescriptor:{defaultMessage:"Select next voice"},group:"Chat",keyboardBinding:[e.ArrowRight]}];m(r)};export{_ as G,z as a,O as b,q as g,U as i,I as u};
//# sourceMappingURL=l0jlhielviw9sjxi.js.map