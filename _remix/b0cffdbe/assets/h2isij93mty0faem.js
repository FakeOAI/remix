const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/i520cgeon8hto3lh.js","assets/iryvtox9frru8zal.js","assets/ju8uhwb40r1gh3q5.js","assets/root-eakuwlaq.css","assets/ibpo4l2zkh6u1ih1.js","assets/conversation-small-eplmind9.css","assets/mf6g7tm9dubb0dmt.js","assets/i7imfmvlw2tpm5ab.js","assets/huvolgphco6l4rty.js","assets/gv5ca86yrcihfl8p.js","assets/pb7o16o1rkgxr48m.js","assets/l10u0lbuaglz65cp.js","assets/kptcb3p9npo4cgga.js","assets/fbugbq2cgsx4uqok.js","assets/gr0sdntlncvsozwg.js","assets/isd5ykom0yj3l6h7.js","assets/kiul88ee43bpg5ht.js","assets/d18trmfz05ogbdqz.js","assets/okiw3k2v7db33y9e.js","assets/j8hlry24mn5b67g9.js","assets/f4j5guoj3uzo713s.js"])))=>i.map(i=>d[i]);
import{r as d,cr as J,c9 as W,an as R,P as N,F as w,N as L,aW as P,eU as v,eV as H,aP as Z,j as s,c as p,bF as ee,G as te,I as F,aA as se,bc as ae,R as I,U as j,V as ne}from"./iryvtox9frru8zal.js";import{dZ as re,u as ie,d_ as q,d$ as oe,e0 as le,bQ as de,aL as ce,bx as A,r as ue,e1 as fe,e2 as B,e3 as me,e4 as he,e5 as G,e6 as ye,e7 as ge}from"./ibpo4l2zkh6u1ih1.js";import{b as pe}from"./mf6g7tm9dubb0dmt.js";import{u as be,s as xe}from"./czgd79kfog1dyt49.js";import{f as ve}from"./iwd0icm3lsqsqxx8.js";import{s as Te,t as U,b as Ee,v as Se,T as Y}from"./i7imfmvlw2tpm5ab.js";import{G as V}from"./pb7o16o1rkgxr48m.js";import{g as Ne}from"./kptcb3p9npo4cgga.js";import{al as we}from"./ju8uhwb40r1gh3q5.js";import{r as _}from"./eovub15q8ucryed9.js";import{m as Ie}from"./huvolgphco6l4rty.js";function Ce(e,t,i){const{title:a,titleSource:r}=Te(e),[n,l]=d.useState(!1),o=a??t,c=d.useRef(o);return d.useEffect(()=>(i&&r===U.Generated&&o!==c.current&&l(!0),()=>{c.current=o}),[i,o,r]),{isTypingEffect:n,resolvedTitle:o}}const je=J(()=>W(()=>import("./i520cgeon8hto3lh.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(e=>e.GizmoConversationOptionsDropdown)),ke=new Date(2024,8,24,13);function _e(e){R.checkGate("3922476776")||re.abortAllRequests(),N.logEvent(w.loadThread,{threadId:e})}function Me({conversation:e,conversationTitle:t,onOpenChange:i}){const a=L(),{isUnauthenticated:r}=te(),{eligible:n,markAsViewed:l}=de(ce.ArchiveConversationOnboarding),o=Se(e.id),[c,f]=d.useState(!1),m=F(),u=se(),b=ae();return d.useEffect(()=>H(V,{deleteChat:({serverThreadId:h})=>{h===e.id&&f(!0)},archiveChat:async({serverThreadId:h})=>{h===e.id&&(await I.patchConversation(e.id,{is_archived:!0}),_(m),R.logEvent("chatgpt_conversation_archived"),N.logEvent(w.conversationArchived),n&&(b.info(a.formatMessage({defaultMessage:"You can view archived chats in Settings",id:"HistoryGizmoItem.archiveChatOnboarding"}),{duration:10,hasCloseButton:!0}),l()),o&&A(u))}}),[u,b,m,n,e.id,a,o,l]),r?null:s.jsxs(s.Fragment,{children:[s.jsx(ue,{label:a.formatMessage({id:"tJPHEQ",defaultMessage:"Options"}),sideOffset:4,side:"top",children:s.jsx(je,{clientThreadId:e.id,onOpenChange:i,children:s.jsx("button",{className:"flex items-center justify-center text-token-text-secondary transition hover:text-token-text-primary radix-state-open:text-token-text-secondary",children:s.jsx(we,{className:"icon-md"})})})}),c&&s.jsx(fe,{title:t,handleDelete:()=>{I.patchConversation(e.id,{is_visible:!1}).then(()=>{_(m),R.logEvent("chatgpt_conversation_deleted"),N.logEvent(w.conversationDeleted)}),o&&A(u)},onClose:()=>{f(!1)}})]})}function De({conversation:e,onClose:t}){const[i,a]=d.useState(e.title),r=F();function n(){i!==e.title&&(Y.setTitle(e.id,i,U.User),N.logEvent(w.renameThread,{threadId:e.id,content:i}),I.patchConversation(e.id,{title:i}).then(()=>{_(r)}))}return s.jsx("input",{type:"text",value:i,onChange:l=>{a(l.target.value)},onKeyDown:l=>{switch(l.key){case"Escape":t();break;case"Enter":n(),t();break}},onBlur:()=>{n(),t()},autoFocus:!0,className:"w-full border border-token-border-light bg-transparent p-0 text-sm"})}const z=5,Oe=3e3;function Re({threadId:e}){const t=F(),i=d.useRef(!1),a=d.useRef(null);return d.useEffect(()=>{async function r(){i.current=!0;const n=await ve(e);if(n.async_status===v.FINISHED){_(t),Y.initThreadFromServerData(e,n,!0,void 0,!0);return}if(n.async_status!==v.PENDING)return;const l=n.update_time??0;q(new Date,new Date(l*1e3))<z?a.current=window.setTimeout(r,Oe):I.clearConversationStatus(e)}return i.current||r(),()=>{a.current&&window.clearTimeout(a.current)}},[t,e]),null}function Le({conversation:e,isActive:t,elementRef:i,isPrimaryBackgroundColor:a}){const r=L(),[n,l]=d.useState(!1),[o,c]=d.useState(!1),{value:f}=P("3922476776"),{value:m}=P("232791851"),u=be(e.id),b=Ee(e.id),h=ie(b),C=q(new Date,new Date(e.update_time??0))<z,y=e.update_time&&oe(new Date(e.update_time),ke),x=u===v.PENDING&&C,M=m&&!t&&!h&&y&&u===v.FINISHED,D=m&&!t&&(h||x),O=m&&u===v.PENDING&&!h&&C,T=d.useRef(!1);d.useEffect(()=>{!T.current&&!h&&u===v.FINISHED&&t&&f&&(async()=>(T.current=!0,await I.clearConversationStatus(e.id),xe(e.id,null),T.current=!1))()},[f,t,e.id,u,h]),d.useEffect(()=>H(V,{editTitle:({serverThreadId:g})=>{(g?g===e.id:t)&&l(!0)}}),[e.id,t]);const E=r.formatMessage({id:"mpXAeu",defaultMessage:"New chat"}),{resolvedTitle:S,isTypingEffect:$}=Ce(e.id,e.title,t),K=Z(),Q=$&&t&&K,{data:X}=pe(e.conversation_template_id??void 0);return s.jsxs("div",{className:p("no-draggable group relative rounded-lg active:opacity-90",t?"bg-token-sidebar-surface-secondary":"hover:bg-token-sidebar-surface-secondary",o&&!t&&"bg-token-sidebar-surface-secondary"),children:[O&&s.jsx(Re,{threadId:e.id}),s.jsx(ee,{to:Ne(e.id,X),onClick:g=>{g.metaKey||g.ctrlKey||t||_e(e.id)},onDoubleClick:()=>{l(!0)},ref:i,className:"flex items-center gap-2 p-2",children:s.jsxs("div",{className:p("relative grow overflow-hidden whitespace-nowrap",D&&"loading-shimmer"),dir:"auto",children:[Q?s.jsx(le,{text:S||E}):S||E,s.jsx("div",{className:p("absolute bottom-0 top-0 to-transparent ltr:right-0 ltr:bg-gradient-to-l rtl:left-0 rtl:bg-gradient-to-r",a?t||!t&&o?"from-token-sidebar-surface-secondary":"from-token-main-surface-primary":!1,a?!1:t||!t&&o?"from-token-sidebar-surface-secondary":"from-token-sidebar-surface-primary",{"from-token-main-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":a&&!t&&!o,"from-token-sidebar-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":!a&&!t&&!o,"w-10 from-60%":t||o,"w-8 from-0% can-hover:group-hover:w-10 can-hover:group-hover:from-60%":!t&&!o})})]})}),n?s.jsx("div",{className:"absolute bottom-0 left-[7px] right-2 top-0 flex items-center bg-token-sidebar-surface-secondary",children:s.jsx(De,{conversation:e,onClose:()=>{l(!1)}})}):M?s.jsx("div",{className:"absolute bottom-0 top-0 flex items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",children:s.jsx("div",{className:"h-2 w-2 rounded-full bg-blue-selection"})}):s.jsx("div",{className:p("absolute bottom-0 top-0 items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",t||o?"flex":"hidden can-hover:group-hover:flex"),children:s.jsx(Me,{conversation:e,conversationTitle:S??e.title,onOpenChange:g=>{c(g),g&&N.logEvent(w.conversationHistoryItemOpenMenu,{conversationId:e.id})}})})]})}const Fe={initial:({isNew:e})=>e?{opacity:0,height:0,overflow:"hidden"}:{},animate:()=>({opacity:1,height:"auto"}),exit:()=>({opacity:0,height:0})};function Pe({elementRef:e,item:t,isActive:i,isFirstItem:a,isExistingItem:r,isPrimaryBackgroundColor:n}){const l=B();return s.jsx(Ie.li,{className:p("relative",a&&!l?"z-[15]":""),layout:"position",custom:{isNew:!r},variants:Fe,initial:"initial",animate:"animate",exit:"exit","data-testid":"history-item",children:s.jsx(Le,{isPrimaryBackgroundColor:n,conversation:t,isActive:i,elementRef:e})})}const k=ne({historyBucketToday:{id:"history.bucket.today",defaultMessage:"Today"},historyBucketYesterday:{id:"history.bucket.yesterday",defaultMessage:"Yesterday"},historyBucketLastSeven:{id:"history.bucket.lastSeven",defaultMessage:"Previous 7 Days"},historyBucketLastThirty:{id:"history.bucket.lastThirty",defaultMessage:"Previous 30 Days"}}),Ae=5;function Xe(e,t){const i=L();return d.useMemo(()=>e.reduce((a,r)=>{const n=new Date(r.update_time??r.create_time??0),l=me(new Date,n);if(l===0)a.recent.today.items.push(r);else if(l<=1)a.recent.yesterday.items.push(r);else if(l<=7)a.recent.lastSeven.items.push(r);else if(l<=30)a.recent.lastThirty.items.push(r);else if(he(n)){const o=G(n),c=ye(n),f=`${o}-${c}`;a.dynamicMonths[f]?a.dynamicMonths[f].items.push(r):a.dynamicMonths[f]={label:i.formatDate(n,{month:"long"}),items:[r]}}else{const c=`${G(n)}-`;a.dynamicYears[c]?a.dynamicYears[c].items.push(r):a.dynamicYears[c]={label:i.formatDate(n,{year:"numeric"}),items:[r]}}return a},{recent:{today:{label:s.jsx(j,{...k.historyBucketToday}),items:[]},yesterday:{label:s.jsx(j,{...k.historyBucketYesterday}),items:[]},lastSeven:{label:s.jsx(j,{...k.historyBucketLastSeven}),items:[]},lastThirty:{label:s.jsx(j,{...k.historyBucketLastThirty}),items:[]}},dynamicMonths:{},dynamicYears:{}}),[t,e])}function Je({activeId:e,bucketedItems:t,items:i,hasNextPage:a,isPrimaryBackgroundColor:r,previousItems:n,infiniteScrollTriggerElementRef:l}){const o=B();return s.jsx(s.Fragment,{children:[t.recent,t.dynamicMonths,t.dynamicYears].flatMap((c,f)=>s.jsx(d.Fragment,{children:Object.entries(c).map(([m,{items:u,label:b}],h)=>{if(m!=="today"&&!u.length)return null;const C=!!u.find(y=>{var x;return i.length>0&&y.id===((x=i[0])==null?void 0:x.id)});return u.length>0&&s.jsxs("div",{className:p(r&&"first:mt-0","relative mt-5 first:mt-0 last:mb-5"),children:[s.jsx("div",{className:p("sticky z-20 bg-token-sidebar-surface-primary",o?"top-[--sidebar-sticky-threshold] mb-2":"top-0"),children:s.jsx("span",{className:"flex h-9 items-center",children:s.jsx(ge,{children:b})})}),s.jsx("ol",{children:u.map((y,x)=>{var E;const M=e===y.id,D=C&&x===0,O=n==null?void 0:n.find(({id:S})=>S===y.id),T=a&&((E=i[i.length-Ae-1])==null?void 0:E.id)===y.id?l:void 0;return s.jsx(Pe,{item:y,isActive:M,isFirstItem:D,isExistingItem:!!O,isPrimaryBackgroundColor:r,elementRef:T},`history-item-${y.id}-${m}`)})})]},`${m}-${f}-${h}`)})},`category-${f}`))})}export{Je as H,Pe as a,_e as o,Xe as u};
//# sourceMappingURL=h2isij93mty0faem.js.map