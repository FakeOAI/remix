import{l as e,X as x,aK as j,a as S,h as y,j as F,$ as n,a0 as b}from"./j51q469vqqyswwq0.js";import{bG as M,c as h}from"./obfv3y06hphbdxag.js";import{b as k}from"./nakmlpxnz8km92cm.js";import{A as v}from"./b774ya183ph4vo78.js";function I(){return e.jsx(k,{className:"icon-sm ml-1 text-token-text-tertiary"})}function C({workspaceId:i,Icon:s,label:r,feature:o,value:l,tooltip:a,disabled:u=!1}){const d=x(),m=j(),c=S(),{variables:f,mutate:g}=y({mutationFn:({feature:t,enabled:p})=>F.setWorkspaceBetaFeature(i,t,p),onSettled:()=>{c.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{m.danger(d.formatMessage(N.featureSettingsUpdateFailed))}});return e.jsxs(v,{className:"justify-start py-6",children:[e.jsx(M,{label:"",disabled:u,enabled:f?.enabled??l,onChange:t=>{g({feature:o,enabled:t})}}),e.jsxs("p",{className:"text-md inline-flex items-center",children:[s&&e.jsx(s,{className:"icon-md mr-2"}),e.jsx(n,{...r}),a&&e.jsx(h,{sideOffset:4,interactive:!0,delayDuration:0,label:e.jsx(n,{...a}),side:"top",children:e.jsx(I,{})})]})]})}const N=b({featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"}});export{C as B,I as S};
//# sourceMappingURL=mn72nwil4naears8.js.map