const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/b6qamf5dvxjpcgya.js","assets/mes9pjafgq4ysvv4.js","assets/nyt86llltwms5z71.js","assets/root-ef8koap5.css","assets/mndhq8a1eqdgrqik.js","assets/jzd4qawnakryydim.js","assets/conversation-small-eplmind9.css","assets/cn2p9twdfq0duu5j.js","assets/fj2c5r0zs89uwg6u.js","assets/j9tg0d84s6tl6c56.js"])))=>i.map(i=>d[i]);
import{H as L,r as k,j as e,I as U,K as n,bt as $,a7 as ae,N as C,F as P,O,dj as S,a_ as te,c as se,E as B,R as ie,cm as ne,c2 as oe,as as re,X as ce,aM as V,aQ as F,aN as z,e5 as de,B as q,ax as le,P as me}from"./mes9pjafgq4ysvv4.js";import{b5 as ue,bh as T,b4 as p,al as ge,aK as I,Y as f,ag as he,ah as xe,ai as fe,dO as K,bC as pe,dP as ve,dQ as ye,bx as N,cz as Q,bo as je}from"./jzd4qawnakryydim.js";import{v as we,j as be}from"./cn2p9twdfq0duu5j.js";import{F as Ge,C as Se,b as Ie,S as Me,aX as ke,i as ze,T as Ce,s as Pe,bg as Te,ae as Ae,a5 as W,a as _e,$ as Fe,ag as Ne,q as Ee,aA as De}from"./nyt86llltwms5z71.js";import{c as Le,T as Ue}from"./fj2c5r0zs89uwg6u.js";import{G as M}from"./ehoky55srb62h2vp.js";import{d as $e}from"./h77srsuukerxrvpn.js";import{R as Oe}from"./erer39gj0tg54gik.js";import{B as H,D as r}from"./mndhq8a1eqdgrqik.js";import{b as Be,c as Ve}from"./ngfavt2dabdph5li.js";import{G as qe}from"./jj87na4mng7sxy1o.js";import"./j9tg0d84s6tl6c56.js";import"./ilj7dtsfpg8vmkgt.js";import"./gr05bh3egyhke9k3.js";import"./bdsczgpvigaeuqo7.js";import"./g4fk2wbso1ts6gky.js";function Ke(t){return P({mutationFn:async({message:a,includeFrom:s})=>{await I.sendFeedbackEmail(t,a,s)}})}const Qe=({gizmo:t})=>{const a=ue(),s=T(p.GPTFeedbackEmail),i=()=>f.closeModal(p.GPTFeedbackEmail),c=L(),[h,m]=k.useState(""),[d,g]=k.useState(!0),o=Ke(t.gizmo.id),u=h.length===0;return e.jsx(U,{type:"success",title:c.formatMessage(G.title,{name:t.gizmo.display.name}),isOpen:s,onClose:i,size:"custom",showCloseButton:!0,className:"max-w-xl overflow-y-auto",hideSeparator:!0,children:e.jsx("div",{className:"flex flex-row",children:e.jsxs("div",{className:"-mt-4 flex flex-grow flex-col space-y-4",children:[e.jsx(ge,{className:"mb-1 w-full resize-none overflow-y-auto rounded-md bg-transparent focus:border-gray-200 focus:ring-gray-200 dark:focus:border-white dark:focus:ring-white",placeholder:`Write feedback about ${t.gizmo.display.name}...`,value:h,rows:4,onChange:l=>m(l.target.value)}),e.jsxs("div",{className:"flex flex-row items-center space-x-2 self-start",children:[e.jsx("input",{type:"checkbox",checked:d,onChange:l=>g(l.target.checked)}),a&&e.jsx("span",{className:"text-sm",children:e.jsx(n,{...G.includeFrom,values:{email:e.jsx("strong",{children:a.email})}})})]}),e.jsx($,{color:"primary",disabled:u,onClick:async()=>{await o.mutateAsync({message:h,includeFrom:d}),ae.success(c.formatMessage(G.successToast),{duration:3}),i()},children:e.jsx(n,{...G.send,values:{name:t.gizmo.author.display_name}})})]})})})},G=C({title:{id:"GizmoFeedbackEmailModal.title",defaultMessage:"Feedback about {name}"},send:{id:"GizmoFeedbackEmailModal.sendTo",defaultMessage:"Send To {name}"},successToast:{id:"GizmoFeedbackEmailModal.successToast",defaultMessage:"Feedback sent"},includeFrom:{id:"GizmoFeedbackEmailModal.includeFrom",defaultMessage:"Include my email address {email}"}});function We(t){const a=B();return P({mutationFn:async({actionId:s,domain:i,settings:c})=>I.upsertUserActionSettings(s,i,c),onSuccess:()=>{a.invalidateQueries({queryKey:["gizmo","userActionSettings",{gizmoId:t}]})}})}function He(t){const a=B();return P({mutationFn:async({pluginId:s})=>{await ie.deletePluginUserSettings({pluginId:s})},onSuccess:()=>{a.invalidateQueries({queryKey:["gizmo","userActionSettings",{gizmoId:t}]})}})}const Je=({gizmo:t})=>{const{data:a,isLoading:s}=we(t.gizmo.id,!0),i=T(p.GPTPrivacySettings),c=()=>f.closeModal(p.GPTPrivacySettings),h=L(),[m,d]=k.useState("actions"),g=a!=null&&a.settings.some(o=>o.oauth_status!=null&&t.tools.some(u=>{var l;return u.type===S.JIT_PLUGIN&&((l=u.metadata)==null?void 0:l.action_id)===o.action_id}));return m==="connected_accounts"&&!g&&d("actions"),e.jsx(U,{title:h.formatMessage(v.title),isOpen:i,onClose:c,type:"success",size:"custom",className:"min-h-[50vh] max-w-3xl overflow-y-auto scroll-smooth",noPadding:!0,showCloseButton:!0,children:s?e.jsx(te,{}):e.jsxs(he,{className:"flex flex-row gap-6 p-4",orientation:"vertical",defaultValue:m,onValueChange:o=>{d(o)},children:[g&&e.jsxs(xe,{className:se("flex min-w-[180px] max-w-[200px] flex-shrink-0 flex-col gap-2"),children:[e.jsx(E,{value:"actions",message:v.actions}),g&&e.jsx(E,{value:"connected_accounts",message:v.connectedAccounts})]}),e.jsxs("div",{className:"flex-1 text-sm",children:[m==="actions"&&e.jsxs(D,{children:[e.jsx(n,{...v.allowedActionsDesc,values:{gizmoName:t.gizmo.display.name}}),a==null?void 0:a.settings.map((o,u)=>{var j;const l=(j=t.tools)==null?void 0:j.find(y=>{var w;return y.type===S.JIT_PLUGIN&&((w=y.metadata)==null?void 0:w.action_id)===o.action_id});return l&&e.jsx(Xe,{gizmoId:t.gizmo.id,actionSettings:o,actionTool:l},u)})]}),m==="connected_accounts"&&e.jsxs(D,{children:[e.jsx(n,{...v.connectedAccountsDesc,values:{gizmoName:t.gizmo.display.name}}),e.jsx("div",{children:a==null?void 0:a.settings.map((o,u)=>{var j;const l=(j=t.tools)==null?void 0:j.find(y=>{var w;return y.type===S.JIT_PLUGIN&&((w=y.metadata)==null?void 0:w.action_id)===o.action_id});return l&&o.oauth_status&&e.jsx(Ye,{gizmoId:t.gizmo.id,actionSettings:o,actionTool:l},u)})})]})]})]})})};function E({value:t,message:a}){return e.jsx(fe,{className:"flex rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-white dark:radix-state-active:bg-token-main-surface-tertiary md:radix-state-active:bg-token-main-surface-tertiary md:radix-state-active:text-token-text-primary",value:t,children:e.jsx("div",{className:"truncate",children:e.jsx(n,{...a})})})}function Xe({gizmoId:t,actionSettings:a,actionTool:s}){var m,d,g;const i=We(t),c=(m=a.action_settings)==null?void 0:m.all,h=o=>{var u,l;(u=s.metadata)!=null&&u.action_id&&((l=s.metadata)!=null&&l.domain)&&i.mutateAsync({actionId:s.metadata.action_id,domain:s.metadata.domain,settings:{all:o}})};return e.jsx("div",{children:e.jsxs(J,{className:"border-b border-black/10 dark:border-white/10",children:[e.jsxs("div",{className:"flex flex-row space-x-4",children:[e.jsx("div",{className:"font-semibold",children:(d=s.metadata)==null?void 0:d.domain}),e.jsxs("a",{href:(g=s.metadata)==null?void 0:g.privacy_policy_url,target:"_blank",rel:"noreferrer",className:"flex items-center gap-1 text-token-text-tertiary hover:cursor-pointer hover:text-token-text-secondary",children:[e.jsx(n,{...v.privacyPolicyLink}),e.jsx(Ge,{className:"icon-md"})]})]}),e.jsxs("select",{value:c?"always_allow":"unset",onChange:o=>h(o.target.value),className:"rounded border-none bg-token-main-surface-primary text-sm",children:[e.jsx("option",{value:"always_allow",children:e.jsx(n,{...v.alwaysAllowDropdown})}),e.jsx("option",{value:"unset",children:e.jsx(n,{...v.askDropdown})})]})]})})}function Ye({gizmoId:t,actionSettings:a,actionTool:s}){var h;const i=He(t),c=a.oauth_status==="valid";return e.jsxs(J,{children:[e.jsx("div",{className:"font-semibold",children:(h=s==null?void 0:s.metadata)==null?void 0:h.domain}),e.jsx($,{color:"secondary",size:"small",onClick:()=>{var m,d,g,o,u;(m=s.metadata)!=null&&m.action_id&&((d=s.metadata)!=null&&d.domain)&&(c?i.mutateAsync({pluginId:(g=s.metadata)==null?void 0:g.action_id}):I.doOAuthRedirect(t,(o=s.metadata)==null?void 0:o.action_id,(u=s.metadata)==null?void 0:u.domain,window.location.href))},children:e.jsx(n,{...c?v.logout:v.login})})]})}const D=O.div`flex flex-col gap-6`,J=O.div`flex flex-row justify-between py-3 items-center`,v=C({title:{defaultMessage:"GPT's privacy settings",id:"GizmoPrivacySettings.title"},actions:{defaultMessage:"Actions",id:"GizmoPrivacySettings.actions"},connectedAccounts:{defaultMessage:"Connected accounts",id:"GizmoPrivacySettings.connectedAccounts"},connectedAccountsDesc:{defaultMessage:"Manage which 3rd party accounts can be accessed by {gizmoName}.",id:"GizmoPrivacySettings.connectedAccountsDesc"},allowedActionsTitle:{defaultMessage:"GPT's privacy settings",id:"GizmoPrivacySettings.allowedActionsTitle"},allowedActionsDesc:{defaultMessage:"Select which 3rd party actions are allowed in conversations with {gizmoName}.",id:"GizmoPrivacySettings.allowedActionsDesc"},privacyPolicyLink:{defaultMessage:"Privacy policy",id:"GizmoPrivacySettings.privacyPolicyLink"},alwaysAllowDropdown:{defaultMessage:"Always allow",id:"GizmoPrivacySettings.alwaysAllowDropdown"},askDropdown:{defaultMessage:"Ask",id:"GizmoPrivacySettings.askDropdown"},login:{defaultMessage:"Log in",id:"GizmoPrivacySettings.login"},logout:{defaultMessage:"Log out",id:"GizmoPrivacySettings.logout"}}),Ze=ne(()=>oe(()=>import("./b6qamf5dvxjpcgya.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(t=>t.GizmoKeepInSidebarMenuItem));function va({children:t,clientThreadId:a,gizmoResource:s,showReportModal:i,inMobileHeader:c}){return e.jsxs(e.Fragment,{children:[e.jsx(H,{contentAlign:c?"center":"start",size:"small",triggerButton:t,children:e.jsx(ea,{clientThreadId:a,gizmoResource:s,showReportModal:i})}),e.jsx(Re,{gizmoResource:s})]})}function Re({gizmoResource:t}){const a=T(p.GPTRemoveThirdParty),s=re(),i=K(t);return e.jsxs(e.Fragment,{children:[e.jsx(Be,{gizmoId:t.gizmo.id,creatorId:t.gizmo.author.user_id}),e.jsx(Je,{gizmo:t}),i&&e.jsx(Qe,{gizmo:t}),i&&e.jsx(qe,{gizmo:t}),e.jsx(Oe,{gpt:t,isOpen:a,onClose:()=>f.closeModal(p.GPTRemoveThirdParty),account:s})]})}function ea({clientThreadId:t,gizmoResource:a,showReportModal:s}){var _;const i=ce(),c=pe(a),h=ve(a),m=$e(a.gizmo.id),d=V(),g=ye(a),o=a.gizmo.share_recipient===N.Marketplace||a.gizmo.share_recipient===N.Link,u=!g&&o,l=F("1825130190").value,j=F("3645668434").value,y=l&&!g&&K(a),w=(d==null?void 0:d.includes(z.GizmoSupportEmails))&&!g&&a.gizmo.author.will_receive_support_emails&&y,X=de(),A=Le(t),Y=Q(z.WorkspaceShareLinks),{isUnauthenticated:Z}=q(),R=A&&Y&&!Z,ee=le();return e.jsxs(e.Fragment,{children:[e.jsx(r.Item,{onClick:()=>{me.logNewChatButtonClicked({location:"Gizmo information dropdown",gizmo_id:a.gizmo.id}),je(ee,`/g/${a.gizmo.short_url}`)},icon:Se,children:e.jsx(n,{...x.newChat})}),e.jsx(r.Item,{onClick:()=>f.openModal(p.GPTDetails),icon:Ie,children:e.jsx(n,{...x.about})}),((_=a.tools)==null?void 0:_.find(b=>b.type===S.JIT_PLUGIN))&&e.jsx(r.Item,{onClick:()=>f.openModal(p.GPTPrivacySettings),icon:Me,children:e.jsx(n,{...x.privacySettings})}),c&&e.jsx(r.Item,{onClick:()=>{i.push(m,void 0,{shallow:!0})},icon:ke,children:e.jsx(n,{...x.customize})}),!c&&h&&j&&e.jsxs(e.Fragment,{children:[e.jsx(r.Item,{onClick:async()=>{i.push(`/g/${a.gizmo.id}/view`)},icon:ze,children:e.jsx(n,{id:"GizmoInformation.viewGizmoLabel",defaultMessage:"View configuration"})}),e.jsx(r.Item,{onClick:async()=>{const b=await I.copyGizmo({gizmoId:a.gizmo.id});b.gizmo.id&&i.push(`/gpts/editor/${b.gizmo.id}`)},icon:Ce,children:e.jsx(n,{id:"GizmoInformation.copyGizmoLabel",defaultMessage:"Duplicate GPT"})})]}),e.jsx(Ze,{gizmoResource:a}),e.jsx(Ve,{gizmoResource:a}),w&&e.jsx(r.Item,{onClick:()=>f.openModal(p.GPTFeedbackEmail),icon:Pe,children:e.jsx(n,{...x.feedbackEmail})}),y&&e.jsx(r.Item,{onClick:()=>f.openModal(p.GPTReview),icon:Te,children:e.jsx(n,{...x.reviewGPT})}),u&&e.jsx(r.Item,{onClick:s,icon:Ae,children:e.jsx(n,{...x.report})}),R&&e.jsx(r.Item,{onClick:()=>f.openSharingModal(A),icon:W,children:e.jsx(n,{...x.shareChat})}),X&&e.jsxs(e.Fragment,{children:[e.jsx(r.Separator,{}),e.jsx(r.Item,{color:"danger",onClick:()=>f.openModal(p.GPTRemoveThirdParty),icon:_e,children:e.jsx(n,{defaultMessage:"Remove GPT from workspace",id:"GizmoInformation.removeGPT"})})]}),(d==null?void 0:d.includes("debug"))&&e.jsxs(e.Fragment,{children:[e.jsx(r.Separator,{}),e.jsx(r.Item,{onClick:()=>{i.push(be(a),void 0)},children:"(Internal) See share page"})]})]})}const aa=({clientThreadId:t})=>{const a=V(),s=a==null?void 0:a.includes("debug"),i=Ue.getServerThreadId(t),c=Q(z.WorkspaceShareLinks),{isUnauthenticated:h}=q(),m=c&&i&&!h;return e.jsxs(e.Fragment,{children:[m&&e.jsx(r.Item,{onClick:()=>f.openSharingModal(i,"History Item Menu"),icon:W,children:e.jsx(n,{...x.shareChat})}),e.jsx(r.Item,{disabled:!i,onClick:()=>{setTimeout(()=>{i&&M.publish({kind:"editTitle",serverThreadId:i})},100)},icon:Fe,children:e.jsx(n,{...x.renameChat})}),e.jsx(r.Item,{disabled:!i,onClick:()=>{i&&M.publish({kind:"archiveChat",serverThreadId:i})},icon:Ne,children:e.jsx(n,{...x.archiveChat})}),e.jsx(r.Item,{color:"danger",disabled:!i,onClick:()=>{i&&M.publish({kind:"deleteChat",serverThreadId:i})},icon:Ee,children:e.jsx(n,{...x.deleteChat})}),s&&e.jsxs(e.Fragment,{children:[e.jsx(r.Separator,{}),e.jsx(r.Item,{onClick:()=>f.toggleActiveSidebar("debug"),icon:De,children:e.jsx(n,{...x.debugChat})})]})]})},ya=({clientThreadId:t,children:a,onOpenChange:s})=>e.jsx(H,{onOpenChange:s,side:"bottom",contentAlign:"start",triggerButton:a,size:"auto",children:e.jsx(aa,{clientThreadId:t})}),x=C({newChat:{defaultMessage:"New chat",id:"GizmoInformation.newChat"},about:{defaultMessage:"About",id:"GizmoInformation.about"},privacySettings:{defaultMessage:"Privacy settings",id:"GizmoInformation.privacySettings"},viewDetails:{defaultMessage:"View details",id:"GizmoInformation.viewDetails"},share:{defaultMessage:"Share",id:"GizmoInformation.share"},favorite:{defaultMessage:"Favorite",id:"GizmoInformation.favorite"},customize:{defaultMessage:"Edit GPT",id:"GizmoInformation.customize"},feedbackEmail:{defaultMessage:"Send feedback",id:"GizmoInformation.feedbackEmail"},reviewGPT:{defaultMessage:"Review GPT",id:"GizmoInformation.reviewGPT"},report:{defaultMessage:"Report",id:"GizmoInformation.report"},privacy:{defaultMessage:"Privacy",id:"GizmoInformation.privacy"},deleteChat:{defaultMessage:"Delete",id:"GizmoInformation.deleteChat.0"},debugChat:{defaultMessage:"(Internal) Debug",id:"GizmoInformation.debugChat"},renameChat:{defaultMessage:"Rename",id:"GizmoInformation.renameChat"},archiveChat:{defaultMessage:"Archive",id:"GizmoInformation.archiveChat.0"},shareChat:{defaultMessage:"Share",id:"GizmoInformation.shareChat"},shareChatLong:{defaultMessage:"Share chat",id:"GizmoInformation.shareChatLong"}});export{ya as GizmoConversationOptionsDropdown,va as GizmoInformationDropdown,ea as GizmoInformationDropdownItems};
//# sourceMappingURL=fn52d7mmkl7lk277.js.map