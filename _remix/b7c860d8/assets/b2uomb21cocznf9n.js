const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/obz1zvf0xuq6reny.js","assets/m8rh4g4wti5oij6r.js","assets/f2s0ymrsx8zkcqzb.js","assets/root-cxuj9hgc.css","assets/c5fw9w9p1ivp1bfb.js","assets/m3hwjquoibx09ax4.js","assets/e243ffiqjjk1dz27.js","assets/imjfbin0u57rzypy.js","assets/gyk6913sy5h59gmv.js","assets/conversation-small-cll5buey.css","assets/e3sq0rwlveh4dug2.js","assets/zjkuam53pt9b5gh8.js","assets/d3y72ugnrmac5z1v.js","assets/i7bss42xef1rlmke.js","assets/e9lafxuzyeh4418f.js","assets/g14fqiiy19d0yfys.js","assets/kxxyd4n5sf3kg621.js"])))=>i.map(i=>d[i]);
import{u as E,j as y,W as f,a8 as N,a as q,h as w,a5 as P,Y as U,Z as W,r as h,x as e,a0 as m,bA as Y,am as J,av as I,V as X,ab as ee,bh as se,aW as te,S as ae,N as ne}from"./m8rh4g4wti5oij6r.js";import{D as v,B as re}from"./kmjf2foda203kwt3.js";import{U as A,G as ie}from"./m3hwjquoibx09ax4.js";import{ao as _,ap as T,U as n,ar as D,at as F,au as oe,fa as le,d as ce,bK as de,cV as ue}from"./gyk6913sy5h59gmv.js";import{c as me}from"./iej0cupg2dqkmejt.js";import{ab as C,t as ge,I as xe}from"./f2s0ymrsx8zkcqzb.js";import{a as ve,b as pe}from"./iagwoay7be5277qz.js";import{A as H,W as O,u as fe,U as he}from"./cdq3rh8lvaa0485m.js";import{u as je}from"./d1eudcvtomjdxmbb.js";import"./e243ffiqjjk1dz27.js";import"./imjfbin0u57rzypy.js";import"./e3sq0rwlveh4dug2.js";import"./en6useuxfeey6coz.js";import"./o4y657gzal7pp820.js";import"./o24ms7b147ogs90x.js";import"./m1ibh1oof5grnyzc.js";import"./cfylx6lsvkt0axtk.js";import"./jjmzj070cd6o2hu4.js";import"./jpu587g8frr5fgxc.js";import"./l29ilruagezuj64q.js";import"./kxxyd4n5sf3kg621.js";const M=25;function Me(s,t,a){return E({queryKey:["workspace",s,"invites",t,a],queryFn:async()=>await y.getWorkspaceInvites(s,t,M,a)})}function be(s,t,a){return E({queryKey:["workspace",s,"invites","requests",t,a],queryFn:async()=>await y.getWorkspaceInviteRequests(s,t,M,a)})}function B(s){const t=f(),a=N(),r=q();return w({mutationFn:({inviteId:l,role:i,acceptRequest:o})=>y.patchWorkspaceInvite(s,l,{role:i,acceptRequest:o}).catch(c=>{a.danger(t.formatMessage(k.updateInviteError,{error:c.message}))}),onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",s,"invites"]}),r.invalidateQueries({queryKey:["workspace",s,"invites","requests"]}),r.invalidateQueries({queryKey:["workspace",s]})}})}function Q(s){const t=f(),a=N(),r=q();return w({mutationFn:({email:l})=>y.deleteWorkspaceInvite(s,l).catch(i=>{a.danger(t.formatMessage(k.deleteInviteError,{email:l,error:i.message}))}),onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",s,"invites"]}),r.invalidateQueries({queryKey:["workspace",s,"invites","requests"]})}})}function Ie(s){const t=f(),a=N(),r=q();return w({mutationFn:({role:l,email:i})=>y.addWorkspaceUsers(s,[i],l,!0).then(({account_invites:o,errored_emails:c})=>{if(c.length>0)throw new Error(c[0].error);o.length>0&&a.success(t.formatMessage(k.resendInviteSuccess,{email:i}))}).catch(o=>{a.danger(t.formatMessage(k.resendInviteError,{email:i,error:o.message}))}),onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",s,"invites"]}),r.invalidateQueries({queryKey:["workspace",s,"invites","requests"]})}})}const k=P({updateInviteError:{id:"WorkspaceInvites.updateInviteError",defaultMessage:"Unable to update invite from workspace: {error}"},deleteInviteError:{id:"WorkspaceInvites.deleteInviteError",defaultMessage:"Unable to remove user ({email}) from workspace: {error}"},resendInviteSuccess:{id:"WorkspaceInvites.resendInviteSuccess",defaultMessage:"Sent a new invite to {email}"},resendInviteError:{id:"WorkspaceInvites.resendInviteError",defaultMessage:"Unable to resend invite to ({email}) from workspace: {error}"}}),ye=U(()=>W(()=>import("./obz1zvf0xuq6reny.js"),__vite__mapDeps([0,1,2,3])).then(s=>s.DirectorySyncResourceManagedIndication));function Re({workspaceId:s,filterInputValue:t}){const[a,r]=h.useState(0),l=_(s),i=T(s),o=l||i,{data:c}=Me(s,a*M,t);if(c===void 0)return e.jsx(H,{});const d=c.items,u=Math.ceil((c.total??0)/M);return a>=u&&u!==0&&r(Math.max(u-1,0)),e.jsxs("div",{children:[e.jsxs(n.Root,{fixed:!0,size:"normal",children:[e.jsxs(n.Header,{children:[e.jsx(n.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(m,{...b.email})}),e.jsx(n.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:e.jsx("span",{className:o?"pl-3":"",children:e.jsx(m,{...b.role})})}),o&&e.jsx(n.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),e.jsxs(n.Body,{children:[d.map(g=>e.jsx(ke,{workspaceId:s,invite:g,isCurrentUserOwner:l,currentUserHasAdminRights:o},g.id)),d.length===0&&e.jsx(n.Row,{children:e.jsx(n.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(m,{...b.noResults})})})})]})]}),u>1&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx(D,{currentPage:a,onChangeIndex:r,length:u})})]})}function ke({workspaceId:s,invite:t,isCurrentUserOwner:a,currentUserHasAdminRights:r}){const l=F(),i=B(s),o=Q(s),c=Ie(s),{value:d}=Y("3999712942");return e.jsxs(n.Row,{disabled:i.isPending||o.isPending||o.isSuccess||c.isPending,children:[e.jsx(n.Cell,{children:e.jsxs("span",{className:"flex flex-grow justify-between",children:[e.jsx("span",{children:t.email_address}),d&&t.is_scim_managed&&e.jsx(ye,{})]})}),e.jsx(n.Cell,{children:a?e.jsx(O,{currentRole:t.role,onUpdateUserRole:u=>{i.mutate({inviteId:t.id,role:u})}}):l[t.role]}),r&&e.jsx(e.Fragment,{children:e.jsx(n.Cell,{children:e.jsx(Pe,{onDeleteUser:()=>{o.mutate({email:t.email_address??""})},onResendInvite:()=>{c.mutate({email:t.email_address??"",role:t.role??""})},disabled:t.is_scim_managed})})})]})}function Pe({onDeleteUser:s,onResendInvite:t,disabled:a}){const r=f();return e.jsx(e.Fragment,{children:a?e.jsx(v.Root,{children:e.jsx(v.Trigger,{disabled:!0,children:e.jsx(J,{sideOffset:0,label:r.formatMessage(oe.managedViaSCIMTooltip),className:"flex",side:"right",children:e.jsx(C,{className:"icon-sm"})})})}):e.jsxs(v.Root,{children:[e.jsx(v.Trigger,{children:e.jsx(C,{className:"icon-sm"})}),e.jsx(v.Portal,{children:e.jsxs(v.Content,{children:[e.jsx(v.Item,{onClick:t,children:e.jsx(m,{...b.resendInvite})}),e.jsx(v.Item,{onClick:s,children:e.jsx(m,{...b.revokeInvite})})]})})]})})}const b=P({email:{id:"InviteManager.email",defaultMessage:"Email"},role:{id:"InviteManager.role",defaultMessage:"Role"},resendInvite:{id:"InviteManager.resendInvite",defaultMessage:"Resend invite"},revokeInvite:{id:"InviteManager.revokeInvite",defaultMessage:"Revoke invite"},noResults:{id:"InviteManager.noResults",defaultMessage:"No results"}});function Ce({workspaceId:s,filterInputValue:t}){const[a,r]=h.useState(0),{data:l}=be(s,a*M,t),i=_(s),o=T(s),c=f(),d=i||o;if(l===void 0)return e.jsx(H,{});const u=l.items,g=Math.ceil(l.total/M);return a>=g&&g!==0&&r(Math.max(g-1,0)),e.jsxs("div",{children:[e.jsxs(n.Root,{fixed:!0,size:"normal",children:[e.jsxs(n.Header,{children:[e.jsx(n.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(m,{...j.email})}),e.jsx(n.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:e.jsx("span",{className:d?"pl-3":"",children:e.jsx(m,{...j.role})})}),d&&e.jsx(n.HeaderCell,{className:"w-40 bg-token-main-surface-primary",children:c.formatMessage(j.actions)})]}),e.jsxs(n.Body,{children:[u.map(R=>e.jsx(Ne,{workspaceId:s,invite:R,isCurrentUserOwner:i,currentUserHasAdminRights:d},R.id)),u.length===0&&e.jsx(n.Row,{children:e.jsx(n.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(m,{...j.noResults})})})})]})]}),g>1&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx(D,{currentPage:a,onChangeIndex:r,length:g})})]})}function Ne({workspaceId:s,invite:t,isCurrentUserOwner:a,currentUserHasAdminRights:r}){const l=F(),i=B(s),o=Q(s),c=f();return e.jsxs(n.Row,{disabled:i.isPending||o.isPending||o.isPending,children:[e.jsx(n.Cell,{children:t.email_address}),e.jsx(n.Cell,{children:a?e.jsx(O,{currentRole:t.role,onUpdateUserRole:d=>{i.mutate({inviteId:t.id,role:d})}}):l[t.role]}),r&&e.jsx(e.Fragment,{children:e.jsx(n.Cell,{children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(I,{onClick:()=>i.mutate({inviteId:t.id,acceptRequest:!0}),children:c.formatMessage(j.accept)}),e.jsx(I,{color:"secondary",onClick:()=>o.mutate({email:t.email_address}),children:c.formatMessage(j.reject)})]})})})]})}const j=P({email:{id:"RequestInviteManager.email",defaultMessage:"Email"},role:{id:"RequestInviteManager.role",defaultMessage:"Role"},actions:{id:"RequestInviteManager.actions",defaultMessage:"Actions"},accept:{id:"RequestInviteManager.accept",defaultMessage:"Accept"},reject:{id:"RequestInviteManager.reject",defaultMessage:"Reject"},noResults:{id:"RequestInviteManager.noResults",defaultMessage:"No results"}}),qe=U(()=>W(()=>import("./c5fw9w9p1ivp1bfb.js"),__vite__mapDeps([4,1,2,3,5,6,7,8,9,10,11,12,13,14,15,16])));var K=(s=>(s.Members="members",s.Invites="invites",s.Requests="requests",s))(K||{});function we({tab:s}){switch(s){case"members":return e.jsx(m,{...p.allMembers});case"invites":return e.jsx(m,{...p.pendingInvites});case"requests":return e.jsx(m,{...p.pendingRequests})}}function Se({tab:s,filterInputValue:t,workspaceId:a}){switch(s){case"members":return e.jsx(he,{workspaceId:a,filterInputValue:t});case"invites":return e.jsx(Re,{workspaceId:a,filterInputValue:t});case"requests":return e.jsx(Ce,{workspaceId:a,filterInputValue:t})}}const Ae=me(K);function Ee({currentWorkspaceId:s}){const t=f(),a=ee(),r=fe(s)??"?",l=le(a),i=a?.isTeam(),o=se(),[c]=te(),d=c.get("tab"),u=d&&Ae(d)?d:"members",[g,R]=h.useState(""),[V,S]=h.useState("");h.useEffect(()=>{S("")},[u]);const L=h.useCallback(ce(x=>{S(x)},250),[]),G=!!de()?.length;if(!a)return null;const $=a.isAdminOfAccount(),z=a.isOwnerOfAccount(),Z=i||!G?["members","invites"]:["members","invites","requests"];return e.jsxs(e.Fragment,{children:[e.jsx(ue,{children:e.jsx("title",{children:t.formatMessage(p.adminBrowserPageTitle)})}),e.jsx(ve,{title:t.formatMessage(p.adminPageTitle),subtitle:e.jsx(m,{values:{totalMembers:r,planName:l},...p.totalMembers})}),e.jsxs(pe,{children:[e.jsxs(We,{children:[e.jsx("div",{className:"mb-6 flex gap-2",children:Z.map(x=>e.jsx(Ue,{onClick:()=>{o(x!=null?`/admin?tab=${x}`:"/admin")},isSelected:u===x,children:e.jsx(we,{tab:x})},x))}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("div",{className:"relative",children:[e.jsx(ge,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),e.jsx("input",{type:"text",value:g,onChange:x=>{R(x.target.value),L(x.target.value)},placeholder:t.formatMessage(p.search),className:"w-48 rounded-lg border border-token-border-light bg-token-main-surface-primary pl-8 placeholder:text-token-text-tertiary"})]}),($||z||i)&&e.jsx(I,{onClick:()=>{A.openModal(ie.InviteUsersToWorkspace),ae.logEvent("chatgpt_invite_users_to_workspace",0,{action:"OpenAdminInviteModal",location:"workspace-admin-click",text:"InviteMember",step:"OpenModal"})},icon:xe,children:e.jsx(m,{...p.inviteMemberButton})}),i?e.jsx(re,{triggerButton:e.jsx(I,{color:"secondary",icon:C}),children:e.jsx(v.Item,{onClick:()=>{a&&A.setLeaveWorkspaceData(a)},children:e.jsx(m,{...p.leaveWorkspace})})}):null]})]}),e.jsx(Se,{workspaceId:s,tab:u,filterInputValue:V})]}),a!=null?e.jsx(qe,{workspace:a}):null]})}function Ue({children:s,isSelected:t,onClick:a}){return e.jsx(I,{color:"ghost",className:ne(t?"bg-token-main-surface-tertiary":"hover:bg-token-main-surface-tertiary"),onClick:a,children:s})}const We=X.div`mb-4 py-6 flex flex-col gap-4 lg:flex-row md:items-start lg:justify-between`,p=P({adminBrowserPageTitle:{id:"adminPage.adminBrowserPageTitle",defaultMessage:"ChatGPT - Member admin"},adminPageTitle:{id:"adminPage.adminPageTitle.0",defaultMessage:"Members"},workspaceNotFound:{id:"adminPage.workspaceNotFound",defaultMessage:"Workspace not found"},totalMembers:{id:"adminPage.totalMembers",defaultMessage:"{planName} · {totalMembers} {totalMembers, plural, one {member} other {members}}"},backToChat:{id:"adminPage.backToChat",defaultMessage:"Back to chat"},allMembers:{id:"adminPage.allMembers",defaultMessage:"All members"},pendingInvites:{id:"adminPage.pendingInvites",defaultMessage:"Pending invites"},pendingRequests:{id:"adminPage.pendingRequests",defaultMessage:"Pending requests"},analytics:{id:"adminPage.analytics",defaultMessage:"Analytics"},inviteMemberButton:{id:"adminPage.inviteMemberButton",defaultMessage:"Invite member"},leaveWorkspace:{id:"adminPage.leaveWorkspace",defaultMessage:"Leave workspace"},search:{id:"adminPage.search",defaultMessage:"Search"}});function ns(){const s=je();return e.jsx(Ee,{...s})}export{ns as default};
//# sourceMappingURL=b2uomb21cocznf9n.js.map