const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/h3k3vrkhltu2265z.js","assets/byjsl6fmrkvfkikz.js","assets/mkdzigrfhg3ljd4p.js","assets/root-jo8sfy59.css"])))=>i.map(i=>d[i]);
import{j as e,c as R,H as D,b3 as z,aq as U,r as u,I as W,J as $,bs as G,K as o,R as A,fo as K,a4 as se,u as X,E as J,F as P,aY as Z,co as ae,c5 as te,em as re,aN as ie,eJ as ne,N as oe}from"./byjsl6fmrkvfkikz.js";import{au as le,b9 as de,bc as B,aB as r,bd as L,l as _,bg as H,V as ce}from"./haljegjt87cup22y.js";import{A as ue}from"./bgwia6wktmljda52.js";import{g as Y,r as me,H as ge,al as T}from"./mkdzigrfhg3ljd4p.js";import{D as y}from"./flw2u9r6fdpgl554.js";import{a as pe,b as xe}from"./fpi0wbheawymyoi3.js";import{V as he}from"./d3y72ugnrmac5z1v.js";import{u as fe}from"./c2mwechksmfwnt7d.js";import"./jfudb5sncbzm3tm1.js";import"./jbdt1d85czjr39f4.js";import"./gzdwby307cq01p4d.js";import"./c5t9jayedjb4qxry.js";import"./k9y60274mtouqpk6.js";import"./g9imwwsgx97bm1kq.js";import"./g7xfk6lc3rb5gpp4.js";import"./f3plzi4ukb47qkp1.js";import"./hcf5gao25g1fhies.js";import"./hmxiov2ajbrcyny9.js";import"./gnjsr8ecejxnbwh9.js";import"./j2utxaosc39xc7qz.js";import"./du1hyg7yhpjt0mt9.js";import"./jvvtm5hg0jnmck7e.js";import"./fo30bw8ruxrh2nda.js";function ee({className:s,inputClassName:i,value:l,onChange:m,placeholder:x}){return e.jsxs("div",{className:R("relative",s),children:[e.jsx(Y,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),e.jsx("input",{type:"text",value:l,onChange:m,placeholder:x,className:R("rounded-lg border border-gray-200 pl-8 placeholder:text-gray-500 dark:border-gray-600 dark:bg-gray-700",i),autoComplete:"off"})]})}const Q=1e3;function je({group:s,isOpen:i,onClose:l}){const m=D(),x=z(),d=m.formatMessage({id:"workspaceSettings.groups.addMember",defaultMessage:"Add members to the {groupName} group"},{groupName:s.name}),p=U(),[j,h]=u.useState([]),[f,c]=u.useState(!1);async function w(){const M=p==null?void 0:p.getWorkspaceId();if(!M)throw new Error("No workspace ID found");c(!0);const N=await A.bulkAddWorkspaceGroupUsers(M,s.id,j);x.success(m.formatMessage({id:"yU4Zf0",defaultMessage:"Added {numUsers} users to the group"},{numUsers:N.added_group_users.length})),l==null||l(),c(!1)}return e.jsxs(W,{isOpen:i,onClose:l??$,title:d,type:"success",showCloseButton:!0,primaryButton:e.jsx(G,{onClick:w,disabled:j.length===0||j.length>Q,loading:f,children:e.jsx(o,{id:"EpbOzA",defaultMessage:"Add users to group"})}),children:[e.jsx(ye,{onChange:h}),j.length>Q&&e.jsx("div",{className:"mt-2 text-sm text-token-text-error",children:e.jsx(o,{id:"9lp0Tc",defaultMessage:"Email list is limited to {maxEmails} users at once",values:{maxEmails:Q}})})]})}function ye({onChange:s}){const[i,l]=u.useState("");return e.jsxs("div",{className:"flex flex-col space-y-4",children:[e.jsxs("label",{htmlFor:"group-email-paste",children:[e.jsx(o,{id:"qvGcSC",defaultMessage:"Emails"}),e.jsx("br",{}),e.jsx("span",{className:"text-sm text-token-text-tertiary",children:e.jsx(o,{id:"Fhd+5h",defaultMessage:"Paste email addresses here, one per line:"})})]}),e.jsx(le,{id:"group-email-paste",className:"h-[250px] text-sm",value:i,onChange:m=>{l(m.target.value),s(Me(m.target.value))},placeholder:`jean@example.com
joohyun@example.com
muhammed@example.com
susan@example.com`})]})}function Me(s){return s.split(`
`).map(i=>i.trim()).filter(i=>i.length>0).filter(i=>he.test(i))}function we({group:s,isOpen:i,onClose:l}){const x=D().formatMessage({id:"workspaceSettings.groups.addMember",defaultMessage:"Add members to the {groupName} group"},{groupName:s.name}),d=U(),p=d==null?void 0:d.getWorkspaceId(),[j,h]=u.useState(""),[f,c]=u.useState(0),{data:w}=de(p,f*B,j,B,K),[M,N]=u.useState([]),[C,S]=u.useState([]),[b,k]=u.useState("interactive"),g=w?Math.ceil(w.total??0/B):0;async function a(t){S(n=>[...n,t]);try{await Se(p,s.id,t),N(n=>[...n,t])}catch(n){se.addError(n)}finally{S(n=>n.filter(v=>v!==t))}}return b==="batch"?e.jsx(je,{group:s,isOpen:i,onClose:l}):e.jsx(W,{type:"warning",isOpen:i,onClose:l??$,title:x,size:"custom",className:"max-w-screen-md",showCloseButton:!0,primaryButton:e.jsx(G,{onClick:l,children:e.jsx(o,{id:"0NAzDq",defaultMessage:"Done"})}),children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex flex-row justify-between",children:[e.jsx("p",{children:x}),e.jsx(G,{onClick:()=>{k("batch")},color:"secondary",children:e.jsx(o,{id:"5GPldp",defaultMessage:"Bulk add users"})})]}),e.jsx(ee,{value:j,inputClassName:"w-full",onChange:t=>{h(t.target.value)}}),e.jsxs(r.Root,{className:"min-w-full",children:[e.jsxs(r.Header,{children:[e.jsx(r.HeaderCell,{children:e.jsx(o,{id:"workspaceSettings.groups.addMember.name",defaultMessage:"Name"})}),e.jsx(r.HeaderCell,{children:e.jsx(o,{id:"workspaceSettings.groups.addMember.email",defaultMessage:"Email"})}),e.jsx(r.HeaderCell,{})]}),e.jsx(r.Body,{children:w==null?void 0:w.items.map(t=>e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:t.name}),e.jsx(r.Cell,{children:t.email}),e.jsx(r.Cell,{textAlign:"right",className:"pr-1",children:e.jsx(G,{size:"small",color:"secondary",disabled:C.includes(t.id),onClick:()=>{M.includes(t.id)||a(t.id)},icon:M.includes(t.id)?me:ge,children:M.includes(t.id)?e.jsx(o,{id:"workspaceSettings.groups.addMember.addButton",defaultMessage:"Added"}):e.jsx(o,{id:"workspaceSettings.groups.addMember.addedButton",defaultMessage:"Add"})})})]},t.id))})]}),e.jsx("div",{className:"flex flex-row justify-center",children:e.jsx(L,{currentPage:f,onChangeIndex:t=>{c(t)},length:g})})]})})}async function Se(s,i,l){await A.addWorkspaceGroupUser(s,i,l)}const O=10;function be({workspaceId:s,group:i,readOnly:l}){const m=D(),[x,d]=u.useState(!1),[p,j]=u.useState(""),[h,f]=u.useState(0),{data:c,isLoading:w,isPlaceholderData:M}=X({queryKey:[s,"groups",i.id,p,`members-page-${h}`],queryFn:()=>A.listWorkspaceGroupMembers(s,i.id,p,h*O),placeholderData:K}),[N,C]=u.useState(!1),S=u.useRef(null),b=J();u.useEffect(()=>{x&&S.current&&S.current.focus()},[x]);const{mutateAsync:k}=P({mutationFn:async g=>await A.removeWorkspaceGroupMember(s,i.id,g),onMutate:g=>{b.cancelQueries({queryKey:[s,"groups",i.id]});const a=c;return b.setQueryData([s,"groups",i.id,p,`members-page-${h}`],t=>t?{...t,items:t.items.filter(n=>n.id!==g),total:t.total-1}:{limit:10,offset:0,items:[],total:0}),{previousData:a}},onError:(g,a,t)=>{b.setQueryData([s,"groups",i.id,`members-page-${h}`],t==null?void 0:t.previousData),b.invalidateQueries({queryKey:[s,"groups",i.id]})},onSettled:async()=>{await new Promise(g=>setTimeout(g,1e3)),b.invalidateQueries({queryKey:[s,"groups"]})}});return e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsxs("div",{className:"flex flex-row items-center",children:[e.jsx("div",{className:"border-token-border-dark mt-3 inline-block h-8 grow-0 border-b-2 text-sm font-semibold",children:e.jsx(o,{id:"workspaceSettings.groups.membersTableTitle",defaultMessage:"Group members"})}),e.jsx("div",{className:"grow"}),e.jsx(_,{label:m.formatMessage({id:"workspaceSettings.groups.searchButtonTooltip",defaultMessage:"Search members"}),children:e.jsx("div",{className:"cursor-pointer p-2",onClick:()=>{d(!0)},children:e.jsx(Y,{className:"icon-sm"})})}),e.jsx("input",{type:"text",ref:S,placeholder:m.formatMessage({id:"workspaceSettings.groups.searchMembers",defaultMessage:"Filter by name or email..."}),className:R("bg-token-surface-primary dark:bg-token-surface-secondary border-none px-0 transition-width duration-300 ease-in-out focus:ring-0",x?"w-64":"w-0"),value:p,onChange:()=>{var g;f(0),j(((g=S.current)==null?void 0:g.value)??"")}})]}),e.jsxs(r.Root,{className:"min-w-full",children:[e.jsxs(r.Header,{children:[e.jsx(r.HeaderCell,{children:e.jsx(o,{id:"workspaceSettings.groups.memberName",defaultMessage:"Name"})}),e.jsx(r.HeaderCell,{children:e.jsx(o,{id:"workspaceSettings.groups.email",defaultMessage:"Email"})}),e.jsx(r.HeaderCell,{})]}),e.jsx(r.Body,{className:w||M?"opacity-50":void 0,children:c==null?e.jsx(r.Row,{children:e.jsx(r.Cell,{colSpan:3,children:e.jsx(Z,{})})}):c.items.length===0?e.jsx(r.Row,{children:e.jsx(r.Cell,{colSpan:3,children:p===""?e.jsx(o,{id:"workspaceSettings.groups.noMembers",defaultMessage:"No members"}):e.jsx(o,{id:"workspaceSettings.groups.noMembersForSearch",defaultMessage:"No members matched the filter"})})}):c.items.map(g=>e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:e.jsx("span",{className:"ml-3",children:g.name})}),e.jsx(r.Cell,{children:g.email}),e.jsx(r.Cell,{textAlign:"right",children:!l&&(i.is_scim_managed?e.jsx(y.Root,{children:e.jsx(y.Trigger,{disabled:!0,children:e.jsx(_,{sideOffset:0,label:m.formatMessage(H.managedViaSCIMTooltip),className:"flex",side:"right",children:e.jsx(T,{className:"icon-sm"})})})}):e.jsxs(y.Root,{children:[e.jsx(y.Trigger,{className:"-my-2",children:e.jsx(T,{className:"icon-sm"})}),e.jsx(y.Portal,{children:e.jsx(y.Content,{children:e.jsx(y.Item,{onClick:()=>k(g.id),children:e.jsx(o,{id:"workspaceSettings.groups.removeMember",defaultMessage:"Remove member"})})})})]}))})]},g.id))})]}),e.jsxs("div",{className:"my-2 flex flex-row justify-center",children:[!l&&!i.is_scim_managed&&e.jsx(G,{color:"secondary",onClick:()=>C(!0),children:e.jsx(o,{id:"workspaceSettings.groups.addMemberButton",defaultMessage:"Add member"})}),!l&&i.is_scim_managed&&e.jsx(_,{label:m.formatMessage(H.managedViaSCIMTooltip),side:"right",sideOffset:0,children:e.jsx(G,{color:"secondary",disabled:!0,children:e.jsx(o,{id:"workspaceSettings.groups.addMemberButton",defaultMessage:"Add member"})})}),e.jsx("div",{className:"grow"}),c&&c.items.length>0&&e.jsx(L,{currentPage:h,onChangeIndex:g=>{f(g)},length:Math.ceil(c.total/O)})]}),N&&e.jsx(we,{isOpen:!0,onClose:()=>{b.invalidateQueries({queryKey:[s,"groups"]}),C(!1)},group:i})]})}const Ne=ae(()=>te(()=>import("./h3k3vrkhltu2265z.js"),__vite__mapDeps([0,1,2,3])).then(s=>s.DirectorySyncResourceManagedIndication)),F=10;function Ce({workspaceId:s}){const i=D(),l=z(),m=U(),x=!(m!=null&&m.isAdminOfAccount()||m!=null&&m.isOwnerOfAccount()),d=J(),[p,j]=u.useState(""),[h,f]=u.useState(0),{data:c,isLoading:w,isPlaceholderData:M}=X({queryKey:p===""?[s,"groups",`page-${h}`]:[s,"groups","filtered",p,`page-${h}`],queryFn:()=>A.getWorkspaceGroups(s,{query:p,offset:h*F}),placeholderData:K}),[N,C]=u.useState(!1),S=a=>{a&&(f(0),j("")),C(a)},{mutateAsync:b}=P({mutationFn:async({workspaceId:a,name:t})=>await A.createWorkspaceGroup(a,t),onMutate:({workspaceId:a,name:t})=>{d.cancelQueries({queryKey:[a,"groups"]});const n=c;return d.setQueryData([a,"groups","page-0"],v=>(v||(v={limit:10,offset:0,items:[],total:0}),{...v,items:[{id:"new",name:t,num_members:0,created_time:""},...v.items.slice(0,9)]})),{previousGroups:n}},onError:(a,t,n)=>{d.setQueryData([s,"groups","page-0"],n==null?void 0:n.previousGroups),d.invalidateQueries({queryKey:[s,"groups"]}),a.message==="Group with this name already exists."&&l.warning(i.formatMessage({id:"workspaceSettings.groups.duplicateName",defaultMessage:"Group with this name already exists"}),{duration:2})},onSettled:async()=>{await new Promise(a=>setTimeout(a,1e3)),d.invalidateQueries({queryKey:[s,"groups"]})}}),{mutateAsync:k}=P({mutationFn:async a=>await A.deleteWorkspaceGroup(s,a),onMutate:a=>{d.cancelQueries({queryKey:[s,"groups","page-0"]});const t=c;return d.setQueryData([s,"groups","page-0"],n=>(n||(n={items:[]}),{...n,items:n.items.filter(v=>v.id!==a)})),{previousGroups:t}},onError:(a,t,n)=>{d.setQueryData([s,"groups","page-0"],n==null?void 0:n.previousGroups),d.invalidateQueries({queryKey:[s,"groups"]})},onSettled:async()=>{await new Promise(a=>setTimeout(a,1e3)),d.invalidateQueries({queryKey:[s,"groups"]})}}),{mutateAsync:g}=P({mutationFn:async({workspaceId:a,groupID:t,name:n})=>await A.updateWorkspaceGroup(a,t,n),onMutate:({workspaceId:a,groupID:t,name:n})=>{const v=d.getQueryData([a,"groups",`page-${h}`]);return d.setQueryData([a,"groups",`page-${h}`],E=>(E||(E={items:[]}),{...E,items:E.items.map(q=>q.id===t?{...q,name:n}:q)})),{previousGroups:v}},onError:(a,t,n)=>{d.setQueryData([t,"groups",`page-${h}`],n==null?void 0:n.previousGroups),a.message==="Group with this name already exists."&&l.warning(i.formatMessage({id:"workspaceSettings.groups.duplicateName",defaultMessage:"Group with this name already exists"}),{duration:2})},onSettled:async()=>{await new Promise(a=>setTimeout(a,1e3)),d.invalidateQueries({queryKey:[s,"groups"]})}});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-3 mt-6 flex flex-row justify-between gap-2",children:[e.jsx(ee,{inputClassName:"w-[250px]",value:p,onChange:a=>{j(a.target.value),f(0)},placeholder:i.formatMessage({id:"workspaceSettings.groups.search",defaultMessage:"Search group name"})}),!x&&e.jsx(G,{onClick:()=>S(!0),children:e.jsx(o,{id:"workspaceSettings.groups.create",defaultMessage:"Create group"})})]}),e.jsxs("div",{children:[e.jsxs(r.Root,{className:"min-w-full",children:[e.jsxs(r.Header,{children:[e.jsx(r.HeaderCell,{}),e.jsx(r.HeaderCell,{children:e.jsx(o,{id:"workspaceSettings.groups.groupName",defaultMessage:"Group name"})}),e.jsx(r.HeaderCell,{children:e.jsx(o,{id:"workspaceSettings.groups.members",defaultMessage:"Members"})}),e.jsx(r.HeaderCell,{children:e.jsx(o,{id:"workspaceSettings.groups.created",defaultMessage:"Created"})}),e.jsx(r.HeaderCell,{})]}),e.jsxs(r.Body,{className:R((w||M)&&"opacity-50"),children:[N&&e.jsx(I,{group:"new",workspaceId:s,onChangeName:async a=>{a.trim()!==""&&(b({workspaceId:s,name:a}),S(!1))},onDelete:()=>null,readOnly:x}),c==null?e.jsx(r.Row,{children:e.jsx(r.Cell,{colSpan:5,textAlign:"center",children:e.jsx(Z,{})})}):c.items.length===0?e.jsx(r.Row,{children:e.jsx(r.Cell,{colSpan:5,textAlign:"center",children:p===""?e.jsx(o,{id:"workspaceSettings.groups.noGroups",defaultMessage:"No groups found."}):e.jsx(o,{id:"workspaceSettings.groups.noGroupsWithFIlter",defaultMessage:"No groups found. Try changing the search query."})})}):c.items.map(a=>e.jsx(I,{group:a,workspaceId:s,onDelete:k,onChangeName:async t=>{g({workspaceId:s,groupID:a.id,name:t})},readOnly:x},a.id))]})]}),c&&e.jsx("div",{className:"text-center",children:e.jsx(L,{length:Math.ceil(c.total/F),currentPage:Math.min(h,Math.ceil(c.total/F)),onChangeIndex:a=>f(a)})})]})]})}function ve({currentWorkspaceId:s}){const i=D();return e.jsxs(e.Fragment,{children:[e.jsx(re,{children:e.jsx("title",{children:i.formatMessage(V.title)})}),e.jsx(pe,{title:i.formatMessage(V.title),subtitle:e.jsx(o,{id:"NDDzzF",defaultMessage:"Only workspace admins can edit these settings."})}),e.jsx(xe,{showSpinner:!1,children:e.jsx(Ce,{workspaceId:s})})]})}function I({group:s,workspaceId:i,onChangeName:l,onDelete:m,readOnly:x}){const d=D(),{value:p}=ie("2091463435"),[j,h]=u.useState(!1),[f,c]=u.useState(s==="new"?"":s.name),[w,M]=u.useState(!1),[N,C]=u.useState(s==="new"),[S,b]=u.useState(null),k=u.useRef(null);u.useEffect(()=>{var a;(s==="new"||N)&&((a=k.current)==null||a.focus())},[s,N]);const g=async()=>{if(f.trim()===""){c(s==="new"?"":s.name),C(!1),M(!1);return}l&&(M(!0),await l(f)),M(!1),C(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(r.Row,{onClick:()=>h(a=>!a),className:"hover:bg-token-surface-secondary cursor-pointer",children:[e.jsx(r.Cell,{children:e.jsx(ue,{checked:j})}),e.jsxs(r.Cell,{children:[s==="new"||N?e.jsx(ce,{ref:k,name:"newGroupName",value:f,disabled:w,placeholder:d.formatMessage({id:"workspaceSettings.groups.groupNamePlaceholder",defaultMessage:"New group name..."}),onChange:a=>c(a.target.value),onBlur:()=>{f!==(s==="new"?"":s.name)&&g()},onPressEnter:g}):s.name,p&&s!=="new"&&s.is_scim_managed&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex-grow"}),e.jsx(Ne,{})]})]}),e.jsx(r.Cell,{children:e.jsx(o,{id:"workspaceSettings.groups.memberCount",defaultMessage:"{count} members",values:{count:s==="new"?"0":s.num_members}})}),e.jsx(r.Cell,{children:s==="new"||!s.created_time?"":e.jsx(ne,{value:s.created_time,year:"numeric",month:"long",day:"numeric"})}),e.jsx(r.Cell,{textAlign:"right",children:s!=="new"&&!x&&(s.is_scim_managed?e.jsx(y.Root,{children:e.jsx(y.Trigger,{disabled:!0,children:e.jsx(_,{sideOffset:0,label:d.formatMessage(H.managedViaSCIMTooltip),className:"flex",side:"right",children:e.jsx(T,{className:"icon-sm"})})})}):e.jsxs(y.Root,{children:[e.jsx(y.Trigger,{className:"-my-2",children:e.jsx(T,{className:"icon-sm"})}),e.jsx(y.Portal,{children:e.jsxs(y.Content,{children:[e.jsx(y.Item,{onClick:a=>{C(!0),setTimeout(()=>{var t;(t=k.current)==null||t.focus()},120),a.stopPropagation()},children:e.jsx(o,{id:"workspaceSettings.groups.changeName",defaultMessage:"Edit name"})}),e.jsx(y.Item,{onClick:a=>{b(s),a.stopPropagation()},children:e.jsx(o,{id:"workspaceSettings.groups.edit",defaultMessage:"Delete group"})})]})})]}))})]}),j&&s!=="new"&&e.jsx(r.Row,{children:e.jsx(r.Cell,{colSpan:5,className:"pl-8",children:e.jsx(be,{group:s,workspaceId:i,readOnly:x})})}),S&&e.jsx(ke,{group:S,onDelete:m,onClose:()=>b(null)})]})}function ke({group:s,onDelete:i,onClose:l}){const x=D().formatMessage({id:"workspaceSettings.groups.deleteGroupTitle",defaultMessage:"Delete group {groupName}?"},{groupName:s.name});return e.jsx(W,{type:"warning",isOpen:!0,onClose:l,title:x,showCloseButton:!0,primaryButton:e.jsx(G,{color:"danger",onClick:async()=>{i(s.id),l()},children:e.jsx(o,{id:"workspaceSettings.groups.confirmDelete",defaultMessage:"Delete"})}),secondaryButton:e.jsx(G,{onClick:l,color:"secondary",children:e.jsx(o,{id:"workspaceSettings.groups.cancelDelete",defaultMessage:"Cancel"})}),children:e.jsx("p",{children:e.jsx(o,{id:"workspaceSettings.groups.deleteGroupWarning",defaultMessage:'Are you sure you want to delete the "{groupName}" group? This action cannot be undone.',values:{groupName:s.name}})})})}const V=oe({title:{id:"admin.groupsSettings.title",defaultMessage:"Groups"}});function Je(){const s=fe();return e.jsx(ve,{...s})}export{Je as default};
//# sourceMappingURL=i171aq8051zsb3zw.js.map