import{H as t,E as a,j as m}from"./ntq5iea1ifpghbh4.js";import{D as n}from"./lxfvr7rgrfnzl9f9.js";import{bd as d,be as p}from"./nf0qvn7pzl3qf9lm.js";import{l as f,m as u}from"./oyd8m12rmt9g40i3.js";import{aL as c}from"./dsu6tzr1kwqiabf1.js";import"./fs8mv9ym7ioqi7b7.js";import"./kvw8la6c9wu9haqx.js";function b(i){const{data:{gizmos:e}={}}=f();return e?e.some(o=>o.resource.gizmo.id===i):!1}function M({gizmoResource:i}){const e=b(i.gizmo.id),o=t(),s=e?o.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):o.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),r=a();return m.jsx(n.Item,{onClick:()=>{c.updateGizmoSidebar(r,u,i.gizmo.id,e?"hide":"keep")},icon:e?d:p,children:s})}export{M as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=orksy5736uxmluvm.js.map