import{du as S,r as o,S as p,dv as f,dw as C,dx as y,dq as E,j as t,dy as v,dz as R,dA as N,dB as _,dC as A,dD as g,dE as B,dk as F,c as u,dF as T,dG as L,dH as P,dI as q,dJ as D,dK as G,dL as O,dM as w,dt as H,dN as l,dO as I}from"./csnclwvitc93pb4o.js";import"./iqrmcf3yr8rsq080.js";var M={};const k=()=>!1,Q=()=>[{title:"ChatGPT"},...g];function U(){return B().map(s=>{var r;return(r=s.data)==null?void 0:r.dehydratedState}).filter(s=>s!=null).reduce((s,r)=>(s.queries.push(...r.queries),s.mutations.push(...r.mutations),s),{mutations:[],queries:[]})}function x({children:e,isSearchPage:a,isElectron:s,isIos:r,isAndroidChrome:d,cspScriptNonce:n}){return t.jsxs("html",{"data-build":F,dir:"ltr",className:u({"snc-root":a,"sdtrn-root":s}),suppressHydrationWarning:!0,children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"UTF-8"}),t.jsx("meta",{name:"viewport",content:`width=device-width, initial-scale=1${r?", maximum-scale=1":""}`}),d?t.jsx("link",{rel:"manifest",href:"/manifest.json"}):null,t.jsx(T,{}),t.jsx(L,{}),t.jsx(P,{}),t.jsx(q,{})]}),t.jsxs("body",{className:u({snc:a,sdtrn:s}),children:[t.jsx(D.Provider,{value:{cspScriptNonce:n,isElectron:!!s},children:e}),t.jsx(G,{nonce:n})]})]})}function W(){const e=O(),{cspNonce:a}=o.useContext(p);return t.jsx(x,{cspScriptNonce:a,children:w(e)?e.status===404?t.jsx(H,{}):t.jsx(l,{error:new Error(`Route Error (${e.status} ${e.statusText}): ${e.message}`),resetError:()=>location.reload()}):t.jsx(l,{error:e,resetError:()=>location.reload()})})}function z(){const{clientBootstrap:e,isIos:a,isAndroidChrome:s,isElectron:r}=S(),{cspNonce:d}=o.useContext(p),[n]=o.useState(()=>f()),i=U(),c=o.useRef(!1);c.current||(c.current=!0,C(n,i),I(e),y(n));const{pathname:h}=E(),m=h.startsWith("/search"),j=e.statsig??null;return t.jsx(v,{statsig:M.FORCE_STATSIG_DEFAULTS?null:j,children:t.jsx(x,{isIos:a,isAndroidChrome:s,isElectron:r,isSearchPage:m,cspScriptNonce:d,children:t.jsx(R,{client:n,children:t.jsx(N,{state:i,children:t.jsx(_,{Component:A,remixQueryClient:n,pageProps:e})})})})})}export{W as ErrorBoundary,z as default,Q as meta,k as shouldRevalidate};
//# sourceMappingURL=hcrt6pcjy4tbqgym.js.map