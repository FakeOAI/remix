import{fy as i,aE as s,m as r,r as d,d3 as l,y as n,eT as c,G as m,a3 as h,fK as u}from"./lj034xtwgajnbw80.js";import{C as g}from"./d5esqu9s3dxtxdot.js";import{B as v}from"./hwys1cva3r0syt2i.js";import{S as f}from"./mdrg3l249uift53n.js";import"./b6cy1eq07lpymojm.js";import"./emdibdkn640yam81.js";import"./hrd18hjswvcnxcaa.js";import"./gctbfwgizwb8pujm.js";import"./kg90shbkih4fj2ta.js";import"./ab2nqw4ikslfrdg5.js";import"./ngnyriku8zz57qvh.js";import"./nhbh4xua4q3jx6sv.js";import"./e8o7cmoe8883kidw.js";import"./c6m8w1xte1oeqdcv.js";import"./ooe3ps1ztatrxg1t.js";import"./g3uk1jzd5hyq3p0c.js";import"./en8vrjnuftwsyj53.js";import"./i3ahqsw1f2gkrxpy.js";import"./mlwaj6pwqtjjf0s1.js";import"./n8ad50focc5vm69k.js";import"./iho7a9od5zdcgwg2.js";function C(e){if(e.serverResponse.type==="error")return r.jsx(y,{error:e.serverResponse.error});const t={...e,conversationData:e.serverResponse.data};return e.continueMode||e.moderationMode||e.isContinueEnabled?r.jsx(x,{...t}):r.jsx(p,{...t})}function x(e){const[t]=d.useState(()=>l());return n.initThreadFromServerData(t,e.conversationData,!0,e.sharedConversationId),e.chatPageProps!=null?r.jsx(c.Provider,{value:{serverSharedThreadId:e.sharedConversationId},children:r.jsx(g,{...e.chatPageProps,clientThreadId:t})}):null}function p(e){return n.initThreadFromServerData(e.sharedConversationId,e.conversationData,!0),r.jsx(f,{sharedConversationId:e.sharedConversationId,initiallyHighlightedMessageId:e.conversationData.highlighted_message_id,continueConversationUrl:e.conversationData.continue_conversation_url,isIndexable:e.conversationData.is_indexable,isBetterMetatagsEnabled:e.conversationData.is_better_metatags_enabled})}function y({error:e}){const t=m(),a=h();return r.jsx("div",{className:"flex h-full w-full justify-center",children:r.jsx("div",{className:"max-w-lg p-6",children:r.jsx(v,{content:e,primaryCtaText:t.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>a("/")})})})}const U=({data:e})=>{const t=e;if(!t||t.serverResponse.type==="error"||!t.meta)return[{title:"ChatGPT"},{name:"robots",content:"noindex,nofollow"}];const{meta:a}=t;return a.isBetterMetatagsEnabled?[{title:"ChatGPT - "+a.title},{property:"og:site_name",content:"ChatGPT"},{name:"robots",content:a.isIndexable?"index,nofollow":"noindex,nofollow"},{property:"og:title",content:"ChatGPT - "+a.title},{property:"og:description",content:a.description},{property:"og:image",content:a.imageSrc},{property:"og:url",content:"https://chatgpt.com/share/"+t.sharedConversationId}]:[{title:"ChatGPT"},...u]};function W(){const{sharedConversationId:e,...t}=i(),{layer:a}=s("2840731323"),o=a.get("is_direct_continue_enabled",!1);return r.jsx(C,{...t,sharedConversationId:e,isContinueEnabled:o})}export{W as default,U as meta};
//# sourceMappingURL=gpg8h2515drq8h6q.js.map