import{j as s,aB as o,ak as m}from"./mz4maixy265szwnd.js";import{F as h}from"./b0rkv4o9p8rht5zy.js";import{b4 as f,b5 as g,b6 as x,b7 as S}from"./n7b9v4lgoh59xuao.js";import{T as n}from"./ha55e86u9lorcdoq.js";import{T as j}from"./crj1ajhlfj587lz0.js";import{m as N}from"./jkt64srpvhnrtjqp.js";import"./hlwoz96ivm34s047.js";import"./mmncgch8lum0r3s8.js";const b=3,T=.1,l=[0,.26,.4];function _({nextMessage:e,isLastMessage:c,isRequestActive:r}){let d=c||!e||e&&!f(e.message);const u=g(e?.message),p=x(u.slice(0,b).map(a=>a.entries[0].url));if(e?.message.id&&S(e?.message.id),d){const a=r?s.jsxs("div",{className:"flex items-center gap-1",children:[p.map((t,i)=>s.jsx(N.div,{className:m("-ml-1.5 first:ml-0 last:mr-1.5","relative"),initial:{width:i===0?0:6,opacity:0},animate:{width:20,opacity:1},transition:{duration:T,delay:l[Math.min(i,l.length-1)]},children:s.jsx("div",{className:m("flex h-[22px] w-[22px] items-center overflow-hidden rounded-full","border-2 border-token-main-surface-primary bg-token-main-surface-primary"),children:s.jsx(h,{url:t,size:32,minSize:16,className:"icon-md rounded-full"})})},t)),s.jsx(o,{id:"jjx8Qg",defaultMessage:"Searching the web"})]}):s.jsx(o,{id:"fssXGM",defaultMessage:"Error while searching"});return s.jsx(j,{highlightedCommand:a,status:r?n.Running:n.Error})}return null}export{_ as SearchGPTQueryMessage};
//# sourceMappingURL=b6es8pe31v39i7tu.js.map