import{y as p,ef as R,w as h,r as m,X as f,a9 as C,S as _,dR as l,bA as M}from"./5gafjzaj6m3lkt92.js";import{r as b}from"./gapao1a0kn0bo862.js";import{cR as x,ac as w,br as E,bs as G,bt as I}from"./en1fj6qnfiapfm2g.js";import{d as T}from"./h427fzlqv26eg4a1.js";import{a as z,G as d,U as v}from"./j3xik4j4kij3v69h.js";function j(e){const o=b(e.gizmo.display.name);return o==null?[]:[{title:o},{property:"og:site_name",content:"ChatGPT"},{property:"og:type",content:"website"},{property:"og:title",content:o},...e.gizmo.display.description?[{name:"description",content:e.gizmo.display.description},{property:"og:description",content:e.gizmo.display.description}]:[],...e.gizmo.display.profile_picture_url?[{property:"og:image",content:e.gizmo.display.profile_picture_url},{property:"og:image:width",content:"512"},{property:"og:image:height",content:"512"}]:[]]}function O({gizmo:e}){return p.jsx(x,{children:p.jsx(R,{metadata:j(e)})})}function U({serverThreadId:e,clientThreadId:o,isStaticSharedThread:a,isDynamicSharedThread:s}){const t=z(d.ReportConversation),i=h("2935021756")?.value,r=M("3376455464")?.value||a||s,y=T(o);let n=e??y;const u=m.useContext(w);n==null&&u!=null&&(n=u.serverSharedThreadId??void 0),i&&typeof window<"u"&&(window._convo_share_debug={isOpen:t,canReport:r,serverThreadIdIsNull:n==null,isStaticSharedThread:a,isDynamicSharedThread:s});const c=f(),g=C();return m.useEffect(()=>{n==null&&t&&r&&(g.danger(c.formatMessage({id:"gizmo.report.conversationModal.emptyConversationError",defaultMessage:"Empty conversations cannot be reported"})),v.closeModal(d.ReportConversation))},[n,t,r,c,g]),!t||!r||n==null?(t&&_.logEvent("chatgpt_conversation_share_report_modal_not_shown",r?"serverThreadId":"canReport"),null):p.jsx(H,{serverThreadId:n,onClose:()=>v.closeModal(d.ReportConversation),isStaticSharedThread:a,isDynamicSharedThread:s})}function H({serverThreadId:e,onClose:o,isStaticSharedThread:a,isDynamicSharedThread:s}){const{data:t}=E(a||s?l.ShareableConversation:l.Conversation),i=f(),r=G(i,e,a||s?l.ShareableConversation:l.Conversation);return t==null||e==null?(_.logEvent("chatgpt_conversation_share_report_modal_not_shown",t==null?"report_reasons":"thread_id"),null):p.jsx(I,{reasons:t.reasons,submitReport:r,title:i.formatMessage({id:"gizmo.report.conversationModal.title",defaultMessage:"Report a conversation"}),onClose:o,header:t.header,subHeader:t.header_explanation})}export{O as G,H as R,U as T,j as g};
//# sourceMappingURL=esshmd5rh3cyi3eu.js.map