import{dr as s,bh as m,l as r,b5 as d,r as l,dP as c,dQ as h,W as u,bH as p,dA as g}from"./cy64emva2uzrk485.js";import{C as v}from"./novk0u4fo75rsz88.js";import{ar as f}from"./j735z7kkcepyp8y2.js";import{S as x}from"./e2exqhtof9ro0yl2.js";import{T as n}from"./cknnke94em4nivg3.js";import"./m1w0e9mshx1kxsyq.js";import"./m8uv83e8qsvk5cah.js";import"./n3h0t5brbjpa342f.js";import"./kxb6j537cf0vxln8.js";import"./l1lmxzbhhle72h3t.js";import"./dywbkbifr0ayki46.js";import"./qxsj1l42erkbuwc6.js";import"./f4bade4g0o45i4rd.js";import"./maooj5f1lintbuj4.js";import"./mbh3dou1gcx9ziuu.js";import"./ken02pucr55zzlz4.js";import"./dzgqww1rafiwckp5.js";import"./osybsbcp4gj3qmjs.js";import"./deovd2qhauetjiwg.js";import"./l9ljdfvuq5zywldm.js";import"./m9bhi499hm1n51b7.js";import"./nj0giw6hvohc2esu.js";import"./c8nfl4cclq2l1xmq.js";import"./mkx55htxkx0nf0yd.js";import"./f99zq3s8pqk4thnl.js";import"./ehuratfqdza89wob.js";import"./nzhmuw3i6t164b6h.js";import"./ijh2y7o5pzxbifv5.js";import"./i7y30xwqnlt1hc97.js";import"./j0t5pu2pmnlemvhv.js";import"./oad20zxhutmy394e.js";import"./idj1um47tb8f15nx.js";import"./o6f018keuxci0i7r.js";import"./frb09mevmcqzi83z.js";import"./nw2yfjqvd35ue7qh.js";import"./goworgaz3i320d7w.js";import"./h6c0bohmhdn61j1a.js";import"./kjeuhdqpq8p6604r.js";import"./dasfo2l8kg52ax2s.js";import"./kn3xnf076tvydluu.js";import"./hor9pfpmgngfbiws.js";import"./nw1l9zy02oelai8f.js";import"./cgbb3ca7x4pxqw2c.js";import"./h92ak2yoz6ydukaw.js";function C(t){if(t.serverResponse.type==="error")return r.jsx(b,{error:t.serverResponse.error});const e={...t,conversationData:t.serverResponse.data};return t.continueMode||t.isContinueEnabled?r.jsx(S,{...e}):t.moderationMode?r.jsx(d,{children:r.jsx(o,{...e})}):r.jsx(o,{...e})}function S(t){const[e]=l.useState(()=>c());return n.initThreadFromServerData(e,t.conversationData,!0,t.sharedConversationId),t.chatPageProps!=null?r.jsx(h.Provider,{value:{serverSharedThreadId:t.sharedConversationId},children:r.jsx(v,{...t.chatPageProps,clientThreadId:e})}):null}function o(t){return n.initThreadFromServerData(t.sharedConversationId,t.conversationData,!0),r.jsx(x,{sharedConversationId:t.sharedConversationId,initiallyHighlightedMessageId:t.conversationData.highlighted_message_id,continueConversationUrl:t.conversationData.continue_conversation_url,isIndexable:t.conversationData.is_indexable,isBetterMetatagsEnabled:t.conversationData.is_better_metatags_enabled})}function b({error:t}){const e=u(),a=p();return r.jsx("div",{className:"flex h-full w-full justify-center",children:r.jsx("div",{className:"max-w-lg p-6",children:r.jsx(f,{content:t,primaryCtaText:e.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>a("/")})})})}const ht=({data:t})=>{const e=t;if(!e||e.serverResponse.type==="error"||!e.meta)return[{title:"ChatGPT"},{name:"robots",content:"noindex,nofollow"}];const{meta:a}=e;return a.isBetterMetatagsEnabled?[{title:"ChatGPT - "+a.title},{property:"og:site_name",content:"ChatGPT"},{name:"robots",content:a.isIndexable?"index,nofollow":"noindex,nofollow"},{property:"og:title",content:"ChatGPT - "+a.title},{property:"og:description",content:a.description},{property:"og:image",content:a.imageSrc},{property:"og:url",content:"https://chatgpt.com/share/"+e.sharedConversationId}]:[{title:"ChatGPT"},...g]};function ut(){const{sharedConversationId:t,...e}=s(),{layer:a}=m("2840731323"),i=a.get("is_direct_continue_enabled",!1);return r.jsx(C,{...e,sharedConversationId:t,isContinueEnabled:i})}export{ut as default,ht as meta};
//# sourceMappingURL=o2y2tiobvifrlu0t.js.map