import{r as n,M as x,l as t,m as d,a0 as u,a2 as f}from"./cy64emva2uzrk485.js";import{bX as p,bW as h}from"./j735z7kkcepyp8y2.js";import{j as M}from"./ehuratfqdza89wob.js";import"./m1w0e9mshx1kxsyq.js";import"./m8uv83e8qsvk5cah.js";import"./n3h0t5brbjpa342f.js";import"./cknnke94em4nivg3.js";import"./dzgqww1rafiwckp5.js";import"./kxb6j537cf0vxln8.js";import"./l1lmxzbhhle72h3t.js";import"./dywbkbifr0ayki46.js";import"./qxsj1l42erkbuwc6.js";import"./f4bade4g0o45i4rd.js";import"./maooj5f1lintbuj4.js";import"./mbh3dou1gcx9ziuu.js";import"./nzhmuw3i6t164b6h.js";import"./ijh2y7o5pzxbifv5.js";import"./i7y30xwqnlt1hc97.js";import"./m9bhi499hm1n51b7.js";import"./j0t5pu2pmnlemvhv.js";import"./l9ljdfvuq5zywldm.js";function q({messages:o}){const[r,l]=n.useState(!1),a=o.reduce((e,s)=>(s.message.content.content_type===x.TetherQuote&&e.set(s.message.content.url,s.message.content.title),e),new Map),g=[...a].slice(0,r?a.size:2),m=M(o);return n.useEffect(()=>{m.forEach(({contentUrl:e})=>{if(!p.getState().images.has(e)){const s=new Image;s.onload=()=>{p.setState(i=>({images:new Set(i.images).add(e)}))},s.src=e}})},[m]),t.jsxs("div",{className:d("flex gap-2 pb-6 pt-3",r&&"flex-wrap"),children:[g.map(([e,s],i)=>t.jsxs(c,{href:e,target:"_blank",children:[t.jsx(h,{url:e,className:"flex-shrink-0"}),s]},i)),!r&&a.size>2&&t.jsx(c,{className:"flex-shrink-0",onClick:()=>l(e=>!e),children:t.jsx(u,{id:"SearchResultMessage.moreResults",defaultMessage:"+{number} more",values:{number:a.size-2}})})]})}const c=f.a`line-clamp-2 rounded-md bg-token-main-surface-tertiary px-3 py-2 text-xs flex items-center gap-2.5`;export{q as SearchResultMessage};
//# sourceMappingURL=i2t9h7tcaoqxngkq.js.map