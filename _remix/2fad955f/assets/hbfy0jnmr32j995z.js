import{eq as d,W as m,r as o,K as S,j as R,O as E,cw as h,cx as p}from"./orw3ylzo1pm5yat5.js";import"./fx9bt06582fbthzh.js";function x(){const{pluginId:e,code:i,state:n,error:r,errorDesc:c}=d(),t=m(),u=o.useRef(!1);o.useEffect(()=>{if(u.current===!0)return;u.current=!0;async function f(){const g=`https://chat.openai.com/aip/${e}/oauth/callback`;try{const a=await E.pluginOauthCallback(e,i,g,n);if(a.success){const s=new URL(h(p.OAUTH_SUCCESS,a.redirect_path),location.origin);s.searchParams.set("oauth_success","true"),t(s.pathname+s.search+s.hash)}else t(h(p.CUSTOM_ERROR,a.redirect_path,a.error??a.message))}catch{t({pathname:"/",search:new URLSearchParams({model:"gpt-4-plugins",loginAip:e,loginSuccess:"false"}).toString()})}}f()},[e,i,n,t]);const l=S();return o.useEffect(()=>{r&&l.danger(`${r}${c?`: ${c}`:""}`,{duration:5})},[r,c,l]),R.jsx("div",{})}export{x as default};
//# sourceMappingURL=hbfy0jnmr32j995z.js.map