const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/fwl37nxn02h0nmu6.js","assets/bve7stqsvuyp30oy.js","assets/jza0wh4acfmo8aml.js","assets/root-cqviwlml.css","assets/ey0wg4za1oyqifqv.js","assets/conversation-small-cll5buey.css","assets/deec37q0oqrigjkr.js","assets/lk3ytoqve6n2hksk.js","assets/25r7helde3zylny5.js","assets/lcsvs3nxna2cdwpx.js","assets/ljvnn957d5onfwd2.js","assets/horqi5aemy4xy4nt.js","assets/j6nq6u5ihk30ar3w.js","assets/m48yy4zuq608v31y.js","assets/cpolvx40ep4lcjwi.js","assets/jhw40ptxxcdznoc8.js","assets/gp6erypuqffyucu9.js","assets/daahzegdvawizu7d.js","assets/mp0614vfts6nkoji.js","assets/ocnf3ui8jti1f2ip.js","assets/o8uyy9ytn5mdu56y.js","assets/fc8def5hazxahl9b.js","assets/dan2jejzay5j96ch.js"])))=>i.map(i=>d[i]);
import{a6 as e,aE as w,aF as P,r as f,dM as r,ar as g}from"./bve7stqsvuyp30oy.js";import{ff as M,cU as H,fg as A,cn as B,fh as O,fi as k,fj as q,fk as F,fl as W,fm as U,fn as V,fo as z,fp as G,ef as Q,fq as Z,cT as $,fr as J,fs as K,ft as R,fu as X,d5 as L,fv as Y,fw as ee,fx as se,fy as te,fz as ne,b$ as ae,fA as re,fB as oe,fC as ie,dj as ce,fD as de,fE as E,fF as le,fG as he}from"./ey0wg4za1oyqifqv.js";import{c as _,u as me}from"./deec37q0oqrigjkr.js";import{S as ue,C as N,a as Ce}from"./m48yy4zuq608v31y.js";import{C as fe,a as xe}from"./bejzv9mlq2mmwqaw.js";function pe({clientThreadId:s,currentModelId:o,isModelLoaded:t,onRequestCompletion:n,v2HomepageDisclaimer:a}){return e.jsx(ue,{clientThreadId:s,currentModelId:o,isModelLoaded:t,onRequestCompletion:n,v2HomepageDisclaimer:a})}const Te=w(()=>P(()=>import("./fwl37nxn02h0nmu6.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])).then(s=>s.ChatScreenContentModals));function ve({disableEmptyState:s,fullWidth:o}){const{clientThreadId:t,currentModelId:n,conversationLeafId:a,onChangeItemInView:i,onChangeRating:c,onRequestCompletion:d,onRequestMoreCompletions:m,isModelLoaded:l,prefetchSearch:u}=f.useContext(_),C=M(t,a),x={clientThreadId:t,conversationLeafId:a,currentModelId:n,onChangeItemInView:i,onChangeRating:c,onRequestMoreCompletions:m,onRequestCompletion:d,showAvatar:!1},p=H(t),v=A({clientThreadId:t,currentLeafId:a,handleRequestCompletion:d,prefetchSearchPromise:u}),j=p||v||s,T=B(),{initialConversationTurns:y,continuedConversationTurns:I}=O(C,T),{showEmptyState:b}=k({clientThreadId:t,currentLeafId:a}),D=C>=2;return q(D),b&&!j?e.jsx(pe,{clientThreadId:t,currentModelId:n,isModelLoaded:l,onRequestCompletion:d,v2HomepageDisclaimer:e.jsx("div",{className:"text-center text-xs text-token-text-secondary",children:e.jsx(F,{clientThreadId:t})})}):e.jsxs(e.Fragment,{children:[T&&e.jsx(W,{}),T&&I.length===0&&e.jsx(U,{}),y.length>0&&e.jsx("ol",{className:r.conversationTurnList,children:y.map(({turnIndex:h,isFinalTurn:S})=>e.jsx("li",{className:g(r.conversationTurnWrapper,o&&"w-full"),children:f.createElement(N,{...x,key:h,turnIndex:h,isFinalTurn:S})},h))}),T&&e.jsx(V,{}),e.jsx("ol",{className:r.conversationTurnList,children:I.map(({turnIndex:h,isFinalTurn:S})=>e.jsx("li",{className:g(r.conversationTurnWrapper,o&&"w-full"),children:f.createElement(N,{...x,key:h,turnIndex:h,isFinalTurn:S})},h))}),e.jsx(Te,{}),C>0&&e.jsx(z,{})]})}function je(){return e.jsx(e.Fragment,{children:e.jsx(ve,{})})}const Se=w(()=>P(()=>import("./m48yy4zuq608v31y.js").then(s=>s.b),__vite__mapDeps([13,1,2,3,4,5,14,15,16,17,6,7,8,9,10,11,12,18,19,20,21,22])).then(s=>s.ChatScreenComposerAlerts));function ge(){const{clientThreadId:s,currentModelId:o,isCompanionWindow:t,onRequestCompletion:n}=f.useContext(_),a=G(s),i=Q(s),c=M(s,i),d=c>=2,m=Z(s,i),l=$(s)&&!d&&J(a);K(c,s,i,l);const{setComposerFooterElement:u}=f.useContext(R);return e.jsx("div",{className:r.footer,children:e.jsxs(X,{style:{"--bar-gap":"0.5rem","--bar-background-color":"transparent"},children:[e.jsxs(L,{type:"secondary",className:"relative",children:[e.jsx(Y,{className:r.scrollButton}),e.jsx(Se,{})]}),e.jsxs(L,{type:"primary",ref:u,children:[e.jsx(Ce,{clientThreadId:s,currentModelId:o,isNewThread:l,noWrap:!0,onRequestCompletion:n,showPromptStarters:l||!m}),!t&&e.jsx("div",{className:"text-center text-xs text-token-text-secondary",children:e.jsx(F,{clientThreadId:s})})]})]})})}function we({hideHeader:s=!1,hideFooter:o=!1,hideTools:t=!1}){const{clientThreadId:n,currentModelId:a,conversationLeafId:i,isCompanionWindow:c,isInstalledApp:d,onRequestCompletion:m}=me(),{showEmptyState:l}=k({clientThreadId:n,currentLeafId:i}),u=ee()[a],[C,x]=se({name:"composer-bar",track:"height"}),p=te(n),v=ne(),{isOpen:j}=ae();return e.jsx(re.Provider,{value:m,children:e.jsx(oe,{children:e.jsxs(ie,{clientThreadId:n,currentLeafId:i,children:[e.jsx(ce,{children:p!=null&&e.jsx("title",{children:p})}),e.jsx(de,{clientThreadId:n,className:"flex-1",currentModelConfig:u,children:e.jsx(R.Provider,{value:{setComposerFooterElement:x},children:e.jsxs("div",{className:"h-full",style:{container:"thread-container / inline-size"},children:[e.jsx(E,{id:"canvas-state",name:"canvas-state",checked:v}),e.jsx(E,{id:"thread-extended-info-sidebar-state",name:"thread-extended-info-sidebar-state",checked:j}),e.jsx(le,{anchor:"vertical",className:g(r.screen,l&&r.screenEmptyState,c&&r.screenCompanionWindow,d&&r.screenInstalledApp),name:"thread",leading:!s&&e.jsx(fe,{}),style:C,trackLeading:!0,trackTrailing:!0,trailing:!o&&e.jsx(ge,{}),children:e.jsx(je,{})}),!c&&!t&&e.jsxs(e.Fragment,{children:[e.jsx(xe,{}),e.jsx(he,{})]})]})})})]})})})}export{we as C};
//# sourceMappingURL=o3mzv2ikg6836yuv.js.map