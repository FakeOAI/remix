import{Y as c,x as e,br as p,bs as M,a2 as n,a7 as u}from"./h11ymloodq9g1jsm.js";import{a as v,G as a,U as r}from"./fzg4ztxf1dd6k2qj.js";import{A as g}from"./c33pkothqkyf3goj.js";import{bM as b,bN as f}from"./d99imeng6jbz5fyz.js";import"./b4lc2pk5tx9fvyxr.js";import"./dsaua33b1n5eatnj.js";import"./eq74s9a1xv98w014.js";import"./jw64vuuhp544up6k.js";import"./d3y72ugnrmac5z1v.js";import"./n734xk2th0xqcc5b.js";import"./e9lafxuzyeh4418f.js";import"./d5q1hxhmgh51ghl2.js";import"./ojuvt29p72858xnp.js";function A({workspace:i}){const t=c(),l=v(a.InviteUsersToWorkspace),m=b()??!0,o=f()?.map(d=>d.hostname);return e.jsx(p,{size:"custom",className:"max-w-lg text-sm",isOpen:l,onClose:M,type:"success",title:i.data.name!=null?t.formatMessage(s.inviteMemberModalTitle,{workspaceName:i.data.name}):t.formatMessage(s.inviteMemberModalTitleUntitledWorkspace),description:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx(n,{...s.inviteMemberModalDescription})}),!!o?.length&&!m&&e.jsxs("p",{className:"mt-2",children:[e.jsx(n,{...s.prohibitExternalDomainsDescription})," ",e.jsx("b",{children:o.join(", ")})]})]}),children:e.jsx(g,{workspace:i,canResendInviteEmails:!0,onCancel:()=>r.closeModal(a.InviteUsersToWorkspace),onSuccess:()=>r.closeModal(a.InviteUsersToWorkspace),cancelButtonText:t.formatMessage(s.inviteMemberInviteCancelButton)})})}const s=u({inviteMemberInviteCancelButton:{id:"adminPage.inviteMemberInviteCancelButton",defaultMessage:"Cancel"},inviteMemberModalTitle:{id:"adminPage.inviteMemberModalTitle",defaultMessage:"Invite members to the {workspaceName} workspace"},inviteMemberModalTitleUntitledWorkspace:{id:"adminPage.inviteMemberModalTitleUntitledWorkspace",defaultMessage:"Invite members to this workspace"},inviteMemberModalDescription:{id:"adminPage.inviteMemberModalDescription",defaultMessage:"This workspace is private, only select members and roles can use this workspace. This workspace is opted out of training."},prohibitExternalDomainsDescription:{id:"ky8nVd",defaultMessage:"Only users from the following emails can be added to this workspace:"},fileTooLargeWarning:{id:"adminPage",defaultMessage:"File is too large. Please upload a CSV file smaller than {maxSize}."}});export{A as default};
//# sourceMappingURL=cg1dpoy3w0v31xyf.js.map