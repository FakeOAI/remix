import{fy as i,aE as s,m as r,r as d,d3 as l,y as n,eU as c,G as m,a3 as h,fK as u}from"./efyv7k9n48mfge5b.js";import{C as g}from"./cfyanoxiz8s589z2.js";import{B as v}from"./b4999i2jikvyubq7.js";import{S as f}from"./kzlacqkefjhhjk1l.js";import"./e4j9jr6u0xbapuaf.js";import"./f0lnw4zy180ul9ow.js";import"./7zseb4mcs5kd2m5u.js";import"./oq6xx3tieiwkebua.js";import"./fvxi3fiq4zyl1iw0.js";import"./lbp4ikz0be20rl1k.js";import"./hivxcvjwbycj6xy4.js";import"./e6tg5q83gwpkkt53.js";import"./j30dkj3lkpt5b70m.js";import"./ikfg061wgi6vnrd4.js";import"./hogqkik0yfqutu8x.js";import"./lab50cy78xnplc7h.js";import"./cv39757fuc4wel6u.js";import"./d5i6wt5aarogwize.js";import"./fsx9yvwf8tdyrabl.js";import"./b0jctse5i3cf0xtg.js";import"./f95ce9ikptcrzsja.js";import"./hj7o294t42mu9qp8.js";function C(e){if(e.serverResponse.type==="error")return r.jsx(y,{error:e.serverResponse.error});const t={...e,conversationData:e.serverResponse.data};return e.continueMode||e.moderationMode||e.isContinueEnabled?r.jsx(x,{...t}):r.jsx(p,{...t})}function x(e){const[t]=d.useState(()=>l());return n.initThreadFromServerData(t,e.conversationData,!0,e.sharedConversationId),e.chatPageProps!=null?r.jsx(c.Provider,{value:{serverSharedThreadId:e.sharedConversationId},children:r.jsx(g,{...e.chatPageProps,clientThreadId:t})}):null}function p(e){return n.initThreadFromServerData(e.sharedConversationId,e.conversationData,!0),r.jsx(f,{sharedConversationId:e.sharedConversationId,initiallyHighlightedMessageId:e.conversationData.highlighted_message_id,continueConversationUrl:e.conversationData.continue_conversation_url,isIndexable:e.conversationData.is_indexable,isBetterMetatagsEnabled:e.conversationData.is_better_metatags_enabled})}function y({error:e}){const t=m(),a=h();return r.jsx("div",{className:"flex h-full w-full justify-center",children:r.jsx("div",{className:"max-w-lg p-6",children:r.jsx(v,{content:e,primaryCtaText:t.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>a("/")})})})}const W=({data:e})=>{const t=e;if(!t||t.serverResponse.type==="error"||!t.meta)return[{title:"ChatGPT"},{name:"robots",content:"noindex,nofollow"}];const{meta:a}=t;return a.isBetterMetatagsEnabled?[{title:"ChatGPT - "+a.title},{property:"og:site_name",content:"ChatGPT"},{name:"robots",content:a.isIndexable?"index,nofollow":"noindex,nofollow"},{property:"og:title",content:"ChatGPT - "+a.title},{property:"og:description",content:a.description},{property:"og:image",content:a.imageSrc},{property:"og:url",content:"https://chatgpt.com/share/"+t.sharedConversationId}]:[{title:"ChatGPT"},...u]};function q(){const{sharedConversationId:e,...t}=i(),{layer:a}=s("2840731323"),o=a.get("is_direct_continue_enabled",!1);return r.jsx(C,{...t,sharedConversationId:e,isContinueEnabled:o})}export{q as default,W as meta};
//# sourceMappingURL=coufgz07b0vjspnq.js.map