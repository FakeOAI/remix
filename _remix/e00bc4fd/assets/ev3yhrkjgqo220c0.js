import{r as t,j as a}from"./bi9nzlakut336dzw.js";const r="sandbox-ready";function c(){const[n,e]=t.useState(""),o=t.useCallback(s=>{e(s.data)},[e]);return t.useEffect(()=>{var s;((s=globalThis==null?void 0:globalThis.window)==null?void 0:s.parent)==(globalThis==null?void 0:globalThis.window)&&(location.href="/")},[]),t.useEffect(()=>{const s=new MessageChannel;return window.parent.postMessage(r,"https://chatgpt.com",[s.port2]),s.port1.onmessage=o,()=>void(s.port1.onmessage=null)},[o]),a.jsx("iframe",{srcDoc:n,sandbox:"allow-scripts",style:{position:"fixed",top:0,left:0,width:"100vh",height:"100vw",border:0}})}export{c as S,r as s};
//# sourceMappingURL=ev3yhrkjgqo220c0.js.map