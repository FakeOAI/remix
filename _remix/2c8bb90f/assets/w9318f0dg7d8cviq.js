import{dp as S,dq as f,r as o,S as p,dr as C,ds as y,dt as E,dk as v,l as t,du as R,dv as _,dw as A,dx as N,dy as g,dz as B,dA as F,dh as P,m as c,dB as T,dC as q,dD as D,dE as G,dF as L,dG as w,dH as H,dI as I,dn as O,dJ as u,dK as U}from"./msit3m24yq8wtq5q.js";import"./kagva72zvkrvo4t7.js";var $={};S();const Q=()=>!1,W=()=>[{title:"ChatGPT"},...B];function M(){return F().map(s=>s.data?.dehydratedState).filter(s=>s!=null).reduce((s,n)=>(s.queries.push(...n.queries),s.mutations.push(...n.mutations),s),{mutations:[],queries:[]})}function h({children:e,isSearchPage:a,isElectron:s,isIos:n,isAndroidChrome:d,cspScriptNonce:r}){return t.jsxs("html",{"data-build":P,dir:"ltr",className:c({"snc-root":a,"sdtrn-root":s}),suppressHydrationWarning:!0,children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"UTF-8"}),t.jsx("meta",{name:"viewport",content:`width=device-width, initial-scale=1${n?", maximum-scale=1":""}`}),d?t.jsx("link",{rel:"manifest",href:"/manifest.json"}):null,t.jsx(T,{}),t.jsx(q,{}),t.jsx(D,{}),t.jsx(G,{})]}),t.jsxs("body",{className:c({snc:a}),children:[t.jsx(L.Provider,{value:{cspScriptNonce:r,isElectron:!!s},children:e}),t.jsx(w,{nonce:r})]})]})}function z(){const e=H(),{cspNonce:a}=o.useContext(p);return t.jsx(h,{cspScriptNonce:a,children:I(e)?e.status===404?t.jsx(O,{}):t.jsx(u,{error:new Error(`Route Error (${e.status} ${e.statusText}): ${e.message}`),resetError:()=>location.reload()}):t.jsx(u,{error:e,resetError:()=>location.reload()})})}function J(){const{clientBootstrap:e,isIos:a,isAndroidChrome:s,isElectron:n}=f(),{cspNonce:d}=o.useContext(p),[r]=o.useState(()=>C()),i=M(),l=o.useRef(!1);l.current||(l.current=!0,y(r,i),U(e),E(r));const{pathname:x}=v(),m=x.startsWith("/search"),j=e.statsig??null;return t.jsx(R,{statsig:$.FORCE_STATSIG_DEFAULTS?null:j,children:t.jsx(h,{isIos:a,isAndroidChrome:s,isElectron:n,isSearchPage:m,cspScriptNonce:d,children:t.jsx(_,{client:r,children:t.jsx(A,{state:i,children:t.jsx(N,{Component:g,remixQueryClient:r,pageProps:e})})})})})}export{z as ErrorBoundary,J as default,W as meta,Q as shouldRevalidate};
//# sourceMappingURL=w9318f0dg7d8cviq.js.map