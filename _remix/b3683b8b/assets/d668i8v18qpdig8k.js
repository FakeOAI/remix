const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ex8di7944k4c7cf4.js","assets/chhpo5f7h1mkv8bj.js","assets/k976jk34eufnjb9r.js","assets/root-kbckft69.css","assets/cfxa008xhk1w4hnw.js","assets/conversation-small-ile61fj8.css"])))=>i.map(i=>d[i]);
import{G as F,H as B,r as I,m as e,c9 as q,aS as n,aY as K,F as E,w as N,aL as $,c_ as G,c5 as te,aD as se,t as D,L as ie,aH as ne,aI as oe,eR as H,Z as re,bf as J,u as T,b2 as _,ge as ce,en as de,b0 as Q,a3 as X,br as o,P as le,y as me,g3 as ue,aR as ge,e0 as he}from"./chhpo5f7h1mkv8bj.js";import{b5 as xe,k as L,l as x,bg as fe,cC as C,U as h,e6 as pe,cU as ve,cV as we,cW as ye,e7 as Y,e8 as je,e9 as Se,ea as be,eb as Ge,ec as Ie,ax as O,dI as Z,am as R,ah as Ce,ed as A}from"./cfxa008xhk1w4hnw.js";import{N as ke,K as Me,c as ze,y as Pe,aV as Ae,j as Te,ag as _e,F as Fe,a$ as Ee,ai as Ne,b0 as ee,b as De,b1 as Le,e as Ue,b2 as Oe,E as We,b3 as Ve}from"./k976jk34eufnjb9r.js";import{R as Be}from"./5jkiqgrqq3pha8xu.js";import{c as qe,d as Ke}from"./n6t0w7c7wy4e3e5m.js";import"./e4b5lln92s9zcaav.js";import"./fo76ywp66oc7essj.js";function $e(t){return N({mutationFn:async({message:a,includeFrom:s})=>{await C.sendFeedbackEmail(t,a,s)}})}const He=({gizmo:t})=>{const a=xe(),s=L(x.GPTFeedbackEmail),r=()=>h.closeModal(x.GPTFeedbackEmail),i=F(),w=B(),[c,f]=I.useState(""),[p,d]=I.useState(!0),u=$e(t.gizmo.id),g=c.length===0;return e.jsx(q,{type:"success",title:i.formatMessage(b.title,{name:t.gizmo.display.name}),isOpen:s,onClose:r,size:"custom",showCloseButton:!0,className:"max-w-xl overflow-y-auto",hideSeparator:!0,children:e.jsx("div",{className:"flex flex-row",children:e.jsxs("div",{className:"-mt-4 flex flex-grow flex-col space-y-4",children:[e.jsx(fe,{className:"mb-1 w-full resize-none overflow-y-auto rounded-md bg-transparent focus:border-gray-200 focus:ring-gray-200 dark:focus:border-white dark:focus:ring-white",placeholder:`Write feedback about ${t.gizmo.display.name}...`,value:c,rows:4,onChange:l=>f(l.target.value)}),e.jsxs("div",{className:"flex flex-row items-center space-x-2 self-start",children:[e.jsx("input",{type:"checkbox",checked:p,onChange:l=>d(l.target.checked)}),a&&e.jsx("span",{className:"text-sm",children:e.jsx(n,{...b.includeFrom,values:{email:e.jsx("strong",{children:a.email})}})})]}),e.jsx(K,{color:"primary",disabled:g,onClick:async()=>{await u.mutateAsync({message:c,includeFrom:p}),w.success(i.formatMessage(b.successToast),{duration:3}),r()},children:e.jsx(n,{...b.send,values:{name:t.gizmo.author.display_name}})})]})})})},b=E({title:{id:"GizmoFeedbackEmailModal.title",defaultMessage:"Feedback about {name}"},send:{id:"GizmoFeedbackEmailModal.sendTo",defaultMessage:"Send To {name}"},successToast:{id:"GizmoFeedbackEmailModal.successToast",defaultMessage:"Feedback sent"},includeFrom:{id:"GizmoFeedbackEmailModal.includeFrom",defaultMessage:"Include my email address {email}"}});function Je(t){const a=D();return N({mutationFn:async({actionId:s,domain:r,settings:i})=>C.upsertUserActionSettings(s,r,i),onSuccess:()=>{a.invalidateQueries({queryKey:["gizmo","userActionSettings",{gizmoId:t}]})}})}function Qe(t){const a=D();return N({mutationFn:async({pluginId:s})=>{await ie.deletePluginUserSettings({pluginId:s})},onSuccess:()=>{a.invalidateQueries({queryKey:["gizmo","userActionSettings",{gizmoId:t}]})}})}const Xe=({gizmo:t})=>{const{data:a,isLoading:s}=pe(t.gizmo.id,!0),r=L(x.GPTPrivacySettings),i=()=>h.closeModal(x.GPTPrivacySettings),w=F(),[c,f]=I.useState("actions"),p=a!=null&&a.settings.some(d=>d.oauth_status!=null&&t.tools.some(u=>u.type===G.JIT_PLUGIN&&u.metadata?.action_id===d.action_id));return c==="connected_accounts"&&!p&&f("actions"),e.jsx(q,{title:w.formatMessage(v.title),isOpen:r,onClose:i,type:"success",size:"custom",className:"min-h-[50vh] max-w-3xl overflow-y-auto scroll-smooth",noPadding:!0,showCloseButton:!0,children:s?e.jsx(te,{}):e.jsxs(ve,{className:"flex flex-row gap-6 p-4",orientation:"vertical",defaultValue:c,onValueChange:d=>{f(d)},children:[p&&e.jsxs(we,{className:se("flex min-w-[180px] max-w-[200px] flex-shrink-0 flex-col gap-2"),children:[e.jsx(W,{value:"actions",message:v.actions}),p&&e.jsx(W,{value:"connected_accounts",message:v.connectedAccounts})]}),e.jsxs("div",{className:"flex-1 text-sm",children:[c==="actions"&&e.jsxs(V,{children:[e.jsx(n,{...v.allowedActionsDesc,values:{gizmoName:t.gizmo.display.name}}),a?.settings.map((d,u)=>{const g=t.tools?.find(l=>l.type===G.JIT_PLUGIN&&l.metadata?.action_id===d.action_id);return g&&e.jsx(Ye,{gizmoId:t.gizmo.id,actionSettings:d,actionTool:g},u)})]}),c==="connected_accounts"&&e.jsxs(V,{children:[e.jsx(n,{...v.connectedAccountsDesc,values:{gizmoName:t.gizmo.display.name}}),e.jsx("div",{children:a?.settings.map((d,u)=>{const g=t.tools?.find(l=>l.type===G.JIT_PLUGIN&&l.metadata?.action_id===d.action_id);return g&&d.oauth_status&&e.jsx(Ze,{gizmoId:t.gizmo.id,actionSettings:d,actionTool:g},u)})})]})]})]})})};function W({value:t,message:a}){return e.jsx(ye,{className:"flex rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-white dark:radix-state-active:bg-token-main-surface-tertiary md:radix-state-active:bg-token-main-surface-tertiary md:radix-state-active:text-token-text-primary",value:t,children:e.jsx("div",{className:"truncate",children:e.jsx(n,{...a})})})}function Ye({gizmoId:t,actionSettings:a,actionTool:s}){const r=Je(t),i=a.action_settings?.all,w=c=>{s.metadata?.action_id&&s.metadata?.domain&&r.mutateAsync({actionId:s.metadata.action_id,domain:s.metadata.domain,settings:{all:c}})};return e.jsx("div",{children:e.jsxs(ae,{className:"border-b border-black/10 dark:border-white/10",children:[e.jsxs("div",{className:"flex flex-row space-x-4",children:[e.jsx("div",{className:"font-semibold",children:s.metadata?.domain}),e.jsxs("a",{href:s.metadata?.privacy_policy_url,target:"_blank",rel:"noreferrer",className:"flex items-center gap-1 text-token-text-tertiary hover:cursor-pointer hover:text-token-text-secondary",children:[e.jsx(n,{...v.privacyPolicyLink}),e.jsx(ke,{className:"icon-md"})]})]}),e.jsxs("select",{value:i?"always_allow":"unset",onChange:c=>w(c.target.value),className:"rounded border-none bg-token-main-surface-primary text-sm",children:[e.jsx("option",{value:"always_allow",children:e.jsx(n,{...v.alwaysAllowDropdown})}),e.jsx("option",{value:"unset",children:e.jsx(n,{...v.askDropdown})})]})]})})}function Ze({gizmoId:t,actionSettings:a,actionTool:s}){const r=Qe(t),i=a.oauth_status==="valid";return e.jsxs(ae,{children:[e.jsx("div",{className:"font-semibold",children:s?.metadata?.domain}),e.jsx(K,{color:"secondary",size:"small",onClick:()=>{s.metadata?.action_id&&s.metadata?.domain&&(i?r.mutateAsync({pluginId:s.metadata?.action_id}):C.doOAuthRedirect(t,s.metadata?.action_id,s.metadata?.domain,window.location.href))},children:e.jsx(n,{...i?v.logout:v.login})})]})}const V=$.div`flex flex-col gap-6`,ae=$.div`flex flex-row justify-between py-3 items-center`,v=E({title:{defaultMessage:"GPT's privacy settings",id:"GizmoPrivacySettings.title"},actions:{defaultMessage:"Actions",id:"GizmoPrivacySettings.actions"},connectedAccounts:{defaultMessage:"Connected accounts",id:"GizmoPrivacySettings.connectedAccounts"},connectedAccountsDesc:{defaultMessage:"Manage which 3rd party accounts can be accessed by {gizmoName}.",id:"GizmoPrivacySettings.connectedAccountsDesc"},allowedActionsTitle:{defaultMessage:"GPT's privacy settings",id:"GizmoPrivacySettings.allowedActionsTitle"},allowedActionsDesc:{defaultMessage:"Select which 3rd party actions are allowed in conversations with {gizmoName}.",id:"GizmoPrivacySettings.allowedActionsDesc"},privacyPolicyLink:{defaultMessage:"Privacy policy",id:"GizmoPrivacySettings.privacyPolicyLink"},alwaysAllowDropdown:{defaultMessage:"Always allow",id:"GizmoPrivacySettings.alwaysAllowDropdown"},askDropdown:{defaultMessage:"Ask",id:"GizmoPrivacySettings.askDropdown"},login:{defaultMessage:"Log in",id:"GizmoPrivacySettings.login"},logout:{defaultMessage:"Log out",id:"GizmoPrivacySettings.logout"}}),Re=ne(()=>oe(()=>import("./ex8di7944k4c7cf4.js"),__vite__mapDeps([0,1,2,3,4,5])).then(t=>t.GizmoKeepInSidebarMenuItem));function la({children:t,clientThreadId:a,gizmoResource:s,showReportModal:r,inMobileHeader:i}){return e.jsxs(e.Fragment,{children:[e.jsx(H,{contentAlign:i?"center":"start",size:"small",triggerButton:t,children:e.jsx(aa,{clientThreadId:a,gizmoResource:s,showReportModal:r})}),e.jsx(ea,{gizmoResource:s})]})}function ea({gizmoResource:t}){const a=L(x.GPTRemoveThirdParty),s=re(),r=Y(t);return e.jsxs(e.Fragment,{children:[e.jsx(qe,{gizmoId:t.gizmo.id,creatorId:t.gizmo.author.user_id}),e.jsx(Xe,{gizmo:t}),r&&e.jsx(He,{gizmo:t}),r&&e.jsx(je,{gizmo:t}),e.jsx(Be,{gpt:t,isOpen:a,onClose:()=>h.closeModal(x.GPTRemoveThirdParty),account:s})]})}function aa({clientThreadId:t,gizmoResource:a,showReportModal:s}){const r=Se(a),i=be(a),w=Ge(a.gizmo.id),c=J(),f=Ie(a),p=a.gizmo.share_recipient===O.Marketplace||a.gizmo.share_recipient===O.Link,d=!f&&p,u=T("1825130190").value,g=T("3645668434").value,l=u&&!f&&Y(a),k=c?.includes(_.GizmoSupportEmails)&&!f&&a.gizmo.author.will_receive_support_emails&&l,M=ce(),j=de(t),z=Z(_.WorkspaceShareLinks),{isUnauthenticated:P}=Q(),U=j&&z&&!P,y=X();return e.jsxs(e.Fragment,{children:[e.jsx(o.Item,{onClick:()=>{le.logNewChatButtonClicked({location:"Gizmo information dropdown",gizmo_id:a.gizmo.id}),R(y,`/g/${a.gizmo.short_url}`)},icon:Me,children:e.jsx(n,{...m.newChat})}),e.jsx(o.Item,{onClick:()=>h.openModal(x.GPTDetails),icon:ze,children:e.jsx(n,{...m.about})}),a.tools?.find(S=>S.type===G.JIT_PLUGIN)&&e.jsx(o.Item,{onClick:()=>h.openModal(x.GPTPrivacySettings),icon:Pe,children:e.jsx(n,{...m.privacySettings})}),r&&e.jsx(o.Item,{onClick:()=>{y(w)},icon:Ae,children:e.jsx(n,{...m.customize})}),!r&&i&&g&&e.jsxs(e.Fragment,{children:[e.jsx(o.Item,{onClick:async()=>{y(`/g/${a.gizmo.id}/view`)},icon:Te,children:e.jsx(n,{id:"GizmoInformation.viewGizmoLabel",defaultMessage:"View configuration"})}),e.jsx(o.Item,{onClick:async()=>{const S=await C.copyGizmo({gizmoId:a.gizmo.id});S.gizmo.id&&y(`/gpts/editor/${S.gizmo.id}`)},icon:_e,children:e.jsx(n,{id:"GizmoInformation.copyGizmoLabel",defaultMessage:"Duplicate GPT"})})]}),e.jsx(Re,{gizmoResource:a}),e.jsx(Ke,{gizmoResource:a}),k&&e.jsx(o.Item,{onClick:()=>h.openModal(x.GPTFeedbackEmail),icon:Fe,children:e.jsx(n,{...m.feedbackEmail})}),l&&e.jsx(o.Item,{onClick:()=>h.openModal(x.GPTReview),icon:Ee,children:e.jsx(n,{...m.reviewGPT})}),d&&e.jsx(o.Item,{onClick:s,icon:Ne,children:e.jsx(n,{...m.report})}),U&&e.jsx(o.Item,{onClick:()=>h.openSharingModal(j),icon:ee,children:e.jsx(n,{...m.shareChat})}),M&&e.jsxs(e.Fragment,{children:[e.jsx(o.Separator,{}),e.jsx(o.Item,{color:"danger",onClick:()=>h.openModal(x.GPTRemoveThirdParty),icon:De,children:e.jsx(n,{defaultMessage:"Remove GPT from workspace",id:"GizmoInformation.removeGPT"})})]}),c?.includes("debug")&&e.jsxs(e.Fragment,{children:[e.jsx(o.Separator,{}),e.jsx(o.Item,{onClick:()=>{y(Ce(a))},children:"(Internal) See share page"})]})]})}const ta=({conversation:t})=>{const a=t.id,r=J()?.includes("debug"),i=me.getServerThreadId(a),w=Z(_.WorkspaceShareLinks),{isUnauthenticated:c}=Q(),f=w&&i&&!c,p=ue.useStore(),{value:d}=T("3653083604"),{value:u}=ge("2851018874"),g=d||u&&window.documentPictureInPicture,l=he(a),k=X(),M=!1,j=B(),z=F(),P=D();return t.gizmo_id,I.useCallback(async(U,y)=>{},[P,j,z]),e.jsxs(e.Fragment,{children:[f&&e.jsx(o.Item,{onClick:()=>h.openSharingModal(i,"History Item Menu"),icon:ee,"data-testid":"share-chat-menu-item",children:e.jsx(n,{...m.shareChat})}),g&&e.jsx(o.Item,{onClick:()=>{p.setThreadId(a,!0),l&&R(k)},icon:Le,children:e.jsx(n,{...m.openInCompanionWindow})}),M,e.jsx(o.Item,{disabled:!i,onClick:()=>{setTimeout(()=>{i&&A.publish({kind:"editTitle",serverThreadId:i})},100)},icon:Ue,children:e.jsx(n,{...m.renameChat})}),e.jsx(o.Item,{disabled:!i,onClick:()=>{i&&A.publish({kind:"archiveChat",serverThreadId:i})},icon:Oe,children:e.jsx(n,{...m.archiveChat})}),e.jsx(o.Item,{color:"danger",disabled:!i,onClick:()=>{i&&A.publish({kind:"deleteChat",serverThreadId:i})},icon:We,"data-testid":"delete-chat-menu-item",children:e.jsx(n,{...m.deleteChat})}),r&&e.jsxs(e.Fragment,{children:[e.jsx(o.Separator,{}),e.jsx(o.Item,{onClick:()=>h.toggleActiveSidebar("debug"),icon:Ve,children:e.jsx(n,{...m.debugChat})})]})]})},ma=({conversation:t,children:a,onOpenChange:s})=>e.jsx(H,{onOpenChange:s,side:"bottom",contentAlign:"start",triggerButton:a,size:"auto",children:e.jsx(ta,{conversation:t})}),m=E({newChat:{defaultMessage:"New chat",id:"GizmoInformation.newChat"},about:{defaultMessage:"About",id:"GizmoInformation.about"},privacySettings:{defaultMessage:"Privacy settings",id:"GizmoInformation.privacySettings"},viewDetails:{defaultMessage:"View details",id:"GizmoInformation.viewDetails"},share:{defaultMessage:"Share",id:"GizmoInformation.share"},favorite:{defaultMessage:"Favorite",id:"GizmoInformation.favorite"},customize:{defaultMessage:"Edit GPT",id:"GizmoInformation.customize"},feedbackEmail:{defaultMessage:"Send feedback",id:"GizmoInformation.feedbackEmail"},reviewGPT:{defaultMessage:"Review GPT",id:"GizmoInformation.reviewGPT"},report:{defaultMessage:"Report",id:"GizmoInformation.report"},privacy:{defaultMessage:"Privacy",id:"GizmoInformation.privacy"},deleteChat:{defaultMessage:"Delete",id:"GizmoInformation.deleteChat.0"},debugChat:{defaultMessage:"(Internal) Debug",id:"GizmoInformation.debugChat"},renameChat:{defaultMessage:"Rename",id:"GizmoInformation.renameChat"},archiveChat:{defaultMessage:"Archive",id:"GizmoInformation.archiveChat.0"},shareChat:{defaultMessage:"Share",id:"GizmoInformation.shareChat"},openInCompanionWindow:{defaultMessage:"Open in companion window",id:"GizmoInformation.openInCompanionWindow1"},shareChatLong:{defaultMessage:"Share chat",id:"GizmoInformation.shareChatLong"}});export{ma as GizmoConversationOptionsDropdown,la as GizmoInformationDropdown,aa as GizmoInformationDropdownItems};
//# sourceMappingURL=d668i8v18qpdig8k.js.map