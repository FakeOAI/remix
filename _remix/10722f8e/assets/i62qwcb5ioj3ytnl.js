import{V as u,r,j as e,aq as d,bj as m,aL as g,aM as f,J as i}from"./c7aga084p6cc1sp7.js";import{a as x}from"./n51bb9eoc29vyhaf.js";import{G as h}from"./o4igupvgtu0gqd4t.js";import{u as z}from"./v7fhrf7mts6v015r.js";import{G}from"./ewemrh8xagbmqm8r.js";import{G as c}from"./gf6pwioehmmwusd1.js";import{aS as j,s as p}from"./kwqjydcdgjzzoakj.js";function T(t){const a=u().query.gizmoId;switch(t.kind){case"anon_gizmo":return e.jsx(h,{gizmo:t.gizmo},a);case"chat_page":return r.createElement(E,{...t,key:a,gizmoId:a})}}function E(t){const{data:s,error:a}=z(t.gizmoId),o=d(),n=o==null?void 0:o.canInteractWithGizmos(),l=m();return r.useEffect(()=>{s==null&&a!=null&&l(g(f.GIZMO_NOT_FOUND))},[l,s,a]),a!=null&&n?e.jsx(M,{}):n===!1?e.jsx(v,{gizmo:s}):r.createElement(x,{...t,key:t.gizmoId})}function M(){return e.jsx(c,{children:e.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[e.jsx("div",{className:"font-bold",children:e.jsx(i,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),e.jsx(i,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function v({gizmo:t}){const s=m();return e.jsx(c,{children:e.jsx(G,{gizmo:t,children:e.jsxs("div",{className:"mt-7 flex flex-col gap-4",children:[e.jsx(j,{onClick:()=>p(s,"Gizmo page upsell button"),children:e.jsx(i,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(i,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}export{T as G,E as a};
//# sourceMappingURL=i62qwcb5ioj3ytnl.js.map