import{r as n,M as x,l as t,m as d,a0 as u,a2 as f}from"./ielox7uqz6yj4gk6.js";import{c5 as p,c4 as h}from"./eu744izg10vbq914.js";import{j as M}from"./m3zzu7dkru0anxc6.js";import"./efs79xt96ya5kdfa.js";import"./o61j77n8hx2fjd6j.js";import"./bsb53g286ebezqmg.js";import"./gc4nym29kv4b6sfj.js";import"./cf0oncda6q98ospj.js";import"./erhk6kafrrqf5xrl.js";import"./jvvoig9hdl83si3f.js";import"./n4g48i2auwgtkoaj.js";import"./eyne1yrtqmnt9rzx.js";import"./gr1m48d7fxjw6hnf.js";import"./inmtokiin4bbld6o.js";import"./mf8srqfs7skjh4zo.js";import"./hi2lx9m880udpk2a.js";import"./cou0u0mjtdzrb6hi.js";import"./cb0n7kulfomnwhzw.js";function Q({messages:o}){const[r,l]=n.useState(!1),a=o.reduce((e,s)=>(s.message.content.content_type===x.TetherQuote&&e.set(s.message.content.url,s.message.content.title),e),new Map),g=[...a].slice(0,r?a.size:2),m=M(o);return n.useEffect(()=>{m.forEach(({contentUrl:e})=>{if(!p.getState().images.has(e)){const s=new Image;s.onload=()=>{p.setState(i=>({images:new Set(i.images).add(e)}))},s.src=e}})},[m]),t.jsxs("div",{className:d("flex gap-2 pb-6 pt-3",r&&"flex-wrap"),children:[g.map(([e,s],i)=>t.jsxs(c,{href:e,target:"_blank",children:[t.jsx(h,{url:e,className:"flex-shrink-0"}),s]},i)),!r&&a.size>2&&t.jsx(c,{className:"flex-shrink-0",onClick:()=>l(e=>!e),children:t.jsx(u,{id:"SearchResultMessage.moreResults",defaultMessage:"+{number} more",values:{number:a.size-2}})})]})}const c=f.a`line-clamp-2 rounded-md bg-token-main-surface-tertiary px-3 py-2 text-xs flex items-center gap-2.5`;export{Q as SearchResultMessage};
//# sourceMappingURL=orn0lvcckovfiavx.js.map