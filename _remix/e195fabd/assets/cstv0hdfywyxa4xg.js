const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/h127iclacp0sde1d.js","assets/h0b670ehlczrzmby.js","assets/l80md5euhzcfcwih.js","assets/root-g1r49e1z.css","assets/bkali08fbs0zdeff.js","assets/nhycp86hlx2bwzb5.js","assets/conversation-small-c8xg50op.css","assets/mu1vqc3szitsk7hl.js","assets/ibvmqajet6tua8bo.js","assets/digndrx9sk290tqa.js","assets/ej3kmfdoujn0gsgd.js","assets/hnx9tkfvio4fcne2.js","assets/jmt9w6vkud0zeow9.js","assets/j7vcoqowxinhhu6c.js","assets/coceas3wwsbi6cn5.js","assets/bm35ep0stfgqlqzs.js","assets/nahfh0349yf8tror.js","assets/ktfn5ffm35diovzn.js"])))=>i.map(i=>d[i]);
import{aD as ne,j as e,r as c,c as b,J as v,by as Te,co as ie,c3 as re,B as M,bo as K,f7 as we,eV as ke,bp as oe,G as A,ar as le,K as W,bh as Y,P as _,y as D,f8 as w,f9 as ce,bj as de,z as ue,F as O,a6 as Me,u as Ee,N as Ge,dt as _e,aN as J,bg as De,cv as Oe,bk as Le}from"./h0b670ehlczrzmby.js";import{bB as P,aD as F,gp as me,gq as Ae,fM as ze,f9 as He,gr as Be,gs as Pe,v as X,ae as fe,fu as Fe,g9 as he,ga as ge,gt as Ue,U as B,ft as Re,aw as qe,br as Ve,k as Q,au as $e,da as V,aL as Ye,gu as Ke,g6 as We,gv as Xe,u as Qe,gw as Z,gx as Je,gy as Ze,r as L,bg as ee,gz as et,bZ as tt,gA as st,gB as at,gC as te,gD as nt,gE as pe,gF as it,ac as rt,gG as ot,gH as lt,fq as xe,gI as ct,A as dt,fr as ut,ad as mt,N as ft}from"./nhycp86hlx2bwzb5.js";import{G as ht}from"./bm35ep0stfgqlqzs.js";import{o as gt,C as pt,l as xt,q as yt,d as bt,g as vt}from"./mu1vqc3szitsk7hl.js";import{F as St,aw as U,ap as jt,a2 as Nt,bk as It,aO as Ct,A as Tt,as as wt,at as kt}from"./l80md5euhzcfcwih.js";import{B as ye,D as be}from"./bkali08fbs0zdeff.js";import{m as k}from"./digndrx9sk290tqa.js";import{D as Mt,E as ve,b as Et,F as Gt,f as _t,T as Dt,d as Ot,e as Lt}from"./ibvmqajet6tua8bo.js";import{G as Se}from"./hnx9tkfvio4fcne2.js";import{N as At}from"./ogz2chpqk6y3mtrw.js";function zt(){const t=P(F.SonicSidebar),[s,n]=c.useState(!1);return t.isLoading||!t.eligible?null:e.jsx(k.div,{className:"no-draggable group pb-0",whileTap:{scale:.98},children:e.jsx(Bt,{children:e.jsx(me,{href:"/search",target:"_blank",icon:e.jsx("div",{className:b("gizmo-shadow-stroke mr-[0.5] flex h-6 w-6 items-center justify-center rounded-full bg-token-main-surface-primary align-middle text-token-text-primary"),children:e.jsx(Ae,{})}),label:"SearchGPT",hoverRightIcon:e.jsxs("div",{className:"flex gap-3",children:[e.jsx(Pt,{isOpen:s,setIsOpen:n,onDismiss:()=>t.markAsViewed()}),e.jsx(St,{className:b("icon-md text-token-text-tertiary",!s&&"invisible group-hover:visible")})]}),isMenuOpen:!1,loggingGizmoId:"search-gpt-sidebar"})})})}function Ht(){const t=He(),s=P(F.hasSeenSncSidebarTooltip),n=Be(),a=Pe(),{activeModals:i}=X(),r=Te();return!s.isLoading&&s.eligible&&!n&&i.size===0&&!t&&!a&&!r}function Bt({children:t}){const s=Ht(),n=P(F.hasSeenSncSidebarTooltip);return s?e.jsx(ze,{side:"right",show:!0,badge:"new",title:"Try SearchGPT",onDismiss:n.markAsViewed,sideOffset:10,theme:"bright",description:"You're in. Get answers with real-time information from relevant sources, and ask follow-up questions.",children:e.jsx("div",{className:"w-full",children:t})}):e.jsx(e.Fragment,{children:t})}function Pt({isOpen:t,setIsOpen:s,onDismiss:n}){return e.jsx(ye,{open:t,onOpenChange:s,triggerButton:e.jsx("button",{className:b("flex text-token-text-tertiary",t?"":"invisible group-hover:visible"),onClick:a=>{a.preventDefault()},children:e.jsx(U,{className:"icon-md"})}),children:e.jsx(be.Item,{onClick:a=>{a.preventDefault(),n()},children:e.jsx(v,{id:"sidebar.hideFromSidebar",defaultMessage:"Hide from sidebar"})})})}function je(){const t=ne("114024");return!t.value||t.isLoading?null:e.jsx(zt,{})}const Ft=ie(()=>re(()=>import("./h127iclacp0sde1d.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(t=>t.GizmoKeepInSidebarMenuItem)),Ut=2;function Rt({isActive:t,isNewConversation:s}){const n=M(),a=K();return e.jsx("div",{className:"bg-token-sidebar-surface-primary pt-0",children:e.jsx(Ne,{gizmo:void 0,isActive:t,onClick:i=>{we(ke(n))&&!s&&(i.preventDefault(),Fe(a))}})})}const $=4;function qt(t,s){var o,u,f;const n=$e(t,l=>l.flair.kind),a=[...((o=n[V.FirstParty])==null?void 0:o.map(({resource:l})=>({gizmo:l,section:0})))??[],...((u=n[V.SidebarKeep])==null?void 0:u.map(({resource:l})=>({gizmo:l,section:0})))??[],...((f=n[V.Recent])==null?void 0:f.slice(0,Ut).map(({resource:l})=>({gizmo:l,section:1})))??[]],i=a.length>$+1,r=i&&!s&&a.length>$?a.slice(0,$):a;return{listItems:[...r.filter(({section:l})=>l===0),...r.filter(({section:l})=>l===1)],itemsLeft:a.length-r.length,needsToCollapseItems:i}}function Vt({gizmo:t,currentGizmoId:s}){const n=c.useRef(!1),a=X(),[i,r]=c.useState(!1),{itemsLeft:d,listItems:o,needsToCollapseItems:u}=qt(t,i);c.useEffect(()=>{var l;o.length>0&&!n.current&&((l=he({namespace:ge.ChatPageLoad}))==null||l.logTiming("render_gizmo_sidebar"),n.current=!0)},[o]);function f(l,m){return e.jsx(Ne,{gizmo:l,isActive:l.gizmo.id===s,section:m},l.gizmo.id)}return e.jsxs("div",{children:[o.map(({gizmo:l,section:m},h)=>e.jsxs(c.Fragment,{children:[h>1&&m!==o[h-1].section&&e.jsx("div",{className:"my-2 ml-2 h-px w-7 bg-token-sidebar-surface-tertiary"}),f(l,m)]},h)),u?e.jsxs("button",{onClick:()=>{r(!i)},className:"flex h-10 w-full items-center gap-2 rounded-lg px-2 text-sm text-token-text-primary hover:bg-token-sidebar-surface-secondary",children:[e.jsx("div",{className:"flex h-6 w-6 flex-shrink-0 items-center justify-center",children:e.jsx(U,{className:"icon-md text-token-text-primary"})}),e.jsx("div",{className:"flex grow items-center gap-1",children:i?e.jsxs(e.Fragment,{children:[e.jsx(v,{id:"GizmoSidebarList.showLess",defaultMessage:"See less"}),e.jsx(jt,{className:"icon-xs"})]}):e.jsxs(e.Fragment,{children:[e.jsx(v,{id:"GizmoSidebarList.showMoreItems",defaultMessage:"{numMore} more",values:{numMore:d}}),e.jsx(Nt,{className:"icon-xs"})]})})]}):null,e.jsx(Ue,{children:e.jsx(k.div,{whileTap:{scale:.98},children:e.jsx(oe,{to:pt(),onClick:()=>{a.activeSidebar==="popover-nav"&&B.setActiveSidebar(!1)},children:e.jsx(Re,{icon:It,children:e.jsx(v,{...G.exploreStoreEnabled})})},"explore")})})]})}function $t({currentGizmoId:t}){const{data:{gizmos:s}={}}=gt(),n=fe();return e.jsxs(e.Fragment,{children:[!n&&e.jsx(Rt,{isActive:t===void 0,isNewConversation:!0}),e.jsx(je,{}),s!=null?e.jsx(Vt,{gizmo:s,currentGizmoId:t}):null]})}function Yt({gizmo:t,isOpen:s,setIsOpen:n,section:a}){const i=M();return e.jsxs(ye,{open:s,onOpenChange:n,triggerButton:e.jsx("button",{className:b("flex text-token-text-secondary hover:text-token-text-primary",s?"":"invisible group-hover:visible"),children:e.jsx(U,{className:"icon-md"})}),contentAlign:"start",sideOffset:4,alignOffset:-4,size:"auto",children:[a===1&&e.jsx(be.Item,{onClick:async()=>{await Ye.updateGizmoSidebar(i,yt,t.gizmo.id,"keep")},children:e.jsx(v,{...G.keepInSidebar})}),e.jsx(Ft,{gizmoResource:t})]})}function Ne({gizmo:t,historyDisabled:s,section:n,onClick:a}){var h;const i=A(),[r,d]=c.useState(!1),[o,u]=c.useState(!1),f=le(),l=!!((h=t==null?void 0:t.gizmo.tags)!=null&&h.includes(qe.FirstParty));let m;if(t!=null)m=t.gizmo.display.name||Ve;else{if(f==null)return null;s?m=i.formatMessage(G.clearChat):f.canInteractWithGizmos()?m=Ke:m=i.formatMessage({id:"GizmoSidebarListItem.newChat",defaultMessage:"New chat"})}return e.jsx(k.div,{whileTap:{scale:.98},onMouseEnter:()=>{u(!0)},onMouseLeave:()=>{u(!1)},children:e.jsx(me,{loggingGizmoId:(t==null?void 0:t.gizmo.id)??"primary",href:t!=null?xt(t):"/",onClick:a,icon:e.jsx(ht,{isFirstParty:t==null||l,src:t==null?void 0:t.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),isMenuOpen:r,label:m,hoverRightIcon:e.jsxs("div",{className:"flex gap-2",children:[(o||r)&&t!=null&&e.jsx("div",{className:"text-token-text-tertiary",onClick:y=>{y.preventDefault()},children:e.jsx(Yt,{gizmo:t,isOpen:r,setIsOpen:d,section:n})}),e.jsx(Q,{side:"right",label:i.formatMessage(s?G.clearChat:G.newChat),className:"flex items-center",children:e.jsx("button",{className:r?"text-token-text-tertiary":"invisible text-token-text-secondary hover:text-token-text-primary group-hover:visible",children:s?e.jsx(Ct,{className:"icon-md"}):e.jsx(Tt,{className:"icon-md"})})})]})})})}const G=W({exploreStoreEnabled:{id:"gizmo.exploreStoreEnabled",defaultMessage:"Explore GPTs"},keepInSidebar:{id:"gizmo.keepInSidebar",defaultMessage:"Keep in sidebar"},newChat:{id:"gizmo.newChat",defaultMessage:"New chat"},clearChat:{id:"gizmo.clearChat",defaultMessage:"Clear chat"}});function Kt(t,s,n){const{title:a,titleSource:i}=Mt(t),[r,d]=c.useState(!1),o=a??s,u=c.useRef(o);return c.useEffect(()=>(n&&i===ve.Generated&&o!==u.current&&d(!0),()=>{u.current=o}),[n,o,i]),{isTypingEffect:r,resolvedTitle:o}}const Wt=ie(()=>re(()=>import("./ej3kmfdoujn0gsgd.js"),__vite__mapDeps([10,1,2,3,5,6,7,8,9,11,12,4,13,14,15,16,17])).then(t=>t.GizmoConversationOptionsDropdown)),Xt=new Date(2024,8,11,20);function Qt(t){Y.checkGate("3922476776")||We.abortAllRequests(),_.logEvent(D.loadThread,{threadId:t})}function Jt({conversation:t,conversationTitle:s,onOpenChange:n}){const a=A(),{isUnauthenticated:i}=ue(),{eligible:r,markAsViewed:d}=P(F.ArchiveConversationOnboarding),o=Gt(t.id),[u,f]=c.useState(!1),l=M(),m=K();return c.useEffect(()=>ce(Se,{deleteChat:({serverThreadId:h})=>{h===t.id&&f(!0)},archiveChat:async({serverThreadId:h})=>{h===t.id&&(await O.patchConversation(t.id,{is_archived:!0}),L(l),Y.logEvent("chatgpt_conversation_archived"),_.logEvent(D.conversationArchived),r&&(Me.info(a.formatMessage({defaultMessage:"You can view archived chats in Settings",id:"HistoryGizmoItem.archiveChatOnboarding"}),{duration:10,hasCloseButton:!0}),d()),o&&ee(m))}}),[m,l,r,t.id,a,o,d]),i?null:e.jsxs(e.Fragment,{children:[e.jsx(Q,{label:a.formatMessage({id:"tJPHEQ",defaultMessage:"Options"}),sideOffset:4,side:"top",children:e.jsx(Wt,{clientThreadId:t.id,onOpenChange:n,children:e.jsx("button",{className:"flex items-center justify-center text-token-text-secondary transition hover:text-token-text-primary radix-state-open:text-token-text-secondary",children:e.jsx(U,{className:"icon-md"})})})}),u&&e.jsx(et,{title:s,handleDelete:()=>{O.patchConversation(t.id,{is_visible:!1}).then(()=>{L(l),Y.logEvent("chatgpt_conversation_deleted"),_.logEvent(D.conversationDeleted)}),o&&ee(m)},onClose:()=>{f(!1)}})]})}function Zt({conversation:t,onClose:s}){const[n,a]=c.useState(t.title),i=M();function r(){n!==t.title&&(Dt.setTitle(t.id,n,ve.User),_.logEvent(D.renameThread,{threadId:t.id,content:n}),O.patchConversation(t.id,{title:n}).then(()=>{L(i)}))}return e.jsx("input",{type:"text",value:n,onChange:d=>{a(d.target.value)},onKeyDown:d=>{switch(d.key){case"Escape":s();break;case"Enter":r(),s();break}},onBlur:()=>{r(),s()},autoFocus:!0,className:"w-full border border-token-border-light bg-transparent p-0 text-sm"})}const se=5,es=3e3;function ts({conversation:t,isActive:s,elementRef:n,isPrimaryBackgroundColor:a}){const i=A(),[r,d]=c.useState(!1),[o,u]=c.useState(!1),{value:f}=ne("232791851"),l=M(),m=Xe(t.id),h=Et(t.id),y=Qe(h),g=Z(new Date,new Date(t.update_time??0))<se,S=t.update_time&&Je(new Date(t.update_time),Xt),C=c.useRef(!1);c.useEffect(()=>{!C.current&&!y&&m===w.FINISHED&&s&&(async()=>(C.current=!0,await O.clearConversationStatus(t.id),tt(t.id,null),C.current=!1))()},[s,t.id,m,y]);const j=c.useRef(null),T=c.useRef(!1);c.useEffect(()=>{async function x(){T.current=!0;const q=await _t(t.id,!0);if(q.async_status===w.FINISHED){L(l);return}if(y||q.async_status!==w.PENDING)return;const Ce=q.update_time??0;Z(new Date,new Date(Ce*1e3))<se?j.current=window.setTimeout(x,es):O.clearConversationStatus(t.id)}return!T.current&&!y&&m===w.PENDING&&g&&x(),()=>{j.current&&window.clearTimeout(j.current)}},[t,m,y,l,g]),c.useEffect(()=>ce(Se,{editTitle:({serverThreadId:x})=>{(x?x===t.id:s)&&d(!0)}}),[t.id,s]);const N=i.formatMessage({id:"mpXAeu",defaultMessage:"New chat"}),{resolvedTitle:I,isTypingEffect:E}=Kt(t.id,t.title,s),R=de(),p=E&&s&&R,{data:z}=bt(t.conversation_template_id??void 0);return K(),e.jsxs("div",{className:b("no-draggable group relative rounded-lg active:opacity-90",s?"bg-token-sidebar-surface-secondary":"hover:bg-token-sidebar-surface-secondary",o&&!s&&"bg-token-sidebar-surface-secondary"),children:[e.jsx(oe,{to:vt(t.id,z),onClick:x=>{if(!(x.metaKey||x.ctrlKey)){s||Qt(t.id);return}},onDoubleClick:()=>{d(!0)},ref:n,className:"flex items-center gap-2 p-2",children:e.jsxs("div",{className:b("relative grow overflow-hidden whitespace-nowrap",f&&!s&&(y||m===w.PENDING&&g)&&"loading-shimmer"),dir:"auto",children:[p?e.jsx(Ze,{text:I||N}):I||N,e.jsx("div",{className:b("absolute bottom-0 top-0 to-transparent ltr:right-0 ltr:bg-gradient-to-l rtl:left-0 rtl:bg-gradient-to-r",a?s||!s&&o?"from-token-sidebar-surface-secondary":"from-token-main-surface-primary":!1,a?!1:s||!s&&o?"from-token-sidebar-surface-secondary":"from-token-sidebar-surface-primary",{"from-token-main-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":a&&!s&&!o,"from-token-sidebar-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":!a&&!s&&!o,"w-10 from-60%":s||o,"w-8 from-0% can-hover:group-hover:w-10 can-hover:group-hover:from-60%":!s&&!o})})]})}),r?e.jsx("div",{className:"absolute bottom-0 left-[7px] right-2 top-0 flex items-center bg-token-sidebar-surface-secondary",children:e.jsx(Zt,{conversation:t,onClose:()=>{d(!1)}})}):f&&!s&&!y&&S&&m===w.FINISHED?e.jsx("div",{className:"absolute bottom-0 top-0 flex items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",children:e.jsx("div",{className:"h-2 w-2 rounded-full bg-blue-selection"})}):e.jsx("div",{className:b("absolute bottom-0 top-0 items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",s||o?"flex":"hidden can-hover:group-hover:flex"),children:e.jsx(Jt,{conversation:t,conversationTitle:I??t.title,onOpenChange:x=>{u(x),x&&_.logEvent(D.conversationHistoryItemOpenMenu,{conversationId:t.id})}})})]})}const ss={initial:({isNew:t})=>t?{opacity:0,height:0,overflow:"hidden"}:{},animate:()=>({opacity:1,height:"auto"}),exit:()=>({opacity:0,height:0})};function Ie({elementRef:t,item:s,isActive:n,isFirstItem:a,isExistingItem:i,isPrimaryBackgroundColor:r}){return e.jsx(k.li,{className:b("relative",a?"z-[15]":""),layout:"position",custom:{isNew:!i},variants:ss,initial:"initial",animate:"animate",exit:"exit","data-testid":"history-item",children:e.jsx(ts,{isPrimaryBackgroundColor:r,conversation:s,isActive:n,elementRef:t})})}const H=W({historyBucketToday:{id:"history.bucket.today",defaultMessage:"Today"},historyBucketYesterday:{id:"history.bucket.yesterday",defaultMessage:"Yesterday"},historyBucketLastSeven:{id:"history.bucket.lastSeven",defaultMessage:"Previous 7 Days"},historyBucketLastThirty:{id:"history.bucket.lastThirty",defaultMessage:"Previous 30 Days"}}),as=5;function ns(t,s){const n=A();return c.useMemo(()=>t.reduce((a,i)=>{const r=new Date(i.update_time??i.create_time??0),d=st(new Date,r);if(d===0)a.recent.today.items.push(i);else if(d<=1)a.recent.yesterday.items.push(i);else if(d<=7)a.recent.lastSeven.items.push(i);else if(d<=30)a.recent.lastThirty.items.push(i);else if(at(r)){const o=te(r),u=nt(r),f=`${o}-${u}`;a.dynamicMonths[f]?a.dynamicMonths[f].items.push(i):a.dynamicMonths[f]={label:n.formatDate(r,{month:"long"}),items:[i]}}else{const u=`${te(r)}-`;a.dynamicYears[u]?a.dynamicYears[u].items.push(i):a.dynamicYears[u]={label:n.formatDate(r,{year:"numeric"}),items:[i]}}return a},{recent:{today:{label:e.jsx(v,{...H.historyBucketToday}),items:[]},yesterday:{label:e.jsx(v,{...H.historyBucketYesterday}),items:[]},lastSeven:{label:e.jsx(v,{...H.historyBucketLastSeven}),items:[]},lastThirty:{label:e.jsx(v,{...H.historyBucketLastThirty}),items:[]}},dynamicMonths:{},dynamicYears:{}}),[s,t])}function is({activeId:t,bucketedItems:s,items:n,hasNextPage:a,isPrimaryBackgroundColor:i,previousItems:r,infiniteScrollTriggerElementRef:d}){return e.jsx(e.Fragment,{children:[s.recent,s.dynamicMonths,s.dynamicYears].flatMap((o,u)=>e.jsx(c.Fragment,{children:Object.entries(o).map(([f,{items:l,label:m}],h)=>{if(f!=="today"&&!l.length)return null;const y=!!l.find(g=>{var S;return n.length>0&&g.id===((S=n[0])==null?void 0:S.id)});return l.length>0&&e.jsxs("div",{className:b(i&&"first:mt-0","relative mt-5 first:mt-0 last:mb-5"),children:[e.jsx("div",{className:"sticky top-0 z-20 bg-token-sidebar-surface-primary",children:e.jsx("span",{className:"flex h-9 items-center",children:e.jsx(pe,{children:m})})}),e.jsx("ol",{children:l.map((g,S)=>{var I;const C=t===g.id,j=y&&S===0,T=r==null?void 0:r.find(({id:E})=>E===g.id),N=a&&((I=n[n.length-as-1])==null?void 0:I.id)===g.id?d:void 0;return e.jsx(Ie,{item:g,isActive:C,isFirstItem:j,isExistingItem:!!T,isPrimaryBackgroundColor:i,elementRef:N},`history-item-${g.id}-${f}`)})})]},`${f}-${u}-${h}`)})},`category-${u}`))})}const ae=W({unableToLoadHistory:{id:"history.unableToLoad",defaultMessage:"Unable to load history"},retryButton:{id:"history.retryButton",defaultMessage:"Retry"}});function rs(t){const s=c.useRef(),n=c.useRef();return c.useEffect(()=>{s.current=n.current,n.current=t},[t]),t===n.current?s.current:n.current}function os({activeId:t,isPrimaryBackgroundColor:s,isInPopover:n}){const a=M(),[i,r]=c.useState(!1),[d,o]=c.useState(0),u=_e(),{conversations:f,hasNextPage:l,fetchNextPage:m,isLoading:h,isFetchingNextPage:y,isError:g}=it(),S=c.useRef(null),C=c.useCallback(p=>{var z;h||p==null||((z=S.current)==null||z.disconnect(),S.current=new IntersectionObserver(x=>{x[0].isIntersecting&&l&&m()}),S.current.observe(p))},[h,l,m]);c.useEffect(()=>()=>{var p;(p=S.current)==null||p.disconnect()},[]),c.useMemo(()=>{rt.publish({kind:"refreshHistory",conversations:f})},[f]);const j=f,T=rs(j);c.useEffect(()=>{const p=ot(lt(),Date.now());u(()=>{o(d+1)},p+1e3)},[d,u]);const N=j.length===0;c.useEffect(()=>{var p;N||(p=he({namespace:ge.ChatPageLoad}))==null||p.logTiming("render_history_items")},[N]);const I=ns(j,d),{isCollapsible:E}=xe(),R=X(p=>p.isHistoryCollapsed);return e.jsxs(ds,{$centered:h||g||N,children:[N&&h&&e.jsx(J,{className:"m-auto"}),N&&g&&e.jsxs("div",{className:"p-3 text-center italic text-token-text-tertiary",children:[e.jsx(v,{...ae.unableToLoadHistory}),!i&&e.jsx("div",{className:"mt-1",children:e.jsx(De,{as:"button",color:"primary",size:"small",className:"m-auto mt-2",onClick:()=>{r(!0),L(a)},children:e.jsx(v,{...ae.retryButton})})})]}),!h&&!N&&e.jsx("div",{children:e.jsx(ct,{id:n?"history-popover":"history-sidebar",children:e.jsx(dt,{initial:!1,children:E&&R?e.jsx(ls,{activeId:t,items:j,previousItems:T,isPrimaryBackgroundColor:s}):e.jsx(is,{activeId:t,bucketedItems:I,hasNextPage:l,items:j,previousItems:T,isPrimaryBackgroundColor:s,infiniteScrollTriggerElementRef:C})})})}),y&&e.jsx("div",{className:"m-4 mb-5 flex justify-center",children:e.jsx(J,{})})]})}function ls({activeId:t,items:s,isPrimaryBackgroundColor:n,previousItems:a}){const{isCollapsible:i,recentConversationLimit:r}=xe(),d=s.slice(0,r);if(t){const o=s.findIndex(u=>u.id===t);o>r-1&&d.push(s[o])}return e.jsxs(k.div,{className:b(n&&"first:mt-0","relative mt-5 first:mt-0 last:mb-5"),layout:"position",initial:{height:"0",opacity:1,position:"relative"},animate:{height:"auto",opacity:1},transition:{type:"spring",stiffness:225,damping:15,mass:1},children:[e.jsx(k.div,{className:"sticky top-0 z-20",layout:"position",children:e.jsx("span",{className:"flex h-9 items-center",children:e.jsx(pe,{children:e.jsx(v,{id:"VbQeVG",defaultMessage:"Recent"})})})}),e.jsx("ol",{children:d.map((o,u)=>{const f=t===o.id,l=u===0,m=a==null?void 0:a.find(({id:h})=>h===o.id);return e.jsx(Ie,{item:o,isActive:f,isFirstItem:l,isExistingItem:!!m,isPrimaryBackgroundColor:n},`history-item-${o.id}`)})}),i&&e.jsx(ut,{type:"more",onClick:B.toggleHistoryCollapsed})]})}const cs=Ee.memo(os),ds=Ge.div`flex flex-col gap-2 pb-2 text-token-text-primary text-sm mt-5
${({$centered:t})=>t&&"h-full justify-center items-center empty:hidden"}`;function js({clientThreadId:t,onNewThread:s}){const n=Ot(t),a=le(),{isUnauthenticated:i}=ue(),r=Lt(t),d=Oe();return i?null:e.jsxs(e.Fragment,{children:[e.jsx(mt,{onNewThread:s}),a!=null&&a.canInteractWithGizmos()?e.jsx($t,{currentGizmoId:r}):e.jsx(je,{}),!i&&e.jsx(cs,{activeId:d?void 0:n,isInPopover:!1})]})}function Ns({className:t,onNewThread:s}){const n=A(),a=de(),i=fe(),r=Le(()=>navigator.windowControlsOverlay);return e.jsxs("div",{className:b("flex",r!=null&&r.visible&&r.getTitlebarAreaRect().left>0?"justify-end":"justify-between",t),children:[e.jsx(Q,{sideOffset:4,label:n.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),className:"flex",side:"right",children:e.jsx(ft,{className:"no-draggable","aria-label":n.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),onClick:()=>{a?B.toggleNavSidebar():B.togglePopoverNavSidebar()},icon:a?kt:wt,surfaceContext:"secondary","data-testid":"close-sidebar-button"})}),!i&&e.jsx(At,{onClick:s,testId:"create-new-chat-button"})]})}export{js as C,$t as G,cs as H,je as S,Ns as a,Qt as o};
//# sourceMappingURL=cstv0hdfywyxa4xg.js.map