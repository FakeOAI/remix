import{l as d,ej as y,r as g,dN as R,W as f,aK as C,dW as i,ap as M,bU as h}from"./oee7i5r8ijmn1tdg.js";import{v as _}from"./c6d4td7prifwq95v.js";import{d as x}from"./bgp9y7d45g2z8pgo.js";import{aO as b,aB as p,V as v,bI as T,bJ as z,bK as E}from"./gi106u69uoz82g5o.js";function G(e){const o=_(e.gizmo.display.name);return o==null?[]:[{title:o},{property:"og:site_name",content:"ChatGPT"},{property:"og:type",content:"website"},{property:"og:title",content:o},...e.gizmo.display.description?[{name:"description",content:e.gizmo.display.description},{property:"og:description",content:e.gizmo.display.description}]:[],...e.gizmo.display.profile_picture_url?[{property:"og:image",content:e.gizmo.display.profile_picture_url},{property:"og:image:width",content:"512"},{property:"og:image:height",content:"512"}]:[]]}function H({gizmo:e}){return d.jsx(y,{metadata:G(e)})}function O({serverThreadId:e,clientThreadId:o,isStaticSharedThread:a,isDynamicSharedThread:s}){const t=b(p.ReportConversation),r=(h("3376455464")?.value||a)??s,l=x(o);let n=e??l;const u=g.useContext(R);n==null&&u!=null&&(n=u.serverSharedThreadId??void 0);const c=f(),m=C();return g.useEffect(()=>{n==null&&t&&r&&(m.danger(c.formatMessage({id:"gizmo.report.conversationModal.emptyConversationError",defaultMessage:"Empty conversations cannot be reported"})),v.closeModal(p.ReportConversation))},[n,t,r,c,m]),!t||!r||n==null?null:d.jsx(I,{serverThreadId:n,onClose:()=>v.closeModal(p.ReportConversation),isStaticSharedThread:a,isDynamicSharedThread:s})}function I({serverThreadId:e,onClose:o,isStaticSharedThread:a,isDynamicSharedThread:s}){const{data:t}=T(a||s?i.ShareableConversation:i.Conversation),r=f(),l=z(r,e,a||s?i.ShareableConversation:i.Conversation);return t==null||e==null?(M.logEvent("chatgpt_conversation_share_report_modal_not_shown",t==null?"report_reasons":"thread_id"),null):d.jsx(E,{reasons:t.reasons,submitReport:l,title:r.formatMessage({id:"gizmo.report.conversationModal.title",defaultMessage:"Report a conversation"}),onClose:o,header:t.header,subHeader:t.header_explanation})}export{H as G,I as R,O as T,G as g};
//# sourceMappingURL=i84m6j1umyy8q66z.js.map