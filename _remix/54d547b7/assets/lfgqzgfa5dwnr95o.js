const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/gap3ka1kk321jxc2.js","assets/j2za2a5bh01bf12l.js","assets/jwd9u48bpcglqn07.js","assets/root-k00fc8j4.css","assets/m2twlw9u4njn6zsf.js","assets/ol4rayecis5vwkrv.js","assets/conversation-small-cll5buey.css","assets/ijauqsk65ba42v28.js","assets/0nplc8csropx3b2z.js","assets/e1k1bicdxyg64hj7.js","assets/b0u6reko7ueifq6h.js"])))=>i.map(i=>d[i]);
import{a3 as E,ag as ae,r as C,t as e,bx as N,a8 as n,aU as L,ad as z,h as P,O as U,dg as S,ax as te,T as se,a as O,j as ie,a5 as ne,a6 as oe,aj as re,bD as $,bH as M,bE as k,d$ as ce,af as W,bn as V,P as de,e1 as le,a1 as me}from"./j2za2a5bh01bf12l.js";import{aw as ue,H as ge,ad as G,K as he,L as fe,O as xe,eo as B,dc as pe,ep as ve,eq as we,bG as _,ei as q,bx as K}from"./ol4rayecis5vwkrv.js";import{F as ye,H as be,f as je}from"./ijauqsk65ba42v28.js";import{a as A,G as f,U as h}from"./qaipf7yc1soqy0c2.js";import{p as Se,V as Ge,a as Ie,J as Ce,aY as Me,v as ke,_ as ze,P as Pe,b1 as Ae,az as Te,b2 as H,S as _e,b3 as Fe,r as De,as as Ee,O as Ne,am as Le}from"./jwd9u48bpcglqn07.js";import{d as Ue,T as Oe,w as $e}from"./0nplc8csropx3b2z.js";import{G as I}from"./elqvopl5dhtqjita.js";import{R as We}from"./b3yotiebc65uhkpn.js";import{B as J,D as o}from"./m2twlw9u4njn6zsf.js";import{c as Ve,d as Be}from"./mka7gt1s51b1ffkl.js";import{G as qe}from"./k4ml4s27ge59zl9m.js";import"./b0u6reko7ueifq6h.js";import"./e1k1bicdxyg64hj7.js";import"./dsfspetclj3qqxnn.js";import"./bdkmoklqtrhgpmvf.js";import"./e2glqi21qxv1r6wp.js";import"./c9g2xrlbo2th8itc.js";import"./k2xpo2yjymw2k5d7.js";import"./d5424sabn6rxc9qe.js";function Ke(a){return P({mutationFn:async({message:t,includeFrom:s})=>{await G.sendFeedbackEmail(a,t,s)}})}const He=({gizmo:a})=>{const t=ue(),s=A(f.GPTFeedbackEmail),i=()=>h.closeModal(f.GPTFeedbackEmail),r=E(),w=ae(),[c,x]=C.useState(""),[p,d]=C.useState(!0),u=Ke(a.gizmo.id),g=c.length===0;return e.jsx(N,{type:"success",title:r.formatMessage(j.title,{name:a.gizmo.display.name}),isOpen:s,onClose:i,size:"custom",showCloseButton:!0,className:"max-w-xl overflow-y-auto",hideSeparator:!0,children:e.jsx("div",{className:"flex flex-row",children:e.jsxs("div",{className:"-mt-4 flex flex-grow flex-col space-y-4",children:[e.jsx(ge,{className:"mb-1 w-full resize-none overflow-y-auto rounded-md bg-transparent focus:border-gray-200 focus:ring-gray-200 dark:focus:border-white dark:focus:ring-white",placeholder:`Write feedback about ${a.gizmo.display.name}...`,value:c,rows:4,onChange:l=>x(l.target.value)}),e.jsxs("div",{className:"flex flex-row items-center space-x-2 self-start",children:[e.jsx("input",{type:"checkbox",checked:p,onChange:l=>d(l.target.checked)}),t&&e.jsx("span",{className:"text-sm",children:e.jsx(n,{...j.includeFrom,values:{email:e.jsx("strong",{children:t.email})}})})]}),e.jsx(L,{color:"primary",disabled:g,onClick:async()=>{await u.mutateAsync({message:c,includeFrom:p}),w.success(r.formatMessage(j.successToast),{duration:3}),i()},children:e.jsx(n,{...j.send,values:{name:a.gizmo.author.display_name}})})]})})})},j=z({title:{id:"GizmoFeedbackEmailModal.title",defaultMessage:"Feedback about {name}"},send:{id:"GizmoFeedbackEmailModal.sendTo",defaultMessage:"Send To {name}"},successToast:{id:"GizmoFeedbackEmailModal.successToast",defaultMessage:"Feedback sent"},includeFrom:{id:"GizmoFeedbackEmailModal.includeFrom",defaultMessage:"Include my email address {email}"}});function Je(a){const t=O();return P({mutationFn:async({actionId:s,domain:i,settings:r})=>G.upsertUserActionSettings(s,i,r),onSuccess:()=>{t.invalidateQueries({queryKey:["gizmo","userActionSettings",{gizmoId:a}]})}})}function Qe(a){const t=O();return P({mutationFn:async({pluginId:s})=>{await ie.deletePluginUserSettings({pluginId:s})},onSuccess:()=>{t.invalidateQueries({queryKey:["gizmo","userActionSettings",{gizmoId:a}]})}})}const Xe=({gizmo:a})=>{const{data:t,isLoading:s}=ye(a.gizmo.id,!0),i=A(f.GPTPrivacySettings),r=()=>h.closeModal(f.GPTPrivacySettings),w=E(),[c,x]=C.useState("actions"),p=t!=null&&t.settings.some(d=>d.oauth_status!=null&&a.tools.some(u=>u.type===S.JIT_PLUGIN&&u.metadata?.action_id===d.action_id));return c==="connected_accounts"&&!p&&x("actions"),e.jsx(N,{title:w.formatMessage(v.title),isOpen:i,onClose:r,type:"success",size:"custom",className:"min-h-[50vh] max-w-3xl overflow-y-auto scroll-smooth",noPadding:!0,showCloseButton:!0,children:s?e.jsx(te,{}):e.jsxs(he,{className:"flex flex-row gap-6 p-4",orientation:"vertical",defaultValue:c,onValueChange:d=>{x(d)},children:[p&&e.jsxs(fe,{className:se("flex min-w-[180px] max-w-[200px] flex-shrink-0 flex-col gap-2"),children:[e.jsx(F,{value:"actions",message:v.actions}),p&&e.jsx(F,{value:"connected_accounts",message:v.connectedAccounts})]}),e.jsxs("div",{className:"flex-1 text-sm",children:[c==="actions"&&e.jsxs(D,{children:[e.jsx(n,{...v.allowedActionsDesc,values:{gizmoName:a.gizmo.display.name}}),t?.settings.map((d,u)=>{const g=a.tools?.find(l=>l.type===S.JIT_PLUGIN&&l.metadata?.action_id===d.action_id);return g&&e.jsx(Ye,{gizmoId:a.gizmo.id,actionSettings:d,actionTool:g},u)})]}),c==="connected_accounts"&&e.jsxs(D,{children:[e.jsx(n,{...v.connectedAccountsDesc,values:{gizmoName:a.gizmo.display.name}}),e.jsx("div",{children:t?.settings.map((d,u)=>{const g=a.tools?.find(l=>l.type===S.JIT_PLUGIN&&l.metadata?.action_id===d.action_id);return g&&d.oauth_status&&e.jsx(Ze,{gizmoId:a.gizmo.id,actionSettings:d,actionTool:g},u)})})]})]})]})})};function F({value:a,message:t}){return e.jsx(xe,{className:"flex rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-white dark:radix-state-active:bg-token-main-surface-tertiary md:radix-state-active:bg-token-main-surface-tertiary md:radix-state-active:text-token-text-primary",value:a,children:e.jsx("div",{className:"truncate",children:e.jsx(n,{...t})})})}function Ye({gizmoId:a,actionSettings:t,actionTool:s}){const i=Je(a),r=t.action_settings?.all,w=c=>{s.metadata?.action_id&&s.metadata?.domain&&i.mutateAsync({actionId:s.metadata.action_id,domain:s.metadata.domain,settings:{all:c}})};return e.jsx("div",{children:e.jsxs(Q,{className:"border-b border-black/10 dark:border-white/10",children:[e.jsxs("div",{className:"flex flex-row space-x-4",children:[e.jsx("div",{className:"font-semibold",children:s.metadata?.domain}),e.jsxs("a",{href:s.metadata?.privacy_policy_url,target:"_blank",rel:"noreferrer",className:"flex items-center gap-1 text-token-text-tertiary hover:cursor-pointer hover:text-token-text-secondary",children:[e.jsx(n,{...v.privacyPolicyLink}),e.jsx(Se,{className:"icon-md"})]})]}),e.jsxs("select",{value:r?"always_allow":"unset",onChange:c=>w(c.target.value),className:"rounded border-none bg-token-main-surface-primary text-sm",children:[e.jsx("option",{value:"always_allow",children:e.jsx(n,{...v.alwaysAllowDropdown})}),e.jsx("option",{value:"unset",children:e.jsx(n,{...v.askDropdown})})]})]})})}function Ze({gizmoId:a,actionSettings:t,actionTool:s}){const i=Qe(a),r=t.oauth_status==="valid";return e.jsxs(Q,{children:[e.jsx("div",{className:"font-semibold",children:s?.metadata?.domain}),e.jsx(L,{color:"secondary",size:"small",onClick:()=>{s.metadata?.action_id&&s.metadata?.domain&&(r?i.mutateAsync({pluginId:s.metadata?.action_id}):G.doOAuthRedirect(a,s.metadata?.action_id,s.metadata?.domain,window.location.href))},children:e.jsx(n,{...r?v.logout:v.login})})]})}const D=U.div`flex flex-col gap-6`,Q=U.div`flex flex-row justify-between py-3 items-center`,v=z({title:{defaultMessage:"GPT's privacy settings",id:"GizmoPrivacySettings.title"},actions:{defaultMessage:"Actions",id:"GizmoPrivacySettings.actions"},connectedAccounts:{defaultMessage:"Connected accounts",id:"GizmoPrivacySettings.connectedAccounts"},connectedAccountsDesc:{defaultMessage:"Manage which 3rd party accounts can be accessed by {gizmoName}.",id:"GizmoPrivacySettings.connectedAccountsDesc"},allowedActionsTitle:{defaultMessage:"GPT's privacy settings",id:"GizmoPrivacySettings.allowedActionsTitle"},allowedActionsDesc:{defaultMessage:"Select which 3rd party actions are allowed in conversations with {gizmoName}.",id:"GizmoPrivacySettings.allowedActionsDesc"},privacyPolicyLink:{defaultMessage:"Privacy policy",id:"GizmoPrivacySettings.privacyPolicyLink"},alwaysAllowDropdown:{defaultMessage:"Always allow",id:"GizmoPrivacySettings.alwaysAllowDropdown"},askDropdown:{defaultMessage:"Ask",id:"GizmoPrivacySettings.askDropdown"},login:{defaultMessage:"Log in",id:"GizmoPrivacySettings.login"},logout:{defaultMessage:"Log out",id:"GizmoPrivacySettings.logout"}}),Re=ne(()=>oe(()=>import("./gap3ka1kk321jxc2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])).then(a=>a.GizmoKeepInSidebarMenuItem));function ja({children:a,clientThreadId:t,gizmoResource:s,showReportModal:i,inMobileHeader:r}){return e.jsxs(e.Fragment,{children:[e.jsx(J,{contentAlign:r?"center":"start",size:"small",triggerButton:a,children:e.jsx(aa,{clientThreadId:t,gizmoResource:s,showReportModal:i})}),e.jsx(ea,{gizmoResource:s})]})}function ea({gizmoResource:a}){const t=A(f.GPTRemoveThirdParty),s=re(),i=B(a);return e.jsxs(e.Fragment,{children:[e.jsx(Ve,{gizmoId:a.gizmo.id,creatorId:a.gizmo.author.user_id}),e.jsx(Xe,{gizmo:a}),i&&e.jsx(He,{gizmo:a}),i&&e.jsx(qe,{gizmo:a}),e.jsx(We,{gpt:a,isOpen:t,onClose:()=>h.closeModal(f.GPTRemoveThirdParty),account:s})]})}function aa({clientThreadId:a,gizmoResource:t,showReportModal:s}){const i=pe(t),r=ve(t),w=be(t.gizmo.id),c=$(),x=we(t),p=t.gizmo.share_recipient===_.Marketplace||t.gizmo.share_recipient===_.Link,d=!x&&p,u=M("1825130190").value,g=M("3645668434").value,l=u&&!x&&B(t),X=c?.includes(k.GizmoSupportEmails)&&!x&&t.gizmo.author.will_receive_support_emails&&l,Y=ce(),T=Ue(a),Z=q(k.WorkspaceShareLinks),{isUnauthenticated:R}=W(),ee=T&&Z&&!R,y=V();return e.jsxs(e.Fragment,{children:[e.jsx(o.Item,{onClick:()=>{de.logNewChatButtonClicked({location:"Gizmo information dropdown",gizmo_id:t.gizmo.id}),K(y,`/g/${t.gizmo.short_url}`)},icon:Ge,children:e.jsx(n,{...m.newChat})}),e.jsx(o.Item,{onClick:()=>h.openModal(f.GPTDetails),icon:Ie,children:e.jsx(n,{...m.about})}),t.tools?.find(b=>b.type===S.JIT_PLUGIN)&&e.jsx(o.Item,{onClick:()=>h.openModal(f.GPTPrivacySettings),icon:Ce,children:e.jsx(n,{...m.privacySettings})}),i&&e.jsx(o.Item,{onClick:()=>{y(w)},icon:Me,children:e.jsx(n,{...m.customize})}),!i&&r&&g&&e.jsxs(e.Fragment,{children:[e.jsx(o.Item,{onClick:async()=>{y(`/g/${t.gizmo.id}/view`)},icon:ke,children:e.jsx(n,{id:"GizmoInformation.viewGizmoLabel",defaultMessage:"View configuration"})}),e.jsx(o.Item,{onClick:async()=>{const b=await G.copyGizmo({gizmoId:t.gizmo.id});b.gizmo.id&&y(`/gpts/editor/${b.gizmo.id}`)},icon:ze,children:e.jsx(n,{id:"GizmoInformation.copyGizmoLabel",defaultMessage:"Duplicate GPT"})})]}),e.jsx(Re,{gizmoResource:t}),e.jsx(Be,{gizmoResource:t}),X&&e.jsx(o.Item,{onClick:()=>h.openModal(f.GPTFeedbackEmail),icon:Pe,children:e.jsx(n,{...m.feedbackEmail})}),l&&e.jsx(o.Item,{onClick:()=>h.openModal(f.GPTReview),icon:Ae,children:e.jsx(n,{...m.reviewGPT})}),d&&e.jsx(o.Item,{onClick:s,icon:Te,children:e.jsx(n,{...m.report})}),ee&&e.jsx(o.Item,{onClick:()=>h.openSharingModal(T),icon:H,children:e.jsx(n,{...m.shareChat})}),Y&&e.jsxs(e.Fragment,{children:[e.jsx(o.Separator,{}),e.jsx(o.Item,{color:"danger",onClick:()=>h.openModal(f.GPTRemoveThirdParty),icon:_e,children:e.jsx(n,{defaultMessage:"Remove GPT from workspace",id:"GizmoInformation.removeGPT"})})]}),c?.includes("debug")&&e.jsxs(e.Fragment,{children:[e.jsx(o.Separator,{}),e.jsx(o.Item,{onClick:()=>{y(je(t))},children:"(Internal) See share page"})]})]})}const ta=({clientThreadId:a})=>{const s=$()?.includes("debug"),i=Oe.getServerThreadId(a),r=q(k.WorkspaceShareLinks),{isUnauthenticated:w}=W(),c=r&&i&&!w,x=le.useStore(),{value:p}=M("3653083604"),{value:d}=me("2851018874"),u=p||d&&window.documentPictureInPicture,g=$e(a),l=V();return e.jsxs(e.Fragment,{children:[c&&e.jsx(o.Item,{onClick:()=>h.openSharingModal(i,"History Item Menu"),icon:H,"data-testid":"share-chat-menu-item",children:e.jsx(n,{...m.shareChat})}),u&&e.jsx(o.Item,{onClick:()=>{x.setThreadId(a,!0),g&&K(l)},icon:Fe,children:e.jsx(n,{...m.openInCompanionWindow})}),e.jsx(o.Item,{disabled:!i,onClick:()=>{setTimeout(()=>{i&&I.publish({kind:"editTitle",serverThreadId:i})},100)},icon:De,children:e.jsx(n,{...m.renameChat})}),e.jsx(o.Item,{disabled:!i,onClick:()=>{i&&I.publish({kind:"archiveChat",serverThreadId:i})},icon:Ee,children:e.jsx(n,{...m.archiveChat})}),e.jsx(o.Item,{color:"danger",disabled:!i,onClick:()=>{i&&I.publish({kind:"deleteChat",serverThreadId:i})},icon:Ne,"data-testid":"delete-chat-menu-item",children:e.jsx(n,{...m.deleteChat})}),s&&e.jsxs(e.Fragment,{children:[e.jsx(o.Separator,{}),e.jsx(o.Item,{onClick:()=>h.toggleActiveSidebar("debug"),icon:Le,children:e.jsx(n,{...m.debugChat})})]})]})},Sa=({clientThreadId:a,children:t,onOpenChange:s})=>e.jsx(J,{onOpenChange:s,side:"bottom",contentAlign:"start",triggerButton:t,size:"auto",children:e.jsx(ta,{clientThreadId:a})}),m=z({newChat:{defaultMessage:"New chat",id:"GizmoInformation.newChat"},about:{defaultMessage:"About",id:"GizmoInformation.about"},privacySettings:{defaultMessage:"Privacy settings",id:"GizmoInformation.privacySettings"},viewDetails:{defaultMessage:"View details",id:"GizmoInformation.viewDetails"},share:{defaultMessage:"Share",id:"GizmoInformation.share"},favorite:{defaultMessage:"Favorite",id:"GizmoInformation.favorite"},customize:{defaultMessage:"Edit GPT",id:"GizmoInformation.customize"},feedbackEmail:{defaultMessage:"Send feedback",id:"GizmoInformation.feedbackEmail"},reviewGPT:{defaultMessage:"Review GPT",id:"GizmoInformation.reviewGPT"},report:{defaultMessage:"Report",id:"GizmoInformation.report"},privacy:{defaultMessage:"Privacy",id:"GizmoInformation.privacy"},deleteChat:{defaultMessage:"Delete",id:"GizmoInformation.deleteChat.0"},debugChat:{defaultMessage:"(Internal) Debug",id:"GizmoInformation.debugChat"},renameChat:{defaultMessage:"Rename",id:"GizmoInformation.renameChat"},archiveChat:{defaultMessage:"Archive",id:"GizmoInformation.archiveChat.0"},shareChat:{defaultMessage:"Share",id:"GizmoInformation.shareChat"},openInCompanionWindow:{defaultMessage:"Open in Companion Window",id:"GizmoInformation.openInCompanionWindow"},shareChatLong:{defaultMessage:"Share chat",id:"GizmoInformation.shareChatLong"}});export{Sa as GizmoConversationOptionsDropdown,ja as GizmoInformationDropdown,aa as GizmoInformationDropdownItems};
//# sourceMappingURL=lfgqzgfa5dwnr95o.js.map