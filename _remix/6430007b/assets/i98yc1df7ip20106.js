import{w as j,j as e,H as u,cL as z,N as D}from"./7q6a9ksdf0pmxyke.js";import{cE as T,cF as _}from"./g61cr21b5136jq6j.js";import{K as n,L as p,i as r,O as l}from"./iogitfx8hqgnt4ng.js";import"./hk3bf7nz434dsnqo.js";import"./mbounqbdqvic35ki.js";import"./cm2wm4e12j79q85q.js";import"./h8sjvsiy2lo0gkb7.js";import"./okhnpblvnj0kkqgn.js";import"./gsio46vq179oop0c.js";import"./i562x7s3ysjk8eld.js";import"./dilk8elagkdwchae.js";import"./n71qf3c9f8bknj4t.js";import"./c5skys0ao3aqjau7.js";import"./dmclktsjqsuvf2fg.js";import"./obtz9g1upg41tlji.js";import"./ichgp4yfor521qsr.js";const d=13e3;function L({messages:s}){const t=u(),o=s.flatMap(i=>z.getImageAssetPointers(i.message)),a=T(o);return e.jsx("div",{children:a.map((i,m)=>{const{isLoading:f,data:g,error:M}=i;if(f)return e.jsx(n,{conversationMessages:s,icon:p,status:r.Finished,estimatedToolDurationMs:d,animationLoopDurationMs:4e3},m);if(M!=null||(g==null?void 0:g.url)==null)return e.jsx(n,{conversationMessages:s,icon:l,status:r.Error,text:t.formatMessage(c.failedProfilePic),estimatedToolDurationMs:0,animationLoopDurationMs:3500},m);const{url:P,width:h,height:x}=g;return e.jsx("div",{className:"flex items-center justify-center p-4",children:e.jsx(_,{className:"gizmo-shadow-stroke h-48 w-48 rounded-full border-2 dark:border-gray-500",alt:"Profile Picture",src:P,width:h,height:x})},m)})})}function v({messages:s}){const t=u();return s.length===0?null:e.jsx(n,{conversationMessages:s,icon:p,status:r.Running,text:t.formatMessage(c.generatingProfilePic),estimatedToolDurationMs:d,animationLoopDurationMs:4e3})}function E({messages:s}){const t=u();return s.some(a=>a.message.status==="in_progress")?e.jsx(n,{conversationMessages:s,icon:l,status:r.Running,text:t.formatMessage(c.updating),estimatedToolDurationMs:1e4,animationLoopDurationMs:3500}):e.jsx(n,{conversationMessages:s,icon:l,status:r.Finished,estimatedToolDurationMs:1e4,animationLoopDurationMs:3500})}function G({messages:s}){const t=[],o=[],a=[];for(const i of s)i.message.recipient==="gizmo_editor.generate_profile_pic"?t.push(i):i.message.author.name==="gizmo_editor.generate_profile_pic"?o.push(i):i.message.recipient==="gizmo_editor.update_behavior"&&a.push(i);return e.jsxs(e.Fragment,{children:[t.length>0&&o.length===0&&e.jsx(v,{messages:t}),o.length>0&&e.jsx(L,{messages:o}),a.length>0&&e.jsx(E,{messages:a})]})}const $=j.memo(G),c=D({updating:{id:"message.gizmo.updating",defaultMessage:"Updating GPT..."},generatingProfilePic:{id:"message.gizmo.generatingProfilePic",defaultMessage:"Generating profile picture..."},failedProfilePic:{id:"message.gizmo.failed",defaultMessage:"Failed to generate profile picture."}});export{$ as default};
//# sourceMappingURL=i98yc1df7ip20106.js.map