import{r as i,P as m,y as c,bh as h,j as e,cO as l,aG as u,G as g,bo as v}from"./jxcj8c73xykl5pdh.js";import{b as f,a as x}from"./hcgnmml8wbgm5b76.js";import{b$ as p}from"./kracfvru65uyxco3.js";import{l as S,T as n}from"./iijvemtkuskjstxm.js";import{u as C}from"./eiuqh7k9gw3sudcp.js";import"./dbh3rqot1oqdum8f.js";import"./cg9p0lhl0jcxnj7d.js";import"./bc8681kvkt1n2y9e.js";import"./i3kkn7bb16ebgfki.js";import"./pcte21l9mk0rwn1j.js";import"./owp6z3q6pg0aqs0k.js";import"./o5l18e8c7o2hjdmj.js";import"./f4m9gh9jb0r6kahq.js";import"./fs8wgogp0je8otd1.js";import"./fe02mfjcyoaumukz.js";import"./e3bii0bly41scdoy.js";import"./ogvg1rlxcf4yhk7g.js";import"./nvgdmt3w630ppqx0.js";import"./hr198f0nwa07pkoq.js";import"./ftwuwfmlkk7slonb.js";import"./ji34iflkfq1j5bsg.js";import"./isxfns5j04pnr09o.js";import"./jo67gcac0gh5w65t.js";import"./c16faxxiqva4sb0d.js";import"./oln4maq5fkdj94yi.js";import"./i016psc60oiy4s0b.js";import"./fqu9lv97jjbmgjld.js";import"./ekn8260r82kn5sj0.js";import"./neomwnb90qov2nle.js";import"./nkt83701ie3o71c8.js";import"./cz021tau1rmzi4ju.js";function j({sharedConversationId:t,initiallyHighlightedMessageId:r,continueConversationUrl:a,isIndexable:s}){const d=()=>{};return i.useEffect(()=>{m.logEvent(c.sharedConversationPageLoaded),h.logEvent("chatgpt_conversation_share_page_loaded")},[]),e.jsx(l.Provider,{value:{serverSharedThreadId:t,isIndexable:s},children:e.jsx(f,{clientThreadId:t,setClientThreadId:d,initiallyHighlightedMessageId:r,continueConversationUrl:a})})}function P(t){if(t.serverResponse.type==="error")return e.jsx(D,{error:t.serverResponse.error});const r={...t,conversationData:t.serverResponse.data};return t.continueMode?e.jsx(T,{...r}):t.moderationMode?e.jsx(u,{children:e.jsx(o,{...r})}):e.jsx(o,{...r})}function T(t){const[r]=i.useState(()=>S());return n.initThreadFromServerData(r,t.conversationData,!0,t.sharedConversationId),t.chatPageProps!=null?e.jsx(x,{...t.chatPageProps,clientThreadId:r}):null}function o(t){return n.initThreadFromServerData(t.sharedConversationId,t.conversationData,!0),e.jsx(j,{...t,initiallyHighlightedMessageId:t.conversationData.highlighted_message_id,continueConversationUrl:t.conversationData.continue_conversation_url,isIndexable:t.conversationData.is_indexable})}function D({error:t}){const r=g(),a=v();return e.jsx("div",{className:"flex h-full w-full justify-center",children:e.jsx("div",{className:"max-w-lg p-6",children:e.jsx(p,{content:t,primaryCtaText:r.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>a("/")})})})}function rt(){const t=C();return e.jsx(P,{...t})}export{rt as default};
//# sourceMappingURL=dakmo73a4xa58ces.js.map