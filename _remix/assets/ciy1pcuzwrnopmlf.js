import{di as m,r as c,dj as x,dk as j,dl as f,de as y,j as e,dm as C,dn as S,dp as v,dq as E,dr as R,ds as w,c_ as q,c as l,dt as A,du as B,dv as P,dw as D,dx as G,dy as H,dz as L,dA as M}from"./bahzwkph2ne3eyls.js";import"./l2euh9jr36irqfhd.js";const k=()=>!1,I=()=>[{title:"ChatGPT"},...R];function N(){return w().map(t=>{var s;return(s=t.data)==null?void 0:s.dehydratedState}).filter(t=>t!=null).reduce((t,s)=>(t.queries.push(...s.queries),t.mutations.push(...s.mutations),t),{mutations:[],queries:[]})}function u({children:r,isSearchPage:n,isElectron:t,isIos:s,isAndroidChrome:d,cspScriptNonce:a}){return e.jsxs("html",{"data-build":q,dir:"ltr",className:l({"snc-root":n,"sdtrn-root":t}),suppressHydrationWarning:!0,children:[e.jsxs("head",{children:[e.jsx("meta",{name:"charset",content:"utf-8"}),e.jsx("meta",{name:"viewport",content:`width=device-width, initial-scale=1${s?", maximum-scale=1":""}`}),d?e.jsx("link",{rel:"manifest",href:"/manifest.json"}):null,e.jsx(A,{}),e.jsx(B,{}),e.jsx(P,{}),e.jsx(D,{})]}),e.jsxs("body",{className:l("antialiased",{snc:n,sdtrn:t}),children:[r,e.jsx(G,{nonce:a})]})]})}function T(){const r=H();return e.jsx(u,{children:e.jsx(L,{error:r,resetError:()=>window.location.reload()})})}function g(){const{clientBootstrap:r,isIos:n,isAndroidChrome:t,isElectron:s,cspScriptNonce:d}=m(),[a]=c.useState(()=>x()),i=N(),o=c.useRef(!1);o.current||(o.current=!0,M(a),j(a,i),f(a));const{pathname:h}=y(),p=h.startsWith("/search");return e.jsx(u,{isIos:n,isAndroidChrome:t,isElectron:s,isSearchPage:p,cspScriptNonce:d,children:e.jsx(C,{client:a,children:e.jsx(S,{state:i,children:e.jsx(v,{Component:E,remixQueryClient:a,pageProps:r})})})})}export{T as ErrorBoundary,g as default,I as meta,k as shouldRevalidate};
//# sourceMappingURL=ciy1pcuzwrnopmlf.js.map