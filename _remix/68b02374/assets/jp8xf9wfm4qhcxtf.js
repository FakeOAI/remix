import{j as s,aB as o,ak as m}from"./ign6lc5qqsbgzj3q.js";import{F as h}from"./c6xlq33kbn3dpe0b.js";import{bD as f,bE as g,c as x,bF as S}from"./f2jm88xc868xaf4h.js";import{T as n}from"./okf9stao9g2mpead.js";import{T as j}from"./etiar93j6cjna6bo.js";import{m as N}from"./lc5t42k1qhi0m0nv.js";import"./wrbxtg8dgsjl2z0d.js";import"./b2byr4u1f69rxq8h.js";const T=3,b=.1,l=[0,.26,.4];function D({nextMessage:e,isLastMessage:c,isRequestActive:r}){let d=c||!e||e&&!f(e.message);const u=g(e?.message),p=x(u.slice(0,T).map(a=>a.entries[0].url));if(e?.message.id&&S(e?.message.id),d){const a=r?s.jsxs("div",{className:"flex items-center gap-1",children:[p.map((t,i)=>s.jsx(N.div,{className:m("-ml-1.5 first:ml-0 last:mr-1.5","relative"),initial:{width:i===0?0:6,opacity:0},animate:{width:20,opacity:1},transition:{duration:b,delay:l[Math.min(i,l.length-1)]},children:s.jsx("div",{className:m("flex h-[22px] w-[22px] items-center overflow-hidden rounded-full","border-2 border-token-main-surface-primary bg-token-main-surface-primary"),children:s.jsx(h,{url:t,size:32,minSize:16,className:"icon-md rounded-full"})})},t)),s.jsx(o,{id:"jjx8Qg",defaultMessage:"Searching the web"})]}):s.jsx(o,{id:"fssXGM",defaultMessage:"Error while searching"});return s.jsx(j,{highlightedCommand:a,status:r?n.Running:n.Error})}return null}export{D as SearchGPTQueryMessage};
//# sourceMappingURL=jp8xf9wfm4qhcxtf.js.map