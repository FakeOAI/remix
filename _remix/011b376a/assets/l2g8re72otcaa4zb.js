import{W as u,r,j as e,ar as d,bo as m,aQ as g,aR as f,J as o}from"./b95k5sm390dfb82m.js";import{a as x}from"./lgr6ar24zlvrabf4.js";import{G as h}from"./c7wo57ucxf8vmvpg.js";import{d as z}from"./jn0qrdhjlis4y3ks.js";import{G}from"./e57mjy8xwar1l6wv.js";import{G as c}from"./d9iakyb358wy04yg.js";import{aV as j,s as p}from"./d570jy65vqz0su9a.js";function S(t){const a=u().query.gizmoId;switch(t.kind){case"anon_gizmo":return e.jsx(h,{gizmo:t.gizmo},a);case"chat_page":return r.createElement(E,{...t,key:a,gizmoId:a})}}function E(t){const{data:s,error:a}=z(t.gizmoId),i=d(),n=i==null?void 0:i.canInteractWithGizmos(),l=m();return r.useEffect(()=>{s==null&&a!=null&&l(g(f.GIZMO_NOT_FOUND))},[l,s,a]),a!=null&&n?e.jsx(M,{}):n===!1?e.jsx(v,{gizmo:s}):r.createElement(x,{...t,key:t.gizmoId})}function M(){return e.jsx(c,{children:e.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[e.jsx("div",{className:"font-bold",children:e.jsx(o,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),e.jsx(o,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function v({gizmo:t}){const s=m();return e.jsx(c,{children:e.jsx(G,{gizmo:t,children:e.jsxs("div",{className:"mt-7 flex flex-col gap-4",children:[e.jsx(j,{onClick:()=>p(s,"Gizmo page upsell button"),children:e.jsx(o,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(o,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}export{S as G,E as a};
//# sourceMappingURL=l2g8re72otcaa4zb.js.map