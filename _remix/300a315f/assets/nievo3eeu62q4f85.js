import{a0 as t,j as a,y as m}from"./go0egeb74rmznen8.js";import{D as n}from"./cv3ueghlnvzsl556.js";import{aO as d,aP as p}from"./btq18ey8ynma5fil.js";import{p as f,G as u}from"./n5k6ufc82r8hib3t.js";import{am as c}from"./1dr2p6hme0f5dqoq.js";import"./jxqgv3mf0shugzvg.js";import"./h599ywc2yh681j9p.js";import"./b5c9xxvdsy41nleh.js";function z(i){const{data:{gizmos:e}={}}=f();return e?e.some(o=>o.resource.gizmo.id===i):!1}function x({gizmoResource:i}){const e=z(i.gizmo.id),o=t(),r=e?o.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):o.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),s=a();return m.jsx(n.Item,{onClick:()=>{c.updateGizmoSidebar(s,u,i.gizmo.id,e?"hide":"keep")},icon:e?d:p,children:r})}export{x as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=nievo3eeu62q4f85.js.map