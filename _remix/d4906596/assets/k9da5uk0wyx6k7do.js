import{dm as p,l as i,u as d,r as a,dL as u,c6 as c,c7 as h,a$ as l,j as f}from"./i02hakaw1yz2cb0w.js";import{C as S}from"./bvnegg9ila9t0odf.js";import{S as x}from"./gtdph4hvt262e32c.js";import{T as g}from"./fy32gsgjnvmziir1.js";import"./oolxnb4itrwnjqyf.js";import"./b265g6ovy2qnenwi.js";import"./ckygyr7dh5h6j13j.js";import"./mv65vi40bwx8cy8n.js";import"./b7ag3k9iwm4mxpe7.js";import"./kbm7816v821c2spk.js";import"./oap30ledw1k6is17.js";import"./fo1cpvmyviez6pdv.js";import"./excg0x3sj06exybp.js";import"./j1601v2ihcbk1gfj.js";import"./j8pudfjo9hou5kw0.js";import"./bbilryt45cr5lkmt.js";import"./cpdqbxpekjursyhj.js";import"./lkrzcvycbw3wllbo.js";import"./j3lsriwrfmutmze6.js";import"./cw5lmig55hzmscts.js";import"./olnc3xl0j433b5ye.js";import"./lh3mwfkwfhlv441f.js";import"./d5wegs5kxh8gy0hw.js";import"./i3dpv1f5ihn6o9pd.js";import"./jppq1up0yxybe7ed.js";import"./lznvc95l0hqf1fjq.js";import"./ggngldwzadhac7xs.js";import"./i13uw1x5yijtp8f3.js";import"./nq860i125dfat6cp.js";import"./mvklc9o1473kp30d.js";import"./hv7xf55q4xjiqsmg.js";import"./ivu7qbqshu9eraoy.js";import"./ka7sgnkfyonnm8ae.js";import"./ik0ionco6fs5t3nh.js";import"./j454liecuca977s7.js";import"./jt6caoufusqh0ntv.js";import"./jvvwd9d41co26naj.js";import"./dl0bo0ic4k4plglt.js";function C(r){const t=r.sharedConversationId,{data:e,isError:s}=d({queryKey:[`shared-conversation/${t}`],queryFn:()=>f.getAuthedSharedConversation(t)}),[o]=a.useState(()=>u()),[n,m]=a.useState(!1);return a.useEffect(()=>{s&&(window.location.href=c(h.SHARE_NOT_FOUND))},[s]),a.useEffect(()=>{e&&o&&(g.initThreadFromServerData(o,e,!0,t),m(!0))},[e,t,o]),n&&e?r.continueMode?i.jsx(S,{...r.chatPageProps,clientThreadId:o}):i.jsx(x,{sharedConversationId:o,initiallyHighlightedMessageId:e.highlighted_message_id,continueConversationUrl:e.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):i.jsx("div",{className:"flex h-full items-center justify-center",children:i.jsx(l,{className:"text-token-text-tertiary"})})}function it(){const{sharedConversationId:r,...t}=p();return i.jsx(C,{...t,sharedConversationId:r})}export{it as default};
//# sourceMappingURL=k9da5uk0wyx6k7do.js.map