import{r as n,M as x,y as t,O as d,a1 as u,W as f}from"./qt4wss72u2iiwb12.js";import{bN as p,bM as h}from"./essdexqvqu02rgqn.js";import{g as M}from"./dk42zn752mgi7t43.js";import"./mj1bo2bvsdcuqwn0.js";import"./cki7q0rothorf8gt.js";import"./il13svm8z46vwj7c.js";import"./nyafg151eqhmq9mq.js";import"./epo75wihakppz7a8.js";import"./eixpuwitl9sszofn.js";import"./e07xeu5zi6rth7jm.js";import"./bpykej1504xqtnru.js";import"./hm2o7iguqbjp347m.js";import"./nldl9h83w2w2p8e7.js";import"./g2z2evai3603aozf.js";import"./jgo01kpq4t1kgbqt.js";import"./g53wp1fz9j23sg74.js";function A({messages:o}){const[r,l]=n.useState(!1),a=o.reduce((e,s)=>(s.message.content.content_type===x.TetherQuote&&e.set(s.message.content.url,s.message.content.title),e),new Map),g=[...a].slice(0,r?a.size:2),m=M(o);return n.useEffect(()=>{m.forEach(({contentUrl:e})=>{if(!p.getState().images.has(e)){const s=new Image;s.onload=()=>{p.setState(i=>({images:new Set(i.images).add(e)}))},s.src=e}})},[m]),t.jsxs("div",{className:d("flex gap-2 pb-6 pt-3",r&&"flex-wrap"),children:[g.map(([e,s],i)=>t.jsxs(c,{href:e,target:"_blank",children:[t.jsx(h,{url:e,className:"flex-shrink-0"}),s]},i)),!r&&a.size>2&&t.jsx(c,{className:"flex-shrink-0",onClick:()=>l(e=>!e),children:t.jsx(u,{id:"SearchResultMessage.moreResults",defaultMessage:"+{number} more",values:{number:a.size-2}})})]})}const c=f.a`line-clamp-2 rounded-md bg-token-main-surface-tertiary px-3 py-2 text-xs flex items-center gap-2.5`;export{A as SearchResultMessage};
//# sourceMappingURL=ocjo0f429gmkeaoy.js.map