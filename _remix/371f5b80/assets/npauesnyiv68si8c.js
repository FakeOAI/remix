const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/cpkt21z4j6bsacjq.js","assets/ib63zzsfkf72wln1.js","assets/mt8z8crlc877hbg5.js","assets/root-kagbl44x.css","assets/fhv3hyfwgezymfbi.js","assets/conversation-small-n1h7xu26.css","assets/bskmkizi274hjpny.js","assets/ilsfcvf8qm64jji1.js","assets/lcjfunksmdzjk74y.js","assets/ftgy6pqa3928y8mj.js","assets/nbp7wfexn6ecviwe.js","assets/nowowewg8zs7o552.js","assets/cdk6gac6x57lnicr.js","assets/mfrxesk6i890psa6.js","assets/cfdxv94rj3zrkv7r.js","assets/i8mir1casj6j5kbn.js","assets/n1w4d5fvnu99nb0h.js","assets/looim3qo75lmvmqt.js","assets/hus3cp07raaf31z3.js","assets/ho9rmuuqmnum1qyf.js","assets/key21ilohb4afp2x.js"])))=>i.map(i=>d[i]);
import{r as u,aC as ie,aD as oe,V as F,bS as V,f2 as T,ei as w,f3 as K,bz as le,l as s,m as v,ch as de,P as N,a as I,ao as U,Q as ue,u as G,bA as ce,aJ as fe,j as E,Z as k,a0 as me}from"./ib63zzsfkf72wln1.js";import{eo as he,ep as Q,eq as ye,aP as P,em as x,er as ge,es as pe,H as be,J as Te,bF as B,c as ve,et as Se,q as xe,eu as Ee,ev as Ce,ew as z,ex as Ne,F as Ie,ed as we,eb as ke,a3 as Y,ec as Me,en as Re}from"./fhv3hyfwgezymfbi.js";import{u as je}from"./1qaqgsecjm76qx23.js";import{b as _e,g as De}from"./bskmkizi274hjpny.js";import{b as Ae,r as R,s as $}from"./nowowewg8zs7o552.js";import{f as Oe}from"./nbp7wfexn6ecviwe.js";import{t as He,v as X,w as Le,s as Ue,T as J}from"./ilsfcvf8qm64jji1.js";import{G as Z}from"./ftgy6pqa3928y8mj.js";import{a7 as Fe}from"./mt8z8crlc877hbg5.js";function Ge(e,o,t){const{title:n,titleSource:a}=He(e),[i,l]=u.useState(!1),d=n??o,r=u.useRef(d);return u.useEffect(()=>(t&&a===X.Generated&&d!==r.current&&l(!0),()=>{r.current=d}),[t,d,a]),{isTypingEffect:i,resolvedTitle:d}}const Pe=ie(()=>oe(()=>import("./cpkt21z4j6bsacjq.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(e=>e.GizmoConversationOptionsDropdown)),qe=new Date(2024,8,24,13);function Ve(e){U.checkGate("3922476776")||pe.abortAllRequests(),N.logEvent(I.loadThread,{threadId:e})}function Be({conversation:e,conversationTitle:o,onOpenChange:t,testId:n}){const a=F(),{isUnauthenticated:i}=ue(),{eligible:l,markAsViewed:d}=be(Te.ArchiveConversationOnboarding),r=Ue(e.id),[c,b]=u.useState(!1),y=G(),m=ce(),g=fe();return u.useEffect(()=>K(Z,{deleteChat:({serverThreadId:f})=>{f===e.id&&b(!0)},archiveChat:async({serverThreadId:f})=>{f===e.id&&(await E.patchConversation(e.id,{is_archived:!0}),R(y),U.logEvent("chatgpt_conversation_archived"),N.logEvent(I.conversationArchived),l&&(g.info(a.formatMessage({defaultMessage:"You can view archived chats in Settings",id:"HistoryGizmoItem.archiveChatOnboarding"}),{duration:10,hasCloseButton:!0}),d()),r&&B(m))}}),[m,g,y,l,e.id,a,r,d]),i?null:s.jsxs(s.Fragment,{children:[s.jsx(ve,{label:a.formatMessage({id:"tJPHEQ",defaultMessage:"Options"}),sideOffset:4,side:"top",children:s.jsx(Pe,{clientThreadId:e.id,onOpenChange:t,children:s.jsx("button",{className:"flex items-center justify-center text-token-text-secondary transition hover:text-token-text-primary radix-state-open:text-token-text-secondary","data-testid":n,children:s.jsx(Fe,{className:"icon-md"})})})}),c&&s.jsx(Se,{title:o,handleDelete:()=>{E.patchConversation(e.id,{is_visible:!1}).then(()=>{R(y),U.logEvent("chatgpt_conversation_deleted"),N.logEvent(I.conversationDeleted),xe.publish({kind:"deleteConversation",serverThreadId:e.id})}),r&&B(m)},onClose:()=>{b(!1)}})]})}function ze({conversation:e,onClose:o}){const[t,n]=u.useState(e.title),a=G();function i(){t!==e.title&&(J.setTitle(e.id,t,X.User),N.logEvent(I.renameThread,{threadId:e.id,content:t}),E.patchConversation(e.id,{title:t}).then(()=>{R(a)}))}return s.jsx("input",{type:"text",value:t,onChange:l=>{n(l.target.value)},onKeyDown:l=>{switch(l.key){case"Escape":o();break;case"Enter":i(),o();break}},onBlur:()=>{i(),o()},autoFocus:!0,className:"w-full border border-token-border-light bg-transparent p-0 text-sm"})}const W=5,Ye=3e3;function $e({threadId:e}){const o=G(),t=u.useRef(!1),n=u.useRef(null);return u.useEffect(()=>{async function a(){t.current=!0;const i=await Oe(e);if(i.async_status===T.UNREAD){R(o),J.initThreadFromServerData(e,i,!0,void 0,!0);return}if(i.async_status!==T.STREAMING)return;const l=i.update_time??0;Q(new Date,new Date(l*1e3))<W?n.current=window.setTimeout(a,Ye):E.setConversationStatus(e)}return t.current||a(),()=>{n.current&&window.clearTimeout(n.current)}},[o,e]),null}function Ke({conversation:e,className:o,isActive:t,elementRef:n,isPrimaryBackgroundColor:a,testId:i}){const l=F(),[d,r]=u.useState(!1),[c,b]=u.useState(!1),{value:y}=V("3922476776"),{value:m}=V("232791851"),g=Ae(e.id),{value:f=null,source:S=null}=g??{},j=Le(e.id),h=he(j),C=Q(new Date,new Date(e.update_time??0))<W,_=e.update_time&&ye(new Date(e.update_time),qe),D=f===T.STREAMING&&C,A=m&&!t&&!h&&_&&f===T.UNREAD,ee=m&&!t&&(h||D),te=m&&f===T.STREAMING&&S===w.SERVER&&!h&&C,O=u.useRef(!1);u.useEffect(()=>{O.current||y&&(async()=>(O.current=!0,t&&S===w.SERVER&&f===T.UNREAD&&(await E.setConversationStatus(e.id),$(e.id,null)),!t&&S===w.CLIENT&&f===T.UNREAD&&(await E.setConversationStatus(e.id,f),$(e.id,{value:T.UNREAD,source:w.SERVER})),O.current=!1))()},[y,t,e.id,f,S,h]),u.useEffect(()=>K(Z,{editTitle:({serverThreadId:p})=>{(p?p===e.id:t)&&r(!0)}}),[e.id,t]);const q=l.formatMessage({id:"mpXAeu",defaultMessage:"New chat"}),{resolvedTitle:H,isTypingEffect:se}=Ge(e.id,e.title,t),ae=le(),re=se&&t&&ae,{data:ne}=_e(e.conversation_template_id??void 0),L=P();return s.jsxs("div",{className:v("no-draggable group relative rounded-lg active:opacity-90",o,t?"bg-token-sidebar-surface-secondary":"hover:bg-token-sidebar-surface-secondary",c&&!t&&"bg-token-sidebar-surface-secondary",L&&[x.historyItem,x.historyItemTimeline]),children:[te&&s.jsx($e,{threadId:e.id}),s.jsx(de,{to:De(e.id,ne),onClick:p=>{p.metaKey||p.ctrlKey||t||Ve(e.id)},onDoubleClick:()=>{r(!0)},ref:n,className:"flex items-center gap-2 p-2",style:{maskImage:L?"var(--sidebar-mask)":void 0},children:s.jsxs("div",{className:v("relative grow overflow-hidden whitespace-nowrap",ee&&"loading-shimmer"),dir:"auto",children:[re?s.jsx(ge,{text:H||q}):H||q,!L&&s.jsx("div",{className:v("absolute bottom-0 top-0 to-transparent ltr:right-0 ltr:bg-gradient-to-l rtl:left-0 rtl:bg-gradient-to-r",a?t||!t&&c?"from-token-sidebar-surface-secondary":"from-token-main-surface-primary":!1,a?!1:t||!t&&c?"from-token-sidebar-surface-secondary":"from-token-sidebar-surface-primary",{"from-token-main-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":a&&!t&&!c,"from-token-sidebar-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":!a&&!t&&!c,"w-10 from-60%":t||c,"w-8 from-0% can-hover:group-hover:w-10 can-hover:group-hover:from-60%":!t&&!c})})]})}),d?s.jsx("div",{className:"absolute bottom-0 left-[7px] right-2 top-0 flex items-center bg-token-sidebar-surface-secondary",children:s.jsx(ze,{conversation:e,onClose:()=>{r(!1)}})}):A?s.jsx("div",{className:"absolute bottom-0 top-0 flex items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",children:s.jsx("div",{className:"h-2 w-2 rounded-full bg-blue-selection"})}):s.jsx("div",{className:v("absolute bottom-0 top-0 items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",t||c?"flex":"hidden can-hover:group-hover:flex"),children:s.jsx(Be,{conversation:e,conversationTitle:H??e.title,onOpenChange:p=>{b(p),p&&N.logEvent(I.conversationHistoryItemOpenMenu,{conversationId:e.id})},testId:`${i}-options`})})]})}function Qe({className:e,elementRef:o,item:t,isActive:n,isFirstItem:a,isInRecents:i,isPrimaryBackgroundColor:l,testId:d}){const r=P();return s.jsx("li",{className:v(!r&&"relative",r&&!i&&"last:mb-4",a&&!r?"z-[15]":""),"data-testid":d,children:s.jsx(Ke,{className:e,isPrimaryBackgroundColor:l,conversation:t,isActive:n,elementRef:o,testId:d})})}const M=me({historyBucketToday:{id:"history.bucket.today",defaultMessage:"Today"},historyBucketYesterday:{id:"history.bucket.yesterday",defaultMessage:"Yesterday"},historyBucketLastSeven:{id:"history.bucket.lastSeven",defaultMessage:"Previous 7 Days"},historyBucketLastThirty:{id:"history.bucket.lastThirty",defaultMessage:"Previous 30 Days"}}),Xe=5;function it(e,o){const t=F();return u.useMemo(()=>e.reduce((n,a)=>{const i=new Date(a.update_time??a.create_time??0),l=Ee(new Date,i);if(l===0)n.recent.today.items.push(a);else if(l<=1)n.recent.yesterday.items.push(a);else if(l<=7)n.recent.lastSeven.items.push(a);else if(l<=30)n.recent.lastThirty.items.push(a);else if(Ce(i)){const d=z(i),r=Ne(i),c=`${d}-${r}`;n.dynamicMonths[c]?n.dynamicMonths[c].items.push(a):n.dynamicMonths[c]={label:t.formatDate(i,{month:"long"}),items:[a]}}else{const r=`${z(i)}-`;n.dynamicYears[r]?n.dynamicYears[r].items.push(a):n.dynamicYears[r]={label:t.formatDate(i,{year:"numeric"}),items:[a]}}return n},{recent:{today:{label:s.jsx(k,{...M.historyBucketToday}),items:[]},yesterday:{label:s.jsx(k,{...M.historyBucketYesterday}),items:[]},lastSeven:{label:s.jsx(k,{...M.historyBucketLastSeven}),items:[]},lastThirty:{label:s.jsx(k,{...M.historyBucketLastThirty}),items:[]}},dynamicMonths:{},dynamicYears:{}}),[o,e])}function ot({activeId:e,bucketedItems:o,items:t,hasNextPage:n,isPrimaryBackgroundColor:a,infiniteScrollTriggerElementRef:i}){const{isCollapsible:l}=je(),d=Ie(we.isHistoryCollapsed),r=P(),[c]=ke({onChange:b=>{u.startTransition(()=>{Y.setHistoryShowMoreVisible(b)})}});return s.jsxs(s.Fragment,{children:[[o.recent,o.dynamicMonths,o.dynamicYears].flatMap((b,y)=>s.jsx(u.Fragment,{children:Object.entries(b).map(([m,{items:g,label:f}],S)=>{if(m!=="today"&&!g.length)return null;const j=!!g.find(h=>t.length>0&&h.id===t[0]?.id);return g.length>0&&s.jsxs("div",{className:v(a&&"first:mt-0",r&&"first:mt-1",!r&&"relative mt-5 first:mt-0 last:mb-5"),children:[s.jsx("div",{className:v("sticky",!r&&"bg-token-sidebar-surface-primary",r&&[x.historyHeading,x.historyHeadingTimeline],r?"z-5 top-[--sidebar-sticky-threshold]":"top-0 z-20"),children:s.jsx("span",{className:"flex h-9 items-center",children:s.jsx(Me,{$screenArch:r,children:f})})}),s.jsx("ol",{className:r?"flex flex-col gap-0.5":void 0,children:g.map((h,C)=>{const _=e===h.id,D=j&&C===0,A=n&&t[t.length-Xe-1]?.id===h.id?i:void 0;return s.jsx(Qe,{className:v(r&&[x.historyItem,x.historyItemTimeline]),item:h,isActive:_,isFirstItem:D,isPrimaryBackgroundColor:a,elementRef:A,testId:`history-item-${C}`},`history-item-${h.id}-${m}`)})})]},`${m}-${y}-${S}`)})},`category-${y}`)),l&&!d&&s.jsx("div",{ref:c,children:s.jsx(Re,{type:"less",onClick:Y.toggleHistoryCollapsed})})]})}export{ot as H,Qe as a,it as u};
//# sourceMappingURL=npauesnyiv68si8c.js.map