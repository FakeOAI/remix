import{dm as j,dn as f,r as d,dp as S,dq as C,dr as y,w as E,x as t,ds as v,dt as R,du as _,dv as A,dw as N,dx as g,dy as B,df as F,N as u,dz as P,dA as T,dB as q,dC as w,d2 as D,dD as G,dE as L,dF as H,dG as I,dk as O,dH as c,dI as U}from"./m8rh4g4wti5oij6r.js";import"./f2s0ymrsx8zkcqzb.js";var $={};j();const Q=()=>!1,W=()=>[{title:"ChatGPT"},...g];function M(){return B().map(s=>s.data?.dehydratedState).filter(s=>s!=null).reduce((s,n)=>(s.queries.push(...n.queries),s.mutations.push(...n.mutations),s),{mutations:[],queries:[]})}function p({children:e,isSearchPage:a,isElectron:s,isIos:n,isAndroidChrome:o,cspScriptNonce:r}){return t.jsxs("html",{"data-build":F,dir:"ltr",className:u({"snc-root":a,"sdtrn-root":s}),suppressHydrationWarning:!0,children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"UTF-8"}),t.jsx("meta",{name:"viewport",content:`width=device-width, initial-scale=1${n?", maximum-scale=1":""}`}),o?t.jsx("link",{rel:"manifest",href:"/manifest.json"}):null,t.jsx(P,{}),t.jsx(T,{}),t.jsx(q,{}),t.jsx(w,{})]}),t.jsxs("body",{className:u({snc:a}),children:[t.jsx(D.Provider,{value:{cspScriptNonce:r,isElectron:!!s},children:e}),t.jsx(G,{nonce:r})]})]})}function z(){const e=L(),{cspNonce:a}=d.useContext(H);return t.jsx(p,{cspScriptNonce:a,children:I(e)?e.status===404?t.jsx(O,{}):t.jsx(c,{error:new Error(`Route Error (${e.status} ${e.statusText}): ${e.message}`),resetError:()=>location.reload()}):t.jsx(c,{error:e,resetError:()=>location.reload()})})}function Y(){const{clientBootstrap:e,isIos:a,isAndroidChrome:s,isElectron:n,cspScriptNonce:o}=f(),[r]=d.useState(()=>S()),i=M(),l=d.useRef(!1);l.current||(l.current=!0,C(r,i),U(e),y(r));const{pathname:x}=E(),h=x.startsWith("/search"),m=e.statsig??null;return t.jsx(v,{statsig:$.FORCE_STATSIG_DEFAULTS?null:m,children:t.jsx(p,{isIos:a,isAndroidChrome:s,isElectron:n,isSearchPage:h,cspScriptNonce:o,children:t.jsx(R,{client:r,children:t.jsx(_,{state:i,children:t.jsx(A,{Component:N,remixQueryClient:r,pageProps:e})})})})})}export{z as ErrorBoundary,Y as default,W as meta,Q as shouldRevalidate};
//# sourceMappingURL=dtwys2vwp6qrnkh0.js.map