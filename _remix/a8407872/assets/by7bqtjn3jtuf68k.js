import{r as a,dE as O,a0 as b,al as y,be as N,y as D,N as m,bP as i,bQ as u,cA as R,h as A,a1 as T}from"./b75w2kxjgzazjxw6.js";import{a8 as v}from"./d49gc0vs991bd5hw.js";import"./d9rj50fkuog8a2dx.js";function I(){const p=a.useRef(!1),[E,g]=a.useState(""),{code:c,error:l,error_description:f,state:r}=Object.fromEntries(new URLSearchParams(E.substring(1)).entries()),t=O().pluginId,n=b(),C=y(),s=N();return a.useEffect(()=>{g(window.location.hash)},[]),a.useEffect(()=>{if(p.current)return;t&&c&&r&&(p.current=!0);async function S(){const M=`https://chatgpt.com/ca/${t}/oauth/callback`;if(!t||!c||!r){s("/");return}const e=await m.connectorOauthCallback(t,c,M,r);if(!e.success){s(i(u.CUSTOM_ERROR,e.redirect_path,e.error??e.message));return}let o=R.SLACK_SYNC_CONNECTOR;t===v&&(o=R.GDRIVE_SYNC_CONNECTOR);try{const h=await A.safePost("/connectors/{connector_name}/connect_account",{parameters:{path:{connector_name:o}},requestBody:{}});if(!h.success){await m.deleteUserConnectedApp(o);let _=d.connectedDriveErrorDesc;h.status_code===405&&(_=d.emailNotMatchDesc),s(i(u.CUSTOM_ERROR,e.redirect_path,n.formatMessage(_)));return}}catch{await m.deleteUserConnectedApp(o),s(i(u.CUSTOM_ERROR,e.redirect_path,n.formatMessage(d.connectedDriveErrorDesc)));return}s(i(u.CUSTOM_MSG,e.redirect_path,n.formatMessage(d.connectedDriveSyncDesc)))}S()},[t,c,r,n,s]),a.useEffect(()=>{l&&C.danger(`${l}${f?`: ${f}`:""}`)},[l,f,C]),D.jsx(D.Fragment,{})}const d=T({connectedDriveSyncDesc:{id:"CACallback.connectedDriveSyncDesc.1",defaultMessage:"Your account has been connected."},connectedDriveErrorDesc:{id:"CACallback.connectedDriveErrorDesc.1",defaultMessage:"We encountered an issue. Please retry and contact your admin if this issue persists."},emailNotMatchDesc:{id:"CACallback.emailNotMatchDesc.1",defaultMessage:"The account you're trying to connect to doesn't match your ChatGPT account"}});export{I as default};
//# sourceMappingURL=by7bqtjn3jtuf68k.js.map