import{m as e,a1 as x,aK as j,u as S,e as y,Z as F,a5 as i,a6 as M}from"./eljox9y9liclbxjs.js";import{b3 as b,T}from"./q02ioa5nz1msdn73.js";import{b as h}from"./mov0dqfy71k4mkbp.js";import{A as k}from"./j8yh4twfiyw5in6h.js";function I(){return e.jsx(h,{className:"icon-sm ml-1 text-token-text-tertiary"})}function R({workspaceId:r,Icon:a,label:o,feature:l,value:u,tooltip:n,disabled:d=!1}){const m=x(),c=j(),f=S(),{variables:t,mutate:g}=y({mutationFn:({feature:s,enabled:p})=>F.setWorkspaceBetaFeature(r,s,p),onSettled:()=>{f.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{c.danger(m.formatMessage(N.featureSettingsUpdateFailed))}});return e.jsxs(k,{className:"justify-start py-6",children:[e.jsx(b,{label:"",disabled:d,enabled:(t==null?void 0:t.enabled)??u,onChange:s=>{g({feature:l,enabled:s})}}),e.jsxs("p",{className:"text-md inline-flex items-center",children:[a&&e.jsx(a,{className:"icon-md mr-2"}),e.jsx(i,{...o}),n&&e.jsx(T,{sideOffset:4,interactive:!0,delayDuration:0,label:e.jsx(i,{...n}),side:"top",children:e.jsx(I,{})})]})]})}const N=M({featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"}});export{R as B,I as S};
//# sourceMappingURL=cvfo44jbr3gdc82w.js.map