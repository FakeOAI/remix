import{X as u,cs as c,u as m,a7 as g,R as h,a4 as l}from"./m7d6epqb1gfbpzoo.js";import{f as d}from"./iee5wlfm0ipkvqsi.js";import{aZ as v}from"./njhao8v6dsdtifqt.js";import{s as y}from"./b32n8y1qdhdcdwfz.js";import{g as p,i as S,T as f}from"./cucftooeih41wye5.js";async function C(a,t){const s=await h.getConversation(a);return l.addTiming("chatgpt.web.chatPage.loadExistingConversation"),f.initThreadFromServerData(a,s,t,void 0,t),y(s.conversation_id,s.async_status??null),s}const q=a=>{const{asPath:t,replace:s}=u(),e=c(),r=p();m({queryKey:["conversation",a],queryFn:()=>C(a).catch(n=>{const o=v(t),i=o!=null?d(o):"/";throw s(i,void 0,{shallow:!0}),g.danger(`Unable to load conversation ${a}`),n}),enabled:!S(a)&&!e&&!r})};export{C as f,q as u};
//# sourceMappingURL=g4zp0zx4im7m4uv3.js.map