const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/lznxhzguq23zvbst.js","assets/elatgogjtv7nqe0m.js","assets/cr91oy4eihkrvo1z.js","assets/root-f2ivi636.css","assets/dt30ajj9yy0fx43z.js","assets/htp5iqft2rzvr58f.js","assets/conversation-small-mclg7qvi.css","assets/fmv8nex9lm6fgdd1.js","assets/mhoun9ad2jk8xyl3.js","assets/h1xmpcoqij88ddar.js","assets/cguzkiw1ysteyh96.js","assets/m3z1qz3cc8c6u3xf.js","assets/mmf744yo7oex6s8h.js","assets/omba5vbgw2kqkaoe.js","assets/frk1etidprk2mn5h.js","assets/korsme7s7hk24byb.js","assets/dm4x0k3texc94l9t.js"])))=>i.map(i=>d[i]);
import{t as e,r as d,O as _,M as V,ag as H,aT as F,R as L,T as oe,aU as le,a5 as Q,a6 as X,a3 as Y,bF as Z,bz as P,a8 as ie,ad as ce,f5 as b,a as ee,a4 as de}from"./elatgogjtv7nqe0m.js";import{x as ue,T as h,y as me}from"./h1jpzm6tqkxt344d.js";import"./lknunzf857a9nkhn.js";import"./invgdph6vy3ds9mr.js";import{f3 as B,f4 as z,R as f,cA as ge,e as xe,c as te,m as w,b as se,K as fe,L as pe,O as q,Q as G,U as be,dh as R,f5 as he,f6 as ve,f7 as ae}from"./htp5iqft2rzvr58f.js";import{U as je}from"./iwxixxpe5e3magz2.js";import{S as J,c as ye}from"./n67zukerwlagub9o.js";import{C as Se}from"./exw8rqvcib9p1xbv.js";import{C as we}from"./dt30ajj9yy0fx43z.js";import{aa as Ce,am as ne,b2 as _e,o as Ne}from"./cr91oy4eihkrvo1z.js";import{d as ke}from"./knfub95ffuag96bv.js";import"./iudm9ugwilu2skh4.js";import"./njnyzv45aw3y7o3m.js";import"./d3kpx6lkwfhwxx04.js";import"./gt9yt6m8kstbc8qg.js";import"./pa1iyn2idxl19s5v.js";import"./mhoun9ad2jk8xyl3.js";import"./l6guvzd52gy27z13.js";import"./e52rm0fcoysbc5g7.js";import"./heqqk27j3mi75hhq.js";import"./cguzkiw1ysteyh96.js";import"./goajibdwxzha23en.js";import"./k4jmcc7xi21ufmsx.js";import"./oxxp3esgmgzz1mrz.js";import"./i1wp36sdgmc0qfin.js";import"./h33iotbq4bwsa76b.js";import"./jxoikmmk4apd7oqs.js";import"./l9le4ssitosrl7uj.js";import"./bft7xbcf3rl132cf.js";import"./k0s19zho669v5qrb.js";import"./jk6trg67dh7lvgks.js";import"./g1iwufhjwkzbmk25.js";import"./ctmdnf8bez35b94j.js";import"./dkvt10yo0ml0h6i4.js";import"./h4th2f6uml6rek7b.js";import"./jypvyf7lrz9rxs3a.js";import"./g0yc30qhytxe7p1x.js";import"./jp8rwyahge8nbheg.js";import"./9s7ikcyvuoe4rox8.js";function Me({children:t,sidebarOpen:n,onClose:o}){return e.jsx(B.Root,{show:n,as:d.Fragment,children:e.jsxs(z,{as:"div",className:"relative z-10",onClose:o,children:[e.jsx("div",{className:"fixed inset-0"}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e.jsx(B.Child,{as:d.Fragment,enter:"transform transition ease-in-out duration-100 sm:duration-300",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-300 sm:duration-500",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:e.jsx(z.Panel,{className:"pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",children:e.jsx("div",{className:"h-full overflow-y-auto bg-token-main-surface-primary shadow-xl",children:t})})})})})})]})})}function De({clientThreadId:t}){const{rebaseSystemMessageContent:n,showDebugConversationTurns:o}=f(),[a,r]=d.useState(()=>n?JSON.stringify(n,null,2):void 0),[l,c]=d.useState(!!n),s=ue(t,h.getThreadCurrentLeafId(t)),u=ge(s,m=>m.content.content_type===V.SystemContent)?.content??null,j=()=>{r(u?JSON.stringify(u,null,2):"")},x=H(),p=d.useMemo(()=>xe(m=>{try{m?f.setState({rebaseSystemMessageContent:{...JSON.parse(m),content_type:V.SystemContent}}):f.setState({rebaseSystemMessageContent:null}),x.closeAll()}catch{x.danger("The System Message is not valid JSON")}},500),[x]);return d.useEffect(()=>{l?p(a):(p.cancel(),f.setState({rebaseSystemMessageContent:null}))},[p,l,a]),e.jsxs("div",{className:"flex flex-col gap-3 px-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(te,{label:"Enable to apply this system message to the current conversation.",children:e.jsx(w,{id:"enabled",label:"Enabled",checked:l,onChange:m=>c(m.currentTarget.checked)})}),e.jsx(w,{id:"show-internal-conversation-turns",label:"Conversation debug mode",checked:o,onChange:()=>{f.setState({showDebugConversationTurns:!o})}})]}),e.jsx(F,{disabled:!u,className:"mt-2",onClick:j,size:"small",children:"Load active system message"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm",children:"System Message"}),e.jsx(Te,{disabled:!l,placeholder:u?"Press `Load active system message` to pre-populate this":"Start a conversation and then press `Load active system message` to pre-populate this",className:"min-h-[75vh] rounded-md border border-gray-400 p-1 font-mono",value:a,onChange:m=>r(m.target.value)})]})]})}const Te=_.textarea`w-full rounded-lg border border-token-border-light bg-token-main-surface-primary text-sm text-token-text-primary focus:border-token-text-primary focus:shadow-none focus:outline-none focus:ring-token-text-primary disabled:bg-token-main-surface-tertiary`;function Pe({clientThreadId:t}){const[n,o]=d.useState([]),a=h.getThreadCurrentLeafId(t),r=h.getThreadConversationTurns(t,a),l=s=>{const u=h.getTree(t).getLeafFromNode(s);h.setThreadCurrentLeafId(t,u.id)},c=s=>{o(i=>[...i,a]),l(s)};return e.jsxs(e.Fragment,{children:[n.length>0&&e.jsxs(F,{className:"absolute left-2 top-2",color:"secondary",onClick:()=>{const s=n[n.length-1];l(s),o(i=>i.slice(0,-1))},children:[e.jsx(Ce,{className:"icon-sm"}),"Go back to ",n[n.length-1]]}),e.jsx("div",{className:"flex flex-col items-center gap-4 overflow-auto p-4 text-xs",children:r.map((s,i)=>{const u=s.messages[0].nodeId,j=h.getTree(t),x=i!==0?j.getParent(u):null,p=x!=null?x.children.findIndex(g=>u===g):0,m=x!=null?x.children:[],S=m.slice(0,p),y=m.slice(p+1);let v;switch(s.role){case L.User:v="bg-blue-500";break;case L.Assistant:v="bg-gray-600";break;default:v="bg-gray-400";break}return e.jsxs("div",{className:oe("relative p-2",v),children:[e.jsx("div",{className:"absolute bottom-0 left-0 -ml-2 flex -translate-x-full gap-2 pl-2",children:S.map(g=>e.jsx(K,{variantId:g,onChangeItemInView:c},g))}),e.jsx("div",{className:"absolute left-full top-0 ml-2 flex gap-2 pr-2",children:y.map(g=>e.jsx(K,{variantId:g,onChangeItemInView:c},g))}),e.jsx("div",{className:"flex flex-col gap-2",children:s.messages.map(g=>e.jsxs("div",{className:"h-14 w-32 truncate bg-gray-200 p-1 text-black",children:[e.jsx("div",{className:"font-semibold",children:g.nodeId}),e.jsx("div",{className:"italic text-token-text-tertiary",children:g.message.author.role}),e.jsx("div",{children:se(g.message)})]},g.nodeId))})]},i)})})]})}function K({variantId:t,onChangeItemInView:n}){return e.jsx("button",{className:"w-32 truncate bg-gray-400 p-2 text-black opacity-50 hover:opacity-100",onClick:()=>{n(t)},children:e.jsx("span",{className:"bg-gray-200 p-2",children:t})},t)}const Re=Q(()=>X(()=>import("./lznxhzguq23zvbst.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).then(t=>t.DebugModalContents),{ssr:!1}),Ae=Q(()=>X(()=>import("./dm4x0k3texc94l9t.js"),__vite__mapDeps([16,1,2,3,5,6])).then(t=>t.FramesViewer),{ssr:!1});function Dt(){return e.jsx("button",{"data-testid":"open-debug-sidebar-button",className:"flex h-6 w-6 items-center justify-center rounded-full border border-token-border-light text-xs text-token-text-secondary",onClick:()=>{je.setActiveSidebar("debug")},children:e.jsx(ne,{className:"icon-xs"})})}function Le({children:t,title:n,icon:o,isOpen:a,slideOver:r,onClose:l}){const c=e.jsxs(Ve,{children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 text-lg font-semibold text-gray-900 dark:text-white",children:[e.jsx(o,{className:"icon-sm"}),n]}),e.jsx("div",{className:"mr-2 mt-2 flex h-7 items-center",children:e.jsx(le,{onClick:l})})]}),t]});return r?e.jsx(Me,{sidebarOpen:a,onClose:l,children:c}):a?c:null}function Fe({nodes:t,setDebugNodeIndex:n,setFrameSrc:o,conversationId:a}){const r=t.map((l,c)=>{const s=l.message,{role:i,name:u}=s.author,j=u&&u!==i,x=b(s,"metadata.__internal.model_id"),p=b(s,"metadata.__internal.agent.settings.completion_api.engine"),m=b(s,"metadata.__internal.model_experiment_name"),S=b(s,"metadata.__internal.model_experiment_treatment"),y=b(s,"metadata.__internal.normalized_model_side"),v=b(s,"metadata.__internal.alternative_model_selection_rule"),g=b(s,"metadata.__internal.model_experiment_group_name"),N=b(s,"metadata.__internal.model_experiment_group_params"),k=b(s,"metadata.__internal.model_experiment_override"),O=b(s,"metadata.__internal.model_experiment_eval_seq"),M=b(s,"metadata.__internal.raw_tokens")?.length,E=b(s,"metadata.request_id"),U=R.getAudio(s),$=R.getAudioAssetPointers(s),re=R.getFrameAssetPointers(s);return e.jsxs(ze,{role:"button",onClick:()=>n(c),children:[e.jsxs("div",{className:"break-words text-xs font-semibold uppercase text-token-text-tertiary",children:[i,j&&` (${u})`,s.recipient&&" -> ",he(s)]}),(s.author.role!==L.System||E)&&e.jsxs("div",{className:"text-xs text-token-text-tertiary",children:[e.jsxs("div",{children:["ID: ",s.id]}),l.id!==s.id&&e.jsxs("div",{children:["UI Node ID: ",l.id]}),e.jsxs("div",{children:["Req ID: ",E||"Reload page to see ID"]})]}),e.jsx("div",{className:"line-clamp-6",children:se(s)}),(M||x||p||m||S||y||v||g||N||k||O)&&e.jsxs("div",{className:"mt-4 w-full self-start rounded-xl bg-blue-200 px-3 py-0.5 text-xs text-black",children:[M!==void 0&&e.jsxs("div",{children:[e.jsx("b",{children:"Tokens Count:"})," ",M]}),x&&e.jsxs("div",{children:[e.jsx("b",{children:"Model ID:"})," ",x]}),p&&e.jsxs("div",{children:[e.jsx("b",{children:"Engine:"})," ",p]}),m&&e.jsxs("div",{children:[e.jsx("b",{children:"Experiment:"})," ",m]}),S&&e.jsxs("div",{children:[e.jsx("b",{children:"Treatment:"})," ",S]}),y&&e.jsxs("div",{children:[e.jsx("b",{children:"Normalized Side:"})," ",y]}),v&&e.jsxs("div",{children:[e.jsx("b",{children:"Alternative Model Rule:"})," ",v]}),g&&e.jsxs("div",{children:[e.jsx("b",{children:"Group Name:"})," ",g]}),N&&e.jsxs("div",{children:[e.jsx("b",{children:"Group Params:"}),e.jsx("div",{children:JSON.stringify(N,null,2)})]}),k&&e.jsxs("div",{children:[e.jsx("b",{children:"Above Params are Overridden By:"})," ",k]}),O&&e.jsxs("div",{children:[e.jsx("b",{children:"Experiment Eval Seq:"})," click to see"]})]}),U.length||$.length?e.jsxs("div",{className:"mt-4 flex flex-col flex-nowrap gap-2",children:[e.jsx($e,{frameAssets:re,setFrameSrc:o},c),U.map((D,T)=>e.jsx(C,{audio:D,conversationId:a},T)),$.map((D,T)=>e.jsx(C,{assetPointer:D,conversationId:a},T))]}):null]},s.id)});return e.jsx(Be,{children:r})}const A=t=>e.jsx(ye.Input,{...t,inputClassName:"focus:ring-0"});function Ie(){const t=f(),o=ke().map(a=>({label:a.name,options:a.options.map(r=>({label:`${r.value} (${r.name})`,value:r.value}))}));return e.jsxs("div",{className:"mt-2 flex flex-col justify-around gap-3 px-4 py-1 text-xs font-semibold",children:[e.jsx(w,{id:"force-paragen",label:"Force Parallel Gen",checked:t.forceParagen,onChange:()=>{f.setState({forceParagen:!t.forceParagen})}}),e.jsx(Se,{options:o,name:"force-paragen-model",className:"shadow-none dark:text-gray-800",isDisabled:!t.forceParagen,isLoading:o.length===0,value:t.forceParagenModel,isClearable:!0,isMulti:!1,components:{Input:A},onChange:a=>{f.setState({forceParagenModel:a??ve})}}),t.forceParagen?e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Paragen Stream Type:"}),e.jsx(J,{options:[{label:"Do Not Override",value:"none"},{label:"Force Classic Stream Behavior",value:"default"},{label:"Wait for Assistant",value:"wait_for_assistant"},{label:"Interleave",value:"interleave"}],name:"paragen-stream-type",className:"shadow-none dark:text-gray-800",value:t.paragenStreamType==="none"?{value:"none",label:"Do Not Override"}:t.paragenStreamType==="default"?{value:"default",label:"Force Classic Stream Behavior"}:t.paragenStreamType==="wait_for_assistant"?{value:"wait_for_assistant",label:"Wait for Assistant"}:{value:"interleave",label:"Interleave"},isMulti:!1,components:{Input:A},onChange:a=>{f.setState({paragenStreamType:a?.value??"none"})}})]}):null,e.jsx(w,{id:"show-paragen-metadata",label:"Show Paragen Metadata",checked:t.showParagenMetadata,onChange:()=>{f.setState({showParagenMetadata:!t.showParagenMetadata})}}),e.jsx("div",{children:"Force Use Search:"}),e.jsx(J,{id:"force-use-search",options:[{label:"Default",value:"default"},{label:"Force",value:"true"},{label:"Disable",value:"false"}],name:"force-use-search",className:"shadow-none dark:text-gray-800",value:t.forceUseSearch==null?{value:"default",label:"Default"}:t.forceUseSearch?{value:"true",label:"Force"}:{value:"false",label:"Disable"},isMulti:!1,components:{Input:A},onChange:a=>{f.setState({forceUseSearch:(a?.value??"default")==="default"?null:a?.value==="true"})}}),e.jsx(w,{id:"force-rate-limit",label:"Force Rate Limit",checked:t.forceRateLimit,onChange:()=>{f.setState({forceRateLimit:!t.forceRateLimit})}}),e.jsx(w,{id:"reset-rate-limit",label:"Reset Rate Limits",checked:t.resetRateLimits,onChange:()=>{f.setState({resetRateLimits:!t.resetRateLimits})}}),e.jsx(te,{label:"Enabling this will show debug conversation messages in the chat",children:e.jsx(w,{id:"show-internal-conversation-turns",label:"Conversation debug mode",checked:t.showDebugConversationTurns,onChange:()=>{f.setState({showDebugConversationTurns:!t.showDebugConversationTurns})}})})]})}const W=_.div`px-3 pb-2 text-xs font-semibold uppercase border-b-2 ${({$isSelected:t})=>t?"border-black dark:border-white":"border-transparent"}`;function Tt({clientThreadId:t,isOpen:n,slideOver:o,onClose:a}){const r=Y(),l=Z(),[c,s]=d.useState("conversation");return l?.includes("debug")?e.jsx(Le,{icon:ne,title:r.formatMessage(I.debugTitle),isOpen:n,slideOver:o,onClose:a,children:e.jsxs(fe,{orientation:"vertical",defaultValue:c,onValueChange:i=>s(i),children:[e.jsxs(pe,{className:"mb-4 flex items-center justify-center gap-2 px-2 py-1 text-xs",children:[e.jsx(q,{value:"conversation",children:e.jsx(W,{$isSelected:c==="conversation",children:"Conversation"})}),e.jsx(q,{value:"system-message-editor",children:e.jsx(W,{$isSelected:c==="system-message-editor",children:"System Message"})}),!1]}),e.jsx(G,{value:"conversation",children:e.jsx(Oe,{clientThreadId:t})}),e.jsx(G,{value:"system-message-editor",children:e.jsx(De,{clientThreadId:t})}),!1]})}):null}function Oe({clientThreadId:t}){const n=Y(),o=h.getThreadCurrentLeafId(t),a=me(t,o),[r,l]=d.useState(),c=Z(),s=d.useCallback(()=>{l(void 0)},[]),i=H(),u=d.useCallback(y=>{const v=h.getTree(t);be(v.getTextFromThread(o),i,y)},[o,t,i]),[j,x]=d.useState(!1),[p,m]=d.useState(void 0);return c?.includes("debug")?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-2 flex items-center justify-around px-4 py-1 text-xs font-semibold uppercase",children:e.jsx(Ue,{clientThreadId:t,messages:a.map(y=>y.message)})}),!1,e.jsxs("div",{className:"flex items-center justify-around gap-2 px-4 py-1 text-xs font-semibold uppercase",children:[e.jsx("div",{children:e.jsx(we,{onCopy:u,buttonText:n.formatMessage(I.copyText)})}),e.jsxs("button",{className:"flex items-center justify-center gap-2",onClick:()=>x(!0),children:[e.jsx(_e,{className:"icon-sm rotate-90"}),"View tree"]})]}),e.jsx(Ie,{}),e.jsx(Fe,{nodes:a,setDebugNodeIndex:l,setFrameSrc:m,conversationId:h.getServerThreadId(t)}),r!==void 0&&e.jsx(P,{type:"success",size:"fullscreen",noPadding:!0,isOpen:!0,onClose:s,children:e.jsx(Re,{threadId:a[r].message.metadata?.__internal?.sonic_thread_id,threadUserId:a[r].message.metadata?.__internal?.sonic_user_id,onClose:s,message:a[r].message})},`DebugMessageModal-${r}`),j&&e.jsx(P,{isOpen:!0,onClose:()=>x(!1),type:"success",size:"custom",noPadding:!0,children:e.jsx(Pe,{clientThreadId:t})},"DebugTreeViewer"),p&&e.jsx(P,{size:"normal",isOpen:!0,onClose:()=>m(void 0),type:"success",children:e.jsx("img",{src:p,alt:"debug image"})},"DebugFrameViewer")]}):null}function Ee(t,n){const o=JSON.stringify({conversation_id:h.getServerThreadId(t),messages:n},null,2),a=new Blob([o],{type:"application/json"}),r=URL.createObjectURL(a),l=document.createElement("a");l.href=r,l.download=`messages-${h.getServerThreadId(t)}.json`,l.click(),URL.revokeObjectURL(r)}function Ue({clientThreadId:t,messages:n}){const o=d.useCallback(()=>{Ee(t,n)},[t,n]);return e.jsx(F,{onClick:o,color:"primary",size:"small",icon:Ne,children:e.jsx(ie,{...I.downloadRawConversation})})}function $e(t){const[n,o]=d.useState([]),a=ee(),{frameAssets:r}=t;return d.useEffect(()=>{async function l(){const c=r.map(async({image_asset_pointer:s,timestamp:i})=>{const u={asset:s};return{src:(await ae.fetch(a,u)).url,timestamp:i}});return Promise.all(c)}r.length>0&&l().then(o)},[r,a]),e.jsx(Ae,{frames:n,setFrameSrc:t.setFrameSrc})}function C(t){const n=C.useAssetPointerSource(t.assetPointer,t.conversationId),o=C.useAudioSource(t.audio),a=n??o,l=de("3230069703").config.value.expirySeconds,[c,s]=d.useState(Date.now()),i=d.useRef(null);return d.useEffect(()=>{const u=setInterval(()=>{i.current&&i.current.currentTime>0&&!i.current.paused&&!i.current.ended&&i.current.readyState>2||s(Date.now())},l*1e3);return()=>clearInterval(u)},[l]),a?e.jsx("audio",{ref:i,controls:!0,src:a,className:"w-full"},c):null}C.useAssetPointerSource=(t,n)=>{const[o,a]=d.useState(null),r=ee();return d.useEffect(()=>{t&&ae.fetch(r,{asset:t,conversationId:n}).then(l=>{a(l.url)})},[r,t,n]),o};C.useAudioSource=t=>{const[n,o]=d.useState(null);return d.useEffect(()=>{if(t){const a=atob(t.payload),r=new Uint8Array(a.length);for(let s=0;s<a.length;s++)r[s]=a.charCodeAt(s);const l=new Blob([r],{type:`audio/${t.format}`}),c=URL.createObjectURL(l);return o(c),()=>{URL.revokeObjectURL(c)}}},[t]),n};const Ve=_.div`overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 popover bg-token-main-surface-primary`,Be=_.pre`whitespace-pre-wrap text-sm`,ze=_.div`px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-white/10 border-gray-200`,I=ce({debugTitle:{id:"DebugSidebar.debugTitle",defaultMessage:"Debug"},copyText:{id:"DebugSidebar.copyText",defaultMessage:"Copy text"},downloadRawConversation:{id:"DebugSidebar.downloadRawConversation",defaultMessage:"Download raw conversation"},uploadRawConversation:{id:"DebugSidebar.uploadRawConversation",defaultMessage:"Upload conversation dump"},closeSidebar:{id:"DebugSidebar.closeSidebar",defaultMessage:"Close sidebar"}});export{Oe as DebugConversation,Tt as DebugConversationSidebar,Dt as OpenDebugSidebarButton,Le as default};
//# sourceMappingURL=vtf8waywkvgl9hms.js.map