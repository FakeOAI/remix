import{X as c,y as e,bq as p,br as M,a1 as n,a6 as u}from"./flidd11gv2mtd3pr.js";import{a as v,G as a,U as r}from"./l0fcm4l649pd7v83.js";import{A as g}from"./fmp712g8le7pq4pp.js";import{bJ as b,bK as f}from"./b3rades3r6m68flq.js";import"./hblp7wkoj3uom6wj.js";import"./c2irxumz2s63grlt.js";import"./ez1kjz5fvk5gkbgz.js";import"./f4lu6fjawq1oq6b1.js";import"./d3y72ugnrmac5z1v.js";import"./gc1pxs1h3evckg8x.js";import"./e9lafxuzyeh4418f.js";import"./fv7ub7cxj399tr6j.js";import"./gmdmr9wfsgbqi27t.js";function y({workspace:i}){const t=c(),l=v(a.InviteUsersToWorkspace),m=b()??!0,o=f()?.map(d=>d.hostname);return e.jsx(p,{size:"custom",className:"max-w-lg text-sm",isOpen:l,onClose:M,type:"success",title:i.data.name!=null?t.formatMessage(s.inviteMemberModalTitle,{workspaceName:i.data.name}):t.formatMessage(s.inviteMemberModalTitleUntitledWorkspace),description:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsx(n,{...s.inviteMemberModalDescription})}),!!o?.length&&!m&&e.jsxs("p",{className:"mt-2",children:[e.jsx(n,{...s.prohibitExternalDomainsDescription})," ",e.jsx("b",{children:o.join(", ")})]})]}),children:e.jsx(g,{workspace:i,canResendInviteEmails:!0,onCancel:()=>r.closeModal(a.InviteUsersToWorkspace),onSuccess:()=>r.closeModal(a.InviteUsersToWorkspace),cancelButtonText:t.formatMessage(s.inviteMemberInviteCancelButton)})})}const s=u({inviteMemberInviteCancelButton:{id:"adminPage.inviteMemberInviteCancelButton",defaultMessage:"Cancel"},inviteMemberModalTitle:{id:"adminPage.inviteMemberModalTitle",defaultMessage:"Invite members to the {workspaceName} workspace"},inviteMemberModalTitleUntitledWorkspace:{id:"adminPage.inviteMemberModalTitleUntitledWorkspace",defaultMessage:"Invite members to this workspace"},inviteMemberModalDescription:{id:"adminPage.inviteMemberModalDescription",defaultMessage:"This workspace is private, only select members and roles can use this workspace. This workspace is opted out of training."},prohibitExternalDomainsDescription:{id:"ky8nVd",defaultMessage:"Only users from the following emails can be added to this workspace:"},fileTooLargeWarning:{id:"adminPage",defaultMessage:"File is too large. Please upload a CSV file smaller than {maxSize}."}});export{y as default};
//# sourceMappingURL=ll3xx7xj2009bgtr.js.map