const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mov4qsyxk1gbvc89.js","assets/owmtarjkip3g0mo9.js","assets/fnymri4mf6jyaz3i.js","assets/root-pepj1ul4.css"])))=>i.map(i=>d[i]);
import{dO as u,u as c,N as f,ac as b,O as l,r}from"./owmtarjkip3g0mo9.js";import{b as S,c as y,T as g}from"./droaets0od8jpc6n.js";import{d as w}from"./p0qbs8ed6703vk8m.js";async function m(e){const t=await b(()=>import("./mov4qsyxk1gbvc89.js").then(a=>a.i),__vite__mapDeps([0,1,2,3]));if(l!=null&&e?.startsWith(l))return!0;try{return t.get(new URL(e??"").hostname)==="openai.com"}catch{return!1}}function D(e,t){const a=u();return c({queryKey:["safe-url",{serverThreadId:e,url:t,isHistoryAndTrainingDisabled:a}],queryFn:async()=>await m(t)||g.getThreadSafeUrls(e)?.includes(t)?{safe:!0}:f.getConversationSafeUrls(e,t,a),enabled:e!=null&&t!=null})}function C(e,t,a=!0){const o=S(s=>e!=null&&t!=null&&y.isThreadUrlSafe(e,t,s)),{data:{safe:i}={}}=D(e,o?void 0:t);return o||i||!a?t:void 0}function E(e,t){const[a,o]=r.useState(void 0),[i]=r.useState(()=>w(s=>{o(s)},t));return r.useEffect(()=>{i(e)},[i,e]),a===e?e:void 0}function F(e,t){const a=u(),o=S(s=>e==null?[]:y.getThread(e,s)?.safeUrls??[]),{data:i=[]}=c({queryKey:["safe-urls",e,t,a,o],queryFn:async()=>{const s=o.filter(n=>t.includes(n)),d=t.filter(n=>!s.includes(n)),p=(await Promise.allSettled(d.map(async n=>{if(await m(n))return n;if(e==null)return null;try{return(await f.getConversationSafeUrls(e,n,a)).safe?n:null}catch{return null}}))).map(n=>n.status==="fulfilled"?n.value:null).filter(n=>n!=null);return s.concat(p)},enabled:e!=null&&t.length>0});return i}export{E as a,C as b,F as u};
//# sourceMappingURL=di4z7ohswd8ric3l.js.map