import{X as t,u as a,y as m}from"./p4yo0rzsteij4ihh.js";import{D as n}from"./mf8aa04pcamvg3db.js";import{a_ as d,a$ as p}from"./hd436y4ydqidgeiu.js";import{p as u,G as f}from"./mslwg28fmsyi0i8b.js";import{a1 as c}from"./m2xb5h49bu6lvq0z.js";import"./ucoghk4z1rejef9i.js";import"./ip9uh04g30enj3b9.js";import"./j47f1y1dfugxdi4c.js";function z(i){const{data:{gizmos:e}={}}=u();return e?e.some(o=>o.resource.gizmo.id===i):!1}function x({gizmoResource:i}){const e=z(i.gizmo.id),o=t(),r=e?o.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):o.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),s=a();return m.jsx(n.Item,{onClick:()=>{c.updateGizmoSidebar(s,f,i.gizmo.id,e?"hide":"keep")},icon:e?d:p,children:r})}export{x as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=gh8n7up9rpgr621c.js.map