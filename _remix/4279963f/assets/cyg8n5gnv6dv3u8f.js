const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/e3jhmz0doul1jpge.js","assets/mtnbdcyqrcvvklqa.js","assets/fiqi1nsnq1a08oyy.js","assets/root-oxo7srkb.css"])))=>i.map(i=>d[i]);
import{eC as R,cr as T,c8 as E,j as e,I as F,O as H,r as f,aO as U,bN as L,c as P,ba as I}from"./mtnbdcyqrcvvklqa.js";import{C as A}from"./ckbihhcqbkh0i70x.js";import{R as B}from"./fiqi1nsnq1a08oyy.js";import{D as J}from"./osmp6xwkpf5fyqn4.js";import{u as q,a as G,U as M,b as X}from"./m09ka59xujso3ws2.js";import{a as K}from"./cvbztom8s8wpbc90.js";import{an as Q,ao as W,ap as b,aq as v,o as Y,cO as Z}from"./i25o23eggpk6999r.js";import"./e492oug42hlif5y2.js";import"./mefecv78ttcfptwg.js";import"./dwl4nir48hzbst85.js";import"./j2ceccqazufd0uaz.js";import"./nqsn4uroyabjm3i7.js";import"./ifcn8mwf3l3g632t.js";function ee(t){return R({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9 9H4v1h5V9z"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3l1-1h7l1 1v7l-1 1h-2v2l-1 1H3l-1-1V6l1-1h2V3zm1 2h4l1 1v4h2V3H6v2zm4 1H3v7h7V6z"}}]})(t)}function se(t){return R({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9 9H4v1h5V9z"}},{tag:"path",attr:{d:"M7 12V7H6v5h1z"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3l1-1h7l1 1v7l-1 1h-2v2l-1 1H3l-1-1V6l1-1h2V3zm1 2h4l1 1v4h2V3H6v2zm4 1H3v7h7V6z"}}]})(t)}const te=T(()=>E(()=>import("./e3jhmz0doul1jpge.js"),__vite__mapDeps([0,1,2,3])),{ssr:!1});function ve({threadId:t,threadUserId:l}){return q(G.isDebugModalOpen)&&e.jsx(F,{isOpen:!0,onClose:()=>M.toggleDebugModalOpen(),type:"success",size:"fullscreen",noPadding:!0,rootClassName:"z-50",children:e.jsx(re,{threadId:t,threadUserId:l,onClose:()=>M.toggleDebugModalOpen()})})}const ae=(t,l)=>{const a=JSON.stringify(l,null,2),o=new Blob([a],{type:"application/json"}),r=window.URL.createObjectURL(o),n=document.createElement("a");n.href=r,n.download=t,n.click(),window.URL.revokeObjectURL(r)},S="<|im_start|>",V="<|im_sep|>",O="<|im_end|>",le="<|fim_suffix|>";function ne({prompt:t}){const l=[];let a=0;for(;;){const o=t.indexOf(S,a);if(o===-1)break;const r=t.indexOf(V,o);if(r===-1)break;let n=t.indexOf(O,r);const d=t.indexOf(le,r);if(d!==-1&&(n===-1||d<n)&&(n=d),n===-1)break;const m=t.substring(o+S.length,r),j=t.substring(r+V.length,n);l.push(e.jsxs("div",{children:[e.jsxs("span",{className:"font-semibold",children:["[",m,"]"]}),e.jsx("div",{className:"whitespace-pre-wrap",children:j})]},o)),a=n+O.length}return l}const g=H.div`mb-[-5px] px-2 pb-1 font-semibold uppercase border-b-2 ${({$isSelected:t})=>t?"border-black dark:border-white":"border-transparent"}`;function re({threadId:t,threadUserId:l,message:a,onClose:o}){var C,y,k;const{sessionUser:r}=X(),[n,d]=f.useState(a?"message":"json"),{data:m,isLoading:j,refetch:z}=K({threadId:t,threadUserId:l,refetchOnMount:"always"}),s=m==null?void 0:m.thread;if(f.useEffect(()=>{d(a?"message":s!=null&&s.turns.length?`turn${(s==null?void 0:s.turns.length)-1}`:"thread")},[s==null?void 0:s.turns.length,a]),!j&&!s&&!a)return e.jsxs(J,{onClickRetry:()=>z(),children:["Failed to load."," "]});if(j)return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:"Loading..."});const x=s==null?void 0:s.turns,_=(k=(y=(C=s==null?void 0:s.turns[s.turns.length-1])==null?void 0:C.artifacts__)==null?void 0:y.model_snapshots)==null?void 0:k.default_id,N=l&&t?Z(l,t):null;return e.jsx("div",{className:"flex flex-col gap-2 break-words font-mono text-xs",children:e.jsxs(Q,{orientation:"vertical",value:n,onValueChange:i=>d(i),children:[e.jsxs(W,{className:"flex items-center justify-center gap-2 px-4 py-1",children:[a&&e.jsx(b,{value:"message",children:e.jsx(g,{$isSelected:n==="message",children:"Message"})},"message"),s&&e.jsx(b,{value:"thread",children:e.jsx(g,{$isSelected:n==="thread",children:"Thread"})},"thread"),x==null?void 0:x.map((i,c)=>{var h,p;return e.jsxs(f.Fragment,{children:[e.jsx(b,{value:`turn${c}`,children:e.jsxs(g,{$isSelected:n===`turn${c}`,children:["Turn[",c,"]"]})},c),(p=(h=i.artifacts__)==null?void 0:h.debug_ddtrace_urls)==null?void 0:p.map(u=>e.jsx(g,{$isSelected:!1,children:e.jsxs("a",{target:"_blank",href:u,className:"text-nowrap",rel:"noreferrer",children:["Trace[",c,"] ↗"]})},u))]},c)}),e.jsx("div",{className:"flex-grow"}),_&&e.jsxs(e.Fragment,{children:[e.jsx(w,{name:"Model",id:_})," ",e.jsx("span",{className:"text-gray-500 dark:text-white",children:"|"})]}),r&&e.jsxs(e.Fragment,{children:[e.jsx(w,{name:"User ID",id:r.id})," ",e.jsx("span",{className:"text-gray-500 dark:text-white",children:"|"})]}),N&&e.jsxs(e.Fragment,{children:[e.jsx(w,{name:"Permalink",id:N}),e.jsx("span",{className:"text-gray-500 dark:text-white",children:"|"})]}),s&&e.jsxs(U,{size:"small",color:"secondary",onClick:()=>ae("thread.json",s),children:[e.jsx(B,{className:"icon-sm"})," thread.json"]}),e.jsx(L,{onClick:o})]}),x==null?void 0:x.map((i,c)=>{var h,p,u,$;return e.jsxs(v,{value:`turn${c}`,className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth",children:[e.jsxs("div",{className:P("flex flex-col gap-2 p-6",(i.index??0)%2===0&&"bg-token-main-surface-tertiary"),children:[e.jsx(ne,{prompt:((u=(p=(h=i.artifacts__)==null?void 0:h.debug_info)==null?void 0:p.main_model_response)==null?void 0:u.prompt_string)??""}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold",children:"[assistant]"}),e.jsx("div",{"data-testid":"assistant-response",className:"whitespace-pre-wrap",children:($=i.model_response)==null?void 0:$.text})]})]})," "]},c)}),s&&e.jsx(v,{value:"thread",className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth p-6",children:e.jsx(D,{data:s,collapsed:4})}),a&&e.jsx(v,{value:"message",className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth p-6",children:e.jsx(D,{data:a,collapsed:4})})]},(s==null?void 0:s.turns.length)??"message")})}function D({data:t,collapsed:l}){const[a,o]=f.useState(l??!0);return e.jsxs("div",{className:"flex flex-col items-start gap-1",children:[e.jsx("button",{onClick:()=>o(!a),className:"flex items-center gap-1",children:a?e.jsxs(e.Fragment,{children:[e.jsx(se,{size:14})," Expand all"]}):e.jsxs(e.Fragment,{children:[e.jsx(ee,{size:14})," Collapse all"]})}),e.jsx("div",{className:"w-full",children:e.jsx(te,{json:t,jsonViewProps:{collapsed:a,shortenTextAfterLength:0}},String(a))})]})}function w({name:t,id:l}){const a=I(),o=f.useCallback(r=>{Y(l,a,r)},[l,a]);return e.jsxs("div",{className:"flex items-center gap-2 truncate",children:[e.jsxs("span",{className:"text-nowrap font-semibold",children:[t,":"]}),e.jsx("span",{title:l,className:"truncate text-gray-500 dark:text-white",children:l}),e.jsx(A,{onCopy:o})]})}export{D as DebugJsonViewer,ve as DebugModal,re as DebugModalContents};
//# sourceMappingURL=cyg8n5gnv6dv3u8f.js.map