const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/hlb7i021a3wivdeu.js","assets/bx2z9ivcrsrexei9.js","assets/kdf6ofrec7z23k2d.js","assets/root-c7p9nir8.css","assets/i5qnifwt29u1ntiz.js","assets/hfnzsjsy2v8td6lt.js","assets/conversation-small-kig9eefw.css","assets/ieli56gcvxx4ptw4.js","assets/dunhbzxyeq2iaj0t.js","assets/ff1locaonhpi5m3y.js"])))=>i.map(i=>d[i]);
import{aE as M,aF as y,a as z,bH as k,l as e,ec as w,ed as L,a0 as p,W as A,r as d,aO as T,a1 as E,cp as _,m as P}from"./bx2z9ivcrsrexei9.js";import{c4 as F,c5 as I,c6 as U,c7 as D,c8 as O,Y as B,c9 as H,ca as K,c as V,aJ as S,cb as q,cc as W,cd as J,V as j,ce as Q,cf as Z,ad as R,cg as Y,W as X,ch as v}from"./hfnzsjsy2v8td6lt.js";import{G as $}from"./oy2symtxzifuy88b.js";import{p as ee,c as se,m as te,G as ie}from"./ieli56gcvxx4ptw4.js";import{aJ as ae,V as ne,aa as C,ad as re,ae as oe,aK as le}from"./kdf6ofrec7z23k2d.js";import{a as ce}from"./5rw6pjjwo2n59iv4.js";import{B as me,D as de}from"./i5qnifwt29u1ntiz.js";import{m as N}from"./ff1locaonhpi5m3y.js";import"./dunhbzxyeq2iaj0t.js";import"./kn78gnrl705comyt.js";import"./i82cgvuhknralmgw.js";import"./grj2e07lzpc66mp6.js";import"./jbw8lv7f8qhm0v5u.js";import"./lfr59nmx2d0ea1em.js";import"./otb1kwtamb5qovry.js";import"./cl4pe3mdfiybgkke.js";import"./n6yoqi4rb6b4hqdr.js";import"./k6z5o3o7hknz4a9g.js";import"./dcvgvpmhthpprpks.js";import"./lejurgig1py1s6jm.js";const pe=M(()=>y(()=>import("./hlb7i021a3wivdeu.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(s=>s.GizmoKeepInSidebarMenuItem));var ue=(s=>(s[s.Keep=0]="Keep",s[s.Recents=1]="Recents",s))(ue||{});const ge=2;function xe({isActive:s,isNewConversation:a}){const n=z(),r=k();return e.jsx("div",{className:"bg-token-sidebar-surface-primary pt-0",children:e.jsx(G,{gizmo:void 0,isActive:s,onClick:i=>{w(L(n))&&!a&&(i.preventDefault(),F(r))}})})}function he(s,a,n){const r=X(s,t=>t.flair.kind),i=[...r[v.FirstParty]?.map(({resource:t})=>({gizmo:t,section:0}))??[],...r[v.SidebarKeep]?.map(({resource:t})=>({gizmo:t,section:0}))??[],...r[v.Recent]?.slice(0,ge).map(({resource:t})=>({gizmo:t,section:1}))??[]],l=i.length>n+1,c=l&&!a&&i.length>n?i.slice(0,n):i;return{listItems:[...c.filter(({section:t})=>t===0),...c.filter(({section:t})=>t===1)],itemsLeft:i.length-c.length,needsToCollapseItems:l}}function b({gizmo:s,currentGizmoId:a}){const n=d.useRef(!1),r=S(),i=S(o=>!q.isGptListCollapsed(o)),c=I()?5:4,{itemsLeft:g,listItems:t,needsToCollapseItems:x}=he(s,i,c);d.useEffect(()=>{t.length>0&&!n.current&&(W({namespace:J.ChatPageLoad})?.logTiming("render_gizmo_sidebar"),n.current=!0)},[t]);function h(o,m){return e.jsx(G,{gizmo:o,isActive:o.gizmo.id===a,section:m},o.gizmo.id)}return e.jsxs("div",{children:[t.map(({gizmo:o,section:m},f)=>e.jsxs(d.Fragment,{children:[f>1&&m!==t[f-1].section&&e.jsx("div",{className:"my-2 ml-2 h-px w-7 bg-token-sidebar-surface-tertiary"}),h(o,m)]},f)),x?e.jsxs("button",{onClick:j.toggleGptListCollapsed,className:"flex h-10 w-full items-center gap-2 rounded-lg px-2 text-sm text-token-text-primary hover:bg-token-sidebar-surface-secondary",children:[e.jsx("div",{className:"flex h-6 w-6 flex-shrink-0 items-center justify-center",children:e.jsx(C,{className:"icon-md text-token-text-primary"})}),e.jsx("div",{className:"flex grow items-center gap-1",children:i?e.jsxs(e.Fragment,{children:[e.jsx(p,{id:"GizmoSidebarList.showLess",defaultMessage:"See less"}),e.jsx(re,{className:"icon-xs"})]}):e.jsxs(e.Fragment,{children:[e.jsx(p,{id:"GizmoSidebarList.showMoreItems",defaultMessage:"{numMore} more",values:{numMore:g}}),e.jsx(oe,{className:"icon-xs"})]})})]}):null,!1,e.jsx(Q,{children:e.jsx(N.div,{whileTap:{scale:.98},children:e.jsx(_,{to:te(),onClick:()=>{r.activeSidebar==="popover-nav"&&j.setActiveSidebar(!1)},children:e.jsx(Z,{icon:le,"data-testId":"explore-gpts-button",children:e.jsx(p,{...u.exploreStoreEnabled})})},"explore")})})]})}function Ue({currentGizmoId:s}){const{data:{gizmos:a}={}}=ee(),n=I(),r=U(),[i]=D({onChange:l=>{d.startTransition(()=>{j.setGptListVisible(l)})}});return n?a!=null?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"sticky top-[--sidebar-sticky-threshold] z-20",ref:i,children:e.jsx("span",{className:"flex h-9 items-center",children:e.jsx(O,{children:e.jsx(p,{id:"ZT2HVu",defaultMessage:"GPTs"})})})}),e.jsx(b,{gizmo:a,currentGizmoId:s})]}):null:e.jsxs(e.Fragment,{children:[!r&&e.jsx(xe,{isActive:s===void 0,isNewConversation:!0}),e.jsx(ce,{}),a!=null?e.jsx(b,{gizmo:a,currentGizmoId:s}):null]})}function fe({gizmo:s,isOpen:a,setIsOpen:n,section:r}){const i=z();return e.jsxs(me,{open:a,onOpenChange:n,triggerButton:e.jsx("button",{className:P("flex text-token-text-secondary hover:text-token-text-primary",a?"":"invisible group-hover:visible"),children:e.jsx(C,{className:"icon-md"})}),contentAlign:"start",sideOffset:4,alignOffset:-4,size:"auto",children:[r===1&&e.jsx(de.Item,{onClick:async()=>{await R.updateGizmoSidebar(i,ie,s.gizmo.id,"keep")},children:e.jsx(p,{...u.keepInSidebar})}),e.jsx(pe,{gizmoResource:s})]})}function G({gizmo:s,historyDisabled:a,section:n,onClick:r}){const i=A(),[l,c]=d.useState(!1),[g,t]=d.useState(!1),x=T(),h=!!s?.gizmo.tags?.includes(B.FirstParty);let o;if(s!=null)o=s.gizmo.display.name||H;else{if(x==null)return null;a?o=i.formatMessage(u.clearChat):x.canInteractWithGizmos()?o=Y:o=i.formatMessage({id:"GizmoSidebarListItem.newChat",defaultMessage:"New chat"})}return e.jsx(N.div,{whileTap:{scale:.98},onMouseEnter:()=>{t(!0)},onMouseLeave:()=>{t(!1)},children:e.jsx(K,{loggingGizmoId:s?.gizmo.id??"primary",href:s!=null?se(s):"/",onClick:r,icon:e.jsx($,{isFirstParty:s==null||h,src:s?.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),isMenuOpen:l,label:o,hoverRightIcon:e.jsxs("div",{className:"flex gap-2",children:[(g||l)&&s!=null&&e.jsx("div",{className:"text-token-text-tertiary",onClick:m=>{m.preventDefault()},children:e.jsx(fe,{gizmo:s,isOpen:l,setIsOpen:c,section:n})}),e.jsx(V,{side:"right",label:i.formatMessage(a?u.clearChat:u.newChat),className:"flex items-center",children:e.jsx("button",{className:l?"text-token-text-tertiary":"invisible text-token-text-secondary hover:text-token-text-primary group-hover:visible",children:a?e.jsx(ae,{className:"icon-md"}):e.jsx(ne,{className:"icon-md"})})})]})})})}const u=E({exploreStoreEnabled:{id:"gizmo.exploreStoreEnabled",defaultMessage:"Explore GPTs"},keepInSidebar:{id:"gizmo.keepInSidebar",defaultMessage:"Keep in sidebar"},newChat:{id:"gizmo.newChat",defaultMessage:"New chat"},clearChat:{id:"gizmo.clearChat",defaultMessage:"Clear chat"}});export{xe as DefaultGPTSidebarListItem,Ue as GizmoSidebarList,G as GizmoSidebarListItem,ue as SidebarSection,u as sidebarMessages};
//# sourceMappingURL=ebzzz8lig9f63t1l.js.map