import{a6 as j,y as e,a0 as l,a1 as z}from"./j2kz7iekbuf2lk7j.js";import{d5 as D,d6 as T,d7 as d,d8 as m,d9 as _}from"./le0rdv0puybx8i2m.js";import{b as r,T as n}from"./bei6thylcevdeq42.js";import"./i82yi0xftw7xnu8c.js";import"./jpjqqpbn30fko74f.js";import"./eyqsg3qqtdkfk98w.js";import"./la9ho9khwsle3ipj.js";import"./htup5dwnbax7b6kd.js";import"./do8518u43szfxnij.js";import"./16qiumnq05saksju.js";import"./l3k0q6i660cci9gs.js";import"./edsbbff3hjliwmsy.js";import"./ja1b9jvth2p43ta6.js";import"./k7ijapezwxn0gldf.js";import"./j7mq5nf1vxeg7fkq.js";import"./ewb0evhr38szdnyo.js";import"./b7blrmw2f2rsy4xk.js";import"./m6ja8i3ndb249mop.js";import"./iwalt63h1v4xvqgr.js";const p=13e3;function v({messages:s}){const t=l(),o=s.flatMap(i=>D.getImageAssetPointers(i.message)),a=T(o);return e.jsx("div",{children:a.map((i,g)=>{const{isLoading:f,data:c,error:M}=i;if(f)return e.jsx(r,{conversationMessages:s,icon:d,status:n.Finished,estimatedToolDurationMs:p,animationLoopDurationMs:4e3},g);if(M!=null||c?.url==null)return e.jsx(r,{conversationMessages:s,icon:m,status:n.Error,text:t.formatMessage(u.failedProfilePic),estimatedToolDurationMs:0,animationLoopDurationMs:3500},g);const{url:P,width:h,height:x}=c;return e.jsx("div",{className:"flex items-center justify-center p-4",children:e.jsx(_,{className:"gizmo-shadow-stroke h-48 w-48 rounded-full border-2 dark:border-gray-500",alt:"Profile Picture",src:P,width:h,height:x})},g)})})}function G({messages:s}){const t=l();return s.length===0?null:e.jsx(r,{conversationMessages:s,icon:d,status:n.Running,text:t.formatMessage(u.generatingProfilePic),estimatedToolDurationMs:p,animationLoopDurationMs:4e3})}function E({messages:s}){const t=l();return s.some(a=>a.message.status==="in_progress")?e.jsx(r,{conversationMessages:s,icon:m,status:n.Running,text:t.formatMessage(u.updating),estimatedToolDurationMs:1e4,animationLoopDurationMs:3500}):e.jsx(r,{conversationMessages:s,icon:m,status:n.Finished,estimatedToolDurationMs:1e4,animationLoopDurationMs:3500})}function L({messages:s}){const t=[],o=[],a=[];for(const i of s)i.message.recipient==="gizmo_editor.generate_profile_pic"?t.push(i):i.message.author.name==="gizmo_editor.generate_profile_pic"?o.push(i):i.message.recipient==="gizmo_editor.update_behavior"&&a.push(i);return e.jsxs(e.Fragment,{children:[t.length>0&&o.length===0&&e.jsx(G,{messages:t}),o.length>0&&e.jsx(v,{messages:o}),a.length>0&&e.jsx(E,{messages:a})]})}const K=j.memo(L),u=z({updating:{id:"message.gizmo.updating",defaultMessage:"Updating GPT..."},generatingProfilePic:{id:"message.gizmo.generatingProfilePic",defaultMessage:"Generating profile picture..."},failedProfilePic:{id:"message.gizmo.failed",defaultMessage:"Failed to generate profile picture."}});export{K as default};
//# sourceMappingURL=bksqbz01t7kobgtk.js.map