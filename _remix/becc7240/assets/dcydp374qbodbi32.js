import{H as h,r as g,j as e,I as x,K as m,dU as R,aQ as f}from"./m7d6epqb1gfbpzoo.js";import{d as j}from"./iee5wlfm0ipkvqsi.js";import{c as v}from"./cucftooeih41wye5.js";import{bm as z,bn as b,bo as M,bp as G,bq as y,br as T}from"./njhao8v6dsdtifqt.js";import{R as C}from"./tmww07qqu193wr0i.js";function S({gizmoId:s,onClose:a}){const{data:o}=j(s),{data:t}=G(R.Gizmo),n=h(),i=y(n,s,R.Gizmo);if(t==null)return null;const r=o!=null?`Report ${o.gizmo.display.name}`:"Report";return e.jsx(T,{reasons:t.reasons,submitReport:i,title:r,onClose:a,header:t.header,subHeader:t.header_explanation})}function Q({gizmoId:s,clientThreadId:a,onClose:o}){var u,c;const t=h(),n=(u=f("1855896025"))==null?void 0:u.value,i=(c=f("3376455464"))==null?void 0:c.value,r=v(a),[d,p]=g.useState();return!n||!i||d==="gpt"||r==null?e.jsx(S,{gizmoId:s,onClose:o}):d==="conversation"?e.jsx(C,{serverThreadId:r,onClose:o}):e.jsxs(x,{title:t.formatMessage({id:"gizmo.report.selectorModal.title",defaultMessage:"Report"}),onClose:o,isOpen:!0,showCloseButton:!0,type:"success",children:[e.jsx(z,{header:t.formatMessage({id:"gizmo.report.selectorModal.header",defaultMessage:"What would you like to report?"})}),e.jsxs(b,{children:[e.jsx(M,{onClick:l=>{l.preventDefault(),p("conversation")},children:e.jsx(m,{id:"gizmo.report.selectorModal.conversation",defaultMessage:"The conversation"})}),e.jsx(M,{onClick:l=>{l.preventDefault(),p("gpt")},children:e.jsx(m,{id:"gizmo.report.selectorModal.gpt",defaultMessage:"The GPT"})})]})]})}export{S as G,Q as a};
//# sourceMappingURL=dcydp374qbodbi32.js.map