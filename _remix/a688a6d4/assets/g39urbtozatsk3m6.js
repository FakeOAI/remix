const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/dgssowwewuess09y.js","assets/fw2sv6mo32vdb58s.js","assets/brnrasthlm0rpj0x.js","assets/root-cfoepnk2.css","assets/oht5o2h8sqx3xv4x.js","assets/mvfp9xkrxbhizxzo.js","assets/conversation-small-ict01xsi.css","assets/o30gwqbql7sre9ac.js","assets/d3y72ugnrmac5z1v.js","assets/ggo2v60vq157bd1m.js","assets/e9lafxuzyeh4418f.js","assets/li5dlojsal06wvlm.js","assets/e5tmr3fkbijb55k4.js","assets/j5w4166bn3c02o6l.js"])))=>i.map(i=>d[i]);
import{u as X,K as R,aj as p,a7 as D,j as T,l as w,ak as A,aE as $,aF as K,c as de,r as v,a6 as e,aG as c,bL as me,cj as Z,U as ee,ar as se,ai as C,b8 as x,aY as ae,b0 as ue,aK as N,aw as ge,a3 as xe,Z as fe,$ as Me,S as je,dE as ve}from"./fw2sv6mo32vdb58s.js";import{c3 as he,fj as V,gs as L,gt as pe,gu as Y,E as i,U as Q,aa as te,gv as G,gw as be,gx as W,c4 as ye,gy as Re,d as Ce,bk as Ue,cI as ke}from"./mvfp9xkrxbhizxzo.js";import{c as Ie}from"./iej0cupg2dqkmejt.js";import{G as ne,Z as P,w as Ne}from"./brnrasthlm0rpj0x.js";import{a as Pe,b as Se,u as De}from"./buqyzt6512jru24w.js";import{m as re}from"./ddheag430xm083zt.js";import{B as we}from"./e5tmr3fkbijb55k4.js";import"./beok4vjsul3c44qa.js";import"./fpjq4i80aohithht.js";import"./nrfrj4av9qbdbq3n.js";import"./e6w4twohzb8ryusl.js";import"./bhsv161b2mgumrql.js";import"./btsvp1p1eo7vmhsr.js";import"./o25fyrrbmgqoghyo.js";import"./j5w4166bn3c02o6l.js";const k=25;function Ae(s,a,t){return X({queryKey:["workspace",s,"invites",a,t],queryFn:async()=>await R.getWorkspaceInvites(s,a,k,t)})}function _e(s,a,t){return X({queryKey:["workspace",s,"invites","requests",a,t],queryFn:async()=>await R.getWorkspaceInviteRequests(s,a,k,t)})}function ie(s){const a=p(),t=D(),n=T();return w({mutationFn:({inviteId:r,role:o,acceptRequest:l})=>R.patchWorkspaceInvite(s,r,{role:o,acceptRequest:l}).catch(d=>{t.danger(a.formatMessage(q.updateInviteError,{error:d.message}))}),onSuccess:()=>{n.invalidateQueries({queryKey:["workspace",s,"invites"]}),n.invalidateQueries({queryKey:["workspace",s,"invites","requests"]}),n.invalidateQueries({queryKey:["workspace",s]})}})}function oe(s){const a=p(),t=D(),n=T();return w({mutationFn:({email:r})=>R.deleteWorkspaceInvite(s,r).catch(o=>{t.danger(a.formatMessage(q.deleteInviteError,{email:r,error:o.message}))}),onSuccess:()=>{n.invalidateQueries({queryKey:["workspace",s,"invites"]}),n.invalidateQueries({queryKey:["workspace",s,"invites","requests"]})}})}function qe(s){const a=p(),t=D(),n=T();return w({mutationFn:({role:r,email:o})=>R.addWorkspaceUsers(s,[o],r,!0).then(({account_invites:l,errored_emails:d})=>{if(d.length>0)throw new Error(d[0].error);l.length>0&&t.success(a.formatMessage(q.resendInviteSuccess,{email:o}))}).catch(l=>{t.danger(a.formatMessage(q.resendInviteError,{email:o,error:l.message}))}),onSuccess:()=>{n.invalidateQueries({queryKey:["workspace",s,"invites"]}),n.invalidateQueries({queryKey:["workspace",s,"invites","requests"]})}})}const q=A({updateInviteError:{id:"WorkspaceInvites.updateInviteError",defaultMessage:"Unable to update invite from workspace: {error}"},deleteInviteError:{id:"WorkspaceInvites.deleteInviteError",defaultMessage:"Unable to remove user ({email}) from workspace: {error}"},resendInviteSuccess:{id:"WorkspaceInvites.resendInviteSuccess",defaultMessage:"Sent a new invite to {email}"},resendInviteError:{id:"WorkspaceInvites.resendInviteError",defaultMessage:"Unable to resend invite to ({email}) from workspace: {error}"}}),Ee=$(()=>K(()=>import("./dgssowwewuess09y.js"),__vite__mapDeps([0,1,2,3])).then(s=>s.DirectorySyncResourceManagedIndication)),S=de(()=>({confirmModalUserData:null})),E={openModalForUser:s=>{S.setState({confirmModalUserData:s})},closeModal:()=>{S.setState({confirmModalUserData:null})}};function Te({workspaceId:s,filterInputValue:a}){const[t,n]=v.useState(0),o=he()?.id,l=V(s),d=L(s),m=l||d,u=Oe(),f=He(s),{data:b}=pe(s,t*Y,a),B=v.useCallback(g=>{E.openModalForUser(g)},[]),_=v.useCallback(()=>{const g=S.getState().confirmModalUserData?.id;g!==void 0&&f.mutate({userId:g}),E.closeModal()},[f]),F=v.useCallback((g,H)=>{u.mutate({userId:g,value:H,workspaceId:s})},[u,s]);if(b===void 0)return e.jsx(J,{});const O=b.items,y=Math.ceil((b.total??0)/Y);return t>=y&&y!==0&&n(Math.max(y-1,0)),e.jsxs(e.Fragment,{children:[e.jsxs(i.Root,{fixed:!0,size:"normal",children:[e.jsxs(i.Header,{children:[e.jsx(i.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(c,{...M.name})}),e.jsx(i.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(c,{...M.email})}),e.jsx(i.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:e.jsx("span",{className:l?"pl-3":"",children:e.jsx(c,{...M.role})})}),m&&e.jsx(i.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),e.jsxs(i.Body,{children:[O.map(g=>e.jsx(Be,{isCurrentUser:o!==void 0&&g.id===o,user:g,currentUserHasAdminRights:m,isCurrentUserOwner:l,onRemoveUserClick:()=>B({id:g.id,name:g.name??"",email:g.email??"",created_time:g.created_time}),onUpdateUserRole:F},g.id)),O.length===0&&e.jsx(i.Row,{children:e.jsx(i.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(c,{...M.noResults})})})})]})]}),e.jsxs("div",{className:"relative mb-8 mt-4 min-h-[20px]",children:[l&&e.jsxs("button",{onClick:()=>Q.openModal(te.InviteUsersToWorkspace),className:"flex items-center gap-2 text-token-text-secondary hover:text-token-text-primary",children:[e.jsx(ne,{className:"icon-sm"}),e.jsx(c,{...M.inviteMemberButton})]}),y>1&&e.jsx("div",{className:"absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center",children:e.jsx(G,{currentPage:t,onChangeIndex:n,length:y})})]}),e.jsx(We,{onDeleteConfirm:_})]})}function We({onDeleteConfirm:s}){const a=p(),t=S(r=>r.confirmModalUserData!==null),n=S(r=>r.confirmModalUserData===null?{}:{userId:r.confirmModalUserData.id,email:r.confirmModalUserData.email,name:r.confirmModalUserData.name,dateAdded:be(r.confirmModalUserData.created_time)});return e.jsx(me,{isOpen:t,title:a.formatMessage(M.removeMemberModalTitle),onClose:()=>E.closeModal(),type:"success",primaryButton:e.jsx(Z.Button,{title:a.formatMessage(M.removeMemberModalConfirm),color:"danger",onClick:s}),secondaryButton:e.jsx(Z.Button,{title:a.formatMessage(M.removeMemberModalCancel),color:"secondary",onClick:()=>E.closeModal()}),children:e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[n.name??n.email,e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(c,{...M.dateJoined,values:{dateAdded:a.formatDate(n.dateAdded,{year:"numeric",month:"long",day:"numeric"})}})})]})})}function Be({user:s,currentUserHasAdminRights:a,isCurrentUserOwner:t,isCurrentUser:n,onRemoveUserClick:r,onUpdateUserRole:o}){const d=W()[s.role],m=s.name==null||s.name==="",{value:u}=ee("3999712942");return e.jsxs(i.Row,{children:[e.jsx(i.Cell,{children:e.jsxs("span",{className:se("flex flex-grow items-center justify-between gap-2",m&&"text-token-text-tertiary"),children:[e.jsx("span",{children:s.name??e.jsx(c,{...M.missingName})}),n&&e.jsx("span",{children:e.jsx(c,{...M.youSpecifier})}),u&&s.is_scim_managed&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex-grow"}),e.jsx(Ee,{})]})]})}),e.jsx(i.Cell,{children:s.email}),e.jsx(i.Cell,{children:t?e.jsx(z,{currentRole:s.role,onUpdateUserRole:f=>{o(s.id,f)},disabled:n}):d}),a&&e.jsx(i.Cell,{children:e.jsx(Fe,{userId:s.id,onRemoveUserClick:r,disabled:n,isScimManaged:s.is_scim_managed})})]})}function z({currentRole:s,onUpdateUserRole:a,disabled:t=!1}){const n=W();return e.jsx(we,{disabled:t,defaultValue:s,onValueChange:r=>{a(r)},options:[{label:n[C.STANDARD],value:C.STANDARD},{label:n[C.ADMIN],value:C.ADMIN},{label:n[C.OWNER],value:C.OWNER}]})}function Fe({disabled:s,onRemoveUserClick:a,userId:t,isScimManaged:n}){const r=p();return s?null:n?e.jsx(x.Root,{children:e.jsx(x.Trigger,{disabled:!0,children:e.jsx(ae,{sideOffset:0,label:r.formatMessage(re.managedViaSCIMTooltip),className:"flex",side:"right",children:e.jsx(P,{className:"icon-sm"})})})}):e.jsxs(x.Root,{children:[e.jsx(x.Trigger,{className:"-my-2",children:e.jsx(P,{className:"icon-sm"})}),e.jsx(x.Portal,{children:e.jsx(x.Content,{children:e.jsx(x.Item,{onClick:()=>{a(t)},children:e.jsx(c,{...M.removeMemberModalTitle})})})})]})}function Oe(){const s=D();return w({mutationFn:({userId:a,workspaceId:t,value:n})=>R.updateWorkspaceUserRole(t,a,n).catch(r=>{s.danger(`Unable to update user (${a}) role: ${r.message}`)})})}function He(s){const a=T(),t=D();return w({mutationFn:({userId:n})=>R.removeWorkspaceUser(s,n).catch(r=>{t.danger(`Unable to remove user (${n}) from workspace: ${r.message}`)}),onSuccess:()=>{a.invalidateQueries({queryKey:["workspace",s]})}})}function J(){return e.jsx("div",{className:"flex w-full items-center justify-center",children:e.jsx(ue,{})})}const M=A({name:{id:"UserManager.name",defaultMessage:"Name"},email:{id:"UserManager.email",defaultMessage:"Email"},role:{id:"UserManager.role",defaultMessage:"Role"},missingName:{id:"UserManager.missingName",defaultMessage:"No name provided"},youSpecifier:{id:"UserManager.youSpecifier",defaultMessage:"(You)"},removeUser:{id:"UserManager.removeUser",defaultMessage:"Remove user from workspace"},removeMemberModalTitle:{id:"UserManager.removeMemberModalTitle",defaultMessage:"Remove member"},removeMemberModalConfirm:{id:"UserManager.removeMemberModalConfirm",defaultMessage:"Delete"},removeMemberModalCancel:{id:"UserManager.removeMemberModalCancel",defaultMessage:"Cancel"},dateJoined:{id:"UserManager.dateJoined",defaultMessage:"Joined workspace on {dateAdded}"},inviteMemberButton:{id:"UserManager.inviteMemberButton",defaultMessage:"Invite member"},noResults:{id:"UserManager.noResults",defaultMessage:"No results"}}),Qe=$(()=>K(()=>import("./dgssowwewuess09y.js"),__vite__mapDeps([0,1,2,3])).then(s=>s.DirectorySyncResourceManagedIndication));function $e({workspaceId:s,filterInputValue:a}){const[t,n]=v.useState(0),r=V(s),o=L(s),l=r||o,{data:d}=Ae(s,t*k,a);if(d===void 0)return e.jsx(J,{});const m=d.items,u=Math.ceil((d.total??0)/k);return t>=u&&u!==0&&n(Math.max(u-1,0)),e.jsxs("div",{children:[e.jsxs(i.Root,{fixed:!0,size:"normal",children:[e.jsxs(i.Header,{children:[e.jsx(i.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(c,{...I.email})}),e.jsx(i.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:e.jsx("span",{className:l?"pl-3":"",children:e.jsx(c,{...I.role})})}),l&&e.jsx(i.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),e.jsxs(i.Body,{children:[m.map(f=>e.jsx(Ke,{workspaceId:s,invite:f,isCurrentUserOwner:r,currentUserHasAdminRights:l},f.id)),m.length===0&&e.jsx(i.Row,{children:e.jsx(i.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(c,{...I.noResults})})})})]})]}),u>1&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx(G,{currentPage:t,onChangeIndex:n,length:u})})]})}function Ke({workspaceId:s,invite:a,isCurrentUserOwner:t,currentUserHasAdminRights:n}){const r=W(),o=ie(s),l=oe(s),d=qe(s),{value:m}=ee("3999712942");return e.jsxs(i.Row,{disabled:o.isPending||l.isPending||l.isSuccess||d.isPending,children:[e.jsx(i.Cell,{children:e.jsxs("span",{className:"flex flex-grow justify-between",children:[e.jsx("span",{children:a.email_address}),m&&a.is_scim_managed&&e.jsx(Qe,{})]})}),e.jsx(i.Cell,{children:t?e.jsx(z,{currentRole:a.role,onUpdateUserRole:u=>{o.mutate({inviteId:a.id,role:u})}}):r[a.role]}),n&&e.jsx(e.Fragment,{children:e.jsx(i.Cell,{children:e.jsx(Ve,{onDeleteUser:()=>{l.mutate({email:a.email_address??""})},onResendInvite:()=>{d.mutate({email:a.email_address??"",role:a.role??""})},disabled:a.is_scim_managed})})})]})}function Ve({onDeleteUser:s,onResendInvite:a,disabled:t}){const n=p();return e.jsx(e.Fragment,{children:t?e.jsx(x.Root,{children:e.jsx(x.Trigger,{disabled:!0,children:e.jsx(ae,{sideOffset:0,label:n.formatMessage(re.managedViaSCIMTooltip),className:"flex",side:"right",children:e.jsx(P,{className:"icon-sm"})})})}):e.jsxs(x.Root,{children:[e.jsx(x.Trigger,{children:e.jsx(P,{className:"icon-sm"})}),e.jsx(x.Portal,{children:e.jsxs(x.Content,{children:[e.jsx(x.Item,{onClick:a,children:e.jsx(c,{...I.resendInvite})}),e.jsx(x.Item,{onClick:s,children:e.jsx(c,{...I.revokeInvite})})]})})]})})}const I=A({email:{id:"InviteManager.email",defaultMessage:"Email"},role:{id:"InviteManager.role",defaultMessage:"Role"},resendInvite:{id:"InviteManager.resendInvite",defaultMessage:"Resend invite"},revokeInvite:{id:"InviteManager.revokeInvite",defaultMessage:"Revoke invite"},noResults:{id:"InviteManager.noResults",defaultMessage:"No results"}});function Le({workspaceId:s,filterInputValue:a}){const[t,n]=v.useState(0),{data:r}=_e(s,t*k,a),o=V(s),l=L(s),d=p(),m=o||l;if(r===void 0)return e.jsx(J,{});const u=r.items,f=Math.ceil(r.total/k);return t>=f&&f!==0&&n(Math.max(f-1,0)),e.jsxs("div",{children:[e.jsxs(i.Root,{fixed:!0,size:"normal",children:[e.jsxs(i.Header,{children:[e.jsx(i.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(c,{...U.email})}),e.jsx(i.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:e.jsx("span",{className:m?"pl-3":"",children:e.jsx(c,{...U.role})})}),m&&e.jsx(i.HeaderCell,{className:"w-40 bg-token-main-surface-primary",children:d.formatMessage(U.actions)})]}),e.jsxs(i.Body,{children:[u.map(b=>e.jsx(Ge,{workspaceId:s,invite:b,isCurrentUserOwner:o,currentUserHasAdminRights:m},b.id)),u.length===0&&e.jsx(i.Row,{children:e.jsx(i.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(c,{...U.noResults})})})})]})]}),f>1&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx(G,{currentPage:t,onChangeIndex:n,length:f})})]})}function Ge({workspaceId:s,invite:a,isCurrentUserOwner:t,currentUserHasAdminRights:n}){const r=W(),o=ie(s),l=oe(s),d=p();return e.jsxs(i.Row,{disabled:o.isPending||l.isPending||l.isPending,children:[e.jsx(i.Cell,{children:a.email_address}),e.jsx(i.Cell,{children:t?e.jsx(z,{currentRole:a.role,onUpdateUserRole:m=>{o.mutate({inviteId:a.id,role:m})}}):r[a.role]}),n&&e.jsx(e.Fragment,{children:e.jsx(i.Cell,{children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(N,{onClick:()=>o.mutate({inviteId:a.id,acceptRequest:!0}),children:d.formatMessage(U.accept)}),e.jsx(N,{color:"secondary",onClick:()=>l.mutate({email:a.email_address}),children:d.formatMessage(U.reject)})]})})})]})}const U=A({email:{id:"RequestInviteManager.email",defaultMessage:"Email"},role:{id:"RequestInviteManager.role",defaultMessage:"Role"},actions:{id:"RequestInviteManager.actions",defaultMessage:"Actions"},accept:{id:"RequestInviteManager.accept",defaultMessage:"Accept"},reject:{id:"RequestInviteManager.reject",defaultMessage:"Reject"},noResults:{id:"RequestInviteManager.noResults",defaultMessage:"No results"}}),ze=$(()=>K(()=>import("./oht5o2h8sqx3xv4x.js"),__vite__mapDeps([4,1,2,3,5,6,7,8,9,10,11,12,13])));var le=(s=>(s.Members="members",s.Invites="invites",s.Requests="requests",s))(le||{});function Je({tab:s}){switch(s){case"members":return e.jsx(c,{...h.allMembers});case"invites":return e.jsx(c,{...h.pendingInvites});case"requests":return e.jsx(c,{...h.pendingRequests})}}function Ze({tab:s,filterInputValue:a,workspaceId:t}){switch(s){case"members":return e.jsx(Te,{workspaceId:t,filterInputValue:a});case"invites":return e.jsx($e,{workspaceId:t,filterInputValue:a});case"requests":return e.jsx(Le,{workspaceId:t,filterInputValue:a})}}const Ye=Ie(le);function Xe({currentWorkspaceId:s}){const a=p(),t=xe(),n=ye(s)??"?",r=Re(t),o=t?.isTeam(),l=fe(),[d]=Me(),m=d.get("tab"),u=m&&Ye(m)?m:"members",[f,b]=v.useState(""),[B,_]=v.useState("");v.useEffect(()=>{_("")},[u]);const F=v.useCallback(Ce(j=>{_(j)},250),[]),y=!!Ue()?.length;if(!t)return null;const g=t.isAdminOfAccount(),H=t.isOwnerOfAccount(),ce=o||!y?["members","invites"]:["members","invites","requests"];return e.jsxs(e.Fragment,{children:[e.jsx(ke,{children:e.jsx("title",{children:a.formatMessage(h.adminBrowserPageTitle)})}),e.jsx(Pe,{title:a.formatMessage(h.adminPageTitle),subtitle:e.jsx(c,{values:{totalMembers:n,planName:r},...h.totalMembers})}),e.jsxs(Se,{children:[e.jsxs(ss,{children:[e.jsx("div",{className:"mb-6 flex gap-2",children:ce.map(j=>e.jsx(es,{onClick:()=>{l(j!=null?`/admin?tab=${j}`:"/admin")},isSelected:u===j,children:e.jsx(Je,{tab:j})},j))}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("div",{className:"relative",children:[e.jsx(Ne,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),e.jsx("input",{type:"text",value:f,onChange:j=>{b(j.target.value),F(j.target.value)},placeholder:a.formatMessage(h.search),className:"w-48 rounded-lg border border-token-border-light bg-token-main-surface-primary pl-8 placeholder:text-token-text-tertiary"})]}),(g||H||o)&&e.jsx(N,{onClick:()=>{Q.openModal(te.InviteUsersToWorkspace),je.logEvent("chatgpt_invite_users_to_workspace",0,{action:"OpenAdminInviteModal",location:"workspace-admin-click",text:"InviteMember",step:"OpenModal"})},icon:ne,children:e.jsx(c,{...h.inviteMemberButton})}),o?e.jsx(ve,{triggerButton:e.jsx(N,{color:"secondary",icon:P}),children:e.jsx(x.Item,{onClick:()=>{t&&Q.setLeaveWorkspaceData(t)},children:e.jsx(c,{...h.leaveWorkspace})})}):null]})]}),e.jsx(Ze,{workspaceId:s,tab:u,filterInputValue:B})]}),t!=null?e.jsx(ze,{workspace:t}):null]})}function es({children:s,isSelected:a,onClick:t}){return e.jsx(N,{color:"ghost",className:se(a?"bg-token-main-surface-tertiary":"hover:bg-token-main-surface-tertiary"),onClick:t,children:s})}const ss=ge.div`mb-4 py-6 flex flex-col gap-4 lg:flex-row md:items-start lg:justify-between`,h=A({adminBrowserPageTitle:{id:"adminPage.adminBrowserPageTitle",defaultMessage:"ChatGPT - Member admin"},adminPageTitle:{id:"adminPage.adminPageTitle.0",defaultMessage:"Members"},workspaceNotFound:{id:"adminPage.workspaceNotFound",defaultMessage:"Workspace not found"},totalMembers:{id:"adminPage.totalMembers",defaultMessage:"{planName} · {totalMembers} {totalMembers, plural, one {member} other {members}}"},backToChat:{id:"adminPage.backToChat",defaultMessage:"Back to chat"},allMembers:{id:"adminPage.allMembers",defaultMessage:"All members"},pendingInvites:{id:"adminPage.pendingInvites",defaultMessage:"Pending invites"},pendingRequests:{id:"adminPage.pendingRequests",defaultMessage:"Pending requests"},analytics:{id:"adminPage.analytics",defaultMessage:"Analytics"},inviteMemberButton:{id:"adminPage.inviteMemberButton",defaultMessage:"Invite member"},leaveWorkspace:{id:"adminPage.leaveWorkspace",defaultMessage:"Leave workspace"},search:{id:"adminPage.search",defaultMessage:"Search"}});function js(){const s=De();return e.jsx(Xe,{...s})}export{js as default};
//# sourceMappingURL=g39urbtozatsk3m6.js.map