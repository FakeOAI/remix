import{W as t,u as a,l as n}from"./ielox7uqz6yj4gk6.js";import{D as m}from"./n4g48i2auwgtkoaj.js";import{b1 as d,b2 as p}from"./efs79xt96ya5kdfa.js";import{y as u,z as f}from"./gc4nym29kv4b6sfj.js";import{al as c}from"./eu744izg10vbq914.js";import"./cf0oncda6q98ospj.js";import"./bsb53g286ebezqmg.js";function b(i){const{data:{gizmos:e}={}}=u();return e?e.some(o=>o.resource.gizmo.id===i):!1}function M({gizmoResource:i}){const e=b(i.gizmo.id),o=t(),s=e?o.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):o.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),r=a();return n.jsx(m.Item,{onClick:()=>{c.updateGizmoSidebar(r,f,i.gizmo.id,e?"hide":"keep")},icon:e?d:p,children:s})}export{M as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=enl2tyoo82tii508.js.map