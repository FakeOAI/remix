import{l,en as y,eo as R,r as g,dR as M,V as f,aK as h,d_ as i,ao as C,bU as _}from"./bkk1etpxp73xgxkk.js";import{t as x}from"./go6iqv7kynl41ls2.js";import{b}from"./e2lvmkzz1krdd0vf.js";import{aS as T,aG as d,a3 as v,bM as G,bN as z,bO as E}from"./grdjxd4t00xxfgii.js";function j(e){const o=x(e.gizmo.display.name);return o==null?[]:[{title:o},{property:"og:site_name",content:"ChatGPT"},{property:"og:type",content:"website"},{property:"og:title",content:o},...e.gizmo.display.description?[{name:"description",content:e.gizmo.display.description},{property:"og:description",content:e.gizmo.display.description}]:[],...e.gizmo.display.profile_picture_url?[{property:"og:image",content:e.gizmo.display.profile_picture_url},{property:"og:image:width",content:"512"},{property:"og:image:height",content:"512"}]:[]]}function O({gizmo:e}){return l.jsx(y,{children:l.jsx(R,{metadata:j(e)})})}function N({serverThreadId:e,clientThreadId:o,isStaticSharedThread:n,isDynamicSharedThread:s}){const t=T(d.ReportConversation),r=(_("3376455464")?.value||n)??s,p=b(o);let a=e??p;const c=g.useContext(M);a==null&&c!=null&&(a=c.serverSharedThreadId??void 0);const u=f(),m=h();return g.useEffect(()=>{a==null&&t&&r&&(m.danger(u.formatMessage({id:"gizmo.report.conversationModal.emptyConversationError",defaultMessage:"Empty conversations cannot be reported"})),v.closeModal(d.ReportConversation))},[a,t,r,u,m]),!t||!r||a==null?null:l.jsx(I,{serverThreadId:a,onClose:()=>v.closeModal(d.ReportConversation),isStaticSharedThread:n,isDynamicSharedThread:s})}function I({serverThreadId:e,onClose:o,isStaticSharedThread:n,isDynamicSharedThread:s}){const{data:t}=G(n||s?i.ShareableConversation:i.Conversation),r=f(),p=z(r,e,n||s?i.ShareableConversation:i.Conversation);return t==null||e==null?(C.logEvent("chatgpt_conversation_share_report_modal_not_shown",t==null?"report_reasons":"thread_id"),null):l.jsx(E,{reasons:t.reasons,submitReport:p,title:r.formatMessage({id:"gizmo.report.conversationModal.title",defaultMessage:"Report a conversation"}),onClose:o,header:t.header,subHeader:t.header_explanation})}export{O as G,I as R,N as T,j as g};
//# sourceMappingURL=jmirzj5na583pa7a.js.map