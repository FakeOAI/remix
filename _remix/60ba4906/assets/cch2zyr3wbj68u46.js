const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/k2l5u74mzromvict.js","assets/eljox9y9liclbxjs.js","assets/mov0dqfy71k4mkbp.js","assets/root-bcm2adyk.css","assets/q02ioa5nz1msdn73.js","assets/conversation-small-eplmind9.css","assets/js1kheomvw09y08g.js","assets/d3y72ugnrmac5z1v.js","assets/j3u8i3fdvoanfpp8.js","assets/e9lafxuzyeh4418f.js","assets/grq6wh9rfw6h032k.js","assets/d6zp3a3jsn0b88yi.js"])))=>i.map(i=>d[i]);
import{ad as me,r as g,m as e,bu as he,aS as pe,aU as xe,aV as be,aX as ve,q as k,W as N,P as f,bd as P,a5 as l,bx as Se,a6 as T,S as w,a7 as G,a1 as R,aw as K,Z as B,a as C,cx as ye,aD as je,aE as Ce,aK as Me,bJ as V,aN as _,dX as ke,bg as X,bo as Z,f7 as Q,a$ as we,eE as Ne,cf as Ie,f8 as Pe,b4 as Te,U as _e,V as Fe,d$ as Ue,bN as Ee,O as D}from"./eljox9y9liclbxjs.js";import{D as F,Z as v,fK as Le,r as J,q as O,t as Y,fL as I,fM as Re,fN as Be,fO as z,fP as Oe,fQ as A,aC as ee,w as Ae,aM as se,e9 as He,fR as $e,e3 as q,d$ as We,dX as De}from"./q02ioa5nz1msdn73.js";import{bi as ze,a as qe,bm as Ge,bn as te,T as Ke,bo as Ve,aK as Xe,aH as Ze}from"./mov0dqfy71k4mkbp.js";import{N as ae,c as Qe}from"./i4lebxob07xbpc6p.js";import{m as ne}from"./gej2wzszabjtgedr.js";import{B as Je,D as E}from"./l0xkd1ou0a6b53wu.js";import{u as Ye}from"./gs0p62cga8ydkujk.js";import{E as es}from"./hz3enuoki16jl2vh.js";function Is({onClick:s,className:n,...a}){return e.jsx(Le,{onClick:s,className:k(n,"flex-grow overflow-hidden"),...a})}function Ps({onNewChatButtonClick:s}){const{isUnauthenticated:n,isLoading:a}=N();return a||!n?null:e.jsx(ae,{className:"mr-3",onClick:()=>{f.logNewChatButtonClicked({location:"Mobile header"}),s()}})}function Ts({onNewChatButtonClick:s}){const{isUnauthenticated:n,isLoading:a}=N(),t=J();return a?null:n?t?e.jsx(ts,{}):e.jsx(ss,{}):e.jsx(ae,{onClick:()=>{f.logNewChatButtonClicked({location:"Mobile header"}),s()}})}function ss(){const s=O(),n=Y(ie.signUpButtonText);return e.jsx(P,{as:"button",size:"small",color:"primary",onClick:()=>{s({authType:"signup",callback:a=>{f.logSignUpButtonClicked({location:"Mobile Chat Stage Header",provider:a})}})},children:e.jsx(l,{...n})})}function ts(){const s=O();return e.jsx(P,{as:"button",size:"small",color:"primary",onClick:()=>{s({authType:"login",callback:n=>{f.logLogInButtonClicked({location:"Mobile Chat Stage Header",provider:n})}})},"data-testid":"mobile-login-button",children:e.jsx(l,{...Se.logInButtonText})})}function as({onClick:s}){return e.jsxs("button",{type:"button",className:"inline-flex rounded-md hover:text-token-text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:opacity-50",onClick:s,"data-testid":"open-sidebar-button",children:[e.jsx("span",{className:"sr-only",children:e.jsx(l,{...ie.openSidebar})}),e.jsx(ze,{className:"icon-lg mx-2 text-token-text-secondary"})]})}const ns=({onClickOpenSidebar:s,children:n,showNavSidebar:a,leftContent:t,rightContent:c,bottomContent:i})=>{const u=F(m=>m.activeSidebar),o=me().asPath;return g.useEffect(()=>{u==="popover-nav"&&v.setActiveSidebar(!1)},[o]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"draggable sticky top-0 z-10 flex min-h-[60px] items-center justify-center border-transparent bg-token-main-surface-primary pl-0 md:hidden",children:[(a||t)&&e.jsxs("div",{className:"no-draggable absolute bottom-0 left-0 top-0 ml-3 inline-flex items-center justify-center",children:[a&&e.jsx(as,{onClick:s}),t]}),e.jsx("div",{className:"no-draggable",children:n}),c&&e.jsx("div",{className:"no-draggable absolute bottom-0 right-0 top-0 mr-3 inline-flex items-center justify-center",children:c})]}),i&&e.jsx("div",{className:"no-draggable flex w-full items-center justify-center bg-token-main-surface-primary md:hidden",children:i})]})};function is({isPopoverOnDesktop:s=!1,isExpanded:n=!1,children:a}){const t=he();return e.jsxs(e.Fragment,{children:[!t||s?e.jsx(os,{children:a}):null,e.jsx(rs,{isExpanded:!s&&n,children:a})]})}function rs({isExpanded:s,children:n}){const a=g.useRef(null);return e.jsx(ne.div,{className:"flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary max-md:!w-0",ref:a,initial:!1,animate:{width:s?"260px":0,transition:{type:"spring",bounce:.12,duration:.64}},onAnimationStart:()=>{a.current&&(a.current.style.visibility="visible")},onAnimationComplete:()=>{a.current&&(s||(a.current.style.visibility="hidden"))},children:e.jsx("div",{className:"h-full w-[260px]",children:e.jsx("div",{className:"flex h-full min-h-0 flex-col",children:n})})})}function os({children:s}){const n=F(a=>a.activeSidebar);return e.jsx(pe,{open:n==="popover-nav",onOpenChange:a=>{a||v.setActiveSidebar(!1)},children:e.jsxs(xe,{children:[e.jsx(be,{className:"fixed inset-0 z-10 bg-gray-50/50 radix-state-open:animate-show dark:bg-black/50"}),e.jsx(ve,{className:"fixed left-0 top-0 z-50 h-full max-w-xs border-r border-gray-200 bg-token-sidebar-surface-primary shadow-[0_0_64px_0_rgba(0,0,0,0.07)] focus:outline-none radix-state-closed:animate-sidebarHide radix-state-open:animate-sidebarShow dark:border-gray-800",children:s})]})})}const ie=T({closeSidebar:{id:"navigation.closeSidebar",defaultMessage:"Close sidebar"},openSidebar:{id:"navigation.openSidebar",defaultMessage:"Open sidebar"},signUpButtonText:{id:"navigation.signUpButtonText",defaultMessage:"Sign up"}});function ls(){const{conversations:s}=Ye(),n=g.useMemo(()=>s.length<=5?!1:w.checkGate("4277113861"),[s]);return{canUseHistoryIsCollapsible:n,isCollapsible:n&&s.length>5,recentConversationLimit:5}}function cs({showFreeTrialLoadingPayment:s,handleGetPaymentLink:n}){const a=R(),t=()=>{s||(I(!0),n())},c=j=>{j.stopPropagation(),Re(!0),Be(!0)},{data:i,isLoading:u,isSuccess:r}=K({queryKey:["claimedReferralInvite"],queryFn:()=>B.getClaimedReferralInvite(),refetchOnMount:!1,refetchOnWindowFocus:!1,refetchInterval:!1,refetchOnReconnect:!1}),o=i==null?void 0:i.invite_code,[m,p]=g.useState(!1);if(g.useEffect(()=>{o&&!m&&r&&(p(!0),w.logEvent("chatgpt_referral_show_claimed_sidebar_menu_promo"),f.logEvent(C.chatgptReferralShowClaimedSidebartMenuPromo))},[o,p,m,r]),!o||u||!r)return null;const d=o.invite_metadata.invite_data,S=d!=null&&d.referral_trial_duration_months?(d==null?void 0:d.referral_trial_duration_months)>1?a.formatMessage(L.monthsOfBenefit,{referralTrialDurationMonths:d==null?void 0:d.referral_trial_duration_months}):a.formatMessage(L.daysOfBenefit,{referralTrialDurationDays:d==null?void 0:d.referral_trial_duration_days}):null;return e.jsx(ne.div,{className:k("relative",{"cursor-progress opacity-50":s}),layout:"position",initial:{y:-10,opacity:1},animate:{y:0,opacity:1,transition:{duration:.1,ease:"easeIn"}},children:e.jsxs(ds,{className:k(s&&"opacity-75"),onClick:t,children:[e.jsxs("div",{className:"flex w-full flex-row items-center justify-start gap-3",children:[e.jsx(ye,{className:"icon-sm shrink-0"}),e.jsx(l,{...L.freeTrialCta,values:{duration:S}})]}),!s&&e.jsx(qe,{onClick:c,className:"icon-md shrink-0 rounded-full p-0.5 text-token-text-tertiary opacity-50 transition-colors duration-200 hover:bg-[#0077FF] hover:text-red-500 group-hover:opacity-100"}),e.jsx("span",{className:"absolute top-11 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#0077FF] transition-colors duration-200 group-hover:border-t-[#0077FF]"})]})})}const ds=G.a`group relative mb-1 rounded-md hover:[#0077FF] bg-[#0077FF] flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm`,L=T({freeTrialCta:{id:"PaymentMenuItems.freeTrialCta",defaultMessage:"Get {duration}!"},monthsOfBenefit:{id:"FreeTrialMenuItem.monthsOfBenefit",defaultMessage:"{referralTrialDurationMonths, plural, one {one month free} other {# months free}}"},daysOfBenefit:{id:"FreeTrialMenuItem.daysOfBenefit",defaultMessage:"{referralTrialDurationDays, plural, one {one day free} other {# days free}}"}}),us=je(()=>Ce(()=>import("./k2l5u74mzromvict.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])));function fs(){const s=R(),n=Me(),a=V(),t=_(),c=!t,i=(t==null?void 0:t.hasPaidSubscription())??!1,u=(t==null?void 0:t.hasClaimedFreeTrial())??!1,r=g.useMemo(()=>t==null?void 0:t.subscriptionAnalyticsParams,[t]),o=async()=>{I(!0),f.logEvent(C.clickAccountPaymentCheckout,r);try{const x=await B.getCheckoutLink(a);window.location.href=x.url}catch{n.warning(s.formatMessage(b.paymentErrorWarning),{hasCloseButton:!0}),I(!1)}finally{}},m=()=>{d||(I(!0),o())},p=z(x=>x.didCloseFreeTrial),d=z(x=>x.showFreeTrialLoadingPayment),S=!p&&u,j=(t==null?void 0:t.wasPaidCustomer())??!1;let y=(t==null?void 0:t.isWorkspaceAccount())??!1;const U=(t==null?void 0:t.hasPaidSubscription())??!1,h=(t==null?void 0:t.isPlus())??!1,{doesUserHaveAnyAccountsWithPlusFeatures:H}=ke(),{layer:le}=X("2670443078");let $=h;!y&&!h&&H&&le.get("is_gating_fix_enabled",!1)&&($=H,y=!0);const ce=!c&&!y&&!Ne,de=Z(),ue=()=>{f.logEvent(C.clickSidebarAccountPaymentMenuItem,r),Ae(de,"Sidebar account payment menu item")},{setShowReferralInviteModal:W}=Oe(x=>({setShowReferralInviteModal:x.setShowReferralInviteModal})),fe=g.useCallback(()=>{w.logEvent("chatgpt_referral_invite_sidebar_clicked"),f.logEvent(C.chatgptReferralInviteSidebarClicked,r),W(!0,()=>{f.logEvent(C.clickSidebarAccountPaymentMenuItem,r)})},[r,W]),ge=(t==null?void 0:t.isTeam())??!1;return e.jsxs(e.Fragment,{children:[((a==null?void 0:a.includes(Q))||i)&&e.jsx(hs,{analyticsParams:r,handleReferralInvite:fe}),!i&&S&&e.jsx(cs,{showFreeTrialLoadingPayment:d,handleGetPaymentLink:o}),ge&&e.jsx(ms,{}),ce&&e.jsx(A,{onClick:S?m:ue,className:"m-0 rounded-lg px-2",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(gs,{wasPaidCustomer:j,showFreeTrialLoadingPayment:d,hasPlusSubscription:$,hasPaidSubscription:U})})})})]})}const gs=({wasPaidCustomer:s,showFreeTrialLoadingPayment:n,hasPlusSubscription:a,hasPaidSubscription:t})=>n?e.jsx(we,{className:"icon-sm shrink-0"}):t&&!a?null:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(Ge,{className:"icon-sm shrink-0"})}),e.jsx("div",{className:"flex flex-col",children:s?e.jsx(l,{...b.renewPlus}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:a?e.jsx(l,{...b.createATeamWorkspace}):!t&&e.jsx(l,{...b.upgradePlan})}),e.jsx("span",{className:"line-clamp-1 text-xs text-token-text-tertiary",children:a?e.jsx(l,{...b.upgradeToTeamUpsell}):!t&&e.jsx(l,{...b.upgradeToPlusUpsell})})]})})]}),ms=()=>{const s=_();return e.jsxs(e.Fragment,{children:[e.jsx(A,{onClick:()=>{v.openModal(ee.InviteUsersToWorkspace)},className:"rounded-lg",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(te,{className:"icon-sm shrink-0"})}),e.jsx(l,{...b.inviteMembers})]})})}),s!=null?e.jsx(us,{workspace:s}):null]})},hs=({analyticsParams:s,handleReferralInvite:n})=>{const a=V(),t=(a==null?void 0:a.includes(Q))??!1,c=_(),{data:i}=K({queryKey:["referralInvites"],queryFn:()=>B.getEligibleReferralInvites(),enabled:t}),u=c&&!c.isOrWasPaidCustomer()&&!c.hasPlusFeatures(),r=(i==null?void 0:i.invites_remaining)&&(i==null?void 0:i.invites_remaining)>0,o=u&&r,[m,p]=g.useState(!1);return g.useEffect(()=>{o&&!m&&(p(!0),w.logEvent("chatgpt_referral_show_sidebar_menu_item"),f.logEvent(C.chatgptReferralShowSidebarMenuItem,s))},[o,p,m,s]),o?e.jsx(A,{onClick:n,className:"rounded-lg",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(te,{className:"icon-sm shrink-0"})}),e.jsx(l,{...b.inviteReferral})]})})}):null},b=T({upgradePlan:{id:"PaymentMenuItems.upgradePlan",defaultMessage:"Upgrade plan"},createATeamWorkspace:{id:"PaymentMenuItems.createATeamWorkspace",defaultMessage:"Add Team workspace"},upgradeToTeamUpsell:{id:"PaymentMenuItems.upgradeToTeamUpsell",defaultMessage:"Collaborate on a Team plan"},upgradeToPlusUpsell:{id:"PaymentMenuItems.upgradeToPlusUpsell.0",defaultMessage:"More access to the best models"},renewPlus:{id:"PaymentMenuItems.renewPlus",defaultMessage:"Renew Plus"},inviteReferral:{id:"PaymentMenuItems.inviteReferral",defaultMessage:"Refer a friend"},inviteMembers:{id:"PaymentMenuItems.inviteMembers.0",defaultMessage:"Invite members"},paymentErrorWarning:{id:"PaymentMenuItems.paymentErrorWarning",defaultMessage:"The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."}});function _s({navHeader:s,children:n,className:a}){const t=R(),c=g.useRef(null),i=Ie(),{isUnauthenticated:u}=N(),{layer:r}=X("1578749296"),o=r.get("is_sticky_toggle_off",!1);return g.useEffect(()=>{o&&v.openSidebar()},[o]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"draggable relative h-full w-full flex-1 items-start border-white/20",children:[e.jsx(Pe,{asChild:!0,children:e.jsx("h2",{children:e.jsx(l,{...M.chatHistoryLabel})})}),e.jsxs("nav",{className:k("flex h-full w-full flex-col px-3",a),"aria-label":t.formatMessage(M.chatHistoryLabel),children:[s,e.jsx(xs,{ref:c,$disableScroll:i&&!u,children:n}),e.jsx(Te,{children:e.jsx(ps,{})})]})]})})}function ps(){const[s]=g.useState(()=>{const r=_e.getCookie(Fe.Workspace);return typeof r=="string"&&r!==Ue}),n=_(),a=(n==null?void 0:n.data)==null,{isUnauthenticated:t}=N(),{openSettings:c}=se(),{isCollapsible:i}=ls(),u=F(r=>r.isHistoryCollapsed);return s&&a||!n?null:t?e.jsx(re,{}):e.jsxs("div",{className:k("flex flex-col py-2 empty:hidden dark:border-white/20",i&&"-mx-3 border-t border-token-border-sharp px-3"),children:[i&&!u&&e.jsx(He,{type:"less",onClick:v.toggleHistoryCollapsed}),e.jsx($e,{}),e.jsx(fs,{}),e.jsx("div",{className:"flex w-full items-center md:hidden",children:e.jsx("div",{className:"max-w-[100%] grow",children:e.jsx(Qe,{onClickSettings:()=>c()})})})]})}const re=()=>{const s=J(),n=O(),a=Y(M.unauthSignupCta),t=()=>{n({authType:"login",callback:r=>{f.logLogInButtonClicked({location:"Sidebar bottom unit",provider:r}),w.logEvent("chatgpt_sidebar_login_button_clicked")}})},c=()=>{n({authType:"signup",callback:r=>{f.logSignUpButtonClicked({location:"Sidebar bottom unit",provider:r}),w.logEvent("chatgpt_sidebar_signup_button_clicked")}})},i=e.jsx(P,{as:"button",size:"medium",color:s?"secondary":"primary","data-testid":"signup-button",onClick:c,children:e.jsx(l,{...a})}),u=e.jsx(P,{as:"button",size:"medium",color:s?"primary":"secondary","data-testid":"login-button",onClick:t,children:e.jsx(l,{...M.unauthLoginCta})});return e.jsxs("div",{className:"p-2",children:[e.jsxs("div",{className:"mb-4 mt-2",children:[e.jsx("p",{className:"mb-1 text-sm font-semibold text-token-text-primary",children:e.jsx(l,{...s?M.logInOrSignUp:M.signUpOrLogIn})}),e.jsx("p",{className:"text-sm text-token-text-secondary",children:e.jsx(l,{id:"4qlPtW",defaultMessage:"Get smarter responses, upload files and images, and more."})})]}),e.jsx("div",{className:"flex flex-row items-start gap-2",children:s?[u,i]:[i,u]})]})},xs=G.div`flex-col flex-1 transition-opacity duration-500 relative -mr-2 pr-2
  ${({$disableScroll:s})=>s?"overflow-y-hidden opacity-20 pointer-events-none":"overflow-y-auto"}`,M=T({chatHistoryLabel:{id:"NavigationContent.chatHistoryLabel",defaultMessage:"Chat history"},closeSidebar:{id:"NavigationContent.closeSidebar",defaultMessage:"Close sidebar"},signInToChat:{id:"NavigationContent.signInToChat",defaultMessage:"Sign in to ChatGPT"},signUpOrLogIn:{id:"NavigationContent.signUpOrLogIn",defaultMessage:"Sign up or log in"},logInOrSignUp:{id:"NavigationContent.logInOrSignUp",defaultMessage:"Log in or sign up"},unauthSignupCta:{id:"NavigationContent.unauthSignupCta",defaultMessage:"Sign up"},unauthLoginCta:{id:"NavigationContent.unauthLoginCta",defaultMessage:"Log in"}}),bs=()=>{var t;const{openSettings:s}=se(),n=(t=Ee("3376455464"))==null?void 0:t.value,a=Z();return e.jsxs("div",{className:"flex h-full flex-col gap-2 p-3",children:[e.jsx(q,{icon:Ke,onClick:()=>{We(a),v.closeActiveSidebar()},children:e.jsx(l,{id:"0FupYP",defaultMessage:"New chat"})}),e.jsx("div",{className:"flex grow items-center justify-center",children:e.jsx(re,{})}),e.jsxs(Je,{contentClassName:"w-[298px]",triggerButton:e.jsx(q,{icon:Ve,children:e.jsx(l,{id:"y4Lkp7",defaultMessage:"Settings and more"})}),children:[e.jsx(E.Item,{onClick:()=>s(),icon:Xe,children:e.jsx(l,{id:"HrRLkZ",defaultMessage:"Settings"})}),n&&e.jsx(E.Item,{icon:Ze,onClick:()=>{v.openModal(ee.ReportConversation)},children:e.jsx(l,{id:"thread.report.0",defaultMessage:"Report illegal content"})}),e.jsx(E.Separator,{}),e.jsx(es,{})]})]})};function oe({children:s,hideNavigation:n=!1,mobileHeaderContent:a,mobileHeaderLeftContent:t,mobileHeaderRightContent:c,mobileHeaderBottomContent:i,sidebar:u,forceOpenDesktopSidebar:r=!1}){const{isUnauthenticated:o}=N(),[m,p]=F(h=>[h.activeStageSidebar,h.activeSidebar]),d=De(),S=[];let j=null;D.Children.forEach(s,h=>{D.isValidElement(h)&&(h.type===oe.Sidebars?j=h:S.push(h))});const y=!o&&!n&&u!=null,U=!n&&(y||o);return e.jsxs("div",{className:k("relative flex h-full w-full overflow-hidden transition-colors",p!=="popover-nav"&&"z-0"),children:[y&&e.jsx(is,{isExpanded:r||!d,isPopoverOnDesktop:m,children:o?e.jsx(bs,{}):u}),e.jsxs("div",{className:"relative flex h-full max-w-full flex-1 flex-col overflow-hidden",children:[U&&e.jsx(ns,{onClickOpenSidebar:()=>v.togglePopoverNavSidebar(),showNavSidebar:y,leftContent:t,rightContent:c,bottomContent:i,children:a}),e.jsx("main",{className:"relative h-full w-full flex-1 overflow-auto transition-width",children:S})]}),j]})}function vs({children:s}){return e.jsx(e.Fragment,{children:s})}oe.Sidebars=vs;export{_s as N,oe as S,Is as a,Ps as b,Ts as c,ls as u};
//# sourceMappingURL=cch2zyr3wbj68u46.js.map