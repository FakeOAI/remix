import{r as h,cD as d,aM as g,a0 as p,s as f,m as _}from"./m3881aktdta1pmc9.js";import{cf as w,bm as I}from"./okmdvzkaebtartz7.js";import{p as P,u as T,a as u,b as c,d as y,c as R}from"./npaasg82f36eft31.js";import{m as q}from"./wj4cxuxyhew23int.js";class E{queue=[];attempted=new Set;isProcessing=!1;enqueue(e){this.queue.push(e),this._processQueue()}async _processQueue(){if(!this.isProcessing){for(this.isProcessing=!0;this.queue.length>0;)try{const e=this.queue.shift();if(!e)continue;await this._preload(e)}catch{}this.isProcessing=!1}}_preload(e){return new Promise(r=>{this.attempted.has(e)&&r();const s=new Image;s.onload=()=>{this.attempted.add(e),r()},s.onerror=()=>{this.attempted.add(e),r()},s.src=e})}}const M=new E;function x(t){const e=h.useRef(t);return d(e.current,t)||(e.current=t),e.current}function b(t,{enabled:e=!0}={}){const r=x(t);h.useEffect(()=>{if(!e||"connection"in navigator&&navigator.connection.type==="cellular")return;const o=setTimeout(()=>{r.forEach(n=>{n&&M.enqueue(n)})},1e3);return()=>{clearTimeout(o)}},[e,r])}function Q(){const{imageResults:t}=C();b([...t.map(e=>l(e))])}const S=w((...t)=>P(...t),5e3);function C(t=!1){const e=T(["image_results","image_try_hard_status","execution_status"]),r=u(c.threadId),s=g(e.toReversed().flatMap(a=>a.image_results?.entries)).map(a=>({...a,thumbnail_url:a.thumbnail_url.replace(/^http:\/\//,"https://"),content_url:a.content_url.replace(/^http:\/\//,"https://")})),o=u(c.hasModelResponseText),n=e.some(a=>y(a));let i=s.length===0&&!o;return r!=null&&t&&!i&&s.length===0&&e[0]?.image_try_hard_status==="not_attempted"&&(S(r,0),i=!0),t&&e[0]?.image_try_hard_status==="in_progress"&&(i=!0),{imageResults:s,isLoading:i,isErrored:s.length===0&&n}}function U(){const t=R(),e=u(c.hasTurnError),r=u(c.hasModelResponseText),s=I(t);return{imageResults:s,isLoading:s.length===0&&!r,isErrored:s.length===0&&e}}function z(t){return p({queryKey:["downloadImage",{imageUrl:t}],queryFn:()=>new Promise((e,r)=>{const s=new Image;s.onload=()=>{e({width:s.width,height:s.height})},s.onerror=()=>{r()},s.src=t}),enabled:t!=null})}function j(t){return f(z(t))}const m={width:474,square:!0};function l(t,e=m){if(t==null)return;const r=new URL(t.thumbnail_url);if(r.hostname.indexOf(".bing.")===-1)return t.thumbnail_url;const s=Math.min(e.width,t.content_size.width),o=e.height??Math.floor(s*t.content_size.height/t.content_size.width);if(r.searchParams.delete("pid"),e.square){const n=Math.min(s,o);r.searchParams.set("w",n.toString()),r.searchParams.set("h",n.toString())}else r.searchParams.set("w",s.toString()),r.searchParams.set("h",o.toString());return r.searchParams.set("c","7"),r.toString()}function A(t,e=m){return h.useMemo(()=>l(t,e),[t,e])}const O={type:"spring",stiffness:700,damping:82};function F({children:t,className:e}){return _.jsx(q.div,{animate:{opacity:1},initial:{width:"100%",height:"100%",translateX:0,translateY:0,opacity:0},whileHover:{width:"103%",height:"103%",translateX:"-1.5%",translateY:"-1.5%"},transition:O,className:e,children:t})}export{F as I,U as a,j as b,Q as c,A as d,z as g,O as i,C as u};
//# sourceMappingURL=ermudr9ltjxe0npw.js.map