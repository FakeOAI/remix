import{r as f,H as v,b4 as I,j as e,I as A,K as i,eJ as R,aU as w,aq as _,N as D,O as B,aZ as q,bt as X,aO as V,c as E,u as ae,R as K,X as te}from"./7q6a9ksdf0pmxyke.js";import{u as G,c as k,d as ne,a as ie}from"./k5uh5e0ybh85cid6.js";import{fG as g,W as J,fH as O,fI as Q,fJ as Z,fK as le,b2 as oe,bU as re,V as ce,fL as de,bV as ue,fM as me,fN as W,l as ee,bu as ge,cs as fe}from"./g61cr21b5136jq6j.js";import{c as xe}from"./iej0cupg2dqkmejt.js";import{L as pe}from"./dmclktsjqsuvf2fg.js";import{B as he,D as L}from"./gz5re6xwi3tsdosw.js";import{ad as je,br as Me,bI as be,bJ as ve,P as ye,w as Se,M as Ne}from"./hk3bf7nz434dsnqo.js";import{a as we,b as Ce}from"./i1l3cuzw2nf0yhiy.js";import{a as Be,d as U,e as F,g as Y,f as Ie,c as Pe,A as Le}from"./l96mduizammqknn6.js";import{b as Te}from"./i5smzsp9asclr92r.js";import"./mbounqbdqvic35ki.js";import"./cm2wm4e12j79q85q.js";import"./mrk3rb7h0czi8yqx.js";import"./ho1a4nnxi9o2a33u.js";import"./dilk8elagkdwchae.js";import"./okhnpblvnj0kkqgn.js";import"./c5skys0ao3aqjau7.js";import"./i562x7s3ysjk8eld.js";import"./jqf3ygjfbrgslpls.js";import"./jpt1t38j1d9lytbb.js";import"./obtz9g1upg41tlji.js";import"./cajrgbe5bf885l12.js";import"./gssfgly6zr1ac2m4.js";var C=(s=>(s.FLEXIBLE="month",s.ANNUAL="year",s))(C||{});const Ee=xe(C);function _e({isOpen:s,onClose:n,initialTeamBillingType:t,renewalDate:a,accountId:l}){const[c,o]=f.useState(t),[r,d]=f.useState(!1),p=function(){d(!r)},[j,m]=f.useState(!1),M=ze[c],b=v(),x=I(),y=G(l),S=async()=>{m(!0);try{await y.mutateAsync({accountId:l,updatedPriceInterval:c==="month"?"month":"year",updatedSeats:void 0}),m(!1),x.success(b.formatMessage({id:"teamBilling.successfullyUpdatedSubscription",defaultMessage:"Your subscription was updated successfully"}),{hasCloseButton:!0}),d(!1),n()}catch{x.warning(b.formatMessage({id:"teamBilling.errorUpdatingSubscription",defaultMessage:"There was a problem updating your subscription"}),{hasCloseButton:!0})}finally{m(!1)}};return e.jsx(A,{type:"success",isOpen:s,onClose:()=>{d(!1),o(t),n()},size:"custom",className:"max-w-xl",noPadding:!0,title:r?b.formatMessage({id:"teamBilling.changeBillingScheduleConfirmTitle",defaultMessage:"Confirm changes"}):b.formatMessage({id:"teamBilling.changeBillingScheduleTitle",defaultMessage:"Change billing schedule"}),showCloseButton:!0,children:r?e.jsx(ke,{selectedPlan:c,initialTeamBillingType:t,renewalDate:a,selectedPlanData:M,handleUpdate:S,isUpdating:j}):e.jsx(De,{setSelectedPlan:o,selectedPlan:c,initialTeamBillingType:t,toggleConfirmPage:p,renewalDate:a})})}function De({selectedPlan:s,setSelectedPlan:n,initialTeamBillingType:t,toggleConfirmPage:a,renewalDate:l}){const c=v();return e.jsxs("div",{children:[e.jsx("div",{className:"grid grid-flow-row grid-cols-2",children:e.jsxs(J,{className:"col-span-2 grid md:col-span-2 md:grid-cols-2",defaultValue:s,onValueChange:o=>{Ee(o)&&n(o)},children:[e.jsx(O,{billingType:"month",...Q}),e.jsx(O,{billingType:"year",...Z})]})}),e.jsx("hr",{}),e.jsxs("div",{className:"m-4 flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-token-text-secondary",children:e.jsx(i,{...g.changeEffectDate,values:{date:e.jsx(R,{value:l,year:"numeric",month:"long",day:"numeric"})}})}),e.jsx(w,{title:c.formatMessage(g.continueToPricePreview),disabled:s===t,color:"primary",onClick:()=>{a()}})]})]})}function ke({initialTeamBillingType:s,selectedPlan:n,renewalDate:t,selectedPlanData:a,handleUpdate:l,isUpdating:c}){const o=v();return e.jsxs("div",{className:"p-4",children:[e.jsx("span",{className:"text-sm",children:e.jsx(i,{...g.confirmPageChangeEffectDate,values:{current_plan:s==="month"?"Flexible (monthly)":"Annual",new_plan:n==="month"?"Flexible (monthly)":"Annual",date:e.jsx(R,{value:t,year:"numeric",month:"long",day:"numeric"})}})}),e.jsxs("div",{className:"mt-4 flex flex-col bg-token-main-surface-secondary p-4",children:[e.jsx("span",{className:"font-semibold",children:e.jsx(i,{...a.name})}),e.jsx("span",{className:"text-sm",children:e.jsx(i,{...a.cost,values:{s:(...r)=>e.jsx(le,{children:r})}})}),e.jsx("span",{className:"text-sm text-token-text-secondary",children:e.jsx(i,{...a.structure})})]}),e.jsx("div",{className:"mt-4 flex justify-end",children:e.jsx(w,{title:o.formatMessage(g.confirmChange),color:"primary",onClick:l,loading:c})})]})}const ze={month:{name:g.flexiblePlanName,cost:g.flexiblePlanCost,structure:g.teamsCostStructure},year:{name:g.annualPlanName,cost:g.annualPlanCost,structure:g.teamsCostStructure}};function Oe({isOpen:s,onClose:n}){const t=v(),a=I(),{data:l,isLoading:c}=k(),o=_(),r=ne(o==null?void 0:o.id),d=oe(),[p,j]=f.useState(""),[m,M]=f.useState(!1),b=(d==null?void 0:d.email)&&p.toLowerCase()==d.email.toLowerCase(),[x,y]=f.useState(l&&!l.will_renew);if(c||!o||!l)return null;const S=async()=>{M(!0);try{await r.mutateAsync(o.id),y(!0)}catch{a.warning(t.formatMessage(h.errorCancellingSubscription),{hasCloseButton:!0})}finally{M(!1)}};return e.jsx(A,{type:"success",onClose:n,showCloseButton:!0,isOpen:s,className:"",title:e.jsx("span",{className:"text-lg",children:e.jsx(i,{...h.cancelPlan})}),children:x?e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-base font-semibold text-token-text-primary",children:e.jsx(i,{...h.successfullyCanceled})}),l.active_until!=null&&e.jsx("p",{className:"text-sm text-token-text-primary",children:e.jsx(i,{...h.retainUntil,values:{expiryDate:new Date(l.active_until)}})}),e.jsx("div",{className:"mt-6 flex w-full flex-row justify-end",children:e.jsx(w,{title:t.formatMessage(h.doneButton),color:"primary",onClick:n,disabled:m})})]}):e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col items-center justify-center gap-4",children:[e.jsxs("div",{className:"flex w-full items-center gap-4",children:[e.jsx(re,{src:o.data.profilePictureUrl,size:"large"}),e.jsxs("div",{className:"flex-col",children:[e.jsx("p",{className:"font-semibold",children:o.data.name}),e.jsx("p",{className:"text-sm text-token-text-secondary",children:e.jsx(i,{...h.membersCount,values:{count:l.seats_entitled}})})]})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("h3",{className:"mb-2 text-base font-semibold text-token-text-primary",children:e.jsx(i,{...h.areYouSure})}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-token-text-secondary",children:[e.jsx("li",{className:"my-2",children:e.jsx(i,{...h.dataUnavailable})}),l.active_until!=null&&e.jsx("li",{className:"my-2",children:e.jsx(i,{...h.retainUntil,values:{expiryDate:new Date(l.active_until)}})}),e.jsx("li",{className:"my-2",children:e.jsx(i,{...h.retainEmailAccess})})]})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("h3",{className:"mb-2 text-base font-semibold text-token-text-primary",children:e.jsx(i,{...h.enterEmailToConfirm})}),e.jsx(ce,{type:"text",name:"user-email",placeholder:"abcd@acme.com",onChange:N=>{j(N.target.value)}})]})]}),e.jsxs("div",{className:"mt-6 flex w-full flex-row justify-end",children:[e.jsx(w,{title:t.formatMessage(h.keepSubscriptionButton),onClick:n,disabled:m}),e.jsx(w,{title:t.formatMessage(h.cancelSubscriptionButton),onClick:S,disabled:!b,loading:m,color:"danger",className:"ml-2"})]})]})})}const h=D({dataUnavailable:{id:"cancelTeamPlanModal.dataUnavailable",defaultMessage:"All workspace data including chat history and settings will not be available."},cancelPlan:{id:"cancelTeamPlanModal.cancelPlan",defaultMessage:"Cancel subscription"},retainUntil:{id:"cancelTeamPlanModal.retainUntil",defaultMessage:"You will retain access to the workspace until the end of your billing cycle on {expiryDate, date, long}."},retainEmailAccess:{id:"cancelTeamPlanModal.retainEmailAccess",defaultMessage:"You will still be able to use ChatGPT with the other workspaces associated with this email address."},errorCancellingSubscription:{id:"cancelTeamPlanModal.errorCancellingSubscription",defaultMessage:"There was a problem cancelling your subscription."},areYouSure:{id:"cancelTeamPlanModal.areYouSure",defaultMessage:"Are you sure?"},enterEmailToConfirm:{id:"cancelTeamPlanModal.enterEmailToConfirm",defaultMessage:"Enter your Email address to confirm"},emailPlaceholder:{id:"cancelTeamPlanModal.emailPlaceholder",defaultMessage:"abcd@acme.com"},doneButton:{id:"cancelTeamPlanModal.doneButton",defaultMessage:"Done"},keepSubscriptionButton:{id:"cancelTeamPlanModal.keepSubscriptionButton",defaultMessage:"Keep subscription"},cancelSubscriptionButton:{id:"cancelTeamPlanModal.cancelSubscriptionButton",defaultMessage:"Cancel subscription"},successfullyCanceled:{id:"cancelTeamPlanModal.successfullyCanceled",defaultMessage:"You have successfully canceled your subscription."},membersCount:{id:"yourComponent.membersCount",defaultMessage:"{count, plural, one {# member} other {# members}}"}}),Ue=25*12,Fe=30,Ae=B.p`text-base font-semibold mb-3 mt-3`;function Re({isOpen:s,onClose:n,initialTeamBillingType:t,initialSeats:a,accountId:l,renewalDate:c}){const o=v(),r=I(),[d,p]=f.useState(a),[j,m]=f.useState(!1),M=function(){m(!j)},[b,x]=f.useState(!1),y=We[t],S=t==="month"?Q:Z,N=G(l),P=async()=>{x(!0);try{await N.mutateAsync({accountId:l,updatedPriceInterval:void 0,updatedSeats:d}),x(!1),r.success(o.formatMessage({id:"teamBilling.successfullyUpdatedSubscription",defaultMessage:"Your subscription was updated successfully"}),{hasCloseButton:!0}),m(!1),n()}catch{r.warning(o.formatMessage({id:"teamBilling.errorUpdatingSubscription",defaultMessage:"There was a problem updating your subscription"}),{hasCloseButton:!0})}finally{x(!1)}};return e.jsx(A,{type:"success",isOpen:s,onClose:()=>{m(!1),p(a),n()},size:"custom",noPadding:!0,className:"max-w-xl",showCloseButton:!0,title:j?o.formatMessage({id:"teamsManageSeatsModal.title",defaultMessage:"Manage seats"}):o.formatMessage({id:"teamsManageSeatsModalConfirmPage.title",defaultMessage:"Review"}),children:j?e.jsx(He,{numSeats:d,initialSeats:a,handleUpdate:P,isUpdating:b,renewalDate:c,accountId:l}):e.jsx($e,{initialTeamBillingType:t,selectedPlanBillingInfo:S,numSeats:d,initialSeats:a,setNumSeats:p,selectedPlanData:y,toggleConfirmPage:M})})}function $e({initialTeamBillingType:s,selectedPlanBillingInfo:n,numSeats:t,initialSeats:a,setNumSeats:l,selectedPlanData:c,toggleConfirmPage:o}){const r=v();return e.jsxs("div",{className:"grid grid-flow-row grid-cols-2",children:[e.jsx(J,{className:"col-span-2 grid md:col-span-1 md:grid-cols-1",defaultValue:s,children:e.jsx(O,{billingType:s,...n})}),e.jsxs("div",{className:"col-span-3 overflow-hidden border-l border-token-main-surface-tertiary bg-token-main-surface-secondary p-6 md:col-span-1",children:[e.jsx("label",{className:"mb-3 block text-base font-semibold",htmlFor:"seats",children:e.jsx(i,{...g.seatsTitle})}),e.jsx(de,{numSeats:t,minSeats:a,setNumSeats:l}),e.jsx(ue,{}),e.jsx(Ae,{children:e.jsx(i,{...g.summaryTitle})}),e.jsxs("div",{className:"text-sm",children:[e.jsx("p",{className:"mb-2",children:e.jsx(i,{...c.name})}),e.jsxs(me,{children:[e.jsx(W,{children:e.jsx(i,{...c.billed})}),e.jsx(W,{children:e.jsx("b",{children:e.jsx(i,{...c.total,values:{totalCost:(t||0)*(s==="year"?Ue:Fe)}})})})]})]})]}),e.jsx("hr",{}),e.jsx("div",{className:"m-4 flex justify-end",children:e.jsx(w,{title:r.formatMessage({id:"teamsManageSeatsModal.continue",defaultMessage:"Continue"}),disabled:t===a,onClick:()=>{o()},color:"primary"})})]})}function He({numSeats:s,initialSeats:n,renewalDate:t,handleUpdate:a,isUpdating:l,accountId:c}){const o=v(),{data:r,isError:d,isLoading:p}=ie(c,s);if(p)return e.jsx("div",{className:"flex items-center justify-center p-6",children:e.jsx(q,{})});if(!(d||!r))return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-semibold",children:e.jsx(i,{id:"teamsManageSeatsModal.additionalSeats",defaultMessage:"{additionalSeats} additional seats",values:{additionalSeats:s-n}})}),e.jsx("span",{className:"font-semibold",children:e.jsx(i,{id:"teamsManageSeatsModal.additionalSeatsTotal",defaultMessage:"${totalCost}",values:{totalCost:(r.total_amount/100).toFixed(2)}})})]}),e.jsx("span",{className:"text-sm text-token-text-secondary",children:e.jsx(i,{id:"teamsManageSeatsModal.proratedAmountMessage",defaultMessage:"Prorated amount until next billing cycle"})}),e.jsx("span",{className:"mt-4 flex flex-col bg-token-main-surface-secondary p-4 text-sm text-token-text-secondary",children:e.jsx(i,{id:"teamsManageSeatsModal.chargeMessage",defaultMessage:"You will be charged for {numSeats} total seats at your next renewal on {date}",values:{numSeats:s,date:e.jsx(R,{value:t,year:"numeric",month:"long",day:"numeric"})}})}),e.jsx("hr",{className:"mt-4"}),e.jsxs("div",{className:"mt-4 flex justify-between",children:[e.jsx("span",{className:"font-semibold",children:e.jsx(i,{id:"teamsManageSeatsModal.subTotal",defaultMessage:"Subtotal"})}),e.jsx("span",{children:e.jsx(i,{id:"teamsManageSeatsModal.subtotalPrice",defaultMessage:"${totalCost}",values:{totalCost:(r.amount_excluding_tax/100).toFixed(2)}})})]}),e.jsxs("div",{className:"mt-2 flex justify-between",children:[e.jsx("span",{className:"font-semibold",children:e.jsx(i,{id:"teamsManageSeatsModal.tax",defaultMessage:"Tax"})}),e.jsx("span",{children:e.jsx(i,{id:"teamsManageSeatsModal.taxAmount",defaultMessage:"${tax}",values:{tax:(r.tax_amount/100).toFixed(2)}})})]}),e.jsxs("div",{className:"mt-2 flex justify-between",children:[e.jsx("span",{className:"font-semibold",children:e.jsx(i,{id:"teamsManageSeatsModal.totalDueToday",defaultMessage:"Total due today"})}),e.jsx("span",{className:"font-semibold",children:e.jsx(i,{id:"teamsManageSeatsModal.totalDueTodayAmount",defaultMessage:"${totalCost}",values:{totalCost:(r.total_amount/100).toFixed(2)}})})]}),e.jsx("hr",{className:"mt-4"}),e.jsx("div",{className:"mt-6 flex justify-end",children:e.jsx(w,{title:o.formatMessage({id:"teamsManageSeatsModal.payNow",defaultMessage:"Pay now"}),color:"primary",onClick:a,loading:l})})]})}const We={month:{name:g.flexiblePlanSelected,billed:{id:"teamManageSeatsModal.flexiblePlanBilled",defaultMessage:"Price billed monthly",description:"Summary billing of selected plan"},total:g.flexiblePlanTotal},year:{name:g.annualPlanSelected,billed:{id:"teamManageSeatsModal.flexiblePlanBilled",defaultMessage:"Price billed annually",description:"Summary billing of selected plan"},total:g.annualPlanTotal}};function Ye({numInUse:s,numAllocated:n,isTeam:t,subscriptionWillRenew:a,subscriptionBillingPeriod:l,accountId:c,subscriptionRenewalDate:o}){var x;const d=Math.max(n,s)>10?qe:Ge,p=(x=V("3954884439"))==null?void 0:x.value,[j,m]=f.useState(!1),M=function(){m(!j)},b=l==="monthly"?C.FLEXIBLE:C.ANNUAL;return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"mt-1 text-left text-sm",children:e.jsx(i,{...H.description,values:{num:`${s}/${n}`}})}),t&&a&&p&&e.jsx(X,{color:"secondary",className:"text-right",onClick:M,children:e.jsx(i,{id:"components.business.NumSeats.manageSeats",defaultMessage:"Manage seats"})}),e.jsx(Re,{isOpen:j,onClose:M,initialTeamBillingType:b,initialSeats:n,accountId:c,renewalDate:o})]}),e.jsx(d,{numInUse:s,numAllocated:n})]})}function qe({numAllocated:s,numInUse:n}){const t=v(),a=n>s,l=a?100:n/s*100,c=a?s/n*100:100;return e.jsx("div",{className:E("relative w-full rounded-full",a?"bg-orange-500":"bg-token-main-surface-primary"),children:e.jsxs("div",{className:"relative h-4",style:{width:`${c}%`},children:[e.jsx("div",{className:E("h-4 overflow-hidden rounded-l-full bg-green-600",n===s&&"rounded-r-full"),style:{width:`${l}%`}}),n!==s&&a&&e.jsx("div",{className:"absolute right-0 top-[-3px] bg-token-main-surface-primary",children:e.jsx(ee,{label:t.formatMessage(H.dividerTooltip,{count:s}),children:e.jsx(se,{className:"px-1 py-0.5"})})})]})})}const se=({className:s})=>e.jsxs("div",{className:E("flex flex-col gap-0.5",s),children:[e.jsx(T,{}),e.jsx(T,{}),e.jsx(T,{}),e.jsx(T,{})]}),$=B.div`h-4 w-4 rounded-full`,Xe=B($)`bg-green-600`,Ve=B($)`bg-token-main-surface-tertiary`,Ke=B($)`bg-orange-500`,T=B.span`w-[3px] h-[3px] bg-gray-400 dark:bg-gray-500 rounded-full`;function Ge({numAllocated:s,numInUse:n}){const t=v(),a=n>s,l=f.useMemo(()=>Array.from(Array(a?n:s).keys()),[a,s,n]);return e.jsx("div",{className:"flex items-center gap-2",children:l.map(c=>{let o=Ke,r=null;return c<n&&!a?o=Xe:c<s&&!a&&(o=Ve),c===s-1&&(r=e.jsx(ee,{label:t.formatMessage(H.dividerTooltip,{count:s}),children:e.jsx(se,{})})),e.jsxs(e.Fragment,{children:[e.jsx(o,{},c),r]})})})}const H=D({dividerTooltip:{defaultMessage:"Your team has {count, plural, =0 {no seats} one {# seat} other {# seats}} purchased",id:"components.business.NumSeats.dividerTooltip"},description:{defaultMessage:"{num} seats in use",id:"components.business.NumSeats.description"}});function Je(s,n){const t=v(),a=I();return ae({queryKey:["organization-invoices",{...s,options:n}],queryFn:async()=>await K.getInvoices(s,n).catch(l=>{throw a.danger(t.formatMessage(Ze.invoicesLoadError,{error:l.message})),l}),enabled:"account_id"in s||"organization_id"in s})}function Qe(s){const n=_(),t=n==null?void 0:n.id,a=(n==null?void 0:n.data.organizationId)??void 0,l=n==null?void 0:n.isEnterprisey();return Je(l?{organization_id:a}:{account_id:t},s)}const Ze=D({invoicesLoadError:{id:"organizationBillingInfo.invoicesLoadError.0",defaultMessage:"Failed to load invoices. Contact support@openai.com if error persists."}});function es(){const{data:s,isLoading:n,isError:t}=k(),a=_(),[l,c]=f.useState(!1),o=function(){c(!l)};if(n)return e.jsx("div",{className:"flex min-h-screen items-center justify-center",children:e.jsx(q,{})});if(t||!s||!a)return null;const r=s.active_until!=null,d=(s==null?void 0:s.seats_in_use)>(s==null?void 0:s.seats_entitled);return e.jsx(e.Fragment,{children:e.jsxs(U,{children:[e.jsx(F,{children:e.jsx(i,{...u.planTitle})}),e.jsx("hr",{}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx(Y,{children:a!=null&&a.isEnterprise()?r?e.jsx(i,{...u.activeEnterpriseLicense}):a!=null&&a.isResellerHosted()?e.jsx(i,{...u.resellerHostedEnterpriseLicense}):e.jsx(i,{...u.pendingEnterpriseLicense}):a!=null&&a.isEdu()?r?e.jsx(i,{...u.activeEduLicense}):a!=null&&a.isResellerHosted()?e.jsx(i,{...u.resellerHostedEduLicense}):e.jsx(i,{...u.pendingEduLicense}):r?s.non_profit_org_discount_applied?e.jsx(i,{...u.activeTeamLicenseNonProfitOrg}):e.jsx(i,{...u.activeTeamLicense}):e.jsx(i,{...u.pendingTeamLicense})}),s.active_until!=null&&e.jsx(Ie,{className:"mt-1",children:a!=null&&a.isEnterprisey()?e.jsx(i,{...u.licenseExpiry,values:{expiryDate:new Date(s.active_until)}}):s.will_renew?e.jsx(i,{...u.renewalDate,values:{expiryDate:new Date(s.active_until)}}):e.jsx(i,{...u.deactivateDate,values:{expiryDate:new Date(s.active_until)}})})]}),e.jsx(ss,{isOpen:l,onDropdownOpen:o})]}),e.jsx("hr",{}),r&&e.jsxs("div",{children:[e.jsx(Y,{children:e.jsx(i,{...u.seatsTitle})}),e.jsx(ns,{isTeam:(a==null?void 0:a.isTeam())??!1,accountId:a.id}),(a==null?void 0:a.isTeam())&&d&&e.jsxs("span",{className:"text-sm text-token-text-secondary",children:[e.jsx(i,{...u.teamsAutochargeMessage}),e.jsx(pe,{className:"pl-1",openNewTab:!0,href:"https://help.openai.com/en/articles/8792536-manage-billing-on-the-chatgpt-team-subscription-plan",children:e.jsx(i,{...u.billingLearnMore})})]})]}),e.jsx("hr",{})]})})}function ss({isOpen:s,onDropdownOpen:n}){var P;const[t,a]=f.useState(!1),l=te(),c=v(),o=I(),r=_(),{data:d}=k(),[p,j]=f.useState(!1),m=function(){j(!p)},[M,b]=f.useState(!1),x=function(){b(!M)},y=(P=V("1318146997"))==null?void 0:P.value;if(!r||!r.isTeam()||!d)return;const S=async()=>{a(!0);try{const z=await K.fetchCustomerPortalUrl(r==null?void 0:r.getWorkspaceId());l.push(z.url)}catch{o.warning(c.formatMessage(u.stripeErrorWarning),{hasCloseButton:!0})}finally{a(!1)}},N=(d==null?void 0:d.billing_period)==="monthly"?C.FLEXIBLE:C.ANNUAL;return e.jsxs(he,{open:s,size:"default",triggerButton:e.jsx(X,{color:"secondary",onClick:n,icon:je,children:e.jsx(i,{...u.manageLicenseBtn})}),children:[e.jsx(L.Item,{icon:Me,onClick:S,children:e.jsx(i,{...u.managePaymentMethod})}),d.will_renew&&y&&e.jsx(L.Item,{icon:be,onClick:()=>{x()},children:e.jsx(i,{...u.manageBillingSchedule})}),d.active_until!=null&&e.jsx(_e,{isOpen:M,onClose:x,initialTeamBillingType:N,renewalDate:new Date(d.active_until),accountId:r.id}),(d==null?void 0:d.will_renew)&&e.jsx(L.Separator,{}),(d==null?void 0:d.will_renew)&&e.jsx(L.Item,{icon:ve,color:"danger",onClick:()=>{m()},children:e.jsx(i,{...u.cancelSubscriptionBtn})}),e.jsx(Oe,{isOpen:p,onClose:m})]})}function as({invoice:s}){const n=(s==null?void 0:s.status_transitions.paid_at)!=null&&new Date(s.status_transitions.paid_at*1e3),t=s&&new Date(s.due_date*1e3),a=s&&new Date(s.created*1e3);return e.jsxs(Le,{className:"items-center",children:[e.jsxs("div",{className:"flex grow flex-col gap-1",children:[e.jsx("span",{children:a?e.jsx(i,{...u.invoiceName,values:{createdDate:a}}):e.jsx(i,{...u.defaultInvoiceName})}),s!=null&&s.paid&&n!=null?e.jsx("div",{className:"text-xs text-token-text-secondary",children:e.jsx(i,{...u.paidInvoice,values:{invoiceDate:n}})}):s&&e.jsx("div",{className:"text-xs text-green-600",children:e.jsx(i,{...u.upcomingInvoice,values:{invoiceDate:t}})})]}),e.jsx("a",{href:s==null?void 0:s.hosted_invoice_url,className:E("mx-auto",(s==null?void 0:s.hosted_invoice_url)==null&&"cursor-not-allowed opacity-20"),target:"_blank",rel:"noreferrer",children:e.jsx(Ne,{className:"icon-sm text-green-600"})})]})}function ts(){const[s,n]=f.useState({limit:5}),{data:t,isError:a}=Qe(s),l=s.startingAfter!=null||s.endingBefore!=null&&(t==null?void 0:t.has_more),c=s.endingBefore!=null||(t==null?void 0:t.has_more)&&s.endingBefore==null;return a||t==null?e.jsxs(U,{children:[e.jsx(F,{children:e.jsx(i,{...u.invoicesTitle})}),e.jsx(fe,{children:e.jsx(i,{...u.noInvoices})})]}):e.jsxs(U,{children:[e.jsx(F,{children:e.jsx(i,{...u.invoicesTitle})}),e.jsx(Pe,{children:t.data.map(o=>e.jsx(as,{invoice:o},o.id))}),e.jsxs("div",{className:"flex",children:[l&&e.jsx("button",{onClick:()=>{t&&n(o=>({...o,endingBefore:t.data[0].id,startingAfter:void 0}))},children:e.jsx(ye,{className:"icon-sm"})}),e.jsx("div",{className:"flex-grow"}),c&&e.jsx("button",{onClick:()=>{t&&n(o=>({...o,startingAfter:t.data[t.data.length-1].id,endingBefore:void 0}))},children:e.jsx(Se,{className:"icon-sm"})})]})]})}function ns({isTeam:s,accountId:n}){const{data:t,isLoading:a,isError:l}=k();return l||!t||a||!t.billing_period||!t.active_until?null:e.jsx(Ye,{numInUse:t.seats_in_use,numAllocated:t.seats_entitled,isTeam:s,subscriptionWillRenew:t.will_renew,subscriptionBillingPeriod:t.billing_period,subscriptionRenewalDate:new Date(t.active_until),accountId:n})}function is(){const s=ge(a=>a.currentWorkspace),n=s==null?void 0:s.organizationId,t=v();return n===void 0?null:e.jsxs(e.Fragment,{children:[e.jsx(we,{title:t.formatMessage(u.title),subtitle:t.formatMessage(u.subtitle)}),e.jsx(Ce,{children:e.jsxs(Be,{children:[e.jsx(es,{}),e.jsx(ts,{})]})})]})}const u=D({title:{id:"organizationBillingInfo.title.1",defaultMessage:"Billing"},subtitle:{id:"organizationBillingInfo.subtitle",defaultMessage:"Only workspace owners can view and change these settings"},planTitle:{id:"organizationBillingInfo.planTitle",defaultMessage:"Plan"},activeEnterpriseLicense:{id:"organizationBillingInfo.activeEnterpriseLicense",defaultMessage:"Enterprise License"},pendingEnterpriseLicense:{id:"organizationBillingInfo.pendingEnterpriseLicense",defaultMessage:"Enterprise License (pending activation)"},resellerHostedEnterpriseLicense:{id:"organizationBillingInfo.resellerHostedEnterpriseLicense",defaultMessage:"Enterprise License"},activeEduLicense:{id:"organizationBillingInfo.activeEduLicense",defaultMessage:"Edu License"},pendingEduLicense:{id:"organizationBillingInfo.pendingEduLicense",defaultMessage:"Edu License (pending activation)"},resellerHostedEduLicense:{id:"organizationBillingInfo.resellerHostedEduLicense",defaultMessage:"Edu License"},activeTeamLicense:{id:"organizationBillingInfo.activeTeamLicense",defaultMessage:"Team License"},activeTeamLicenseNonProfitOrg:{id:"organizationBillingInfo.activeTeamLicenseNonProfitOrg",defaultMessage:"Team License (Non Profit Discount)"},pendingTeamLicense:{id:"organizationBillingInfo.pendingTeamLicense",defaultMessage:"Team License (pending activation)"},licenseExpiry:{id:"organizationBillingInfo.licenseExpiry",defaultMessage:"Active until {expiryDate, date, long}"},renewalDate:{id:"organizationBillingInfo.renewalDate",defaultMessage:"Renews on {expiryDate, date, long}"},deactivateDate:{id:"organizationBillingInfo.deactivateDate",defaultMessage:"Deactivates on {expiryDate, date, long}"},seatsTitle:{id:"organizationBillingInfo.seatsTitle",defaultMessage:"Seats"},seatsInUse:{id:"organizationBillingInfo.seatsInUse",defaultMessage:"{numSeats} in use ({numSeatsPct})"},invoicesTitle:{id:"organizationBillingInfo.invoicesTitle",defaultMessage:"Invoices"},invoiceName:{id:"organizationBillingInfo.invoiceName",defaultMessage:"Invoice: {createdDate, date, long}"},defaultInvoiceName:{id:"organizationBillingInfo.defaultInvoiceName",defaultMessage:"Invoice"},paidInvoice:{id:"organizationBillingInfo.paidInvoice",defaultMessage:"Paid: {invoiceDate, date, long}"},upcomingInvoice:{id:"organizationBillingInfo.upcomingInvoice",defaultMessage:"Due: {invoiceDate, date, long}"},noInvoices:{id:"organizationBillingInfo.noInvoices",defaultMessage:"No invoices found"},manageSubscription:{id:"organizationBillingInfo.manageSubscription",defaultMessage:"Manage subscription"},cancelSubscriptionBtn:{id:"organizationBillingInfo.cancelSubscriptionBtn",defaultMessage:"Cancel subscription"},manageLicenseBtn:{id:"organizationBillingInfo.manageLicenseBtn",defaultMessage:"Manage license"},managePaymentMethod:{id:"organizationBillingInfo.managePaymentMethod",defaultMessage:"Payment method"},manageBillingSchedule:{id:"organizationBillingInfo.manageSchedule",defaultMessage:"Billing schedule"},stripeErrorWarning:{id:"organizationBillingInfo.stripeErrorWarning",defaultMessage:"Error loading account information"},teamsAutochargeMessage:{id:"organizationBillingInfo.teamsAutochargeMessage",defaultMessage:"Your additional seats will be included on your next invoice."},billingLearnMore:{id:"organizationBillingInfo.billingLearnMore",defaultMessage:"Learn more"}});function Ps(){return Te(),e.jsx(is,{})}export{Ps as default};
//# sourceMappingURL=ni6p88t8d525e1wd.js.map