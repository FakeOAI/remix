import{dN as u,r,j as e,as as g,ax as l,b1 as f,b2 as d,K as a}from"./cq30atfn4hkan4n6.js";import{C as x}from"./fgjzsnra5l3cwg7s.js";import{G as z}from"./mmebqexdxkcd6txz.js";import{c as h}from"./kxnoie2q7a08rba4.js";import{g as p}from"./h52pvmssqdkok97f.js";import{G}from"./he0zdcwj8l3qqlx1.js";import{G as c}from"./i7xa2zcsfikc1gr5.js";import{G as j}from"./ba8iksydvu97gj3b.js";import{a3 as M}from"./kuzyui3g7be29dp4.js";import{u as E}from"./j8w3flt3wa2hdg7i.js";function O(){const t=E(),{gizmoId:o}=u();switch(t.kind){case"anon_gizmo":return e.jsx(z,{gizmo:t.gizmo},o);case"chat_page":return r.createElement(v,{...t,key:o,gizmoId:o})}}function v(t){const{data:o,error:s}=h(t.gizmoId),i=g(),n=i==null?void 0:i.canInteractWithGizmos(),m=l();return r.useEffect(()=>{o==null&&s!=null&&m(f(d.GIZMO_NOT_FOUND))},[m,o,s]),s!=null&&n?e.jsx(A,{}):n===!1?e.jsx(N,{gizmo:o}):r.createElement(x,{...t,key:t.gizmoId})}function A(){return e.jsx(c,{children:e.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[e.jsx("div",{className:"font-bold",children:e.jsx(a,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),e.jsx(a,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function N({gizmo:t}){const o=l();return e.jsx(c,{children:e.jsx(G,{gizmo:t,children:e.jsxs("div",{className:"mt-7 flex flex-col gap-4",children:[e.jsx(j,{onClick:()=>M(o,"Gizmo page upsell button"),children:e.jsx(a,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(a,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}const w=({data:t,matches:o})=>(t==null?void 0:t.kind)==="anon_gizmo"?p(t.gizmo):o.flatMap(s=>s.meta??[]);export{O as G,v as a,w as m};
//# sourceMappingURL=ihf88wgg4yi5pdra.js.map