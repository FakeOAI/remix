import{j as s,cj as F,ar as p,b3 as X,aX as Z,Y as E,r,P as J,aG as B,g as W,dE as z,a3 as ee,fY as Q,h as te,am as se,v as ne,at as ae,bL as oe,a8 as re,y as q}from"./lyvmbpf7ocwbhkqv.js";import{M as H,Y as ce,bf as ie,w as le,b as ue}from"./c7ci0rjyj4htmm6k.js";import{br as de,ch as Y,U as fe,j9 as me,jZ as xe,dc as $,d as he}from"./g6lhcxpyem234o4q.js";import{m as ge}from"./fum5k2u9xxdkha3i.js";import{u as ye,F as T}from"./lyiqkyhzlni6sszy.js";import{u as b,F as g,a as k,b as ve}from"./e1sjkyhau9opt4wf.js";function pe({children:e,rootClassName:t,className:n,description:a,icon:i,isOpen:o=!1,onClose:c,primaryButton:m,secondaryButton:f,size:h="normal",title:x,type:l,noPadding:d=!1,hideSeparator:w=!1,showCloseButton:y=!1,shouldIgnoreClickOutside:j=!1,closeButton:_,isScrollable:S=!0,position:A="center",isProduceDesign:D=!1,showOverlayBackground:L=!0,shadow:M="normal"}){const P=!!x,R=!!e,u=P&&R&&!w;return s.jsx(de,{children:o&&s.jsx(F.Root,{isOpen:!0,onClose:c,shouldIgnoreClickOutside:j,className:t,children:s.jsx(F.Overlay,{showBackground:L,children:s.jsxs(ke,{size:h,position:A,className:p("flex flex-col focus:outline-none",{"max-w-md":h==="normal"},n),isProduceDesign:D,shadow:M,children:[s.jsx(F.Header,{icon:i,title:x,type:l,closeButton:y&&(_??s.jsx(X,{onClick:()=>c(!0)})),description:a,withSeparator:u}),s.jsxs("div",{className:p("flex-grow",S?"overflow-y-auto":"overflow-y-hidden",{"p-4 sm:p-6":h!=="fullscreen"&&!d,"md:!pt-0":!R}),children:[e,m!=null||f!=null?s.jsx(F.Actions,{primaryButton:m,secondaryButton:f,modalHasContent:R}):null]})]})})})})}function ke({className:e,children:t,position:n="center",size:a,isProduceDesign:i=!1,shadow:o="normal"}){return s.jsx(ge.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0,y:14},transition:{duration:.175,ease:"easeInOut",exit:{opacity:{duration:.1,ease:"easeOut"},y:{duration:.175,ease:"easeOut"}}},className:p("z-50 h-full w-full overflow-y-auto",a!=="fullscreen"&&"grid grid-cols-[10px_1fr_10px]",a!=="fullscreen"&&n==="center"&&"grid-rows-[minmax(10px,_1fr)_auto_minmax(10px,_1fr)] md:grid-rows-[minmax(20px,_1fr)_auto_minmax(20px,_1fr)]",a!=="fullscreen"&&n==="bottom"&&"grid-rows-[minmax(10px,_1fr)_auto_10px] md:grid-rows-[minmax(20px,_1fr)_auto_20px]"),children:s.jsx(Z,{className:p(!i&&"popover","relative start-1/2 col-auto col-start-2 row-auto row-start-2 h-full w-full bg-token-main-surface-primary text-start ltr:-translate-x-1/2 rtl:translate-x-1/2",a!=="fullscreen"&&"rounded-2xl",o==="normal"&&"shadow-xl",e),children:t})})}function be(){const e=E(),t=b(a=>a.query),n=r.useRef(null);return s.jsx("input",{className:"w-full border-none bg-transparent placeholder:text-token-text-tertiary focus:border-transparent focus:outline-none focus:ring-0",placeholder:e.formatMessage({id:"FannyPack.SearchPlaceholder",defaultMessage:"Search chats..."}),onChange:a=>g.setQuery(a.target.value),onKeyDown:a=>{!a.shiftKey&&(a.key==="ArrowUp"||a.key==="ArrowDown")&&a.preventDefault()},value:t,ref:n})}function C({className:e,isActive:t=!1,icon:n,children:a,onClick:i,onMouseEnter:o,onMouseLeave:c}){const m=b(f=>f.mouseInteractionsDisabled);return s.jsx("div",{className:p("cursor-pointer",e),onMouseEnter:m?void 0:o,onMouseLeave:m?void 0:c,onClick:i,children:s.jsxs("div",{className:p("group relative flex items-center rounded-lg px-4 py-3",t&&"bg-[#f4f4f4] dark:bg-token-main-surface-secondary"),children:[n,s.jsx("div",{className:p("relative grow overflow-hidden whitespace-nowrap",n?"pl-4":""),children:a})]})})}function K(e){return e.formatMessage({id:"fannyPack.DefaultChatTitle",defaultMessage:"New chat"})}function we({historyResult:e,index:t}){const n=E(),{item:a,onSelect:i}=e,o=b(c=>c.activeIndex);return s.jsx(C,{isActive:o===t,icon:s.jsx(H,{className:"icon-sidebar text-token-text-secondary"}),onClick:()=>{k.logClick(a.id,t,"history"),i&&i()},onMouseEnter:()=>g.setActiveIndex(t),onMouseLeave:()=>g.setActiveIndex(void 0),children:s.jsx("div",{className:"text-sm",children:a.title??K(n)})})}function je({labelResult:e}){return s.jsx("div",{className:"group relative my-2 px-4 py-2 text-xs font-medium leading-4 text-token-text-secondary",children:e.text})}function Ne({newChatResult:e,index:t}){const{onSelect:n}=e,a=b(i=>i.activeIndex);return s.jsx(C,{isActive:a===t,onClick:()=>{J.logNewChatButtonClicked({location:"Fanny Pack"}),n&&n()},onMouseEnter:()=>g.setActiveIndex(t),onMouseLeave:()=>g.setActiveIndex(void 0),icon:s.jsx(ce,{className:"icon-sidebar text-token-text-secondary"}),children:s.jsx("div",{className:"text-sm",children:s.jsx(B,{id:"FannyPack.NewChat",defaultMessage:"New chat"})})})}function Ce(e){return r.useMemo(()=>{if(!e)return null;const t=new Date(e*1e3),n=new Date;return t.toDateString()===n.toDateString()?"Today":new Date(new Date().setDate(n.getDate()-1)).toDateString()===t.toDateString()?"Yesterday":t.getFullYear()===n.getFullYear()?t.toLocaleDateString(void 0,{month:"short",day:"numeric"}):t.toLocaleDateString(void 0,{year:"2-digit",month:"numeric",day:"numeric"})},[e])}var Se=z,U=/[\\^$.*+?()[\]{}|]/g,Me=RegExp(U.source);function Pe(e){return e=Se(e),e&&Me.test(e)?e.replace(U,"\\$&"):e}var Re=Pe;const Fe=W(Re),Ee=8;function Ie(e){return e.isArchived?{titleClassName:"text-sm text-token-text-tertiary",titleHighlightedClassName:"text-token-text-secondary font-semibold",messageClassName:"text-xs text-token-text-tertiary",messageHighlightedClassName:"text-token-text-secondary font-medium"}:{titleClassName:"text-sm text-token-text-primary",titleHighlightedClassName:"text-token-text-primary font-semibold",messageClassName:"text-xs text-token-text-secondary",messageHighlightedClassName:"text-token-text-primary font-medium"}}function O({text:e,textToHighlight:t,shouldAdjustStart:n=!1,highlightClassName:a}){const i=r.useMemo(()=>{if(!n||!t)return e;const c=e.toLowerCase().indexOf(t?.toLowerCase());if(c===-1)return e;const m=Math.max(c-Ee,0),f=e.substring(m);return m===0?f:"…"+f},[e,t,n]),o=r.useMemo(()=>{const c=new RegExp(`(${Fe(t)})`,"gi");return i.split(c)},[i,t]);return!t||t.length===0?s.jsx("span",{children:e}):s.jsx("div",{className:"truncate",children:o.map((c,m)=>c.toLowerCase()===t.toLowerCase()?s.jsx("span",{className:a,children:c},m):c)})}function _e({searchResult:e,index:t,elementRef:n}){const{item:a,onSelect:i,query:o}=e,c=E(),m=Ce(a.updateTime),f=Ie(a),x=b(d=>d.activeIndex)===t,l=r.useRef(null);return r.useEffect(()=>{let d;const w=setTimeout(()=>{d=new IntersectionObserver(y=>{y.forEach(j=>{j.isIntersecting&&(k.logImpression(a.source,t,a.conversationId),d&&d.disconnect())})},{threshold:.5}),l.current&&d.observe(l.current)},250);return()=>{d&&d.disconnect(),clearTimeout(w)}},[l,a,o,t]),s.jsx("div",{ref:l,children:s.jsx(C,{isActive:x,icon:a.isArchived?s.jsx(ie,{className:"icon-sidebar text-token-text-tertiary"}):s.jsx(H,{className:"icon-sidebar text-token-text-secondary"}),onClick:()=>{k.logClick(a.conversationId,t,a.source),i&&i()},onMouseEnter:()=>g.setActiveIndex(t),onMouseLeave:()=>g.setActiveIndex(void 0),children:s.jsxs("div",{className:"flex items-center",ref:n,children:[s.jsxs("div",{className:"relative grow overflow-hidden whitespace-nowrap",children:[s.jsx("div",{className:f.titleClassName,children:s.jsx(O,{text:a.title&&a.title.length>0?a.title:K(c),textToHighlight:o.length>=3?o:void 0,highlightClassName:f.titleHighlightedClassName})}),s.jsx("div",{className:p("pt-1",f.messageClassName),children:s.jsx(O,{text:a.snippet??"",textToHighlight:o.length>=3?o:void 0,shouldAdjustStart:!0,highlightClassName:f.messageHighlightedClassName})})]}),x&&s.jsx("div",{className:"pl-6 text-xs text-token-text-secondary",children:m})]})})})}function I(){return r.useMemo(()=>({closeFannyPackModal:e=>{k.logClose(e),g.setIsActive(!1)}}),[])}function G(){const e=ee(),t=Y(),{closeFannyPackModal:n}=I();return r.useCallback(a=>{t&&fe.closeActiveSidebar(),e(a),n("click")},[e,n,t])}function Ae(){const{conversations:e}=me(r.useMemo(()=>({}),[])),t=Q("550560761").config.value,n=Number(t?.history_results_limit??6),a=r.useMemo(()=>e.slice(0,Math.min(e.length,n)),[e,n]),i=xe(a,0),o=G(),c=r.useMemo(()=>({kind:"newChat",onSelect:()=>{o("/")}}),[o]);return r.useMemo(()=>{const f=[c];return f.push(...[i.recent,i.dynamicMonths,i.dynamicYears].reduce((h,x)=>(Object.entries(x).forEach(([l,{items:d,label:w}])=>{d.length>0&&(h.push({kind:"label",text:w}),d.forEach(y=>{h.push({kind:"history",onSelect:()=>{o($(y.id))},item:y})}))}),h),[])),f},[c,i,o])}async function De({query:e,cursor:t}){return te.safeGet("/conversations/search",{parameters:{query:{query:e,cursor:t}}})}function Le(){const e=b(u=>u.query),t=G(),[n,a]=r.useState(""),[i,o]=r.useState(!1),c=r.useRef(he(u=>{o(!1),a(u)},250)).current,m=r.useCallback(u=>{u!==n&&(o(!0),c(u))},[n,c]);r.useEffect(()=>{m(e)},[e,m]);const{data:f,isError:h,isLoading:x,isFetchingNextPage:l,hasNextPage:d,fetchNextPage:w}=se({queryKey:["conversationSearch",{query:n}],queryFn:({pageParam:u})=>De({query:n,cursor:u}),initialPageParam:"",getNextPageParam:u=>u.cursor??void 0,enabled:!!n});r.useEffect(()=>{x&&k.logQuery()},[x]),r.useEffect(()=>{h&&k.logQueryError()},[h]),r.useEffect(()=>{l&&k.logQueryMore()},[l]);const y=r.useMemo(()=>f?.pages.flatMap(u=>u.items)??[],[f]),j=r.useRef(null),_=r.useCallback(u=>{x||u==null||(j.current?.disconnect(),j.current=new IntersectionObserver(v=>{v[0].isIntersecting&&!l&&d&&w()}),j.current.observe(u))},[x,l,d,w]);r.useEffect(()=>()=>{j.current?.disconnect()},[]);const S=y&&n===e,A=e.length>0&&(i||x||l),D=Q("550560761").config.value,L=Number(D?.local_results_limit??0),M=ye(e,L),P=r.useMemo(()=>{const u=M;return S&&y.forEach(v=>{u.has(v.conversation_id)||u.set(v.conversation_id,{conversationId:v.conversation_id,nodeId:v.current_node_id,title:v.title,isArchived:v.is_archived,updateTime:v.update_time,snippet:v.payload.snippet,source:"remote"})}),Array.from(u.values())},[M,y,S]);return{searchResults:r.useMemo(()=>P.map(u=>({kind:"search",onSelect:()=>{t($(u.conversationId))},item:u,query:e})),[P,t,e]),shouldShowLoading:A,infiniteScrollTriggerElementRef:_}}function qe(e,t,n){switch(e.kind){case"history":return s.jsx(we,{historyResult:e,index:t});case"label":return s.jsx(je,{labelResult:e});case"loading":return s.jsx(Qe,{loadingResults:e});case"newChat":return s.jsx(Ne,{newChatResult:e,index:t});case"noResults":return s.jsx(Be,{});case"search":return s.jsx(_e,{searchResult:e,index:t,elementRef:n})}}function Te(e,t){const n=r.useCallback(()=>{for(let o=(e??-1)+1;o<t.length;o++)if(t[o].onSelect)return o;return e},[e,t]),a=r.useCallback(()=>{for(let o=(e??t.length)-1;o>=0;o--)if(t[o].onSelect)return o;return e},[e,t]),i=r.useCallback(()=>{e!==void 0&&t[e]&&t[e].onSelect&&t[e].onSelect()},[e,t]);r.useEffect(()=>{const o=c=>{c.key==="ArrowUp"&&!c.shiftKey?g.setActiveIndex(a()):c.key==="ArrowDown"&&!c.shiftKey?g.setActiveIndex(n()):(c.key==="Enter"||c.key==="Return")&&(c.preventDefault(),i())};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[a,n,i]),r.useEffect(()=>{const o=()=>{ve.getMouseInteractionsDisabled()&&g.setMouseInteractionsDisabled(!1)};return window.addEventListener("mousemove",o),()=>{window.removeEventListener("mousemove",o)}},[])}function Oe(e,t){const n=r.useRef([]);return r.useEffect(()=>{n.current=t.map(()=>ae.createRef())},[t]),r.useEffect(()=>{n.current.forEach((a,i)=>{e===i&&a?.current&&a.current.scrollIntoView({behavior:"instant",block:"nearest"})})},[e,n]),n}function Be(){return s.jsx(C,{className:"text-sm text-token-text-tertiary",icon:s.jsx(le,{className:"icon-sidebar"}),children:s.jsx(B,{id:"FannyPack.Noresults",defaultMessage:"No results"})})}function N(){return s.jsx(C,{icon:s.jsx("div",{className:"loading-results-shimmer h-[14px] w-[14px] rounded-full bg-token-main-surface-secondary"}),children:s.jsxs("div",{className:"flex min-h-[40px] flex-col justify-center",children:[s.jsx("div",{className:"loading-results-shimmer h-2 w-1/4 rounded-full bg-token-main-surface-secondary"}),s.jsx("div",{className:"loading-results-shimmer mt-3 h-2 w-1/2 rounded-full bg-token-main-surface-secondary"})]})})}function Qe({loadingResults:e}){return e.shouldShowMultiple?s.jsxs(s.Fragment,{children:[s.jsx(N,{}),s.jsx(N,{}),s.jsx(N,{}),s.jsx(N,{}),s.jsx(N,{})]}):s.jsx(N,{})}function He(){const{searchResults:e,shouldShowLoading:t,infiniteScrollTriggerElementRef:n}=Le(),a=Ae(),i=b(l=>l.query),o=i.length>0;r.useEffect(()=>{k.setQuerySessionId(ne())},[i]);const c=r.useMemo(()=>{const l=[];return o?l.push(...e):l.push(...a),t?l.push({kind:"loading",shouldShowMultiple:l.length===0}):l.length===0&&l.push({kind:"noResults"}),l},[o,t,e,a]),m=b(l=>l.activeIndex);Te(m,c);const f=Oe(m,c),h=r.useRef(null);r.useEffect(()=>{g.setActiveIndex(0),h.current&&(h.current.scrollTop=0)},[i]);const x=r.useRef(!0);return r.useEffect(()=>{x.current&&!t&&c.length===1&&c[0].kind==="noResults"&&k.logNoResults(),x.current=t},[t,c]),s.jsx("div",{ref:h,children:s.jsx("ol",{className:"mx-2",children:c.map((l,d)=>s.jsx("li",{ref:f.current[d],children:qe(l,d,d===c.length-1?n:void 0)},d))})})}function We(){const e=b(n=>n.isActive);return Y()?s.jsx($e,{isOpen:e}):s.jsx(Ke,{isOpen:e})}function Ye({onClick:e,className:t}){const n=E();return s.jsx("button",{className:p("flex items-center justify-center rounded-full bg-transparent p-1 hover:bg-token-main-surface-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-token-text-quaternary focus-visible:ring-offset-1 focus-visible:ring-offset-transparent dark:hover:bg-token-main-surface-tertiary",t),"aria-label":n.formatMessage({id:"Px7S/2",defaultMessage:"Close"}),onClick:e,children:s.jsx(ue,{className:"icon-sidebar text-token-text-tertiary hover:text-token-text-primary"})})}function V({className:e}){const{closeFannyPackModal:t}=I(),n=re(),a=r.useRef(!1),{value:i}=q("3678527908"),{value:o}=q("1422501431");return r.useEffect(()=>{!a.current&&i&&n&&(o?T.setCurrentAccountV2(n):T.setCurrentAccount(n),a.current=!0)},[i,n,o]),s.jsxs("div",{className:p("flex flex-col",e),children:[s.jsxs("div",{className:"ml-6 mr-4 flex max-h-[64px] min-h-[64px] items-center justify-between",children:[s.jsx(be,{}),s.jsx(Ye,{className:"ml-4",onClick:()=>{t("button")}})]}),s.jsx("hr",{className:"border-token-border-light"}),s.jsx("div",{className:"my-2 flex-grow overflow-y-auto",children:s.jsx(He,{})})]})}function $e({isOpen:e}){const{closeFannyPackModal:t}=I();return s.jsx(oe,{isOpen:e,onClose:()=>{t("modal")},size:"fullscreen",showCloseButton:!0,type:"success",noPadding:!0,children:s.jsx(V,{})})}function Ke({isOpen:e}){const{closeFannyPackModal:t}=I();return s.jsx(pe,{className:"border border-token-border-light shadow-[0_14px_62px_0_rgba(0,0,0,0.25)] md:min-w-[680px] md:max-w-[680px]",isOpen:e,onClose:()=>{t("modal")},showCloseButton:!0,type:"success",noPadding:!0,showOverlayBackground:!1,shadow:"custom",children:s.jsx(V,{className:"max-h-[440px] min-h-[440px]"})})}export{We as FannyPackModalContainer};
//# sourceMappingURL=irbtbol43adxee1b.js.map