import{l as e,bg as T,$ as g,aH as E,a0 as B,bp as ie,X as ne,r as C,a1 as re,M as W,R as A,v as le,e5 as oe,dd as de,Y as me}from"./j51q469vqqyswwq0.js";import{ag as ce,dk as ue,g as ge,dl as z,dm as fe,bU as pe,J as L}from"./obfv3y06hphbdxag.js";import{J as $,q as xe,C as he}from"./nakmlpxnz8km92cm.js";import{g as _e,a as je}from"./eq1a948h5ja80igb.js";import{T as F,a as ye,c as ve,m as Me,n as we}from"./bhohgwthir2krdjp.js";import{a as P,T as Se,i as Pe}from"./ovwigcku86ragnxi.js";import"./duhba84pe3ongyzk.js";import"./egu4x3uf3rb117kx.js";import"./h2j4dl7822y63znb.js";import"./1sbljp6832i8csyf.js";import"./ckxksx1fpuuymnl0.js";import"./d8jxcgzgxqig2mkw.js";import"./dx1kft3turolxdnj.js";import"./cvissq6nouyk550c.js";import"./hpbm273bn1r1dl1w.js";import"./lekbmt0int1ydbph.js";function Te({action:t,handleUserAction:s,userActionParams:a,displayParams:n}){return t.type==="deny"?e.jsx(T,{color:"secondary",size:"small",onClick:()=>{s({...a,actionData:{type:"deny",...t.deny}})},children:e.jsx(g,{...t.name==="decline"?_.decline:_.deny})}):t.type==="allow"?e.jsx(T,{color:"primary",size:"small",onClick:()=>{s({...a,actionData:{type:"allow",...t.allow}})},children:e.jsx(g,{...t.name==="allow"?_.allow:_.confirm})}):t.type==="always_allow"?e.jsx(T,{color:"secondary",size:"small",onClick:async()=>{s({...a,actionData:{type:"always_allow",...t.always_allow}})},children:e.jsx(g,{..._.alwaysAllow})}):t.type==="oauth_redirect"?e.jsx(T,{color:"primary",size:"small",onClick:()=>{Ne(t.oauth_redirect,a.clientThreadId,a.turnGizmo)},children:e.jsx(g,{..._.signInButton,values:{domain:n.domain}})}):t.type==="contact_gizmo"?e.jsx(T,{color:"secondary",size:"small",onClick:async()=>{s({...a,actionData:{type:"contact_gizmo",...t.contact_gizmo}})},children:e.jsx(g,{..._.allow})}):null}async function Ne(t,s,a){const n=F.getServerThreadId(s),i=ye.getConversationMode(s)?.kind===E.GizmoTest,r=n&&!i?_e(n,a):window.location.href;ce.doOAuthRedirect(t.gizmo_id,t.gizmo_action_id,t.domain,r,i)}const _=B({alwaysAllow:{id:"jitPluginMessage.alwaysAllow",defaultMessage:"Always Allow"},allow:{id:"jitPluginMessage.allow",defaultMessage:"Allow"},decline:{id:"jitPluginMessage.decline",defaultMessage:"Decline"},confirm:{id:"jitPluginMessage.confirm",defaultMessage:"Confirm"},deny:{id:"jitPluginMessage.deny",defaultMessage:"Deny"},signInButton:{id:"jitPluginMessage.signInButton",defaultMessage:"Sign in with {domain}"}}),N="openaiFileIdRefs";function Xe({messages:t,clientThreadId:s,isLastTurnInConversation:a,onRequestCompletion:n}){const[i,r]=ie(),[l,...d]=t,o=ne(),c=ve(),j=Me(s),h=l.message.metadata?.gizmo_id??j,y=we(s,h),U=ue(y)&&y.gizmo_id===h,v=je(h,U)?.data,[Y,H]=C.useState(!1),G=ge(l.message.recipient);let k;if(G?.functionName!=null&&v?.tools!=null){for(const m of v.tools)if(Ie(m,G.functionName)){k=m;break}}const K=d.filter(m=>m.message.metadata?.jit_plugin_data?.from_server?.type==="debug"),Q=d.filter(m=>!["debug","send_test"].some(u=>u===m.message.metadata?.jit_plugin_data?.from_server?.type)),{uiState:x,jitPluginData:f,fileAttachments:X}=ke(l,Q,a),M=f?.from_server?.type!=="denied_by_user"?f?.from_server?.body.domain:k?.metadata?.domain,R=k?.metadata?.privacy_policy_url;if(C.useEffect(()=>{if(y?.kind!==E.GizmoInteraction||q(f?.from_client)?.type==="oauth_success")return;const m=i.get("oauth_success");if(f?.from_server?.type==="oauth_required"&&m){for(const u of f.from_server.body.actions)if(u.type==="oauth_redirect"){V({assistantMessage:l,allMessages:t,clientThreadId:s,onRequestCompletion:n,actionData:{type:"oauth_success",target_message_id:u.oauth_redirect.target_message_id},conversationMode:y});return}r(u=>(u.delete("oauth_success"),u),{replace:!0})}},[y,l,t,s,n,f,a,i,r]),!v)return null;let w=P.Running,S=M?p.running:p.starting,I={domain:M},b=null;if(x===7)return null;if(x===4||x===5){w=P.Paused,S=p.confirmingSimple;const m={gizmoName:v.gizmo.display.name,domain:M};b=o.formatMessage(p.confirmParamsTitle,m),I={...m,title:u=>e.jsxs("div",{className:"inline-flex items-center gap-1 text-sm",children:[u,e.jsx($,{className:"icon-sm"})]}),subtitle:u=>e.jsx("div",{className:"text-xs",children:u})}}else x===1?(w=P.Finished,S=p.finished,b=o.formatMessage(p.sentParamsTitle,{gizmoName:v.gizmo.display.name,domain:M}),I={domain:M}):x===2?(w=P.Error,S=p.error):(x===3||x===6)&&(w=P.Stopped,S=x===6?p.declined:p.stopped);const Z={assistantMessage:l,allMessages:t,clientThreadId:s,turnGizmo:v,onRequestCompletion:n,conversationMode:y},ee={domain:M},D=f?.from_server?.type!=="denied_by_user"?f?.from_server?.body.actions.map((m,u)=>e.jsx(Te,{action:m,displayParams:ee,handleUserAction:V,userActionParams:Z},u)):null,te=S?o.formatMessage(S,I):null,se=re.div`flex gap-2 flex-wrap mt-1 empty:hidden`,J=f?O(f):null,Fe=J?.[N]??[],ae=!!J;return e.jsxs(e.Fragment,{children:[e.jsx(ze,{debugMessages:K}),e.jsx(Se,{highlightedCommand:te,status:w,showWorkUserSetting:!1,children:ae?e.jsx(De,{privacyPolicyUrl:R,data:f,isPromptingForPermission:w===P.Paused}):null}),e.jsx(se,{children:X?.map(m=>e.jsx(z,{file:m.name,fileId:m.id,width:"wide",alwaysShowData:!0,showDownloadButton:!0,downloadLink:m.download_url,contextConnectorInfo:fe(m.context_connector_info)},m.id))}),(x===5||x===4)&&D&&!c&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-2 flex gap-2",children:D}),e.jsxs("div",{className:"my-1 flex items-center gap-2 text-sm",children:[e.jsx(xe,{className:"icon-sm"}),e.jsx(g,{...p.confirmingSubtitle})]})]}),b!==null&&e.jsx(Ae,{title:b,privacyPolicyUrl:R,data:f,onClose:()=>H(!1),isOpen:Y,actionButtons:D})]})}function be({messageMetadata:t}){const[s,a]=C.useState(!1);return e.jsxs("div",{className:"my-2 flex flex-col text-sm",children:[e.jsxs("div",{className:"flex flex-row items-center hover:cursor-pointer",onClick:()=>{a(!s)},children:[s?e.jsx($,{className:"icon-sm"}):e.jsx(he,{className:"icon-sm"}),e.jsx("div",{className:"font-semibold",children:t.display_message})]}),s&&e.jsx("pre",{children:JSON.stringify(t.data,null,2)})]})}function ze({debugMessages:t}){return t.length===0?null:e.jsx("div",{children:t.map((s,a)=>{const n=s.message.metadata?.jit_plugin_data?.from_server;return n&&n.type==="debug"?e.jsx(be,{messageMetadata:n.body},a):null})})}function ke(t,s,a){if(t.message.metadata?.jit_plugin_data?.from_server?.type==="send_test")return{uiState:7};if(t.message.metadata?.jit_plugin_data?.from_server?.type==="debug")return{uiState:3};if(s.some(i=>i.message.content.content_type===W.SystemError))return{uiState:2};if(Pe(t.message))return{uiState:3};for(let i=s.length-1;i>=0;i--){const r=s[i];if(r.message.metadata?.invoked_plugin){const o=[];return s.forEach(c=>{const j=c.message.metadata?.attachments?.filter(h=>h.display_files_from_actions_ext);j&&o.push(...j)}),{uiState:1,jitPluginData:r.message.metadata.jit_plugin_data,fileAttachments:o}}const l=q(r.message.metadata?.jit_plugin_data?.from_client);if(l!=null){if(l?.type==="contact_gizmo")return{uiState:1,jitPluginData:s[i-1]?.message.metadata?.jit_plugin_data};if(l?.type==="deny")return{uiState:6};if(l?.type==="oauth_success")return{uiState:0,jitPluginData:r.message.metadata?.jit_plugin_data};break}const d=r.message.metadata?.jit_plugin_data?.from_server;if(d?.type==="preview"&&a)return{uiState:0,jitPluginData:r.message.metadata?.jit_plugin_data};if(d?.type==="confirm_action"&&a)return{uiState:5,jitPluginData:r.message.metadata?.jit_plugin_data};if(d?.type==="oauth_required"&&a)return{uiState:4,jitPluginData:r.message.metadata?.jit_plugin_data}}const n=s.find(i=>i.message.author.role===A.Tool&&i.message.author.name?.split(".")[0]==="gizmo_contacts");return n?{uiState:1,jitPluginData:n.message.metadata?.jit_plugin_data}:{uiState:a?0:3}}function V({actionData:t,assistantMessage:s,allMessages:a,clientThreadId:n,turnGizmo:i,onRequestCompletion:r,conversationMode:l}){const d={id:le(),author:{role:A.Tool,name:s.message.recipient},content:{content_type:W.Text,parts:[""]},recipient:"all",metadata:{jit_plugin_data:{from_client:t}}};l=l??{kind:E.PrimaryAssistant},i?.gizmo.id&&(d.metadata.gizmo_id=i.gizmo.id),F.updateTree(n,c=>{c.addNode(d.id,d,a[a.length-1].message.id,A.Tool,{completionSampleFinishTime:Date.now()})}),F.setThreadCurrentLeafId(n,d.id);const o=new pe;r({type:oe.Next,promptId:d.id,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!1,completionMetadata:{conversationMode:l},turnTracker:o})}function Ie(t,s){if(t.type!==de.JIT_PLUGIN||!t.metadata.json_schema)return!1;let a=!1;function n(i){for(const r in i)r==="operationId"&&i[r]===s&&(a=!0),i[r]&&typeof i[r]=="object"&&n(i[r])}return n(t.metadata.json_schema),a}function O(t){if(t.from_server?.type==="confirm_action"||t.from_server?.type==="oauth_required"||t.from_server?.type==="preview")return t.from_server.body.params}function De({data:t,privacyPolicyUrl:s,isPromptingForPermission:a}){const n=t?O(t):null,r=(n?.[N]??[]).map((l,d)=>{const o=l.name.startsWith("dalle-");let c=l.name;return o&&(c=`${c}.webp`),e.jsx(z,{file:c,fileId:l.id},d)});return e.jsxs("div",{className:"mb-4 mt-1 divide-y divide-token-border-light overflow-hidden rounded-xl border border-token-border-light",children:[e.jsxs("div",{className:"flex justify-between bg-token-main-surface-tertiary px-4 py-2 text-sm text-token-text-secondary",children:[a?e.jsx(g,{id:"JITPluginMessage.params.sharing.present",defaultMessage:"The following will be shared:"}):e.jsx(g,{id:"JITPluginMessage.params.sharing.past",defaultMessage:"The following was shared:"}),s&&e.jsx("a",{href:L(s),className:"text-token-text-primary",target:"_blank",rel:"noreferrer",children:e.jsx(g,{...p.privacyPolicyLink})})]}),n&&Object.keys(n).map((l,d)=>l===N?null:e.jsxs("div",{className:"flex items-center space-x-2 px-4 py-2 font-mono",children:[e.jsx("span",{className:"text-token-text-tertiary",children:`${l}:`}),e.jsx("span",{children:JSON.stringify(n[l],null,2)})]},d)),r.length>0&&e.jsx("div",{className:"px-4 py-2",children:r})]})}function Ce({title:t,data:s,privacyPolicyUrl:a,actionButtons:n}){const i=s?O(s):null,r=i?.[N]??[],l=r.filter(o=>!o.mime_type?.startsWith("image/")).map((o,c)=>e.jsx(z,{file:o.name,fileId:o.id},c)),d=r.filter(o=>o.mime_type?.startsWith("image/")).map((o,c)=>{const j=o.name.startsWith("dalle-");let h=o.name;return j&&(h=`${h}.webp`),e.jsx(z,{file:h,fileId:o.id},c)});return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"font-semibold",children:t}),i&&Object.keys(i).map((o,c)=>o===N?null:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"text-token-text-tertiary",children:o}),e.jsx("div",{children:JSON.stringify(i[o],null,2)})]},c)),d.length>0&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(g,{id:"jitPluginMessage.paramsModalImages",defaultMessage:"Images"})}),d]}),l.length>0&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(g,{id:"jitPluginMessage.paramsModalFiles",defaultMessage:"Files"})}),l]}),e.jsxs("div",{className:"flex flex-row items-center justify-between pt-4",children:[n!==null&&e.jsx("div",{className:"space-x-2",children:n}),a&&e.jsx("a",{className:"text-xs font-semibold",href:L(a),children:e.jsx(g,{...p.privacyPolicyLink})})]})]})}function Ae({title:t,data:s,privacyPolicyUrl:a,onClose:n,isOpen:i,actionButtons:r}){return e.jsx(me,{isOpen:i,onClose:n,type:"success",hideSeparator:!0,showCloseButton:!0,size:"normal",title:e.jsx(g,{id:"jitPluginMessage.paramsModalTitle",defaultMessage:"Review action"}),children:e.jsx("div",{className:"relative flex h-full flex-col gap-2 overflow-hidden",children:e.jsx("div",{className:"space-y-2",children:e.jsx(Ce,{title:t,data:s,privacyPolicyUrl:a,actionButtons:r})})})})}function q(t){if(t&&"user_action"in t){const s=t.user_action;t={...t,...s.data},"target_message_id"in t&&s.target_message_id&&(t.target_message_id=s.target_message_id)}return t}const p=B({starting:{id:"jitPluginMessage.starting",defaultMessage:"Starting action"},confirming:{id:"jitPluginMessage.confirmingV4",defaultMessage:"<title>{gizmoName} wants to talk to {domain}</title><subtitle>Only allow sites you trust</subtitle>"},confirmingSimple:{id:"jitPluginMessage.confirming.simple",defaultMessage:"{gizmoName} wants to talk to {domain}"},confirmingSubtitle:{id:"jitPluginMessage.confirming.subtitle",defaultMessage:"Only allow sites you trust."},running:{id:"jitPluginMessage.runningV4",defaultMessage:"Talking to {domain}"},finished:{id:"jitPluginMessage.finishedV4",defaultMessage:"Talked to {domain}"},stopped:{id:"jitPluginMessage.stoppedV4",defaultMessage:"Stopped talking to {domain}"},error:{id:"jitPluginMessage.errorV5",defaultMessage:"Error talking to {domain}"},declined:{id:"jitPluginMessage.declined",defaultMessage:"You declined this action"},ranTest:{id:"jitPluginMessage.ranTest",defaultMessage:"Tested {operationName}"},confirmParamsTitle:{id:"jitPluginMessage.confirmParamsTitleV3",defaultMessage:"{gizmoName} wants to share this info with {domain}"},sentParamsTitle:{id:"jitPluginMessage.sentParamsTitleV2",defaultMessage:"{gizmoName} sent this info to {domain}"},privacyPolicyLink:{id:"jitPluginMessage.privacyPolicyLinkV2",defaultMessage:"Privacy policy"}});export{Xe as JITPluginMessage};
//# sourceMappingURL=ep826szjvpmr0ott.js.map