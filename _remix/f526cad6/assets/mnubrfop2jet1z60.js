import{r as p,ay as Q,fq as ie,d8 as B,G as M,S as _,P as w,d as S,m as e,c9 as re,aY as k,s as le,aS as b,H as ce,fm as de,a9 as ue,n as pe,ab as ge,F as me,L as z,gb as fe,o as R,eV as he,y as xe}from"./lj034xtwgajnbw80.js";import{b4 as be,b5 as Y,b6 as G,b7 as ye,ay as $,b8 as K,b9 as _e,ba as we,bb as Se,bc as ke,bd as V,be as ve,bf as Me,n as je,bg as Ee,bh as Ce,bi as Ne,bj as Te,bk as Pe,b0 as Ie}from"./hwys1cva3r0syt2i.js";import{aE as De}from"./b6cy1eq07lpymojm.js";import{C as Le}from"./ngnyriku8zz57qvh.js";import{H as Fe}from"./g4tl5lt9yqf20m4s.js";import"./nhbh4xua4q3jx6sv.js";import{m as v}from"./kg90shbkih4fj2ta.js";import"./e8o7cmoe8883kidw.js";import"./gctbfwgizwb8pujm.js";import"./c6m8w1xte1oeqdcv.js";import"./ooe3ps1ztatrxg1t.js";import"./g3uk1jzd5hyq3p0c.js";import"./en8vrjnuftwsyj53.js";function Ue(t,n){const{data:o,isLoading:r,isSuccess:d,isError:i}=le({queryKey:["onboardingSteps",t,n],queryFn:()=>z.createOnboardingSteps(void 0,t,n)});return{steps:o?.steps??[],isLoading:r,isSuccess:d,isError:i}}function j({children:t,className:n}){return e.jsx(v.div,{className:n,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.25},exit:{opacity:0,y:-10},children:t})}function qe({isFirstStep:t,userName:n}){return e.jsx(j,{children:e.jsx("h1",{className:"mb-2 text-3xl font-medium leading-9 text-token-text-primary",children:e.jsx(b,{...t?a.preparingOnboardingExperience:a.allSetLetMeShowYouAroundWithoutName,values:{name:n,nextLine:o=>e.jsx("span",{className:"block",children:o})}})})})}function Ae({setIsInWelcomePage:t}){const n=Y();return p.useEffect(()=>{n&&setTimeout(()=>{t(!1)},2500)},[n,t]),n?e.jsx(j,{children:e.jsx("h1",{className:"mb-2 text-3xl font-medium leading-9 text-token-text-primary",children:e.jsx(b,{...a.imChaggptNiceToMeetYou})})}):null}function Oe(t){const n=K(),o=M(),r=ce(),d=_e(t);let i=we(t);const u=Se(d,i),s=ke(d,i);return p.useCallback(async l=>{const h="text/plain",x=new Blob([l],{type:h}),g=new File([x],"My_File.txt",{type:h});return V.uploadFile(n,ve(g),g,Me.Retrieval,s,o,r,void 0,u?.attachments)},[n,o,r,s,u?.attachments])}function nt({clientThreadId:t,setClientThreadId:n}){const[o,r]=p.useState(!0),{isOpen:d,setIsOpen:i,markAsViewed:u}=be(),[s,l]=p.useState(0),[h,x]=p.useState(new Set(["usage_question"])),[g,E]=p.useState([]),[P,J]=p.useState(),[I,D]=p.useState(!1),{steps:m,isLoading:C,isError:N}=Ue(I?g:[],I?P:void 0),X=Y(),L=Qe({clientThreadId:t,setClientThreadId:n}),F=Oe(t),{createNewThread:U}=G({clientThreadId:t,setClientThreadId:n}),Z=Q(t),q=ie(t,Z),{layer:ee}=B("717266490"),te=ee.get("keep_onboarding_after_dismiss",!1),A=M();p.useEffect(()=>{d&&(_.logEvent("chatgpt_onboarding_flow_shown"),w.logEvent(S.onboardingShown))},[d]),p.useEffect(()=>{N&&(u(),_.logEvent("chatgpt_onboarding_flow_error"),w.logEvent(S.onboardingError))},[N,u]),p.useEffect(()=>{if(!(C||!m[s])&&!h.has(m[s].step_type)){x(y=>new Set([...y,m[s].step_type]));const c=m[s].step_prompt;c&&(L({stepPrompt:c}),m[s].step_type==="file_upload"&&m[s].additional_info&&F(m[s].additional_info))}},[s,C,h,L,m,F]);const f=m[s];if(p.useEffect(()=>{const c=f?.step_type;(c==="usage_question"||c==="self_description")&&q&&(U(),x(y=>new Set(Array.from(y).filter(O=>O==="usage_question"||O==="self_description"))))},[f?.step_type,U,q]),N)return null;const T=c=>{i(!1),s===m.length-1?(_.logEvent("chatgpt_onboarding_flow_finished"),w.logEvent(S.onboardingFinished)):(_.logEvent("chatgpt_onboarding_flow_dismissed",null,{step_type:f?.step_type,step_index:s.toString()}),w.logEvent(S.onboardingDismissed,{step_type:f?.step_type,step_index:s.toString()})),c&&!te&&u()},se=c=>{E(c),m.find(y=>y.step_type==="self_description")||D(!0),l(y=>y+1),_.logEvent("chatgpt_onboarding_usage_question_selected",null,{main_usages:c.join(", ")}),w.logEvent(S.onboardingUsageQuestionSelected,{main_usages:c.join(", ")})},ne=c=>{J(c),D(!0),l(y=>y+1),_.logEvent("chatgpt_onboarding_self_description_entered",null,{main_usages:g.join(", ")}),w.logEvent(S.onboardingSelfDescriptionEntered,{main_usages:g.join(", ")})},oe=()=>{_.logEvent("chatgpt_onboarding_usage_question_skipped",null,{step_type:f?.step_type,step_index:s.toString()}),w.logEvent(S.onboardingUsageQuestionSkipped,{step_type:f?.step_type,step_index:s.toString()}),l(c=>c+1)},ae=()=>{_.logEvent("chatgpt_onboarding_go_back",null,{step_type:f?.step_type,step_index:s.toString()}),w.logEvent(S.onboardingGoBack,{step_type:f?.step_type,step_index:s.toString()}),l(c=>c-1)};return e.jsx(re,{isOpen:d,onClose:()=>T(!1),type:"success",size:"fullscreen",noPadding:!0,className:"w-full",children:e.jsx(ye,{clientThreadId:t,children:e.jsxs("div",{className:"flex h-full max-h-full flex-col bg-gradient-to-b from-brand-blue-800/15 to-gray-50 dark:from-brand-blue-800/15 dark:to-token-main-surface-primary",children:[e.jsxs("div",{className:"absolute left-0 top-0 z-10 flex w-full items-center justify-between bg-none px-4",style:{minHeight:"var(--screen-thread-header-min-height,60px)"},children:[m&&m.length>0&&e.jsx("div",{className:"absolute left-0 top-0 h-2 w-full",children:e.jsx(v.div,{className:"h-1.5 bg-token-main-surface-primary-inverse",initial:{width:"0%",opacity:0},animate:{width:`${(s+1)/m.length*100}%`,opacity:1},transition:{duration:.3}})}),s>0?e.jsx(k,{onClick:ae,color:"ghost",className:"border-none",icon:De}):e.jsx("div",{}),f?.step_type==="usage_question"||f?.step_type==="self_description"?e.jsx(k,{onClick:oe,color:"ghost",className:"border-none",children:A.formatMessage(a.skip)}):e.jsx(k,{onClick:()=>T(!0),color:"ghost",className:"border-none",children:A.formatMessage(a.close)})]}),e.jsx("div",{className:"flex flex-1 flex-col items-center justify-center overflow-hidden",children:e.jsx($,{mode:"wait",children:o?e.jsx(Ae,{setIsInWelcomePage:r},"welcome"):C?e.jsx(qe,{isFirstStep:s<1,userName:X?.name},"loading"):f?.step_type==="usage_question"?e.jsx(Re,{mainUsagesProp:g,onSelectMainUsages:se},"usage-question"):f?.step_type==="self_description"?e.jsx(We,{mainUsages:g,selfDescriptionProp:P,onEnterSelfDescription:ne},"self-description"):["dalle","file_upload","canvas","voice"].includes(f?.step_type)?e.jsx(He,{step:f,gotoStep:l,stepIndex:s,totalSteps:m.length,endOnboarding:T,clientThreadId:t},"tools-onboarding"):null})})]})})})}function Re({mainUsagesProp:t,onSelectMainUsages:n}){const[o,r]=p.useState(new Set(t)),d=M();return e.jsxs(j,{children:[e.jsxs("div",{children:[e.jsx("h1",{className:"mb-2 text-3xl font-medium leading-9 text-token-text-primary",children:e.jsx(b,{...a.tellMeWhyHere})}),e.jsx("p",{className:"mb-6 text-base text-token-text-secondary",children:e.jsx(b,{...a.suggestUsefulIdeas})})]}),e.jsx("div",{className:"flex flex-col items-start justify-start gap-5",children:["school","work","personalTasks","funAndEntertainment"].map(i=>e.jsx(je,{id:`main-usage-${i}`,checked:o.has(i),onChange:u=>r(s=>{const l=new Set(s);return u.target.checked?l.add(i):l.delete(i),l}),label:e.jsx("span",{className:"cursor-pointer",children:d.formatMessage(a[i])})},i))}),e.jsx(k,{size:"medium",color:"primary",onClick:()=>n(Array.from(o)),className:"mt-10",disabled:o.size===0,children:e.jsx(b,{...a.next})})]})}function We({mainUsages:t,selfDescriptionProp:n,onEnterSelfDescription:o}){const[r,d]=p.useState(n),i=M(),u=p.useMemo(()=>t.includes("school")?a.exampleSchoolSelfDescription:t.includes("work")?a.exampleWorkSelfDescription:t.includes("funAndEntertainment")?a.exampleFunAndEntertainmentSelfDescription:a.examplePersonalTasksSelfDescription,[t]),{layer:s}=B("717266490"),l=s.get("write_custom_instructions_in_onboarding",!1),h=async()=>{o(r),l&&r&&z.createOrUpdateUserSystemMessage({aboutUserMessage:r,aboutModelMessage:"",disabledTools:[],enabled:!0}).catch(()=>{})};return e.jsxs(j,{className:"flex w-[640px] flex-col items-start",children:[e.jsxs("div",{children:[e.jsxs("h1",{className:"mb-4 text-3xl font-medium leading-9 text-token-text-primary",children:[e.jsx(b,{...a.oneLastQuestion}),e.jsx("br",{}),e.jsx(b,{...a.anythingElseYouWantMeToKnow})]}),e.jsx("p",{className:"text-base text-token-text-secondary",children:e.jsx(b,{...l?a.selfDescriptionReasonSaveToCustomInstructions:a.selfDescriptionReason,values:{customInstructions:x=>e.jsx("a",{href:Fe,className:"underline",target:"_blank",rel:"noreferrer",children:x})}})})]}),e.jsx(Ee,{className:"!dark:bg-white/5 mt-10 rounded border border-token-border-light !bg-black/5 p-5 !text-base placeholder-token-text-tertiary",placeholder:i.formatMessage(u),rows:4,value:r,onChange:x=>d(x.target.value),autoFocus:!0}),e.jsx(k,{size:"medium",color:"primary",onClick:h,className:"mt-10",children:e.jsx(b,{...a.submit})})]})}function He({step:t,gotoStep:n,stepIndex:o,totalSteps:r,endOnboarding:d,clientThreadId:i}){const u=de({clientThreadId:i}),s=Ce(),l=K(),h=M(),x=o===r-1,g=()=>{o<r-1?(_.logEvent("chatgpt_onboarding_flow_next_clicked",null,{source_step_type:t?.step_type,source_step_index:o.toString()}),w.logEvent(S.onboardingNextClicked,{source_step_type:t?.step_type,source_step_index:o.toString()}),t?.step_type==="file_upload"&&V.reset(l),n(o+1)):(d(!0),s())};return e.jsxs(j,{className:"flex h-full w-full flex-row px-8 md:px-12 lg:px-16 xl:px-24",children:[e.jsx("div",{className:"flex flex-1 flex-col items-center justify-center",children:e.jsxs(v.div,{className:"flex w-[90%] flex-1 flex-col items-start justify-center gap-2 md:w-[85%] lg:w-[80%]",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsxs($,{mode:"wait",children:[e.jsx(v.h1,{className:"mb-2 text-3xl font-medium text-token-text-primary",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5},exit:{opacity:0,y:-10},children:t.title?t.title:W[t.step_type]?h.formatMessage(W[t.step_type]):null},`title-${o}`),e.jsx(v.p,{className:"mb-6 text-base text-token-text-secondary",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5},exit:{opacity:0,y:-10},children:t.subtitle?t.subtitle:H[t.step_type]?h.formatMessage(H[t.step_type]):null},`subtitle-${o}`)]}),e.jsx(k,{size:"large",color:"primary",onClick:g,disabled:u&&!x,children:e.jsx(b,{...x?a.finish:a.next})})]})}),e.jsx("div",{className:"relative flex h-full min-w-[360px] flex-1 flex-col pb-16 pt-16",children:e.jsx("div",{className:"h-full w-full overflow-auto rounded-[30px] bg-token-main-surface-primary shadow-2xl shadow-token-border-xlight",children:e.jsx(Le,{hideHeader:!0,hideTools:!0,embedded:!0})})})]})}const Qe=({clientThreadId:t,setClientThreadId:n})=>{const o=Ne(t),r=Te(),{onThreadCreated:d}=G({clientThreadId:t,setClientThreadId:n}),{onRequestCompletion:i}=Pe({clientThreadId:t,currentModelId:o,defaultModelId:r.id,onThreadCreated:d}),u=Q(t);return p.useCallback(({stepPrompt:s})=>{const l=new Ie,h=`${u}-nextPrompt`,x=()=>{const g=fe.getTextAsMessage(s,R.User);g.author.metadata=g.author.metadata||{},g.author.metadata.real_author=he.Onboarding,xe.updateTree(t,E=>{E.addNode(h,g,u,R.User,void 0,void 0)})};i({type:ue.Next,promptId:h,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!0,completionMetadata:{conversationMode:pe(ge.getConversationMode(t)),isOnboardingConversation:!0},updateTree:x,turnTracker:l})},[t,i,u])},a=me({skip:{defaultMessage:"Skip",id:"chatgpt.new-onboarding.skip"},close:{defaultMessage:"Close",id:"chatgpt.new-onboarding.close"},submit:{defaultMessage:"Submit",id:"chatgpt.new-onboarding.submit"},next:{defaultMessage:"Next",id:"chatgpt.new-onboarding.next"},finish:{defaultMessage:"Finish",id:"chatgpt.new-onboarding.finish"},tellMeWhyHere:{defaultMessage:"Tell me about why you’re here.",id:"chatgpt.new-onboarding.tell-me-why-here"},suggestUsefulIdeas:{defaultMessage:"I’ll use this information to suggest ideas you might find useful.",id:"chatgpt.new-onboarding.suggest-useful-ideas"},school:{defaultMessage:"School",id:"chatgpt.new-onboarding.school"},work:{defaultMessage:"Work",id:"chatgpt.new-onboarding.work"},personalTasks:{defaultMessage:"Personal tasks",id:"chatgpt.new-onboarding.personal-tasks"},funAndEntertainment:{defaultMessage:"Fun and entertainment",id:"chatgpt.new-onboarding.fun-and-entertainment"},imChaggptNiceToMeetYou:{defaultMessage:"Hi, I’m ChatGPT. It’s nice to meet you!",id:"chatgpt.new-onboarding.im-chatgpt-nice-to-meet-you"},preparingOnboardingExperience:{defaultMessage:"Preparing your onboarding experience...",id:"chatgpt.new-onboarding.preparing-onboarding-experience"},oneLastQuestion:{defaultMessage:"One last question:",id:"chatgpt.new-onboarding.one-last-question-2"},anythingElseYouWantMeToKnow:{defaultMessage:"Is there anything else you’d like me to know?",id:"chatgpt.new-onboarding.anything-else-you-want-me-to-know-2"},oneQuestionAnythingElse:{defaultMessage:"One last question: Is there anything else you’d like me to know?",id:"chatgpt.new-onboarding.one-more-question"},selfDescriptionReason:{defaultMessage:"Details like your job, hobbies, or interests make my responses more relevant.",id:"chatgpt.new-onboarding.self-description-reason"},allSetLetMeShowYouAroundWithoutName:{defaultMessage:"All set!<nextLine></nextLine>Now, let me show you around...",id:"chatgpt.new-onboarding.all-set-let-me-show-you-around-without-name"},selfDescriptionReasonSaveToCustomInstructions:{defaultMessage:"Details like your job, hobbies, or interests make my responses more relevant. I’ll save this information as <customInstructions>Custom Instructions</customInstructions>, which you can update any time.",id:"chatgpt.new-onboarding.self-description-reason-save-to-custom-instructions"},exampleSchoolSelfDescription:{defaultMessage:"I'm a college student studying computer science, and I love to play the guitar.",id:"chatgpt.new-onboarding.example-school-self-description"},exampleWorkSelfDescription:{defaultMessage:"I'm a graphic designer based in Berlin, and I enjoy painting and attending art exhibitions.",id:"chatgpt.new-onboarding.example-work-self-description"},examplePersonalTasksSelfDescription:{defaultMessage:"I live in Sydney and love cooking new recipes and planning travel itineraries.",id:"chatgpt.new-onboarding.example-personal-tasks-self-description"},exampleFunAndEntertainmentSelfDescription:{defaultMessage:"I'm a music enthusiast based in Nashville, and I can talk for hours about guitar techniques and songwriting.",id:"chatgpt.new-onboarding.example-fun-and-entertainment-self-description"},tryChatGPT:{defaultMessage:"Try ChatGPT",id:"chatgpt.new-onboarding.try-chatgpt"}}),W={usage_question:a.tellMeWhyHere},H={usage_question:a.suggestUsefulIdeas};export{qe as LoadingState,nt as default};
//# sourceMappingURL=mnubrfop2jet1z60.js.map