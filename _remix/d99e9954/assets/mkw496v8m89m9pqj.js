import{J as c,j as e,bz as p,aN as M,aB as o,I as u}from"./mj0lqn4ze2fljnbl.js";import{a6 as v,a7 as t,bi as g,bj as b,a8 as r}from"./eufwkg2s3wcyxsss.js";import{A as f}from"./curdvk7x6mmm2j0y.js";import"./n88p71sdmouzlavs.js";import"./d3y72ugnrmac5z1v.js";import"./fsiqshj0ycmot116.js";import"./fzrn137102spawew.js";import"./e9lafxuzyeh4418f.js";import"./donupmsfw9cp9thm.js";import"./5iks3uuuttg5pxfn.js";import"./c4bxzbp1808foto4.js";function E({workspace:i}){const a=c(),l=v(t.InviteUsersToWorkspace),m=g()??!0,n=b()?.map(d=>d.hostname);return e.jsx(p,{size:"custom",className:"max-w-lg text-sm",isOpen:l,onClose:M,type:"success",title:i.data.name!=null?a.formatMessage(s.inviteMemberModalTitle,{workspaceName:i.data.name}):a.formatMessage(s.inviteMemberModalTitleUntitledWorkspace),description:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx(o,{...s.inviteMemberModalDescription})}),!!n?.length&&!m&&e.jsxs("p",{className:"mt-2",children:[e.jsx(o,{...s.prohibitExternalDomainsDescription})," ",e.jsx("b",{children:n.join(", ")})]})]}),children:e.jsx(f,{workspace:i,canResendInviteEmails:!0,onCancel:()=>r.closeModal(t.InviteUsersToWorkspace),onSuccess:()=>r.closeModal(t.InviteUsersToWorkspace),cancelButtonText:a.formatMessage(s.inviteMemberInviteCancelButton)})})}const s=u({inviteMemberInviteCancelButton:{id:"adminPage.inviteMemberInviteCancelButton",defaultMessage:"Cancel"},inviteMemberModalTitle:{id:"adminPage.inviteMemberModalTitle",defaultMessage:"Invite members to the {workspaceName} workspace"},inviteMemberModalTitleUntitledWorkspace:{id:"adminPage.inviteMemberModalTitleUntitledWorkspace",defaultMessage:"Invite members to this workspace"},inviteMemberModalDescription:{id:"adminPage.inviteMemberModalDescription",defaultMessage:"This workspace is private, only select members and roles can use this workspace. This workspace is opted out of training."},prohibitExternalDomainsDescription:{id:"ky8nVd",defaultMessage:"Only users from the following emails can be added to this workspace:"},fileTooLargeWarning:{id:"adminPage",defaultMessage:"File is too large. Please upload a CSV file smaller than {maxSize}."}});export{E as default};
//# sourceMappingURL=mkw496v8m89m9pqj.js.map