import{X as u,r as T,a as x,l as e,Y as M,Z as g,$ as o,bg as i,j as v,a0 as y}from"./j51q469vqqyswwq0.js";function P({isOpen:n,onClose:t,account:d,gpt:s}){const m=u(),[r,l]=T.useState(!1),c=x();return e.jsxs(M,{size:"custom",className:"max-w-lg text-sm",isOpen:n,onClose:g,type:"success",title:m.formatMessage(a.removeModalTitle),children:[e.jsx("p",{className:"mb-4 text-token-text-primary",children:e.jsx(o,{...a.removeModalPrompt,values:{gptName:s.gizmo.display.name}})}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx(i,{color:"secondary",onClick:()=>{t(!1)},loading:r,children:e.jsx(o,{...a.cancelButtonText})}),e.jsx(i,{color:"danger",loading:r,onClick:()=>{l(!0),v.removeThirdPartyGPTFromWorkspace(d.id,s.gizmo.id).finally(()=>{c.invalidateQueries({queryKey:["gizmo"]}),t(!0),l(!1)})},children:e.jsx(o,{...a.removeButtonText})})]})]})}const a=y({removeModalTitle:{id:"removeThirdPartyGPTModal.accessModalTitle",defaultMessage:"Remove GPT from workspace"},removeModalPrompt:{id:"removeThirdPartyGPTModal.accessModalPrompt",defaultMessage:"Are you sure you want to revoke approval of {gptName} for your workspace? Members won't be able to chat with this GPT anymore."},cancelButtonText:{id:"removeThirdPartyGPTModal.cancelButtonText",defaultMessage:"Cancel"},removeButtonText:{id:"removeThirdPartyGPTModal.removeButtonText",defaultMessage:"Remove GPT"}});export{P as R};
//# sourceMappingURL=iswsdelrn9zx4vka.js.map