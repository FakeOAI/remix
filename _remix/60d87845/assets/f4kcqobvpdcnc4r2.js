import{u as o,j as n,c2 as a,c3 as r}from"./dwkd3b3c7kg0ot7l.js";import"./byou0827mflm7tmy.js";const s=async()=>{try{const t=await n.requestMfaToken();if(!t||!t.state_token)throw new Error("Failed to fetch MFA token");return t.state_token}catch{window.location.href=a(r.ENABLE_MFA_ERROR,"/#settings/Security")}};function f(){const{data:t}=o({queryKey:["mfaToken"],queryFn:s});if(t){const e="ChatGPT";window.location.href=`https://auth.openai.com/totp_enroll?origin_app_name=${e}&mfa_token=${t}`}return null}export{f as default};
//# sourceMappingURL=f4kcqobvpdcnc4r2.js.map