import{r as m,M as u,j as a,ak as x,aB as d,ar as f}from"./khdt74oc991qrzkv.js";import{F as h}from"./lf7qw0r0eq4tsf3t.js";import{bt as M,bu as c}from"./chtblihe2u4rokz2.js";import"./gg707do31ygkqwmn.js";function E({messages:i}){const[r,g]=m.useState(!1),t=i.reduce((e,s)=>(s.message.content.content_type===u.TetherQuote&&e.set(s.message.content.url,s.message.content.title),e),new Map),p=[...t].slice(0,r?t.size:2),o=M(i);return m.useEffect(()=>{o.forEach(({contentUrl:e})=>{if(!c.getState().images.has(e)){const s=new Image;s.onload=()=>{c.setState(n=>({images:new Set(n.images).add(e)}))},s.src=e}})},[o]),a.jsxs("div",{className:x("flex gap-2 pb-6 pt-3",r&&"flex-wrap"),children:[p.map(([e,s],n)=>a.jsxs(l,{href:e,target:"_blank",children:[a.jsx(h,{url:e,className:"flex-shrink-0"}),s]},n)),!r&&t.size>2&&a.jsx(l,{className:"flex-shrink-0",onClick:()=>g(e=>!e),children:a.jsx(d,{id:"SearchResultMessage.moreResults",defaultMessage:"+{number} more",values:{number:t.size-2}})})]})}const l=f.a`line-clamp-2 rounded-md bg-token-main-surface-tertiary px-3 py-2 text-xs flex items-center gap-2.5`;export{E as SearchResultMessage};
//# sourceMappingURL=ixz5ig9ukxgy8a2k.js.map