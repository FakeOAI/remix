const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/gu56f3f5d54d5cwy.js","assets/blb8fkpza13sx80g.js","assets/dyqds22251aab1q6.js","assets/root-2e173bts.css","assets/fcxum6gqjrij69gr.js","assets/conversation-small-eplmind9.css","assets/ow8n1hqkp4gfrgpx.js","assets/cqxecb1nm9llwoxy.js","assets/c8b8r3t7ck2lwpyu.js","assets/jbfcx51oypvdjhlg.js","assets/lnxlki212r68ist5.js","assets/oe7ord136fy1sdu0.js","assets/lkx7t8edr4esgfrf.js","assets/ewz5sw1gy664ksj5.js","assets/mknno3nk1hhgzc2u.js","assets/nmhr9vdatlqs3i32.js","assets/lr2zq8mdkdqli4g0.js","assets/dat22tddpkd0ll0s.js","assets/f70u4yd9y9517n9j.js","assets/blojptvk9s9bjcvg.js","assets/hpiyxejmigz8npyy.js"])))=>i.map(i=>d[i]);
import{r as d,cr as J,c8 as W,ak as R,P as S,A as w,H as L,aU as P,fb as v,fc as G,aN as Z,j as s,c as p,bD as ee,B as te,E as F,ay as se,ba as ae,R as I,K as k,N as ne}from"./blb8fkpza13sx80g.js";import{dG as re,u as ie,dH as B,dI as oe,dJ as le,bF as de,aD as ce,bm as H,n as ue,dK as fe,dL as q,dM as me,dN as he,dO as A,dP as ye,dQ as ge}from"./fcxum6gqjrij69gr.js";import{b as pe}from"./ow8n1hqkp4gfrgpx.js";import{u as be,s as xe}from"./o7215osvukpob25w.js";import{f as ve}from"./irnc1xm5cr1qtkcb.js";import{s as Te,t as Y,b as Ee,v as Ne,T as U}from"./cqxecb1nm9llwoxy.js";import{G as z}from"./lnxlki212r68ist5.js";import{g as Se}from"./lkx7t8edr4esgfrf.js";import{al as we}from"./dyqds22251aab1q6.js";import{r as D}from"./ozed251l5a4m2n3o.js";import{m as Ie}from"./c8b8r3t7ck2lwpyu.js";function Ce(e,t,i){const{title:a,titleSource:r}=Te(e),[n,l]=d.useState(!1),o=a??t,c=d.useRef(o);return d.useEffect(()=>(i&&r===Y.Generated&&o!==c.current&&l(!0),()=>{c.current=o}),[i,o,r]),{isTypingEffect:n,resolvedTitle:o}}const ke=J(()=>W(()=>import("./gu56f3f5d54d5cwy.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(e=>e.GizmoConversationOptionsDropdown)),je=new Date(2024,8,24,13);function De(e){R.checkGate("3922476776")||re.abortAllRequests(),S.logEvent(w.loadThread,{threadId:e})}function Me({conversation:e,conversationTitle:t,onOpenChange:i}){const a=L(),{isUnauthenticated:r}=te(),{eligible:n,markAsViewed:l}=de(ce.ArchiveConversationOnboarding),o=Ne(e.id),[c,f]=d.useState(!1),m=F(),u=se(),b=ae();return d.useEffect(()=>G(z,{deleteChat:({serverThreadId:h})=>{h===e.id&&f(!0)},archiveChat:async({serverThreadId:h})=>{h===e.id&&(await I.patchConversation(e.id,{is_archived:!0}),D(m),R.logEvent("chatgpt_conversation_archived"),S.logEvent(w.conversationArchived),n&&(b.info(a.formatMessage({defaultMessage:"You can view archived chats in Settings",id:"HistoryGizmoItem.archiveChatOnboarding"}),{duration:10,hasCloseButton:!0}),l()),o&&H(u))}}),[u,b,m,n,e.id,a,o,l]),r?null:s.jsxs(s.Fragment,{children:[s.jsx(ue,{label:a.formatMessage({id:"tJPHEQ",defaultMessage:"Options"}),sideOffset:4,side:"top",children:s.jsx(ke,{clientThreadId:e.id,onOpenChange:i,children:s.jsx("button",{className:"flex items-center justify-center text-token-text-secondary transition hover:text-token-text-primary radix-state-open:text-token-text-secondary",children:s.jsx(we,{className:"icon-md"})})})}),c&&s.jsx(fe,{title:t,handleDelete:()=>{I.patchConversation(e.id,{is_visible:!1}).then(()=>{D(m),R.logEvent("chatgpt_conversation_deleted"),S.logEvent(w.conversationDeleted)}),o&&H(u)},onClose:()=>{f(!1)}})]})}function _e({conversation:e,onClose:t}){const[i,a]=d.useState(e.title),r=F();function n(){i!==e.title&&(U.setTitle(e.id,i,Y.User),S.logEvent(w.renameThread,{threadId:e.id,content:i}),I.patchConversation(e.id,{title:i}).then(()=>{D(r)}))}return s.jsx("input",{type:"text",value:i,onChange:l=>{a(l.target.value)},onKeyDown:l=>{switch(l.key){case"Escape":t();break;case"Enter":n(),t();break}},onBlur:()=>{n(),t()},autoFocus:!0,className:"w-full border border-token-border-light bg-transparent p-0 text-sm"})}const K=5,Oe=3e3;function Re({threadId:e}){const t=F(),i=d.useRef(!1),a=d.useRef(null);return d.useEffect(()=>{async function r(){i.current=!0;const n=await ve(e);if(n.async_status===v.FINISHED){D(t),U.initThreadFromServerData(e,n,!0,void 0,!0);return}if(n.async_status!==v.PENDING)return;const l=n.update_time??0;B(new Date,new Date(l*1e3))<K?a.current=window.setTimeout(r,Oe):I.clearConversationStatus(e)}return i.current||r(),()=>{a.current&&window.clearTimeout(a.current)}},[t,e]),null}function Le({conversation:e,isActive:t,elementRef:i,isPrimaryBackgroundColor:a}){const r=L(),[n,l]=d.useState(!1),[o,c]=d.useState(!1),{value:f}=P("3922476776"),{value:m}=P("232791851"),u=be(e.id),b=Ee(e.id),h=ie(b),C=B(new Date,new Date(e.update_time??0))<K,y=e.update_time&&oe(new Date(e.update_time),je),x=u===v.PENDING&&C,M=m&&!t&&!h&&y&&u===v.FINISHED,_=m&&!t&&(h||x),O=m&&u===v.PENDING&&!h&&C,T=d.useRef(!1);d.useEffect(()=>{!T.current&&!h&&u===v.FINISHED&&t&&f&&(async()=>(T.current=!0,await I.clearConversationStatus(e.id),xe(e.id,null),T.current=!1))()},[f,t,e.id,u,h]),d.useEffect(()=>G(z,{editTitle:({serverThreadId:g})=>{(g?g===e.id:t)&&l(!0)}}),[e.id,t]);const E=r.formatMessage({id:"mpXAeu",defaultMessage:"New chat"}),{resolvedTitle:N,isTypingEffect:V}=Ce(e.id,e.title,t),$=Z(),Q=V&&t&&$,{data:X}=pe(e.conversation_template_id??void 0);return s.jsxs("div",{className:p("no-draggable group relative rounded-lg active:opacity-90",t?"bg-token-sidebar-surface-secondary":"hover:bg-token-sidebar-surface-secondary",o&&!t&&"bg-token-sidebar-surface-secondary"),children:[O&&s.jsx(Re,{threadId:e.id}),s.jsx(ee,{to:Se(e.id,X),onClick:g=>{g.metaKey||g.ctrlKey||t||De(e.id)},onDoubleClick:()=>{l(!0)},ref:i,className:"flex items-center gap-2 p-2",children:s.jsxs("div",{className:p("relative grow overflow-hidden whitespace-nowrap",_&&"loading-shimmer"),dir:"auto",children:[Q?s.jsx(le,{text:N||E}):N||E,s.jsx("div",{className:p("absolute bottom-0 top-0 to-transparent ltr:right-0 ltr:bg-gradient-to-l rtl:left-0 rtl:bg-gradient-to-r",a?t||!t&&o?"from-token-sidebar-surface-secondary":"from-token-main-surface-primary":!1,a?!1:t||!t&&o?"from-token-sidebar-surface-secondary":"from-token-sidebar-surface-primary",{"from-token-main-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":a&&!t&&!o,"from-token-sidebar-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":!a&&!t&&!o,"w-10 from-60%":t||o,"w-8 from-0% can-hover:group-hover:w-10 can-hover:group-hover:from-60%":!t&&!o})})]})}),n?s.jsx("div",{className:"absolute bottom-0 left-[7px] right-2 top-0 flex items-center bg-token-sidebar-surface-secondary",children:s.jsx(_e,{conversation:e,onClose:()=>{l(!1)}})}):M?s.jsx("div",{className:"absolute bottom-0 top-0 flex items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",children:s.jsx("div",{className:"h-2 w-2 rounded-full bg-blue-selection"})}):s.jsx("div",{className:p("absolute bottom-0 top-0 items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",t||o?"flex":"hidden can-hover:group-hover:flex"),children:s.jsx(Me,{conversation:e,conversationTitle:N??e.title,onOpenChange:g=>{c(g),g&&S.logEvent(w.conversationHistoryItemOpenMenu,{conversationId:e.id})}})})]})}const Fe={initial:({isNew:e})=>e?{opacity:0,height:0,overflow:"hidden"}:{},animate:()=>({opacity:1,height:"auto"}),exit:()=>({opacity:0,height:0})};function Pe({elementRef:e,item:t,isActive:i,isFirstItem:a,isExistingItem:r,isPrimaryBackgroundColor:n}){const l=q();return s.jsx(Ie.li,{className:p("relative",a&&!l?"z-[15]":""),layout:"position",custom:{isNew:!r},variants:Fe,initial:"initial",animate:"animate",exit:"exit","data-testid":"history-item",children:s.jsx(Le,{isPrimaryBackgroundColor:n,conversation:t,isActive:i,elementRef:e})})}const j=ne({historyBucketToday:{id:"history.bucket.today",defaultMessage:"Today"},historyBucketYesterday:{id:"history.bucket.yesterday",defaultMessage:"Yesterday"},historyBucketLastSeven:{id:"history.bucket.lastSeven",defaultMessage:"Previous 7 Days"},historyBucketLastThirty:{id:"history.bucket.lastThirty",defaultMessage:"Previous 30 Days"}}),He=5;function Xe(e,t){const i=L();return d.useMemo(()=>e.reduce((a,r)=>{const n=new Date(r.update_time??r.create_time??0),l=me(new Date,n);if(l===0)a.recent.today.items.push(r);else if(l<=1)a.recent.yesterday.items.push(r);else if(l<=7)a.recent.lastSeven.items.push(r);else if(l<=30)a.recent.lastThirty.items.push(r);else if(he(n)){const o=A(n),c=ye(n),f=`${o}-${c}`;a.dynamicMonths[f]?a.dynamicMonths[f].items.push(r):a.dynamicMonths[f]={label:i.formatDate(n,{month:"long"}),items:[r]}}else{const c=`${A(n)}-`;a.dynamicYears[c]?a.dynamicYears[c].items.push(r):a.dynamicYears[c]={label:i.formatDate(n,{year:"numeric"}),items:[r]}}return a},{recent:{today:{label:s.jsx(k,{...j.historyBucketToday}),items:[]},yesterday:{label:s.jsx(k,{...j.historyBucketYesterday}),items:[]},lastSeven:{label:s.jsx(k,{...j.historyBucketLastSeven}),items:[]},lastThirty:{label:s.jsx(k,{...j.historyBucketLastThirty}),items:[]}},dynamicMonths:{},dynamicYears:{}}),[t,e])}function Je({activeId:e,bucketedItems:t,items:i,hasNextPage:a,isPrimaryBackgroundColor:r,previousItems:n,infiniteScrollTriggerElementRef:l}){const o=q();return s.jsx(s.Fragment,{children:[t.recent,t.dynamicMonths,t.dynamicYears].flatMap((c,f)=>s.jsx(d.Fragment,{children:Object.entries(c).map(([m,{items:u,label:b}],h)=>{if(m!=="today"&&!u.length)return null;const C=!!u.find(y=>{var x;return i.length>0&&y.id===((x=i[0])==null?void 0:x.id)});return u.length>0&&s.jsxs("div",{className:p(r&&"first:mt-0","relative mt-5 first:mt-0 last:mb-5"),children:[s.jsx("div",{className:p("sticky z-20 bg-token-sidebar-surface-primary",o?"top-[--sidebar-sticky-threshold] mb-2":"top-0"),children:s.jsx("span",{className:"flex h-9 items-center",children:s.jsx(ge,{children:b})})}),s.jsx("ol",{children:u.map((y,x)=>{var E;const M=e===y.id,_=C&&x===0,O=n==null?void 0:n.find(({id:N})=>N===y.id),T=a&&((E=i[i.length-He-1])==null?void 0:E.id)===y.id?l:void 0;return s.jsx(Pe,{item:y,isActive:M,isFirstItem:_,isExistingItem:!!O,isPrimaryBackgroundColor:r,elementRef:T},`history-item-${y.id}-${m}`)})})]},`${m}-${f}-${h}`)})},`category-${f}`))})}export{Je as H,Pe as a,De as o,Xe as u};
//# sourceMappingURL=oidghlgz0jkio51q.js.map