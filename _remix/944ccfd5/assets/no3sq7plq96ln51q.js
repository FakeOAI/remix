import{r as e,m as a}from"./cqrjmzubj247zey5.js";import{s as r}from"./ltzkv02dulfyhgdj.js";import"./ihpnafwvf1yuarx5.js";function l(){const[n,o]=e.useState(""),s=e.useCallback(t=>{o(t.data)},[o]);return e.useEffect(()=>{globalThis?.window?.parent==globalThis?.window&&(location.href="/")},[]),e.useEffect(()=>{const t=new MessageChannel;return window.parent.postMessage(r,"https://chatgpt.com",[t.port2]),t.port1.onmessage=s,()=>void(t.port1.onmessage=null)},[s]),a.jsx("iframe",{srcDoc:n,sandbox:"allow-scripts",style:{position:"fixed",top:0,left:0,width:"100%",minHeight:"100%",border:0}})}export{l as default};
//# sourceMappingURL=no3sq7plq96ln51q.js.map