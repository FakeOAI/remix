import{d$ as l,N as u,r as i,a6 as e,a3 as d,Z as m,ci as g,cj as f,aG as o}from"./j18nlqm348px4nxa.js";import{C as h}from"./l3gmwm1hk2cq39e0.js";import{G as z}from"./gvnbwbqnoau11glk.js";import{bh as x,q as G,rD as p}from"./hc8non16qyh1ycvz.js";import{G as j}from"./c6t6bi75jysvfh53.js";import{G as c}from"./lczjkq3kzeisiw7v.js";import{G as M}from"./pb5i1y7myvaxdc4r.js";function T(){const a=l(),{gizmoId:t}=u();switch(a.kind){case"anon_gizmo":return e.jsx(z,{gizmo:a.gizmo},t);case"chat_page":return i.createElement(E,{...a,key:t,gizmoId:t})}}function E(a){const{data:t,error:s}=x(a.gizmoId),r=d()?.canInteractWithGizmos(),n=m();return i.useEffect(()=>{t==null&&s!=null&&n(g(f.GIZMO_NOT_FOUND))},[n,t,s]),s!=null&&r?e.jsx(v,{}):r===!1?e.jsx(A,{gizmo:t}):i.createElement(h,{...a,key:a.gizmoId})}function v(){return e.jsx(c,{children:e.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[e.jsx("div",{className:"font-bold",children:e.jsx(o,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),e.jsx(o,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function A({gizmo:a}){const t=m();return e.jsx(c,{children:e.jsx(j,{gizmo:a,children:e.jsxs("div",{className:"mt-7 flex flex-col gap-4",children:[e.jsx(M,{onClick:()=>G(t,"Gizmo page upsell button"),children:e.jsx(o,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(o,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}const I=({data:a,matches:t})=>a?.kind==="anon_gizmo"?p(a.gizmo):t.flatMap(s=>s.meta??[]);export{T as G,E as a,I as m};
//# sourceMappingURL=jhw28qy1e1npt3yo.js.map