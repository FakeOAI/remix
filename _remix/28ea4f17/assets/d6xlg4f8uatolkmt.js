const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/li1d4aawh3gr3ayf.js","assets/h3lg90w4eburb9l1.js","assets/eisknr83d7xonp4v.js","assets/root-iyb3qk9s.css","assets/jzcja7m2krt3h1u8.js","assets/c46pq1bupx9ciq93.js","assets/bv82nytha89yynjj.js","assets/itrk5c5jq0xa5b9u.js","assets/conversation-small-cll5buey.css","assets/d57ytrufyxi9ftf7.js","assets/abawhm1brx9nbtqa.js","assets/bj9ypq08ppo5qhl6.js","assets/kqwdyvkaaavvn8k3.js","assets/qlpa88skjmnrskb9.js","assets/g34w7dm96iu72qbz.js","assets/h46kq0q03tsi98t7.js","assets/983a0dy92b3ronpv.js"])))=>i.map(i=>d[i]);
import{t as e,W as B,r as i,as as H,a8 as $,D as z,j as E,bC as w,bq as Q,a5 as U,eK as X,a0 as j,ab as Y,d as g,bw as Z,aU as J,T as ee,av as G,S as P,P as I,Y as te,Z as ae,dK as se,fk as re,fl as oe,K as ne,ed as ie}from"./h3lg90w4eburb9l1.js";import{fH as de,l as _,cx as D,bX as ce,cS as le,fI as ue,er as me,df as he}from"./itrk5c5jq0xa5b9u.js";import{T as S,H as ge,I as q,a as pe,b as fe,i as K,p as xe,q as Ce,r as ve,m as je,j as Me}from"./bv82nytha89yynjj.js";import{a as be,G as y,U as R,c as Te}from"./jzcja7m2krt3h1u8.js";import{e as ke,c as Se}from"./fxg1ptjnh7sqkrk9.js";import{T as ye}from"./ijjd7xnpz88es4ss.js";import{m as we}from"./kstvegbau6fnto08.js";import{a as F}from"./eisknr83d7xonp4v.js";import{a as _e,c as Ne,H as Ae}from"./g34w7dm96iu72qbz.js";import{G as Pe}from"./gabvcz114ys2b7t5.js";import{M as Ie}from"./noumndothz2v9f4j.js";const v=U({submitRejectModeration:{id:"feedbackModal.moderationReject",defaultMessage:"Block Content"},submitAcceptModeration:{id:"feedbackModal.moderationAccept",defaultMessage:"Allow Content"},thumbsDownPlaceholder:{id:"feedbackModal.thumbsDownPlaceholder",defaultMessage:"What was the issue with the response? How could it be improved?"},copyrightContent:{id:"feedbackModal.copyrightContent",defaultMessage:"This content violates copyright law"},reportOtherContent:{id:"feedbackModal.reportOtherContent",defaultMessage:"I don't like this for some other reason (please describe)"},provideAdditionalFeedback:{id:"feedbackModal.provideAdditionalFeedback",defaultMessage:"Provide additional feedback"}});function Re({onClose:t,clientThreadId:a}){const r=B(),s=S.getTree(a),c=i.useContext(H)?.serverSharedThreadId,u=S.getServerThreadId(a),d=c??u,o=$(),l=i.useRef([]),p=i.useRef(""),f=i.useRef(null),h=i.useCallback(()=>{const m=f.current?.elements;l.current=[...m||[]].filter(n=>n.checked).map(n=>n.id).map(n=>n.replace("feedback-","")),p.current=m?.["feedback-other"].value||""},[]),x=i.useCallback((m,n)=>{if(d==null){o.danger("Moderation NOT logged successfully! serverThreadId is null"),z.addError("Moderation: serverThreadId is null");return}const k=s.getMessageId(S.getThreadCurrentLeafId(a));E.submitSharedConversationReportFeedback({message_id:k,shared_conversation_id:d,text:m,tags:n}).then(()=>{o.success("Moderation logged successfully")}).catch(V=>{o.danger("Moderation NOT logged successfully! Please try again"),z.addError(new Error("Moderation: failed to log",{cause:V}))}),t()},[s,a,t,d,o]),M=i.useCallback(()=>{h(),l.current.push("moderation-reject"),x(p.current,l.current)},[x,h]),b=i.useCallback(()=>{h(),l.current.push("moderation-accept"),x(p.current,l.current)},[x,h]),C=e.jsxs(e.Fragment,{children:[e.jsx(w.Button,{title:r.formatMessage(v.submitRejectModeration),color:"danger",onClick:M}),e.jsx(w.Button,{title:r.formatMessage(v.submitAcceptModeration),color:"primary",onClick:b})]}),[T,W]=i.useState([]);return i.useEffect(()=>{E.fetchShareModerationCategories().then(m=>{const n=m.moderation_categories;W(Object.keys(n).map(k=>[k,n[k]]))})},[]),e.jsxs(Q,{isOpen:!0,onClose:t,showCloseButton:!0,size:"custom",className:"md:max-w-[672px] lg:max-w-[896px] xl:max-w-6xl",type:"success",title:r.formatMessage(v.provideAdditionalFeedback),children:[e.jsxs("form",{ref:f,children:[e.jsx(de,{id:"feedback-other",placeholder:r.formatMessage(v.thumbsDownPlaceholder),rows:3,className:"mb-1 mt-4 w-full resize-none rounded-md bg-token-main-surface-primary"}),e.jsxs("div",{className:"mb-4",children:[T.map(([m,n])=>e.jsx(_,{id:"feedback-"+m,label:n},m)),e.jsx(_,{id:"feedback-copyright",label:r.formatMessage(v.copyrightContent)}),e.jsx(_,{id:"feedback-content-other",label:r.formatMessage(v.reportOtherContent)})]})]}),e.jsx(w.Actions,{primaryButton:C})]})}function ze({clientThreadId:t}){return be(y.SharedConversationModeration)?e.jsx(Re,{onClose:()=>R.closeModal(y.SharedConversationModeration),clientThreadId:t}):null}const L=({children:t,icon:a})=>e.jsxs("div",{className:"mb-4 flex items-start justify-start gap-2.5 rounded-md bg-token-main-surface-tertiary p-4 text-token-text-secondary last:mb-0",children:[a!=null&&e.jsx(a,{className:"icon-sm mt-1 flex-shrink-0"}),t]});function O({clientThreadId:t}){const a=ge(t),r=q(t),s=pe(f=>fe.getThreadCreateTime(t,f)),c=K(t),u=xe(t,c),d=i.useMemo(()=>we(u),[u]),o=Ce(t),l=ve(t),p=o||l;return e.jsxs("div",{className:"border-b border-gray-100 px-4 pb-4 pt-3 sm:mb-2 sm:pb-6 sm:pt-8 md:px-0",children:[e.jsx("h1",{className:"text-3xl font-semibold leading-tight text-token-text-primary sm:text-4xl",children:a}),(r!=null||s!=null)&&e.jsxs("div",{className:"pt-3 text-base text-gray-400 sm:pt-4",children:[r!=null&&e.jsx("span",{children:r}),r!=null&&s!=null&&e.jsx("span",{className:"px-2",children:"•"}),s!=null&&e.jsx(X,{value:s,month:"long",year:"numeric",day:"numeric"})]}),e.jsx(Ee,{shouldShowCodeInterpreterDisclaimer:d,shouldShowPersonalizedDataDisclaimer:p})]})}const Ee=({shouldShowCodeInterpreterDisclaimer:t,shouldShowPersonalizedDataDisclaimer:a})=>e.jsxs(e.Fragment,{children:[t&&e.jsx("div",{className:"mt-4",children:e.jsx(L,{icon:F,children:e.jsx(j,{id:"sharedConversation.advancedDataAnalysisSupportDisclaimer",defaultMessage:"This chat contains files or images produced by Advanced Data Analysis which are not yet visible in Shared Chats."})})}),a&&e.jsx("div",{className:"mt-4",children:e.jsx(L,{icon:F,children:e.jsx(j,{id:"sharedConversation.personalizedDataDisclaimer",defaultMessage:"This conversation may reflect the link creator’s personalized data, which isn’t shared and can meaningfully change how the model responds."})})})]}),Ge=({clientThreadId:t})=>{const a=Y(),r=je(t),{data:s,isLoading:c}=_e(r);if(c)return null;const u=a?.accountUserId?s?N.loggedInCtaGizmo:N.loggedInCta:N.loggedOutCta,d=a&&s?Ne(s):"/";let o=g.sharedConversationLoggedOutClicked;return a&&a?.accountUserId&&(a.isFree()?o=s?g.sharedConversationFreeGizmoClicked:g.sharedConversationFreeClicked:o=s?g.sharedConversationPaidGizmoClicked:g.sharedConversationPaidClicked),e.jsx("div",{className:"flex flex-col items-center gap-4",children:e.jsx(Pe,{href:d,onClickTrackingEventName:o,children:e.jsx(j,{...u,values:{name:s?.gizmo.display.name}})})})},N=U({loggedOutCta:{id:"GizmoSharedConversationCTA.loggedOutCta",defaultMessage:"Sign up to chat"},loggedInCtaGizmo:{id:"GizmoSharedConversationCTA.loggedInCtaGizmo",defaultMessage:"Get started with {name}"},loggedInCta:{id:"GizmoSharedConversationCTA.loggedInCta",defaultMessage:"Get started with ChatGPT"}});function De({clientThreadId:t,isModeratingThread:a,continueConversationUrl:r}){const s=Z(),c=B(),{layer:u}=J("2840731323"),{value:d}=ee("1860647109"),o=u.get("is_continue_enabled",!1)||s?.includes("debug");return e.jsxs("div",{className:"relative flex w-full flex-1 flex-col items-center justify-center gap-2 pt-3 empty:hidden sm:flex-row",children:[!o&&e.jsx(Ge,{clientThreadId:t}),a&&d&&e.jsx(G,{onClick:()=>{R.openModal(y.SharedConversationModeration)},children:c.formatMessage({id:"thread.sharedConversation.moderate",defaultMessage:"Moderate conversation"})}),o&&r&&e.jsx(G,{color:"primary",as:"link",to:r,size:"giant",onClick:()=>{P.logEvent("chatgpt_continue_shared_conversation_click"),I.logEvent(g.sharedConversationContinueConversationClicked)},children:c.formatMessage({id:"thread.sharedConversation.continue",defaultMessage:"Continue this conversation"})})]})}function Fe({onClickReportSharedConversation:t}){return e.jsxs("div",{className:"flex justify-center gap-3 p-2 text-xs text-token-text-tertiary",children:[e.jsx("button",{onClick:()=>{t()},children:e.jsx(j,{id:"thread.reportSharedConversation",defaultMessage:"Report content"})}),e.jsx(A,{}),e.jsx("a",{href:"https://openai.com/policies/terms-of-use",target:"_blank",rel:"noreferrer",children:e.jsx(j,{id:"thread.termsOfUse",defaultMessage:"Terms of use"})}),e.jsx(A,{}),e.jsx("a",{href:"https://openai.com/policies/privacy-policy",target:"_blank",rel:"noreferrer",children:e.jsx(j,{id:"thread.privacyPolicy",defaultMessage:"Privacy policy"})}),e.jsx(A,{})]})}const A=()=>e.jsx("span",{children:"|"}),Le=te(()=>ae(()=>import("./li1d4aawh3gr3ayf.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(t=>t.SearchResultsModal));function Ze({sharedConversationId:t,initiallyHighlightedMessageId:a,continueConversationUrl:r,isIndexable:s,isBetterMetatagsEnabled:c}){const d=se().action==="moderate",o=K(t);i.useEffect(()=>{I.logEvent(g.sharedConversationPageLoaded),P.logEvent("chatgpt_conversation_share_page_loaded")},[]);const l=Ae(t)??D,p=ke(l),f=Me(t,o),h=S.getTitle(t),x=q(t),M=ce(),b=()=>[...new Array(f).keys()].map(C=>{const T=e.jsx(Se,{isFinalTurn:C===f-1,turnIndex:C,clientThreadId:t,conversationLeafId:o,onChangeItemInView:()=>{},onChangeRating:()=>{},onRequestMoreCompletions:()=>{},onRequestCompletion:()=>Promise.resolve(),currentModelId:l??D,initiallyHighlightedMessageId:a,avatarClassName:p,showAvatar:!M},C);return M?e.jsx("li",{className:"contain-inline-size empty:hidden",children:T},C):T});return e.jsxs(H.Provider,{value:{serverSharedThreadId:t,isIndexable:s},children:[!c&&e.jsxs(le,{children:[h!=null&&e.jsx("title",{children:h}),e.jsx("meta",{property:"og:site_name",content:"ChatGPT"}),e.jsx("meta",{name:"robots",content:s?"index,nofollow":"noindex,nofollow"},"robots"),e.jsx("meta",{property:"og:title",content:h??"Shared Chat on ChatGPT"},"og:title"),e.jsx("meta",{property:"og:description",content:"Shared "+(x!=null?`by ${x} `:"")+"via ChatGPT"},"og:description"),e.jsx("meta",{property:"og:image",content:re.src},"og:image")]}),e.jsxs("div",{className:"flex h-full flex-col",children:[e.jsx("div",{className:"grow overflow-auto bg-token-main-surface-primary pt-2 md:pb-9",children:M?e.jsx(ue,{className:oe.application,thread:e.jsxs(me,{anchor:"top",className:ne(ie.screen),name:"thread",trackLeading:!0,trackTrailing:!0,children:[e.jsx(O,{clientThreadId:t}),e.jsx("ol",{className:"mb-10 flex flex-col gap-4 px-4",children:b()})]})}):e.jsxs(e.Fragment,{children:[e.jsx(Ie,{children:e.jsx(O,{clientThreadId:t})}),b()]})}),e.jsxs("div",{className:"dark:border-white/20 md:border-transparent md:dark:border-transparent",children:[e.jsx(De,{clientThreadId:t,isModeratingThread:d,continueConversationUrl:r}),e.jsx(Fe,{onClickReportSharedConversation:()=>{R.openModal(y.ReportConversation),P.logEvent("chatgpt_conversation_share_report_content_clicked",null,{location:"Static Shared Thread Page"}),I.logEvent(g.sharedConversationReportContentClicked,{location:"Static Shared Thread Page"})}})]})]}),e.jsx(ye,{serverThreadId:t,clientThreadId:t,isStaticSharedThread:!0}),e.jsx(ze,{clientThreadId:t}),e.jsx(Oe,{clientThreadId:t}),e.jsx(he,{clientThreadId:t})]})}function Oe({clientThreadId:t}){const{isOpen:a}=Te();return a&&e.jsx(Le,{clientThreadId:t})}export{Ze as S};
//# sourceMappingURL=d6xlg4f8uatolkmt.js.map