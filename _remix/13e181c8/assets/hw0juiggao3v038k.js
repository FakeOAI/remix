import{r as y,l as g,v,R as l,M as z,e6 as M,aH as T}from"./d2qv8s87ysb5f68b.js";import{c1 as x}from"./hq7ysfundi85z1is.js";import{b as h}from"./m7osvilbcgxty2nd.js";import{a as j}from"./l8re8vpxsj5gc916.js";import{e as C,T as f}from"./7otbpc6iiji8djks.js";import"./ljnrwgh8vy488xdo.js";import"./k59821nizpj4zkp2.js";import"./jc8x6oz4qxa0il5z.js";function N({messages:e,clientThreadId:o,isLastTurnInConversation:m,onRequestCompletion:a}){const[i,...t]=e,n=C(),s=t.find(c=>c.message.metadata?.jit_plugin_data?.from_server?.type==="confirm_action")?.message.metadata?.jit_plugin_data?.from_server,_=s?.body.actions[0].type==="contact_gizmo"?s?.body.actions[0].contact_gizmo.gizmo_id:void 0,{data:p}=h(_),r=m&&t[t.length-1];return y.useEffect(()=>{if(n||!r||r.message.metadata?.jit_plugin_data?.from_server?.type!=="confirm_action")return;const c=r.message.metadata?.jit_plugin_data?.from_server;if(c?.type==="confirm_action"){const d=c.body.actions.find(u=>u.type==="contact_gizmo");d&&d.type==="contact_gizmo"&&S({allMessages:e,assistantMessage:i,clientThreadId:o,onRequestCompletion:a,actionData:{type:"contact_gizmo",...d.contact_gizmo}})}},[n,r,a,e,i,o]),g.jsx("div",{className:"my-2 flex flex-col",children:p&&g.jsx(j,{gizmoResource:p})})}function S({actionData:e,allMessages:o,assistantMessage:m,clientThreadId:a,onRequestCompletion:i}){const t={id:v(),author:{role:l.Tool,name:m.message.recipient},content:{content_type:z.Text,parts:[""]},recipient:"all",metadata:{jit_plugin_data:{from_client:e}}};f.updateTree(a,s=>{s.addNode(t.id,t,o[o.length-1].message.id,l.Tool,{completionSampleFinishTime:Date.now()})}),f.setThreadCurrentLeafId(a,t.id);const n=new x;i({type:M.Next,promptId:t.id,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!1,completionMetadata:{conversationMode:{kind:T.PrimaryAssistant}},turnTracker:n})}export{N as GizmoContactsMessage};
//# sourceMappingURL=hw0juiggao3v038k.js.map