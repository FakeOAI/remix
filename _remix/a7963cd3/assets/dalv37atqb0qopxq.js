import{F as a}from"./ho31k2m9tp5txcco.js";import{u as l,F as i,a as e}from"./f26nmttnf049e1nb.js";import{Z as y,aP as f,r as o,v as u}from"./b6hz7w82w2qja9j6.js";function m(){const t=y(),s=l(n=>n.isActive),{value:c}=f("1422501431");return o.useEffect(()=>{t&&(c?a.setCurrentAccountV2(t):a.setCurrentAccount(t),a.init())},[t,c]),o.useEffect(()=>{const n=r=>{r.metaKey&&r.key==="k"&&(s?e.logClose("shortcut"):(e.setSessionId(u()),e.logOpen("shortcut")),i.setIsActive(!s))};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[s]),{openSearch:o.useCallback(()=>{i.setIsActive(!0),e.setSessionId(u()),e.logOpen("button")},[])}}export{m as u};
//# sourceMappingURL=dalv37atqb0qopxq.js.map