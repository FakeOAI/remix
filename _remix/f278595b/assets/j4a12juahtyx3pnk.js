import{r as n,M as x,y as t,O as d,a1 as u,W as f}from"./ddcjry37y0ueobh3.js";import{bL as p,bK as h}from"./mlzz6djcph5fthpz.js";import{g as M}from"./bo5lt597wbofkr1p.js";import"./ostblj7tqg38i6fa.js";import"./dqx1biyivpsf3few.js";import"./m780wk85gg28bdfy.js";import"./dcc45rtf5i4crsq0.js";import"./g232mik5xb95sf81.js";import"./s8ck5rhbggwsgpvb.js";import"./lw8c0noczs2rbs9j.js";import"./iwvyrmtfz5lkn9sl.js";import"./h9z74bskym3ttzc8.js";import"./lxw6kvlkbnjsbx5r.js";import"./jj3i5x6opi4xqiiv.js";import"./bwn9p8wp0adpm8es.js";import"./nx9wnt9smxe2g0dl.js";function _({messages:o}){const[r,l]=n.useState(!1),a=o.reduce((e,s)=>(s.message.content.content_type===x.TetherQuote&&e.set(s.message.content.url,s.message.content.title),e),new Map),g=[...a].slice(0,r?a.size:2),m=M(o);return n.useEffect(()=>{m.forEach(({contentUrl:e})=>{if(!p.getState().images.has(e)){const s=new Image;s.onload=()=>{p.setState(i=>({images:new Set(i.images).add(e)}))},s.src=e}})},[m]),t.jsxs("div",{className:d("flex gap-2 pb-6 pt-3",r&&"flex-wrap"),children:[g.map(([e,s],i)=>t.jsxs(c,{href:e,target:"_blank",children:[t.jsx(h,{url:e,className:"flex-shrink-0"}),s]},i)),!r&&a.size>2&&t.jsx(c,{className:"flex-shrink-0",onClick:()=>l(e=>!e),children:t.jsx(u,{id:"SearchResultMessage.moreResults",defaultMessage:"+{number} more",values:{number:a.size-2}})})]})}const c=f.a`line-clamp-2 rounded-md bg-token-main-surface-tertiary px-3 py-2 text-xs flex items-center gap-2.5`;export{_ as SearchResultMessage};
//# sourceMappingURL=j4a12juahtyx3pnk.js.map