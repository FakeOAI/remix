import{r as M,y as e,ae as B,a0 as _,al as oe,$ as O,j as P,l as G,N as k,a1 as Q,f7 as se,f8 as R,bt as X,aA as E,aw as K,u as ee}from"./cenhwbprxai3toix.js";import{a as ne,b as ie,u as le,e as ce}from"./l7udx8qv54ye66ei.js";import{a as de,d as H,e as U,f as q,A as ue}from"./gt3i1odik6sh3vjp.js";import{ae as me,ac as xe,O as fe,I as te,t as ge,bm as pe}from"./lzqwtbp50roqvxnh.js";import{S as p}from"./i5dl7qcorvwptxtt.js";import{a as $,G as g,U as y}from"./jyh9xl3syf7yrebg.js";import{M as h,an as Me,i as he}from"./bomvf441parvbl6l.js";import{D as T}from"./hn586u5on2jlex6e.js";import"./cd7rmveqys68yu6w.js";import"./hn877s1av7risab0.js";import"./kp41qb109q7zsu08.js";import"./e3lzzvpbrfw34hi0.js";import"./h0w2cfyxquh3a88t.js";import"./i2mam4exf28ww00h.js";import"./s26g8cj5crlmzrhm.js";import"./jth9gz8y4nfsu03x.js";import"./c657bb6sfxb67al1.js";import"./j72yt11gyo474tkr.js";import"./d01hwntyf2775ji3.js";import"./kcdclgxeuzpy449e.js";import"./bh0hpeydruybhwyo.js";import"./ghlhzub07tt8683j.js";import"./nehofwwxms0ggoht.js";import"./jc5ynb5b7d7zj5ef.js";const z={NAME_KEYWORD:"Name keyword",NAME_SUBSTRING:"Name substring"},A={USERS:"User",GROUPS:"Group",SHARED_DRIVE:"Shared drive",...z},ye={ALL:"All exclusion types",...z},Y={ALL:"All exclusion types",...A};var Z=(s=>(s.EXCLUDE="exclude",s.INCLUDE="include",s))(Z||{});const je=[["sensitive_object_name_keywords",A.NAME_KEYWORD],["sensitive_object_name_substrings",A.NAME_SUBSTRING],["sensitive_users",A.USERS],["sensitive_groups",A.GROUPS],["sensitive_shared_drive_ids",A.SHARED_DRIVE]],ae={},J={};je.forEach(([s,t])=>{ae[s]=t,J[t]=s});function Ce(s){const t=[];for(const[r,o]of Object.entries(s))for(const[n,a]of Object.entries(o)){const c=ae[n];if(c){if(Array.isArray(a))a.forEach((x,f)=>{t.push({id:`${r}_${n}_${f}`,lastModifiedTime:o.last_modified_time,name:x,exclusionType:c,parentId:r,parentType:o.type})});else if(typeof a=="object"&&a!=null)for(const x of Object.keys(a))t.push({id:`${r}_${n}_${x}`,lastModifiedTime:o.last_modified_time,name:x,exclusionType:c,parentId:r,parentType:o.type})}}return t}function be(s){return Object.values(s)[0]?.last_modified_time}function Ee(s){return Object.keys(s)[0]}function Se(s){return!!Object.values(s)[0]?.is_oauth}function ve(s){return Object.values(s)[0]?.default_shared_drive_exclusion_selection??null}const W=10;function De({rowData:s,filterInputValue:t,filterType:r,workspaceId:o}){const[n,a]=M.useState(0);M.useEffect(()=>{a(0)},[t,r]);const c=s.filter(d=>d.name.toLowerCase().includes(t.toLowerCase())&&(r===Y.ALL||d.exclusionType.toLowerCase()===r.toLowerCase())),x=c.slice(n*W,(n+1)*W),f=Math.ceil(c.length/W);return e.jsxs("div",{className:"mb-6",children:[e.jsxs(h.Root,{fixed:!0,size:"normal",children:[e.jsxs(h.Header,{children:[e.jsx(h.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(B,{...w.name})}),e.jsx(h.HeaderCell,{className:"w-40 bg-token-main-surface-primary",children:e.jsx(B,{...w.type})}),e.jsx(h.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),e.jsxs(h.Body,{children:[x.map(d=>e.jsx(Ne,{config:d,workspaceId:o},d.id)),x.length===0&&e.jsx(h.Row,{children:e.jsx(h.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(B,{...w.noResults})})})})]})]}),f>1&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx(Me,{currentPage:n,onChangeIndex:a,length:f})})]})}function Ne({config:s,workspaceId:t}){const r=_(),o=oe(),n=O(),a=P(),c=G({mutationFn:f=>{const d={store_id:f.storeId,operations:f.operations,last_modified_time:f.lastModifiedTime};return k.updateKnowledgeStoreExclusionConfig(d,f.accountId)},onSuccess:()=>{a.invalidateQueries({queryKey:["listExclusionConfigs",t]}),o.success(r.formatMessage(w.deleteConfigSuccessMessage),{duration:3})},onError:()=>{o.danger(r.formatMessage(w.deleteConfigGenericErrorMessage),{duration:3})}}),x=()=>{if(!s.parentId){o.danger(r.formatMessage(w.deleteConfigGenericErrorMessage),{duration:3});return}if(!n){o.danger(r.formatMessage(w.deleteConfigGenericErrorMessage),{duration:3});return}const f={action:se.REMOVE,field:J[s.exclusionType],value:s.name};c.mutate({storeId:s.parentId,operations:[f],lastModifiedTime:s.lastModifiedTime,accountId:n.id})};return e.jsxs(h.Row,{children:[e.jsx(h.Cell,{className:"whitespace-normal break-all",children:e.jsx("span",{children:s.name})}),e.jsx(h.Cell,{className:"whitespace-nowrap",children:e.jsx("span",{children:s.exclusionType})}),e.jsx(h.Cell,{children:e.jsx(Ae,{onDelete:x})})]})}function Ae({onDelete:s}){return e.jsxs(T.Root,{children:[e.jsx(T.Trigger,{children:e.jsx(me,{className:"icon-sm cursor-pointer"})}),e.jsx(T.Portal,{children:e.jsx(T.Content,{children:e.jsx(T.Item,{className:"cursor-pointer",onClick:s,children:e.jsx(B,{...w.deleteConfig})})})})]})}const w=Q({name:{id:"B+5Xa5",defaultMessage:"Name"},type:{id:"DY07PN",defaultMessage:"Type"},deleteConfig:{id:"fB8e41",defaultMessage:"Delete config"},noResults:{id:"x1Ejc3",defaultMessage:"No results"},deleteConfigSuccessMessage:{id:"d60LPO",defaultMessage:"Exclusion deleted successfully."},deleteConfigGenericErrorMessage:{id:"pOww+E",defaultMessage:"Error deleting exclusion."}});function we(){const s=$(g.AddServiceAccountKey),t=_(),r=O(),o=P(),[n,a]=M.useState(""),[c,x]=M.useState(null),[f,d]=M.useState(null),D=G({mutationFn:async u=>{const I={secret:await ke(u.keyFile),admin_email:u.email,secret_type:R.GOOGLE_DRIVE_DWD};return k.createSecretForWorkspace(I,u.accountId)},onSuccess:()=>{o.invalidateQueries({queryKey:["secretExistsForWorkspace",r?.id]}),a(""),x(null),y.closeModal(g.AddServiceAccountKey)},onError:(u,v)=>{d(m.creationModalGenericErrorMessage),k.deleteSecretForWorkspace(R.GOOGLE_DRIVE_DWD,v.accountId)}}),S=()=>{if(!n||!c){d(m.creationModalValueErrorMessage);return}if(!r){d(m.creationModalGenericErrorMessage);return}d(null),D.mutate({email:n,keyFile:c,accountId:r.id})},j=u=>{u.target.files&&u.target.files[0]&&x(u.target.files[0])};return e.jsx(X,{size:"custom",className:"max-w-lg overflow-y-auto text-base",isOpen:s,onClose:()=>{y.closeModal(g.AddServiceAccountKey),d(null),a(""),x(null)},showCloseButton:!0,type:"success",title:t.formatMessage(m.serviceAccountModalTitle),description:"",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{className:"pb-2 text-base",children:t.formatMessage(m.emailLabel)}),e.jsx("input",{type:"email",value:n,onChange:u=>a(u.target.value),placeholder:t.formatMessage(m.emailPlaceholder),className:"mb-4 rounded-lg border border-token-border-light bg-token-main-surface-primary px-3 py-2 text-base placeholder:text-token-text-tertiary"}),e.jsx("label",{className:"pb-2 text-base",children:t.formatMessage(m.keyFileLabel)}),e.jsx("input",{type:"file",accept:".json",onChange:j,className:"mb-4 rounded-lg border border-token-border-light bg-token-main-surface-primary px-3 py-2 text-base"}),c&&e.jsx("p",{className:"text-sm text-token-text-secondary",children:t.formatMessage(m.selectedFile,{fileName:c.name})}),f&&e.jsx("p",{className:"mt-4 text-sm text-red-500",children:t.formatMessage(f)}),e.jsxs("div",{className:"flex justify-end space-x-4",children:[e.jsx(E,{className:"mt-6 w-full max-w-[92px] rounded-lg border text-base",color:"secondary",onClick:()=>{y.closeModal(g.AddServiceAccountKey),d(null),a(""),x(null)},children:t.formatMessage(m.creationModalCancelButton)}),e.jsx(E,{className:"mt-6 w-full max-w-[92px] rounded-lg border text-base",color:"primary",onClick:S,disabled:D.status==="pending",children:D.status==="pending"?e.jsx(K,{}):t.formatMessage(m.creationModalCreateButton)})]})]})})}function ke(s){return new Promise((t,r)=>{const o=new FileReader;o.onload=n=>{n.target&&typeof n.target.result=="string"?t(n.target.result):r(new Error("Error reading file."))},o.onerror=()=>{r(new Error("Error reading the file."))},o.readAsText(s)})}function Ie(){const s=$(g.DeleteServiceAccountKey),t=_(),r=O(),o=P(),[n,a]=M.useState(null),c=G({mutationFn:()=>r?k.deleteSecretForWorkspace(R.GOOGLE_DRIVE_DWD,r.id):Promise.reject(new Error("No current account")),onSuccess:()=>{o.invalidateQueries({queryKey:["secretExistsForWorkspace",r?.id]}),y.closeModal(g.DeleteServiceAccountKey)},onError:()=>{a(m.genericErrorMessage)}});return e.jsxs(X,{size:"custom",type:"success",className:"max-w-lg overflow-y-auto text-base",isOpen:s,onClose:()=>{y.closeModal(g.DeleteServiceAccountKey),a(null)},showCloseButton:!0,title:t.formatMessage(m.deleteModalTitle),children:[e.jsx("p",{children:t.formatMessage(m.deleteModalDescription)}),e.jsxs("div",{className:"flex justify-end space-x-4",children:[n&&e.jsx("p",{className:"mt-4 text-base text-red-500",children:t.formatMessage(n)}),e.jsx(E,{className:"mt-6 w-full max-w-[92px] rounded-lg border text-base",color:"secondary",onClick:()=>{y.closeModal(g.DeleteServiceAccountKey)},children:t.formatMessage(m.deleteModalCancelButton)}),e.jsx(E,{className:"mt-6 w-full max-w-[92px] rounded-lg border text-base",color:"primary",onClick:()=>c.mutate(),disabled:c.status==="pending",children:c.status==="pending"?e.jsx(K,{}):t.formatMessage(m.deleteModalDeleteButton)})]})]})}const _e=({isSecretLoading:s,isSecretError:t,secretExistData:r})=>{const o=_();return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"inline-flex items-center text-base",children:o.formatMessage(m.googleDriveDWDSectionHeader)}),s?e.jsx(K,{}):t?e.jsx("p",{className:"text-red-500",children:o.formatMessage(m.genericErrorMessage)}):r&&r.has_secret?e.jsxs("div",{className:"flex items-center",children:[e.jsx(xe,{className:"mr-2 text-green-500"}),e.jsx(E,{className:"max-w-[100px] rounded-lg border text-base",color:"secondary",icon:fe,onClick:()=>{y.openModal(g.DeleteServiceAccountKey)},children:o.formatMessage(m.deleteServiceAccountKeyButton)})]}):e.jsx(E,{className:"max-w-[192px] rounded-lg border text-base",color:"primary",icon:te,onClick:()=>{y.openModal(g.AddServiceAccountKey)},children:o.formatMessage(m.addServiceAccountKeyButton)})]})},m=Q({serviceAccountModalTitle:{id:"ri0otc",defaultMessage:"Service account config"},googleDriveDWDSectionHeader:{id:"pIbDsS",defaultMessage:"Google Drive"},addServiceAccountKeyButton:{id:"dEHoaF",defaultMessage:"Service account"},deleteServiceAccountKeyButton:{id:"n4njrg",defaultMessage:"Delete"},deleteModalTitle:{id:"nhz40y",defaultMessage:"Delete service account"},deleteModalDescription:{id:"cWxpDi",defaultMessage:"Are you sure you want to delete the service account?"},deleteModalCancelButton:{id:"ZXiXY2",defaultMessage:"Cancel"},deleteModalDeleteButton:{id:"6i1l4W",defaultMessage:"Delete"},emailLabel:{id:"O9fBv1",defaultMessage:"Admin email"},emailPlaceholder:{id:"Y32reR",defaultMessage:"Enter admin email"},keyFileLabel:{id:"U2yeNU",defaultMessage:"Service account key"},selectedFile:{id:"8/rZrp",defaultMessage:"Selected file: {fileName}"},creationModalCreateButton:{id:"bCzjac",defaultMessage:"Create"},creationModalCancelButton:{id:"kUO70c",defaultMessage:"Cancel"},creationModalGenericErrorMessage:{id:"l2SCVt",defaultMessage:"Error when saving config."},genericErrorMessage:{id:"nKlawS",defaultMessage:"Error"},creationModalValueErrorMessage:{id:"B1fdKK",defaultMessage:"Please enter all required fields."}});function Te({currentWorkspaceId:s}){const t=_(),r=O(),[o,n]=M.useState(""),{data:a}=ee({queryKey:["listExclusionConfigs",s],queryFn:()=>k.listExclusionConfigs(s)}),{data:c,isLoading:x,isError:f}=ee({queryKey:["secretExistsForWorkspace",r?.id],queryFn:()=>r?k.secretExistForWorkspace(R.GOOGLE_DRIVE_DWD,r.id):Promise.reject(new Error("No current account")),enabled:!!r}),d=a?Ce(a):[],D=a?Ee(a):null,S=a?be(a):null,j=a?Se(a):!1,u=a?ve(a):null,[v,I]=M.useState(Y.ALL),[C,V]=M.useState(""),F=M.useCallback(he(N=>{V(N)},250),[]);return e.jsxs(e.Fragment,{children:[e.jsx(ne,{title:t.formatMessage(i.title)}),e.jsx(ie,{children:e.jsxs(de,{className:"mt-6 gap-6",children:[e.jsxs(H,{children:[e.jsx(U,{children:t.formatMessage(i.serviceAccountSectionHeader)}),e.jsx(q,{className:"text-[var(--Primary-Gray-600,_#565869)]",children:t.formatMessage(i.serviceAccountConfigSectionDescription)}),e.jsx(ue,{children:e.jsx(_e,{isSecretLoading:x,isSecretError:f,secretExistData:c})})]}),!j&&u&&e.jsxs(H,{children:[e.jsx(U,{children:t.formatMessage(i.sharedDriveSectionHeader)}),e.jsx(q,{className:"text-token-text-secondary",children:u===Z.INCLUDE?t.formatMessage(i.sharedDriveInclusionDefaultSubtitle):t.formatMessage(i.sharedDriveExclusionDefaultSubtitle)})]}),e.jsxs(H,{children:[e.jsx(U,{children:t.formatMessage(i.exclusionsSectionHeader)}),e.jsx(q,{className:"text-[var(--Primary-Gray-600,_#565869)]",children:t.formatMessage(i.exclusionsSectionDescription)})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"relative",children:[e.jsx(ge,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),e.jsx("input",{type:"text",value:o,onChange:N=>{n(N.target.value),F(N.target.value)},placeholder:t.formatMessage(i.search),className:"w-48 rounded-lg border border-token-border-light bg-token-main-surface-primary pl-8 text-base placeholder:text-token-text-tertiary"})]}),e.jsx(Oe,{filterType:v,setFilterType:I,isOAuth:j})]}),e.jsx(E,{className:"max-w-[192px] rounded-lg border text-base",color:"primary",icon:te,onClick:()=>{y.openModal(g.CreateExclusion)},children:t.formatMessage(i.createExclusionButton)})]}),e.jsx(De,{rowData:d,filterInputValue:C,filterType:v,workspaceId:s})]})}),e.jsx(Fe,{currentWorkspaceId:s,parentId:D,lastModifiedTime:S,isOAuth:j,defaultSharedDrivePolicy:u}),e.jsx(we,{}),e.jsx(Ie,{})]})}function Oe({filterType:s,setFilterType:t,isOAuth:r}){return e.jsx("div",{className:"max-w-[208px]",children:e.jsxs(p.Root,{value:s,onValueChange:o=>t(o),disabled:!1,children:[e.jsxs(p.Trigger,{className:"rounded-lg border border-token-border-light py-5 text-base",children:[e.jsx(p.Value,{}),e.jsx(p.Icon,{})]}),e.jsx(p.Portal,{children:e.jsx(p.Content,{children:Object.entries(r?ye:Y).map(([o,n])=>e.jsx(p.Item,{value:n,className:"text-base",children:n},o))})})]})})}function Fe({currentWorkspaceId:s,parentId:t,lastModifiedTime:r,isOAuth:o,defaultSharedDrivePolicy:n}){const a=_(),c=O(),x=P(),f=$(g.CreateExclusion),[d,D]=M.useState(""),[S,j]=M.useState([]),[u,v]=M.useState(""),[I,C]=M.useState(null),V=l=>{l.key==="Enter"||l.key===","?(l.preventDefault(),u.trim()&&(j([...S,u.trim()]),v(""))):l.key==="Backspace"&&!u&&F(S.length-1)},F=l=>{j(S.filter((b,L)=>L!==l))},N=G({mutationFn:l=>{const b={store_id:l.storeId,operations:l.operations,last_modified_time:l.lastModifiedTime};return k.updateKnowledgeStoreExclusionConfig(b,l.accountId)},onSuccess:()=>{x.invalidateQueries({queryKey:["listExclusionConfigs",s]}),j([]),D(""),v(""),y.closeModal(g.CreateExclusion)},onError:()=>{C(i.creationModalGenericErrorMessage)}}),re=()=>{const l=[...S];if(u.trim()&&l.push(u.trim()),!t){C(i.creationModalGenericErrorMessage);return}if(!c){C(i.creationModalGenericErrorMessage);return}if(!d){C(i.creationModalValueErrorMessage);return}if(l.length===0){C(i.creationModalValueErrorMessage);return}C(null);const b=l.map(L=>({action:se.ADD,field:J[d],value:L}));N.mutate({storeId:t,operations:b,lastModifiedTime:r,accountId:c.id})};return e.jsx(X,{size:"custom",className:"max-w-lg overflow-y-auto text-base",isOpen:f,onClose:()=>{y.closeModal(g.CreateExclusion),C(null),j([])},showCloseButton:!0,type:"success",title:a.formatMessage(i.creationModalTitle),description:"",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("p",{className:"inline-flex items-center pb-2 text-base",children:a.formatMessage(i.creationModalExclusionType)}),e.jsxs(p.Root,{value:d,onValueChange:l=>D(l),disabled:!1,children:[e.jsxs(p.Trigger,{className:"justify-between rounded-lg border border-token-border-light py-5 text-base",children:[e.jsx(p.Value,{placeholder:"Select exclusion type"}),e.jsx(p.Icon,{})]}),e.jsx(p.Portal,{children:e.jsx(p.Content,{children:Object.entries(o?z:A).map(([l,b])=>e.jsx(p.Item,{value:b,className:"text-base",children:b},l))})})]}),e.jsx("p",{className:"inline-flex items-center pb-2 pt-6 text-base",children:a.formatMessage(i.creationModalExclusionValue)}),e.jsxs("div",{className:"flex flex-wrap items-center rounded-lg border border-token-border-light bg-token-main-surface-primary text-base",children:[S.map((l,b)=>e.jsxs("div",{className:"mx-1.5 my-2 flex min-w-0 cursor-pointer items-center rounded-full bg-gray-200 px-3.5 py-1 font-medium text-black",children:[e.jsx("span",{className:"overflow-hidden text-ellipsis whitespace-nowrap",children:l}),e.jsx(E,{onClick:()=>{F(b)},color:"ghost",className:"ml-2 min-h-0 p-0 text-gray-600 hover:text-red-700",icon:pe})]},b)),e.jsx("input",{type:"text",value:u,onChange:l=>v(l.target.value),onKeyDown:V,placeholder:a.formatMessage(i.creationModalValuePlaceholder),className:"w-full min-w-0 flex-1 overflow-x-auto border-none bg-transparent text-base placeholder:text-token-text-tertiary focus:border-transparent focus:outline-none focus:ring-0"})]}),e.jsx("p",{className:"mt-1 inline-flex items-center text-sm text-token-text-secondary",children:!o&&d===A.SHARED_DRIVE&&n?n===Z.INCLUDE?a.formatMessage(i.creationModalSeparateByCommasAndDefaultIncludeDrives):a.formatMessage(i.creationModalSeparateByCommasAndDefaultExcludeDrives):a.formatMessage(i.creationModalSeparateByCommas)}),I&&e.jsx("p",{className:"mt-4 text-sm text-red-500",children:a.formatMessage(I)}),e.jsxs("div",{className:"flex justify-end space-x-4",children:[e.jsx(E,{className:"mt-6 w-full max-w-[92px] rounded-lg border text-base",color:"secondary",onClick:()=>{y.closeModal(g.CreateExclusion),j([]),C(null)},children:a.formatMessage(i.creationModalCancelButton)}),e.jsx(E,{className:"mt-6 w-full max-w-[92px] rounded-lg border text-base",color:"primary",onClick:re,disabled:N.status==="pending",children:N.status==="pending"?e.jsx(K,{}):a.formatMessage(i.creationModalCreateButton)})]})]})})}const i=Q({title:{id:"j2s2hr",defaultMessage:"Google Drive Connection"},search:{id:"NxiatU",defaultMessage:"Search"},sharedDriveSectionHeader:{id:"MoVjjM",defaultMessage:"Shared Drives"},sharedDriveInclusionDefaultSubtitle:{id:"QpN++w",defaultMessage:"Shared drives are included by default. You can set overrides to exclude specific shared drives in the exclusions section."},sharedDriveExclusionDefaultSubtitle:{id:"Id1y2X",defaultMessage:"Shared drives are excluded by default. You can set overrides to include specific shared drives in the exclusions section."},serviceAccountSectionHeader:{id:"KZiaoi",defaultMessage:"Service account config"},serviceAccountConfigSectionDescription:{id:"MaxpKa",defaultMessage:"Manage your service account config for connectors."},exclusionsSectionHeader:{id:"D6JZP8",defaultMessage:"Exclusions"},exclusionsSectionDescription:{id:"UNjawu",defaultMessage:"Manage which files will be excluded from being indexed by ChatGPT. Changes made to exclusions may take time to reflect."},createExclusionButton:{id:"nKYBN7",defaultMessage:"Create exclusion"},creationModalTitle:{id:"ET+VpS",defaultMessage:"New exclusion"},creationModalExclusionType:{id:"I+xnyV",defaultMessage:"Type"},creationModalValuePlaceholder:{id:"hua2tW",defaultMessage:"String"},creationModalExclusionValue:{id:"aAr8X0",defaultMessage:"Value"},creationModalSeparateByCommas:{id:"HQDOHA",defaultMessage:"Separate values by commas"},creationModalSeparateByCommasAndDefaultIncludeDrives:{id:"qXuyO7",defaultMessage:"Separate values by commas. Any shared drive IDs added here will be excluded from indexing."},creationModalSeparateByCommasAndDefaultExcludeDrives:{id:"PQPdqt",defaultMessage:"Separate values by commas. Any shared drive IDs added here will be indexed."},creationModalCreateButton:{id:"GsyTJk",defaultMessage:"Create"},creationModalCancelButton:{id:"kUO70c",defaultMessage:"Cancel"},creationModalGenericErrorMessage:{id:"wUcmIJ",defaultMessage:"Error creating exclusion."},creationModalValueErrorMessage:{id:"+2RviF",defaultMessage:"Please enter all required fields."}});function ns(){const s=le();return ce(),e.jsx(Te,{...s})}export{ns as default};
//# sourceMappingURL=eoc83h95lktpseau.js.map