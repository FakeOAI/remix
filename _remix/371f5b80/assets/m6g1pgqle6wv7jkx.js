import{r as d,V as C,cL as I,cM as E,aJ as L,cP as j,l as e,bd as N,Z as u,bQ as D,bT as T,bR as v,cQ as f,bS as b}from"./ib63zzsfkf72wln1.js";import{b1 as F,a8 as k,b2 as A}from"./mt8z8crlc877hbg5.js";import{al as R,S as y,am as U,ai as S,G,d6 as J,d7 as z,d8 as H}from"./fhv3hyfwgezymfbi.js";import{S as a}from"./e2bfuohsaklroodh.js";function Q({voice:t}){const[l,o]=d.useState(!1),i=C(),s=I(),g=t.voice,r=t.preview_url,n=d.useRef({playPromise:null}).current,c=E(x=>x.isPlaying&&x.sourceUrl===r),h=L(),m=d.useCallback(async()=>{if(!s)return;const x={voice:g,source:r};j.previews.click(x);try{o(!0),s.changeSource(r),n.playPromise=s.play(),o(!1)}catch(w){j.previews.error(w,x),h.danger(i.formatMessage({id:"DeIYxH",defaultMessage:"Something went wrong playing preview"}))}},[i,s,r,g,n,h]),p=d.useCallback(()=>{s&&(n.playPromise?n.playPromise.then(()=>{s.stop(),n.playPromise=null}):s.stop())},[s,n]),P=d.useCallback(()=>{c?p():l||m()},[p,m,l,c]);return d.useEffect(()=>()=>{c&&p()},[t,c,p]),e.jsx(N,{onClick:P,color:"secondary",className:"flex flex-row flex-nowrap items-center gap-1 border-none font-normal",loading:l,icon:c?F:k,children:c?e.jsx(u,{id:"yGpEMJ",defaultMessage:"Stop"}):e.jsx(u,{id:"JwYDVp",defaultMessage:"Play"})})}const X={Trigger:Y,Content:_};function V(){return b("174366048")?.value}function Y(){return V()?e.jsx(R,{value:y.Speech,icon:e.jsx(A,{className:"icon-sm"}),label:e.jsx(u,{id:"speechSettings.trigger",defaultMessage:"Speech"})}):null}function _(){const t=V(),l=b("1426009137")?.value;return t?e.jsxs(U,{value:y.Speech,children:[e.jsx(S,{children:e.jsx(B,{})}),l?e.jsx(S,{children:e.jsx(O,{})}):null]}):null}function M(t){const{data:l,isLoading:o}=D(t)||{},i=T();return{isLoading:o,value:l,setValue:s=>{i.mutate({setting:t,value:s})}}}function B(){const{isLoading:t,value:l,setValue:o}=M(v.VoiceName),i=G(),s=J(),g=t?"":z(l,s),r=i.find(({voice:n})=>n===g);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col flex-nowrap gap-2",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:e.jsx(u,{id:"speechSettings.content.voice",defaultMessage:"Voice"})}),e.jsxs("div",{className:"flex flex-row flex-nowrap items-center gap-1",children:[r?e.jsxs(e.Fragment,{children:[e.jsx(Q,{voice:r}),e.jsx("div",{className:"h-4 border-l"})]}):null,e.jsxs(a.Root,{value:g,onValueChange:n=>o(n),disabled:t,children:[e.jsxs(a.Trigger,{children:[e.jsx(a.Value,{}),e.jsx(a.Icon,{})]}),e.jsx(a.Portal,{children:e.jsx(a.Content,{children:i.map(({voice:n,name:c})=>e.jsx(a.Item,{value:n,children:c},n))})})]})]})]})})})}function O(){const{isLoading:t,value:l,setValue:o}=M(v.VoiceMainLanguage);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:e.jsx(u,{id:"speechSettings.content.language",defaultMessage:"Main Language"})}),e.jsxs(a.Root,{value:t?"":l??f.Auto,onValueChange:i=>o(i),disabled:t,children:[e.jsxs(a.Trigger,{children:[e.jsx(a.Value,{}),e.jsx(a.Icon,{})]}),e.jsx(a.Portal,{children:e.jsxs(a.Content,{position:"popper",style:{maxHeight:"calc(var(--radix-select-content-available-height) - 5rem)"},children:[e.jsx(a.Item,{value:f.Auto,children:e.jsx(u,{id:"speechSettings.content.autoDetect",defaultMessage:"Auto-Detect"})}),Object.entries(f).filter(([i,s])=>s!==f.Auto).map(([i,s])=>e.jsx(a.Item,{value:s,className:"capitalize",children:i},s))]})})]})]}),e.jsx(H,{children:e.jsx(u,{id:"speechSettings.content.autoDetectDescription",defaultMessage:"For best results, select the language you mainly speak. If it's not listed, it may still be supported via auto-detection."})})]})}export{X as S,M as u};
//# sourceMappingURL=m6g1pgqle6wv7jkx.js.map