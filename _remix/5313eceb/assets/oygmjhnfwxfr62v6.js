import{r as p,c4 as x,j as s,c as d,J as f,N as u}from"./dvzkaody587rk08a.js";import{F as h}from"./j257ewtuntlk7sev.js";import{bF as n}from"./fku109ioiqpwlajh.js";import{N as M}from"./ix3e4uq0ouopgm1d.js";import"./exu8sqazer2zujr0.js";import"./dr8cda1gmg2j3rrv.js";import"./h0336duz3b54502g.js";import"./hx1dr086ejea7hpk.js";import"./od5diow45t6yuhzs.js";import"./cwmjuna6mefjaaqq.js";import"./dimn72ivg030id6n.js";import"./cdqx11510b8o7c0s.js";import"./ik4e5kkxirlsdflr.js";import"./il66am63va0jty5c.js";import"./nmttvs9ku6ig8m9l.js";import"./es7n9kifkv9c13ar.js";import"./9kqd7ajn75ttqt6u.js";import"./lnf9bkt00g2q2pbk.js";import"./bek1exzbtpnvo9r1.js";import"./i6jbhem39ybxew8i.js";import"./mg4kwc6awjmtudx2.js";import"./lqbluvktt4mdnyct.js";import"./ifw8qgye7064l9dt.js";import"./bztyxyyzhgy6s9qb.js";import"./e74rfuzvvpby5q2v.js";import"./bm7ekn5vmk47n5mw.js";function O({messages:i}){const[a,l]=p.useState(!1),r=i.reduce((e,t)=>(t.message.content.content_type===x.TetherQuote&&e.set(t.message.content.url,t.message.content.title),e),new Map),g=[...r].slice(0,a?r.size:2),m=M(i);return p.useEffect(()=>{m.forEach(({contentUrl:e})=>{if(!n.getState().images.has(e)){const t=new Image;t.onload=()=>{n.setState(o=>({images:new Set(o.images).add(e)}))},t.src=e}})},[m]),s.jsxs("div",{className:d("flex gap-2 pb-6 pt-3",a&&"flex-wrap"),children:[g.map(([e,t],o)=>s.jsxs(c,{href:e,target:"_blank",children:[s.jsx(h,{url:e,className:"flex-shrink-0"}),t]},o)),!a&&r.size>2&&s.jsx(c,{className:"flex-shrink-0",onClick:()=>l(e=>!e),children:s.jsx(f,{id:"SearchResultMessage.moreResults",defaultMessage:"+{number} more",values:{number:r.size-2}})})]})}const c=u.a`line-clamp-2 rounded-md bg-token-main-surface-tertiary px-3 py-2 text-xs flex items-center gap-2.5`;export{O as SearchResultMessage};
//# sourceMappingURL=oygmjhnfwxfr62v6.js.map