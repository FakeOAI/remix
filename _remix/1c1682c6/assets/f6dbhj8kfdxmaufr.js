const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/gfrzuir60kqnomxl.js","assets/d63lrq7vlweafxz1.js","assets/ohl9cn85y3aaicqe.js","assets/root-myjlts4g.css","assets/bnj6ccg0tq916jup.js","assets/g3zxt2mfvuei9piv.js","assets/conversation-small-eplmind9.css","assets/hcjfdejqunesw5hr.js","assets/eexqsmb80tn46cif.js","assets/eg006duzrl772rkr.js","assets/dlxsegamgppyh1m2.js","assets/n1fvj6hucql2s9uh.js","assets/nd9ur07kk6ra2se2.js","assets/h4lih5uze5fpkxoc.js","assets/jmvnrotytmmjxh92.js","assets/gjsabzhakxwkk7es.js"])))=>i.map(i=>d[i]);
import{j as e,r as d,O as _,cU as V,b3 as W,bs as L,cN as I,c as oe,cz as Q,bO as le,ck as X,c1 as Y,H as Z,aJ as ee,I as R,K as ie,N as ce,fd as p,cK as F,fe as de,E as te,bP as ue}from"./d63lrq7vlweafxz1.js";import{A as me,T as v,B as xe}from"./hzasuzxvzvyrjf2o.js";import"./fs5gbgqmch243kc5.js";import{ep as z,eq as B,ah as g,c8 as ge,D as be,l as se,R as y,aa as fe,ad as pe,ae as he,af as q,ag as G,o as ve,er as je,es as ae}from"./g3zxt2mfvuei9piv.js";import"./le0xcrm6n3gyouuy.js";import{c as ye}from"./bbeacn3j1iw8git6.js";import{S as Se,c as Ce}from"./ivgpxeooi0uqhm6x.js";import{C as we}from"./gi44bvnt6o378yl7.js";import{C as Ne}from"./bnj6ccg0tq916jup.js";import{ai as ke,aI as ne,bm as _e,L as Me}from"./ohl9cn85y3aaicqe.js";import{u as De}from"./iqar95ryuif6yyj3.js";import"./t1dfvypwzj0qsy2j.js";import"./e9lafxuzyeh4418f.js";import"./hmvrebixodjr6xjb.js";import"./jmutnjyuz0rby5b2.js";import"./8vh5q4uhm32edkaw.js";import"./mwn34khfvfuni0fv.js";import"./e86hbuttel85uo7n.js";import"./kshxul0ya814ewyl.js";import"./ma0trg4hlajpugg1.js";import"./eexqsmb80tn46cif.js";import"./elv9wxkt388figo6.js";import"./cm5zpyah0wjmzbea.js";import"./eaehzgrq0vivay3l.js";import"./h99ffdd228yp7l1w.js";import"./ih3r3e5fseau9nil.js";import"./jb449adwxbxi1me5.js";import"./bcovyowsarx5yswc.js";import"./orovqpljoil3dvcp.js";import"./i4qjt97rop38eyad.js";import"./n854wotqaqg7ecwr.js";import"./f6as8rp3frmuxk07.js";import"./jc2o6eso9143w50x.js";import"./h5i2wk1a7tmm62se.js";import"./nna9ilfncfkfg7ao.js";import"./irie1aobe3i7l8l1.js";import"./lcjnejyvp3ebqq39.js";import"./dlxsegamgppyh1m2.js";import"./oihs7qirgd79606r.js";import"./fvaa0mqriwbjied4.js";import"./dx4rebrbej3bnhtk.js";function Te({children:t,sidebarOpen:n,onClose:l}){return e.jsx(z.Root,{show:n,as:d.Fragment,children:e.jsxs(B,{as:"div",className:"relative z-10",onClose:l,children:[e.jsx("div",{className:"fixed inset-0"}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e.jsx(z.Child,{as:d.Fragment,enter:"transform transition ease-in-out duration-100 sm:duration-300",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-300 sm:duration-500",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:e.jsx(B.Panel,{className:"pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",children:e.jsx("div",{className:"h-full overflow-y-auto bg-token-main-surface-primary shadow-xl",children:t})})})})})})]})})}function Pe({clientThreadId:t}){const{rebaseSystemMessageContent:n,showDebugConversationTurns:l}=g(),[a,r]=d.useState(()=>n?JSON.stringify(n,null,2):void 0),[o,c]=d.useState(!!n),s=me(t,v.getThreadCurrentLeafId(t)),i=ge(s,x=>x.content.content_type===V.SystemContent),u=(i==null?void 0:i.content)??null,j=()=>{r(u?JSON.stringify(u,null,2):"")},b=W(),f=d.useMemo(()=>be(x=>{try{x?g.setState({rebaseSystemMessageContent:{...JSON.parse(x),content_type:V.SystemContent}}):g.setState({rebaseSystemMessageContent:null}),b.closeAll()}catch{b.danger("The System Message is not valid JSON")}},500),[b]);return d.useEffect(()=>{o?f(a):(f.cancel(),g.setState({rebaseSystemMessageContent:null}))},[f,o,a]),e.jsxs("div",{className:"flex flex-col gap-3 px-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(se,{label:"Enable to apply this system message to the current conversation.",children:e.jsx(y,{id:"enabled",label:"Enabled",checked:o,onChange:x=>c(x.currentTarget.checked)})}),e.jsx(y,{id:"show-internal-conversation-turns",label:"Conversation debug mode",checked:l,onChange:()=>{g.setState({showDebugConversationTurns:!l})}})]}),e.jsx(L,{disabled:!u,className:"mt-2",onClick:j,size:"small",children:"Load active system message"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm",children:"System Message"}),e.jsx(Re,{disabled:!o,placeholder:u?"Press `Load active system message` to pre-populate this":"Start a conversation and then press `Load active system message` to pre-populate this",className:"min-h-[75vh] rounded-md border border-gray-400 p-1 font-mono",value:a,onChange:x=>r(x.target.value)})]})]})}const Re=_.textarea`w-full rounded-lg border border-token-border-light bg-token-main-surface-primary text-sm text-token-text-primary focus:border-token-text-primary focus:shadow-none focus:outline-none focus:ring-token-text-primary disabled:bg-token-main-surface-tertiary`;function Fe({clientThreadId:t}){const[n,l]=d.useState([]),a=v.getThreadCurrentLeafId(t),r=v.getThreadConversationTurns(t,a),o=s=>{const u=v.getTree(t).getLeafFromNode(s);v.setThreadCurrentLeafId(t,u.id)},c=s=>{l(i=>[...i,a]),o(s)};return e.jsxs(e.Fragment,{children:[n.length>0&&e.jsxs(L,{className:"absolute left-2 top-2",color:"secondary",onClick:()=>{const s=n[n.length-1];o(s),l(i=>i.slice(0,-1))},children:[e.jsx(ke,{className:"icon-sm"}),"Go back to ",n[n.length-1]]}),e.jsx("div",{className:"flex flex-col items-center gap-4 overflow-auto p-4 text-xs",children:r.map((s,i)=>{const u=s.messages[0].nodeId,j=v.getTree(t),b=i!==0?j.getParent(u):null,f=b!=null?b.children.findIndex(m=>u===m):0,x=b!=null?b.children:[],C=x.slice(0,f),S=x.slice(f+1);let h;switch(s.role){case I.User:h="bg-blue-500";break;case I.Assistant:h="bg-gray-600";break;default:h="bg-gray-400";break}return e.jsxs("div",{className:oe("relative p-2",h),children:[e.jsx("div",{className:"absolute bottom-0 left-0 -ml-2 flex -translate-x-full gap-2 pl-2",children:C.map(m=>e.jsx(J,{variantId:m,onChangeItemInView:c},m))}),e.jsx("div",{className:"absolute left-full top-0 ml-2 flex gap-2 pr-2",children:S.map(m=>e.jsx(J,{variantId:m,onChangeItemInView:c},m))}),e.jsx("div",{className:"flex flex-col gap-2",children:s.messages.map(m=>e.jsxs("div",{className:"h-14 w-32 truncate bg-gray-200 p-1 text-black",children:[e.jsx("div",{className:"font-semibold",children:m.nodeId}),e.jsx("div",{className:"italic text-token-text-tertiary",children:m.message.author.role}),e.jsx("div",{children:Q(m.message)})]},m.nodeId))})]},i)})})]})}function J({variantId:t,onChangeItemInView:n}){return e.jsx("button",{className:"w-32 truncate bg-gray-400 p-2 text-black opacity-50 hover:opacity-100",onClick:()=>{n(t)},children:e.jsx("span",{className:"bg-gray-200 p-2",children:t})},t)}const Ie=X(()=>Y(()=>import("./gfrzuir60kqnomxl.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(t=>t.DebugModalContents),{ssr:!1}),Le=X(()=>Y(()=>import("./gjsabzhakxwkk7es.js"),__vite__mapDeps([15,1,2,3,5,6])).then(t=>t.FramesViewer),{ssr:!1});function Ft(){return e.jsx("button",{"data-testid":"open-debug-sidebar-button",className:"flex h-6 w-6 items-center justify-center rounded-full border border-token-border-light text-xs text-token-text-secondary",onClick:()=>{fe.setActiveSidebar("debug")},children:e.jsx(ne,{className:"icon-xs"})})}function Ae({children:t,title:n,icon:l,isOpen:a,slideOver:r,onClose:o}){const c=e.jsxs(Be,{children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 text-lg font-semibold text-gray-900 dark:text-white",children:[e.jsx(l,{className:"icon-sm"}),n]}),e.jsx("div",{className:"mr-2 mt-2 flex h-7 items-center",children:e.jsx(le,{onClick:o})})]}),t]});return r?e.jsx(Te,{sidebarOpen:a,onClose:o,children:c}):a?c:null}function Ee({nodes:t,setDebugNodeIndex:n,setFrameSrc:l,conversationId:a}){const r=t.map((o,c)=>{var U;const s=o.message,{role:i,name:u}=s.author,j=u&&u!==i,b=p(s,"metadata.__internal.model_id"),f=p(s,"metadata.__internal.agent.settings.completion_api.engine"),x=p(s,"metadata.__internal.model_experiment_name"),C=p(s,"metadata.__internal.model_experiment_treatment"),S=p(s,"metadata.__internal.normalized_model_side"),h=p(s,"metadata.__internal.alternative_model_selection_rule"),m=p(s,"metadata.__internal.model_experiment_group_name"),N=p(s,"metadata.__internal.model_experiment_group_params"),w=p(s,"metadata.__internal.model_experiment_override"),M=p(s,"metadata.__internal.model_experiment_eval_seq"),D=(U=p(s,"metadata.__internal.raw_tokens"))==null?void 0:U.length,E=p(s,"metadata.request_id"),O=F.getAudio(s),$=F.getAudioAssetPointers(s),re=F.getFrameAssetPointers(s);return e.jsxs(Ge,{role:"button",onClick:()=>n(c),children:[e.jsxs("div",{className:"text-xs font-semibold uppercase text-token-text-tertiary",children:[i,j&&` (${u})`,s.recipient&&" -> ",de(s)]}),(s.author.role!==I.System||E)&&e.jsxs("div",{className:"text-xs text-token-text-tertiary",children:[e.jsxs("div",{children:["ID: ",s.id]}),o.id!==s.id&&e.jsxs("div",{children:["UI Node ID: ",o.id]}),e.jsxs("div",{children:["Req ID: ",E||"Reload page to see ID"]})]}),e.jsx("div",{className:"line-clamp-6",children:Q(s)}),(D||b||f||x||C||S||h||m||N||w||M)&&e.jsxs("div",{className:"mt-4 w-full self-start rounded-xl bg-blue-200 px-3 py-0.5 text-xs text-black",children:[D!==void 0&&e.jsxs("div",{children:[e.jsx("b",{children:"Tokens Count:"})," ",D]}),b&&e.jsxs("div",{children:[e.jsx("b",{children:"Model ID:"})," ",b]}),f&&e.jsxs("div",{children:[e.jsx("b",{children:"Engine:"})," ",f]}),x&&e.jsxs("div",{children:[e.jsx("b",{children:"Experiment:"})," ",x]}),C&&e.jsxs("div",{children:[e.jsx("b",{children:"Treatment:"})," ",C]}),S&&e.jsxs("div",{children:[e.jsx("b",{children:"Normalized Side:"})," ",S]}),h&&e.jsxs("div",{children:[e.jsx("b",{children:"Alternative Model Rule:"})," ",h]}),m&&e.jsxs("div",{children:[e.jsx("b",{children:"Group Name:"})," ",m]}),N&&e.jsxs("div",{children:[e.jsx("b",{children:"Group Params:"}),e.jsx("div",{children:JSON.stringify(N,null,2)})]}),w&&e.jsxs("div",{children:[e.jsx("b",{children:"Above Params are Overridden By:"})," ",w]}),M&&e.jsxs("div",{children:[e.jsx("b",{children:"Experiment Eval Seq:"})," click to see"]})]}),O.length||$.length?e.jsxs("div",{className:"mt-4 flex flex-col flex-nowrap gap-2",children:[e.jsx(ze,{frameAssets:re,setFrameSrc:l},c),O.map((T,P)=>e.jsx(k,{audio:T,conversationId:a},P)),$.map((T,P)=>e.jsx(k,{assetPointer:T,conversationId:a},P))]}):null]},s.id)});return e.jsx(qe,{children:r})}const K=t=>e.jsx(Ce.Input,{...t,inputClassName:"focus:ring-0"});function Oe(){const t=g(),l=De().map(a=>({label:a.name,options:a.options.map(r=>({label:`${r.value} (${r.name})`,value:r.value}))}));return e.jsxs("div",{className:"mt-2 flex flex-col justify-around gap-3 px-4 py-1 text-xs font-semibold",children:[e.jsx(y,{id:"force-paragen",label:"Force Parallel Gen",checked:t.forceParagen,onChange:()=>{g.setState({forceParagen:!t.forceParagen})}}),e.jsx(we,{options:l,name:"force-paragen-model",className:"shadow-none dark:text-gray-800",isDisabled:!t.forceParagen,isLoading:l.length===0,value:t.forceParagenModel,isClearable:!0,isMulti:!1,components:{Input:K},onChange:a=>{g.setState({forceParagenModel:a??je})}}),e.jsx(y,{id:"show-paragen-metadata",label:"Show Paragen Metadata",checked:t.showParagenMetadata,onChange:()=>{g.setState({showParagenMetadata:!t.showParagenMetadata})}}),e.jsx(y,{id:"force-nulligen",label:"Force Nulligen",checked:t.forceNulligen,onChange:()=>{g.setState({forceNulligen:!t.forceNulligen})}}),e.jsx("div",{id:"force-use-search-label",children:"Force Use Search:"}),e.jsx(Se,{id:"force-use-search",options:[{label:"Default",value:"default"},{label:"Force",value:"true"},{label:"Disable",value:"false"}],name:"force-use-search",className:"shadow-none dark:text-gray-800",value:t.forceUseSearch==null?{value:"default",label:"Default"}:t.forceUseSearch?{value:"true",label:"Force"}:{value:"false",label:"Disable"},isMulti:!1,components:{Input:K},onChange:a=>{g.setState({forceUseSearch:((a==null?void 0:a.value)??"default")==="default"?null:(a==null?void 0:a.value)==="true"})}}),e.jsx(y,{id:"force-indepth-feedback",label:"Force Indepth Feedback with prompt:",checked:t.forceIndepthFeedback,onChange:()=>{g.setState({forceIndepthFeedback:!t.forceIndepthFeedback})}}),e.jsx(ye,{id:"force-indepth-feedback-prompt",value:t.forceIndepthFeedbackPrompt,disabled:!t.forceIndepthFeedback,className:"font-weight-normal font-mono text-xs",onChange:a=>{g.setState({forceIndepthFeedbackPrompt:a.target.value})}}),e.jsx(y,{id:"force-rate-limit",label:"Force Rate Limit",checked:t.forceRateLimit,onChange:()=>{g.setState({forceRateLimit:!t.forceRateLimit})}}),e.jsx(y,{id:"reset-rate-limit",label:"Reset Rate Limits",checked:t.resetRateLimits,onChange:()=>{g.setState({resetRateLimits:!t.resetRateLimits})}}),e.jsx(se,{label:"Enabling this will show debug conversation messages in the chat",children:e.jsx(y,{id:"show-internal-conversation-turns",label:"Conversation debug mode",checked:t.showDebugConversationTurns,onChange:()=>{g.setState({showDebugConversationTurns:!t.showDebugConversationTurns})}})})]})}const H=_.div`px-3 pb-2 text-xs font-semibold uppercase border-b-2 ${({$isSelected:t})=>t?"border-black dark:border-white":"border-transparent"}`;function It({clientThreadId:t,isOpen:n,slideOver:l,onClose:a}){const r=Z(),o=ee(),[c,s]=d.useState("conversation");return o!=null&&o.includes("debug")?e.jsx(Ae,{icon:ne,title:r.formatMessage(A.debugTitle),isOpen:n,slideOver:l,onClose:a,children:e.jsxs(pe,{orientation:"vertical",defaultValue:c,onValueChange:i=>s(i),children:[e.jsxs(he,{className:"mb-4 flex items-center justify-center gap-2 px-2 py-1 text-xs",children:[e.jsx(q,{value:"conversation",children:e.jsx(H,{$isSelected:c==="conversation",children:"Conversation"})}),e.jsx(q,{value:"system-message-editor",children:e.jsx(H,{$isSelected:c==="system-message-editor",children:"System Message"})}),!1]}),e.jsx(G,{value:"conversation",children:e.jsx($e,{clientThreadId:t})}),e.jsx(G,{value:"system-message-editor",children:e.jsx(Pe,{clientThreadId:t})}),!1]})}):null}function $e({clientThreadId:t}){var S,h,m,N;const n=Z(),l=v.getThreadCurrentLeafId(t),a=xe(t,l),[r,o]=d.useState(),c=ee(),s=d.useCallback(()=>{o(void 0)},[]),i=W(),u=d.useCallback(w=>{const M=v.getTree(t);ve(M.getTextFromThread(l),i,w)},[l,t,i]),[j,b]=d.useState(!1),[f,x]=d.useState(void 0);return c!=null&&c.includes("debug")?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-2 flex items-center justify-around px-4 py-1 text-xs font-semibold uppercase",children:e.jsx(Ve,{clientThreadId:t,messages:a.map(w=>w.message)})}),!1,e.jsxs("div",{className:"flex items-center justify-around gap-2 px-4 py-1 text-xs font-semibold uppercase",children:[e.jsx("div",{children:e.jsx(Ne,{onCopy:u,buttonText:n.formatMessage(A.copyText)})}),e.jsxs("button",{className:"flex items-center justify-center gap-2",onClick:()=>b(!0),children:[e.jsx(_e,{className:"icon-sm rotate-90"}),"View tree"]})]}),e.jsx(Oe,{}),e.jsx(Ee,{nodes:a,setDebugNodeIndex:o,setFrameSrc:x,conversationId:v.getServerThreadId(t)}),r!==void 0&&e.jsx(R,{type:"success",size:"fullscreen",noPadding:!0,isOpen:!0,onClose:s,children:e.jsx(Ie,{threadId:(h=(S=a[r].message.metadata)==null?void 0:S.__internal)==null?void 0:h.sonic_thread_id,threadUserId:(N=(m=a[r].message.metadata)==null?void 0:m.__internal)==null?void 0:N.sonic_user_id,onClose:s,message:a[r].message})},`DebugMessageModal-${r}`),j&&e.jsx(R,{isOpen:!0,onClose:()=>b(!1),type:"success",size:"custom",noPadding:!0,children:e.jsx(Fe,{clientThreadId:t})},"DebugTreeViewer"),f&&e.jsx(R,{size:"normal",isOpen:!0,onClose:()=>x(void 0),type:"success",children:e.jsx("img",{src:f,alt:"debug image"})},"DebugFrameViewer")]}):null}function Ue(t,n){const l=JSON.stringify({conversation_id:v.getServerThreadId(t),messages:n},null,2),a=new Blob([l],{type:"application/json"}),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=`messages-${v.getServerThreadId(t)}.json`,o.click(),URL.revokeObjectURL(r)}function Ve({clientThreadId:t,messages:n}){const l=d.useCallback(()=>{Ue(t,n)},[t,n]);return e.jsx(L,{onClick:l,color:"primary",size:"small",icon:Me,children:e.jsx(ie,{...A.downloadRawConversation})})}function ze(t){const[n,l]=d.useState([]),a=te(),{frameAssets:r}=t;return d.useEffect(()=>{async function o(){const c=r.map(async({image_asset_pointer:s,timestamp:i})=>{const u={asset:s};return{src:(await ae.fetch(a,u)).url,timestamp:i}});return Promise.all(c)}r.length>0&&o().then(l)},[r,a]),e.jsx(Le,{frames:n,setFrameSrc:t.setFrameSrc})}function k(t){const n=k.useAssetPointerSource(t.assetPointer,t.conversationId),l=k.useAudioSource(t.audio),a=n??l,o=ue("3230069703").config.value.expirySeconds,[c,s]=d.useState(Date.now()),i=d.useRef(null);return d.useEffect(()=>{const u=setInterval(()=>{i.current&&i.current.currentTime>0&&!i.current.paused&&!i.current.ended&&i.current.readyState>2||s(Date.now())},o*1e3);return()=>clearInterval(u)},[o]),a?e.jsx("audio",{ref:i,controls:!0,src:a,className:"w-full"},c):null}k.useAssetPointerSource=(t,n)=>{const[l,a]=d.useState(null),r=te();return d.useEffect(()=>{t&&ae.fetch(r,{asset:t,conversationId:n}).then(o=>{a(o.url)})},[r,t,n]),l};k.useAudioSource=t=>{const[n,l]=d.useState(null);return d.useEffect(()=>{if(t){const a=atob(t.payload),r=new Uint8Array(a.length);for(let s=0;s<a.length;s++)r[s]=a.charCodeAt(s);const o=new Blob([r],{type:`audio/${t.format}`}),c=URL.createObjectURL(o);return l(c),()=>{URL.revokeObjectURL(c)}}},[t]),n};const Be=_.div`overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 popover bg-token-main-surface-primary`,qe=_.pre`whitespace-pre-wrap text-sm`,Ge=_.div`px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-white/10 border-gray-200`,A=ce({debugTitle:{id:"DebugSidebar.debugTitle",defaultMessage:"Debug"},copyText:{id:"DebugSidebar.copyText",defaultMessage:"Copy text"},downloadRawConversation:{id:"DebugSidebar.downloadRawConversation",defaultMessage:"Download raw conversation"},uploadRawConversation:{id:"DebugSidebar.uploadRawConversation",defaultMessage:"Upload conversation dump"},closeSidebar:{id:"DebugSidebar.closeSidebar",defaultMessage:"Close sidebar"}});export{$e as DebugConversation,It as DebugConversationSidebar,Ft as OpenDebugSidebarButton,Ae as default,Ue as downloadMessages};
//# sourceMappingURL=f6dbhj8kfdxmaufr.js.map