import{bg as s,l as r,b4 as m,r as d,dM as l,dN as c,W as h,bD as u,dw as p}from"./gie7t2ghpkmat91x.js";import{C as f}from"./ke8nollx111ccyk2.js";import{ay as g}from"./eb3stsg8iy7t43kd.js";import{S as v}from"./izn7uhqysfpf8myq.js";import{T as n}from"./j7vda0o4435fpq77.js";import{u as x}from"./lgkh1cwsm388me29.js";import"./mlhieyi9z3gwttrn.js";import"./g9iu7nm903guujld.js";import"./cq1wr63lzayx7ig8.js";import"./h2sd1xa6f1fu46y0.js";import"./dj1r9dxm91vgn5c2.js";import"./l9f3mccvx9rgexey.js";import"./feb9subta6lf5bz0.js";import"./dcuy50ysngytazok.js";import"./ngdb9un7j510048b.js";import"./cap2emr12g2tghfb.js";import"./m73oatg382ylvuvx.js";import"./n86rj4z42qeu7i16.js";import"./ebqv5ph7c2sdk5gc.js";import"./gc1cav3hbynzlnwl.js";import"./f1k15lrwzctkk8t5.js";import"./me49ih2kp8p0srre.js";import"./m878e283hszmxxxu.js";import"./mh122gvlhdytz1u1.js";import"./e7e7sp2dnlssszco.js";import"./orr0fyu2bv33rv28.js";import"./b8jcru655m2j4vhf.js";import"./ola9q8b6skavyu55.js";import"./gr4woi3c8mqomb61.js";import"./ga5jdyirsc70un2e.js";import"./mc0991qkstsnty8z.js";import"./mrjyzik1prg8meni.js";import"./m3vztdz5bfiry3en.js";import"./bj1d6q8t8rls8y02.js";import"./l3evqf207ny5gavp.js";import"./m6n9c5wi3ggf47q7.js";import"./jiryc8pk66l5n8uv.js";import"./ijeybnf9kxodchsu.js";import"./jytf3f2tg4kbg5jh.js";import"./mb9svnuvn1ty1398.js";import"./bqwyz0dvbjgcukvw.js";import"./j91tsyeg0cq1qizp.js";function C(t){if(t.serverResponse.type==="error")return r.jsx(y,{error:t.serverResponse.error});const e={...t,conversationData:t.serverResponse.data};return t.continueMode||t.isContinueEnabled?r.jsx(S,{...e}):t.moderationMode?r.jsx(m,{children:r.jsx(o,{...e})}):r.jsx(o,{...e})}function S(t){const[e]=d.useState(()=>l());return n.initThreadFromServerData(e,t.conversationData,!0,t.sharedConversationId),t.chatPageProps!=null?r.jsx(c.Provider,{value:{serverSharedThreadId:t.sharedConversationId},children:r.jsx(f,{...t.chatPageProps,clientThreadId:e})}):null}function o(t){return n.initThreadFromServerData(t.sharedConversationId,t.conversationData,!0),r.jsx(v,{sharedConversationId:t.sharedConversationId,initiallyHighlightedMessageId:t.conversationData.highlighted_message_id,continueConversationUrl:t.conversationData.continue_conversation_url,isIndexable:t.conversationData.is_indexable,isBetterMetatagsEnabled:t.conversationData.is_better_metatags_enabled})}function y({error:t}){const e=h(),a=u();return r.jsx("div",{className:"flex h-full w-full justify-center",children:r.jsx("div",{className:"max-w-lg p-6",children:r.jsx(g,{content:t,primaryCtaText:e.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>a("/")})})})}const lt=({data:t})=>{const e=t;if(!e||e.serverResponse.type==="error"||!e.meta)return[{title:"ChatGPT"},{name:"robots",content:"noindex,nofollow"}];const{meta:a}=e;return a.isBetterMetatagsEnabled?[{title:"ChatGPT - "+a.title},{property:"og:site_name",content:"ChatGPT"},{name:"robots",content:a.isIndexable?"index,nofollow":"noindex,nofollow"},{property:"og:title",content:"ChatGPT - "+a.title},{property:"og:description",content:a.description},{property:"og:image",content:a.imageSrc},{property:"og:url",content:"https://chatgpt.com/share/"+e.sharedConversationId}]:[{title:"ChatGPT"},...p]};function ct(){const{sharedConversationId:t,...e}=x(),{layer:a}=s("2840731323"),i=a.get("is_direct_continue_enabled",!1);return r.jsx(C,{...e,sharedConversationId:t,isContinueEnabled:i})}export{ct as default,lt as meta};
//# sourceMappingURL=gp08cwiwb0aq3x5l.js.map