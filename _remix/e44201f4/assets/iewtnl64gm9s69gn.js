import{dM as l,r as i,l as e,aN as u,bp as m,c1 as g,c2 as d,Z as s}from"./m22vykpz3ufxnjxd.js";import{C as f}from"./k9flk4zisf9im1id.js";import{G as z}from"./607hsbsxnrrtjvyo.js";import{b as h}from"./n13zt2dg444thhb4.js";import{g as x}from"./1amqmdkp7ag4c04h.js";import{G as p}from"./kq2l3r1bxeoezqj0.js";import{G as c}from"./dqw4thjae6kkrh9m.js";import{G}from"./ofyw11ptd4sg3j4z.js";import{z as j}from"./h96qd92qx1wl4bxm.js";import{u as M}from"./jvnbpn39tpnj5hrf.js";function O(){const t=M(),{gizmoId:a}=l();switch(t.kind){case"anon_gizmo":return e.jsx(z,{gizmo:t.gizmo},a);case"chat_page":return i.createElement(E,{...t,key:a,gizmoId:a})}}function E(t){const{data:a,error:o}=h(t.gizmoId),r=u()?.canInteractWithGizmos(),n=m();return i.useEffect(()=>{a==null&&o!=null&&n(g(d.GIZMO_NOT_FOUND))},[n,a,o]),o!=null&&r?e.jsx(v,{}):r===!1?e.jsx(A,{gizmo:a}):i.createElement(f,{...t,key:t.gizmoId})}function v(){return e.jsx(c,{children:e.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[e.jsx("div",{className:"font-bold",children:e.jsx(s,{id:"gizmo.loadError",defaultMessage:"We're having trouble loading this GPT."})}),e.jsx(s,{id:"gizmo.loadErrorRefresh",defaultMessage:"Please refresh the page, or try again later"})]})})}function A({gizmo:t}){const a=m();return e.jsx(c,{children:e.jsx(p,{gizmo:t,children:e.jsxs("div",{className:"mt-7 flex flex-col gap-4",children:[e.jsx(G,{onClick:()=>j(a,"Gizmo page upsell button"),children:e.jsx(s,{id:"gizmo.upsell",defaultMessage:"Sign up to chat"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(s,{id:"gizmo.loginUpsell",defaultMessage:"Sign up or Log in to chat"})})]})})})}const w=({data:t,matches:a})=>t?.kind==="anon_gizmo"?x(t.gizmo):a.flatMap(o=>o.meta??[]);export{O as G,E as a,w as m};
//# sourceMappingURL=iewtnl64gm9s69gn.js.map