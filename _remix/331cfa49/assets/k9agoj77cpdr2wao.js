import{dZ as u,d_ as c,r as i,d$ as d,aZ as l,j as m,bR as p}from"./jxcj8c73xykl5pdh.js";import{z as h,B as E}from"./nvgdmt3w630ppqx0.js";import{l as b}from"./iijvemtkuskjstxm.js";import"./dbh3rqot1oqdum8f.js";import"./kracfvru65uyxco3.js";import"./bc8681kvkt1n2y9e.js";import"./hr198f0nwa07pkoq.js";import"./ftwuwfmlkk7slonb.js";import"./ji34iflkfq1j5bsg.js";import"./fe02mfjcyoaumukz.js";import"./isxfns5j04pnr09o.js";import"./i3kkn7bb16ebgfki.js";import"./jo67gcac0gh5w65t.js";import"./c16faxxiqva4sb0d.js";import"./oln4maq5fkdj94yi.js";import"./pcte21l9mk0rwn1j.js";import"./owp6z3q6pg0aqs0k.js";import"./i016psc60oiy4s0b.js";import"./fqu9lv97jjbmgjld.js";import"./cg9p0lhl0jcxnj7d.js";import"./o5l18e8c7o2hjdmj.js";import"./f4m9gh9jb0r6kahq.js";import"./ekn8260r82kn5sj0.js";import"./neomwnb90qov2nle.js";let s=!1;function z(){var t;(t=u)==null||t.registerObserver(c)}function G(){const[t,a]=i.useState(null);return i.useEffect(()=>{if(s||typeof window>"u")return;const e=window.open("about:blank",d);if(!e)throw new Error("ChatBar: window.open() did not create a window");e.document.documentElement.setAttribute("dir","ltr"),s=!0,document.head.querySelectorAll("link, style").forEach(r=>{e.document.head.appendChild(r.cloneNode(!0))}),new MutationObserver(r=>{r.forEach(o=>{o.type==="childList"&&o.addedNodes.forEach(n=>{(n instanceof HTMLLinkElement||n instanceof HTMLStyleElement)&&e.document.head.appendChild(n.cloneNode(!0))})})}).observe(document.head,{childList:!0}),e.document.documentElement.setAttribute("style",document.documentElement.getAttribute("style")??""),e.document.documentElement.setAttribute("class",document.documentElement.getAttribute("class")??""),new MutationObserver(r=>{r.forEach(o=>{o.type==="attributes"&&o.attributeName!=null&&e.document.documentElement.setAttribute(o.attributeName,document.documentElement.getAttribute(o.attributeName)??"")})}).observe(document.documentElement,{attributes:!0}),a(e.document.body.appendChild(e.document.createElement("div"))),e.addEventListener("unload",r=>{e.close()}),e.addEventListener("focus",()=>{var r;(r=e.document.getElementById("prompt-textarea"))==null||r.focus()})},[]),t&&l.createPortal(m.jsx(f,{}),t,d)}function f(){const[t,a]=i.useState(()=>b());return h(t,{kind:p.PrimaryAssistant}),m.jsx(E,{clientThreadId:t,hideHeader:!0,hideFooter:!0,renderEmptyState:!1},t)}export{G as DesktopChatBar,z as initDesktop};
//# sourceMappingURL=k9agoj77cpdr2wao.js.map