import{r as C,j as h,bq as M,cQ as x,ca as S,e4 as A,bR as G}from"./g03cv0vnbvl8m3c2.js";import{bv as R}from"./gmkdbvu1z26nwc2g.js";import{d as k}from"./fa4f1ia3usj74vpi.js";import{a as w}from"./gxz7anhwyusrfod4.js";import{h as E,T as z}from"./eures2un3wat4y5c.js";import"./j195nb71p8a82xgt.js";import"./kq5cmhdblt6nhewq.js";import"./l96f7w2szip0jok2.js";function U({messages:a,clientThreadId:n,isLastTurnInConversation:f,onRequestCompletion:i}){var u,g,y;const[m,...t]=a,d=E(),e=(y=(g=(u=t.find(o=>{var s,r,c;return((c=(r=(s=o.message.metadata)==null?void 0:s.jit_plugin_data)==null?void 0:r.from_server)==null?void 0:c.type)==="confirm_action"}))==null?void 0:u.message.metadata)==null?void 0:g.jit_plugin_data)==null?void 0:y.from_server,j=(e==null?void 0:e.body.actions[0].type)==="contact_gizmo"?e==null?void 0:e.body.actions[0].contact_gizmo.gizmo_id:void 0,{data:_}=k(j),p=f&&t[t.length-1];return C.useEffect(()=>{var s,r,c,v,T;if(d||!p||((c=(r=(s=p.message.metadata)==null?void 0:s.jit_plugin_data)==null?void 0:r.from_server)==null?void 0:c.type)!=="confirm_action")return;const o=(T=(v=p.message.metadata)==null?void 0:v.jit_plugin_data)==null?void 0:T.from_server;if((o==null?void 0:o.type)==="confirm_action"){const l=o.body.actions.find(b=>b.type==="contact_gizmo");l&&l.type==="contact_gizmo"&&I({allMessages:a,assistantMessage:m,clientThreadId:n,onRequestCompletion:i,actionData:{type:"contact_gizmo",...l.contact_gizmo}})}},[d,p,i,a,m,n]),h.jsx("div",{className:"my-2 flex flex-col",children:_&&h.jsx(w,{gizmoResource:_})})}function I({actionData:a,allMessages:n,assistantMessage:f,clientThreadId:i,onRequestCompletion:m}){const t={id:M(),author:{role:x.Tool,name:f.message.recipient},content:{content_type:S.Text,parts:[""]},recipient:"all",metadata:{jit_plugin_data:{from_client:a}}};z.updateTree(i,e=>{e.addNode(t.id,t,n[n.length-1].message.id,x.Tool,{completionSampleFinishTime:Date.now()})}),z.setThreadCurrentLeafId(i,t.id);const d=new R;m({type:A.Next,promptId:t.id,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!1,completionMetadata:{conversationMode:{kind:G.PrimaryAssistant}},turnTracker:d})}export{U as GizmoContactsMessage};
//# sourceMappingURL=mqiuwaxunuqsi3ua.js.map