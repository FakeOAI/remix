import{Q as j,t as e,a3 as l,ad as z}from"./ius2rjc8aciuj2rl.js";import{dh as D,di as T,dj as p,dk as g,dl as _}from"./jdz9mwngh3t5nytb.js";import{n as r,a as n}from"./frgkesjr4ohtrucy.js";import"./lzyd9n5t1klxadwf.js";import"./n0xyk1p8mg8xlrhw.js";import"./oy4uroqongt50tdh.js";import"./ohr11q9jfhdrs62c.js";import"./og6klen52wg15s6b.js";import"./jxn2hsz21dzfafcn.js";import"./vx5bizwg1cu9jie5.js";import"./o9abjlquvgplxwex.js";import"./itvvna1wmnp67bph.js";import"./bixdynutlthfnow9.js";import"./kjc4oshqrhzrg3a0.js";import"./bii0ba6df7fk4nts.js";import"./nrbhchjhpmcxnzn5.js";import"./nz7exheo0ysu8iuh.js";import"./nsq2pgu8tq1tcawc.js";import"./fhdlfdpwiavhel0q.js";import"./neli2etkemqy682b.js";import"./bt3rjqq715dlb9rk.js";import"./e695g0c5z01sstpf.js";import"./gh97h5wmaiswo7ni.js";const d=13e3;function v({messages:s}){const t=l(),o=s.flatMap(i=>D.getImageAssetPointers(i.message)),a=T(o);return e.jsx("div",{children:a.map((i,m)=>{const{isLoading:f,data:c,error:M}=i;if(f)return e.jsx(r,{conversationMessages:s,icon:p,status:n.Finished,estimatedToolDurationMs:d,animationLoopDurationMs:4e3},m);if(M!=null||c?.url==null)return e.jsx(r,{conversationMessages:s,icon:g,status:n.Error,text:t.formatMessage(u.failedProfilePic),estimatedToolDurationMs:0,animationLoopDurationMs:3500},m);const{url:h,width:P,height:x}=c;return e.jsx("div",{className:"flex items-center justify-center p-4",children:e.jsx(_,{className:"gizmo-shadow-stroke h-48 w-48 rounded-full border-2 dark:border-gray-500",alt:"Profile Picture",src:h,width:P,height:x})},m)})})}function G({messages:s}){const t=l();return s.length===0?null:e.jsx(r,{conversationMessages:s,icon:p,status:n.Running,text:t.formatMessage(u.generatingProfilePic),estimatedToolDurationMs:d,animationLoopDurationMs:4e3})}function E({messages:s}){const t=l();return s.some(a=>a.message.status==="in_progress")?e.jsx(r,{conversationMessages:s,icon:g,status:n.Running,text:t.formatMessage(u.updating),estimatedToolDurationMs:1e4,animationLoopDurationMs:3500}):e.jsx(r,{conversationMessages:s,icon:g,status:n.Finished,estimatedToolDurationMs:1e4,animationLoopDurationMs:3500})}function L({messages:s}){const t=[],o=[],a=[];for(const i of s)i.message.recipient==="gizmo_editor.generate_profile_pic"?t.push(i):i.message.author.name==="gizmo_editor.generate_profile_pic"?o.push(i):i.message.recipient==="gizmo_editor.update_behavior"&&a.push(i);return e.jsxs(e.Fragment,{children:[t.length>0&&o.length===0&&e.jsx(G,{messages:t}),o.length>0&&e.jsx(v,{messages:o}),a.length>0&&e.jsx(E,{messages:a})]})}const Y=j.memo(L),u=z({updating:{id:"message.gizmo.updating",defaultMessage:"Updating GPT..."},generatingProfilePic:{id:"message.gizmo.generatingProfilePic",defaultMessage:"Generating profile picture..."},failedProfilePic:{id:"message.gizmo.failed",defaultMessage:"Failed to generate profile picture."}});export{Y as default};
//# sourceMappingURL=jh1xpcuklvm7kp5y.js.map