import{G as t,B as a,j as m}from"./k2u2mro2pc9pck6s.js";import{D as n}from"./lzfm2rdvisyvii1u.js";import{b1 as d,b2 as p}from"./n3fyy3q5fr26jzov.js";import{j as f,G as u}from"./ftgncrv749a882e5.js";import{aL as c}from"./531elw1rvq6j25mo.js";import"./cuj1fq30v3ez1sgl.js";import"./m43cd6jkuik88jcl.js";import"./fdyth052g9s446bs.js";function b(i){const{data:{gizmos:e}={}}=f();return e?e.some(o=>o.resource.gizmo.id===i):!1}function j({gizmoResource:i}){const e=b(i.gizmo.id),o=t(),r=e?o.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):o.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),s=a();return m.jsx(n.Item,{onClick:()=>{c.updateGizmoSidebar(s,u,i.gizmo.id,e?"hide":"keep")},icon:e?d:p,children:r})}export{j as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=9056tzo9yrcclg6z.js.map