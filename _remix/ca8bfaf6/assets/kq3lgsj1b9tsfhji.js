import{ek as i,bt as s,j as r,r as d,c7 as l,Y as c,a3 as m,ew as h}from"./i50pu8hyebaw9kd6.js";import{C as u}from"./noxw5bz8t98ji0mf.js";import{q as n,a0 as g,a1 as v}from"./mixmhi71ciem9jn6.js";import{S as C}from"./nme6dkoi00hb92mb.js";import"./ler115iciu2bvc07.js";import"./fyu1x9blsvkhm08m.js";import"./moh4ip2hvdwaf05m.js";import"./roq9fh68okqqi129.js";import"./fdqusl6m25j3co7x.js";import"./i87y5c6394ih12n9.js";import"./oycy9k9kn3cs4cqp.js";import"./o5bl59jfwhvufgqp.js";import"./fqymc5m3xzz1i503.js";import"./g4gq7wj38irj9xjt.js";import"./obdrcw978epnpqji.js";import"./gutqz9p5lfo53m3m.js";import"./cy0pjjb3tyyhfu0g.js";import"./m3yi90cdwxleycje.js";import"./lfdgenmhnubxn1z5.js";import"./nmjcaip3k576u4ic.js";import"./cur1mdg33xzy0p0k.js";import"./nfs4k0jrtx2x0ai3.js";import"./onvz05rbwcjznbx5.js";import"./oy96mggx1zw861yv.js";import"./j4pulljw10iusdl0.js";function f(e){if(e.serverResponse.type==="error")return r.jsx(S,{error:e.serverResponse.error});const t={...e,conversationData:e.serverResponse.data};return e.continueMode||e.moderationMode||e.isContinueEnabled?r.jsx(x,{...t}):r.jsx(p,{...t})}function x(e){const[t]=d.useState(()=>l());return n.initThreadFromServerData(t,e.conversationData,!0,e.sharedConversationId),e.chatPageProps!=null?r.jsx(g.Provider,{value:{serverSharedThreadId:e.sharedConversationId},children:r.jsx(u,{...e.chatPageProps,clientThreadId:t})}):null}function p(e){return n.initThreadFromServerData(e.sharedConversationId,e.conversationData,!0),r.jsx(C,{sharedConversationId:e.sharedConversationId,initiallyHighlightedMessageId:e.conversationData.highlighted_message_id,continueConversationUrl:e.conversationData.continue_conversation_url,isIndexable:e.conversationData.is_indexable,isBetterMetatagsEnabled:e.conversationData.is_better_metatags_enabled})}function S({error:e}){const t=c(),a=m();return r.jsx("div",{className:"flex h-full w-full justify-center",children:r.jsx("div",{className:"max-w-lg p-6",children:r.jsx(v,{content:e,primaryCtaText:t.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>a("/")})})})}const J=({data:e})=>{const t=e;if(!t||t.serverResponse.type==="error"||!t.meta)return[{title:"ChatGPT"},{name:"robots",content:"noindex,nofollow"}];const{meta:a}=t;return a.isBetterMetatagsEnabled?[{title:"ChatGPT - "+a.title},{property:"og:site_name",content:"ChatGPT"},{name:"robots",content:a.isIndexable?"index,nofollow":"noindex,nofollow"},{property:"og:title",content:"ChatGPT - "+a.title},{property:"og:description",content:a.description},{property:"og:image",content:a.imageSrc},{property:"og:url",content:"https://chatgpt.com/share/"+t.sharedConversationId}]:[{title:"ChatGPT"},...h]};function K(){const{sharedConversationId:e,...t}=i(),{layer:a}=s("2840731323"),o=a.get("is_direct_continue_enabled",!1);return r.jsx(f,{...t,sharedConversationId:e,isContinueEnabled:o})}export{K as default,J as meta};
//# sourceMappingURL=kq3lgsj1b9tsfhji.js.map