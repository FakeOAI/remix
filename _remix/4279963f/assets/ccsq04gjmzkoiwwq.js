import{X as m,r as o,ba as R,j as g,R as S,b6 as p,b7 as h}from"./mtnbdcyqrcvvklqa.js";import{u as b}from"./e7jqcep1hrcysgbi.js";import"./fiqi1nsnq1a08oyy.js";function T(){const{pluginId:t,code:u,state:i,error:r,errorDesc:c}=b(),a=m(),n=o.useRef(!1);o.useEffect(()=>{if(n.current===!0)return;n.current=!0;async function f(){const d=`https://chat.openai.com/aip/${t}/oauth/callback`;try{const e=await S.pluginOauthCallback(t,u,d,i);if(e.success){const s=new URL(p(h.OAUTH_SUCCESS,e.redirect_path),location.origin);s.searchParams.set("oauth_success","true"),a.push(s.pathname+s.search+s.hash)}else a.push(p(h.CUSTOM_ERROR,e.redirect_path,e.error??e.message))}catch{a.push(`/?model=gpt-4-plugins&loginAip=${t}&loginSuccess=false`)}}f()},[t,u,i,a]);const l=R();return o.useEffect(()=>{r&&l.danger(`${r}${c?`: ${c}`:""}`,{duration:5})},[r,c,l]),g.jsx("div",{})}export{T as default};
//# sourceMappingURL=ccsq04gjmzkoiwwq.js.map