const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/kmazea767jwvyx72.js","assets/mmal6p4kl22zfrfg.js","assets/esia9ah6q4vsupvt.js","assets/root-lzc0gvpq.css","assets/jyusxtzzgs4ihqfz.js","assets/lwk11n9qbjlycof7.js","assets/a44b3m5ml1mx5nn4.js","assets/i8crxwujeo3n60om.js","assets/conversation-small-cll5buey.css","assets/pbffjd4sant9qggz.js","assets/cnwuzbp3rvv4tadz.js","assets/x4zvbpdson10vdc1.js","assets/kqwdyvkaaavvn8k3.js","assets/mck4i86deuqt3e79.js","assets/meoz9lbdxu4dt41d.js","assets/ebw9n6fn0nqa2l4c.js","assets/983a0dy92b3ronpv.js"])))=>i.map(i=>d[i]);
import{y as e,a0 as q,r as d,al as K,D as z,N as F,bF as _,bt as X,a1 as W,eC as Y,ae as b,$ as ee,d as g,bA as te,aZ as ae,w as se,aA as D,S as I,P as R,ab as re,ac as oe,dE as ne,fh as ie,fi as de,a4 as O,fj as k}from"./mmal6p4kl22zfrfg.js";import{cn as $,gf as ce,a as A,cr as L,bS as le,cD as ue,gg as he,gh as me,gi as ge,d4 as pe}from"./i8crxwujeo3n60om.js";import{a as fe}from"./bjz2w9afskg2dxt5.js";import{T as y,E as xe,F as V,b as Ce,c as ve,m as Q,o as je,p as be,q as Me,k as Te,G as Se}from"./a44b3m5ml1mx5nn4.js";import{u as ke,G as w,U as G,b as Z}from"./jyusxtzzgs4ihqfz.js";import{a as ye,b as we}from"./mcabpsyr5i658ozc.js";import{T as Ne}from"./o690o1zkkh0iingt.js";import{m as _e}from"./j5mxggmj6xq5i8rt.js";import{c as B}from"./esia9ah6q4vsupvt.js";import{b as Ae,f as Ee,E as Pe}from"./meoz9lbdxu4dt41d.js";import{G as Ie}from"./cd4ygtn6384gqvyl.js";import{M as Re}from"./fbhbhap15n2ybrok.js";const j=W({submitRejectModeration:{id:"feedbackModal.moderationReject",defaultMessage:"Block Content"},submitAcceptModeration:{id:"feedbackModal.moderationAccept",defaultMessage:"Allow Content"},thumbsDownPlaceholder:{id:"feedbackModal.thumbsDownPlaceholder",defaultMessage:"What was the issue with the response? How could it be improved?"},copyrightContent:{id:"feedbackModal.copyrightContent",defaultMessage:"This content violates copyright law"},reportOtherContent:{id:"feedbackModal.reportOtherContent",defaultMessage:"I don't like this for some other reason (please describe)"},provideAdditionalFeedback:{id:"feedbackModal.provideAdditionalFeedback",defaultMessage:"Provide additional feedback"}});function Ge({onClose:t,clientThreadId:a}){const r=q(),s=y.getTree(a),l=d.useContext($)?.serverSharedThreadId,h=y.getServerThreadId(a),c=l??h,o=K(),u=d.useRef([]),p=d.useRef(""),f=d.useRef(null),m=d.useCallback(()=>{const n=f.current?.elements;u.current=[...n||[]].filter(i=>i.checked).map(i=>i.id).map(i=>i.replace("feedback-","")),p.current=n?.["feedback-other"].value||""},[]),x=d.useCallback((n,i)=>{if(c==null){o.danger("Moderation NOT logged successfully! serverThreadId is null"),z.addError("Moderation: serverThreadId is null");return}const S=s.getMessageId(y.getThreadCurrentLeafId(a));F.submitSharedConversationReportFeedback({message_id:S,shared_conversation_id:c,text:n,tags:i}).then(()=>{o.success("Moderation logged successfully")}).catch(J=>{o.danger("Moderation NOT logged successfully! Please try again"),z.addError(new Error("Moderation: failed to log",{cause:J}))}),t()},[s,a,t,c,o]),C=d.useCallback(()=>{m(),u.current.push("moderation-reject"),x(p.current,u.current)},[x,m]),N=d.useCallback(()=>{m(),u.current.push("moderation-accept"),x(p.current,u.current)},[x,m]),M=e.jsxs(e.Fragment,{children:[e.jsx(_.Button,{title:r.formatMessage(j.submitRejectModeration),color:"danger",onClick:C}),e.jsx(_.Button,{title:r.formatMessage(j.submitAcceptModeration),color:"primary",onClick:N})]}),[T,v]=d.useState([]);return d.useEffect(()=>{F.fetchShareModerationCategories().then(n=>{const i=n.moderation_categories;v(Object.keys(i).map(S=>[S,i[S]]))})},[]),e.jsxs(X,{isOpen:!0,onClose:t,showCloseButton:!0,size:"custom",className:"md:max-w-[672px] lg:max-w-[896px] xl:max-w-6xl",type:"success",title:r.formatMessage(j.provideAdditionalFeedback),children:[e.jsxs("form",{ref:f,children:[e.jsx(ce,{id:"feedback-other",placeholder:r.formatMessage(j.thumbsDownPlaceholder),rows:3,className:"mb-1 mt-4 w-full resize-none rounded-md bg-token-main-surface-primary"}),e.jsxs("div",{className:"mb-4",children:[T.map(([n,i])=>e.jsx(A,{id:"feedback-"+n,label:i},n)),e.jsx(A,{id:"feedback-copyright",label:r.formatMessage(j.copyrightContent)}),e.jsx(A,{id:"feedback-content-other",label:r.formatMessage(j.reportOtherContent)})]})]}),e.jsx(_.Actions,{primaryButton:M})]})}function ze({clientThreadId:t}){return ke(w.SharedConversationModeration)?e.jsx(Ge,{onClose:()=>G.closeModal(w.SharedConversationModeration),clientThreadId:t}):null}const H=({children:t,icon:a})=>e.jsxs("div",{className:"mb-4 flex items-start justify-start gap-2.5 rounded-md bg-token-main-surface-tertiary p-4 text-token-text-secondary last:mb-0",children:[a!=null&&e.jsx(a,{className:"icon-sm mt-1 flex-shrink-0"}),t]});function U({clientThreadId:t}){const a=xe(t),r=V(t),s=Ce(f=>ve.getThreadCreateTime(t,f)),l=Q(t),h=je(t,l),c=d.useMemo(()=>_e(h),[h]),o=be(t),u=Me(t),p=o||u;return e.jsxs("div",{className:"border-b border-gray-100 px-4 pb-4 pt-3 sm:mb-2 sm:pb-6 sm:pt-8 md:px-0",children:[e.jsx("h1",{className:"text-3xl font-semibold leading-tight text-token-text-primary sm:text-4xl",children:a}),(r!=null||s!=null)&&e.jsxs("div",{className:"pt-3 text-base text-gray-400 sm:pt-4",children:[r!=null&&e.jsx("span",{children:r}),r!=null&&s!=null&&e.jsx("span",{className:"px-2",children:"•"}),s!=null&&e.jsx(Y,{value:s,month:"long",year:"numeric",day:"numeric"})]}),e.jsx(Fe,{shouldShowCodeInterpreterDisclaimer:c,shouldShowPersonalizedDataDisclaimer:p})]})}const Fe=({shouldShowCodeInterpreterDisclaimer:t,shouldShowPersonalizedDataDisclaimer:a})=>e.jsxs(e.Fragment,{children:[t&&e.jsx("div",{className:"mt-4",children:e.jsx(H,{icon:B,children:e.jsx(b,{id:"sharedConversation.advancedDataAnalysisSupportDisclaimer",defaultMessage:"This chat contains files or images produced by Advanced Data Analysis which are not yet visible in Shared Chats."})})}),a&&e.jsx("div",{className:"mt-4",children:e.jsx(H,{icon:B,children:e.jsx(b,{id:"sharedConversation.personalizedDataDisclaimer",defaultMessage:"This conversation may reflect the link creator’s personalized data, which isn’t shared and can meaningfully change how the model responds."})})})]}),De=({clientThreadId:t})=>{const a=ee(),r=Te(t),{data:s,isLoading:l}=Ae(r);if(l)return null;const h=a?.accountUserId?s?E.loggedInCtaGizmo:E.loggedInCta:E.loggedOutCta,c=a&&s?Ee(s):"/";let o=g.sharedConversationLoggedOutClicked;return a&&a?.accountUserId&&(a.isFree()?o=s?g.sharedConversationFreeGizmoClicked:g.sharedConversationFreeClicked:o=s?g.sharedConversationPaidGizmoClicked:g.sharedConversationPaidClicked),e.jsx("div",{className:"flex flex-col items-center gap-4",children:e.jsx(Ie,{href:c,onClickTrackingEventName:o,children:e.jsx(b,{...h,values:{name:s?.gizmo.display.name}})})})},E=W({loggedOutCta:{id:"GizmoSharedConversationCTA.loggedOutCta",defaultMessage:"Sign up to chat"},loggedInCtaGizmo:{id:"GizmoSharedConversationCTA.loggedInCtaGizmo",defaultMessage:"Get started with {name}"},loggedInCta:{id:"GizmoSharedConversationCTA.loggedInCta",defaultMessage:"Get started with ChatGPT"}});function Oe({clientThreadId:t,isModeratingThread:a,continueConversationUrl:r}){const s=te(),l=q(),{layer:h}=ae("2840731323"),{value:c}=se("1860647109"),o=h.get("is_continue_enabled",!1)||s?.includes("debug");return e.jsxs("div",{className:"relative flex w-full flex-1 flex-col items-center justify-center gap-2 pt-3 empty:hidden sm:flex-row",children:[!o&&e.jsx(De,{clientThreadId:t}),a&&c&&e.jsx(D,{onClick:()=>{G.openModal(w.SharedConversationModeration)},children:l.formatMessage({id:"thread.sharedConversation.moderate",defaultMessage:"Moderate conversation"})}),o&&r&&e.jsx(D,{color:"primary",as:"link",to:r,size:"giant",onClick:()=>{I.logEvent("chatgpt_continue_shared_conversation_click"),R.logEvent(g.sharedConversationContinueConversationClicked)},children:l.formatMessage({id:"thread.sharedConversation.continue",defaultMessage:"Continue this conversation"})})]})}function Le({onClickReportSharedConversation:t}){return e.jsxs("div",{className:"flex justify-center gap-3 p-2 text-xs text-token-text-tertiary",children:[e.jsx("button",{onClick:()=>{t()},children:e.jsx(b,{id:"thread.reportSharedConversation",defaultMessage:"Report content"})}),e.jsx(P,{}),e.jsx("a",{href:"https://openai.com/policies/terms-of-use",target:"_blank",rel:"noreferrer",children:e.jsx(b,{id:"thread.termsOfUse",defaultMessage:"Terms of use"})}),e.jsx(P,{}),e.jsx("a",{href:"https://openai.com/policies/privacy-policy",target:"_blank",rel:"noreferrer",children:e.jsx(b,{id:"thread.privacyPolicy",defaultMessage:"Privacy policy"})}),e.jsx(P,{})]})}const P=()=>e.jsx("span",{children:"|"}),Be=re(()=>oe(()=>import("./kmazea767jwvyx72.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(t=>t.SearchResultsModal));function tt({sharedConversationId:t,initiallyHighlightedMessageId:a,continueConversationUrl:r,isIndexable:s,isBetterMetatagsEnabled:l}){const c=ne().action==="moderate",o=Q(t);d.useEffect(()=>{R.logEvent(g.sharedConversationPageLoaded),I.logEvent("chatgpt_conversation_share_page_loaded")},[]);const u=Pe(t)??L,p=ye(u),f=Se(t,o),m=y.getTitle(t),x=V(t),C=le(),{isOpen:N}=Z(),M=()=>[...new Array(f).keys()].map(v=>{const n=e.jsx(we,{isFinalTurn:v===f-1,turnIndex:v,clientThreadId:t,conversationLeafId:o,onChangeItemInView:()=>{},onChangeRating:()=>{},onRequestMoreCompletions:()=>{},onRequestCompletion:()=>Promise.resolve(),currentModelId:u??L,initiallyHighlightedMessageId:a,avatarClassName:p,showAvatar:!C},v);return C?e.jsx("li",{className:O(k.conversationTurnWrapper,"contain-inline-size empty:hidden"),children:n},v):n}),T=e.jsxs("div",{className:"dark:border-white/20 md:border-transparent md:dark:border-transparent",children:[e.jsx(Oe,{clientThreadId:t,isModeratingThread:c,continueConversationUrl:r}),e.jsx(Le,{onClickReportSharedConversation:()=>{G.openModal(w.ReportConversation),I.logEvent("chatgpt_conversation_share_report_content_clicked",null,{location:"Static Shared Thread Page"}),R.logEvent(g.sharedConversationReportContentClicked,{location:"Static Shared Thread Page"})}})]});return e.jsxs($.Provider,{value:{serverSharedThreadId:t,isIndexable:s},children:[!l&&e.jsxs(ue,{children:[m!=null&&e.jsx("title",{children:m}),e.jsx("meta",{property:"og:site_name",content:"ChatGPT"}),e.jsx("meta",{name:"robots",content:s?"index,nofollow":"noindex,nofollow"},"robots"),e.jsx("meta",{property:"og:title",content:m??"Shared Chat on ChatGPT"},"og:title"),e.jsx("meta",{property:"og:description",content:"Shared "+(x!=null?`by ${x} `:"")+"via ChatGPT"},"og:description"),e.jsx("meta",{property:"og:image",content:ie.src},"og:image")]}),e.jsxs("div",{className:"flex h-full flex-col",children:[C?e.jsx(he,{className:de.application,thread:e.jsxs(me,{anchor:"top",className:O(k.screen),name:"thread",trackLeading:!0,trackTrailing:!0,trailing:T,children:[e.jsx(ge,{id:"thread-extended-info-sidebar-state",name:"thread-extended-info-sidebar-state",checked:N}),e.jsx("div",{className:k.staticSharedThreadHeader,children:e.jsx(U,{clientThreadId:t})}),e.jsx("ol",{className:k.conversationTurnList,children:M()})]}),threadExtendedInfo:e.jsx(fe,{clientThreadId:t})}):e.jsxs("div",{className:"grow overflow-auto bg-token-main-surface-primary pt-2 md:pb-9",children:[e.jsx(Re,{children:e.jsx(U,{clientThreadId:t})}),M()]}),!C&&T]}),e.jsx(Ne,{serverThreadId:t,clientThreadId:t,isStaticSharedThread:!0}),e.jsx(ze,{clientThreadId:t}),!C&&e.jsx(He,{clientThreadId:t}),e.jsx(pe,{clientThreadId:t})]})}function He({clientThreadId:t}){const{isOpen:a}=Z();return a&&e.jsx(Be,{clientThreadId:t})}export{tt as S};
//# sourceMappingURL=masshu734ybmqk2i.js.map