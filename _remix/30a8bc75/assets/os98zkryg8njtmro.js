import{l as e,W as x,aK as j,u as S,e as y,j as F,a0 as n,a1 as b}from"./es28fsfv6yr4r7t0.js";import{bT as M,c as T}from"./knksm8jtt3et03lk.js";import{b as h}from"./fywton14jd85t5em.js";import{A as k}from"./lvauyt5sjvs7obro.js";function v(){return e.jsx(h,{className:"icon-sm ml-1 text-token-text-tertiary"})}function C({workspaceId:i,Icon:s,label:r,feature:o,value:l,tooltip:a,disabled:u=!1}){const d=x(),m=j(),c=S(),{variables:f,mutate:g}=y({mutationFn:({feature:t,enabled:p})=>F.setWorkspaceBetaFeature(i,t,p),onSettled:()=>{c.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{m.danger(d.formatMessage(I.featureSettingsUpdateFailed))}});return e.jsxs(k,{className:"justify-start py-6",children:[e.jsx(M,{label:"",disabled:u,enabled:f?.enabled??l,onChange:t=>{g({feature:o,enabled:t})}}),e.jsxs("p",{className:"text-md inline-flex items-center",children:[s&&e.jsx(s,{className:"icon-md mr-2"}),e.jsx(n,{...r}),a&&e.jsx(T,{sideOffset:4,interactive:!0,delayDuration:0,label:e.jsx(n,{...a}),side:"top",children:e.jsx(v,{})})]})]})}const I=b({featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"}});export{C as B,v as S};
//# sourceMappingURL=os98zkryg8njtmro.js.map