const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/gap3ka1kk321jxc2.js","assets/j2za2a5bh01bf12l.js","assets/jwd9u48bpcglqn07.js","assets/root-k00fc8j4.css","assets/m2twlw9u4njn6zsf.js","assets/ol4rayecis5vwkrv.js","assets/conversation-small-cll5buey.css","assets/ijauqsk65ba42v28.js","assets/0nplc8csropx3b2z.js","assets/e1k1bicdxyg64hj7.js","assets/b0u6reko7ueifq6h.js"])))=>i.map(i=>d[i]);
import{a5 as M,a6 as y,a as z,bn as k,t as e,eb as w,ec as L,a8 as p,a3 as T,r as d,aj as A,ad as E,ca as _,T as P}from"./j2za2a5bh01bf12l.js";import{c1 as I,c2 as D,c3 as U,Y as F,c4 as O,c5 as B,c as H,c6 as K,c7 as q,c8 as V,ad as W,c9 as Q,W as Z,ca as v}from"./ol4rayecis5vwkrv.js";import{G as R}from"./c9g2xrlbo2th8itc.js";import{p as X,c as Y,m as J,G as $}from"./ijauqsk65ba42v28.js";import{u as S,d as ee,U as j}from"./qaipf7yc1soqy0c2.js";import{aH as se,V as te,a8 as C,ab as ie,X as ae,ac as ne,W as re,aI as oe}from"./jwd9u48bpcglqn07.js";import{a as le,E as ce}from"./m1gagr4rz0s80m0l.js";import{B as me,D as de}from"./m2twlw9u4njn6zsf.js";import{h as pe}from"./i86n9ij5suntqro9.js";import{m as N}from"./e1k1bicdxyg64hj7.js";import"./0nplc8csropx3b2z.js";import"./b0u6reko7ueifq6h.js";import"./20ng7i8e80jtceb4.js";import"./bdkmoklqtrhgpmvf.js";import"./dsfspetclj3qqxnn.js";import"./elqvopl5dhtqjita.js";import"./ozwh34fmdynh510n.js";import"./7eaepxiuvocxcnyo.js";import"./ls786hdtlcilcacl.js";import"./mwzaau3aelrf897a.js";const ue=M(()=>y(()=>import("./gap3ka1kk321jxc2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(s=>s.GizmoKeepInSidebarMenuItem));var xe=(s=>(s[s.Keep=0]="Keep",s[s.Recents=1]="Recents",s))(xe||{});const ge=2;function he({isActive:s,isNewConversation:r}){const a=z(),o=k();return e.jsx("div",{className:"bg-token-sidebar-surface-primary pt-0",children:e.jsx(G,{gizmo:void 0,isActive:s,onClick:i=>{w(L(a))&&!r&&(i.preventDefault(),pe(o))}})})}function fe(s,r,a){const o=Z(s,t=>t.flair.kind),i=[...o[v.FirstParty]?.map(({resource:t})=>({gizmo:t,section:0}))??[],...o[v.SidebarKeep]?.map(({resource:t})=>({gizmo:t,section:0}))??[],...o[v.Recent]?.slice(0,ge).map(({resource:t})=>({gizmo:t,section:1}))??[]],n=i.length>a+1,c=n&&!r&&i.length>a?i.slice(0,a):i;return{listItems:[...c.filter(({section:t})=>t===0),...c.filter(({section:t})=>t===1)],itemsLeft:i.length-c.length,needsToCollapseItems:n}}function b({gizmo:s,currentGizmoId:r}){const a=d.useRef(!1),o=S(),i=S(l=>!ee.isGptListCollapsed(l)),n=I(),c=n?5:4,{itemsLeft:x,listItems:t,needsToCollapseItems:g}=fe(s,i,c);d.useEffect(()=>{t.length>0&&!a.current&&(K({namespace:q.ChatPageLoad})?.logTiming("render_gizmo_sidebar"),a.current=!0)},[t]);function h(l,m){return e.jsx(G,{gizmo:l,isActive:l.gizmo.id===r,section:m},l.gizmo.id)}return e.jsxs("div",{children:[t.map(({gizmo:l,section:m},f)=>e.jsxs(d.Fragment,{children:[f>1&&m!==t[f-1].section&&e.jsx("div",{className:"my-2 ml-2 h-px w-7 bg-token-sidebar-surface-tertiary"}),h(l,m)]},f)),g?e.jsxs("button",{onClick:j.toggleGptListCollapsed,className:"flex h-10 w-full items-center gap-2 rounded-lg px-2 text-sm text-token-text-primary hover:bg-token-sidebar-surface-secondary",children:[e.jsx("div",{className:"flex h-6 w-6 flex-shrink-0 items-center justify-center",children:e.jsx(C,{className:"icon-md text-token-text-primary"})}),e.jsx("div",{className:"flex grow items-center gap-1",children:i?e.jsxs(e.Fragment,{children:[e.jsx(p,{id:"GizmoSidebarList.showLess",defaultMessage:"See less"}),!n&&e.jsx(ie,{className:"icon-xs"}),n&&e.jsx(ae,{className:"icon-xs"})]}):e.jsxs(e.Fragment,{children:[e.jsx(p,{id:"GizmoSidebarList.showMoreItems",defaultMessage:"{numMore} more",values:{numMore:x}}),!n&&e.jsx(ne,{className:"icon-xs"}),n&&e.jsx(re,{className:"icon-xs"})]})})]}):null,e.jsx(ce,{children:e.jsx(N.div,{whileTap:{scale:.98},children:e.jsx(_,{to:J(),onClick:()=>{o.activeSidebar==="popover-nav"&&j.setActiveSidebar(!1)},children:e.jsx(V,{icon:oe,"data-testid":"explore-gpts-button",children:e.jsx(p,{...u.exploreStoreEnabled})})},"explore")})})]})}function Fe({currentGizmoId:s}){const{data:{gizmos:r}={}}=X();let a=r;const o=I(),[i]=D({onChange:n=>{d.startTransition(()=>{j.setGptListVisible(n)})}});return o?a!=null?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"sticky top-[--sidebar-sticky-threshold] z-20",ref:i,children:e.jsx("span",{className:"flex h-9 items-center",children:e.jsx(U,{children:e.jsx(p,{id:"ZT2HVu",defaultMessage:"GPTs"})})})}),e.jsx(b,{gizmo:a,currentGizmoId:s})]}):null:e.jsxs(e.Fragment,{children:[e.jsx(he,{isActive:s===void 0,isNewConversation:!0}),e.jsx(le,{}),a!=null?e.jsx(b,{gizmo:a,currentGizmoId:s}):null]})}function ve({gizmo:s,isOpen:r,setIsOpen:a,section:o}){const i=z();return e.jsxs(me,{open:r,onOpenChange:a,triggerButton:e.jsx("button",{className:P("flex text-token-text-secondary hover:text-token-text-primary",r?"":"invisible group-hover:visible"),children:e.jsx(C,{className:"icon-md"})}),contentAlign:"start",sideOffset:4,alignOffset:-4,size:"auto",children:[o===1&&e.jsx(de.Item,{onClick:async()=>{await W.updateGizmoSidebar(i,$,s.gizmo.id,"keep")},children:e.jsx(p,{...u.keepInSidebar})}),e.jsx(ue,{gizmoResource:s})]})}function G({gizmo:s,historyDisabled:r,section:a,onClick:o}){const i=T(),[n,c]=d.useState(!1),[x,t]=d.useState(!1),g=A(),h=!!s?.gizmo.tags?.includes(F.FirstParty);let l;if(s!=null)l=s.gizmo.display.name||O;else{if(g==null)return null;r?l=i.formatMessage(u.clearChat):g.canInteractWithGizmos()?l=Q:l=i.formatMessage({id:"GizmoSidebarListItem.newChat",defaultMessage:"New chat"})}return e.jsx(N.div,{whileTap:{scale:.98},onMouseEnter:()=>{t(!0)},onMouseLeave:()=>{t(!1)},children:e.jsx(B,{loggingGizmoId:s?.gizmo.id??"primary",href:s!=null?Y(s):"/",onClick:o,icon:e.jsx(R,{isFirstParty:s==null||h,src:s?.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),isMenuOpen:n,label:l,hoverRightIcon:e.jsxs("div",{className:"flex gap-2",children:[(x||n)&&s!=null&&e.jsx("div",{className:"text-token-text-tertiary",onClick:m=>{m.preventDefault()},children:e.jsx(ve,{gizmo:s,isOpen:n,setIsOpen:c,section:a})}),e.jsx(H,{side:"right",label:i.formatMessage(r?u.clearChat:u.newChat),className:"flex items-center",children:e.jsx("button",{className:n?"text-token-text-tertiary":"invisible text-token-text-secondary hover:text-token-text-primary group-hover:visible",children:r?e.jsx(se,{className:"icon-md"}):e.jsx(te,{className:"icon-md"})})})]})})})}const u=E({exploreStoreEnabled:{id:"gizmo.exploreStoreEnabled",defaultMessage:"Explore GPTs"},keepInSidebar:{id:"gizmo.keepInSidebar",defaultMessage:"Keep in sidebar"},newChat:{id:"gizmo.newChat",defaultMessage:"New chat"},clearChat:{id:"gizmo.clearChat",defaultMessage:"Clear chat"}});export{he as DefaultGPTSidebarListItem,Fe as GizmoSidebarList,G as GizmoSidebarListItem,xe as SidebarSection,u as sidebarMessages};
//# sourceMappingURL=fwvo607lv68j85pi.js.map