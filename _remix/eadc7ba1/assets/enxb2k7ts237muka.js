import{dR as u,dS as c,r as i,dT as d,aU as p,j as m,bL as l}from"./flp62uidktb7m1ug.js";import{z as h,B as E}from"./iyl0qvrjzzm7sknb.js";import{m as b}from"./hxhem7d493ftjdwe.js";import"./nvhnd25cbof9n9il.js";import"./gvolk5s4399xa3cv.js";import"./mwg6v0jkforocdtn.js";import"./hb9t536xg0y0xszu.js";import"./k33iqqh7r2wo1k0r.js";import"./k2od776hblaulj28.js";import"./ekvj2mit09uc82zf.js";import"./dueirgau4f6i1o1j.js";import"./ljmho4vhf1pjpjsc.js";import"./e9048y05grlerpi9.js";import"./halxrn9nt2hlxo3o.js";import"./lwf5tl6ycy2l4px6.js";import"./eukmoqvynpidn6v6.js";import"./kzhs1p3awt7ru9kd.js";import"./etr41jmyodm6h27r.js";import"./chlazh9kjbq42g8x.js";import"./d9cvixzji3564j8v.js";import"./eginviiblln7awwq.js";import"./k8iaq8d0e4chicqq.js";import"./i9k7mgi0v5fug2uq.js";import"./miozercks6am731f.js";import"./ltdx7dfaxbse4vzd.js";let s=!1;function U(){var t;(t=u)==null||t.registerObserver(c)}function W(){const[t,a]=i.useState(null);return i.useEffect(()=>{if(s||typeof window>"u")return;const e=window.open("about:blank",d);if(!e)throw new Error("ChatBar: window.open() did not create a window");e.document.documentElement.setAttribute("dir","ltr"),s=!0,document.head.querySelectorAll("link, style").forEach(r=>{e.document.head.appendChild(r.cloneNode(!0))}),new MutationObserver(r=>{r.forEach(o=>{o.type==="childList"&&o.addedNodes.forEach(n=>{(n instanceof HTMLLinkElement||n instanceof HTMLStyleElement)&&e.document.head.appendChild(n.cloneNode(!0))})})}).observe(document.head,{childList:!0}),e.document.documentElement.setAttribute("style",document.documentElement.getAttribute("style")??""),e.document.documentElement.setAttribute("class",document.documentElement.getAttribute("class")??""),new MutationObserver(r=>{r.forEach(o=>{o.type==="attributes"&&o.attributeName!=null&&e.document.documentElement.setAttribute(o.attributeName,document.documentElement.getAttribute(o.attributeName)??"")})}).observe(document.documentElement,{attributes:!0}),a(e.document.body.appendChild(e.document.createElement("div"))),e.addEventListener("unload",r=>{e.close()}),e.addEventListener("focus",()=>{var r;(r=e.document.getElementById("prompt-textarea"))==null||r.focus()})},[]),t&&p.createPortal(m.jsx(f,{}),t,d)}function f(){const[t,a]=i.useState(()=>b());return h(t,{kind:l.PrimaryAssistant}),m.jsx(E,{clientThreadId:t,hideHeader:!0,hideFooter:!0,renderEmptyState:!1},t)}export{W as DesktopChatBar,U as initDesktop};
//# sourceMappingURL=enxb2k7ts237muka.js.map