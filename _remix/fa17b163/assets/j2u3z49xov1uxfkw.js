import{r as M,x as e,a2 as B,Y as _,aa as oe,ah as O,u as R,h as P,W as I,a7 as W,f7 as se,f8 as Q,br as X,aw as E,as as K,N as ee}from"./n9i5979j4rnvjtg4.js";import{a as ne,b as ie,u as le,e as ce}from"./dhgz1pra90l1frm7.js";import{a as de,d as L,e as H,f as U,A as ue}from"./gmqpg66rw2scv4dg.js";import{ae as me,ac as xe,O as fe,I as te,t as ge,bn as pe}from"./erolq9m59eq2hlvo.js";import{S as p}from"./m8sigk8gnuw1np39.js";import{a as Y,G as g,U as y}from"./msgiedj1zhihgpy8.js";import{O as h,ar as Me,i as he}from"./dnf4yeosbs16q88y.js";import{D as T}from"./lznuzhfjvc4vs7ix.js";import"./ht5an742zlxed2m3.js";import"./ekxnzfbakj51krn0.js";import"./669zjrbp5t02fmis.js";import"./fnlzay3yoj9yi85z.js";import"./cw1qc6unlw2poqfl.js";import"./g2o92tss91isej6l.js";import"./l0dnh7x6mesx7kjk.js";import"./d9ga9wc5flq8xojm.js";import"./b9zxp84okr055gxy.js";import"./ng4v5cnp8pd3z64f.js";import"./op9oetfxh46bt7rc.js";import"./dkfmdm3k40qbltwv.js";import"./ln1rod30via34cue.js";import"./d1bwoyaxdwii6dl9.js";import"./jin0lgt0nlk1us27.js";import"./eulx31zwcgpqoy6g.js";const z={NAME_KEYWORD:"Name keyword",NAME_SUBSTRING:"Name substring"},N={USERS:"User",GROUPS:"Group",SHARED_DRIVE:"Shared drive",...z},ye={ALL:"All exclusion types",...z},$={ALL:"All exclusion types",...N};var Z=(s=>(s.EXCLUDE="exclude",s.INCLUDE="include",s))(Z||{});const je=[["sensitive_object_name_keywords",N.NAME_KEYWORD],["sensitive_object_name_substrings",N.NAME_SUBSTRING],["sensitive_users",N.USERS],["sensitive_groups",N.GROUPS],["sensitive_shared_drive_ids",N.SHARED_DRIVE]],ae={},J={};je.forEach(([s,t])=>{ae[s]=t,J[t]=s});function Ce(s){const t=[];for(const[r,o]of Object.entries(s))for(const[n,a]of Object.entries(o)){const c=ae[n];if(c){if(Array.isArray(a))a.forEach((x,f)=>{t.push({id:`${r}_${n}_${f}`,lastModifiedTime:o.last_modified_time,name:x,exclusionType:c,parentId:r,parentType:o.type})});else if(typeof a=="object"&&a!=null)for(const x of Object.keys(a))t.push({id:`${r}_${n}_${x}`,lastModifiedTime:o.last_modified_time,name:x,exclusionType:c,parentId:r,parentType:o.type})}}return t}function be(s){return Object.values(s)[0]?.last_modified_time}function Ee(s){return Object.keys(s)[0]}function Se(s){return!!Object.values(s)[0]?.is_oauth}function ve(s){return Object.values(s)[0]?.default_shared_drive_exclusion_selection??null}const q=10;function De({rowData:s,filterInputValue:t,filterType:r,workspaceId:o}){const[n,a]=M.useState(0);M.useEffect(()=>{a(0)},[t,r]);const c=s.filter(d=>d.name.toLowerCase().includes(t.toLowerCase())&&(r===$.ALL||d.exclusionType.toLowerCase()===r.toLowerCase())),x=c.slice(n*q,(n+1)*q),f=Math.ceil(c.length/q);return e.jsxs("div",{className:"mb-6",children:[e.jsxs(h.Root,{fixed:!0,size:"normal",children:[e.jsxs(h.Header,{children:[e.jsx(h.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(B,{...A.name})}),e.jsx(h.HeaderCell,{className:"w-40 bg-token-main-surface-primary",children:e.jsx(B,{...A.type})}),e.jsx(h.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),e.jsxs(h.Body,{children:[x.map(d=>e.jsx(Ne,{config:d,workspaceId:o},d.id)),x.length===0&&e.jsx(h.Row,{children:e.jsx(h.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(B,{...A.noResults})})})})]})]}),f>1&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx(Me,{currentPage:n,onChangeIndex:a,length:f})})]})}function Ne({config:s,workspaceId:t}){const r=_(),o=oe(),n=O(),a=R(),c=P({mutationFn:f=>{const d={store_id:f.storeId,operations:f.operations,last_modified_time:f.lastModifiedTime};return I.updateKnowledgeStoreExclusionConfig(d,f.accountId)},onSuccess:()=>{a.invalidateQueries({queryKey:["listExclusionConfigs",t]}),o.success(r.formatMessage(A.deleteConfigSuccessMessage),{duration:3})},onError:()=>{o.danger(r.formatMessage(A.deleteConfigGenericErrorMessage),{duration:3})}}),x=()=>{if(!s.parentId){o.danger(r.formatMessage(A.deleteConfigGenericErrorMessage),{duration:3});return}if(!n){o.danger(r.formatMessage(A.deleteConfigGenericErrorMessage),{duration:3});return}const f={action:se.REMOVE,field:J[s.exclusionType],value:s.name};c.mutate({storeId:s.parentId,operations:[f],lastModifiedTime:s.lastModifiedTime,accountId:n.id})};return e.jsxs(h.Row,{children:[e.jsx(h.Cell,{className:"whitespace-normal break-all",children:e.jsx("span",{children:s.name})}),e.jsx(h.Cell,{className:"whitespace-nowrap",children:e.jsx("span",{children:s.exclusionType})}),e.jsx(h.Cell,{children:e.jsx(Ae,{onDelete:x})})]})}function Ae({onDelete:s}){return e.jsxs(T.Root,{children:[e.jsx(T.Trigger,{children:e.jsx(me,{className:"icon-sm cursor-pointer"})}),e.jsx(T.Portal,{children:e.jsx(T.Content,{children:e.jsx(T.Item,{className:"cursor-pointer",onClick:s,children:e.jsx(B,{...A.deleteConfig})})})})]})}const A=W({name:{id:"B+5Xa5",defaultMessage:"Name"},type:{id:"DY07PN",defaultMessage:"Type"},deleteConfig:{id:"fB8e41",defaultMessage:"Delete config"},noResults:{id:"x1Ejc3",defaultMessage:"No results"},deleteConfigSuccessMessage:{id:"d60LPO",defaultMessage:"Exclusion deleted successfully."},deleteConfigGenericErrorMessage:{id:"pOww+E",defaultMessage:"Error deleting exclusion."}});function we(){const s=Y(g.AddServiceAccountKey),t=_(),r=O(),o=R(),[n,a]=M.useState(""),[c,x]=M.useState(null),[f,d]=M.useState(null),v=P({mutationFn:async u=>{const k={secret:await ke(u.keyFile),admin_email:n,secret_type:Q.GOOGLE_DRIVE_DWD};return I.createSecretForWorkspace(k,u.accountId)},onSuccess:()=>{o.invalidateQueries({queryKey:["secretExistsForWorkspace",r?.id]}),a(""),x(null),y.closeModal(g.AddServiceAccountKey)},onError:()=>{d(m.creationModalGenericErrorMessage)}}),S=()=>{if(!n||!c){d(m.creationModalValueErrorMessage);return}if(!r){d(m.creationModalGenericErrorMessage);return}d(null),v.mutate({email:n,keyFile:c,accountId:r.id})},j=u=>{u.target.files&&u.target.files[0]&&x(u.target.files[0])};return e.jsx(X,{size:"custom",className:"max-w-lg overflow-y-auto text-base",isOpen:s,onClose:()=>{y.closeModal(g.AddServiceAccountKey),d(null),a(""),x(null)},showCloseButton:!0,type:"success",title:t.formatMessage(m.serviceAccountModalTitle),description:"",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"pb-2 text-base",children:t.formatMessage(m.emailLabel)}),e.jsx("input",{type:"email",value:n,onChange:u=>a(u.target.value),placeholder:t.formatMessage(m.emailPlaceholder),className:"mb-4 rounded-lg border border-token-border-light bg-token-main-surface-primary px-3 py-2 text-base placeholder:text-token-text-tertiary"}),e.jsx("label",{className:"pb-2 text-base",children:t.formatMessage(m.keyFileLabel)}),e.jsx("input",{type:"file",accept:".json",onChange:j,className:"mb-4 rounded-lg border border-token-border-light bg-token-main-surface-primary px-3 py-2 text-base"}),c&&e.jsx("p",{className:"text-sm text-token-text-secondary",children:t.formatMessage(m.selectedFile,{fileName:c.name})}),f&&e.jsx("p",{className:"mt-4 text-sm text-red-500",children:t.formatMessage(f)}),e.jsxs("div",{className:"flex justify-end space-x-4",children:[e.jsx(E,{className:"mt-6 w-full max-w-[92px] rounded-lg border text-base",color:"secondary",onClick:()=>{y.closeModal(g.AddServiceAccountKey),d(null),a(""),x(null)},children:t.formatMessage(m.creationModalCancelButton)}),e.jsx(E,{className:"mt-6 w-full max-w-[92px] rounded-lg border text-base",color:"primary",onClick:S,disabled:v.status==="pending",children:v.status==="pending"?e.jsx(K,{}):t.formatMessage(m.creationModalCreateButton)})]})]})})}function ke(s){return new Promise((t,r)=>{const o=new FileReader;o.onload=n=>{n.target&&typeof n.target.result=="string"?t(n.target.result):r(new Error("Error reading file."))},o.onerror=()=>{r(new Error("Error reading the file."))},o.readAsText(s)})}function Ie(){const s=Y(g.DeleteServiceAccountKey),t=_(),r=O(),o=R(),[n,a]=M.useState(null),c=P({mutationFn:()=>r?I.deleteSecretForWorkspace(Q.GOOGLE_DRIVE_DWD,r.id):Promise.reject(new Error("No current account")),onSuccess:()=>{o.invalidateQueries({queryKey:["secretExistsForWorkspace",r?.id]}),y.closeModal(g.DeleteServiceAccountKey)},onError:()=>{a(m.genericErrorMessage)}});return e.jsxs(X,{size:"custom",type:"success",className:"max-w-lg overflow-y-auto text-base",isOpen:s,onClose:()=>{y.closeModal(g.DeleteServiceAccountKey),a(null)},showCloseButton:!0,title:t.formatMessage(m.deleteModalTitle),children:[e.jsx("p",{children:t.formatMessage(m.deleteModalDescription)}),e.jsxs("div",{className:"flex justify-end space-x-4",children:[n&&e.jsx("p",{className:"mt-4 text-base text-red-500",children:t.formatMessage(n)}),e.jsx(E,{className:"mt-6 w-full max-w-[92px] rounded-lg border text-base",color:"secondary",onClick:()=>{y.closeModal(g.DeleteServiceAccountKey)},children:t.formatMessage(m.deleteModalCancelButton)}),e.jsx(E,{className:"mt-6 w-full max-w-[92px] rounded-lg border text-base",color:"primary",onClick:()=>c.mutate(),disabled:c.status==="pending",children:c.status==="pending"?e.jsx(K,{}):t.formatMessage(m.deleteModalDeleteButton)})]})]})}const _e=({isSecretLoading:s,isSecretError:t,secretExistData:r})=>{const o=_();return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"inline-flex items-center text-base",children:o.formatMessage(m.googleDriveDWDSectionHeader)}),s?e.jsx(K,{}):t?e.jsx("p",{className:"text-red-500",children:o.formatMessage(m.genericErrorMessage)}):r&&r.has_secret?e.jsxs("div",{className:"flex items-center",children:[e.jsx(xe,{className:"mr-2 text-green-500"}),e.jsx(E,{className:"max-w-[100px] rounded-lg border text-base",color:"secondary",icon:fe,onClick:()=>{y.openModal(g.DeleteServiceAccountKey)},children:o.formatMessage(m.deleteServiceAccountKeyButton)})]}):e.jsx(E,{className:"max-w-[192px] rounded-lg border text-base",color:"primary",icon:te,onClick:()=>{y.openModal(g.AddServiceAccountKey)},children:o.formatMessage(m.addServiceAccountKeyButton)})]})},m=W({serviceAccountModalTitle:{id:"ri0otc",defaultMessage:"Service account config"},googleDriveDWDSectionHeader:{id:"pIbDsS",defaultMessage:"Google Drive"},addServiceAccountKeyButton:{id:"dEHoaF",defaultMessage:"Service account"},deleteServiceAccountKeyButton:{id:"n4njrg",defaultMessage:"Delete"},deleteModalTitle:{id:"nhz40y",defaultMessage:"Delete service account"},deleteModalDescription:{id:"cWxpDi",defaultMessage:"Are you sure you want to delete the service account?"},deleteModalCancelButton:{id:"ZXiXY2",defaultMessage:"Cancel"},deleteModalDeleteButton:{id:"6i1l4W",defaultMessage:"Delete"},emailLabel:{id:"O9fBv1",defaultMessage:"Admin email"},emailPlaceholder:{id:"Y32reR",defaultMessage:"Enter admin email"},keyFileLabel:{id:"U2yeNU",defaultMessage:"Service account key"},selectedFile:{id:"8/rZrp",defaultMessage:"Selected file: {fileName}"},creationModalCreateButton:{id:"bCzjac",defaultMessage:"Create"},creationModalCancelButton:{id:"kUO70c",defaultMessage:"Cancel"},creationModalGenericErrorMessage:{id:"l2SCVt",defaultMessage:"Error when saving config."},genericErrorMessage:{id:"nKlawS",defaultMessage:"Error"},creationModalValueErrorMessage:{id:"B1fdKK",defaultMessage:"Please enter all required fields."}});function Te({currentWorkspaceId:s}){const t=_(),r=O(),[o,n]=M.useState(""),{data:a}=ee({queryKey:["listExclusionConfigs",s],queryFn:()=>I.listExclusionConfigs(s)}),{data:c,isLoading:x,isError:f}=ee({queryKey:["secretExistsForWorkspace",r?.id],queryFn:()=>r?I.secretExistForWorkspace(Q.GOOGLE_DRIVE_DWD,r.id):Promise.reject(new Error("No current account")),enabled:!!r}),d=a?Ce(a):[],v=a?Ee(a):null,S=a?be(a):null,j=a?Se(a):!1,u=a?ve(a):null,[w,k]=M.useState($.ALL),[C,V]=M.useState(""),F=M.useCallback(he(D=>{V(D)},250),[]);return e.jsxs(e.Fragment,{children:[e.jsx(ne,{title:t.formatMessage(i.title)}),e.jsx(ie,{children:e.jsxs(de,{className:"mt-6 gap-6",children:[e.jsxs(L,{children:[e.jsx(H,{children:t.formatMessage(i.serviceAccountSectionHeader)}),e.jsx(U,{className:"text-[var(--Primary-Gray-600,_#565869)]",children:t.formatMessage(i.serviceAccountConfigSectionDescription)}),e.jsx(ue,{children:e.jsx(_e,{isSecretLoading:x,isSecretError:f,secretExistData:c})})]}),!j&&u&&e.jsxs(L,{children:[e.jsx(H,{children:t.formatMessage(i.sharedDriveSectionHeader)}),e.jsx(U,{className:"text-token-text-secondary",children:u===Z.INCLUDE?t.formatMessage(i.sharedDriveInclusionDefaultSubtitle):t.formatMessage(i.sharedDriveExclusionDefaultSubtitle)})]}),e.jsxs(L,{children:[e.jsx(H,{children:t.formatMessage(i.exclusionsSectionHeader)}),e.jsx(U,{className:"text-[var(--Primary-Gray-600,_#565869)]",children:t.formatMessage(i.exclusionsSectionDescription)})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"relative",children:[e.jsx(ge,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),e.jsx("input",{type:"text",value:o,onChange:D=>{n(D.target.value),F(D.target.value)},placeholder:t.formatMessage(i.search),className:"w-48 rounded-lg border border-token-border-light bg-token-main-surface-primary pl-8 text-base placeholder:text-token-text-tertiary"})]}),e.jsx(Oe,{filterType:w,setFilterType:k,isOAuth:j})]}),e.jsx(E,{className:"max-w-[192px] rounded-lg border text-base",color:"primary",icon:te,onClick:()=>{y.openModal(g.CreateExclusion)},children:t.formatMessage(i.createExclusionButton)})]}),e.jsx(De,{rowData:d,filterInputValue:C,filterType:w,workspaceId:s})]})}),e.jsx(Fe,{currentWorkspaceId:s,parentId:v,lastModifiedTime:S,isOAuth:j,defaultSharedDrivePolicy:u}),e.jsx(we,{}),e.jsx(Ie,{})]})}function Oe({filterType:s,setFilterType:t,isOAuth:r}){return e.jsx("div",{className:"max-w-[208px]",children:e.jsxs(p.Root,{value:s,onValueChange:o=>t(o),disabled:!1,children:[e.jsxs(p.Trigger,{className:"rounded-lg border border-token-border-light py-5 text-base",children:[e.jsx(p.Value,{}),e.jsx(p.Icon,{})]}),e.jsx(p.Portal,{children:e.jsx(p.Content,{children:Object.entries(r?ye:$).map(([o,n])=>e.jsx(p.Item,{value:n,className:"text-base",children:n},o))})})]})})}function Fe({currentWorkspaceId:s,parentId:t,lastModifiedTime:r,isOAuth:o,defaultSharedDrivePolicy:n}){const a=_(),c=O(),x=R(),f=Y(g.CreateExclusion),[d,v]=M.useState(""),[S,j]=M.useState([]),[u,w]=M.useState(""),[k,C]=M.useState(null),V=l=>{l.key==="Enter"||l.key===","?(l.preventDefault(),u.trim()&&(j([...S,u.trim()]),w(""))):l.key==="Backspace"&&!u&&F(S.length-1)},F=l=>{j(S.filter((b,G)=>G!==l))},D=P({mutationFn:l=>{const b={store_id:l.storeId,operations:l.operations,last_modified_time:l.lastModifiedTime};return I.updateKnowledgeStoreExclusionConfig(b,l.accountId)},onSuccess:()=>{x.invalidateQueries({queryKey:["listExclusionConfigs",s]}),j([]),v(""),w(""),y.closeModal(g.CreateExclusion)},onError:()=>{C(i.creationModalGenericErrorMessage)}}),re=()=>{const l=[...S];if(u.trim()&&l.push(u.trim()),!t){C(i.creationModalGenericErrorMessage);return}if(!c){C(i.creationModalGenericErrorMessage);return}if(!d){C(i.creationModalValueErrorMessage);return}if(l.length===0){C(i.creationModalValueErrorMessage);return}C(null);const b=l.map(G=>({action:se.ADD,field:J[d],value:G}));D.mutate({storeId:t,operations:b,lastModifiedTime:r,accountId:c.id})};return e.jsx(X,{size:"custom",className:"max-w-lg overflow-y-auto text-base",isOpen:f,onClose:()=>{y.closeModal(g.CreateExclusion),C(null),j([])},showCloseButton:!0,type:"success",title:a.formatMessage(i.creationModalTitle),description:"",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("p",{className:"inline-flex items-center pb-2 text-base",children:a.formatMessage(i.creationModalExclusionType)}),e.jsxs(p.Root,{value:d,onValueChange:l=>v(l),disabled:!1,children:[e.jsxs(p.Trigger,{className:"justify-between rounded-lg border border-token-border-light py-5 text-base",children:[e.jsx(p.Value,{placeholder:"Select exclusion type"}),e.jsx(p.Icon,{})]}),e.jsx(p.Portal,{children:e.jsx(p.Content,{children:Object.entries(o?z:N).map(([l,b])=>e.jsx(p.Item,{value:b,className:"text-base",children:b},l))})})]}),e.jsx("p",{className:"inline-flex items-center pb-2 pt-6 text-base",children:a.formatMessage(i.creationModalExclusionValue)}),e.jsxs("div",{className:"flex flex-wrap items-center rounded-lg border border-token-border-light bg-token-main-surface-primary text-base",children:[S.map((l,b)=>e.jsxs("div",{className:"mx-1.5 my-2 flex min-w-0 cursor-pointer items-center rounded-full bg-gray-200 px-3.5 py-1 font-medium text-black",children:[e.jsx("span",{className:"overflow-hidden text-ellipsis whitespace-nowrap",children:l}),e.jsx(E,{onClick:()=>{F(b)},color:"ghost",className:"ml-2 min-h-0 p-0 text-gray-600 hover:text-red-700",icon:pe})]},b)),e.jsx("input",{type:"text",value:u,onChange:l=>w(l.target.value),onKeyDown:V,placeholder:a.formatMessage(i.creationModalValuePlaceholder),className:"w-full min-w-0 flex-1 overflow-x-auto border-none bg-transparent text-base placeholder:text-token-text-tertiary focus:border-transparent focus:outline-none focus:ring-0"})]}),e.jsx("p",{className:"mt-1 inline-flex items-center text-sm text-token-text-secondary",children:!o&&d===N.SHARED_DRIVE&&n?n===Z.INCLUDE?a.formatMessage(i.creationModalSeparateByCommasAndDefaultIncludeDrives):a.formatMessage(i.creationModalSeparateByCommasAndDefaultExcludeDrives):a.formatMessage(i.creationModalSeparateByCommas)}),k&&e.jsx("p",{className:"mt-4 text-sm text-red-500",children:a.formatMessage(k)}),e.jsxs("div",{className:"flex justify-end space-x-4",children:[e.jsx(E,{className:"mt-6 w-full max-w-[92px] rounded-lg border text-base",color:"secondary",onClick:()=>{y.closeModal(g.CreateExclusion),j([]),C(null)},children:a.formatMessage(i.creationModalCancelButton)}),e.jsx(E,{className:"mt-6 w-full max-w-[92px] rounded-lg border text-base",color:"primary",onClick:re,disabled:D.status==="pending",children:D.status==="pending"?e.jsx(K,{}):a.formatMessage(i.creationModalCreateButton)})]})]})})}const i=W({title:{id:"j2s2hr",defaultMessage:"Google Drive Connection"},search:{id:"NxiatU",defaultMessage:"Search"},sharedDriveSectionHeader:{id:"MoVjjM",defaultMessage:"Shared Drives"},sharedDriveInclusionDefaultSubtitle:{id:"QpN++w",defaultMessage:"Shared drives are included by default. You can set overrides to exclude specific shared drives in the exclusions section."},sharedDriveExclusionDefaultSubtitle:{id:"Id1y2X",defaultMessage:"Shared drives are excluded by default. You can set overrides to include specific shared drives in the exclusions section."},serviceAccountSectionHeader:{id:"KZiaoi",defaultMessage:"Service account config"},serviceAccountConfigSectionDescription:{id:"MaxpKa",defaultMessage:"Manage your service account config for connectors."},exclusionsSectionHeader:{id:"D6JZP8",defaultMessage:"Exclusions"},exclusionsSectionDescription:{id:"UNjawu",defaultMessage:"Manage which files will be excluded from being indexed by ChatGPT. Changes made to exclusions may take time to reflect."},createExclusionButton:{id:"nKYBN7",defaultMessage:"Create exclusion"},creationModalTitle:{id:"ET+VpS",defaultMessage:"New exclusion"},creationModalExclusionType:{id:"I+xnyV",defaultMessage:"Type"},creationModalValuePlaceholder:{id:"hua2tW",defaultMessage:"String"},creationModalExclusionValue:{id:"aAr8X0",defaultMessage:"Value"},creationModalSeparateByCommas:{id:"HQDOHA",defaultMessage:"Separate values by commas"},creationModalSeparateByCommasAndDefaultIncludeDrives:{id:"qXuyO7",defaultMessage:"Separate values by commas. Any shared drive IDs added here will be excluded from indexing."},creationModalSeparateByCommasAndDefaultExcludeDrives:{id:"PQPdqt",defaultMessage:"Separate values by commas. Any shared drive IDs added here will be indexed."},creationModalCreateButton:{id:"GsyTJk",defaultMessage:"Create"},creationModalCancelButton:{id:"kUO70c",defaultMessage:"Cancel"},creationModalGenericErrorMessage:{id:"wUcmIJ",defaultMessage:"Error creating exclusion."},creationModalValueErrorMessage:{id:"+2RviF",defaultMessage:"Please enter all required fields."}});function ns(){const s=le();return ce(),e.jsx(Te,{...s})}export{ns as default};
//# sourceMappingURL=j2u3z49xov1uxfkw.js.map