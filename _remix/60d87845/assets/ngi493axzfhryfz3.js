import{X as c,l as e,Y as p,Z as M,$ as o,a0 as u}from"./dwkd3b3c7kg0ot7l.js";import{aH as v,aE as t,bJ as g,bK as b,Z as l}from"./ok65lib68mghk0mk.js";import{A as f}from"./c7ps7kqutytmmxb0.js";import"./byou0827mflm7tmy.js";import"./d3y72ugnrmac5z1v.js";import"./ixu9pe9q8xkyoufd.js";import"./fzrn137102spawew.js";import"./e9lafxuzyeh4418f.js";import"./e0jtggszd8qi3wlk.js";function U({workspace:a}){const i=c(),r=v(t.InviteUsersToWorkspace),m=g()??!0,n=b()?.map(d=>d.hostname);return e.jsx(p,{size:"custom",className:"max-w-lg text-sm",isOpen:r,onClose:M,type:"success",title:a.data.name!=null?i.formatMessage(s.inviteMemberModalTitle,{workspaceName:a.data.name}):i.formatMessage(s.inviteMemberModalTitleUntitledWorkspace),description:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx(o,{...s.inviteMemberModalDescription})}),!!n?.length&&!m&&e.jsxs("p",{className:"mt-2",children:[e.jsx(o,{...s.prohibitExternalDomainsDescription})," ",e.jsx("b",{children:n.join(", ")})]})]}),children:e.jsx(f,{workspace:a,canResendInviteEmails:!0,onCancel:()=>l.closeModal(t.InviteUsersToWorkspace),onSuccess:()=>l.closeModal(t.InviteUsersToWorkspace),cancelButtonText:i.formatMessage(s.inviteMemberInviteCancelButton)})})}const s=u({inviteMemberInviteCancelButton:{id:"adminPage.inviteMemberInviteCancelButton",defaultMessage:"Cancel"},inviteMemberModalTitle:{id:"adminPage.inviteMemberModalTitle",defaultMessage:"Invite members to the {workspaceName} workspace"},inviteMemberModalTitleUntitledWorkspace:{id:"adminPage.inviteMemberModalTitleUntitledWorkspace",defaultMessage:"Invite members to this workspace"},inviteMemberModalDescription:{id:"adminPage.inviteMemberModalDescription",defaultMessage:"This workspace is private, only select members and roles can use this workspace. This workspace is opted out of training."},prohibitExternalDomainsDescription:{id:"ky8nVd",defaultMessage:"Only users from the following emails can be added to this workspace:"},fileTooLargeWarning:{id:"adminPage",defaultMessage:"File is too large. Please upload a CSV file smaller than {maxSize}."}});export{U as default};
//# sourceMappingURL=ngi493axzfhryfz3.js.map