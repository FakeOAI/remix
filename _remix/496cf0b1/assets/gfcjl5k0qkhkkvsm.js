import{an as d,r as a,aL as p,aM as h,j as e,cG as u,aK as c,F as l}from"./e8vun44xdcdlb616.js";import{a as f,b as S}from"./jj8il1wcele1x0ax.js";import{m as x,T}from"./w6ck9aw2zcc1q7e6.js";import{u as g}from"./oi9i8ufayvhd51wh.js";import"./en0webbbxycrteaa.js";import"./oc84l1wcn68jyjr7.js";import"./ggfd01qgvnzl1dfn.js";import"./8hnumlh3uw9b5jv3.js";import"./h6o9nov39g27ny11.js";import"./hh81ty3bbkmbgknd.js";import"./bquctxd2pduue2mp.js";import"./g08mb3zssyk7jkh1.js";import"./3ifhafjjn7zrtr7k.js";import"./ce136zqschj6e95a.js";import"./jj7lgdplqic3yx9x.js";import"./bhmbk3lmmg39hscv.js";import"./n8qu7n1k2gy7aoc7.js";import"./b92ixlsujlash02v.js";import"./ei9gbjdvy0yqzk4w.js";import"./gc5lgszwv7xq7no3.js";import"./nsfccvo1dinxlwqu.js";import"./fdref9gqfuzocast.js";import"./li2feipvs7p7claf.js";import"./hpsgbx2lw63qko9d.js";import"./8dpou179vj6tbhoa.js";import"./f4i4f08lb7e9rjfr.js";import"./ikj88oj144cxg0fm.js";import"./bwbhbqfbelojeuef.js";import"./cfaw94hz2qkxhisz.js";import"./ghskp9tm9w8sz1ul.js";import"./gdf6c2fn4ckg5dnl.js";import"./n1rhwqb4zm4wky7c.js";function v(r){const i=r.sharedConversationId,{data:t,isError:s}=d({queryKey:[`shared-conversation/${i}`],queryFn:()=>l.getAuthedSharedConversation(i)}),[o]=a.useState(()=>x()),[n,m]=a.useState(!1);return a.useEffect(()=>{s&&(window.location.href=p(h.SHARE_NOT_FOUND))},[s]),a.useEffect(()=>{t&&o&&(T.initThreadFromServerData(o,t,!0,i),m(!0))},[t,i,o]),n?r.continueMode?e.jsx(f,{...r.chatPageProps,clientThreadId:o}):e.jsx(u.Provider,{value:{serverSharedThreadId:i,isIndexable:!1},children:e.jsx(S,{clientThreadId:o,setClientThreadId:()=>{},initiallyHighlightedMessageId:t==null?void 0:t.highlighted_message_id,continueConversationUrl:t==null?void 0:t.continue_conversation_url})}):e.jsx("div",{className:"flex h-full items-center justify-center",children:e.jsx(c,{className:"text-token-text-tertiary"})})}function Z(){const r=g();return e.jsx(v,{...r})}export{Z as default};
//# sourceMappingURL=gfcjl5k0qkhkkvsm.js.map