import{di as g,bD as m,r as i,aJ as R,l as S,j as E,c2 as p,c3 as h}from"./dwkd3b3c7kg0ot7l.js";import"./byou0827mflm7tmy.js";function b(){const{pluginId:e,code:o,state:n,error:r,errorDesc:c}=g(),t=m(),u=i.useRef(!1);i.useEffect(()=>{if(u.current===!0)return;u.current=!0;async function f(){const d=`https://chat.openai.com/aip/${e}/oauth/callback`;try{const a=await E.pluginOauthCallback(e,o,d,n);if(a.success){const s=new URL(p(h.OAUTH_SUCCESS,a.redirect_path),location.origin);s.searchParams.set("oauth_success","true"),t(s.pathname+s.search+s.hash)}else t(p(h.CUSTOM_ERROR,a.redirect_path,a.error??a.message))}catch{t(`/?model=gpt-4-plugins&loginAip=${e}&loginSuccess=false`)}}f()},[e,o,n,t]);const l=R();return i.useEffect(()=>{r&&l.danger(`${r}${c?`: ${c}`:""}`,{duration:5})},[r,c,l]),S.jsx("div",{})}export{b as default};
//# sourceMappingURL=b14yv6tcdthmz01v.js.map