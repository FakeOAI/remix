import{aj as t,j as r,a6 as n,b8 as m}from"./fw2sv6mo32vdb58s.js";import{b6 as d,a2 as u}from"./brnrasthlm0rpj0x.js";import{bK as p,bW as f,bX as b}from"./mvfp9xkrxbhizxzo.js";function c(i){const{data:{gizmos:e}={}}=p();return e?e.some(s=>s.resource.gizmo.id===i):!1}function I({gizmoResource:i}){const e=c(i.gizmo.id),s=t(),o=e?s.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):s.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),a=r();return n.jsx(m.Item,{onClick:()=>{f.updateGizmoSidebar(a,b,i.gizmo.id,e?"hide":"keep")},icon:e?d:u,children:o})}export{I as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=hyu2k41ldi3blfyi.js.map