const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/e9q4jkuzzj1ue4wh.js","assets/f2udakjpoavu4gos.js","assets/ml8qzer8gjkdgre1.js","assets/root-9jaremil.css","assets/sfdamp1qo3tlrbo9.js","assets/conversation-small-o3h1ik6j.css","assets/eoxk6jc1sihoamw3.js","assets/bf4mygkz70y2k44z.js","assets/dw4ohkztugv9vtln.js","assets/gcs5z8ilzi8p2z9x.js","assets/hdp76dkdga55bhk0.js","assets/bomnvk8yicq90eph.js","assets/gl0adgh982hb5wsf.js","assets/npkx6d28cct04tdy.js"])))=>i.map(i=>d[i]);
import{u as g,j as e,r as b,ak as r,dP as p,aW as x,aB as S,ao as m,ap as h,J as f,aG as v,a4 as j,aq as w,Z as I,aw as k,ag as C}from"./f2udakjpoavu4gos.js";import{cu as l,v as d,cv as N,cw as y,cx as A,cy as T,cz as G,cA as M,cB as P,cC as z,cD as _,bd as L,c8 as D,cE as E,a5 as u,a_ as B,cF as O,aY as F,aZ as U}from"./sfdamp1qo3tlrbo9.js";import{N as V,L as H,aV as R,aA as W}from"./ml8qzer8gjkdgre1.js";import{m as q}from"./bomnvk8yicq90eph.js";import{N as X}from"./gl0adgh982hb5wsf.js";function Y(){const s=l(d.SonicSidebar),[a,t]=b.useState(!1);return s.isLoading||!s.eligible?null:e.jsx(q.div,{className:"no-draggable group pb-0",whileTap:{scale:.98},children:e.jsx(J,{children:e.jsx(N,{href:"/search",target:"_blank",icon:e.jsx("div",{className:r("gizmo-shadow-stroke mr-[0.5] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-token-main-surface-primary align-middle text-token-text-primary"),children:e.jsx(y,{})}),label:"SearchGPT",hoverRightIcon:e.jsxs("div",{className:"flex gap-3",children:[e.jsx(K,{isOpen:a,setIsOpen:t,onDismiss:()=>s.markAsViewed()}),e.jsx(V,{className:r("icon-md text-token-text-tertiary",!a&&"invisible group-hover:visible")})]}),isMenuOpen:!1,loggingGizmoId:"search-gpt-sidebar"})})})}function Z(){const s=T(),a=l(d.hasSeenSncSidebarTooltip),t=G(),n=M(),{activeModals:i}=P(),o=z();return!a.isLoading&&a.eligible&&!t&&i.size===0&&!s&&!n&&!o}function J({children:s}){const a=Z(),t=l(d.hasSeenSncSidebarTooltip);return a?e.jsx(A,{side:"right",show:!0,badge:"new",title:"Try SearchGPT",onDismiss:t.markAsViewed,sideOffset:10,theme:"bright",description:"You're in. Get answers with real-time information from relevant sources, and ask follow-up questions.",children:e.jsx("div",{className:"w-full",children:s})}):e.jsx(e.Fragment,{children:s})}function K({isOpen:s,setIsOpen:a,onDismiss:t}){return e.jsx(p,{open:s,onOpenChange:a,triggerButton:e.jsx("button",{className:r("flex text-token-text-tertiary",s?"":"invisible group-hover:visible"),onClick:n=>{n.preventDefault()},children:e.jsx(H,{className:"icon-md"})}),children:e.jsx(x.Item,{onClick:n=>{n.preventDefault(),t()},children:e.jsx(S,{id:"sidebar.hideFromSidebar",defaultMessage:"Hide from sidebar"})})})}function Q(){const s=g("114024");return!s.value||s.isLoading?null:e.jsx(Y,{})}const $=m(()=>h(()=>import("./e9q4jkuzzj1ue4wh.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])).then(s=>s.FannyPackAction)),ee=m(()=>h(()=>import("./gcs5z8ilzi8p2z9x.js"),__vite__mapDeps([9,10,1,2,3,4,5,11,12,13])).then(s=>s.GizmoSidebarList));function re({clientThreadId:s,onNewThread:a}){const t=B(s),n=I(),{isUnauthenticated:i}=k(),o=O(s),c=C();return i?null:e.jsxs(e.Fragment,{children:[e.jsx(F,{onNewThread:a}),n?.canInteractWithGizmos()?e.jsx(ee,{currentGizmoId:o}):e.jsx(Q,{}),!1,!i&&e.jsx(U,{activeId:c?void 0:t})]})}function ce({className:s,onNewThread:a}){const t=f(),n=v(),i=_(),o=j(()=>navigator.windowControlsOverlay),{isFannyPackEnabled:c}=L();return e.jsxs("div",{className:r("flex",o?.visible&&o.getTitlebarAreaRect().left>0?"justify-end":"justify-between",s),children:[e.jsx(w,{sideOffset:4,label:t.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),className:"flex",side:"right",children:e.jsx(D,{className:"no-draggable","aria-label":t.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),onClick:()=>{E(n)?u.toggleNavSidebar():u.togglePopoverNavSidebar()},icon:R,mobileIcon:W,surfaceContext:"secondary","data-testid":"close-sidebar-button"})}),e.jsxs("div",{className:"flex",children:[c&&e.jsx($,{}),!i&&e.jsx(X,{onClick:a,testId:"create-new-chat-button"})]})]})}export{re as C,ce as S,Q as a};
//# sourceMappingURL=m016wm06yabd4ypw.js.map