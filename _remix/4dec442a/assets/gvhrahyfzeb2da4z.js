import{cr as W,V as S,l as e,ek as I,aM as P,aJ as _,r as F,u as D,e as A,j as E,az as B,Z as o,em as G,en as T,eo as g,aY as j,a0 as L,m as H,W as q,bd as O}from"./ce20vh2pwl1h2mrx.js";import{B as h}from"./m1ntzr4ecjsn62lm.js";import{bN as V,ci as Y,c_ as U,c$ as N,bQ as Q,d0 as z,d1 as K,c as X,M as J}from"./izfif69im9lzk9q2.js";import{k as Z,X as v}from"./n3h96e4yqztse0yi.js";import{S as c}from"./bbvbwtndkb3isz5w.js";import{a as $,b as ee}from"./ioum2u8r0b7q2vuh.js";import{a as te,b as se,c as x,A as b,d as ne,e as ae,f as oe}from"./mifwl5we4xlg7mqj.js";import{u as ie,a as re}from"./je513hy01u86fumi.js";import"./fj55rz5ttphyneod.js";import"./gye8zmhcxzn16c06.js";import"./e1cnpm5dmj2ijz1x.js";import"./ivcjr0x9hy2blveg.js";import"./iu1uhy1kwbh1vhmq.js";import"./dxe24b6kimaxjpej.js";import"./n076a76oyaedfeaj.js";import"./f9sftf5ifkxx4em1.js";import"./ljjzyc89di80jgp8.js";import"./7cuxyxswlqgybx04.js";import"./dn64nodlq4h0w5l4.js";import"./bzjnsl6extx06xhs.js";import"./k5m7gigc7k6vi7li.js";const w=60*60*24,le=w*90,ce=w*365;function de({conversationTTL:s}){const n=S();let a;return s==null?a=n.formatMessage(t.retentionInfinite):s===le?a=n.formatMessage(t.retentionNinetyDays):s===ce?a=n.formatMessage(t.retentionOneYear):a=n.formatMessage(t.retentionCustomDays,{num:Math.floor(s/w)}),e.jsxs(b,{children:[e.jsx("p",{className:"inline-flex items-center text-base",children:e.jsx(o,{...t.conversationRetention})}),e.jsx(X,{label:n.formatMessage(t.retentionSettingTooltip),children:a})]})}function p({title:s,description:n,children:a,upsellEnterprise:i=!1,descriptionValues:l={}}){return e.jsx(J,{label:e.jsx(o,{...t.enterpriseRequiredMessage}),side:"top",sideOffset:4,disabled:!i,className:"max-w-xl",children:e.jsxs(ne,{className:H(i&&"text-token-text-tertiary"),children:[e.jsxs(ae,{className:"flex items-center gap-3",children:[e.jsx(o,{...s}),i&&e.jsx("span",{className:"rounded-xl bg-token-main-surface-tertiary px-2 pb-0.5 text-sm",children:e.jsx(o,{...t.enterpriseUpsellPill})})]}),n&&e.jsx(oe,{className:"py-2 text-token-text-secondary",children:ge(n)?e.jsx(o,{...n,values:l}):n}),a]})})}function ge(s){return!!s&&typeof s=="object"&&"id"in s}function pe({workspaceId:s,label:n,setting:a,defaultValue:i,values:l,disabled:u=!1}){const M=S(),C=_(),m=D(),{variables:y,mutate:k}=A({mutationFn:({setting:r,value:f})=>E.setWorkspaceShareSetting(s,r,f),onSettled:()=>{m.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{C.danger(M.formatMessage(t.featureSettingsUpdateFailed))}});return e.jsxs(b,{children:[e.jsx("p",{className:"text-md inline-flex items-center",children:e.jsx(o,{...n})}),e.jsxs(c.Root,{defaultValue:y?.value??i,onValueChange:r=>{k({setting:a,value:r})},disabled:u,children:[e.jsxs(c.Trigger,{className:"text-md focus-visible:border-none",children:[e.jsx(c.Value,{}),e.jsx(c.Icon,{})]}),e.jsx(c.Portal,{children:e.jsx(c.Content,{children:l.map((r,f)=>e.jsx(c.Item,{className:"text-md",value:r.value,children:e.jsx(o,{...r.display})},f))})})]})]})}function ue({onConfirm:s,onClose:n}){const a=S();return e.jsx(q,{type:"warning",isOpen:!0,onClose:n,title:a.formatMessage(t.deleteWorkspaceMemoryModalTitle),showCloseButton:!0,primaryButton:e.jsx(O,{color:"danger",onClick:s,children:e.jsx(o,{...t.deleteWorkspaceMemoryModalConfirm})}),secondaryButton:e.jsx(O,{onClick:n,color:"secondary",children:e.jsx(o,{...t.deleteWorkspaceMemoryModalCancel})}),children:e.jsx("div",{className:"mb-2 text-sm text-token-text-primary",children:e.jsx(o,{...t.deleteWorkspaceMemoryModalInfo,values:{b:i=>e.jsx("b",{children:i})}})})})}function me({workspaceId:s,data:n}){const a=V(Y.isTeamPlan),i=P(),l=S(),u=_(),{showWorkspaceSettings:M}=U(),[C,m]=F.useState(!1),y=D(),{variables:k,mutate:r}=A({mutationFn:({feature:d,enabled:R})=>E.setWorkspaceBetaFeature(s,d,R),onSettled:()=>{y.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{u.danger(l.formatMessage(t.featureSettingsUpdateFailed))}}),f=B("193142637").value;return e.jsxs(te,{children:[a&&e.jsx(se,{}),e.jsxs(p,{title:t.workspaceDetails,children:[e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(o,{id:"SgdcRQ",defaultMessage:"Organization ID"}),e.jsx(N,{value:i?.data.organizationId??"",onCopied:()=>u.success(l.formatMessage({id:"Ctw3o0",defaultMessage:"Copied organization ID"}))})]}),e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(o,{id:"yFldxx",defaultMessage:"Workspace ID"}),e.jsx(N,{value:s,onCopied:()=>u.success(l.formatMessage({id:"CqDpiM",defaultMessage:"Copied workspace ID"}))})]})]}),e.jsx(p,{title:t.sharingSettingsTitle,upsellEnterprise:a,children:e.jsx(x,{children:e.jsx(pe,{workspaceId:s,label:t.chatSharingTitle,setting:G.CHAT_SHARE_SETTINGS,disabled:a,defaultValue:n.share_settings.chat_share_setting,values:[{display:t.workspaceMembersOnlySelect,value:T.WORKSPACE_ONLY},{display:t.noOneSelect,value:T.NO_ONE}]})})}),e.jsx(p,{title:t.memoryFeatureSettingsTitle,description:t.workspaceMemoryDescription,descriptionValues:{link:d=>e.jsx("a",{href:"https://help.openai.com/en/articles/8590148-memory-in-chatgpt-faq",target:"_blank",className:"underline",rel:"noreferrer",children:d})},upsellEnterprise:a,children:e.jsx(x,{children:e.jsxs(b,{className:"justify-start py-6",children:[e.jsx(Q,{label:"",disabled:a,enabled:k?.enabled??n.beta_settings.sunshine,onChange:d=>{d?r({feature:g.MEMORY,enabled:d}):m(!0)}}),e.jsx("p",{className:"text-md inline-flex items-center",children:e.jsx(o,{...t.memoryOptionTitle})})]})})}),C&&e.jsx(ue,{onConfirm:()=>{r({feature:g.MEMORY,enabled:!1}),m(!1)},onClose:()=>{m(!1)}}),f&&e.jsx(p,{title:j({id:"SyabKs",defaultMessage:"Canvas"}),description:j({id:"ROROHD",defaultMessage:"Control whether users in this workspace can use the ChatGPT canvas feature."}),upsellEnterprise:a,children:e.jsx(x,{children:e.jsx(h,{disabled:a,label:j({id:"i8v3nI",defaultMessage:"Canvas"}),feature:g.CANVAS,value:n.beta_settings.canvas,workspaceId:s})})}),e.jsx(p,{title:t.retentionPolicyTitle,description:t.retentionChange,upsellEnterprise:a,children:e.jsx(de,{conversationTTL:n.conversation_ttl})}),M&&e.jsx(p,{title:t.contextConnectorsTitle,upsellEnterprise:a,description:e.jsx(o,{...t.contextConnectorsSubtitle,values:{helpCenterLink:e.jsx("a",{className:"text-token-link",href:"https://help.openai.com/en/articles/9309188-connected-apps-on-chatgpt",target:"_blank",rel:"noreferrer",children:e.jsx(o,{...t.contextConnectorsHelpCenterLink})})}}),children:e.jsx(x,{children:e.jsxs(x,{children:[e.jsx(h,{disabled:a,label:t.contextConnectorsGoogleDrive,Icon:Z,feature:g.CONTEXT_CONNECTOR_GDRIVE,value:n.beta_settings.context_connector_gdrive,workspaceId:s}),e.jsx(h,{disabled:a,label:z,Icon:v,tooltip:t.contextConnectorsO365BusinessTooltip,feature:g.CONTEXT_CONNECTOR_O365_BUSINESS,value:n.beta_settings.context_connector_o365_business,workspaceId:s}),e.jsx(h,{disabled:a,label:K,Icon:v,tooltip:t.contextConnectorsO365PersonalTooltip,feature:g.CONTEXT_CONNECTOR_O365_PERSONAL,value:n.beta_settings.context_connector_o365_personal,workspaceId:s})]})})})]})}function fe({currentWorkspaceId:s}){const{data:n,isLoading:a}=W(s),i=S();return e.jsxs(e.Fragment,{children:[e.jsx(I,{children:e.jsx("title",{children:i.formatMessage(t.title)})}),e.jsx($,{title:i.formatMessage(t.title)}),e.jsx(ee,{showSpinner:a,children:n===void 0?null:e.jsx(me,{workspaceId:s,data:n})})]})}const t=L({title:{id:"workspaceSettings.title",defaultMessage:"Settings"},retentionPolicyTitle:{id:"workspaceSettings.retentionPolicyTitle",defaultMessage:"Retention policy"},sharingSettingsTitle:{id:"workspaceSettings.sharingSettingsTitle",defaultMessage:"Sharing"},memoryFeatureSettingsTitle:{id:"workspaceSettings.memoryFeatureSettingsTitle",defaultMessage:"Memory"},memoryOptionTitle:{id:"workspaceSettings.memoryOptionTitle",defaultMessage:"Allow members to use memory"},workspaceMemoryDescription:{id:"workspaceSettings.workspaceMemoryDescription",defaultMessage:"Manage whether members can enable memory. This allows ChatGPT to become more helpful by remembering details and preferences across chats. <link>Learn more</link>"},deleteWorkspaceMemoryModalTitle:{id:"workspaceSettings.deleteWorkspaceMemoryModalTitle",defaultMessage:"Are you sure?"},deleteWorkspaceMemoryModalConfirm:{id:"workspaceSettings.deleteWorkspaceMemoryModalConfirm",defaultMessage:"Disable and delete memories"},deleteWorkspaceMemoryModalCancel:{id:"workspaceSettings.deleteWorkspaceMemoryModalCancel",defaultMessage:"Cancel"},deleteWorkspaceMemoryModalInfo:{id:"workspaceSettings.groups.deleteWorkspaceMemoryModalInfo",defaultMessage:"If you disable memory for your workspace, <b>members' existing memories will be forgotten</b>. This can't be undone."},chatSharingTitle:{id:"workspaceSettings.chatSharingTitle",defaultMessage:"Chats can be shared with..."},workspaceDetails:{id:"workspaceSettings.workspaceDetails",defaultMessage:"Workspace details"},workspaceMembersOnlySelect:{id:"workspaceSettings.workspaceMembersOnlySelect",defaultMessage:"Workspace members only"},noOneSelect:{id:"workspaceSettings.noOneSelect",defaultMessage:"No one"},featureSettingsUpdateFailed:{id:"workspaceSettings.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"},conversationRetention:{id:"workspaceSettings.conversationRetention",defaultMessage:"Chat retention"},retentionInfinite:{id:"workspaceSettings.retentionInfinite",defaultMessage:"Infinite"},retentionNinetyDays:{id:"workspaceSettings.retentionNinetyDays",defaultMessage:"90 days"},retentionOneYear:{id:"workspaceSettings.retentionOneYear",defaultMessage:"1 year"},retentionCustomDays:{id:"workspaceSettings.retentionCustomDays",defaultMessage:"{num} days"},retentionChange:{id:"workspaceSettings.retentionChange",defaultMessage:"Contact your account manager to change this setting."},enterpriseUpsellPill:{id:"workspaceSettings.enterpriseUpsellPill",defaultMessage:"Enterprise"},retentionSettingTooltip:{id:"workspaceSettings.retentionSettingTooltip",defaultMessage:"Contact your account manager to change this setting"},enterpriseRequiredMessage:{id:"workspaceSettings.enterpriseRequiredMessage",defaultMessage:"Only workspaces with the Enterprise plan can change these settings"},contextConnectorsTitle:{id:"workspaceSettings.contextConnectorsTitle",defaultMessage:"Connected Apps"},contextConnectorsSubtitle:{id:"workspaceSettings.contextConnectorsSubtitle",defaultMessage:"Manage which apps users in this workspace can connect to directly from ChatGPT. For more information, refer to the {helpCenterLink}."},contextConnectorsHelpCenterLink:{id:"workspaceSettings.contextConnectorsHelpCenterLink",defaultMessage:"Help Center"},contextConnectorsGoogleDrive:{id:"workspaceSettings.contextConnectorsGoogleDrive",defaultMessage:"Google Drive"},contextConnectorsO365PersonalTooltip:{id:"workspaceSettings.contextConnectorsO365PersonalTooltip",defaultMessage:"This includes personal OneDrive accounts but not OneDrive for Business or SharePoint accounts."},contextConnectorsO365BusinessTooltip:{id:"workspaceSettings.contextConnectorsO365BusinessTooltip",defaultMessage:"This includes OneDrive for Business and SharePoint accounts but not personal accounts."}});function Pe(){const s=ie();return re(),e.jsx(fe,{...s})}export{Pe as default};
//# sourceMappingURL=gvhrahyfzeb2da4z.js.map