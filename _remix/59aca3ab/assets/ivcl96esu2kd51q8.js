const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/gl8rf1z7wv1bkqvp.js","assets/lcuggoxt9lwlg24j.js","assets/jpssqyi2li306ih2.js","assets/root-gbeh5o6d.css"])))=>i.map(i=>d[i]);
import{dO as u,h as f,j as c,aE as b,bz as l,r}from"./lcuggoxt9lwlg24j.js";import{d as S,a as y,T as g}from"./ml68f4cxi6vaymzu.js";import{e as w}from"./oqyar3trpkqgxv15.js";async function m(e){const t=await b(()=>import("./gl8rf1z7wv1bkqvp.js").then(a=>a.i),__vite__mapDeps([0,1,2,3]));if(l!=null&&e?.startsWith(l))return!0;try{return t.get(new URL(e??"").hostname)==="openai.com"}catch{return!1}}function D(e,t){const a=u();return f({queryKey:["safe-url",{serverThreadId:e,url:t,isHistoryAndTrainingDisabled:a}],queryFn:async()=>await m(t)||g.getThreadSafeUrls(e)?.includes(t)?{safe:!0}:c.getConversationSafeUrls(e,t,a),enabled:e!=null&&t!=null})}function q(e,t,a=!0){const o=S(s=>e!=null&&t!=null&&y.isThreadUrlSafe(e,t,s)),{data:{safe:i}={}}=D(e,o?void 0:t);return o||i||!a?t:void 0}function C(e,t){const[a,o]=r.useState(void 0),[i]=r.useState(()=>w(s=>{o(s)},t));return r.useEffect(()=>{i(e)},[i,e]),a===e?e:void 0}function F(e,t){const a=u(),o=S(s=>e==null?[]:y.getThread(e,s)?.safeUrls??[]),{data:i=[]}=f({queryKey:["safe-urls",e,t,a,o],queryFn:async()=>{const s=o.filter(n=>t.includes(n)),d=t.filter(n=>!s.includes(n)),p=(await Promise.allSettled(d.map(async n=>{if(await m(n))return n;if(e==null)return null;try{return(await c.getConversationSafeUrls(e,n,a)).safe?n:null}catch{return null}}))).map(n=>n.status==="fulfilled"?n.value:null).filter(n=>n!=null);return s.concat(p)},enabled:e!=null&&t.length>0});return i}export{C as a,q as b,F as u};
//# sourceMappingURL=ivcl96esu2kd51q8.js.map