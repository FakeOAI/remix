import{l as e,a1 as T,r as f,ad as S,d3 as D,_ as v,aX as M,m as F}from"./isi6i55eeemdaxmu.js";import{b$ as h,c0 as p,c1 as I,aj as y,bV as P}from"./g344clpmm9csab6e.js";import{a as O,aO as _}from"./lzv3m24lczy39xt0.js";import{g as z,e as A,f as G,h as X}from"./egewzi8a5y7qju58.js";import{g as q}from"./kqwdyvkaaavvn8k3.js";import{a as U}from"./hntgwmvndlus8yz8.js";import{m as k}from"./degf32ael4dvv0yi.js";import"./r2u8flwozaontxkq.js";function se({clientThreadId:t}){const s=h.useCurrentImage();if(!s)return null;const{image:n,source:a,turnIndex:i}=s;if(a==null||t==null||i==null)return e.jsx(x,{image:n});const c=z(t,i);return e.jsx(x,{image:n,group:c,turnIndex:i,groupSource:a})}function re(){const t=h.useCurrentImage();if(!t)return null;const{image:s,source:n}=t;if(n==null)return e.jsx(x,{image:s});switch(n){case p.ImagesTab:return e.jsx(V,{image:s});case p.Turn:return e.jsx($,{image:s})}}function V({image:t}){const{imageResults:s}=A();return e.jsx(x,{image:t,group:s,groupSource:p.ImagesTab})}function $({image:t}){const{imageResults:s}=G();return e.jsx(x,{image:t,group:s,groupSource:p.Turn})}const N=T.div`grow flex items-start p-8`;function L({title:t,urls:s}){const n=s[0],{data:a,isError:i}=X(n);if(s.length===0)return;if(i)return s.length>1?e.jsx(L,{title:t,urls:s.slice(1)}):e.jsx("div",{className:"flex h-full grow items-center justify-center",children:e.jsx("div",{className:"flex h-96 w-96 items-center justify-center bg-white/10",children:e.jsx(_,{className:"h-12 w-12 text-token-text-tertiary"})})});const c="max-w-[100vw] sm:max-w-[calc(100vw-10rem)] object-scale-down h-full";return a!=null?e.jsx(k.img,{src:n,alt:t,initial:{opacity:0},animate:{opacity:1},className:c}):e.jsx("div",{className:F("w-full animate-pulse bg-white/10",c)})}const B={enter:t=>({x:t>0?1e3:-1e3,opacity:0}),center:{zIndex:1,x:0,opacity:1},exit:t=>({zIndex:0,x:t<0?1e3:-1e3,opacity:0})},C=1e4,H=(t,s)=>Math.abs(t)*s;function x({image:t,group:s,groupSource:n,turnIndex:a}){const i=U(t?.url??""),c=h.useCurrentImage(),o=h.useStore(),w=c?.mountDirection;f.useEffect(()=>{window?.history?.state?.imageModalOpen||window.history.pushState({imageModalOpen:!0},"",window.location.href);const r=()=>{window?.history?.state?.imageModalOpen||o.setCurrentImage(void 0)};return window.addEventListener("popstate",r),()=>window.removeEventListener("popstate",r)},[o]);const j=()=>{window.history.go(-1),o.setCurrentImage(void 0)},l=s?.findIndex(r=>S(t,r)),u=s?.length??1,m=l!=null&&u>1,g=f.useCallback(()=>{!m||s==null||o.setCurrentImage({image:s[(l+1)%s.length],source:n,mountDirection:I.FromRight,turnIndex:a})},[m,s,o,l,n,a]),d=f.useCallback(()=>{!m||s==null||o.setCurrentImage({image:s[(l-1+s.length)%s.length],source:n,mountDirection:I.FromLeft,turnIndex:a})},[m,s,o,l,n,a]);return f.useEffect(()=>D(document,{keydown:r=>{r.key==="ArrowRight"?g():r.key==="ArrowLeft"&&d()}}),[g,d]),e.jsx(y,{children:t&&e.jsx(v.Root,{isOpen:!0,onClose:j,children:e.jsx(v.Overlay,{children:e.jsxs(M,{className:"flex h-full w-full flex-col bg-black/95",children:[e.jsxs("div",{className:"relative flex w-full grow justify-center overflow-hidden",children:[e.jsxs("div",{className:"absolute right-4 top-4 flex items-center sm:right-6 sm:top-6",children:[m&&e.jsxs("div",{className:"shrink-0 px-4 py-2 text-token-text-tertiary",children:[l+1," / ",u]}),e.jsx("button",{onClick:r=>{r.stopPropagation(),j()},className:"flex h-9 w-9 items-center justify-center outline-none hover:opacity-70",children:e.jsx(O,{className:"h-6 w-6 text-gray-400"})})]}),u>1&&e.jsx(N,{className:"cursor-w-resize",onClick:r=>{r.stopPropagation(),d()}}),e.jsx(y,{initial:!1,custom:w,children:e.jsx(k.div,{variants:B,custom:w??0,className:"absolute bottom-4 top-24",initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},drag:u>1?"x":!1,dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:(r,{offset:R,velocity:E})=>{const b=H(R.x,E.x);b<-C?g():b>C&&d()},children:e.jsx(L,{title:t.title,urls:[t.content_url.replace(/^http:\/\//,"https://"),t.thumbnail_url]})},l)}),u>1&&e.jsx(N,{className:"cursor-e-resize",onClick:r=>{r.stopPropagation(),g()}})]}),e.jsx("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"flex min-h-20 w-full shrink-0 items-center gap-8 px-6 pb-3 pt-8 text-sm hover:opacity-70 sm:px-8 sm:pb-8",children:e.jsxs("div",{className:"flex grow flex-col gap-0.5 overflow-hidden pr-2",children:[e.jsxs("div",{className:"flex items-center gap-2 truncate text-token-text-tertiary",children:[e.jsx(P,{url:t.content_url,className:"rounded",size:16}),i.data??q(t.url)]}),e.jsx("div",{className:"truncate font-semibold text-white",children:t.title})]})})]})})})})}export{se as ImageLightbox,re as ImageLightboxSearchGPT,x as ImageResultModal};
//# sourceMappingURL=bl1y6b9sirs1n94k.js.map