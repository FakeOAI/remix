const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/lvt1mr34gcv9es5v.js","assets/j18nlqm348px4nxa.js","assets/cpvd0jqo6wbwcv7c.js","assets/root-k8lflb3j.css","assets/hc8non16qyh1ycvz.js","assets/conversation-small-ict01xsi.css","assets/k5p0qig2res46iui.js","assets/oijlyksuyvhdvm4s.js","assets/kqwdyvkaaavvn8k3.js","assets/d4m7pf5o80ragg26.js","assets/oz8h61ungup804zx.js","assets/bwe24t3vlnfvd060.js","assets/983a0dy92b3ronpv.js"])))=>i.map(i=>d[i]);
import{a6 as e,aj as q,r as d,a7 as Z,D as G,K as O,c9 as _,bI as X,ak as W,eZ as Y,aG as M,a3 as ee,d as g,bR as te,bs as ae,w as se,aK as D,S as E,P as R,aE as re,aF as oe,N as ne,fu as ie,fh as de,ar as F,dN as S}from"./j18nlqm348px4nxa.js";import{bt as ce,ae as w,U as z,v as y,gK as K,gL as le,a as I,gM as ue,gN as $,a7 as he,a8 as me,d$ as Q,e2 as ge,e3 as pe,e4 as xe,ds as fe,bh as Ce,bn as ve,cy as je,gO as L,gP as Me,gl as be,b7 as Te,bJ as V,cW as ke,f6 as Se,f7 as ye,gI as we,gQ as Ne,cD as _e,c8 as Ie,dj as Ae}from"./hc8non16qyh1ycvz.js";import{C as Pe}from"./gngfhgwki5dmrcxm.js";import{m as Ee}from"./lxha6y9qb4i602u3.js";import{c as B}from"./cpvd0jqo6wbwcv7c.js";import{G as Re}from"./pb5i1y7myvaxdc4r.js";const j=W({submitRejectModeration:{id:"feedbackModal.moderationReject",defaultMessage:"Block Content"},submitAcceptModeration:{id:"feedbackModal.moderationAccept",defaultMessage:"Allow Content"},thumbsDownPlaceholder:{id:"feedbackModal.thumbsDownPlaceholder",defaultMessage:"What was the issue with the response? How could it be improved?"},copyrightContent:{id:"feedbackModal.copyrightContent",defaultMessage:"This content violates copyright law"},reportOtherContent:{id:"feedbackModal.reportOtherContent",defaultMessage:"I don't like this for some other reason (please describe)"},provideAdditionalFeedback:{id:"feedbackModal.provideAdditionalFeedback",defaultMessage:"Provide additional feedback"}});function ze({onClose:t,clientThreadId:a}){const r=q(),s=y.getTree(a),l=d.useContext(K)?.serverSharedThreadId,h=y.getServerThreadId(a),c=l??h,o=Z(),u=d.useRef([]),p=d.useRef(""),x=d.useRef(null),m=d.useCallback(()=>{const n=x.current?.elements;u.current=[...n||[]].filter(i=>i.checked).map(i=>i.id).map(i=>i.replace("feedback-","")),p.current=n?.["feedback-other"].value||""},[]),f=d.useCallback((n,i)=>{if(c==null){o.danger("Moderation NOT logged successfully! serverThreadId is null"),G.addError("Moderation: serverThreadId is null");return}const k=s.getMessageId(y.getThreadCurrentLeafId(a));O.submitSharedConversationReportFeedback({message_id:k,shared_conversation_id:c,text:n,tags:i}).then(()=>{o.success("Moderation logged successfully")}).catch(J=>{o.danger("Moderation NOT logged successfully! Please try again"),G.addError(new Error("Moderation: failed to log",{cause:J}))}),t()},[s,a,t,c,o]),C=d.useCallback(()=>{m(),u.current.push("moderation-reject"),f(p.current,u.current)},[f,m]),N=d.useCallback(()=>{m(),u.current.push("moderation-accept"),f(p.current,u.current)},[f,m]),b=e.jsxs(e.Fragment,{children:[e.jsx(_.Button,{title:r.formatMessage(j.submitRejectModeration),color:"danger",onClick:C}),e.jsx(_.Button,{title:r.formatMessage(j.submitAcceptModeration),color:"primary",onClick:N})]}),[T,v]=d.useState([]);return d.useEffect(()=>{O.fetchShareModerationCategories().then(n=>{const i=n.moderation_categories;v(Object.keys(i).map(k=>[k,i[k]]))})},[]),e.jsxs(X,{isOpen:!0,onClose:t,showCloseButton:!0,size:"custom",className:"md:max-w-[672px] lg:max-w-[896px] xl:max-w-6xl",type:"success",title:r.formatMessage(j.provideAdditionalFeedback),children:[e.jsxs("form",{ref:x,children:[e.jsx(le,{id:"feedback-other",placeholder:r.formatMessage(j.thumbsDownPlaceholder),rows:3,className:"mb-1 mt-4 w-full resize-none rounded-md bg-token-main-surface-primary"}),e.jsxs("div",{className:"mb-4",children:[T.map(([n,i])=>e.jsx(I,{id:"feedback-"+n,label:i},n)),e.jsx(I,{id:"feedback-copyright",label:r.formatMessage(j.copyrightContent)}),e.jsx(I,{id:"feedback-content-other",label:r.formatMessage(j.reportOtherContent)})]})]}),e.jsx(_.Actions,{primaryButton:b})]})}function Ge({clientThreadId:t}){return ce(w.SharedConversationModeration)?e.jsx(ze,{onClose:()=>z.closeModal(w.SharedConversationModeration),clientThreadId:t}):null}const H=({children:t,icon:a})=>e.jsxs("div",{className:"mb-4 flex items-start justify-start gap-2.5 rounded-md bg-token-main-surface-tertiary p-4 text-token-text-secondary last:mb-0",children:[a!=null&&e.jsx(a,{className:"icon-sm mt-1 flex-shrink-0"}),t]});function U({clientThreadId:t}){const a=ue(t),r=$(t),s=he(x=>me.getThreadCreateTime(t,x)),l=Q(t),h=ge(t,l),c=d.useMemo(()=>Ee(h),[h]),o=pe(t),u=xe(t),p=o||u;return e.jsxs("div",{className:"border-b border-gray-100 px-4 pb-4 pt-3 sm:mb-2 sm:pb-6 sm:pt-8 md:px-0",children:[e.jsx("h1",{className:"text-3xl font-semibold leading-tight text-token-text-primary sm:text-4xl",children:a}),(r!=null||s!=null)&&e.jsxs("div",{className:"pt-3 text-base text-gray-400 sm:pt-4",children:[r!=null&&e.jsx("span",{children:r}),r!=null&&s!=null&&e.jsx("span",{className:"px-2",children:"•"}),s!=null&&e.jsx(Y,{value:s,month:"long",year:"numeric",day:"numeric"})]}),e.jsx(Oe,{shouldShowCodeInterpreterDisclaimer:c,shouldShowPersonalizedDataDisclaimer:p})]})}const Oe=({shouldShowCodeInterpreterDisclaimer:t,shouldShowPersonalizedDataDisclaimer:a})=>e.jsxs(e.Fragment,{children:[t&&e.jsx("div",{className:"mt-4",children:e.jsx(H,{icon:B,children:e.jsx(M,{id:"sharedConversation.advancedDataAnalysisSupportDisclaimer",defaultMessage:"This chat contains files or images produced by Advanced Data Analysis which are not yet visible in Shared Chats."})})}),a&&e.jsx("div",{className:"mt-4",children:e.jsx(H,{icon:B,children:e.jsx(M,{id:"sharedConversation.personalizedDataDisclaimer",defaultMessage:"This conversation may reflect the link creator’s personalized data, which isn’t shared and can meaningfully change how the model responds."})})})]}),De=({clientThreadId:t})=>{const a=ee(),r=fe(t),{data:s,isLoading:l}=Ce(r);if(l)return null;const h=a?.accountUserId?s?A.loggedInCtaGizmo:A.loggedInCta:A.loggedOutCta,c=a&&s?ve(s):"/";let o=g.sharedConversationLoggedOutClicked;return a&&a?.accountUserId&&(a.isFree()?o=s?g.sharedConversationFreeGizmoClicked:g.sharedConversationFreeClicked:o=s?g.sharedConversationPaidGizmoClicked:g.sharedConversationPaidClicked),e.jsx("div",{className:"flex flex-col items-center gap-4",children:e.jsx(Re,{href:c,onClickTrackingEventName:o,children:e.jsx(M,{...h,values:{name:s?.gizmo.display.name}})})})},A=W({loggedOutCta:{id:"GizmoSharedConversationCTA.loggedOutCta",defaultMessage:"Sign up to chat"},loggedInCtaGizmo:{id:"GizmoSharedConversationCTA.loggedInCtaGizmo",defaultMessage:"Get started with {name}"},loggedInCta:{id:"GizmoSharedConversationCTA.loggedInCta",defaultMessage:"Get started with ChatGPT"}});function Fe({clientThreadId:t,isModeratingThread:a,continueConversationUrl:r}){const s=te(),l=q(),{layer:h}=ae("2840731323"),{value:c}=se("1860647109"),o=h.get("is_continue_enabled",!1)||s?.includes("debug");return e.jsxs("div",{className:"relative flex w-full flex-1 flex-col items-center justify-center gap-2 pt-3 empty:hidden sm:flex-row",children:[!o&&e.jsx(De,{clientThreadId:t}),a&&c&&e.jsx(D,{onClick:()=>{z.openModal(w.SharedConversationModeration)},children:l.formatMessage({id:"thread.sharedConversation.moderate",defaultMessage:"Moderate conversation"})}),o&&r&&e.jsx(D,{color:"primary",as:"link",to:r,size:"giant",onClick:()=>{E.logEvent("chatgpt_continue_shared_conversation_click"),R.logEvent(g.sharedConversationContinueConversationClicked)},children:l.formatMessage({id:"thread.sharedConversation.continue",defaultMessage:"Continue this conversation"})})]})}function Le({onClickReportSharedConversation:t}){return e.jsxs("div",{className:"flex justify-center gap-3 p-2 text-xs text-token-text-tertiary",children:[e.jsx("button",{onClick:()=>{t()},children:e.jsx(M,{id:"thread.reportSharedConversation",defaultMessage:"Report content"})}),e.jsx(P,{}),e.jsx("a",{href:"https://openai.com/policies/terms-of-use",target:"_blank",rel:"noreferrer",children:e.jsx(M,{id:"thread.termsOfUse",defaultMessage:"Terms of use"})}),e.jsx(P,{}),e.jsx("a",{href:"https://openai.com/policies/privacy-policy",target:"_blank",rel:"noreferrer",children:e.jsx(M,{id:"thread.privacyPolicy",defaultMessage:"Privacy policy"})}),e.jsx(P,{})]})}const P=()=>e.jsx("span",{children:"|"}),Be=re(()=>oe(()=>import("./lvt1mr34gcv9es5v.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])).then(t=>t.SearchResultsModal));function Ve({sharedConversationId:t,initiallyHighlightedMessageId:a,continueConversationUrl:r,isIndexable:s,isBetterMetatagsEnabled:l}){const c=ne().action==="moderate",o=Q(t);d.useEffect(()=>{R.logEvent(g.sharedConversationPageLoaded),E.logEvent("chatgpt_conversation_share_page_loaded")},[]);const u=je(t)??L,p=Me(u),x=be(t,o),m=y.getTitle(t),f=$(t),C=Te(),{isOpen:N}=V(),b=()=>[...new Array(x).keys()].map(v=>{const n=e.jsx(Pe,{isFinalTurn:v===x-1,turnIndex:v,clientThreadId:t,conversationLeafId:o,onChangeItemInView:()=>{},onChangeRating:()=>{},onRequestMoreCompletions:()=>{},onRequestCompletion:()=>Promise.resolve(),currentModelId:u??L,scrollToMessageId:a,avatarClassName:p,showAvatar:!C},v);return C?e.jsx("li",{className:F(S.conversationTurnWrapper,"contain-inline-size empty:hidden"),children:n},v):n}),T=e.jsxs("div",{className:"dark:border-white/20 md:border-transparent md:dark:border-transparent",children:[e.jsx(Fe,{clientThreadId:t,isModeratingThread:c,continueConversationUrl:r}),e.jsx(Le,{onClickReportSharedConversation:()=>{z.openModal(w.ReportConversation),E.logEvent("chatgpt_conversation_share_report_content_clicked",null,{location:"Static Shared Thread Page"}),R.logEvent(g.sharedConversationReportContentClicked,{location:"Static Shared Thread Page"})}})]});return e.jsxs(K.Provider,{value:{serverSharedThreadId:t,isIndexable:s},children:[!l&&e.jsxs(ke,{children:[m!=null&&e.jsx("title",{children:m}),e.jsx("meta",{property:"og:site_name",content:"ChatGPT"}),e.jsx("meta",{name:"robots",content:s?"index,nofollow":"noindex,nofollow"},"robots"),e.jsx("meta",{property:"og:title",content:m??"Shared Chat on ChatGPT"},"og:title"),e.jsx("meta",{property:"og:description",content:"Shared "+(f!=null?`by ${f} `:"")+"via ChatGPT"},"og:description"),e.jsx("meta",{property:"og:image",content:ie.src},"og:image")]}),e.jsxs("div",{className:"flex h-full flex-col",children:[C?e.jsx(Se,{className:de.application,thread:e.jsxs(ye,{anchor:"top",className:F(S.screen),name:"thread",trackLeading:!0,trackTrailing:!0,trailing:T,children:[e.jsx(we,{id:"thread-extended-info-sidebar-state",name:"thread-extended-info-sidebar-state",checked:N}),e.jsx("div",{className:S.staticSharedThreadHeader,children:e.jsx(U,{clientThreadId:t})}),e.jsx("ol",{className:S.conversationTurnList,children:b()})]}),threadExtendedInfo:e.jsx(Ne,{clientThreadId:t})}):e.jsxs("div",{className:"grow overflow-auto bg-token-main-surface-primary pt-2 md:pb-9",children:[e.jsx(_e,{children:e.jsx(U,{clientThreadId:t})}),b()]}),!C&&T]}),e.jsx(Ie,{serverThreadId:t,clientThreadId:t,isStaticSharedThread:!0}),e.jsx(Ge,{clientThreadId:t}),!C&&e.jsx(He,{clientThreadId:t}),e.jsx(Ae,{clientThreadId:t})]})}function He({clientThreadId:t}){const{isOpen:a}=V();return a&&e.jsx(Be,{clientThreadId:t})}export{Ve as S};
//# sourceMappingURL=lf2eeum7nisfyegr.js.map