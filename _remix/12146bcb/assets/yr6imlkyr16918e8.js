import{di as l,dF as u,r as i,x as e,ah as d,bd as m,bM as g,bN as f,a2 as s}from"./h11ymloodq9g1jsm.js";import{C as h}from"./g6jswpzs0zl01wmn.js";import{G as x}from"./n2cf24ojwp9x8vv5.js";import{a as z}from"./bjn84gz6ir9jwwg5.js";import{g as G}from"./l1y8k68hst3z986i.js";import{G as p}from"./ny0wwsk9p6l9g8t1.js";import{G as c}from"./ccb7puhzh6dnnocg.js";import{G as j}from"./djeut37arnp1h1vs.js";import{y as M}from"./d99imeng6jbz5fyz.js";function F(){const a=l(),{gizmoId:t}=u();switch(a.kind){case"anon_gizmo":return e.jsx(x,{gizmo:a.gizmo},t);case"chat_page":return i.createElement(E,{...a,key:t,gizmoId:t})}}function E(a){const{data:t,error:o}=z(a.gizmoId),r=d()?.canInteractWithGizmos(),n=m();return i.useEffect(()=>{t==null&&o!=null&&n(g(f.GIZMO_NOT_FOUND))},[n,t,o]),o!=null&&r?e.jsx(v,{}):r===!1?e.jsx(y,{gizmo:t}):i.createElement(h,{...a,key:a.gizmoId})}function v(){return e.jsx(c,{children:e.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[e.jsx("div",{className:"font-bold",children:e.jsx(s,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),e.jsx(s,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function y({gizmo:a}){const t=m();return e.jsx(c,{children:e.jsx(p,{gizmo:a,children:e.jsxs("div",{className:"mt-7 flex flex-col gap-4",children:[e.jsx(j,{onClick:()=>M(t,"Gizmo page upsell button"),children:e.jsx(s,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(s,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}const I=({data:a,matches:t})=>a?.kind==="anon_gizmo"?G(a.gizmo):t.flatMap(o=>o.meta??[]);export{F as G,E as a,I as m};
//# sourceMappingURL=yr6imlkyr16918e8.js.map