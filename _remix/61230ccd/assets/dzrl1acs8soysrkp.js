import{b$ as E,G as f,j as e,eo as R,ar as W,r as I,B as D,D as _,J as a,a6 as S,eq as P,er as w,es as m,K as F,c as B,F as v,H as G,bg as T}from"./n0w8fa09c6pt8bok.js";import{B as k}from"./io49yzym5xojfyne.js";import{bq as q,bR as L,ct as H,cu as U,cv as O,bs as Y,cw as V,cx as K,j as Q,ah as z}from"./nxdg7myfgles0eps.js";import{K as X,R as N}from"./nsj7wpo4qc8d47xs.js";import{S as d}from"./ndch3zkl1m0x2ts2.js";import{a as J,b as $}from"./cxjeegvn824bju9u.js";import{a as Z,b as ee,c as x,A as j,d as te,e as se,f as ne}from"./oj25xgiawiibaor7.js";import{u as oe,a as ae}from"./co5voy5x5ed2xoc4.js";import"./irtnmyln09xu8jnz.js";import"./nxcyja71e2a45xkf.js";import"./klgh2a3852yb216a.js";import"./osfnssnflvkl4jnm.js";import"./dh3ydrmf37j963b9.js";import"./d4gcntyoio1vkgzs.js";import"./itvrh5cy4gx670eo.js";import"./j1edn6vnd70hnbvs.js";import"./k0fgr0ggpo2vzic8.js";import"./la1zb9f70g5t5veb.js";import"./k2sjdzxp1tpa26ln.js";import"./k5dhihnoi2m7tiev.js";import"./flqnjvsrzsonp2wl.js";import"./ijhp6k7ixenhmaa7.js";const b=60*60*24,ie=b*90,re=b*365;function le({conversationTTL:s}){const n=f();let o;return s==null?o=n.formatMessage(t.retentionInfinite):s===ie?o=n.formatMessage(t.retentionNinetyDays):s===re?o=n.formatMessage(t.retentionOneYear):o=n.formatMessage(t.retentionCustomDays,{num:Math.floor(s/b)}),e.jsxs(j,{children:[e.jsx("p",{className:"inline-flex items-center text-base",children:e.jsx(a,{...t.conversationRetention})}),e.jsx(Q,{label:n.formatMessage(t.retentionSettingTooltip),children:o})]})}function u({title:s,description:n,children:o,upsellEnterprise:i=!1,descriptionValues:l={}}){return e.jsx(z,{label:e.jsx(a,{...t.enterpriseRequiredMessage}),side:"top",sideOffset:4,disabled:!i,className:"max-w-xl",children:e.jsxs(te,{className:B(i&&"text-token-text-tertiary"),children:[e.jsxs(se,{className:"flex items-center gap-3",children:[e.jsx(a,{...s}),i&&e.jsx("span",{className:"rounded-xl bg-token-main-surface-tertiary px-2 pb-0.5 text-sm",children:e.jsx(a,{...t.enterpriseUpsellPill})})]}),n&&e.jsx(ne,{className:"py-2 text-token-text-secondary",children:ce(n)?e.jsx(a,{...n,values:l}):n}),o]})})}function ce(s){return!!s&&typeof s=="object"&&"id"in s}function de({workspaceId:s,label:n,setting:o,defaultValue:i,values:l,disabled:h=!1}){const M=f(),y=D(),{variables:c,mutate:C}=_({mutationFn:({setting:r,value:p})=>v.setWorkspaceShareSetting(s,r,p),onSettled:()=>{y.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{S.danger(M.formatMessage(t.featureSettingsUpdateFailed))}});return e.jsxs(j,{children:[e.jsx("p",{className:"text-md inline-flex items-center",children:e.jsx(a,{...n})}),e.jsxs(d.Root,{defaultValue:(c==null?void 0:c.value)??i,onValueChange:r=>{C({setting:o,value:r})},disabled:h,children:[e.jsxs(d.Trigger,{className:"text-md focus-visible:border-none",children:[e.jsx(d.Value,{}),e.jsx(d.Icon,{})]}),e.jsx(d.Portal,{children:e.jsx(d.Content,{children:l.map((r,p)=>e.jsx(d.Item,{className:"text-md",value:r.value,children:e.jsx(a,{...r.display})},p))})})]})]})}function pe({onConfirm:s,onClose:n}){const o=f();return e.jsx(G,{type:"warning",isOpen:!0,onClose:n,title:o.formatMessage(t.deleteWorkspaceMemoryModalTitle),showCloseButton:!0,primaryButton:e.jsx(T,{color:"danger",onClick:s,children:e.jsx(a,{...t.deleteWorkspaceMemoryModalConfirm})}),secondaryButton:e.jsx(T,{onClick:n,color:"secondary",children:e.jsx(a,{...t.deleteWorkspaceMemoryModalCancel})}),children:e.jsx("div",{className:"mb-2 text-sm text-token-text-primary",children:e.jsx(a,{...t.deleteWorkspaceMemoryModalInfo,values:{b:i=>e.jsx("b",{children:i})}})})})}function ge({workspaceId:s,data:n}){const o=q(L.isTeamPlan),i=W(),l=f(),h=H(),{showWorkspaceSettings:M}=U(),[y,c]=I.useState(!1),C=D(),{variables:r,mutate:p}=_({mutationFn:({feature:g,enabled:A})=>v.setWorkspaceBetaFeature(s,g,A),onSettled:()=>{C.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{S.danger(l.formatMessage(t.featureSettingsUpdateFailed))}});return e.jsxs(Z,{children:[o&&e.jsx(ee,{}),e.jsxs(u,{title:t.workspaceDetails,children:[e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(a,{id:"SgdcRQ",defaultMessage:"Organization ID"}),e.jsx(O,{value:(i==null?void 0:i.data.organizationId)??"",onCopied:()=>S.success(l.formatMessage({id:"Ctw3o0",defaultMessage:"Copied organization ID"}))})]}),e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(a,{id:"yFldxx",defaultMessage:"Workspace ID"}),e.jsx(O,{value:s,onCopied:()=>S.success(l.formatMessage({id:"CqDpiM",defaultMessage:"Copied workspace ID"}))})]})]}),e.jsx(u,{title:t.sharingSettingsTitle,upsellEnterprise:o,children:e.jsx(x,{children:e.jsx(de,{workspaceId:s,label:t.chatSharingTitle,setting:P.CHAT_SHARE_SETTINGS,disabled:o,defaultValue:n.share_settings.chat_share_setting,values:[{display:t.workspaceMembersOnlySelect,value:w.WORKSPACE_ONLY},{display:t.noOneSelect,value:w.NO_ONE}]})})}),h&&e.jsx(u,{title:t.memoryFeatureSettingsTitle,description:t.workspaceMemoryDescription,descriptionValues:{link:g=>e.jsx("a",{href:"https://help.openai.com/en/articles/8590148-memory-in-chatgpt-faq",target:"_blank",className:"underline",rel:"noreferrer",children:g})},upsellEnterprise:o,children:e.jsx(x,{children:e.jsxs(j,{className:"justify-start py-6",children:[e.jsx(Y,{label:"",disabled:o,enabled:(r==null?void 0:r.enabled)??n.beta_settings.sunshine,onChange:g=>{g?p({feature:m.MEMORY,enabled:g}):c(!0)}}),e.jsx("p",{className:"text-md inline-flex items-center",children:e.jsx(a,{...t.memoryOptionTitle})})]})})}),y&&e.jsx(pe,{onConfirm:()=>{p({feature:m.MEMORY,enabled:!1}),c(!1)},onClose:()=>{c(!1)}}),e.jsx(u,{title:t.retentionPolicyTitle,description:t.retentionChange,upsellEnterprise:o,children:e.jsx(le,{conversationTTL:n.conversation_ttl})}),M&&e.jsx(u,{title:t.contextConnectorsTitle,upsellEnterprise:o,description:e.jsx(a,{...t.contextConnectorsSubtitle,values:{helpCenterLink:e.jsx("a",{className:"text-token-link",href:"https://help.openai.com/en/articles/9309188-connected-apps-on-chatgpt",target:"_blank",rel:"noreferrer",children:e.jsx(a,{...t.contextConnectorsHelpCenterLink})})}}),children:e.jsx(x,{children:e.jsxs(x,{children:[e.jsx(k,{disabled:o,label:t.contextConnectorsGoogleDrive,Icon:X,feature:m.CONTEXT_CONNECTOR_GDRIVE,value:n.beta_settings.context_connector_gdrive,workspaceId:s}),e.jsx(k,{disabled:o,label:V,Icon:N,tooltip:t.contextConnectorsO365BusinessTooltip,feature:m.CONTEXT_CONNECTOR_O365_BUSINESS,value:n.beta_settings.context_connector_o365_business,workspaceId:s}),e.jsx(k,{disabled:o,label:K,Icon:N,tooltip:t.contextConnectorsO365PersonalTooltip,feature:m.CONTEXT_CONNECTOR_O365_PERSONAL,value:n.beta_settings.context_connector_o365_personal,workspaceId:s})]})})})]})}function me({currentWorkspaceId:s}){const{data:n,isLoading:o}=E(s),i=f();return e.jsxs(e.Fragment,{children:[e.jsx(R,{children:e.jsx("title",{children:i.formatMessage(t.title)})}),e.jsx(J,{title:i.formatMessage(t.title)}),e.jsx($,{showSpinner:o,children:n===void 0?null:e.jsx(ge,{workspaceId:s,data:n})})]})}const t=F({title:{id:"workspaceSettings.title",defaultMessage:"Settings"},retentionPolicyTitle:{id:"workspaceSettings.retentionPolicyTitle",defaultMessage:"Retention policy"},sharingSettingsTitle:{id:"workspaceSettings.sharingSettingsTitle",defaultMessage:"Sharing"},memoryFeatureSettingsTitle:{id:"workspaceSettings.memoryFeatureSettingsTitle",defaultMessage:"Memory"},memoryOptionTitle:{id:"workspaceSettings.memoryOptionTitle",defaultMessage:"Allow members to use memory"},workspaceMemoryDescription:{id:"workspaceSettings.workspaceMemoryDescription",defaultMessage:"Manage whether members can enable memory. This allows ChatGPT to become more helpful by remembering details and preferences across chats. <link>Learn more</link>"},deleteWorkspaceMemoryModalTitle:{id:"workspaceSettings.deleteWorkspaceMemoryModalTitle",defaultMessage:"Are you sure?"},deleteWorkspaceMemoryModalConfirm:{id:"workspaceSettings.deleteWorkspaceMemoryModalConfirm",defaultMessage:"Disable and delete memories"},deleteWorkspaceMemoryModalCancel:{id:"workspaceSettings.deleteWorkspaceMemoryModalCancel",defaultMessage:"Cancel"},deleteWorkspaceMemoryModalInfo:{id:"workspaceSettings.groups.deleteWorkspaceMemoryModalInfo",defaultMessage:"If you disable memory for your workspace, <b>members' existing memories will be forgotten</b>. This can't be undone."},chatSharingTitle:{id:"workspaceSettings.chatSharingTitle",defaultMessage:"Chats can be shared with..."},workspaceDetails:{id:"workspaceSettings.workspaceDetails",defaultMessage:"Workspace details"},workspaceMembersOnlySelect:{id:"workspaceSettings.workspaceMembersOnlySelect",defaultMessage:"Workspace members only"},noOneSelect:{id:"workspaceSettings.noOneSelect",defaultMessage:"No one"},featureSettingsUpdateFailed:{id:"workspaceSettings.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"},conversationRetention:{id:"workspaceSettings.conversationRetention",defaultMessage:"Chat retention"},retentionInfinite:{id:"workspaceSettings.retentionInfinite",defaultMessage:"Infinite"},retentionNinetyDays:{id:"workspaceSettings.retentionNinetyDays",defaultMessage:"90 days"},retentionOneYear:{id:"workspaceSettings.retentionOneYear",defaultMessage:"1 year"},retentionCustomDays:{id:"workspaceSettings.retentionCustomDays",defaultMessage:"{num} days"},retentionChange:{id:"workspaceSettings.retentionChange",defaultMessage:"Contact your account manager to change this setting."},enterpriseUpsellPill:{id:"workspaceSettings.enterpriseUpsellPill",defaultMessage:"Enterprise"},retentionSettingTooltip:{id:"workspaceSettings.retentionSettingTooltip",defaultMessage:"Contact your account manager to change this setting"},enterpriseRequiredMessage:{id:"workspaceSettings.enterpriseRequiredMessage",defaultMessage:"Only workspaces with the Enterprise plan can change these settings"},contextConnectorsTitle:{id:"workspaceSettings.contextConnectorsTitle",defaultMessage:"Connected Apps"},contextConnectorsSubtitle:{id:"workspaceSettings.contextConnectorsSubtitle",defaultMessage:"Manage which apps users in this workspace can connect to directly from ChatGPT. For more information, refer to the {helpCenterLink}."},contextConnectorsHelpCenterLink:{id:"workspaceSettings.contextConnectorsHelpCenterLink",defaultMessage:"Help Center"},contextConnectorsGoogleDrive:{id:"workspaceSettings.contextConnectorsGoogleDrive",defaultMessage:"Google Drive"},contextConnectorsO365PersonalTooltip:{id:"workspaceSettings.contextConnectorsO365PersonalTooltip",defaultMessage:"This includes personal OneDrive accounts but not OneDrive for Business or SharePoint accounts."},contextConnectorsO365BusinessTooltip:{id:"workspaceSettings.contextConnectorsO365BusinessTooltip",defaultMessage:"This includes OneDrive for Business and SharePoint accounts but not personal accounts."}});function Ie(){const s=oe();return ae(),e.jsx(me,{...s})}export{Ie as default};
//# sourceMappingURL=dzrl1acs8soysrkp.js.map