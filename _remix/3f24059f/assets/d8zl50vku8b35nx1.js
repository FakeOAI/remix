import{d8 as y,f as R,bx as S,u as f,h as A,b2 as D}from"./dr7d3iwdkso0acad.js";import{D as p}from"./l97vil97vij75d6c.js";import{c as T}from"./dmeh4acfgftb4ocn.js";const d=()=>{let e,s;const n=new Promise((r,a)=>{e=r,s=a});return{resolve:e,reject:s,value:n}},_=(e,s)=>{const n=e.name??`batcher:${Math.random().toString(16).slice(2)})`,r=e.scheduler??v(10),a=globalThis.__BATSHIT_DEVTOOLS__?.for(n);let t={seq:0,batch:new Set,currentRequest:d(),timer:void 0,start:null,latest:null};a?.create({seq:t.seq});const c=()=>{t.batch=new Set,t.currentRequest=d(),t.timer=void 0,t.start=null,t.latest=null};return{fetch:u=>{t.start||(t.start=Date.now()),t.latest=Date.now(),t.batch.add(u),clearTimeout(t.timer);const i=r(t.start,t.latest,t.batch.size);a?.queue({seq:t.seq,query:u,batch:[...t.batch],scheduled:i,latest:t.latest,start:t.start});const m=()=>{const o=t.seq,h=e.fetcher([...t.batch]),q=t.currentRequest;return a?.fetch({seq:o,batch:[...t.batch]}),c(),h.then(l=>{a?.data({seq:o,data:l}),q.resolve(l)}).catch(l=>{a?.error({seq:o,error:l}),q.reject(l)}),t.seq++,h};if(i==="immediate"){const o=t.currentRequest;return m(),o.value.then(h=>e.resolver(h,u))}else return i==="never"?t.currentRequest.value.then(o=>e.resolver(o,u)):(t.timer=setTimeout(m,i),t.currentRequest.value.then(o=>e.resolver(o,u)))}}},M=e=>(s,n)=>s.find(r=>r[e]==n),v=e=>(s,n)=>{const r=n-s;return e-r},w=y(e=>_({fetcher:async s=>{const n=new Map;for await(const r of R.streamedJsonPost(`${S}/attributions`,{urls:s}))r.attribution&&n.set(r.url,r.attribution),e.setQueryData(["attribution",{url:r.url}],r.attribution);return T(s.map(r=>{const a=n.get(r);return a&&{url:r,attribution:a}}))},resolver:M("url"),scheduler:v(100)}));function C(e,{useBaseUrl:s=!0,enabled:n=!0}={}){const r=s?p(e):e,a=f(),t=w(a);return A({queryKey:["attribution",{url:r}],queryFn:async()=>(await t.fetch(r)).attribution,enabled:n&&!!e})}function P(e,{useBaseUrl:s=!0,enabled:n=!0}={}){const r=s?e.map(p):e,a=f(),t=w(a);return D({queries:r.map(c=>({queryKey:["attribution",{url:c}],queryFn:async()=>(await t.fetch(c)).attribution,enabled:r.length>0&&n})),combine:c=>{const b=new Map;for(let u=0;u<c.length;u++){const i=c[u].data;i&&b.set(e[u],i)}return b}})}export{C as a,_ as c,M as k,P as u,v as w};
//# sourceMappingURL=d8zl50vku8b35nx1.js.map