const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/bq8xfcm8vbwri2it.js","assets/bve7stqsvuyp30oy.js","assets/jza0wh4acfmo8aml.js","assets/root-cqviwlml.css","assets/lk3ytoqve6n2hksk.js","assets/ey0wg4za1oyqifqv.js","assets/conversation-small-cll5buey.css"])))=>i.map(i=>d[i]);
import{aE as k,aF as M,j,Z as y,a6 as e,ar as z,bJ as E,bK as w,aG as x,aj as _,r as g,a3 as L,aY as T,ak as P,cF as F}from"./bve7stqsvuyp30oy.js";import{c8 as v,c9 as D,ca as B,cb as O,bt as U,cc as K,cd as H,bo as q,bu as Z,ce as J,cf as Q,cg as V,ch as W,bD as Y,U as $,ci as X,cj as R,ck as ee,cl as te,B as se,cm as f}from"./ey0wg4za1oyqifqv.js";import{aI as ie,$ as ae,aJ as ne,a0 as re}from"./jza0wh4acfmo8aml.js";import{a as oe}from"./bjwgpmz8eum4ecp2.js";import{B as le,D as ce}from"./lk3ytoqve6n2hksk.js";import{m as I}from"./horqi5aemy4xy4nt.js";import"./deec37q0oqrigjkr.js";import"./25r7helde3zylny5.js";import"./lcsvs3nxna2cdwpx.js";import"./ljvnn957d5onfwd2.js";import"./j6nq6u5ihk30ar3w.js";const me=k(()=>M(()=>import("./bq8xfcm8vbwri2it.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(t=>t.GizmoKeepInSidebarMenuItem));var de=(t=>(t[t.Keep=0]="Keep",t[t.Recents=1]="Recents",t))(de||{});const ue=2;function b({isActive:t,isNewConversation:a}){const s=j(),n=y(),r=v();return e.jsx("div",{className:z(r?"":"bg-token-sidebar-surface-primary","pt-0"),children:e.jsx(G,{gizmo:void 0,isActive:t,onClick:o=>{E(w(s))&&!a&&(o.preventDefault(),D(n))}})})}function pe(t,a,s){const n=se(t,i=>i.flair.kind),r=[...n[f.FirstParty]?.map(({resource:i})=>({gizmo:i,section:0}))??[],...n[f.SidebarKeep]?.map(({resource:i})=>({gizmo:i,section:0}))??[],...n[f.Recent]?.slice(0,ue).map(({resource:i})=>({gizmo:i,section:1}))??[]],o=r.length>s+1,l=o&&!a&&r.length>s?r.slice(0,s):r;return{listItems:[...l.filter(({section:i})=>i===0),...l.filter(({section:i})=>i===1)],itemsLeft:r.length-l.length,needsToCollapseItems:o}}function S({gizmo:t,currentGizmoId:a}){const s=g.useRef(!1),n=J(),r=!1,o=v(),l=o?5:4,{listItems:d}=pe(t,r,l);g.useEffect(()=>{d.length>0&&!s.current&&(Q({namespace:V.ChatPageLoad})?.logTiming("render_gizmo_sidebar"),s.current=!0)},[d]);function i(c,u){const m=e.jsx(G,{gizmo:c,isActive:c.gizmo.id===a,section:u},c.gizmo.id);return o?e.jsx("li",{children:m}):m}return e.jsxs("div",{children:[d.map(({gizmo:c,section:u},m)=>e.jsxs(g.Fragment,{children:[m>1&&u!==d[m-1].section&&e.jsx("div",{className:"my-2 ml-2 h-px w-7 bg-token-sidebar-surface-tertiary"}),i(c,u)]},m)),e.jsx(W,{children:e.jsx(I.div,{whileTap:{scale:.98},children:e.jsx(F,{to:Y(),onClick:()=>{n.activeSidebar==="popover-nav"&&$.setActiveSidebar(!1)},children:e.jsx(X,{icon:ne,"data-testid":"explore-gpts-button",children:e.jsx(x,{...h.exploreStoreEnabled})})},"explore")})})]})}function Ne({currentGizmoId:t}){const{data:{gizmos:a}={}}=B();let s=a;return v()?s!=null?e.jsx(e.Fragment,{children:e.jsxs(O,{header:e.jsx("div",{className:"sticky top-[--sidebar-sticky-threshold] z-20",children:e.jsx(x,{id:"ZT2HVu",defaultMessage:"GPTs"})}),isLastInGroup:!0,children:[e.jsx(b,{isActive:t===void 0,isNewConversation:!0}),e.jsx(S,{gizmo:s,currentGizmoId:t})]})}):null:e.jsxs(e.Fragment,{children:[e.jsx(b,{isActive:t===void 0,isNewConversation:!0}),e.jsx(oe,{}),s!=null?e.jsx(S,{gizmo:s,currentGizmoId:t}):null]})}function ge({gizmo:t,isOpen:a,setIsOpen:s,section:n}){const r=j();return e.jsxs(le,{open:a,onOpenChange:s,triggerButton:e.jsx("button",{className:z("flex text-token-text-secondary hover:text-token-text-primary",a?"":"invisible group-hover:visible"),children:e.jsx(re,{className:"icon-md"})}),contentAlign:"start",sideOffset:4,alignOffset:-4,size:"auto",children:[n===1&&e.jsx(ce.Item,{onClick:async()=>{await R.updateGizmoSidebar(r,ee,t.gizmo.id,"keep")},children:e.jsx(x,{...h.keepInSidebar})}),e.jsx(me,{gizmoResource:t})]})}function G({gizmo:t,historyDisabled:a,section:s,onClick:n,isActive:r}){const o=_(),[l,d]=g.useState(!1),[i,c]=g.useState(!1),u=L(),m=!!t?.gizmo.tags?.includes(U.FirstParty),C=!1;let N=!1,p;if(t!=null)p=t.gizmo.display.name||K;else{if(u==null)return null;a?p=o.formatMessage(h.clearChat):u.canInteractWithGizmos()?p=te:p=o.formatMessage({id:"GizmoSidebarListItem.newChat",defaultMessage:"New chat"})}return e.jsx(I.div,{whileTap:{scale:.98},onMouseEnter:()=>{c(!0)},onMouseLeave:()=>{c(!1)},children:e.jsx(H,{loggingGizmoId:t?.gizmo.id??"primary",href:t!=null?q(t):"/",onClick:n,showActiveIndicator:N,icon:e.jsx(Z,{gizmoId:t?.gizmo.id,isFirstParty:t==null||m,src:t?.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),isMenuOpen:l,label:p,hoverRightIcon:e.jsxs("div",{className:"flex gap-2",children:[(i||l)&&t!=null&&!C&&e.jsx("div",{className:"text-token-text-tertiary",onClick:A=>{A.preventDefault()},children:e.jsx(ge,{gizmo:t,isOpen:l,setIsOpen:d,section:s})}),e.jsx(T,{side:"right",label:o.formatMessage(a?h.clearChat:h.newChat),className:"flex items-center",children:e.jsx("button",{className:l?"text-token-text-tertiary":"invisible text-token-text-secondary hover:text-token-text-primary group-hover:visible",children:a?e.jsx(ie,{className:"icon-md"}):e.jsx(ae,{className:"icon-md"})})})]})})})}const h=P({exploreStoreEnabled:{id:"gizmo.exploreStoreEnabled",defaultMessage:"Explore GPTs"},keepInSidebar:{id:"gizmo.keepInSidebar",defaultMessage:"Keep in sidebar"},newChat:{id:"gizmo.newChat",defaultMessage:"New chat"},clearChat:{id:"gizmo.clearChat",defaultMessage:"Clear chat"}});export{b as DefaultGPTSidebarListItem,Ne as GizmoSidebarList,G as GizmoSidebarListItem,de as SidebarSectionType,h as sidebarMessages};
//# sourceMappingURL=joi7dcdl081g28sb.js.map