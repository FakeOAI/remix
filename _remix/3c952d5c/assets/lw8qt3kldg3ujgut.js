import{r as i,P as m,A as c,bh as h,j as e,cK as l,aG as u,H as g,bo as v}from"./lmxm7n9d5wiypftj.js";import{b as f,a as x}from"./lllxoi027zpayynv.js";import{cM as p}from"./mkzh4liwzbq0my17.js";import{l as S,T as n}from"./bkfrt4b5kin9604q.js";import{u as C}from"./knroh3prm42in93h.js";import"./ilntfty2ny9yky28.js";import"./cl5m5d958vm88j3s.js";import"./oa1pmm4lwvkv79br.js";import"./g7a43sdpk9uv2po6.js";import"./cdzgg4rzbpliwwq0.js";import"./nz6xyitw5wi2k3g4.js";import"./mkq46xap6gv4qzd6.js";import"./fo05558pcon61vys.js";import"./d28zrt27cb1u77l7.js";import"./fekivkzetbozvd3e.js";import"./nx2899303lu4ieo5.js";import"./fhkzlbzkhu4kutbj.js";import"./fy81o02s4zrp07wc.js";import"./srqvin7nnjs6a3qc.js";import"./ff407jcpmlz75znb.js";import"./c7s6hy9b3kmy9d5m.js";import"./b6qqxvxchvce818i.js";import"./bypbtcapfxb7dpyi.js";import"./lijq0pso3fjnpf4z.js";import"./djjf5nebc7djhodc.js";import"./ha8hc4ly8o4exual.js";import"./cdpzzee6xojxp928.js";import"./zmhuaba2crsm2t4a.js";import"./lv2b1opltum42gjy.js";import"./nfkb99ifo3r6d9s1.js";import"./lfr6s4o23wzhistu.js";import"./ffenau1gfleqxtls.js";function j({sharedConversationId:t,initiallyHighlightedMessageId:r,continueConversationUrl:a,isIndexable:s}){const d=()=>{};return i.useEffect(()=>{m.logEvent(c.sharedConversationPageLoaded),h.logEvent("chatgpt_conversation_share_page_loaded")},[]),e.jsx(l.Provider,{value:{serverSharedThreadId:t,isIndexable:s},children:e.jsx(f,{clientThreadId:t,setClientThreadId:d,initiallyHighlightedMessageId:r,continueConversationUrl:a})})}function P(t){if(t.serverResponse.type==="error")return e.jsx(D,{error:t.serverResponse.error});const r={...t,conversationData:t.serverResponse.data};return t.continueMode?e.jsx(T,{...r}):t.moderationMode?e.jsx(u,{children:e.jsx(o,{...r})}):e.jsx(o,{...r})}function T(t){const[r]=i.useState(()=>S());return n.initThreadFromServerData(r,t.conversationData,!0,t.sharedConversationId),t.chatPageProps!=null?e.jsx(x,{...t.chatPageProps,clientThreadId:r}):null}function o(t){return n.initThreadFromServerData(t.sharedConversationId,t.conversationData,!0),e.jsx(j,{...t,initiallyHighlightedMessageId:t.conversationData.highlighted_message_id,continueConversationUrl:t.conversationData.continue_conversation_url,isIndexable:t.conversationData.is_indexable})}function D({error:t}){const r=g(),a=v();return e.jsx("div",{className:"flex h-full w-full justify-center",children:e.jsx("div",{className:"max-w-lg p-6",children:e.jsx(p,{content:t,primaryCtaText:r.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>a("/")})})})}function at(){const t=C();return e.jsx(P,{...t})}export{at as default};
//# sourceMappingURL=lw8qt3kldg3ujgut.js.map