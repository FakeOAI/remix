import{u as j,j as e,G as l,d4 as z,K as D}from"./fl2d4axqwlec442f.js";import{cB as T,cC as _}from"./gh19awl4r9489re0.js";import{U as a,V as p,K as n,X as u}from"./kalvxwj9jd3mf7zc.js";import"./j1he6evgnbin0qu0.js";import"./bgwzf28nepp7ingk.js";import"./mdv4qne5bad6k363.js";import"./ftwz3m1z6v8nrdrn.js";import"./kvm77arpt4mqp2qh.js";import"./hahc0jd0xxbyjvq2.js";import"./o1wcjaoqwz5yxmlk.js";import"./nzr1rg2loqp9cm3x.js";import"./bf9p6c4k268xb15s.js";import"./modys9k9trvnp8yr.js";import"./nxievw1boie4pgp2.js";import"./bp902go9rnmka01w.js";import"./k07takrbtrsk9de9.js";import"./lq6036cn7rmiq25p.js";import"./kk5onbesx4xyt4mw.js";import"./jhoo5xmh9hh1g79w.js";import"./peddmh8exaqs0r0h.js";import"./oy5r4cug7893su6g.js";import"./dmbmjm2vn057v59j.js";import"./myjbeoa1xk1l1aef.js";import"./yrfwrt22eu7d1hh0.js";const d=13e3;function G({messages:s}){const t=l(),o=s.flatMap(i=>z.getImageAssetPointers(i.message)),r=T(o);return e.jsx("div",{children:r.map((i,g)=>{const{isLoading:f,data:m,error:M}=i;if(f)return e.jsx(a,{conversationMessages:s,icon:p,status:n.Finished,estimatedToolDurationMs:d,animationLoopDurationMs:4e3},g);if(M!=null||(m==null?void 0:m.url)==null)return e.jsx(a,{conversationMessages:s,icon:u,status:n.Error,text:t.formatMessage(c.failedProfilePic),estimatedToolDurationMs:0,animationLoopDurationMs:3500},g);const{url:P,width:h,height:x}=m;return e.jsx("div",{className:"flex items-center justify-center p-4",children:e.jsx(_,{className:"gizmo-shadow-stroke h-48 w-48 rounded-full border-2 dark:border-gray-500",alt:"Profile Picture",src:P,width:h,height:x})},g)})})}function v({messages:s}){const t=l();return s.length===0?null:e.jsx(a,{conversationMessages:s,icon:p,status:n.Running,text:t.formatMessage(c.generatingProfilePic),estimatedToolDurationMs:d,animationLoopDurationMs:4e3})}function E({messages:s}){const t=l();return s.some(r=>r.message.status==="in_progress")?e.jsx(a,{conversationMessages:s,icon:u,status:n.Running,text:t.formatMessage(c.updating),estimatedToolDurationMs:1e4,animationLoopDurationMs:3500}):e.jsx(a,{conversationMessages:s,icon:u,status:n.Finished,estimatedToolDurationMs:1e4,animationLoopDurationMs:3500})}function L({messages:s}){const t=[],o=[],r=[];for(const i of s)i.message.recipient==="gizmo_editor.generate_profile_pic"?t.push(i):i.message.author.name==="gizmo_editor.generate_profile_pic"?o.push(i):i.message.recipient==="gizmo_editor.update_behavior"&&r.push(i);return e.jsxs(e.Fragment,{children:[t.length>0&&o.length===0&&e.jsx(v,{messages:t}),o.length>0&&e.jsx(G,{messages:o}),r.length>0&&e.jsx(E,{messages:r})]})}const Z=j.memo(L),c=D({updating:{id:"message.gizmo.updating",defaultMessage:"Updating GPT..."},generatingProfilePic:{id:"message.gizmo.generatingProfilePic",defaultMessage:"Generating profile picture..."},failedProfilePic:{id:"message.gizmo.failed",defaultMessage:"Failed to generate profile picture."}});export{Z as default};
//# sourceMappingURL=d5kpu3coemxq0i3h.js.map