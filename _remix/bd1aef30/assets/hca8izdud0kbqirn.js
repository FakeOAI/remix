import{a1 as B,r as g,l as e,m as Y,a6 as de,aM as Z,b5 as A,a5 as f,aS as O,u as me,d as ce,Z as ue}from"./gghzs582a65dvm3m.js";import{T as fe,be as ge,bd as pe,a4 as w,I as he,C as xe,cc as ve,c as be,cd as Me}from"./pd094ob9wacofnvk.js";import{V as J}from"./d3y72ugnrmac5z1v.js";import{S as we,c as Se}from"./9iu40ylckxf6thie.js";import{k as je,A as Ee,a1 as Ce}from"./e34jsxd5qw5romn0.js";import{S as j}from"./hxxw62av1uep63qt.js";function G(a){return a.split(/[\s,]+/)}function Ie({value:a,onChange:n,className:v}){const p=B(),[r,o]=g.useState(""),b=g.useCallback(M=>{if(r)switch(M.key){case"Enter":case",":case" ":{const x=G(r);n([...a,...x.map(K)]),o(""),M.preventDefault()}}},[r,n,a]),h=M=>{if(r){const x=G(r);n([...a,...x.map(K)]),o(r),M.preventDefault()}};return e.jsx(we,{className:Y("react-select-container",v),isMulti:!0,onBlur:h,classNamePrefix:"react-select",components:ye,inputValue:r,isClearable:!0,menuIsOpen:!1,onChange:n,onInputChange:o,onKeyDown:b,placeholder:p.formatMessage(H.placeholder),value:a,"aria-labelledby":"add-emails-label",name:"add-member-emails"})}const K=a=>({label:a,value:a,isValid:J.test(a)}),Ne=a=>{const n=B(),v=e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx("span",{children:a.children}),e.jsx(je,{className:"icon-sm"})]}),p=a.data.isValid?v:e.jsx(fe,{label:n.formatMessage(H.tooltipInvalidEmail,{email:a.data.value}),side:"top",children:v});return e.jsx(Se.MultiValue,{...a,children:e.jsx("button",{className:Y("m-1 cursor-pointer rounded-full border border-transparent py-1 pl-3 pr-2 text-sm text-token-text-primary",a.data.isValid?"bg-token-main-surface-secondary hover:border-token-border-medium hover:bg-token-main-surface-tertiary":"bg-red-200 text-red-500"),onClick:r=>{var o,b;(b=(o=a.removeProps).onClick)==null||b.call(o,r),r.preventDefault()},"aria-label":n.formatMessage(H.removeMember,{member:a.data.value}),children:p})})},ye={DropdownIndicator:()=>null,IndicatorsContainer:()=>null,ClearIndicator:()=>null,MultiValueRemove:()=>null,MultiValue:Ne},H=de({membersAdded:{id:"emailsTextarea.membersAdded",defaultMessage:"+{count} {count, plural, one {member} other {members}}"},removeMember:{id:"emailsTextarea.removeMember",defaultMessage:"Remove {member}"},tooltipInvalidEmail:{id:"emailsTextarea.tooltipInvalidEmail",defaultMessage:'"{email}" may not be a valid email'},clearAllEntries:{id:"emailsTextarea.clearAllEntries",defaultMessage:"Clear all"},placeholder:{id:"emailsTextarea.placeholder",defaultMessage:"Type an email and press enter..."}}),ke=`email,role
user1@company.com,member
admin@company.com,admin
it@company.com,owner`,ee=25,Q=[];function _e({workspace:a,canResendInviteEmails:n,onCancel:v,cancelButtonText:p,onSuccess:r,fullWidthButtons:o=!1}){const b=a.isOwnerOfAccount(),[h,M]=g.useState(!1),[x,I]=g.useState(!1),y=g.useRef(null),c=a.isTeam(),l=B(),E=Z(),[S,k]=g.useState(!0),[V,D]=g.useState(!1),[N,P]=g.useState(0),[u,R]=g.useState([]),[F,z]=g.useState([]),{mutateAsync:ae}=Re(a.id,r),T=ge(),W=pe()??!0,[L,U]=g.useState(Q);g.useEffect(()=>{if(!(u!=null&&u.length)||!(T!=null&&T.length)||W){U(Q);return}const t=T.map(s=>"@"+s.hostname.toLowerCase()),m=u.map(({email:s})=>s.toLowerCase()).filter(s=>!t.some(d=>s.endsWith(d)));U(m)},[T,W,u]);const C=Ve(b),te=async t=>{var s;const m=(s=t.target.files)==null?void 0:s[0];if(m){const d=await Te(m,C,x);d.status==="success"?(R(d.newRows),P(1),I(d.hasWarning)):d.reason==="file_too_large"?E.danger(l.formatMessage(i.fileTooLargeWarning,{maxSize:`${ee}MB`}),{duration:5}):d.reason==="invalid_file_type"&&E.danger(l.formatMessage(i.fileIncorrectTypeWarning),{duration:5})}},q=(t,m,s)=>{const d=[...u];d[t]={...d[t],[m]:s},R(d)},ie=t=>{const m=[...u.slice(0,t),...u.slice(t+1)];R(m)},X=g.useCallback(()=>{R([]),P(0),D(!1),z([])},[]),se=async()=>{D(!0);try{u.length>5&&E.info(l.formatMessage(i.inviteMessageLoading,{numRows:u.length}),{hasCloseButton:!0});const t=[["admin",O.ADMIN],["owner",O.OWNER],["member",O.STANDARD]],s=(await Promise.all(be(t.map(([d,oe])=>{const $=u.filter(_=>_.role===d).map(_=>_.email);return $.length>0&&ae({emails:$,role:oe,resendEmails:S})})))).flat().length;s>0&&E.success(l.formatMessage(i.inviteSuccessToast,{numRows:s,userStr:s===1?"user":"users",workspaceName:Me(l,a)})),r==null||r(),X()}finally{D(!1)}},ne=()=>{const t=new Set,m=F.reduce((s,d)=>(t.has(d.value)||s.push(d.value),t.add(d.value),s),[]);R(m.map(s=>({email:s,role:C.member}))),P(1)},le=e.jsx(A,{color:"primary",size:o?"large":"medium",disabled:V||u.length===0||L.length>0,onClick:se,children:V?l.formatMessage(i.inviteMemberInviteSubmitButtonLoading):l.formatMessage(i.inviteMemberInviteSubmitButton)}),re=e.jsx(A,{color:"primary",size:o?"large":"medium",disabled:F.length===0,onClick:ne,children:l.formatMessage(i.inviteMemberInviteNextButton)});return e.jsxs("div",{className:"flex flex-col gap-2",children:[N===0&&e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("label",{htmlFor:"upload-csv",id:"upload-csv-label",children:e.jsx(f,{...i.importCSVLabel})}),e.jsxs("span",{className:"text-sm text-token-text-tertiary",children:[e.jsx(f,{...h?i.helperCSVFormatHide:i.helperCSVFormatShow,values:{link:t=>e.jsx("button",{className:"underline",onClick:()=>{M(!h)},children:t})}}),h&&e.jsx("pre",{className:"mt-4",children:ke})]})]}),e.jsx("input",{ref:y,type:"file",accept:".csv,text/csv",id:"upload-csv",className:"hidden",onChange:te}),e.jsx(A,{color:"secondary",onClick:()=>{var t;return(t=y.current)==null?void 0:t.click()},children:e.jsx(f,{...i.importCSVButton})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"add-member-emails",id:"add-emails-label",children:e.jsx(f,{...i.addEmailsFieldName})}),e.jsx(Ie,{value:F,onChange:z})]})]}),N===1&&e.jsxs(e.Fragment,{children:[x&&e.jsxs("div",{className:"flex w-full items-center bg-yellow-100 p-4",children:[e.jsx(Ee,{className:"icon-sm mr-2 text-yellow-700"}),e.jsx("div",{className:"flex-grow text-yellow-700",children:e.jsx(f,{...i.unspecifiedRoleDescription})})]}),L.length>0&&e.jsx("div",{className:"flex w-full items-center bg-red-100 p-4",children:e.jsxs("div",{className:"flex-grow text-red-700",children:[e.jsx(f,{...i.prohibitedExternalEmailDescription}),e.jsx("pre",{className:"my-1",children:L.join(", ")}),e.jsx(f,{...i.prohibitedExternalEmailResolution})]})}),e.jsxs(w.Root,{size:"normal",children:[e.jsxs(w.Header,{children:[e.jsx(w.HeaderCell,{children:e.jsx(f,{...i.inviteTableHeaderEmail})}),e.jsx(w.HeaderCell,{className:"pl-3 dark:bg-gray-900",children:e.jsx(f,{...i.inviteTableHeaderRole})}),e.jsx(w.HeaderCell,{})]}),e.jsx(w.Body,{children:u.map((t,m)=>e.jsxs(w.Row,{children:[e.jsx(w.Cell,{children:e.jsx(he,{name:"email",type:"email",value:t.email,onChange:s=>q(m,"email",s.target.value),color:"neutral"})}),e.jsx(w.Cell,{children:e.jsxs(j.Root,{value:t.role,onValueChange:s=>q(m,"role",s),children:[e.jsxs(j.Trigger,{children:[e.jsx(j.Value,{}),e.jsx(j.Icon,{})]}),e.jsx(j.Portal,{children:e.jsxs(j.Content,{className:"border border-token-main-surface-secondary",children:[e.jsx(j.Item,{value:C.member,children:e.jsx(f,{...i.inviteRoleMember})}),C.admin&&e.jsx(j.Item,{value:C.admin,children:e.jsx(f,{...i.inviteRoleAdmin})}),C.owner&&e.jsx(j.Item,{value:C.owner,children:e.jsx(f,{...i.inviteRoleOwner})})]})})]})}),e.jsx(w.Cell,{textAlign:"right",children:e.jsx(Ce,{onClick:()=>ie(m),className:"icon-sm mr-2 cursor-pointer text-token-text-secondary"})})]},m))})]})]}),n&&k&&e.jsx("div",{className:"mt-2 flex items-center text-left text-token-text-secondary",children:e.jsx(xe,{id:"resend-emails",checked:S,onChange:t=>k(t.currentTarget.checked),label:l.formatMessage(i.resendEmailsFieldName)})}),N===0&&c&&e.jsx("div",{className:"mb-4",children:e.jsx(ve,{children:e.jsx(f,{...i.teamInviteModalNote})})}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(A,{color:"secondary",size:o?"large":"medium",onClick:()=>{N!==0?P(0):(X(),v())},children:N===0?p:l.formatMessage(i.inviteMemberInviteBackButton)}),N===0?re:le]})]})}function Re(a,n){const v=B(),p=Z(),r=me();return ce({mutationFn:async({emails:o,role:b,resendEmails:h})=>{const M=[],x=Math.max(5,Math.round(o.length/10));for(let c=0;c<o.length;c+=x)M.push(o.slice(c,c+x));const I=async c=>ue.addWorkspaceUsers(a,c,b,h).then(l=>(l.errored_emails.length>0&&p.danger(v.formatMessage(i.inviteMessageFailure,{emailsStr:l.errored_emails.map(({email_address:E,error:S})=>`${E}: ${S}`).join(", ")})),l.account_invites)).catch(l=>{throw p.danger(l.message),l});return(await Promise.all(M.map(c=>I(c)))).flat()},onSuccess:()=>{r.invalidateQueries({queryKey:["workspace","invites",a]}),n==null||n()}})}function Te(a,n,v){return new Promise(p=>{if(a.size/1048576>ee)p({status:"error",reason:"file_too_large"});else if(a.type!=="text/csv")p({status:"error",reason:"invalid_file_type"});else{const o=new FileReader;o.readAsText(a),o.onload=function(b){var c;let h=v;const x=((c=b.target)==null?void 0:c.result).split(`
`),I=new Set,y=x.reduce((l,E)=>{const[S,k]=E.split(",").map(V=>V.trim());return J.test(S)&&!I.has(S)&&(n[k]===void 0&&!h&&(h=!0),l.push({email:S,role:n[k]??n.member})),I.add(S),l},[]);p({status:"success",newRows:y,hasWarning:h})}}})}const Ve=a=>{const n={member:"member"};return a&&(n.admin="admin",n.owner="owner"),n},i={importCSVLabel:{id:"adminPage.importCSVLabel",defaultMessage:"Import from CSV",description:"Name of label for import from CSV button"},helperCSVFormatHide:{id:"adminPage.helperCSVFormat",defaultMessage:'The file must include email and an optional role on each line. Roles can be "member", "admin", or "owner". <link>Hide Example</link>',description:"Instructions for formatting the import CSV, with a link to hide the example"},helperCSVFormatShow:{id:"adminPage.helperCSVFormat",defaultMessage:'The file must include email and an optional role on each line. Roles can be "member", "admin", or "owner". <link>Show Example</link>',description:"Instructions for formatting the import CSV, with a link to show an example"},importCSVButton:{id:"adminPage.importCSVButton",defaultMessage:"Upload",description:"Name of upload from CSV button"},addEmailsFieldName:{id:"adminPage.addEmailsFieldName.0",defaultMessage:"Emails",description:"Name of input for adding emails to workspace"},unspecifiedRoleDescription:{id:"adminPage.unspecifiedRoleDescription",defaultMessage:"Roles that were unspecified have been changed to Member.",description:"Description text for defaulting invite roles to member"},prohibitedExternalEmailDescription:{id:"adminPage.prohibitedExternalEmailDescription",defaultMessage:"The following emails are not a part of your organization's verified domains:",description:"Description text for error message"},prohibitedExternalEmailResolution:{id:"adminPage.prohibitedExternalEmailResolution",defaultMessage:'Either remove these emails, enable "Allow External Domain Invites" from your workspace settings, or verify these email domains.',description:"Description text for error message"},inviteTableHeaderEmail:{id:"adminPage.inviteTableHeaderEmail",defaultMessage:"Email",description:"Label for email column of invite table header"},inviteTableHeaderRole:{id:"adminPage.inviteTableHeaderRole",defaultMessage:"Role",description:"Label for role column of invite table header"},inviteRoleMember:{id:"adminPage.inviteRoleMember",defaultMessage:"Member",description:"Member role for workspace invite"},inviteRoleAdmin:{id:"adminPage.inviteRoleAdmin",defaultMessage:"Admin",description:"Admin role for workspace invite"},inviteRoleOwner:{id:"adminPage.inviteRoleOwner",defaultMessage:"Owner",description:"Owner role for workspace invite"},fileTooLargeWarning:{id:"adminPage",defaultMessage:"File is too large. Please upload a CSV file smaller than {maxSize}.",description:"Error when uploading a file that is too large"},fileIncorrectTypeWarning:{id:"adminPage",defaultMessage:"Please upload a CSV file.",description:"Error when uploading a file that is not a CSV"},resendEmailsFieldName:{id:"adminPage.resendEmailsFieldName",defaultMessage:"Resend emails for existing invites",description:"Name of checkbox input for resending emails to workspace"},teamInviteModalNote:{id:"adminPage.teamInviteModalNote",defaultMessage:"Users that accept invites will be included as additional seats on your next invoice.",description:"Note for team plan invites that additional seats will be charged"},inviteMessageLoading:{id:"adminPage.inviteMessageLoading",defaultMessage:"Sending out {numRows} invites, this may take a minute...",description:"Loading message when invites are being sent"},inviteSuccessToast:{id:"adminPage.inviteSuccessToast",defaultMessage:"Invited {numRows} {userStr} to {workspaceName}",description:"Message on successfully sending out invites"},inviteMemberInviteNextButton:{id:"adminPage.inviteMemberInviteNextButton",defaultMessage:"Next",description:"The title of the invite member modal next button"},inviteMemberInviteSubmitButton:{id:"adminPage.inviteMemberInviteSubmitButton",defaultMessage:"Send invites",description:"The title of the invite member modal submit button"},inviteMemberInviteSubmitButtonLoading:{id:"adminPage.inviteMemberInviteSubmitButtonLoading",defaultMessage:"Sending invites...",description:"Button label while inviting members"},inviteMemberInviteBackButton:{id:"adminPage.inviteMemberInviteBackButton",defaultMessage:"Back",description:"The title of the invite member modal back button"},inviteMessageFailure:{id:"adminPage.inviteMessageFailure",defaultMessage:"Unable to invite {emailsStr}",description:"Message that shows which emails were unsuccessful at being invited"}};export{_e as A};
//# sourceMappingURL=hca8izdud0kbqirn.js.map