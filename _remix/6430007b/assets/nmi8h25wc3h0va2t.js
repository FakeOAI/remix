import{H as h,r as g,j as e,I as x,K as m,d_ as R,aO as f}from"./7q6a9ksdf0pmxyke.js";import{c as j}from"./okhnpblvnj0kkqgn.js";import{c as v}from"./mbounqbdqvic35ki.js";import{bo as z,bp as b,bq as M,br as G,bs as y,bt as T}from"./g61cr21b5136jq6j.js";import{R as C}from"./eokw5tu4r5pdk1o7.js";function S({gizmoId:s,onClose:a}){const{data:o}=j(s),{data:t}=G(R.Gizmo),n=h(),i=y(n,s,R.Gizmo);if(t==null)return null;const r=o!=null?`Report ${o.gizmo.display.name}`:"Report";return e.jsx(T,{reasons:t.reasons,submitReport:i,title:r,onClose:a,header:t.header,subHeader:t.header_explanation})}function w({gizmoId:s,clientThreadId:a,onClose:o}){var u,c;const t=h(),n=(u=f("1855896025"))==null?void 0:u.value,i=(c=f("3376455464"))==null?void 0:c.value,r=v(a),[p,d]=g.useState();return!n||!i||p==="gpt"||r==null?e.jsx(S,{gizmoId:s,onClose:o}):p==="conversation"?e.jsx(C,{serverThreadId:r,onClose:o}):e.jsxs(x,{title:t.formatMessage({id:"gizmo.report.selectorModal.title",defaultMessage:"Report"}),onClose:o,isOpen:!0,showCloseButton:!0,type:"success",children:[e.jsx(z,{header:t.formatMessage({id:"gizmo.report.selectorModal.header",defaultMessage:"What would you like to report?"})}),e.jsxs(b,{children:[e.jsx(M,{onClick:l=>{l.preventDefault(),d("conversation")},children:e.jsx(m,{id:"gizmo.report.selectorModal.conversation",defaultMessage:"The conversation"})}),e.jsx(M,{onClick:l=>{l.preventDefault(),d("gpt")},children:e.jsx(m,{id:"gizmo.report.selectorModal.gpt",defaultMessage:"The GPT"})})]})]})}export{S as G,w as a};
//# sourceMappingURL=nmi8h25wc3h0va2t.js.map