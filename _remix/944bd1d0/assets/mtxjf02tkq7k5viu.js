import{eX as ae,eY as B,cq as ce,eZ as T,r as f,dl as le,ax as de,e_ as ye,P as W,e$ as fe,u as y,e5 as U,as as j,aw as A,R as X,X as me,cN as ge,e9 as pe,bw as he,ag as Me,a7 as O,d3 as Z,E as S,F as q,bQ as $}from"./in7dip9jd052wfku.js";import{c5 as J,af as x,bK as _e,dP as ze,dQ as Se,dR as Ge,dS as Pe,dT as V,bR as Ce,dU as qe,dV as E,aM as a,dW as ve,b4 as Fe,b5 as Ee,dX as Te,dY as Re}from"./hclnq916jc5jz97n.js";import{T as w,r as Le,d as Qe}from"./jzk6rnaxlh9mg40v.js";function be({clientThreadId:e}){var i;const r=w.getThreadCurrentLeafId(e),n=((i=w.getTree(e).getMessage(r).metadata)==null?void 0:i.model_switcher_deny)??[],s={};n.forEach(u=>{const{slug:d,context:c,reason:l,description:g}=u,m=s[d]??{},h=m[c]??[];h.push({reason:l,description:g}),m[c]=h,s[d]=m});const o=ae();for(const{resets_after:u,model_slug:d}of o)[B.CONVERSATION,B.REGENERATE].forEach(c=>{const l=s[d]??{},g=l[c]??[],m={reason:ce.RATE_LIMIT,resetsAfter:u};g.push(m),l[c]=g,s[d]=l});return s}const je="text-davinci-002-render-sha",Xe="gpt-4",Ze="gpt-4o",Je="o1-preview",er="o1-mini",D=J({slug:x,max_tokens:4097,title:"Default",description:"",tags:[T.GPT_3_5],product_features:{}}),we=({default_model:e,tagline:r,color:t,human_category_name:n,category:s,human_category_short_name:o,human_category_shorter_name:i,subscription_level:u,short_explainer:d,subcategory:c,...l})=>({color:t,tagline:r,defaultModel:e,label:n,shortLabel:o,description:d,shorterLabel:i??o,subscriptionLevel:u,categoryId:s,subcategory:c,...l}),De=({icon:e,icon_filled_src:r,icon_outline_src:t})=>({iconName:e,iconFilledSrc:r,iconOutlineSrc:t}),Ae=({group:e,human_group_name:r,human_group_short_name:t,model_ids:n})=>({group:e,label:r,shortLabel:t,modelIds:n});function Ke(){return A({retry:5,queryKey:["modelIcons"],queryFn:async()=>await X.getModelIcons().then(e=>Object.fromEntries(Object.entries(e).map(([r,t])=>[r,De(t)])))})}function Ie(e){return A({retry:5,queryKey:["models",{isHistoryDisabled:e}],queryFn:async()=>await X.getModels(e).then(r=>{const{models:t,internal_groups:n,categories:s}=r,o=t.map(J);return{categories:s.concat().reverse().map(we),groups:(n==null?void 0:n.map(Ae))??[],modelsList:o,modelsMap:Object.fromEntries(o.map(i=>[i.id,i]))}})})}function v(){const e=fe();return y(Ie(e))}function rr(){return y(Ke())}function Ue({isRegen:e=!1}={}){const{isLoading:r,data:{categories:t=[],groups:n=[]}={}}=v(),s=f.useMemo(()=>e?t.filter(o=>o.is_regenerate_category!==!1):t.filter(o=>!o.is_regenerate_category),[t,e]);return{isLoading:r,categories:s,groups:n??[]}}function tr(){const{categories:e}=Ue();return!!e.find(({categoryId:r})=>r===_e.GPT4o)}function nr(){const{data:e}=v();return f.useMemo(()=>e?new Set(Object.keys(e.modelsMap)):new Set([x]),[e])}const Oe={[x]:D};function xe(){const{data:e}=v();return(e==null?void 0:e.modelsMap)??Oe}function ee(e,r,t){let n=T.GPT_3_5;return t?n=T.GPT_4:r&&(n=T.GPT_4o),(e==null?void 0:e.modelsList.find(s=>s.tags.includes(n)))??(e==null?void 0:e.modelsList[0])??D}function sr(e=!1){const r=le(),t=de(),[,n]=ye();return f.useCallback(({location:s,modelId:o})=>{const i=r.pathname.includes("/g/");e||i?(W.logNewChatButtonClicked({location:s}),t({pathname:"/",search:`?model=${encodeURIComponent(o)}`})):(n(u=>(u.set("model",encodeURIComponent(o)),u)),W.logNewChatButtonClicked({location:s}))},[e,r,t,n])}function or(){const{data:{categories:e=[]}={}}=v(),{doesUserHaveAnyAccountsWithPlusFeatures:r}=U();if(r)return null;const t=e.find(ze);return(t==null?void 0:t.defaultModel)??null}function Ne(e){return Le(e)}function re(e){const r=Ne(e),t=xe();return f.useMemo(()=>r==null?D:t[r]??D,[r,t])}function ir(e,r){var n;return((n=re(e).enabledTools)==null?void 0:n.includes(r))??!1}function ur(e){const r=Se(),t=re(e),n=f.useMemo(()=>!r.isSuccess||!r.data?[]:r.data,[r.data,r.isSuccess]),s=be({clientThreadId:e});return f.useMemo(()=>{const i=new Set(t.enabledTools||[]);return n.filter(u=>!(!(u.requiredFeatures.length===0||u.requiredFeatures.every(l=>i.has(l)))||!(u.requiredModels.length===0||u.requiredModels.some(l=>!s[l]))))},[n,t,s])}function ar(e){return decodeURIComponent(e.model??"")||null}function cr(){const{data:e}=v(),{doesUserHaveAnyAccountsWithPlusFeatures:r}=U(),t=j();return ee(e,!!r,!!(t!=null&&t.isEnterprise()))}const te="q",He="m";function lr(e){const{clientThreadId:r,currentLeafId:t,handleRequestCompletion:n}=e,s=f.useRef(!1),{isLoading:o,data:i}=v(),{doesUserHaveAnyAccountsWithPlusFeatures:u,isLoading:d}=U(),c=j(),l=me(),g=f.useCallback((M,G,_,P)=>{w.updateTree(r,C=>{C.addNode(M,_,G,ge.User,void 0,P)})},[r]),m=f.useCallback(async(M,{content:G,attachments:_},P,C,F,Q)=>{const I=t,p=_.length>0?{attachments:_}:{};p.system_hints=C.systemHints,g(M,I,G,p),n({type:pe.Next,promptId:M,requestedModelId:Q,eventMetadata:P,cancelActiveRequests:!0,completionMetadata:C,turnTracker:F})},[g,n,t]),h=he(()=>window.location.pathname)??null,N=Ge();let H=!o&&!d&&h!=null;const[K,L]=f.useState(!0);return f.useEffect(()=>{if(!K||s.current)return;const M=Qe.getConversationMode(r);if(!H||M==null)return;if(!Be(h)||ke(h)&&N===void 0||w.getServerThreadId(r)!=null){L(!1);return}const{[te]:G,[He]:_,[qe]:P,...C}=l.query,F=(typeof G=="string"?G:null)??(typeof _=="string"?_:null);if(!F||!F.trim()){L(!1);return}const Q=Pe(P),I=Me();s.current=!0;let p=i==null?void 0:i.modelsList;Q.has(V.Search)&&(p=p==null?void 0:p.filter(ue=>{var k;return(k=ue.enabledTools)==null?void 0:k.includes(V.Search)}));const b=i&&ee({...i,modelsList:p??[]},!!u,!!(c!=null&&c.isEnterprise()));if(l.replace({query:C},void 0,{shallow:!0}),b==null){O.warning("No model available for this request"),L(!1);return}const ie=new Ce;m(I,{content:F,attachments:[]},{eventSource:"url"},{conversationMode:M,source:"instant-query",systemHints:P?Array.from(Q):void 0},ie,b==null?void 0:b.id),L(!1)},[o,d,H,h,l,i,u,c,m,K,r,N]),K}function ke(e){return ne(e)}function ne(e){return e==null?!1:/^\/g\/[\w-]+$/.test(e)}function Be(e){return e==null?!1:e==="/"||ne(e)}const dr="GPT Builder";function yr(e){if(e)return`ChatGPT - ${e}`}function se(e){return e.gizmo.short_url??e.gizmo.id??"-"}function oe(e){return`/g/${e}`}function fr(e){return`https://chatgpt.com${oe(e)}`}function We(e){return oe(se(e))}function mr(e,r){const t=new URLSearchParams;return r!=null&&t.set(te,r),ve(new URL(`${We(e)}?${t}`,"https://chatgpt.com"))}function gr(e){return`/g/${se(e)}`}function pr(e){return Fe(e)&&e.gizmo.live_version===0||Ee(e)&&e.liveVersion===0}function hr(e,r){return y({queryKey:["gizmos","discovery",{locale:e,isAnon:r}],queryFn:async()=>a.getGizmoDiscovery(e,r)})}function Mr({cutId:e,locale:r,limit:t,cursor:n,enabled:s=!0}){return Z({queryKey:["gizmos","discovery",{cutId:e,locale:r,limit:t}],queryFn:async({pageParam:o})=>a.getGizmoDiscoveryCut(e,{locale:r,cursor:o,limit:t}),initialPageParam:n,getNextPageParam:o=>o.list.cursor??void 0,enabled:s})}function _r(){return y({queryKey:["gizmos","pinned"],queryFn:async()=>a.getGizmoPinned()})}function R(){return A({queryKey:["gizmos","bootstrap"],queryFn:async()=>a.getGizmoBootstrap().then(e=>({gizmos:e.gizmos.map(r=>({resource:r.resource,flair:r.flair}))}))})}function zr(){return y(R())}function Y(e,r){const t=e.filter(s=>s.resource.gizmo.id!==r.resource.gizmo.id);let n=t.findIndex(s=>s.flair.kind===E.Recent);return n===-1&&(n=t.length),t.splice(n,0,r),t}const Sr={handleGizmoInteracted(e,r){const t=e.getQueryData(z(e,r).queryKey);t!=null&&e.setQueryData(R().queryKey,n=>{if(n==null)return n;const s=n.gizmos.find(o=>o.resource.gizmo.id===r);return(s==null?void 0:s.flair.kind)===E.FirstParty||(s==null?void 0:s.flair.kind)===E.SidebarKeep?n:{gizmos:Y(n.gizmos,{resource:t,flair:{kind:E.Recent}})}})},handleGizmoSidebarKeep(e,r){const t=e.getQueryData(z(e,r).queryKey);t!=null&&e.setQueryData(R().queryKey,n=>n==null?n:{gizmos:Y(n.gizmos,{resource:t,flair:{kind:E.SidebarKeep}})})},handleGizmoSidebarHide(e,r){e.setQueryData(R().queryKey,t=>t!=null&&t.gizmos.some(n=>n.resource.gizmo.id===r)?{gizmos:t.gizmos.filter(n=>n.resource.gizmo.id!==r)}:t)}};function Gr(e,r=!1){const t=S();return y(z(t,e,r))}function Pr({gizmoId:e,draft:r,version:t}){const n=S(),s=t?{queryKey:["gizmo","version",{gizmoId:e,version:t}],queryFn:async()=>a.getVersion({gizmoId:e,version:t}),enabled:e!=null}:z(n,e,r);return y(s)}function Cr(e,r){return y({queryKey:["gizmo","userActionSettings",{gizmoId:e}],queryFn:async()=>a.getUserActionSettings(e),enabled:e!=null&&r})}function z(e,r,t=!1){return A({queryKey:["gizmo",{gizmoId:r},{draft:t}],queryFn:async()=>a.getGizmo(r,t),enabled:r!=null,initialData:()=>{var o,i;if(t===!0)return;const n=e.getQueryData(R().queryKey);if(n!=null)return(o=n.gizmos.find(u=>u.resource.gizmo.id===r))==null?void 0:o.resource;const s=e.getQueryData(["gizmos","discovery"]);if(s!=null)for(const u of s.cuts){const d=(i=u.list.items.find(c=>c.resource.gizmo.id===r))==null?void 0:i.resource;if(d!=null)return d}}})}function qr(e,r){return e.fetchQuery(z(e,r))}function vr(e){return y({queryKey:["gizmo",{search:e}],queryFn:async()=>a.getGizmoSearch(e),enabled:e.length>0})}function Fr(e,r){return y({queryKey:["gizmo-search-workspace",{search:e}],queryFn:async()=>a.getGizmoSearchForWorkspace(e),enabled:e.length>0&&r})}function Er(e,r=!1,t=!1,n=null){return Z({queryKey:[t?"gizmo-search-workspace":"gizmo",{query:e,cursor:n}],queryFn:async({pageParam:s})=>t?a.getGizmoSearchForWorkspace(e,n=s):a.getGizmoSearch(e,n=s),initialPageParam:n,getNextPageParam:s=>s.cursor??void 0,enabled:r})}function Tr(){const e=S();return q({mutationFn:async({gizmoId:r,editorData:t})=>{const{instructions:n,name:s,description:o,profilePictureId:i,profilePictureUrl:u,promptStarters:d,tools:c,files:l,trainingDisabled:g}=t;return a.upsertDraft({instructions:n,display:{name:s,description:o,profile_pic_id:i,profile_picture_url:u,prompt_starters:d},tools:c,files:l.map(m=>({...m,location:Te.FILE_SERVICE})),training_disabled:g},r)},onSettled:r=>{r&&(e.setQueryData(z(e,r.gizmo.id,!0).queryKey,r),e.invalidateQueries({queryKey:["gizmos","mine"],refetchType:"none"}))}})}function Rr(){const e=S();return q({mutationFn:async({gizmoId:r,data:t})=>{const{sharingRecipient:n,categories:s}=t,o=await a.promoteDraft({sharing:t.sharingSubjects&&t.sharingSubjects.length>0?t.sharingSubjects:{recipient:n},categories:s},r);if(o.error)throw new Re(o);return o.resource},onSettled:r=>{e.invalidateQueries({queryKey:["gizmos"],refetchType:"all"}),e.invalidateQueries({queryKey:["gizmos","pinned"],refetchType:"none"}),r&&e.setQueryData(z(e,r.gizmo.id,!1).queryKey,r)}})}function Lr(){const e=S();return q({mutationFn:async({gizmoId:r})=>a.deleteGizmo(r),onSettled:()=>{e.invalidateQueries({queryKey:["gizmos"],refetchType:"all"})}})}function Qr(){const e=S();return q({mutationFn:async({name:r,hideName:t,websiteUrl:n,willReceiveSupportEmails:s})=>a.updateBuilderProfile({name:r,hide_name:t,website_url:n,will_receive_support_emails:s}),onSuccess:r=>{e.setQueryData(["builderProfile"],r)},onError:r=>{O.warning(r.message)}})}function br(){return y({queryKey:["builderProfile"],queryFn:async()=>a.getBuilderProfile()})}function wr(){return q({mutationFn:async({gizmoId:e})=>a.copyGizmo({gizmoId:e})})}function Dr(){return y({queryKey:["gizmoCategories"],queryFn:async()=>a.getCategories()})}function Ar(e,r){return!!(r!=null&&[$.PrimaryAssistant,$.GizmoInteraction].includes(r)&&(e!=null&&e.includes(T.GPT_4)))}function Kr(e,r){const t=S();return q({mutationFn:async({rating:n,message:s,includeFrom:o})=>{await a.upsertUserReview(e,n,s,o)},onSuccess:async()=>{t.invalidateQueries({queryKey:["gizmo","review",{gizmoId:e}]})},onError:n=>{O.danger(n.message)}})}export{be as A,vr as B,Fr as C,Er as D,hr as E,ar as F,Ze as G,xe as H,or as I,ir as J,lr as K,br as L,Qr as M,Dr as N,Pr as O,Xe as P,Tr as Q,Rr as R,je as S,z as T,qr as U,ur as V,Ar as W,dr as X,Je as Y,er as Z,Ne as a,sr as b,Ue as c,Gr as d,tr as e,oe as f,We as g,Kr as h,Lr as i,gr as j,pr as k,zr as l,Sr as m,Mr as n,_r as o,yr as p,fr as q,mr as r,se as s,wr as t,cr as u,Cr as v,rr as w,v as x,nr as y,re as z};
//# sourceMappingURL=mtxjf02tkq7k5viu.js.map