const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/e3w0sqjka6xarmlp.js","assets/f2udakjpoavu4gos.js","assets/ml8qzer8gjkdgre1.js","assets/root-9jaremil.css"])))=>i.map(i=>d[i]);
import{$ as u,l as c,O as f,ap as b,a6 as r,r as l}from"./f2udakjpoavu4gos.js";import{a0 as S,a1 as y,d as g,p as w}from"./sfdamp1qo3tlrbo9.js";async function m(e){const t=await b(()=>import("./e3w0sqjka6xarmlp.js").then(a=>a.i),__vite__mapDeps([0,1,2,3]));if(r!=null&&e?.startsWith(r))return!0;try{return t.get(new URL(e??"").hostname)==="openai.com"}catch{return!1}}function D(e,t){const a=u();return c({queryKey:["safe-url",{serverThreadId:e,url:t,isHistoryAndTrainingDisabled:a}],queryFn:async()=>await m(t)||w.getThreadSafeUrls(e)?.includes(t)?{safe:!0}:f.getConversationSafeUrls(e,t,a),enabled:e!=null&&t!=null})}function q(e,t,a=!0){const o=S(s=>e!=null&&t!=null&&y.isThreadUrlSafe(e,t,s)),{data:{safe:i}={}}=D(e,o?void 0:t);return o||i||!a?t:void 0}function C(e,t){const[a,o]=l.useState(void 0),[i]=l.useState(()=>g(s=>{o(s)},t));return l.useEffect(()=>{i(e)},[i,e]),a===e?e:void 0}function E(e,t){const a=u(),o=S(s=>e==null?[]:y.getThread(e,s)?.safeUrls??[]),{data:i=[]}=c({queryKey:["safe-urls",e,t,a,o],queryFn:async()=>{const s=o.filter(n=>t.includes(n)),p=t.filter(n=>!s.includes(n)),d=(await Promise.allSettled(p.map(async n=>{if(await m(n))return n;if(e==null)return null;try{return(await f.getConversationSafeUrls(e,n,a)).safe?n:null}catch{return null}}))).map(n=>n.status==="fulfilled"?n.value:null).filter(n=>n!=null);return s.concat(d)},enabled:e!=null&&t.length>0});return i}export{C as a,q as b,E as u};
//# sourceMappingURL=mlm568jdjbw7vqtg.js.map