const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mqc0prjk36zcvx0q.js","assets/fdeezme0a1kjg5dr.js","assets/l2x363deltqu16i4.js","assets/root-nwhmkg2b.css","assets/ogztjg6i1ufex94l.js","assets/conversation-small-ogafjggy.css","assets/pfbppc22n2u0bv2y.js","assets/lq8ha7xgc6dhz3qs.js","assets/petfx4755egr0cyi.js"])))=>i.map(i=>d[i]);
import{aD as M,aE as y,a as z,bE as k,l as e,e6 as w,e7 as L,$ as u,X as A,r as d,aN as T,a0 as E,ci as _,m as D}from"./fdeezme0a1kjg5dr.js";import{b$ as P,c0 as I,c1 as U,c2 as F,c3 as O,a0 as B,c4 as H,c5 as K,c as q,aD as S,c6 as Q,c7 as V,c8 as Z,Z as j,c9 as W,ca as X,X as $,D as J,ag as R,cb as Y,_ as ee,cc as v}from"./ogztjg6i1ufex94l.js";import{G as se}from"./b8v3r0eino5ptimr.js";import{p as te,c as ie,m as ae,G as ne}from"./pfbppc22n2u0bv2y.js";import{ae as re,Y as oe,L as C,I as le,J as ce,aQ as me}from"./l2x363deltqu16i4.js";import{a as de}from"./ig6jcpehopp4zwor.js";import{m as N}from"./petfx4755egr0cyi.js";import"./lq8ha7xgc6dhz3qs.js";import"./dlisjo8whjafcpn1.js";import"./erjk1ajsgwn16yrn.js";import"./oh1k8tgivjfm54y4.js";import"./nd6xfjvh4k7xojtv.js";import"./esyjtlhkqh9o3cyb.js";import"./k3ysicyyg2y0bmh1.js";import"./bcqadoqnri3facm3.js";const ue=M(()=>y(()=>import("./mqc0prjk36zcvx0q.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])).then(s=>s.GizmoKeepInSidebarMenuItem));var pe=(s=>(s[s.Keep=0]="Keep",s[s.Recents=1]="Recents",s))(pe||{});const ge=2;function xe({isActive:s,isNewConversation:a}){const n=z(),r=k();return e.jsx("div",{className:"bg-token-sidebar-surface-primary pt-0",children:e.jsx(G,{gizmo:void 0,isActive:s,onClick:i=>{w(L(n))&&!a&&(i.preventDefault(),P(r))}})})}function he(s,a,n){const r=ee(s,t=>t.flair.kind),i=[...r[v.FirstParty]?.map(({resource:t})=>({gizmo:t,section:0}))??[],...r[v.SidebarKeep]?.map(({resource:t})=>({gizmo:t,section:0}))??[],...r[v.Recent]?.slice(0,ge).map(({resource:t})=>({gizmo:t,section:1}))??[]],l=i.length>n+1,c=l&&!a&&i.length>n?i.slice(0,n):i;return{listItems:[...c.filter(({section:t})=>t===0),...c.filter(({section:t})=>t===1)],itemsLeft:i.length-c.length,needsToCollapseItems:l}}function b({gizmo:s,currentGizmoId:a}){const n=d.useRef(!1),r=S(),i=S(o=>!Q.isGptListCollapsed(o)),c=I()?5:4,{itemsLeft:g,listItems:t,needsToCollapseItems:x}=he(s,i,c);d.useEffect(()=>{t.length>0&&!n.current&&(V({namespace:Z.ChatPageLoad})?.logTiming("render_gizmo_sidebar"),n.current=!0)},[t]);function h(o,m){return e.jsx(G,{gizmo:o,isActive:o.gizmo.id===a,section:m},o.gizmo.id)}return e.jsxs("div",{children:[t.map(({gizmo:o,section:m},f)=>e.jsxs(d.Fragment,{children:[f>1&&m!==t[f-1].section&&e.jsx("div",{className:"my-2 ml-2 h-px w-7 bg-token-sidebar-surface-tertiary"}),h(o,m)]},f)),x?e.jsxs("button",{onClick:j.toggleGptListCollapsed,className:"flex h-10 w-full items-center gap-2 rounded-lg px-2 text-sm text-token-text-primary hover:bg-token-sidebar-surface-secondary",children:[e.jsx("div",{className:"flex h-6 w-6 flex-shrink-0 items-center justify-center",children:e.jsx(C,{className:"icon-md text-token-text-primary"})}),e.jsx("div",{className:"flex grow items-center gap-1",children:i?e.jsxs(e.Fragment,{children:[e.jsx(u,{id:"GizmoSidebarList.showLess",defaultMessage:"See less"}),e.jsx(le,{className:"icon-xs"})]}):e.jsxs(e.Fragment,{children:[e.jsx(u,{id:"GizmoSidebarList.showMoreItems",defaultMessage:"{numMore} more",values:{numMore:g}}),e.jsx(ce,{className:"icon-xs"})]})})]}):null,!1,e.jsx(W,{children:e.jsx(N.div,{whileTap:{scale:.98},children:e.jsx(_,{to:ae(),onClick:()=>{r.activeSidebar==="popover-nav"&&j.setActiveSidebar(!1)},children:e.jsx(X,{icon:me,"data-testId":"explore-gpts-button",children:e.jsx(u,{...p.exploreStoreEnabled})})},"explore")})})]})}function Te({currentGizmoId:s}){const{data:{gizmos:a}={}}=te(),n=I(),r=U(),[i]=F({onChange:l=>{d.startTransition(()=>{j.setGptListVisible(l)})}});return n?a!=null?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"sticky top-[--sidebar-sticky-threshold] z-20",ref:i,children:e.jsx("span",{className:"flex h-9 items-center",children:e.jsx(O,{children:e.jsx(u,{id:"ZT2HVu",defaultMessage:"GPTs"})})})}),e.jsx(b,{gizmo:a,currentGizmoId:s})]}):null:e.jsxs(e.Fragment,{children:[!r&&e.jsx(xe,{isActive:s===void 0,isNewConversation:!0}),e.jsx(de,{}),a!=null?e.jsx(b,{gizmo:a,currentGizmoId:s}):null]})}function fe({gizmo:s,isOpen:a,setIsOpen:n,section:r}){const i=z();return e.jsxs($,{open:a,onOpenChange:n,triggerButton:e.jsx("button",{className:D("flex text-token-text-secondary hover:text-token-text-primary",a?"":"invisible group-hover:visible"),children:e.jsx(C,{className:"icon-md"})}),contentAlign:"start",sideOffset:4,alignOffset:-4,size:"auto",children:[r===1&&e.jsx(J.Item,{onClick:async()=>{await R.updateGizmoSidebar(i,ne,s.gizmo.id,"keep")},children:e.jsx(u,{...p.keepInSidebar})}),e.jsx(ue,{gizmoResource:s})]})}function G({gizmo:s,historyDisabled:a,section:n,onClick:r}){const i=A(),[l,c]=d.useState(!1),[g,t]=d.useState(!1),x=T(),h=!!s?.gizmo.tags?.includes(B.FirstParty);let o;if(s!=null)o=s.gizmo.display.name||H;else{if(x==null)return null;a?o=i.formatMessage(p.clearChat):x.canInteractWithGizmos()?o=Y:o=i.formatMessage({id:"GizmoSidebarListItem.newChat",defaultMessage:"New chat"})}return e.jsx(N.div,{whileTap:{scale:.98},onMouseEnter:()=>{t(!0)},onMouseLeave:()=>{t(!1)},children:e.jsx(K,{loggingGizmoId:s?.gizmo.id??"primary",href:s!=null?ie(s):"/",onClick:r,icon:e.jsx(se,{isFirstParty:s==null||h,src:s?.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),isMenuOpen:l,label:o,hoverRightIcon:e.jsxs("div",{className:"flex gap-2",children:[(g||l)&&s!=null&&e.jsx("div",{className:"text-token-text-tertiary",onClick:m=>{m.preventDefault()},children:e.jsx(fe,{gizmo:s,isOpen:l,setIsOpen:c,section:n})}),e.jsx(q,{side:"right",label:i.formatMessage(a?p.clearChat:p.newChat),className:"flex items-center",children:e.jsx("button",{className:l?"text-token-text-tertiary":"invisible text-token-text-secondary hover:text-token-text-primary group-hover:visible",children:a?e.jsx(re,{className:"icon-md"}):e.jsx(oe,{className:"icon-md"})})})]})})})}const p=E({exploreStoreEnabled:{id:"gizmo.exploreStoreEnabled",defaultMessage:"Explore GPTs"},keepInSidebar:{id:"gizmo.keepInSidebar",defaultMessage:"Keep in sidebar"},newChat:{id:"gizmo.newChat",defaultMessage:"New chat"},clearChat:{id:"gizmo.clearChat",defaultMessage:"Clear chat"}});export{xe as DefaultGPTSidebarListItem,Te as GizmoSidebarList,G as GizmoSidebarListItem,pe as SidebarSection,p as sidebarMessages};
//# sourceMappingURL=ma7y0qi6uw4n8xey.js.map