import{r as e,y as c}from"./qt4wss72u2iiwb12.js";const u="sandbox-ready",f=e.memo(function(s){const o=e.useRef(null),[t,a]=e.useState(null),r=e.useCallback(n=>{n.source===o?.current?.contentWindow&&n.data===u&&a(n.ports[0])},[]);return e.useEffect(()=>(window.addEventListener("message",r),()=>window.removeEventListener("message",r)),[r]),e.useEffect(()=>{t&&s.srcDoc!==void 0&&t.postMessage(s.srcDoc)},[t,s.srcDoc]),c.jsx("iframe",{className:s.className,src:"/sandbox",ref:o})});export{f as S,u as s};
//# sourceMappingURL=inl1jaiu5qc3cgse.js.map