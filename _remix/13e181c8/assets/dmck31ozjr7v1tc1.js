import{bh as s,l as r,b5 as m,r as d,dN as l,V as c,bp as h,dx as u}from"./d2qv8s87ysb5f68b.js";import{C as p}from"./jb9a67mx96jux1s7.js";import{aw as f}from"./hq7ysfundi85z1is.js";import{S as g}from"./k611m8jn5azg3091.js";import{g as v,T as n}from"./7otbpc6iiji8djks.js";import{u as x}from"./huw740hda9x8w114.js";import"./ljnrwgh8vy488xdo.js";import"./opg6ep08epxj6l16.js";import"./m7osvilbcgxty2nd.js";import"./jvea3upcm1fi9rff.js";import"./k5scw4601lorcqmc.js";import"./bsnlgavyim4g71tk.js";import"./f2wci3e5g4q291dk.js";import"./jnjpe1sziatqh1cg.js";import"./ig32dccjxorz3eb6.js";import"./jc8x6oz4qxa0il5z.js";import"./jxzhlfbn4aouq8hw.js";import"./ll7t24an14t868ei.js";import"./nmgk3kiytj9aidtx.js";import"./n0987a4tzt9qt24i.js";import"./k59821nizpj4zkp2.js";import"./ndh0f0lzroymokao.js";import"./fiy8l2966oe00a1h.js";import"./hyonmf2cmhjgzzz1.js";import"./efk730u3l94gsf4g.js";import"./ed6lsg5rhdwt4a6k.js";import"./jouuhcz5qcgq8cq8.js";import"./olcraceh9vbly07c.js";import"./f8ze6xyj15njdrmf.js";import"./erlue4ji1z7boi3u.js";import"./eyk0tps91sperweg.js";import"./l8re8vpxsj5gc916.js";import"./nnr2albz2dmf1j6t.js";import"./ou206tahyya5vd6g.js";import"./of5acvbxpw461066.js";import"./f1vdazgcnf5iq25u.js";import"./frkwctafetgxoy38.js";import"./buvf69gxb6j0hnwj.js";import"./b3o5uwuhcga0w25f.js";import"./h9xrky969fzl3gvu.js";function C(t){if(t.serverResponse.type==="error")return r.jsx(b,{error:t.serverResponse.error});const e={...t,conversationData:t.serverResponse.data};return t.continueMode||t.isContinueEnabled?r.jsx(S,{...e}):t.moderationMode?r.jsx(m,{children:r.jsx(o,{...e})}):r.jsx(o,{...e})}function S(t){const[e]=d.useState(()=>v());return n.initThreadFromServerData(e,t.conversationData,!0,t.sharedConversationId),t.chatPageProps!=null?r.jsx(l.Provider,{value:{serverSharedThreadId:t.sharedConversationId},children:r.jsx(p,{...t.chatPageProps,clientThreadId:e})}):null}function o(t){return n.initThreadFromServerData(t.sharedConversationId,t.conversationData,!0),r.jsx(g,{sharedConversationId:t.sharedConversationId,initiallyHighlightedMessageId:t.conversationData.highlighted_message_id,continueConversationUrl:t.conversationData.continue_conversation_url,isIndexable:t.conversationData.is_indexable,isBetterMetatagsEnabled:t.conversationData.is_better_metatags_enabled})}function b({error:t}){const e=c(),a=h();return r.jsx("div",{className:"flex h-full w-full justify-center",children:r.jsx("div",{className:"max-w-lg p-6",children:r.jsx(f,{content:t,primaryCtaText:e.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>a("/")})})})}const mt=({data:t})=>{const e=t;if(!e||e.serverResponse.type==="error"||!e.meta)return[{title:"ChatGPT"},{name:"robots",content:"noindex,nofollow"}];const{meta:a}=e;return a.isBetterMetatagsEnabled?[{title:"ChatGPT - "+a.title},{property:"og:site_name",content:"ChatGPT"},{name:"robots",content:a.isIndexable?"index,nofollow":"noindex,nofollow"},{property:"og:title",content:"ChatGPT - "+a.title},{property:"og:description",content:a.description},{property:"og:image",content:a.imageSrc},{property:"og:url",content:"https://chatgpt.com/share/"+e.sharedConversationId}]:[{title:"ChatGPT"},...u]};function dt(){const{sharedConversationId:t,...e}=x(),{layer:a}=s("2840731323"),i=a.get("is_direct_continue_enabled",!1);return r.jsx(C,{...e,sharedConversationId:t,isContinueEnabled:i})}export{dt as default,mt as meta};
//# sourceMappingURL=dmck31ozjr7v1tc1.js.map