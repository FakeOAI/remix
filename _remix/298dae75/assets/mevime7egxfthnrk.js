import{dm as l,dI as u,r as i,l as e,aN as d,bD as m,c3 as g,c4 as f,a0 as s}from"./oee7i5r8ijmn1tdg.js";import{C as z}from"./ucsuhnz5pdm5yjab.js";import{G as h}from"./gpc7dud4xj4cfk7r.js";import{a as x}from"./c6d4td7prifwq95v.js";import{g as G}from"./i84m6j1umyy8q66z.js";import{G as p}from"./gy07krm4vyp3fth3.js";import{G as c}from"./g7ftxaiamulv6lqj.js";import{G as j}from"./grca5if7omd0hz5h.js";import{A as M}from"./gi106u69uoz82g5o.js";function O(){const a=l(),{gizmoId:t}=u();switch(a.kind){case"anon_gizmo":return e.jsx(h,{gizmo:a.gizmo},t);case"chat_page":return i.createElement(E,{...a,key:t,gizmoId:t})}}function E(a){const{data:t,error:o}=x(a.gizmoId),r=d()?.canInteractWithGizmos(),n=m();return i.useEffect(()=>{t==null&&o!=null&&n(g(f.GIZMO_NOT_FOUND))},[n,t,o]),o!=null&&r?e.jsx(A,{}):r===!1?e.jsx(v,{gizmo:t}):i.createElement(z,{...a,key:a.gizmoId})}function A(){return e.jsx(c,{children:e.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[e.jsx("div",{className:"font-bold",children:e.jsx(s,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),e.jsx(s,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function v({gizmo:a}){const t=m();return e.jsx(c,{children:e.jsx(p,{gizmo:a,children:e.jsxs("div",{className:"mt-7 flex flex-col gap-4",children:[e.jsx(j,{onClick:()=>M(t,"Gizmo page upsell button"),children:e.jsx(s,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(s,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}const b=({data:a,matches:t})=>a?.kind==="anon_gizmo"?G(a.gizmo):t.flatMap(o=>o.meta??[]);export{O as G,E as a,b as m};
//# sourceMappingURL=mevime7egxfthnrk.js.map