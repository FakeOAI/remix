import{j as i,u as p,r as a,b1 as d,b2 as u,a_ as h,R as c}from"./mcyyoqk6c65s5m7y.js";import{C as f}from"./onwn4s0afxdec821.js";import{S as l}from"./8zyzdqrbjahdzh9y.js";import{l as S,T as x}from"./ohg1s3et26cja7zg.js";import{u as g}from"./lr8l927c33nk68v3.js";import"./j6bdhpkfr2kjp58j.js";import"./hw6k3xdq2xxqdd1w.js";import"./nh1durdkfwadep5g.js";import"./eqi5dfq4lqgt3gmd.js";import"./g30wksaahx5tfh97.js";import"./hg65d6uq4z8ncdrn.js";import"./ephj8h5copu3cxqm.js";import"./nhdygcow3ujiffwu.js";import"./cu9l7fpkp3smphcy.js";import"./ntvzgspnnc3vz5ap.js";import"./bonalo3y1m1wonxg.js";import"./bbv41foyq3azc2ez.js";import"./dwfbwyjm7zopu5av.js";import"./f7xeg3xdk6faohl7.js";import"./cyokxgzk3nk1705p.js";import"./kz3qmnk8s0y5jvdn.js";import"./nk8858u2pajbgcf4.js";import"./ocuzgloke56d7jc9.js";import"./eiwoz6s64ss0s8qy.js";import"./m1rv9f9ynturcje1.js";import"./ocf4s6fktqnxrie6.js";import"./cy0yfqw5u86zpjzo.js";import"./hjdknfkl21y8nres.js";import"./kepaiod7hnq9d0bs.js";import"./ca08h3hs9zu59e15.js";import"./ey11d34qwjrrcz36.js";import"./kv39u2w28gozcl8g.js";import"./i82vv89dbyen7vll.js";import"./vok2992ho3jw6p06.js";import"./n81meodmm5fvl86u.js";import"./ce5tprfivs3otwqz.js";import"./liqp6cwyux4xf50c.js";import"./bev1ou9ghqnz7dah.js";import"./lkby6z00tc2njyno.js";import"./5sngip5omnm5mvst.js";import"./of96tfkt8icl4kmf.js";import"./dnpv2y2tu9pdgf4b.js";import"./c7wk805aullnjpc7.js";import"./b924matvzjfrs8ny.js";function C(e){const t=e.sharedConversationId,{data:r,isError:s}=p({queryKey:[`shared-conversation/${t}`],queryFn:()=>c.getAuthedSharedConversation(t)}),[o]=a.useState(()=>S()),[m,n]=a.useState(!1);return a.useEffect(()=>{s&&(window.location.href=d(u.SHARE_NOT_FOUND))},[s]),a.useEffect(()=>{r&&o&&(x.initThreadFromServerData(o,r,!0,t),n(!0))},[r,t,o]),m&&r?e.continueMode?i.jsx(f,{...e.chatPageProps,clientThreadId:o}):i.jsx(l,{sharedConversationId:o,initiallyHighlightedMessageId:r.highlighted_message_id,continueConversationUrl:r.continue_conversation_url,isIndexable:!1}):i.jsx("div",{className:"flex h-full items-center justify-center",children:i.jsx(h,{className:"text-token-text-tertiary"})})}function dt(){const{sharedConversationId:e,...t}=g();return i.jsx(C,{...t,sharedConversationId:e})}export{dt as default};
//# sourceMappingURL=llm8luzzqu43db18.js.map