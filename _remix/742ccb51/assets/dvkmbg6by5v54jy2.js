import{dM as u,r,j as e,as as g,ax as l,b1 as d,b2 as f,K as a}from"./hzfabz2o8ombe5jw.js";import{C as x}from"./c3atld7ruh0z5qak.js";import{G as z}from"./fawtfeghyg52yiqv.js";import{d as h}from"./irzndtt8vp8asixn.js";import{g as p}from"./m4ydchv9pwda8q8j.js";import{G}from"./f5oehfbcbky1xftj.js";import{G as c}from"./hrkchwxm8c911lgy.js";import{bj as j,a5 as M}from"./fk2on43rkvczq1b9.js";import{u as E}from"./cbs9pfvmp171zxn7.js";function I(){const s=E(),{gizmoId:t}=u();switch(s.kind){case"anon_gizmo":return e.jsx(z,{gizmo:s.gizmo},t);case"chat_page":return r.createElement(v,{...s,key:t,gizmoId:t})}}function v(s){const{data:t,error:o}=h(s.gizmoId),i=g(),n=i==null?void 0:i.canInteractWithGizmos(),m=l();return r.useEffect(()=>{t==null&&o!=null&&m(d(f.GIZMO_NOT_FOUND))},[m,t,o]),o!=null&&n?e.jsx(A,{}):n===!1?e.jsx(y,{gizmo:t}):r.createElement(x,{...s,key:s.gizmoId})}function A(){return e.jsx(c,{children:e.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[e.jsx("div",{className:"font-bold",children:e.jsx(a,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),e.jsx(a,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function y({gizmo:s}){const t=l();return e.jsx(c,{children:e.jsx(G,{gizmo:s,children:e.jsxs("div",{className:"mt-7 flex flex-col gap-4",children:[e.jsx(j,{onClick:()=>M(t,"Gizmo page upsell button"),children:e.jsx(a,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(a,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}const O=({data:s,matches:t})=>(s==null?void 0:s.kind)==="anon_gizmo"?p(s.gizmo):t.flatMap(o=>o.meta??[]);export{I as G,v as a,O as m};
//# sourceMappingURL=dvkmbg6by5v54jy2.js.map