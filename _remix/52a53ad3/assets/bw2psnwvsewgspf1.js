import{T as j,y as e,X as l,a6 as z}from"./5gafjzaj6m3lkt92.js";import{df as D,dg as T,dh as d,di as m,dj as _}from"./en1fj6qnfiapfm2g.js";import{h as r,a as n}from"./bjq3ybfqze8y640h.js";import"./gs8ccw8bowd6yhiq.js";import"./jkp1lymg1k45oqi4.js";import"./ksz8z5521n6rqjsy.js";import"./dyogpewvq1z2xru3.js";import"./gapao1a0kn0bo862.js";import"./h427fzlqv26eg4a1.js";import"./oymnza3474an9ljm.js";import"./ddh0nhmx07k1epkf.js";import"./jwr7pwwam8xzg21c.js";import"./ctbikeapapxchszf.js";import"./fsetajgwqbr952wa.js";import"./gplpz9l86apwrc2m.js";import"./j3xik4j4kij3v69h.js";import"./fq0bbcy4lguytj3r.js";import"./ld368pddw8xvmebn.js";import"./na6rxmfkzim7jm45.js";const p=13e3;function v({messages:s}){const t=l(),o=s.flatMap(i=>D.getImageAssetPointers(i.message)),a=T(o);return e.jsx("div",{children:a.map((i,g)=>{const{isLoading:f,data:c,error:M}=i;if(f)return e.jsx(r,{conversationMessages:s,icon:d,status:n.Finished,estimatedToolDurationMs:p,animationLoopDurationMs:4e3},g);if(M!=null||c?.url==null)return e.jsx(r,{conversationMessages:s,icon:m,status:n.Error,text:t.formatMessage(u.failedProfilePic),estimatedToolDurationMs:0,animationLoopDurationMs:3500},g);const{url:h,width:P,height:x}=c;return e.jsx("div",{className:"flex items-center justify-center p-4",children:e.jsx(_,{className:"gizmo-shadow-stroke h-48 w-48 rounded-full border-2 dark:border-gray-500",alt:"Profile Picture",src:h,width:P,height:x})},g)})})}function G({messages:s}){const t=l();return s.length===0?null:e.jsx(r,{conversationMessages:s,icon:d,status:n.Running,text:t.formatMessage(u.generatingProfilePic),estimatedToolDurationMs:p,animationLoopDurationMs:4e3})}function E({messages:s}){const t=l();return s.some(a=>a.message.status==="in_progress")?e.jsx(r,{conversationMessages:s,icon:m,status:n.Running,text:t.formatMessage(u.updating),estimatedToolDurationMs:1e4,animationLoopDurationMs:3500}):e.jsx(r,{conversationMessages:s,icon:m,status:n.Finished,estimatedToolDurationMs:1e4,animationLoopDurationMs:3500})}function L({messages:s}){const t=[],o=[],a=[];for(const i of s)i.message.recipient==="gizmo_editor.generate_profile_pic"?t.push(i):i.message.author.name==="gizmo_editor.generate_profile_pic"?o.push(i):i.message.recipient==="gizmo_editor.update_behavior"&&a.push(i);return e.jsxs(e.Fragment,{children:[t.length>0&&o.length===0&&e.jsx(G,{messages:t}),o.length>0&&e.jsx(v,{messages:o}),a.length>0&&e.jsx(E,{messages:a})]})}const J=j.memo(L),u=z({updating:{id:"message.gizmo.updating",defaultMessage:"Updating GPT..."},generatingProfilePic:{id:"message.gizmo.generatingProfilePic",defaultMessage:"Generating profile picture..."},failedProfilePic:{id:"message.gizmo.failed",defaultMessage:"Failed to generate profile picture."}});export{J as default};
//# sourceMappingURL=bw2psnwvsewgspf1.js.map