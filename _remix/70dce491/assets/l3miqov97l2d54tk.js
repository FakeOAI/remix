import{H as t,E as a,j as m}from"./blb8fkpza13sx80g.js";import{D as n}from"./mknno3nk1hhgzc2u.js";import{bd as d,be as p}from"./dyqds22251aab1q6.js";import{l as f,m as u}from"./ow8n1hqkp4gfrgpx.js";import{aL as c}from"./fcxum6gqjrij69gr.js";import"./cqxecb1nm9llwoxy.js";import"./c8b8r3t7ck2lwpyu.js";function b(i){const{data:{gizmos:e}={}}=f();return e?e.some(o=>o.resource.gizmo.id===i):!1}function M({gizmoResource:i}){const e=b(i.gizmo.id),o=t(),s=e?o.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):o.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),r=a();return m.jsx(n.Item,{onClick:()=>{c.updateGizmoSidebar(r,u,i.gizmo.id,e?"hide":"keep")},icon:e?d:p,children:s})}export{M as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=l3miqov97l2d54tk.js.map