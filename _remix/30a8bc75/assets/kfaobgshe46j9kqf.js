import{dm as s,bg as d,l as r,b4 as m,r as l,dM as c,dN as h,W as u,bD as p,dw as g}from"./es28fsfv6yr4r7t0.js";import{C as v}from"./eubh7k42q9lbwqgr.js";import{ay as f}from"./knksm8jtt3et03lk.js";import{S as x}from"./ft7ffmcrt7upujbx.js";import{T as n}from"./komg9ol1i6c41q0e.js";import"./fywton14jd85t5em.js";import"./fhgrts51s7qsbnx3.js";import"./elvm24329arjt3o8.js";import"./lz4uwss82o8aau0y.js";import"./lxb6lu8jdwx4mpyx.js";import"./dzy02ioe4t6zwvgn.js";import"./g6zpitnisrunck9s.js";import"./coaqcqs3edhedy9h.js";import"./nlpqja7o6rotgyss.js";import"./mo4ua92i4xu98tiq.js";import"./o1h4nip908vlio6s.js";import"./im6jd7muoj1uyacl.js";import"./dncd2pyz7qtauwp2.js";import"./ig8m6wg26f2bs8yh.js";import"./gjbkak1jvigov4xr.js";import"./hza5ojyqowjwu2pj.js";import"./dcp16s9l8uhauzrf.js";import"./h7obry0o5kwb4974.js";import"./bddrbd7b4axluujc.js";import"./iws8d0fzon06wx4z.js";import"./dwjmlzr34tqmxy63.js";import"./g19roq1pex6046gj.js";import"./bpuql4ex5a5bq5jf.js";import"./dvwc32cun5g6ge4r.js";import"./c79436avmktaa3ru.js";import"./mw1h1ltq6jp8h1wb.js";import"./crhf8u1ntlp03t0e.js";import"./jds2adpdmznv9eca.js";import"./bbc84r4dg4bj17g4.js";import"./o1mpguvq5nhl1am0.js";import"./iqzkn0ojcbc8c992.js";import"./ezw888slrute1dgb.js";import"./dhst90c2geiifzq3.js";import"./lbutipd3kbiiwz9z.js";import"./jvn5rmonm1hmyk74.js";import"./igb5f89se8wsmxjp.js";function C(t){if(t.serverResponse.type==="error")return r.jsx(y,{error:t.serverResponse.error});const e={...t,conversationData:t.serverResponse.data};return t.continueMode||t.isContinueEnabled?r.jsx(S,{...e}):t.moderationMode?r.jsx(m,{children:r.jsx(o,{...e})}):r.jsx(o,{...e})}function S(t){const[e]=l.useState(()=>c());return n.initThreadFromServerData(e,t.conversationData,!0,t.sharedConversationId),t.chatPageProps!=null?r.jsx(h.Provider,{value:{serverSharedThreadId:t.sharedConversationId},children:r.jsx(v,{...t.chatPageProps,clientThreadId:e})}):null}function o(t){return n.initThreadFromServerData(t.sharedConversationId,t.conversationData,!0),r.jsx(x,{sharedConversationId:t.sharedConversationId,initiallyHighlightedMessageId:t.conversationData.highlighted_message_id,continueConversationUrl:t.conversationData.continue_conversation_url,isIndexable:t.conversationData.is_indexable,isBetterMetatagsEnabled:t.conversationData.is_better_metatags_enabled})}function y({error:t}){const e=u(),a=p();return r.jsx("div",{className:"flex h-full w-full justify-center",children:r.jsx("div",{className:"max-w-lg p-6",children:r.jsx(f,{content:t,primaryCtaText:e.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>a("/")})})})}const mt=({data:t})=>{const e=t;if(!e||e.serverResponse.type==="error"||!e.meta)return[{title:"ChatGPT"},{name:"robots",content:"noindex,nofollow"}];const{meta:a}=e;return a.isBetterMetatagsEnabled?[{title:"ChatGPT - "+a.title},{property:"og:site_name",content:"ChatGPT"},{name:"robots",content:a.isIndexable?"index,nofollow":"noindex,nofollow"},{property:"og:title",content:"ChatGPT - "+a.title},{property:"og:description",content:a.description},{property:"og:image",content:a.imageSrc},{property:"og:url",content:"https://chatgpt.com/share/"+e.sharedConversationId}]:[{title:"ChatGPT"},...g]};function lt(){const{sharedConversationId:t,...e}=s(),{layer:a}=d("2840731323"),i=a.get("is_direct_continue_enabled",!1);return r.jsx(C,{...e,sharedConversationId:t,isContinueEnabled:i})}export{lt as default,mt as meta};
//# sourceMappingURL=kfaobgshe46j9kqf.js.map