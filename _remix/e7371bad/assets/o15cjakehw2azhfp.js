import{r as u,cf as O,J as M,S as b,P as y,d as w,j as e,bz as J,aF as v,l as V,aB as x,K as X,a3 as Z,n as ee,I as te,O as R,R as se}from"./mz4maixy265szwnd.js";import{bc as ne,bd as W,be as oe,aE as H,bf as ae,bg as ie,bh as re,bi as le,bj as ce,bk as de,bl as ue,bm as pe,q as ge,bn as me,bo as fe,bp as he,bq as xe,br as be,bs as ye,bt as we,bu as _e,bv as Se,k as ve,T as je}from"./n7b9v4lgoh59xuao.js";import{aE as ke}from"./hlwoz96ivm34s047.js";import{C as Me}from"./f1z2wapaf035zqrz.js";import{H as Ce}from"./g4tl5lt9yqf20m4s.js";import"./ioql1sr0e1pju6u0.js";import{m as k}from"./jkt64srpvhnrtjqp.js";import"./dgu5k8gkhkno6npf.js";import"./j0sbfnutkua51fwa.js";import"./cri0e9crdl7wb3ba.js";import"./omh6xtylnzmwxi4t.js";import"./mqnlre9w3qncnc43.js";import"./d3t0wy4my1tj6gfq.js";import"./jz93b5j6xc7c1iqt.js";function Ee(t,o){const{data:n,isLoading:r,isSuccess:d,isError:i}=V({queryKey:["onboardingSteps",t,o],queryFn:()=>R.createOnboardingSteps(void 0,t,o)});return{steps:n?.steps??[],isLoading:r,isSuccess:d,isError:i}}function C({children:t,className:o}){return e.jsx(k.div,{className:o,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.25},exit:{opacity:0,y:-10},children:t})}function Ne({isFirstStep:t,userName:o}){return e.jsx(C,{children:e.jsx("h1",{className:"mb-2 text-3xl font-medium leading-9 text-token-text-primary",children:e.jsx(x,{...t?a.preparingOnboardingExperience:a.allSetLetMeShowYouAroundWithoutName,values:{name:o,nextLine:n=>e.jsx("span",{className:"block",children:n})}})})})}function Te({setIsInWelcomePage:t}){const o=W();return u.useEffect(()=>{o&&setTimeout(()=>{t(!1)},2500)},[o,t]),o?e.jsx(C,{children:e.jsx("h1",{className:"mb-2 text-3xl font-medium leading-9 text-token-text-primary",children:e.jsx(x,{...a.imChaggptNiceToMeetYou})})}):null}function Ie(t){const o=ae(),n=M(),r=X(),d=ie(t);let i=re(t);const c=le(d,i),s=ce(d,i);return u.useCallback(async l=>{const g="text/plain",f=new Blob([l],{type:g}),h=new File([f],"My_File.txt",{type:g});return de.uploadFile(o,ue(h),h,pe.Retrieval,s,n,r,void 0,c?.attachments)},[o,n,r,s,c?.attachments])}function Je({clientThreadId:t,setClientThreadId:o}){const[n,r]=u.useState(!0),{isOpen:d,setIsOpen:i,markAsViewed:c}=ne(),[s,l]=u.useState(0),[g,f]=u.useState(new Set(["usage_question"])),[h,j]=u.useState([]),[I,z]=u.useState(),[P,D]=u.useState(!1),{steps:p,isLoading:E,isError:N}=Ee(P?h:[],P?I:void 0),Q=W(),L=Fe({clientThreadId:t,setClientThreadId:o}),F=Ie(t),{layer:B}=O("717266490"),Y=B.get("keep_onboarding_after_dismiss",!1),U=M();if(u.useEffect(()=>{d&&(b.logEvent("chatgpt_onboarding_flow_shown"),y.logEvent(w.onboardingShown))},[d]),u.useEffect(()=>{N&&(c(),b.logEvent("chatgpt_onboarding_flow_error"),y.logEvent(w.onboardingError))},[N,c]),u.useEffect(()=>{if(!(E||!p[s])&&!g.has(p[s].step_type)){f(S=>new Set([...S,p[s].step_type]));const m=p[s].step_prompt;m&&(L({stepPrompt:m}),p[s].step_type==="file_upload"&&p[s].additional_info&&F(p[s].additional_info))}},[s,E,g,L,p,F]),N)return null;const _=p[s],T=m=>{i(!1),m&&!Y&&c(),s===p.length-1?(b.logEvent("chatgpt_onboarding_flow_finished"),y.logEvent(w.onboardingFinished)):(b.logEvent("chatgpt_onboarding_flow_dismissed",null,{step_type:_?.step_type,step_index:s.toString()}),y.logEvent(w.onboardingDismissed,{step_type:_?.step_type,step_index:s.toString()}))},$=m=>{j(m),p.find(S=>S.step_type==="self_description")||D(!0),l(S=>S+1),b.logEvent("chatgpt_onboarding_usage_question_selected",null,{main_usages:m.join(", ")}),y.logEvent(w.onboardingUsageQuestionSelected,{main_usages:m.join(", ")})},K=m=>{z(m),D(!0),l(S=>S+1),b.logEvent("chatgpt_onboarding_self_description_entered"),y.logEvent(w.onboardingSelfDescriptionEntered)},G=()=>{l(m=>m+1),b.logEvent("chatgpt_onboarding_usage_question_skipped"),y.logEvent(w.onboardingUsageQuestionSkipped)};return e.jsx(J,{isOpen:d,onClose:()=>T(!1),type:"success",size:"fullscreen",noPadding:!0,className:"w-full",children:e.jsx(oe,{clientThreadId:t,children:e.jsxs("div",{className:"flex h-full max-h-full flex-col bg-gradient-to-b from-brand-blue-800/15 to-gray-50 dark:from-brand-blue-800/15 dark:to-token-main-surface-primary",children:[e.jsxs("div",{className:"absolute left-0 top-0 z-10 flex w-full items-center justify-between bg-none px-4",style:{minHeight:"var(--screen-thread-header-min-height,60px)"},children:[p&&p.length>0&&e.jsx("div",{className:"absolute left-0 top-0 h-2 w-full",children:e.jsx(k.div,{className:"h-1.5 bg-token-main-surface-primary-inverse",initial:{width:"0%",opacity:0},animate:{width:`${(s+1)/p.length*100}%`,opacity:1},transition:{duration:.3}})}),s>0?e.jsx(v,{onClick:()=>l(s-1),color:"ghost",className:"border-none",icon:ke}):e.jsx("div",{}),_?.step_type==="usage_question"?e.jsx(v,{onClick:G,color:"ghost",className:"border-none",children:U.formatMessage(a.skip)}):e.jsx(v,{onClick:()=>T(!0),color:"ghost",className:"border-none",children:U.formatMessage(a.close)})]}),e.jsx("div",{className:"flex flex-1 flex-col items-center justify-center overflow-hidden",children:e.jsx(H,{mode:"wait",children:n?e.jsx(Te,{setIsInWelcomePage:r},"welcome"):E?e.jsx(Ne,{isFirstStep:s<1,userName:Q?.name},"loading"):_?.step_type==="usage_question"?e.jsx(Pe,{mainUsagesProp:h,onSelectMainUsages:$},"usage-question"):_?.step_type==="self_description"?e.jsx(De,{mainUsages:h,selfDescriptionProp:I,onEnterSelfDescription:K},"self-description"):["dalle","file_upload","canvas","voice"].includes(_?.step_type)?e.jsx(Le,{step:_,gotoStep:l,stepIndex:s,totalSteps:p.length,endOnboarding:T,clientThreadId:t},"tools-onboarding"):null})})]})})})}function Pe({mainUsagesProp:t,onSelectMainUsages:o}){const[n,r]=u.useState(new Set(t)),d=M();return e.jsxs(C,{children:[e.jsxs("div",{children:[e.jsx("h1",{className:"mb-2 text-3xl font-medium leading-9 text-token-text-primary",children:e.jsx(x,{...a.tellMeWhyHere})}),e.jsx("p",{className:"mb-6 text-base text-token-text-secondary",children:e.jsx(x,{...a.suggestUsefulIdeas})})]}),e.jsx("div",{className:"flex flex-col items-start justify-start gap-5",children:["school","work","personalTasks","funAndEntertainment"].map(i=>e.jsx(ge,{id:`main-usage-${i}`,checked:n.has(i),onChange:c=>r(s=>{const l=new Set(s);return c.target.checked?l.add(i):l.delete(i),l}),label:e.jsx("span",{className:"cursor-pointer",children:d.formatMessage(a[i])})},i))}),e.jsx(v,{size:"medium",color:"primary",onClick:()=>o(Array.from(n)),className:"mt-10",disabled:n.size===0,children:e.jsx(x,{...a.next})})]})}function De({mainUsages:t,selfDescriptionProp:o,onEnterSelfDescription:n}){const[r,d]=u.useState(o),[i,c]=u.useState(!1),s=M(),l=u.useMemo(()=>t.includes("school")?a.exampleSchoolSelfDescription:t.includes("work")?a.exampleWorkSelfDescription:t.includes("funAndEntertainment")?a.exampleFunAndEntertainmentSelfDescription:a.examplePersonalTasksSelfDescription,[t]),{layer:g}=O("717266490"),f=g.get("write_custom_instructions_in_onboarding",!1),h=async()=>{try{f&&r&&(c(!0),await R.createOrUpdateUserSystemMessage({aboutUserMessage:r,aboutModelMessage:"",disabledTools:[],enabled:!0}))}finally{c(!1),n(r)}};return e.jsxs(C,{className:"flex w-[640px] flex-col items-start",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"mb-4 text-3xl font-medium leading-9 text-token-text-primary",children:[e.jsx(x,{...a.oneLastQuestion}),e.jsx("br",{}),e.jsx(x,{...a.anythingElseYouWantMeToKnow})]}),e.jsx("p",{className:"text-base text-token-text-secondary",children:e.jsx(x,{...f?a.selfDescriptionReasonSaveToCustomInstructions:a.selfDescriptionReason,values:{customInstructions:j=>e.jsx("a",{href:Ce,className:"underline",target:"_blank",rel:"noreferrer",children:j})}})})]}),e.jsx(me,{className:"mt-10 rounded border border-token-border-light bg-token-main-surface-primary p-5 !text-base",placeholder:s.formatMessage(l),rows:4,value:r,onChange:j=>d(j.target.value)}),e.jsx(v,{size:"medium",color:"primary",onClick:h,className:"mt-10",loading:i,disabled:i,children:e.jsx(x,{...a.submit})})]})}function Le({step:t,gotoStep:o,stepIndex:n,totalSteps:r,endOnboarding:d,clientThreadId:i}){const c=fe({clientThreadId:i}),s=he(),l=M(),g=n===r-1,f=()=>{n<r-1?(o(n+1),b.logEvent("chatgpt_onboarding_flow_next_clicked",null,{source_step_type:t?.step_type,source_step_index:n.toString()}),y.logEvent(w.onboardingNextClicked,{source_step_type:t?.step_type,source_step_index:n.toString()})):(d(!0),s())};return e.jsxs(C,{className:"flex h-full w-full flex-row pl-24 pr-16",children:[e.jsx("div",{className:"flex flex-1 flex-col items-center justify-center",children:e.jsxs(k.div,{className:"flex w-[80%] flex-1 flex-col items-start justify-center gap-2",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsxs(H,{mode:"wait",children:[e.jsx(k.h1,{className:"mb-2 text-3xl font-medium text-token-text-primary",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5},exit:{opacity:0,y:-10},children:t.title?t.title:q[t.step_type]?l.formatMessage(q[t.step_type]):null},`title-${n}`),e.jsx(k.p,{className:"mb-6 text-base text-token-text-secondary",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5},exit:{opacity:0,y:-10},children:t.subtitle?t.subtitle:A[t.step_type]?l.formatMessage(A[t.step_type]):null},`subtitle-${n}`)]}),e.jsx(v,{size:"large",color:"primary",onClick:f,disabled:c,children:e.jsx(x,{...g?a.finish:a.next})})]})}),e.jsx("div",{className:"relative flex h-full flex-1 flex-col pb-16 pt-16",children:e.jsx("div",{className:"h-full w-full overflow-auto rounded-[30px] bg-token-main-surface-primary shadow-2xl shadow-token-border-xlight",children:e.jsx(Me,{hideHeader:!0,hideTools:!0,embedded:!0})})})]})}const Fe=({clientThreadId:t,setClientThreadId:o})=>{const n=xe(t),r=be(),{onThreadCreated:d}=ye({clientThreadId:t,setClientThreadId:o}),{onRequestCompletion:i}=we({clientThreadId:t,currentModelId:n,defaultModelId:r.id,onThreadCreated:d}),c=_e(t);return u.useCallback(({stepPrompt:s})=>{const l=new Se,g=`${c}-nextPrompt`,f=()=>{je.updateTree(t,h=>{h.addNode(g,s,c,se.User,void 0,void 0)})};i({type:Z.Next,promptId:g,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!0,completionMetadata:{conversationMode:ee(ve.getConversationMode(t))},updateTree:f,turnTracker:l})},[t,i,c])},a=te({skip:{defaultMessage:"Skip",id:"chatgpt.new-onboarding.skip"},close:{defaultMessage:"Close",id:"chatgpt.new-onboarding.close"},submit:{defaultMessage:"Submit",id:"chatgpt.new-onboarding.submit"},next:{defaultMessage:"Next",id:"chatgpt.new-onboarding.next"},finish:{defaultMessage:"Finish",id:"chatgpt.new-onboarding.finish"},tellMeWhyHere:{defaultMessage:"Tell me about why you’re here.",id:"chatgpt.new-onboarding.tell-me-why-here"},suggestUsefulIdeas:{defaultMessage:"I’ll use this information to suggest ideas you might find useful.",id:"chatgpt.new-onboarding.suggest-useful-ideas"},school:{defaultMessage:"School",id:"chatgpt.new-onboarding.school"},work:{defaultMessage:"Work",id:"chatgpt.new-onboarding.work"},personalTasks:{defaultMessage:"Personal tasks",id:"chatgpt.new-onboarding.personal-tasks"},funAndEntertainment:{defaultMessage:"Fun and entertainment",id:"chatgpt.new-onboarding.fun-and-entertainment"},imChaggptNiceToMeetYou:{defaultMessage:"Hi, I’m ChatGPT. It’s nice to meet you!",id:"chatgpt.new-onboarding.im-chatgpt-nice-to-meet-you"},preparingOnboardingExperience:{defaultMessage:"Preparing your onboarding experience...",id:"chatgpt.new-onboarding.preparing-onboarding-experience"},oneLastQuestion:{defaultMessage:"One last question:",id:"chatgpt.new-onboarding.one-last-question-2"},anythingElseYouWantMeToKnow:{defaultMessage:"Is there anything else you’d like me to know?",id:"chatgpt.new-onboarding.anything-else-you-want-me-to-know-2"},selfDescriptionReason:{defaultMessage:"Details like your job, hobbies, or interests make my responses more relevant.",id:"chatgpt.new-onboarding.self-description-reason"},allSetLetMeShowYouAroundWithoutName:{defaultMessage:"All set!<nextLine></nextLine>Now, let me show you around...",id:"chatgpt.new-onboarding.all-set-let-me-show-you-around-without-name"},selfDescriptionReasonSaveToCustomInstructions:{defaultMessage:"Details like your job, hobbies, or interests make my responses more relevant. I’ll save this information as <customInstructions>Custom Instructions</customInstructions>, which you can update any time.",id:"chatgpt.new-onboarding.self-description-reason-save-to-custom-instructions"},exampleSchoolSelfDescription:{defaultMessage:"I'm a college student studying computer science, and I love to play the guitar.",id:"chatgpt.new-onboarding.example-school-self-description"},exampleWorkSelfDescription:{defaultMessage:"I'm a graphic designer based in Berlin, and I enjoy painting and attending art exhibitions.",id:"chatgpt.new-onboarding.example-work-self-description"},examplePersonalTasksSelfDescription:{defaultMessage:"I live in Sydney and love cooking new recipes and planning travel itineraries.",id:"chatgpt.new-onboarding.example-personal-tasks-self-description"},exampleFunAndEntertainmentSelfDescription:{defaultMessage:"I'm a music enthusiast based in Nashville, and I can talk for hours about guitar techniques and songwriting.",id:"chatgpt.new-onboarding.example-fun-and-entertainment-self-description"}}),q={usage_question:a.tellMeWhyHere},A={usage_question:a.suggestUsefulIdeas};export{Ne as LoadingState,Je as default};
//# sourceMappingURL=o15cjakehw2azhfp.js.map