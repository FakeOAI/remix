import{dl as S,r as o,S as p,dm as f,dn as C,dp as y,dh as E,j as t,dq as v,dr as R,ds as _,dt as A,du as N,dv as g,dw as B,dc as F,c as l,dx as T,dy as P,dz as q,dA as D,dB as G,dC as L,dD as w,dE as O,dk as U,dF as u,dG as $}from"./hloj85fregi26ji6.js";import"./g65last9w3zpj4e1.js";var H={};const k=()=>!1,Q=()=>[{title:"ChatGPT"},...g];function I(){return B().map(s=>{var r;return(r=s.data)==null?void 0:r.dehydratedState}).filter(s=>s!=null).reduce((s,r)=>(s.queries.push(...r.queries),s.mutations.push(...r.mutations),s),{mutations:[],queries:[]})}function h({children:e,isSearchPage:a,isElectron:s,isIos:r,isAndroidChrome:d,cspScriptNonce:n}){return t.jsxs("html",{"data-build":F,dir:"ltr",className:l({"snc-root":a,"sdtrn-root":s}),suppressHydrationWarning:!0,children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"UTF-8"}),t.jsx("meta",{name:"viewport",content:`width=device-width, initial-scale=1${r?", maximum-scale=1":""}`}),d?t.jsx("link",{rel:"manifest",href:"/manifest.json"}):null,t.jsx(T,{}),t.jsx(P,{}),t.jsx(q,{}),t.jsx(D,{})]}),t.jsxs("body",{className:l({snc:a,sdtrn:s}),children:[t.jsx(G.Provider,{value:{cspScriptNonce:n,isElectron:!!s},children:e}),t.jsx(L,{nonce:n})]})]})}function W(){const e=w(),{cspNonce:a}=o.useContext(p);return t.jsx(h,{cspScriptNonce:a,children:O(e)?e.status===404?t.jsx(U,{}):t.jsx(u,{error:new Error(`Route Error (${e.status} ${e.statusText}): ${e.message}`),resetError:()=>location.reload()}):t.jsx(u,{error:e,resetError:()=>location.reload()})})}function z(){const{clientBootstrap:e,isIos:a,isAndroidChrome:s,isElectron:r}=S(),{cspNonce:d}=o.useContext(p),[n]=o.useState(()=>f()),i=I(),c=o.useRef(!1);c.current||(c.current=!0,C(n,i),$(e),y(n));const{pathname:x}=E(),m=x.startsWith("/search"),j=e.statsig??null;return t.jsx(v,{statsig:H.FORCE_STATSIG_DEFAULTS?null:j,children:t.jsx(h,{isIos:a,isAndroidChrome:s,isElectron:r,isSearchPage:m,cspScriptNonce:d,children:t.jsx(R,{client:n,children:t.jsx(_,{state:i,children:t.jsx(A,{Component:N,remixQueryClient:n,pageProps:e})})})})})}export{W as ErrorBoundary,z as default,Q as meta,k as shouldRevalidate};
//# sourceMappingURL=iehsmpy52x8yz7kt.js.map