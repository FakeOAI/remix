import{a1 as C,l as e,b5 as Y,u as I,bA as M,aM as k,V as T,aJ as L,aN as B,r as j,c3 as D,Z as a,bd as S,a8 as F,a0 as b,P as R,a as O,ej as z}from"./ib63zzsfkf72wln1.js";import{bi as H,aH as X}from"./mt8z8crlc877hbg5.js";import{O as N,bN as G,ci as q,v as J}from"./fhv3hyfwgezymfbi.js";import{m as v}from"./lcjfunksmdzjk74y.js";import{A as K}from"./mujgvffl5nls2cf7.js";import{c as Q}from"./iej0cupg2dqkmejt.js";function V({children:t}){return e.jsxs("div",{className:"flex min-h-screen w-full flex-col",children:[e.jsx("div",{className:"m-4 flex gap-3",children:e.jsx(Y,{className:"icon-xl"})}),e.jsx("div",{className:"m-auto max-w-sm flex-col justify-center",children:t})]})}const d=C.h2`mb-2 text-2xl font-semibold`,u=C.p`mb-10 text-sm`,Z={hidden:{opacity:0,translateY:50},show:{opacity:1,translateY:0,transition:{staggerChildren:.5,delayChildren:.2}}},_={hidden:{opacity:0,translateY:50},show:{opacity:1,translateY:0,transition:{type:"spring",damping:14}}};function w({isTrial:t}){return e.jsx("div",{className:"mb-6 flex items-center justify-center gap-2",children:e.jsx(N,{children:e.jsx(v.div,{variants:Z,initial:"hidden",animate:"show",className:"flex",children:e.jsx(v.div,{variants:_,children:t?e.jsx(H,{className:"h-8"}):e.jsx(X,{className:"h-8"})})})})})}var A=(t=>(t.Landing="landing",t.Setup="setup",t.Invite="invite",t.Complete="complete",t))(A||{});const h=["landing","invite","complete"],$={enter:t=>({translateX:t>=0?"50%":"-50%",opacity:0}),center:{translateX:0,opacity:1},exit:t=>({translateX:t<=0?"50%":"-50%",opacity:0})};function ee(){const t=I(),s=M(),{currentPath:i,currentStep:n}=ne(),m=k(),p=G(q.workspaces),E=J(),U=T(),W=L(),x=p.find(o=>o.structure===B.WORKSPACE&&!o.deactivated),[l,y]=j.useState(1);j.useEffect(()=>{function o(){y(-1)}return window.addEventListener("popstate",o),()=>{window.removeEventListener("popstate",o)}},[]);const g=()=>{y(1);const o=h.indexOf(n),P=o+1;x||s("/"),o!==-1&&P<h.length&&s(i+"#"+h[P])};return e.jsx("div",{className:"max-w-sm pb-6",children:e.jsxs(N,{mode:"wait",custom:l,children:[n==="landing"&&e.jsx(f,{initial:!1,custom:l,children:e.jsx(te,{onNext:g,isLoading:m==null})},"landing"),n==="invite"&&e.jsx(f,{custom:l,children:e.jsx(se,{onNext:()=>{g()}})},"invite"),n==="complete"&&e.jsx(f,{custom:l,children:e.jsx(ae,{onNext:()=>{g(),x&&D(t,x.id,E,U,W),s("/")}})},"complete")]})})}const f=t=>e.jsx(v.div,{initial:"enter",animate:"center",exit:"exit",variants:$,transition:{translateX:{type:"just"},opacity:{duration:.2}},...t});function te({onNext:t,isLoading:s=!1}){return e.jsxs(e.Fragment,{children:[e.jsx(w,{isTrial:!1}),e.jsx(d,{children:e.jsx(a,{...c.standard})}),e.jsx(u,{children:e.jsx(a,{...c.description})}),e.jsx(S,{onClick:t,size:"large",loading:s,fullWidth:!0,children:e.jsx(a,{...c.continue})})]})}function se({onNext:t}){const s=k(),i=T();return s==null?null:e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx(a,{...c.inviteTitle,values:{workspaceName:s.data.name}})}),e.jsx(u,{children:e.jsx(a,{...c.completeDescription})}),s!=null&&e.jsx("div",{className:"text-sm",children:e.jsx(K,{fullWidthButtons:!0,workspace:s,canResendInviteEmails:!1,onCancel:t,cancelButtonText:i.formatMessage(c.skipAddMembers),onSuccess:t})})]})}function ae({onNext:t}){return e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx(a,{...c.completeTitle})}),e.jsx(u,{children:e.jsx(a,{...c.completeDescription})}),e.jsx(S,{onClick:t,size:"large",fullWidth:!0,children:e.jsx(a,{...c.continueToChatgpt})})]})}function ne(){const{hash:t,pathname:s,search:i}=F(),n=t.slice(1);return{currentStep:ie(n)?n:"landing",currentPath:s+i}}const ie=Q(A),c=b({standard:{id:"UpgradedToTeamSuccess.trial",defaultMessage:"Payment successful"},description:{id:"UpgradedToTeamSuccess.description",defaultMessage:"Your team has been created. You can invite members to join the workspace to start collaborating."},continue:{id:"UpgradedToTeamSuccess.continue",defaultMessage:"Continue"},continueToChatgpt:{id:"UpgradedToTeamSuccess.continueToChatgpt",defaultMessage:"Continue to ChatGPT"},setupTitle:{id:"UpgradedToTeamSuccess.setupTitle",defaultMessage:"Set up a team workspace"},setupSubtitle:{id:"UpgradedToTeamSuccess.setupSubtitle",defaultMessage:"Workspace name"},inviteTitle:{id:"UpgradedToTeamSuccess.inviteTitle",defaultMessage:"Invite members to {workspaceName}"},completeTitle:{id:"UpgradedToTeamSuccess.completeTitle",defaultMessage:"Workspace setup complete"},completeDescription:{id:"UpgradedToTeamSuccess.completeDescription",defaultMessage:"You have now created a team workspace. You can invite members to join the workspace. You can do so at any time from the workspace settings page."},skipAddMembers:{id:"UpgradedToTeamSuccess.skipAddMembers",defaultMessage:"Skip"}});function pe({isTrial:t,isTeam:s}){const i=T(),n=M(),m=j.useCallback(p=>{p.preventDefault(),R.logEvent(O.clickAccountPaymentSuccessContinue),n("/")},[n]);return e.jsxs(V,{children:[e.jsx(z,{children:e.jsx("title",{children:i.formatMessage(r.pageTitle)})}),e.jsx("div",{className:"flex flex-col",children:s?e.jsx(ee,{}):e.jsx(ce,{isTrial:t,onContinue:m})})]})}function ce({isTrial:t,onContinue:s}){const i=t?r.trial:r.standard;return e.jsxs(e.Fragment,{children:[e.jsx(w,{isTrial:!!t}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(d,{children:e.jsx(a,{...i})}),e.jsx(u,{children:e.jsx(a,{...r.paymentReceived})}),e.jsx(S,{onClick:s,size:"large",fullWidth:!0,children:e.jsx(a,{...r.continueButton})})]})]})}const r=b({pageTitle:{id:"PaymentsSuccess.pageTitle",defaultMessage:"Account - Payment success"},paymentReceived:{id:"PaymentsSuccess.paymentSuccessful",defaultMessage:"You've been upgraded to ChatGPT Plus"},continueButton:{id:"PaymentsSuccess.continueButton",defaultMessage:"Continue"},standard:{id:"PaymentsSuccess.standard",defaultMessage:"Payment successful"},trial:{id:"PaymentsSuccess.trial",defaultMessage:"Trial started"}});export{pe as P};
//# sourceMappingURL=dmkx693xonf8isir.js.map