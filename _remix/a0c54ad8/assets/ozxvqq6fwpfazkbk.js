import{j as e,J as S,K as y,m as F,o as b,O as M,ar as I,ao as n,ax as h,I as k}from"./g96yqlzu8qctmxup.js";import{c as v}from"./blm69jdcvj6igj3e.js";import{bi as N}from"./lciey5sok1ead3qa.js";import{A as T}from"./j4bhave6oa5and86.js";function q(){return e.jsx(v,{className:"icon-sm ml-1 text-token-text-tertiary"})}function U({workspaceId:i,Icon:s,label:r,feature:o,value:l,tooltip:a,hasPadding:u=!0,className:d,disabled:m=!1}){const c=S(),f=y(),g=F(),{variables:x,mutate:p}=b({mutationFn:({feature:t,enabled:j})=>M.setWorkspaceBetaFeature(i,t,j),onSettled:()=>{g.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{f.danger(c.formatMessage(w.featureSettingsUpdateFailed))}});return e.jsxs(T,{className:I(`justify-start ${u?"py-6":"py-0"}`,d),children:[e.jsx(N,{label:"",disabled:m,enabled:x?.enabled??l,onChange:t=>{p({feature:o,enabled:t})}}),e.jsxs("p",{className:"text-md inline-flex items-center",children:[s&&e.jsx(s,{className:"icon-md mr-2"}),e.jsx(n,{...r}),a&&e.jsx(h,{sideOffset:4,interactive:!0,delayDuration:0,label:e.jsx(n,{...a}),side:"top",children:e.jsx(q,{})})]})]})}const w=k({featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"}});export{U as B,q as S};
//# sourceMappingURL=ozxvqq6fwpfazkbk.js.map