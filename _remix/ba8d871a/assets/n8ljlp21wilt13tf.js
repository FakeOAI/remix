var fe=Object.defineProperty;var ye=(e,t,s)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var U=(e,t,s)=>ye(e,typeof t!="symbol"?t+"":t,s);import{fa as me,fi as Z,bH as ge,fj as b,r as f,dv as he,ay as pe,fk as Se,P as I,df as Me,u as y,au as O,R as te,ea as B,aq as se,d4 as Pe,A as X,fl as _e,j as ze,X as ve,ba as j,cX as Ge,ee as Ce,bz as Ee,ag as qe,de as re,E as _,F as C,bP as J}from"./otyn7m3v4o5hjv1m.js";import{c7 as ne,c9 as $,bH as Fe,ej as Te,ek as be,b3 as h,el as we,bS as Le,em as T,aL as u,en as Re,eo as De,ep as Qe,eq as Ae,er as He}from"./g98o1hu13svzcy4j.js";import{T as L,B as Ke,e as Ue}from"./lw3rrnnb5dxcyypl.js";function Ie({clientThreadId:e}){var i;const t=L.getThreadCurrentLeafId(e),r=((i=L.getTree(e).getMessage(t).metadata)==null?void 0:i.model_switcher_deny)??[],n={};r.forEach(a=>{const{slug:d,context:c,reason:l,description:m}=a,g=n[d]??{},q=g[c]??[];q.push({reason:l,description:m}),g[c]=q,n[d]=g});const o=me();for(const{resets_after:a,model_slug:d}of o)[Z.CONVERSATION,Z.REGENERATE].forEach(c=>{const l=n[d]??{},m=l[c]??[],g={reason:ge.RATE_LIMIT,resetsAfter:a};m.push(g),l[c]=m,n[d]=l});return n}const at="text-davinci-002-render-sha",ut="gpt-4",ct="gpt-4o",lt="o1-preview",dt="o1-mini",x=ne({slug:$,max_tokens:4097,title:"Default",description:"",tags:[b.GPT_3_5],product_features:{}}),xe=({default_model:e,tagline:t,color:s,human_category_name:r,category:n,human_category_short_name:o,human_category_shorter_name:i,subscription_level:a,short_explainer:d,subcategory:c,is_beta:l,...m})=>({color:s,tagline:t,defaultModel:e,label:r,shortLabel:o,description:d,shorterLabel:i??o,subscriptionLevel:a,categoryId:n,subcategory:c,isBeta:l,...m}),Oe=({icon:e,icon_filled_src:t,icon_outline_src:s})=>({iconName:e,iconFilledSrc:t,iconOutlineSrc:s}),Ne=({group:e,human_group_name:t,human_group_short_name:s,model_ids:r})=>({group:e,label:t,shortLabel:s,modelIds:r});function ke(){return O({retry:5,queryKey:["modelIcons"],queryFn:async()=>await te.getModelIcons().then(e=>Object.fromEntries(Object.entries(e).map(([t,s])=>[t,Oe(s)])))})}function Be(e){return O({retry:5,queryKey:["models",{isHistoryDisabled:e}],queryFn:async()=>await te.getModels(e).then(t=>{const{models:s,internal_groups:r,categories:n}=t,o=s.map(ne);return{categories:n.concat().reverse().map(xe),groups:(r==null?void 0:r.map(Ne))??[],modelsList:o,modelsMap:Object.fromEntries(o.map(i=>[i.id,i]))}})})}function E(){const e=Me();return y(Be(e))}function ft(){return y(ke())}function je({isRegen:e=!1}={}){const{isLoading:t,data:{categories:s=[],groups:r=[]}={}}=E(),n=f.useMemo(()=>e?s.filter(o=>o.is_regenerate_category!==!1):s.filter(o=>!o.is_regenerate_category),[s,e]);return{isLoading:t,categories:n,groups:r??[]}}function yt(){const{categories:e}=je();return!!e.find(({categoryId:t})=>t===Fe.GPT4o)}function mt(){const{data:e}=E();return f.useMemo(()=>e?new Set(Object.keys(e.modelsMap)):new Set([$]),[e])}const $e={[$]:x};function We(){const{data:e}=E();return(e==null?void 0:e.modelsMap)??$e}function oe(e,t,s){let r=b.GPT_3_5;return s?r=b.GPT_4:t&&(r=b.GPT_4o),(e==null?void 0:e.modelsList.find(n=>n.tags.includes(r)))??(e==null?void 0:e.modelsList[0])??x}function gt(e=!1){const t=he(),s=pe(),[,r]=Se();return f.useCallback(({location:n,modelId:o})=>{const i=t.pathname.includes("/g/");e||i?(I.logNewChatButtonClicked({location:n}),s({pathname:"/",search:`?model=${encodeURIComponent(o)}`})):(r(a=>(a.set("model",encodeURIComponent(o)),a)),I.logNewChatButtonClicked({location:n}))},[e,t,s,r])}function ht(){const{data:{categories:e=[]}={}}=E(),{doesUserHaveAnyAccountsWithPlusFeatures:t}=B();if(t)return null;const s=e.find(Te);return(s==null?void 0:s.defaultModel)??null}function Ve(e){return Ke(e)}function ie(e){const t=Ve(e),s=We();return f.useMemo(()=>t==null?x:s[t]??x,[t,s])}function Ye(e,t){var r;return((r=ie(e).enabledTools)==null?void 0:r.includes(t))??!1}function pt(e){const t=be(),s=ie(e),r=f.useMemo(()=>!t.isSuccess||!t.data?[]:t.data,[t.data,t.isSuccess]),n=Ie({clientThreadId:e});return f.useMemo(()=>{const i=new Set(s.enabledTools||[]);return r.filter(a=>!(!(a.requiredFeatures.length===0||a.requiredFeatures.every(l=>i.has(l)))||!(a.requiredModels.length===0||a.requiredModels.some(l=>!n[l]))))},[r,s,n])}function St(e){return decodeURIComponent(e.model??"")||null}function Mt(){const{data:e}=E(),{doesUserHaveAnyAccountsWithPlusFeatures:t}=B(),s=se();return oe(e,!!t,!!(s!=null&&s.isEnterprise()))}const Ze="hints";class R extends Pe()(s=>({persistedSystemHints:new Set(s)})){constructor(){super(...arguments);U(this,"addPersistedSystemHint",s=>{s===h.Search&&I.logEvent(X.searchModeEngaged),this.setState(({persistedSystemHints:r})=>({persistedSystemHints:new Set(r).add(s)}))});U(this,"removePersistedSystemHint",s=>{s===h.Search&&I.logEvent(X.searchModeDisabled),this.setState(({persistedSystemHints:r})=>{const n=new Set(r);return n.delete(s),{persistedSystemHints:n}})})}}U(R,"getPersistedSystemHints",({persistedSystemHints:s})=>s);const Pt=()=>R.useState(R.getPersistedSystemHints);function _t({children:e,clientThreadId:t,currentLeafId:s}){const r=Ye(t,_e.Search),o=L.getLastMessgageSystemHints(t,s).includes(h.Search)&&r,[i]=f.useState(()=>new R(o?[h.Search]:[]));return f.useEffect(()=>{const a=i.getState().persistedSystemHints;o&&!a.has(h.Search)&&(i==null||i.addPersistedSystemHint(h.Search))},[o,i]),ze.jsx(R.Provider,{store:i,children:e})}function Xe(e){const t=new Set;if(e){const s=e.split(",");Array.isArray(s)&&s.forEach(r=>{Object.values(h).includes(r)&&t.add(r)})}return t}const ae="q",Je="m";function zt(e){const{clientThreadId:t,currentLeafId:s,handleRequestCompletion:r}=e,n=f.useRef(!1),{isLoading:o,data:i}=E(),{doesUserHaveAnyAccountsWithPlusFeatures:a,isLoading:d}=B(),c=se(),l=ve(),m=j(),g=f.useCallback((S,z,M,v)=>{L.updateTree(t,G=>{G.addNode(S,M,z,Ge.User,void 0,v)})},[t]),q=f.useCallback(async(S,{content:z,attachments:M},v,G,F,A)=>{const k=s,p=M.length>0?{attachments:M}:{};p.system_hints=G.systemHints,g(S,k,z,p),r({type:Ce.Next,promptId:S,requestedModelId:A,eventMetadata:v,cancelActiveRequests:!0,completionMetadata:G,turnTracker:F})},[g,r,s]),D=Ee(()=>window.location.pathname)??null,W=we();let V=!o&&!d&&D!=null;const[N,Q]=f.useState(!0);return f.useEffect(()=>{if(!N||n.current)return;const S=Ue.getConversationMode(t);if(!V||S==null)return;if(!tt(D)||et(D)&&W===void 0||L.getServerThreadId(t)!=null){Q(!1);return}const{[ae]:z,[Je]:M,[Ze]:v,...G}=l.query,F=(typeof z=="string"?z:null)??(typeof M=="string"?M:null);if(!F||!F.trim()){Q(!1);return}const A=Xe(v),k=qe();n.current=!0;let p=i==null?void 0:i.modelsList;A.has(h.Search)&&(p=p==null?void 0:p.filter(K=>{var Y;return(Y=K.enabledTools)==null?void 0:Y.includes(h.Search)}));const H=i&&oe({...i,modelsList:p??[]},!!a,!!(c!=null&&c.isEnterprise()));if(l.replace({query:G},void 0,{shallow:!0}),H==null){m.warning("No model available for this request"),Q(!1);return}const de=new Le;(e.prefetchSearchPromise??Promise.resolve(null)).then(K=>{q(k,{content:F,attachments:[]},{eventSource:"url"},{conversationMode:S,source:"instant-query",systemHints:v?Array.from(A):void 0,prefetchIds:K!=null?[K]:void 0},de,H==null?void 0:H.id),Q(!1)})},[o,d,V,D,l,i,a,c,q,N,t,W,m,e.prefetchSearchPromise]),N}function et(e){return ue(e)}function ue(e){return e==null?!1:/^\/g\/[\w-]+$/.test(e)}function tt(e){return e==null?!1:e==="/"||ue(e)}const vt="GPT Builder";function Gt(e){if(e)return`ChatGPT - ${e}`}function ce(e){return e.gizmo.short_url??e.gizmo.id??"-"}function le(e){return`/g/${e}`}function Ct(e){return`https://chatgpt.com${le(e)}`}function st(e){return le(ce(e))}function Et(e,t){const s=new URLSearchParams;return t!=null&&s.set(ae,t),Re(new URL(`${st(e)}?${s}`,"https://chatgpt.com"))}function qt(e){return`/g/${ce(e)}`}function Ft(e){return De(e)&&e.gizmo.live_version===0||Qe(e)&&e.liveVersion===0}function Tt(e,t){return y({queryKey:["gizmos","discovery",{locale:e,isAnon:t}],queryFn:async()=>u.getGizmoDiscovery(e,t)})}function bt({cutId:e,locale:t,limit:s,cursor:r,enabled:n=!0}){return re({queryKey:["gizmos","discovery",{cutId:e,locale:t,limit:s}],queryFn:async({pageParam:o})=>u.getGizmoDiscoveryCut(e,{locale:t,cursor:o,limit:s}),initialPageParam:r,getNextPageParam:o=>o.list.cursor??void 0,enabled:n})}function wt(){return y({queryKey:["gizmos","pinned"],queryFn:async()=>u.getGizmoPinned()})}function w(){return O({queryKey:["gizmos","bootstrap"],queryFn:async()=>u.getGizmoBootstrap().then(e=>({gizmos:e.gizmos.map(t=>({resource:t.resource,flair:t.flair}))}))})}function Lt(){return y(w())}function ee(e,t){const s=e.filter(n=>n.resource.gizmo.id!==t.resource.gizmo.id);let r=s.findIndex(n=>n.flair.kind===T.Recent);return r===-1&&(r=s.length),s.splice(r,0,t),s}const Rt={handleGizmoInteracted(e,t){const s=e.getQueryData(P(e,t).queryKey);s!=null&&e.setQueryData(w().queryKey,r=>{if(r==null)return r;const n=r.gizmos.find(o=>o.resource.gizmo.id===t);return(n==null?void 0:n.flair.kind)===T.FirstParty||(n==null?void 0:n.flair.kind)===T.SidebarKeep?r:{gizmos:ee(r.gizmos,{resource:s,flair:{kind:T.Recent}})}})},handleGizmoSidebarKeep(e,t){const s=e.getQueryData(P(e,t).queryKey);s!=null&&e.setQueryData(w().queryKey,r=>r==null?r:{gizmos:ee(r.gizmos,{resource:s,flair:{kind:T.SidebarKeep}})})},handleGizmoSidebarHide(e,t){e.setQueryData(w().queryKey,s=>s!=null&&s.gizmos.some(r=>r.resource.gizmo.id===t)?{gizmos:s.gizmos.filter(r=>r.resource.gizmo.id!==t)}:s)}};function Dt(e,t=!1){const s=_();return y(P(s,e,t))}function Qt({gizmoId:e,draft:t,version:s}){const r=_(),n=s?{queryKey:["gizmo","version",{gizmoId:e,version:s}],queryFn:async()=>u.getVersion({gizmoId:e,version:s}),enabled:e!=null}:P(r,e,t);return y(n)}function At(e,t){return y({queryKey:["gizmo","userActionSettings",{gizmoId:e}],queryFn:async()=>u.getUserActionSettings(e),enabled:e!=null&&t})}function P(e,t,s=!1){return O({queryKey:["gizmo",{gizmoId:t},{draft:s}],queryFn:async()=>u.getGizmo(t,s),enabled:t!=null,initialData:()=>{var o,i;if(s===!0)return;const r=e.getQueryData(w().queryKey);if(r!=null)return(o=r.gizmos.find(a=>a.resource.gizmo.id===t))==null?void 0:o.resource;const n=e.getQueryData(["gizmos","discovery"]);if(n!=null)for(const a of n.cuts){const d=(i=a.list.items.find(c=>c.resource.gizmo.id===t))==null?void 0:i.resource;if(d!=null)return d}}})}function Ht(e,t){return e.fetchQuery(P(e,t))}function Kt(e){return y({queryKey:["gizmo",{search:e}],queryFn:async()=>u.getGizmoSearch(e),enabled:e.length>0})}function Ut(e,t){return y({queryKey:["gizmo-search-workspace",{search:e}],queryFn:async()=>u.getGizmoSearchForWorkspace(e),enabled:e.length>0&&t})}function It(e,t=!1,s=!1,r=null){return re({queryKey:[s?"gizmo-search-workspace":"gizmo",{query:e,cursor:r}],queryFn:async({pageParam:n})=>s?u.getGizmoSearchForWorkspace(e,r=n):u.getGizmoSearch(e,r=n),initialPageParam:r,getNextPageParam:n=>n.cursor??void 0,enabled:t})}function xt(){const e=_();return C({mutationFn:async({gizmoId:t,editorData:s})=>{const{instructions:r,name:n,description:o,profilePictureId:i,profilePictureUrl:a,promptStarters:d,tools:c,files:l,trainingDisabled:m}=s;return u.upsertDraft({instructions:r,display:{name:n,description:o,profile_pic_id:i,profile_picture_url:a,prompt_starters:d},tools:c,files:l.map(g=>({...g,location:Ae.FILE_SERVICE})),training_disabled:m},t)},onSettled:t=>{t&&(e.setQueryData(P(e,t.gizmo.id,!0).queryKey,t),e.invalidateQueries({queryKey:["gizmos","mine"],refetchType:"none"}))}})}function Ot(){const e=_();return C({mutationFn:async({gizmoId:t,data:s})=>{const{sharingRecipient:r,categories:n}=s,o=await u.promoteDraft({sharing:s.sharingSubjects&&s.sharingSubjects.length>0?s.sharingSubjects:{recipient:r},categories:n},t);if(o.error)throw new He(o);return o.resource},onSettled:t=>{e.invalidateQueries({queryKey:["gizmos"],refetchType:"all"}),e.invalidateQueries({queryKey:["gizmos","pinned"],refetchType:"none"}),t&&e.setQueryData(P(e,t.gizmo.id,!1).queryKey,t)}})}function Nt(){const e=_();return C({mutationFn:async({gizmoId:t})=>u.deleteGizmo(t),onSettled:()=>{e.invalidateQueries({queryKey:["gizmos"],refetchType:"all"})}})}function kt(){const e=_(),t=j();return C({mutationFn:async({name:s,hideName:r,websiteUrl:n,willReceiveSupportEmails:o})=>u.updateBuilderProfile({name:s,hide_name:r,website_url:n,will_receive_support_emails:o}),onSuccess:s=>{e.setQueryData(["builderProfile"],s)},onError:s=>{t.warning(s.message)}})}function Bt(){return y({queryKey:["builderProfile"],queryFn:async()=>u.getBuilderProfile()})}function jt(){return C({mutationFn:async({gizmoId:e})=>u.copyGizmo({gizmoId:e})})}function $t(){return y({queryKey:["gizmoCategories"],queryFn:async()=>u.getCategories()})}function Wt(e,t){return!!(t!=null&&[J.PrimaryAssistant,J.GizmoInteraction].includes(t)&&(e!=null&&e.includes(b.GPT_4)))}function Vt(e,t){const s=_(),r=j();return C({mutationFn:async({rating:n,message:o,includeFrom:i})=>{await u.upsertUserReview(e,n,o,i)},onSuccess:async()=>{s.invalidateQueries({queryKey:["gizmo","review",{gizmoId:e}]})},onError:n=>{r.danger(n.message)}})}export{zt as $,Kt as A,Ut as B,It as C,Tt as D,Ht as E,Bt as F,ct as G,kt as H,$t as I,Qt as J,E as K,ut as L,xt as M,Ot as N,P as O,R as P,ft as Q,Ie as R,Ye as S,pt as T,We as U,Wt as V,vt as W,lt as X,dt as Y,ht as Z,at as _,Ve as a,_t as a0,Dt as b,yt as c,le as d,Vt as e,Nt as f,st as g,qt as h,je as i,Ft as j,Mt as k,Lt as l,Rt as m,bt as n,wt as o,Gt as p,Ct as q,Et as r,ce as s,jt as t,gt as u,At as v,mt as w,St as x,Pt as y,ie as z};
//# sourceMappingURL=n8ljlp21wilt13tf.js.map