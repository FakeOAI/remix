import{ei as m,j as s,l as c,r as i,ca as h,cv as p,cw as u,bv as l,O as f}from"./gm14raa1g9oy5lze.js";import{C as S}from"./m9hw3nrfrwpg4w3j.js";import{S as x}from"./cxvwo7l6swqi6h5e.js";import{T as g}from"./goq6gw3hck5id2f9.js";import"./epq05yjlon4syv7z.js";import"./ehhekc43fh49cdxb.js";import"./htzmr4miohs5u2sp.js";import"./dnzbm9ynquw1saun.js";import"./fcao37iwj85qxvmt.js";import"./vnsasfn9kp7j3jaq.js";import"./eczf805ezoi7u8pz.js";import"./bqg2pau7tnusmxfl.js";import"./nkohrdykzyljlhjn.js";import"./fcfj994c39pnsgi4.js";import"./gpc1oobtod5t2x0k.js";import"./jlvb9sjkhq0gtwol.js";import"./ld8g4g7xdimvzt0o.js";import"./fjqsxx23x1v0fnd8.js";import"./gm2qmjv5bpl6h54v.js";import"./ecpxuwr5ff0r1ijz.js";import"./g6hhwk4ay4c1muk0.js";import"./gbxmk1v9hajxy6ag.js";function v(r){const e=r.sharedConversationId,{data:t,isError:o}=c({queryKey:[`shared-conversation/${e}`],queryFn:()=>f.getAuthedSharedConversation(e)}),[a]=i.useState(()=>h()),[n,d]=i.useState(!1);return i.useEffect(()=>{o&&(window.location.href=p(u.SHARE_NOT_FOUND))},[o]),i.useEffect(()=>{t&&a&&(g.initThreadFromServerData(a,t,!0,e),d(!0))},[t,e,a]),n&&t?r.continueMode?s.jsx(S,{...r.chatPageProps,clientThreadId:a}):s.jsx(x,{sharedConversationId:a,initiallyHighlightedMessageId:t.highlighted_message_id,continueConversationUrl:t.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):s.jsx("div",{className:"flex h-full items-center justify-center",children:s.jsx(l,{className:"text-token-text-tertiary"})})}function U(){const{sharedConversationId:r,...e}=m();return s.jsx(v,{...e,sharedConversationId:r})}export{U as default};
//# sourceMappingURL=f8yzszcpohrh3sye.js.map