import{r as y,x as g,v,R as f,M as z,e3 as M,a5 as T}from"./jipkz7wahhvzzuqx.js";import{bR as x}from"./e6zhtx99a7i1g9zc.js";import{a as h}from"./lb2bw82esu8k4ire.js";import{a as j}from"./nsw6odx5xh6i9cc3.js";import{c as C,T as l}from"./lbv1zpv4g2ap41f2.js";import"./n5nz8vnsxibd6bik.js";import"./fwm14uzkyzsxflxc.js";import"./f2w9prfaqv5jn6b6.js";import"./hu4ya3hu1q2mtj3c.js";function D({messages:e,clientThreadId:o,isLastTurnInConversation:m,onRequestCompletion:a}){const[i,...t]=e,n=C(),s=t.find(c=>c.message.metadata?.jit_plugin_data?.from_server?.type==="confirm_action")?.message.metadata?.jit_plugin_data?.from_server,_=s?.body.actions[0].type==="contact_gizmo"?s?.body.actions[0].contact_gizmo.gizmo_id:void 0,{data:p}=h(_),r=m&&t[t.length-1];return y.useEffect(()=>{if(n||!r||r.message.metadata?.jit_plugin_data?.from_server?.type!=="confirm_action")return;const c=r.message.metadata?.jit_plugin_data?.from_server;if(c?.type==="confirm_action"){const d=c.body.actions.find(u=>u.type==="contact_gizmo");d&&d.type==="contact_gizmo"&&S({allMessages:e,assistantMessage:i,clientThreadId:o,onRequestCompletion:a,actionData:{type:"contact_gizmo",...d.contact_gizmo}})}},[n,r,a,e,i,o]),g.jsx("div",{className:"my-2 flex flex-col",children:p&&g.jsx(j,{gizmoResource:p})})}function S({actionData:e,allMessages:o,assistantMessage:m,clientThreadId:a,onRequestCompletion:i}){const t={id:v(),author:{role:f.Tool,name:m.message.recipient},content:{content_type:z.Text,parts:[""]},recipient:"all",metadata:{jit_plugin_data:{from_client:e}}};l.updateTree(a,s=>{s.addNode(t.id,t,o[o.length-1].message.id,f.Tool,{completionSampleFinishTime:Date.now()})}),l.setThreadCurrentLeafId(a,t.id);const n=new x;i({type:M.Next,promptId:t.id,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!1,completionMetadata:{conversationMode:{kind:T.PrimaryAssistant}},turnTracker:n})}export{D as GizmoContactsMessage};
//# sourceMappingURL=i5pcdb61b5yolvww.js.map