import{H as p,j as e,I as M,J as u,K as l,N as v}from"./csnclwvitc93pb4o.js";import{bd as g,b0 as n,bA as b,bB as f,aa as r}from"./h60ucn2y7ct2d4ke.js";import{A as x}from"./eh6nvb5hj9gmz3hg.js";import"./iqrmcf3yr8rsq080.js";import"./d3y72ugnrmac5z1v.js";import"./o5qe8ihxifpld5fe.js";import"./e9lafxuzyeh4418f.js";import"./lwq1s6v2l35z08zw.js";import"./jmutnjyuz0rby5b2.js";import"./ft4fw7ri1hjvqtvf.js";function A({workspace:i}){var o;const t=p(),m=g(n.InviteUsersToWorkspace),d=b()??!0,a=(o=f())==null?void 0:o.map(c=>c.hostname);return e.jsx(M,{size:"custom",className:"max-w-lg text-sm",isOpen:m,onClose:u,type:"success",title:i.data.name!=null?t.formatMessage(s.inviteMemberModalTitle,{workspaceName:i.data.name}):t.formatMessage(s.inviteMemberModalTitleUntitledWorkspace),description:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx(l,{...s.inviteMemberModalDescription})}),!!(a!=null&&a.length)&&!d&&e.jsxs("p",{className:"mt-2",children:[e.jsx(l,{...s.prohibitExternalDomainsDescription})," ",e.jsx("b",{children:a.join(", ")})]})]}),children:e.jsx(x,{workspace:i,canResendInviteEmails:!0,onCancel:()=>r.closeModal(n.InviteUsersToWorkspace),onSuccess:()=>r.closeModal(n.InviteUsersToWorkspace),cancelButtonText:t.formatMessage(s.inviteMemberInviteCancelButton)})})}const s=v({inviteMemberInviteCancelButton:{id:"adminPage.inviteMemberInviteCancelButton",defaultMessage:"Cancel"},inviteMemberModalTitle:{id:"adminPage.inviteMemberModalTitle",defaultMessage:"Invite members to the {workspaceName} workspace"},inviteMemberModalTitleUntitledWorkspace:{id:"adminPage.inviteMemberModalTitleUntitledWorkspace",defaultMessage:"Invite members to this workspace"},inviteMemberModalDescription:{id:"adminPage.inviteMemberModalDescription",defaultMessage:"This workspace is private, only select members and roles can use this workspace. This workspace is opted out of training."},prohibitExternalDomainsDescription:{id:"ky8nVd",defaultMessage:"Only users from the following emails can be added to this workspace:"},fileTooLargeWarning:{id:"adminPage",defaultMessage:"File is too large. Please upload a CSV file smaller than {maxSize}."}});export{A as default};
//# sourceMappingURL=cvjo2nv6p503kstw.js.map