import{x as e,Y as S,aa as y,u as F,h as b,W as M,O as h,a2 as n,ao as k,a7 as v}from"./jipkz7wahhvzzuqx.js";import{a as C}from"./n5nz8vnsxibd6bik.js";import{bC as I}from"./e6zhtx99a7i1g9zc.js";import{A as N}from"./dqq1dv0pim4r0qm4.js";function T(){return e.jsx(C,{className:"icon-sm ml-1 text-token-text-tertiary"})}function U({workspaceId:i,Icon:s,label:r,feature:o,value:l,tooltip:a,hasPadding:u=!0,className:d,disabled:m=!1}){const c=S(),f=y(),g=F(),{variables:x,mutate:p}=b({mutationFn:({feature:t,enabled:j})=>M.setWorkspaceBetaFeature(i,t,j),onSettled:()=>{g.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{f.danger(c.formatMessage(q.featureSettingsUpdateFailed))}});return e.jsxs(N,{className:h(`justify-start ${u?"py-6":"py-0"}`,d),children:[e.jsx(I,{label:"",disabled:m,enabled:x?.enabled??l,onChange:t=>{p({feature:o,enabled:t})}}),e.jsxs("p",{className:"text-md inline-flex items-center",children:[s&&e.jsx(s,{className:"icon-md mr-2"}),e.jsx(n,{...r}),a&&e.jsx(k,{sideOffset:4,interactive:!0,delayDuration:0,label:e.jsx(n,{...a}),side:"top",children:e.jsx(T,{})})]})]})}const q=v({featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"}});export{U as B,T as S};
//# sourceMappingURL=d26pe7rzrasyy3tz.js.map