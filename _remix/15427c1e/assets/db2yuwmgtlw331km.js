import{F as a}from"./u7imi8dyp3ybk8s0.js";import{u as l,F as i,a as e}from"./nb19zwwjnu1w9qvt.js";import{Z as y,aA as f,r as o,v as u}from"./lj2b9v3ilohzzubf.js";function m(){const t=y(),s=l(n=>n.isActive),{value:c}=f("1422501431");return o.useEffect(()=>{t&&(c?a.setCurrentAccountV2(t):a.setCurrentAccount(t),a.init())},[t,c]),o.useEffect(()=>{const n=r=>{r.metaKey&&r.key==="k"&&(s?e.logClose("shortcut"):(e.setSessionId(u()),e.logOpen("shortcut")),i.setIsActive(!s))};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[s]),{openSearch:o.useCallback(()=>{i.setIsActive(!0),e.setSessionId(u()),e.logOpen("button")},[])}}export{m as u};
//# sourceMappingURL=db2yuwmgtlw331km.js.map