import{a1 as t,u as a,m}from"./cbv020t7gzp4f872.js";import{D as n}from"./jcecw02o1g7i3lgl.js";import{aY as d,aZ as p}from"./kq3cjnjkkiu42wsi.js";import{o as u,q as f}from"./eprwd5wd9a7hvvfw.js";import{ag as c}from"./gpe91l6ql3o0s610.js";import"./lw9lle2awfx0m3zh.js";import"./j1mltnb4g3et1nfv.js";function g(i){const{data:{gizmos:e}={}}=u();return e?e.some(o=>o.resource.gizmo.id===i):!1}function M({gizmoResource:i}){const e=g(i.gizmo.id),o=t(),s=e?o.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):o.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),r=a();return m.jsx(n.Item,{onClick:()=>{c.updateGizmoSidebar(r,f,i.gizmo.id,e?"hide":"keep")},icon:e?d:p,children:s})}export{M as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=lw7wrvrg1dqz8vr3.js.map