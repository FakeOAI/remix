import{r as g,bU as v,l as e,a8 as y,eH as j,Z as i,h as z,dj as w,eI as G,W as M,be as h,X as k,aN as C,dM as S}from"./bkk1etpxp73xgxkk.js";import{ak as N,a5 as b,dj as V,cm as R}from"./grdjxd4t00xxfgii.js";import{G as L}from"./dabzk7p57vaeradh.js";import{b as F,D as _,o as A}from"./go6iqv7kynl41ls2.js";import{G as B}from"./o0rtkbpycqmde1l6.js";import{B as T,D}from"./d1ew373qviaqzay3.js";import{a7 as O,b5 as E,E as $}from"./ho6syd1yt6mfjuy1.js";import{F as u,a as x,b as p,c as H,G as P}from"./r7kw05sfejhx6328.js";import"./e2lvmkzz1krdd0vf.js";import"./on8dwna7kjymzk0v.js";const q=({gizmoId:s,limit:t,cursor:o})=>z({queryFn:async()=>N.listVersions({gizmoId:s}),queryKey:["gizmo","versions",{gizmoId:s,limit:t,cursor:o}]}),U=g.memo(function({gizmoId:t,onSelectVersion:o}){const{value:r}=v("3645668434");return!t||!r?null:e.jsx(W,{gizmoId:t,onSelectVersion:o})});function W({gizmoId:s,onSelectVersion:t}){const o=y(),{data:r}=q({gizmoId:s}),n=r?r.items.reduce((a,l)=>{const d=new Date(l.updated_at),f=`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;return a[f]||(a[f]=[]),a[f].push(l),a},{}):null,c=a=>{o.push(`/g/${s}/view?version=${a}`)};return n?e.jsx("div",{className:"relative h-full w-screen max-w-2xs",children:e.jsx("div",{className:"flex h-full max-w-2xs flex-col overflow-y-scroll bg-token-sidebar-surface-primary py-6 shadow-xl",children:e.jsx("div",{className:"relative flex-1 px-4 sm:px-6",children:Object.keys(n).map((a,l)=>{const d=n[a];return e.jsx(I,{date:a,entries:d,onSelectVersion:t,onRestoreVersion:c},l)})})})}):null}function I({date:s,entries:t,onSelectVersion:o,onRestoreVersion:r}){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"border-b border-token-border-medium py-2 font-semibold uppercase text-token-text-secondary",children:e.jsx(j,{value:s,dateStyle:"medium"})}),e.jsx("div",{className:"flex flex-col space-y-2",children:t.map((n,c)=>e.jsxs("div",{className:"flex flex-row items-center justify-between border-b border-token-border-medium",onClick:()=>o(n.version),children:[e.jsx("span",{className:"grow p-2 hover:cursor-pointer hover:bg-token-sidebar-surface-tertiary",children:e.jsx(j,{value:n.updated_at,timeStyle:"short"})}),e.jsx(K,{onRestoreVersion:()=>{r(n.version)}})]},c))})]})}function K({onRestoreVersion:s}){return e.jsx(e.Fragment,{children:e.jsx(T,{sideOffset:8,triggerButton:e.jsx("button",{color:"secondary",className:"rounded-lg px-3 py-2 text-token-text-primary duration-100 ease-in hover:bg-token-sidebar-surface-tertiary active:scale-[0.9]",children:e.jsx(O,{className:"icon-md"})}),children:e.jsxs(D.Item,{className:"items-center",disabled:!1,onClick:s,children:[e.jsx(E,{className:"icon-md"}),e.jsx(i,{id:"gizmoVersionHistory.restoreVersionLabel",defaultMessage:"Restore this version"})]})})})}const J=({gizmoId:s,version:t})=>z({queryFn:async()=>N.getVersion({gizmoId:s,version:t}),queryKey:["gizmo","version",{gizmoId:s,version:t}]}),Q=(s,t)=>`/gpts/editor/${s}?version=${t}`;function Y({gizmoId:s}){const[t,o]=g.useState(null),r=y(),{data:n}=F(s),c=n?.gizmo.current_user_permission?.can_write,a=_(),[l,d]=g.useState(!1),f=()=>{t?r.push(Q(s,t)):r.push(A(s))};return e.jsxs("div",{className:"flex h-screen w-full flex-col items-center",children:[e.jsx("div",{className:"relative flex h-16 w-full items-center justify-between gap-2 border-b border-token-border-medium px-3",children:n&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex cursor-pointer items-center gap-2",onClick:()=>r.back(),children:[e.jsx($,{className:"icon-lg"}),e.jsx("div",{className:"font-semibold",children:c?e.jsx(i,{id:"gizmoReadOnly.versionHistoryTitle",defaultMessage:"Version History"}):e.jsx(i,{id:"gizmoReadOnly.configurationTitle",defaultMessage:"Configuration"})})]}),e.jsx("div",{className:"mr-4 flex items-center gap-2",children:c?e.jsx(b,{color:"secondary",onClick:()=>{t&&t!==n.gizmo.live_version&&n.tools.find(m=>m.type===w.JIT_PLUGIN&&m.metadata.auth?.type!==G.None)?d(!0):f()},children:e.jsx(i,{id:"gizmo.readonly.restoreVersion",defaultMessage:"Restore this version"})}):e.jsx(b,{color:"secondary",loading:a.isPending,onClick:async()=>{const m=await a.mutateAsync({gizmoId:s});m.gizmo.id&&r.push(`/gpts/editor/${m.gizmo.id}`)},children:e.jsx(i,{id:"gizmo.readonly.duplicate",defaultMessage:"Duplicate"})})})]})}),e.jsxs("div",{className:"flex h-full w-full items-center",children:[c&&e.jsx(U,{gizmoId:s,onSelectVersion:m=>{o(m)}}),e.jsx(Z,{gizmoId:s,version:t})]}),l&&e.jsx(X,{onClose:()=>{d(!1)},onContinue:f})]})}function X({onClose:s,onContinue:t}){const[o,r]=g.useState(!1);return e.jsx(M,{isOpen:!0,onClose:s,type:"warning",showCloseButton:!0,title:e.jsx(i,{id:"gizmoReadOnly.authModalWarningTitle",defaultMessage:"Reset Authentication for Custom Actions"}),primaryButton:e.jsx(h,{onClick:()=>{r(!0),t()},loading:o,color:"secondary",children:e.jsx(i,{id:"gizmoReadOnly.authModalContinueButton",defaultMessage:"Continue"})}),secondaryButton:e.jsx(h,{onClick:s,color:"secondary",children:e.jsx(i,{id:"gizmoReadOnly.authModalCancelButton",defaultMessage:"Cancel"})}),size:"normal",children:e.jsx(i,{id:"gizmoReadOnly.authModalWarningBody",defaultMessage:"Restoring this version will reset authentication of your custom actions. You may need to reconfigure each custom action afterwards."})})}function Z({gizmoId:s,version:t}){const{data:o}=J({gizmoId:s,version:t}),[r,n]=g.useState(null);if(!o)return null;const c=o.tools.filter(a=>a.type===w.JIT_PLUGIN);return e.jsx("div",{className:"flex max-h-[80vh] flex-grow justify-center overflow-y-auto",children:e.jsxs("div",{className:"flex w-full max-w-2xl flex-col text-sm",children:[e.jsx(u,{className:"self-center",children:e.jsx(L,{src:o.gizmo.display.profile_picture_url,isFirstParty:!1,className:"h-12 w-12"})}),e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(i,{id:"gizmo.readonly.nameLabel",defaultMessage:"Name"})}),e.jsx(p,{type:"text",value:o.gizmo.display.name??"",disabled:!0,className:"bg-token-main-surface-secondary"})]}),e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(i,{id:"gizmo.readonly.descriptionLabel",defaultMessage:"Description"})}),e.jsx(p,{type:"text",value:o.gizmo.display.description??"",disabled:!0,className:"bg-token-main-surface-secondary"})]}),e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(i,{id:"gizmo.readonly.instructionsLabel",defaultMessage:"Instructions"})}),e.jsx(H,{className:"resize-none bg-token-main-surface-secondary",rows:8,value:o.gizmo.instructions??"",disabled:!0})]}),o.gizmo.display.prompt_starters&&o.gizmo.display.prompt_starters.length>0&&e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(i,{id:"gizmo.readonly.conversationStartersLabel",defaultMessage:"Conversation starters"})}),o.gizmo.display.prompt_starters.map((a,l)=>e.jsx(p,{type:"text",value:a,disabled:!0,className:"resize-none bg-token-main-surface-secondary"},l))]}),o.files&&o.files.length>0&&e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(i,{id:"gizmo.readonly.knowledgeLabel",defaultMessage:"Knowledge"})}),o.files.map((a,l)=>e.jsx(V,{file:a.name,fileId:a.id},l))]}),e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(i,{id:"gizmo.readonly.capabilitiesLabel",defaultMessage:"Capabilities"})}),e.jsx(B,{enabledTools:o.tools,onEnabledToolsChange:k})]}),c&&c.length>0&&e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(i,{id:"gizmo.readonly.actionsLabel",defaultMessage:"Actions"})}),c.map((a,l)=>{const d=a;return e.jsx(P,{isDisabled:!1,actionTool:d,onShowActionsEditor:()=>{r?.metadata.action_id===d.metadata.action_id?n(null):n(d)}},l)}),r&&e.jsx("textarea",{readOnly:!0,value:r.metadata.raw_spec??"",className:"mb-16 block h-96 w-full border-t-0 border-token-main-surface-tertiary bg-transparent p-2 font-mono text-xs text-token-text-primary"})]})]})})}const ce=()=>(S(),null);function ue(){const s=C(),t=y(),o=t.query?.gizmoId??"",r=R(o),{value:n}=v("3645668434");return g.useEffect(()=>{s!=null&&s.isFree()&&t.push("/")},[s,t]),n?e.jsx(Y,{gizmoId:r}):null}export{ce as clientLoader,ue as default};
//# sourceMappingURL=it3jmrnmq9i29ga3.js.map