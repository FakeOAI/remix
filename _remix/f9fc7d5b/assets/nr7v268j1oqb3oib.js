import{a8 as y,r as c,V as b,aK as N,bp as T,l as D,j as p,c1 as i,c2 as u,df as g,f as A,a0 as v}from"./ldmgmrz4k1q6ed5n.js";import{aw as U}from"./il8crxbwclaclc75.js";import"./nfw6qo5mkhpyk7ym.js";function I(){const t=y(),C=c.useRef(!1),[E,S]=c.useState(""),{code:a,error:l,error_description:f,state:r}=Object.fromEntries(new URLSearchParams(E.substring(1)).entries()),s=t.query.pluginId,n=b(),m=N(),R=T();return c.useEffect(()=>{S(window.location.hash)},[]),c.useEffect(()=>{if(C.current)return;s&&a&&r&&(C.current=!0);async function M(){const O=`https://chatgpt.com/ca/${s}/oauth/callback`;if(!s||!a||!r){R("/");return}const e=await p.connectorOauthCallback(s,a,O,r);if(!e.success){t.push(i(u.CUSTOM_ERROR,e.redirect_path,e.error??e.message));return}let o=g.SLACK_SYNC_CONNECTOR;s===U&&(o=g.GDRIVE_SYNC_CONNECTOR);try{const h=await A.safePost("/connectors/{connector_name}/connect_account",{parameters:{path:{connector_name:o}},requestBody:{}});if(!h.success){await p.deleteUserConnectedApp(o);let _=d.connectedDriveErrorDesc;h.status_code===405&&(_=d.emailNotMatchDesc),t.push(i(u.CUSTOM_ERROR,e.redirect_path,n.formatMessage(_)));return}}catch{await p.deleteUserConnectedApp(o),t.push(i(u.CUSTOM_ERROR,e.redirect_path,n.formatMessage(d.connectedDriveErrorDesc)));return}t.push(i(u.CUSTOM_MSG,e.redirect_path,n.formatMessage(d.connectedDriveSyncDesc)))}M()},[s,a,r,t,n,R]),c.useEffect(()=>{l&&m.danger(`${l}${f?`: ${f}`:""}`)},[l,f,m]),D.jsx(D.Fragment,{})}const d=v({connectedDriveSyncDesc:{id:"CACallback.connectedDriveSyncDesc.1",defaultMessage:"Your account has been connected."},connectedDriveErrorDesc:{id:"CACallback.connectedDriveErrorDesc.1",defaultMessage:"We encountered an issue. Please retry and contact your admin if this issue persists."},emailNotMatchDesc:{id:"CACallback.emailNotMatchDesc.1",defaultMessage:"The account you're trying to connect to doesn't match your ChatGPT account"}});export{I as default};
//# sourceMappingURL=nr7v268j1oqb3oib.js.map