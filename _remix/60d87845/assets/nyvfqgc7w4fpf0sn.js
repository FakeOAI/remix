const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ngi493axzfhryfz3.js","assets/dwkd3b3c7kg0ot7l.js","assets/byou0827mflm7tmy.js","assets/root-iyki51kb.css","assets/ok65lib68mghk0mk.js","assets/conversation-small-ogafjggy.css","assets/c7ps7kqutytmmxb0.js","assets/d3y72ugnrmac5z1v.js","assets/ixu9pe9q8xkyoufd.js","assets/fzrn137102spawew.js","assets/e9lafxuzyeh4418f.js","assets/e0jtggszd8qi3wlk.js"])))=>i.map(i=>d[i]);
import{a8 as le,r as p,l as e,aR as ce,aT as de,aU as ue,aW as ge,m as M,Q as k,P as m,bf as w,$ as r,bF as me,a0 as P,a1 as z,X as L,u as fe,j as G,ao as F,d as A,f3 as pe,aC as he,aD as xe,aJ as be,bQ as ve,aM as B,bV as ye,bm as $,bD as q,a_ as je,bz as Se,cj as Ce,f4 as Me,b3 as ke,N as Ne,O as we,e7 as Pe,bl as Te,a2 as D}from"./dwkd3b3c7kg0ot7l.js";import{aD as T,Z as h,y as Ie,w as K,v as E,x as Q,fy as N,fz as _e,fA as Ue,fB as H,aE as V,E as Fe,u as X,eg as Ae,fC as Le,ea as W,e2 as Be,X as Ee,D as _,fD as Oe,bP as Re}from"./ok65lib68mghk0mk.js";import{ba as De,a as He,bj as We,bk as ze,Y as Ge,bl as $e,aZ as qe,a4 as Ke}from"./byou0827mflm7tmy.js";import{d as Qe,N as Z,U as Y,e as Ve}from"./npagvawotm2a2fuv.js";import{m as J}from"./f38uk28ff9agi8mz.js";import{u as Xe}from"./dcile3xg4f7x5ihl.js";function yt({onClick:t,className:s,...a}){return e.jsx(Qe,{onClick:t,className:M(s,"flex-grow overflow-hidden"),...a})}function jt({onNewChatButtonClick:t}){const{isUnauthenticated:s,isLoading:a}=k();return a||!s?null:e.jsx(Z,{className:"mr-3",onClick:()=>{m.logNewChatButtonClicked({location:"Mobile header"}),t()}})}function St({onNewChatButtonClick:t}){const{isUnauthenticated:s,isLoading:a}=k(),n=K();return a?null:s?n?e.jsx(Ye,{}):e.jsx(Ze,{}):e.jsx(Z,{onClick:()=>{m.logNewChatButtonClicked({location:"Mobile header"}),t()}})}function Ze(){const t=E(),s=Q(ee.signUpButtonText);return e.jsx(w,{as:"button",size:"small",color:"primary",onClick:()=>{t({authType:"signup",callback:a=>{m.logSignUpButtonClicked({location:"Mobile Chat Stage Header",provider:a})}})},children:e.jsx(r,{...s})})}function Ye(){const t=E();return e.jsx(w,{as:"button",size:"small",color:"primary",onClick:()=>{t({authType:"login",callback:s=>{m.logLogInButtonClicked({location:"Mobile Chat Stage Header",provider:s})}})},"data-testid":"mobile-login-button",children:e.jsx(r,{...me.logInButtonText})})}function Je({onClick:t}){return e.jsxs("button",{type:"button",className:"inline-flex rounded-md hover:text-token-text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:opacity-50",onClick:t,"data-testid":"open-sidebar-button",children:[e.jsx("span",{className:"sr-only",children:e.jsx(r,{...ee.openSidebar})}),e.jsx(De,{className:"icon-lg mx-2 text-token-text-secondary"})]})}const et=({onClickOpenSidebar:t,children:s,showNavSidebar:a,leftContent:n,rightContent:d,bottomContent:o})=>{const c=T(f=>f.activeSidebar),i=le(),l=i.pathname+i.search+i.hash;return p.useEffect(()=>{c==="popover-nav"&&h.setActiveSidebar(!1)},[l]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"draggable sticky top-0 z-10 flex min-h-[60px] items-center justify-center border-transparent bg-token-main-surface-primary pl-0 md:hidden",children:[(a||n)&&e.jsxs("div",{className:"no-draggable absolute bottom-0 left-0 top-0 ml-3 inline-flex items-center justify-center",children:[a&&e.jsx(Je,{onClick:t}),n]}),e.jsx("div",{className:"no-draggable",children:s}),d&&e.jsx("div",{className:"no-draggable absolute bottom-0 right-0 top-0 mr-3 inline-flex items-center justify-center",children:d})]}),o&&e.jsx("div",{className:"no-draggable flex w-full items-center justify-center bg-token-main-surface-primary md:hidden",children:o})]})};function tt({isPopoverOnDesktop:t=!1,isExpanded:s=!1,children:a}){const n=Ie();return e.jsxs(e.Fragment,{children:[!n||t?e.jsx(st,{children:a}):null,e.jsx(at,{isExpanded:!t&&s,children:a})]})}function at({isExpanded:t,children:s}){const a=p.useRef(null);return e.jsx(J.div,{className:"z-[1] flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary max-md:!w-0",ref:a,initial:!1,animate:{width:t?"260px":0,transition:{type:"spring",bounce:.12,duration:.64}},onAnimationStart:()=>{a.current&&(a.current.style.visibility="visible")},onAnimationComplete:()=>{a.current&&(t||(a.current.style.visibility="hidden"))},children:e.jsx("div",{className:"h-full w-[260px]",children:e.jsx("div",{className:"flex h-full min-h-0 flex-col",children:s})})})}function st({children:t}){const s=T(a=>a.activeSidebar);return e.jsx(ce,{open:s==="popover-nav",onOpenChange:a=>{a||h.setActiveSidebar(!1)},children:e.jsxs(de,{children:[e.jsx(ue,{className:"fixed inset-0 z-10 bg-gray-50/50 radix-state-open:animate-show dark:bg-black/50"}),e.jsx(ge,{className:"fixed left-0 top-0 z-50 h-full max-w-xs border-r border-gray-200 bg-token-sidebar-surface-primary shadow-[0_0_64px_0_rgba(0,0,0,0.07)] focus:outline-none radix-state-closed:animate-sidebarHide radix-state-open:animate-sidebarShow dark:border-gray-800",children:t})]})})}const ee=P({closeSidebar:{id:"navigation.closeSidebar",defaultMessage:"Close sidebar"},openSidebar:{id:"navigation.openSidebar",defaultMessage:"Open sidebar"},signUpButtonText:{id:"navigation.signUpButtonText",defaultMessage:"Sign up"}});function nt({showFreeTrialLoadingPayment:t,handleGetPaymentLink:s}){const a=L(),n=()=>{t||(N(!0),s())},d=j=>{j.stopPropagation(),_e(!0),Ue(!0)},{data:o,isLoading:c,isSuccess:i}=fe({queryKey:["claimedReferralInvite"],queryFn:()=>G.getClaimedReferralInvite(),refetchOnMount:!1,refetchOnWindowFocus:!1,refetchInterval:!1,refetchOnReconnect:!1}),l=o?.invite_code,[f,y]=p.useState(!1);if(p.useEffect(()=>{l&&!f&&i&&(y(!0),F.logEvent("chatgpt_referral_show_claimed_sidebar_menu_promo"),m.logEvent(A.chatgptReferralShowClaimedSidebartMenuPromo))},[l,y,f,i]),!l||c||!i)return null;const u=l.invite_metadata.invite_data,x=u?.referral_trial_duration_months?u?.referral_trial_duration_months>1?a.formatMessage(U.monthsOfBenefit,{referralTrialDurationMonths:u?.referral_trial_duration_months}):a.formatMessage(U.daysOfBenefit,{referralTrialDurationDays:u?.referral_trial_duration_days}):null;return e.jsx(J.div,{className:M("relative",{"cursor-progress opacity-50":t}),layout:"position",initial:{y:-10,opacity:1},animate:{y:0,opacity:1,transition:{duration:.1,ease:"easeIn"}},children:e.jsxs(it,{className:M(t&&"opacity-75"),onClick:n,children:[e.jsxs("div",{className:"flex w-full flex-row items-center justify-start gap-3",children:[e.jsx(pe,{className:"icon-sm shrink-0"}),e.jsx(r,{...U.freeTrialCta,values:{duration:x}})]}),!t&&e.jsx(He,{onClick:d,className:"icon-md shrink-0 rounded-full p-0.5 text-token-text-tertiary opacity-50 transition-colors duration-200 hover:bg-[#0077FF] hover:text-red-500 group-hover:opacity-100"}),e.jsx("span",{className:"absolute top-11 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#0077FF] transition-colors duration-200 group-hover:border-t-[#0077FF]"})]})})}const it=z.a`group relative mb-1 rounded-md hover:[#0077FF] bg-[#0077FF] flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm`,U=P({freeTrialCta:{id:"PaymentMenuItems.freeTrialCta",defaultMessage:"Get {duration}!"},monthsOfBenefit:{id:"FreeTrialMenuItem.monthsOfBenefit",defaultMessage:"{referralTrialDurationMonths, plural, one {one month free} other {# months free}}"},daysOfBenefit:{id:"FreeTrialMenuItem.daysOfBenefit",defaultMessage:"{referralTrialDurationDays, plural, one {one day free} other {# days free}}"}}),rt=he(()=>xe(()=>import("./ngi493axzfhryfz3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])));function ot(){const t=L(),s=be(),a=ve(),n=B(),d=!n,o=n?.hasPaidSubscription()??!1,c=n?.hasClaimedFreeTrial()??!1,i=p.useMemo(()=>n?.subscriptionAnalyticsParams,[n]),l=async()=>{N(!0),m.logEvent(A.clickAccountPaymentCheckout,i);try{const S=await G.getCheckoutLink(a);window.location.href=S.url}catch{s.warning(t.formatMessage(v.paymentErrorWarning),{hasCloseButton:!0}),N(!1)}finally{}},f=()=>{u||(N(!0),l())},y=H(S=>S.didCloseFreeTrial),u=H(S=>S.showFreeTrialLoadingPayment),x=!y&&c,j=n?.wasPaidCustomer()??!1;let b=n?.isWorkspaceAccount()??!1;const I=n?.hasPaidSubscription()??!1,g=n?.isPlus()??!1,{doesUserHaveAnyAccountsWithPlusFeatures:O}=ye(),{layer:se}=$("2670443078");let R=g;!b&&!g&&O&&se.get("is_gating_fix_enabled",!1)&&(R=O,b=!0);const ne=!d&&!b&&!Se,ie=q(),re=()=>{m.logEvent(A.clickSidebarAccountPaymentMenuItem,i),Fe(ie,"Sidebar account payment menu item")},oe=n?.isTeam()??!1;return e.jsxs(e.Fragment,{children:[!o&&x&&e.jsx(nt,{showFreeTrialLoadingPayment:u,handleGetPaymentLink:l}),oe&&e.jsx(ct,{}),ne&&e.jsx(Y,{onClick:x?f:re,className:"m-0 rounded-lg px-2",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(lt,{wasPaidCustomer:j,showFreeTrialLoadingPayment:u,hasPlusSubscription:R,hasPaidSubscription:I})})})})]})}const lt=({wasPaidCustomer:t,showFreeTrialLoadingPayment:s,hasPlusSubscription:a,hasPaidSubscription:n})=>s?e.jsx(je,{className:"icon-sm shrink-0"}):n&&!a?null:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(We,{className:"icon-sm shrink-0"})}),e.jsx("div",{className:"flex flex-col",children:t?e.jsx(r,{...v.renewPlus}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:a?e.jsx(r,{...v.createATeamWorkspace}):!n&&e.jsx(r,{...v.upgradePlan})}),e.jsx("span",{className:"line-clamp-1 text-xs text-token-text-tertiary",children:a?e.jsx(r,{...v.upgradeToTeamUpsell}):!n&&e.jsx(r,{...v.upgradeToPlusUpsell})})]})})]}),ct=()=>{const t=B();return e.jsxs(e.Fragment,{children:[e.jsx(Y,{onClick:()=>{h.openModal(V.InviteUsersToWorkspace)},className:"rounded-lg",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(ze,{className:"icon-sm shrink-0"})}),e.jsx(r,{...v.inviteMembers})]})})}),t!=null?e.jsx(rt,{workspace:t}):null]})},v=P({upgradePlan:{id:"PaymentMenuItems.upgradePlan",defaultMessage:"Upgrade plan"},createATeamWorkspace:{id:"PaymentMenuItems.createATeamWorkspace",defaultMessage:"Add Team workspace"},upgradeToTeamUpsell:{id:"PaymentMenuItems.upgradeToTeamUpsell",defaultMessage:"Collaborate on a Team plan"},upgradeToPlusUpsell:{id:"PaymentMenuItems.upgradeToPlusUpsell.0",defaultMessage:"More access to the best models"},renewPlus:{id:"PaymentMenuItems.renewPlus",defaultMessage:"Renew Plus"},inviteReferral:{id:"PaymentMenuItems.inviteReferral",defaultMessage:"Refer a friend"},inviteMembers:{id:"PaymentMenuItems.inviteMembers.0",defaultMessage:"Invite members"},paymentErrorWarning:{id:"PaymentMenuItems.paymentErrorWarning",defaultMessage:"The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."}});function Ct({navHeader:t,children:s,className:a}){const n=L(),d=p.useRef(null),o=Ce(),{isUnauthenticated:c}=k(),{layer:i}=$("1578749296"),l=i.get("is_sticky_toggle_off",!1);return p.useEffect(()=>{l&&h.openSidebar()},[l]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"draggable relative h-full w-full flex-1 items-start border-white/20",children:[e.jsx(Me,{asChild:!0,children:e.jsx("h2",{children:e.jsx(r,{...C.chatHistoryLabel})})}),e.jsxs("nav",{className:M("flex h-full w-full flex-col px-3",a),"aria-label":n.formatMessage(C.chatHistoryLabel),children:[t,e.jsx(ut,{ref:d,$disableScroll:o&&!c,children:s}),e.jsx(ke,{children:e.jsx(dt,{})})]})]})})}function dt(){const[t]=p.useState(()=>{const i=Ne.getCookie(we.Workspace);return typeof i=="string"&&i!==Pe}),s=B(),a=s?.data==null,{isUnauthenticated:n}=k(),{openSettings:d}=X(),{isCollapsible:o}=Xe(),c=T(i=>i.isHistoryCollapsed);return t&&a||!s?null:n?e.jsx(te,{}):e.jsxs("div",{className:M("flex flex-col py-2 empty:hidden dark:border-white/20",o&&"-mx-3 border-t border-token-border-sharp px-3"),children:[o&&!c&&e.jsx(Ae,{type:"less",onClick:h.toggleHistoryCollapsed}),e.jsx(Le,{}),e.jsx(ot,{}),e.jsx("div",{className:"flex w-full items-center md:hidden",children:e.jsx("div",{className:"max-w-[100%] grow",children:e.jsx(Ve,{onClickSettings:()=>d()})})})]})}const te=()=>{const t=K(),s=E(),a=Q(C.unauthSignupCta),n=()=>{s({authType:"login",callback:i=>{m.logLogInButtonClicked({location:"Sidebar bottom unit",provider:i}),F.logEvent("chatgpt_sidebar_login_button_clicked")}})},d=()=>{s({authType:"signup",callback:i=>{m.logSignUpButtonClicked({location:"Sidebar bottom unit",provider:i}),F.logEvent("chatgpt_sidebar_signup_button_clicked")}})},o=e.jsx(w,{as:"button",size:"medium",color:t?"secondary":"primary","data-testid":"signup-button",onClick:d,children:e.jsx(r,{...a})}),c=e.jsx(w,{as:"button",size:"medium",color:t?"primary":"secondary","data-testid":"login-button",onClick:n,children:e.jsx(r,{...C.unauthLoginCta})});return e.jsxs("div",{className:"p-2",children:[e.jsxs("div",{className:"mb-4 mt-2",children:[e.jsx("p",{className:"mb-1 text-sm font-semibold text-token-text-primary",children:e.jsx(r,{...t?C.logInOrSignUp:C.signUpOrLogIn})}),e.jsx("p",{className:"text-sm text-token-text-secondary",children:e.jsx(r,{id:"4qlPtW",defaultMessage:"Get smarter responses, upload files and images, and more."})})]}),e.jsx("div",{className:"flex flex-row items-start gap-2",children:t?[c,o]:[o,c]})]})},ut=z.div`flex-col flex-1 transition-opacity duration-500 relative -mr-2 pr-2
  ${({$disableScroll:t})=>t?"overflow-y-hidden opacity-20 pointer-events-none":"overflow-y-auto"}`,C=P({chatHistoryLabel:{id:"NavigationContent.chatHistoryLabel",defaultMessage:"Chat history"},closeSidebar:{id:"NavigationContent.closeSidebar",defaultMessage:"Close sidebar"},signInToChat:{id:"NavigationContent.signInToChat",defaultMessage:"Sign in to ChatGPT"},signUpOrLogIn:{id:"NavigationContent.signUpOrLogIn",defaultMessage:"Sign up or log in"},logInOrSignUp:{id:"NavigationContent.logInOrSignUp",defaultMessage:"Log in or sign up"},unauthSignupCta:{id:"NavigationContent.unauthSignupCta",defaultMessage:"Sign up"},unauthLoginCta:{id:"NavigationContent.unauthLoginCta",defaultMessage:"Log in"}}),gt=()=>{const{openSettings:t}=X(),s=Te("3376455464")?.value,a=q();return e.jsxs("div",{className:"flex h-full flex-col gap-2 p-3",children:[e.jsx(W,{icon:Ge,onClick:()=>{Be(a),h.closeActiveSidebar()},children:e.jsx(r,{id:"0FupYP",defaultMessage:"New chat"})}),e.jsx("div",{className:"flex grow items-center justify-center",children:e.jsx(te,{})}),e.jsxs(Ee,{contentClassName:"w-[298px]",triggerButton:e.jsx(W,{icon:$e,children:e.jsx(r,{id:"y4Lkp7",defaultMessage:"Settings and more"})}),children:[e.jsx(_.Item,{onClick:()=>t(),icon:qe,children:e.jsx(r,{id:"HrRLkZ",defaultMessage:"Settings"})}),s&&e.jsx(_.Item,{icon:Ke,onClick:()=>{h.openModal(V.ReportConversation)},children:e.jsx(r,{id:"thread.report.0",defaultMessage:"Report illegal content"})}),e.jsx(_.Separator,{}),e.jsx(Oe,{})]})]})};function ae({children:t,hideNavigation:s=!1,mobileHeaderContent:a,mobileHeaderLeftContent:n,mobileHeaderRightContent:d,mobileHeaderBottomContent:o,sidebar:c,forceOpenDesktopSidebar:i=!1}){const{isUnauthenticated:l}=k(),[f,y]=T(g=>[g.activeStageSidebar,g.activeSidebar]),u=Re(),x=[];let j=null;D.Children.forEach(t,g=>{D.isValidElement(g)&&(g.type===ae.Sidebars?j=g:x.push(g))});const b=!l&&!s&&c!=null,I=!s&&(b||l);return e.jsxs("div",{className:M("relative flex h-full w-full overflow-hidden transition-colors",y!=="popover-nav"&&"z-0"),children:[b&&e.jsx(tt,{isExpanded:i||!u,isPopoverOnDesktop:f,children:l?e.jsx(gt,{}):c}),e.jsxs("div",{className:"relative flex h-full max-w-full flex-1 flex-col overflow-hidden",children:[I&&e.jsx(et,{onClickOpenSidebar:()=>h.togglePopoverNavSidebar(),showNavSidebar:b,leftContent:n,rightContent:d,bottomContent:o,children:a}),e.jsx("main",{className:"relative h-full w-full flex-1 overflow-auto transition-width",children:x})]}),j]})}function mt({children:t}){return e.jsx(e.Fragment,{children:t})}ae.Sidebars=mt;export{Ct as N,ae as S,yt as a,jt as b,St as c};
//# sourceMappingURL=nyvfqgc7w4fpf0sn.js.map