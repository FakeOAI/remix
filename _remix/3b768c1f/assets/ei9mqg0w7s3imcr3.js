import{aw as A,u as O,r as m,j as k,x as q,ed as N,ag as G,a5 as H,bQ as v,ee as f,ef as B,a6 as x,cN as I,cz as F,R as j,cL as W,dQ as Q,eg as X,eh as $,X as K,dm as Y}from"./kx5kvg0igqglf8xo.js";import{aP as V,c2 as Z,c3 as J,c4 as ee,aw as _,ax as R,E as p,c5 as re,c6 as te,c7 as se,Z as b,z as ne,c8 as ae,ae as oe,ad as de,c9 as ue}from"./n0xnu42ro5xj12e5.js";import{m as ie}from"./kfnpuksrkycemrgh.js";function Fe(){const{imageResults:e}=ce();J([...e.map(t=>D(t))])}const le=V((...e)=>Z(...e),5e3);function ce(e=!1){var l,c;const t=ee(["image_results","image_try_hard_status","execution_status"]),r=_(R.threadId),s=p(t.toReversed().flatMap(T=>{var C;return(C=T.image_results)==null?void 0:C.entries})).map(T=>({...T,thumbnail_url:T.thumbnail_url.replace(/^http:\/\//,"https://"),content_url:T.content_url.replace(/^http:\/\//,"https://")})),n=_(R.hasModelResponseText),o=t.some(T=>re(T));let u=s.length===0&&!n;return r!=null&&e&&!u&&s.length===0&&((l=t[0])==null?void 0:l.image_try_hard_status)==="not_attempted"&&(le(r,0),u=!0),e&&((c=t[0])==null?void 0:c.image_try_hard_status)==="in_progress"&&(u=!0),{imageResults:s,isLoading:u,isErrored:s.length===0&&o}}function Ee(){const e=te(),t=_(R.hasTurnError),r=_(R.hasModelResponseText),s=E(e);return{imageResults:s,isLoading:s.length===0&&!r,isErrored:s.length===0&&t}}function E(e){return p(e.flatMap(t=>t.type==="image_v2"?t.images:[]))}function he(e){const t={};return e.map(r=>{r.type==="webpage"||r.type==="webpage_extended"?r.url&&!t[r.url]&&(t[r.url]=r):r.type==="grouped_webpages"&&r.items.forEach(s=>{s.url&&!t[s.url]&&(t[s.url]=s)})}),Object.values(t)}function Te(e){return A({queryKey:["downloadImage",{imageUrl:e}],queryFn:()=>new Promise((t,r)=>{const s=new Image;s.onload=()=>{t({width:s.width,height:s.height})},s.onerror=()=>{r()},s.src=e}),enabled:e!=null})}function Ue(e){return O(Te(e))}const U={width:474,square:!0};function D(e,t=U){if(e==null)return;const r=new URL(e.thumbnail_url);if(r.hostname.indexOf(".bing.")===-1)return e.thumbnail_url;const s=Math.min(t.width,e.content_size.width),n=t.height??Math.floor(s*e.content_size.height/e.content_size.width);if(r.searchParams.delete("pid"),t.square){const o=Math.min(s,n);r.searchParams.set("w",o.toString()),r.searchParams.set("h",o.toString())}else r.searchParams.set("w",s.toString()),r.searchParams.set("h",n.toString());return r.searchParams.set("c","7"),r.toString()}function De(e,t=U){return m.useMemo(()=>D(e,t),[e,t])}const ge={type:"spring",stiffness:700,damping:82};function Pe({children:e,className:t}){return k.jsx(ie.div,{animate:{opacity:1},initial:{width:"100%",height:"100%",translateX:0,translateY:0,opacity:0},whileHover:{width:"103%",height:"103%",translateX:"-1.5%",translateY:"-1.5%"},transition:ge,className:t,children:e})}function P(e,t,r){var n,o;if(r)return r;const s=e[t];return(o=(n=s==null?void 0:s.message)==null?void 0:n.metadata)!=null&&o.model_slug?s.message.metadata.model_slug:s!=null&&s.parentId?P(e,s.parentId):null}function ze(){return`${N}${G()}`}let me=0;function Ae(){return me++}function L(e){return e.startsWith(N)}const ve=()=>new f,fe=()=>Object.freeze({lastModelUsed:null,createTime:new Date});var Ie=(e=>(e.NewChat="NewChat",e.Server="Server",e.User="User",e.Generated="Generated",e.Unknown="Unknown",e))(Ie||{});const y={},i=q(H(()=>({threads:{},clientNewThreadIdToServerIdMapping:{},threadRetainCounts:{}}))),d=i.getState,g=i.setState,h={resolveThreadId:(e,t=d())=>t.clientNewThreadIdToServerIdMapping[e]??e,getThread:(e,t=d())=>{const r=h.resolveThreadId(e,t);return t.threads[r]??null},hasThread:(e,t=d())=>{const r=h.resolveThreadId(e,t);return t.threads[r]!=null},isLoading:(e,t=d())=>{var s;const r=h.resolveThreadId(e,t);return(s=t.threads[r])==null?void 0:s.isLoading},getConversationMode:(e,t=d())=>{var s;const r=h.resolveThreadId(e,t);return(s=t.threads[r])==null?void 0:s.mode},getThreadModelId:(e,t=d())=>{var r;return((r=h.getThread(e,t))==null?void 0:r.modelId)??null},getGizmoId(e,t=d()){const r=t.threads[h.resolveThreadId(e,t)];if((r==null?void 0:r.mode.kind)===v.GizmoInteraction||(r==null?void 0:r.mode.kind)===v.GizmoTest)return r.mode.gizmo_id},getThreadTitleSource(e,t=d()){const r=h.resolveThreadId(e,t),s=t.threads[r];return s!=null?s.titleSource:"Unknown"},getThreadCreateTime(e,t=d()){var s,n;const r=h.resolveThreadId(e,t);return(n=(s=t.threads[r])==null?void 0:s.initialThreadData)==null?void 0:n.createTime},getCurrentNode(e,t=d()){var n;const r=h.resolveThreadId(e,t),s=((n=t.threads[r])==null?void 0:n.currentLeafId)??"root";return a.getTree(e).getNodeByIdOrMessageId(s)},isThreadUrlSafe(e,t,r=d()){var n;const s=h.resolveThreadId(e,r);return((n=r.threads[s])==null?void 0:n.safeUrls.includes(t))??!1},getRatingPrompt(e,t=d()){var s;const r=h.resolveThreadId(e,t);return(s=t.threads[r])==null?void 0:s.promptGptRating},getTurnContentReferences(e,t,r=d()){var n,o;const s=(o=(n=h.getThread(e,r))==null?void 0:n.conversationTurns[t])==null?void 0:o.messages;return s?p(s.flatMap(u=>{var l,c;return(c=(l=u.message)==null?void 0:l.metadata)==null?void 0:c.content_references})):[]},getTurnSearchResults(e,t,r=d()){var n,o;const s=(o=(n=h.getThread(e,r))==null?void 0:n.conversationTurns[t])==null?void 0:o.messages;return s?p(s.flatMap(u=>we(u.message))):[]},getTurnImageSearchResults(e,t,r=d()){var n,o;const s=(o=(n=h.getThread(e,r))==null?void 0:n.conversationTurns[t])==null?void 0:o.messages;return s?p(s.flatMap(u=>Me(u.message))).map(u=>({...u,thumbnail_url:u.thumbnail_url.replace(/^http:\/\//,"https://"),content_url:u.content_url.replace(/^http:\/\//,"https://")})):[]},getIsArchived(e,t=d()){var r,s;return((s=(r=h.getThread(e,t))==null?void 0:r.initialThreadData)==null?void 0:s.isArchived)??!1},getUpdateTime(e,t=d()){const r=h.getThread(e,t);if(r!=null&&r.update_time)return r==null?void 0:r.update_time;const s=r==null?void 0:r.initialThreadData.createTime;return s?s.getTime()/1e3:null}},a={initThread:(e,t,r=null)=>{const s=a.resolveThreadId(e);if(d().threads[s]==null){const n=X();g(o=>{o.threads[s]={initialThreadData:n,mode:t,modelId:r,tree:new f(f.createTree()),title:null,titleSource:"NewChat",currentLeafId:"root",conversationTurns:[],safeUrls:[],isLoading:!L(s),docsReferencedByURL:{},conversationOrigin:null}})}},setThreadModelId:(e,t)=>{const r=a.resolveThreadId(e);g(s=>{const n=s.threads[r];n!=null&&(n.modelId=t)})},updateConversationMode:(e,t)=>{const r=a.resolveThreadId(e);g(s=>{const n=s.threads[r];n!=null&&(n.mode=t)})},getServerThreadId:e=>L(e)?d().clientNewThreadIdToServerIdMapping[e]:e,setServerIdForNewThread:(e,t)=>{d().clientNewThreadIdToServerIdMapping[e]===void 0&&g(r=>{r.threads[t]=r.threads[e],delete r.threads[e],r.clientNewThreadIdToServerIdMapping[e]=t})},initThreadFromServerData:(e,t,r=!1,s=void 0,n=!1)=>{var M;const o=a.resolveThreadId(e);if(!n&&(d().threads[o]==null&&!r||((M=d().threads[o])==null?void 0:M.isLoading)===!1))return;const u=B(t),l=u.mapping??f.createTree(),c={lastModelUsed:P(u.mapping,u.initialCurrentLeafId,t.default_model_slug),createTime:"create_time"in t?new Date(t.create_time*1e3):void 0,isArchived:t.is_archived??!1},T=new f(l),C=u.initialCurrentLeafId??u.rootId??"root",z="has_user_editable_context"in t?{hasUserEditableContextFlag:t.has_user_editable_context,authorName:t.author_name,model:"model"in t&&t.model!=null?se(t.model):void 0}:void 0;g(w=>{const S=w.threads[o];w.threads[o]={modelId:(S==null?void 0:S.modelId)??null,initialThreadData:c,mode:t.gizmo_id!=null?{kind:v.GizmoInteraction,gizmo_id:t.gizmo_id}:{kind:v.PrimaryAssistant,plugin_ids:t.plugin_ids},sharedConversationMetadata:z,title:t.title??null,titleSource:"Server",tree:T,currentLeafId:C,isLoading:!1,continuingFromSharedConversationId:s,safeUrls:t.safe_urls??[],conversationTurns:[],docsReferencedByURL:{},conversationOrigin:t.conversation_origin??null,async_status:t.async_status??null,update_time:t.update_time??null}}),b.publish({kind:"createConversation",clientThreadId:e}),a.recomputeConversationTurnsForCurrentLeafId(o,[])},updateInitialThreadDataForNewThread:(e,t)=>{const r=a.resolveThreadId(e);g(s=>{const n=s.threads[r];n!=null&&(n.initialThreadData.lastModelUsed=t)})},getThreadCurrentLeafId:e=>{var r;const t=a.resolveThreadId(e);return((r=d().threads[t])==null?void 0:r.currentLeafId)??"root"},getThreadSafeUrls:e=>{var r;const t=a.resolveThreadId(e);return(r=d().threads[t])==null?void 0:r.safeUrls},addThreadSafeUrl:(e,t)=>{const r=a.resolveThreadId(e);r&&g(s=>{const n=s.threads[r];n!=null&&n.safeUrls.push(t)})},setThreadCurrentLeafId:(e,t)=>{const r=a.resolveThreadId(e);d().threads[r]!=null&&g(n=>{const o=n.threads[r];if(o==null)return;o.currentLeafId=t;const u=a.computeThreadConversationTurns(r,o.currentLeafId,o.conversationTurns);o.conversationTurns=u})},setTitle:(e,t,r)=>{const s=a.resolveThreadId(e);g(n=>{const o=n.threads[s];o&&(o.title=t,o.titleSource=r)})},getTitle:e=>{var r;const t=h.resolveThreadId(e);return((r=d().threads[t])==null?void 0:r.title)??void 0},getTitleAndSource:e=>({title:a.getTitle(e),titleSource:h.getThreadTitleSource(e)}),getConversationOrigin:e=>{var r;const t=h.resolveThreadId(e);return((r=d().threads[t])==null?void 0:r.conversationOrigin)??null},setConversationOrigin:(e,t)=>{const r=a.resolveThreadId(e);g(s=>{const n=s.threads[r];n&&(n.conversationOrigin=t)})},deleteNodesByFilter:(e,t)=>{const r=a.getThreadCurrentLeafId(e);a.updateTree(e,s=>{s.deleteNodesByFilter(t).includes(r)&&a.setThreadCurrentLeafId(e,"root")})},updateTree:(e,t)=>{var l;const r=a.resolveThreadId(e);if(!(d().threads[r]!=null)){console.warn("Thread does not exist, cannot update tree: ",r);return}const n=a.getTree(e);t(n);const u=((l=d().threads[r])==null?void 0:l.conversationTurns)??[];a.recomputeConversationTurnsForCurrentLeafId(r,u)},getTree:e=>{var r;const t=a.resolveThreadId(e);return((r=d().threads[t])==null?void 0:r.tree)??ve()},resolveThreadId:e=>h.resolveThreadId(e),recomputeConversationTurnsForCurrentLeafId:(e,t)=>{const r=a.resolveThreadId(e);g(s=>{const n=s.threads[r];if(n==null)return;const o=a.computeThreadConversationTurns(r,n.currentLeafId,t);n.conversationTurns=o})},computeThreadConversationTurns:(e,t,r)=>{const s=a.resolveThreadId(e);return a.getTree(s).getConversationTurns(t).map((l,c)=>{const T=r==null?void 0:r[c];return x(T,l)?T:l})},getThreadConversationTurns:(e,t,r)=>{var T;const s=a.resolveThreadId(e),o=d().threads[s];if(o==null)return[];const u=o.tree,l=u.messageIdToNodeId((o==null?void 0:o.currentLeafId)??"root"),c=t!=null?u.messageIdToNodeId(t):null;return c!=null&&c!==l?a.computeThreadConversationTurns(s,c,r??[]):((T=d().threads[s])==null?void 0:T.conversationTurns)??[]},removeContinuingFromSharedConversationId:e=>{const t=a.resolveThreadId(e);g(r=>{const s=r.threads[t];(s==null?void 0:s.continuingFromSharedConversationId)!=null&&delete s.continuingFromSharedConversationId})},updateReferencedDocState:(e,t,r)=>{const s=a.resolveThreadId(e);g(n=>{const o=n.threads[s];o&&(o.docsReferencedByURL[t]=r)})},copyLastMessageToClipboard:(e,t="mouse")=>{const r=a.getThreadCurrentLeafId(e),s=a.getThreadConversationTurns(e,r);return a.copyMessageToClipboard(e,s.length-1,t)},copyMessageToClipboard:(e,t,r="mouse")=>{const s=a.getThreadCurrentLeafId(e),o=a.getThreadConversationTurns(e,s)[t];if(!o)return Promise.reject();const{messages:u}=o,l=u.reduce((c,T)=>!T.err&&T.message.author.role===I.Assistant&&T.message.recipient==="all"?c+(c?`

`:"")+F(T.message):c,"");return ne(l).then(()=>{const c=a.getServerThreadId(e);c&&j.submitImplicitMessageFeedback({messageId:u[0].message.id,type:"copy",serverThreadId:c,selectedText:l,source:r})})},getLastMessgageSystemHints:(e,t)=>{var u;const r=a.resolveThreadId(e),o=a.getTree(r).getBranchFromLeaf(t).slice().reverse().find(l=>l.message.author.role===I.User);return((u=o==null?void 0:o.message.metadata)==null?void 0:u.system_hints)??[]},deleteThread:e=>{g(t=>{delete t.threads[e],delete t.clientNewThreadIdToServerIdMapping[e]}),b.publish({kind:"deleteConversation",serverThreadId:e})},retainThread:e=>{g(t=>{t.threadRetainCounts[e]=(t.threadRetainCounts[e]??0)+1}),clearTimeout(y[e])},releaseThread:e=>{d().threads[e]!=null&&(g(r=>{r.threadRetainCounts[e]=Math.max((r.threadRetainCounts[e]??0)-1,0)}),!(d().threadRetainCounts[e]>0)&&(clearTimeout(y[e]),y[e]=setTimeout(()=>{d().threads[e]!=null&&(d().threadRetainCounts[e]>0||a.deleteThread(e))},3e4)))},setPromptGptRating:(e,t)=>{const r=a.resolveThreadId(e);g(s=>{const n=s.threads[r];n!=null&&(t==null?n.promptGptRating=void 0:n.promptGptRating={gizmoId:t})})}},Oe=e=>i(r=>h.getThreadModelId(e,r))??de,pe=e=>i(t=>{if(e!=null)return L(e)?t.clientNewThreadIdToServerIdMapping[e]:e}),ke=e=>i(t=>{var s;const r=a.resolveThreadId(e);return((s=t.threads[r])==null?void 0:s.initialThreadData)??fe()}),qe=(e,t)=>i(r=>{const s=h.getConversationMode(e,r);return t&&((s==null?void 0:s.kind)===v.GizmoInteraction||(s==null?void 0:s.kind)===v.PrimaryAssistant)?{gizmo_id:t,kind:v.GizmoInteraction}:s}),Ce=e=>{const t=ae();return i(r=>r.threads[h.resolveThreadId(e,r)]==null?t:h.getGizmoId(e,r))},Ge=e=>!!Ce(e),He=e=>i(t=>{var s;const r=a.resolveThreadId(e);return((s=t.threads[r])==null?void 0:s.isLoading)??!1}),_e=e=>i(()=>a.getThreadCurrentLeafId(e)),Be=(e,t)=>{const r=m.useRef([]);return i(()=>{const s=a.getThreadConversationTurns(e,t,r.current);return r.current=s,(s==null?void 0:s.length)??0})},je=(e,t)=>{const r=m.useRef([]);return i(()=>{const s=a.getThreadConversationTurns(e,t,r.current);return r.current=s,s})},We=(e,t,r)=>{const s=m.useRef([]);return i(()=>{const n=a.getThreadConversationTurns(e,r,s.current);return s.current=n,t>=0&&t<n.length?n[t]:null})},Qe=(e,t)=>{const r=m.useRef([]);return i(()=>{const s=a.getThreadConversationTurns(e,t,r.current);return r.current=s,s.length>0?s[s.length-1]:null})},Xe=(e,t)=>{const r=m.useRef([]);return i(()=>{const s=a.getThreadConversationTurns(e,t,r.current);r.current=s;let n=0;for(let o=s.length-1;o>=0;o--){const u=s[o];if(u.messages.some(l=>{var c;return(c=l.message.metadata)==null?void 0:c.is_indepth_feedback}))return!0;if(u.messages.some(l=>l.message.author.role===I.Assistant)&&n++,n>=3)break}return!1})},$e=(e,t)=>i(()=>{const r=a.resolveThreadId(e);return a.getTree(r).getBranchFromLeaf(t).some(o=>o.message.author.role===I.User)}),Ke=e=>{const t=_e(e);return m.useMemo(()=>{const r=a.getThreadConversationTurns(e,t,[]),s=(r==null?void 0:r.length)??0,n=(r==null?void 0:r[s-1])??null;return s===0?t:f.getRequestIdFromConversationTurn(n)},[t,e])},Ye=e=>i(()=>a.getTitle(e)),Ve=e=>$(i,()=>a.getTitleAndSource(e),x),Ze=e=>i(()=>{var r;const t=a.resolveThreadId(e);return(r=d().threads[t])==null?void 0:r.continuingFromSharedConversationId}),Je=e=>i(()=>{var r,s;const t=a.resolveThreadId(e);return(s=(r=d().threads[t])==null?void 0:r.sharedConversationMetadata)==null?void 0:s.authorName}),er=(e,t)=>i(()=>{const r=a.getTree(e).getNodeByIdOrMessageId(t);if(r==null)throw new Error(`useThreadTreeNode: cannot get tree node for ${t} in thread ${e}`);return r}),rr=(e,t)=>i(()=>{var r;return((r=a.getTree(e))==null?void 0:r.getHasErrorFromNode(t))??!1}),tr=(e,t)=>i(()=>{var r;return((r=a.getTree(e))==null?void 0:r.isMessageIncomplete(t))??!1}),Re=(e,t)=>i(()=>{const r=a.getTree(e);return r==null?[]:r.getBranchFromLeaf(t).filter(s=>s.message.author.role!==I.Root)}),sr=(e,t)=>Re(e,t).map(r=>r.message),nr=(e,t)=>i(()=>{const r=a.getTree(e);return r==null?null:r.getLeafFromNode(t)}),ar=(e,t)=>i(()=>{const r=a.getTree(e);return r==null?!1:t.map(n=>r.getLeafFromNode(n)).some(n=>r.getHasErrorFromNode(n.id))}),Se=e=>{var o,u;const r=a.getTree(e).getUserContext();if(r==null)return null;const{message:s}=r,n=((o=s.metadata)==null?void 0:o.shared_conversation_id)??null;if(((u=s.metadata)==null?void 0:u.user_context_message_data)!=null){const{about_user_message:l,about_model_message:c}=s.metadata.user_context_message_data;return{aboutUserMessage:(l==null?void 0:l.trim())??"",aboutModelMessage:(c==null?void 0:c.trim())??"",fallback:null,shareId:n}}return{aboutUserMessage:null,aboutModelMessage:null,fallback:F(s),shareId:n}},ye=e=>i(t=>{var s,n;const r=a.resolveThreadId(e);return(n=(s=t.threads[r])==null?void 0:s.sharedConversationMetadata)==null?void 0:n.hasUserEditableContextFlag}),or=e=>!!a.getTree(e).findNode(r=>r.message.content.content_type==="model_editable_context"),dr=e=>!!a.getTree(e).findNode(r=>{var s,n;return(((s=r.message.author.name)==null?void 0:s.startsWith("canmore."))||((n=r.message.recipient)==null?void 0:n.startsWith("canmore.")))??!1}),ur=e=>{const t=ye(e);return Se(e)!=null||!!t},ir=e=>i(()=>{var r;const t=a.resolveThreadId(e);return((r=d().threads[t])==null?void 0:r.continuingFromSharedConversationId)!=null}),lr=e=>i(()=>a.getThreadCurrentLeafId(e)==="root"),cr=e=>{const t=K(),r=pe(e);return r?t.query.convId&&t.query.convId===r?!0:Y(t.query.default)?t.query.default[0]==="c"&&t.query.default[1]===r:!1:!1},hr=e=>i(()=>{var r;const t=a.resolveThreadId(e);return(r=d().threads[t])==null?void 0:r.promptGptRating}),Tr=(e,t)=>i(()=>{const r=a.resolveThreadId(e),n=a.getTree(r).getBranchFromLeaf(t);return ue(n,o=>o.message.author.role===I.System&&o.message.content.content_type==="system_content")}),gr=()=>m.useContext(W)!=null,mr=()=>m.useContext(Q)!=null;function vr(e){var n;const t=a.getTree(e),r=a.getThreadCurrentLeafId(e);let s=t.getNodeByIdOrMessageId(r);for(;s;){const o=(n=s.message.metadata)==null?void 0:n.default_model_slug;if(o)return o;if(s.parentId)s=t.getNodeByIdOrMessageId(s.parentId);else return}}function fr({clientThreadId:e,role:t}){return a.getTree(e).countMessagesByAuthor(t)}function Ir({clientThreadId:e,conversationLeafId:t}){const r=a.getTree(e);return m.useMemo(()=>r.getNodeByIdOrMessageId(t).message.end_turn,[t,r])}function Le(e,t){const r=h.getTurnContentReferences(e,t);return E(r)}function pr(e,t){const r=Le(e,t),s=h.getTurnImageSearchResults(e,t);return oe(r.concat(s),"content_url")}const Cr=e=>i(()=>{var r;const t=a.resolveThreadId(e);return(r=d().threads[t])==null?void 0:r.async_status});function _r(e,t){const r=h.getTurnContentReferences(e,t);return he(r)}const Me=e=>{var t;return((t=e==null?void 0:e.metadata)==null?void 0:t.image_results)??[]},we=e=>{var t;return((t=e==null?void 0:e.metadata)==null?void 0:t.search_result_groups)??[]};export{Me as $,He as A,Ye as B,Je as C,Be as D,Te as E,_r as F,Ve as G,Ie as H,cr as I,Fe as J,vr as K,dr as L,nr as M,Tr as N,Xe as O,We as P,Cr as Q,ar as R,mr as S,a as T,ke as U,$e as V,Ze as W,fr as X,hr as Y,rr as Z,tr as _,je as a,we as a0,Ae as a1,De as a2,ge as a3,Pe as a4,Ke as b,pe as c,h as d,lr as e,Ce as f,gr as g,ir as h,L as i,Qe as j,Ir as k,ze as l,pr as m,ce as n,Ee as o,Ue as p,qe as q,Oe as r,ur as s,or as t,_e as u,er as v,i as w,sr as x,Re as y,Ge as z};
//# sourceMappingURL=ei9mqg0w7s3imcr3.js.map