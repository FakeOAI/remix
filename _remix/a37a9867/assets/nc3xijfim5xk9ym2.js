const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/c0g00jjyew8a8bni.js","assets/mmal6p4kl22zfrfg.js","assets/esia9ah6q4vsupvt.js","assets/root-lzc0gvpq.css","assets/i8crxwujeo3n60om.js","assets/conversation-small-cll5buey.css","assets/meoz9lbdxu4dt41d.js","assets/a44b3m5ml1mx5nn4.js","assets/pbffjd4sant9qggz.js","assets/lwk11n9qbjlycof7.js","assets/jyusxtzzgs4ihqfz.js","assets/o6w9okc5vn9scj4w.js","assets/iziiga9sc3emkx6a.js","assets/ewaqnxa4l26dslc9.js","assets/f5g3yf6rejksa6rn.js","assets/f40rj7a9jp438rae.js","assets/kbzjjo5jph7d4u3r.js","assets/m4txjtjm8m1s6uyu.js","assets/fbhbhap15n2ybrok.js","assets/k7hb5o3308fwzisv.js","assets/k88ys7sf9o5flgyw.js","assets/lcjgntdwka0pcoze.js","assets/bmhn0o3is180q73k.js","assets/m8lgth2hdwftjzpg.js","assets/mw4mmmapv415l2ql.js","assets/otbog8ic1x0jilh3.js","assets/fwdwa0kv6nwta6rw.js"])))=>i.map(i=>d[i]);
import{r as f,ab as re,ac as oe,a0 as A,L as F,ed as p,dL as I,e8 as V,y as s,a4 as b,P as x,d as N,c6 as ie,S as O,ak as le,j as L,be as de,al as ue,N as k,as as ce,ae as R,a1 as fe}from"./mmal6p4kl22zfrfg.js";import{cu as me,eP as Y,eQ as he,q as ye,bS as P,eR as ge,eS as pe,df as be,L as ve,be as G,eT as Te,b$ as Se,eU as Ee,eV as xe,eW as q,eX as Ne,eY as ke}from"./i8crxwujeo3n60om.js";import{b as Ce,t as we}from"./meoz9lbdxu4dt41d.js";import{b as Ie,r as _,s as H}from"./iziiga9sc3emkx6a.js";import{f as Re}from"./otbog8ic1x0jilh3.js";import{t as Me,v as $,s as _e,r as je,T as B}from"./a44b3m5ml1mx5nn4.js";import{a as z}from"./o6w9okc5vn9scj4w.js";import{ab as De}from"./esia9ah6q4vsupvt.js";function Oe(e,i,t){const{title:r,titleSource:a}=Me(e),[o,n]=f.useState(!1),l=r??i,d=f.useRef(l);return f.useEffect(()=>(t&&a===$.Generated&&l!==d.current&&n(!0),()=>{d.current=l}),[t,l,a]),{isTypingEffect:o,resolvedTitle:l}}const Ae=re(()=>oe(()=>import("./c0g00jjyew8a8bni.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26])).then(e=>e.GizmoConversationOptionsDropdown)),Le=new Date(2024,9,11,0);function Pe(e){O.checkGate("3922476776")||pe.abortAllRequests(),x.logEvent(N.loadThread,{threadId:e})}function Ue({conversation:e,conversationTitle:i,onOpenChange:t,testId:r}){const a=A(),{isUnauthenticated:o}=le(),{eligible:n,markAsViewed:l}=be(ve.ArchiveConversationOnboarding),d=je(e.id),[u,m]=f.useState(!1),g=L(),h=de(),S=ue();return f.useEffect(()=>V(z,{deleteChat:({serverThreadId:c})=>{c===e.id&&m(!0)},archiveChat:async({serverThreadId:c})=>{c===e.id&&(await k.patchConversation(e.id,{is_archived:!0}),_(g),O.logEvent("chatgpt_conversation_archived"),x.logEvent(N.conversationArchived),n&&(S.info(a.formatMessage({defaultMessage:"You can view archived chats in Settings",id:"HistoryGizmoItem.archiveChatOnboarding"}),{duration:10,hasCloseButton:!0}),l()),d&&G(h))}}),[h,S,g,n,e.id,a,d,l]),o?null:s.jsxs(s.Fragment,{children:[s.jsx(ce,{label:a.formatMessage({id:"tJPHEQ",defaultMessage:"Options"}),sideOffset:4,side:"top",children:s.jsx(Ae,{clientThreadId:e.id,onOpenChange:t,children:s.jsx("button",{className:"flex items-center justify-center text-token-text-secondary transition hover:text-token-text-primary radix-state-open:text-token-text-secondary","data-testid":r,children:s.jsx(De,{className:"icon-md"})})})}),u&&s.jsx(Te,{title:i,handleDelete:()=>{k.patchConversation(e.id,{is_visible:!1}).then(()=>{_(g),O.logEvent("chatgpt_conversation_deleted"),x.logEvent(N.conversationDeleted),Se.publish({kind:"deleteConversation",serverThreadId:e.id})}),d&&G(h)},onClose:()=>{m(!1)}})]})}function Fe({conversation:e,onClose:i}){const[t,r]=f.useState(e.title),a=L();function o(){t!==e.title&&(B.setTitle(e.id,t,$.User),x.logEvent(N.renameThread,{threadId:e.id,content:t}),k.patchConversation(e.id,{title:t}).then(()=>{_(a)}))}return s.jsx("input",{type:"text",value:t,onChange:n=>{r(n.target.value)},onKeyDown:n=>{switch(n.key){case"Escape":i();break;case"Enter":o(),i();break}},onBlur:()=>{o(),i()},autoFocus:!0,className:"w-full border border-token-border-light bg-transparent p-0 text-sm"})}const K=5,Ge=3e3;function qe({threadId:e}){const i=L(),t=f.useRef(!1),r=f.useRef(null);return f.useEffect(()=>{async function a(){t.current=!0;const o=await Re(e);if(o.async_status===p.UNREAD){_(i),B.initThreadFromServerData(e,o,!0,void 0,!0);return}if(o.async_status!==p.STREAMING)return;const n=o.update_time??0;Y(new Date,new Date(n*1e3))<K?r.current=window.setTimeout(a,Ge):k.setConversationStatus(e)}return t.current||(x.logEvent(N.conversationPollingStarted),a()),()=>{r.current&&window.clearTimeout(r.current)}},[i,e]),null}function He({conversation:e,className:i,isActive:t,elementRef:r,isPrimaryBackgroundColor:a,testId:o}){const n=A(),[l,d]=f.useState(!1),[u,m]=f.useState(!1),{value:g}=F("3922476776"),{value:h}=F("232791851"),S=Ie(e.id),{value:c=null,source:v=null}=S??{},C=_e(e.id),E=me(C),w=Y(new Date,new Date(e.update_time??0))<K,X=e.update_time&&he(new Date(e.update_time),Le),Q=c===p.STREAMING&&w,J=h&&!t&&!E&&X&&c===p.UNREAD,W=h&&!t&&(E||Q),Z=h&&c===p.STREAMING&&v===I.SERVER&&!E&&w,j=f.useRef(!1);f.useEffect(()=>{j.current||g&&(async()=>(j.current=!0,t&&c===p.UNREAD&&(v===I.SERVER&&await k.setConversationStatus(e.id),H(e.id,null)),!t&&v===I.CLIENT&&c===p.UNREAD&&(await k.setConversationStatus(e.id,c),H(e.id,{value:p.UNREAD,source:I.SERVER})),j.current=!1))()},[g,t,e.id,c,v,E]),f.useEffect(()=>V(z,{editTitle:({serverThreadId:y})=>{(y?y===e.id:t)&&d(!0)}}),[e.id,t]);const U=n.formatMessage({id:"mpXAeu",defaultMessage:"New chat"}),{resolvedTitle:D,isTypingEffect:ee}=Oe(e.id,e.title,t),te=ye(),se=ee&&t&&te,{data:ae}=Ce(e.conversation_template_id??void 0),T=P(),ne=s.jsx("div",{className:b("absolute bottom-0 top-0 items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",t||u?"flex":"hidden can-hover:group-hover:flex"),children:s.jsx(Ue,{conversation:e,conversationTitle:D??e.title,onOpenChange:y=>{m(y),y&&x.logEvent(N.conversationHistoryItemOpenMenu,{conversationId:e.id})},testId:`${o}-options`})});return s.jsxs("div",{className:b("no-draggable group relative rounded-lg active:opacity-90",i,T&&"text-sm tracking-condensed",t?"bg-token-sidebar-surface-secondary":T?"hover:bg-token-main-surface-secondary":"hover:bg-token-sidebar-surface-secondary",u&&!t&&"bg-token-sidebar-surface-secondary"),children:[Z&&s.jsx(qe,{threadId:e.id}),s.jsx(ie,{to:we(e.id,ae),onClick:y=>{y.metaKey||y.ctrlKey||t||Pe(e.id)},onDoubleClick:()=>{d(!0)},ref:r,className:b("flex items-center gap-2",T&&"px-2 py-2.5",!T&&"p-2"),style:{maskImage:T?"var(--sidebar-mask)":void 0},children:s.jsxs("div",{className:b("relative grow overflow-hidden whitespace-nowrap",W&&"loading-shimmer"),dir:"auto",children:[se?s.jsx(ge,{text:D||U}):D||U,!T&&s.jsx("div",{className:b("absolute bottom-0 top-0 to-transparent ltr:right-0 ltr:bg-gradient-to-l rtl:left-0 rtl:bg-gradient-to-r",a?t||!t&&u?"from-token-sidebar-surface-secondary":"from-token-main-surface-primary":!1,a?!1:t||!t&&u?"from-token-sidebar-surface-secondary":"from-token-sidebar-surface-primary",{"from-token-main-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":a&&!t&&!u,"from-token-sidebar-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":!a&&!t&&!u,"w-10 from-60%":t||u,"w-8 from-0% can-hover:group-hover:w-10 can-hover:group-hover:from-60%":!t&&!u})})]})}),l?s.jsx("div",{className:"absolute bottom-0 left-[7px] right-2 top-0 flex items-center bg-token-sidebar-surface-secondary",children:s.jsx(Fe,{conversation:e,onClose:()=>{d(!1)}})}):J?s.jsx("div",{className:"absolute bottom-0 top-0 flex items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",children:s.jsx("div",{className:"h-2 w-2 rounded-full bg-blue-selection"})}):!T&&ne]})}function Ve({className:e,elementRef:i,item:t,isActive:r,isFirstItem:a,isPrimaryBackgroundColor:o,testId:n}){const l=P();return s.jsx("li",{className:b(!l&&"relative",a&&!l?"z-[15]":""),"data-testid":n,children:s.jsx(He,{className:e,isPrimaryBackgroundColor:o,conversation:t,isActive:r,elementRef:i,testId:n})})}const M=fe({historyBucketToday:{id:"history.bucket.today",defaultMessage:"Today"},historyBucketYesterday:{id:"history.bucket.yesterday",defaultMessage:"Yesterday"},historyBucketLastSeven:{id:"history.bucket.lastSeven",defaultMessage:"Previous 7 Days"},historyBucketLastThirty:{id:"history.bucket.lastThirty",defaultMessage:"Previous 30 Days"}}),Ye=5;function Ze(e,i){const t=A();return f.useMemo(()=>e.reduce((r,a)=>{const o=new Date(a.update_time??a.create_time??0),n=Ee(new Date,o);if(n===0)r.recent.today.items.push(a);else if(n<=1)r.recent.yesterday.items.push(a);else if(n<=7)r.recent.lastSeven.items.push(a);else if(n<=30)r.recent.lastThirty.items.push(a);else if(xe(o)){const l=q(o),d=Ne(o),u=`${l}-${d}`;r.dynamicMonths[u]?r.dynamicMonths[u].items.push(a):r.dynamicMonths[u]={label:t.formatDate(o,{month:"long"}),items:[a]}}else{const d=`${q(o)}-`;r.dynamicYears[d]?r.dynamicYears[d].items.push(a):r.dynamicYears[d]={label:t.formatDate(o,{year:"numeric"}),items:[a]}}return r},{recent:{today:{label:s.jsx(R,{...M.historyBucketToday}),items:[]},yesterday:{label:s.jsx(R,{...M.historyBucketYesterday}),items:[]},lastSeven:{label:s.jsx(R,{...M.historyBucketLastSeven}),items:[]},lastThirty:{label:s.jsx(R,{...M.historyBucketLastThirty}),items:[]}},dynamicMonths:{},dynamicYears:{}}),[i,e])}function et({activeId:e,bucketedItems:i,items:t,hasNextPage:r,isPrimaryBackgroundColor:a,infiniteScrollTriggerElementRef:o}){const n=P();return s.jsx(s.Fragment,{children:[i.recent,i.dynamicMonths,i.dynamicYears].flatMap((l,d)=>s.jsx(f.Fragment,{children:Object.entries(l).map(([u,{items:m,label:g}],h)=>{if(u!=="today"&&!m.length)return null;const S=!!m.find(c=>t.length>0&&c.id===t[0]?.id);return m.length>0&&s.jsxs("div",{className:b(a&&"first:mt-0",n&&"first:mt-1",!n&&"relative mt-5 first:mt-0 last:mb-5"),children:[s.jsx("div",{className:b("sticky",!n&&"bg-token-sidebar-surface-primary",n?"top-[--sidebar-sticky-threshold] z-20":"top-0 z-20"),children:s.jsx("span",{className:"flex h-9 items-center",children:s.jsx(ke,{$screenArch:n,children:g})})}),s.jsx("ol",{className:n?"flex flex-col gap-0.5":void 0,children:m.map((c,v)=>{const C=e===c.id,E=S&&v===0,w=r&&t[t.length-Ye-1]?.id===c.id?o:void 0;return C&&n?null:s.jsx(Ve,{item:c,isActive:C,isFirstItem:E,isPrimaryBackgroundColor:a,elementRef:w,testId:`history-item-${v}`},`history-item-${c.id}-${u}`)})})]},`${u}-${d}-${h}`)})},`category-${d}`))})}export{et as H,Ve as a,Ze as u};
//# sourceMappingURL=nc3xijfim5xk9ym2.js.map