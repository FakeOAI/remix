const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/joi7dcdl081g28sb.js","assets/bve7stqsvuyp30oy.js","assets/jza0wh4acfmo8aml.js","assets/root-cqviwlml.css","assets/ey0wg4za1oyqifqv.js","assets/conversation-small-cll5buey.css","assets/bjwgpmz8eum4ecp2.js","assets/lk3ytoqve6n2hksk.js","assets/horqi5aemy4xy4nt.js","assets/deec37q0oqrigjkr.js","assets/25r7helde3zylny5.js","assets/lcsvs3nxna2cdwpx.js","assets/ljvnn957d5onfwd2.js","assets/j6nq6u5ihk30ar3w.js","assets/hrqe6do46mwmf9ae.js","assets/k7lt6oz9l3iwjqtk.js","assets/i89pgfm9i14vzvt1.js"])))=>i.map(i=>d[i]);
import{a6 as e,ar as l,aG as D,b6 as _,an as U,r as d,b0 as G,aE as O,aF as M,a3 as E,aB as F,eL as n,az as W,aA as V,eI as q,aj as T,bR as K,aY as k,cF as $,ak as Y}from"./bve7stqsvuyp30oy.js";import{jl as J,jm as L,bc as Q,bd as X,jn as Z,jo as ee,fL as se,jp as ae,cb as te,jq as ne,cR as re,f1 as ie,gW as w,d5 as j,d3 as A,jr as oe,js as ce,d4 as P,fu as de,jt as le,bs as ue,cq as me,ju as he,jv as fe,fF as ge}from"./ey0wg4za1oyqifqv.js";import{u as y,i as xe}from"./deec37q0oqrigjkr.js";import{B as be}from"./lk3ytoqve6n2hksk.js";import{a0 as pe,aM as Se,aL as je,by as ye,$ as Ce}from"./jza0wh4acfmo8aml.js";import{U as ve}from"./g0s8drn05osbnes9.js";import{u as Ne}from"./k7lt6oz9l3iwjqtk.js";function Ie({onConversationChanged:s}){const{clientThreadId:a}=y();J({source:a,enabled:!!s,onChange:s})}function ke({onConversationChanged:s}){Ie({onConversationChanged:s})}function _e({onClick:s}){const{clientThreadId:a}=y(),{isSidebarFlyoutOpen:t,onSidebarFlyoutOpenChange:r}=L();return e.jsx("div",{className:"group mt-1 flex w-full items-center justify-start",children:e.jsx(be,{onOpenChange:r,side:"right",sideOffset:4,open:t,contentAlign:"end",triggerButton:e.jsxs("button",{className:l("flex flex-1 select-none items-center gap-2 rounded-lg px-2 py-2.5 text-sm tracking-condensed text-token-text-secondary hover:bg-token-main-surface-secondary focus:ring-0",t&&"bg-token-main-surface-secondary"),onClick:s,children:[e.jsx(pe,{className:l("icon-md mr-1 font-semibold text-token-sidebar-icon")}),e.jsx("span",{className:"text-left",children:e.jsx(D,{id:"25xE8F",defaultMessage:"See more"})})]}),size:"auto",children:e.jsx("div",{className:"max-h-[50dvh] overflow-x-auto px-2 [scrollbar-gutter:stable]",children:e.jsx(_,{children:e.jsx(Q,{activeId:a,hideOverflowMenu:!0})})})})})}function Oe({clientThreadId:s}){const a=X(s),t=U(),{isCollapsible:r,recentConversationLimit:u}=Z(),i={recentConversationLimit:u},m=d.useRef(!1),f=!0,{conversations:h,data:o,isLoading:g,isError:b,recents:c,refetch:C}=ee(i),[R,v]=d.useState(!0),N=d.useCallback(function(p){p===void 0&&v(!1),C({cancelRefetch:!0})},[C,v]),B=t?void 0:a,H=h.length===0,I=b||o===void 0&&!g&&m.current,z=!I&&(o===void 0||g);return o===void 0&&!g&&!m.current&&(m.current=!0,N(!0)),d.useMemo(()=>{se.publish({kind:"refreshHistory",conversations:h})},[h]),e.jsxs(e.Fragment,{children:[I&&e.jsx(ae,{showRetry:R,refetch:N}),!H&&e.jsx(te,{header:c.label,isLastInGroup:!0,children:c.items.map((x,p)=>e.jsx(ne,{item:x,isActive:x.id===B,testId:`history-item-${p}`},x.id))}),z&&e.jsx(G,{className:"sticky top-4 z-30 mt-4 justify-self-center"}),r&&e.jsx(_,{children:e.jsx("div",{className:"-ml-2 mb-5",children:e.jsx("div",{hidden:!f,className:l(!f),children:e.jsx(_e,{})})})})]})}const Me=O(()=>M(()=>import("./joi7dcdl081g28sb.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])).then(s=>s.GizmoSidebarList));function Ee({clientThreadId:s}){const a=E(),t=re(s),{isUnauthenticated:r}=F();return r?null:e.jsxs("div",{className:l(n.screenContent),children:[null,e.jsx(Oe,{clientThreadId:s}),a?.canInteractWithGizmos()?e.jsx(Me,{currentGizmoId:t}):null]})}function Fe(){const s=E(),a=s?.data==null,{isUnauthenticated:t}=F(),{openSettings:r}=ie(),[u]=d.useState(()=>{const o=W.getCookie(V.Workspace);return typeof o=="string"&&o!==q}),i=T(),{store:m}=w(),f=m(o=>o.mode);if(!s||u&&a)return null;const h=t?e.jsx(ve,{}):e.jsx(xe,{onClickSettings:()=>r()});return e.jsxs(j,{name:"user-profile-bar",className:"z-10 mb-[0.5px] grid-cols-[minmax(0,_1fr)_auto] px-sidebar-inline md:py-1.5",type:"primary",disableSizeTracking:!0,style:{"--bar-gap":"12px","--bar-background-color":"transparent"},children:[h,e.jsx("div",{className:n.togglePinWrapper,children:e.jsx(A,{tooltipSideOffset:14,className:n.pinSidebarAction,icon:e.jsx(oe,{}),label:f===ce.Floating?i.formatMessage({id:"b43Hkt",defaultMessage:"Pin Sidebar"}):i.formatMessage({id:"6m3n9w",defaultMessage:"Unpin Sidebar"}),htmlFor:P.FloatingOrPinned})})]})}function Te(){return e.jsx(de,{className:l(n.screenTrailingBarContainer),children:e.jsx(Fe,{})})}const Le=O(()=>M(()=>import("./hrqe6do46mwmf9ae.js"),__vite__mapDeps([14,1,2,3,4,5,15,16])).then(s=>s.FannyPackIconButton));function we({onNewThread:s}){const a=T(),t=d.useRef(null),{store:r,actions:u}=w(),i=r(c=>c.isSidebarOpen),{isSidebarFlyoutOpen:m}=L(),f=i&&!m;function h(){t.current&&getComputedStyle(t.current)?.getPropertyValue("--sidebar_should_light_dismiss")==="1"&&u.closeSidebar()}le({checkElement:c=>c?.tagName==="NAV",enabled:f,onLightDismiss:h});const{isFannyPackEnabled:o}=ue(),{searchMsg:g,shortcutMsg:b}=Ne();return K(),e.jsxs(e.Fragment,{children:[e.jsx(j,{type:"primary",className:l(n.screenHeader),children:e.jsxs("div",{className:"mt-[3px] flex min-h-[var(--screen-thread-header-min-height)] w-full flex-1 items-center justify-between pl-[9px]",ref:t,children:[e.jsx("div",{className:"grid items-center gap-1",children:e.jsx(A,{className:l(n.closeSidebarAction),style:{viewTransitionName:"var(--vt_toggle_sidebar_opened)"},icon:e.jsxs(e.Fragment,{children:[e.jsx(Se,{className:n.sidebarIcon,style:{display:"var(--screen-size-hidden-on-compact-mode)"}}),e.jsx(je,{className:n.sidebarIcon,style:{display:"var(--screen-size-hidden-on-wide-mode)"}})]}),label:a.formatMessage(S.closeSidebar),htmlFor:P.OpenOrClosed,tooltipSideOffset:4})}),e.jsxs("div",{className:"flex items-center gap-3",children:[!1,o&&e.jsx(k,{label:e.jsxs("div",{children:[g,e.jsx("div",{className:"text-sm font-normal text-token-text-secondary",children:b})]}),children:e.jsx(Le,{className:n.searchAction,icon:e.jsx(ye,{className:n.sidebarIcon})})}),e.jsx(k,{label:a.formatMessage(S.newChat),children:e.jsx($,{to:"/",onClick:c=>{c.preventDefault(),s()},children:e.jsx(me,{icon:e.jsx(Ce,{style:{viewTransitionName:"var(--vt_new_chat_sidebar)"},className:n.sidebarIcon}),className:n.searchAction,label:a.formatMessage(S.newChat)})})})]})]})}),e.jsx(j,{type:"primary",className:n.bucketBar,disableSizeTracking:!0,children:" "})]})}const S=Y({newChat:{id:"NUNaGU",defaultMessage:"New chat"},closeSidebar:{id:"fM0vj3",defaultMessage:"Close Sidebar"}});function Ge(){const{clientThreadId:s,onNewThread:a}=y(),[t,r]=d.useState(!1),u=d.useCallback(i=>{if(i){r(i);return}setTimeout(()=>{r(i)},100)},[]);return ke({onConversationChanged:()=>{r(!1)}}),e.jsxs(he,{value:{isSidebarFlyoutOpen:t,onSidebarFlyoutOpenChange:u},children:[e.jsx(fe,{}),e.jsx(ge,{anchor:"vertical",className:l(n.screen,"popover flex-1 border-r border-r-token-border-xlight"),name:"sidebar",leading:e.jsx(we,{onNewThread:a}),trackLeading:!0,trailing:e.jsx(Te,{}),children:e.jsx(Ee,{clientThreadId:s})})]})}export{Ge as C};
//# sourceMappingURL=oo951sd2uzdnq87d.js.map