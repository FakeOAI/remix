import{e1 as u,e2 as c,r as i,e3 as d,aZ as p,j as m,bQ as l}from"./le8vjrsp1khq127u.js";import{z as h,B as E}from"./igkarsl1yupw1kkn.js";import{m as b}from"./c8tr8gq5f74l8169.js";import"./gt2rj17yt7sbf7px.js";import"./bi8blg7eecsn059b.js";import"./h0epmhodg87ylxgi.js";import"./nnuk5anomw6at2dk.js";import"./o7fus3pd76uipahx.js";import"./mvwrikld4a8afdrf.js";import"./icyul85ngal1c9cd.js";import"./ko6nfaljd8lxzer3.js";import"./bejsopv5atvrtfwc.js";import"./c9px21s42cqg4e7b.js";import"./3tf9n33w52enjs7m.js";import"./i14znmrs8wk8yepc.js";import"./jl8m302he3nn1uw3.js";import"./bnaktpxpttvzuzx0.js";import"./i07tj9jomj28lnpr.js";import"./jfhinzl8242kud05.js";import"./jmhihfho1hwr5rtt.js";import"./njgtcnzoq57eumgg.js";import"./cye11ammtwpavuze.js";import"./qm5337os1c3bb9xc.js";import"./h9jm9xm4a5l7a0z3.js";import"./i2h71g1hdnygkfo7.js";let s=!1;function Q(){var t;(t=u)==null||t.registerObserver(c)}function W(){const[t,a]=i.useState(null);return i.useEffect(()=>{if(s||typeof window>"u")return;const e=window.open("about:blank",d);if(!e)throw new Error("ChatBar: window.open() did not create a window");e.document.documentElement.setAttribute("dir","ltr"),s=!0,document.head.querySelectorAll("link, style").forEach(r=>{e.document.head.appendChild(r.cloneNode(!0))}),new MutationObserver(r=>{r.forEach(o=>{o.type==="childList"&&o.addedNodes.forEach(n=>{(n instanceof HTMLLinkElement||n instanceof HTMLStyleElement)&&e.document.head.appendChild(n.cloneNode(!0))})})}).observe(document.head,{childList:!0}),e.document.documentElement.setAttribute("style",document.documentElement.getAttribute("style")??""),e.document.documentElement.setAttribute("class",document.documentElement.getAttribute("class")??""),new MutationObserver(r=>{r.forEach(o=>{o.type==="attributes"&&o.attributeName!=null&&e.document.documentElement.setAttribute(o.attributeName,document.documentElement.getAttribute(o.attributeName)??"")})}).observe(document.documentElement,{attributes:!0}),a(e.document.body.appendChild(e.document.createElement("div"))),e.addEventListener("unload",r=>{e.close()}),e.addEventListener("focus",()=>{var r;(r=e.document.getElementById("prompt-textarea"))==null||r.focus()})},[]),t&&p.createPortal(m.jsx(f,{}),t,d)}function f(){const[t,a]=i.useState(()=>b());return h(t,{kind:l.PrimaryAssistant}),m.jsx(E,{clientThreadId:t,hideHeader:!0,hideFooter:!0,renderEmptyState:!1},t)}export{W as DesktopChatBar,Q as initDesktop};
//# sourceMappingURL=h0khomnp054br58h.js.map