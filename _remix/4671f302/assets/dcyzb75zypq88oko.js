import{a3 as f,r as M,t as e,bx as h,a8 as u,dY as c,bH as m}from"./cya1ek7zbsww3e8p.js";import{a as g}from"./ji313uzrpltya54g.js";import{d as x}from"./cnkyxf781f12fdb9.js";import{bA as v,bB as b,bC as R,bD as j,bE as z,bF as G}from"./o02kugc5eyp7bzuk.js";import{R as y}from"./j7pqhf0z6hzxyx3a.js";function C({gizmoId:s,onClose:a}){const{data:o}=g(s),{data:t}=j(c.Gizmo),n=f(),i=z(n,s,c.Gizmo);if(t==null)return null;const r=o!=null?`Report ${o.gizmo.display.name}`:"Report";return e.jsx(G,{reasons:t.reasons,submitReport:i,title:r,onClose:a,header:t.header,subHeader:t.header_explanation})}function B({gizmoId:s,clientThreadId:a,onClose:o}){const t=f(),n=m("1855896025")?.value,i=m("3376455464")?.value,r=x(a),[d,p]=M.useState();return!n||!i||d==="gpt"||r==null?e.jsx(C,{gizmoId:s,onClose:o}):d==="conversation"?e.jsx(y,{serverThreadId:r,onClose:o}):e.jsxs(h,{title:t.formatMessage({id:"gizmo.report.selectorModal.title",defaultMessage:"Report"}),onClose:o,isOpen:!0,showCloseButton:!0,type:"success",children:[e.jsx(v,{header:t.formatMessage({id:"gizmo.report.selectorModal.header",defaultMessage:"What would you like to report?"})}),e.jsxs(b,{children:[e.jsx(R,{onClick:l=>{l.preventDefault(),p("conversation")},children:e.jsx(u,{id:"gizmo.report.selectorModal.conversation",defaultMessage:"The conversation"})}),e.jsx(R,{onClick:l=>{l.preventDefault(),p("gpt")},children:e.jsx(u,{id:"gizmo.report.selectorModal.gpt",defaultMessage:"The GPT"})})]})]})}export{C as G,B as a};
//# sourceMappingURL=dcyzb75zypq88oko.js.map