import{fy as m,m as s,s as p,r as i,d3 as h,dp as u,dq as c,y as l,c5 as f,L as S}from"./2dfa7mijpk96ivcu.js";import{C as x}from"./foeqm09k06y57b6h.js";import{S as g}from"./jc3dfx136axe5muz.js";import"./m7q6a5a1jrchs75r.js";import"./n1ui85qe1scppnjf.js";import"./ms3p7bxaqacs3vps.js";import"./i9iqup3xjvkmednh.js";import"./0tg42t7hl58xu5x8.js";import"./g3hvxy56tv07g0h8.js";import"./l6c2o3gc4ho0uxcp.js";import"./btzyadjjhbqqwpqt.js";import"./ep00l7qunu6c6ide.js";import"./kv7d16qvjtvbylke.js";import"./foznybl24hqmoydf.js";import"./cf1t1txa2cjkk81o.js";import"./kpf6ck5up6q5nl10.js";import"./j48gvuf3ymwif126.js";import"./jp0x575px34d0ckq.js";import"./icrdf8vyvqz6fmnl.js";import"./fyhclggxgv632t9p.js";import"./lp6ux0nmy4f6y2a1.js";import"./d9tagwtcw84o28aj.js";function y(r){const t=r.sharedConversationId,{data:e,isError:o}=p({queryKey:[`shared-conversation/${t}`],queryFn:()=>S.getAuthedSharedConversation(t)}),[a]=i.useState(()=>h()),[n,d]=i.useState(!1);return i.useEffect(()=>{o&&(window.location.href=u(c.SHARE_NOT_FOUND))},[o]),i.useEffect(()=>{e&&a&&(l.initThreadFromServerData(a,e,!0,t),d(!0))},[e,t,a]),n&&e?r.continueMode?s.jsx(x,{...r.chatPageProps,clientThreadId:a}):s.jsx(g,{sharedConversationId:a,initiallyHighlightedMessageId:e.highlighted_message_id,continueConversationUrl:e.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):s.jsx("div",{className:"flex h-full items-center justify-center",children:s.jsx(f,{className:"text-token-text-tertiary"})})}function U(){const{sharedConversationId:r,...t}=m();return s.jsx(y,{...t,sharedConversationId:r})}export{U as default};
//# sourceMappingURL=gpqqgowxxs0exv6d.js.map