import{j as e,H as F,r as i,cL as R,a7 as T,a4 as N,R as P,M as k,I as K,N as _,eI as Q,K as v,as as J,A as x,aM as X,aC as Y,bt as D,ak as L,P as O,dN as Z,el as ee,fe as te}from"./lcs8amlj6u8bbv8a.js";import{T as b,B as ae,C as B,w as se,d as oe,u as U,a as re,s as ne,t as ie,f as de,D as le}from"./da7sd4hwg4eqhiwg.js";import{bg as ce,b3 as j,U as I,eM as ue,V as S,ae as G}from"./mhenka8kv2zo8x47.js";import{C as me}from"./cp74cy92mbnkpj07.js";import{T as he}from"./njn0f8av1tadybv7.js";import{m as ge,D as z}from"./dcsat6w9te03c4he.js";import{b as E}from"./bpr39nud2l2ri9ju.js";import{d as pe,g as fe,a as xe}from"./bh0082zbrhxuz40n.js";import{G as Ce}from"./fqlxc4pb7i3n1dey.js";import{M as ve}from"./loet3bipmnyhxrpc.js";import{a as Me}from"./h6tkmfeos3swk2os.js";const C=_({submitRejectModeration:{id:"feedbackModal.moderationReject",defaultMessage:"Block Content"},submitAcceptModeration:{id:"feedbackModal.moderationAccept",defaultMessage:"Allow Content"},thumbsDownPlaceholder:{id:"feedbackModal.thumbsDownPlaceholder",defaultMessage:"What was the issue with the response? How could it be improved?"},copyrightContent:{id:"feedbackModal.copyrightContent",defaultMessage:"This content violates copyright law"},reportOtherContent:{id:"feedbackModal.reportOtherContent",defaultMessage:"I don't like this for some other reason (please describe)"},provideAdditionalFeedback:{id:"feedbackModal.provideAdditionalFeedback",defaultMessage:"Provide additional feedback"}});function be({onClose:t,clientThreadId:a}){var A;const o=F(),s=b.getTree(a),m=(A=i.useContext(R))==null?void 0:A.serverSharedThreadId,l=b.getServerThreadId(a),n=m??l,r=i.useRef([]),g=i.useRef(""),p=i.useRef(null),c=i.useCallback(()=>{var h;const d=(h=p.current)==null?void 0:h.elements;r.current=[...d||[]].filter(u=>u.checked).map(u=>u.id).map(u=>u.replace("feedback-","")),g.current=(d==null?void 0:d["feedback-other"].value)||""},[]),f=i.useCallback((d,h)=>{if(n==null){T.danger("Moderation NOT logged successfully! serverThreadId is null"),N.addError("Moderation: serverThreadId is null");return}const u=s.getMessageId(b.getThreadCurrentLeafId(a));P.submitSharedConversationReportFeedback({message_id:u,shared_conversation_id:n,text:d,tags:h}).then(()=>{T.success("Moderation logged successfully")}).catch($=>{T.danger("Moderation NOT logged successfully! Please try again"),N.addError(new Error("Moderation: failed to log",{cause:$}))}),t()},[s,a,t,n]),M=i.useCallback(()=>{c(),r.current.push("moderation-reject"),f(g.current,r.current)},[f,c]),H=i.useCallback(()=>{c(),r.current.push("moderation-accept"),f(g.current,r.current)},[f,c]),q=e.jsxs(e.Fragment,{children:[e.jsx(k.Button,{title:o.formatMessage(C.submitRejectModeration),color:"danger",onClick:M}),e.jsx(k.Button,{title:o.formatMessage(C.submitAcceptModeration),color:"primary",onClick:H})]}),[V,W]=i.useState([]);return i.useEffect(()=>{P.fetchShareModerationCategories().then(d=>{const h=d.moderation_categories;W(Object.keys(h).map(u=>[u,h[u]]))})},[]),e.jsxs(K,{isOpen:!0,onClose:t,showCloseButton:!0,size:"custom",className:"md:max-w-[672px] lg:max-w-[896px] xl:max-w-6xl",type:"success",title:o.formatMessage(C.provideAdditionalFeedback),children:[e.jsxs("form",{ref:p,children:[e.jsx(ue,{id:"feedback-other",placeholder:o.formatMessage(C.thumbsDownPlaceholder),rows:3,className:"mb-1 mt-4 w-full resize-none rounded-md bg-token-main-surface-primary"}),e.jsxs("div",{className:"mb-4",children:[V.map(([d,h])=>e.jsx(S,{id:"feedback-"+d,label:h},d)),e.jsx(S,{id:"feedback-copyright",label:o.formatMessage(C.copyrightContent)}),e.jsx(S,{id:"feedback-content-other",label:o.formatMessage(C.reportOtherContent)})]})]}),e.jsx(k.Actions,{primaryButton:q})]})}function je({clientThreadId:t}){return ce(j.SharedConversationModeration)?e.jsx(be,{onClose:()=>I.closeModal(j.SharedConversationModeration),clientThreadId:t}):null}function Te({clientThreadId:t}){const a=ae(t),o=B(t),s=se(c=>oe.getThreadCreateTime(t,c)),m=U(t),l=re(t,m),n=i.useMemo(()=>ge(l),[l]),r=ne(t),g=ie(t),p=r||g;return e.jsxs("div",{className:"border-b border-gray-100 px-4 pb-4 pt-3 sm:mb-2 sm:pb-6 sm:pt-8 md:px-0",children:[e.jsx("h1",{className:"text-3xl font-semibold leading-tight text-token-text-primary sm:text-4xl",children:a}),(o!=null||s!=null)&&e.jsxs("div",{className:"pt-3 text-base text-gray-400 sm:pt-4",children:[o!=null&&e.jsx("span",{children:o}),o!=null&&s!=null&&e.jsx("span",{className:"px-2",children:"•"}),s!=null&&e.jsx(Q,{value:s,month:"long",year:"numeric",day:"numeric"})]}),e.jsx(ke,{shouldShowCodeInterpreterDisclaimer:n,shouldShowPersonalizedDataDisclaimer:p})]})}const ke=({shouldShowCodeInterpreterDisclaimer:t,shouldShowPersonalizedDataDisclaimer:a})=>e.jsxs(e.Fragment,{children:[t&&e.jsx("div",{className:"mt-4",children:e.jsx(z,{icon:E,children:e.jsx(v,{id:"sharedConversation.advancedDataAnalysisSupportDisclaimer",defaultMessage:"This chat contains files or images produced by Advanced Data Analysis which are not yet visible in Shared Chats."})})}),a&&e.jsx("div",{className:"mt-4",children:e.jsx(z,{icon:E,children:e.jsx(v,{id:"sharedConversation.personalizedDataDisclaimer",defaultMessage:"This conversation may reflect the link creator’s personalized data, which isn’t shared and can meaningfully change how the model responds."})})})]}),Se=({clientThreadId:t})=>{const a=J(),o=de(t),{data:s,isLoading:m}=pe(o);if(m)return null;const l=a!=null&&a.accountUserId?s?y.loggedInCtaGizmo:y.loggedInCta:y.loggedOutCta,n=a&&s?fe(s):"/";let r=x.sharedConversationLoggedOutClicked;return a&&(a!=null&&a.accountUserId)&&(a.isFree()?r=s?x.sharedConversationFreeGizmoClicked:x.sharedConversationFreeClicked:r=s?x.sharedConversationPaidGizmoClicked:x.sharedConversationPaidClicked),e.jsx("div",{className:"flex flex-col items-center gap-4",children:e.jsx(Ce,{href:n,onClickTrackingEventName:r,children:e.jsx(v,{...l,values:{name:s==null?void 0:s.gizmo.display.name}})})})},y=_({loggedOutCta:{id:"GizmoSharedConversationCTA.loggedOutCta",defaultMessage:"Sign up to chat"},loggedInCtaGizmo:{id:"GizmoSharedConversationCTA.loggedInCtaGizmo",defaultMessage:"Get started with {name}"},loggedInCta:{id:"GizmoSharedConversationCTA.loggedInCta",defaultMessage:"Get started with ChatGPT"}});function ye({clientThreadId:t,isModeratingThread:a,continueConversationUrl:o}){const s=X(),m=F(),{layer:l}=Y("2840731323"),n=l.get("is_continue_enabled",!1)||(s==null?void 0:s.includes("debug"));return e.jsxs("div",{className:"relative flex w-full flex-1 flex-col items-center justify-center gap-2 pt-3 empty:hidden sm:flex-row",children:[!n&&e.jsx(Se,{clientThreadId:t}),a&&e.jsx(D,{onClick:()=>{I.openModal(j.SharedConversationModeration)},children:m.formatMessage({id:"thread.sharedConversation.moderate",defaultMessage:"Moderate conversation"})}),n&&o&&e.jsx(D,{color:"primary",as:"link",to:o,size:"giant",onClick:()=>{L.logEvent("chatgpt_continue_shared_conversation_click"),O.logEvent(x.sharedConversationContinueConversationClicked)},children:m.formatMessage({id:"thread.sharedConversation.continue",defaultMessage:"Continue this conversation"})})]})}function we({onClickReportSharedConversation:t}){return e.jsxs("div",{className:"flex justify-center gap-3 p-2 text-xs text-token-text-tertiary",children:[e.jsx("button",{onClick:()=>{t()},children:e.jsx(v,{id:"thread.reportSharedConversation",defaultMessage:"Report content"})}),e.jsx(w,{}),e.jsx("a",{href:"https://openai.com/policies/terms-of-use",target:"_blank",rel:"noreferrer",children:e.jsx(v,{id:"thread.termsOfUse",defaultMessage:"Terms of use"})}),e.jsx(w,{}),e.jsx("a",{href:"https://openai.com/policies/privacy-policy",target:"_blank",rel:"noreferrer",children:e.jsx(v,{id:"thread.privacyPolicy",defaultMessage:"Privacy policy"})}),e.jsx(w,{})]})}const w=()=>e.jsx("span",{children:"|"});function Le({sharedConversationId:t,initiallyHighlightedMessageId:a,continueConversationUrl:o,isIndexable:s}){const l=Z().action==="moderate",n=U(t);i.useEffect(()=>{O.logEvent(x.sharedConversationPageLoaded),L.logEvent("chatgpt_conversation_share_page_loaded")},[]);const r=xe(t)??G,g=Me(r),p=le(t,n),c=b.getTitle(t),f=B(t);return e.jsxs(R.Provider,{value:{serverSharedThreadId:t,isIndexable:s},children:[e.jsxs(ee,{children:[c!=null&&e.jsx("title",{children:c}),e.jsx("meta",{property:"og:site_name",content:"ChatGPT"}),e.jsx("meta",{name:"robots",content:s?"index,nofollow":"noindex,nofollow"},"robots"),e.jsx("meta",{property:"og:title",content:c??"Shared Chat on ChatGPT"},"og:title"),e.jsx("meta",{property:"og:description",content:"Shared "+(f!=null?`by ${f} `:"")+"via ChatGPT"},"og:description"),e.jsx("meta",{property:"og:image",content:te.src},"og:image")]}),e.jsxs("div",{className:"flex h-full flex-col",children:[e.jsxs("div",{className:"grow overflow-auto bg-token-main-surface-primary pt-2 md:pb-9",children:[e.jsx(ve,{children:e.jsx(Te,{clientThreadId:t})}),[...new Array(p).keys()].map(M=>e.jsx(me,{isFinalTurn:M===p-1,turnIndex:M,clientThreadId:t,conversationLeafId:n,onChangeItemInView:()=>{},onChangeRating:()=>{},onRequestMoreCompletions:()=>{},onRequestCompletion:()=>Promise.resolve(),currentModelId:r??G,showInlineEmbeddedDisplay:!1,initiallyHighlightedMessageId:a,avatarClassName:g},M))]}),e.jsxs("div",{className:"dark:border-white/20 md:border-transparent md:dark:border-transparent",children:[e.jsx(ye,{clientThreadId:t,isModeratingThread:l,continueConversationUrl:o}),e.jsx(we,{onClickReportSharedConversation:()=>{I.openModal(j.ReportConversation)}})]})]}),e.jsx(he,{serverThreadId:t,clientThreadId:t,isStaticSharedThread:!0}),e.jsx(je,{clientThreadId:t})]})}export{Le as S};
//# sourceMappingURL=m9u8zfcexu0bo49o.js.map