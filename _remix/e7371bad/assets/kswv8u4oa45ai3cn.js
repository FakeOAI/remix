import{E as S,$ as d,r as a,K as m,O as C,cv as u,cw as h}from"./mz4maixy265szwnd.js";import"./hlwoz96ivm34s047.js";function b(){const{pluginId:e}=S(),t=d(),l=a.useRef(!1),[p,R]=a.useState(""),{code:r,error:o,error_description:i,state:c}=Object.fromEntries(new URLSearchParams(p.substring(1)).entries());a.useEffect(()=>{R(window.location.hash)},[]),a.useEffect(()=>{if(l.current)return;if(e&&r&&c)l.current=!0;else{t("/");return}async function E(){const O=`https://chatgpt.com/ccc/${e}/oauth/callback`;if(!(!e||!r||!c))try{const s=await C.connectorOauthCallback(e,r,O,c);if(s.success){const n=new URL(u(h.OAUTH_SUCCESS,s.redirect_path),location.origin);n.searchParams.set("oauth_success","true"),t(n.pathname+n.search+n.hash)}else t(u(h.CUSTOM_ERROR,s.redirect_path,s.error??s.message))}catch{t(u(h.CUSTOM_ERROR))}}E()},[e,r,c,t]);const f=m();return a.useEffect(()=>{o&&f.danger(`${o}${i?`: ${i}`:""}`)},[o,i,f]),null}export{b as default};
//# sourceMappingURL=kswv8u4oa45ai3cn.js.map