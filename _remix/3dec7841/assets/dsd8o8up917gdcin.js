import{ao as e,F as o,aQ as a,aR as n}from"./fl2d4axqwlec442f.js";import"./j1he6evgnbin0qu0.js";const r=async()=>{try{const t=await o.requestMfaToken();if(!t||!t.state_token)throw new Error("Failed to fetch MFA token");return t.state_token}catch{window.location.href=a(n.ENABLE_MFA_ERROR,"/#settings/Security")}};function f(){const{data:t}=e({queryKey:["mfaToken"],queryFn:r});return t&&(window.location.href=`https://auth.openai.com/totp_enroll?mfa_token=${t}`),null}export{f as default};
//# sourceMappingURL=dsd8o8up917gdcin.js.map