import{aC as s,j as r,aT as m,r as d,dQ as l,H as c,ax as h,dA as u}from"./mes9pjafgq4ysvv4.js";import{C as p}from"./c2f3e5wrl4bxna4e.js";import{aY as f}from"./jzd4qawnakryydim.js";import{S as g}from"./mm655wwch6pd0anf.js";import{l as v,T as i}from"./fj2c5r0zs89uwg6u.js";import{u as x}from"./lt5bwjqhc6trgqvh.js";import"./nyt86llltwms5z71.js";import"./g5byvr3b2c7qa2wp.js";import"./cn2p9twdfq0duu5j.js";import"./jt73vfdmmy1upbhj.js";import"./invmqkeu4jbc4u58.js";import"./ih0p5w19xdri30d7.js";import"./h76nfvrafdnzt6u4.js";import"./kmtfhvu1n8lts5s1.js";import"./mndhq8a1eqdgrqik.js";import"./k2feak7z3xlcadjq.js";import"./kpi8yuybjhd0l9ca.js";import"./h77srsuukerxrvpn.js";import"./j9tg0d84s6tl6c56.js";import"./bs1c68sogsamog8e.js";import"./lh84si0lt2qb7gdo.js";import"./ia04vb7to9jnfum7.js";import"./w32tcg05th1l9689.js";import"./dufeh2jyyw0jwfdb.js";import"./ehoky55srb62h2vp.js";import"./ey0zpfvwuffdnjcj.js";import"./gr05bh3egyhke9k3.js";import"./dbfimiivugp55tk9.js";import"./mr6vsfsmw6qzbgqh.js";import"./g4fk2wbso1ts6gky.js";import"./jzeqoehz2ycoh3e0.js";import"./jj87na4mng7sxy1o.js";import"./hburv8zqwtaoglo0.js";import"./jqoenzipkt9g2jb9.js";import"./gn65xdjaxwxnxvzy.js";import"./qos2fdg64uucglgc.js";import"./bdsczgpvigaeuqo7.js";import"./ilj7dtsfpg8vmkgt.js";import"./heny6v4fq87nqgna.js";import"./k2r1yd7hinlhjw3z.js";import"./l8h0eljrib3h19dl.js";import"./d247skfekxj002a6.js";import"./pbqo5cx1lm4mzu05.js";import"./jk3vq2625sw1hg6v.js";import"./gahozzja4p1cawr6.js";function C(t){if(t.serverResponse.type==="error")return r.jsx(T,{error:t.serverResponse.error});const e={...t,conversationData:t.serverResponse.data};return t.continueMode||t.isContinueEnabled?r.jsx(S,{...e}):t.moderationMode?r.jsx(m,{children:r.jsx(o,{...e})}):r.jsx(o,{...e})}function S(t){const[e]=d.useState(()=>v());return i.initThreadFromServerData(e,t.conversationData,!0,t.sharedConversationId),t.chatPageProps!=null?r.jsx(l.Provider,{value:{serverSharedThreadId:t.sharedConversationId},children:r.jsx(p,{...t.chatPageProps,clientThreadId:e})}):null}function o(t){return i.initThreadFromServerData(t.sharedConversationId,t.conversationData,!0),r.jsx(g,{sharedConversationId:t.sharedConversationId,initiallyHighlightedMessageId:t.conversationData.highlighted_message_id,continueConversationUrl:t.conversationData.continue_conversation_url,isIndexable:t.conversationData.is_indexable,isBetterMetatagsEnabled:t.conversationData.is_better_metatags_enabled})}function T({error:t}){const e=c(),a=h();return r.jsx("div",{className:"flex h-full w-full justify-center",children:r.jsx("div",{className:"max-w-lg p-6",children:r.jsx(f,{content:t,primaryCtaText:e.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>a("/")})})})}const ut=({data:t})=>{const e=t;if(!e||e.serverResponse.type==="error"||!e.meta)return[{title:"ChatGPT"},{name:"robots",content:"noindex,nofollow"}];const{meta:a}=e;return a.isBetterMetatagsEnabled?[{title:"ChatGPT - "+a.title},{property:"og:site_name",content:"ChatGPT"},{name:"robots",content:a.isIndexable?"index,nofollow":"noindex,nofollow"},{property:"og:title",content:"ChatGPT - "+a.title},{property:"og:description",content:a.description},{property:"og:image",content:a.imageSrc},{property:"og:url",content:"https://chatgpt.com/share/"+e.sharedConversationId}]:[{title:"ChatGPT"},...u]};function pt(){const{sharedConversationId:t,...e}=x(),{layer:a}=s("2840731323"),n=a.get("is_direct_continue_enabled",!1);return r.jsx(C,{...e,sharedConversationId:t,isContinueEnabled:n})}export{pt as default,ut as meta};
//# sourceMappingURL=hdvnqu2qko555l5y.js.map