import{W as f,r as M,x as e,bp as h,a0 as u,dV as c,bz as m}from"./e9n3rg14pzg374g3.js";import{a as x}from"./ewtqk0n3851lyzho.js";import{d as g}from"./h0laljsy4ysc90hu.js";import{bu as v,bv as z,bw as R,bx as b,by as j,bz as G}from"./grb1rrh8esowjpbm.js";import{R as y}from"./nvuqfnhcgvjh7pon.js";function T({gizmoId:s,onClose:a}){const{data:o}=x(s),{data:t}=b(c.Gizmo),n=f(),i=j(n,s,c.Gizmo);if(t==null)return null;const r=o!=null?`Report ${o.gizmo.display.name}`:"Report";return e.jsx(G,{reasons:t.reasons,submitReport:i,title:r,onClose:a,header:t.header,subHeader:t.header_explanation})}function D({gizmoId:s,clientThreadId:a,onClose:o}){const t=f(),n=m("1855896025")?.value,i=m("3376455464")?.value,r=g(a),[d,p]=M.useState();return!n||!i||d==="gpt"||r==null?e.jsx(T,{gizmoId:s,onClose:o}):d==="conversation"?e.jsx(y,{serverThreadId:r,onClose:o}):e.jsxs(h,{title:t.formatMessage({id:"gizmo.report.selectorModal.title",defaultMessage:"Report"}),onClose:o,isOpen:!0,showCloseButton:!0,type:"success",children:[e.jsx(v,{header:t.formatMessage({id:"gizmo.report.selectorModal.header",defaultMessage:"What would you like to report?"})}),e.jsxs(z,{children:[e.jsx(R,{onClick:l=>{l.preventDefault(),p("conversation")},children:e.jsx(u,{id:"gizmo.report.selectorModal.conversation",defaultMessage:"The conversation"})}),e.jsx(R,{onClick:l=>{l.preventDefault(),p("gpt")},children:e.jsx(u,{id:"gizmo.report.selectorModal.gpt",defaultMessage:"The GPT"})})]})]})}export{T as G,D as a};
//# sourceMappingURL=njmep3atfs6sg24l.js.map