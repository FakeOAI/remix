const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/l5xnyxi6c9lzlqj0.js","assets/bzvcy3tl84gc3bl9.js","assets/o4htpc5iqra16abg.js","assets/root-iyb3qk9s.css","assets/moittmkqym6x2q8u.js","assets/conversation-small-cll5buey.css","assets/f064jjm5wr3qzqg4.js","assets/c3nvn3bmsyj77vtl.js","assets/d6ri6s3v2tbmwdon.js","assets/ebzdroxnuj9v1lzs.js","assets/doew5jjpf8k0sin5.js","assets/o5egk1m8ftkmbhvq.js","assets/ia40vr3rpj4bcpvd.js","assets/b2nwax1gutiivxyr.js","assets/c6bnusubbcjasd0g.js","assets/d52s2bg30rsaqcut.js","assets/krq1ee1cy3itbhj5.js","assets/cgy1fdb35hi1ihxo.js","assets/m8du01a31yeowgq0.js","assets/bl9x8m63ktarxok0.js","assets/iv68epmlitk2zqua.js","assets/h1610tucipr8mm1y.js"])))=>i.map(i=>d[i]);
import{r as c,Y as re,Z as oe,W as G,bA as P,ei as v,em as w,f7 as z,t as s,K as S,c3 as ie,P as x,d as E,S as U,a7 as le,a as Y,bh as de,a8 as ce,j as C,am as ue,a0 as k,a5 as fe}from"./bzvcy3tl84gc3bl9.js";import{cz as me,eY as K,eZ as he,t as ye,bX as j,e_ as ge,e$ as pe,cI as be,Y as ve,bq as B,f0 as Se,ct as Te,cE as xe,cF as Ee,cG as q,cH as Ce,bY as Ne,el as Ie,em as we}from"./moittmkqym6x2q8u.js";import{a as ke,r as R,s as V,u as Me}from"./b2nwax1gutiivxyr.js";import{u as Re,d as je,U as $}from"./doew5jjpf8k0sin5.js";import{a as _e,g as De}from"./f064jjm5wr3qzqg4.js";import{f as Ae}from"./ia40vr3rpj4bcpvd.js";import{A as Oe,B as X,C as He,t as Le,T as Q}from"./c3nvn3bmsyj77vtl.js";import{G as Z}from"./o5egk1m8ftkmbhvq.js";import{ab as Ue}from"./o4htpc5iqra16abg.js";function Ge(e,o,t){const{title:n,titleSource:a}=Oe(e),[r,l]=c.useState(!1),d=n??o,i=c.useRef(d);return c.useEffect(()=>(t&&a===X.Generated&&d!==i.current&&l(!0),()=>{i.current=d}),[t,d,a]),{isTypingEffect:r,resolvedTitle:d}}const Ye=re(()=>oe(()=>import("./l5xnyxi6c9lzlqj0.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])).then(e=>e.GizmoConversationOptionsDropdown)),Fe=new Date(2024,9,11,0);function Pe(e){U.checkGate("3922476776")||pe.abortAllRequests(),x.logEvent(E.loadThread,{threadId:e})}function Be({conversation:e,conversationTitle:o,onOpenChange:t,testId:n}){const a=G(),{isUnauthenticated:r}=le(),{eligible:l,markAsViewed:d}=be(ve.ArchiveConversationOnboarding),i=Le(e.id),[u,b]=c.useState(!1),y=Y(),m=de(),g=ce();return c.useEffect(()=>z(Z,{deleteChat:({serverThreadId:f})=>{f===e.id&&b(!0)},archiveChat:async({serverThreadId:f})=>{f===e.id&&(await C.patchConversation(e.id,{is_archived:!0}),R(y),U.logEvent("chatgpt_conversation_archived"),x.logEvent(E.conversationArchived),l&&(g.info(a.formatMessage({defaultMessage:"You can view archived chats in Settings",id:"HistoryGizmoItem.archiveChatOnboarding"}),{duration:10,hasCloseButton:!0}),d()),i&&B(m))}}),[m,g,y,l,e.id,a,i,d]),r?null:s.jsxs(s.Fragment,{children:[s.jsx(ue,{label:a.formatMessage({id:"tJPHEQ",defaultMessage:"Options"}),sideOffset:4,side:"top",children:s.jsx(Ye,{clientThreadId:e.id,onOpenChange:t,children:s.jsx("button",{className:"flex items-center justify-center text-token-text-secondary transition hover:text-token-text-primary radix-state-open:text-token-text-secondary","data-testid":n,children:s.jsx(Ue,{className:"icon-md"})})})}),u&&s.jsx(Se,{title:o,handleDelete:()=>{C.patchConversation(e.id,{is_visible:!1}).then(()=>{R(y),U.logEvent("chatgpt_conversation_deleted"),x.logEvent(E.conversationDeleted),Te.publish({kind:"deleteConversation",serverThreadId:e.id})}),i&&B(m)},onClose:()=>{b(!1)}})]})}function qe({conversation:e,onClose:o}){const[t,n]=c.useState(e.title),a=Y();function r(){t!==e.title&&(Q.setTitle(e.id,t,X.User),x.logEvent(E.renameThread,{threadId:e.id,content:t}),C.patchConversation(e.id,{title:t}).then(()=>{R(a)}))}return s.jsx("input",{type:"text",value:t,onChange:l=>{n(l.target.value)},onKeyDown:l=>{switch(l.key){case"Escape":o();break;case"Enter":r(),o();break}},onBlur:()=>{r(),o()},autoFocus:!0,className:"w-full border border-token-border-light bg-transparent p-0 text-sm"})}const J=5,Ve=3e3;function $e({threadId:e}){const o=Y(),t=c.useRef(!1),n=c.useRef(null);return c.useEffect(()=>{async function a(){t.current=!0;const r=await Ae(e);if(r.async_status===v.UNREAD){R(o),Q.initThreadFromServerData(e,r,!0,void 0,!0);return}if(r.async_status!==v.STREAMING)return;const l=r.update_time??0;K(new Date,new Date(l*1e3))<J?n.current=window.setTimeout(a,Ve):C.setConversationStatus(e)}return t.current||(x.logEvent(E.conversationPollingStarted),a()),()=>{n.current&&window.clearTimeout(n.current)}},[o,e]),null}function ze({conversation:e,className:o,isActive:t,elementRef:n,isPrimaryBackgroundColor:a,testId:r}){const l=G(),[d,i]=c.useState(!1),[u,b]=c.useState(!1),{value:y}=P("3922476776"),{value:m}=P("232791851"),g=ke(e.id),{value:f=null,source:T=null}=g??{},_=He(e.id),h=me(_),N=K(new Date,new Date(e.update_time??0))<J,D=e.update_time&&he(new Date(e.update_time),Fe),A=f===v.STREAMING&&N,O=m&&!t&&!h&&D&&f===v.UNREAD,W=m&&!t&&(h||A),ee=m&&f===v.STREAMING&&T===w.SERVER&&!h&&N,H=c.useRef(!1);c.useEffect(()=>{H.current||y&&(async()=>(H.current=!0,t&&f===v.UNREAD&&(T===w.SERVER&&await C.setConversationStatus(e.id),V(e.id,null)),!t&&T===w.CLIENT&&f===v.UNREAD&&(await C.setConversationStatus(e.id,f),V(e.id,{value:v.UNREAD,source:w.SERVER})),H.current=!1))()},[y,t,e.id,f,T,h]),c.useEffect(()=>z(Z,{editTitle:({serverThreadId:p})=>{(p?p===e.id:t)&&i(!0)}}),[e.id,t]);const F=l.formatMessage({id:"mpXAeu",defaultMessage:"New chat"}),{resolvedTitle:L,isTypingEffect:te}=Ge(e.id,e.title,t),se=ye(),ae=te&&t&&se,{data:ne}=_e(e.conversation_template_id??void 0),I=j();return s.jsxs("div",{className:S("no-draggable group relative rounded-lg active:opacity-90",o,I&&"text-sm tracking-condensed",t?"bg-token-sidebar-surface-secondary":"hover:bg-token-sidebar-surface-secondary",u&&!t&&"bg-token-sidebar-surface-secondary"),children:[ee&&s.jsx($e,{threadId:e.id}),s.jsx(ie,{to:De(e.id,ne),onClick:p=>{p.metaKey||p.ctrlKey||t||Pe(e.id)},onDoubleClick:()=>{i(!0)},ref:n,className:S("flex items-center gap-2",I&&"px-2 py-2.5",!I&&"p-2"),style:{maskImage:I?"var(--sidebar-mask)":void 0},children:s.jsxs("div",{className:S("relative grow overflow-hidden whitespace-nowrap",W&&"loading-shimmer"),dir:"auto",children:[ae?s.jsx(ge,{text:L||F}):L||F,!I&&s.jsx("div",{className:S("absolute bottom-0 top-0 to-transparent ltr:right-0 ltr:bg-gradient-to-l rtl:left-0 rtl:bg-gradient-to-r",a?t||!t&&u?"from-token-sidebar-surface-secondary":"from-token-main-surface-primary":!1,a?!1:t||!t&&u?"from-token-sidebar-surface-secondary":"from-token-sidebar-surface-primary",{"from-token-main-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":a&&!t&&!u,"from-token-sidebar-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":!a&&!t&&!u,"w-10 from-60%":t||u,"w-8 from-0% can-hover:group-hover:w-10 can-hover:group-hover:from-60%":!t&&!u})})]})}),d?s.jsx("div",{className:"absolute bottom-0 left-[7px] right-2 top-0 flex items-center bg-token-sidebar-surface-secondary",children:s.jsx(qe,{conversation:e,onClose:()=>{i(!1)}})}):O?s.jsx("div",{className:"absolute bottom-0 top-0 flex items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",children:s.jsx("div",{className:"h-2 w-2 rounded-full bg-blue-selection"})}):s.jsx("div",{className:S("absolute bottom-0 top-0 items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",t||u?"flex":"hidden can-hover:group-hover:flex"),children:s.jsx(Be,{conversation:e,conversationTitle:L??e.title,onOpenChange:p=>{b(p),p&&x.logEvent(E.conversationHistoryItemOpenMenu,{conversationId:e.id})},testId:`${r}-options`})})]})}function Ke({className:e,elementRef:o,item:t,isActive:n,isFirstItem:a,isPrimaryBackgroundColor:r,testId:l}){const d=j();return s.jsx("li",{className:S(!d&&"relative",a&&!d?"z-[15]":""),"data-testid":l,children:s.jsx(ze,{className:e,isPrimaryBackgroundColor:r,conversation:t,isActive:n,elementRef:o,testId:l})})}function Xe(){const e=j(),{conversations:o}=Me();return{isCollapsible:e&&o.length>5,recentConversationLimit:5}}const M=fe({historyBucketToday:{id:"history.bucket.today",defaultMessage:"Today"},historyBucketYesterday:{id:"history.bucket.yesterday",defaultMessage:"Yesterday"},historyBucketLastSeven:{id:"history.bucket.lastSeven",defaultMessage:"Previous 7 Days"},historyBucketLastThirty:{id:"history.bucket.lastThirty",defaultMessage:"Previous 30 Days"}}),Qe=5;function ot(e,o){const t=G();return c.useMemo(()=>e.reduce((n,a)=>{const r=new Date(a.update_time??a.create_time??0),l=xe(new Date,r);if(l===0)n.recent.today.items.push(a);else if(l<=1)n.recent.yesterday.items.push(a);else if(l<=7)n.recent.lastSeven.items.push(a);else if(l<=30)n.recent.lastThirty.items.push(a);else if(Ee(r)){const d=q(r),i=Ce(r),u=`${d}-${i}`;n.dynamicMonths[u]?n.dynamicMonths[u].items.push(a):n.dynamicMonths[u]={label:t.formatDate(r,{month:"long"}),items:[a]}}else{const i=`${q(r)}-`;n.dynamicYears[i]?n.dynamicYears[i].items.push(a):n.dynamicYears[i]={label:t.formatDate(r,{year:"numeric"}),items:[a]}}return n},{recent:{today:{label:s.jsx(k,{...M.historyBucketToday}),items:[]},yesterday:{label:s.jsx(k,{...M.historyBucketYesterday}),items:[]},lastSeven:{label:s.jsx(k,{...M.historyBucketLastSeven}),items:[]},lastThirty:{label:s.jsx(k,{...M.historyBucketLastThirty}),items:[]}},dynamicMonths:{},dynamicYears:{}}),[o,e])}function it({activeId:e,bucketedItems:o,items:t,hasNextPage:n,isPrimaryBackgroundColor:a,infiniteScrollTriggerElementRef:r}){const{isCollapsible:l}=Xe(),d=Re(je.isHistoryCollapsed),i=j(),[u]=Ne({onChange:b=>{c.startTransition(()=>{$.setHistoryShowMoreVisible(b)})}});return s.jsxs(s.Fragment,{children:[[o.recent,o.dynamicMonths,o.dynamicYears].flatMap((b,y)=>s.jsx(c.Fragment,{children:Object.entries(b).map(([m,{items:g,label:f}],T)=>{if(m!=="today"&&!g.length)return null;const _=!!g.find(h=>t.length>0&&h.id===t[0]?.id);return g.length>0&&s.jsxs("div",{className:S(a&&"first:mt-0",i&&"first:mt-1",!i&&"relative mt-5 first:mt-0 last:mb-5"),children:[s.jsx("div",{className:S("sticky",!i&&"bg-token-sidebar-surface-primary",i?"top-[--sidebar-sticky-threshold] z-20":"top-0 z-20"),children:s.jsx("span",{className:"flex h-9 items-center",children:s.jsx(Ie,{$screenArch:i,children:f})})}),s.jsx("ol",{className:i?"flex flex-col gap-0.5":void 0,children:g.map((h,N)=>{const D=e===h.id,A=_&&N===0,O=n&&t[t.length-Qe-1]?.id===h.id?r:void 0;return s.jsx(Ke,{item:h,isActive:D,isFirstItem:A,isPrimaryBackgroundColor:a,elementRef:O,testId:`history-item-${N}`},`history-item-${h.id}-${m}`)})})]},`${m}-${y}-${T}`)})},`category-${y}`)),l&&!d&&s.jsx("div",{ref:u,children:s.jsx(we,{type:"less",onClick:$.toggleHistoryCollapsed})})]})}export{it as H,Xe as a,Ke as b,ot as u};
//# sourceMappingURL=glkcmrbsq3gptlrq.js.map