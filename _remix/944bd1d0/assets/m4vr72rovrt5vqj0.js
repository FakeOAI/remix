import{X as u,cs as c,u as m,a7 as g,R as h,a4 as l}from"./in7dip9jd052wfku.js";import{f as d}from"./mtxjf02tkq7k5viu.js";import{aZ as v}from"./hclnq916jc5jz97n.js";import{s as y}from"./on3ggizkxeoiube6.js";import{g as p,i as S,T as f}from"./jzk6rnaxlh9mg40v.js";async function C(a,t){const s=await h.getConversation(a);return l.addTiming("chatgpt.web.chatPage.loadExistingConversation"),f.initThreadFromServerData(a,s,t,void 0,t),y(s.conversation_id,s.async_status??null),s}const q=a=>{const{asPath:t,replace:s}=u(),e=c(),r=p();m({queryKey:["conversation",a],queryFn:()=>C(a).catch(n=>{const o=v(t),i=o!=null?d(o):"/";throw s(i,void 0,{shallow:!0}),g.danger(`Unable to load conversation ${a}`),n}),enabled:!S(a)&&!e&&!r})};export{C as f,q as u};
//# sourceMappingURL=m4vr72rovrt5vqj0.js.map