import{T as j,y as e,X as l,a6 as z}from"./flidd11gv2mtd3pr.js";import{dc as D,dd as T,de as d,df as m,dg as _}from"./b3rades3r6m68flq.js";import{h as r,a as n}from"./ipbze00pn8qquhuv.js";import"./hblp7wkoj3uom6wj.js";import"./wpujrihzys0fipz2.js";import"./f4lu6fjawq1oq6b1.js";import"./i2s1xzcbw7ed8pb9.js";import"./hcy36too2a4zuew8.js";import"./ez1kjz5fvk5gkbgz.js";import"./c2irxumz2s63grlt.js";import"./fqhitr15xecbhn4t.js";import"./he7piz7zzhgkln8o.js";import"./hz1r57eozmvrgxlo.js";import"./bwm8ulkt7rpl8jcy.js";import"./grjj5fhjl543khxi.js";import"./l0fcm4l649pd7v83.js";import"./gmdmr9wfsgbqi27t.js";import"./lp2a7a6x1h38kn3s.js";import"./mqac55qx5mn89v48.js";const p=13e3;function v({messages:s}){const t=l(),o=s.flatMap(i=>D.getImageAssetPointers(i.message)),a=T(o);return e.jsx("div",{children:a.map((i,g)=>{const{isLoading:f,data:c,error:M}=i;if(f)return e.jsx(r,{conversationMessages:s,icon:d,status:n.Finished,estimatedToolDurationMs:p,animationLoopDurationMs:4e3},g);if(M!=null||c?.url==null)return e.jsx(r,{conversationMessages:s,icon:m,status:n.Error,text:t.formatMessage(u.failedProfilePic),estimatedToolDurationMs:0,animationLoopDurationMs:3500},g);const{url:h,width:P,height:x}=c;return e.jsx("div",{className:"flex items-center justify-center p-4",children:e.jsx(_,{className:"gizmo-shadow-stroke h-48 w-48 rounded-full border-2 dark:border-gray-500",alt:"Profile Picture",src:h,width:P,height:x})},g)})})}function G({messages:s}){const t=l();return s.length===0?null:e.jsx(r,{conversationMessages:s,icon:d,status:n.Running,text:t.formatMessage(u.generatingProfilePic),estimatedToolDurationMs:p,animationLoopDurationMs:4e3})}function E({messages:s}){const t=l();return s.some(a=>a.message.status==="in_progress")?e.jsx(r,{conversationMessages:s,icon:m,status:n.Running,text:t.formatMessage(u.updating),estimatedToolDurationMs:1e4,animationLoopDurationMs:3500}):e.jsx(r,{conversationMessages:s,icon:m,status:n.Finished,estimatedToolDurationMs:1e4,animationLoopDurationMs:3500})}function L({messages:s}){const t=[],o=[],a=[];for(const i of s)i.message.recipient==="gizmo_editor.generate_profile_pic"?t.push(i):i.message.author.name==="gizmo_editor.generate_profile_pic"?o.push(i):i.message.recipient==="gizmo_editor.update_behavior"&&a.push(i);return e.jsxs(e.Fragment,{children:[t.length>0&&o.length===0&&e.jsx(G,{messages:t}),o.length>0&&e.jsx(v,{messages:o}),a.length>0&&e.jsx(E,{messages:a})]})}const J=j.memo(L),u=z({updating:{id:"message.gizmo.updating",defaultMessage:"Updating GPT..."},generatingProfilePic:{id:"message.gizmo.generatingProfilePic",defaultMessage:"Generating profile picture..."},failedProfilePic:{id:"message.gizmo.failed",defaultMessage:"Failed to generate profile picture."}});export{J as default};
//# sourceMappingURL=bcreewcfey7qs1q2.js.map