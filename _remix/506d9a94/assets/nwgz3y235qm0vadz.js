import{a1 as C,l as e,b5 as Y,a as I,bE as M,aN as b,X as T,aK as L,aO as B,r as j,c7 as F,$ as a,bg as S,a8 as D,a0 as k,P as R,d as O}from"./dowr76ygy9ekiejb.js";import{bb as X,aF as z}from"./kp1coaqh848e1trr.js";import{aj as w,bE as G,ca as H,v as K}from"./d29iiuqq6mahovze.js";import{m as v}from"./oo1qute7nw5g0tzm.js";import{A as $}from"./kfm77x0a4ri1qcbh.js";import{c as q}from"./iej0cupg2dqkmejt.js";function Q({children:t}){return e.jsxs("div",{className:"flex min-h-screen w-full flex-col",children:[e.jsx("div",{className:"m-4 flex gap-3",children:e.jsx(Y,{className:"icon-xl"})}),e.jsx("div",{className:"m-auto max-w-sm flex-col justify-center",children:t})]})}const d=C.h2`mb-2 text-2xl font-semibold`,u=C.p`mb-10 text-sm`,_={hidden:{opacity:0,translateY:50},show:{opacity:1,translateY:0,transition:{staggerChildren:.5,delayChildren:.2}}},J={hidden:{opacity:0,translateY:50},show:{opacity:1,translateY:0,transition:{type:"spring",damping:14}}};function N({isTrial:t}){return e.jsx("div",{className:"mb-6 flex items-center justify-center gap-2",children:e.jsx(w,{children:e.jsx(v.div,{variants:_,initial:"hidden",animate:"show",className:"flex",children:e.jsx(v.div,{variants:J,children:t?e.jsx(X,{className:"h-8"}):e.jsx(z,{className:"h-8"})})})})})}var E=(t=>(t.Landing="landing",t.Setup="setup",t.Invite="invite",t.Complete="complete",t))(E||{});const h=["landing","invite","complete"],V={enter:t=>({translateX:t>=0?"50%":"-50%",opacity:0}),center:{translateX:0,opacity:1},exit:t=>({translateX:t<=0?"50%":"-50%",opacity:0})};function Z(){const t=I(),s=M(),{currentPath:i,currentStep:n}=ae(),m=b(),p=G(H.workspaces),A=K(),U=T(),W=L(),x=p.find(o=>o.structure===B.WORKSPACE&&!o.deactivated),[l,y]=j.useState(1);j.useEffect(()=>{function o(){y(-1)}return window.addEventListener("popstate",o),()=>{window.removeEventListener("popstate",o)}},[]);const g=()=>{y(1);const o=h.indexOf(n),P=o+1;x||s("/"),o!==-1&&P<h.length&&s(i+"#"+h[P])};return e.jsx("div",{className:"max-w-sm pb-6",children:e.jsxs(w,{mode:"wait",custom:l,children:[n==="landing"&&e.jsx(f,{initial:!1,custom:l,children:e.jsx(ee,{onNext:g,isLoading:m==null})},"landing"),n==="invite"&&e.jsx(f,{custom:l,children:e.jsx(te,{onNext:()=>{g()}})},"invite"),n==="complete"&&e.jsx(f,{custom:l,children:e.jsx(se,{onNext:()=>{g(),x&&F(t,x.id,A,U,W),s("/")}})},"complete")]})})}const f=t=>e.jsx(v.div,{initial:"enter",animate:"center",exit:"exit",variants:V,transition:{translateX:{type:"just"},opacity:{duration:.2}},...t});function ee({onNext:t,isLoading:s=!1}){return e.jsxs(e.Fragment,{children:[e.jsx(N,{isTrial:!1}),e.jsx(d,{children:e.jsx(a,{...c.standard})}),e.jsx(u,{children:e.jsx(a,{...c.description})}),e.jsx(S,{onClick:t,size:"large",loading:s,fullWidth:!0,children:e.jsx(a,{...c.continue})})]})}function te({onNext:t}){const s=b(),i=T();return s==null?null:e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx(a,{...c.inviteTitle,values:{workspaceName:s.data.name}})}),e.jsx(u,{children:e.jsx(a,{...c.completeDescription})}),s!=null&&e.jsx("div",{className:"text-sm",children:e.jsx($,{fullWidthButtons:!0,workspace:s,canResendInviteEmails:!1,onCancel:t,cancelButtonText:i.formatMessage(c.skipAddMembers),onSuccess:t})})]})}function se({onNext:t}){return e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx(a,{...c.completeTitle})}),e.jsx(u,{children:e.jsx(a,{...c.completeDescription})}),e.jsx(S,{onClick:t,size:"large",fullWidth:!0,children:e.jsx(a,{...c.continueToChatgpt})})]})}function ae(){const{hash:t,pathname:s,search:i}=D(),n=t.slice(1);return{currentStep:ne(n)?n:"landing",currentPath:s+i}}const ne=q(E),c=k({standard:{id:"UpgradedToTeamSuccess.trial",defaultMessage:"Payment successful"},description:{id:"UpgradedToTeamSuccess.description",defaultMessage:"Your team has been created. You can invite members to join the workspace to start collaborating."},continue:{id:"UpgradedToTeamSuccess.continue",defaultMessage:"Continue"},continueToChatgpt:{id:"UpgradedToTeamSuccess.continueToChatgpt",defaultMessage:"Continue to ChatGPT"},setupTitle:{id:"UpgradedToTeamSuccess.setupTitle",defaultMessage:"Set up a team workspace"},setupSubtitle:{id:"UpgradedToTeamSuccess.setupSubtitle",defaultMessage:"Workspace name"},inviteTitle:{id:"UpgradedToTeamSuccess.inviteTitle",defaultMessage:"Invite members to {workspaceName}"},completeTitle:{id:"UpgradedToTeamSuccess.completeTitle",defaultMessage:"Workspace setup complete"},completeDescription:{id:"UpgradedToTeamSuccess.completeDescription",defaultMessage:"You have now created a team workspace. You can invite members to join the workspace. You can do so at any time from the workspace settings page."},skipAddMembers:{id:"UpgradedToTeamSuccess.skipAddMembers",defaultMessage:"Skip"}});function me({isTrial:t,isTeam:s}){const i=T(),n=M(),m=j.useCallback(p=>{p.preventDefault(),R.logEvent(O.clickAccountPaymentSuccessContinue),n("/")},[n]);return e.jsxs(Q,{children:[e.jsx("title",{children:i.formatMessage(r.pageTitle)}),e.jsx("div",{className:"flex flex-col",children:s?e.jsx(Z,{}):e.jsx(ie,{isTrial:t,onContinue:m})})]})}function ie({isTrial:t,onContinue:s}){const i=t?r.trial:r.standard;return e.jsxs(e.Fragment,{children:[e.jsx(N,{isTrial:!!t}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(d,{children:e.jsx(a,{...i})}),e.jsx(u,{children:e.jsx(a,{...r.paymentReceived})}),e.jsx(S,{onClick:s,size:"large",fullWidth:!0,children:e.jsx(a,{...r.continueButton})})]})]})}const r=k({pageTitle:{id:"PaymentsSuccess.pageTitle",defaultMessage:"Account - Payment success"},paymentReceived:{id:"PaymentsSuccess.paymentSuccessful",defaultMessage:"You've been upgraded to ChatGPT Plus"},continueButton:{id:"PaymentsSuccess.continueButton",defaultMessage:"Continue"},standard:{id:"PaymentsSuccess.standard",defaultMessage:"Payment successful"},trial:{id:"PaymentsSuccess.trial",defaultMessage:"Trial started"}});export{me as P};
//# sourceMappingURL=nwgz3y235qm0vadz.js.map