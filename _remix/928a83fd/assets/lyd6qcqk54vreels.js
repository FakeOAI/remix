import{r as g,X as C,cJ as I,cK as N,aK as E,cN as m,l as e,bg as T,$ as u,bT as D,bV as L,bU as v,cO as h,bm as y}from"./isi6i55eeemdaxmu.js";import{aS as U,ao as F,aT as k}from"./lzv3m24lczy39xt0.js";import{ah as A,S as b,ai as R,ae as S,cR as J,cS as z,cT as G,j as a,cU as H}from"./g344clpmm9csab6e.js";function K({voice:t}){const[l,c]=g.useState(!1),i=C(),s=I(),d=t.voice,r=t.preview_url,n=g.useRef({playPromise:null}).current,o=N(x=>x.isPlaying&&x.sourceUrl===r),f=E(),j=g.useCallback(async()=>{if(!s)return;const x={voice:d,source:r};m.previews.click(x);try{c(!0),s.changeSource(r),n.playPromise=s.play(),c(!1)}catch(P){m.previews.error(P,x),f.danger(i.formatMessage({id:"DeIYxH",defaultMessage:"Something went wrong playing preview"}))}},[i,s,r,d,n,f]),p=g.useCallback(()=>{s&&(n.playPromise?n.playPromise.then(()=>{s.stop(),n.playPromise=null}):s.stop())},[s,n]),w=g.useCallback(()=>{o?p():l||j()},[p,j,l,o]);return g.useEffect(()=>()=>{o&&p()},[t,o,p]),e.jsx(T,{onClick:w,color:"secondary",className:"flex flex-row flex-nowrap items-center gap-1 border-none font-normal",loading:l,icon:o?U:F,children:o?e.jsx(u,{id:"yGpEMJ",defaultMessage:"Stop"}):e.jsx(u,{id:"JwYDVp",defaultMessage:"Play"})})}const q={Trigger:O,Content:Y};function V(){return y("174366048")?.value}function O(){return V()?e.jsx(A,{value:b.Speech,icon:e.jsx(k,{className:"icon-sm"}),label:e.jsx(u,{id:"speechSettings.trigger",defaultMessage:"Speech"})}):null}function Y(){const t=V(),l=y("1426009137")?.value;return t?e.jsxs(R,{value:b.Speech,children:[e.jsx(S,{children:e.jsx(_,{})}),l?e.jsx(S,{children:e.jsx(B,{})}):null]}):null}function M(t){const{data:l,isLoading:c}=D(t)||{},i=L();return{isLoading:c,value:l,setValue:s=>{i.mutate({setting:t,value:s})}}}function _(){const{isLoading:t,value:l,setValue:c}=M(v.VoiceName),i=J(),s=z(),d=t?"":G(l,s),r=i.find(({voice:n})=>n===d);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col flex-nowrap gap-2",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:e.jsx(u,{id:"speechSettings.content.voice",defaultMessage:"Voice"})}),e.jsxs("div",{className:"flex flex-row flex-nowrap items-center gap-1",children:[r?e.jsxs(e.Fragment,{children:[e.jsx(K,{voice:r}),e.jsx("div",{className:"h-4 border-l"})]}):null,e.jsxs(a.Root,{value:d,onValueChange:n=>c(n),disabled:t,children:[e.jsxs(a.Trigger,{children:[e.jsx(a.Value,{}),e.jsx(a.Icon,{})]}),e.jsx(a.Portal,{children:e.jsx(a.Content,{children:i.map(({voice:n,name:o})=>e.jsx(a.Item,{value:n,children:o},n))})})]})]})]})})})}function B(){const{isLoading:t,value:l,setValue:c}=M(v.VoiceMainLanguage);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:e.jsx(u,{id:"speechSettings.content.language",defaultMessage:"Main Language"})}),e.jsxs(a.Root,{value:t?"":l??h.Auto,onValueChange:i=>c(i),disabled:t,children:[e.jsxs(a.Trigger,{children:[e.jsx(a.Value,{}),e.jsx(a.Icon,{})]}),e.jsx(a.Portal,{children:e.jsxs(a.Content,{position:"popper",style:{maxHeight:"calc(var(--radix-select-content-available-height) - 5rem)"},children:[e.jsx(a.Item,{value:h.Auto,children:e.jsx(u,{id:"speechSettings.content.autoDetect",defaultMessage:"Auto-Detect"})}),Object.entries(h).filter(([i,s])=>s!==h.Auto).map(([i,s])=>e.jsx(a.Item,{value:s,className:"capitalize",children:i},s))]})})]})]}),e.jsx(H,{children:e.jsx(u,{id:"speechSettings.content.autoDetectDescription",defaultMessage:"For best results, select the language you mainly speak. If it's not listed, it may still be supported via auto-detection."})})]})}export{q as S,M as u};
//# sourceMappingURL=lyd6qcqk54vreels.js.map