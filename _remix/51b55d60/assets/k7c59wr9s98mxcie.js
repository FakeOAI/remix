import{r as a,dL as O,a4 as b,ah as y,bq as N,t as D,j as p,bW as i,bX as u,df as R,b as T,ae as A}from"./otclk14vst88v95n.js";import{ap as v}from"./cef20f49k9y1cwjs.js";import"./cqauunpqwnjujx3i.js";function I(){const m=a.useRef(!1),[g,E]=a.useState(""),{code:c,error:l,error_description:f,state:r}=Object.fromEntries(new URLSearchParams(g.substring(1)).entries()),t=O().pluginId,n=b(),C=y(),s=N();return a.useEffect(()=>{E(window.location.hash)},[]),a.useEffect(()=>{if(m.current)return;t&&c&&r&&(m.current=!0);async function S(){const M=`https://chatgpt.com/ca/${t}/oauth/callback`;if(!t||!c||!r){s("/");return}const e=await p.connectorOauthCallback(t,c,M,r);if(!e.success){s(i(u.CUSTOM_ERROR,e.redirect_path,e.error??e.message));return}let o=R.SLACK_SYNC_CONNECTOR;t===v&&(o=R.GDRIVE_SYNC_CONNECTOR);try{const h=await T.safePost("/connectors/{connector_name}/connect_account",{parameters:{path:{connector_name:o}},requestBody:{}});if(!h.success){await p.deleteUserConnectedApp(o);let _=d.connectedDriveErrorDesc;h.status_code===405&&(_=d.emailNotMatchDesc),s(i(u.CUSTOM_ERROR,e.redirect_path,n.formatMessage(_)));return}}catch{await p.deleteUserConnectedApp(o),s(i(u.CUSTOM_ERROR,e.redirect_path,n.formatMessage(d.connectedDriveErrorDesc)));return}s(i(u.CUSTOM_MSG,e.redirect_path,n.formatMessage(d.connectedDriveSyncDesc)))}S()},[t,c,r,n,s]),a.useEffect(()=>{l&&C.danger(`${l}${f?`: ${f}`:""}`)},[l,f,C]),D.jsx(D.Fragment,{})}const d=A({connectedDriveSyncDesc:{id:"CACallback.connectedDriveSyncDesc.1",defaultMessage:"Your account has been connected."},connectedDriveErrorDesc:{id:"CACallback.connectedDriveErrorDesc.1",defaultMessage:"We encountered an issue. Please retry and contact your admin if this issue persists."},emailNotMatchDesc:{id:"CACallback.emailNotMatchDesc.1",defaultMessage:"The account you're trying to connect to doesn't match your ChatGPT account"}});export{I as default};
//# sourceMappingURL=k7c59wr9s98mxcie.js.map