import{ep as m,j as s,l as p,r as o,ca as c,cv as h,cw as u,bv as l,O as f}from"./f2udakjpoavu4gos.js";import{C as S}from"./hrbf1oc3i7rmpfu2.js";import{S as x}from"./lmfcaxeyxteot5gn.js";import{p as g}from"./sfdamp1qo3tlrbo9.js";import"./ml8qzer8gjkdgre1.js";import"./kdgfr2bc8z22at0y.js";import"./npkx6d28cct04tdy.js";import"./gl0adgh982hb5wsf.js";import"./bomnvk8yicq90eph.js";import"./m016wm06yabd4ypw.js";import"./jjeixxx1npzu3q6u.js";import"./kq721ikdoa00olnj.js";import"./eab1owwnq1b8z7mz.js";import"./nq9zk3w5ayd1en4z.js";import"./hses1sl3exvd9twm.js";import"./fd14dsdxvqy4coi5.js";import"./ifo8g42n2uneriy1.js";import"./j51m48g0zww1l6we.js";import"./hdp76dkdga55bhk0.js";import"./mjc3hwv7dhhy7o0w.js";import"./e94sigi1k7kadm3v.js";import"./fzpg20af1rpfsr46.js";function v(r){const e=r.sharedConversationId,{data:t,isError:i}=p({queryKey:[`shared-conversation/${e}`],queryFn:()=>f.getAuthedSharedConversation(e)}),[a]=o.useState(()=>c()),[n,d]=o.useState(!1);return o.useEffect(()=>{i&&(window.location.href=h(u.SHARE_NOT_FOUND))},[i]),o.useEffect(()=>{t&&a&&(g.initThreadFromServerData(a,t,!0,e),d(!0))},[t,e,a]),n&&t?r.continueMode?s.jsx(S,{...r.chatPageProps,clientThreadId:a}):s.jsx(x,{sharedConversationId:a,initiallyHighlightedMessageId:t.highlighted_message_id,continueConversationUrl:t.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):s.jsx("div",{className:"flex h-full items-center justify-center",children:s.jsx(l,{className:"text-token-text-tertiary"})})}function U(){const{sharedConversationId:r,...e}=m();return s.jsx(v,{...e,sharedConversationId:r})}export{U as default};
//# sourceMappingURL=ij0k6kivh90prs3w.js.map