import{cr as W,W as S,l as e,aN as I,aK as _,r as P,u as D,e as A,j as E,aA as F,a0 as o,ei as B,ej as w,ek as g,aZ as j,a1 as G,m as L,X as q,bd as O}from"./gie7t2ghpkmat91x.js";import{B as h}from"./blv28y2hlgoj2231.js";import{bQ as H,ck as U,c_ as V,c$ as N,bT as Y,d0 as K,d1 as Q,c as X,M as z}from"./eb3stsg8iy7t43kd.js";import{k as Z,X as v}from"./mlhieyi9z3gwttrn.js";import{S as c}from"./dcuy50ysngytazok.js";import{a as $,b as J}from"./g7idl3cp0nzt19vb.js";import{a as ee,b as te,c as x,A as b,d as se,e as ne,f as ae}from"./tea9dxydto36h4zh.js";import{u as oe,a as ie}from"./ngugwa9l4l9g4v4n.js";import"./m6n9c5wi3ggf47q7.js";import"./g9iu7nm903guujld.js";import"./cq1wr63lzayx7ig8.js";import"./j7vda0o4435fpq77.js";import"./ebqv5ph7c2sdk5gc.js";import"./h2sd1xa6f1fu46y0.js";import"./dj1r9dxm91vgn5c2.js";import"./l9f3mccvx9rgexey.js";import"./feb9subta6lf5bz0.js";import"./jiryc8pk66l5n8uv.js";import"./m3vztdz5bfiry3en.js";import"./mvo0jg467bvdmom2.js";import"./hjchxpu8v768sj92.js";const T=60*60*24,re=T*90,le=T*365;function ce({conversationTTL:s}){const n=S();let a;return s==null?a=n.formatMessage(t.retentionInfinite):s===re?a=n.formatMessage(t.retentionNinetyDays):s===le?a=n.formatMessage(t.retentionOneYear):a=n.formatMessage(t.retentionCustomDays,{num:Math.floor(s/T)}),e.jsxs(b,{children:[e.jsx("p",{className:"inline-flex items-center text-base",children:e.jsx(o,{...t.conversationRetention})}),e.jsx(X,{label:n.formatMessage(t.retentionSettingTooltip),children:a})]})}function p({title:s,description:n,children:a,upsellEnterprise:i=!1,descriptionValues:l={}}){return e.jsx(z,{label:e.jsx(o,{...t.enterpriseRequiredMessage}),side:"top",sideOffset:4,disabled:!i,className:"max-w-xl",children:e.jsxs(se,{className:L(i&&"text-token-text-tertiary"),children:[e.jsxs(ne,{className:"flex items-center gap-3",children:[e.jsx(o,{...s}),i&&e.jsx("span",{className:"rounded-xl bg-token-main-surface-tertiary px-2 pb-0.5 text-sm",children:e.jsx(o,{...t.enterpriseUpsellPill})})]}),n&&e.jsx(ae,{className:"py-2 text-token-text-secondary",children:de(n)?e.jsx(o,{...n,values:l}):n}),a]})})}function de(s){return!!s&&typeof s=="object"&&"id"in s}function ge({workspaceId:s,label:n,setting:a,defaultValue:i,values:l,disabled:u=!1}){const M=S(),C=_(),m=D(),{variables:y,mutate:k}=A({mutationFn:({setting:r,value:f})=>E.setWorkspaceShareSetting(s,r,f),onSettled:()=>{m.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{C.danger(M.formatMessage(t.featureSettingsUpdateFailed))}});return e.jsxs(b,{children:[e.jsx("p",{className:"text-md inline-flex items-center",children:e.jsx(o,{...n})}),e.jsxs(c.Root,{defaultValue:y?.value??i,onValueChange:r=>{k({setting:a,value:r})},disabled:u,children:[e.jsxs(c.Trigger,{className:"text-md focus-visible:border-none",children:[e.jsx(c.Value,{}),e.jsx(c.Icon,{})]}),e.jsx(c.Portal,{children:e.jsx(c.Content,{children:l.map((r,f)=>e.jsx(c.Item,{className:"text-md",value:r.value,children:e.jsx(o,{...r.display})},f))})})]})]})}function pe({onConfirm:s,onClose:n}){const a=S();return e.jsx(q,{type:"warning",isOpen:!0,onClose:n,title:a.formatMessage(t.deleteWorkspaceMemoryModalTitle),showCloseButton:!0,primaryButton:e.jsx(O,{color:"danger",onClick:s,children:e.jsx(o,{...t.deleteWorkspaceMemoryModalConfirm})}),secondaryButton:e.jsx(O,{onClick:n,color:"secondary",children:e.jsx(o,{...t.deleteWorkspaceMemoryModalCancel})}),children:e.jsx("div",{className:"mb-2 text-sm text-token-text-primary",children:e.jsx(o,{...t.deleteWorkspaceMemoryModalInfo,values:{b:i=>e.jsx("b",{children:i})}})})})}function ue({workspaceId:s,data:n}){const a=H(U.isTeamPlan),i=I(),l=S(),u=_(),{showWorkspaceSettings:M}=V(),[C,m]=P.useState(!1),y=D(),{variables:k,mutate:r}=A({mutationFn:({feature:d,enabled:R})=>E.setWorkspaceBetaFeature(s,d,R),onSettled:()=>{y.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{u.danger(l.formatMessage(t.featureSettingsUpdateFailed))}}),f=F("193142637").value;return e.jsxs(ee,{children:[a&&e.jsx(te,{}),e.jsxs(p,{title:t.workspaceDetails,children:[e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(o,{id:"SgdcRQ",defaultMessage:"Organization ID"}),e.jsx(N,{value:i?.data.organizationId??"",onCopied:()=>u.success(l.formatMessage({id:"Ctw3o0",defaultMessage:"Copied organization ID"}))})]}),e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(o,{id:"yFldxx",defaultMessage:"Workspace ID"}),e.jsx(N,{value:s,onCopied:()=>u.success(l.formatMessage({id:"CqDpiM",defaultMessage:"Copied workspace ID"}))})]})]}),e.jsx(p,{title:t.sharingSettingsTitle,upsellEnterprise:a,children:e.jsx(x,{children:e.jsx(ge,{workspaceId:s,label:t.chatSharingTitle,setting:B.CHAT_SHARE_SETTINGS,disabled:a,defaultValue:n.share_settings.chat_share_setting,values:[{display:t.workspaceMembersOnlySelect,value:w.WORKSPACE_ONLY},{display:t.noOneSelect,value:w.NO_ONE}]})})}),e.jsx(p,{title:t.memoryFeatureSettingsTitle,description:t.workspaceMemoryDescription,descriptionValues:{link:d=>e.jsx("a",{href:"https://help.openai.com/en/articles/8590148-memory-in-chatgpt-faq",target:"_blank",className:"underline",rel:"noreferrer",children:d})},upsellEnterprise:a,children:e.jsx(x,{children:e.jsxs(b,{className:"justify-start py-6",children:[e.jsx(Y,{label:"",disabled:a,enabled:k?.enabled??n.beta_settings.sunshine,onChange:d=>{d?r({feature:g.MEMORY,enabled:d}):m(!0)}}),e.jsx("p",{className:"text-md inline-flex items-center",children:e.jsx(o,{...t.memoryOptionTitle})})]})})}),C&&e.jsx(pe,{onConfirm:()=>{r({feature:g.MEMORY,enabled:!1}),m(!1)},onClose:()=>{m(!1)}}),f&&e.jsx(p,{title:j({id:"SyabKs",defaultMessage:"Canvas"}),description:j({id:"ROROHD",defaultMessage:"Control whether users in this workspace can use the ChatGPT canvas feature."}),upsellEnterprise:a,children:e.jsx(x,{children:e.jsx(h,{disabled:a,label:j({id:"i8v3nI",defaultMessage:"Canvas"}),feature:g.CANVAS,value:n.beta_settings.canvas,workspaceId:s})})}),e.jsx(p,{title:t.retentionPolicyTitle,description:t.retentionChange,upsellEnterprise:a,children:e.jsx(ce,{conversationTTL:n.conversation_ttl})}),M&&e.jsx(p,{title:t.contextConnectorsTitle,upsellEnterprise:a,description:e.jsx(o,{...t.contextConnectorsSubtitle,values:{helpCenterLink:e.jsx("a",{className:"text-token-link",href:"https://help.openai.com/en/articles/9309188-connected-apps-on-chatgpt",target:"_blank",rel:"noreferrer",children:e.jsx(o,{...t.contextConnectorsHelpCenterLink})})}}),children:e.jsx(x,{children:e.jsxs(x,{children:[e.jsx(h,{disabled:a,label:t.contextConnectorsGoogleDrive,Icon:Z,feature:g.CONTEXT_CONNECTOR_GDRIVE,value:n.beta_settings.context_connector_gdrive,workspaceId:s}),e.jsx(h,{disabled:a,label:K,Icon:v,tooltip:t.contextConnectorsO365BusinessTooltip,feature:g.CONTEXT_CONNECTOR_O365_BUSINESS,value:n.beta_settings.context_connector_o365_business,workspaceId:s}),e.jsx(h,{disabled:a,label:Q,Icon:v,tooltip:t.contextConnectorsO365PersonalTooltip,feature:g.CONTEXT_CONNECTOR_O365_PERSONAL,value:n.beta_settings.context_connector_o365_personal,workspaceId:s})]})})})]})}function me({currentWorkspaceId:s}){const{data:n,isLoading:a}=W(s),i=S();return e.jsxs(e.Fragment,{children:[e.jsx("title",{children:i.formatMessage(t.title)}),e.jsx($,{title:i.formatMessage(t.title)}),e.jsx(J,{showSpinner:a,children:n===void 0?null:e.jsx(ue,{workspaceId:s,data:n})})]})}const t=G({title:{id:"workspaceSettings.title",defaultMessage:"Settings"},retentionPolicyTitle:{id:"workspaceSettings.retentionPolicyTitle",defaultMessage:"Retention policy"},sharingSettingsTitle:{id:"workspaceSettings.sharingSettingsTitle",defaultMessage:"Sharing"},memoryFeatureSettingsTitle:{id:"workspaceSettings.memoryFeatureSettingsTitle",defaultMessage:"Memory"},memoryOptionTitle:{id:"workspaceSettings.memoryOptionTitle",defaultMessage:"Allow members to use memory"},workspaceMemoryDescription:{id:"workspaceSettings.workspaceMemoryDescription",defaultMessage:"Manage whether members can enable memory. This allows ChatGPT to become more helpful by remembering details and preferences across chats. <link>Learn more</link>"},deleteWorkspaceMemoryModalTitle:{id:"workspaceSettings.deleteWorkspaceMemoryModalTitle",defaultMessage:"Are you sure?"},deleteWorkspaceMemoryModalConfirm:{id:"workspaceSettings.deleteWorkspaceMemoryModalConfirm",defaultMessage:"Disable and delete memories"},deleteWorkspaceMemoryModalCancel:{id:"workspaceSettings.deleteWorkspaceMemoryModalCancel",defaultMessage:"Cancel"},deleteWorkspaceMemoryModalInfo:{id:"workspaceSettings.groups.deleteWorkspaceMemoryModalInfo",defaultMessage:"If you disable memory for your workspace, <b>members' existing memories will be forgotten</b>. This can't be undone."},chatSharingTitle:{id:"workspaceSettings.chatSharingTitle",defaultMessage:"Chats can be shared with..."},workspaceDetails:{id:"workspaceSettings.workspaceDetails",defaultMessage:"Workspace details"},workspaceMembersOnlySelect:{id:"workspaceSettings.workspaceMembersOnlySelect",defaultMessage:"Workspace members only"},noOneSelect:{id:"workspaceSettings.noOneSelect",defaultMessage:"No one"},featureSettingsUpdateFailed:{id:"workspaceSettings.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"},conversationRetention:{id:"workspaceSettings.conversationRetention",defaultMessage:"Chat retention"},retentionInfinite:{id:"workspaceSettings.retentionInfinite",defaultMessage:"Infinite"},retentionNinetyDays:{id:"workspaceSettings.retentionNinetyDays",defaultMessage:"90 days"},retentionOneYear:{id:"workspaceSettings.retentionOneYear",defaultMessage:"1 year"},retentionCustomDays:{id:"workspaceSettings.retentionCustomDays",defaultMessage:"{num} days"},retentionChange:{id:"workspaceSettings.retentionChange",defaultMessage:"Contact your account manager to change this setting."},enterpriseUpsellPill:{id:"workspaceSettings.enterpriseUpsellPill",defaultMessage:"Enterprise"},retentionSettingTooltip:{id:"workspaceSettings.retentionSettingTooltip",defaultMessage:"Contact your account manager to change this setting"},enterpriseRequiredMessage:{id:"workspaceSettings.enterpriseRequiredMessage",defaultMessage:"Only workspaces with the Enterprise plan can change these settings"},contextConnectorsTitle:{id:"workspaceSettings.contextConnectorsTitle",defaultMessage:"Connected Apps"},contextConnectorsSubtitle:{id:"workspaceSettings.contextConnectorsSubtitle",defaultMessage:"Manage which apps users in this workspace can connect to directly from ChatGPT. For more information, refer to the {helpCenterLink}."},contextConnectorsHelpCenterLink:{id:"workspaceSettings.contextConnectorsHelpCenterLink",defaultMessage:"Help Center"},contextConnectorsGoogleDrive:{id:"workspaceSettings.contextConnectorsGoogleDrive",defaultMessage:"Google Drive"},contextConnectorsO365PersonalTooltip:{id:"workspaceSettings.contextConnectorsO365PersonalTooltip",defaultMessage:"This includes personal OneDrive accounts but not OneDrive for Business or SharePoint accounts."},contextConnectorsO365BusinessTooltip:{id:"workspaceSettings.contextConnectorsO365BusinessTooltip",defaultMessage:"This includes OneDrive for Business and SharePoint accounts but not personal accounts."}});function Ie(){const s=oe();return ie(),e.jsx(me,{...s})}export{Ie as default};
//# sourceMappingURL=ezsytmhd13xgy6vw.js.map