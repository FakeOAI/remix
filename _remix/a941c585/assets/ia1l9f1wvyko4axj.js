import{F as a}from"./j9c2lpq5wxh97bvt.js";import{u as l,F as i,a as e}from"./vokmzolye2js2ft7.js";import{Z as y,aQ as f,r as o,v as u}from"./nz9x58rcwaqc60b4.js";function m(){const t=y(),s=l(n=>n.isActive),{value:c}=f("1422501431");return o.useEffect(()=>{t&&(c?a.setCurrentAccountV2(t):a.setCurrentAccount(t),a.init())},[t,c]),o.useEffect(()=>{const n=r=>{r.metaKey&&r.key==="k"&&(s?e.logClose("shortcut"):(e.setSessionId(u()),e.logOpen("shortcut")),i.setIsActive(!s))};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[s]),{openSearch:o.useCallback(()=>{i.setIsActive(!0),e.setSessionId(u()),e.logOpen("button")},[])}}export{m as u};
//# sourceMappingURL=ia1l9f1wvyko4axj.js.map