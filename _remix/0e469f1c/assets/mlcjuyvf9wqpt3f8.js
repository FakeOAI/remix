import{r as m,M as u,j as a,ar as x,ao as d,ay as f}from"./fozyys57b6461bwr.js";import{F as h}from"./osyblh2ldwr59ivi.js";import{bu as M,bv as c}from"./kuzdys3rw3ix3a3q.js";import"./lek82h8c0bbwxe65.js";function y({messages:o}){const[r,g]=m.useState(!1),t=o.reduce((e,s)=>(s.message.content.content_type===u.TetherQuote&&e.set(s.message.content.url,s.message.content.title),e),new Map),p=[...t].slice(0,r?t.size:2),i=M(o);return m.useEffect(()=>{i.forEach(({contentUrl:e})=>{if(!c.getState().images.has(e)){const s=new Image;s.onload=()=>{c.setState(n=>({images:new Set(n.images).add(e)}))},s.src=e}})},[i]),a.jsxs("div",{className:x("flex gap-2 pb-6 pt-3",r&&"flex-wrap"),children:[p.map(([e,s],n)=>a.jsxs(l,{href:e,target:"_blank",children:[a.jsx(h,{url:e,className:"flex-shrink-0"}),s]},n)),!r&&t.size>2&&a.jsx(l,{className:"flex-shrink-0",onClick:()=>g(e=>!e),children:a.jsx(d,{id:"SearchResultMessage.moreResults",defaultMessage:"+{number} more",values:{number:t.size-2}})})]})}const l=f.a`line-clamp-2 rounded-md bg-token-main-surface-tertiary px-3 py-2 text-xs flex items-center gap-2.5`;export{y as SearchResultMessage};
//# sourceMappingURL=mlcjuyvf9wqpt3f8.js.map