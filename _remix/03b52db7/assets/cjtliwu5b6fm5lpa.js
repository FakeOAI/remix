import{r as a,bE as E,ba as f,x as i,ex as h,a3 as v,a2 as w,ey as y,d_ as C}from"./e9n3rg14pzg374g3.js";import{T as S}from"./bi0vifd8jvbk6z3i.js";import{cq as P,dn as W,c0 as g,dp as j}from"./grb1rrh8esowjpbm.js";import{a as A,b as L}from"./c7eahm1rxn29iik0.js";import{b as N}from"./iafhkdrd8lw6zfg5.js";import{u as M}from"./h68ell45soz3e4yi.js";import{u as T}from"./11lykwcn62jshbao.js";function m(e){return e instanceof HTMLLinkElement&&e.rel==="stylesheet"||e instanceof HTMLStyleElement}function p(e,t){e.head.querySelectorAll("link, style").forEach(o=>{m(o)&&t.head.appendChild(o.cloneNode(!0))});const s=new WeakMap,r=new MutationObserver(o=>{o.forEach(n=>{n.type==="childList"&&(n.addedNodes.forEach(c=>{if(m(c)){const u=t.head.appendChild(c.cloneNode(!0));if(s.set(c,u),c instanceof HTMLStyleElement&&c.dataset.emotion){const{sheet:d}=c,{sheet:l}=u;if(d&&l)for(const x of d.cssRules)l.insertRule(x.cssText)}}}),n.removedNodes.forEach(c=>{const u=s.get(c);u&&t.head.removeChild(u)}))})});return r.observe(e.head,{childList:!0}),()=>{r.disconnect()}}function b(e,t){for(const r of e.attributes)t.setAttribute(r.name,r.value);const s=new MutationObserver(r=>{r.forEach(o=>{if(o.type==="attributes"&&o.attributeName!=null){const n=e.getAttribute(o.attributeName);n==null?t.removeAttribute(o.attributeName):t.setAttribute(o.attributeName,n)}})});return s.observe(e,{attributes:!0}),()=>{s.disconnect()}}const k=e=>{const t=a.useRef(!1);a.useEffect(()=>{t.current||(e(),t.current=!0)},[e])};function U({children:e,target:t="_blank",features:s}){const[r,o]=a.useState(null);return a.useEffect(()=>{const n=window.open("about:blank",t,s);if(!n){E.error("Unable to create child window");return}p(document,n.document),b(document.documentElement,n.document.documentElement),o(n);function c(){n?.close()}return window.addEventListener("unload",c),()=>{window.removeEventListener("unload",c),n.close()}},[]),r&&f.createPortal(i.jsx(h,{window:r,children:e}),r.document.body)}function _({children:e}){const[t,s]=a.useState(null);return k(()=>{let r=!1,o=null;return async function(){const n=await window.documentPictureInPicture?.requestWindow({width:400,height:600});if(n){if(r){n.close();return}o=()=>n.close(),p(document,n.document),b(document.documentElement,n.document.documentElement),s(n)}}(),()=>{r=!0,o?.()}}),t&&f.createPortal(i.jsx(h,{window:t,children:e}),t.document.body)}function H({clientThreadId:e}){const t=C.useStore(),s=w();T({resetThreadAction:()=>t.newThread(!0),clientThreadId:e,focusPromptTextareaAction:()=>s.document.getElementById("prompt-textarea")?.focus()});const r=g();return i.jsxs(i.Fragment,{children:[r?i.jsx(A,{clientThreadId:e,children:i.jsx(L,{hideHeader:!0})}):i.jsx(N,{clientThreadId:e,hideHeader:!0,hideFooter:!0,renderEmptyState:!1},e),i.jsx(j,{clientThreadId:e})]})}function z({clientThreadId:e}){M(e,{kind:v.PrimaryAssistant});const t=w();return a.useEffect(()=>{const s=()=>{t.document.getElementById("prompt-textarea")?.focus()};return t.addEventListener("focus",s),()=>{t.removeEventListener("focus",s)}},[t]),i.jsx(y,{children:i.jsx(P,{children:i.jsx(W,{clientThreadId:e,children:i.jsx(S,{clientThreadId:e,children:i.jsx(H,{clientThreadId:e})})})})})}export{z as C,_ as D,U as a};
//# sourceMappingURL=cjtliwu5b6fm5lpa.js.map