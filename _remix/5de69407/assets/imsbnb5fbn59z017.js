import{dh as s,aU as m,y as r,az as d,r as l,dI as c,X as h,bc as u,dt as p}from"./p4yo0rzsteij4ihh.js";import{C as g}from"./l073i3o7wz5lnloz.js";import{ac as v,ad as f}from"./m2xb5h49bu6lvq0z.js";import{S as x}from"./faczaiousfpcepem.js";import{T as n}from"./ucoghk4z1rejef9i.js";import"./hd436y4ydqidgeiu.js";import"./d3g4a0hcwihawz3e.js";import"./mf8aa04pcamvg3db.js";import"./mslwg28fmsyi0i8b.js";import"./j47f1y1dfugxdi4c.js";import"./kjnxb2s320ih2pof.js";import"./l48h3mdgj5xfyc0e.js";import"./o2246qj71dru3m9e.js";import"./e0csq37aq7fsoatu.js";import"./nf6la2yi1otm0vo9.js";import"./f1wmn65au0ke9jk0.js";import"./eh2eng92zajjlxkp.js";import"./k38f533rijdcqgn0.js";import"./ip9uh04g30enj3b9.js";import"./ev2x16g8l9ld0mx0.js";import"./hqitv0sbw213sss9.js";import"./l8q6mtl17u7kkoap.js";import"./nbxponn7987qv6zb.js";import"./fs0687qtyw84v8q1.js";import"./lnpqnis7t2kel0cw.js";import"./kxwyftr8p9w7yc8v.js";import"./kn4kwfz3pcc0dh1y.js";import"./ofvfxe9a1b2fhuri.js";import"./obhqaj3zdb1rotq2.js";import"./c0l89ic47ub2421p.js";import"./hx0lipk659xndf71.js";import"./f62vqubb0r8xed1w.js";import"./nj8ushefqfuwoi4c.js";import"./mda38ewxonn8kvuj.js";import"./l2oo38vrfdv3orft.js";import"./d8l43kuu0o9ea9il.js";import"./buicxllnthhjkqpv.js";import"./ji0i2gthym3v2luf.js";import"./bld70ok0mq24oqdw.js";import"./hmjswdi4wh596fl1.js";import"./g233jbmgj8j86ygl.js";import"./c6zgb2lnq7ibqrw9.js";import"./od9zy3milg264no9.js";function C(t){if(t.serverResponse.type==="error")return r.jsx(y,{error:t.serverResponse.error});const e={...t,conversationData:t.serverResponse.data};return t.continueMode||t.isContinueEnabled?r.jsx(S,{...e}):t.moderationMode?r.jsx(d,{children:r.jsx(o,{...e})}):r.jsx(o,{...e})}function S(t){const[e]=l.useState(()=>c());return n.initThreadFromServerData(e,t.conversationData,!0,t.sharedConversationId),t.chatPageProps!=null?r.jsx(v.Provider,{value:{serverSharedThreadId:t.sharedConversationId},children:r.jsx(g,{...t.chatPageProps,clientThreadId:e})}):null}function o(t){return n.initThreadFromServerData(t.sharedConversationId,t.conversationData,!0),r.jsx(x,{sharedConversationId:t.sharedConversationId,initiallyHighlightedMessageId:t.conversationData.highlighted_message_id,continueConversationUrl:t.conversationData.continue_conversation_url,isIndexable:t.conversationData.is_indexable,isBetterMetatagsEnabled:t.conversationData.is_better_metatags_enabled})}function y({error:t}){const e=h(),a=u();return r.jsx("div",{className:"flex h-full w-full justify-center",children:r.jsx("div",{className:"max-w-lg p-6",children:r.jsx(f,{content:t,primaryCtaText:e.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>a("/")})})})}const ct=({data:t})=>{const e=t;if(!e||e.serverResponse.type==="error"||!e.meta)return[{title:"ChatGPT"},{name:"robots",content:"noindex,nofollow"}];const{meta:a}=e;return a.isBetterMetatagsEnabled?[{title:"ChatGPT - "+a.title},{property:"og:site_name",content:"ChatGPT"},{name:"robots",content:a.isIndexable?"index,nofollow":"noindex,nofollow"},{property:"og:title",content:"ChatGPT - "+a.title},{property:"og:description",content:a.description},{property:"og:image",content:a.imageSrc},{property:"og:url",content:"https://chatgpt.com/share/"+e.sharedConversationId}]:[{title:"ChatGPT"},...p]};function ht(){const{sharedConversationId:t,...e}=s(),{layer:a}=m("2840731323"),i=a.get("is_direct_continue_enabled",!1);return r.jsx(C,{...e,sharedConversationId:t,isContinueEnabled:i})}export{ht as default,ct as meta};
//# sourceMappingURL=imsbnb5fbn59z017.js.map