import{ej as s,bs as d,a6 as a,b6 as l,r as c,c6 as m,aj as h,Z as u,ev as v}from"./fw2sv6mo32vdb58s.js";import{C as g}from"./iqixj650xkib3ul9.js";import{v as o,a1 as x,a2 as C}from"./mvfp9xkrxbhizxzo.js";import{S as f}from"./clgam5drkqw2tlq5.js";import"./brnrasthlm0rpj0x.js";import"./beok4vjsul3c44qa.js";import"./fpjq4i80aohithht.js";import"./nrfrj4av9qbdbq3n.js";import"./e6w4twohzb8ryusl.js";import"./bhsv161b2mgumrql.js";import"./eqvtf3mj5e08ptay.js";import"./o0ufnn1nsvflbkgh.js";import"./h4k0zbuacboymzim.js";import"./exejoj0p864knzaw.js";import"./ji3ygbgpa9t6ay5b.js";import"./go1jirsdkzblmhip.js";import"./jqx7ianpdxg9s4us.js";import"./k75790v27xcy5v05.js";import"./jh4c9zw9q7ws8hh3.js";import"./hdbx903vjmhfkcan.js";import"./l89cjn96oi4ol9df.js";import"./ruy0hjz3saan0dq2.js";function p(e){if(e.serverResponse.type==="error")return a.jsx(j,{error:e.serverResponse.error});const t={...e,conversationData:e.serverResponse.data};return e.continueMode||e.isContinueEnabled?a.jsx(S,{...t}):e.moderationMode?a.jsx(l,{children:a.jsx(n,{...t})}):a.jsx(n,{...t})}function S(e){const[t]=c.useState(()=>m());return o.initThreadFromServerData(t,e.conversationData,!0,e.sharedConversationId),e.chatPageProps!=null?a.jsx(x.Provider,{value:{serverSharedThreadId:e.sharedConversationId},children:a.jsx(g,{...e.chatPageProps,clientThreadId:t})}):null}function n(e){return o.initThreadFromServerData(e.sharedConversationId,e.conversationData,!0),a.jsx(f,{sharedConversationId:e.sharedConversationId,initiallyHighlightedMessageId:e.conversationData.highlighted_message_id,continueConversationUrl:e.conversationData.continue_conversation_url,isIndexable:e.conversationData.is_indexable,isBetterMetatagsEnabled:e.conversationData.is_better_metatags_enabled})}function j({error:e}){const t=h(),r=u();return a.jsx("div",{className:"flex h-full w-full justify-center",children:a.jsx("div",{className:"max-w-lg p-6",children:a.jsx(C,{content:e,primaryCtaText:t.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>r("/")})})})}const q=({data:e})=>{const t=e;if(!t||t.serverResponse.type==="error"||!t.meta)return[{title:"ChatGPT"},{name:"robots",content:"noindex,nofollow"}];const{meta:r}=t;return r.isBetterMetatagsEnabled?[{title:"ChatGPT - "+r.title},{property:"og:site_name",content:"ChatGPT"},{name:"robots",content:r.isIndexable?"index,nofollow":"noindex,nofollow"},{property:"og:title",content:"ChatGPT - "+r.title},{property:"og:description",content:r.description},{property:"og:image",content:r.imageSrc},{property:"og:url",content:"https://chatgpt.com/share/"+t.sharedConversationId}]:[{title:"ChatGPT"},...v]};function z(){const{sharedConversationId:e,...t}=s(),{layer:r}=d("2840731323"),i=r.get("is_direct_continue_enabled",!1);return a.jsx(p,{...t,sharedConversationId:e,isContinueEnabled:i})}export{z as default,q as meta};
//# sourceMappingURL=ihfhcmdq0x0538x4.js.map