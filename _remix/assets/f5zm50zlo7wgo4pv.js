import{I as se,D as B,d2 as oe,r as d,b6 as h,j as e,af as ce,ai as de,S as ue,A as fe,Z as me,G as i,be as xe,b5 as p,H as ge,aC as he,C as L,a2 as pe,P as v,x as j,b0 as ve,b1 as je,ac as O,ad as H}from"./bahzwkph2ne3eyls.js";import{cy as ye,cw as G,cx as W,cz as _e,bA as A}from"./osssmfbfx387nkfp.js";import{a as be,T as ke,m as F}from"./i3lpcslivvqbtf8u.js";import{c as Ie}from"./myjgud2ec6036ews.js";import{p as I}from"./l2euh9jr36irqfhd.js";import{p as w}from"./irt6yd492lzs8r24.js";import{m as M}from"./lsf5205xb8uhelvm.js";import{u as we}from"./h1m0b4qkc9uqut2y.js";import"./f0ojjat8h3abgmu6.js";import"./oaqliymqb7pijnra.js";import"./fsddy3bxlesj6ecw.js";import"./isjdmfmhzv09v01t.js";import"./jc3615ar2prwhftj.js";import"./codbzyvijm6ysxs9.js";import"./vob0lj31hjn1wm62.js";function D(){return e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(he,{})})}const Ne=({referralCodeId:r,sessionUser:t,auth0Provider:n,redirectUrl:o})=>{const u=B(),{resolvedTheme:f}=oe(),m=f==="dark",s=d.useRef(null);return d.useEffect(()=>{h.logEvent("chatgpt_referral_invite_loaded",t!=null&&t.id?"has_user":"user_logged_out",{user_id:t!=null&&t.id?t.id:"_no_user",referral_code_id:r})},[r,t==null?void 0:t.id]),d.useEffect(()=>{s.current===null&&(s.current=document.body.style.backgroundColor);const y=m?"#00002E":"#FFFFDB";return document.body.style.backgroundColor=y,()=>{s.current!==null&&(document.body.style.backgroundColor=s.current)}},[m]),e.jsxs("div",{className:"flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%]",children:[e.jsx(be,{}),e.jsxs("div",{className:"relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6",children:[e.jsx("nav",{className:"flex w-full justify-start px-6 pb-8 md:hidden md:px-6 lg:px-8",children:e.jsx("h1",{"aria-label":u.formatMessage(l.ariaLabel),children:e.jsx("div",{className:"flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",children:e.jsx("div",{children:ke})})})}),e.jsx(Re,{sessionUser:t,auth0Provider:n,redirectUrl:o,referralCodeId:r}),e.jsxs("div",{className:"flex flex-col items-center justify-end",children:[e.jsx("div",{className:"flex text-gray-300",children:e.jsx(ye,{className:"h-[22px] w-auto"})}),e.jsx("div",{className:"opacity-50",children:e.jsx(Ie,{isStorageComplianceEnabled:!1})})]})]})]})},Me=({offerDollarValue:r,sessionUser:t,isLoading:n,isLoadingLogin:o,handleClaimInvite:u,handleSignupWarning:f,handleLogin:m})=>{const s=G(W.hasPaidSubscription);return t!=null&&t.id?e.jsx(p,{disabled:n||s,loading:n,color:s?"disabled":"blue",size:"large",fullWidth:!0,onClick:u,children:s?e.jsx(i,{...l.alreadyPaidUserCta}):e.jsx(i,{...l.acceptInviteCtaLoggedIn,values:{dollarValue:r}})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pb-5 text-center text-sm text-token-text-tertiary",children:e.jsx(i,{...l.claimInviteLoginOrSignUp})}),e.jsx("div",{className:"flex flex-col space-y-4 px-3",children:e.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row",children:[e.jsx(p,{disabled:n,loading:o,fullWidth:!0,onClick:m,children:e.jsx(i,{...F.logIn})}),e.jsx(p,{onClick:f,disabled:n,fullWidth:!0,children:e.jsx(i,{...F.signUp})})]})})]})};function Re({sessionUser:r,referralCodeId:t,redirectUrl:n,auth0Provider:o}){var P;const[u,f]=d.useState(!1),[m,s]=d.useState(!1),[y,x]=d.useState(!1),[V,R]=d.useState(!1),S=(r==null?void 0:r.id)??"_no_user",{data:_,isLoading:q,isError:b}=ce({queryKey:["referral-invite",t],queryFn:()=>L.getPublicReferralInvite(t)}),c=B(),a=(P=_==null?void 0:_.result.invite_metadata)==null?void 0:P.invite_data,C=`$${a==null?void 0:a.referral_trial_dollar_value}`,$=a==null?void 0:a.referrer_public_avatar_url,z="$20",Y=a!=null&&a.referral_trial_duration_months?(a==null?void 0:a.referral_trial_duration_months)>=1?c.formatMessage(l.monthsOfService,{referralTrialDurationMonths:a==null?void 0:a.referral_trial_duration_months}):c.formatMessage(l.daysOfService,{referralTrialDurationDays:a==null?void 0:a.referral_trial_duration_days}):null,K=a==null?void 0:a.referrer_user_name,Q=a!=null&&a.referral_trial_duration_months?(a==null?void 0:a.referral_trial_duration_months)>1?c.formatMessage(l.monthsOfBenefit,{referralTrialDurationMonths:a==null?void 0:a.referral_trial_duration_months}):c.formatMessage(l.daysOfBenefit,{referralTrialDurationDays:a==null?void 0:a.referral_trial_duration_days}):null,X=a!=null&&a.referral_trial_duration_months?(a==null?void 0:a.referral_trial_duration_months)>=1?c.formatMessage(l.ctaHeaderMonths,{referralTrialDurationMonths:a==null?void 0:a.referral_trial_duration_months}):c.formatMessage(l.ctaHeaderDays,{referralTrialDurationDays:a==null?void 0:a.referral_trial_duration_days}):null,Z=c.formatMessage(l.dollarValue,{offerDollarValue:C}),J="ChatGPT Plus",U=de(),E=G(W.workspaceId),k=ue(),{mutateAsync:ee}=fe({mutationFn:()=>L.postClaimReferralInvite(t,E||""),onSettled:()=>{x(!1)},onError:async()=>{pe.danger(c.formatMessage(l.claimReferralError))},onSuccess:()=>{f(!0),k.push(`/invite/accepted?referralCodeId=${t}`)}}),ae=async()=>{x(!0),h.logEvent("chatgpt_referral_invite_claim",t,{referralCodeId:t,userId:S}),v.logEvent(j.chatgptReferralInviteClaim,{content:S}),await ee()},te=()=>{x(!0),s(!0),h.logEvent("chatgpt_referral_invite_explain_signup",t,{referralCodeId:t}),v.logEvent(j.chatgptReferralInviteExplainSignup,{content:t}),x(!1)},re=_e(),le=()=>{var T;x(!0),R(!0),h.logEvent("chatgpt_referral_invite_login",t,{referralCodeId:t}),v.logEvent(j.chatgptReferralInviteLogin,{content:t});const g=(T=ve.getCookie(je.DeviceId))==null?void 0:T.toString(),ne=re();O.signIn(o,{callbackUrl:n,...g?{device_id:g}:{}},{prompt:"login",...A(H()),...ne?{use_email_otp:"true"}:{}})},ie=()=>{x(!0),R(!0),h.logEvent("chatgpt_referral_invite_signup",t,{referralCodeId:t}),v.logEvent(j.chatgptReferralInviteSignup,{content:t}),O.signIn(o,{callbackUrl:n},{prompt:"login",screen_hint:"signup",...A(H())})};return d.useEffect(()=>{b&&(k.push("/?e=oldi"),me.addAction("fetch_error_404",{url:location.href,errorMessage:"Referral code not found"}))},[b,k]),b?e.jsx(Ce,{}):q||U==null&&(r!=null&&r.id)||u?e.jsx(Ee,{}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative flex h-full w-full flex-col items-center justify-center",children:[m&&e.jsx(M.div,{initial:{opacity:0,x:10},transition:{delay:1,duration:.1},animate:{x:0,opacity:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}},children:e.jsx(Se,{handleSignup:ie,setHasRequestedSignup:s})}),!m&&e.jsx(M.div,{initial:{opacity:0},transition:{delay:1,duration:.2},animate:{opacity:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}},children:e.jsx("div",{className:"relative mx-auto flex h-full max-w-[372px] flex-col items-center justify-center space-y-4 rounded-t-[30px] bg-white px-5 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",children:X}),e.jsx(Pe,{referrerPublicAvatarUrl:$,referrerName:K,benefitWithTime:Q,receivedPlan:J,dollarValue:Z}),e.jsx("div",{children:e.jsx("p",{className:"text-sm",children:e.jsx(i,{...l.benefitPointsHeader})})}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs(N,{children:[e.jsx("span",{className:"h-5 w-5 rounded-full bg-green-500 p-0.5",children:e.jsx(I,{className:"h-4 w-4 text-white"})}),e.jsx("span",{className:"max-w-full",children:e.jsx(i,{...w.plus.demandAccess})})]}),e.jsxs(N,{children:[e.jsx("span",{className:"h-5 w-5 rounded-full bg-green-500 p-0.5",children:e.jsx(I,{className:"h-4 w-4 text-white"})}),e.jsx("span",{className:"max-w-full",children:e.jsx(i,{...w.plus.responseSpeed})})]}),e.jsxs(N,{className:"pb-2",children:[e.jsx("span",{className:"h-5 w-5 rounded-full bg-green-500 p-0.5",children:e.jsx(I,{className:"h-4 w-4 text-white"})}),e.jsx("span",{className:"max-w-full",children:e.jsx(i,{...w.plus.modelFeatures})})]})]}),e.jsx("div",{className:"w-full",children:e.jsx(Me,{handleClaimInvite:ae,handleSignupWarning:te,handleLogin:le,sessionUser:r,offerDollarValue:C,isLoading:y,isLoadingLogin:V})}),e.jsxs("div",{className:"space-y-1.5 py-1 text-center",children:[e.jsx("p",{className:"text-xs text-token-text-tertiary",children:e.jsx(i,{...l.ctaFollowUpSummary,values:{monthlyCost:z,monthsOfService:Y}})}),(r==null?void 0:r.id)&&e.jsx("p",{className:"text-xs text-token-text-tertiary",children:e.jsx(i,{...l.ctaNotice,values:{userEmail:r==null?void 0:r.email,avatar:()=>e.jsx("img",{className:"inline-block h-4 w-4 rounded-full",src:(r==null?void 0:r.picture)??void 0,alt:r==null?void 0:r.name}),email:g=>e.jsx("span",{className:"font-semibold",children:g}),link:g=>e.jsx(xe,{className:"underline",href:"/auth/logout",children:g})}})})]})]})})})]})})}const Se=({setHasRequestedSignup:r,handleSignup:t})=>e.jsxs("div",{className:"relative mx-auto flex h-full max-w-[372px] flex-col items-center justify-center space-y-4 rounded-t-[30px] bg-white px-5 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:[e.jsx("h2",{className:"text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",children:e.jsx(i,{...l.signUpExplainTitle})}),e.jsx("div",{children:e.jsx("p",{className:"text-sm",children:e.jsx(i,{...l.signUpExplainDescription})})}),e.jsxs("div",{className:"flex flex-col gap-4 md:flex-row",children:[e.jsx(p,{fullWidth:!0,onClick:()=>{r(!1)},color:"secondary",children:e.jsx(i,{...l.signUpCtaBack})}),e.jsx(p,{onClick:t,fullWidth:!0,color:"primary",children:e.jsx(i,{...l.signUpCtaProceed})})]})]}),Ce=()=>e.jsxs("div",{className:"relative mx-auto flex h-full max-w-[480px] flex-col items-center justify-center space-y-3 rounded-t-[30px] bg-white px-5 py-8 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:[e.jsx("div",{className:"relative flex h-8 w-8 items-center justify-center opacity-70",children:e.jsx(D,{})}),e.jsx(M.div,{initial:{opacity:0},transition:{delay:1,duration:.2},animate:{opacity:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}},children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"text-sm font-semibold",children:e.jsx(i,{...l.errorHeader})}),e.jsx("p",{className:"text-xs font-normal",children:e.jsx(i,{...l.errorDescription,values:{link:r=>e.jsx("a",{href:"/",className:"underline",children:r})}})})]})})]}),Ee=()=>e.jsx("div",{className:"relative mx-auto flex h-full max-w-[480px] flex-col items-center justify-center space-y-3 rounded-t-[30px] bg-white px-5 py-8 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:e.jsx("div",{className:"relative flex h-8 w-8 items-center justify-center opacity-70",children:e.jsx(D,{})})}),N=se.div`gap-2 flex flex-row justify-start text-sm items-start`,Pe=({referrerPublicAvatarUrl:r,referrerName:t,benefitWithTime:n,receivedPlan:o,dollarValue:u})=>e.jsxs("div",{className:"flex w-full items-center",children:[e.jsx("div",{className:"flex-shrink-0 pt-0.5",children:e.jsx("img",{className:"h-12 w-12 rounded-full bg-yellow-400",src:r,alt:t})}),e.jsx("div",{className:"ml-3 w-0 flex-1",children:e.jsx("p",{className:"text-sm text-token-text-primary",children:e.jsx(i,{...l.socialProofText,values:{referrerName:t,benefitWithTime:n,receivedPlan:o,dollarValue:u,highlight:f=>e.jsx("span",{className:"rounded-sm bg-green-200 px-0.5 dark:bg-orange-500",children:f})}})})})]}),l=ge({claimReferralError:{id:"ReferralInvite.claimReferralError",defaultMessage:"There was an issue."},claimInviteLoginOrSignUp:{id:"ReferralInvite.claimInviteLoginOrSignUp",defaultMessage:"You can claim this invite after you log in or sign up."},ctaNotice:{id:"ReferralInvite.ctaNotice",defaultMessage:"Claiming referral with <avatar></avatar> <email>{userEmail}</email>. <link>Not you?</link>"},ctaHeaderMonths:{id:"ReferralInvite.ctaHeaderMonths",defaultMessage:"Claim your {referralTrialDurationMonths, plural, one {one month} other {# months}} of ChatGPT Plus"},ctaHeaderDays:{id:"ReferralInvite.ctaHeaderDays",defaultMessage:"Claim your {referralTrialDurationDays, plural, one {one day} other {# days}} of ChatGPT Plus"},dollarValue:{id:"ReferralInvite.dollarValue",defaultMessage:"(a {offerDollarValue} value)"},monthsOfService:{id:"ReferralInvite.monthsOfService",defaultMessage:"{referralTrialDurationMonths, plural, one {# month} other {# months}}"},daysOfService:{id:"ReferralInvite.daysOfService",defaultMessage:"{referralTrialDurationDays, plural, one {# day} other {# days}}"},monthsOfBenefit:{id:"ReferralInvite.monthsOfBenefit",defaultMessage:"{referralTrialDurationMonths, plural, one {free month} other {# free months}}"},daysOfBenefit:{id:"ReferralInvite.daysOfBenefit",defaultMessage:"{referralTrialDurationDays, plural, one {# free day} other {# free days}}"},ariaLabel:{id:"ReferralInvite.ariaLabel",defaultMessage:"ChatGPT by OpenAI"},socialProofText:{id:"ReferralInvite.socialProofText",defaultMessage:"{referrerName} sent you <highlight>{benefitWithTime}</highlight> of {receivedPlan} {dollarValue}"},welcome:{id:"ReferralInvite.welcome",defaultMessage:"Welcome to ChatGPT"},benefitPointsHeader:{id:"ReferralInvite.benefitPointsHeader",defaultMessage:"ChatGPT Plus offers subscribers premium access to OpenAI's conversational AI, which includes:"},acceptInviteCtaLoggedOut:{id:"ReferralInvite.acceptInviteCtaLoggedOut",defaultMessage:"Get started"},acceptInviteCtaLoggedIn:{id:"ReferralInvite.acceptInviteCtaLoggedIn",defaultMessage:"Claim invite"},alreadyPaidUserCta:{id:"ReferralInvite.alreadyPaidUserCta",defaultMessage:"ChatGPT Plus subscription found"},ctaFollowUpSummary:{id:"ReferralInvite.ctaFollowUpSummary",defaultMessage:"{monthsOfService} free, then {monthlyCost}/month"},referralCodeContent:{id:"ReferralInvite.referralCodeContent",defaultMessage:"Referral code: {codeToken}"},errorHeader:{id:"ReferralInvite.errorHeader",defaultMessage:"Invite error"},errorDescription:{id:"ReferralInvite.errorDescription",defaultMessage:"You will be redirected, or <link>click here.</link>"},loadingHeader:{id:"ReferralInvite.loadingHeader",defaultMessage:"Invite loading"},loadingDescription:{id:"ReferralInvite.loadingDescription",defaultMessage:"Your page will be loaded, or <link>go home by clicking here.</link>"},signUpExplainTitle:{id:"ReferralInvite.signUpExplainTitle",defaultMessage:"Almost done!"},signUpExplainDescription:{id:"ReferralInvite.signUpExplainDescription",defaultMessage:"Once you’ve finished signing up, return to this page to claim your invite."},signUpCtaProceed:{id:"ReferralInvite.signUpCtaProceed",defaultMessage:"Proceed"},signUpCtaBack:{id:"ReferralInvite.signUpCtaBack",defaultMessage:"Go back"}});function Te({redirectUrl:r,sessionUser:t,auth0Provider:n,referralCodeId:o}){return e.jsx(Ne,{sessionUser:t,redirectUrl:r,referralCodeId:o,auth0Provider:n})}function Qe(){const r=we();return e.jsx(Te,{...r})}export{Qe as default};
//# sourceMappingURL=f5zm50zlo7wgo4pv.js.map