import{u as j,j as e,G as l,cY as z,K as D}from"./g7ztsvc9feyj2vte.js";import{cA as T,cB as _}from"./gqgps9j5l5ri9xro.js";import{Q as a,U as p,J as n,V as u}from"./jhjk4agdo2318p3v.js";import"./kndsiqxkteulvsjz.js";import"./gy0vjuxih470bquh.js";import"./mg86rtr8x8w2dz5x.js";import"./k1kbsv2h7548rmdr.js";import"./f2xbrl33ec700xcm.js";import"./mc1fu708z4uxxrf1.js";import"./fdiem5ct2zn7dsii.js";import"./ipmj2tbxpjz6odxs.js";import"./i9pp0w80kfwz064c.js";import"./k0gfbkxseegbli9g.js";import"./d7fvx8fpy8jz44dr.js";import"./f02321ukjgftgrax.js";import"./ouur9d8zuhebx8ep.js";import"./dc359uc2zbbtkkix.js";import"./kcjtof6fis21afbz.js";import"./no9ab276zq6diofy.js";import"./31lfxgf6vmvy4uvf.js";import"./cwod1xoyx1lhbsfq.js";import"./hvki0wxxpgl1rme3.js";import"./b7zu0fvy6ynu2itd.js";import"./cczj25j92yqdm7dt.js";import"./gupyt4chqom5vg65.js";const d=13e3;function G({messages:i}){const t=l(),o=i.flatMap(s=>z.getImageAssetPointers(s.message)),r=T(o);return e.jsx("div",{children:r.map((s,g)=>{const{isLoading:f,data:m,error:M}=s;if(f)return e.jsx(a,{conversationMessages:i,icon:p,status:n.Finished,estimatedToolDurationMs:d,animationLoopDurationMs:4e3},g);if(M!=null||(m==null?void 0:m.url)==null)return e.jsx(a,{conversationMessages:i,icon:u,status:n.Error,text:t.formatMessage(c.failedProfilePic),estimatedToolDurationMs:0,animationLoopDurationMs:3500},g);const{url:P,width:h,height:x}=m;return e.jsx("div",{className:"flex items-center justify-center p-4",children:e.jsx(_,{className:"gizmo-shadow-stroke h-48 w-48 rounded-full border-2 dark:border-gray-500",alt:"Profile Picture",src:P,width:h,height:x})},g)})})}function v({messages:i}){const t=l();return i.length===0?null:e.jsx(a,{conversationMessages:i,icon:p,status:n.Running,text:t.formatMessage(c.generatingProfilePic),estimatedToolDurationMs:d,animationLoopDurationMs:4e3})}function E({messages:i}){const t=l();return i.some(r=>r.message.status==="in_progress")?e.jsx(a,{conversationMessages:i,icon:u,status:n.Running,text:t.formatMessage(c.updating),estimatedToolDurationMs:1e4,animationLoopDurationMs:3500}):e.jsx(a,{conversationMessages:i,icon:u,status:n.Finished,estimatedToolDurationMs:1e4,animationLoopDurationMs:3500})}function L({messages:i}){const t=[],o=[],r=[];for(const s of i)s.message.recipient==="gizmo_editor.generate_profile_pic"?t.push(s):s.message.author.name==="gizmo_editor.generate_profile_pic"?o.push(s):s.message.recipient==="gizmo_editor.update_behavior"&&r.push(s);return e.jsxs(e.Fragment,{children:[t.length>0&&o.length===0&&e.jsx(v,{messages:t}),o.length>0&&e.jsx(G,{messages:o}),r.length>0&&e.jsx(E,{messages:r})]})}const ee=j.memo(L),c=D({updating:{id:"message.gizmo.updating",defaultMessage:"Updating GPT..."},generatingProfilePic:{id:"message.gizmo.generatingProfilePic",defaultMessage:"Generating profile picture..."},failedProfilePic:{id:"message.gizmo.failed",defaultMessage:"Failed to generate profile picture."}});export{ee as default};
//# sourceMappingURL=c0lhs2i4xot2577h.js.map