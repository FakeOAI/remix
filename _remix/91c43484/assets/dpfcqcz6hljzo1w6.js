import{dh as l,dE as u,r as i,y as e,ag as g,bc as m,bM as d,bN as f,a1 as s}from"./hbchlcqon2hwxr80.js";import{C as h}from"./ngwcmjl4t708mghh.js";import{G as z}from"./exx07gg2j2sotf76.js";import{a as x}from"./iecjxwy4bdhrkjjx.js";import{g as G}from"./ecgwjsca4j4ylx3d.js";import{G as p}from"./s97qhkol9pg9fyh4.js";import{G as c}from"./lznukf6bvzphzvjh.js";import{G as j}from"./lf7xbpkewnaceqo8.js";import{y as M}from"./bj9u7c4m96v4ynu9.js";function I(){const a=l(),{gizmoId:t}=u();switch(a.kind){case"anon_gizmo":return e.jsx(z,{gizmo:a.gizmo},t);case"chat_page":return i.createElement(E,{...a,key:t,gizmoId:t})}}function E(a){const{data:t,error:o}=x(a.gizmoId),r=g()?.canInteractWithGizmos(),n=m();return i.useEffect(()=>{t==null&&o!=null&&n(d(f.GIZMO_NOT_FOUND))},[n,t,o]),o!=null&&r?e.jsx(y,{}):r===!1?e.jsx(v,{gizmo:t}):i.createElement(h,{...a,key:a.gizmoId})}function y(){return e.jsx(c,{children:e.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[e.jsx("div",{className:"font-bold",children:e.jsx(s,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),e.jsx(s,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function v({gizmo:a}){const t=m();return e.jsx(c,{children:e.jsx(p,{gizmo:a,children:e.jsxs("div",{className:"mt-7 flex flex-col gap-4",children:[e.jsx(j,{onClick:()=>M(t,"Gizmo page upsell button"),children:e.jsx(s,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(s,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}const O=({data:a,matches:t})=>a?.kind==="anon_gizmo"?G(a.gizmo):t.flatMap(o=>o.meta??[]);export{I as G,E as a,O as m};
//# sourceMappingURL=dpfcqcz6hljzo1w6.js.map