import{S as u,r,j as e,an as d,bi as m,aI as g,aJ as f,G as i}from"./kkasil63rmfidan7.js";import{C as x}from"./basdbfbh4w2m2m5r.js";import{G as h}from"./o8qdl1elatj3rfnn.js";import{u as z}from"./c8spuoldjzhkt44r.js";import{G}from"./bllz95bri8cvn1jb.js";import{G as c}from"./m53o5i2t1h7ip6mk.js";import{aM as j,s as p}from"./m5ko8xkwcu432ruw.js";function P(t){const s=u().query.gizmoId;switch(t.kind){case"anon_gizmo":return e.jsx(h,{gizmo:t.gizmo},s);case"chat_page":return r.createElement(E,{...t,key:s,gizmoId:s})}}function E(t){const{data:a,error:s}=z(t.gizmoId),o=d(),n=o==null?void 0:o.canInteractWithGizmos(),l=m();return r.useEffect(()=>{a==null&&s!=null&&l(g(f.GIZMO_NOT_FOUND))},[l,a,s]),s!=null&&n?e.jsx(M,{}):n===!1?e.jsx(v,{gizmo:a}):r.createElement(x,{...t,key:t.gizmoId})}function M(){return e.jsx(c,{children:e.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[e.jsx("div",{className:"font-bold",children:e.jsx(i,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),e.jsx(i,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function v({gizmo:t}){const a=m();return e.jsx(c,{children:e.jsx(G,{gizmo:t,children:e.jsxs("div",{className:"mt-7 flex flex-col gap-4",children:[e.jsx(j,{onClick:()=>p(a,"Gizmo page upsell button"),children:e.jsx(i,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(i,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}export{P as G,E as a};
//# sourceMappingURL=mu3tokvwm7p7t6cb.js.map