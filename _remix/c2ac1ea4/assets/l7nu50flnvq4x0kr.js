import{bh as s,l as r,b5 as d,r as m,dP as l,dQ as c,V as h,bp as u,dz as p}from"./lals6l6wvhqmd5cv.js";import{C as f}from"./nn9pq6wks51pv3qq.js";import{av as v}from"./ocy5lriy4r76uu3t.js";import{S as g}from"./e40c31ft5la1eokh.js";import{T as n}from"./froezb8g6j840ema.js";import{u as x}from"./cwld5hwb7g18q3ms.js";import"./h0xzxtn9v9a6p79x.js";import"./dd48d0ccqlte627j.js";import"./nr8jhn7b7ayjgzuz.js";import"./jkgps0ms1g393uu6.js";import"./mylcj6ilw2effv3o.js";import"./c5fwe2zczvz2lft2.js";import"./drtwivpp7kgsli96.js";import"./ki6xl5pistc069s0.js";import"./j1o0o1gyyxtrgrk4.js";import"./hhzd6wnlg2qeys27.js";import"./ee14ce9gx7tomo91.js";import"./toka7i1wryd63m7e.js";import"./gvb71nam7e3eye1o.js";import"./hve33qmg6l11fh15.js";import"./kju774zy9jcos40f.js";import"./hw1dq5141n88b047.js";import"./k5uwp4fykvirbsp3.js";import"./gv0fm0lmndlfuftl.js";import"./cb1fkmyemnyrsbby.js";import"./kpkcev91ix8xhdb4.js";import"./dl44wycnizjdr9ct.js";import"./bnub92rh8g0nt735.js";import"./fm63l98wiw0qskz8.js";import"./hur25ckrmcvxvuea.js";import"./ihwhzjl9pclmai28.js";import"./nl9xggq807402985.js";import"./fk4t9hf92a3slf5o.js";import"./itc152majko2hv8y.js";import"./papfnbld0lmscpgx.js";import"./bplveic13cm8ocn8.js";import"./mif2co2jwmfxrxgs.js";import"./cccxjjn21q3bmfkq.js";import"./mfqchiy61pi39bhl.js";import"./mnzi5pk8xmym9cl9.js";function C(t){if(t.serverResponse.type==="error")return r.jsx(b,{error:t.serverResponse.error});const e={...t,conversationData:t.serverResponse.data};return t.continueMode||t.isContinueEnabled?r.jsx(S,{...e}):t.moderationMode?r.jsx(d,{children:r.jsx(o,{...e})}):r.jsx(o,{...e})}function S(t){const[e]=m.useState(()=>l());return n.initThreadFromServerData(e,t.conversationData,!0,t.sharedConversationId),t.chatPageProps!=null?r.jsx(c.Provider,{value:{serverSharedThreadId:t.sharedConversationId},children:r.jsx(f,{...t.chatPageProps,clientThreadId:e})}):null}function o(t){return n.initThreadFromServerData(t.sharedConversationId,t.conversationData,!0),r.jsx(g,{sharedConversationId:t.sharedConversationId,initiallyHighlightedMessageId:t.conversationData.highlighted_message_id,continueConversationUrl:t.conversationData.continue_conversation_url,isIndexable:t.conversationData.is_indexable,isBetterMetatagsEnabled:t.conversationData.is_better_metatags_enabled})}function b({error:t}){const e=h(),a=u();return r.jsx("div",{className:"flex h-full w-full justify-center",children:r.jsx("div",{className:"max-w-lg p-6",children:r.jsx(v,{content:t,primaryCtaText:e.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>a("/")})})})}const dt=({data:t})=>{const e=t;if(!e||e.serverResponse.type==="error"||!e.meta)return[{title:"ChatGPT"},{name:"robots",content:"noindex,nofollow"}];const{meta:a}=e;return a.isBetterMetatagsEnabled?[{title:"ChatGPT - "+a.title},{property:"og:site_name",content:"ChatGPT"},{name:"robots",content:a.isIndexable?"index,nofollow":"noindex,nofollow"},{property:"og:title",content:"ChatGPT - "+a.title},{property:"og:description",content:a.description},{property:"og:image",content:a.imageSrc},{property:"og:url",content:"https://chatgpt.com/share/"+e.sharedConversationId}]:[{title:"ChatGPT"},...p]};function mt(){const{sharedConversationId:t,...e}=x(),{layer:a}=s("2840731323"),i=a.get("is_direct_continue_enabled",!1);return r.jsx(C,{...e,sharedConversationId:t,isContinueEnabled:i})}export{mt as default,dt as meta};
//# sourceMappingURL=l7nu50flnvq4x0kr.js.map