import{W as d,r as c,a6 as R,j as S,F as g,aQ as l,aR as p}from"./gpiovkdhhojcjdu4.js";import{u as m}from"./fpastp1zcij49ru1.js";import"./hvs2nic7m9r9scp5.js";function $(){const{pluginId:e,code:u,state:o,error:s,errorDesc:r}=m(),a=d(),i=c.useRef(!1);return c.useEffect(()=>{if(i.current===!0)return;i.current=!0;async function f(){const h=`https://chat.openai.com/aip/${e}/oauth/callback`;try{const t=await g.pluginOauthCallback(e,u,h,o);if(t.success){const n=new URL(l(p.OAUTH_SUCCESS,t.redirect_path));n.searchParams.set("oauth_success","true"),a.push(n.toString())}else a.push(l(p.CUSTOM_ERROR,t.redirect_path,t.error??t.message))}catch{a.push(`/?model=gpt-4-plugins&loginAip=${e}&loginSuccess=false`)}}f()},[e,u,o,a]),c.useEffect(()=>{s&&R.danger(`${s}${r?`: ${r}`:""}`,{duration:5})},[s,r]),S.jsx("div",{})}export{$ as default};
//# sourceMappingURL=e71infzj71x0yo8e.js.map