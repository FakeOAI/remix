const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ctq4zz696hgkr7vo.js","assets/dr7d3iwdkso0acad.js","assets/nk93elwanh2qmq79.js","assets/root-jzy5dbg3.css","assets/dmeh4acfgftb4ocn.js","assets/conversation-small-eplmind9.css","assets/l97vil97vij75d6c.js","assets/mhaqcfmmdyzdbeu3.js","assets/dnerd8yjozxoav5t.js","assets/lu206ujtbbqbzmfv.js","assets/8pfb0n8794aflxhe.js","assets/kk83ngqx38127x2h.js","assets/hy5i8xpuojx9el7d.js","assets/oj5tgfeg398yhzr0.js","assets/hgug9ei2kt950gus.js","assets/fs94t0nwpxhmz7ny.js","assets/ibjep6rcbxznwycd.js","assets/mhpy1qyey3xezj1x.js","assets/b1hq3c1bpnuzezc2.js","assets/kjb8it55yehajb6f.js","assets/d1veu52dtlvwcp39.js","assets/hqsn6fl6ox5vdywd.js"])))=>i.map(i=>d[i]);
import{r as u,aD as J,aE as Z,ao as R,P as E,a as S,V as L,bU as A,eW as x,eX as q,bA as ee,l as s,m as b,cj as te,Q as se,u as P,bp as ae,aK as ne,j as N,Z as w,a0 as re}from"./dr7d3iwdkso0acad.js";import{dO as ie,dP as oe,dQ as B,dR as le,dS as de,E as ue,G as ce,bE as G,T as fe,dT as me,dL as U,dU as he,dV as ye,dW as H,dX as ge,dM as pe}from"./dmeh4acfgftb4ocn.js";import{b as be,g as ve}from"./l97vil97vij75d6c.js";import{b as xe,r as j,s as Te}from"./hy5i8xpuojx9el7d.js";import{f as Ee}from"./kk83ngqx38127x2h.js";import{v as Se,w as Y,x as Ne,t as Ie,T as V}from"./mhaqcfmmdyzdbeu3.js";import{G as $}from"./8pfb0n8794aflxhe.js";import{a5 as we}from"./nk93elwanh2qmq79.js";import{m as Ce}from"./dnerd8yjozxoav5t.js";function je(e,t,r){const{title:a,titleSource:n}=Se(e),[i,l]=u.useState(!1),d=a??t,o=u.useRef(d);return u.useEffect(()=>(r&&n===Y.Generated&&d!==o.current&&l(!0),()=>{o.current=d}),[r,d,n]),{isTypingEffect:i,resolvedTitle:d}}const ke=J(()=>Z(()=>import("./ctq4zz696hgkr7vo.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])).then(e=>e.GizmoConversationOptionsDropdown)),Me=new Date(2024,8,24,13);function _e(e){R.checkGate("3922476776")||ie.abortAllRequests(),E.logEvent(S.loadThread,{threadId:e})}function De({conversation:e,conversationTitle:t,onOpenChange:r,testId:a}){const n=L(),{isUnauthenticated:i}=se(),{eligible:l,markAsViewed:d}=ue(ce.ArchiveConversationOnboarding),o=Ie(e.id),[h,g]=u.useState(!1),c=P(),f=ae(),v=ne();return u.useEffect(()=>q($,{deleteChat:({serverThreadId:m})=>{m===e.id&&g(!0)},archiveChat:async({serverThreadId:m})=>{m===e.id&&(await N.patchConversation(e.id,{is_archived:!0}),j(c),R.logEvent("chatgpt_conversation_archived"),E.logEvent(S.conversationArchived),l&&(v.info(n.formatMessage({defaultMessage:"You can view archived chats in Settings",id:"HistoryGizmoItem.archiveChatOnboarding"}),{duration:10,hasCloseButton:!0}),d()),o&&G(f))}}),[f,v,c,l,e.id,n,o,d]),i?null:s.jsxs(s.Fragment,{children:[s.jsx(fe,{label:n.formatMessage({id:"tJPHEQ",defaultMessage:"Options"}),sideOffset:4,side:"top",children:s.jsx(ke,{clientThreadId:e.id,onOpenChange:r,children:s.jsx("button",{className:"flex items-center justify-center text-token-text-secondary transition hover:text-token-text-primary radix-state-open:text-token-text-secondary","data-testid":a,children:s.jsx(we,{className:"icon-md"})})})}),h&&s.jsx(me,{title:t,handleDelete:()=>{N.patchConversation(e.id,{is_visible:!1}).then(()=>{j(c),R.logEvent("chatgpt_conversation_deleted"),E.logEvent(S.conversationDeleted)}),o&&G(f)},onClose:()=>{g(!1)}})]})}function Oe({conversation:e,onClose:t}){const[r,a]=u.useState(e.title),n=P();function i(){r!==e.title&&(V.setTitle(e.id,r,Y.User),E.logEvent(S.renameThread,{threadId:e.id,content:r}),N.patchConversation(e.id,{title:r}).then(()=>{j(n)}))}return s.jsx("input",{type:"text",value:r,onChange:l=>{a(l.target.value)},onKeyDown:l=>{switch(l.key){case"Escape":t();break;case"Enter":i(),t();break}},onBlur:()=>{i(),t()},autoFocus:!0,className:"w-full border border-token-border-light bg-transparent p-0 text-sm"})}const z=5,Re=3e3;function Le({threadId:e}){const t=P(),r=u.useRef(!1),a=u.useRef(null);return u.useEffect(()=>{async function n(){r.current=!0;const i=await Ee(e);if(i.async_status===x.FINISHED){j(t),V.initThreadFromServerData(e,i,!0,void 0,!0);return}if(i.async_status!==x.PENDING)return;const l=i.update_time??0;B(new Date,new Date(l*1e3))<z?a.current=window.setTimeout(n,Re):N.clearConversationStatus(e)}return r.current||n(),()=>{a.current&&window.clearTimeout(a.current)}},[t,e]),null}function Pe({conversation:e,isActive:t,elementRef:r,isPrimaryBackgroundColor:a,testId:n}){const i=L(),[l,d]=u.useState(!1),[o,h]=u.useState(!1),{value:g}=A("3922476776"),{value:c}=A("232791851"),f=xe(e.id),v=Ne(e.id),m=oe(v),y=B(new Date,new Date(e.update_time??0))<z,I=e.update_time&&le(new Date(e.update_time),Me),k=f===x.PENDING&&y,M=c&&!t&&!m&&I&&f===x.FINISHED,_=c&&!t&&(m||k),D=c&&f===x.PENDING&&!m&&y,T=u.useRef(!1);u.useEffect(()=>{!T.current&&!m&&f===x.FINISHED&&t&&g&&(async()=>(T.current=!0,await N.clearConversationStatus(e.id),Te(e.id,null),T.current=!1))()},[g,t,e.id,f,m]),u.useEffect(()=>q($,{editTitle:({serverThreadId:p})=>{(p?p===e.id:t)&&d(!0)}}),[e.id,t]);const F=i.formatMessage({id:"mpXAeu",defaultMessage:"New chat"}),{resolvedTitle:O,isTypingEffect:K}=je(e.id,e.title,t),X=ee(),Q=K&&t&&X,{data:W}=be(e.conversation_template_id??void 0);return s.jsxs("div",{className:b("no-draggable group relative rounded-lg active:opacity-90",t?"bg-token-sidebar-surface-secondary":"hover:bg-token-sidebar-surface-secondary",o&&!t&&"bg-token-sidebar-surface-secondary"),children:[D&&s.jsx(Le,{threadId:e.id}),s.jsx(te,{to:ve(e.id,W),onClick:p=>{p.metaKey||p.ctrlKey||t||_e(e.id)},onDoubleClick:()=>{d(!0)},ref:r,className:"flex items-center gap-2 p-2",children:s.jsxs("div",{className:b("relative grow overflow-hidden whitespace-nowrap",_&&"loading-shimmer"),dir:"auto",children:[Q?s.jsx(de,{text:O||F}):O||F,s.jsx("div",{className:b("absolute bottom-0 top-0 to-transparent ltr:right-0 ltr:bg-gradient-to-l rtl:left-0 rtl:bg-gradient-to-r",a?t||!t&&o?"from-token-sidebar-surface-secondary":"from-token-main-surface-primary":!1,a?!1:t||!t&&o?"from-token-sidebar-surface-secondary":"from-token-sidebar-surface-primary",{"from-token-main-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":a&&!t&&!o,"from-token-sidebar-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":!a&&!t&&!o,"w-10 from-60%":t||o,"w-8 from-0% can-hover:group-hover:w-10 can-hover:group-hover:from-60%":!t&&!o})})]})}),l?s.jsx("div",{className:"absolute bottom-0 left-[7px] right-2 top-0 flex items-center bg-token-sidebar-surface-secondary",children:s.jsx(Oe,{conversation:e,onClose:()=>{d(!1)}})}):M?s.jsx("div",{className:"absolute bottom-0 top-0 flex items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",children:s.jsx("div",{className:"h-2 w-2 rounded-full bg-blue-selection"})}):s.jsx("div",{className:b("absolute bottom-0 top-0 items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",t||o?"flex":"hidden can-hover:group-hover:flex"),children:s.jsx(De,{conversation:e,conversationTitle:O??e.title,onOpenChange:p=>{h(p),p&&E.logEvent(S.conversationHistoryItemOpenMenu,{conversationId:e.id})},testId:`${n}-options`})})]})}const Fe={initial:({isNew:e})=>e?{opacity:0,height:0,overflow:"hidden"}:{},animate:()=>({opacity:1,height:"auto"}),exit:()=>({opacity:0,height:0})};function Ae({elementRef:e,item:t,isActive:r,isFirstItem:a,isExistingItem:n,isPrimaryBackgroundColor:i,testId:l}){const d=U();return s.jsx(Ce.li,{className:b("relative",a&&!d?"z-[15]":""),layout:"position",custom:{isNew:!n},variants:Fe,initial:"initial",animate:"animate",exit:"exit","data-testid":l,children:s.jsx(Pe,{isPrimaryBackgroundColor:i,conversation:t,isActive:r,elementRef:e,testId:l})})}const C=re({historyBucketToday:{id:"history.bucket.today",defaultMessage:"Today"},historyBucketYesterday:{id:"history.bucket.yesterday",defaultMessage:"Yesterday"},historyBucketLastSeven:{id:"history.bucket.lastSeven",defaultMessage:"Previous 7 Days"},historyBucketLastThirty:{id:"history.bucket.lastThirty",defaultMessage:"Previous 30 Days"}}),Ge=5;function Xe(e,t){const r=L();return u.useMemo(()=>e.reduce((a,n)=>{const i=new Date(n.update_time??n.create_time??0),l=he(new Date,i);if(l===0)a.recent.today.items.push(n);else if(l<=1)a.recent.yesterday.items.push(n);else if(l<=7)a.recent.lastSeven.items.push(n);else if(l<=30)a.recent.lastThirty.items.push(n);else if(ye(i)){const d=H(i),o=ge(i),h=`${d}-${o}`;a.dynamicMonths[h]?a.dynamicMonths[h].items.push(n):a.dynamicMonths[h]={label:r.formatDate(i,{month:"long"}),items:[n]}}else{const o=`${H(i)}-`;a.dynamicYears[o]?a.dynamicYears[o].items.push(n):a.dynamicYears[o]={label:r.formatDate(i,{year:"numeric"}),items:[n]}}return a},{recent:{today:{label:s.jsx(w,{...C.historyBucketToday}),items:[]},yesterday:{label:s.jsx(w,{...C.historyBucketYesterday}),items:[]},lastSeven:{label:s.jsx(w,{...C.historyBucketLastSeven}),items:[]},lastThirty:{label:s.jsx(w,{...C.historyBucketLastThirty}),items:[]}},dynamicMonths:{},dynamicYears:{}}),[t,e])}function Qe({activeId:e,bucketedItems:t,items:r,hasNextPage:a,isPrimaryBackgroundColor:n,previousItems:i,infiniteScrollTriggerElementRef:l}){const d=U();return s.jsx(s.Fragment,{children:[t.recent,t.dynamicMonths,t.dynamicYears].flatMap((o,h)=>s.jsx(u.Fragment,{children:Object.entries(o).map(([g,{items:c,label:f}],v)=>{if(g!=="today"&&!c.length)return null;const m=!!c.find(y=>r.length>0&&y.id===r[0]?.id);return c.length>0&&s.jsxs("div",{className:b(n&&"first:mt-0","relative mt-5 first:mt-0 last:mb-5"),children:[s.jsx("div",{className:b("sticky z-20 bg-token-sidebar-surface-primary",d?"top-[--sidebar-sticky-threshold] mb-2":"top-0"),children:s.jsx("span",{className:"flex h-9 items-center",children:s.jsx(pe,{children:f})})}),s.jsx("ol",{children:c.map((y,I)=>{const k=e===y.id,M=m&&I===0,_=i?.find(({id:T})=>T===y.id),D=a&&r[r.length-Ge-1]?.id===y.id?l:void 0;return s.jsx(Ae,{item:y,isActive:k,isFirstItem:M,isExistingItem:!!_,isPrimaryBackgroundColor:n,elementRef:D,testId:`history-item-${I}`},`history-item-${y.id}-${g}`)})})]},`${g}-${h}-${v}`)})},`category-${h}`))})}export{Qe as H,Ae as a,_e as o,Xe as u};
//# sourceMappingURL=ixhsfhf7su8uyl0y.js.map