import{dI as l,r as i,l as e,aN as u,bC as m,c0 as g,c1 as d,a0 as s}from"./izrp0ab0bt841f6f.js";import{C as f}from"./jjexx8hmkgityi96.js";import{G as z}from"./ohcortd3umlo3va4.js";import{b as h}from"./imoil9kgknk4ot9l.js";import{g as x}from"./k3mbl23swzw3txdu.js";import{G as p}from"./oh39p2otr7nek6ah.js";import{G as c}from"./lubk1loh4inlq03h.js";import{G}from"./gbt1qnco8wzci2uc.js";import{A as j}from"./flhoklliryp7qvb5.js";import{u as M}from"./cn866xf12yszd5r3.js";function O(){const t=M(),{gizmoId:a}=l();switch(t.kind){case"anon_gizmo":return e.jsx(z,{gizmo:t.gizmo},a);case"chat_page":return i.createElement(E,{...t,key:a,gizmoId:a})}}function E(t){const{data:a,error:o}=h(t.gizmoId),r=u()?.canInteractWithGizmos(),n=m();return i.useEffect(()=>{a==null&&o!=null&&n(g(d.GIZMO_NOT_FOUND))},[n,a,o]),o!=null&&r?e.jsx(A,{}):r===!1?e.jsx(v,{gizmo:a}):i.createElement(f,{...t,key:t.gizmoId})}function A(){return e.jsx(c,{children:e.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[e.jsx("div",{className:"font-bold",children:e.jsx(s,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),e.jsx(s,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function v({gizmo:t}){const a=m();return e.jsx(c,{children:e.jsx(p,{gizmo:t,children:e.jsxs("div",{className:"mt-7 flex flex-col gap-4",children:[e.jsx(G,{onClick:()=>j(a,"Gizmo page upsell button"),children:e.jsx(s,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(s,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}const w=({data:t,matches:a})=>t?.kind==="anon_gizmo"?x(t.gizmo):a.flatMap(o=>o.meta??[]);export{O as G,E as a,w as m};
//# sourceMappingURL=i43c1wfdiee1kzgs.js.map