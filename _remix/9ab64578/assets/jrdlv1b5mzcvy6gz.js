import{aj as h,r as M,a6 as e,bI as g,aG as c,dn as p,U as m}from"./n6pd72le962cb7i2.js";import{bc as f,bd as x,be as b,bf as j,bg as R,bh as v,bi as z,bj as G,bk as y}from"./jz3yie9s5yhl0osu.js";function T({gizmoId:s,onClose:r}){const{data:o}=v(s),{data:t}=z(p.Gizmo),n=h(),i=G(n,s,p.Gizmo);if(t==null)return null;const a=o!=null?`Report ${o.gizmo.display.name}`:"Report";return e.jsx(y,{reasons:t.reasons,submitReport:i,title:a,onClose:r,header:t.header,subHeader:t.header_explanation})}function k({gizmoId:s,clientThreadId:r,onClose:o}){const t=h(),n=m("1855896025")?.value,i=m("3376455464")?.value,a=f(r),[d,u]=M.useState();return!n||!i||d==="gpt"||a==null?e.jsx(T,{gizmoId:s,onClose:o}):d==="conversation"?e.jsx(x,{serverThreadId:a,onClose:o}):e.jsxs(g,{title:t.formatMessage({id:"gizmo.report.selectorModal.title",defaultMessage:"Report"}),onClose:o,isOpen:!0,showCloseButton:!0,type:"success",children:[e.jsx(b,{header:t.formatMessage({id:"gizmo.report.selectorModal.header",defaultMessage:"What would you like to report?"})}),e.jsxs(j,{children:[e.jsx(R,{onClick:l=>{l.preventDefault(),u("conversation")},children:e.jsx(c,{id:"gizmo.report.selectorModal.conversation",defaultMessage:"The conversation"})}),e.jsx(R,{onClick:l=>{l.preventDefault(),u("gpt")},children:e.jsx(c,{id:"gizmo.report.selectorModal.gpt",defaultMessage:"The GPT"})})]})]})}export{T as G,k as a};
//# sourceMappingURL=jrdlv1b5mzcvy6gz.js.map