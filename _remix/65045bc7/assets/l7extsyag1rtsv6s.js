import{r as C,j as x,bq as M,cQ as z,ca as S,e8 as A,bQ as G}from"./fkn4uxbppg2xucmj.js";import{bt as k}from"./jxzh1g6rrwhx6lt8.js";import{u as w}from"./ho3mkh5nuatji5et.js";import{a as E}from"./cp9ys6mfnq419o62.js";import{l as I,T as h}from"./gx9qfocjvfutqf3s.js";import"./mhy7gzmsliahnmju.js";import"./e1qcn3mqlt5vh1uh.js";import"./dbdzkfolrg6wp7z0.js";import"./f5e5bh9es6ukgb68.js";function B({messages:a,clientThreadId:n,isLastTurnInConversation:l,onRequestCompletion:i}){var u,g,y;const[m,...t]=a,d=I(),e=(y=(g=(u=t.find(o=>{var s,r,c;return((c=(r=(s=o.message.metadata)==null?void 0:s.jit_plugin_data)==null?void 0:r.from_server)==null?void 0:c.type)==="confirm_action"}))==null?void 0:u.message.metadata)==null?void 0:g.jit_plugin_data)==null?void 0:y.from_server,j=(e==null?void 0:e.body.actions[0].type)==="contact_gizmo"?e==null?void 0:e.body.actions[0].contact_gizmo.gizmo_id:void 0,{data:_}=w(j),p=l&&t[t.length-1];return C.useEffect(()=>{var s,r,c,v,T;if(d||!p||((c=(r=(s=p.message.metadata)==null?void 0:s.jit_plugin_data)==null?void 0:r.from_server)==null?void 0:c.type)!=="confirm_action")return;const o=(T=(v=p.message.metadata)==null?void 0:v.jit_plugin_data)==null?void 0:T.from_server;if((o==null?void 0:o.type)==="confirm_action"){const f=o.body.actions.find(b=>b.type==="contact_gizmo");f&&f.type==="contact_gizmo"&&N({allMessages:a,assistantMessage:m,clientThreadId:n,onRequestCompletion:i,actionData:{type:"contact_gizmo",...f.contact_gizmo}})}},[d,p,i,a,m,n]),x.jsx("div",{className:"my-2 flex flex-col",children:_&&x.jsx(E,{gizmoResource:_})})}function N({actionData:a,allMessages:n,assistantMessage:l,clientThreadId:i,onRequestCompletion:m}){const t={id:M(),author:{role:z.Tool,name:l.message.recipient},content:{content_type:S.Text,parts:[""]},recipient:"all",metadata:{jit_plugin_data:{from_client:a}}};h.updateTree(i,e=>{e.addNode(t.id,t,n[n.length-1].message.id,z.Tool,{completionSampleFinishTime:Date.now()})}),h.setThreadCurrentLeafId(i,t.id);const d=new k;m({type:A.Next,promptId:t.id,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!1,completionMetadata:{conversationMode:{kind:G.PrimaryAssistant}},turnTracker:d})}export{B as GizmoContactsMessage};
//# sourceMappingURL=l7extsyag1rtsv6s.js.map