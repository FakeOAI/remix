import{x as p,eg as R,t as h,r as m,Y as f,aa as x,S as _,dR as l,j as C}from"./jipkz7wahhvzzuqx.js";import{r as M}from"./lb2bw82esu8k4ire.js";import{cR as b,ac as w,bw as E,bx as G,by as I}from"./e6zhtx99a7i1g9zc.js";import{d as T}from"./lbv1zpv4g2ap41f2.js";import{a as j,G as d,U as v}from"./npl77qwfuvi2jyha.js";function z(e){const o=M(e.gizmo.display.name);return o==null?[]:[{title:o},{property:"og:site_name",content:"ChatGPT"},{property:"og:type",content:"website"},{property:"og:title",content:o},...e.gizmo.display.description?[{name:"description",content:e.gizmo.display.description},{property:"og:description",content:e.gizmo.display.description}]:[],...e.gizmo.display.profile_picture_url?[{property:"og:image",content:e.gizmo.display.profile_picture_url},{property:"og:image:width",content:"512"},{property:"og:image:height",content:"512"}]:[]]}function U({gizmo:e}){return p.jsx(b,{children:p.jsx(R,{metadata:z(e)})})}function A({serverThreadId:e,clientThreadId:o,isStaticSharedThread:a,isDynamicSharedThread:s}){const t=j(d.ReportConversation),i=h("2935021756")?.value,r=C("3376455464")?.value||a||s,y=T(o);let n=e??y;const u=m.useContext(w);n==null&&u!=null&&(n=u.serverSharedThreadId??void 0),i&&typeof window<"u"&&(window._convo_share_debug={isOpen:t,canReport:r,serverThreadIdIsNull:n==null,isStaticSharedThread:a,isDynamicSharedThread:s});const c=f(),g=x();return m.useEffect(()=>{n==null&&t&&r&&(g.danger(c.formatMessage({id:"gizmo.report.conversationModal.emptyConversationError",defaultMessage:"Empty conversations cannot be reported"})),v.closeModal(d.ReportConversation))},[n,t,r,c,g]),!t||!r||n==null?(t&&_.logEvent("chatgpt_conversation_share_report_modal_not_shown",r?"serverThreadId":"canReport"),null):p.jsx(H,{serverThreadId:n,onClose:()=>v.closeModal(d.ReportConversation),isStaticSharedThread:a,isDynamicSharedThread:s})}function H({serverThreadId:e,onClose:o,isStaticSharedThread:a,isDynamicSharedThread:s}){const{data:t}=E(a||s?l.ShareableConversation:l.Conversation),i=f(),r=G(i,e,a||s?l.ShareableConversation:l.Conversation);return t==null||e==null?(_.logEvent("chatgpt_conversation_share_report_modal_not_shown",t==null?"report_reasons":"thread_id"),null):p.jsx(I,{reasons:t.reasons,submitReport:r,title:i.formatMessage({id:"gizmo.report.conversationModal.title",defaultMessage:"Report a conversation"}),onClose:o,header:t.header,subHeader:t.header_explanation})}export{U as G,H as R,A as T,z as g};
//# sourceMappingURL=c78o8wyvzedeoudw.js.map