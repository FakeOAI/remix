import{F as a}from"./jrixumr7y4kpqw3k.js";import{aw as f,ax as i,ay as e}from"./bomvf441parvbl6l.js";import{$ as d,a0 as m,w as y,r as o,v as u}from"./cenhwbprxai3toix.js";import{i as g}from"./er1c9qkbvqkr07px.js";function k(){return(g()?"⌘":"Ctrl")+" K"}function v(){const t=d(),n=f(s=>s.isActive),l=m(),{value:c}=y("1422501431");return o.useEffect(()=>{t&&(c?a.setCurrentAccountV2(t):a.setCurrentAccount(t),a.init())},[t,c]),o.useEffect(()=>{const s=r=>{r.metaKey&&r.key==="k"&&(n?e.logClose("shortcut"):(e.setSessionId(u()),e.logOpen("shortcut")),i.setIsActive(!n))};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[n]),{openSearch:o.useCallback(()=>{i.setIsActive(!0),e.setSessionId(u()),e.logOpen("button")},[]),searchMsg:l.formatMessage({id:"jmd8WH",defaultMessage:"Search chats"}),shortcutMsg:k()}}export{v as u};
//# sourceMappingURL=hibtdcbfc20dw1xa.js.map