import{N as j,l as e,a1 as u,a6 as z}from"./d4leej2qw3qpt1pk.js";import{cp as D,cq as T,cr as _}from"./fz81i3fl330y5ew1.js";import{m as r,G as p,a as n,o as l}from"./nfvveyk9d6ahnf1o.js";import"./okxdn8hddblnp0ou.js";import"./ftyo1ydzzolwv3v6.js";import"./f2il2wfcdnz6iwbp.js";import"./blb377wa0lv0gl05.js";import"./hyhugnup8jw7vymu.js";import"./c03cyiw531bfxkuh.js";import"./dywhugbdhvsxyyf5.js";import"./c6czee0ptvr50b6w.js";import"./ohxwppau79l98jz8.js";import"./nek0ozgkk626juis.js";import"./g6n33634fp88d2bg.js";import"./goojceouqjho7tc9.js";import"./jj9lp929lmdlnrht.js";import"./kd847zqymupw3yev.js";const d=13e3;function G({messages:s}){const t=u(),o=s.flatMap(i=>D.getImageAssetPointers(i.message)),a=T(o);return e.jsx("div",{children:a.map((i,m)=>{const{isLoading:f,data:g,error:M}=i;if(f)return e.jsx(r,{conversationMessages:s,icon:p,status:n.Finished,estimatedToolDurationMs:d,animationLoopDurationMs:4e3},m);if(M!=null||(g==null?void 0:g.url)==null)return e.jsx(r,{conversationMessages:s,icon:l,status:n.Error,text:t.formatMessage(c.failedProfilePic),estimatedToolDurationMs:0,animationLoopDurationMs:3500},m);const{url:P,width:h,height:x}=g;return e.jsx("div",{className:"flex items-center justify-center p-4",children:e.jsx(_,{className:"gizmo-shadow-stroke h-48 w-48 rounded-full border-2 dark:border-gray-500",alt:"Profile Picture",src:P,width:h,height:x})},m)})})}function v({messages:s}){const t=u();return s.length===0?null:e.jsx(r,{conversationMessages:s,icon:p,status:n.Running,text:t.formatMessage(c.generatingProfilePic),estimatedToolDurationMs:d,animationLoopDurationMs:4e3})}function E({messages:s}){const t=u();return s.some(a=>a.message.status==="in_progress")?e.jsx(r,{conversationMessages:s,icon:l,status:n.Running,text:t.formatMessage(c.updating),estimatedToolDurationMs:1e4,animationLoopDurationMs:3500}):e.jsx(r,{conversationMessages:s,icon:l,status:n.Finished,estimatedToolDurationMs:1e4,animationLoopDurationMs:3500})}function L({messages:s}){const t=[],o=[],a=[];for(const i of s)i.message.recipient==="gizmo_editor.generate_profile_pic"?t.push(i):i.message.author.name==="gizmo_editor.generate_profile_pic"?o.push(i):i.message.recipient==="gizmo_editor.update_behavior"&&a.push(i);return e.jsxs(e.Fragment,{children:[t.length>0&&o.length===0&&e.jsx(v,{messages:t}),o.length>0&&e.jsx(G,{messages:o}),a.length>0&&e.jsx(E,{messages:a})]})}const H=j.memo(L),c=z({updating:{id:"message.gizmo.updating",defaultMessage:"Updating GPT..."},generatingProfilePic:{id:"message.gizmo.generatingProfilePic",defaultMessage:"Generating profile picture..."},failedProfilePic:{id:"message.gizmo.failed",defaultMessage:"Failed to generate profile picture."}});export{H as default};
//# sourceMappingURL=glb0ttf4q7286cw1.js.map