import{r as p,fO as R,bP as B,ay as W,ct as H,j as u,eE as E,fP as K,fQ as U,fR as $,aU as V,fS as N,bg as X,fT as G}from"./otyn7m3v4o5hjv1m.js";import{C as Q}from"./pb5sugli8r818z4g.js";import{bV as z,bW as Z}from"./elwr36cpw46qn2l2.js";import{hn as Y,c1 as J,bL as T,gT as ee}from"./g98o1hu13svzcy4j.js";import{f as te}from"./fvmrj8bhjyrxfksq.js";import{u as ne}from"./g08cpw9vtft4y6ku.js";import{l as se,e as re}from"./lw3rrnnb5dxcyypl.js";import{C as I}from"./epznp7ifjyr9ni9u.js";import"./hkmla6lmyftf0v53.js";import"./n8ljlp21wilt13tf.js";import"./hn32nqznsqfgnwx9.js";import"./guixxmttrchqsmhb.js";import"./aszamxbvr2a9gk12.js";import"./kgyg817qi2bj4184.js";import"./i7fmbdae81b985x0.js";import"./hlmesjknt93bcxhd.js";import"./kf0px5xsq2h01gfe.js";import"./kvxptdshjr5uucy7.js";import"./mdbvzkzbjz7wvyrk.js";import"./busl3phtm15t1ux6.js";import"./mdywhc6vbcew95e2.js";import"./meyujahihr76crrx.js";import"./bn16pf6j90ncqssc.js";import"./itbprcwpx790xl1j.js";import"./o197eeud97p1ngrx.js";import"./621y46rkqoaumuwb.js";import"./k9qj1gs8lyamxgck.js";import"./h79fctozd4pirvd4.js";import"./nnjyftwv95b3fulb.js";import"./f6msl6xch9ahw1u0.js";import"./hg4uk436hcqxcqme.js";import"./bkt4td8i9ll1fbc2.js";import"./ohl91zfwkdken7ti.js";import"./9z2zy2gm2kabu572.js";import"./ofmu0gkzz86hjmwa.js";import"./b2fmvrixwi0ualqk.js";import"./xe4hexxxyjcii8ft.js";const x=p.createContext(void 0),oe={};x.Provider;const ie=()=>p.useContext(x)?p.useContext(x):oe,C=typeof window>"u"?global:window,v="@griffel/";function ce(e,t){return C[Symbol.for(v+e)]||(C[Symbol.for(v+e)]=t),C[Symbol.for(v+e)]}const b=ce("DEFINITION_LOOKUP_TABLE",{}),y="data-make-styles-bucket",le="data-priority",w=7,_="___",ae=_.length+w,ue=0,de=1;function fe(e){const t=e.length;if(t===w)return e;for(let s=t;s<w;s++)e+="0";return e}function P(e,t,s=[]){return _+fe(Y(e+t))}function k(e,t){let s="",n="";for(const o in e){const r=e[o];if(r===0){n+=o+" ";continue}const i=Array.isArray(r),c=t==="rtl"?(i?r[1]:r)+" ":(i?r[0]:r)+" ";s+=c,n+=c}return[s.slice(0,-1),n.slice(0,-1)]}function O(e,t){const s={};for(const n in e){const[o,r]=k(e[n],t);if(r===""){s[n]="";continue}const i=P(r,t),c=i+(o===""?"":" "+o);b[i]=[e[n],t],s[n]=c}return s}const A={};function me(){let e=null,t="",s="";const n=new Array(arguments.length);for(let l=0;l<arguments.length;l++){const h=arguments[l];if(typeof h=="string"&&h!==""){const m=h.indexOf(_);if(m===-1)t+=h+" ";else{const S=h.substr(m,ae);m>0&&(t+=h.slice(0,m)),s+=S,n[l]=S}}}if(s==="")return t.slice(0,-1);const o=A[s];if(o!==void 0)return t+o;const r=[];for(let l=0;l<arguments.length;l++){const h=n[l];if(h){const m=b[h];m&&(r.push(m[ue]),e=m[de])}}const i=Object.assign.apply(Object,[{}].concat(r)),[c,a]=k(i,e),d=P(a,e,n),f=d+" "+c;return A[s]=f,b[d]=[i,e],t+f}function he(e){return Array.isArray(e)?e:[e]}function pe(e,t,s,n){const o=[];if(n[y]=t,n[le]=String(s),e)for(const i in n)e.setAttribute(i,n[i]);function r(i){return e!=null&&e.sheet?e.sheet.insertRule(i,e.sheet.cssRules.length):o.push(i)}return{elementAttributes:n,insertRule:r,element:e,bucketName:t,cssRules(){return e!=null&&e.sheet?Array.from(e.sheet.cssRules).map(i=>i.cssText):o}}}const ge=["r","d","l","v","w","f","i","h","a","s","k","t","m","c"],D=ge.reduce((e,t,s)=>(e[t]=s,e),{});function Se(e,t,s){return(e==="m"?e+t:e)+s}function ye(e,t,s,n,o={}){var r,i;const c=e==="m",a=(r=o.m)!==null&&r!==void 0?r:"0",d=(i=o.p)!==null&&i!==void 0?i:0,f=Se(e,a,d);if(!n.stylesheets[f]){const l=t&&t.createElement("style"),h=pe(l,e,d,Object.assign({},n.styleElementAttributes,c&&{media:a}));n.stylesheets[f]=h,t&&l&&t.head.insertBefore(l,ve(t,s,e,n,o))}return n.stylesheets[f]}function Ce(e,t,s){var n,o;const r=t+((n=s.m)!==null&&n!==void 0?n:""),i=e.getAttribute(y)+((o=e.media)!==null&&o!==void 0?o:"");return r===i}function ve(e,t,s,n,o={}){var r,i;const c=D[s],a=(r=o.m)!==null&&r!==void 0?r:"",d=(i=o.p)!==null&&i!==void 0?i:0;let f=g=>c-D[g.getAttribute(y)],l=e.head.querySelectorAll(`[${y}]`);if(s==="m"){const g=e.head.querySelectorAll(`[${y}="${s}"]`);g.length&&(l=g,f=M=>n.compareMediaQueries(a,M.media))}const h=g=>Ce(g,s,o)?d-Number(g.getAttribute("data-priority")):f(g),m=l.length;let S=m-1;for(;S>=0;){const g=l.item(S);if(h(g)>0)return g.nextSibling;S--}return m>0?l.item(0):t?t.nextSibling:null}function j(e,t){try{e.insertRule(t)}catch{}}let xe=0;const be=(e,t)=>e<t?-1:e>t?1:0;function we(e=typeof document>"u"?void 0:document,t={}){const{classNameHashSalt:s,unstable_filterCSSRule:n,insertionPoint:o,styleElementAttributes:r,compareMediaQueries:i=be}=t,c={classNameHashSalt:s,insertionCache:{},stylesheets:{},styleElementAttributes:Object.freeze(r),compareMediaQueries:i,id:`d${xe++}`,insertCSSRules(a){for(const d in a){const f=a[d];for(let l=0,h=f.length;l<h;l++){const[m,S]=he(f[l]),g=ye(d,e,o||null,c,S);c.insertionCache[m]||(c.insertionCache[m]=d,n?n(m)&&j(g,m):j(g,m))}}}};return c}const Ee=()=>{const e={};return function(s,n){e[s.id]===void 0&&(s.insertCSSRules(n),e[s.id]=!0)}};function _e(e,t,s=Ee){const n=s();let o=null,r=null;function i(c){const{dir:a,renderer:d}=c,f=a==="ltr";return f?o===null&&(o=O(e,a)):r===null&&(r=O(e,a)),n(d,t),f?o:r}return i}function Re(){return typeof window<"u"&&!!(window.document&&window.document.createElement)}const L=R.useInsertionEffect?R.useInsertionEffect:void 0,Ne=()=>{const e={};return function(s,n){if(L&&Re()){L(()=>{s.insertCSSRules(n)},[s,n]);return}e[s.id]===void 0&&(s.insertCSSRules(n),e[s.id]=!0)}},Te=p.createContext(we());function Ie(){return p.useContext(Te)}const Oe=p.createContext("ltr");function Ae(){return p.useContext(Oe)}function De(e,t){const s=_e(e,t,Ne);return function(){const o=Ae(),r=Ie();return s({dir:o,renderer:r})}}const je=De({root:{mc9l5x:"f1w7gpdv",Bg96gwp:"fez10in",ycbfsm:"fg4l7m0"},rtl:{Bz10aip:"f13rod7r"}},{d:[".f1w7gpdv{display:inline;}",".fez10in{line-height:0;}",".f13rod7r{-webkit-transform:scaleX(-1);-moz-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}"],t:["@media (forced-colors: active){.fg4l7m0{forced-color-adjust:auto;}}"]}),Le=(e,t)=>{const{title:s,primaryFill:n="currentColor",...o}=e,r={...o,title:void 0,fill:n},i=je(),c=ie();return r.className=me(i.root,(t==null?void 0:t.flipInRtl)&&(c==null?void 0:c.textDirection)==="rtl"&&i.rtl,r.className),s&&(r["aria-label"]=s),!r["aria-label"]&&!r["aria-labelledby"]?r["aria-hidden"]=!0:r.role="img",r},Fe=(e,t,s,n)=>{const o=t==="1em"?"20":t,r=p.forwardRef((i,c)=>{const a={...Le(i,{flipInRtl:void 0}),ref:c,width:t,height:t,viewBox:`0 0 ${o} ${o}`,xmlns:"http://www.w3.org/2000/svg"};return p.createElement("svg",a,...s.map(d=>p.createElement("path",{d,fill:a.fill})))});return r.displayName=e,r},qe=Fe("Dismiss16Regular","16",["m2.59 2.72.06-.07a.5.5 0 0 1 .63-.06l.07.06L8 7.29l4.65-4.64a.5.5 0 0 1 .7.7L8.71 8l4.64 4.65c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L8 8.71l-4.65 4.64a.5.5 0 0 1-.7-.7L7.29 8 2.65 3.35a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"]);function Pe({onNewThread:e,onOpenInMainWindow:t}){return u.jsxs("div",{className:"draggable no-draggable-children fixed top-0 flex h-8 w-full items-center justify-between px-2",children:[u.jsxs("div",{children:[u.jsx("button",{onClick:e,className:"text-token-text-tertiary hover:text-token-text-primary",children:u.jsx(z,{})}),t&&u.jsx("button",{onClick:t,className:"pl-2 text-token-text-tertiary hover:text-token-text-primary",children:u.jsx(Z,{})})]}),u.jsx("button",{className:"text-token-text-tertiary hover:text-token-text-primary",onClick:()=>{E(!1)},children:u.jsx(qe,{className:"text-token-text-tertiary hover:text-token-text-primary"})})]})}function ke({onNewThread:e,onOpenInMainWindow:t,children:s}){const n=p.useRef(null);return p.useEffect(()=>{if(n.current){const o=n.current.ownerDocument,r=i=>{i.key==="Escape"&&!i.shiftKey&&!i.ctrlKey&&!i.metaKey&&E(!1)};return o.addEventListener("keydown",r),()=>{o.removeEventListener("keydown",r)}}},[]),u.jsxs("div",{className:"flex h-full w-full flex-col pt-8",ref:n,children:[u.jsx(Pe,{onNewThread:e,onOpenInMainWindow:t}),s]})}function Me(){const e=I.useStore(),{clientThreadId:t}=I.useState();ne(t,{kind:B.PrimaryAssistant});const s=W(),n=se(r=>re.resolveThreadId(t,r)),o=H();return p.useEffect(()=>{const r=()=>{var i;(i=o.document.getElementById("prompt-textarea"))==null||i.focus()};return o.addEventListener("focus",r),()=>{o.removeEventListener("focus",r)}},[o]),u.jsx(ke,{onNewThread:()=>{e.newThread()},onOpenInMainWindow:n!==t?()=>{s(`/c/${t}`),E(!1,{focusMainWindow:!0})}:void 0,children:u.jsx(K,{children:u.jsx(J,{children:u.jsx(T.Provider,{store:()=>new T,children:u.jsxs(Q,{clientThreadId:t,children:[u.jsx(te,{clientThreadId:t,hideHeader:!0,hideFooter:!0,renderEmptyState:!1},t),u.jsx(ee,{clientThreadId:t})]})},t)})})})}let F=!1;function _t(){var e;(e=U)==null||e.registerObserver($)}function q(e){return e instanceof HTMLLinkElement&&e.rel==="stylesheet"||e instanceof HTMLStyleElement}function Be(e,t){e.head.querySelectorAll("link, style").forEach(o=>{q(o)&&t.head.appendChild(o.cloneNode(!0))});const s=new WeakMap,n=new MutationObserver(o=>{o.forEach(r=>{r.type==="childList"&&(r.addedNodes.forEach(i=>{if(q(i)){const c=t.head.appendChild(i.cloneNode(!0));if(s.set(i,c),i instanceof HTMLStyleElement&&i.dataset.emotion){const{sheet:a}=i,{sheet:d}=c;if(a&&d)for(const f of a.cssRules)d.insertRule(f.cssText)}}}),r.removedNodes.forEach(i=>{const c=s.get(i);c&&t.head.removeChild(c)}))})});return n.observe(e.head,{childList:!0}),()=>{n.disconnect()}}function We(e,t){for(const n of e.attributes)t.setAttribute(n.name,n.value);const s=new MutationObserver(n=>{n.forEach(o=>{if(o.type==="attributes"&&o.attributeName!=null){const r=e.getAttribute(o.attributeName);r==null?t.removeAttribute(o.attributeName):t.setAttribute(o.attributeName,r)}})});return s.observe(e,{attributes:!0}),()=>{s.disconnect()}}function Rt(){const[e,t]=p.useState(null),{value:s}=V("3653083604");return p.useEffect(()=>{if(!s||F||typeof window>"u")return;const n=window.open("about:blank",N);if(!n)throw new Error("ChatBar: window.open() did not create a window");F=!0,Be(document,n.document),We(document.documentElement,n.document.documentElement),t(n.document.body.appendChild(n.document.createElement("div"))),n.addEventListener("unload",o=>{n.close()})},[s]),e&&X.createPortal(u.jsx(G,{window:e.ownerDocument.defaultView,children:u.jsx(Me,{})}),e,N)}export{Rt as DesktopChatBar,_t as initDesktop};
//# sourceMappingURL=hy3hamsr2him0fte.js.map