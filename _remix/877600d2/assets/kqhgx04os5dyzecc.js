import{s as o,L as n,dp as a,dq as r}from"./hbhpmx2ipkndwudc.js";import"./mgr0w69u3c317psp.js";const s=async()=>{try{const t=await n.requestMfaToken();if(!t||!t.state_token)throw new Error("Failed to fetch MFA token");return t.state_token}catch{window.location.href=a(r.ENABLE_MFA_ERROR,"/#settings/Security")}};function f(){const{data:t}=o({queryKey:["mfaToken"],queryFn:s});if(t){const e="ChatGPT";window.location.href=`https://auth.openai.com/totp_enroll?origin_app_name=${e}&mfa_token=${t}`}return null}export{f as default};
//# sourceMappingURL=kqhgx04os5dyzecc.js.map