import{X as c,y as e,bq as p,br as M,a1 as n,a6 as u}from"./h5ff4q8twapx3q1l.js";import{a as v,G as a,U as r}from"./eaolrnt6anbncfvf.js";import{A as g}from"./h1tm48v2bpsrt4mb.js";import{bM as b,bN as f}from"./hdlwzrexy0ogyolr.js";import"./en1v1s1ri4v4p3lm.js";import"./xq8kuy6dbwsvd08f.js";import"./ney1bckf0viywq0k.js";import"./e1edzos5sqc3qgpp.js";import"./d3y72ugnrmac5z1v.js";import"./be4985ze0hhhe4f1.js";import"./e9lafxuzyeh4418f.js";import"./ce96ae8p6sffpf80.js";import"./mobpe1as7iy6e69d.js";function y({workspace:i}){const t=c(),l=v(a.InviteUsersToWorkspace),m=b()??!0,o=f()?.map(d=>d.hostname);return e.jsx(p,{size:"custom",className:"max-w-lg text-sm",isOpen:l,onClose:M,type:"success",title:i.data.name!=null?t.formatMessage(s.inviteMemberModalTitle,{workspaceName:i.data.name}):t.formatMessage(s.inviteMemberModalTitleUntitledWorkspace),description:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx(n,{...s.inviteMemberModalDescription})}),!!o?.length&&!m&&e.jsxs("p",{className:"mt-2",children:[e.jsx(n,{...s.prohibitExternalDomainsDescription})," ",e.jsx("b",{children:o.join(", ")})]})]}),children:e.jsx(g,{workspace:i,canResendInviteEmails:!0,onCancel:()=>r.closeModal(a.InviteUsersToWorkspace),onSuccess:()=>r.closeModal(a.InviteUsersToWorkspace),cancelButtonText:t.formatMessage(s.inviteMemberInviteCancelButton)})})}const s=u({inviteMemberInviteCancelButton:{id:"adminPage.inviteMemberInviteCancelButton",defaultMessage:"Cancel"},inviteMemberModalTitle:{id:"adminPage.inviteMemberModalTitle",defaultMessage:"Invite members to the {workspaceName} workspace"},inviteMemberModalTitleUntitledWorkspace:{id:"adminPage.inviteMemberModalTitleUntitledWorkspace",defaultMessage:"Invite members to this workspace"},inviteMemberModalDescription:{id:"adminPage.inviteMemberModalDescription",defaultMessage:"This workspace is private, only select members and roles can use this workspace. This workspace is opted out of training."},prohibitExternalDomainsDescription:{id:"ky8nVd",defaultMessage:"Only users from the following emails can be added to this workspace:"},fileTooLargeWarning:{id:"adminPage",defaultMessage:"File is too large. Please upload a CSV file smaller than {maxSize}."}});export{y as default};
//# sourceMappingURL=i4ceug7a7ye6l4nh.js.map