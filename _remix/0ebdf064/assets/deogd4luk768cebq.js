import{dr as l,dL as u,r as i,l as e,aO as d,bH as m,c7 as g,c8 as f,a0 as s}from"./bx2z9ivcrsrexei9.js";import{C as z}from"./kb4liwvjb9m268t4.js";import{G as h}from"./elzqggs2hdjvlimz.js";import{a as x}from"./ieli56gcvxx4ptw4.js";import{g as G}from"./hy1rcwi5innm2mw4.js";import{G as p}from"./mbslpxcwn269mpud.js";import{G as c}from"./lavl73gqk33zxhig.js";import{G as j}from"./glfng0g3v5lxamij.js";import{A as M}from"./hfnzsjsy2v8td6lt.js";function I(){const a=l(),{gizmoId:t}=u();switch(a.kind){case"anon_gizmo":return e.jsx(h,{gizmo:a.gizmo},t);case"chat_page":return i.createElement(E,{...a,key:t,gizmoId:t})}}function E(a){const{data:t,error:o}=x(a.gizmoId),r=d()?.canInteractWithGizmos(),n=m();return i.useEffect(()=>{t==null&&o!=null&&n(g(f.GIZMO_NOT_FOUND))},[n,t,o]),o!=null&&r?e.jsx(A,{}):r===!1?e.jsx(v,{gizmo:t}):i.createElement(z,{...a,key:a.gizmoId})}function A(){return e.jsx(c,{children:e.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[e.jsx("div",{className:"font-bold",children:e.jsx(s,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),e.jsx(s,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function v({gizmo:a}){const t=m();return e.jsx(c,{children:e.jsx(p,{gizmo:a,children:e.jsxs("div",{className:"mt-7 flex flex-col gap-4",children:[e.jsx(j,{onClick:()=>M(t,"Gizmo page upsell button"),children:e.jsx(s,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(s,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}const b=({data:a,matches:t})=>a?.kind==="anon_gizmo"?G(a.gizmo):t.flatMap(o=>o.meta??[]);export{I as G,E as a,b as m};
//# sourceMappingURL=deogd4luk768cebq.js.map