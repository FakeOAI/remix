import{r as d,Y as P,dT as C,dU as I,Z as N,dX as j,j as e,aK as E,aG as u,cg as D,ci as L,ch as v,dY as f,y as T,u as F}from"./e2gys00277jk3j4m.js";import{b1 as U,aI as k,b2 as A}from"./bfszm5z7s58noy3i.js";import{cY as R,cZ as y,c_ as Y,N as S,c$ as G,d0 as _,d1 as z,d2 as H}from"./g620wqgic7gc7jni.js";import{S as a}from"./kc29qhgw9xlya1vn.js";function J({voice:t}){const[l,c]=d.useState(!1),i=P(),s=C(),g=t.voice,r=t.preview_url,n=d.useRef({playPromise:null}).current,o=I(x=>x.isPlaying&&x.sourceUrl===r),h=N(),m=d.useCallback(async()=>{if(!s)return;const x={voice:g,source:r};j.previews.click(x);try{c(!0),s.changeSource(r),n.playPromise=s.play(),c(!1)}catch(w){j.previews.error(w,x),h.danger(i.formatMessage({id:"DeIYxH",defaultMessage:"Something went wrong playing preview"}))}},[i,s,r,g,n,h]),p=d.useCallback(()=>{s&&(n.playPromise?n.playPromise.then(()=>{s.stop(),n.playPromise=null}):s.stop())},[s,n]),M=d.useCallback(()=>{o?p():l||m()},[p,m,l,o]);return d.useEffect(()=>()=>{o&&p()},[t,o,p]),e.jsx(E,{onClick:M,color:"secondary",className:"flex flex-row flex-nowrap items-center gap-1 border-none font-normal",loading:l,icon:o?U:k,children:o?e.jsx(u,{id:"yGpEMJ",defaultMessage:"Stop"}):e.jsx(u,{id:"JwYDVp",defaultMessage:"Play"})})}const Q={Trigger:Z,Content:B};function b(){return F("174366048")?.value}function Z(){return b()?e.jsx(R,{value:y.Speech,icon:e.jsx(A,{className:"icon-sm"}),label:e.jsx(u,{id:"speechSettings.trigger",defaultMessage:"Speech"})}):null}function B(){const t=b(),l=T("1426009137")?.value;return t?e.jsxs(Y,{value:y.Speech,children:[e.jsx(S,{children:e.jsx(K,{})}),l?e.jsx(S,{children:e.jsx(O,{})}):null]}):null}function V(t){const{data:l,isLoading:c}=D(t)||{},i=L();return{isLoading:c,value:l,setValue:s=>{i.mutate({setting:t,value:s})}}}function K(){const{isLoading:t,value:l,setValue:c}=V(v.VoiceName),i=G(),s=_(),g=t?"":z(l,s),r=i.find(({voice:n})=>n===g);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col flex-nowrap gap-2",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:e.jsx(u,{id:"speechSettings.content.voice",defaultMessage:"Voice"})}),e.jsxs("div",{className:"flex flex-row flex-nowrap items-center gap-1",children:[r?e.jsxs(e.Fragment,{children:[e.jsx(J,{voice:r}),e.jsx("div",{className:"h-4 border-l"})]}):null,e.jsxs(a.Root,{value:g,onValueChange:n=>c(n),disabled:t,children:[e.jsxs(a.Trigger,{children:[e.jsx(a.Value,{}),e.jsx(a.Icon,{})]}),e.jsx(a.Portal,{children:e.jsx(a.Content,{children:i.map(({voice:n,name:o})=>e.jsx(a.Item,{value:n,children:o},n))})})]})]})]})})})}function O(){const{isLoading:t,value:l,setValue:c}=V(v.VoiceMainLanguage);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:e.jsx(u,{id:"speechSettings.content.language",defaultMessage:"Main Language"})}),e.jsxs(a.Root,{value:t?"":l??f.Auto,onValueChange:i=>c(i),disabled:t,children:[e.jsxs(a.Trigger,{children:[e.jsx(a.Value,{}),e.jsx(a.Icon,{})]}),e.jsx(a.Portal,{children:e.jsxs(a.Content,{position:"popper",style:{maxHeight:"calc(var(--radix-select-content-available-height) - 5rem)"},children:[e.jsx(a.Item,{value:f.Auto,children:e.jsx(u,{id:"speechSettings.content.autoDetect",defaultMessage:"Auto-Detect"})}),Object.entries(f).filter(([i,s])=>s!==f.Auto).map(([i,s])=>e.jsx(a.Item,{value:s,className:"capitalize",children:i},s))]})})]})]}),e.jsx(H,{children:e.jsx(u,{id:"speechSettings.content.autoDetectDescription",defaultMessage:"For best results, select the language you mainly speak. If it's not listed, it may still be supported via auto-detection."})})]})}export{Q as S,V as u};
//# sourceMappingURL=dgqe2vq6a0wxsicg.js.map