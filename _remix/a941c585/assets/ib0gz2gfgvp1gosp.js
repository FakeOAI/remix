import{r as e,m as c}from"./nz9x58rcwaqc60b4.js";const u="sandbox-ready";e.memo(function(s){const o=e.useRef(null),[t,a]=e.useState(null),r=e.useCallback(n=>{n.source===o?.current?.contentWindow&&n.data===u&&a(n.ports[0])},[]);return e.useEffect(()=>(window.addEventListener("message",r),()=>window.removeEventListener("message",r)),[r]),e.useEffect(()=>{t&&s.srcDoc!==void 0&&t.postMessage(s.srcDoc)},[t,s.srcDoc]),c.jsx("iframe",{className:s.className,src:"/sandbox",ref:o})});export{u as s};
//# sourceMappingURL=ib0gz2gfgvp1gosp.js.map