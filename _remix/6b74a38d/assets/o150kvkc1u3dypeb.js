import{dP as u,r,j as e,ap as g,bi as l,aK as f,aL as d,I as a}from"./nkav6u5sgjh9k32o.js";import{a as z}from"./bsiuhsgrvxhgk80d.js";import{G as x}from"./j182b98thk53qi9g.js";import{u as h}from"./nkdpb84sj0t5lqnq.js";import{g as p}from"./nn9qoplyb7jz0hlz.js";import{G}from"./njh27zrodvyq73sa.js";import{G as c}from"./jv7xws6gf7xcv34k.js";import{bg as j,s as M}from"./fvuv8t2jnmmokuz9.js";import{u as E}from"./hx7npd7js0wvft79.js";function C(){const s=E(),{gizmoId:t}=u();switch(s.kind){case"anon_gizmo":return e.jsx(x,{gizmo:s.gizmo},t);case"chat_page":return r.createElement(v,{...s,key:t,gizmoId:t})}}function v(s){const{data:t,error:o}=h(s.gizmoId),i=g(),n=i==null?void 0:i.canInteractWithGizmos(),m=l();return r.useEffect(()=>{t==null&&o!=null&&m(f(d.GIZMO_NOT_FOUND))},[m,t,o]),o!=null&&n?e.jsx(A,{}):n===!1?e.jsx(L,{gizmo:t}):r.createElement(z,{...s,key:s.gizmoId})}function A(){return e.jsx(c,{children:e.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[e.jsx("div",{className:"font-bold",children:e.jsx(a,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),e.jsx(a,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function L({gizmo:s}){const t=l();return e.jsx(c,{children:e.jsx(G,{gizmo:s,children:e.jsxs("div",{className:"mt-7 flex flex-col gap-4",children:[e.jsx(j,{onClick:()=>M(t,"Gizmo page upsell button"),children:e.jsx(a,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(a,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}const O=({data:s,matches:t})=>(s==null?void 0:s.kind)==="anon_gizmo"?p(s.gizmo):t.flatMap(o=>o.meta??[]);export{C as G,v as a,O as m};
//# sourceMappingURL=o150kvkc1u3dypeb.js.map