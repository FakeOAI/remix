import{r as d,W as C,cL as I,cM as E,a8 as L,cP as j,x as e,au as N,a0 as u,bx as D,bA as T,by as v,cQ as f,bz as y}from"./e9n3rg14pzg374g3.js";import{aT as k,ac as A,aU as F}from"./j1qap0bw36lespl9.js";import{a7 as U,S as b,a8 as R,a4 as S,dj as z,dk as G,dl as H,dm as J}from"./grb1rrh8esowjpbm.js";import{S as a}from"./dtze00xaierjxot3.js";function W({voice:t}){const[l,o]=d.useState(!1),i=C(),s=I(),g=t.voice,r=t.preview_url,n=d.useRef({playPromise:null}).current,c=E(x=>x.isPlaying&&x.sourceUrl===r),h=L(),m=d.useCallback(async()=>{if(!s)return;const x={voice:g,source:r};j.previews.click(x);try{o(!0),s.changeSource(r),n.playPromise=s.play(),o(!1)}catch(w){j.previews.error(w,x),h.danger(i.formatMessage({id:"DeIYxH",defaultMessage:"Something went wrong playing preview"}))}},[i,s,r,g,n,h]),p=d.useCallback(()=>{s&&(n.playPromise?n.playPromise.then(()=>{s.stop(),n.playPromise=null}):s.stop())},[s,n]),P=d.useCallback(()=>{c?p():l||m()},[p,m,l,c]);return d.useEffect(()=>()=>{c&&p()},[t,c,p]),e.jsx(N,{onClick:P,color:"secondary",className:"flex flex-row flex-nowrap items-center gap-1 border-none font-normal",loading:l,icon:c?k:A,children:c?e.jsx(u,{id:"yGpEMJ",defaultMessage:"Stop"}):e.jsx(u,{id:"JwYDVp",defaultMessage:"Play"})})}const Z={Trigger:Y,Content:_};function V(){return y("174366048")?.value}function Y(){return V()?e.jsx(U,{value:b.Speech,icon:e.jsx(F,{className:"icon-sm"}),label:e.jsx(u,{id:"speechSettings.trigger",defaultMessage:"Speech"})}):null}function _(){const t=V(),l=y("1426009137")?.value;return t?e.jsxs(R,{value:b.Speech,children:[e.jsx(S,{children:e.jsx(B,{})}),l?e.jsx(S,{children:e.jsx(O,{})}):null]}):null}function M(t){const{data:l,isLoading:o}=D(t)||{},i=T();return{isLoading:o,value:l,setValue:s=>{i.mutate({setting:t,value:s})}}}function B(){const{isLoading:t,value:l,setValue:o}=M(v.VoiceName),i=z(),s=G(),g=t?"":H(l,s),r=i.find(({voice:n})=>n===g);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col flex-nowrap gap-2",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:e.jsx(u,{id:"speechSettings.content.voice",defaultMessage:"Voice"})}),e.jsxs("div",{className:"flex flex-row flex-nowrap items-center gap-1",children:[r?e.jsxs(e.Fragment,{children:[e.jsx(W,{voice:r}),e.jsx("div",{className:"h-4 border-l"})]}):null,e.jsxs(a.Root,{value:g,onValueChange:n=>o(n),disabled:t,children:[e.jsxs(a.Trigger,{children:[e.jsx(a.Value,{}),e.jsx(a.Icon,{})]}),e.jsx(a.Portal,{children:e.jsx(a.Content,{children:i.map(({voice:n,name:c})=>e.jsx(a.Item,{value:n,children:c},n))})})]})]})]})})})}function O(){const{isLoading:t,value:l,setValue:o}=M(v.VoiceMainLanguage);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:e.jsx(u,{id:"speechSettings.content.language",defaultMessage:"Main Language"})}),e.jsxs(a.Root,{value:t?"":l??f.Auto,onValueChange:i=>o(i),disabled:t,children:[e.jsxs(a.Trigger,{children:[e.jsx(a.Value,{}),e.jsx(a.Icon,{})]}),e.jsx(a.Portal,{children:e.jsxs(a.Content,{position:"popper",style:{maxHeight:"calc(var(--radix-select-content-available-height) - 5rem)"},children:[e.jsx(a.Item,{value:f.Auto,children:e.jsx(u,{id:"speechSettings.content.autoDetect",defaultMessage:"Auto-Detect"})}),Object.entries(f).filter(([i,s])=>s!==f.Auto).map(([i,s])=>e.jsx(a.Item,{value:s,className:"capitalize",children:i},s))]})})]})]}),e.jsx(J,{children:e.jsx(u,{id:"speechSettings.content.autoDetectDescription",defaultMessage:"For best results, select the language you mainly speak. If it's not listed, it may still be supported via auto-detection."})})]})}export{Z as S,M as u};
//# sourceMappingURL=kp3dmr9v0mj3bfom.js.map