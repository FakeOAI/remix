import{D as u,r as T,z as x,j as e,E as M,F as v,G as o,ba as i,C as y,H as g}from"./nfjrln83fxu65oyx.js";function P({isOpen:n,onClose:t,account:d,gpt:s}){const m=u(),[r,l]=T.useState(!1),c=x();return e.jsxs(M,{size:"custom",className:"max-w-lg text-sm",isOpen:n,onClose:v,type:"success",title:m.formatMessage(a.removeModalTitle),children:[e.jsx("p",{className:"mb-4 text-token-text-primary",children:e.jsx(o,{...a.removeModalPrompt,values:{gptName:s.gizmo.display.name}})}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx(i,{color:"secondary",onClick:()=>{t(!1)},loading:r,children:e.jsx(o,{...a.cancelButtonText})}),e.jsx(i,{color:"danger",loading:r,onClick:()=>{l(!0),y.removeThirdPartyGPTFromWorkspace(d.id,s.gizmo.id).finally(()=>{c.invalidateQueries({queryKey:["gizmo"]}),t(!0),l(!1)})},children:e.jsx(o,{...a.removeButtonText})})]})]})}const a=g({removeModalTitle:{id:"removeThirdPartyGPTModal.accessModalTitle",defaultMessage:"Remove GPT from workspace"},removeModalPrompt:{id:"removeThirdPartyGPTModal.accessModalPrompt",defaultMessage:"Are you sure you want to revoke approval of {gptName} for your workspace? Members won't be able to chat with this GPT anymore."},cancelButtonText:{id:"removeThirdPartyGPTModal.cancelButtonText",defaultMessage:"Cancel"},removeButtonText:{id:"removeThirdPartyGPTModal.removeButtonText",defaultMessage:"Remove GPT"}});export{P as R};
//# sourceMappingURL=e9dvlwfray6zebnr.js.map