import{X as m,r as o,b4 as R,j as g,R as S,b0 as p,b1 as h}from"./7q6a9ksdf0pmxyke.js";import{u as b}from"./jzcuyi117iypfjti.js";import"./hk3bf7nz434dsnqo.js";function T(){const{pluginId:t,code:u,state:i,error:r,errorDesc:c}=b(),s=m(),n=o.useRef(!1);o.useEffect(()=>{if(n.current===!0)return;n.current=!0;async function f(){const d=`https://chat.openai.com/aip/${t}/oauth/callback`;try{const e=await S.pluginOauthCallback(t,u,d,i);if(e.success){const a=new URL(p(h.OAUTH_SUCCESS,e.redirect_path),location.origin);a.searchParams.set("oauth_success","true"),s.push(a.pathname+a.search+a.hash)}else s.push(p(h.CUSTOM_ERROR,e.redirect_path,e.error??e.message))}catch{s.push(`/?model=gpt-4-plugins&loginAip=${t}&loginSuccess=false`)}}f()},[t,u,i,s]);const l=R();return o.useEffect(()=>{r&&l.danger(`${r}${c?`: ${c}`:""}`,{duration:5})},[r,c,l]),g.jsx("div",{})}export{T as default};
//# sourceMappingURL=g8fr2x7lc894ef9b.js.map