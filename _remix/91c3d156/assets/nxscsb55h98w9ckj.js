import{S as u,r,j as e,an as d,bi as m,aI as g,aJ as f,G as i}from"./nz057gr5epx40qb6.js";import{C as x}from"./c44giibeu928ievv.js";import{G as h}from"./d5n9npmjp1jf61wx.js";import{u as z}from"./hcl0k169m8va9obe.js";import{G}from"./k8fdk47wxcl0vnjb.js";import{G as c}from"./d0gvuc0xr7hs5qrz.js";import{aM as j,s as p}from"./f6nleccxr4ywnup7.js";function P(t){const s=u().query.gizmoId;switch(t.kind){case"anon_gizmo":return e.jsx(h,{gizmo:t.gizmo},s);case"chat_page":return r.createElement(E,{...t,key:s,gizmoId:s})}}function E(t){const{data:a,error:s}=z(t.gizmoId),o=d(),n=o==null?void 0:o.canInteractWithGizmos(),l=m();return r.useEffect(()=>{a==null&&s!=null&&l(g(f.GIZMO_NOT_FOUND))},[l,a,s]),s!=null&&n?e.jsx(M,{}):n===!1?e.jsx(v,{gizmo:a}):r.createElement(x,{...t,key:t.gizmoId})}function M(){return e.jsx(c,{children:e.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[e.jsx("div",{className:"font-bold",children:e.jsx(i,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),e.jsx(i,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function v({gizmo:t}){const a=m();return e.jsx(c,{children:e.jsx(G,{gizmo:t,children:e.jsxs("div",{className:"mt-7 flex flex-col gap-4",children:[e.jsx(j,{onClick:()=>p(a,"Gizmo page upsell button"),children:e.jsx(i,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(i,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}export{P as G,E as a};
//# sourceMappingURL=nxscsb55h98w9ckj.js.map