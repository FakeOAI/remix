import{di as s,bm as d,l as r,b3 as m,r as l,dI as c,dJ as h,X as u,bD as p,ds as v}from"./dwkd3b3c7kg0ot7l.js";import{C as g}from"./fqwx5w1bba8jtpzq.js";import{av as f}from"./ok65lib68mghk0mk.js";import{S as x}from"./i1z5dc0ln5sxnebk.js";import{T as n}from"./lmc4wszvjl4gg292.js";import"./byou0827mflm7tmy.js";import"./npagvawotm2a2fuv.js";import"./lr2e0u44irbds248.js";import"./gsrrrfwrll6omvj2.js";import"./jfafu17xv0t0ph5c.js";import"./nyvfqgc7w4fpf0sn.js";import"./f38uk28ff9agi8mz.js";import"./dcile3xg4f7x5ihl.js";import"./hu9vn59esh734ymj.js";import"./fu3ryqoahzknp7ja.js";import"./h1xbsq57obrrixbu.js";import"./ll22crm7o6vtzswi.js";import"./b73poipvcxurox7p.js";import"./inoare35495u9m9k.js";import"./s32ujpnveivwtip1.js";import"./nov0yn9oognrye5r.js";import"./hvq6t2g1yzf639ud.js";import"./keqh8ykquezethwp.js";import"./jgynwps4grrtjuwd.js";import"./crdkvhpm20732qse.js";import"./bjm22u7xm0rpa7z6.js";import"./jmzp1q0b1ceqgkkb.js";import"./iaq02e4tgcms3t7k.js";import"./o8ny37sdw3mgkuum.js";import"./mue5o3237589051v.js";import"./jozmr8arm2irlnyb.js";import"./jrj0t91a3xoyqfy7.js";import"./cbb2qmpg6ri69duw.js";import"./f5t4vo9mgm56agwx.js";import"./ew05ukd1zgcywrg1.js";import"./b5hovgugpzl2z81g.js";function C(t){if(t.serverResponse.type==="error")return r.jsx(I,{error:t.serverResponse.error});const e={...t,conversationData:t.serverResponse.data};return t.continueMode||t.isContinueEnabled?r.jsx(S,{...e}):t.moderationMode?r.jsx(m,{children:r.jsx(o,{...e})}):r.jsx(o,{...e})}function S(t){const[e]=l.useState(()=>c());return n.initThreadFromServerData(e,t.conversationData,!0,t.sharedConversationId),t.chatPageProps!=null?r.jsx(h.Provider,{value:{serverSharedThreadId:t.sharedConversationId},children:r.jsx(g,{...t.chatPageProps,clientThreadId:e})}):null}function o(t){return n.initThreadFromServerData(t.sharedConversationId,t.conversationData,!0),r.jsx(x,{sharedConversationId:t.sharedConversationId,initiallyHighlightedMessageId:t.conversationData.highlighted_message_id,continueConversationUrl:t.conversationData.continue_conversation_url,isIndexable:t.conversationData.is_indexable,isBetterMetatagsEnabled:t.conversationData.is_better_metatags_enabled})}function I({error:t}){const e=u(),a=p();return r.jsx("div",{className:"flex h-full w-full justify-center",children:r.jsx("div",{className:"max-w-lg p-6",children:r.jsx(f,{content:t,primaryCtaText:e.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>a("/")})})})}const ot=({data:t})=>{const e=t;if(!e||e.serverResponse.type==="error"||!e.meta)return[{title:"ChatGPT"},{name:"robots",content:"noindex,nofollow"}];const{meta:a}=e;return a.isBetterMetatagsEnabled?[{title:"ChatGPT - "+a.title},{property:"og:site_name",content:"ChatGPT"},{name:"robots",content:a.isIndexable?"index,nofollow":"noindex,nofollow"},{property:"og:title",content:"ChatGPT - "+a.title},{property:"og:description",content:a.description},{property:"og:image",content:a.imageSrc},{property:"og:url",content:"https://chatgpt.com/share/"+e.sharedConversationId}]:[{title:"ChatGPT"},...v]};function nt(){const{sharedConversationId:t,...e}=s(),{layer:a}=d("2840731323"),i=a.get("is_direct_continue_enabled",!1);return r.jsx(C,{...e,sharedConversationId:t,isContinueEnabled:i})}export{nt as default,ot as meta};
//# sourceMappingURL=0mtyo8weqs1trgke.js.map