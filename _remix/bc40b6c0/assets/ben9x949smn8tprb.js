import{X as u,cs as c,u as m,a7 as g,R as h,a4 as l}from"./cq30atfn4hkan4n6.js";import{e as d}from"./kxnoie2q7a08rba4.js";import{aZ as v}from"./kuzyui3g7be29dp4.js";import{s as y}from"./bdvmgu50jbql1q2t.js";import{g as p,i as S,T as C}from"./9wq3vd0xhzl7ebfo.js";async function f(a,t){const s=await h.getConversation(a);return l.addTiming("chatgpt.web.chatPage.loadExistingConversation"),C.initThreadFromServerData(a,s,t,void 0,t),y(s.conversation_id,s.async_status??null),s}const q=a=>{const{asPath:t,replace:s}=u(),e=c(),r=p();m({queryKey:["conversation",a],queryFn:()=>f(a).catch(n=>{const o=v(t),i=o!=null?d(o):"/";throw s(i,void 0,{shallow:!0}),g.danger(`Unable to load conversation ${a}`),n}),enabled:!S(a)&&!e&&!r})};export{f,q as u};
//# sourceMappingURL=ben9x949smn8tprb.js.map