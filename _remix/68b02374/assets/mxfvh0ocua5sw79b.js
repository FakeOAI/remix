import{r as c,B as M,J as y,K as N,W as T,j as _,O as m,cl as i,cm as u,dD as R,h as b,I as A}from"./ign6lc5qqsbgzj3q.js";import{Z as v}from"./f2jm88xc868xaf4h.js";import"./wrbxtg8dgsjl2z0d.js";function G(){const p=c.useRef(!1),[g,E]=c.useState(""),{code:a,error:l,error_description:f,state:r}=Object.fromEntries(new URLSearchParams(g.substring(1)).entries()),t=M().pluginId,n=y(),C=N(),s=T();return c.useEffect(()=>{E(window.location.hash)},[]),c.useEffect(()=>{if(p.current)return;t&&a&&r&&(p.current=!0);async function S(){const O=`https://chatgpt.com/ca/${t}/oauth/callback`;if(!t||!a||!r){s("/");return}const e=await m.connectorOauthCallback(t,a,O,r);if(!e.success){s(i(u.CUSTOM_ERROR,e.redirect_path,e.error??e.message));return}let o=R.SLACK_SYNC_CONNECTOR;t===v&&(o=R.GDRIVE_SYNC_CONNECTOR);try{const h=await b.safePost("/connectors/{connector_name}/connect_account",{parameters:{path:{connector_name:o}},requestBody:{}});if(!h.success){await m.deleteUserConnectedApp(o);let D=d.connectedDriveErrorDesc;h.status_code===405&&(D=d.emailNotMatchDesc),s(i(u.CUSTOM_ERROR,e.redirect_path,n.formatMessage(D)));return}}catch{await m.deleteUserConnectedApp(o),s(i(u.CUSTOM_ERROR,e.redirect_path,n.formatMessage(d.connectedDriveErrorDesc)));return}s(i(u.CUSTOM_MSG,e.redirect_path,n.formatMessage(d.connectedDriveSyncDesc)))}S()},[t,a,r,n,s]),c.useEffect(()=>{l&&C.danger(`${l}${f?`: ${f}`:""}`)},[l,f,C]),_.jsx(_.Fragment,{})}const d=A({connectedDriveSyncDesc:{id:"CACallback.connectedDriveSyncDesc.1",defaultMessage:"Your account has been connected."},connectedDriveErrorDesc:{id:"CACallback.connectedDriveErrorDesc.1",defaultMessage:"We encountered an issue. Please retry and contact your admin if this issue persists."},emailNotMatchDesc:{id:"CACallback.emailNotMatchDesc.1",defaultMessage:"The account you're trying to connect to doesn't match your ChatGPT account"}});export{G as default};
//# sourceMappingURL=mxfvh0ocua5sw79b.js.map