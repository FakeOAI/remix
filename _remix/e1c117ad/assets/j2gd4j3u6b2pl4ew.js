import{ei as l,B as u,r as i,j as e,a0 as g,W as m,cl as d,cm as f,ao as o}from"./ns1tfo6glfhr2njn.js";import{C as z}from"./b8fyuxiu70ib5j0u.js";import{G as h}from"./fposcwye2ty8gl30.js";import{ba as x,n as G,qt as p}from"./lnlvqx2sg8j5t2nm.js";import{G as j}from"./f3eq50jznu8y5bqh.js";import{G as c}from"./dytemrg5wcvhiqo0.js";import{G as M}from"./lvcipc8wajiey0ir.js";function T(){const a=l(),{gizmoId:t}=u();switch(a.kind){case"anon_gizmo":return e.jsx(h,{gizmo:a.gizmo},t);case"chat_page":return i.createElement(E,{...a,key:t,gizmoId:t})}}function E(a){const{data:t,error:s}=x(a.gizmoId),r=g()?.canInteractWithGizmos(),n=m();return i.useEffect(()=>{t==null&&s!=null&&n(d(f.GIZMO_NOT_FOUND))},[n,t,s]),s!=null&&r?e.jsx(v,{}):r===!1?e.jsx(A,{gizmo:t}):i.createElement(z,{...a,key:a.gizmoId})}function v(){return e.jsx(c,{children:e.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[e.jsx("div",{className:"font-bold",children:e.jsx(o,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),e.jsx(o,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function A({gizmo:a}){const t=m();return e.jsx(c,{children:e.jsx(j,{gizmo:a,children:e.jsxs("div",{className:"mt-7 flex flex-col gap-4",children:[e.jsx(M,{onClick:()=>G(t,"Gizmo page upsell button"),children:e.jsx(o,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(o,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}const I=({data:a,matches:t})=>a?.kind==="anon_gizmo"?p(a.gizmo):t.flatMap(s=>s.meta??[]);export{T as G,E as a,I as m};
//# sourceMappingURL=j2gd4j3u6b2pl4ew.js.map