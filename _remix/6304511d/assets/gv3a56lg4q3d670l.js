import{r as C,j as x,ag as M,cN as z,c8 as S,eb as A,bQ as G}from"./gdbo8e7dyfri4is1.js";import{bR as N}from"./lfqdgp7xsc2kl8bj.js";import{d as R}from"./gjmdn4uakoveniqh.js";import{a as k}from"./kl5ztq095pzskmm9.js";import{g as w,T as h}from"./jjkm88pkr4s7hxuh.js";import"./hx4nuyiea8nyedix.js";import"./nmyaen56tvaynpzw.js";import"./kt8ugt55ef8vx1kh.js";function q({messages:a,clientThreadId:n,isLastTurnInConversation:f,onRequestCompletion:i}){var u,g,y;const[m,...t]=a,d=w(),e=(y=(g=(u=t.find(o=>{var s,r,c;return((c=(r=(s=o.message.metadata)==null?void 0:s.jit_plugin_data)==null?void 0:r.from_server)==null?void 0:c.type)==="confirm_action"}))==null?void 0:u.message.metadata)==null?void 0:g.jit_plugin_data)==null?void 0:y.from_server,j=(e==null?void 0:e.body.actions[0].type)==="contact_gizmo"?e==null?void 0:e.body.actions[0].contact_gizmo.gizmo_id:void 0,{data:_}=R(j),p=f&&t[t.length-1];return C.useEffect(()=>{var s,r,c,v,T;if(d||!p||((c=(r=(s=p.message.metadata)==null?void 0:s.jit_plugin_data)==null?void 0:r.from_server)==null?void 0:c.type)!=="confirm_action")return;const o=(T=(v=p.message.metadata)==null?void 0:v.jit_plugin_data)==null?void 0:T.from_server;if((o==null?void 0:o.type)==="confirm_action"){const l=o.body.actions.find(b=>b.type==="contact_gizmo");l&&l.type==="contact_gizmo"&&E({allMessages:a,assistantMessage:m,clientThreadId:n,onRequestCompletion:i,actionData:{type:"contact_gizmo",...l.contact_gizmo}})}},[d,p,i,a,m,n]),x.jsx("div",{className:"my-2 flex flex-col",children:_&&x.jsx(k,{gizmoResource:_})})}function E({actionData:a,allMessages:n,assistantMessage:f,clientThreadId:i,onRequestCompletion:m}){const t={id:M(),author:{role:z.Tool,name:f.message.recipient},content:{content_type:S.Text,parts:[""]},recipient:"all",metadata:{jit_plugin_data:{from_client:a}}};h.updateTree(i,e=>{e.addNode(t.id,t,n[n.length-1].message.id,z.Tool,{completionSampleFinishTime:Date.now()})}),h.setThreadCurrentLeafId(i,t.id);const d=new N;m({type:A.Next,promptId:t.id,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!1,completionMetadata:{conversationMode:{kind:G.PrimaryAssistant}},turnTracker:d})}export{q as GizmoContactsMessage};
//# sourceMappingURL=gv3a56lg4q3d670l.js.map