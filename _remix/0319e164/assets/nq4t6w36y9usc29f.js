import{r as n,M as x,y as t,a4 as d,ae as u,a9 as f}from"./owmtarjkip3g0mo9.js";import{bG as p,bF as h}from"./p0qbs8ed6703vk8m.js";import{g as M}from"./ckfvrne3gd9wt5x6.js";import"./fnymri4mf6jyaz3i.js";import"./hmju1lmzagkofna5.js";import"./dl8cedm3jpvrr6bw.js";import"./dl28ex847kmyat8v.js";import"./droaets0od8jpc6n.js";import"./iirjc7afkn5517b8.js";import"./ghzy5fxshaor36y6.js";import"./ifiw2126vrhvqw49.js";import"./mgetw8x3yg6hqzom.js";import"./icdup3ihayx42n7n.js";import"./ke36y0mjbek16f6j.js";import"./bezqa5i2bcei4xw5.js";import"./mrv9t6onpslh24fy.js";import"./bly74wmq5i79h6nr.js";import"./jwkw1fjg6dmg1xro.js";function L({messages:o}){const[r,l]=n.useState(!1),a=o.reduce((e,s)=>(s.message.content.content_type===x.TetherQuote&&e.set(s.message.content.url,s.message.content.title),e),new Map),g=[...a].slice(0,r?a.size:2),m=M(o);return n.useEffect(()=>{m.forEach(({contentUrl:e})=>{if(!p.getState().images.has(e)){const s=new Image;s.onload=()=>{p.setState(i=>({images:new Set(i.images).add(e)}))},s.src=e}})},[m]),t.jsxs("div",{className:d("flex gap-2 pb-6 pt-3",r&&"flex-wrap"),children:[g.map(([e,s],i)=>t.jsxs(c,{href:e,target:"_blank",children:[t.jsx(h,{url:e,className:"flex-shrink-0"}),s]},i)),!r&&a.size>2&&t.jsx(c,{className:"flex-shrink-0",onClick:()=>l(e=>!e),children:t.jsx(u,{id:"SearchResultMessage.moreResults",defaultMessage:"+{number} more",values:{number:a.size-2}})})]})}const c=f.a`line-clamp-2 rounded-md bg-token-main-surface-tertiary px-3 py-2 text-xs flex items-center gap-2.5`;export{L as SearchResultMessage};
//# sourceMappingURL=nq4t6w36y9usc29f.js.map