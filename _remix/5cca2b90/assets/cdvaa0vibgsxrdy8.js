import{eQ as b,r as y,dq as j,bo as V,eR as Y,P as U,eS as Z,ao as c,e6 as K,ar as J,av as E,F as A,W as X,cQ as ee,e4 as re,bk as te,bq as ne,bF as O,B as p,D as G,a6 as I,bR as T}from"./d5wu36845ofngo69.js";import{bW as k,B as F,bB as se,d7 as oe,d8 as ie,bs as ue,d9 as v,aK as i,da as ae,db as ce,dc as le,dd as fe,de as ye}from"./dyuy7l4f2wj2f3nf.js";import{r as me,T as D,g as de}from"./fdjv7ui579wbejth.js";const Te="text-davinci-002-render-sha",De="gpt-4",Le="gpt-4o",Ke="o1-preview",Ae="o1-mini",S=k({slug:F,max_tokens:4097,title:"Default",description:"",tags:[b.GPT_3_5],product_features:{}}),ge=({default_model:e,tagline:r,color:t,human_category_name:n,category:s,human_category_short_name:o,human_category_shorter_name:u,subscription_level:a,short_explainer:l,subcategory:f,...m})=>({color:t,tagline:r,defaultModel:e,label:n,shortLabel:o,description:l,shorterLabel:u??o,subscriptionLevel:a,categoryId:s,subcategory:f,...m}),pe=({icon:e,icon_filled_src:r,icon_outline_src:t})=>({iconName:e,iconFilledSrc:r,iconOutlineSrc:t}),he=({group:e,human_group_name:r,human_group_short_name:t,model_ids:n})=>({group:e,label:r,shortLabel:t,modelIds:n});function ze(){return E({retry:5,queryKey:["modelIcons"],queryFn:async()=>await A.getModelIcons().then(e=>Object.fromEntries(Object.entries(e).map(([r,t])=>[r,pe(t)])))})}function _e(e){return E({retry:5,queryKey:["models",{isHistoryDisabled:e}],queryFn:async()=>await A.getModels(e).then(r=>{const{models:t,internal_groups:n,categories:s}=r,o=t.map(k);return{categories:s.concat().reverse().map(ge),groups:(n==null?void 0:n.map(he))??[],modelsList:o,modelsMap:Object.fromEntries(o.map(u=>[u.id,u]))}})})}function M(){const e=Z();return c(_e(e))}function Oe(){return c(ze())}function Ge({isRegen:e=!1}={}){const{isLoading:r,data:{categories:t=[],groups:n=[]}={}}=M(),s=y.useMemo(()=>e?t.filter(o=>o.is_regenerate_category!==!1):t.filter(o=>!o.is_regenerate_category),[t,e]);return{isLoading:r,categories:s,groups:n??[]}}function Ie(){const{categories:e}=Ge();return!!e.find(({categoryId:r})=>r===se.GPT4o)}function ke(){const{data:e}=M();return y.useMemo(()=>e?new Set(Object.keys(e.modelsMap)):new Set([F]),[e])}const Me={[F]:S};function Pe(){const{data:e}=M();return(e==null?void 0:e.modelsMap)??Me}function Ce(e,r,t){let n=b.GPT_3_5;return t?n=b.GPT_4:r&&(n=b.GPT_4o),(e==null?void 0:e.modelsList.find(s=>s.tags.includes(n)))??(e==null?void 0:e.modelsList[0])??S}function Be(e=!1){const r=j(),t=V(),[,n]=Y();return y.useCallback(({location:s,modelId:o})=>{const u=r.pathname.includes("/g/");e||u?(U.logNewChatButtonClicked({location:s}),t({pathname:"/",search:`?model=${encodeURIComponent(o)}`})):(n(a=>(a.set("model",encodeURIComponent(o)),a)),U.logNewChatButtonClicked({location:s}))},[e,r,t,n])}function Ne(){const{data:{categories:e=[]}={}}=M(),{doesUserHaveAnyAccountsWithPlusFeatures:r}=K();if(r)return null;const t=e.find(oe);return(t==null?void 0:t.defaultModel)??null}function ve(e){return me(e)}function xe(e){const r=ve(e),t=Pe();return y.useMemo(()=>r==null?S:t[r]??S,[r,t])}function $e(e){return decodeURIComponent(e.model??"")||null}function He(){const{data:e}=M(),{doesUserHaveAnyAccountsWithPlusFeatures:r}=K(),t=J();return Ce(e,!!r,!!(t!=null&&t.isEnterprise()))}const B="q",be="m";function We(e){const{clientThreadId:r,currentLeafId:t,handleRequestCompletion:n}=e,s=y.useRef(!1),{isLoading:o}=M(),u=X(),a=y.useCallback((d,h,z,_)=>{D.updateTree(r,C=>{C.addNode(d,z,h,ee.User,void 0,_)})},[r]),l=y.useCallback(async(d,{content:h,attachments:z},_,C,Q)=>{const H=t,W=z.length>0?{attachments:z}:{};a(d,H,h,W),n({type:re.Next,promptId:d,eventMetadata:_,cancelActiveRequests:!0,completionMetadata:C,turnTracker:Q})},[a,n,t]),f=te(()=>window.location.pathname)??null;let m=!o&&Se(f);const P=de.getConversationMode(r),w=ie();qe(f)&&w===void 0&&(m=!1),y.useEffect(()=>{if(!m||s.current)return;const{[B]:d,[be]:h,...z}=u.query,_=(typeof d=="string"?d:null)??(typeof h=="string"?h:null);if(!_||D.getServerThreadId(r)!=null||P==null)return;const C=ne();s.current=!0,u.replace({query:z},void 0,{shallow:!0});const Q=new ue;l(C,{content:_,attachments:[]},{eventSource:"url"},{conversationMode:P,source:"instant-query"},Q)},[m,u,l,r,P])}function qe(e){return N(e)}function N(e){return e==null?!1:/^\/g\/[\w-]+$/.test(e)}function Se(e){return e==null?!1:e==="/"||N(e)}const je="GPT Builder";function Ve(e){if(e)return`ChatGPT - ${e}`}function R(e){return e.gizmo.short_url??e.gizmo.id??"-"}function x(e){return`/g/${e}`}function Ye(e){return`https://chatgpt.com${x(e)}`}function Ee(e){return x(R(e))}function Ze(e,r){const t=new URLSearchParams;return r!=null&&t.set(B,r),ae(new URL(`${Ee(e)}?${t}`,"https://chatgpt.com"))}function Je(e){return`/g/${R(e)}`}function Xe(e){return ce(e)&&e.gizmo.live_version===0||le(e)&&e.liveVersion===0}function er(e,r){return c({queryKey:["gizmos","discovery",{locale:e,isAnon:r}],queryFn:async()=>i.getGizmoDiscovery(e,r)})}function rr({cutId:e,locale:r,limit:t,cursor:n,enabled:s=!0}){return O({queryKey:["gizmos","discovery",{cutId:e,locale:r,limit:t}],queryFn:async({pageParam:o})=>i.getGizmoDiscoveryCut(e,{locale:r,cursor:o,limit:t}),initialPageParam:n,getNextPageParam:o=>o.list.cursor??void 0,enabled:s})}function tr(){return c({queryKey:["gizmos","pinned"],queryFn:async()=>i.getGizmoPinned()})}function q(){return E({queryKey:["gizmos","bootstrap"],queryFn:async()=>i.getGizmoBootstrap().then(e=>({gizmos:e.gizmos.map(r=>({resource:r.resource,flair:r.flair}))}))})}function nr(){return c(q())}function L(e,r){const t=e.filter(s=>s.resource.gizmo.id!==r.resource.gizmo.id);let n=t.findIndex(s=>s.flair.kind===v.Recent);return n===-1&&(n=t.length),t.splice(n,0,r),t}const sr={handleGizmoInteracted(e,r){const t=e.getQueryData(g(e,r).queryKey);t!=null&&e.setQueryData(q().queryKey,n=>{if(n==null)return n;const s=n.gizmos.find(o=>o.resource.gizmo.id===r);return(s==null?void 0:s.flair.kind)===v.FirstParty||(s==null?void 0:s.flair.kind)===v.SidebarKeep?n:{gizmos:L(n.gizmos,{resource:t,flair:{kind:v.Recent}})}})},handleGizmoSidebarKeep(e,r){const t=e.getQueryData(g(e,r).queryKey);t!=null&&e.setQueryData(q().queryKey,n=>n==null?n:{gizmos:L(n.gizmos,{resource:t,flair:{kind:v.SidebarKeep}})})},handleGizmoSidebarHide(e,r){e.setQueryData(q().queryKey,t=>t!=null&&t.gizmos.some(n=>n.resource.gizmo.id===r)?{gizmos:t.gizmos.filter(n=>n.resource.gizmo.id!==r)}:t)}};function or(e,r=!1){const t=p();return c(g(t,e,r))}function ir({gizmoId:e,draft:r,version:t}){const n=p(),s=t?{queryKey:["gizmo","version",{gizmoId:e,version:t}],queryFn:async()=>i.getVersion({gizmoId:e,version:t}),enabled:e!=null}:g(n,e,r);return c(s)}function ur(e,r){return c({queryKey:["gizmo","userActionSettings",{gizmoId:e}],queryFn:async()=>i.getUserActionSettings(e),enabled:e!=null&&r})}function g(e,r,t=!1){return E({queryKey:["gizmo",{gizmoId:r},{draft:t}],queryFn:async()=>i.getGizmo(r,t),enabled:r!=null,initialData:()=>{var o,u;if(t===!0)return;const n=e.getQueryData(q().queryKey);if(n!=null)return(o=n.gizmos.find(a=>a.resource.gizmo.id===r))==null?void 0:o.resource;const s=e.getQueryData(["gizmos","discovery"]);if(s!=null)for(const a of s.cuts){const l=(u=a.list.items.find(f=>f.resource.gizmo.id===r))==null?void 0:u.resource;if(l!=null)return l}}})}function ar(e,r){return e.fetchQuery(g(e,r))}function cr(e){return c({queryKey:["gizmo",{search:e}],queryFn:async()=>i.getGizmoSearch(e),enabled:e.length>0})}function lr(e,r){return c({queryKey:["gizmo-search-workspace",{search:e}],queryFn:async()=>i.getGizmoSearchForWorkspace(e),enabled:e.length>0&&r})}function fr(e,r=!1,t=!1,n=null){return O({queryKey:[t?"gizmo-search-workspace":"gizmo",{query:e,cursor:n}],queryFn:async({pageParam:s})=>t?i.getGizmoSearchForWorkspace(e,n=s):i.getGizmoSearch(e,n=s),initialPageParam:n,getNextPageParam:s=>s.cursor??void 0,enabled:r})}function yr(){const e=p();return G({mutationFn:async({gizmoId:r,editorData:t})=>{const{instructions:n,name:s,description:o,profilePictureId:u,profilePictureUrl:a,promptStarters:l,tools:f,files:m,trainingDisabled:P}=t;return i.upsertDraft({instructions:n,display:{name:s,description:o,profile_pic_id:u,profile_picture_url:a,prompt_starters:l},tools:f,files:m.map(w=>({...w,location:fe.FILE_SERVICE})),training_disabled:P},r)},onSettled:r=>{r&&(e.setQueryData(g(e,r.gizmo.id,!0).queryKey,r),e.invalidateQueries({queryKey:["gizmos","mine"],refetchType:"none"}))}})}function mr(){const e=p();return G({mutationFn:async({gizmoId:r,data:t})=>{const{sharingRecipient:n,categories:s}=t,o=await i.promoteDraft({sharing:t.sharingSubjects&&t.sharingSubjects.length>0?t.sharingSubjects:{recipient:n},categories:s},r);if(o.error)throw new ye(o);return o.resource},onSettled:r=>{e.invalidateQueries({queryKey:["gizmos"],refetchType:"all"}),e.invalidateQueries({queryKey:["gizmos","pinned"],refetchType:"none"}),r&&e.setQueryData(g(e,r.gizmo.id,!1).queryKey,r)}})}function dr(){const e=p();return G({mutationFn:async({gizmoId:r})=>i.deleteGizmo(r),onSettled:()=>{e.invalidateQueries({queryKey:["gizmos"],refetchType:"all"})}})}function gr(){const e=p();return G({mutationFn:async({name:r,hideName:t,websiteUrl:n,willReceiveSupportEmails:s})=>i.updateBuilderProfile({name:r,hide_name:t,website_url:n,will_receive_support_emails:s}),onSuccess:r=>{e.setQueryData(["builderProfile"],r)},onError:r=>{I.warning(r.message)}})}function pr(){return c({queryKey:["builderProfile"],queryFn:async()=>i.getBuilderProfile()})}function hr(){return G({mutationFn:async({gizmoId:e})=>i.copyGizmo({gizmoId:e})})}function zr(){return c({queryKey:["gizmoCategories"],queryFn:async()=>i.getCategories()})}function _r(e,r){return!!(r!=null&&[T.PrimaryAssistant,T.GizmoInteraction].includes(r)&&(e!=null&&e.includes(b.GPT_4)))}function Gr(e,r){const t=p();return G({mutationFn:async({rating:n,message:s,includeFrom:o})=>{await i.upsertUserReview(e,n,s,o)},onSuccess:async()=>{t.invalidateQueries({queryKey:["gizmo","review",{gizmoId:e}]})},onError:n=>{I.danger(n.message)}})}function Mr(e,r){return r?`/g/${R(r)}/c/${e}`:`/c/${e}`}function Pr(){return"/gpts"}function Cr(){return"/gpts/mine"}function $(e){return e?`/gpts/editor/${e}`:"/gpts/editor"}function vr(e){const r=we();return e==null?r:$(e)}function we(e){return $(e)}function br(e){try{const r=new URL(e);return r.hostname=r.hostname.replace(/^(www\.|web\.|mbasic\.|mobile\.)(secure\.)?/,""),r.pathname="",[...r.searchParams.keys()].forEach(t=>r.searchParams.delete(t)),r.toString()}catch{return e}}function Qe(e){if(!e)return null;try{return new URL(e).hostname}catch{return null}}function qr(e){const r=Qe(e);return r?r.replace(/^www\./,""):e}export{Ne as $,xe as A,Cr as B,Pr as C,cr as D,lr as E,fr as F,Le as G,er as H,pr as I,gr as J,zr as K,ir as L,M,De as N,yr as O,mr as P,g as Q,x as R,ke as S,$e as T,ar as U,Pe as V,_r as W,je as X,Ke as Y,Ae as Z,Oe as _,ve as a,Te as a0,We as a1,Ge as b,He as c,or as d,Ie as e,Gr as f,Mr as g,dr as h,Je as i,Xe as j,$ as k,Ee as l,we as m,qr as n,nr as o,Ve as p,sr as q,rr as r,tr as s,Ye as t,Be as u,Ze as v,br as w,ur as x,vr as y,hr as z};
//# sourceMappingURL=cdvaa0vibgsxrdy8.js.map