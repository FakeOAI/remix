import{fy as m,fV as d,r,m as o,Z as g,a3 as c,dp as p,dq as u,aQ as a}from"./j17jyok1wsl0o201.js";import{C as f}from"./mnpxvutp35r7g59a.js";import{G as h}from"./f3s0zw1a9wljqupn.js";import{po as z,at as x,dz as G}from"./d6o9dilao46lwpkd.js";import{G as y}from"./ha81gq2nbiwf62c3.js";import{G as l}from"./icwbsus578v1uiq7.js";import{G as j}from"./buy7l5a39tzv9sqv.js";function _(e){const t=z(e.gizmo.display.name);return t==null?[]:[{title:t},{property:"og:site_name",content:"ChatGPT"},{property:"og:type",content:"website"},{property:"og:title",content:t},...e.gizmo.display.description?[{name:"description",content:e.gizmo.display.description},{property:"og:description",content:e.gizmo.display.description}]:[],...e.gizmo.display.profile_picture_url?[{property:"og:image",content:e.gizmo.display.profile_picture_url},{property:"og:image:width",content:"512"},{property:"og:image:height",content:"512"}]:[]]}function S(){const e=m(),{gizmoId:t}=d();switch(e.kind){case"anon_gizmo":return o.jsx(h,{gizmo:e.gizmo},t);case"chat_page":return r.createElement(M,{...e,key:t,gizmoId:t})}}function M(e){const{data:t,error:i}=x(e.gizmoId),s=g()?.canInteractWithGizmos(),n=c();return r.useEffect(()=>{t==null&&i!=null&&n(p(u.GIZMO_NOT_FOUND))},[n,t,i]),i!=null&&s?o.jsx(E,{}):s===!1?o.jsx(v,{gizmo:t}):r.createElement(f,{...e,key:e.gizmoId})}function E(){return o.jsx(l,{children:o.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[o.jsx("div",{className:"font-bold",children:o.jsx(a,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),o.jsx(a,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function v({gizmo:e}){const t=c();return o.jsx(l,{children:o.jsx(y,{gizmo:e,children:o.jsxs("div",{className:"mt-7 flex flex-col gap-4",children:[o.jsx(j,{onClick:()=>G(t,"Gizmo page upsell button"),children:o.jsx(a,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),o.jsx("div",{className:"text-sm text-token-text-tertiary",children:o.jsx(a,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}const F=({data:e,matches:t})=>e?.kind==="anon_gizmo"?_(e.gizmo):t.flatMap(i=>i.meta??[]);export{S as G,M as a,F as m};
//# sourceMappingURL=eb0i1mncgvppbx2n.js.map