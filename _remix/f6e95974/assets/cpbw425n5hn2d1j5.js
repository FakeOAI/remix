const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/g65ereef85y163qk.js","assets/csnclwvitc93pb4o.js","assets/iqrmcf3yr8rsq080.js","assets/root-bb3bptah.css"])))=>i.map(i=>d[i]);
import{u as E,R,H as f,b4 as N,E as w,F as S,N as P,cl as G,c2 as z,r as j,j as e,K as d,aO as X,bt as I,O as Z,aq as J,X as Y,en as ee,c as se}from"./csnclwvitc93pb4o.js";import{D as p,B as te}from"./n3zdlbuc71osh7uw.js";import{b6 as U,b7 as W,ax as r,b9 as T,bb as D,l as ae,bc as ne,es as re,D as ie,bB as oe,aa as A,b0 as le}from"./h60ucn2y7ct2d4ke.js";import{c as ce}from"./iej0cupg2dqkmejt.js";import{ag as q,g as de,W as ue}from"./iqrmcf3yr8rsq080.js";import me from"./cvjo2nv6p503kstw.js";import{a as ge,b as xe}from"./gafi0rza4fis8c3x.js";import{A as _,W as F,u as pe,U as ve}from"./nap4cbz6pie35nb2.js";import{u as fe}from"./nkzt55m4oi8t0xdg.js";import"./eh6nvb5hj9gmz3hg.js";import"./d3y72ugnrmac5z1v.js";import"./o5qe8ihxifpld5fe.js";import"./e9lafxuzyeh4418f.js";import"./lwq1s6v2l35z08zw.js";import"./jmutnjyuz0rby5b2.js";import"./ft4fw7ri1hjvqtvf.js";import"./l6ohxg88qt5e7h6r.js";import"./p43u8b58bbt12lig.js";import"./vvn0bm7an5iwjzxy.js";import"./bttpfgsfg4ef0gbl.js";import"./n4qj6ulh3s8xnvd9.js";import"./rda984i6rgyzirgj.js";import"./km9s5iryouklsfgz.js";import"./lgr0r7bzqvy8fmdk.js";import"./e58nm5wssonic2eo.js";import"./fqo53v4s3w183q3i.js";import"./csnq7rz0042rw9gr.js";import"./gvwuqkbj85o7i1jp.js";import"./o9l9g0ynobz412xd.js";const M=25;function je(s,t,a){return E({queryKey:["workspace",s,"invites",t,a],queryFn:async()=>await R.getWorkspaceInvites(s,t,M,a)})}function he(s,t,a){return E({queryKey:["workspace",s,"invites","requests",t,a],queryFn:async()=>await R.getWorkspaceInviteRequests(s,t,M,a)})}function H(s){const t=f(),a=N(),i=w();return S({mutationFn:({inviteId:c,role:o,acceptRequest:n})=>R.patchWorkspaceInvite(s,c,{role:o,acceptRequest:n}).catch(l=>{a.danger(t.formatMessage(k.updateInviteError,{error:l.message}))}),onSuccess:()=>{i.invalidateQueries({queryKey:["workspace",s,"invites"]}),i.invalidateQueries({queryKey:["workspace",s,"invites","requests"]}),i.invalidateQueries({queryKey:["workspace",s]})}})}function B(s){const t=f(),a=N(),i=w();return S({mutationFn:({email:c})=>R.deleteWorkspaceInvite(s,c).catch(o=>{a.danger(t.formatMessage(k.deleteInviteError,{email:c,error:o.message}))}),onSuccess:()=>{i.invalidateQueries({queryKey:["workspace",s,"invites"]}),i.invalidateQueries({queryKey:["workspace",s,"invites","requests"]})}})}function Me(s){const t=f(),a=N(),i=w();return S({mutationFn:({role:c,email:o})=>R.addWorkspaceUsers(s,[o],c,!0).then(({account_invites:n,errored_emails:l})=>{if(l.length>0)throw new Error(l[0].error);n.length>0&&a.success(t.formatMessage(k.resendInviteSuccess,{email:o}))}).catch(n=>{a.danger(t.formatMessage(k.resendInviteError,{email:o,error:n.message}))}),onSuccess:()=>{i.invalidateQueries({queryKey:["workspace",s,"invites"]}),i.invalidateQueries({queryKey:["workspace",s,"invites","requests"]})}})}const k=P({updateInviteError:{id:"WorkspaceInvites.updateInviteError",defaultMessage:"Unable to update invite from workspace: {error}"},deleteInviteError:{id:"WorkspaceInvites.deleteInviteError",defaultMessage:"Unable to remove user ({email}) from workspace: {error}"},resendInviteSuccess:{id:"WorkspaceInvites.resendInviteSuccess",defaultMessage:"Sent a new invite to {email}"},resendInviteError:{id:"WorkspaceInvites.resendInviteError",defaultMessage:"Unable to resend invite to ({email}) from workspace: {error}"}}),be=G(()=>z(()=>import("./g65ereef85y163qk.js"),__vite__mapDeps([0,1,2,3])).then(s=>s.DirectorySyncResourceManagedIndication));function ye({workspaceId:s,filterInputValue:t}){const[a,i]=j.useState(0),c=U(s),o=W(s),n=c||o,{data:l}=je(s,a*M,t);if(l===void 0)return e.jsx(_,{});const u=l.items,m=Math.ceil((l.total??0)/M);return a>=m&&m!==0&&i(Math.max(m-1,0)),e.jsxs("div",{children:[e.jsxs(r.Root,{fixed:!0,size:"normal",children:[e.jsxs(r.Header,{children:[e.jsx(r.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(d,{...y.email})}),e.jsx(r.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:e.jsx("span",{className:n?"pl-3":"",children:e.jsx(d,{...y.role})})}),n&&e.jsx(r.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),e.jsxs(r.Body,{children:[u.map(g=>e.jsx(Ie,{workspaceId:s,invite:g,isCurrentUserOwner:c,currentUserHasAdminRights:n},g.id)),u.length===0&&e.jsx(r.Row,{children:e.jsx(r.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(d,{...y.noResults})})})})]})]}),m>1&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx(T,{currentPage:a,onChangeIndex:i,length:m})})]})}function Ie({workspaceId:s,invite:t,isCurrentUserOwner:a,currentUserHasAdminRights:i}){const c=D(),o=H(s),n=B(s),l=Me(s),{value:u}=X("3999712942");return e.jsxs(r.Row,{disabled:o.isPending||n.isPending||n.isSuccess||l.isPending,children:[e.jsx(r.Cell,{children:e.jsxs("span",{className:"flex flex-grow justify-between",children:[e.jsx("span",{children:t.email_address}),u&&t.is_scim_managed&&e.jsx(be,{})]})}),e.jsx(r.Cell,{children:a?e.jsx(F,{currentRole:t.role,onUpdateUserRole:m=>{o.mutate({inviteId:t.id,role:m})}}):c[t.role]}),i&&e.jsx(e.Fragment,{children:e.jsx(r.Cell,{children:e.jsx(Re,{onDeleteUser:()=>{n.mutate({email:t.email_address??""})},onResendInvite:()=>{l.mutate({email:t.email_address??"",role:t.role??""})},disabled:t.is_scim_managed})})})]})}function Re({onDeleteUser:s,onResendInvite:t,disabled:a}){const i=f();return e.jsx(e.Fragment,{children:a?e.jsx(p.Root,{children:e.jsx(p.Trigger,{disabled:!0,children:e.jsx(ae,{sideOffset:0,label:i.formatMessage(ne.managedViaSCIMTooltip),className:"flex",side:"right",children:e.jsx(q,{className:"icon-sm"})})})}):e.jsxs(p.Root,{children:[e.jsx(p.Trigger,{children:e.jsx(q,{className:"icon-sm"})}),e.jsx(p.Portal,{children:e.jsxs(p.Content,{children:[e.jsx(p.Item,{onClick:t,children:e.jsx(d,{...y.resendInvite})}),e.jsx(p.Item,{onClick:s,children:e.jsx(d,{...y.revokeInvite})})]})})]})})}const y=P({email:{id:"InviteManager.email",defaultMessage:"Email"},role:{id:"InviteManager.role",defaultMessage:"Role"},resendInvite:{id:"InviteManager.resendInvite",defaultMessage:"Resend invite"},revokeInvite:{id:"InviteManager.revokeInvite",defaultMessage:"Revoke invite"},noResults:{id:"InviteManager.noResults",defaultMessage:"No results"}});function ke({workspaceId:s,filterInputValue:t}){const[a,i]=j.useState(0),{data:c}=he(s,a*M,t),o=U(s),n=W(s),l=f(),u=o||n;if(c===void 0)return e.jsx(_,{});const m=c.items,g=Math.ceil(c.total/M);return a>=g&&g!==0&&i(Math.max(g-1,0)),e.jsxs("div",{children:[e.jsxs(r.Root,{fixed:!0,size:"normal",children:[e.jsxs(r.Header,{children:[e.jsx(r.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(d,{...h.email})}),e.jsx(r.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:e.jsx("span",{className:u?"pl-3":"",children:e.jsx(d,{...h.role})})}),u&&e.jsx(r.HeaderCell,{className:"w-40 bg-token-main-surface-primary",children:l.formatMessage(h.actions)})]}),e.jsxs(r.Body,{children:[m.map(b=>e.jsx(Pe,{workspaceId:s,invite:b,isCurrentUserOwner:o,currentUserHasAdminRights:u},b.id)),m.length===0&&e.jsx(r.Row,{children:e.jsx(r.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(d,{...h.noResults})})})})]})]}),g>1&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx(T,{currentPage:a,onChangeIndex:i,length:g})})]})}function Pe({workspaceId:s,invite:t,isCurrentUserOwner:a,currentUserHasAdminRights:i}){const c=D(),o=H(s),n=B(s),l=f();return e.jsxs(r.Row,{disabled:o.isPending||n.isPending||n.isPending,children:[e.jsx(r.Cell,{children:t.email_address}),e.jsx(r.Cell,{children:a?e.jsx(F,{currentRole:t.role,onUpdateUserRole:u=>{o.mutate({inviteId:t.id,role:u})}}):c[t.role]}),i&&e.jsx(e.Fragment,{children:e.jsx(r.Cell,{children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(I,{onClick:()=>o.mutate({inviteId:t.id,acceptRequest:!0}),children:l.formatMessage(h.accept)}),e.jsx(I,{color:"secondary",onClick:()=>n.mutate({email:t.email_address}),children:l.formatMessage(h.reject)})]})})})]})}const h=P({email:{id:"RequestInviteManager.email",defaultMessage:"Email"},role:{id:"RequestInviteManager.role",defaultMessage:"Role"},actions:{id:"RequestInviteManager.actions",defaultMessage:"Actions"},accept:{id:"RequestInviteManager.accept",defaultMessage:"Accept"},reject:{id:"RequestInviteManager.reject",defaultMessage:"Reject"},noResults:{id:"RequestInviteManager.noResults",defaultMessage:"No results"}});var O=(s=>(s.Members="members",s.Invites="invites",s.Requests="requests",s))(O||{});function Ce({tab:s}){switch(s){case"members":return e.jsx(d,{...v.allMembers});case"invites":return e.jsx(d,{...v.pendingInvites});case"requests":return e.jsx(d,{...v.pendingRequests})}}function qe({tab:s,filterInputValue:t,workspaceId:a}){switch(s){case"members":return e.jsx(ve,{workspaceId:a,filterInputValue:t});case"invites":return e.jsx(ye,{workspaceId:a,filterInputValue:t});case"requests":return e.jsx(ke,{workspaceId:a,filterInputValue:t})}}const Ne=ce(O);function we({currentWorkspaceId:s}){const t=f(),a=J(),i=pe(s)??"?",c=re(a),o=a==null?void 0:a.isTeam(),n=Y(),l=typeof n.query.tab=="string"&&Ne(n.query.tab)?n.query.tab:"members",[u,m]=j.useState(""),[g,b]=j.useState("");j.useEffect(()=>{b("")},[l]);const Q=j.useCallback(ie(x=>{b(x)},250),[]),C=oe(),K=!!(C!=null&&C.length);if(!a)return null;const L=a.isAdminOfAccount(),V=a.isOwnerOfAccount(),$=o||!K?["members","invites"]:["members","invites","requests"];return e.jsxs(e.Fragment,{children:[e.jsx(ee,{children:e.jsx("title",{children:t.formatMessage(v.adminBrowserPageTitle)})}),e.jsx(ge,{title:t.formatMessage(v.adminPageTitle),subtitle:e.jsx(d,{values:{totalMembers:i,planName:c},...v.totalMembers})}),e.jsxs(xe,{children:[e.jsxs(Ae,{children:[e.jsx("div",{className:"mb-6 flex gap-2",children:$.map(x=>e.jsx(Se,{onClick:()=>{n.push(x!=null?`/admin?tab=${x}`:"/admin")},isSelected:l===x,children:e.jsx(Ce,{tab:x})},x))}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("div",{className:"relative",children:[e.jsx(de,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),e.jsx("input",{type:"text",value:u,onChange:x=>{m(x.target.value),Q(x.target.value)},placeholder:t.formatMessage(v.search),className:"w-48 rounded-lg border border-token-border-light bg-token-main-surface-primary pl-8 placeholder:text-token-text-tertiary"})]}),(L||V||o)&&e.jsx(I,{onClick:()=>{A.openModal(le.InviteUsersToWorkspace)},icon:ue,children:e.jsx(d,{...v.inviteMemberButton})}),o?e.jsx(te,{triggerButton:e.jsx(I,{color:"secondary",icon:q}),children:e.jsx(p.Item,{onClick:()=>{a&&A.setLeaveWorkspaceData(a)},children:e.jsx(d,{...v.leaveWorkspace})})}):null]})]}),e.jsx(qe,{workspaceId:s,tab:l,filterInputValue:g})]}),a!=null?e.jsx(me,{workspace:a}):null]})}function Se({children:s,isSelected:t,onClick:a}){return e.jsx(I,{color:"ghost",className:se(t?"bg-token-main-surface-tertiary":"hover:bg-token-main-surface-tertiary"),onClick:a,children:s})}const Ae=Z.div`mb-4 py-6 flex flex-col gap-4 lg:flex-row md:items-start lg:justify-between`,v=P({adminBrowserPageTitle:{id:"adminPage.adminBrowserPageTitle",defaultMessage:"ChatGPT - Member admin"},adminPageTitle:{id:"adminPage.adminPageTitle.0",defaultMessage:"Members"},workspaceNotFound:{id:"adminPage.workspaceNotFound",defaultMessage:"Workspace not found"},totalMembers:{id:"adminPage.totalMembers",defaultMessage:"{planName} · {totalMembers} {totalMembers, plural, one {member} other {members}}"},backToChat:{id:"adminPage.backToChat",defaultMessage:"Back to chat"},allMembers:{id:"adminPage.allMembers",defaultMessage:"All members"},pendingInvites:{id:"adminPage.pendingInvites",defaultMessage:"Pending invites"},pendingRequests:{id:"adminPage.pendingRequests",defaultMessage:"Pending requests"},analytics:{id:"adminPage.analytics",defaultMessage:"Analytics"},inviteMemberButton:{id:"adminPage.inviteMemberButton",defaultMessage:"Invite member"},leaveWorkspace:{id:"adminPage.leaveWorkspace",defaultMessage:"Leave workspace"},search:{id:"adminPage.search",defaultMessage:"Search"}});function ls(){const s=fe();return e.jsx(we,{...s})}export{ls as default};
//# sourceMappingURL=cpbw425n5hn2d1j5.js.map