import{ao as d,r as a,aQ as p,aR as h,j as t,cO as u,aN as c,F as l}from"./fl2d4axqwlec442f.js";import{a as f,b as S}from"./ll20qfep3cplvqp0.js";import{l as x,T}from"./mdv4qne5bad6k363.js";import{u as g}from"./g2n8qwh2ss0ie8so.js";import"./j1he6evgnbin0qu0.js";import"./peddmh8exaqs0r0h.js";import"./gh19awl4r9489re0.js";import"./bgwzf28nepp7ingk.js";import"./bf9p6c4k268xb15s.js";import"./k07takrbtrsk9de9.js";import"./lq6036cn7rmiq25p.js";import"./oy5r4cug7893su6g.js";import"./dmbmjm2vn057v59j.js";import"./jx2sq93w3nviuhr5.js";import"./ftwz3m1z6v8nrdrn.js";import"./jlkl36qtq631mqfd.js";import"./n1oh6g0zl15bngdu.js";import"./kalvxwj9jd3mf7zc.js";import"./kvm77arpt4mqp2qh.js";import"./hahc0jd0xxbyjvq2.js";import"./o1wcjaoqwz5yxmlk.js";import"./nzr1rg2loqp9cm3x.js";import"./modys9k9trvnp8yr.js";import"./nxievw1boie4pgp2.js";import"./bp902go9rnmka01w.js";import"./kk5onbesx4xyt4mw.js";import"./jhoo5xmh9hh1g79w.js";import"./myjbeoa1xk1l1aef.js";import"./yrfwrt22eu7d1hh0.js";import"./ki2cginwub6ri404.js";import"./mf8xw7wlvlqx33d5.js";function v(r){const i=r.sharedConversationId,{data:e,isError:s}=d({queryKey:[`shared-conversation/${i}`],queryFn:()=>l.getAuthedSharedConversation(i)}),[o]=a.useState(()=>x()),[n,m]=a.useState(!1);return a.useEffect(()=>{s&&(window.location.href=p(h.SHARE_NOT_FOUND))},[s]),a.useEffect(()=>{e&&o&&(T.initThreadFromServerData(o,e,!0,i),m(!0))},[e,i,o]),n?r.continueMode?t.jsx(f,{...r.chatPageProps,clientThreadId:o}):t.jsx(u.Provider,{value:{serverSharedThreadId:i,isIndexable:!1},children:t.jsx(S,{clientThreadId:o,setClientThreadId:()=>{},initiallyHighlightedMessageId:e==null?void 0:e.highlighted_message_id,continueConversationUrl:e==null?void 0:e.continue_conversation_url})}):t.jsx("div",{className:"flex h-full items-center justify-center",children:t.jsx(c,{className:"text-token-text-tertiary"})})}function Y(){const r=g();return t.jsx(v,{...r})}export{Y as default};
//# sourceMappingURL=b5bsh0g84ywxtfbd.js.map