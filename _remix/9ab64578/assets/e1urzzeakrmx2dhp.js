import{aj as c,a6 as e,bI as p,c1 as M,aG as o,ak as u}from"./n6pd72le962cb7i2.js";import{bt as v,ae as t,bu as g,bv as b,U as r}from"./jz3yie9s5yhl0osu.js";import{A as f}from"./mgs4ujr1xiqlxxe7.js";import"./b84o1u0lhllftt1g.js";import"./d3y72ugnrmac5z1v.js";import"./jqdkr8jb3ji5agov.js";import"./e9lafxuzyeh4418f.js";import"./km3vamldayfrr3no.js";import"./iimzyot6hhcmz5qa.js";function C({workspace:a}){const i=c(),l=v(t.InviteUsersToWorkspace),m=g()??!0,n=b()?.map(d=>d.hostname);return e.jsx(p,{size:"custom",className:"max-w-lg text-sm",isOpen:l,onClose:M,type:"success",title:a.data.name!=null?i.formatMessage(s.inviteMemberModalTitle,{workspaceName:a.data.name}):i.formatMessage(s.inviteMemberModalTitleUntitledWorkspace),description:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx(o,{...s.inviteMemberModalDescription})}),!!n?.length&&!m&&e.jsxs("p",{className:"mt-2",children:[e.jsx(o,{...s.prohibitExternalDomainsDescription})," ",e.jsx("b",{children:n.join(", ")})]})]}),children:e.jsx(f,{workspace:a,canResendInviteEmails:!0,onCancel:()=>r.closeModal(t.InviteUsersToWorkspace),onSuccess:()=>r.closeModal(t.InviteUsersToWorkspace),cancelButtonText:i.formatMessage(s.inviteMemberInviteCancelButton)})})}const s=u({inviteMemberInviteCancelButton:{id:"adminPage.inviteMemberInviteCancelButton",defaultMessage:"Cancel"},inviteMemberModalTitle:{id:"adminPage.inviteMemberModalTitle",defaultMessage:"Invite members to the {workspaceName} workspace"},inviteMemberModalTitleUntitledWorkspace:{id:"adminPage.inviteMemberModalTitleUntitledWorkspace",defaultMessage:"Invite members to this workspace"},inviteMemberModalDescription:{id:"adminPage.inviteMemberModalDescription",defaultMessage:"This workspace is private, only select members and roles can use this workspace. This workspace is opted out of training."},prohibitExternalDomainsDescription:{id:"ky8nVd",defaultMessage:"Only users from the following emails can be added to this workspace:"},fileTooLargeWarning:{id:"adminPage",defaultMessage:"File is too large. Please upload a CSV file smaller than {maxSize}."}});export{C as default};
//# sourceMappingURL=e1urzzeakrmx2dhp.js.map