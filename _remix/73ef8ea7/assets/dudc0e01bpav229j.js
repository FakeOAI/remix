import{l as e,a0 as t,a1 as d,bD as c,bi as l,r as h,P as p,bd as g}from"./ielox7uqz6yj4gk6.js";import{A as f,a as m,b as y}from"./ftpdkygfq5ft03j6.js";import{A as E}from"./ozmtdvabqes37062.js";import"./efs79xt96ya5kdfa.js";import"./eu744izg10vbq914.js";import"./gr1m48d7fxjw6hnf.js";import"./cf0oncda6q98ospj.js";import"./bsb53g286ebezqmg.js";const r=d({oops:{id:"AuthError.oops",defaultMessage:"Oops!"},goBack:{id:"AuthError.goBack",defaultMessage:"Go back"},systemBusyError:{id:"AuthError.systemBusyError",defaultMessage:"Our systems are a bit busy at the moment, please take a break and try again soon."},identityProviderMismatch:{id:"AuthError.identityProviderMismatch",defaultMessage:"You tried signing in with a different authentication method than the one you used during signup. Please try again using your original authentication method."},accountDeactivated:{id:"AuthError.accountDeactivated",defaultMessage:"You do not have an account because it has been deleted or deactivated. If you believe this was an error, please contact us through our help center at help.openai.com."},unsupportedCountry:{id:"AuthError.unsupportedCountry",defaultMessage:"OpenAI's services are not available in your country."},unsupportedRegion:{id:"AuthError.unsupportedRegion",defaultMessage:"OpenAI's services are not available in your region."},unknownCountry:{id:"AuthError.unknownCountry",defaultMessage:"We were unable to determine your country of origin to enforce geographical restrictions. Please use a different network, or contact us at help.openai.com if the issue persists."},ssoRequired:{id:"AuthError.ssoRequired",defaultMessage:"Please use your organization's SSO to access your account."},mfaBypass:{id:"AuthError.mfaBypass",defaultMessage:"Your account is protected with multi-factor authentication. Please log in again using the method you set that up with."},defaultError:{id:"AuthError.defaultError",defaultMessage:"We ran into an issue while signing you in, please take a break and try again soon."}}),i=e.jsx(t,{...r.systemBusyError}),v="mfa_bypass",n={RequestTimeout:i,AuthRateLimit:i,identity_provider_mismatch:e.jsx(t,{...r.identityProviderMismatch}),account_deactivated:e.jsx(t,{...r.accountDeactivated}),unsupported_country:e.jsx(t,{...r.unsupportedCountry}),unsupported_region:e.jsx(t,{...r.unsupportedRegion}),unknown_country:e.jsx(t,{...r.unknownCountry}),sso_required:e.jsx(t,{...r.ssoRequired}),default:e.jsx(t,{...r.defaultError})};function _(){return e.jsx(M,{})}function A(o){const s=o.split("|");return s.length>1?s[1]:void 0}function x(o){if(o in n)return n[o];if(o.startsWith(v)){const s=A(o),a=(s===void 0?void 0:E[s])??"your other account you set that up with";return e.jsx(t,{id:"AuthError.mfaBypass2",defaultMessage:"Your account is protected with multi-factor authentication. Please log in with {providerLabel} to provide the verification code.",values:{providerLabel:a}})}else return n.default}function M(){const o=c(),[s]=l(),a=s.get("error")??"",u=x(a);return h.useEffect(()=>{a!==void 0&&p.logAuthErrorResponse(a)},[a]),e.jsx(f,{isStorageComplianceEnabled:!1,children:e.jsxs(m,{children:[e.jsx(y,{}),e.jsx("div",{className:"mb-2 text-center text-lg",children:e.jsx(t,{...r.oops})}),e.jsx("div",{className:"mb-5 text-center",children:u}),e.jsx(g,{as:"button",color:"secondary",onClick:()=>o("/auth/login",{replace:!0}),children:e.jsx(t,{...r.goBack})})]})})}export{_ as default};
//# sourceMappingURL=dudc0e01bpav229j.js.map