import{r as n,M as x,l as t,m as d,Z as u,a1 as f}from"./bkk1etpxp73xgxkk.js";import{c3 as p,c2 as h}from"./grdjxd4t00xxfgii.js";import{j as M}from"./ky3hwvkezt2frybr.js";import"./ho6syd1yt6mfjuy1.js";import"./okhdof47k0vuhmqv.js";import"./on8dwna7kjymzk0v.js";import"./go6iqv7kynl41ls2.js";import"./e2lvmkzz1krdd0vf.js";import"./gteko0382k8ggpbf.js";import"./nuovggdyf0grhuwv.js";import"./d1ew373qviaqzay3.js";import"./c7q13bl1gi8tl4t7.js";import"./noj1s37nphyqi49g.js";import"./icc79zmdj63m59x2.js";import"./i3sou16n7aet43d5.js";import"./brhx5v2rxlq0rxdf.js";import"./cvlbu2zjl8gk4d4y.js";import"./kef7p4k14zdf1y4l.js";function Q({messages:o}){const[r,l]=n.useState(!1),a=o.reduce((e,s)=>(s.message.content.content_type===x.TetherQuote&&e.set(s.message.content.url,s.message.content.title),e),new Map),g=[...a].slice(0,r?a.size:2),m=M(o);return n.useEffect(()=>{m.forEach(({contentUrl:e})=>{if(!p.getState().images.has(e)){const s=new Image;s.onload=()=>{p.setState(i=>({images:new Set(i.images).add(e)}))},s.src=e}})},[m]),t.jsxs("div",{className:d("flex gap-2 pb-6 pt-3",r&&"flex-wrap"),children:[g.map(([e,s],i)=>t.jsxs(c,{href:e,target:"_blank",children:[t.jsx(h,{url:e,className:"flex-shrink-0"}),s]},i)),!r&&a.size>2&&t.jsx(c,{className:"flex-shrink-0",onClick:()=>l(e=>!e),children:t.jsx(u,{id:"SearchResultMessage.moreResults",defaultMessage:"+{number} more",values:{number:a.size-2}})})]})}const c=f.a`line-clamp-2 rounded-md bg-token-main-surface-tertiary px-3 py-2 text-xs flex items-center gap-2.5`;export{Q as SearchResultMessage};
//# sourceMappingURL=ehb922ve6gv95g0a.js.map