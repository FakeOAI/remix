const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jehf7tgqdnqd7oyj.js","assets/flidd11gv2mtd3pr.js","assets/hblp7wkoj3uom6wj.js","assets/root-m9ef0vyd.css","assets/mvs0i0ag5vo72gel.js","assets/hcy36too2a4zuew8.js","assets/b3rades3r6m68flq.js","assets/conversation-small-cll5buey.css","assets/ez1kjz5fvk5gkbgz.js","assets/f4lu6fjawq1oq6b1.js","assets/c2irxumz2s63grlt.js","assets/l0fcm4l649pd7v83.js","assets/fqhitr15xecbhn4t.js","assets/he7piz7zzhgkln8o.js","assets/hz1r57eozmvrgxlo.js","assets/bwm8ulkt7rpl8jcy.js","assets/grjj5fhjl543khxi.js","assets/gmdmr9wfsgbqi27t.js","assets/lp2a7a6x1h38kn3s.js","assets/mqac55qx5mn89v48.js","assets/c8w59o10z5zbapcc.js","assets/ipbze00pn8qquhuv.js","assets/wpujrihzys0fipz2.js","assets/i2s1xzcbw7ed8pb9.js","assets/bsqy28ee7gue8gpp.js","assets/fz86vlje92rvvpfg.js","assets/eo3xgporv2s2e981.js","assets/g6hxbnpma4c3horj.js","assets/jjecl7pi17ucp9nv.js","assets/i4ch2i81ak3eyym3.js","assets/fl852jaocq7sy3fv.js","assets/gqa5qn12gkyyeuyj.js","assets/f8a9euxayv7xoup7.js","assets/pazlvdzau2lnsgvh.js","assets/l2ys2h7991porc75.js","assets/meugxv74uw703qco.js"])))=>i.map(i=>d[i]);
import{a4 as V,y as e,S as b,P as z,b as G,a1 as W,Z as L,$ as E,r as h,fh as a,O as x,X as Z,d1 as I,c3 as J,a8 as K}from"./flidd11gv2mtd3pr.js";import{hh as Q,hi as X,hj as $,hk as Y,hl as w,hm as ee,hn as f,ho as te,hp as se,c8 as ae,hq as ne,hr as re,hs as oe,ht as ie,g8 as N,g7 as ce}from"./b3rades3r6m68flq.js";import{S as de,D as P,C as M,b as le,c as he,d as me,e as ue,F as pe}from"./c8w59o10z5zbapcc.js";import{H as xe,I as Ce,J as ve}from"./hcy36too2a4zuew8.js";import{a as _,q as k,r as T,f as R,c as ge}from"./fqhitr15xecbhn4t.js";import{H as D,j as F,G as H,A as fe,i as Te,m as je}from"./ez1kjz5fvk5gkbgz.js";import{U as Se,G as ye,c as Ie}from"./l0fcm4l649pd7v83.js";import{bv as Ne,V as Me}from"./hblp7wkoj3uom6wj.js";function O({clientThreadId:t,currentLeafId:n}){const s=_(t),o=D(t,n);return{showEmptyState:F(t)&&!o&&(k(s)||s?.kind===V.GizmoTest)}}function be(){return e.jsx("div",{className:"text-pretty text-center text-xs font-semibold text-token-text-primary",children:e.jsx("button",{onClick:()=>{Se.openModal(ye.ReportConversation),b.logEvent("chatgpt_conversation_share_report_content_clicked",null,{location:"Static Shared Thread Page"}),z.logEvent(G.sharedConversationReportContentClicked,{location:"Dynamic Shared Thread Page"})},children:e.jsx(W,{id:"thread.reportSharedConversation",defaultMessage:"Report content"})})})}function Le({clientThreadId:t,currentModelId:n,isModelLoaded:s,onRequestCompletion:o,v2HomepageDisclaimer:r}){return e.jsx(de,{clientThreadId:t,currentModelId:n,isModelLoaded:s,onRequestCompletion:o,v2HomepageDisclaimer:r})}const Ee=L(()=>E(()=>import("./jehf7tgqdnqd7oyj.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19])).then(t=>t.ChatScreenContentModals));function we({disableEmptyState:t,fullWidth:n}){const{clientThreadId:s,currentModelId:o,conversationLeafId:r,onChangeItemInView:l,onChangeRating:m,onRequestCompletion:i,onRequestMoreCompletions:c,isModelLoaded:u,prefetchSearch:C}=h.useContext(T),v=H(s,r),j={clientThreadId:s,conversationLeafId:r,currentModelId:o,onChangeItemInView:l,onChangeRating:m,onRequestMoreCompletions:c,onRequestCompletion:i,showAvatar:!1},A=fe(s),q=xe({clientThreadId:s,currentLeafId:r,handleRequestCompletion:i,prefetchSearchPromise:C}),U=A||q||t,p=Te(),{initialConversationTurns:S,continuedConversationTurns:y}=Q(v,p),{showEmptyState:B}=O({clientThreadId:s,currentLeafId:r});return B&&!U?e.jsx(Le,{clientThreadId:s,currentModelId:o,isModelLoaded:u,onRequestCompletion:i,v2HomepageDisclaimer:e.jsx("div",{className:"text-center text-xs text-token-text-secondary",children:e.jsx(P,{clientThreadId:s})})}):e.jsxs(e.Fragment,{children:[p&&e.jsx(X,{}),p&&y.length===0&&e.jsx(be,{}),S.length>0&&e.jsx("ol",{className:a.conversationTurnList,children:S.map(({turnIndex:d,isFinalTurn:g})=>e.jsx("li",{className:x(a.conversationTurnWrapper,n&&"w-full"),children:h.createElement(M,{...j,key:d,turnIndex:d,isFinalTurn:g})},d))}),p&&e.jsx($,{}),e.jsx("ol",{className:a.conversationTurnList,children:y.map(({turnIndex:d,isFinalTurn:g})=>e.jsx("li",{className:x(a.conversationTurnWrapper,n&&"w-full"),children:h.createElement(M,{...j,key:d,turnIndex:d,isFinalTurn:g})},d))}),e.jsx(Y,{}),e.jsx(Ee,{})]})}function Pe(){return e.jsx(e.Fragment,{children:e.jsx(we,{})})}const _e=L(()=>E(()=>import("./c8w59o10z5zbapcc.js").then(t=>t.g),__vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11,21,22,23,12,13,14,15,16,17,18,19,24,25,26,27,28,29,30,31,32,33,34,35])).then(t=>t.ChatScreenComposerAlerts));function ke(){const{clientThreadId:t,currentModelId:n,onRequestCompletion:s}=h.useContext(T),o=_(t),r=je(t),l=H(t,r),m=l>=2,i=D(t,r),c=F(t)&&!m&&k(o);le(l,t,r,c);const{setComposerFooterElement:u}=h.useContext(w);return e.jsx("div",{className:a.footer,children:e.jsxs(ee,{style:{"--bar-gap":"0.5rem","--bar-background-color":"transparent"},children:[e.jsx(f,{type:"secondary",className:"relative",children:e.jsx(_e,{})}),e.jsxs(f,{type:"primary",ref:u,children:[e.jsx(he,{clientThreadId:t,currentModelId:n,isNewThread:c,noWrap:!0,onRequestCompletion:s,showPromptStarters:c||!i}),e.jsx("div",{className:"text-center text-xs text-token-text-secondary",children:e.jsx(P,{clientThreadId:t})})]})]})})}function Re(){const t=Z(),{clientThreadId:n,onNewThread:s}=h.useContext(T);return e.jsxs(f,{leading:!0,type:"primary",className:a.header,children:[e.jsxs("div",{className:a.headerLeading,children:[e.jsx(te,{className:x(I.headerAction,I.floatSidebarAction,a.openSidebar,a.sidebarIcon),htmlFor:se.OpenOrClosed,icon:e.jsx(Ne,{className:"h-6 w-6"}),label:t.formatMessage({id:"fWaiMq",defaultMessage:"Open Sidebar"})}),e.jsx(J,{to:"/",className:a.newThread,onClick:o=>{s?(o.preventDefault(),s()):b.logEvent("chatgpt_web_thread_tap_new_thread")},children:e.jsx(ae,{className:a.sidebarIcon,icon:e.jsx(Me,{}),label:t.formatMessage({id:"rnCpM4",defaultMessage:"New Chat"}),style:{display:"var(--screen-size-hidden-on-compact-mode)"}})}),e.jsx("div",{className:a.threadDropdown,children:e.jsx(me,{clientThreadId:n})})]}),e.jsx("div",{className:a.headerTrailing,children:e.jsx(ue,{clientThreadId:n})})]})}function De(){const{isUnauthenticated:t}=K(),{clientThreadId:n}=R();return t?null:e.jsx("div",{className:a.profileInContent,children:e.jsx(ge,{clientThreadId:n})})}function ze({hideHeader:t=!1,hideFooter:n=!1}){const{clientThreadId:s,currentModelId:o,conversationLeafId:r,onRequestCompletion:l}=R(),{showEmptyState:m}=O({clientThreadId:s,currentLeafId:r}),i=Ce()[o],[c,u]=ne({name:"composer-bar",track:"height"}),C=re(),{isOpen:v}=Ie();return e.jsx(oe.Provider,{value:l,children:e.jsx(ie,{children:e.jsx(ve,{clientThreadId:s,currentLeafId:r,children:e.jsx(pe,{clientThreadId:s,className:"flex-1",currentModelConfig:i,children:e.jsxs(w.Provider,{value:{setComposerFooterElement:u},children:[e.jsx(N,{id:"canvas-state",name:"canvas-state",checked:C}),e.jsx(N,{id:"thread-extended-info-sidebar-state",name:"thread-extended-info-sidebar-state",checked:v}),e.jsx(ce,{anchor:"vertical",className:x(a.screen,m&&a.screenEmptyState),name:"thread",leading:!t&&e.jsx(Re,{}),style:c,trackLeading:!0,trackTrailing:!0,trailing:!n&&e.jsx(ke,{}),children:e.jsx(Pe,{})}),e.jsx(De,{})]})})})})})}export{ze as C};
//# sourceMappingURL=fx69kscfrl41y2ws.js.map