import{j as i,u as p,r as a,a$ as d,b0 as u,aY as h,R as c}from"./byjsl6fmrkvfkikz.js";import{C as f}from"./cc0j5f28hbhnvc9w.js";import{S as l}from"./dk2c9bicnzari800.js";import{j as S,T as x}from"./k9y60274mtouqpk6.js";import{u as g}from"./f8p5ue3fgsbqdefq.js";import"./mkdzigrfhg3ljd4p.js";import"./gzdwby307cq01p4d.js";import"./c5t9jayedjb4qxry.js";import"./haljegjt87cup22y.js";import"./g7xfk6lc3rb5gpp4.js";import"./f3plzi4ukb47qkp1.js";import"./hcf5gao25g1fhies.js";import"./mfreym0s187s9jrb.js";import"./h7ziq6349mijhmr1.js";import"./cnu2mjqgmfp5dqre.js";import"./j2utxaosc39xc7qz.js";import"./flw2u9r6fdpgl554.js";import"./g9imwwsgx97bm1kq.js";import"./c55sbaary1vl50ft.js";import"./s98ewaek78j1fvj4.js";import"./jfudb5sncbzm3tm1.js";import"./jbdt1d85czjr39f4.js";import"./hmxiov2ajbrcyny9.js";import"./gnjsr8ecejxnbwh9.js";import"./du1hyg7yhpjt0mt9.js";import"./hgbphho2r825jga9.js";import"./etbplzkqd8wfbgyy.js";import"./g4zpxys2uovavumh.js";import"./e1i3717bx7kqw5kf.js";import"./ovwrd90jrcqvxudh.js";import"./legvzc59nuo62s5z.js";import"./zsuvj3of64poi1n6.js";import"./mp8lbewlfb05hrvk.js";import"./clcq7ugpj7387znv.js";import"./lgdrlch7o5vblpft.js";import"./or18dbkih13oam8n.js";import"./du06oj20qhll8087.js";import"./hh714wrr0jz6y96o.js";import"./flucoshto2n4s4ub.js";import"./lito8p6pvzd9ui24.js";import"./l785tt65ttopqrd2.js";import"./cmwqyvo7yu32h3h7.js";import"./ixav5hoqk4lkjjq1.js";import"./otrjg9pa7c9px0f8.js";function C(e){const t=e.sharedConversationId,{data:r,isError:s}=p({queryKey:[`shared-conversation/${t}`],queryFn:()=>c.getAuthedSharedConversation(t)}),[o]=a.useState(()=>S()),[m,n]=a.useState(!1);return a.useEffect(()=>{s&&(window.location.href=d(u.SHARE_NOT_FOUND))},[s]),a.useEffect(()=>{r&&o&&(x.initThreadFromServerData(o,r,!0,t),n(!0))},[r,t,o]),m&&r?e.continueMode?i.jsx(f,{...e.chatPageProps,clientThreadId:o}):i.jsx(l,{sharedConversationId:o,initiallyHighlightedMessageId:r.highlighted_message_id,continueConversationUrl:r.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):i.jsx("div",{className:"flex h-full items-center justify-center",children:i.jsx(h,{className:"text-token-text-tertiary"})})}function dt(){const{sharedConversationId:e,...t}=g();return i.jsx(C,{...t,sharedConversationId:e})}export{dt as default};
//# sourceMappingURL=dcvk1ua5xt1zt1d4.js.map