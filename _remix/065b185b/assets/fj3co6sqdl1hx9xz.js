import{r as p,c6 as x,j as t,c as d,K as u,O as f}from"./ipnfovpzfewxgzg3.js";import{bJ as n,bB as h}from"./ewwu24rqftk2ujih.js";import{L as M}from"./cv21a02hd9alt4jf.js";import"./mmcqi5fu0b3qaeam.js";import"./f87edrj3i0wpmdr9.js";import"./ehatbj8iwbpf4wh7.js";import"./o9fw4ao9md6zve03.js";import"./emp5imjnsfybeqdb.js";import"./fi5s24sghhhw94o5.js";import"./ej408pdx458tsy3t.js";import"./ndqx79um4hsuufbw.js";import"./kbojayx0vdmzwkpo.js";import"./bpirmff6045cvson.js";import"./cxkuyyn3v2ogz9jm.js";import"./movm4xy8m9ar5hid.js";import"./jdds0lemxebd5n1s.js";import"./cog8pivw9uvp3t0w.js";import"./bxx3tiygpma4kjbo.js";import"./h5lvtzemsr9o701h.js";import"./nw124hbiqnimo711.js";import"./o5tbvi53oemik5xh.js";import"./d6ab1vlcmd6cf88h.js";import"./nscbad4ijbdmqfrp.js";import"./s8gzgi896943e4oz.js";import"./hiq86vx2michk4jr.js";function G({messages:o}){const[a,l]=p.useState(!1),r=o.reduce((e,s)=>(s.message.content.content_type===x.TetherQuote&&e.set(s.message.content.url,s.message.content.title),e),new Map),g=[...r].slice(0,a?r.size:2),m=M(o);return p.useEffect(()=>{m.forEach(({contentUrl:e})=>{if(!n.getState().images.has(e)){const s=new Image;s.onload=()=>{n.setState(i=>({images:new Set(i.images).add(e)}))},s.src=e}})},[m]),t.jsxs("div",{className:d("flex gap-2 pb-6 pt-3",a&&"flex-wrap"),children:[g.map(([e,s],i)=>t.jsxs(c,{href:e,target:"_blank",children:[t.jsx(h,{url:e,className:"flex-shrink-0"}),s]},i)),!a&&r.size>2&&t.jsx(c,{className:"flex-shrink-0",onClick:()=>l(e=>!e),children:t.jsx(u,{id:"SearchResultMessage.moreResults",defaultMessage:"+{number} more",values:{number:r.size-2}})})]})}const c=f.a`line-clamp-2 rounded-md bg-token-main-surface-tertiary px-3 py-2 text-xs flex items-center gap-2.5`;export{G as SearchResultMessage};
//# sourceMappingURL=fj3co6sqdl1hx9xz.js.map