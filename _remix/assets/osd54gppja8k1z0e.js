import{r as p,c3 as x,j as s,c as d,G as f,I as u}from"./bahzwkph2ne3eyls.js";import{F as h}from"./c6gb2rbsxh9etrwn.js";import{bw as n}from"./osssmfbfx387nkfp.js";import{L as M}from"./ogp6qk5n3wgjai4w.js";import"./l2euh9jr36irqfhd.js";import"./vob0lj31hjn1wm62.js";import"./codbzyvijm6ysxs9.js";import"./lsf5205xb8uhelvm.js";import"./dmvkul07jrsv5oew.js";import"./c2ngwqta6y10c65f.js";import"./neqrmh68z94ca0s3.js";import"./mkvc221zzllmqy82.js";import"./e5xpxu685bcmo11v.js";import"./miukfjs4ixxxz4np.js";import"./jqfk91km4z8oth8d.js";import"./l21uydfkq6k6cloh.js";import"./d1i0ajln9othjm15.js";import"./dibm0rpouds2ml23.js";import"./livi8sco50k3cxwe.js";import"./jc3615ar2prwhftj.js";import"./o875bmaiwrcidr38.js";import"./lia678yjpfeqs8px.js";import"./ic641g3112rzm1ta.js";import"./i6v4xmbkfg06mje0.js";import"./c7wey25wryf5int1.js";import"./m1399zjt2w9a5toy.js";function O({messages:i}){const[a,l]=p.useState(!1),r=i.reduce((e,t)=>(t.message.content.content_type===x.TetherQuote&&e.set(t.message.content.url,t.message.content.title),e),new Map),g=[...r].slice(0,a?r.size:2),m=M(i);return p.useEffect(()=>{m.forEach(({contentUrl:e})=>{if(!n.getState().images.has(e)){const t=new Image;t.onload=()=>{n.setState(o=>({images:new Set(o.images).add(e)}))},t.src=e}})},[m]),s.jsxs("div",{className:d("flex gap-2 pb-6 pt-3",a&&"flex-wrap"),children:[g.map(([e,t],o)=>s.jsxs(c,{href:e,target:"_blank",children:[s.jsx(h,{url:e,className:"flex-shrink-0"}),t]},o)),!a&&r.size>2&&s.jsx(c,{className:"flex-shrink-0",onClick:()=>l(e=>!e),children:s.jsx(f,{id:"SearchResultMessage.moreResults",defaultMessage:"+{number} more",values:{number:r.size-2}})})]})}const c=u.a`line-clamp-2 rounded-md bg-token-main-surface-tertiary px-3 py-2 text-xs flex items-center gap-2.5`;export{O as SearchResultMessage};
//# sourceMappingURL=osd54gppja8k1z0e.js.map