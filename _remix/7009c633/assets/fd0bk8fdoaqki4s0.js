const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/c60qtnv0hrg5k45l.js","assets/m4jglq4xyu9yijkb.js","assets/gzoh6r3q6qh4zfpi.js","assets/root-pbd7dlk8.css","assets/gn2j41krkucmoxrw.js","assets/conversation-small-ict01xsi.css","assets/huwb78t5dgzkw7ar.js","assets/d3y72ugnrmac5z1v.js","assets/ln65c363x8kjlcfc.js","assets/e9lafxuzyeh4418f.js","assets/hbwpgc6wnn4y4l9j.js","assets/hvyuw7c7sm6fsxp1.js"])))=>i.map(i=>d[i]);
import{x as ge,r as p,a6 as e,aT as pe,aV as he,aW as xe,aY as be,ar as v,aB as I,P as m,aL as U,aH as i,bI as ve,ak as F,aw as J,aj as D,u as je,K as Q,S as w,d as T,fD as ye,aE as Se,aG as Ce,a7 as Me,bS as ke,a2 as L,a1 as Ne,bt as X,Z as ee,dy as we,b1 as Te,an as Ie,fE as _e,b7 as te,az as Pe,aA as Ae,eR as Ue,U as Fe,w as Le,at as V}from"./m4jglq4xyu9yijkb.js";import{bZ as W,U as x,p as Be,n as ae,m as $,o as se,id as A,ie as Ee,ig as Oe,b7 as Re,ih as Z,ae as H,q as De,aj as ne,ii as We,c2 as Y,bS as $e,bA as He,ij as ze,bJ as Ge,f2 as qe}from"./gn2j41krkucmoxrw.js";import{B as Ke,D as O}from"./ivxou8kx91les96v.js";import{aj as Ve,b as Ze,bp as ie,bq as Ye,$ as Je,br as Qe,a_ as Xe,aG as et}from"./gzoh6r3q6qh4zfpi.js";import{h as tt,N as re,U as z,i as at}from"./b5gltvjzlc9evdvr.js";import{m as G}from"./kvkl8s6f0yhultlt.js";import{E as st}from"./jlrajui0a8prgqft.js";function It({onClick:t,className:s,...a}){return e.jsx(tt,{onClick:t,className:v(s,"flex-grow overflow-hidden"),...a})}function _t({onNewChatButtonClick:t}){const{isUnauthenticated:s,isLoading:a}=I();return a||!s?null:e.jsx(re,{className:"mr-3",onClick:()=>{m.logNewChatButtonClicked({location:"Mobile header"}),t()}})}function Pt({onNewChatButtonClick:t}){const{isUnauthenticated:s,isLoading:a}=I(),n=ae();return a?null:s?n?e.jsx(it,{}):e.jsx(nt,{}):e.jsx(re,{onClick:()=>{m.logNewChatButtonClicked({location:"Mobile header"}),t()}})}function nt(){const t=$(),s=se(oe.signUpButtonText);return e.jsx(U,{as:"button",size:"small",color:"primary",onClick:()=>{t({authType:"signup",callback:a=>{m.logSignUpButtonClicked({location:"Mobile Chat Stage Header",provider:a})}})},children:e.jsx(i,{...s})})}function it(){const t=$();return e.jsx(U,{as:"button",size:"small",color:"primary",onClick:()=>{t({authType:"login",callback:s=>{m.logLogInButtonClicked({location:"Mobile Chat Stage Header",provider:s})}})},"data-testid":"mobile-login-button",children:e.jsx(i,{...ve.logInButtonText})})}function rt({onClick:t}){return e.jsxs("button",{type:"button",className:"inline-flex rounded-md hover:text-token-text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:opacity-50",onClick:t,"data-testid":"open-sidebar-button",children:[e.jsx("span",{className:"sr-only",children:e.jsx(i,{...oe.openSidebar})}),e.jsx(Ve,{className:"icon-lg mx-2 text-token-text-secondary"})]})}const ot=({onClickOpenSidebar:t,children:s,showNavSidebar:a,leftContent:n,rightContent:l,bottomContent:o})=>{const c=W(u=>u.activeSidebar),r=ge(),d=r.pathname+r.search+r.hash;return p.useEffect(()=>{c==="popover-nav"&&x.setActiveSidebar(!1)},[d]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"draggable sticky top-0 z-10 flex min-h-[60px] items-center justify-center border-transparent bg-token-main-surface-primary pl-0 md:hidden",children:[(a||n)&&e.jsxs("div",{className:"no-draggable absolute bottom-0 left-0 top-0 ml-3 inline-flex items-center justify-center",children:[a&&e.jsx(rt,{onClick:t}),n]}),e.jsx("div",{className:"no-draggable",children:s}),l&&e.jsx("div",{className:"no-draggable absolute bottom-0 right-0 top-0 mr-3 inline-flex items-center justify-center",children:l})]}),o&&e.jsx("div",{className:"no-draggable flex w-full items-center justify-center bg-token-main-surface-primary md:hidden",children:o})]})};function lt({isPopoverOnDesktop:t=!1,isExpanded:s=!1,children:a}){const n=Be();return e.jsxs(e.Fragment,{children:[!n||t?e.jsx(dt,{children:a}):null,e.jsx(ct,{isExpanded:!t&&s,children:a})]})}function ct({isExpanded:t,children:s}){const a=p.useRef(null);return e.jsx(G.div,{className:"z-[21] flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary max-md:!w-0",ref:a,initial:!1,animate:{width:t?"260px":0,transition:{type:"spring",bounce:.12,duration:.64}},onAnimationStart:()=>{a.current&&(a.current.style.visibility="visible")},onAnimationComplete:()=>{a.current&&(t||(a.current.style.visibility="hidden"))},children:e.jsx("div",{className:"h-full w-[260px]",children:e.jsx("div",{className:"flex h-full min-h-0 flex-col",children:s})})})}function dt({children:t}){const s=W(a=>a.activeSidebar);return e.jsx(pe,{open:s==="popover-nav",onOpenChange:a=>{a||x.setActiveSidebar(!1)},children:e.jsxs(he,{children:[e.jsx(xe,{className:"fixed inset-0 z-10 bg-gray-50/50 radix-state-open:animate-show dark:bg-black/50"}),e.jsx(be,{className:"fixed left-0 top-0 z-50 h-full max-w-xs border-r border-gray-200 bg-token-sidebar-surface-primary shadow-[0_0_64px_0_rgba(0,0,0,0.07)] focus:outline-none radix-state-closed:animate-sidebarHide radix-state-open:animate-sidebarShow dark:border-gray-800",children:t})]})})}const oe=F({closeSidebar:{id:"navigation.closeSidebar",defaultMessage:"Close sidebar"},openSidebar:{id:"navigation.openSidebar",defaultMessage:"Open sidebar"},signUpButtonText:{id:"navigation.signUpButtonText",defaultMessage:"Sign up"}});function ut({showFreeTrialLoadingPayment:t,handleGetPaymentLink:s}){const a=D(),n=()=>{t||(A(!0),s())},l=y=>{y.stopPropagation(),Ee(!0),Oe(!0)},{data:o,isLoading:c,isSuccess:r}=je({queryKey:["claimedReferralInvite"],queryFn:()=>Q.getClaimedReferralInvite(),refetchOnMount:!1,refetchOnWindowFocus:!1,refetchInterval:!1,refetchOnReconnect:!1}),d=o?.invite_code,[u,j]=p.useState(!1);if(p.useEffect(()=>{d&&!u&&r&&(j(!0),w.logEvent("chatgpt_referral_show_claimed_sidebar_menu_promo"),m.logEvent(T.chatgptReferralShowClaimedSidebartMenuPromo))},[d,j,u,r]),!d||c||!r)return null;const h=d.invite_metadata.invite_data,b=h?.referral_trial_duration_months?h?.referral_trial_duration_months>1?a.formatMessage(R.monthsOfBenefit,{referralTrialDurationMonths:h?.referral_trial_duration_months}):a.formatMessage(R.daysOfBenefit,{referralTrialDurationDays:h?.referral_trial_duration_days}):null;return e.jsx(G.div,{className:v("relative",{"cursor-progress opacity-50":t}),layout:"position",initial:{y:-10,opacity:1},animate:{y:0,opacity:1,transition:{duration:.1,ease:"easeIn"}},children:e.jsxs(mt,{className:v(t&&"opacity-75"),onClick:n,children:[e.jsxs("div",{className:"flex w-full flex-row items-center justify-start gap-3",children:[e.jsx(ye,{className:"icon-sm shrink-0"}),e.jsx(i,{...R.freeTrialCta,values:{duration:b}})]}),!t&&e.jsx(Ze,{onClick:l,className:"icon-md shrink-0 rounded-full p-0.5 text-token-text-tertiary opacity-50 transition-colors duration-200 hover:bg-[#0077FF] hover:text-red-500 group-hover:opacity-100"}),e.jsx("span",{className:"absolute top-11 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#0077FF] transition-colors duration-200 group-hover:border-t-[#0077FF]"})]})})}const mt=J.a`group relative mb-1 rounded-md hover:[#0077FF] bg-[#0077FF] flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm`,R=F({freeTrialCta:{id:"PaymentMenuItems.freeTrialCta",defaultMessage:"Get {duration}!"},monthsOfBenefit:{id:"FreeTrialMenuItem.monthsOfBenefit",defaultMessage:"{referralTrialDurationMonths, plural, one {one month free} other {# months free}}"},daysOfBenefit:{id:"FreeTrialMenuItem.daysOfBenefit",defaultMessage:"{referralTrialDurationDays, plural, one {one day free} other {# days free}}"}}),le=Se(()=>Ce(()=>import("./c60qtnv0hrg5k45l.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])));function ft(){const t=D(),s=Me(),a=ke(),n=L(),l=!n,o=n?.hasPaidSubscription()??!1,c=n?.hasClaimedFreeTrial()??!1,r=p.useMemo(()=>n?.subscriptionAnalyticsParams,[n]),d=Re(),u=async()=>{A(!0),m.logEvent(T.clickAccountPaymentCheckout,r);try{const C=await Q.getCheckoutLink(a);window.location.href=C.url}catch{s.warning(t.formatMessage(g.paymentErrorWarning),{hasCloseButton:!0}),A(!1)}finally{}},j=()=>{b||(A(!0),u())},h=Z(C=>C.didCloseFreeTrial),b=Z(C=>C.showFreeTrialLoadingPayment),y=!h&&c,B=n?.wasPaidCustomer()??!1;let k=n?.isWorkspaceAccount()??!1;const _=n?.hasPaidSubscription()??!1,N=n?.isPlus()??!1,{doesUserHaveAnyAccountsWithPlusFeatures:S}=Ne(),{layer:E}=X("2670443078");let P=N;!k&&!N&&S&&E.get("is_gating_fix_enabled",!1)&&(P=S,k=!0);const f=!l&&!k,ue=ee(),me=()=>{m.logEvent(T.clickSidebarAccountPaymentMenuItem,r),De(ue,"Sidebar account payment menu item")},fe=we("3905879930");var q=n?.isTeam()??!1,K=!1;return q&&(K=fe.config.get("enabled",!1)),e.jsxs(e.Fragment,{children:[!o&&y&&e.jsx(ut,{showFreeTrialLoadingPayment:b,handleGetPaymentLink:u}),q?K?e.jsx(pt,{}):e.jsx(gt,{}):null,f&&e.jsx(z,{onClick:y?j:me,className:d?"":"m-0 rounded-lg px-2",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(ht,{wasPaidCustomer:B,showFreeTrialLoadingPayment:b,hasPlusSubscription:P,hasPaidSubscription:_})})})})]})}const gt=()=>{const t=L();return e.jsxs(e.Fragment,{children:[e.jsx(z,{onClick:()=>{x.openModal(H.InviteUsersToWorkspace),m.logEvent(T.accountMemberInviteButton,{location:"payment-menu-click"}),w.logEvent("chatgpt_invite_users_to_workspace",0,{action:"OpenAdminInviteModal",location:"payment-menu-click",text:"AddMembers",step:"OpenModal"})},className:"rounded-lg",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(ie,{className:"icon-sm shrink-0"})}),e.jsx(i,{...g.inviteMembers})]})})}),t!=null?e.jsx(le,{workspace:t}):null]})},pt=()=>{const t=L();return e.jsxs(e.Fragment,{children:[e.jsx(z,{onClick:()=>{x.openModal(H.InviteUsersToWorkspace),m.logEvent(T.accountMemberInviteButton,{location:"payment-menu-click"}),w.logEvent("chatgpt_invite_users_to_workspace",0,{action:"OpenAdminInviteModal",location:"payment-menu-click",text:"AddTeammatesWithInfo",step:"OpenModal"})},className:"m-0 rounded-lg px-2",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(ie,{className:"icon-sm shrink-0"})}),e.jsx("div",{className:"flex flex-col",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:e.jsx(i,{...g.addTeammates})}),e.jsx("span",{className:"line-clamp-1 text-xs text-token-text-tertiary",children:e.jsx(i,{...g.addTeammatesUpsell})})]})})]})})})}),t!=null?e.jsx(le,{workspace:t}):null]})},ht=({wasPaidCustomer:t,showFreeTrialLoadingPayment:s,hasPlusSubscription:a,hasPaidSubscription:n})=>s?e.jsx(Te,{className:"icon-sm shrink-0"}):n&&!a?null:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(Ye,{className:"icon-sm shrink-0"})}),e.jsx("div",{className:"flex flex-col",children:t?e.jsx(i,{...g.renewPlus}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:a?e.jsx(i,{...g.createATeamWorkspace}):!n&&e.jsx(i,{...g.upgradePlan})}),e.jsx("span",{className:"line-clamp-1 text-xs text-token-text-tertiary",children:a?e.jsx(i,{...g.upgradeToTeamUpsell}):!n&&e.jsx(i,{...g.upgradeToPlusUpsell})})]})})]}),g=F({upgradePlan:{id:"PaymentMenuItems.upgradePlan",defaultMessage:"Upgrade plan"},createATeamWorkspace:{id:"PaymentMenuItems.createATeamWorkspace",defaultMessage:"Add Team workspace"},upgradeToTeamUpsell:{id:"PaymentMenuItems.upgradeToTeamUpsell",defaultMessage:"Collaborate on a Team plan"},upgradeToPlusUpsell:{id:"PaymentMenuItems.upgradeToPlusUpsell.0",defaultMessage:"More access to the best models"},renewPlus:{id:"PaymentMenuItems.renewPlus",defaultMessage:"Renew Plus"},inviteReferral:{id:"PaymentMenuItems.inviteReferral",defaultMessage:"Refer a friend"},addTeammates:{id:"PaymentMenuItems.addTeammates.0",defaultMessage:"Add teammates"},addTeammatesUpsell:{id:"PaymentMenuItems.addTeammatesUpsell.0",defaultMessage:"Invite coworkers to ChatGPT"},inviteMembers:{id:"PaymentMenuItems.inviteMembers.0",defaultMessage:"Invite members"},paymentErrorWarning:{id:"PaymentMenuItems.paymentErrorWarning",defaultMessage:"The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."}});function At({navHeader:t,children:s,className:a}){const n=D(),l=p.useRef(null),o=Ie(),{isUnauthenticated:c}=I(),{layer:r}=X("1578749296"),d=r.get("is_sticky_toggle_off",!1);return p.useEffect(()=>{d&&x.toggleDesktopNavCollapsed()},[d]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"draggable relative h-full w-full flex-1 items-start border-white/20",children:[e.jsx(_e,{asChild:!0,children:e.jsx("h2",{children:e.jsx(i,{...M.chatHistoryLabel})})}),e.jsxs("nav",{className:v("flex h-full w-full flex-col px-3",a),"aria-label":n.formatMessage(M.chatHistoryLabel),children:[t,e.jsx(bt,{ref:l,$disableScroll:o&&!c,children:s}),e.jsx(te,{children:e.jsx(xt,{})})]})]})})}function xt(){const[t]=p.useState(()=>{const o=Pe.getCookie(Ae.Workspace);return typeof o=="string"&&o!==Ue}),s=L(),a=s?.data==null,{isUnauthenticated:n}=I(),{openSettings:l}=ne();return t&&a||!s?null:n?e.jsx(ce,{}):e.jsxs("div",{className:v("flex flex-col py-2 empty:hidden dark:border-white/20"),children:[e.jsx(We,{}),e.jsx(ft,{}),e.jsx("div",{className:"flex w-full items-center md:hidden",children:e.jsx("div",{className:"max-w-[100%] grow",children:e.jsx(at,{onClickSettings:()=>l()})})})]})}const ce=()=>{const t=ae(),s=$(),a=se(M.unauthSignupCta),n=()=>{s({authType:"login",callback:r=>{m.logLogInButtonClicked({location:"Sidebar bottom unit",provider:r}),w.logEvent("chatgpt_sidebar_login_button_clicked")}})},l=()=>{s({authType:"signup",callback:r=>{m.logSignUpButtonClicked({location:"Sidebar bottom unit",provider:r}),w.logEvent("chatgpt_sidebar_signup_button_clicked")}})},o=e.jsx(U,{as:"button",size:"medium",color:t?"secondary":"primary","data-testid":"signup-button",onClick:l,children:e.jsx(i,{...a})}),c=e.jsx(U,{as:"button",size:"medium",color:t?"primary":"secondary","data-testid":"login-button",onClick:n,children:e.jsx(i,{...M.unauthLoginCta})});return e.jsxs("div",{className:"p-2",children:[e.jsxs("div",{className:"mb-4 mt-2",children:[e.jsx("p",{className:"mb-1 text-sm font-semibold text-token-text-primary",children:e.jsx(i,{...t?M.logInOrSignUp:M.signUpOrLogIn})}),e.jsx("p",{className:"text-sm text-token-text-secondary",children:e.jsx(i,{id:"4qlPtW",defaultMessage:"Get smarter responses, upload files and images, and more."})})]}),e.jsx("div",{className:"flex flex-row items-start gap-2",children:t?[c,o]:[o,c]})]})},bt=J.div`flex-col flex-1 transition-opacity duration-500 relative -mr-2 pr-2
  ${({$disableScroll:t})=>t?"overflow-y-hidden opacity-20 pointer-events-none":"overflow-y-auto"}`,M=F({chatHistoryLabel:{id:"NavigationContent.chatHistoryLabel",defaultMessage:"Chat history"},closeSidebar:{id:"NavigationContent.closeSidebar",defaultMessage:"Close sidebar"},signInToChat:{id:"NavigationContent.signInToChat",defaultMessage:"Sign in to ChatGPT"},signUpOrLogIn:{id:"NavigationContent.signUpOrLogIn",defaultMessage:"Sign up or log in"},logInOrSignUp:{id:"NavigationContent.logInOrSignUp",defaultMessage:"Log in or sign up"},unauthSignupCta:{id:"NavigationContent.unauthSignupCta",defaultMessage:"Sign up"},unauthLoginCta:{id:"NavigationContent.unauthLoginCta",defaultMessage:"Log in"}}),vt=()=>{const{openSettings:t}=ne(),s=Fe("3376455464")?.value,a=ee();return e.jsxs("div",{className:"flex h-full flex-col gap-2 p-3",children:[e.jsx(Y,{icon:Je,onClick:()=>{$e(a),x.closeActiveSidebar()},children:e.jsx(i,{id:"0FupYP",defaultMessage:"New chat"})}),e.jsx("div",{className:"flex grow items-center justify-center",children:e.jsx(ce,{})}),e.jsxs(Ke,{contentClassName:"w-[298px]",triggerButton:e.jsx(Y,{icon:Qe,children:e.jsx(i,{id:"y4Lkp7",defaultMessage:"Settings and more"})}),children:[e.jsx(O.Item,{onClick:()=>t(),icon:Xe,children:e.jsx(i,{id:"HrRLkZ",defaultMessage:"Settings"})}),s&&e.jsx(O.Item,{icon:et,onClick:()=>{x.openModal(H.ReportConversation)},children:e.jsx(i,{id:"thread.report.0",defaultMessage:"Report illegal content"})}),e.jsx(O.Separator,{}),e.jsx(st,{})]})]})};function jt({isExpanded:t,children:s}){const a=p.useRef(null);return e.jsx(He,{children:e.jsx(G.div,{className:"z-[1] flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary max-md:!w-0",ref:a,initial:!1,animate:{width:t?"400px":0,transition:{type:"spring",bounce:.12,duration:.3}},onAnimationStart:()=>{a.current&&(a.current.style.visibility="visible")},onAnimationComplete:()=>{a.current&&(t||(a.current.style.visibility="hidden"))},children:e.jsx("div",{className:v("absolute h-full w-[400px]",!t&&"pointer-events-none"),children:e.jsx("div",{className:"flex h-full flex-col",children:s})})})})}function de({children:t,hideNavigation:s=!1,mobileHeaderContent:a,mobileHeaderLeftContent:n,mobileHeaderRightContent:l,mobileHeaderBottomContent:o,sidebar:c,threadFlyout:r,forceOpenDesktopSidebar:d=!1}){const{isUnauthenticated:u}=I(),[j,h]=W(f=>[f.activeStageSidebar,f.activeSidebar]),b=ze(),{isOpen:y}=Ge(),B=qe(),{value:k}=Le("218782548"),_=[];let N=null;V.Children.forEach(t,f=>{V.isValidElement(f)&&(f.type===de.Sidebars?N=f:_.push(f))});const S=!u&&!s&&c!=null,E=!s&&(S||u),P=y&&b&&k;return e.jsxs("div",{className:v("relative flex h-full w-full overflow-hidden transition-colors",h!=="popover-nav"&&"z-0"),children:[S&&e.jsx(lt,{isExpanded:d||!B,isPopoverOnDesktop:j,children:u?e.jsx(vt,{}):c}),e.jsxs("div",{className:"relative flex h-full max-w-full flex-1 flex-col overflow-hidden",children:[E&&e.jsx(ot,{onClickOpenSidebar:()=>x.togglePopoverNavSidebar(),showNavSidebar:S,leftContent:n,rightContent:l,bottomContent:o,children:a}),e.jsx("main",{className:"relative h-full w-full flex-1 overflow-auto transition-width",children:_})]}),e.jsx(te,{children:e.jsx(jt,{isExpanded:P,children:r})}),N]})}function yt({children:t}){return e.jsx(e.Fragment,{children:t})}de.Sidebars=yt;export{At as N,ft as P,de as S,ce as U,It as a,_t as b,Pt as c};
//# sourceMappingURL=fd0bk8fdoaqki4s0.js.map