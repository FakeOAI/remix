import{W as t,u as a,l as n}from"./es28fsfv6yr4r7t0.js";import{D as m}from"./lz4uwss82o8aau0y.js";import{b1 as d,b2 as p}from"./fywton14jd85t5em.js";import{y as u,z as f}from"./elvm24329arjt3o8.js";import{al as c}from"./knksm8jtt3et03lk.js";import"./komg9ol1i6c41q0e.js";import"./dncd2pyz7qtauwp2.js";function b(i){const{data:{gizmos:e}={}}=u();return e?e.some(o=>o.resource.gizmo.id===i):!1}function M({gizmoResource:i}){const e=b(i.gizmo.id),o=t(),s=e?o.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):o.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),r=a();return n.jsx(m.Item,{onClick:()=>{c.updateGizmoSidebar(r,f,i.gizmo.id,e?"hide":"keep")},icon:e?d:p,children:s})}export{M as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=hsrist31d9439t0x.js.map