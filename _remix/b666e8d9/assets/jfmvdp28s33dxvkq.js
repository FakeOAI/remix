import{aB as j,j as e,Y as u,X as z}from"./iw5llf4a9z2k4qli.js";import{cX as D,cY as T,cZ as d,c_ as l,c$ as _}from"./ffbc0egt64q2hvb1.js";import{b as n,T as r}from"./iaugkapujzwqym4n.js";import"./ere5qx05or5w4r80.js";import"./i427bddftbowt48m.js";import"./hskeo4a0suuacupd.js";import"./zbbavq3fohnytg6f.js";import"./ka9urk6fl3lg45ww.js";const f=13e3;function v({messages:s}){const t=u(),o=s.flatMap(i=>D.getImageAssetPointers(i.message)),a=T(o);return e.jsx("div",{children:a.map((i,g)=>{const{isLoading:p,data:m,error:M}=i;if(p)return e.jsx(n,{conversationMessages:s,icon:d,status:r.Finished,estimatedToolDurationMs:f,animationLoopDurationMs:4e3},g);if(M!=null||m?.url==null)return e.jsx(n,{conversationMessages:s,icon:l,status:r.Error,text:t.formatMessage(c.failedProfilePic),estimatedToolDurationMs:0,animationLoopDurationMs:3500},g);const{url:P,width:h,height:x}=m;return e.jsx("div",{className:"flex items-center justify-center p-4",children:e.jsx(_,{className:"gizmo-shadow-stroke h-48 w-48 rounded-full border-2 dark:border-gray-500",alt:"Profile Picture",src:P,width:h,height:x})},g)})})}function G({messages:s}){const t=u();return s.length===0?null:e.jsx(n,{conversationMessages:s,icon:d,status:r.Running,text:t.formatMessage(c.generatingProfilePic),estimatedToolDurationMs:f,animationLoopDurationMs:4e3})}function E({messages:s}){const t=u();return s.some(a=>a.message.status==="in_progress")?e.jsx(n,{conversationMessages:s,icon:l,status:r.Running,text:t.formatMessage(c.updating),estimatedToolDurationMs:1e4,animationLoopDurationMs:3500}):e.jsx(n,{conversationMessages:s,icon:l,status:r.Finished,estimatedToolDurationMs:1e4,animationLoopDurationMs:3500})}function L({messages:s}){const t=[],o=[],a=[];for(const i of s)i.message.recipient==="gizmo_editor.generate_profile_pic"?t.push(i):i.message.author.name==="gizmo_editor.generate_profile_pic"?o.push(i):i.message.recipient==="gizmo_editor.update_behavior"&&a.push(i);return e.jsxs(e.Fragment,{children:[t.length>0&&o.length===0&&e.jsx(G,{messages:t}),o.length>0&&e.jsx(v,{messages:o}),a.length>0&&e.jsx(E,{messages:a})]})}const N=j.memo(L),c=z({updating:{id:"message.gizmo.updating",defaultMessage:"Updating GPT..."},generatingProfilePic:{id:"message.gizmo.generatingProfilePic",defaultMessage:"Generating profile picture..."},failedProfilePic:{id:"message.gizmo.failed",defaultMessage:"Failed to generate profile picture."}});export{N as default};
//# sourceMappingURL=jfmvdp28s33dxvkq.js.map