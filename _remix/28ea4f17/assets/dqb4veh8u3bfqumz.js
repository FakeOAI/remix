import{u as o,j as n,bM as a,bN as r}from"./h3lg90w4eburb9l1.js";import"./eisknr83d7xonp4v.js";const s=async()=>{try{const t=await n.requestMfaToken();if(!t||!t.state_token)throw new Error("Failed to fetch MFA token");return t.state_token}catch{window.location.href=a(r.ENABLE_MFA_ERROR,"/#settings/Security")}};function f(){const{data:t}=o({queryKey:["mfaToken"],queryFn:s});if(t){const e="ChatGPT";window.location.href=`https://auth.openai.com/totp_enroll?origin_app_name=${e}&mfa_token=${t}`}return null}export{f as default};
//# sourceMappingURL=dqb4veh8u3bfqumz.js.map