import{j as l,en as R,eo as h,r as g,dT as C,H as v,b4 as M,d_ as i,aO as b}from"./7q6a9ksdf0pmxyke.js";import{p as x}from"./okhnpblvnj0kkqgn.js";import{c as T}from"./mbounqbdqvic35ki.js";import{bd as j,b0 as p,aa as f,br as z,bs as G,bt as _}from"./g61cr21b5136jq6j.js";function E(e){const t=x(e.gizmo.display.name);return t==null?[]:[{title:t},{property:"og:site_name",content:"ChatGPT"},{property:"og:type",content:"website"},{property:"og:title",content:t},...e.gizmo.display.description?[{name:"description",content:e.gizmo.display.description},{property:"og:description",content:e.gizmo.display.description}]:[],...e.gizmo.display.profile_picture_url?[{property:"og:image",content:e.gizmo.display.profile_picture_url},{property:"og:image:width",content:"512"},{property:"og:image:height",content:"512"}]:[]]}function w({gizmo:e}){return l.jsx(R,{children:l.jsx(h,{metadata:E(e)})})}function A({serverThreadId:e,clientThreadId:t,isStaticSharedThread:n,isDynamicSharedThread:o}){var m;const r=j(p.ReportConversation),s=((m=b("3376455464"))==null?void 0:m.value)||n||o,y=T(t);let a=e??y;const d=g.useContext(C);a==null&&d!=null&&(a=d.serverSharedThreadId??void 0);const c=v(),u=M();return g.useEffect(()=>{a==null&&r&&s&&(u.danger(c.formatMessage({id:"gizmo.report.conversationModal.emptyConversationError",defaultMessage:"Empty conversations cannot be reported"})),f.closeModal(p.ReportConversation))},[a,r,s,c,u]),!r||!s||a==null?null:l.jsx(I,{serverThreadId:a,onClose:()=>f.closeModal(p.ReportConversation),isStaticSharedThread:n})}function I({serverThreadId:e,onClose:t,isStaticSharedThread:n}){const{data:o}=z(n?i.ShareableConversation:i.Conversation),r=v(),s=G(r,e,n?i.ShareableConversation:i.Conversation);return o==null||e==null?null:l.jsx(_,{reasons:o.reasons,submitReport:s,title:r.formatMessage({id:"gizmo.report.conversationModal.title",defaultMessage:"Report a conversation"}),onClose:t,header:o.header,subHeader:o.header_explanation})}export{w as G,I as R,A as T,E as g};
//# sourceMappingURL=eokw5tu4r5pdk1o7.js.map