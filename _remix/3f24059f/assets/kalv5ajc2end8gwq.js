import{cs as A,V as f,l as e,ef as R,aN as W,aK as N,r as I,u as _,e as D,j as v,Z as o,eh as P,ei as b,ej as m,a0 as F,m as B,W as L,be as T}from"./dr7d3iwdkso0acad.js";import{B as C}from"./v1fjngf9b5msx38s.js";import{bM as q,cf as G,cX as H,cY as w,bP as Y,cZ as U,c_ as V,T as K,M as Q}from"./dmeh4acfgftb4ocn.js";import{k as X,X as O}from"./nk93elwanh2qmq79.js";import{S as d}from"./nq80e3tcpxxq4d3f.js";import{a as z,b as Z}from"./bjiex4jdu79qnlkg.js";import{a as J,b as $,c as x,A as k,d as ee,e as te,f as se}from"./i3h2zefxzuctzyk4.js";import{u as ne,a as ae}from"./j0hi5wbj4hbk0prx.js";import"./houi8rstn4p87qaa.js";import"./gfbiklbu7iwavqxk.js";import"./l97vil97vij75d6c.js";import"./mhaqcfmmdyzdbeu3.js";import"./dnerd8yjozxoav5t.js";import"./fs94t0nwpxhmz7ny.js";import"./hy5i8xpuojx9el7d.js";import"./oj5tgfeg398yhzr0.js";import"./ctrx0vgo31qa9ogh.js";import"./kfk2tyi4iksp0sol.js";import"./exrv1rsxbcly0rx1.js";import"./eljpdu84qvojex8r.js";const j=60*60*24,oe=j*90,ie=j*365;function re({conversationTTL:s}){const n=f();let a;return s==null?a=n.formatMessage(t.retentionInfinite):s===oe?a=n.formatMessage(t.retentionNinetyDays):s===ie?a=n.formatMessage(t.retentionOneYear):a=n.formatMessage(t.retentionCustomDays,{num:Math.floor(s/j)}),e.jsxs(k,{children:[e.jsx("p",{className:"inline-flex items-center text-base",children:e.jsx(o,{...t.conversationRetention})}),e.jsx(K,{label:n.formatMessage(t.retentionSettingTooltip),children:a})]})}function u({title:s,description:n,children:a,upsellEnterprise:i=!1,descriptionValues:c={}}){return e.jsx(Q,{label:e.jsx(o,{...t.enterpriseRequiredMessage}),side:"top",sideOffset:4,disabled:!i,className:"max-w-xl",children:e.jsxs(ee,{className:B(i&&"text-token-text-tertiary"),children:[e.jsxs(te,{className:"flex items-center gap-3",children:[e.jsx(o,{...s}),i&&e.jsx("span",{className:"rounded-xl bg-token-main-surface-tertiary px-2 pb-0.5 text-sm",children:e.jsx(o,{...t.enterpriseUpsellPill})})]}),n&&e.jsx(se,{className:"py-2 text-token-text-secondary",children:le(n)?e.jsx(o,{...n,values:c}):n}),a]})})}function le(s){return!!s&&typeof s=="object"&&"id"in s}function ce({workspaceId:s,label:n,setting:a,defaultValue:i,values:c,disabled:p=!1}){const S=f(),h=N(),g=_(),{variables:M,mutate:y}=D({mutationFn:({setting:l,value:r})=>v.setWorkspaceShareSetting(s,l,r),onSettled:()=>{g.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{h.danger(S.formatMessage(t.featureSettingsUpdateFailed))}});return e.jsxs(k,{children:[e.jsx("p",{className:"text-md inline-flex items-center",children:e.jsx(o,{...n})}),e.jsxs(d.Root,{defaultValue:M?.value??i,onValueChange:l=>{y({setting:a,value:l})},disabled:p,children:[e.jsxs(d.Trigger,{className:"text-md focus-visible:border-none",children:[e.jsx(d.Value,{}),e.jsx(d.Icon,{})]}),e.jsx(d.Portal,{children:e.jsx(d.Content,{children:c.map((l,r)=>e.jsx(d.Item,{className:"text-md",value:l.value,children:e.jsx(o,{...l.display})},r))})})]})]})}function de({onConfirm:s,onClose:n}){const a=f();return e.jsx(L,{type:"warning",isOpen:!0,onClose:n,title:a.formatMessage(t.deleteWorkspaceMemoryModalTitle),showCloseButton:!0,primaryButton:e.jsx(T,{color:"danger",onClick:s,children:e.jsx(o,{...t.deleteWorkspaceMemoryModalConfirm})}),secondaryButton:e.jsx(T,{onClick:n,color:"secondary",children:e.jsx(o,{...t.deleteWorkspaceMemoryModalCancel})}),children:e.jsx("div",{className:"mb-2 text-sm text-token-text-primary",children:e.jsx(o,{...t.deleteWorkspaceMemoryModalInfo,values:{b:i=>e.jsx("b",{children:i})}})})})}function pe({workspaceId:s,data:n}){const a=q(G.isTeamPlan),i=W(),c=f(),p=N(),{showWorkspaceSettings:S}=H(),[h,g]=I.useState(!1),M=_(),{variables:y,mutate:l}=D({mutationFn:({feature:r,enabled:E})=>v.setWorkspaceBetaFeature(s,r,E),onSettled:()=>{M.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{p.danger(c.formatMessage(t.featureSettingsUpdateFailed))}});return e.jsxs(J,{children:[a&&e.jsx($,{}),e.jsxs(u,{title:t.workspaceDetails,children:[e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(o,{id:"SgdcRQ",defaultMessage:"Organization ID"}),e.jsx(w,{value:i?.data.organizationId??"",onCopied:()=>p.success(c.formatMessage({id:"Ctw3o0",defaultMessage:"Copied organization ID"}))})]}),e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(o,{id:"yFldxx",defaultMessage:"Workspace ID"}),e.jsx(w,{value:s,onCopied:()=>p.success(c.formatMessage({id:"CqDpiM",defaultMessage:"Copied workspace ID"}))})]})]}),e.jsx(u,{title:t.sharingSettingsTitle,upsellEnterprise:a,children:e.jsx(x,{children:e.jsx(ce,{workspaceId:s,label:t.chatSharingTitle,setting:P.CHAT_SHARE_SETTINGS,disabled:a,defaultValue:n.share_settings.chat_share_setting,values:[{display:t.workspaceMembersOnlySelect,value:b.WORKSPACE_ONLY},{display:t.noOneSelect,value:b.NO_ONE}]})})}),e.jsx(u,{title:t.memoryFeatureSettingsTitle,description:t.workspaceMemoryDescription,descriptionValues:{link:r=>e.jsx("a",{href:"https://help.openai.com/en/articles/8590148-memory-in-chatgpt-faq",target:"_blank",className:"underline",rel:"noreferrer",children:r})},upsellEnterprise:a,children:e.jsx(x,{children:e.jsxs(k,{className:"justify-start py-6",children:[e.jsx(Y,{label:"",disabled:a,enabled:y?.enabled??n.beta_settings.sunshine,onChange:r=>{r?l({feature:m.MEMORY,enabled:r}):g(!0)}}),e.jsx("p",{className:"text-md inline-flex items-center",children:e.jsx(o,{...t.memoryOptionTitle})})]})})}),h&&e.jsx(de,{onConfirm:()=>{l({feature:m.MEMORY,enabled:!1}),g(!1)},onClose:()=>{g(!1)}}),e.jsx(u,{title:t.retentionPolicyTitle,description:t.retentionChange,upsellEnterprise:a,children:e.jsx(re,{conversationTTL:n.conversation_ttl})}),S&&e.jsx(u,{title:t.contextConnectorsTitle,upsellEnterprise:a,description:e.jsx(o,{...t.contextConnectorsSubtitle,values:{helpCenterLink:e.jsx("a",{className:"text-token-link",href:"https://help.openai.com/en/articles/9309188-connected-apps-on-chatgpt",target:"_blank",rel:"noreferrer",children:e.jsx(o,{...t.contextConnectorsHelpCenterLink})})}}),children:e.jsx(x,{children:e.jsxs(x,{children:[e.jsx(C,{disabled:a,label:t.contextConnectorsGoogleDrive,Icon:X,feature:m.CONTEXT_CONNECTOR_GDRIVE,value:n.beta_settings.context_connector_gdrive,workspaceId:s}),e.jsx(C,{disabled:a,label:U,Icon:O,tooltip:t.contextConnectorsO365BusinessTooltip,feature:m.CONTEXT_CONNECTOR_O365_BUSINESS,value:n.beta_settings.context_connector_o365_business,workspaceId:s}),e.jsx(C,{disabled:a,label:V,Icon:O,tooltip:t.contextConnectorsO365PersonalTooltip,feature:m.CONTEXT_CONNECTOR_O365_PERSONAL,value:n.beta_settings.context_connector_o365_personal,workspaceId:s})]})})})]})}function ge({currentWorkspaceId:s}){const{data:n,isLoading:a}=A(s),i=f();return e.jsxs(e.Fragment,{children:[e.jsx(R,{children:e.jsx("title",{children:i.formatMessage(t.title)})}),e.jsx(z,{title:i.formatMessage(t.title)}),e.jsx(Z,{showSpinner:a,children:n===void 0?null:e.jsx(pe,{workspaceId:s,data:n})})]})}const t=F({title:{id:"workspaceSettings.title",defaultMessage:"Settings"},retentionPolicyTitle:{id:"workspaceSettings.retentionPolicyTitle",defaultMessage:"Retention policy"},sharingSettingsTitle:{id:"workspaceSettings.sharingSettingsTitle",defaultMessage:"Sharing"},memoryFeatureSettingsTitle:{id:"workspaceSettings.memoryFeatureSettingsTitle",defaultMessage:"Memory"},memoryOptionTitle:{id:"workspaceSettings.memoryOptionTitle",defaultMessage:"Allow members to use memory"},workspaceMemoryDescription:{id:"workspaceSettings.workspaceMemoryDescription",defaultMessage:"Manage whether members can enable memory. This allows ChatGPT to become more helpful by remembering details and preferences across chats. <link>Learn more</link>"},deleteWorkspaceMemoryModalTitle:{id:"workspaceSettings.deleteWorkspaceMemoryModalTitle",defaultMessage:"Are you sure?"},deleteWorkspaceMemoryModalConfirm:{id:"workspaceSettings.deleteWorkspaceMemoryModalConfirm",defaultMessage:"Disable and delete memories"},deleteWorkspaceMemoryModalCancel:{id:"workspaceSettings.deleteWorkspaceMemoryModalCancel",defaultMessage:"Cancel"},deleteWorkspaceMemoryModalInfo:{id:"workspaceSettings.groups.deleteWorkspaceMemoryModalInfo",defaultMessage:"If you disable memory for your workspace, <b>members' existing memories will be forgotten</b>. This can't be undone."},chatSharingTitle:{id:"workspaceSettings.chatSharingTitle",defaultMessage:"Chats can be shared with..."},workspaceDetails:{id:"workspaceSettings.workspaceDetails",defaultMessage:"Workspace details"},workspaceMembersOnlySelect:{id:"workspaceSettings.workspaceMembersOnlySelect",defaultMessage:"Workspace members only"},noOneSelect:{id:"workspaceSettings.noOneSelect",defaultMessage:"No one"},featureSettingsUpdateFailed:{id:"workspaceSettings.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"},conversationRetention:{id:"workspaceSettings.conversationRetention",defaultMessage:"Chat retention"},retentionInfinite:{id:"workspaceSettings.retentionInfinite",defaultMessage:"Infinite"},retentionNinetyDays:{id:"workspaceSettings.retentionNinetyDays",defaultMessage:"90 days"},retentionOneYear:{id:"workspaceSettings.retentionOneYear",defaultMessage:"1 year"},retentionCustomDays:{id:"workspaceSettings.retentionCustomDays",defaultMessage:"{num} days"},retentionChange:{id:"workspaceSettings.retentionChange",defaultMessage:"Contact your account manager to change this setting."},enterpriseUpsellPill:{id:"workspaceSettings.enterpriseUpsellPill",defaultMessage:"Enterprise"},retentionSettingTooltip:{id:"workspaceSettings.retentionSettingTooltip",defaultMessage:"Contact your account manager to change this setting"},enterpriseRequiredMessage:{id:"workspaceSettings.enterpriseRequiredMessage",defaultMessage:"Only workspaces with the Enterprise plan can change these settings"},contextConnectorsTitle:{id:"workspaceSettings.contextConnectorsTitle",defaultMessage:"Connected Apps"},contextConnectorsSubtitle:{id:"workspaceSettings.contextConnectorsSubtitle",defaultMessage:"Manage which apps users in this workspace can connect to directly from ChatGPT. For more information, refer to the {helpCenterLink}."},contextConnectorsHelpCenterLink:{id:"workspaceSettings.contextConnectorsHelpCenterLink",defaultMessage:"Help Center"},contextConnectorsGoogleDrive:{id:"workspaceSettings.contextConnectorsGoogleDrive",defaultMessage:"Google Drive"},contextConnectorsO365PersonalTooltip:{id:"workspaceSettings.contextConnectorsO365PersonalTooltip",defaultMessage:"This includes personal OneDrive accounts but not OneDrive for Business or SharePoint accounts."},contextConnectorsO365BusinessTooltip:{id:"workspaceSettings.contextConnectorsO365BusinessTooltip",defaultMessage:"This includes OneDrive for Business and SharePoint accounts but not personal accounts."}});function Ae(){const s=ne();return ae(),e.jsx(ge,{...s})}export{Ae as default};
//# sourceMappingURL=kalv5ajc2end8gwq.js.map