const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/in4ed4ut4wt9jqnb.js","assets/khdt74oc991qrzkv.js","assets/gg707do31ygkqwmn.js","assets/root-lbfis1cw.css","assets/chtblihe2u4rokz2.js","assets/conversation-small-9gmhsapt.css","assets/jfvpkk7h9jfx418s.js","assets/d3y72ugnrmac5z1v.js","assets/biv12gga6v0t9eji.js","assets/e9lafxuzyeh4418f.js","assets/li027ms695oz4jgt.js","assets/ff2ibphjtoadtayx.js","assets/j5w4166bn3c02o6l.js"])))=>i.map(i=>d[i]);
import{t as he,r as p,j as e,a_ as xe,b0 as be,b1 as ve,b4 as je,ak as v,aw as _,P as m,aF as U,aB as i,bD as ye,I as F,ar as X,J as $,l as Se,O as ee,S as T,d as I,fP as ke,an as Ce,ao as Me,K as Ne,aQ as te,a0 as L,$ as we,bk as ae,W as se,dL as Te,bA as Ie,ag as _e,fQ as Pe,aU as ne,au as Ae,av as Ue,e$ as Fe,dG as Le,aW as R,u as Be,aK as Z,am as V}from"./khdt74oc991qrzkv.js";import{g5 as D,U as x,m as Oe,k as ie,j as H,l as re,iY as A,iZ as Ee,i_ as Re,a_ as We,i$ as Y,aa as z,n as $e,hZ as oe,j0 as De,j1 as J,j2 as He,j3 as ze,a8 as Ge,iI as Ke,bO as qe,e9 as Qe}from"./chtblihe2u4rokz2.js";import{aA as Ze,b as Ve,bp as le,bs as Ye,K as Je,bu as Xe,b1 as et,ai as tt}from"./gg707do31ygkqwmn.js";import{d as at,N as ce,U as G,e as st}from"./cuejeeisemn8d40p.js";import{m as K}from"./x268dpsufn0qwgev.js";function wt({onClick:t,className:s,...a}){return e.jsx(at,{onClick:t,className:v(s,"flex-grow overflow-hidden"),...a})}function Tt({onNewChatButtonClick:t}){const{isUnauthenticated:s,isLoading:a}=_();return a||!s?null:e.jsx(ce,{className:"mr-3",onClick:()=>{m.logNewChatButtonClicked({location:"Mobile header"}),t()}})}function It({onNewChatButtonClick:t}){const{isUnauthenticated:s,isLoading:a}=_(),n=ie();return a?null:s?n?e.jsx(it,{}):e.jsx(nt,{}):e.jsx(ce,{onClick:()=>{m.logNewChatButtonClicked({location:"Mobile header"}),t()}})}function nt(){const t=H(),s=re(de.signUpButtonText);return e.jsx(U,{as:"button",size:"small",color:"primary",onClick:()=>{t({authType:"signup",callback:a=>{m.logSignUpButtonClicked({location:"Mobile Chat Stage Header",provider:a})}})},children:e.jsx(i,{...s})})}function it(){const t=H();return e.jsx(U,{as:"button",size:"small",color:"primary",onClick:()=>{t({authType:"login",callback:s=>{m.logLogInButtonClicked({location:"Mobile Chat Stage Header",provider:s})}})},"data-testid":"mobile-login-button",children:e.jsx(i,{...ye.logInButtonText})})}function rt({onClick:t}){return e.jsxs("button",{type:"button",className:"inline-flex rounded-md hover:text-token-text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:opacity-50",onClick:t,"data-testid":"open-sidebar-button",children:[e.jsx("span",{className:"sr-only",children:e.jsx(i,{...de.openSidebar})}),e.jsx(Ze,{className:"icon-lg mx-2 text-token-text-secondary"})]})}const ot=({onClickOpenSidebar:t,children:s,showNavSidebar:a,leftContent:n,rightContent:l,bottomContent:o})=>{const c=D(u=>u.activeSidebar),r=he(),d=r.pathname+r.search+r.hash;return p.useEffect(()=>{c==="popover-nav"&&x.setActiveSidebar(!1)},[d]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"draggable sticky top-0 z-10 flex min-h-[60px] items-center justify-center border-transparent bg-token-main-surface-primary pl-0 md:hidden",children:[(a||n)&&e.jsxs("div",{className:"no-draggable absolute bottom-0 left-0 top-0 ml-3 inline-flex items-center justify-center",children:[a&&e.jsx(rt,{onClick:t}),n]}),e.jsx("div",{className:"no-draggable",children:s}),l&&e.jsx("div",{className:"no-draggable absolute bottom-0 right-0 top-0 mr-3 inline-flex items-center justify-center",children:l})]}),o&&e.jsx("div",{className:"no-draggable flex w-full items-center justify-center bg-token-main-surface-primary md:hidden",children:o})]})};function lt({isPopoverOnDesktop:t=!1,isExpanded:s=!1,children:a}){const n=Oe();return e.jsxs(e.Fragment,{children:[!n||t?e.jsx(dt,{children:a}):null,e.jsx(ct,{isExpanded:!t&&s,children:a})]})}function ct({isExpanded:t,children:s}){const a=p.useRef(null);return e.jsx(K.div,{className:"z-[21] flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary max-md:!w-0",ref:a,initial:!1,animate:{width:t?"260px":0,transition:{type:"spring",bounce:.12,duration:.64}},onAnimationStart:()=>{a.current&&(a.current.style.visibility="visible")},onAnimationComplete:()=>{a.current&&(t||(a.current.style.visibility="hidden"))},children:e.jsx("div",{className:"h-full w-[260px]",children:e.jsx("div",{className:"flex h-full min-h-0 flex-col",children:s})})})}function dt({children:t}){const s=D(a=>a.activeSidebar);return e.jsx(xe,{open:s==="popover-nav",onOpenChange:a=>{a||x.setActiveSidebar(!1)},children:e.jsxs(be,{children:[e.jsx(ve,{className:"fixed inset-0 z-10 bg-gray-50/50 radix-state-open:animate-show dark:bg-black/50"}),e.jsx(je,{className:"fixed left-0 top-0 z-50 h-full max-w-xs border-r border-gray-200 bg-token-sidebar-surface-primary shadow-[0_0_64px_0_rgba(0,0,0,0.07)] focus:outline-none radix-state-closed:animate-sidebarHide radix-state-open:animate-sidebarShow dark:border-gray-800",children:t})]})})}const de=F({closeSidebar:{id:"navigation.closeSidebar",defaultMessage:"Close sidebar"},openSidebar:{id:"navigation.openSidebar",defaultMessage:"Open sidebar"},signUpButtonText:{id:"navigation.signUpButtonText",defaultMessage:"Sign up"}});function ut({showFreeTrialLoadingPayment:t,handleGetPaymentLink:s}){const a=$(),n=()=>{t||(A(!0),s())},l=y=>{y.stopPropagation(),Ee(!0),Re(!0)},{data:o,isLoading:c,isSuccess:r}=Se({queryKey:["claimedReferralInvite"],queryFn:()=>ee.getClaimedReferralInvite(),refetchOnMount:!1,refetchOnWindowFocus:!1,refetchInterval:!1,refetchOnReconnect:!1}),d=o?.invite_code,[u,j]=p.useState(!1);if(p.useEffect(()=>{d&&!u&&r&&(j(!0),T.logEvent("chatgpt_referral_show_claimed_sidebar_menu_promo"),m.logEvent(I.chatgptReferralShowClaimedSidebartMenuPromo))},[d,j,u,r]),!d||c||!r)return null;const h=d.invite_metadata.invite_data,b=h?.referral_trial_duration_months?h?.referral_trial_duration_months>1?a.formatMessage(W.monthsOfBenefit,{referralTrialDurationMonths:h?.referral_trial_duration_months}):a.formatMessage(W.daysOfBenefit,{referralTrialDurationDays:h?.referral_trial_duration_days}):null;return e.jsx(K.div,{className:v("relative",{"cursor-progress opacity-50":t}),layout:"position",initial:{y:-10,opacity:1},animate:{y:0,opacity:1,transition:{duration:.1,ease:"easeIn"}},children:e.jsxs(mt,{className:v(t&&"opacity-75"),onClick:n,children:[e.jsxs("div",{className:"flex w-full flex-row items-center justify-start gap-3",children:[e.jsx(ke,{className:"icon-sm shrink-0"}),e.jsx(i,{...W.freeTrialCta,values:{duration:b}})]}),!t&&e.jsx(Ve,{onClick:l,className:"icon-md shrink-0 rounded-full p-0.5 text-token-text-tertiary opacity-50 transition-colors duration-200 hover:bg-[#0077FF] hover:text-red-500 group-hover:opacity-100"}),e.jsx("span",{className:"absolute top-11 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#0077FF] transition-colors duration-200 group-hover:border-t-[#0077FF]"})]})})}const mt=X.a`group relative mb-1 rounded-md hover:[#0077FF] bg-[#0077FF] flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm`,W=F({freeTrialCta:{id:"PaymentMenuItems.freeTrialCta",defaultMessage:"Get {duration}!"},monthsOfBenefit:{id:"FreeTrialMenuItem.monthsOfBenefit",defaultMessage:"{referralTrialDurationMonths, plural, one {one month free} other {# months free}}"},daysOfBenefit:{id:"FreeTrialMenuItem.daysOfBenefit",defaultMessage:"{referralTrialDurationDays, plural, one {one day free} other {# days free}}"}}),ue=Ce(()=>Me(()=>import("./in4ed4ut4wt9jqnb.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])));function ft(){const t=$(),s=Ne(),a=te(),n=L(),l=!n,o=n?.hasPaidSubscription()??!1,c=n?.hasClaimedFreeTrial()??!1,r=p.useMemo(()=>n?.subscriptionAnalyticsParams,[n]),d=We(),u=async()=>{A(!0),m.logEvent(I.clickAccountPaymentCheckout,r);try{const k=await ee.getCheckoutLink(a);window.location.href=k.url}catch{s.warning(t.formatMessage(g.paymentErrorWarning),{hasCloseButton:!0}),A(!1)}finally{}},j=()=>{b||(A(!0),u())},h=Y(k=>k.didCloseFreeTrial),b=Y(k=>k.showFreeTrialLoadingPayment),y=!h&&c,B=n?.wasPaidCustomer()??!1;let S=n?.isWorkspaceAccount()??!1;const O=n?.hasPaidSubscription()??!1,M=n?.isPlus()??!1,{doesUserHaveAnyAccountsWithPlusFeatures:N}=we(),{layer:w}=ae("2670443078");let P=M;!S&&!M&&N&&w.get("is_gating_fix_enabled",!1)&&(P=N,S=!0);const E=!l&&!S,f=se(),ge=()=>{m.logEvent(I.clickSidebarAccountPaymentMenuItem,r),$e(f,"Sidebar account payment menu item")},pe=Te("3905879930");var q=n?.isTeam()??!1,Q=!1;return q&&(Q=pe.config.get("enabled",!1)),e.jsxs(e.Fragment,{children:[!o&&y&&e.jsx(ut,{showFreeTrialLoadingPayment:b,handleGetPaymentLink:u}),q?Q?e.jsx(pt,{}):e.jsx(gt,{}):null,E&&e.jsx(G,{onClick:y?j:ge,className:d?"":"m-0 rounded-lg px-2",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(ht,{wasPaidCustomer:B,showFreeTrialLoadingPayment:b,hasPlusSubscription:P,hasPaidSubscription:O})})})})]})}const gt=()=>{const t=L();return e.jsxs(e.Fragment,{children:[e.jsx(G,{onClick:()=>{x.openModal(z.InviteUsersToWorkspace),m.logEvent(I.accountMemberInviteButton,{location:"payment-menu-click"}),T.logEvent("chatgpt_invite_users_to_workspace",0,{action:"OpenAdminInviteModal",location:"payment-menu-click",text:"AddMembers",step:"OpenModal"})},className:"rounded-lg",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(le,{className:"icon-sm shrink-0"})}),e.jsx(i,{...g.inviteMembers})]})})}),t!=null?e.jsx(ue,{workspace:t}):null]})},pt=()=>{const t=L();return e.jsxs(e.Fragment,{children:[e.jsx(G,{onClick:()=>{x.openModal(z.InviteUsersToWorkspace),m.logEvent(I.accountMemberInviteButton,{location:"payment-menu-click"}),T.logEvent("chatgpt_invite_users_to_workspace",0,{action:"OpenAdminInviteModal",location:"payment-menu-click",text:"AddTeammatesWithInfo",step:"OpenModal"})},className:"m-0 rounded-lg px-2",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(le,{className:"icon-sm shrink-0"})}),e.jsx("div",{className:"flex flex-col",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:e.jsx(i,{...g.addTeammates})}),e.jsx("span",{className:"line-clamp-1 text-xs text-token-text-tertiary",children:e.jsx(i,{...g.addTeammatesUpsell})})]})})]})})})}),t!=null?e.jsx(ue,{workspace:t}):null]})},ht=({wasPaidCustomer:t,showFreeTrialLoadingPayment:s,hasPlusSubscription:a,hasPaidSubscription:n})=>s?e.jsx(Ie,{className:"icon-sm shrink-0"}):n&&!a?null:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(Ye,{className:"icon-sm shrink-0"})}),e.jsx("div",{className:"flex flex-col",children:t?e.jsx(i,{...g.renewPlus}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:a?e.jsx(i,{...g.createATeamWorkspace}):!n&&e.jsx(i,{...g.upgradePlan})}),e.jsx("span",{className:"line-clamp-1 text-xs text-token-text-tertiary",children:a?e.jsx(i,{...g.upgradeToTeamUpsell}):!n&&e.jsx(i,{...g.upgradeToPlusUpsell})})]})})]}),g=F({upgradePlan:{id:"PaymentMenuItems.upgradePlan",defaultMessage:"Upgrade plan"},createATeamWorkspace:{id:"PaymentMenuItems.createATeamWorkspace",defaultMessage:"Add Team workspace"},upgradeToTeamUpsell:{id:"PaymentMenuItems.upgradeToTeamUpsell",defaultMessage:"Collaborate on a Team plan"},upgradeToPlusUpsell:{id:"PaymentMenuItems.upgradeToPlusUpsell.0",defaultMessage:"More access to the best models"},renewPlus:{id:"PaymentMenuItems.renewPlus",defaultMessage:"Renew Plus"},inviteReferral:{id:"PaymentMenuItems.inviteReferral",defaultMessage:"Refer a friend"},addTeammates:{id:"PaymentMenuItems.addTeammates.0",defaultMessage:"Add teammates"},addTeammatesUpsell:{id:"PaymentMenuItems.addTeammatesUpsell.0",defaultMessage:"Invite coworkers to ChatGPT"},inviteMembers:{id:"PaymentMenuItems.inviteMembers.0",defaultMessage:"Invite members"},paymentErrorWarning:{id:"PaymentMenuItems.paymentErrorWarning",defaultMessage:"The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."}});function _t({navHeader:t,children:s,className:a}){const n=$(),l=p.useRef(null),o=_e(),{isUnauthenticated:c}=_(),{layer:r}=ae("1578749296"),d=r.get("is_sticky_toggle_off",!1);return p.useEffect(()=>{d&&x.toggleDesktopNavCollapsed()},[d]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"draggable relative h-full w-full flex-1 items-start border-white/20",children:[e.jsx(Pe,{asChild:!0,children:e.jsx("h2",{children:e.jsx(i,{...C.chatHistoryLabel})})}),e.jsxs("nav",{className:v("flex h-full w-full flex-col px-3",a),"aria-label":n.formatMessage(C.chatHistoryLabel),children:[t,e.jsx(bt,{ref:l,$disableScroll:o&&!c,children:s}),e.jsx(ne,{children:e.jsx(xt,{})})]})]})})}function xt(){const[t]=p.useState(()=>{const o=Ae.getCookie(Ue.Workspace);return typeof o=="string"&&o!==Fe}),s=L(),a=s?.data==null,{isUnauthenticated:n}=_(),{openSettings:l}=oe();return t&&a||!s?null:n?e.jsx(me,{}):e.jsxs("div",{className:v("flex flex-col py-2 empty:hidden dark:border-white/20"),children:[e.jsx(De,{}),e.jsx(ft,{}),e.jsx("div",{className:"flex w-full items-center md:hidden",children:e.jsx("div",{className:"max-w-[100%] grow",children:e.jsx(st,{onClickSettings:()=>l()})})})]})}const me=()=>{const t=ie(),s=H(),a=re(C.unauthSignupCta),n=()=>{s({authType:"login",callback:r=>{m.logLogInButtonClicked({location:"Sidebar bottom unit",provider:r}),T.logEvent("chatgpt_sidebar_login_button_clicked")}})},l=()=>{s({authType:"signup",callback:r=>{m.logSignUpButtonClicked({location:"Sidebar bottom unit",provider:r}),T.logEvent("chatgpt_sidebar_signup_button_clicked")}})},o=e.jsx(U,{as:"button",size:"medium",color:t?"secondary":"primary","data-testid":"signup-button",onClick:l,children:e.jsx(i,{...a})}),c=e.jsx(U,{as:"button",size:"medium",color:t?"primary":"secondary","data-testid":"login-button",onClick:n,children:e.jsx(i,{...C.unauthLoginCta})});return e.jsxs("div",{className:"p-2",children:[e.jsxs("div",{className:"mb-4 mt-2",children:[e.jsx("p",{className:"mb-1 text-sm font-semibold text-token-text-primary",children:e.jsx(i,{...t?C.logInOrSignUp:C.signUpOrLogIn})}),e.jsx("p",{className:"text-sm text-token-text-secondary",children:e.jsx(i,{id:"4qlPtW",defaultMessage:"Get smarter responses, upload files and images, and more."})})]}),e.jsx("div",{className:"flex flex-row items-start gap-2",children:t?[c,o]:[o,c]})]})},bt=X.div`flex-col flex-1 transition-opacity duration-500 relative -mr-2 pr-2
  ${({$disableScroll:t})=>t?"overflow-y-hidden opacity-20 pointer-events-none":"overflow-y-auto"}`,C=F({chatHistoryLabel:{id:"NavigationContent.chatHistoryLabel",defaultMessage:"Chat history"},closeSidebar:{id:"NavigationContent.closeSidebar",defaultMessage:"Close sidebar"},signInToChat:{id:"NavigationContent.signInToChat",defaultMessage:"Sign in to ChatGPT"},signUpOrLogIn:{id:"NavigationContent.signUpOrLogIn",defaultMessage:"Sign up or log in"},logInOrSignUp:{id:"NavigationContent.logInOrSignUp",defaultMessage:"Log in or sign up"},unauthSignupCta:{id:"NavigationContent.unauthSignupCta",defaultMessage:"Sign up"},unauthLoginCta:{id:"NavigationContent.unauthLoginCta",defaultMessage:"Log in"}}),vt=()=>{const{openSettings:t}=oe(),s=Be("3376455464")?.value,a=se();return e.jsxs("div",{className:"flex h-full flex-col gap-2 p-3",children:[e.jsx(J,{icon:Je,onClick:()=>{He(a),x.closeActiveSidebar()},children:e.jsx(i,{id:"0FupYP",defaultMessage:"New chat"})}),e.jsx("div",{className:"flex grow items-center justify-center",children:e.jsx(me,{})}),e.jsxs(Le,{contentClassName:"w-[298px]",triggerButton:e.jsx(J,{icon:Xe,children:e.jsx(i,{id:"y4Lkp7",defaultMessage:"Settings and more"})}),children:[e.jsx(R.Item,{onClick:()=>t(),icon:et,children:e.jsx(i,{id:"HrRLkZ",defaultMessage:"Settings"})}),s&&e.jsx(R.Item,{icon:tt,onClick:()=>{x.openModal(z.ReportConversation)},children:e.jsx(i,{id:"thread.report.0",defaultMessage:"Report illegal content"})}),e.jsx(R.Separator,{}),e.jsx(ze,{})]})]})};function jt({isExpanded:t,children:s}){const a=p.useRef(null);return e.jsx(Ge,{children:e.jsx(K.div,{className:"z-[1] flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary max-md:!w-0",ref:a,initial:!1,animate:{width:t?"400px":0,transition:{type:"spring",bounce:.12,duration:.3}},onAnimationStart:()=>{a.current&&(a.current.style.visibility="visible")},onAnimationComplete:()=>{a.current&&(t||(a.current.style.visibility="hidden"))},children:e.jsx("div",{className:v("absolute h-full w-[400px]",!t&&"pointer-events-none"),children:e.jsx("div",{className:"flex h-full flex-col",children:s})})})})}function fe({children:t,hideNavigation:s=!1,mobileHeaderContent:a,mobileHeaderLeftContent:n,mobileHeaderRightContent:l,mobileHeaderBottomContent:o,sidebar:c,threadFlyout:r,forceOpenDesktopSidebar:d=!1}){const{isUnauthenticated:u}=_(),[j,h]=D(f=>[f.activeStageSidebar,f.activeSidebar]),b=Ke(),{isOpen:y}=qe(),B=Qe(),S=te(),O=(S?.includes(Z.SearchTool)&&!S?.includes(Z.SearchToolHoldout))??!1,M=[];let N=null;V.Children.forEach(t,f=>{V.isValidElement(f)&&(f.type===fe.Sidebars?N=f:M.push(f))});const w=!u&&!s&&c!=null,P=!s&&(w||u),E=y&&b&&O;return e.jsxs("div",{className:v("relative flex h-full w-full overflow-hidden transition-colors",h!=="popover-nav"&&"z-0"),children:[w&&e.jsx(lt,{isExpanded:d||!B,isPopoverOnDesktop:j,children:u?e.jsx(vt,{}):c}),e.jsxs("div",{className:"relative flex h-full max-w-full flex-1 flex-col overflow-hidden",children:[P&&e.jsx(ot,{onClickOpenSidebar:()=>x.togglePopoverNavSidebar(),showNavSidebar:w,leftContent:n,rightContent:l,bottomContent:o,children:a}),e.jsx("main",{className:"relative h-full w-full flex-1 overflow-auto transition-width",children:M})]}),e.jsx(ne,{children:e.jsx(jt,{isExpanded:E,children:r})}),N]})}function yt({children:t}){return e.jsx(e.Fragment,{children:t})}fe.Sidebars=yt;export{_t as N,ft as P,fe as S,me as U,wt as a,Tt as b,It as c};
//# sourceMappingURL=gdjyzuc3jjcg941l.js.map