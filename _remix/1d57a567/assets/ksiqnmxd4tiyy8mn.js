import{r as y,t as g,v,R as f,M as z,eb as M,ab as T}from"./dwj463axfl1a67vy.js";import{bT as x}from"./b11jkrv24syg2mqz.js";import{a as h}from"./16gu0sxlj72alb5n.js";import{a as j}from"./bvy1m1fnx75biqs9.js";import{c as b,T as l}from"./colyzmira78iz5iw.js";import"./cmznuno4cnc0148c.js";import"./bk7xvzy43i0okmow.js";import"./gtjppmatlgzvi4rk.js";import"./f817xyr5sicavy4d.js";function D({messages:e,clientThreadId:o,isLastTurnInConversation:m,onRequestCompletion:a}){const[i,...t]=e,n=b(),s=t.find(c=>c.message.metadata?.jit_plugin_data?.from_server?.type==="confirm_action")?.message.metadata?.jit_plugin_data?.from_server,_=s?.body.actions[0].type==="contact_gizmo"?s?.body.actions[0].contact_gizmo.gizmo_id:void 0,{data:p}=h(_),r=m&&t[t.length-1];return y.useEffect(()=>{if(n||!r||r.message.metadata?.jit_plugin_data?.from_server?.type!=="confirm_action")return;const c=r.message.metadata?.jit_plugin_data?.from_server;if(c?.type==="confirm_action"){const d=c.body.actions.find(u=>u.type==="contact_gizmo");d&&d.type==="contact_gizmo"&&C({allMessages:e,assistantMessage:i,clientThreadId:o,onRequestCompletion:a,actionData:{type:"contact_gizmo",...d.contact_gizmo}})}},[n,r,a,e,i,o]),g.jsx("div",{className:"my-2 flex flex-col",children:p&&g.jsx(j,{gizmoResource:p})})}function C({actionData:e,allMessages:o,assistantMessage:m,clientThreadId:a,onRequestCompletion:i}){const t={id:v(),author:{role:f.Tool,name:m.message.recipient},content:{content_type:z.Text,parts:[""]},recipient:"all",metadata:{jit_plugin_data:{from_client:e}}};l.updateTree(a,s=>{s.addNode(t.id,t,o[o.length-1].message.id,f.Tool,{completionSampleFinishTime:Date.now()})}),l.setThreadCurrentLeafId(a,t.id);const n=new x;i({type:M.Next,promptId:t.id,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!1,completionMetadata:{conversationMode:{kind:T.PrimaryAssistant}},turnTracker:n})}export{D as GizmoContactsMessage};
//# sourceMappingURL=ksiqnmxd4tiyy8mn.js.map