import{j as t,O as M,r as p,a6 as D,d9 as S,M as N,b6 as A,c as F}from"./pcnl88zwhe6noauc.js";import{bx as j,by as b,bz as w,bA as C,A as k,bB as P}from"./id6kv7jv9hphxx5c.js";import{B as z,aY as O}from"./kvdx8vbzxgcuhkks.js";import{m as _,n as G,o as $,p as B}from"./jihcmvvrci5c89vd.js";import{g as q}from"./kqwdyvkaaavvn8k3.js";import{u as U}from"./kyxs77b9yb4bqaow.js";import{m as E}from"./k8vqqakx8rs22uii.js";import"./o3ih6na0xmna5yjk.js";function ne({clientThreadId:s}){const e=j();if(!e)return null;const{image:r,source:a,turnIndex:o}=e;if(a==null||s==null||o==null)return t.jsx(x,{image:r});const i=_(s,o);return t.jsx(x,{image:r,group:i,turnIndex:o,groupSource:a})}function re(){const s=j();if(!s)return null;const{image:e,source:r}=s;if(r==null)return t.jsx(x,{image:e});switch(r){case b.ImagesTab:return t.jsx(X,{image:e});case b.Turn:return t.jsx(Y,{image:e})}}function X({image:s}){const{imageResults:e}=G();return t.jsx(x,{image:s,group:e,groupSource:b.ImagesTab})}function Y({image:s}){const{imageResults:e}=$();return t.jsx(x,{image:s,group:e,groupSource:b.Turn})}const L=M.div`grow flex items-start p-8`;function T({title:s,urls:e}){const r=e[0],{data:a,isError:o}=B(r);if(e.length===0)return;if(o)return e.length>1?t.jsx(T,{title:s,urls:e.slice(1)}):t.jsx("div",{className:"flex h-full grow items-center justify-center",children:t.jsx("div",{className:"flex h-96 w-96 items-center justify-center bg-white/10",children:t.jsx(O,{className:"h-12 w-12 text-token-text-tertiary"})})});const i="max-w-[100vw] sm:max-w-[calc(100vw-10rem)] object-scale-down h-full";return a!=null?t.jsx(E.img,{src:r,alt:s,initial:{opacity:0},animate:{opacity:1},className:i}):t.jsx("div",{className:F("w-full animate-pulse bg-white/10",i)})}const H={enter:s=>({x:s>0?1e3:-1e3,opacity:0}),center:{zIndex:1,x:0,opacity:1},exit:s=>({zIndex:0,x:s<0?1e3:-1e3,opacity:0})},R=1e4,J=(s,e)=>Math.abs(s)*e;function x({image:s,group:e,groupSource:r,turnIndex:a}){const o=U((s==null?void 0:s.url)??""),i=j(),v=i==null?void 0:i.mountDirection;p.useEffect(()=>{var h,g;(g=(h=window==null?void 0:window.history)==null?void 0:h.state)!=null&&g.imageModalOpen||window.history.pushState({imageModalOpen:!0},"",window.location.href);const n=()=>{var u,I;(I=(u=window==null?void 0:window.history)==null?void 0:u.state)!=null&&I.imageModalOpen||w.setCurrentImage(void 0)};return window.addEventListener("popstate",n),()=>window.removeEventListener("popstate",n)},[]);const y=()=>{window.history.go(-1),w.setCurrentImage(void 0)},l=e==null?void 0:e.findIndex(n=>D(s,n)),c=(e==null?void 0:e.length)??1,m=l!=null&&c>1,d=p.useCallback(()=>{!m||e==null||w.setCurrentImage({image:e[(l+1)%e.length],source:r,mountDirection:C.FromRight,turnIndex:a})},[e,m,l,r,a]),f=p.useCallback(()=>{!m||e==null||w.setCurrentImage({image:e[(l-1+e.length)%e.length],source:r,mountDirection:C.FromLeft,turnIndex:a})},[e,m,l,r,a]);return p.useEffect(()=>S(document,{keydown:n=>{n.key==="ArrowRight"?d():n.key==="ArrowLeft"&&f()}}),[d,f]),t.jsx(k,{children:s&&t.jsx(N.Root,{isOpen:!0,onClose:y,children:t.jsx(N.Overlay,{children:t.jsxs(A,{className:"flex h-full w-full flex-col bg-black/95",children:[t.jsxs("div",{className:"relative flex w-full grow justify-center overflow-hidden",children:[t.jsxs("div",{className:"absolute right-4 top-4 flex items-center sm:right-6 sm:top-6",children:[m&&t.jsxs("div",{className:"shrink-0 px-4 py-2 text-token-text-tertiary",children:[l+1," / ",c]}),t.jsx("button",{onClick:n=>{n.stopPropagation(),y()},className:"flex h-9 w-9 items-center justify-center outline-none hover:opacity-70",children:t.jsx(z,{className:"h-6 w-6 text-gray-400"})})]}),c>1&&t.jsx(L,{className:"cursor-w-resize",onClick:n=>{n.stopPropagation(),f()}}),t.jsx(k,{initial:!1,custom:v,children:t.jsx(E.div,{variants:H,custom:v??0,className:"absolute bottom-4 top-24",initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},drag:c>1?"x":!1,dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:(n,{offset:h,velocity:g})=>{const u=J(h.x,g.x);u<-R?d():u>R&&f()},children:t.jsx(T,{title:s.title,urls:[s.content_url.replace(/^http:\/\//,"https://"),s.thumbnail_url]})},l)}),c>1&&t.jsx(L,{className:"cursor-e-resize",onClick:n=>{n.stopPropagation(),d()}})]}),t.jsx("a",{href:s.url,target:"_blank",rel:"noopener",className:"flex min-h-20 w-full shrink-0 items-center gap-8 px-6 pb-3 pt-8 text-sm hover:opacity-70 sm:px-8 sm:pb-8",children:t.jsxs("div",{className:"flex grow flex-col gap-0.5 overflow-hidden pr-2",children:[t.jsxs("div",{className:"flex items-center gap-2 truncate text-token-text-tertiary",children:[t.jsx(P,{url:s.content_url,className:"rounded",size:16}),o.data??q(s.url)]}),t.jsx("div",{className:"truncate font-semibold text-white",children:s.title})]})})]})})})})}export{ne as ImageLightbox,re as ImageLightboxSearchGPT,x as ImageResultModal};
//# sourceMappingURL=o7f9z41ghysdy8wx.js.map