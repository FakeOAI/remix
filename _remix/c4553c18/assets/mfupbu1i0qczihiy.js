import{r as y,t as g,v,R as f,M as z,ea as M,a3 as T}from"./bzvcy3tl84gc3bl9.js";import{bP as x}from"./moittmkqym6x2q8u.js";import{a as h}from"./f064jjm5wr3qzqg4.js";import{a as j}from"./jez09p2lu4osxgsl.js";import{c as C,T as l}from"./c3nvn3bmsyj77vtl.js";import"./o4htpc5iqra16abg.js";import"./ebzdroxnuj9v1lzs.js";import"./m8du01a31yeowgq0.js";import"./d6ri6s3v2tbmwdon.js";function P({messages:e,clientThreadId:o,isLastTurnInConversation:m,onRequestCompletion:a}){const[i,...t]=e,n=C(),s=t.find(c=>c.message.metadata?.jit_plugin_data?.from_server?.type==="confirm_action")?.message.metadata?.jit_plugin_data?.from_server,_=s?.body.actions[0].type==="contact_gizmo"?s?.body.actions[0].contact_gizmo.gizmo_id:void 0,{data:p}=h(_),r=m&&t[t.length-1];return y.useEffect(()=>{if(n||!r||r.message.metadata?.jit_plugin_data?.from_server?.type!=="confirm_action")return;const c=r.message.metadata?.jit_plugin_data?.from_server;if(c?.type==="confirm_action"){const d=c.body.actions.find(u=>u.type==="contact_gizmo");d&&d.type==="contact_gizmo"&&S({allMessages:e,assistantMessage:i,clientThreadId:o,onRequestCompletion:a,actionData:{type:"contact_gizmo",...d.contact_gizmo}})}},[n,r,a,e,i,o]),g.jsx("div",{className:"my-2 flex flex-col",children:p&&g.jsx(j,{gizmoResource:p})})}function S({actionData:e,allMessages:o,assistantMessage:m,clientThreadId:a,onRequestCompletion:i}){const t={id:v(),author:{role:f.Tool,name:m.message.recipient},content:{content_type:z.Text,parts:[""]},recipient:"all",metadata:{jit_plugin_data:{from_client:e}}};l.updateTree(a,s=>{s.addNode(t.id,t,o[o.length-1].message.id,f.Tool,{completionSampleFinishTime:Date.now()})}),l.setThreadCurrentLeafId(a,t.id);const n=new x;i({type:M.Next,promptId:t.id,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!1,completionMetadata:{conversationMode:{kind:T.PrimaryAssistant}},turnTracker:n})}export{P as GizmoContactsMessage};
//# sourceMappingURL=mfupbu1i0qczihiy.js.map