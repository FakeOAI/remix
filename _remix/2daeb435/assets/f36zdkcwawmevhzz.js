import{dC as u,r,j as e,aq as g,av as l,aX as f,aY as d,I as o}from"./hwf9zvd1aw2q6bni.js";import{C as z}from"./dbjwj2h5oxmylkre.js";import{G as x}from"./oeursaybce9lihvu.js";import{u as h}from"./d2enjwn8b6jly1r9.js";import{g as G}from"./lwz1f455hysr17f3.js";import{G as p}from"./cr9rnw1iy6gknfzn.js";import{G as c}from"./dp0qrbd36x4tnber.js";import{bg as j,a5 as M}from"./gcq6nq5ilw3cni50.js";import{u as E}from"./ip62y9f3i97zrke9.js";function O(){const s=E(),{gizmoId:t}=u();switch(s.kind){case"anon_gizmo":return e.jsx(x,{gizmo:s.gizmo},t);case"chat_page":return r.createElement(v,{...s,key:t,gizmoId:t})}}function v(s){const{data:t,error:a}=h(s.gizmoId),i=g(),n=i==null?void 0:i.canInteractWithGizmos(),m=l();return r.useEffect(()=>{t==null&&a!=null&&m(f(d.GIZMO_NOT_FOUND))},[m,t,a]),a!=null&&n?e.jsx(A,{}):n===!1?e.jsx(y,{gizmo:t}):r.createElement(z,{...s,key:s.gizmoId})}function A(){return e.jsx(c,{children:e.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[e.jsx("div",{className:"font-bold",children:e.jsx(o,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),e.jsx(o,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function y({gizmo:s}){const t=l();return e.jsx(c,{children:e.jsx(p,{gizmo:s,children:e.jsxs("div",{className:"mt-7 flex flex-col gap-4",children:[e.jsx(j,{onClick:()=>M(t,"Gizmo page upsell button"),children:e.jsx(o,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(o,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}const b=({data:s,matches:t})=>(s==null?void 0:s.kind)==="anon_gizmo"?G(s.gizmo):t.flatMap(a=>a.meta??[]);export{O as G,v as a,b as m};
//# sourceMappingURL=f36zdkcwawmevhzz.js.map