import{dK as l,r as i,l as e,aM as u,bA as m,b$ as g,c0 as d,Z as s}from"./ib63zzsfkf72wln1.js";import{C as f}from"./n26vdyats04djl44.js";import{G as z}from"./dvds87x9nmw0tywj.js";import{b as h}from"./bskmkizi274hjpny.js";import{g as x}from"./ct4alf3fd7ik1490.js";import{G as p}from"./hus3cp07raaf31z3.js";import{G as c}from"./ndc7lmj53taryovo.js";import{G}from"./nqlenj627tuzcn0n.js";import{z as j}from"./fhv3hyfwgezymfbi.js";import{u as M}from"./ov7bhqwydz73p0vv.js";function O(){const t=M(),{gizmoId:a}=l();switch(t.kind){case"anon_gizmo":return e.jsx(z,{gizmo:t.gizmo},a);case"chat_page":return i.createElement(E,{...t,key:a,gizmoId:a})}}function E(t){const{data:a,error:o}=h(t.gizmoId),r=u()?.canInteractWithGizmos(),n=m();return i.useEffect(()=>{a==null&&o!=null&&n(g(d.GIZMO_NOT_FOUND))},[n,a,o]),o!=null&&r?e.jsx(A,{}):r===!1?e.jsx(v,{gizmo:a}):i.createElement(f,{...t,key:t.gizmoId})}function A(){return e.jsx(c,{children:e.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[e.jsx("div",{className:"font-bold",children:e.jsx(s,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),e.jsx(s,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function v({gizmo:t}){const a=m();return e.jsx(c,{children:e.jsx(p,{gizmo:t,children:e.jsxs("div",{className:"mt-7 flex flex-col gap-4",children:[e.jsx(G,{onClick:()=>j(a,"Gizmo page upsell button"),children:e.jsx(s,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(s,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}const w=({data:t,matches:a})=>t?.kind==="anon_gizmo"?x(t.gizmo):a.flatMap(o=>o.meta??[]);export{O as G,E as a,w as m};
//# sourceMappingURL=ey2opm37ppvzv4c9.js.map