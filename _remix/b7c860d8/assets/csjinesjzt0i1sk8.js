import{ev as N,V as k,x as e,bh as w,am as y,a0 as o,cg as G,N as p,c3 as P,r as u,a as T,a5 as S}from"./m8rh4g4wti5oij6r.js";import{db as z,O as M,c0 as D,a6 as E,by as m,dc as I}from"./gyk6913sy5h59gmv.js";import{B as F,D as j}from"./kmjf2foda203kwt3.js";import{r as L,I as _,ab as O,O as A,K as B,v as U,aR as q,J as H}from"./f2s0ymrsx8zkcqzb.js";import{G as K}from"./kxicdzv6qy0hb1po.js";import{s as W,n as v,c as Y,t as $}from"./o24ms7b147ogs90x.js";import{G as J}from"./mgp6ivelzszq87jp.js";import{G as Q}from"./m7rm08m03qguju8x.js";import{m as V}from"./e3sq0rwlveh4dug2.js";let x=null;function X(){return x||(x=document.createElement("div"),x.setAttribute("portal-container",""),document.body.append(x)),x||null}function Z(s){const{children:a}=s,t=X();return t&&N.createPortal(a,t)}function b({delay:s,animateTap:a=!0,children:t}){return e.jsx(V.div,{whileTap:{scale:a?.98:void 0},initial:{opacity:0,translateY:5},animate:{opacity:1,translateY:0,transition:{duration:.3,ease:"easeIn",delay:s??0}},children:t})}var R=(s=>(s.Enabled="enabled",s.ComingSoon="coming-soon",s))(R||{});function ee({gizmoResource:s}){const a=s.gizmo.vanity_metrics?.num_conversations_str,t=s.gizmo.share_recipient??m.Private,i=I(t);return e.jsxs("div",{children:[s.gizmo.share_recipient!==m.Private&&a!=null?e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(B,{className:"icon-sm"}),e.jsx("span",{children:e.jsx(o,{...ae.conversationCountStrLabel,values:{numConvos:a}})})]}):void 0,e.jsxs("div",{className:"flex items-center gap-1",children:[t===m.Link||t===m.Marketplace?e.jsx(U,{className:"icon-sm shrink-0"}):t===m.Workspace?e.jsx(q,{className:"icon-sm shrink-0"}):e.jsx(H,{className:"icon-sm shrink-0"}),e.jsx("span",{className:"line-clamp-1",children:i})]})]})}function ge({gizmoResource:s,canRemoveRecent:a}){const t=w(),i=z(s),n=W(s),r=!!s.gizmo.tags?.includes(M.FirstParty);return e.jsx(C,{href:n?v(s.gizmo.id):Y(s),icon:e.jsx(K,{isFirstParty:r,src:s?.gizmo.display.profile_picture_url??void 0,className:"h-[42px] w-[42px] flex-shrink-0"}),title:s.gizmo.display.name||D,isDraft:n,description:s.gizmo.display.description??"",byline:i?e.jsx(ee,{gizmoResource:s}):e.jsx(J,{gizmo:s}),buttons:e.jsxs(e.Fragment,{children:[i&&e.jsx(y,{label:e.jsx(o,{id:"gizmo.gpt.grid.EditGPT",defaultMessage:"Edit GPT"}),className:"flex justify-center",side:"top",children:e.jsx("button",{className:"rounded-lg px-3 py-2 text-token-text-primary transition-transform duration-100 ease-in hover:bg-white active:scale-[0.9] dark:bg-transparent dark:hover:bg-gray-700",onClick:()=>{t(v(s.gizmo.id))},children:e.jsx(L,{className:"icon-sm"})})}),e.jsx(te,{gizmoResource:s,isOwner:i,canRemoveRecent:a})]})})}const se=k.div`flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full border border-dashed
${({$disabled:s})=>s?"":"border-token-border-light bg-token-main-surface-secondary"}`;function pe({type:s}){const a=$(),t=s==="coming-soon";return e.jsxs(G,{disabled:!t,label:e.jsx(o,{id:"gizmo.gpt.grid.CreateGPTComingSoon",defaultMessage:"GPT creation will be available in the coming weeks"}),children:[e.jsx(C,{href:a,disabled:t,icon:e.jsx(se,{$disabled:t,children:e.jsx(_,{className:p("icon-sm",t&&"opacity-30")})}),title:e.jsx("div",{className:"flex items-center gap-1",children:e.jsx(o,{id:"gizmo.gpt.grid.CreateGPT",defaultMessage:"Create a GPT"})}),description:"Customize a version of ChatGPT for a specific purpose",byline:t?e.jsx("div",{className:"flex items-center justify-end",children:e.jsx("div",{className:"flex items-center",children:e.jsx(o,{id:"gizmo.gpt.grid.ComingSoon",defaultMessage:"Coming soon"})})}):void 0}),e.jsx("div",{className:"h-px bg-gray-100 dark:bg-gray-700"})]})}function C({href:s,icon:a,title:t,isDraft:i=!1,description:n,byline:r,buttons:l,disabled:d,className:c}){const f=p("flex items-center px-2 py-4 rounded-xl",d?"":"hover:bg-token-main-surface-secondary",c),h=e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex grow items-center overflow-hidden md:w-3/5 md:grow-0",children:[a,e.jsxs("div",{className:p("grow overflow-hidden pl-4 pr-9 leading-tight",d?"opacity-50":"hover:cursor-pointer"),children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"font-semibold",children:t}),i&&e.jsx(y,{label:e.jsx(o,{id:"gizmo.gpt.grid.Draft",defaultMessage:"Draft"}),className:"flex justify-center",side:"top",children:e.jsx("div",{className:"m-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gray-200 dark:bg-gray-600"})})]}),e.jsx("div",{className:"line-clamp-2 overflow-hidden text-ellipsis break-words text-sm",children:n}),r!=null&&e.jsx("div",{className:"text-ellipsis text-sm text-token-text-tertiary md:hidden",children:r})]})]}),r!=null&&e.jsx("div",{className:"hidden flex-1 text-ellipsis text-sm text-token-text-tertiary md:block",children:r}),l!=null&&e.jsx("div",{onClick:g=>{g.preventDefault()},onPointerDownCapture:g=>{g.stopPropagation()},className:"flex h-9 shrink-0 justify-end gap-2 font-semibold md:w-[100px]",children:l})]});return d?e.jsx(b,{children:e.jsx("span",{className:f,children:h})}):e.jsx(b,{children:e.jsx(P,{className:f,to:s,children:h})})}function te({gizmoResource:s,isOwner:a,canRemoveRecent:t}){const[i,n]=u.useState(!1),[r,l]=u.useState(!1),d=T();return!a&&!t?null:e.jsxs(e.Fragment,{children:[e.jsxs(F,{side:"top",contentAlign:"end",sideOffset:8,open:r,onOpenChange:c=>l(c),triggerButton:e.jsx("button",{color:"secondary",className:"rounded-lg bg-transparent px-3 py-2 text-token-text-primary duration-100 ease-in hover:bg-white active:scale-[0.9] dark:bg-transparent dark:hover:bg-gray-700",onClick:()=>{l(c=>!c)},children:e.jsx(O,{className:"icon-md"})}),children:[a&&e.jsx(j.Item,{color:"danger",onClick:()=>{n(!0)},icon:A,children:e.jsx(o,{id:"gizmo.gpt.grid.DeleteGPT",defaultMessage:"Delete GPT"})}),t&&e.jsx(j.Item,{onClick:()=>{E.removeFromRecent(d,s.gizmo.id)},children:e.jsx(o,{id:"gizmo.gpt.grid.RemoveFromRecent",defaultMessage:"Remove from Recent"})})]}),i&&e.jsx(Z,{children:e.jsx(Q,{gizmoId:s.gizmo.id,onSuccess:()=>{n(!1)},onClose:()=>{n(!1)}})})]})}const ae=S({conversationCountStrLabel:{id:"gizmo.gpt.grid.conversationCountStrLabel",defaultMessage:"{numConvos} Chats"}});export{pe as C,b as G,R as a,ge as b};
//# sourceMappingURL=csjinesjzt0i1sk8.js.map