import{B as T,j as e,P as m,bt as F,K as c,bC as fe,X as pe,r as g,bv as he,bf as xe,bg as be,bh as ve,bj as je,N as P,c as C,ak as k,H as B,I as ye,J as Me,O as K,u as V,R as A,A as M,co as Se,aM as J,as as E,e7 as Ce,aC as Q,ax as X,fk as Y,a_ as ke,a7 as we,f9 as Ne,cs as Ie,fl as Te,aT as Pe,C as _e,z as Ue,ee as Fe,aQ as Be,w as z}from"./lcs8amlj6u8bbv8a.js";import{fJ as Z,bk as W,bl as ee,a9 as L,U as x,gt as Ee,bg as Le,b3 as I,cl as Re,ck as Oe,gu as U,gv as Ae,gw as We,gx as G,gy as De,gz as D,a4 as He,b5 as se,gA as $e,gB as ze,gC as q,fI as Ge,ey as qe}from"./mhenka8kv2zo8x47.js";import{bB as Ke,a as Ve,bv as Je,bC as te,C as Qe,bD as Xe,aU as Ye,ad as Ze}from"./bpr39nud2l2ri9ju.js";import{N as ae,a as es}from"./l7ytbj9gb513juvf.js";import{m as ne}from"./e71ale0donucmqlv.js";import{B as ss,D as R}from"./h04vyl1015sqd1gr.js";import{c as ts}from"./bmtyh8d7r5fvwhhs.js";import{A as as}from"./cvpamzns278krs3m.js";import{E as ns}from"./iagp2jcji2t03oau.js";function Fs({onClick:t,className:a,...s}){return e.jsx(Ee,{onClick:t,className:C(a,"flex-grow overflow-hidden"),...s})}function Bs({onNewChatButtonClick:t}){const{isUnauthenticated:a,isLoading:s}=T();return s||!a?null:e.jsx(ae,{className:"mr-3",onClick:()=>{m.logNewChatButtonClicked({location:"Mobile header"}),t()}})}function Es({onNewChatButtonClick:t}){const{isUnauthenticated:a,isLoading:s}=T(),n=Z();return s?null:a?n?e.jsx(rs,{}):e.jsx(is,{}):e.jsx(ae,{onClick:()=>{m.logNewChatButtonClicked({location:"Mobile header"}),t()}})}function is(){const t=W(),a=ee(ie.signUpButtonText);return e.jsx(F,{as:"button",size:"small",color:"primary",onClick:()=>{t({authType:"signup",callback:s=>{m.logSignUpButtonClicked({location:"Mobile Chat Stage Header",provider:s})}})},children:e.jsx(c,{...a})})}function rs(){const t=W();return e.jsx(F,{as:"button",size:"small",color:"primary",onClick:()=>{t({authType:"login",callback:a=>{m.logLogInButtonClicked({location:"Mobile Chat Stage Header",provider:a})}})},"data-testid":"mobile-login-button",children:e.jsx(c,{...fe.logInButtonText})})}function os({onClick:t}){return e.jsxs("button",{type:"button",className:"inline-flex rounded-md hover:text-token-text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:opacity-50",onClick:t,"data-testid":"open-sidebar-button",children:[e.jsx("span",{className:"sr-only",children:e.jsx(c,{...ie.openSidebar})}),e.jsx(Ke,{className:"icon-lg mx-2 text-token-text-secondary"})]})}const ls=({onClickOpenSidebar:t,children:a,showNavSidebar:s,leftContent:n,rightContent:r,bottomContent:i})=>{const o=L(f=>f.activeSidebar),d=pe().asPath;return g.useEffect(()=>{o==="popover-nav"&&x.setActiveSidebar(!1)},[d]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"draggable sticky top-0 z-10 flex min-h-[60px] items-center justify-center border-transparent bg-token-main-surface-primary pl-0 md:hidden",children:[(s||n)&&e.jsxs("div",{className:"no-draggable absolute bottom-0 left-0 top-0 ml-3 inline-flex items-center justify-center",children:[s&&e.jsx(os,{onClick:t}),n]}),e.jsx("div",{className:"no-draggable",children:a}),r&&e.jsx("div",{className:"no-draggable absolute bottom-0 right-0 top-0 mr-3 inline-flex items-center justify-center",children:r})]}),i&&e.jsx("div",{className:"no-draggable flex w-full items-center justify-center bg-token-main-surface-primary md:hidden",children:i})]})};function cs({isPopoverOnDesktop:t=!1,isExpanded:a=!1,children:s}){const n=he();return e.jsxs(e.Fragment,{children:[!n||t?e.jsx(us,{children:s}):null,e.jsx(ds,{isExpanded:!t&&a,children:s})]})}function ds({isExpanded:t,children:a}){const s=g.useRef(null);return e.jsx(ne.div,{className:"flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary max-md:!w-0",ref:s,initial:!1,animate:{width:t?"260px":0,transition:{type:"spring",bounce:.12,duration:.64}},onAnimationStart:()=>{s.current&&(s.current.style.visibility="visible")},onAnimationComplete:()=>{s.current&&(t||(s.current.style.visibility="hidden"))},children:e.jsx("div",{className:"h-full w-[260px]",children:e.jsx("div",{className:"flex h-full min-h-0 flex-col",children:a})})})}function us({children:t}){const a=L(s=>s.activeSidebar);return e.jsx(xe,{open:a==="popover-nav",onOpenChange:s=>{s||x.setActiveSidebar(!1)},children:e.jsxs(be,{children:[e.jsx(ve,{className:"fixed inset-0 z-10 bg-white/50 radix-state-open:animate-show dark:bg-black/50"}),e.jsx(je,{className:"fixed left-0 top-0 z-50 h-full max-w-xs border-r border-gray-200 bg-token-sidebar-surface-primary shadow-[0_0_64px_0_rgba(0,0,0,0.07)] focus:outline-none radix-state-closed:animate-sidebarHide radix-state-open:animate-sidebarShow dark:border-gray-800",children:t})]})})}const ie=P({closeSidebar:{id:"navigation.closeSidebar",defaultMessage:"Close sidebar"},openSidebar:{id:"navigation.openSidebar",defaultMessage:"Open sidebar"},signUpButtonText:{id:"navigation.signUpButtonText",defaultMessage:"Sign up"}});function ms(){const{conversations:t}=ts(),a=g.useMemo(()=>t.length<=5?!1:k.checkGate("4277113861"),[t]);return{canUseHistoryIsCollapsible:a,isCollapsible:a&&t.length>5,recentConversationLimit:5}}function gs({workspace:t}){var i;const a=B(),s=Le(I.InviteUsersToWorkspace),n=Re()??!0,r=(i=Oe())==null?void 0:i.map(o=>o.hostname);return e.jsx(ye,{size:"custom",className:"max-w-lg text-sm",isOpen:s,onClose:Me,type:"success",title:t.data.name!=null?a.formatMessage(N.inviteMemberModalTitle,{workspaceName:t.data.name}):a.formatMessage(N.inviteMemberModalTitleUntitledWorkspace),description:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx(c,{...N.inviteMemberModalDescription})}),!!(r!=null&&r.length)&&!n&&e.jsxs("p",{className:"mt-2",children:[e.jsx(c,{...N.prohibitExternalDomainsDescription})," ",e.jsx("b",{children:r.join(", ")})]})]}),children:e.jsx(as,{workspace:t,canResendInviteEmails:!0,onCancel:()=>x.closeModal(I.InviteUsersToWorkspace),onSuccess:()=>x.closeModal(I.InviteUsersToWorkspace),cancelButtonText:a.formatMessage(N.inviteMemberInviteCancelButton)})})}const N=P({inviteMemberInviteCancelButton:{id:"adminPage.inviteMemberInviteCancelButton",defaultMessage:"Cancel"},inviteMemberModalTitle:{id:"adminPage.inviteMemberModalTitle",defaultMessage:"Invite members to the {workspaceName} workspace"},inviteMemberModalTitleUntitledWorkspace:{id:"adminPage.inviteMemberModalTitleUntitledWorkspace",defaultMessage:"Invite members to this workspace"},inviteMemberModalDescription:{id:"adminPage.inviteMemberModalDescription",defaultMessage:"This workspace is private, only select members and roles can use this workspace. This workspace is opted out of training."},prohibitExternalDomainsDescription:{id:"ky8nVd",defaultMessage:"Only users from the following emails can be added to this workspace:"},fileTooLargeWarning:{id:"adminPage",defaultMessage:"File is too large. Please upload a CSV file smaller than {maxSize}."}});function fs({showFreeTrialLoadingPayment:t,handleGetPaymentLink:a}){const s=B(),n=()=>{t||(U(!0),a())},r=b=>{b.stopPropagation(),Ae(!0),We(!0)},{data:i,isLoading:o,isSuccess:l}=V({queryKey:["claimedReferralInvite"],queryFn:()=>A.getClaimedReferralInvite(),refetchOnMount:!1,refetchOnWindowFocus:!1,refetchInterval:!1,refetchOnReconnect:!1}),d=i==null?void 0:i.invite_code,[f,p]=g.useState(!1);if(g.useEffect(()=>{d&&!f&&l&&(p(!0),k.logEvent("chatgpt_referral_show_claimed_sidebar_menu_promo"),m.logEvent(M.chatgptReferralShowClaimedSidebartMenuPromo))},[d,p,f,l]),!d||o||!l)return null;const u=d.invite_metadata.invite_data,y=u!=null&&u.referral_trial_duration_months?(u==null?void 0:u.referral_trial_duration_months)>1?s.formatMessage(O.monthsOfBenefit,{referralTrialDurationMonths:u==null?void 0:u.referral_trial_duration_months}):s.formatMessage(O.daysOfBenefit,{referralTrialDurationDays:u==null?void 0:u.referral_trial_duration_days}):null;return e.jsx(ne.div,{className:C("relative",{"cursor-progress opacity-50":t}),layout:"position",initial:{y:-10,opacity:1},animate:{y:0,opacity:1,transition:{duration:.1,ease:"easeIn"}},children:e.jsxs(ps,{className:C(t&&"opacity-75"),onClick:n,children:[e.jsxs("div",{className:"flex w-full flex-row items-center justify-start gap-3",children:[e.jsx(Se,{className:"icon-sm shrink-0"}),e.jsx(c,{...O.freeTrialCta,values:{duration:y}})]}),!t&&e.jsx(Ve,{onClick:r,className:"icon-md shrink-0 rounded-full p-0.5 text-token-text-tertiary opacity-50 transition-colors duration-200 hover:bg-[#0077FF] hover:text-red-500 group-hover:opacity-100"}),e.jsx("span",{className:"absolute top-11 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#0077FF] transition-colors duration-200 group-hover:border-t-[#0077FF]"})]})})}const ps=K.a`group relative mb-1 rounded-md hover:[#0077FF] bg-[#0077FF] flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm`,O=P({freeTrialCta:{id:"PaymentMenuItems.freeTrialCta",defaultMessage:"Get {duration}!"},monthsOfBenefit:{id:"FreeTrialMenuItem.monthsOfBenefit",defaultMessage:"{referralTrialDurationMonths, plural, one {one month free} other {# months free}}"},daysOfBenefit:{id:"FreeTrialMenuItem.daysOfBenefit",defaultMessage:"{referralTrialDurationDays, plural, one {one day free} other {# days free}}"}});function hs(){const t=B(),a=J(),s=E(),n=!s,r=(s==null?void 0:s.hasPaidSubscription())??!1,i=(s==null?void 0:s.hasClaimedFreeTrial())??!1,o=g.useMemo(()=>s==null?void 0:s.subscriptionAnalyticsParams,[s]),l=async()=>{U(!0),m.logEvent(M.clickAccountPaymentCheckout,o);try{const v=await A.getCheckoutLink(a);window.location.href=v.url}catch{we.warning(t.formatMessage(j.paymentErrorWarning),{hasCloseButton:!0}),U(!1)}finally{}},d=()=>{p||(U(!0),l())},f=G(v=>v.didCloseFreeTrial),p=G(v=>v.showFreeTrialLoadingPayment),u=!f&&i,y=(s==null?void 0:s.wasPaidCustomer())??!1;let b=(s==null?void 0:s.isWorkspaceAccount())??!1;const w=(s==null?void 0:s.hasPaidSubscription())??!1,_=(s==null?void 0:s.isPlus())??!1,{doesUserHaveAnyAccountsWithPlusFeatures:h}=Ce(),{layer:le}=Q("2670443078");let H=_;!b&&!_&&h&&le.get("is_gating_fix_enabled",!1)&&(H=h,b=!0);const ce=!n&&!b&&!Ne,de=X(),ue=()=>{m.logEvent(M.clickSidebarAccountPaymentMenuItem,o),He(de,"Sidebar account payment menu item")},{setShowReferralInviteModal:$}=De(v=>({setShowReferralInviteModal:v.setShowReferralInviteModal})),me=g.useCallback(()=>{k.logEvent("chatgpt_referral_invite_sidebar_clicked"),m.logEvent(M.chatgptReferralInviteSidebarClicked,o),$(!0,()=>{m.logEvent(M.clickSidebarAccountPaymentMenuItem,o)})},[o,$]),ge=(s==null?void 0:s.isTeam())??!1;return e.jsxs(e.Fragment,{children:[((a==null?void 0:a.includes(Y))||r)&&e.jsx(vs,{analyticsParams:o,handleReferralInvite:me}),!r&&u&&e.jsx(fs,{showFreeTrialLoadingPayment:p,handleGetPaymentLink:l}),ge&&e.jsx(bs,{}),ce&&e.jsx(D,{onClick:u?d:ue,className:"m-0 rounded-lg px-2",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(xs,{wasPaidCustomer:y,showFreeTrialLoadingPayment:p,hasPlusSubscription:H,hasPaidSubscription:w})})})})]})}const xs=({wasPaidCustomer:t,showFreeTrialLoadingPayment:a,hasPlusSubscription:s,hasPaidSubscription:n})=>a?e.jsx(ke,{className:"icon-sm shrink-0"}):n&&!s?null:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(Je,{className:"icon-sm shrink-0"})}),e.jsx("div",{className:"flex flex-col",children:t?e.jsx(c,{...j.renewPlus}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:s?e.jsx(c,{...j.createATeamWorkspace}):!n&&e.jsx(c,{...j.upgradePlan})}),e.jsx("span",{className:"line-clamp-1 text-xs text-token-text-tertiary",children:s?e.jsx(c,{...j.upgradeToTeamUpsell}):!n&&e.jsx(c,{...j.upgradeToPlusUpsell})})]})})]}),bs=()=>{const t=E();return e.jsxs(e.Fragment,{children:[e.jsx(D,{onClick:()=>{x.openModal(I.InviteUsersToWorkspace)},className:"rounded-lg",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(te,{className:"icon-sm shrink-0"})}),e.jsx(c,{...j.inviteMembers})]})})}),t!=null?e.jsx(gs,{workspace:t}):null]})},vs=({analyticsParams:t,handleReferralInvite:a})=>{const s=J(),n=(s==null?void 0:s.includes(Y))??!1,r=E(),{data:i}=V({queryKey:["referralInvites"],queryFn:()=>A.getEligibleReferralInvites(),enabled:n}),o=r&&!r.isOrWasPaidCustomer()&&!r.hasPlusFeatures(),l=(i==null?void 0:i.invites_remaining)&&(i==null?void 0:i.invites_remaining)>0,d=o&&l,[f,p]=g.useState(!1);return g.useEffect(()=>{d&&!f&&(p(!0),k.logEvent("chatgpt_referral_show_sidebar_menu_item"),m.logEvent(M.chatgptReferralShowSidebarMenuItem,t))},[d,p,f,t]),d?e.jsx(D,{onClick:a,className:"rounded-lg",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(te,{className:"icon-sm shrink-0"})}),e.jsx(c,{...j.inviteReferral})]})})}):null},j=P({upgradePlan:{id:"PaymentMenuItems.upgradePlan",defaultMessage:"Upgrade plan"},createATeamWorkspace:{id:"PaymentMenuItems.createATeamWorkspace",defaultMessage:"Add Team workspace"},upgradeToTeamUpsell:{id:"PaymentMenuItems.upgradeToTeamUpsell",defaultMessage:"Collaborate on a Team plan"},upgradeToPlusUpsell:{id:"PaymentMenuItems.upgradeToPlusUpsell.0",defaultMessage:"More access to the best models"},renewPlus:{id:"PaymentMenuItems.renewPlus",defaultMessage:"Renew Plus"},inviteReferral:{id:"PaymentMenuItems.inviteReferral",defaultMessage:"Refer a friend"},inviteMembers:{id:"PaymentMenuItems.inviteMembers.0",defaultMessage:"Invite members"},paymentErrorWarning:{id:"PaymentMenuItems.paymentErrorWarning",defaultMessage:"The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."}});function Ls({navHeader:t,children:a,className:s}){const n=B(),r=g.useRef(null),i=Ie(),{isUnauthenticated:o}=T(),{layer:l}=Q("1578749296"),d=l.get("is_sticky_toggle_off",!1);return g.useEffect(()=>{d&&x.openSidebar()},[d]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"draggable relative h-full w-full flex-1 items-start border-white/20",children:[e.jsx(Te,{asChild:!0,children:e.jsx("h2",{children:e.jsx(c,{...S.chatHistoryLabel})})}),e.jsxs("nav",{className:C("flex h-full w-full flex-col px-3",s),"aria-label":n.formatMessage(S.chatHistoryLabel),children:[t,e.jsx(ys,{ref:r,$disableScroll:i&&!o,children:a}),e.jsx(Pe,{children:e.jsx(js,{})})]})]})})}function js(){const[t]=g.useState(()=>{const l=_e.getCookie(Ue.Workspace);return typeof l=="string"&&l!==Fe}),a=E(),s=(a==null?void 0:a.data)==null,{isUnauthenticated:n}=T(),{openSettings:r}=se(),{isCollapsible:i}=ms(),o=L(l=>l.isHistoryCollapsed);return t&&s||!a?null:n?e.jsx(re,{}):e.jsxs("div",{className:C("flex flex-col py-2 empty:hidden dark:border-white/20",i&&"-mx-3 border-t border-token-border-sharp px-3"),children:[i&&!o&&e.jsx($e,{type:"less",onClick:x.toggleHistoryCollapsed}),e.jsx(ze,{}),e.jsx(hs,{}),e.jsx("div",{className:"flex w-full items-center md:hidden",children:e.jsx("div",{className:"max-w-[100%] grow",children:e.jsx(es,{onClickSettings:()=>r()})})})]})}const re=()=>{const t=Z(),a=W(),s=ee(S.unauthSignupCta),n=()=>{a({authType:"login",callback:l=>{m.logLogInButtonClicked({location:"Sidebar bottom unit",provider:l}),k.logEvent("chatgpt_sidebar_login_button_clicked")}})},r=()=>{a({authType:"signup",callback:l=>{m.logSignUpButtonClicked({location:"Sidebar bottom unit",provider:l}),k.logEvent("chatgpt_sidebar_signup_button_clicked")}})},i=e.jsx(F,{as:"button",size:"medium",color:t?"secondary":"primary","data-testid":"signup-button",onClick:r,children:e.jsx(c,{...s})}),o=e.jsx(F,{as:"button",size:"medium",color:t?"primary":"secondary","data-testid":"login-button",onClick:n,children:e.jsx(c,{...S.unauthLoginCta})});return e.jsxs("div",{className:"p-2",children:[e.jsxs("div",{className:"mb-4 mt-2",children:[e.jsx("p",{className:"mb-1 text-sm font-semibold text-token-text-primary",children:e.jsx(c,{...t?S.logInOrSignUp:S.signUpOrLogIn})}),e.jsx("p",{className:"text-sm text-token-text-secondary",children:e.jsx(c,{id:"4qlPtW",defaultMessage:"Get smarter responses, upload files and images, and more."})})]}),e.jsx("div",{className:"flex flex-row items-start gap-2",children:t?[o,i]:[i,o]})]})},ys=K.div`flex-col flex-1 transition-opacity duration-500 relative -mr-2 pr-2
  ${({$disableScroll:t})=>t?"overflow-y-hidden opacity-20 pointer-events-none":"overflow-y-auto"}`,S=P({chatHistoryLabel:{id:"NavigationContent.chatHistoryLabel",defaultMessage:"Chat history"},closeSidebar:{id:"NavigationContent.closeSidebar",defaultMessage:"Close sidebar"},signInToChat:{id:"NavigationContent.signInToChat",defaultMessage:"Sign in to ChatGPT"},signUpOrLogIn:{id:"NavigationContent.signUpOrLogIn",defaultMessage:"Sign up or log in"},logInOrSignUp:{id:"NavigationContent.logInOrSignUp",defaultMessage:"Log in or sign up"},unauthSignupCta:{id:"NavigationContent.unauthSignupCta",defaultMessage:"Sign up"},unauthLoginCta:{id:"NavigationContent.unauthLoginCta",defaultMessage:"Log in"}}),Ms=()=>{var n;const{openSettings:t}=se(),a=(n=Be("3376455464"))==null?void 0:n.value,s=X();return e.jsxs("div",{className:"flex h-full flex-col gap-2 p-3",children:[e.jsx(q,{icon:Qe,onClick:()=>{Ge(s),x.closeActiveSidebar()},children:e.jsx(c,{id:"0FupYP",defaultMessage:"New chat"})}),e.jsx("div",{className:"flex grow items-center justify-center",children:e.jsx(re,{})}),e.jsxs(ss,{contentClassName:"w-[298px]",triggerButton:e.jsx(q,{icon:Xe,children:e.jsx(c,{id:"y4Lkp7",defaultMessage:"Settings and more"})}),children:[e.jsx(R.Item,{onClick:()=>t(),icon:Ye,children:e.jsx(c,{id:"HrRLkZ",defaultMessage:"Settings"})}),a&&e.jsx(R.Item,{icon:Ze,onClick:()=>{x.openModal(I.ReportConversation)},children:e.jsx(c,{id:"thread.report.0",defaultMessage:"Report illegal content"})}),e.jsx(R.Separator,{}),e.jsx(ns,{})]})]})};function oe({children:t,hideNavigation:a=!1,mobileHeaderContent:s,mobileHeaderLeftContent:n,mobileHeaderRightContent:r,mobileHeaderBottomContent:i,sidebar:o,forceOpenDesktopSidebar:l=!1}){const{isUnauthenticated:d}=T(),[f,p]=L(h=>[h.activeStageSidebar,h.activeSidebar]),u=qe(),y=[];let b=null;z.Children.forEach(t,h=>{z.isValidElement(h)&&(h.type===oe.Sidebars?b=h:y.push(h))});const w=!d&&!a&&o!=null,_=!a&&(w||d);return e.jsxs("div",{className:C("relative flex h-full w-full overflow-hidden transition-colors",p!=="popover-nav"&&"z-0"),children:[w&&e.jsx(cs,{isExpanded:l||!u,isPopoverOnDesktop:f,children:d?e.jsx(Ms,{}):o}),e.jsxs("div",{className:"relative flex h-full max-w-full flex-1 flex-col overflow-hidden",children:[_&&e.jsx(ls,{onClickOpenSidebar:()=>x.togglePopoverNavSidebar(),showNavSidebar:w,leftContent:n,rightContent:r,bottomContent:i,children:s}),e.jsx("main",{className:"relative h-full w-full flex-1 overflow-auto transition-width",children:y})]}),b]})}function Ss({children:t}){return e.jsx(e.Fragment,{children:t})}oe.Sidebars=Ss;export{gs as A,Ls as N,oe as S,Fs as a,Bs as b,Es as c,ms as u};
//# sourceMappingURL=v9tq8skh492co5f7.js.map