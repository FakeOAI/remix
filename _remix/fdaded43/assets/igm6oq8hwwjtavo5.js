import{H as t,E as a,j as m}from"./n62zftee9av9wxib.js";import{D as n}from"./fglbg0zea942onjp.js";import{be as d,bf as p}from"./cwe5tk2381hhmaki.js";import{l as f,m as u}from"./ewowfsm6mt6yl8be.js";import{aN as c}from"./o7uqz2086hs2sxty.js";import"./otwiqv3ij3chyjvy.js";import"./gqih2li7wtf179yn.js";function b(i){const{data:{gizmos:e}={}}=f();return e?e.some(o=>o.resource.gizmo.id===i):!1}function M({gizmoResource:i}){const e=b(i.gizmo.id),o=t(),s=e?o.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):o.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),r=a();return m.jsx(n.Item,{onClick:()=>{c.updateGizmoSidebar(r,u,i.gizmo.id,e?"hide":"keep")},icon:e?d:p,children:s})}export{M as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=igm6oq8hwwjtavo5.js.map