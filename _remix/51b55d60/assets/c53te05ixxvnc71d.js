import{t as p,et as y,a2 as R,r as m,dQ as C,a4 as f,ah as M,S as _,dZ as l,bK as b}from"./otclk14vst88v95n.js";import{v as x}from"./m5be5ov74xrjmrp3.js";import{cU as E,bB as G,bC as I,bD as T}from"./cef20f49k9y1cwjs.js";import{d as w}from"./ge4estcii3ilqp3x.js";import{a as z,G as d,U as v}from"./fk3u4mjp5mpw70zy.js";function j(e){const o=x(e.gizmo.display.name);return o==null?[]:[{title:o},{property:"og:site_name",content:"ChatGPT"},{property:"og:type",content:"website"},{property:"og:title",content:o},...e.gizmo.display.description?[{name:"description",content:e.gizmo.display.description},{property:"og:description",content:e.gizmo.display.description}]:[],...e.gizmo.display.profile_picture_url?[{property:"og:image",content:e.gizmo.display.profile_picture_url},{property:"og:image:width",content:"512"},{property:"og:image:height",content:"512"}]:[]]}function O({gizmo:e}){return p.jsx(E,{children:p.jsx(y,{metadata:j(e)})})}function Q({serverThreadId:e,clientThreadId:o,isStaticSharedThread:a,isDynamicSharedThread:s}){const t=z(d.ReportConversation),i=R("2935021756")?.value,r=b("3376455464")?.value||a||s,h=w(o);let n=e??h;const u=m.useContext(C);n==null&&u!=null&&(n=u.serverSharedThreadId??void 0),i&&typeof window<"u"&&(window._convo_share_debug={isOpen:t,canReport:r,serverThreadIdIsNull:n==null,isStaticSharedThread:a,isDynamicSharedThread:s});const c=f(),g=M();return m.useEffect(()=>{n==null&&t&&r&&(g.danger(c.formatMessage({id:"gizmo.report.conversationModal.emptyConversationError",defaultMessage:"Empty conversations cannot be reported"})),v.closeModal(d.ReportConversation))},[n,t,r,c,g]),!t||!r||n==null?(t&&_.logEvent("chatgpt_conversation_share_report_modal_not_shown",r?"serverThreadId":"canReport"),null):p.jsx(H,{serverThreadId:n,onClose:()=>v.closeModal(d.ReportConversation),isStaticSharedThread:a,isDynamicSharedThread:s})}function H({serverThreadId:e,onClose:o,isStaticSharedThread:a,isDynamicSharedThread:s}){const{data:t}=G(a||s?l.ShareableConversation:l.Conversation),i=f(),r=I(i,e,a||s?l.ShareableConversation:l.Conversation);return t==null||e==null?(_.logEvent("chatgpt_conversation_share_report_modal_not_shown",t==null?"report_reasons":"thread_id"),null):p.jsx(T,{reasons:t.reasons,submitReport:r,title:i.formatMessage({id:"gizmo.report.conversationModal.title",defaultMessage:"Report a conversation"}),onClose:o,header:t.header,subHeader:t.header_explanation})}export{O as G,H as R,Q as T,j as g};
//# sourceMappingURL=c53te05ixxvnc71d.js.map