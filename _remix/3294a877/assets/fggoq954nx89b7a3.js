import{F as a}from"./e1yhbzx0zbywvgyc.js";import{u as y,F as i,a as e}from"./kq1a9f6rp4nk9n62.js";import{a8 as l,y as f,r as o,v as u}from"./e2gys00277jk3j4m.js";function m(){const t=l(),s=y(n=>n.isActive),{value:c}=f("1422501431");return o.useEffect(()=>{t&&(c?a.setCurrentAccountV2(t):a.setCurrentAccount(t),a.init())},[t,c]),o.useEffect(()=>{const n=r=>{r.metaKey&&r.key==="k"&&(s?e.logClose("shortcut"):(e.setSessionId(u()),e.logOpen("shortcut")),i.setIsActive(!s))};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[s]),{openSearch:o.useCallback(()=>{i.setIsActive(!0),e.setSessionId(u()),e.logOpen("button")},[])}}export{m as u};
//# sourceMappingURL=fggoq954nx89b7a3.js.map