import{K as a,L as o,r as h,a8 as g,cl as l,aJ as y,h as p,j as f,D as v}from"./kqqkpdulatnhj153.js";import{cv as n,cw as R,cx as T}from"./n3rs6b5m6tqfdjyk.js";import{P as i,q as A}from"./ljkmhw662c6t9mhx.js";import{s as P}from"./cjvbiw2g5fogbi08.js";import{e as x,i as C,T as w}from"./difcbbya6lgzvb2g.js";const H="prompt-textarea";function F(){document.getElementById(H)?.focus()}const M={getAndReset:(e,s)=>{const t=a.getItem(o.RestoreMessageAfterOauthRedirect);return a.removeItem(o.RestoreMessageAfterOauthRedirect),!t||t.userId!==e||s!==t.serverThreadId||Date.now()>t.expiresAt?null:t},set:(e,s,t)=>{const r={userId:e,serverThreadId:s,inputText:t,expiresAt:Date.now()+6e4};a.setItem(o.RestoreMessageAfterOauthRedirect,r)}},q=()=>i.useState(i.getPersistedSystemHints).has(n.Search),z=()=>{const e=i.useStore();return h.useCallback((s,t)=>{s?e.addPersistedSystemHint(n.Search,t):e.removePersistedSystemHint(n.Search,t)},[e])};async function I(e,s){const t=T(e),r=t??await f.getConversation(e);return s==null&&t&&(s=!0),t||v.addTiming("chatgpt.web.chatPage.loadExistingConversation"),w.initThreadFromServerData(e,r,s,void 0,s),P(r.conversation_id,r.async_status??null),r}const K=e=>{const{asPath:s,replace:t}=g(),r=l(),u=x(),m=y();p({queryKey:["conversation",e],queryFn:()=>I(e).catch(d=>{const c=R(s),S=c!=null?A(c):"/";throw t(S,void 0,{shallow:!0}),m.danger(`Unable to load conversation ${e}`,{testId:"conversation-fetch-error-toaster"}),d}),enabled:!C(e)&&!r&&!u,refetchOnMount:!0})};export{M as P,H as T,z as a,q as b,I as f,F as t,K as u};
//# sourceMappingURL=lza6m5fvykifh7pz.js.map