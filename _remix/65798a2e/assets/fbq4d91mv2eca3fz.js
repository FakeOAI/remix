import{fy as D,m as x,aP as p,r as E,D as a,bW as f,g2 as b}from"./m3881aktdta1pmc9.js";import{aF as h}from"./okmdvzkaebtartz7.js";import"./n08taxuyverhgw48.js";const u=async e=>{await f.signOut({callbackUrl:e}),b()},l=(e,o)=>{u(e).then(()=>a.addTiming(o?"chatgpt.web.logout.shouldClearIndexedDB":"chatgpt.web.logout.default")).catch(n=>{a.addError(new Error("Failed to logout",{cause:n}))})};function B({federatedLogoutUri:e}){const{value:o}=p("4017530922"),{isFannyPackInitializerEnabled:n}=h();return E.useEffect(()=>{const s=e??window.location.origin;window&&window.indexedDB&&o&&n&&typeof window.indexedDB.databases=="function"?(a.addAction("chatgpt.web.logout.clearIndexedDB"),(async()=>{const w=(await window.indexedDB.databases()).map(t=>new Promise((r,g)=>{if(t.name){const d=window.indexedDB.deleteDatabase(t.name);d.onsuccess=()=>r(),d.onerror=m=>{a.addError(new Error(`Delete IndexedDB failed for database ${t.name}, ${m}`)),g()},d.onblocked=()=>{a.addError(new Error(`Delete IndexedDB blocked for database ${t.name}`)),r()}}else a.addError(new Error(`Invalid database name ${t.name}`)),r()}));await Promise.all(w)})().then(()=>{a.addTiming("chatgpt.web.logout.clearedIndexedDB"),l(s,o)}).catch(i=>{a.addError(new Error("Failed to clear IndexedDB",{cause:i})),l(s,o)})):u(e??window.location.origin).catch(c=>a.addError(new Error("Failed to logout",{cause:c})))},[n,o,e]),null}function P(){const e=D();return x.jsx(B,{...e})}export{P as default};
//# sourceMappingURL=fbq4d91mv2eca3fz.js.map