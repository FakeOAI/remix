import{dI as u,r,j as e,as as g,aA as l,b8 as f,b9 as d,U as a}from"./hloj85fregi26ji6.js";import{C as z}from"./odozxhyyiz9dksjz.js";import{G as h}from"./dcpjh7qaa3gmzy1f.js";import{b as x}from"./oxm37jjpmmj4jh4x.js";import{g as p}from"./hn9f977mxxh6bu82.js";import{G}from"./gbs7h0lv3lza1lcd.js";import{G as c}from"./le8snox0b37t4z3c.js";import{G as j}from"./mjaw86lraty8uaad.js";import{ae as M}from"./g7w33hsyqmw6f524.js";import{u as E}from"./ek2atwvylgie2jz8.js";function O(){const t=E(),{gizmoId:o}=u();switch(t.kind){case"anon_gizmo":return e.jsx(h,{gizmo:t.gizmo},o);case"chat_page":return r.createElement(A,{...t,key:o,gizmoId:o})}}function A(t){const{data:o,error:s}=x(t.gizmoId),i=g(),n=i==null?void 0:i.canInteractWithGizmos(),m=l();return r.useEffect(()=>{o==null&&s!=null&&m(f(d.GIZMO_NOT_FOUND))},[m,o,s]),s!=null&&n?e.jsx(v,{}):n===!1?e.jsx(y,{gizmo:o}):r.createElement(z,{...t,key:t.gizmoId})}function v(){return e.jsx(c,{children:e.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[e.jsx("div",{className:"font-bold",children:e.jsx(a,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),e.jsx(a,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function y({gizmo:t}){const o=l();return e.jsx(c,{children:e.jsx(G,{gizmo:t,children:e.jsxs("div",{className:"mt-7 flex flex-col gap-4",children:[e.jsx(j,{onClick:()=>M(o,"Gizmo page upsell button"),children:e.jsx(a,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(a,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}const U=({data:t,matches:o})=>(t==null?void 0:t.kind)==="anon_gizmo"?p(t.gizmo):o.flatMap(s=>s.meta??[]);export{O as G,A as a,U as m};
//# sourceMappingURL=pcyv3s51ut4ut9ee.js.map