import{V as t,u as a,l as n}from"./m22vykpz3ufxnjxd.js";import{D as m}from"./c1lxfkqsix2qq9xn.js";import{a$ as d,b0 as p}from"./hfrc69bv614p09qd.js";import{x as u,y as f}from"./n13zt2dg444thhb4.js";import{ak as c}from"./h96qd92qx1wl4bxm.js";import"./fzgvnbvf1g102okb.js";import"./fjsffie7vnsc9yaf.js";function b(i){const{data:{gizmos:e}={}}=u();return e?e.some(o=>o.resource.gizmo.id===i):!1}function x({gizmoResource:i}){const e=b(i.gizmo.id),o=t(),s=e?o.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):o.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),r=a();return n.jsx(m.Item,{onClick:()=>{c.updateGizmoSidebar(r,f,i.gizmo.id,e?"hide":"keep")},icon:e?d:p,children:s})}export{x as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=h1c5e8e6e4u5uykt.js.map