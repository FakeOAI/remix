import{J as N,r as f,Z as I,j as e,aq as B,m as U,W as D,ak as S,bA as H,bB as K,cU as W,dP as q,aB as G,aU as M,aw as T,ee as C,au as Z,av as R,f3 as Q}from"./mj0lqn4ze2fljnbl.js";import{cg as V,fA as Y,ka as y,cA as J,bc as X,cV as $,kb as ee,kc as se,aY as A,f2 as te,cG as ae,kd as ne,eF as ie,a8 as re,f1 as oe,jh as le,ji as ce,q as de,ke as k,kf as b,kg as z,kh as ue,ki as g,cf as me,kj as ge,cK as fe,kk as pe,ek as xe,kl as F,aZ as O,km as Se,kn as he,ko as be,kp as j,kq as je,g3 as Ce,el as ve,a5 as ke,kr as ye,ks as ze,kt as Ne,fx as Ie,ku as Ge}from"./eufwkg2s3wcyxsss.js";import{aw as Me,K as Te,bf as Ae,L as Fe}from"./n88p71sdmouzlavs.js";import{m as P}from"./ezr4n9w03trmg6g9.js";import{a as Oe}from"./h5drv49qlmfjlq5f.js";import{U as Pe,P as Ee}from"./f2rh7g4htghtm7d6.js";function E({gizmo:s,historyDisabled:n,section:t,onClick:o,isActive:r,hideOverflowMenu:i=!1}){const c=N(),[d,m]=f.useState(!1),[a,l]=f.useState(!1),u=I(),p=!!s?.gizmo.tags?.includes(V.FirstParty),h=!1;let v=!1,x;if(s!=null)x=s.gizmo.display.name||Y;else{if(u==null)return null;n?x=c.formatMessage(y.clearChat):u.canInteractWithGizmos()?x=se:x=c.formatMessage({id:"GizmoSidebarListItem.newChat",defaultMessage:"New chat"})}return e.jsx(P.div,{whileTap:{scale:.98},onMouseEnter:()=>{l(!0)},onMouseLeave:()=>{l(!1)},children:e.jsx(J,{loggingGizmoId:s?.gizmo.id??"primary",href:s!=null?X(s):"/chatgpt/web/public",onClick:o,showActiveIndicator:v,icon:e.jsx($,{gizmoId:s?.gizmo.id,isFirstParty:s==null||p,src:s?.gizmo.display.profile_picture_url,gizmoEmoji:s?.gizmo.display.emoji,className:"h-6 w-6 flex-shrink-0"}),isMenuOpen:d,label:x,hoverRightIcon:e.jsxs("div",{className:"flex gap-2",children:[(a||d)&&s!=null&&!h&&!i&&e.jsx("div",{className:"text-token-text-tertiary",onClick:_=>{_.preventDefault()},children:e.jsx(ee,{gizmo:s,isOpen:d,setIsOpen:m,section:t})}),!i&&e.jsx(B,{side:"right",label:c.formatMessage(n?y.clearChat:y.newChat),className:"flex items-center",children:e.jsx("button",{className:d?"text-token-text-tertiary":"invisible text-token-text-secondary hover:text-token-text-primary group-hover:visible",children:n?e.jsx(Me,{className:"icon-md"}):e.jsx(Te,{className:"icon-md"})})})]})})})}function Le({isActive:s,isNewConversation:n}){const t=U(),o=D(),r=A();return e.jsx("div",{className:S(r?"":"bg-token-sidebar-surface-primary","pt-0"),children:e.jsx(E,{gizmo:void 0,isActive:s,onClick:i=>{H(K(t))&&!n&&(i.preventDefault(),te(o))}})})}function L(){const s=N(),n=ae(),t=s.formatMessage({id:"gizmo.exploreStoreEnabled",defaultMessage:"Explore GPTs"});return e.jsx(ne,{children:e.jsx(P.div,{whileTap:{scale:.98},children:e.jsx(W,{to:ie(),onClick:()=>{n.activeSidebar==="popover-nav"&&re.setActiveSidebar(!1)},children:e.jsx(oe,{icon:Ae,"data-testid":"explore-gpts-button",children:t})},"explore")})})}const we=2;function _e(s,n,t,o){const r=de(s,a=>a.flair.kind),i=[...r[k.FirstParty]?.map(({resource:a})=>({gizmo:a,section:b.Keep}))??[],...r[k.SidebarKeep]?.map(({resource:a})=>({gizmo:a,section:b.Keep}))??[],...r[k.Recent]?.slice(0,o?r[k.Recent]?.length:we).map(({resource:a})=>({gizmo:a,section:b.Recents}))??[]],c=i.length>t+1,d=(c||o)&&!n&&i.length>t?i.slice(0,t):i,m=[...d.filter(({section:a})=>a===b.Keep),...d.filter(({section:a})=>a===b.Recents)];return{listItems:n?m.slice(z):m,itemsLeft:i.length-d.length,needsToCollapseItems:c}}function w({gizmo:s,currentGizmoId:n,maxToShowOnLoad:t,hideOverflowMenu:o=!1}){const r=f.useRef(!1),i=!t,c=A(),{listItems:d}=_e(s,i,t??0,c);f.useEffect(()=>{d.length>0&&!r.current&&(le({namespace:ce.ChatPageLoad})?.logTiming("render_gizmo_sidebar"),r.current=!0)},[d]);function m(a,l){const u=e.jsx(E,{gizmo:a,isActive:a.gizmo.id===n,section:l,hideOverflowMenu:o},a.gizmo.id);return c?e.jsx("li",{children:u}):u}return e.jsxs("div",{children:[d.map(({gizmo:a,section:l},u)=>e.jsxs(f.Fragment,{children:[u>1&&l!==d[u-1].section&&e.jsx("div",{className:"my-2 ml-2 h-px w-7 bg-token-sidebar-surface-tertiary"}),m(a,l)]},u)),!c&&e.jsx(L,{})]})}function Be({currentGizmoId:s,gizmos:n,onClick:t}){const{isSidebarFlyoutOpen:o,onSidebarFlyoutOpenChange:r}=ue(),i=o(g.Gizmo);return e.jsx("div",{className:"group mt-1 flex w-full items-center justify-start",children:e.jsx(q,{onOpenChange:c=>r(g.Gizmo,c),side:"right",sideOffset:4,open:i,contentAlign:"end",triggerButton:e.jsxs("button",{className:S("flex flex-1 select-none items-center gap-2 rounded-lg px-2 py-2.5 text-sm tracking-condensed text-token-text-secondary hover:bg-token-main-surface-secondary focus:ring-0",i&&"bg-token-main-surface-secondary"),onClick:t,children:[e.jsx(Fe,{className:S("icon-md mr-1 font-semibold text-token-sidebar-icon")}),e.jsx("span",{className:"text-left",children:e.jsx(G,{id:"qTIiY/",defaultMessage:"See more"})})]}),size:"auto",children:e.jsx("div",{className:"max-h-[50dvh] overflow-x-auto px-2 [scrollbar-gutter:stable]",children:e.jsx(M,{children:e.jsx("ul",{className:"flex flex-col gap-0.5",children:e.jsx(w,{gizmo:n,currentGizmoId:s,hideOverflowMenu:!0})})})})})})}function Ue({currentGizmoId:s}){const{data:{gizmos:n}={}}=me();let t=n;const o=!t||t?.length===0,r=t&&t?.length>z;return o?null:e.jsx(e.Fragment,{children:e.jsxs(ge,{header:e.jsx("div",{className:"sticky top-[--sidebar-sticky-threshold] z-20",children:e.jsx(G,{id:"ZT2HVu",defaultMessage:"GPTs"})}),isLastInGroup:!0,children:[e.jsx(L,{}),e.jsx(Le,{isActive:s===void 0,isNewConversation:!0}),e.jsx(w,{gizmo:t??[],currentGizmoId:s,maxToShowOnLoad:z}),r&&e.jsx(M,{children:e.jsx(Be,{currentGizmoId:s,gizmos:t??[]})})]})})}function De({clientThreadId:s}){const n=I(),t=fe(s),{isUnauthenticated:o}=T();return o?null:e.jsxs("div",{className:S(C.screenContent),children:[null,e.jsx(pe,{clientThreadId:s}),n?.canInteractWithGizmos()?e.jsx(Ue,{currentGizmoId:t}):null]})}function He(){const s=I(),n=s?.data==null,{isUnauthenticated:t}=T(),{openSettings:o}=xe(),[r]=f.useState(()=>{const l=Z.getCookie(R.Workspace);return typeof l=="string"&&l!==Q}),i=N(),{store:c,actions:d}=F(),m=c(l=>l.mode);if(!s||r&&n)return null;const a=t?e.jsx(Pe,{}):e.jsx(Oe,{onClickSettings:()=>o()});return e.jsxs(O,{name:"user-profile-bar",className:"z-10 mb-[0.5px] grid-cols-[minmax(0,_1fr)_auto] px-sidebar-inline md:py-1.5",type:"primary",disableSizeTracking:!0,style:{"--bar-gap":"12px","--bar-background-color":"transparent"},children:[a,e.jsx("div",{className:C.togglePinWrapper,children:e.jsx(Se,{tooltipSideOffset:14,className:C.pinSidebarAction,icon:e.jsx(he,{}),onActivate:l=>{l.preventDefault(),l.persist(),be.togglePinSidebar(l,d,m===j.Floating?j.Pinned:j.Floating)},label:m===j.Floating?i.formatMessage({id:"b43Hkt",defaultMessage:"Pin Sidebar"}):i.formatMessage({id:"6m3n9w",defaultMessage:"Unpin Sidebar"}),htmlFor:je.FloatingOrPinned})})]})}function Ke(){return e.jsx(O,{className:"z-10 px-sidebar-inline pb-0.5",type:"primary",disableSizeTracking:!0,style:{"--bar-gap":"12px","--bar-background-color":"transparent"},children:e.jsx(Ee,{})})}function We(){return e.jsxs(Ce,{className:S(C.screenTrailingBarContainer),children:[e.jsx(ve,{}),e.jsx(Ke,{}),e.jsx(He,{})]})}function Je(){const{clientThreadId:s,onNewThread:n}=ke(),[t,o]=f.useState(!1),[r,i]=f.useState(!1),[c,d]=f.useState(!1),{store:m,actions:a}=F(),l=f.useCallback(p=>p===g.Conversation?t:p===g.Gizmo?r:p===g.Conversation2?c:!1,[t,r,c]),u=f.useCallback((p,h)=>{const v=x=>{p===g.Conversation?o(x):p===g.Gizmo?i(x):p===g.Conversation2&&d(x)};if(h){v(h);return}setTimeout(()=>{v(h)},100)},[]);return ye(()=>{u(g.Conversation,!1),u(g.Gizmo,!1),u(g.Conversation2,!1),window.matchMedia("(max-width: 700px)").matches&&m.getState().mode===j.Floating&&setTimeout(()=>{a.closeSidebar()},100)}),e.jsxs(ze,{value:{isSidebarFlyoutOpen:l,onSidebarFlyoutOpenChange:u},children:[e.jsx(Ne,{}),e.jsx(Ie,{anchor:"vertical",className:S(C.screen,"popover flex-1 border-r border-r-token-border-xlight"),name:"sidebar",leading:e.jsx(Ge,{onNewThread:n}),trackLeading:!0,trailing:e.jsx(We,{}),children:e.jsx(De,{clientThreadId:s})})]})}export{Je as C,Le as D,w as G};
//# sourceMappingURL=kbkjudgjs8kwjh01.js.map