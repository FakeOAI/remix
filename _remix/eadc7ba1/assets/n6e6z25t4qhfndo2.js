import{j as e,G as p,B as x,D as j,F as S,a5 as F,J as i,K as y}from"./flp62uidktb7m1ug.js";import{bq as M,j as b}from"./gvolk5s4399xa3cv.js";import{E as h}from"./nvhnd25cbof9n9il.js";import{A as k}from"./ba01e3eh8ol1tjl6.js";function q(){return e.jsx(h,{className:"icon-sm ml-1 text-token-text-tertiary"})}function E({workspaceId:r,Icon:a,label:o,feature:l,value:d,tooltip:n,disabled:u=!1}){const m=p(),c=x(),{variables:t,mutate:f}=j({mutationFn:({feature:s,enabled:g})=>S.setWorkspaceBetaFeature(r,s,g),onSettled:()=>{c.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{F.danger(m.formatMessage(B.featureSettingsUpdateFailed))}});return e.jsxs(k,{className:"justify-start py-6",children:[e.jsx(M,{label:"",disabled:u,enabled:(t==null?void 0:t.enabled)??d,onChange:s=>{f({feature:l,enabled:s})}}),e.jsxs("p",{className:"text-md inline-flex items-center",children:[a&&e.jsx(a,{className:"icon-md mr-2"}),e.jsx(i,{...o}),n&&e.jsx(b,{sideOffset:4,interactive:!0,delayDuration:0,label:e.jsx(i,{...n}),side:"top",children:e.jsx(q,{})})]})]})}const B=y({featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"}});export{E as B,q as S};
//# sourceMappingURL=n6e6z25t4qhfndo2.js.map