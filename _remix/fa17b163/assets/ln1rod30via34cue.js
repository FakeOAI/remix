import{r as u,bm as g,bi as d,ef as l,S as h,bd as y,w as T,ce as f,aa as p,N as v,W as R,D as b,eg as E}from"./n9i5979j4rnvjtg4.js";import{cH as r,cI as H,cJ as P}from"./dnf4yeosbs16q88y.js";import{P as m,q as A}from"./l0dnh7x6mesx7kjk.js";import{s as C}from"./669zjrbp5t02fmis.js";import{c as _,j as I,T as M}from"./cw1qc6unlw2poqfl.js";const x="prompt-textarea";function G(){document.getElementById(x)?.focus()}const N={getAndReset:(e,s)=>{const t=g.getItem(d.RestoreMessageAfterOauthRedirect);return g.removeItem(d.RestoreMessageAfterOauthRedirect),!t||t.userId!==e||s!==t.serverThreadId||Date.now()>t.expiresAt?null:t},set:(e,s,t)=>{const a={userId:e,serverThreadId:s,inputText:t,expiresAt:Date.now()+6e4};g.setItem(d.RestoreMessageAfterOauthRedirect,a)}},z=()=>m.useState(m.getPersistedSystemHints).has(r.Search),K=()=>{const e=m.useStore(),s=u.useCallback(()=>e.getPersistedSystemHintTrigger(r.Search),[e]),t=u.useCallback(()=>e.clearPersistedSystemHintTrigger(r.Search),[e]),a=u.useCallback((o,n,i)=>{(o?e.addPersistedSystemHint:e.removePersistedSystemHint)(r.Search,n,i)},[e]);return{getSearchModeTrigger:s,clearSearchModeTrigger:t,setThreadSearchMode:a}},j=(e,s,t)=>e?"file_upload_pending":s?t?"text_content_too_long":void 0:"empty_text_content",L=e=>e.replace(/[\u{E0000}-\u{E007F}]+/gu,""),J=e=>{const s=L(e.getContentToSend().content);return Math.ceil(s.length/4)},D=1e3;function Q(e){return e&&e.length>D&&!l().shift&&h.checkGate("1508312659")}async function k(e,s){const t=P(e),a=t??await R.getConversation(e);return s==null&&t&&(s=!0),t||b.addTiming("chatgpt.web.chatPage.loadExistingConversation"),M.initThreadFromServerData(e,a,s,void 0,s),C(a.conversation_id,a.async_status?{source:E.SERVER,value:a.async_status}:null),a}const U=e=>{const s=y(),{pathname:t}=T(),a=f(),o=_(),n=p();v({queryKey:["conversation",e],queryFn:()=>k(e).catch(i=>{const c=H(t),S=c!=null?A(c):"/";throw s(S),n.danger(`Unable to load conversation ${e}`,{testId:"conversation-fetch-error-toaster"}),i}),enabled:!I(e)&&!a&&!o,refetchOnMount:!0})};export{N as P,x as T,U as a,z as b,J as e,k as f,j as g,Q as i,L as s,G as t,K as u};
//# sourceMappingURL=ln1rod30via34cue.js.map