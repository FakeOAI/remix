import{j as e,N as b,bc as N,r as c,P as M,F as p,O as F,U as v,c as x,aQ as S,V as C,u as E}from"./hloj85fregi26ji6.js";import{bo as P,ba as y,bd as O,aD as U,q as j,aq as q,aS as _,a3 as H}from"./g7w33hsyqmw6f524.js";import{a$ as L}from"./g65last9w3zpj4e1.js";import{e as A}from"./oxm37jjpmmj4jh4x.js";function B(t,o){const a=t??o??0;return x(t!=null&&t!=o&&"opacity-50 dark:opacity-60",a>4?"text-brand-purple":a>3?"text-green-500":a>2?"text-yellow-500":a>1?"text-orange-500":"text-red-500")}function I(t){switch(t){case 1:return s.hoverRating1;case 2:return s.hoverRating2;case 3:return s.hoverRating3;case 4:return s.hoverRating4;case 5:return s.hoverRating5}}function Q(t){return E({queryFn:async()=>_.getUserReview(t),queryKey:["gizmo","review",{gizmoId:t}],enabled:t!=null})}const V=({rating:t,onRating:o,className:a})=>{const[i,u]=c.useState(),r=b();return e.jsx("div",{className:x("flex flex-row",a),children:[1,2,3,4,5].map(d=>{const m=e.jsx(L,{className:x("icon-2xl cursor-pointer",(i??t??0)>=d?B(i,t):"text-token-main-surface-tertiary")}),g=I(i??0),l=g&&r.formatMessage(g);return e.jsx("div",{onClick:()=>{o(d)},onMouseEnter:()=>{u(d)},onMouseLeave:()=>{u(void 0)},className:"p-1",children:g?e.jsx(j,{label:l,side:"top",sideOffset:4,children:m}):m},d)})})},X=({gizmo:t})=>P(y.GPTReview)?e.jsx(D,{gizmo:t}):null,D=({gizmo:t})=>{var R,w;const o=O(),a=()=>H.closeModal(y.GPTReview),i=b(),u=N(),[r,d]=c.useState(""),[m,g]=c.useState(!1),l=Q(t.gizmo.id),G=A(t.gizmo.id),[n,h]=c.useState(),z=n===((R=l.data)==null?void 0:R.rating);c.useEffect(()=>{l.data!=null&&n==null&&h(l.data.rating)},[l.data,n]),c.useEffect(()=>{M.logEvent(p.showRatingModal,{gizmo_id:t.gizmo.id})},[t.gizmo.id]);const k=l.data!=null,T=!((w=t.gizmo.tags)!=null&&w.includes(U.FirstParty))&&t.gizmo.author.will_receive_support_emails;return e.jsx(F,{type:"success",title:e.jsxs("div",{children:[e.jsx(v,{...s.title}),e.jsxs("div",{className:"align-end mt-2 flex text-sm font-normal",children:[k?e.jsx(v,{...s.subtitleChange}):e.jsx(v,{...s.subtitle}),e.jsx(j,{label:i.formatMessage(s.subtitleTooltip),className:"ml-1 flex cursor-pointer items-center pl-1",sideOffset:0,children:e.jsx("div",{className:"icon-xs flex items-center justify-center rounded-full border border-token-text-tertiary text-[8px] font-bold text-token-text-tertiary",children:"i"})})]})]}),isOpen:!0,onClose:a,size:"custom",showCloseButton:!0,className:"max-w-xl overflow-y-auto",hideSeparator:!0,children:e.jsxs("div",{className:"flex flex-grow flex-col space-y-8",children:[e.jsx(V,{rating:n,onRating:h,className:"mx-auto flex flex-row items-center"}),T&&e.jsxs("div",{children:[e.jsx(q,{className:"mb-1 w-full resize-none overflow-y-auto rounded-md bg-transparent focus:border-gray-200 focus:ring-gray-200 dark:focus:border-white dark:focus:ring-white",placeholder:i.formatMessage(s.messagePlaceholder),value:r,rows:1,onChange:f=>d(f.target.value)}),e.jsxs("div",{className:x("flex flex-row items-center space-x-2 self-start",r.length>0?"text-token-text-primary":"text-token-text-tertiary"),children:[e.jsx("input",{type:"checkbox",className:"rounded",checked:m,onChange:f=>g(f.target.checked)}),o&&e.jsx("span",{className:"text-sm",children:e.jsx(v,{...s.includeFrom,values:{email:e.jsx("strong",{children:o.email})}})})]})]}),e.jsx(S,{color:"primary",disabled:z,onClick:async()=>{if(n==null){u.warning("Please select a rating");return}M.logEvent(p.submitRatingModal,{gizmo_id:t.gizmo.id,rating:n}),await G.mutateAsync({rating:n,message:r.length>0?r:void 0,includeFrom:r.length>0?m:void 0}),u.success(i.formatMessage(s.successToast),{duration:3}),a()},children:e.jsx(v,{...s.submit})})]})})},s=C({title:{id:"GizmoReviewModal.title",defaultMessage:"Leave Feedback"},subtitle:{id:"GizmoReviewModal.subtitle",defaultMessage:"How would you rate this GPT?"},subtitleChange:{id:"GizmoReviewModal.subtitleChange",defaultMessage:"Would you like to change your rating?"},subtitleTooltip:{id:"GizmoReviewModal.subtitleTooltip",defaultMessage:"Stars will be public and anonymous"},messagePlaceholder:{id:"GizmoReviewModal.messagePlaceholder",defaultMessage:"Add an optional private email to the creator"},submit:{id:"GizmoReviewModal.submit",defaultMessage:"Submit"},successToast:{id:"GizmoReviewModal.successToast",defaultMessage:"Review sent"},includeFrom:{id:"GizmoReviewModal.includeFrom",defaultMessage:"Include my email address {email}"},hoverRating1:{id:"GizmoReviewModal.hoverRating1",defaultMessage:"Bad"},hoverRating2:{id:"GizmoReviewModal.hoverRating2",defaultMessage:"Okay"},hoverRating3:{id:"GizmoReviewModal.hoverRating3",defaultMessage:"Good"},hoverRating4:{id:"GizmoReviewModal.hoverRating4",defaultMessage:"Great!"},hoverRating5:{id:"GizmoReviewModal.hoverRating5",defaultMessage:"Excellent!"}});export{X as G,V as a};
//# sourceMappingURL=jh2k70ey33410zk7.js.map