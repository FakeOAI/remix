import{X as t,u as a,y as m}from"./qt4wss72u2iiwb12.js";import{D as n}from"./cki7q0rothorf8gt.js";import{aX as d,aY as p}from"./mj1bo2bvsdcuqwn0.js";import{p as u,G as f}from"./il13svm8z46vwj7c.js";import{a1 as c}from"./essdexqvqu02rgqn.js";import"./nyafg151eqhmq9mq.js";import"./epo75wihakppz7a8.js";import"./eixpuwitl9sszofn.js";function z(i){const{data:{gizmos:e}={}}=u();return e?e.some(o=>o.resource.gizmo.id===i):!1}function x({gizmoResource:i}){const e=z(i.gizmo.id),o=t(),r=e?o.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):o.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),s=a();return m.jsx(n.Item,{onClick:()=>{c.updateGizmoSidebar(s,f,i.gizmo.id,e?"hide":"keep")},icon:e?d:p,children:r})}export{x as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=eaeatlr9bod861b0.js.map