import{G as t,B as a,j as n}from"./jxcj8c73xykl5pdh.js";import{D as m}from"./i3kkn7bb16ebgfki.js";import{b7 as d,b8 as p}from"./dbh3rqot1oqdum8f.js";import{o as f,q as u}from"./bc8681kvkt1n2y9e.js";import{aK as c}from"./kracfvru65uyxco3.js";import"./iijvemtkuskjstxm.js";import"./fe02mfjcyoaumukz.js";function b(i){const{data:{gizmos:e}={}}=f();return e?e.some(o=>o.resource.gizmo.id===i):!1}function M({gizmoResource:i}){const e=b(i.gizmo.id),o=t(),s=e?o.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):o.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),r=a();return n.jsx(m.Item,{onClick:()=>{c.updateGizmoSidebar(r,u,i.gizmo.id,e?"hide":"keep")},icon:e?d:p,children:s})}export{M as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=n7iujmnymf06zx10.js.map