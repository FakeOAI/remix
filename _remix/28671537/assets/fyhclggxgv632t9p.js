import{m as e,G as R,y as g,r as o,f$ as O,H as B,D as k,L as x,df as M,c9 as D,F as E}from"./2dfa7mijpk96ivcu.js";import{k as N,l as v,U as P,m as _,n as p}from"./n1ui85qe1scppnjf.js";const r=E({submitRejectModeration:{id:"feedbackModal.moderationReject",defaultMessage:"Block Content"},submitAcceptModeration:{id:"feedbackModal.moderationAccept",defaultMessage:"Allow Content"},thumbsDownPlaceholder:{id:"feedbackModal.thumbsDownPlaceholder",defaultMessage:"What was the issue with the response? How could it be improved?"},copyrightContent:{id:"feedbackModal.copyrightContent",defaultMessage:"This content violates copyright law"},reportOtherContent:{id:"feedbackModal.reportOtherContent",defaultMessage:"I don't like this for some other reason (please describe)"},provideAdditionalFeedback:{id:"feedbackModal.provideAdditionalFeedback",defaultMessage:"Provide additional feedback"}});function q({onClose:n,clientThreadId:d}){const s=R(),b=g.getTree(d),j=o.useContext(O)?.serverSharedThreadId,S=g.getServerThreadId(d),h=j??S,i=B(),c=o.useRef([]),f=o.useRef(""),C=o.useRef(null),l=o.useCallback(()=>{const a=C.current?.elements;c.current=[...a||[]].filter(t=>t.checked).map(t=>t.id).map(t=>t.replace("feedback-","")),f.current=a?.["feedback-other"].value||""},[]),u=o.useCallback((a,t)=>{if(h==null){i.danger("Moderation NOT logged successfully! serverThreadId is null"),k.addError("Moderation: serverThreadId is null");return}const m=b.getMessageId(g.getThreadCurrentLeafId(d));x.submitSharedConversationReportFeedback({message_id:m,shared_conversation_id:h,text:a,tags:t}).then(()=>{i.success("Moderation logged successfully")}).catch(I=>{i.danger("Moderation NOT logged successfully! Please try again"),k.addError(new Error("Moderation: failed to log",{cause:I}))}),n()},[b,d,n,h,i]),w=o.useCallback(()=>{l(),c.current.push("moderation-reject"),u(f.current,c.current)},[u,l]),T=o.useCallback(()=>{l(),c.current.push("moderation-accept"),u(f.current,c.current)},[u,l]),y=e.jsxs(e.Fragment,{children:[e.jsx(M.Button,{title:s.formatMessage(r.submitRejectModeration),color:"danger",onClick:w}),e.jsx(M.Button,{title:s.formatMessage(r.submitAcceptModeration),color:"primary",onClick:T})]}),[A,F]=o.useState([]);return o.useEffect(()=>{x.fetchShareModerationCategories().then(a=>{const t=a.moderation_categories;F(Object.keys(t).map(m=>[m,t[m]]))})},[]),e.jsxs(D,{isOpen:!0,onClose:n,showCloseButton:!0,size:"custom",className:"md:max-w-[672px] lg:max-w-[896px] xl:max-w-6xl",type:"success",title:s.formatMessage(r.provideAdditionalFeedback),children:[e.jsxs("form",{ref:C,children:[e.jsx(_,{id:"feedback-other",placeholder:s.formatMessage(r.thumbsDownPlaceholder),rows:3,className:"mb-1 mt-4 w-full resize-none rounded-md bg-token-main-surface-primary"}),e.jsxs("div",{className:"mb-4",children:[A.map(([a,t])=>e.jsx(p,{id:"feedback-"+a,label:t},a)),e.jsx(p,{id:"feedback-copyright",label:s.formatMessage(r.copyrightContent)}),e.jsx(p,{id:"feedback-content-other",label:s.formatMessage(r.reportOtherContent)})]})]}),e.jsx(M.Actions,{primaryButton:y})]})}function G({clientThreadId:n}){return N(v.SharedConversationModeration)?e.jsx(q,{onClose:()=>P.closeModal(v.SharedConversationModeration),clientThreadId:n}):null}export{G as C};
//# sourceMappingURL=fyhclggxgv632t9p.js.map