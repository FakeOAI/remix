const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jo09qo27dvq6ugrb.js","assets/ign6lc5qqsbgzj3q.js","assets/wrbxtg8dgsjl2z0d.js","assets/root-lbfis1cw.css","assets/f2jm88xc868xaf4h.js","assets/conversation-small-9gmhsapt.css"])))=>i.map(i=>d[i]);
import{ff as $,an as S,ao as V,j as e,bE as D,ar as O,r as h,aF as z,ba as R,ak as T,K as E}from"./ign6lc5qqsbgzj3q.js";import{C as F}from"./mw4xaelafw2l4s0l.js";import{a4 as U}from"./wrbxtg8dgsjl2z0d.js";import{D as H}from"./umpemlql8ntor0sb.js";import{u as L,a as P,U as _,b as I}from"./bah3z8y67hr6yayn.js";import{a as A}from"./eky5le2eo9o0quqh.js";import{r as B,t as J,v as u,w as f,y as G,dn as K}from"./f2jm88xc868xaf4h.js";import"./flkcv03c69ibma6m.js";import"./eijznwdk1krctgzh.js";import"./j5w4166bn3c02o6l.js";import"./higb8wm5t3xrktkg.js";import"./gwzp1svqpr5q13j4.js";import"./gf3tpgy2hgsklgsn.js";import"./6uc9cr2q0w4huz1g.js";import"./da8duwopjtiz0tne.js";function X(s){return $({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9 9H4v1h5V9z"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3l1-1h7l1 1v7l-1 1h-2v2l-1 1H3l-1-1V6l1-1h2V3zm1 2h4l1 1v4h2V3H6v2zm4 1H3v7h7V6z"}}]})(s)}function q(s){return $({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9 9H4v1h5V9z"}},{tag:"path",attr:{d:"M7 12V7H6v5h1z"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3l1-1h7l1 1v7l-1 1h-2v2l-1 1H3l-1-1V6l1-1h2V3zm1 2h4l1 1v4h2V3H6v2zm4 1H3v7h7V6z"}}]})(s)}const Q=S(()=>V(()=>import("./jo09qo27dvq6ugrb.js"),__vite__mapDeps([0,1,2,3,4,5])));function fe({threadId:s,threadUserId:a}){return L(P.isDebugModalOpen)&&e.jsx(D,{isOpen:!0,onClose:()=>_.toggleDebugModalOpen(),type:"success",size:"fullscreen",noPadding:!0,rootClassName:"z-50",children:e.jsx(ee,{threadId:s,threadUserId:a??void 0,onClose:()=>_.toggleDebugModalOpen()})})}const W=(s,a)=>{const t=JSON.stringify(a,null,2),o=new Blob([t],{type:"application/json"}),n=window.URL.createObjectURL(o),l=document.createElement("a");l.href=n,l.download=s,l.click(),window.URL.revokeObjectURL(n)},N="<|im_start|>",y="<|im_sep|>",C="<|im_end|>",Y="<|fim_suffix|>";function Z({prompt:s}){const a=[];let t=0;for(;;){const o=s.indexOf(N,t);if(o===-1)break;const n=s.indexOf(y,o);if(n===-1)break;let l=s.indexOf(C,n);const d=s.indexOf(Y,n);if(d!==-1&&(l===-1||d<l)&&(l=d),l===-1)break;const p=s.substring(o+N.length,n),x=s.substring(n+y.length,l);a.push(e.jsxs("div",{children:[e.jsxs("span",{className:"font-semibold",children:["[",p,"]"]}),e.jsx("div",{className:"whitespace-pre-wrap",children:x})]},o)),t=l+C.length}return a}const m=O.div`mb-[-5px] px-2 pb-1 font-semibold uppercase border-b-2 ${({$isSelected:s})=>s?"border-black dark:border-white":"border-transparent"}`;function ee({threadId:s,threadUserId:a,message:t,onClose:o}){const{sessionUser:n}=I(),[l,d]=h.useState(t?"message":"json"),{data:p,isLoading:x,refetch:M}=A({threadId:s,threadUserId:a,refetchOnMount:"always"}),r=p?.thread;if(h.useEffect(()=>{d(t?"message":r?.turns.length?`turn${r?.turns.length-1}`:"thread")},[r?.turns.length,t]),!x&&!r&&!t)return e.jsxs(H,{onClickRetry:()=>M(),children:["Failed to load."," "]});if(x)return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:"Loading..."});const g=r?.turns,b=r?.turns[r.turns.length-1]?.artifacts__?.model_snapshots?.default_id,v=a&&s?K(a,s):null;return e.jsx("div",{className:"flex flex-col gap-2 break-words font-mono text-xs",children:e.jsxs(B,{orientation:"vertical",value:l,onValueChange:i=>d(i),children:[e.jsxs(J,{className:"flex items-center justify-center gap-2 px-4 py-1",children:[t&&e.jsx(u,{value:"message",children:e.jsx(m,{$isSelected:l==="message",children:"Message"})},"message"),r&&e.jsx(u,{value:"thread",children:e.jsx(m,{$isSelected:l==="thread",children:"Thread"})},"thread"),g?.map((i,c)=>e.jsxs(h.Fragment,{children:[e.jsx(u,{value:`turn${c}`,children:e.jsxs(m,{$isSelected:l===`turn${c}`,children:["Turn[",c,"]"]})},c),i.artifacts__?.debug_ddtrace_urls?.map(w=>e.jsx(m,{$isSelected:!1,children:e.jsxs("a",{target:"_blank",href:w,className:"text-nowrap",rel:"noreferrer",children:["Trace[",c,"] ↗"]})},w))]},c)),e.jsx("div",{className:"flex-grow"}),b&&e.jsxs(e.Fragment,{children:[e.jsx(j,{name:"Model",id:b})," ",e.jsx("span",{className:"text-gray-500 dark:text-white",children:"|"})]}),n&&e.jsxs(e.Fragment,{children:[e.jsx(j,{name:"User ID",id:n.id})," ",e.jsx("span",{className:"text-gray-500 dark:text-white",children:"|"})]}),v&&e.jsxs(e.Fragment,{children:[e.jsx(j,{name:"Permalink",id:v}),e.jsx("span",{className:"text-gray-500 dark:text-white",children:"|"})]}),r&&e.jsxs(z,{size:"small",color:"secondary",onClick:()=>W("thread.json",r),children:[e.jsx(U,{className:"icon-sm"})," thread.json"]}),e.jsx(R,{onClick:o})]}),g?.map((i,c)=>e.jsxs(f,{value:`turn${c}`,className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth",children:[e.jsxs("div",{className:T("flex flex-col gap-2 p-6",(i.index??0)%2===0&&"bg-token-main-surface-tertiary"),children:[e.jsx(Z,{prompt:i.artifacts__?.debug_info?.main_model_response?.prompt_string??""}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold",children:"[assistant]"}),e.jsx("div",{"data-testid":"assistant-response",className:"whitespace-pre-wrap",children:i.model_response?.text})]})]})," "]},c)),r&&e.jsx(f,{value:"thread",className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth p-6",children:e.jsx(k,{data:r,collapsed:4})}),t&&e.jsx(f,{value:"message",className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth p-6",children:e.jsx(k,{data:t,collapsed:4})})]},r?.turns.length??"message")})}function k({data:s,collapsed:a}){const[t,o]=h.useState(a??!0);return e.jsxs("div",{className:"flex flex-col items-start gap-1",children:[e.jsx("button",{onClick:()=>o(!t),className:"flex items-center gap-1",children:t?e.jsxs(e.Fragment,{children:[e.jsx(q,{size:14})," Expand all"]}):e.jsxs(e.Fragment,{children:[e.jsx(X,{size:14})," Collapse all"]})}),e.jsx("div",{className:"w-full",children:e.jsx(Q,{json:s,jsonViewProps:{collapsed:t,shortenTextAfterLength:0}},String(t))})]})}function j({name:s,id:a}){const t=E(),o=h.useCallback(n=>{G(a,t,n)},[a,t]);return e.jsxs("div",{className:"flex items-center gap-2 truncate",children:[e.jsxs("span",{className:"text-nowrap font-semibold",children:[s,":"]}),e.jsx("span",{title:a,className:"truncate text-gray-500 dark:text-white",children:a}),e.jsx(F,{onCopy:o})]})}export{k as DebugJsonViewer,fe as DebugModal,ee as DebugModalContents};
//# sourceMappingURL=mhepgyz7z8a0tnq6.js.map