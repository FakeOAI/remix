const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/hnfbl2pu1n99nnsz.js","assets/c18i0pp13au3y7ic.js","assets/haiie99g2z7r06p2.js","assets/root-it5gal5m.css","assets/g4twu77u2twhehgk.js","assets/conversation-small-cll5buey.css","assets/enssjn5g3z6y1cyn.js","assets/oebbfh7ymqr9h0bg.js","assets/ipokt9i7zjv6h6xg.js","assets/d6pd9vw7xwm0s8og.js","assets/a6yq7dxv0hbp7yf9.js","assets/i0rsuleug17fm96j.js","assets/kj64znksxeizyr44.js","assets/l72gguc1sdhtezl5.js","assets/6821c7u8k44y6qgw.js","assets/m3iqnk6sivad42s6.js","assets/w00db3uf0s4pve7z.js","assets/gnw06s083lr5f19e.js","assets/e84pdv6605u7dh25.js","assets/h1mh4abdz9ajp2qf.js","assets/kp8msh463esg9se3.js","assets/8n4pdax1gjhvhr60.js","assets/tdlbzuru68c98r10.js","assets/jd722thjwk9l119v.js","assets/l6q8z1di3hxp7im8.js","assets/uz674jecbic99odm.js","assets/nt5chjmu6n6hgb8b.js"])))=>i.map(i=>d[i]);
import{r as f,ab as ne,ac as re,a0 as A,L as F,ec as p,dL as I,e7 as V,y as s,a4 as b,c6 as oe,P as x,d as N,S as O,ak as ie,j as L,be as le,al as de,N as k,as as ce,ae as R,a1 as ue}from"./c18i0pp13au3y7ic.js";import{ct as fe,eO as B,eP as me,q as he,bR as P,eQ as ye,eR as ge,de as pe,L as be,bd as G,eS as ve,b_ as Te,eT as Se,eU as Ee,eV as q,eW as xe,eX as Ne}from"./g4twu77u2twhehgk.js";import{b as ke,t as Ce}from"./enssjn5g3z6y1cyn.js";import{b as Ie,r as M,s as H}from"./kj64znksxeizyr44.js";import{f as Re}from"./uz674jecbic99odm.js";import{t as we,v as Y,s as Me,r as _e,T as $}from"./oebbfh7ymqr9h0bg.js";import{a as z}from"./i0rsuleug17fm96j.js";import{ab as je}from"./haiie99g2z7r06p2.js";function De(e,i,t){const{title:n,titleSource:a}=we(e),[o,r]=f.useState(!1),l=n??i,d=f.useRef(l);return f.useEffect(()=>(t&&a===Y.Generated&&l!==d.current&&r(!0),()=>{d.current=l}),[t,l,a]),{isTypingEffect:o,resolvedTitle:l}}const Oe=ne(()=>re(()=>import("./hnfbl2pu1n99nnsz.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26])).then(e=>e.GizmoConversationOptionsDropdown)),Ae=new Date(2024,9,11,0);function Le(e){O.checkGate("3922476776")||ge.abortAllRequests(),x.logEvent(N.loadThread,{threadId:e})}function Pe({conversation:e,conversationTitle:i,onOpenChange:t,testId:n}){const a=A(),{isUnauthenticated:o}=ie(),{eligible:r,markAsViewed:l}=pe(be.ArchiveConversationOnboarding),d=_e(e.id),[c,m]=f.useState(!1),g=L(),h=le(),T=de();return f.useEffect(()=>V(z,{deleteChat:({serverThreadId:u})=>{u===e.id&&m(!0)},archiveChat:async({serverThreadId:u})=>{u===e.id&&(await k.patchConversation(e.id,{is_archived:!0}),M(g),O.logEvent("chatgpt_conversation_archived"),x.logEvent(N.conversationArchived),r&&(T.info(a.formatMessage({defaultMessage:"You can view archived chats in Settings",id:"HistoryGizmoItem.archiveChatOnboarding"}),{duration:10,hasCloseButton:!0}),l()),d&&G(h))}}),[h,T,g,r,e.id,a,d,l]),o?null:s.jsxs(s.Fragment,{children:[s.jsx(ce,{label:a.formatMessage({id:"tJPHEQ",defaultMessage:"Options"}),sideOffset:4,side:"top",children:s.jsx(Oe,{clientThreadId:e.id,onOpenChange:t,children:s.jsx("button",{className:"flex items-center justify-center text-token-text-secondary transition hover:text-token-text-primary radix-state-open:text-token-text-secondary","data-testid":n,children:s.jsx(je,{className:"icon-md"})})})}),c&&s.jsx(ve,{title:i,handleDelete:()=>{k.patchConversation(e.id,{is_visible:!1}).then(()=>{M(g),O.logEvent("chatgpt_conversation_deleted"),x.logEvent(N.conversationDeleted),Te.publish({kind:"deleteConversation",serverThreadId:e.id})}),d&&G(h)},onClose:()=>{m(!1)}})]})}function Ue({conversation:e,onClose:i}){const[t,n]=f.useState(e.title),a=L();function o(){t!==e.title&&($.setTitle(e.id,t,Y.User),x.logEvent(N.renameThread,{threadId:e.id,content:t}),k.patchConversation(e.id,{title:t}).then(()=>{M(a)}))}return s.jsx("input",{type:"text",value:t,onChange:r=>{n(r.target.value)},onKeyDown:r=>{switch(r.key){case"Escape":i();break;case"Enter":o(),i();break}},onBlur:()=>{o(),i()},autoFocus:!0,className:"w-full border border-token-border-light bg-transparent p-0 text-sm"})}const K=5,Fe=3e3;function Ge({threadId:e}){const i=L(),t=f.useRef(!1),n=f.useRef(null);return f.useEffect(()=>{async function a(){t.current=!0;const o=await Re(e);if(o.async_status===p.UNREAD){M(i),$.initThreadFromServerData(e,o,!0,void 0,!0);return}if(o.async_status!==p.STREAMING)return;const r=o.update_time??0;B(new Date,new Date(r*1e3))<K?n.current=window.setTimeout(a,Fe):k.setConversationStatus(e)}return t.current||(x.logEvent(N.conversationPollingStarted),a()),()=>{n.current&&window.clearTimeout(n.current)}},[i,e]),null}function qe({conversation:e,className:i,isActive:t,elementRef:n,isPrimaryBackgroundColor:a,testId:o}){const r=A(),[l,d]=f.useState(!1),[c,m]=f.useState(!1),{value:g}=F("3922476776"),{value:h}=F("232791851"),T=Ie(e.id),{value:u=null,source:v=null}=T??{},_=Me(e.id),S=fe(_),C=B(new Date,new Date(e.update_time??0))<K,X=e.update_time&&me(new Date(e.update_time),Ae),Q=u===p.STREAMING&&C,J=h&&!t&&!S&&X&&u===p.UNREAD,W=h&&!t&&(S||Q),Z=h&&u===p.STREAMING&&v===I.SERVER&&!S&&C,j=f.useRef(!1);f.useEffect(()=>{j.current||g&&(async()=>(j.current=!0,t&&u===p.UNREAD&&(v===I.SERVER&&await k.setConversationStatus(e.id),H(e.id,null)),!t&&v===I.CLIENT&&u===p.UNREAD&&(await k.setConversationStatus(e.id,u),H(e.id,{value:p.UNREAD,source:I.SERVER})),j.current=!1))()},[g,t,e.id,u,v,S]),f.useEffect(()=>V(z,{editTitle:({serverThreadId:y})=>{(y?y===e.id:t)&&d(!0)}}),[e.id,t]);const U=r.formatMessage({id:"mpXAeu",defaultMessage:"New chat"}),{resolvedTitle:D,isTypingEffect:ee}=De(e.id,e.title,t),te=he(),se=ee&&t&&te,{data:ae}=ke(e.conversation_template_id??void 0),E=P();return s.jsxs("div",{className:b("no-draggable group relative rounded-lg active:opacity-90",i,E&&"text-sm tracking-condensed",t?"bg-token-sidebar-surface-secondary":E?"hover:bg-token-main-surface-secondary":"hover:bg-token-sidebar-surface-secondary",c&&!t&&"bg-token-sidebar-surface-secondary"),children:[Z&&s.jsx(Ge,{threadId:e.id}),s.jsx(oe,{to:Ce(e.id,ae),onClick:y=>{y.metaKey||y.ctrlKey||t||Le(e.id)},onDoubleClick:()=>{d(!0)},ref:n,className:b("flex items-center gap-2",E&&"px-2 py-2.5",!E&&"p-2"),style:{maskImage:E?"var(--sidebar-mask)":void 0},children:s.jsxs("div",{className:b("relative grow overflow-hidden whitespace-nowrap",W&&"loading-shimmer"),dir:"auto",children:[se?s.jsx(ye,{text:D||U}):D||U,!E&&s.jsx("div",{className:b("absolute bottom-0 top-0 to-transparent ltr:right-0 ltr:bg-gradient-to-l rtl:left-0 rtl:bg-gradient-to-r",a?t||!t&&c?"from-token-sidebar-surface-secondary":"from-token-main-surface-primary":!1,a?!1:t||!t&&c?"from-token-sidebar-surface-secondary":"from-token-sidebar-surface-primary",{"from-token-main-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":a&&!t&&!c,"from-token-sidebar-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":!a&&!t&&!c,"w-10 from-60%":t||c,"w-8 from-0% can-hover:group-hover:w-10 can-hover:group-hover:from-60%":!t&&!c})})]})}),l?s.jsx("div",{className:"absolute bottom-0 left-[7px] right-2 top-0 flex items-center bg-token-sidebar-surface-secondary",children:s.jsx(Ue,{conversation:e,onClose:()=>{d(!1)}})}):J?s.jsx("div",{className:"absolute bottom-0 top-0 flex items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",children:s.jsx("div",{className:"h-2 w-2 rounded-full bg-blue-selection"})}):s.jsx("div",{className:b("absolute bottom-0 top-0 items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",t||c?"flex":"hidden can-hover:group-hover:flex"),children:s.jsx(Pe,{conversation:e,conversationTitle:D??e.title,onOpenChange:y=>{m(y),y&&x.logEvent(N.conversationHistoryItemOpenMenu,{conversationId:e.id})},testId:`${o}-options`})})]})}function He({className:e,elementRef:i,item:t,isActive:n,isFirstItem:a,isPrimaryBackgroundColor:o,testId:r}){const l=P();return s.jsx("li",{className:b(!l&&"relative",a&&!l?"z-[15]":""),"data-testid":r,children:s.jsx(qe,{className:e,isPrimaryBackgroundColor:o,conversation:t,isActive:n,elementRef:i,testId:r})})}const w=ue({historyBucketToday:{id:"history.bucket.today",defaultMessage:"Today"},historyBucketYesterday:{id:"history.bucket.yesterday",defaultMessage:"Yesterday"},historyBucketLastSeven:{id:"history.bucket.lastSeven",defaultMessage:"Previous 7 Days"},historyBucketLastThirty:{id:"history.bucket.lastThirty",defaultMessage:"Previous 30 Days"}}),Ve=5;function We(e,i){const t=A();return f.useMemo(()=>e.reduce((n,a)=>{const o=new Date(a.update_time??a.create_time??0),r=Se(new Date,o);if(r===0)n.recent.today.items.push(a);else if(r<=1)n.recent.yesterday.items.push(a);else if(r<=7)n.recent.lastSeven.items.push(a);else if(r<=30)n.recent.lastThirty.items.push(a);else if(Ee(o)){const l=q(o),d=xe(o),c=`${l}-${d}`;n.dynamicMonths[c]?n.dynamicMonths[c].items.push(a):n.dynamicMonths[c]={label:t.formatDate(o,{month:"long"}),items:[a]}}else{const d=`${q(o)}-`;n.dynamicYears[d]?n.dynamicYears[d].items.push(a):n.dynamicYears[d]={label:t.formatDate(o,{year:"numeric"}),items:[a]}}return n},{recent:{today:{label:s.jsx(R,{...w.historyBucketToday}),items:[]},yesterday:{label:s.jsx(R,{...w.historyBucketYesterday}),items:[]},lastSeven:{label:s.jsx(R,{...w.historyBucketLastSeven}),items:[]},lastThirty:{label:s.jsx(R,{...w.historyBucketLastThirty}),items:[]}},dynamicMonths:{},dynamicYears:{}}),[i,e])}function Ze({activeId:e,bucketedItems:i,items:t,hasNextPage:n,isPrimaryBackgroundColor:a,infiniteScrollTriggerElementRef:o}){const r=P();return s.jsx(s.Fragment,{children:[i.recent,i.dynamicMonths,i.dynamicYears].flatMap((l,d)=>s.jsx(f.Fragment,{children:Object.entries(l).map(([c,{items:m,label:g}],h)=>{if(c!=="today"&&!m.length)return null;const T=!!m.find(u=>t.length>0&&u.id===t[0]?.id);return m.length>0&&s.jsxs("div",{className:b(a&&"first:mt-0",r&&"first:mt-1",!r&&"relative mt-5 first:mt-0 last:mb-5"),children:[s.jsx("div",{className:b("sticky",!r&&"bg-token-sidebar-surface-primary",r?"top-[--sidebar-sticky-threshold] z-20":"top-0 z-20"),children:s.jsx("span",{className:"flex h-9 items-center",children:s.jsx(Ne,{$screenArch:r,children:g})})}),s.jsx("ol",{className:r?"flex flex-col gap-0.5":void 0,children:m.map((u,v)=>{const _=e===u.id,S=T&&v===0,C=n&&t[t.length-Ve-1]?.id===u.id?o:void 0;return s.jsx(He,{item:u,isActive:_,isFirstItem:S,isPrimaryBackgroundColor:a,elementRef:C,testId:`history-item-${v}`},`history-item-${u.id}-${c}`)})})]},`${c}-${d}-${h}`)})},`category-${d}`))})}export{Ze as H,He as a,We as u};
//# sourceMappingURL=d2rynahwdk8zgr3h.js.map