const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/j9nmpqorhr0mocks.js","assets/ign6lc5qqsbgzj3q.js","assets/wrbxtg8dgsjl2z0d.js","assets/root-lbfis1cw.css","assets/0g1obryqmal95ig5.js","assets/f2jm88xc868xaf4h.js","assets/conversation-small-9gmhsapt.css","assets/i0gn4jytsw0nm52b.js","assets/fctryjik2hvcole2.js","assets/hl6f8d7a76kgue4i.js","assets/g1b1ozz3akvltlk6.js","assets/lc5t42k1qhi0m0nv.js","assets/kt14v7cn01nrc14n.js","assets/dseck4fe311mjmeu.js","assets/odhn2e8eru1zj48u.js","assets/flc12uzxj6vdh9bf.js"])))=>i.map(i=>d[i]);
import{j as e,an as R,ao as D,r as u,aU as A,e2 as n,ak as j,J as $,aq as z,cK as K,S as J,I as Z}from"./ign6lc5qqsbgzj3q.js";import{eZ as b,e_ as B,e$ as G,ck as Q,f0 as X,b$ as Y,f1 as ee,f2 as O,f3 as se,f4 as ae,co as ne,f5 as te,f6 as re,f7 as N,f8 as oe,f9 as ie,fa as ce,fb as de,fc as le,fd as he,q as ue,fe as me,ff as Ce,eh as fe,fg as xe,cj as pe,fh as Te,fi as ve,fj as q,fk as ge,a$ as L,fl as je,d7 as Se,ea as Ie,c2 as we,fm as ye,a7 as Ne,fn as Le,fo as be,fp as Ee,fq as Me,bO as _e,fr as ke,fs as He,ft as Fe,cB as Pe,fu as Re,fv as H,eJ as De,eK as Ae}from"./f2jm88xc868xaf4h.js";import{S as Be,E as Oe,C as F,a as qe,b as Ue}from"./i0gn4jytsw0nm52b.js";import{K as Ve}from"./wrbxtg8dgsjl2z0d.js";import{C as We}from"./hd98p5hy46e2nwj9.js";function $e({clientThreadId:s,currentModelId:o,isModelLoaded:a,onRequestCompletion:r,v2HomepageDisclaimer:t}){return e.jsx(Be,{clientThreadId:s,currentModelId:o,isModelLoaded:a,onRequestCompletion:r,v2HomepageDisclaimer:t})}const ze=R(()=>D(()=>import("./j9nmpqorhr0mocks.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(s=>s.ChatScreenContentModals));function Ke({disableEmptyState:s,fullWidth:o}){const{clientThreadId:a,currentModelId:r,conversationLeafId:t,isCompanionWindow:d,isEmbeddedInFocusedView:l,onChangeItemInView:h,onChangeRating:C,onRequestCompletion:c,onRequestMoreCompletions:m,isModelLoaded:f,prefetchSearch:S}=u.useContext(b),x=B(a,t),T=G(a),p={clientThreadId:a,conversationLeafId:t,currentModelId:r,onChangeItemInView:h,onChangeRating:C,onRequestMoreCompletions:m,onRequestCompletion:c,showAvatar:!1},I=Q(a),w=X({clientThreadId:a,currentLeafId:t,handleRequestCompletion:c,prefetchSearchPromise:S}),v=I||w||s,g=Y(),{initialConversationTurns:E,continuedConversationTurns:M}=ee(x,g),{canUseNewHomepage:_,showEmptyState:k}=O({clientThreadId:a,currentLeafId:t}),U=x>=2;se(U);const{setTargetedContent:V}=ae(),W=ne(r);if(te(()=>{he(),ue.updateScrollToMessageId(a,"finalAgentTurn")}),re(i=>{me({...i,leafId:i.source,isEmbeddedInFocusedView:l})&&V(void 0)}),_&&k&&!v){const i=d?null:e.jsx("div",{className:"text-center text-xs text-token-text-secondary",children:e.jsx(N,{clientThreadId:a})});return e.jsx($e,{clientThreadId:a,currentModelId:r,isModelLoaded:f,onRequestCompletion:c,v2HomepageDisclaimer:i})}else if(!_&&k&&!v)return e.jsx(Oe,{clientThreadId:a,currentModelId:r,isModelLoaded:f,onRequestCompletion:c,enableV2Homepage:!W,v2HomepageDisclaimer:e.jsx(N,{clientThreadId:a})});return e.jsxs(e.Fragment,{children:[g&&e.jsx(oe,{}),g&&M.length===0&&e.jsx(ie,{}),e.jsx(A,{children:e.jsxs(u.Suspense,{fallback:null,children:[e.jsx(ce,{}),E.length>0&&e.jsx("ol",{className:n.conversationTurnList,children:E.map(({turnIndex:i,isFinalTurn:y})=>e.jsx("li",{className:j(n.conversationTurnWrapper,o&&"w-full"),children:u.createElement(F,{...p,key:`${a}-${i}`,turnIndex:i,isFinalTurn:y,scrollToMessageId:T})},i))}),g&&e.jsx(de,{}),e.jsx("ol",{className:n.conversationTurnList,children:M.map(({turnIndex:i,isFinalTurn:y})=>e.jsx("li",{className:j(n.conversationTurnWrapper,o&&"w-full"),children:u.createElement(F,{...p,key:`${a}-${i}`,turnIndex:i,isFinalTurn:y,scrollToMessageId:T})},i))})]})}),e.jsx(ze,{}),x>0&&e.jsx(le,{})]})}function Je(){return e.jsx(Ke,{})}const Ze=R(()=>D(()=>import("./i0gn4jytsw0nm52b.js").then(s=>s.c),__vite__mapDeps([7,1,2,3,5,6,8,9,10,11,12,13,14,15])).then(s=>s.ChatScreenComposerAlerts));function Ge(){const{clientThreadId:s,currentModelId:o,isCompanionWindow:a,onRequestCompletion:r}=u.useContext(b),t=Ce(s),d=fe(s),l=B(s,d),h=l>=2,C=xe(s,d),c=pe(s)&&!h&&Te(t);ve(l,s,d,c);const{setComposerFooterElement:m}=u.useContext(q);return e.jsx("div",{className:n.footer,children:e.jsxs(ge,{style:{"--bar-gap":"0.5rem","--bar-background-color":"transparent"},children:[e.jsxs(L,{type:"secondary",className:"relative",children:[h&&e.jsx(je,{className:n.scrollButton}),e.jsx(Ze,{})]}),e.jsxs(L,{type:"primary",ref:m,name:"composer-bar",children:[e.jsx(qe,{clientThreadId:s,currentModelId:o,isNewThread:c,noWrap:!0,onRequestCompletion:r,showPromptStarters:c||!C}),!a&&e.jsx("div",{className:"text-center text-xs text-token-text-secondary",children:e.jsx(N,{clientThreadId:s})})]})]})})}function Qe(){const s=$(),{clientThreadId:o,isLoggedInUser:a,onNewThread:r}=u.useContext(b);return Se(o),e.jsxs(L,{leading:!0,type:"primary",className:n.header,children:[e.jsxs("div",{className:n.headerLeading,children:[a&&e.jsx(Ie,{}),e.jsx(z,{label:s.formatMessage(P.newChat),children:e.jsx(K,{to:"/",className:n.newThread,onClick:t=>{r?(t.preventDefault(),r()):J.logEvent("chatgpt_web_thread_tap_new_thread")},tabIndex:0,children:e.jsx(we,{className:n.sidebarIcon,icon:e.jsx(Ve,{}),tabIndex:-1,label:s.formatMessage(P.newChat),style:{display:"var(--screen-size-hidden-on-compact-mode)",viewTransitionName:"var(--vt_new_chat_thread)"}})})}),e.jsx("div",{className:n.threadDropdown,children:e.jsx(ye,{clientThreadId:o})})]}),e.jsx("div",{className:n.headerTrailing,children:e.jsx(A,{children:e.jsx(Ue,{clientThreadId:o})})})]})}const P=Z({newChat:{id:"rnCpM4",defaultMessage:"New Chat"}});function ns({hideHeader:s=!1,hideFooter:o=!1,hideTools:a=!1,embedded:r=!1}){const{clientThreadId:t,currentModelId:d,conversationLeafId:l,isCompanionWindow:h,isInstalledApp:C,onRequestCompletion:c}=Ne(),{canUseNewHomepage:m,showEmptyState:f}=O({clientThreadId:t,currentLeafId:l}),S=Le()[d],[x,T]=be({name:"composer-bar",track:"height"}),p=Ee(t),I=Me(),{isOpen:w}=_e(),v=o||f&&m;return e.jsx(ke.Provider,{value:c,children:e.jsx(He,{children:e.jsxs(Fe,{clientThreadId:t,currentLeafId:l,children:[e.jsx(Pe,{children:p!=null&&e.jsx("title",{children:p})}),e.jsx(Re,{clientThreadId:t,className:j(r&&"h-full","flex-1"),currentModelConfig:S,children:e.jsx(q.Provider,{value:{setComposerFooterElement:T},children:e.jsxs("div",{className:"h-full",style:{container:"thread-container / inline-size"},children:[e.jsx(H,{id:"canvas-state",name:"canvas-state",checked:I}),e.jsx(H,{id:"thread-extended-info-sidebar-state",name:"thread-extended-info-sidebar-state",checked:w}),e.jsx(De,{anchor:"vertical",className:j(n.screen,f&&m&&n.screenEmptyState,h&&n.screenCompanionWindow,C&&n.screenInstalledApp,r&&n.screenEmbedded),name:"thread",leading:!s&&e.jsx(Qe,{}),style:x,trackLeading:!0,trackTrailing:!0,trailing:!v&&e.jsx(Ge,{}),children:e.jsx(Je,{})}),!h&&!a&&e.jsxs(e.Fragment,{children:[e.jsx(We,{}),e.jsx(Ae,{})]})]})})})]})})})}export{ns as C};
//# sourceMappingURL=jw12os0pyw26b1a1.js.map