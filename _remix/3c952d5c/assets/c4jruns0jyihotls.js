import{H as t,E as a,j as n}from"./lmxm7n9d5wiypftj.js";import{D as m}from"./g7a43sdpk9uv2po6.js";import{b7 as d,b8 as p}from"./ilntfty2ny9yky28.js";import{q as f,r as u}from"./oa1pmm4lwvkv79br.js";import{aK as c}from"./mkzh4liwzbq0my17.js";import"./bkfrt4b5kin9604q.js";import"./fekivkzetbozvd3e.js";function b(i){const{data:{gizmos:e}={}}=f();return e?e.some(o=>o.resource.gizmo.id===i):!1}function M({gizmoResource:i}){const e=b(i.gizmo.id),o=t(),r=e?o.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):o.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),s=a();return n.jsx(m.Item,{onClick:()=>{c.updateGizmoSidebar(s,u,i.gizmo.id,e?"hide":"keep")},icon:e?d:p,children:r})}export{M as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=c4jruns0jyihotls.js.map