import{r as m,bQ as h,j as r,es as f,et as E,eu as b,aQ as v,ev as l,ba as x}from"./cq30atfn4hkan4n6.js";import{C as w,a as y}from"./lbhbqlrnc8bwcq3y.js";import{cG as C}from"./kuzyui3g7be29dp4.js";import{T as k}from"./elusy656jdyopkj7.js";import{o as g}from"./b5ivvez5v27h38v9.js";import{l as u}from"./9wq3vd0xhzl7ebfo.js";import"./kxnoie2q7a08rba4.js";import"./h52pvmssqdkok97f.js";import"./fqed9uxp6vo0fhl9.js";import"./irpjl7r7vpd0tpvx.js";import"./i5vlnob1barc427s.js";import"./nzjbdw3e7yueja4t.js";import"./hpw9s7m2jnyrk7um.js";import"./g2dhrm88y1jppx3x.js";import"./ax5pj9vx3pmr7oyc.js";import"./otk8m83txe0liwen.js";import"./nxnkvu1b90mkm0m9.js";import"./bdvmgu50jbql1q2t.js";import"./mcyq2x0qm048gd8e.js";import"./hp2a27dk2b9p8p5j.js";import"./m9u9x9zfxse2n76r.js";import"./ozhxalj18y0gxupd.js";import"./m102vuma76gj7rn8.js";import"./npgdwta47mztsgw1.js";import"./he0zdcwj8l3qqlx1.js";import"./ew1g4fa620wyztzf.js";import"./vstu8gjb6z64tw80.js";import"./kjbs1m5mdgu212wb.js";import"./ftrk3wvkbw7841e5.js";import"./kjj8gdfvz4xgfnvc.js";import"./l6j9j6ehhbftz9db.js";import"./jze2ps9yfmem9dfq.js";import"./d9qais6dbbc4gnum.js";import"./ben9x949smn8tprb.js";function N({onNewThread:t}){return r.jsxs("div",{className:"draggable no-draggable-children fixed top-0 flex h-8 w-full items-center justify-between bg-white px-2",children:[r.jsx("button",{onClick:t,className:"text-token-text-tertiary hover:text-token-text-primary",children:r.jsx(w,{})}),r.jsx("button",{className:"text-token-text-tertiary hover:text-token-text-primary",onClick:()=>{f(!1)},children:r.jsx(y,{})})]})}function j({onNewThread:t,children:a}){const i=m.useRef(null);return m.useEffect(()=>{if(i.current){const e=i.current.ownerDocument,d=s=>{s.key==="Escape"&&!s.shiftKey&&!s.ctrlKey&&!s.metaKey&&(C(e.activeElement)?e.activeElement instanceof HTMLElement&&e.activeElement.blur():f(!1))};return e.addEventListener("keydown",d),()=>{e.removeEventListener("keydown",d)}}},[]),r.jsxs("div",{className:"flex h-full w-full flex-col pt-8",ref:i,children:[r.jsx(N,{onNewThread:t}),a]})}function A(){const[t,a]=m.useState(()=>u());return g(t,{kind:h.PrimaryAssistant}),r.jsx(j,{onNewThread:()=>{a(u())},children:r.jsx(k,{clientThreadId:t,hideHeader:!0,hideFooter:!0,renderEmptyState:!1},t)})}let p=!1;function me(){var t;(t=E)==null||t.registerObserver(b)}function de(){const[t,a]=m.useState(null),{value:i}=v("3653083604");return m.useEffect(()=>{if(!i||p||typeof window>"u")return;const e=window.open("about:blank",l);if(!e)throw new Error("ChatBar: window.open() did not create a window");e.document.documentElement.setAttribute("dir","ltr"),p=!0,document.head.querySelectorAll("link, style").forEach(o=>{e.document.head.appendChild(o.cloneNode(!0))}),new MutationObserver(o=>{o.forEach(n=>{n.type==="childList"&&n.addedNodes.forEach(c=>{(c instanceof HTMLLinkElement||c instanceof HTMLStyleElement)&&e.document.head.appendChild(c.cloneNode(!0))})})}).observe(document.head,{childList:!0}),e.document.documentElement.setAttribute("style",document.documentElement.getAttribute("style")??""),e.document.documentElement.setAttribute("class",document.documentElement.getAttribute("class")??""),new MutationObserver(o=>{o.forEach(n=>{n.type==="attributes"&&n.attributeName!=null&&e.document.documentElement.setAttribute(n.attributeName,document.documentElement.getAttribute(n.attributeName)??"")})}).observe(document.documentElement,{attributes:!0}),a(e.document.body.appendChild(e.document.createElement("div"))),e.addEventListener("unload",o=>{e.close()}),e.addEventListener("focus",()=>{var o;(o=e.document.getElementById("prompt-textarea"))==null||o.focus()})},[i]),t&&x.createPortal(r.jsx(A,{}),t,l)}export{de as DesktopChatBar,me as initDesktop};
//# sourceMappingURL=k87tgjxqr2fvj0v1.js.map