import{K as u,L as d,r as g,el as m,ao as l,a8 as y,cn as T,aK as f,h as p,j as R,D as v,em as P}from"./bkk1etpxp73xgxkk.js";import{cD as r,cE as A,cF as E}from"./grdjxd4t00xxfgii.js";import{P as S,r as H}from"./go6iqv7kynl41ls2.js";import{s as C}from"./c7q13bl1gi8tl4t7.js";import{e as b,i as M,T as I}from"./e2lvmkzz1krdd0vf.js";const L="prompt-textarea";function k(){document.getElementById(L)?.focus()}const B={getAndReset:(e,s)=>{const t=u.getItem(d.RestoreMessageAfterOauthRedirect);return u.removeItem(d.RestoreMessageAfterOauthRedirect),!t||t.userId!==e||s!==t.serverThreadId||Date.now()>t.expiresAt?null:t},set:(e,s,t)=>{const a={userId:e,serverThreadId:s,inputText:t,expiresAt:Date.now()+6e4};u.setItem(d.RestoreMessageAfterOauthRedirect,a)}},G=()=>S.useState(S.getPersistedSystemHints).has(r.Search),q=()=>{const e=S.useStore(),s=g.useCallback(()=>e.getPersistedSystemHintTrigger(r.Search),[e]),t=g.useCallback(()=>e.clearPersistedSystemHintTrigger(r.Search),[e]),a=g.useCallback((o,n,i)=>{(o?e.addPersistedSystemHint:e.removePersistedSystemHint)(r.Search,n,i)},[e]);return{getSearchModeTrigger:s,clearSearchModeTrigger:t,setThreadSearchMode:a}},D=1e3;function z(e){return e&&e.length>D&&!m().shift&&l.checkGate("1508312659")}async function x(e,s){const t=E(e),a=t??await R.getConversation(e);return s==null&&t&&(s=!0),t||v.addTiming("chatgpt.web.chatPage.loadExistingConversation"),I.initThreadFromServerData(e,a,s,void 0,s),C(a.conversation_id,a.async_status?{source:P.SERVER,value:a.async_status}:null),a}const j=e=>{const{asPath:s,replace:t}=y(),a=T(),o=b(),n=f();p({queryKey:["conversation",e],queryFn:()=>x(e).catch(i=>{const c=A(s),h=c!=null?H(c):"/";throw t(h),n.danger(`Unable to load conversation ${e}`,{testId:"conversation-fetch-error-toaster"}),i}),enabled:!M(e)&&!a&&!o,refetchOnMount:!0})};export{B as P,L as T,j as a,G as b,x as f,z as i,k as t,q as u};
//# sourceMappingURL=kef7p4k14zdf1y4l.js.map