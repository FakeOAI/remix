import{j as e,J as S,K as y,m as F,o as b,O as M,ak as k,aB as n,aq as I,I as h}from"./mj0lqn4ze2fljnbl.js";import{c as q}from"./n88p71sdmouzlavs.js";import{be as v}from"./eufwkg2s3wcyxsss.js";import{A as B}from"./biukx9pf8ejivk6b.js";function N(){return e.jsx(q,{className:"icon-sm ml-1 text-token-text-tertiary"})}function U({workspaceId:i,Icon:s,label:r,feature:o,value:l,tooltip:a,hasPadding:u=!0,className:d,disabled:m=!1}){const c=S(),f=y(),g=F(),{variables:p,mutate:x}=b({mutationFn:({feature:t,enabled:j})=>M.setWorkspaceBetaFeature(i,t,j),onSettled:()=>{g.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{f.danger(c.formatMessage(T.featureSettingsUpdateFailed))}});return e.jsxs(B,{className:k(`justify-start ${u?"py-6":"py-0"}`,d),children:[e.jsx(v,{label:"",disabled:m,enabled:p?.enabled??l,onChange:t=>{x({feature:o,enabled:t})}}),e.jsxs("p",{className:"text-md inline-flex items-center",children:[s&&e.jsx(s,{className:"icon-md mr-2"}),e.jsx(n,{...r}),a&&e.jsx(I,{sideOffset:4,interactive:!0,delayDuration:0,label:e.jsx(n,{...a}),side:"top",children:e.jsx(N,{})})]})]})}const T=h({featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"}});export{U as B,N as S};
//# sourceMappingURL=m083kp9oc3b04pzx.js.map