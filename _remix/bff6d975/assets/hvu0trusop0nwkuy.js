import{r as n,M as x,l as t,m as d,Z as u,a1 as f}from"./pd64dl4pt4e5g9vc.js";import{c1 as p,c0 as h}from"./g5tg1ou1mdwoqo8e.js";import{j as M}from"./otokzv7q5t6qxtps.js";import"./iw8eqo9ou59qhn0h.js";import"./jd2utdtcm2yggiqc.js";import"./dhmm93wh7jq47k0y.js";import"./jff4q9zofpalq4v1.js";import"./gea76n0cnf3u5b5x.js";import"./pflz6eij70odao7c.js";import"./kw08l8rgg7n2n90f.js";import"./be5j3lin9z9akqco.js";import"./f5szkclm2kittk11.js";import"./9ymg7e089l6mcavz.js";import"./ab6mu05rcp6v4wam.js";import"./dwsu7ht21mrqfd59.js";import"./ty5744e0daj8z9ay.js";import"./c75xpyzc0peppmem.js";import"./oypc9t5q5413y6i2.js";function Q({messages:o}){const[r,l]=n.useState(!1),a=o.reduce((e,s)=>(s.message.content.content_type===x.TetherQuote&&e.set(s.message.content.url,s.message.content.title),e),new Map),g=[...a].slice(0,r?a.size:2),m=M(o);return n.useEffect(()=>{m.forEach(({contentUrl:e})=>{if(!p.getState().images.has(e)){const s=new Image;s.onload=()=>{p.setState(i=>({images:new Set(i.images).add(e)}))},s.src=e}})},[m]),t.jsxs("div",{className:d("flex gap-2 pb-6 pt-3",r&&"flex-wrap"),children:[g.map(([e,s],i)=>t.jsxs(c,{href:e,target:"_blank",children:[t.jsx(h,{url:e,className:"flex-shrink-0"}),s]},i)),!r&&a.size>2&&t.jsx(c,{className:"flex-shrink-0",onClick:()=>l(e=>!e),children:t.jsx(u,{id:"SearchResultMessage.moreResults",defaultMessage:"+{number} more",values:{number:a.size-2}})})]})}const c=f.a`line-clamp-2 rounded-md bg-token-main-surface-tertiary px-3 py-2 text-xs flex items-center gap-2.5`;export{Q as SearchResultMessage};
//# sourceMappingURL=hvu0trusop0nwkuy.js.map