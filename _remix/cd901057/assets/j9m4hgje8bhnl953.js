import{r as p,bb as O,V as W,d_ as S,bg as q,a2 as B,x as f,W as P,am as b,bz as K,fw as U,fx as k}from"./jzo1gvcwh9pppzs1.js";import{C as H,a as $}from"./fkepkimma5k3qv6e.js";import{a as V}from"./iq36xby2qsv8njj4.js";import"./2coi2ak0tsog2ew3.js";import{jF as X,jG as z,hr as G}from"./beucmu6zcawzhvqq.js";import{bX as Q,bY as Y}from"./leocs7nz48lbrcv1.js";import{a as Z,b as J,l as ee}from"./wgqxthyy0ty9wjfc.js";import"./mhzd66d800yve4rv.js";import"./otrvvqtzgopvxe2m.js";import"./n52qu0rpacsut12w.js";import"./ebiov1kujwpy2p74.js";import"./h87jupndbzh98kn8.js";import"./elgn73zdqs3jetpy.js";import"./g0m2i405q5q73t1j.js";import"./parllegwy3ioo052.js";import"./jsatipvtf3s4nk2t.js";import"./gp240rnsvbkgy982.js";import"./cqeond09b2l8tdrm.js";import"./l9td2pw1jzb9w40a.js";import"./fxq7syfiz22hx4s1.js";import"./m8sygp9hlt2qio9s.js";import"./nnz4hggrrjichd1k.js";import"./gludlt2uldpe4igo.js";import"./o16drnd86idgagwp.js";import"./miq7my0c6cwbve91.js";import"./b9urygkjcl8cx2c2.js";import"./cfgrn4qg7vvylckp.js";import"./ldc2b5tjx888ixf7.js";import"./nd01xh0s3sksnn0o.js";import"./e48x7pcge2ncmftn.js";import"./c00pbk7bmb794pwo.js";import"./ub2qrhh38g6qbir9.js";import"./fc7dffa1kmotgal0.js";import"./goh8q4mto9jr13ik.js";import"./bxydohttn9u9ggzl.js";import"./llzkphmjqwhl8axz.js";import"./owwsms3r9x066ff3.js";import"./m0gsmg1del92jivn.js";import"./eevu2w0jqo5a92he.js";import"./ch17rvpuji5b0vs3.js";const x=p.createContext(void 0),te={};x.Provider;const ne=()=>p.useContext(x)?p.useContext(x):te,w=typeof window>"u"?global:window,v="@griffel/";function se(e,t){return w[Symbol.for(v+e)]||(w[Symbol.for(v+e)]=t),w[Symbol.for(v+e)]}const _=se("DEFINITION_LOOKUP_TABLE",{}),y="data-make-styles-bucket",oe="data-priority",E=7,R="___",ie=R.length+E,re=0,le=1;function ce(e){const t=e.length;if(t===E)return e;for(let n=t;n<E;n++)e+="0";return e}function F(e,t,n=[]){return R+ce(X(e+t))}function L(e,t){let n="",s="";for(const i in e){const o=e[i];if(o===0){s+=i+" ";continue}const r=Array.isArray(o),l=t==="rtl"?(r?o[1]:o)+" ":(r?o[0]:o)+" ";n+=l,s+=l}return[n.slice(0,-1),s.slice(0,-1)]}function I(e,t){const n={};for(const s in e){const[i,o]=L(e[s],t);if(o===""){n[s]="";continue}const r=F(o,t),l=r+(i===""?"":" "+i);_[r]=[e[s],t],n[s]=l}return n}const N={};function ae(){let e=null,t="",n="";const s=new Array(arguments.length);for(let c=0;c<arguments.length;c++){const h=arguments[c];if(typeof h=="string"&&h!==""){const a=h.indexOf(R);if(a===-1)t+=h+" ";else{const C=h.substr(a,ie);a>0&&(t+=h.slice(0,a)),n+=C,s[c]=C}}}if(n==="")return t.slice(0,-1);const i=N[n];if(i!==void 0)return t+i;const o=[];for(let c=0;c<arguments.length;c++){const h=s[c];if(h){const a=_[h];a&&(o.push(a[re]),e=a[le])}}const r=Object.assign.apply(Object,[{}].concat(o)),[l,u]=L(r,e),d=F(u,e,s),m=d+" "+l;return N[n]=m,_[d]=[r,e],t+m}function ue(e){return Array.isArray(e)?e:[e]}function fe(e,t,n,s){const i=[];if(s[y]=t,s[oe]=String(n),e)for(const r in s)e.setAttribute(r,s[r]);function o(r){return e?.sheet?e.sheet.insertRule(r,e.sheet.cssRules.length):i.push(r)}return{elementAttributes:s,insertRule:o,element:e,bucketName:t,cssRules(){return e?.sheet?Array.from(e.sheet.cssRules).map(r=>r.cssText):i}}}const de=["r","d","l","v","w","f","i","h","a","s","k","t","m","c"],T=de.reduce((e,t,n)=>(e[t]=n,e),{});function me(e,t,n){return(e==="m"?e+t:e)+n}function he(e,t,n,s,i={}){var o,r;const l=e==="m",u=(o=i.m)!==null&&o!==void 0?o:"0",d=(r=i.p)!==null&&r!==void 0?r:0,m=me(e,u,d);if(!s.stylesheets[m]){const c=t&&t.createElement("style"),h=fe(c,e,d,Object.assign({},s.styleElementAttributes,l&&{media:u}));s.stylesheets[m]=h,t&&c&&t.head.insertBefore(c,pe(t,n,e,s,i))}return s.stylesheets[m]}function ge(e,t,n){var s,i;const o=t+((s=n.m)!==null&&s!==void 0?s:""),r=e.getAttribute(y)+((i=e.media)!==null&&i!==void 0?i:"");return o===r}function pe(e,t,n,s,i={}){var o,r;const l=T[n],u=(o=i.m)!==null&&o!==void 0?o:"",d=(r=i.p)!==null&&r!==void 0?r:0;let m=g=>l-T[g.getAttribute(y)],c=e.head.querySelectorAll(`[${y}]`);if(n==="m"){const g=e.head.querySelectorAll(`[${y}="${n}"]`);g.length&&(c=g,m=M=>s.compareMediaQueries(u,M.media))}const h=g=>ge(g,n,i)?d-Number(g.getAttribute("data-priority")):m(g),a=c.length;let C=a-1;for(;C>=0;){const g=c.item(C);if(h(g)>0)return g.nextSibling;C--}return a>0?c.item(0):t?t.nextSibling:null}function D(e,t){try{e.insertRule(t)}catch{}}let Ce=0;const Se=(e,t)=>e<t?-1:e>t?1:0;function ye(e=typeof document>"u"?void 0:document,t={}){const{classNameHashSalt:n,unstable_filterCSSRule:s,insertionPoint:i,styleElementAttributes:o,compareMediaQueries:r=Se}=t,l={classNameHashSalt:n,insertionCache:{},stylesheets:{},styleElementAttributes:Object.freeze(o),compareMediaQueries:r,id:`d${Ce++}`,insertCSSRules(u){for(const d in u){const m=u[d];for(let c=0,h=m.length;c<h;c++){const[a,C]=ue(m[c]),g=he(d,e,i||null,l,C);l.insertionCache[a]||(l.insertionCache[a]=d,s?s(a)&&D(g,a):D(g,a))}}}};return l}const be=()=>{const e={};return function(n,s){e[n.id]===void 0&&(n.insertCSSRules(s),e[n.id]=!0)}};function we(e,t,n=be){const s=n();let i=null,o=null;function r(l){const{dir:u,renderer:d}=l,m=u==="ltr";return m?i===null&&(i=I(e,u)):o===null&&(o=I(e,u)),s(d,t),m?i:o}return r}function ve(){return typeof window<"u"&&!!(window.document&&window.document.createElement)}const j=O.useInsertionEffect?O.useInsertionEffect:void 0,xe=()=>{const e={};return function(n,s){if(j&&ve()){j(()=>{n.insertCSSRules(s)},[n,s]);return}e[n.id]===void 0&&(n.insertCSSRules(s),e[n.id]=!0)}},_e=p.createContext(ye());function Ee(){return p.useContext(_e)}const Re=p.createContext("ltr");function Oe(){return p.useContext(Re)}function Ie(e,t){const n=we(e,t,xe);return function(){const i=Oe(),o=Ee();return n({dir:i,renderer:o})}}const Ne=Ie({root:{mc9l5x:"f1w7gpdv",Bg96gwp:"fez10in",ycbfsm:"fg4l7m0"},rtl:{Bz10aip:"f13rod7r"}},{d:[".f1w7gpdv{display:inline;}",".fez10in{line-height:0;}",".f13rod7r{-webkit-transform:scaleX(-1);-moz-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}"],t:["@media (forced-colors: active){.fg4l7m0{forced-color-adjust:auto;}}"]}),Te=(e,t)=>{const{title:n,primaryFill:s="currentColor",...i}=e,o={...i,title:void 0,fill:s},r=Ne(),l=ne();return o.className=ae(r.root,t?.flipInRtl&&l?.textDirection==="rtl"&&r.rtl,o.className),n&&(o["aria-label"]=n),!o["aria-label"]&&!o["aria-labelledby"]?o["aria-hidden"]=!0:o.role="img",o},De=(e,t,n,s)=>{const i=t==="1em"?"20":t,o=p.forwardRef((r,l)=>{const u={...Te(r,{flipInRtl:void 0}),ref:l,width:t,height:t,viewBox:`0 0 ${i} ${i}`,xmlns:"http://www.w3.org/2000/svg"};return p.createElement("svg",u,...n.map(d=>p.createElement("path",{d,fill:u.fill})))});return o.displayName=e,o},je=De("Dismiss16Regular","16",["m2.59 2.72.06-.07a.5.5 0 0 1 .63-.06l.07.06L8 7.29l4.65-4.64a.5.5 0 0 1 .7.7L8.71 8l4.64 4.65c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L8 8.71l-4.65 4.64a.5.5 0 0 1-.7-.7L7.29 8 2.65 3.35a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"]);function Ae({onNewThread:e,onOpenInMainWindow:t,onClose:n}){const s=P(),i=s.formatMessage({id:"cHkwhd",defaultMessage:"New chat"}),o=s.formatMessage({id:"BzpJ40",defaultMessage:"Open in Main Window"}),r=s.formatMessage({id:"63wWYx",defaultMessage:"Close"});return f.jsxs("div",{className:"draggable no-draggable-children fixed top-0 flex h-[32px] w-full justify-between",children:[f.jsx(b,{label:i,sideOffset:4,side:"bottom",children:f.jsx(A,{onClick:e,"aria-label":i,children:f.jsx(Q,{})})}),t&&f.jsx(b,{label:o,sideOffset:4,side:"bottom",className:"ml-auto",children:f.jsx(A,{onClick:t,"aria-label":o,children:f.jsx(Y,{})})}),f.jsx(b,{label:r,sideOffset:4,side:"bottom",children:f.jsx(We,{onClick:n,"aria-label":r,children:f.jsx(je,{})})})]})}const A=W.button`flex h-full w-[46px] cursor-default items-center justify-center hover:bg-gray-200 active:bg-gray-100 dark:hover:bg-gray-600 dark:active:bg-gray-700`,We=W.button`flex h-full w-[46px] cursor-default items-center justify-center hover:bg-red-500 hover:text-white active:bg-red-400 active:text-white`;function Fe({onNewThread:e,onOpenInMainWindow:t,onClose:n,children:s}){const i=p.useRef(null);return f.jsxs("div",{className:"flex h-full w-full flex-col pt-[32px]",ref:i,children:[f.jsx(Ae,{onNewThread:e,onOpenInMainWindow:t,onClose:n}),s]})}function Le({clientThreadId:e}){const t=S.useStore(),n=q(),s=Z(o=>J.resolveThreadId(e,o)),i=B();return p.useEffect(()=>{if(!i)return;function o(l){l.key==="Escape"&&!l.shiftKey&&!l.ctrlKey&&!l.metaKey&&!l.altKey&&S.hide()}function r(){i&&z()&&S.hide()}return i.document.addEventListener("keydown",o),i.addEventListener("blur",r),()=>{i.document.removeEventListener("keydown",o),i.removeEventListener("blur",r)}},[i]),f.jsx(Fe,{onNewThread:()=>{t.newThread(!0)},onOpenInMainWindow:s!==e||!ee(e)?()=>{n(`/c/${e}`),t.newThread(!0),S.focusMainWindow()}:void 0,onClose:()=>{S.hide()},children:f.jsx(H,{clientThreadId:e})})}function xt(){const{value:e}=K("3653083604"),{isOpen:t}=G(),n=V(r=>r.isVoiceModeActive),s=e&&!t&&!n,{clientThreadId:i}=S.useState(),o=S.useStore();if(p.useEffect(()=>{s&&!i&&o.newThread(!1)},[s,i,o]),!(!s||!i))return f.jsx($,{features:`${U}=${k.COMPANION}`,children:f.jsx(Le,{clientThreadId:i})})}export{xt as DesktopCompanionWindowController};
//# sourceMappingURL=j9m4hgje8bhnl953.js.map