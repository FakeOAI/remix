import{u as d,r as a,aQ as p,aR as h,j as e,cK as u,aN as c,R as l}from"./ipnfovpzfewxgzg3.js";import{a as f,b as S}from"./gse7dgz3r8l6pupa.js";import{k as x,T}from"./ehatbj8iwbpf4wh7.js";import{u as g}from"./d2nri2yau2iueomv.js";import"./mmcqi5fu0b3qaeam.js";import"./o5tbvi53oemik5xh.js";import"./ewwu24rqftk2ujih.js";import"./f87edrj3i0wpmdr9.js";import"./movm4xy8m9ar5hid.js";import"./fi5s24sghhhw94o5.js";import"./ej408pdx458tsy3t.js";import"./d6ab1vlcmd6cf88h.js";import"./nscbad4ijbdmqfrp.js";import"./hw34p1qzj3vo4gjr.js";import"./o9fw4ao9md6zve03.js";import"./mgfsqa12autw4i6c.js";import"./kisdzvmool40grbe.js";import"./cv21a02hd9alt4jf.js";import"./emp5imjnsfybeqdb.js";import"./ndqx79um4hsuufbw.js";import"./kbojayx0vdmzwkpo.js";import"./bpirmff6045cvson.js";import"./cxkuyyn3v2ogz9jm.js";import"./jdds0lemxebd5n1s.js";import"./cog8pivw9uvp3t0w.js";import"./bxx3tiygpma4kjbo.js";import"./h5lvtzemsr9o701h.js";import"./nw124hbiqnimo711.js";import"./s8gzgi896943e4oz.js";import"./hiq86vx2michk4jr.js";import"./jz2hp7z6jka66xql.js";import"./mbqixcos53nk4tk5.js";function v(r){const i=r.sharedConversationId,{data:t,isError:s}=d({queryKey:[`shared-conversation/${i}`],queryFn:()=>l.getAuthedSharedConversation(i)}),[o]=a.useState(()=>x()),[n,m]=a.useState(!1);return a.useEffect(()=>{s&&(window.location.href=p(h.SHARE_NOT_FOUND))},[s]),a.useEffect(()=>{t&&o&&(T.initThreadFromServerData(o,t,!0,i),m(!0))},[t,i,o]),n?r.continueMode?e.jsx(f,{...r.chatPageProps,clientThreadId:o}):e.jsx(u.Provider,{value:{serverSharedThreadId:i,isIndexable:!1},children:e.jsx(S,{clientThreadId:o,setClientThreadId:()=>{},initiallyHighlightedMessageId:t==null?void 0:t.highlighted_message_id,continueConversationUrl:t==null?void 0:t.continue_conversation_url})}):e.jsx("div",{className:"flex h-full items-center justify-center",children:e.jsx(c,{className:"text-token-text-tertiary"})})}function Z(){const r=g();return e.jsx(v,{...r})}export{Z as default};
//# sourceMappingURL=htqc59vgc6y0ch8x.js.map