import{J as t,m as r,j as n,aW as m}from"./m6nbbof3h4644ciy.js";import{aS as d,R as u}from"./k1mrgdhb41bm8hu6.js";import{db as p,cW as f,de as c}from"./mfi1c6oa6hd2jb4h.js";function b(i){const{data:{gizmos:e}={}}=p();return e?e.some(s=>s.resource.gizmo.id===i):!1}function I({gizmoResource:i}){const e=b(i.gizmo.id),s=t(),o=e?s.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):s.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),a=r();return n.jsx(m.Item,{onClick:()=>{f.updateGizmoSidebar(a,c,i.gizmo.id,e?"hide":"keep")},icon:e?d:u,children:o})}export{I as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=ktvhg62wk0n2ag19.js.map