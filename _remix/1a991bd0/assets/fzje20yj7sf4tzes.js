const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/d6jpj2ssh29mxkr8.js","assets/flidd11gv2mtd3pr.js","assets/hblp7wkoj3uom6wj.js","assets/root-m9ef0vyd.css","assets/b3rades3r6m68flq.js","assets/conversation-small-cll5buey.css","assets/ooeaakn0ji8qsw18.js","assets/owx0xs29hlvisk8x.js","assets/ez1kjz5fvk5gkbgz.js","assets/f4lu6fjawq1oq6b1.js","assets/mvh5zhr3x76o6mfg.js","assets/hxu94zaptf8mjpkm.js","assets/mqac55qx5mn89v48.js","assets/hcy36too2a4zuew8.js","assets/c2irxumz2s63grlt.js","assets/hz1r57eozmvrgxlo.js","assets/bwm8ulkt7rpl8jcy.js","assets/l0fcm4l649pd7v83.js","assets/elpyxt9e3rae5wod.js","assets/g6hxbnpma4c3horj.js","assets/he7piz7zzhgkln8o.js","assets/fqhitr15xecbhn4t.js","assets/grjj5fhjl543khxi.js","assets/gmdmr9wfsgbqi27t.js","assets/lp2a7a6x1h38kn3s.js","assets/oy0n1vstonf5d3gr.js"])))=>i.map(i=>d[i]);
import{X as k,y as e,a1 as b,ag as I,r,P as F,b as U,a6 as G,bA as V,O as S,T as W,W as $,u as X,dU as q,az as K,ar as j,av as Z,Z as M,$ as C,a3 as J,eX as Q,an as Y,a8 as ee,ce as se}from"./flidd11gv2mtd3pr.js";import{dk as d,V as m,dm as E,ex as A,c1 as te,eJ as ne,c7 as ae,eK as oe,eL as ie,c2 as re,c3 as ce,eM as le,aw as ue,bZ as de,eN as me,bp as fe}from"./b3rades3r6m68flq.js";import{p as xe,ae as pe,bb as ge,bc as he}from"./hblp7wkoj3uom6wj.js";import{B as be,D as Se}from"./he7piz7zzhgkln8o.js";import{u as D,e as L,b as O,U as w}from"./l0fcm4l649pd7v83.js";import{m as ve}from"./f4lu6fjawq1oq6b1.js";import{d as ye,k as Ne}from"./ez1kjz5fvk5gkbgz.js";import{u as je,H as we}from"./oy0n1vstonf5d3gr.js";import{a as Te,r as Pe}from"./hz1r57eozmvrgxlo.js";import{j as ke}from"./fqhitr15xecbhn4t.js";function B(){const{activeModals:s}=D(),t=I(),n=d(m.ExploreGPTs),a=d(m.ExploreGPTsNewNux),i=L(),o=O(),l=A(),f=n.eligible&&!n.isLoading&&!o;let c=a.eligible&&!a.isLoading&&!o&&!i&&!l;return s.size>0&&(c=!1),!f&&t?.hasPlusFeatures()&&(c=!1),r.useEffect(()=>{c&&F.logEvent(U.storeDisplayNewNux)},[c]),c}function qe({children:s}){const t=B(),n=k(),a=d(m.ExploreGPTsNewNux);return t?e.jsx(E,{side:"right",show:!0,title:n.formatMessage(T.exploreGPTsTitle),onDismiss:a.markAsViewed,sideOffset:20,theme:"bright",description:e.jsx(b,{...T.exploreGPTsDescriptionNewNux}),children:s}):e.jsx(e.Fragment,{children:s})}const T=G({exploreGPTsTitle:{id:"gptExploreGPTs.title",defaultMessage:"Explore GPTs"},exploreGPTsDescription:{id:"gptExploreGPTs.description",defaultMessage:"Now you can discover GPTs created by the community"},exploreGPTsDescriptionNewNux:{id:"gptExploreGPTs.descriptionNewNux",defaultMessage:"Discover custom versions of ChatGPT created for specific use cases like writing, research, and coding."}});function Ie(){const s=d(m.SonicSidebar),[t,n]=r.useState(!1);return s.isLoading||!s.eligible?null:e.jsx(ve.div,{className:"no-draggable group pb-0",whileTap:{scale:.98},children:e.jsx(Me,{children:e.jsx(te,{href:"/search",target:"_blank",icon:e.jsx("div",{className:S("gizmo-shadow-stroke mr-[0.5] flex h-6 w-6 items-center justify-center rounded-full bg-token-main-surface-primary align-middle text-token-text-primary"),children:e.jsx(ne,{})}),label:"SearchGPT",hoverRightIcon:e.jsxs("div",{className:"flex gap-3",children:[e.jsx(Ce,{isOpen:t,setIsOpen:n,onDismiss:()=>s.markAsViewed()}),e.jsx(xe,{className:S("icon-md text-token-text-tertiary",!t&&"invisible group-hover:visible")})]}),isMenuOpen:!1,loggingGizmoId:"search-gpt-sidebar"})})})}function Ge(){const s=O(),t=d(m.hasSeenSncSidebarTooltip),n=B(),a=L(),{activeModals:i}=D(),o=A();return!t.isLoading&&t.eligible&&!n&&i.size===0&&!s&&!a&&!o}function Me({children:s}){const t=Ge(),n=d(m.hasSeenSncSidebarTooltip);return t?e.jsx(E,{side:"right",show:!0,badge:"new",title:"Try SearchGPT",onDismiss:n.markAsViewed,sideOffset:10,theme:"bright",description:"You're in. Get answers with real-time information from relevant sources, and ask follow-up questions.",children:e.jsx("div",{className:"w-full",children:s})}):e.jsx(e.Fragment,{children:s})}function Ce({isOpen:s,setIsOpen:t,onDismiss:n}){return e.jsx(be,{open:s,onOpenChange:t,triggerButton:e.jsx("button",{className:S("flex text-token-text-tertiary",s?"":"invisible group-hover:visible"),onClick:a=>{a.preventDefault()},children:e.jsx(pe,{className:"icon-md"})}),children:e.jsx(Se.Item,{onClick:a=>{a.preventDefault(),n()},children:e.jsx(b,{id:"sidebar.hideFromSidebar",defaultMessage:"Hide from sidebar"})})})}function Ee(){const s=V("114024");return!s.value||s.isLoading?null:e.jsx(Ie,{})}const P=G({unableToLoadHistory:{id:"history.unableToLoad",defaultMessage:"Unable to load history"},retryButton:{id:"history.retryButton",defaultMessage:"Retry"}});function Ae({activeId:s,isPrimaryBackgroundColor:t}){const n=X(),[a,i]=r.useState(!1),[o,l]=r.useState(0),f=q(),{conversations:p,hasNextPage:c,fetchNextPage:y,isLoading:x,isFetchingNextPage:H,isError:N}=Te(),g=r.useRef(null),z=r.useCallback(h=>{x||h==null||(g.current?.disconnect(),g.current=new IntersectionObserver(R=>{R[0].isIntersecting&&c&&y()}),g.current.observe(h))},[x,c,y]);r.useEffect(()=>()=>{g.current?.disconnect()},[]),r.useMemo(()=>{ae.publish({kind:"refreshHistory",conversations:p})},[p]);const v=p;r.useEffect(()=>{const h=oe(ie(),Date.now());f(()=>{l(o+1)},h+1e3)},[o,f]);const u=v.length===0;r.useEffect(()=>{u||re({namespace:ce.ChatPageLoad})?.logTiming("render_history_items")},[u]);const _=je(v,o);return e.jsxs(Le,{$centered:x||N||u,children:[u&&x&&e.jsx(K,{children:e.jsx(j,{className:"m-auto"})}),u&&N&&e.jsxs("div",{className:"p-3 text-center italic text-token-text-tertiary",children:[e.jsx(b,{...P.unableToLoadHistory}),!a&&e.jsx("div",{className:"mt-1",children:e.jsx(Z,{as:"button",color:"primary",size:"small",className:"m-auto mt-2",onClick:()=>{i(!0),Pe(n)},children:e.jsx(b,{...P.retryButton})})})]}),!x&&!u&&e.jsx("div",{children:e.jsx(we,{activeId:s,bucketedItems:_,hasNextPage:c,items:v,isPrimaryBackgroundColor:t,infiniteScrollTriggerElementRef:z})}),H&&e.jsx("div",{className:"m-4 mb-5 flex justify-center",children:e.jsx(j,{})})]})}const De=W.memo(Ae),Le=$.div`flex flex-col gap-2 pb-2 text-token-text-primary text-sm mt-5
${({$centered:s})=>[s&&"h-full justify-center items-center empty:hidden"]}`,Oe=M(()=>C(()=>import("./d6jpj2ssh29mxkr8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])).then(s=>s.FannyPackAction)),Be=M(()=>C(()=>import("./elpyxt9e3rae5wod.js"),__vite__mapDeps([18,1,2,3,19,13,4,5,8,9,14,17,20,21,15,16,22,23,24,12,25,11])).then(s=>s.GizmoSidebarList));function Ke({clientThreadId:s,onNewThread:t}){const n=ye(s),a=I(),{isUnauthenticated:i}=ee(),o=Ne(s),l=se();return i?null:e.jsxs(e.Fragment,{children:[e.jsx(fe,{onNewThread:t}),a?.canInteractWithGizmos()?e.jsx(Be,{currentGizmoId:o}):e.jsx(Ee,{}),!1,!i&&e.jsx(De,{activeId:l?void 0:n})]})}function Ze({className:s,onNewThread:t}){const n=k(),a=J(),i=le(),o=Q(()=>navigator.windowControlsOverlay),{isFannyPackEnabled:l}=ue();return e.jsxs("div",{className:S("flex",o?.visible&&o.getTitlebarAreaRect().left>0?"justify-end":"justify-between",s),children:[e.jsx(Y,{sideOffset:4,label:n.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),className:"flex",side:"right",children:e.jsx(de,{className:"no-draggable","aria-label":n.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),onClick:()=>{me(a)?w.toggleNavSidebar():w.togglePopoverNavSidebar()},icon:ge,mobileIcon:he,surfaceContext:"secondary","data-testid":"close-sidebar-button"})}),e.jsxs("div",{className:"flex",children:[l&&e.jsx(Oe,{}),!i&&e.jsx(ke,{onClick:t,testId:"create-new-chat-button"})]})]})}export{Ke as C,qe as E,De as H,Ze as S,Ee as a};
//# sourceMappingURL=fzje20yj7sf4tzes.js.map