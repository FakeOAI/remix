import{r as p,M as x,t,T as d,a8 as u,O as f}from"./ius2rjc8aciuj2rl.js";import{bS as n,bR as h}from"./jdz9mwngh3t5nytb.js";import{j as M}from"./frgkesjr4ohtrucy.js";import"./lzyd9n5t1klxadwf.js";import"./n0xyk1p8mg8xlrhw.js";import"./oy4uroqongt50tdh.js";import"./ohr11q9jfhdrs62c.js";import"./og6klen52wg15s6b.js";import"./jxn2hsz21dzfafcn.js";import"./vx5bizwg1cu9jie5.js";import"./o9abjlquvgplxwex.js";import"./itvvna1wmnp67bph.js";import"./bixdynutlthfnow9.js";import"./kjc4oshqrhzrg3a0.js";import"./bii0ba6df7fk4nts.js";import"./nrbhchjhpmcxnzn5.js";import"./nz7exheo0ysu8iuh.js";import"./nsq2pgu8tq1tcawc.js";import"./fhdlfdpwiavhel0q.js";import"./neli2etkemqy682b.js";import"./bt3rjqq715dlb9rk.js";import"./e695g0c5z01sstpf.js";import"./gh97h5wmaiswo7ni.js";function G({messages:o}){const[r,l]=p.useState(!1),a=o.reduce((e,s)=>(s.message.content.content_type===x.TetherQuote&&e.set(s.message.content.url,s.message.content.title),e),new Map),g=[...a].slice(0,r?a.size:2),m=M(o);return p.useEffect(()=>{m.forEach(({contentUrl:e})=>{if(!n.getState().images.has(e)){const s=new Image;s.onload=()=>{n.setState(i=>({images:new Set(i.images).add(e)}))},s.src=e}})},[m]),t.jsxs("div",{className:d("flex gap-2 pb-6 pt-3",r&&"flex-wrap"),children:[g.map(([e,s],i)=>t.jsxs(c,{href:e,target:"_blank",children:[t.jsx(h,{url:e,className:"flex-shrink-0"}),s]},i)),!r&&a.size>2&&t.jsx(c,{className:"flex-shrink-0",onClick:()=>l(e=>!e),children:t.jsx(u,{id:"SearchResultMessage.moreResults",defaultMessage:"+{number} more",values:{number:a.size-2}})})]})}const c=f.a`line-clamp-2 rounded-md bg-token-main-surface-tertiary px-3 py-2 text-xs flex items-center gap-2.5`;export{G as SearchResultMessage};
//# sourceMappingURL=f3avxcygoo222ozv.js.map