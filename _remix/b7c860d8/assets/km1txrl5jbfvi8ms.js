import{W as t,a,x as m}from"./m8rh4g4wti5oij6r.js";import{D as n}from"./kmjf2foda203kwt3.js";import{aY as d,aZ as p}from"./f2s0ymrsx8zkcqzb.js";import{p as f,G as u}from"./o24ms7b147ogs90x.js";import{a6 as c}from"./gyk6913sy5h59gmv.js";import"./imjfbin0u57rzypy.js";import"./e3sq0rwlveh4dug2.js";import"./e243ffiqjjk1dz27.js";function z(i){const{data:{gizmos:e}={}}=f();return e?e.some(o=>o.resource.gizmo.id===i):!1}function M({gizmoResource:i}){const e=z(i.gizmo.id),o=t(),r=e?o.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):o.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),s=a();return m.jsx(n.Item,{onClick:()=>{c.updateGizmoSidebar(s,u,i.gizmo.id,e?"hide":"keep")},icon:e?d:p,children:r})}export{M as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=km1txrl5jbfvi8ms.js.map