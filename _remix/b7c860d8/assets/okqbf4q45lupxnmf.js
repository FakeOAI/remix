import{dJ as b,bh as m,r as s,a8 as E,j as O,bM as u,bN as h}from"./m8rh4g4wti5oij6r.js";import"./f2s0ymrsx8zkcqzb.js";function g(){const{pluginId:e}=b(),t=m(),l=s.useRef(!1),[p,R]=s.useState(""),{code:r,error:o,error_description:i,state:c}=Object.fromEntries(new URLSearchParams(p.substring(1)).entries());s.useEffect(()=>{R(window.location.hash)},[]),s.useEffect(()=>{if(l.current)return;if(e&&r&&c)l.current=!0;else{t("/");return}async function d(){const S=`https://chatgpt.com/ccc/${e}/oauth/callback`;if(!(!e||!r||!c))try{const a=await O.connectorOauthCallback(e,r,S,c);if(a.success){const n=new URL(u(h.OAUTH_SUCCESS,a.redirect_path),location.origin);n.searchParams.set("oauth_success","true"),t(n.pathname+n.search+n.hash)}else t(u(h.CUSTOM_ERROR,a.redirect_path,a.error??a.message))}catch{t(u(h.CUSTOM_ERROR))}}d()},[e,r,c,t]);const f=E();return s.useEffect(()=>{o&&f.danger(`${o}${i?`: ${i}`:""}`)},[o,i,f]),null}export{g as default};
//# sourceMappingURL=okqbf4q45lupxnmf.js.map