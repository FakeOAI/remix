import{V as M,r as f,l as e,W as h,Z as u,d_ as c,bU as m}from"./bkk1etpxp73xgxkk.js";import{b as g}from"./go6iqv7kynl41ls2.js";import{b as x}from"./e2lvmkzz1krdd0vf.js";import{bJ as b,bK as v,bL as R,bM as j,bN as z,bO as G}from"./grdjxd4t00xxfgii.js";import{R as y}from"./jmirzj5na583pa7a.js";function T({gizmoId:s,onClose:a}){const{data:o}=g(s),{data:t}=j(c.Gizmo),n=M(),i=z(n,s,c.Gizmo);if(t==null)return null;const r=o!=null?`Report ${o.gizmo.display.name}`:"Report";return e.jsx(G,{reasons:t.reasons,submitReport:i,title:r,onClose:a,header:t.header,subHeader:t.header_explanation})}function I({gizmoId:s,clientThreadId:a,onClose:o}){const t=M(),n=m("1855896025")?.value,i=m("3376455464")?.value,r=x(a),[d,p]=f.useState();return!n||!i||d==="gpt"||r==null?e.jsx(T,{gizmoId:s,onClose:o}):d==="conversation"?e.jsx(y,{serverThreadId:r,onClose:o}):e.jsxs(h,{title:t.formatMessage({id:"gizmo.report.selectorModal.title",defaultMessage:"Report"}),onClose:o,isOpen:!0,showCloseButton:!0,type:"success",children:[e.jsx(b,{header:t.formatMessage({id:"gizmo.report.selectorModal.header",defaultMessage:"What would you like to report?"})}),e.jsxs(v,{children:[e.jsx(R,{onClick:l=>{l.preventDefault(),p("conversation")},children:e.jsx(u,{id:"gizmo.report.selectorModal.conversation",defaultMessage:"The conversation"})}),e.jsx(R,{onClick:l=>{l.preventDefault(),p("gpt")},children:e.jsx(u,{id:"gizmo.report.selectorModal.gpt",defaultMessage:"The GPT"})})]})]})}export{T as G,I as a};
//# sourceMappingURL=lb22jwzodsr8zksb.js.map