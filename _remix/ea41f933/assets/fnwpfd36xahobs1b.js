import{dR as u,dS as c,r as i,dT as d,aU as p,j as m,bL as l}from"./hehcvio4m1gb3l50.js";import{z as h,B as E}from"./kbvgp8h7e8n9msg9.js";import{m as b}from"./blc6m9yvfbiqw7tj.js";import"./mj0e86z3fqyhfd6p.js";import"./d1od5t75rjre0q37.js";import"./e27c3plf709pfjps.js";import"./ofi4kixgvqd4phhv.js";import"./opdxseyyi7e129fv.js";import"./fdz5ns7vvuxev7ii.js";import"./fiqnygv5v6plff91.js";import"./pendft9cy0qwlpmm.js";import"./jsc2osrw1pxjhpmr.js";import"./nmd247tyg4nbli1i.js";import"./fjtc9c8961x1j4yk.js";import"./l9nlc1vv4x80d0oz.js";import"./hef1z0tdkc7rmtc9.js";import"./okpq8csnd5pe7u0y.js";import"./nx4ufjqz0ura1k4m.js";import"./jmpteouyh67tp5j3.js";import"./khtmh8udoejmujt2.js";import"./dbnjb5rm9b8cwfhk.js";import"./o9zoc2n8hiegk8eq.js";import"./cgsd631hh60w3och.js";import"./gv83x12b7mhoasvx.js";import"./le7jd3smq7prio2n.js";let s=!1;function U(){var t;(t=u)==null||t.registerObserver(c)}function W(){const[t,a]=i.useState(null);return i.useEffect(()=>{if(s||typeof window>"u")return;const e=window.open("about:blank",d);if(!e)throw new Error("ChatBar: window.open() did not create a window");e.document.documentElement.setAttribute("dir","ltr"),s=!0,document.head.querySelectorAll("link, style").forEach(r=>{e.document.head.appendChild(r.cloneNode(!0))}),new MutationObserver(r=>{r.forEach(o=>{o.type==="childList"&&o.addedNodes.forEach(n=>{(n instanceof HTMLLinkElement||n instanceof HTMLStyleElement)&&e.document.head.appendChild(n.cloneNode(!0))})})}).observe(document.head,{childList:!0}),e.document.documentElement.setAttribute("style",document.documentElement.getAttribute("style")??""),e.document.documentElement.setAttribute("class",document.documentElement.getAttribute("class")??""),new MutationObserver(r=>{r.forEach(o=>{o.type==="attributes"&&o.attributeName!=null&&e.document.documentElement.setAttribute(o.attributeName,document.documentElement.getAttribute(o.attributeName)??"")})}).observe(document.documentElement,{attributes:!0}),a(e.document.body.appendChild(e.document.createElement("div"))),e.addEventListener("unload",r=>{e.close()}),e.addEventListener("focus",()=>{var r;(r=e.document.getElementById("prompt-textarea"))==null||r.focus()})},[]),t&&p.createPortal(m.jsx(f,{}),t,d)}function f(){const[t,a]=i.useState(()=>b());return h(t,{kind:l.PrimaryAssistant}),m.jsx(E,{clientThreadId:t,hideHeader:!0,hideFooter:!0,renderEmptyState:!1},t)}export{W as DesktopChatBar,U as initDesktop};
//# sourceMappingURL=fnwpfd36xahobs1b.js.map