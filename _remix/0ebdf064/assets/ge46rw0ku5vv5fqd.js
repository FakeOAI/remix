const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ojajn39trb1nuiyd.js","assets/bx2z9ivcrsrexei9.js","assets/kdf6ofrec7z23k2d.js","assets/root-c7p9nir8.css","assets/lfr59nmx2d0ea1em.js","assets/hfnzsjsy2v8td6lt.js","assets/conversation-small-kig9eefw.css","assets/ieli56gcvxx4ptw4.js","assets/dunhbzxyeq2iaj0t.js","assets/ff1locaonhpi5m3y.js","assets/i5qnifwt29u1ntiz.js","assets/otb1kwtamb5qovry.js","assets/cl4pe3mdfiybgkke.js","assets/n6yoqi4rb6b4hqdr.js","assets/k6z5o3o7hknz4a9g.js","assets/dcvgvpmhthpprpks.js","assets/lejurgig1py1s6jm.js"])))=>i.map(i=>d[i]);
import{u as S,j as I,W as f,aL as q,a as N,h as w,a1 as P,aE as W,aF as _,r as h,l as e,a0 as m,bY as Y,be as y,a2 as Z,aO as X,bH as ee,bj as se,ac as te,m as ae}from"./bx2z9ivcrsrexei9.js";import{D as v,B as ne}from"./i5qnifwt29u1ntiz.js";import{ax as U,ay as T,a0 as n,aB as D,aD as F,c as re,aE as ie,fz as oe,e as le,cW as ce,d1 as de,V as E,aA as ue}from"./hfnzsjsy2v8td6lt.js";import{c as me}from"./iej0cupg2dqkmejt.js";import{aa as C,u as ge,J as xe}from"./kdf6ofrec7z23k2d.js";import{a as ve,b as pe}from"./evr3kg6a81cv7076.js";import{A as H,W as O,u as fe,U as he}from"./n6yoqi4rb6b4hqdr.js";import{u as je}from"./naw04ys2xhors32l.js";import"./cdm9e2p6cp5sl6it.js";import"./lfr59nmx2d0ea1em.js";import"./ieli56gcvxx4ptw4.js";import"./dunhbzxyeq2iaj0t.js";import"./ff1locaonhpi5m3y.js";import"./otb1kwtamb5qovry.js";import"./cl4pe3mdfiybgkke.js";import"./dcvgvpmhthpprpks.js";import"./lejurgig1py1s6jm.js";import"./k6z5o3o7hknz4a9g.js";import"./dqszgflqws1mt1ml.js";import"./e6ei9h9aga69wv4i.js";import"./cmhm4o9093xqyv1m.js";const M=25;function Me(s,t,a){return S({queryKey:["workspace",s,"invites",t,a],queryFn:async()=>await I.getWorkspaceInvites(s,t,M,a)})}function be(s,t,a){return S({queryKey:["workspace",s,"invites","requests",t,a],queryFn:async()=>await I.getWorkspaceInviteRequests(s,t,M,a)})}function B(s){const t=f(),a=q(),r=N();return w({mutationFn:({inviteId:l,role:i,acceptRequest:o})=>I.patchWorkspaceInvite(s,l,{role:i,acceptRequest:o}).catch(c=>{a.danger(t.formatMessage(k.updateInviteError,{error:c.message}))}),onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",s,"invites"]}),r.invalidateQueries({queryKey:["workspace",s,"invites","requests"]}),r.invalidateQueries({queryKey:["workspace",s]})}})}function Q(s){const t=f(),a=q(),r=N();return w({mutationFn:({email:l})=>I.deleteWorkspaceInvite(s,l).catch(i=>{a.danger(t.formatMessage(k.deleteInviteError,{email:l,error:i.message}))}),onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",s,"invites"]}),r.invalidateQueries({queryKey:["workspace",s,"invites","requests"]})}})}function ye(s){const t=f(),a=q(),r=N();return w({mutationFn:({role:l,email:i})=>I.addWorkspaceUsers(s,[i],l,!0).then(({account_invites:o,errored_emails:c})=>{if(c.length>0)throw new Error(c[0].error);o.length>0&&a.success(t.formatMessage(k.resendInviteSuccess,{email:i}))}).catch(o=>{a.danger(t.formatMessage(k.resendInviteError,{email:i,error:o.message}))}),onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",s,"invites"]}),r.invalidateQueries({queryKey:["workspace",s,"invites","requests"]})}})}const k=P({updateInviteError:{id:"WorkspaceInvites.updateInviteError",defaultMessage:"Unable to update invite from workspace: {error}"},deleteInviteError:{id:"WorkspaceInvites.deleteInviteError",defaultMessage:"Unable to remove user ({email}) from workspace: {error}"},resendInviteSuccess:{id:"WorkspaceInvites.resendInviteSuccess",defaultMessage:"Sent a new invite to {email}"},resendInviteError:{id:"WorkspaceInvites.resendInviteError",defaultMessage:"Unable to resend invite to ({email}) from workspace: {error}"}}),Ie=W(()=>_(()=>import("./ojajn39trb1nuiyd.js"),__vite__mapDeps([0,1,2,3])).then(s=>s.DirectorySyncResourceManagedIndication));function Re({workspaceId:s,filterInputValue:t}){const[a,r]=h.useState(0),l=U(s),i=T(s),o=l||i,{data:c}=Me(s,a*M,t);if(c===void 0)return e.jsx(H,{});const d=c.items,u=Math.ceil((c.total??0)/M);return a>=u&&u!==0&&r(Math.max(u-1,0)),e.jsxs("div",{children:[e.jsxs(n.Root,{fixed:!0,size:"normal",children:[e.jsxs(n.Header,{children:[e.jsx(n.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(m,{...b.email})}),e.jsx(n.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:e.jsx("span",{className:o?"pl-3":"",children:e.jsx(m,{...b.role})})}),o&&e.jsx(n.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),e.jsxs(n.Body,{children:[d.map(g=>e.jsx(ke,{workspaceId:s,invite:g,isCurrentUserOwner:l,currentUserHasAdminRights:o},g.id)),d.length===0&&e.jsx(n.Row,{children:e.jsx(n.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(m,{...b.noResults})})})})]})]}),u>1&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx(D,{currentPage:a,onChangeIndex:r,length:u})})]})}function ke({workspaceId:s,invite:t,isCurrentUserOwner:a,currentUserHasAdminRights:r}){const l=F(),i=B(s),o=Q(s),c=ye(s),{value:d}=Y("3999712942");return e.jsxs(n.Row,{disabled:i.isPending||o.isPending||o.isSuccess||c.isPending,children:[e.jsx(n.Cell,{children:e.jsxs("span",{className:"flex flex-grow justify-between",children:[e.jsx("span",{children:t.email_address}),d&&t.is_scim_managed&&e.jsx(Ie,{})]})}),e.jsx(n.Cell,{children:a?e.jsx(O,{currentRole:t.role,onUpdateUserRole:u=>{i.mutate({inviteId:t.id,role:u})}}):l[t.role]}),r&&e.jsx(e.Fragment,{children:e.jsx(n.Cell,{children:e.jsx(Pe,{onDeleteUser:()=>{o.mutate({email:t.email_address??""})},onResendInvite:()=>{c.mutate({email:t.email_address??"",role:t.role??""})},disabled:t.is_scim_managed})})})]})}function Pe({onDeleteUser:s,onResendInvite:t,disabled:a}){const r=f();return e.jsx(e.Fragment,{children:a?e.jsx(v.Root,{children:e.jsx(v.Trigger,{disabled:!0,children:e.jsx(re,{sideOffset:0,label:r.formatMessage(ie.managedViaSCIMTooltip),className:"flex",side:"right",children:e.jsx(C,{className:"icon-sm"})})})}):e.jsxs(v.Root,{children:[e.jsx(v.Trigger,{children:e.jsx(C,{className:"icon-sm"})}),e.jsx(v.Portal,{children:e.jsxs(v.Content,{children:[e.jsx(v.Item,{onClick:t,children:e.jsx(m,{...b.resendInvite})}),e.jsx(v.Item,{onClick:s,children:e.jsx(m,{...b.revokeInvite})})]})})]})})}const b=P({email:{id:"InviteManager.email",defaultMessage:"Email"},role:{id:"InviteManager.role",defaultMessage:"Role"},resendInvite:{id:"InviteManager.resendInvite",defaultMessage:"Resend invite"},revokeInvite:{id:"InviteManager.revokeInvite",defaultMessage:"Revoke invite"},noResults:{id:"InviteManager.noResults",defaultMessage:"No results"}});function Ce({workspaceId:s,filterInputValue:t}){const[a,r]=h.useState(0),{data:l}=be(s,a*M,t),i=U(s),o=T(s),c=f(),d=i||o;if(l===void 0)return e.jsx(H,{});const u=l.items,g=Math.ceil(l.total/M);return a>=g&&g!==0&&r(Math.max(g-1,0)),e.jsxs("div",{children:[e.jsxs(n.Root,{fixed:!0,size:"normal",children:[e.jsxs(n.Header,{children:[e.jsx(n.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(m,{...j.email})}),e.jsx(n.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:e.jsx("span",{className:d?"pl-3":"",children:e.jsx(m,{...j.role})})}),d&&e.jsx(n.HeaderCell,{className:"w-40 bg-token-main-surface-primary",children:c.formatMessage(j.actions)})]}),e.jsxs(n.Body,{children:[u.map(R=>e.jsx(qe,{workspaceId:s,invite:R,isCurrentUserOwner:i,currentUserHasAdminRights:d},R.id)),u.length===0&&e.jsx(n.Row,{children:e.jsx(n.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(m,{...j.noResults})})})})]})]}),g>1&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx(D,{currentPage:a,onChangeIndex:r,length:g})})]})}function qe({workspaceId:s,invite:t,isCurrentUserOwner:a,currentUserHasAdminRights:r}){const l=F(),i=B(s),o=Q(s),c=f();return e.jsxs(n.Row,{disabled:i.isPending||o.isPending||o.isPending,children:[e.jsx(n.Cell,{children:t.email_address}),e.jsx(n.Cell,{children:a?e.jsx(O,{currentRole:t.role,onUpdateUserRole:d=>{i.mutate({inviteId:t.id,role:d})}}):l[t.role]}),r&&e.jsx(e.Fragment,{children:e.jsx(n.Cell,{children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(y,{onClick:()=>i.mutate({inviteId:t.id,acceptRequest:!0}),children:c.formatMessage(j.accept)}),e.jsx(y,{color:"secondary",onClick:()=>o.mutate({email:t.email_address}),children:c.formatMessage(j.reject)})]})})})]})}const j=P({email:{id:"RequestInviteManager.email",defaultMessage:"Email"},role:{id:"RequestInviteManager.role",defaultMessage:"Role"},actions:{id:"RequestInviteManager.actions",defaultMessage:"Actions"},accept:{id:"RequestInviteManager.accept",defaultMessage:"Accept"},reject:{id:"RequestInviteManager.reject",defaultMessage:"Reject"},noResults:{id:"RequestInviteManager.noResults",defaultMessage:"No results"}}),Ne=W(()=>_(()=>import("./lfr59nmx2d0ea1em.js").then(s=>s.A),__vite__mapDeps([4,1,2,3,5,6,7,8,9,10,11,12,13,14,15,16])));var L=(s=>(s.Members="members",s.Invites="invites",s.Requests="requests",s))(L||{});function we({tab:s}){switch(s){case"members":return e.jsx(m,{...p.allMembers});case"invites":return e.jsx(m,{...p.pendingInvites});case"requests":return e.jsx(m,{...p.pendingRequests})}}function Ae({tab:s,filterInputValue:t,workspaceId:a}){switch(s){case"members":return e.jsx(he,{workspaceId:a,filterInputValue:t});case"invites":return e.jsx(Re,{workspaceId:a,filterInputValue:t});case"requests":return e.jsx(Ce,{workspaceId:a,filterInputValue:t})}}const Ee=me(L);function Se({currentWorkspaceId:s}){const t=f(),a=X(),r=fe(s)??"?",l=oe(a),i=a?.isTeam(),o=ee(),[c]=se(),d=c.get("tab"),u=d&&Ee(d)?d:"members",[g,R]=h.useState(""),[K,A]=h.useState("");h.useEffect(()=>{A("")},[u]);const V=h.useCallback(le(x=>{A(x)},250),[]),$=!!ce()?.length;if(!a)return null;const z=a.isAdminOfAccount(),G=a.isOwnerOfAccount(),J=i||!$?["members","invites"]:["members","invites","requests"];return e.jsxs(e.Fragment,{children:[e.jsx(de,{children:e.jsx("title",{children:t.formatMessage(p.adminBrowserPageTitle)})}),e.jsx(ve,{title:t.formatMessage(p.adminPageTitle),subtitle:e.jsx(m,{values:{totalMembers:r,planName:l},...p.totalMembers})}),e.jsxs(pe,{children:[e.jsxs(_e,{children:[e.jsx("div",{className:"mb-6 flex gap-2",children:J.map(x=>e.jsx(We,{onClick:()=>{o(x!=null?`/admin?tab=${x}`:"/admin")},isSelected:u===x,children:e.jsx(we,{tab:x})},x))}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("div",{className:"relative",children:[e.jsx(ge,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),e.jsx("input",{type:"text",value:g,onChange:x=>{R(x.target.value),V(x.target.value)},placeholder:t.formatMessage(p.search),className:"w-48 rounded-lg border border-token-border-light bg-token-main-surface-primary pl-8 placeholder:text-token-text-tertiary"})]}),(z||G||i)&&e.jsx(y,{onClick:()=>{E.openModal(ue.InviteUsersToWorkspace),te.logEvent("chatgpt_invite_users_to_workspace",0,{action:"OpenAdminInviteModal",location:"workspace-admin-click",text:"InviteMember",step:"OpenModal"})},icon:xe,children:e.jsx(m,{...p.inviteMemberButton})}),i?e.jsx(ne,{triggerButton:e.jsx(y,{color:"secondary",icon:C}),children:e.jsx(v.Item,{onClick:()=>{a&&E.setLeaveWorkspaceData(a)},children:e.jsx(m,{...p.leaveWorkspace})})}):null]})]}),e.jsx(Ae,{workspaceId:s,tab:u,filterInputValue:K})]}),a!=null?e.jsx(Ne,{workspace:a}):null]})}function We({children:s,isSelected:t,onClick:a}){return e.jsx(y,{color:"ghost",className:ae(t?"bg-token-main-surface-tertiary":"hover:bg-token-main-surface-tertiary"),onClick:a,children:s})}const _e=Z.div`mb-4 py-6 flex flex-col gap-4 lg:flex-row md:items-start lg:justify-between`,p=P({adminBrowserPageTitle:{id:"adminPage.adminBrowserPageTitle",defaultMessage:"ChatGPT - Member admin"},adminPageTitle:{id:"adminPage.adminPageTitle.0",defaultMessage:"Members"},workspaceNotFound:{id:"adminPage.workspaceNotFound",defaultMessage:"Workspace not found"},totalMembers:{id:"adminPage.totalMembers",defaultMessage:"{planName} · {totalMembers} {totalMembers, plural, one {member} other {members}}"},backToChat:{id:"adminPage.backToChat",defaultMessage:"Back to chat"},allMembers:{id:"adminPage.allMembers",defaultMessage:"All members"},pendingInvites:{id:"adminPage.pendingInvites",defaultMessage:"Pending invites"},pendingRequests:{id:"adminPage.pendingRequests",defaultMessage:"Pending requests"},analytics:{id:"adminPage.analytics",defaultMessage:"Analytics"},inviteMemberButton:{id:"adminPage.inviteMemberButton",defaultMessage:"Invite member"},leaveWorkspace:{id:"adminPage.leaveWorkspace",defaultMessage:"Leave workspace"},search:{id:"adminPage.search",defaultMessage:"Search"}});function ns(){const s=je();return e.jsx(Se,{...s})}export{ns as default};
//# sourceMappingURL=ge46rw0ku5vv5fqd.js.map