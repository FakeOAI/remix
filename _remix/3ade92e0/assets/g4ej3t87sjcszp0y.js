import{T as j,x as e,Y as l,a7 as z}from"./jipkz7wahhvzzuqx.js";import{dg as D,dh as T,di as d,dj as m,dk as _}from"./e6zhtx99a7i1g9zc.js";import{h as r,a as n}from"./gecwa6udk6b6d8e5.js";import"./n5nz8vnsxibd6bik.js";import"./g70459ispqthxwkc.js";import"./hu4ya3hu1q2mtj3c.js";import"./kl3gqai6eyrksb78.js";import"./lb2bw82esu8k4ire.js";import"./lbv1zpv4g2ap41f2.js";import"./fwm14uzkyzsxflxc.js";import"./npl77qwfuvi2jyha.js";import"./ojtyfghvwqol77ni.js";import"./it892upc0b17konk.js";import"./fqai4h0y4a7y6yiz.js";import"./kgz011geyku0c84g.js";import"./gf1rzma6lb3hhiaa.js";import"./n7shmditr84egzzk.js";import"./ncnmvo4fatoh9z2b.js";import"./efad9c3t7hoskfux.js";const p=13e3;function v({messages:s}){const t=l(),o=s.flatMap(i=>D.getImageAssetPointers(i.message)),a=T(o);return e.jsx("div",{children:a.map((i,g)=>{const{isLoading:f,data:c,error:M}=i;if(f)return e.jsx(r,{conversationMessages:s,icon:d,status:n.Finished,estimatedToolDurationMs:p,animationLoopDurationMs:4e3},g);if(M!=null||c?.url==null)return e.jsx(r,{conversationMessages:s,icon:m,status:n.Error,text:t.formatMessage(u.failedProfilePic),estimatedToolDurationMs:0,animationLoopDurationMs:3500},g);const{url:h,width:P,height:x}=c;return e.jsx("div",{className:"flex items-center justify-center p-4",children:e.jsx(_,{className:"gizmo-shadow-stroke h-48 w-48 rounded-full border-2 dark:border-gray-500",alt:"Profile Picture",src:h,width:P,height:x})},g)})})}function G({messages:s}){const t=l();return s.length===0?null:e.jsx(r,{conversationMessages:s,icon:d,status:n.Running,text:t.formatMessage(u.generatingProfilePic),estimatedToolDurationMs:p,animationLoopDurationMs:4e3})}function E({messages:s}){const t=l();return s.some(a=>a.message.status==="in_progress")?e.jsx(r,{conversationMessages:s,icon:m,status:n.Running,text:t.formatMessage(u.updating),estimatedToolDurationMs:1e4,animationLoopDurationMs:3500}):e.jsx(r,{conversationMessages:s,icon:m,status:n.Finished,estimatedToolDurationMs:1e4,animationLoopDurationMs:3500})}function L({messages:s}){const t=[],o=[],a=[];for(const i of s)i.message.recipient==="gizmo_editor.generate_profile_pic"?t.push(i):i.message.author.name==="gizmo_editor.generate_profile_pic"?o.push(i):i.message.recipient==="gizmo_editor.update_behavior"&&a.push(i);return e.jsxs(e.Fragment,{children:[t.length>0&&o.length===0&&e.jsx(G,{messages:t}),o.length>0&&e.jsx(v,{messages:o}),a.length>0&&e.jsx(E,{messages:a})]})}const J=j.memo(L),u=z({updating:{id:"message.gizmo.updating",defaultMessage:"Updating GPT..."},generatingProfilePic:{id:"message.gizmo.generatingProfilePic",defaultMessage:"Generating profile picture..."},failedProfilePic:{id:"message.gizmo.failed",defaultMessage:"Failed to generate profile picture."}});export{J as default};
//# sourceMappingURL=g4ej3t87sjcszp0y.js.map