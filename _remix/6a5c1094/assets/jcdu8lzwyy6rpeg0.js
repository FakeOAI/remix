const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/h3k3vrkhltu2265z.js","assets/byjsl6fmrkvfkikz.js","assets/mkdzigrfhg3ljd4p.js","assets/root-jo8sfy59.css"])))=>i.map(i=>d[i]);
import{u as A,R,H as v,b3 as N,E as w,F as S,N as P,co as G,c5 as z,r as j,j as e,K as d,aN as X,bs as I,O as Z,aq as J,X as Y,em as ee,c as se}from"./byjsl6fmrkvfkikz.js";import{D as p,B as te}from"./flw2u9r6fdpgl554.js";import{ba as U,bb as W,aB as r,bd as T,bf as _,l as ae,bg as ne,eV as re,D as ie,bE as oe,_ as E,b4 as le}from"./haljegjt87cup22y.js";import{c as ce}from"./iej0cupg2dqkmejt.js";import{al as q,g as de,H as ue}from"./mkdzigrfhg3ljd4p.js";import me from"./n4q4xaxr21llddso.js";import{a as ge,b as xe}from"./fpi0wbheawymyoi3.js";import{A as D,W as F,u as pe,U as fe}from"./hmxiov2ajbrcyny9.js";import{u as ve}from"./c2mwechksmfwnt7d.js";import"./m2mzbtwmgt9i1f5z.js";import"./d3y72ugnrmac5z1v.js";import"./dnav9al8cn0bw0zc.js";import"./e9lafxuzyeh4418f.js";import"./b0e2p69lgqz4xa3j.js";import"./jmutnjyuz0rby5b2.js";import"./gnjsr8ecejxnbwh9.js";import"./jfudb5sncbzm3tm1.js";import"./jbdt1d85czjr39f4.js";import"./gzdwby307cq01p4d.js";import"./c5t9jayedjb4qxry.js";import"./k9y60274mtouqpk6.js";import"./g9imwwsgx97bm1kq.js";import"./g7xfk6lc3rb5gpp4.js";import"./f3plzi4ukb47qkp1.js";import"./hcf5gao25g1fhies.js";import"./j2utxaosc39xc7qz.js";import"./du1hyg7yhpjt0mt9.js";import"./jvvtm5hg0jnmck7e.js";import"./fo30bw8ruxrh2nda.js";const M=25;function je(s,t,a){return A({queryKey:["workspace",s,"invites",t,a],queryFn:async()=>await R.getWorkspaceInvites(s,t,M,a)})}function he(s,t,a){return A({queryKey:["workspace",s,"invites","requests",t,a],queryFn:async()=>await R.getWorkspaceInviteRequests(s,t,M,a)})}function H(s){const t=v(),a=N(),i=w();return S({mutationFn:({inviteId:c,role:o,acceptRequest:n})=>R.patchWorkspaceInvite(s,c,{role:o,acceptRequest:n}).catch(l=>{a.danger(t.formatMessage(k.updateInviteError,{error:l.message}))}),onSuccess:()=>{i.invalidateQueries({queryKey:["workspace",s,"invites"]}),i.invalidateQueries({queryKey:["workspace",s,"invites","requests"]}),i.invalidateQueries({queryKey:["workspace",s]})}})}function B(s){const t=v(),a=N(),i=w();return S({mutationFn:({email:c})=>R.deleteWorkspaceInvite(s,c).catch(o=>{a.danger(t.formatMessage(k.deleteInviteError,{email:c,error:o.message}))}),onSuccess:()=>{i.invalidateQueries({queryKey:["workspace",s,"invites"]}),i.invalidateQueries({queryKey:["workspace",s,"invites","requests"]})}})}function Me(s){const t=v(),a=N(),i=w();return S({mutationFn:({role:c,email:o})=>R.addWorkspaceUsers(s,[o],c,!0).then(({account_invites:n,errored_emails:l})=>{if(l.length>0)throw new Error(l[0].error);n.length>0&&a.success(t.formatMessage(k.resendInviteSuccess,{email:o}))}).catch(n=>{a.danger(t.formatMessage(k.resendInviteError,{email:o,error:n.message}))}),onSuccess:()=>{i.invalidateQueries({queryKey:["workspace",s,"invites"]}),i.invalidateQueries({queryKey:["workspace",s,"invites","requests"]})}})}const k=P({updateInviteError:{id:"WorkspaceInvites.updateInviteError",defaultMessage:"Unable to update invite from workspace: {error}"},deleteInviteError:{id:"WorkspaceInvites.deleteInviteError",defaultMessage:"Unable to remove user ({email}) from workspace: {error}"},resendInviteSuccess:{id:"WorkspaceInvites.resendInviteSuccess",defaultMessage:"Sent a new invite to {email}"},resendInviteError:{id:"WorkspaceInvites.resendInviteError",defaultMessage:"Unable to resend invite to ({email}) from workspace: {error}"}}),be=G(()=>z(()=>import("./h3k3vrkhltu2265z.js"),__vite__mapDeps([0,1,2,3])).then(s=>s.DirectorySyncResourceManagedIndication));function ye({workspaceId:s,filterInputValue:t}){const[a,i]=j.useState(0),c=U(s),o=W(s),n=c||o,{data:l}=je(s,a*M,t);if(l===void 0)return e.jsx(D,{});const u=l.items,m=Math.ceil((l.total??0)/M);return a>=m&&m!==0&&i(Math.max(m-1,0)),e.jsxs("div",{children:[e.jsxs(r.Root,{fixed:!0,size:"normal",children:[e.jsxs(r.Header,{children:[e.jsx(r.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(d,{...y.email})}),e.jsx(r.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:e.jsx("span",{className:n?"pl-3":"",children:e.jsx(d,{...y.role})})}),n&&e.jsx(r.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),e.jsxs(r.Body,{children:[u.map(g=>e.jsx(Ie,{workspaceId:s,invite:g,isCurrentUserOwner:c,currentUserHasAdminRights:n},g.id)),u.length===0&&e.jsx(r.Row,{children:e.jsx(r.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(d,{...y.noResults})})})})]})]}),m>1&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx(T,{currentPage:a,onChangeIndex:i,length:m})})]})}function Ie({workspaceId:s,invite:t,isCurrentUserOwner:a,currentUserHasAdminRights:i}){const c=_(),o=H(s),n=B(s),l=Me(s),{value:u}=X("3999712942");return e.jsxs(r.Row,{disabled:o.isPending||n.isPending||n.isSuccess||l.isPending,children:[e.jsx(r.Cell,{children:e.jsxs("span",{className:"flex flex-grow justify-between",children:[e.jsx("span",{children:t.email_address}),u&&t.is_scim_managed&&e.jsx(be,{})]})}),e.jsx(r.Cell,{children:a?e.jsx(F,{currentRole:t.role,onUpdateUserRole:m=>{o.mutate({inviteId:t.id,role:m})}}):c[t.role]}),i&&e.jsx(e.Fragment,{children:e.jsx(r.Cell,{children:e.jsx(Re,{onDeleteUser:()=>{n.mutate({email:t.email_address??""})},onResendInvite:()=>{l.mutate({email:t.email_address??"",role:t.role??""})},disabled:t.is_scim_managed})})})]})}function Re({onDeleteUser:s,onResendInvite:t,disabled:a}){const i=v();return e.jsx(e.Fragment,{children:a?e.jsx(p.Root,{children:e.jsx(p.Trigger,{disabled:!0,children:e.jsx(ae,{sideOffset:0,label:i.formatMessage(ne.managedViaSCIMTooltip),className:"flex",side:"right",children:e.jsx(q,{className:"icon-sm"})})})}):e.jsxs(p.Root,{children:[e.jsx(p.Trigger,{children:e.jsx(q,{className:"icon-sm"})}),e.jsx(p.Portal,{children:e.jsxs(p.Content,{children:[e.jsx(p.Item,{onClick:t,children:e.jsx(d,{...y.resendInvite})}),e.jsx(p.Item,{onClick:s,children:e.jsx(d,{...y.revokeInvite})})]})})]})})}const y=P({email:{id:"InviteManager.email",defaultMessage:"Email"},role:{id:"InviteManager.role",defaultMessage:"Role"},resendInvite:{id:"InviteManager.resendInvite",defaultMessage:"Resend invite"},revokeInvite:{id:"InviteManager.revokeInvite",defaultMessage:"Revoke invite"},noResults:{id:"InviteManager.noResults",defaultMessage:"No results"}});function ke({workspaceId:s,filterInputValue:t}){const[a,i]=j.useState(0),{data:c}=he(s,a*M,t),o=U(s),n=W(s),l=v(),u=o||n;if(c===void 0)return e.jsx(D,{});const m=c.items,g=Math.ceil(c.total/M);return a>=g&&g!==0&&i(Math.max(g-1,0)),e.jsxs("div",{children:[e.jsxs(r.Root,{fixed:!0,size:"normal",children:[e.jsxs(r.Header,{children:[e.jsx(r.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(d,{...h.email})}),e.jsx(r.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:e.jsx("span",{className:u?"pl-3":"",children:e.jsx(d,{...h.role})})}),u&&e.jsx(r.HeaderCell,{className:"w-40 bg-token-main-surface-primary",children:l.formatMessage(h.actions)})]}),e.jsxs(r.Body,{children:[m.map(b=>e.jsx(Pe,{workspaceId:s,invite:b,isCurrentUserOwner:o,currentUserHasAdminRights:u},b.id)),m.length===0&&e.jsx(r.Row,{children:e.jsx(r.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(d,{...h.noResults})})})})]})]}),g>1&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx(T,{currentPage:a,onChangeIndex:i,length:g})})]})}function Pe({workspaceId:s,invite:t,isCurrentUserOwner:a,currentUserHasAdminRights:i}){const c=_(),o=H(s),n=B(s),l=v();return e.jsxs(r.Row,{disabled:o.isPending||n.isPending||n.isPending,children:[e.jsx(r.Cell,{children:t.email_address}),e.jsx(r.Cell,{children:a?e.jsx(F,{currentRole:t.role,onUpdateUserRole:u=>{o.mutate({inviteId:t.id,role:u})}}):c[t.role]}),i&&e.jsx(e.Fragment,{children:e.jsx(r.Cell,{children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(I,{onClick:()=>o.mutate({inviteId:t.id,acceptRequest:!0}),children:l.formatMessage(h.accept)}),e.jsx(I,{color:"secondary",onClick:()=>n.mutate({email:t.email_address}),children:l.formatMessage(h.reject)})]})})})]})}const h=P({email:{id:"RequestInviteManager.email",defaultMessage:"Email"},role:{id:"RequestInviteManager.role",defaultMessage:"Role"},actions:{id:"RequestInviteManager.actions",defaultMessage:"Actions"},accept:{id:"RequestInviteManager.accept",defaultMessage:"Accept"},reject:{id:"RequestInviteManager.reject",defaultMessage:"Reject"},noResults:{id:"RequestInviteManager.noResults",defaultMessage:"No results"}});var O=(s=>(s.Members="members",s.Invites="invites",s.Requests="requests",s))(O||{});function Ce({tab:s}){switch(s){case"members":return e.jsx(d,{...f.allMembers});case"invites":return e.jsx(d,{...f.pendingInvites});case"requests":return e.jsx(d,{...f.pendingRequests})}}function qe({tab:s,filterInputValue:t,workspaceId:a}){switch(s){case"members":return e.jsx(fe,{workspaceId:a,filterInputValue:t});case"invites":return e.jsx(ye,{workspaceId:a,filterInputValue:t});case"requests":return e.jsx(ke,{workspaceId:a,filterInputValue:t})}}const Ne=ce(O);function we({currentWorkspaceId:s}){const t=v(),a=J(),i=pe(s)??"?",c=re(a),o=a==null?void 0:a.isTeam(),n=Y(),l=typeof n.query.tab=="string"&&Ne(n.query.tab)?n.query.tab:"members",[u,m]=j.useState(""),[g,b]=j.useState("");j.useEffect(()=>{b("")},[l]);const Q=j.useCallback(ie(x=>{b(x)},250),[]),C=oe(),K=!!(C!=null&&C.length);if(!a)return null;const V=a.isAdminOfAccount(),L=a.isOwnerOfAccount(),$=o||!K?["members","invites"]:["members","invites","requests"];return e.jsxs(e.Fragment,{children:[e.jsx(ee,{children:e.jsx("title",{children:t.formatMessage(f.adminBrowserPageTitle)})}),e.jsx(ge,{title:t.formatMessage(f.adminPageTitle),subtitle:e.jsx(d,{values:{totalMembers:i,planName:c},...f.totalMembers})}),e.jsxs(xe,{children:[e.jsxs(Ee,{children:[e.jsx("div",{className:"mb-6 flex gap-2",children:$.map(x=>e.jsx(Se,{onClick:()=>{n.push(x!=null?`/admin?tab=${x}`:"/admin")},isSelected:l===x,children:e.jsx(Ce,{tab:x})},x))}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("div",{className:"relative",children:[e.jsx(de,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),e.jsx("input",{type:"text",value:u,onChange:x=>{m(x.target.value),Q(x.target.value)},placeholder:t.formatMessage(f.search),className:"w-48 rounded-lg border border-token-border-light bg-token-main-surface-primary pl-8 placeholder:text-token-text-tertiary"})]}),(V||L||o)&&e.jsx(I,{onClick:()=>{E.openModal(le.InviteUsersToWorkspace)},icon:ue,children:e.jsx(d,{...f.inviteMemberButton})}),o?e.jsx(te,{triggerButton:e.jsx(I,{color:"secondary",icon:q}),children:e.jsx(p.Item,{onClick:()=>{a&&E.setLeaveWorkspaceData(a)},children:e.jsx(d,{...f.leaveWorkspace})})}):null]})]}),e.jsx(qe,{workspaceId:s,tab:l,filterInputValue:g})]}),a!=null?e.jsx(me,{workspace:a}):null]})}function Se({children:s,isSelected:t,onClick:a}){return e.jsx(I,{color:"ghost",className:se(t?"bg-token-main-surface-tertiary":"hover:bg-token-main-surface-tertiary"),onClick:a,children:s})}const Ee=Z.div`mb-4 py-6 flex flex-col gap-4 lg:flex-row md:items-start lg:justify-between`,f=P({adminBrowserPageTitle:{id:"adminPage.adminBrowserPageTitle",defaultMessage:"ChatGPT - Member admin"},adminPageTitle:{id:"adminPage.adminPageTitle.0",defaultMessage:"Members"},workspaceNotFound:{id:"adminPage.workspaceNotFound",defaultMessage:"Workspace not found"},totalMembers:{id:"adminPage.totalMembers",defaultMessage:"{planName} · {totalMembers} {totalMembers, plural, one {member} other {members}}"},backToChat:{id:"adminPage.backToChat",defaultMessage:"Back to chat"},allMembers:{id:"adminPage.allMembers",defaultMessage:"All members"},pendingInvites:{id:"adminPage.pendingInvites",defaultMessage:"Pending invites"},pendingRequests:{id:"adminPage.pendingRequests",defaultMessage:"Pending requests"},analytics:{id:"adminPage.analytics",defaultMessage:"Analytics"},inviteMemberButton:{id:"adminPage.inviteMemberButton",defaultMessage:"Invite member"},leaveWorkspace:{id:"adminPage.leaveWorkspace",defaultMessage:"Leave workspace"},search:{id:"adminPage.search",defaultMessage:"Search"}});function ls(){const s=ve();return e.jsx(we,{...s})}export{ls as default};
//# sourceMappingURL=jcdu8lzwyy6rpeg0.js.map