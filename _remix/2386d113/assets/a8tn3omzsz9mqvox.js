import{r as e,t as a}from"./om77559u6zbv0nxn.js";import{s as r}from"./mu6gaqvbsa7bsraa.js";import"./nbc7lxss689jfxsu.js";function l(){const[n,o]=e.useState(""),s=e.useCallback(t=>{o(t.data)},[o]);return e.useEffect(()=>{globalThis?.window?.parent==globalThis?.window&&(location.href="/")},[]),e.useEffect(()=>{const t=new MessageChannel;return window.parent.postMessage(r,"https://chatgpt.com",[t.port2]),t.port1.onmessage=s,()=>void(t.port1.onmessage=null)},[s]),a.jsx("iframe",{srcDoc:n,sandbox:"allow-scripts",style:{position:"fixed",top:0,left:0,width:"100%",minHeight:"100%",border:0}})}export{l as default};
//# sourceMappingURL=a8tn3omzsz9mqvox.js.map