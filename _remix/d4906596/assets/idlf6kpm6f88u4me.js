import{dm as g,l as m,aA as x,r as D,D as a,bu as p,dX as h}from"./i02hakaw1yz2cb0w.js";import"./oolxnb4itrwnjqyf.js";const l=async e=>{await p.signOut({callbackUrl:e}),h()},i=(e,o)=>{l(e).then(()=>a.addTiming(o?"chatgpt.web.logout.shouldClearIndexedDB":"chatgpt.web.logout.default")).catch(t=>{a.addError(new Error("Failed to logout",{cause:t}))})};function E({federatedLogoutUri:e}){const{value:o}=x("4017530922");return D.useEffect(()=>{const t=e??window.location.origin;window&&window.indexedDB&&o&&typeof window.indexedDB.databases=="function"?(async()=>{const u=(await window.indexedDB.databases()).map(n=>new Promise((r,w)=>{if(n.name){const d=window.indexedDB.deleteDatabase(n.name);d.onsuccess=()=>r(),d.onerror=()=>w(),d.onblocked=()=>{a.addError(new Error(`Delete IndexedDB blocked for database ${n.name}`)),r()}}else a.addError(new Error(`Invalid database name ${n.name}`)),r()}));await Promise.all(u)})().then(()=>{a.addTiming("chatgpt.web.logout.clearedIndexedDB"),i(t,o)}).catch(c=>{a.addError(new Error("Failed to clear IndexedDB",{cause:c})),i(t,o)}):l(e??window.location.origin).catch(s=>a.addError(new Error("Failed to logout",{cause:s})))},[o,e]),null}function B(){const e=g();return m.jsx(E,{...e})}export{B as default};
//# sourceMappingURL=idlf6kpm6f88u4me.js.map