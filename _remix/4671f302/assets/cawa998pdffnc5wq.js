import{t as e,a3 as x,ag as j,a as S,h as y,j as F,a8 as n,ad as b}from"./cya1ek7zbsww3e8p.js";import{bJ as M,c as h}from"./o02kugc5eyp7bzuk.js";import{a as k}from"./m1h3d66e9x9d8av7.js";import{A as v}from"./kmdrtghpj3kybbkj.js";function I(){return e.jsx(k,{className:"icon-sm ml-1 text-token-text-tertiary"})}function C({workspaceId:i,Icon:s,label:r,feature:o,value:l,tooltip:a,disabled:d=!1}){const u=x(),m=j(),c=S(),{variables:f,mutate:g}=y({mutationFn:({feature:t,enabled:p})=>F.setWorkspaceBetaFeature(i,t,p),onSettled:()=>{c.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{m.danger(u.formatMessage(N.featureSettingsUpdateFailed))}});return e.jsxs(v,{className:"justify-start py-6",children:[e.jsx(M,{label:"",disabled:d,enabled:f?.enabled??l,onChange:t=>{g({feature:o,enabled:t})}}),e.jsxs("p",{className:"text-md inline-flex items-center",children:[s&&e.jsx(s,{className:"icon-md mr-2"}),e.jsx(n,{...r}),a&&e.jsx(h,{sideOffset:4,interactive:!0,delayDuration:0,label:e.jsx(n,{...a}),side:"top",children:e.jsx(I,{})})]})]})}const N=b({featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"}});export{C as B,I as S};
//# sourceMappingURL=cawa998pdffnc5wq.js.map