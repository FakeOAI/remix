import{X as f,r as M,l as e,Y as h,$ as u,dV as c,bm as m}from"./i02hakaw1yz2cb0w.js";import{a as g}from"./mv65vi40bwx8cy8n.js";import{d as x}from"./fy32gsgjnvmziir1.js";import{bw as v,bx as z,by as R,bz as j,bA as b,bB as G}from"./ckygyr7dh5h6j13j.js";import{R as y}from"./olnc3xl0j433b5ye.js";function T({gizmoId:s,onClose:a}){const{data:o}=g(s),{data:t}=j(c.Gizmo),n=f(),i=b(n,s,c.Gizmo);if(t==null)return null;const r=o!=null?`Report ${o.gizmo.display.name}`:"Report";return e.jsx(G,{reasons:t.reasons,submitReport:i,title:r,onClose:a,header:t.header,subHeader:t.header_explanation})}function B({gizmoId:s,clientThreadId:a,onClose:o}){const t=f(),n=m("1855896025")?.value,i=m("3376455464")?.value,r=x(a),[d,p]=M.useState();return!n||!i||d==="gpt"||r==null?e.jsx(T,{gizmoId:s,onClose:o}):d==="conversation"?e.jsx(y,{serverThreadId:r,onClose:o}):e.jsxs(h,{title:t.formatMessage({id:"gizmo.report.selectorModal.title",defaultMessage:"Report"}),onClose:o,isOpen:!0,showCloseButton:!0,type:"success",children:[e.jsx(v,{header:t.formatMessage({id:"gizmo.report.selectorModal.header",defaultMessage:"What would you like to report?"})}),e.jsxs(z,{children:[e.jsx(R,{onClick:l=>{l.preventDefault(),p("conversation")},children:e.jsx(u,{id:"gizmo.report.selectorModal.conversation",defaultMessage:"The conversation"})}),e.jsx(R,{onClick:l=>{l.preventDefault(),p("gpt")},children:e.jsx(u,{id:"gizmo.report.selectorModal.gpt",defaultMessage:"The GPT"})})]})]})}export{T as G,B as a};
//# sourceMappingURL=dqsh5k8j0yxm6jwo.js.map