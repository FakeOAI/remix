import{j as l,e9 as C,ea as R,r as g,dL as h,N as v,bc as M,dT as i,aW as b}from"./hloj85fregi26ji6.js";import{p as x}from"./oxm37jjpmmj4jh4x.js";import{c as T}from"./dkqa9jl3k2y8d11k.js";import{bo as j,ba as p,a3 as f,bA as z,bB as G,bC as E}from"./g7w33hsyqmw6f524.js";function I(e){const t=x(e.gizmo.display.name);return t==null?[]:[{title:t},{property:"og:site_name",content:"ChatGPT"},{property:"og:type",content:"website"},{property:"og:title",content:t},...e.gizmo.display.description?[{name:"description",content:e.gizmo.display.description},{property:"og:description",content:e.gizmo.display.description}]:[],...e.gizmo.display.profile_picture_url?[{property:"og:image",content:e.gizmo.display.profile_picture_url},{property:"og:image:width",content:"512"},{property:"og:image:height",content:"512"}]:[]]}function A({gizmo:e}){return l.jsx(C,{children:l.jsx(R,{metadata:I(e)})})}function N({serverThreadId:e,clientThreadId:t,isStaticSharedThread:n,isDynamicSharedThread:o}){var m;const r=j(p.ReportConversation),s=((m=b("3376455464"))==null?void 0:m.value)||n||o,y=T(t);let a=e??y;const d=g.useContext(h);a==null&&d!=null&&(a=d.serverSharedThreadId??void 0);const c=v(),u=M();return g.useEffect(()=>{a==null&&r&&s&&(u.danger(c.formatMessage({id:"gizmo.report.conversationModal.emptyConversationError",defaultMessage:"Empty conversations cannot be reported"})),f.closeModal(p.ReportConversation))},[a,r,s,c,u]),!r||!s||a==null?null:l.jsx(_,{serverThreadId:a,onClose:()=>f.closeModal(p.ReportConversation),isStaticSharedThread:n})}function _({serverThreadId:e,onClose:t,isStaticSharedThread:n}){const{data:o}=z(n?i.ShareableConversation:i.Conversation),r=v(),s=G(r,e,n?i.ShareableConversation:i.Conversation);return o==null||e==null?null:l.jsx(E,{reasons:o.reasons,submitReport:s,title:r.formatMessage({id:"gizmo.report.conversationModal.title",defaultMessage:"Report a conversation"}),onClose:t,header:o.header,subHeader:o.header_explanation})}export{A as G,_ as R,N as T,I as g};
//# sourceMappingURL=hn9f977mxxh6bu82.js.map