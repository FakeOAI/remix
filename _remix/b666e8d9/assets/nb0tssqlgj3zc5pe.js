import{j as t,aE as T,r as h,L as S,b6 as M,b as z,ay as j,a$ as D}from"./iw5llf4a9z2k4qli.js";import{bF as p,bG as F,bH as f,bI as v,a9 as y,bs as P}from"./ffbc0egt64q2hvb1.js";import{b as _,aX as O}from"./ere5qx05or5w4r80.js";import{g as $}from"./kqwdyvkaaavvn8k3.js";import{a as A}from"./myy3q76qm0gk9eld.js";import{u as G,a as q,g as Q,b as k}from"./eylejl4v1dbdxlbb.js";import{m as R}from"./zbbavq3fohnytg6f.js";import"./u2ffobb39q5s9aq1.js";import"./ei57mkf7jshbcrye.js";function ae({clientThreadId:e}){const s=p.useCurrentImage();if(!s)return null;const{image:n,source:a,turnIndex:o}=s;if(a==null||e==null||o==null)return t.jsx(g,{image:n});const c=F(e,o);return t.jsx(g,{image:n,group:c,turnIndex:o,groupSource:a})}function oe(){const e=p.useCurrentImage();if(!e)return null;const{image:s,source:n}=e;if(n==null)return t.jsx(g,{image:s});switch(n){case f.ImagesTab:return t.jsx(X,{image:s});case f.Turn:return t.jsx(H,{image:s})}}function X({image:e}){const{imageResults:s}=G();return t.jsx(g,{image:e,group:s,groupSource:f.ImagesTab})}function H({image:e}){const{imageResults:s}=q();return t.jsx(g,{image:e,group:s,groupSource:f.Turn})}const N=T.div`grow flex items-start p-8`,U={enter:e=>({x:e>0?1e3:-1e3,opacity:0}),center:{zIndex:1,x:0,opacity:1},exit:e=>({zIndex:0,x:e<0?1e3:-1e3,opacity:0})},C=1e4,B=(e,s)=>Math.abs(e)*s;function g({image:e,group:s,groupSource:n,turnIndex:a}){const o=A(e?.url??""),c=p.useCurrentImage(),i=p.useStore(),b=c?.mountDirection;h.useEffect(()=>{window?.history?.state?.imageModalOpen||window.history.pushState({imageModalOpen:!0},"",window.location.href);const r=()=>{window?.history?.state?.imageModalOpen||i.setCurrentImage(void 0)};return window.addEventListener("popstate",r),()=>window.removeEventListener("popstate",r)},[i]);const w=()=>{window.history.go(-1),i.setCurrentImage(void 0)},l=s?.findIndex(r=>S(e,r)),u=s?.length??1,m=l!=null&&u>1,d=h.useCallback(()=>{!m||s==null||i.setCurrentImage({image:s[(l+1)%s.length],source:n,mountDirection:v.FromRight,turnIndex:a})},[m,s,i,l,n,a]);M({queries:(s??[]).map(r=>Q(r.thumbnail_url))});const x=h.useCallback(()=>{!m||s==null||i.setCurrentImage({image:s[(l-1+s.length)%s.length],source:n,mountDirection:v.FromLeft,turnIndex:a})},[m,s,i,l,n,a]);return h.useEffect(()=>z(document,{keydown:r=>{r.key==="ArrowRight"?d():r.key==="ArrowLeft"&&x()}}),[d,x]),t.jsx(y,{children:e&&t.jsx(j.Root,{isOpen:!0,onClose:w,children:t.jsx(j.Overlay,{children:t.jsxs(D,{className:"flex h-full w-full flex-col bg-black/95",children:[t.jsxs("div",{className:"relative flex w-full grow justify-center overflow-hidden",children:[t.jsxs("div",{className:"absolute right-4 top-4 flex items-center sm:right-6 sm:top-6",children:[m&&t.jsxs("div",{className:"shrink-0 px-4 py-2 text-token-text-tertiary",children:[l+1," / ",u]}),t.jsx("button",{onClick:r=>{r.stopPropagation(),w()},className:"flex h-9 w-9 items-center justify-center outline-none hover:opacity-70",children:t.jsx(_,{className:"h-6 w-6 text-gray-400"})})]}),u>1&&t.jsx(N,{className:"cursor-w-resize",onClick:r=>{r.stopPropagation(),x()}}),t.jsx(y,{initial:!1,custom:b,children:t.jsx(R.div,{variants:U,custom:b??0,className:"absolute bottom-4 top-24",initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},drag:u>1?"x":!1,dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:(r,{offset:E,velocity:L})=>{const I=B(E.x,L.x);I<-C?d():I>C&&x()},children:t.jsx(J,{image:e})},l)}),u>1&&t.jsx(N,{className:"cursor-e-resize",onClick:r=>{r.stopPropagation(),d()}})]}),t.jsx("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"flex min-h-20 w-full shrink-0 items-center gap-8 px-6 pb-3 pt-8 text-sm hover:opacity-70 sm:px-8 sm:pb-8",children:t.jsxs("div",{className:"flex grow flex-col gap-0.5 overflow-hidden pr-2",children:[t.jsxs("div",{className:"flex items-center gap-2 truncate text-token-text-tertiary",children:[t.jsx(P,{url:e.content_url,className:"rounded",size:16}),o.data??$(e.url)]}),t.jsx("div",{className:"truncate font-semibold text-white",children:e.title})]})})]})})})})}function J({image:e}){const s=e.content_url.replace(/^http:\/\//,"https://"),n=e.thumbnail_url.replace(/^http:\/\//,"https://"),a=e.content_size.width/e.content_size.height,{isError:o}=k(s),{isError:c}=k(n);return!c||!o?t.jsx(R.img,{src:o?n:s,alt:e.title,style:{backgroundImage:n?`url(${n})`:void 0,backgroundSize:"contain",aspectRatio:a,backgroundPosition:"center",backgroundRepeat:"no-repeat"},initial:{opacity:0},animate:{opacity:1},className:"h-full max-w-[100vw] object-contain sm:max-w-[calc(100vw-10rem)]"}):t.jsx("div",{className:"flex h-full grow items-center justify-center",children:t.jsx("div",{className:"flex h-96 w-96 items-center justify-center bg-white/10",children:t.jsx(O,{className:"h-12 w-12 text-token-text-tertiary"})})})}export{ae as ImageLightbox,oe as ImageLightboxSearchGPT,g as ImageResultModal};
//# sourceMappingURL=nb0tssqlgj3zc5pe.js.map