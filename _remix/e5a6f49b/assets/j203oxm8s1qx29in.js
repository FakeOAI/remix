import{W as d,r as c,a6 as R,j as S,F as g,aQ as l,aR as p}from"./le8vjrsp1khq127u.js";import{u as m}from"./cv3x0t6s1fbtnsh0.js";import"./gt2rj17yt7sbf7px.js";function $(){const{pluginId:e,code:u,state:o,error:s,errorDesc:r}=m(),a=d(),i=c.useRef(!1);return c.useEffect(()=>{if(i.current===!0)return;i.current=!0;async function f(){const h=`https://chat.openai.com/aip/${e}/oauth/callback`;try{const t=await g.pluginOauthCallback(e,u,h,o);if(t.success){const n=new URL(l(p.OAUTH_SUCCESS,t.redirect_path));n.searchParams.set("oauth_success","true"),a.push(n.toString())}else a.push(l(p.CUSTOM_ERROR,t.redirect_path,t.error??t.message))}catch{a.push(`/?model=gpt-4-plugins&loginAip=${e}&loginSuccess=false`)}}f()},[e,u,o,a]),c.useEffect(()=>{s&&R.danger(`${s}${r?`: ${r}`:""}`,{duration:5})},[s,r]),S.jsx("div",{})}export{$ as default};
//# sourceMappingURL=j203oxm8s1qx29in.js.map