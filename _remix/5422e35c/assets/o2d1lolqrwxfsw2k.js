import{r as u,by as f,l as i,eB as h,c0 as v,aI as y,T as w,eC as C,e2 as S}from"./cy64emva2uzrk485.js";import{T as W}from"./m8uv83e8qsvk5cah.js";import{cu as g,dp as P,c5 as j,dq as A}from"./j735z7kkcepyp8y2.js";import{C as L}from"./nw1l9zy02oelai8f.js";import{a as N}from"./mkx55htxkx0nf0yd.js";import{u as T}from"./ehuratfqdza89wob.js";import{u as M}from"./deovd2qhauetjiwg.js";function m(e){return e instanceof HTMLLinkElement&&e.rel==="stylesheet"||e instanceof HTMLStyleElement}function p(e,t){e.head.querySelectorAll("link, style").forEach(o=>{m(o)&&t.head.appendChild(o.cloneNode(!0))});const s=new WeakMap,r=new MutationObserver(o=>{o.forEach(n=>{n.type==="childList"&&(n.addedNodes.forEach(c=>{if(m(c)){const a=t.head.appendChild(c.cloneNode(!0));if(s.set(c,a),c instanceof HTMLStyleElement&&c.dataset.emotion){const{sheet:d}=c,{sheet:l}=a;if(d&&l)for(const E of d.cssRules)l.insertRule(E.cssText)}}}),n.removedNodes.forEach(c=>{const a=s.get(c);a&&t.head.removeChild(a)}))})});return r.observe(e.head,{childList:!0}),()=>{r.disconnect()}}function b(e,t){for(const r of e.attributes)t.setAttribute(r.name,r.value);const s=new MutationObserver(r=>{r.forEach(o=>{if(o.type==="attributes"&&o.attributeName!=null){const n=e.getAttribute(o.attributeName);n==null?t.removeAttribute(o.attributeName):t.setAttribute(o.attributeName,n)}})});return s.observe(e,{attributes:!0}),()=>{s.disconnect()}}const x=e=>{const t=u.useRef(!1);u.useEffect(()=>{t.current||(e(),t.current=!0)},[e])};function I({children:e,target:t="_blank",features:s}){const[r,o]=u.useState(null);return x(()=>{const n=window.open("about:blank",t,s);if(!n){v.error("Unable to create child window");return}p(document,n.document),b(document.documentElement,n.document.documentElement),o(n);function c(){n?.close()}return window.addEventListener("unload",c),()=>{window.removeEventListener("unload",c),n.close()}}),r&&f.createPortal(i.jsx(h,{window:r,children:e}),r.document.body)}function K({children:e}){const[t,s]=u.useState(null);return x(()=>{let r=!1,o=null;return async function(){const n=await window.documentPictureInPicture?.requestWindow({width:400,height:600});if(n){if(r){n.close();return}o=()=>n.close(),p(document,n.document),b(document.documentElement,n.document.documentElement),s(n)}}(),()=>{r=!0,o?.()}}),t&&f.createPortal(i.jsx(h,{window:t,children:e}),t.document.body)}function k({clientThreadId:e}){const t=S.useStore(),s=w();M({resetThreadAction:()=>t.newThread(),clientThreadId:e,focusPromptTextareaAction:()=>s.document.getElementById("prompt-textarea")?.focus()});const r=j();return i.jsxs(i.Fragment,{children:[r?i.jsx(L,{clientThreadId:e,onThreadCreated:function(o){},onNewThread:function(){},hideHeader:!0}):i.jsx(N,{clientThreadId:e,hideHeader:!0,hideFooter:!0,renderEmptyState:!1},e),i.jsx(A,{clientThreadId:e})]})}function U({clientThreadId:e}){T(e,{kind:y.PrimaryAssistant});const t=w();return u.useEffect(()=>{const s=()=>{t.document.getElementById("prompt-textarea")?.focus()};return t.addEventListener("focus",s),()=>{t.removeEventListener("focus",s)}},[t]),i.jsx(C,{children:i.jsx(g,{children:i.jsx(P,{clientThreadId:e,children:i.jsx(W,{clientThreadId:e,children:i.jsx(k,{clientThreadId:e})})})})})}export{U as C,K as D,I as a};
//# sourceMappingURL=o2d1lolqrwxfsw2k.js.map