import{at as j,a6 as e,aj as m,ak as z}from"./b0yd4b4kjz1x36ki.js";import{dI as D,dJ as T,dK as d,dL as l,dM as _}from"./b96clgxumfjg5jjm.js";import{b as n,T as r}from"./n9zf798cnlfrlnfg.js";import"./coaq057lk9sfedb2.js";import"./ilm2a2yioj15f7xd.js";import"./khpgin38dhkqymea.js";import"./jb9kjkhndho3i15k.js";import"./dytnb75iigquej3g.js";import"./srbowbdpouoh01hw.js";import"./ft25f52m4p13jgsj.js";import"./dbv04stdtm3q06nn.js";const f=13e3;function v({messages:s}){const t=m(),o=s.flatMap(i=>D.getImageAssetPointers(i.message)),a=T(o);return e.jsx("div",{children:a.map((i,g)=>{const{isLoading:p,data:c,error:M}=i;if(p)return e.jsx(n,{conversationMessages:s,icon:d,status:r.Finished,estimatedToolDurationMs:f,animationLoopDurationMs:4e3},g);if(M!=null||c?.url==null)return e.jsx(n,{conversationMessages:s,icon:l,status:r.Error,text:t.formatMessage(u.failedProfilePic),estimatedToolDurationMs:0,animationLoopDurationMs:3500},g);const{url:P,width:h,height:x}=c;return e.jsx("div",{className:"flex items-center justify-center p-4",children:e.jsx(_,{className:"gizmo-shadow-stroke h-48 w-48 rounded-full border-2 dark:border-gray-500",alt:"Profile Picture",src:P,width:h,height:x})},g)})})}function G({messages:s}){const t=m();return s.length===0?null:e.jsx(n,{conversationMessages:s,icon:d,status:r.Running,text:t.formatMessage(u.generatingProfilePic),estimatedToolDurationMs:f,animationLoopDurationMs:4e3})}function L({messages:s}){const t=m();return s.some(a=>a.message.status==="in_progress")?e.jsx(n,{conversationMessages:s,icon:l,status:r.Running,text:t.formatMessage(u.updating),estimatedToolDurationMs:1e4,animationLoopDurationMs:3500}):e.jsx(n,{conversationMessages:s,icon:l,status:r.Finished,estimatedToolDurationMs:1e4,animationLoopDurationMs:3500})}function E({messages:s}){const t=[],o=[],a=[];for(const i of s)i.message.recipient==="gizmo_editor.generate_profile_pic"?t.push(i):i.message.author.name==="gizmo_editor.generate_profile_pic"?o.push(i):i.message.recipient==="gizmo_editor.update_behavior"&&a.push(i);return e.jsxs(e.Fragment,{children:[t.length>0&&o.length===0&&e.jsx(G,{messages:t}),o.length>0&&e.jsx(v,{messages:o}),a.length>0&&e.jsx(L,{messages:a})]})}const B=j.memo(E),u=z({updating:{id:"message.gizmo.updating",defaultMessage:"Updating GPT..."},generatingProfilePic:{id:"message.gizmo.generatingProfilePic",defaultMessage:"Generating profile picture..."},failedProfilePic:{id:"message.gizmo.failed",defaultMessage:"Failed to generate profile picture."}});export{B as default};
//# sourceMappingURL=kp31jrzxypkxoj45.js.map