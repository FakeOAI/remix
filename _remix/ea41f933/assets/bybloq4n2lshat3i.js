import{u as j,j as e,G as l,cY as z,K as D}from"./hehcvio4m1gb3l50.js";import{cA as T,cB as _}from"./d1od5t75rjre0q37.js";import{Q as a,U as p,J as n,V as u}from"./kbvgp8h7e8n9msg9.js";import"./mj0e86z3fqyhfd6p.js";import"./e27c3plf709pfjps.js";import"./blc6m9yvfbiqw7tj.js";import"./pendft9cy0qwlpmm.js";import"./ofi4kixgvqd4phhv.js";import"./opdxseyyi7e129fv.js";import"./fdz5ns7vvuxev7ii.js";import"./fiqnygv5v6plff91.js";import"./jsc2osrw1pxjhpmr.js";import"./nmd247tyg4nbli1i.js";import"./fjtc9c8961x1j4yk.js";import"./l9nlc1vv4x80d0oz.js";import"./hef1z0tdkc7rmtc9.js";import"./okpq8csnd5pe7u0y.js";import"./nx4ufjqz0ura1k4m.js";import"./jmpteouyh67tp5j3.js";import"./khtmh8udoejmujt2.js";import"./dbnjb5rm9b8cwfhk.js";import"./o9zoc2n8hiegk8eq.js";import"./cgsd631hh60w3och.js";import"./gv83x12b7mhoasvx.js";import"./le7jd3smq7prio2n.js";const d=13e3;function G({messages:i}){const t=l(),o=i.flatMap(s=>z.getImageAssetPointers(s.message)),r=T(o);return e.jsx("div",{children:r.map((s,g)=>{const{isLoading:f,data:m,error:M}=s;if(f)return e.jsx(a,{conversationMessages:i,icon:p,status:n.Finished,estimatedToolDurationMs:d,animationLoopDurationMs:4e3},g);if(M!=null||(m==null?void 0:m.url)==null)return e.jsx(a,{conversationMessages:i,icon:u,status:n.Error,text:t.formatMessage(c.failedProfilePic),estimatedToolDurationMs:0,animationLoopDurationMs:3500},g);const{url:P,width:h,height:x}=m;return e.jsx("div",{className:"flex items-center justify-center p-4",children:e.jsx(_,{className:"gizmo-shadow-stroke h-48 w-48 rounded-full border-2 dark:border-gray-500",alt:"Profile Picture",src:P,width:h,height:x})},g)})})}function v({messages:i}){const t=l();return i.length===0?null:e.jsx(a,{conversationMessages:i,icon:p,status:n.Running,text:t.formatMessage(c.generatingProfilePic),estimatedToolDurationMs:d,animationLoopDurationMs:4e3})}function E({messages:i}){const t=l();return i.some(r=>r.message.status==="in_progress")?e.jsx(a,{conversationMessages:i,icon:u,status:n.Running,text:t.formatMessage(c.updating),estimatedToolDurationMs:1e4,animationLoopDurationMs:3500}):e.jsx(a,{conversationMessages:i,icon:u,status:n.Finished,estimatedToolDurationMs:1e4,animationLoopDurationMs:3500})}function L({messages:i}){const t=[],o=[],r=[];for(const s of i)s.message.recipient==="gizmo_editor.generate_profile_pic"?t.push(s):s.message.author.name==="gizmo_editor.generate_profile_pic"?o.push(s):s.message.recipient==="gizmo_editor.update_behavior"&&r.push(s);return e.jsxs(e.Fragment,{children:[t.length>0&&o.length===0&&e.jsx(v,{messages:t}),o.length>0&&e.jsx(G,{messages:o}),r.length>0&&e.jsx(E,{messages:r})]})}const ee=j.memo(L),c=D({updating:{id:"message.gizmo.updating",defaultMessage:"Updating GPT..."},generatingProfilePic:{id:"message.gizmo.generatingProfilePic",defaultMessage:"Generating profile picture..."},failedProfilePic:{id:"message.gizmo.failed",defaultMessage:"Failed to generate profile picture."}});export{ee as default};
//# sourceMappingURL=bybloq4n2lshat3i.js.map