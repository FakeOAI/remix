import{D as g,r as v,j as e,E as j,G as f,dK as M,au as d}from"./bahzwkph2ne3eyls.js";import{u as b}from"./dmvkul07jrsv5oew.js";import{d as z}from"./codbzyvijm6ysxs9.js";import{ba as G,bb as y,bc as h,bd as C,be as T,bf as E}from"./osssmfbfx387nkfp.js";import{R as S}from"./c2ngwqta6y10c65f.js";function D({gizmoId:s,onClose:a}){const{data:o}=b(s),{data:t}=C(M.Gizmo),n=g(),i=T(n,s,M.Gizmo);if(t==null)return null;const r=o!=null?`Report ${o.gizmo.display.name}`:"Report";return e.jsx(E,{reasons:t.reasons,submitReport:i,title:r,onClose:a,header:t.header,subHeader:t.header_explanation})}function H({gizmoId:s,clientThreadId:a,onClose:o}){var c,m,R;const t=g(),n=(c=d("1855896025"))==null?void 0:c.value,i=(m=d("3376455464"))==null?void 0:m.value,r=z(a),x=(R=d("90459671"))==null?void 0:R.value,[u,p]=v.useState();return!n||!i||u==="gpt"||!x||r==null?e.jsx(D,{gizmoId:s,onClose:o}):u==="conversation"?e.jsx(S,{serverThreadId:r,onClose:o}):e.jsxs(j,{title:t.formatMessage({id:"gizmo.report.selectorModal.title",defaultMessage:"Report"}),onClose:o,isOpen:!0,showCloseButton:!0,type:"success",children:[e.jsx(G,{header:t.formatMessage({id:"gizmo.report.selectorModal.header",defaultMessage:"What would you like to report?"})}),e.jsxs(y,{children:[e.jsx(h,{onClick:l=>{l.preventDefault(),p("conversation")},children:e.jsx(f,{id:"gizmo.report.selectorModal.conversation",defaultMessage:"The conversation"})}),e.jsx(h,{onClick:l=>{l.preventDefault(),p("gpt")},children:e.jsx(f,{id:"gizmo.report.selectorModal.gpt",defaultMessage:"The GPT"})})]})]})}export{D as G,H as a};
//# sourceMappingURL=cz6qhpdbb0bu2q7w.js.map