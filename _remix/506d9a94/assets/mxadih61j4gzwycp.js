const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/go7f54e6hojpbg6q.js","assets/dowr76ygy9ekiejb.js","assets/kp1coaqh848e1trr.js","assets/root-oa67b3mk.css"])))=>i.map(i=>d[i]);
import{l as e,m as R,X as D,aK as z,aN as H,r as d,Y as K,Z as V,bg as G,$ as i,j as A,f7 as W,D as se,u as X,a as Z,h as P,a$ as Y,aD as te,aE as ae,bm as re,ey as ne,a0 as ie}from"./dowr76ygy9ekiejb.js";import{K as oe,fE as le,fF as Q,a3 as a,f4 as L,c as _,D as y,f7 as U,I as ce}from"./d29iiuqq6mahovze.js";import{A as de}from"./ni1bd17b179dz1kw.js";import{t as J,F as ue,K as me,L as T}from"./kp1coaqh848e1trr.js";import{a as ge,b as pe}from"./ctnjgk0r3udzgkw0.js";import{V as xe}from"./d3y72ugnrmac5z1v.js";import{u as he}from"./vbvw5t2jij7q6y7k.js";import"./bdn2a8jw9z2g2cqz.js";import"./g3ajaymawb15ov1o.js";import"./lfhg9l1ujsmlf9vb.js";import"./li339xw927dn0vis.js";import"./oo1qute7nw5g0tzm.js";import"./mvas4xqq2yb58sh8.js";import"./fbxsohqf2bpntvbt.js";import"./eitozb63mldl4dxn.js";import"./i36p331yzo0rxols.js";import"./hb735mtwqecbnemm.js";function ee({className:s,inputClassName:n,value:o,onChange:g,placeholder:p}){return e.jsxs("div",{className:R("relative",s),children:[e.jsx(J,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),e.jsx("input",{type:"text",value:o,onChange:g,placeholder:p,className:R("rounded-lg border border-gray-200 pl-8 placeholder:text-gray-500 dark:border-gray-600 dark:bg-gray-700",n),autoComplete:"off"})]})}const q=1e3;function fe({group:s,isOpen:n,onClose:o}){const g=D(),p=z(),u=g.formatMessage({id:"workspaceSettings.groups.addMember",defaultMessage:"Add members to the {groupName} group"},{groupName:s.name}),h=H(),[j,x]=d.useState([]),[f,c]=d.useState(!1);async function b(){const M=h?.getWorkspaceId();if(!M)throw new Error("No workspace ID found");c(!0);const N=await A.bulkAddWorkspaceGroupUsers(M,s.id,j);p.success(g.formatMessage({id:"yU4Zf0",defaultMessage:"Added {numUsers} users to the group"},{numUsers:N.added_group_users.length})),o?.(),c(!1)}return e.jsxs(K,{isOpen:n,onClose:o??V,title:u,type:"success",showCloseButton:!0,primaryButton:e.jsx(G,{onClick:b,disabled:j.length===0||j.length>q,loading:f,children:e.jsx(i,{id:"EpbOzA",defaultMessage:"Add users to group"})}),children:[e.jsx(je,{onChange:x}),j.length>q&&e.jsx("div",{className:"mt-2 text-sm text-token-text-error",children:e.jsx(i,{id:"9lp0Tc",defaultMessage:"Email list is limited to {maxEmails} users at once",values:{maxEmails:q}})})]})}function je({onChange:s}){const[n,o]=d.useState("");return e.jsxs("div",{className:"flex flex-col space-y-4",children:[e.jsxs("label",{htmlFor:"group-email-paste",children:[e.jsx(i,{id:"qvGcSC",defaultMessage:"Emails"}),e.jsx("br",{}),e.jsx("span",{className:"text-sm text-token-text-tertiary",children:e.jsx(i,{id:"Fhd+5h",defaultMessage:"Paste email addresses here, one per line:"})})]}),e.jsx(oe,{id:"group-email-paste",className:"h-[250px] text-sm",value:n,onChange:g=>{o(g.target.value),s(ye(g.target.value))},placeholder:`jean@example.com
joohyun@example.com
muhammed@example.com
susan@example.com`})]})}function ye(s){return s.split(`
`).map(n=>n.trim()).filter(n=>n.length>0).filter(n=>xe.test(n))}function Me({group:s,isOpen:n,onClose:o}){const p=D().formatMessage({id:"workspaceSettings.groups.addMember",defaultMessage:"Add members to the {groupName} group"},{groupName:s.name}),h=H()?.getWorkspaceId(),[j,x]=d.useState(""),[f,c]=d.useState(0),{data:b}=le(h,f*Q,j,Q,W),[M,N]=d.useState([]),[C,w]=d.useState([]),[S,k]=d.useState("interactive"),m=b?Math.ceil(b.total??0/Q):0;async function t(r){w(l=>[...l,r]);try{await we(h,s.id,r),N(l=>[...l,r])}catch(l){se.addError(l)}finally{w(l=>l.filter(v=>v!==r))}}return S==="batch"?e.jsx(fe,{group:s,isOpen:n,onClose:o}):e.jsx(K,{type:"warning",isOpen:n,onClose:o??V,title:p,size:"custom",className:"max-w-screen-md",showCloseButton:!0,primaryButton:e.jsx(G,{onClick:o,children:e.jsx(i,{id:"0NAzDq",defaultMessage:"Done"})}),children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex flex-row justify-between",children:[e.jsx("p",{children:p}),e.jsx(G,{onClick:()=>{k("batch")},color:"secondary",children:e.jsx(i,{id:"5GPldp",defaultMessage:"Bulk add users"})})]}),e.jsx(ee,{value:j,inputClassName:"w-full",onChange:r=>{x(r.target.value)}}),e.jsxs(a.Root,{className:"min-w-full",children:[e.jsxs(a.Header,{children:[e.jsx(a.HeaderCell,{children:e.jsx(i,{id:"workspaceSettings.groups.addMember.name",defaultMessage:"Name"})}),e.jsx(a.HeaderCell,{children:e.jsx(i,{id:"workspaceSettings.groups.addMember.email",defaultMessage:"Email"})}),e.jsx(a.HeaderCell,{})]}),e.jsx(a.Body,{children:b?.items.map(r=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:r.name}),e.jsx(a.Cell,{children:r.email}),e.jsx(a.Cell,{textAlign:"right",className:"pr-1",children:e.jsx(G,{size:"small",color:"secondary",disabled:C.includes(r.id),onClick:()=>{M.includes(r.id)||t(r.id)},icon:M.includes(r.id)?ue:me,children:M.includes(r.id)?e.jsx(i,{id:"workspaceSettings.groups.addMember.addButton",defaultMessage:"Added"}):e.jsx(i,{id:"workspaceSettings.groups.addMember.addedButton",defaultMessage:"Add"})})})]},r.id))})]}),e.jsx("div",{className:"flex flex-row justify-center",children:e.jsx(L,{currentPage:f,onChangeIndex:r=>{c(r)},length:m})})]})})}async function we(s,n,o){await A.addWorkspaceGroupUser(s,n,o)}const O=10;function Se({workspaceId:s,group:n,readOnly:o}){const g=D(),[p,u]=d.useState(!1),[h,j]=d.useState(""),[x,f]=d.useState(0),{data:c,isLoading:b,isPlaceholderData:M}=X({queryKey:[s,"groups",n.id,h,`members-page-${x}`],queryFn:()=>A.listWorkspaceGroupMembers(s,n.id,h,x*O),placeholderData:W}),[N,C]=d.useState(!1),w=d.useRef(null),S=Z();d.useEffect(()=>{p&&w.current&&w.current.focus()},[p]);const{mutateAsync:k}=P({mutationFn:async m=>await A.removeWorkspaceGroupMember(s,n.id,m),onMutate:m=>{S.cancelQueries({queryKey:[s,"groups",n.id]});const t=c;return S.setQueryData([s,"groups",n.id,h,`members-page-${x}`],r=>r?{...r,items:r.items.filter(l=>l.id!==m),total:r.total-1}:{limit:10,offset:0,items:[],total:0}),{previousData:t}},onError:(m,t,r)=>{S.setQueryData([s,"groups",n.id,`members-page-${x}`],r?.previousData),S.invalidateQueries({queryKey:[s,"groups",n.id]})},onSettled:async()=>{await new Promise(m=>setTimeout(m,1e3)),S.invalidateQueries({queryKey:[s,"groups"]})}});return e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsxs("div",{className:"flex flex-row items-center",children:[e.jsx("div",{className:"border-token-border-dark mt-3 inline-block h-8 grow-0 border-b-2 text-sm font-semibold",children:e.jsx(i,{id:"workspaceSettings.groups.membersTableTitle",defaultMessage:"Group members"})}),e.jsx("div",{className:"grow"}),e.jsx(_,{label:g.formatMessage({id:"workspaceSettings.groups.searchButtonTooltip",defaultMessage:"Search members"}),children:e.jsx("div",{className:"cursor-pointer p-2",onClick:()=>{u(!0)},children:e.jsx(J,{className:"icon-sm"})})}),e.jsx("input",{type:"text",ref:w,placeholder:g.formatMessage({id:"workspaceSettings.groups.searchMembers",defaultMessage:"Filter by name or email..."}),className:R("bg-token-surface-primary dark:bg-token-surface-secondary border-none px-0 transition-width duration-300 ease-in-out focus:ring-0",p?"w-64":"w-0"),value:h,onChange:()=>{f(0),j(w.current?.value??"")}})]}),e.jsxs(a.Root,{className:"min-w-full",children:[e.jsxs(a.Header,{children:[e.jsx(a.HeaderCell,{children:e.jsx(i,{id:"workspaceSettings.groups.memberName",defaultMessage:"Name"})}),e.jsx(a.HeaderCell,{children:e.jsx(i,{id:"workspaceSettings.groups.email",defaultMessage:"Email"})}),e.jsx(a.HeaderCell,{})]}),e.jsx(a.Body,{className:b||M?"opacity-50":void 0,children:c==null?e.jsx(a.Row,{children:e.jsx(a.Cell,{colSpan:3,children:e.jsx(Y,{})})}):c.items.length===0?e.jsx(a.Row,{children:e.jsx(a.Cell,{colSpan:3,children:h===""?e.jsx(i,{id:"workspaceSettings.groups.noMembers",defaultMessage:"No members"}):e.jsx(i,{id:"workspaceSettings.groups.noMembersForSearch",defaultMessage:"No members matched the filter"})})}):c.items.map(m=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:e.jsx("span",{className:"ml-3",children:m.name})}),e.jsx(a.Cell,{children:m.email}),e.jsx(a.Cell,{textAlign:"right",children:!o&&(n.is_scim_managed?e.jsx(y.Root,{children:e.jsx(y.Trigger,{disabled:!0,children:e.jsx(_,{sideOffset:0,label:g.formatMessage(U.managedViaSCIMTooltip),className:"flex",side:"right",children:e.jsx(T,{className:"icon-sm"})})})}):e.jsxs(y.Root,{children:[e.jsx(y.Trigger,{className:"-my-2",children:e.jsx(T,{className:"icon-sm"})}),e.jsx(y.Portal,{children:e.jsx(y.Content,{children:e.jsx(y.Item,{onClick:()=>k(m.id),children:e.jsx(i,{id:"workspaceSettings.groups.removeMember",defaultMessage:"Remove member"})})})})]}))})]},m.id))})]}),e.jsxs("div",{className:"my-2 flex flex-row justify-center",children:[!o&&!n.is_scim_managed&&e.jsx(G,{color:"secondary",onClick:()=>C(!0),children:e.jsx(i,{id:"workspaceSettings.groups.addMemberButton",defaultMessage:"Add member"})}),!o&&n.is_scim_managed&&e.jsx(_,{label:g.formatMessage(U.managedViaSCIMTooltip),side:"right",sideOffset:0,children:e.jsx(G,{color:"secondary",disabled:!0,children:e.jsx(i,{id:"workspaceSettings.groups.addMemberButton",defaultMessage:"Add member"})})}),e.jsx("div",{className:"grow"}),c&&c.items.length>0&&e.jsx(L,{currentPage:x,onChangeIndex:m=>{f(m)},length:Math.ceil(c.total/O)})]}),N&&e.jsx(Me,{isOpen:!0,onClose:()=>{S.invalidateQueries({queryKey:[s,"groups"]}),C(!1)},group:n})]})}const be=te(()=>ae(()=>import("./go7f54e6hojpbg6q.js"),__vite__mapDeps([0,1,2,3])).then(s=>s.DirectorySyncResourceManagedIndication)),B=10;function Ne({workspaceId:s}){const n=D(),o=z(),g=H(),p=!(g?.isAdminOfAccount()||g?.isOwnerOfAccount()),u=Z(),[h,j]=d.useState(""),[x,f]=d.useState(0),{data:c,isLoading:b,isPlaceholderData:M}=X({queryKey:h===""?[s,"groups",`page-${x}`]:[s,"groups","filtered",h,`page-${x}`],queryFn:()=>A.getWorkspaceGroups(s,{query:h,offset:x*B}),placeholderData:W}),[N,C]=d.useState(!1),w=t=>{t&&(f(0),j("")),C(t)},{mutateAsync:S}=P({mutationFn:async({workspaceId:t,name:r})=>await A.createWorkspaceGroup(t,r),onMutate:({workspaceId:t,name:r})=>{u.cancelQueries({queryKey:[t,"groups"]});const l=c;return u.setQueryData([t,"groups","page-0"],v=>(v||(v={limit:10,offset:0,items:[],total:0}),{...v,items:[{id:"new",name:r,num_members:0,created_time:""},...v.items.slice(0,9)]})),{previousGroups:l}},onError:(t,r,l)=>{u.setQueryData([s,"groups","page-0"],l?.previousGroups),u.invalidateQueries({queryKey:[s,"groups"]}),t.message==="Group with this name already exists."&&o.warning(n.formatMessage({id:"workspaceSettings.groups.duplicateName",defaultMessage:"Group with this name already exists"}),{duration:2})},onSettled:async()=>{await new Promise(t=>setTimeout(t,1e3)),u.invalidateQueries({queryKey:[s,"groups"]})}}),{mutateAsync:k}=P({mutationFn:async t=>await A.deleteWorkspaceGroup(s,t),onMutate:t=>{u.cancelQueries({queryKey:[s,"groups","page-0"]});const r=c;return u.setQueryData([s,"groups","page-0"],l=>(l||(l={items:[]}),{...l,items:l.items.filter(v=>v.id!==t)})),{previousGroups:r}},onError:(t,r,l)=>{u.setQueryData([s,"groups","page-0"],l?.previousGroups),u.invalidateQueries({queryKey:[s,"groups"]})},onSettled:async()=>{await new Promise(t=>setTimeout(t,1e3)),u.invalidateQueries({queryKey:[s,"groups"]})}}),{mutateAsync:m}=P({mutationFn:async({workspaceId:t,groupID:r,name:l})=>await A.updateWorkspaceGroup(t,r,l),onMutate:({workspaceId:t,groupID:r,name:l})=>{const v=u.getQueryData([t,"groups",`page-${x}`]);return u.setQueryData([t,"groups",`page-${x}`],E=>(E||(E={items:[]}),{...E,items:E.items.map(F=>F.id===r?{...F,name:l}:F)})),{previousGroups:v}},onError:(t,r,l)=>{u.setQueryData([r,"groups",`page-${x}`],l?.previousGroups),t.message==="Group with this name already exists."&&o.warning(n.formatMessage({id:"workspaceSettings.groups.duplicateName",defaultMessage:"Group with this name already exists"}),{duration:2})},onSettled:async()=>{await new Promise(t=>setTimeout(t,1e3)),u.invalidateQueries({queryKey:[s,"groups"]})}});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-3 mt-6 flex flex-row justify-between gap-2",children:[e.jsx(ee,{inputClassName:"w-[250px]",value:h,onChange:t=>{j(t.target.value),f(0)},placeholder:n.formatMessage({id:"workspaceSettings.groups.search",defaultMessage:"Search group name"})}),!p&&e.jsx(G,{onClick:()=>w(!0),children:e.jsx(i,{id:"workspaceSettings.groups.create",defaultMessage:"Create group"})})]}),e.jsxs("div",{children:[e.jsxs(a.Root,{className:"min-w-full",children:[e.jsxs(a.Header,{children:[e.jsx(a.HeaderCell,{}),e.jsx(a.HeaderCell,{children:e.jsx(i,{id:"workspaceSettings.groups.groupName",defaultMessage:"Group name"})}),e.jsx(a.HeaderCell,{children:e.jsx(i,{id:"workspaceSettings.groups.members",defaultMessage:"Members"})}),e.jsx(a.HeaderCell,{children:e.jsx(i,{id:"workspaceSettings.groups.created",defaultMessage:"Created"})}),e.jsx(a.HeaderCell,{})]}),e.jsxs(a.Body,{className:R((b||M)&&"opacity-50"),children:[N&&e.jsx($,{group:"new",workspaceId:s,onChangeName:async t=>{t.trim()!==""&&(S({workspaceId:s,name:t}),w(!1))},onDelete:()=>null,readOnly:p}),c==null?e.jsx(a.Row,{children:e.jsx(a.Cell,{colSpan:5,textAlign:"center",children:e.jsx(Y,{})})}):c.items.length===0?e.jsx(a.Row,{children:e.jsx(a.Cell,{colSpan:5,textAlign:"center",children:h===""?e.jsx(i,{id:"workspaceSettings.groups.noGroups",defaultMessage:"No groups found."}):e.jsx(i,{id:"workspaceSettings.groups.noGroupsWithFIlter",defaultMessage:"No groups found. Try changing the search query."})})}):c.items.map(t=>e.jsx($,{group:t,workspaceId:s,onDelete:k,onChangeName:async r=>{m({workspaceId:s,groupID:t.id,name:r})},readOnly:p},t.id))]})]}),c&&e.jsx("div",{className:"text-center",children:e.jsx(L,{length:Math.ceil(c.total/B),currentPage:Math.min(x,Math.ceil(c.total/B)),onChangeIndex:t=>f(t)})})]})]})}function Ce({currentWorkspaceId:s}){const n=D();return e.jsxs(e.Fragment,{children:[e.jsx("title",{children:n.formatMessage(I.title)}),e.jsx(ge,{title:n.formatMessage(I.title),subtitle:e.jsx(i,{id:"NDDzzF",defaultMessage:"Only workspace admins can edit these settings."})}),e.jsx(pe,{showSpinner:!1,children:e.jsx(Ne,{workspaceId:s})})]})}function $({group:s,workspaceId:n,onChangeName:o,onDelete:g,readOnly:p}){const u=D(),{value:h}=re("2091463435"),[j,x]=d.useState(!1),[f,c]=d.useState(s==="new"?"":s.name),[b,M]=d.useState(!1),[N,C]=d.useState(s==="new"),[w,S]=d.useState(null),k=d.useRef(null);d.useEffect(()=>{(s==="new"||N)&&k.current?.focus()},[s,N]);const m=async()=>{if(f.trim()===""){c(s==="new"?"":s.name),C(!1),M(!1);return}o&&(M(!0),await o(f)),M(!1),C(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(a.Row,{onClick:()=>x(t=>!t),className:"hover:bg-token-surface-secondary cursor-pointer",children:[e.jsx(a.Cell,{children:e.jsx(de,{checked:j})}),e.jsxs(a.Cell,{children:[s==="new"||N?e.jsx(ce,{ref:k,name:"newGroupName",value:f,disabled:b,placeholder:u.formatMessage({id:"workspaceSettings.groups.groupNamePlaceholder",defaultMessage:"New group name..."}),onChange:t=>c(t.target.value),onBlur:()=>{f!==(s==="new"?"":s.name)&&m()},onPressEnter:m}):s.name,h&&s!=="new"&&s.is_scim_managed&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex-grow"}),e.jsx(be,{})]})]}),e.jsx(a.Cell,{children:e.jsx(i,{id:"workspaceSettings.groups.memberCount",defaultMessage:"{count} members",values:{count:s==="new"?"0":s.num_members}})}),e.jsx(a.Cell,{children:s==="new"||!s.created_time?"":e.jsx(ne,{value:s.created_time,year:"numeric",month:"long",day:"numeric"})}),e.jsx(a.Cell,{textAlign:"right",children:s!=="new"&&!p&&(s.is_scim_managed?e.jsx(y.Root,{children:e.jsx(y.Trigger,{disabled:!0,children:e.jsx(_,{sideOffset:0,label:u.formatMessage(U.managedViaSCIMTooltip),className:"flex",side:"right",children:e.jsx(T,{className:"icon-sm"})})})}):e.jsxs(y.Root,{children:[e.jsx(y.Trigger,{className:"-my-2",children:e.jsx(T,{className:"icon-sm"})}),e.jsx(y.Portal,{children:e.jsxs(y.Content,{children:[e.jsx(y.Item,{onClick:t=>{C(!0),setTimeout(()=>{k.current?.focus()},120),t.stopPropagation()},children:e.jsx(i,{id:"workspaceSettings.groups.changeName",defaultMessage:"Edit name"})}),e.jsx(y.Item,{onClick:t=>{S(s),t.stopPropagation()},children:e.jsx(i,{id:"workspaceSettings.groups.edit",defaultMessage:"Delete group"})})]})})]}))})]}),j&&s!=="new"&&e.jsx(a.Row,{children:e.jsx(a.Cell,{colSpan:5,className:"pl-8",children:e.jsx(Se,{group:s,workspaceId:n,readOnly:p})})}),w&&e.jsx(ve,{group:w,onDelete:g,onClose:()=>S(null)})]})}function ve({group:s,onDelete:n,onClose:o}){const p=D().formatMessage({id:"workspaceSettings.groups.deleteGroupTitle",defaultMessage:"Delete group {groupName}?"},{groupName:s.name});return e.jsx(K,{type:"warning",isOpen:!0,onClose:o,title:p,showCloseButton:!0,primaryButton:e.jsx(G,{color:"danger",onClick:async()=>{n(s.id),o()},children:e.jsx(i,{id:"workspaceSettings.groups.confirmDelete",defaultMessage:"Delete"})}),secondaryButton:e.jsx(G,{onClick:o,color:"secondary",children:e.jsx(i,{id:"workspaceSettings.groups.cancelDelete",defaultMessage:"Cancel"})}),children:e.jsx("p",{children:e.jsx(i,{id:"workspaceSettings.groups.deleteGroupWarning",defaultMessage:'Are you sure you want to delete the "{groupName}" group? This action cannot be undone.',values:{groupName:s.name}})})})}const I=ie({title:{id:"admin.groupsSettings.title",defaultMessage:"Groups"}});function Le(){const s=he();return e.jsx(Ce,{...s})}export{Le as default};
//# sourceMappingURL=mxadih61j4gzwycp.js.map