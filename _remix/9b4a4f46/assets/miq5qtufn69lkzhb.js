import{e1 as u,e2 as c,r as i,e3 as d,aZ as p,j as m,bQ as l}from"./nnyk78t8q5ujpq3v.js";import{z as h,B as E}from"./dvpj1vzyu9ok7rda.js";import{m as b}from"./drlmw8ryhjw90sbn.js";import"./fp2jmivolyn36eo5.js";import"./iur75b70r43x5asm.js";import"./gernd4k9qsapeqs5.js";import"./fyy6tq0352ocumy0.js";import"./ewr95ks0lnif10uh.js";import"./a5850hjx3c1rhsfj.js";import"./c45fooxs8mmjhmdu.js";import"./mppd5jr8asstydk1.js";import"./m1s1ecybfydutght.js";import"./gyp8pp6u3jsjuvpp.js";import"./m5xz0tk3g66mx0ap.js";import"./n9pxvj6fa7i3i6wd.js";import"./nwjyhviknmw7qom2.js";import"./gegmt8fojsuye7xm.js";import"./rpz3hk7tm66qpoe0.js";import"./iwbcu1hk04xay0im.js";import"./rfnj8dinktqukq3k.js";import"./corscqvipiz8w5dw.js";import"./e24w6tv7jyayiake.js";import"./fsfwbx9vguy068hy.js";import"./n0edkgv7c8jcn81s.js";import"./eptzz210bfgoeite.js";let s=!1;function Q(){var t;(t=u)==null||t.registerObserver(c)}function W(){const[t,a]=i.useState(null);return i.useEffect(()=>{if(s||typeof window>"u")return;const e=window.open("about:blank",d);if(!e)throw new Error("ChatBar: window.open() did not create a window");e.document.documentElement.setAttribute("dir","ltr"),s=!0,document.head.querySelectorAll("link, style").forEach(r=>{e.document.head.appendChild(r.cloneNode(!0))}),new MutationObserver(r=>{r.forEach(o=>{o.type==="childList"&&o.addedNodes.forEach(n=>{(n instanceof HTMLLinkElement||n instanceof HTMLStyleElement)&&e.document.head.appendChild(n.cloneNode(!0))})})}).observe(document.head,{childList:!0}),e.document.documentElement.setAttribute("style",document.documentElement.getAttribute("style")??""),e.document.documentElement.setAttribute("class",document.documentElement.getAttribute("class")??""),new MutationObserver(r=>{r.forEach(o=>{o.type==="attributes"&&o.attributeName!=null&&e.document.documentElement.setAttribute(o.attributeName,document.documentElement.getAttribute(o.attributeName)??"")})}).observe(document.documentElement,{attributes:!0}),a(e.document.body.appendChild(e.document.createElement("div"))),e.addEventListener("unload",r=>{e.close()}),e.addEventListener("focus",()=>{var r;(r=e.document.getElementById("prompt-textarea"))==null||r.focus()})},[]),t&&p.createPortal(m.jsx(f,{}),t,d)}function f(){const[t,a]=i.useState(()=>b());return h(t,{kind:l.PrimaryAssistant}),m.jsx(E,{clientThreadId:t,hideHeader:!0,hideFooter:!0,renderEmptyState:!1},t)}export{W as DesktopChatBar,Q as initDesktop};
//# sourceMappingURL=miq5qtufn69lkzhb.js.map