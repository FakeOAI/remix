import{W as t,a,l as n}from"./ba3fwhhjky1m504d.js";import{D as m}from"./otuwydvkdmp4y2yq.js";import{aP as d,aQ as p}from"./coje7kavm1uon508.js";import{z as f,G as u}from"./ki1aj4gxymfaf44u.js";import{ad as c}from"./dnytedm08a8h3kff.js";import"./nvd0p58sqo8se13g.js";import"./g52hzks2nta4ac14.js";function z(i){const{data:{gizmos:e}={}}=f();return e?e.some(o=>o.resource.gizmo.id===i):!1}function M({gizmoResource:i}){const e=z(i.gizmo.id),o=t(),s=e?o.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):o.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),r=a();return n.jsx(m.Item,{onClick:()=>{c.updateGizmoSidebar(r,u,i.gizmo.id,e?"hide":"keep")},icon:e?d:p,children:s})}export{M as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=4cediyfawban1urv.js.map