const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/nsxxfbvxwm5hr9qj.js","assets/lals6l6wvhqmd5cv.js","assets/h0xzxtn9v9a6p79x.js","assets/root-j0s7q5se.css","assets/ocy5lriy4r76uu3t.js","assets/conversation-small-eplmind9.css","assets/nr8jhn7b7ayjgzuz.js","assets/froezb8g6j840ema.js","assets/hhzd6wnlg2qeys27.js","assets/toka7i1wryd63m7e.js","assets/gvb71nam7e3eye1o.js","assets/mylcj6ilw2effv3o.js","assets/c5fwe2zczvz2lft2.js","assets/c6ik0ke8gyq60hcq.js","assets/jkgps0ms1g393uu6.js","assets/jhc4dt82s2pi9eoc.js","assets/itc152majko2hv8y.js","assets/kju774zy9jcos40f.js","assets/fk4t9hf92a3slf5o.js","assets/bnub92rh8g0nt735.js","assets/ihwhzjl9pclmai28.js"])))=>i.map(i=>d[i]);
import{r as u,aD as W,aE as Z,ao as R,P as E,a as S,V as L,bU as A,f0 as x,f1 as Y,bA as ee,l as s,m as b,cj as te,Q as se,u as P,bp as ae,aK as ne,j as N,Z as w,a0 as re}from"./lals6l6wvhqmd5cv.js";import{dP as ie,dQ as oe,dR as q,dS as le,dT as de,D as ue,E as ce,bD as G,T as fe,dU as me,dM as B,dV as he,dW as ye,dX as H,dY as ge,dN as pe}from"./ocy5lriy4r76uu3t.js";import{b as be,g as ve}from"./nr8jhn7b7ayjgzuz.js";import{b as xe,r as j,s as Te}from"./mylcj6ilw2effv3o.js";import{f as Ee}from"./gvb71nam7e3eye1o.js";import{t as Se,v as U,w as Ne,s as Ie,T as V}from"./froezb8g6j840ema.js";import{G as $}from"./toka7i1wryd63m7e.js";import{a5 as we}from"./h0xzxtn9v9a6p79x.js";import{m as Ce}from"./hhzd6wnlg2qeys27.js";function je(e,t,r){const{title:a,titleSource:n}=Se(e),[i,l]=u.useState(!1),d=a??t,o=u.useRef(d);return u.useEffect(()=>(r&&n===U.Generated&&d!==o.current&&l(!0),()=>{o.current=d}),[r,d,n]),{isTypingEffect:i,resolvedTitle:d}}const ke=W(()=>Z(()=>import("./nsxxfbvxwm5hr9qj.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(e=>e.GizmoConversationOptionsDropdown)),De=new Date(2024,8,24,13);function Me(e){R.checkGate("3922476776")||ie.abortAllRequests(),E.logEvent(S.loadThread,{threadId:e})}function _e({conversation:e,conversationTitle:t,onOpenChange:r,testId:a}){const n=L(),{isUnauthenticated:i}=se(),{eligible:l,markAsViewed:d}=ue(ce.ArchiveConversationOnboarding),o=Ie(e.id),[h,g]=u.useState(!1),c=P(),f=ae(),v=ne();return u.useEffect(()=>Y($,{deleteChat:({serverThreadId:m})=>{m===e.id&&g(!0)},archiveChat:async({serverThreadId:m})=>{m===e.id&&(await N.patchConversation(e.id,{is_archived:!0}),j(c),R.logEvent("chatgpt_conversation_archived"),E.logEvent(S.conversationArchived),l&&(v.info(n.formatMessage({defaultMessage:"You can view archived chats in Settings",id:"HistoryGizmoItem.archiveChatOnboarding"}),{duration:10,hasCloseButton:!0}),d()),o&&G(f))}}),[f,v,c,l,e.id,n,o,d]),i?null:s.jsxs(s.Fragment,{children:[s.jsx(fe,{label:n.formatMessage({id:"tJPHEQ",defaultMessage:"Options"}),sideOffset:4,side:"top",children:s.jsx(ke,{clientThreadId:e.id,onOpenChange:r,children:s.jsx("button",{className:"flex items-center justify-center text-token-text-secondary transition hover:text-token-text-primary radix-state-open:text-token-text-secondary","data-testid":a,children:s.jsx(we,{className:"icon-md"})})})}),h&&s.jsx(me,{title:t,handleDelete:()=>{N.patchConversation(e.id,{is_visible:!1}).then(()=>{j(c),R.logEvent("chatgpt_conversation_deleted"),E.logEvent(S.conversationDeleted)}),o&&G(f)},onClose:()=>{g(!1)}})]})}function Oe({conversation:e,onClose:t}){const[r,a]=u.useState(e.title),n=P();function i(){r!==e.title&&(V.setTitle(e.id,r,U.User),E.logEvent(S.renameThread,{threadId:e.id,content:r}),N.patchConversation(e.id,{title:r}).then(()=>{j(n)}))}return s.jsx("input",{type:"text",value:r,onChange:l=>{a(l.target.value)},onKeyDown:l=>{switch(l.key){case"Escape":t();break;case"Enter":i(),t();break}},onBlur:()=>{i(),t()},autoFocus:!0,className:"w-full border border-token-border-light bg-transparent p-0 text-sm"})}const z=5,Re=3e3;function Le({threadId:e}){const t=P(),r=u.useRef(!1),a=u.useRef(null);return u.useEffect(()=>{async function n(){r.current=!0;const i=await Ee(e);if(i.async_status===x.FINISHED){j(t),V.initThreadFromServerData(e,i,!0,void 0,!0);return}if(i.async_status!==x.PENDING)return;const l=i.update_time??0;q(new Date,new Date(l*1e3))<z?a.current=window.setTimeout(n,Re):N.clearConversationStatus(e)}return r.current||n(),()=>{a.current&&window.clearTimeout(a.current)}},[t,e]),null}function Pe({conversation:e,isActive:t,elementRef:r,isPrimaryBackgroundColor:a,testId:n}){const i=L(),[l,d]=u.useState(!1),[o,h]=u.useState(!1),{value:g}=A("3922476776"),{value:c}=A("232791851"),f=xe(e.id),v=Ne(e.id),m=oe(v),y=q(new Date,new Date(e.update_time??0))<z,I=e.update_time&&le(new Date(e.update_time),De),k=f===x.PENDING&&y,D=c&&!t&&!m&&I&&f===x.FINISHED,M=c&&!t&&(m||k),_=c&&f===x.PENDING&&!m&&y,T=u.useRef(!1);u.useEffect(()=>{!T.current&&!m&&f===x.FINISHED&&t&&g&&(async()=>(T.current=!0,await N.clearConversationStatus(e.id),Te(e.id,null),T.current=!1))()},[g,t,e.id,f,m]),u.useEffect(()=>Y($,{editTitle:({serverThreadId:p})=>{(p?p===e.id:t)&&d(!0)}}),[e.id,t]);const F=i.formatMessage({id:"mpXAeu",defaultMessage:"New chat"}),{resolvedTitle:O,isTypingEffect:K}=je(e.id,e.title,t),Q=ee(),X=K&&t&&Q,{data:J}=be(e.conversation_template_id??void 0);return s.jsxs("div",{className:b("no-draggable group relative rounded-lg active:opacity-90",t?"bg-token-sidebar-surface-secondary":"hover:bg-token-sidebar-surface-secondary",o&&!t&&"bg-token-sidebar-surface-secondary"),children:[_&&s.jsx(Le,{threadId:e.id}),s.jsx(te,{to:ve(e.id,J),onClick:p=>{p.metaKey||p.ctrlKey||t||Me(e.id)},onDoubleClick:()=>{d(!0)},ref:r,className:"flex items-center gap-2 p-2",children:s.jsxs("div",{className:b("relative grow overflow-hidden whitespace-nowrap",M&&"loading-shimmer"),dir:"auto",children:[X?s.jsx(de,{text:O||F}):O||F,s.jsx("div",{className:b("absolute bottom-0 top-0 to-transparent ltr:right-0 ltr:bg-gradient-to-l rtl:left-0 rtl:bg-gradient-to-r",a?t||!t&&o?"from-token-sidebar-surface-secondary":"from-token-main-surface-primary":!1,a?!1:t||!t&&o?"from-token-sidebar-surface-secondary":"from-token-sidebar-surface-primary",{"from-token-main-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":a&&!t&&!o,"from-token-sidebar-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":!a&&!t&&!o,"w-10 from-60%":t||o,"w-8 from-0% can-hover:group-hover:w-10 can-hover:group-hover:from-60%":!t&&!o})})]})}),l?s.jsx("div",{className:"absolute bottom-0 left-[7px] right-2 top-0 flex items-center bg-token-sidebar-surface-secondary",children:s.jsx(Oe,{conversation:e,onClose:()=>{d(!1)}})}):D?s.jsx("div",{className:"absolute bottom-0 top-0 flex items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",children:s.jsx("div",{className:"h-2 w-2 rounded-full bg-blue-selection"})}):s.jsx("div",{className:b("absolute bottom-0 top-0 items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",t||o?"flex":"hidden can-hover:group-hover:flex"),children:s.jsx(_e,{conversation:e,conversationTitle:O??e.title,onOpenChange:p=>{h(p),p&&E.logEvent(S.conversationHistoryItemOpenMenu,{conversationId:e.id})},testId:`${n}-options`})})]})}const Fe={initial:({isNew:e})=>e?{opacity:0,height:0,overflow:"hidden"}:{},animate:()=>({opacity:1,height:"auto"}),exit:()=>({opacity:0,height:0})};function Ae({elementRef:e,item:t,isActive:r,isFirstItem:a,isExistingItem:n,isPrimaryBackgroundColor:i,testId:l}){const d=B();return s.jsx(Ce.li,{className:b("relative",a&&!d?"z-[15]":""),layout:"position",custom:{isNew:!n},variants:Fe,initial:"initial",animate:"animate",exit:"exit","data-testid":l,children:s.jsx(Pe,{isPrimaryBackgroundColor:i,conversation:t,isActive:r,elementRef:e,testId:l})})}const C=re({historyBucketToday:{id:"history.bucket.today",defaultMessage:"Today"},historyBucketYesterday:{id:"history.bucket.yesterday",defaultMessage:"Yesterday"},historyBucketLastSeven:{id:"history.bucket.lastSeven",defaultMessage:"Previous 7 Days"},historyBucketLastThirty:{id:"history.bucket.lastThirty",defaultMessage:"Previous 30 Days"}}),Ge=5;function Qe(e,t){const r=L();return u.useMemo(()=>e.reduce((a,n)=>{const i=new Date(n.update_time??n.create_time??0),l=he(new Date,i);if(l===0)a.recent.today.items.push(n);else if(l<=1)a.recent.yesterday.items.push(n);else if(l<=7)a.recent.lastSeven.items.push(n);else if(l<=30)a.recent.lastThirty.items.push(n);else if(ye(i)){const d=H(i),o=ge(i),h=`${d}-${o}`;a.dynamicMonths[h]?a.dynamicMonths[h].items.push(n):a.dynamicMonths[h]={label:r.formatDate(i,{month:"long"}),items:[n]}}else{const o=`${H(i)}-`;a.dynamicYears[o]?a.dynamicYears[o].items.push(n):a.dynamicYears[o]={label:r.formatDate(i,{year:"numeric"}),items:[n]}}return a},{recent:{today:{label:s.jsx(w,{...C.historyBucketToday}),items:[]},yesterday:{label:s.jsx(w,{...C.historyBucketYesterday}),items:[]},lastSeven:{label:s.jsx(w,{...C.historyBucketLastSeven}),items:[]},lastThirty:{label:s.jsx(w,{...C.historyBucketLastThirty}),items:[]}},dynamicMonths:{},dynamicYears:{}}),[t,e])}function Xe({activeId:e,bucketedItems:t,items:r,hasNextPage:a,isPrimaryBackgroundColor:n,previousItems:i,infiniteScrollTriggerElementRef:l}){const d=B();return s.jsx(s.Fragment,{children:[t.recent,t.dynamicMonths,t.dynamicYears].flatMap((o,h)=>s.jsx(u.Fragment,{children:Object.entries(o).map(([g,{items:c,label:f}],v)=>{if(g!=="today"&&!c.length)return null;const m=!!c.find(y=>r.length>0&&y.id===r[0]?.id);return c.length>0&&s.jsxs("div",{className:b(n&&"first:mt-0","relative mt-5 first:mt-0 last:mb-5"),children:[s.jsx("div",{className:b("sticky z-20 bg-token-sidebar-surface-primary",d?"top-[--sidebar-sticky-threshold] mb-2":"top-0"),children:s.jsx("span",{className:"flex h-9 items-center",children:s.jsx(pe,{children:f})})}),s.jsx("ol",{children:c.map((y,I)=>{const k=e===y.id,D=m&&I===0,M=i?.find(({id:T})=>T===y.id),_=a&&r[r.length-Ge-1]?.id===y.id?l:void 0;return s.jsx(Ae,{item:y,isActive:k,isFirstItem:D,isExistingItem:!!M,isPrimaryBackgroundColor:n,elementRef:_,testId:`history-item-${I}`},`history-item-${y.id}-${g}`)})})]},`${g}-${h}-${v}`)})},`category-${h}`))})}export{Xe as H,Ae as a,Me as o,Qe as u};
//# sourceMappingURL=hw1dq5141n88b047.js.map
