import{W as f,r as M,x as e,bq as h,a0 as p,dX as c,bA as m}from"./m8rh4g4wti5oij6r.js";import{a as g}from"./o24ms7b147ogs90x.js";import{d as x}from"./imjfbin0u57rzypy.js";import{br as v,bs as b,bt as R,bu as j,bv as z,bw as G}from"./gyk6913sy5h59gmv.js";import{R as y}from"./e1hclywt3kywgmuk.js";function T({gizmoId:s,onClose:a}){const{data:o}=g(s),{data:t}=j(c.Gizmo),n=f(),i=z(n,s,c.Gizmo);if(t==null)return null;const r=o!=null?`Report ${o.gizmo.display.name}`:"Report";return e.jsx(G,{reasons:t.reasons,submitReport:i,title:r,onClose:a,header:t.header,subHeader:t.header_explanation})}function D({gizmoId:s,clientThreadId:a,onClose:o}){const t=f(),n=m("1855896025")?.value,i=m("3376455464")?.value,r=x(a),[d,u]=M.useState();return!n||!i||d==="gpt"||r==null?e.jsx(T,{gizmoId:s,onClose:o}):d==="conversation"?e.jsx(y,{serverThreadId:r,onClose:o}):e.jsxs(h,{title:t.formatMessage({id:"gizmo.report.selectorModal.title",defaultMessage:"Report"}),onClose:o,isOpen:!0,showCloseButton:!0,type:"success",children:[e.jsx(v,{header:t.formatMessage({id:"gizmo.report.selectorModal.header",defaultMessage:"What would you like to report?"})}),e.jsxs(b,{children:[e.jsx(R,{onClick:l=>{l.preventDefault(),u("conversation")},children:e.jsx(p,{id:"gizmo.report.selectorModal.conversation",defaultMessage:"The conversation"})}),e.jsx(R,{onClick:l=>{l.preventDefault(),u("gpt")},children:e.jsx(p,{id:"gizmo.report.selectorModal.gpt",defaultMessage:"The GPT"})})]})]})}export{T as G,D as a};
//# sourceMappingURL=doovn2zdhshw7zvk.js.map