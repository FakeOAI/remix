import{y as r,L as a,r as c}from"./otyn7m3v4o5hjv1m.js";import{b3 as o}from"./g98o1hu13svzcy4j.js";import{P as n}from"./n8ljlp21wilt13tf.js";const d="prompt-textarea";function h(){var e;(e=document.getElementById(d))==null||e.focus()}const p={getAndReset:(e,s)=>{const t=r.getItem(a.RestoreMessageAfterOauthRedirect);return r.removeItem(a.RestoreMessageAfterOauthRedirect),!t||t.userId!==e||s!==t.serverThreadId||Date.now()>t.expiresAt?null:t},set:(e,s,t)=>{const i={userId:e,serverThreadId:s,inputText:t,expiresAt:Date.now()+6e4};r.setItem(a.RestoreMessageAfterOauthRedirect,i)}},y=()=>n.useState(n.getPersistedSystemHints).has(o.Search),f=()=>{const e=n.useStore();return c.useCallback(s=>{s?e.addPersistedSystemHint(o.Search):e.removePersistedSystemHint(o.Search)},[e])};export{p as P,d as T,y as a,h as t,f as u};
//# sourceMappingURL=busl3phtm15t1ux6.js.map