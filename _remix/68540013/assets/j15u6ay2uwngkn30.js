import{j as e,H as p,E as x,F as j,R as S,a7 as F,K as i,N as y}from"./jmev784jhg5gl93h.js";import{bz as M,n as b}from"./hdt4ueyxfrljz6pb.js";import{b as N}from"./ft992wxwyhplmlso.js";import{A as h}from"./gw0cv3j20nyfikmw.js";function k(){return e.jsx(N,{className:"icon-sm ml-1 text-token-text-tertiary"})}function C({workspaceId:r,Icon:a,label:o,feature:l,value:d,tooltip:n,disabled:u=!1}){const m=p(),c=x(),{variables:t,mutate:f}=j({mutationFn:({feature:s,enabled:g})=>S.setWorkspaceBetaFeature(r,s,g),onSettled:()=>{c.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{F.danger(m.formatMessage(I.featureSettingsUpdateFailed))}});return e.jsxs(h,{className:"justify-start py-6",children:[e.jsx(M,{label:"",disabled:u,enabled:(t==null?void 0:t.enabled)??d,onChange:s=>{f({feature:l,enabled:s})}}),e.jsxs("p",{className:"text-md inline-flex items-center",children:[a&&e.jsx(a,{className:"icon-md mr-2"}),e.jsx(i,{...o}),n&&e.jsx(b,{sideOffset:4,interactive:!0,delayDuration:0,label:e.jsx(i,{...n}),side:"top",children:e.jsx(k,{})})]})]})}const I=y({featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"}});export{C as B,k as S};
//# sourceMappingURL=j15u6ay2uwngkn30.js.map