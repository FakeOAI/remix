const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/e3rhrcwgh63zha7z.js","assets/mvabgae368c8ppg9.js","assets/hrs6fo7evr0q6t9c.js","assets/root-erhliqbe.css","assets/gne0fkkyhu79w0cj.js","assets/conversation-small-cll5buey.css"])))=>i.map(i=>d[i]);
import{et as $,Z as S,$ as V,y as e,bq as D,W as O,r as h,av as z,aw as R,O as T,a9 as E}from"./mvabgae368c8ppg9.js";import{C as F}from"./fi4dbewtphuge1gs.js";import{o as H}from"./hrs6fo7evr0q6t9c.js";import{D as U}from"./oeifqzy5a7vl97ua.js";import{u as L,a as P,U as _,b as A}from"./kq3nr19rws8erakl.js";import{a as I}from"./d5eet6qwc148eyjc.js";import{A as B,D as J,E as p,F as f,H as q,dr as G}from"./gne0fkkyhu79w0cj.js";import"./bys7numkrxh763iw.js";import"./m8uwggmf1y5jim1z.js";import"./eap3oc6wp9aeta5h.js";import"./k922k5kv3d4ry472.js";import"./e2tf10t47jlh3w3d.js";import"./d7q5fjwr3l7j3k7t.js";function W(s){return $({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9 9H4v1h5V9z"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3l1-1h7l1 1v7l-1 1h-2v2l-1 1H3l-1-1V6l1-1h2V3zm1 2h4l1 1v4h2V3H6v2zm4 1H3v7h7V6z"}}]})(s)}function X(s){return $({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9 9H4v1h5V9z"}},{tag:"path",attr:{d:"M7 12V7H6v5h1z"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3l1-1h7l1 1v7l-1 1h-2v2l-1 1H3l-1-1V6l1-1h2V3zm1 2h4l1 1v4h2V3H6v2zm4 1H3v7h7V6z"}}]})(s)}const Z=S(()=>V(()=>import("./e3rhrcwgh63zha7z.js"),__vite__mapDeps([0,1,2,3,4,5])),{ssr:!1});function ue({threadId:s,threadUserId:a}){return L(P.isDebugModalOpen)&&e.jsx(D,{isOpen:!0,onClose:()=>_.toggleDebugModalOpen(),type:"success",size:"fullscreen",noPadding:!0,rootClassName:"z-50",children:e.jsx(ee,{threadId:s,threadUserId:a??void 0,onClose:()=>_.toggleDebugModalOpen()})})}const K=(s,a)=>{const t=JSON.stringify(a,null,2),o=new Blob([t],{type:"application/json"}),n=window.URL.createObjectURL(o),l=document.createElement("a");l.href=n,l.download=s,l.click(),window.URL.revokeObjectURL(n)},N="<|im_start|>",y="<|im_sep|>",C="<|im_end|>",Q="<|fim_suffix|>";function Y({prompt:s}){const a=[];let t=0;for(;;){const o=s.indexOf(N,t);if(o===-1)break;const n=s.indexOf(y,o);if(n===-1)break;let l=s.indexOf(C,n);const d=s.indexOf(Q,n);if(d!==-1&&(l===-1||d<l)&&(l=d),l===-1)break;const u=s.substring(o+N.length,n),x=s.substring(n+y.length,l);a.push(e.jsxs("div",{children:[e.jsxs("span",{className:"font-semibold",children:["[",u,"]"]}),e.jsx("div",{className:"whitespace-pre-wrap",children:x})]},o)),t=l+C.length}return a}const m=O.div`mb-[-5px] px-2 pb-1 font-semibold uppercase border-b-2 ${({$isSelected:s})=>s?"border-black dark:border-white":"border-transparent"}`;function ee({threadId:s,threadUserId:a,message:t,onClose:o}){const{sessionUser:n}=A(),[l,d]=h.useState(t?"message":"json"),{data:u,isLoading:x,refetch:M}=I({threadId:s,threadUserId:a,refetchOnMount:"always"}),r=u?.thread;if(h.useEffect(()=>{d(t?"message":r?.turns.length?`turn${r?.turns.length-1}`:"thread")},[r?.turns.length,t]),!x&&!r&&!t)return e.jsxs(U,{onClickRetry:()=>M(),children:["Failed to load."," "]});if(x)return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:"Loading..."});const g=r?.turns,b=r?.turns[r.turns.length-1]?.artifacts__?.model_snapshots?.default_id,v=a&&s?G(a,s):null;return e.jsx("div",{className:"flex flex-col gap-2 break-words font-mono text-xs",children:e.jsxs(B,{orientation:"vertical",value:l,onValueChange:i=>d(i),children:[e.jsxs(J,{className:"flex items-center justify-center gap-2 px-4 py-1",children:[t&&e.jsx(p,{value:"message",children:e.jsx(m,{$isSelected:l==="message",children:"Message"})},"message"),r&&e.jsx(p,{value:"thread",children:e.jsx(m,{$isSelected:l==="thread",children:"Thread"})},"thread"),g?.map((i,c)=>e.jsxs(h.Fragment,{children:[e.jsx(p,{value:`turn${c}`,children:e.jsxs(m,{$isSelected:l===`turn${c}`,children:["Turn[",c,"]"]})},c),i.artifacts__?.debug_ddtrace_urls?.map(w=>e.jsx(m,{$isSelected:!1,children:e.jsxs("a",{target:"_blank",href:w,className:"text-nowrap",rel:"noreferrer",children:["Trace[",c,"] ↗"]})},w))]},c)),e.jsx("div",{className:"flex-grow"}),b&&e.jsxs(e.Fragment,{children:[e.jsx(j,{name:"Model",id:b})," ",e.jsx("span",{className:"text-gray-500 dark:text-white",children:"|"})]}),n&&e.jsxs(e.Fragment,{children:[e.jsx(j,{name:"User ID",id:n.id})," ",e.jsx("span",{className:"text-gray-500 dark:text-white",children:"|"})]}),v&&e.jsxs(e.Fragment,{children:[e.jsx(j,{name:"Permalink",id:v}),e.jsx("span",{className:"text-gray-500 dark:text-white",children:"|"})]}),r&&e.jsxs(z,{size:"small",color:"secondary",onClick:()=>K("thread.json",r),children:[e.jsx(H,{className:"icon-sm"})," thread.json"]}),e.jsx(R,{onClick:o})]}),g?.map((i,c)=>e.jsxs(f,{value:`turn${c}`,className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth",children:[e.jsxs("div",{className:T("flex flex-col gap-2 p-6",(i.index??0)%2===0&&"bg-token-main-surface-tertiary"),children:[e.jsx(Y,{prompt:i.artifacts__?.debug_info?.main_model_response?.prompt_string??""}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold",children:"[assistant]"}),e.jsx("div",{"data-testid":"assistant-response",className:"whitespace-pre-wrap",children:i.model_response?.text})]})]})," "]},c)),r&&e.jsx(f,{value:"thread",className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth p-6",children:e.jsx(k,{data:r,collapsed:4})}),t&&e.jsx(f,{value:"message",className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth p-6",children:e.jsx(k,{data:t,collapsed:4})})]},r?.turns.length??"message")})}function k({data:s,collapsed:a}){const[t,o]=h.useState(a??!0);return e.jsxs("div",{className:"flex flex-col items-start gap-1",children:[e.jsx("button",{onClick:()=>o(!t),className:"flex items-center gap-1",children:t?e.jsxs(e.Fragment,{children:[e.jsx(X,{size:14})," Expand all"]}):e.jsxs(e.Fragment,{children:[e.jsx(W,{size:14})," Collapse all"]})}),e.jsx("div",{className:"w-full",children:e.jsx(Z,{json:s,jsonViewProps:{collapsed:t,shortenTextAfterLength:0}},String(t))})]})}function j({name:s,id:a}){const t=E(),o=h.useCallback(n=>{q(a,t,n)},[a,t]);return e.jsxs("div",{className:"flex items-center gap-2 truncate",children:[e.jsxs("span",{className:"text-nowrap font-semibold",children:[s,":"]}),e.jsx("span",{title:a,className:"truncate text-gray-500 dark:text-white",children:a}),e.jsx(F,{onCopy:o})]})}export{k as DebugJsonViewer,ue as DebugModal,ee as DebugModalContents};
//# sourceMappingURL=orb7f149wwr2551o.js.map