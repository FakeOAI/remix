import{F as a}from"./ikl248hdla3k1e3w.js";import{u as f,F as i,a as e}from"./fqiwirbmj6opbsc0.js";import{ag as d,X as m,w as g,r as o,v as u}from"./qt4wss72u2iiwb12.js";import{i as y}from"./inwaqyhkeiulw8e8.js";function k(){return(y()?"⌘":"Ctrl")+" K"}function v(){const t=d(),n=f(s=>s.isActive),l=m(),{value:c}=g("1422501431");return o.useEffect(()=>{t&&(c?a.setCurrentAccountV2(t):a.setCurrentAccount(t),a.init())},[t,c]),o.useEffect(()=>{const s=r=>{r.metaKey&&r.key==="k"&&(n?e.logClose("shortcut"):(e.setSessionId(u()),e.logOpen("shortcut")),i.setIsActive(!n))};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[n]),{openSearch:o.useCallback(()=>{i.setIsActive(!0),e.setSessionId(u()),e.logOpen("button")},[]),searchMsg:l.formatMessage({id:"jmd8WH",defaultMessage:"Search chats"}),shortcutMsg:k()}}export{v as u};
//# sourceMappingURL=dw21p1cevywa6lzj.js.map