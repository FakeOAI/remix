import{H as t,E as a,j as m}from"./jmev784jhg5gl93h.js";import{D as n}from"./io29y6vnxptykrvc.js";import{b8 as d,b9 as p}from"./ft992wxwyhplmlso.js";import{l as f,m as u}from"./nffpkw236nisrk2v.js";import{aK as c}from"./hdt4ueyxfrljz6pb.js";import"./mkmwf5cswlkdwe2u.js";import"./fwolcrsprdye2hy3.js";function b(i){const{data:{gizmos:e}={}}=f();return e?e.some(o=>o.resource.gizmo.id===i):!1}function M({gizmoResource:i}){const e=b(i.gizmo.id),o=t(),s=e?o.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):o.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),r=a();return m.jsx(n.Item,{onClick:()=>{c.updateGizmoSidebar(r,u,i.gizmo.id,e?"hide":"keep")},icon:e?d:p,children:s})}export{M as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=jmaqi3x4bm0ctypp.js.map