import{dN as u,r,j as e,as as g,ax as l,b1 as f,b2 as d,K as a}from"./b65sqkpu1lod5t78.js";import{C as x}from"./ef9s36zwk7ng119c.js";import{G as z}from"./bw6lidai1wcosip9.js";import{d as h}from"./lbu4wpp3xetrypiv.js";import{g as p}from"./dvcuxh2dopwfz0s8.js";import{G}from"./h2f8t9dts145wubr.js";import{G as c}from"./c0gw4kr8ctsnecgp.js";import{G as j}from"./jrx9zsucjkabh7rm.js";import{a3 as M}from"./dmqais3mye801yz3.js";import{u as E}from"./i275e5ggad38tgwm.js";function O(){const t=E(),{gizmoId:o}=u();switch(t.kind){case"anon_gizmo":return e.jsx(z,{gizmo:t.gizmo},o);case"chat_page":return r.createElement(v,{...t,key:o,gizmoId:o})}}function v(t){const{data:o,error:s}=h(t.gizmoId),i=g(),n=i==null?void 0:i.canInteractWithGizmos(),m=l();return r.useEffect(()=>{o==null&&s!=null&&m(f(d.GIZMO_NOT_FOUND))},[m,o,s]),s!=null&&n?e.jsx(A,{}):n===!1?e.jsx(N,{gizmo:o}):r.createElement(x,{...t,key:t.gizmoId})}function A(){return e.jsx(c,{children:e.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[e.jsx("div",{className:"font-bold",children:e.jsx(a,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),e.jsx(a,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function N({gizmo:t}){const o=l();return e.jsx(c,{children:e.jsx(G,{gizmo:t,children:e.jsxs("div",{className:"mt-7 flex flex-col gap-4",children:[e.jsx(j,{onClick:()=>M(o,"Gizmo page upsell button"),children:e.jsx(a,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(a,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}const w=({data:t,matches:o})=>(t==null?void 0:t.kind)==="anon_gizmo"?p(t.gizmo):o.flatMap(s=>s.meta??[]);export{O as G,v as a,w as m};
//# sourceMappingURL=fc1evyy0rncrzk9m.js.map