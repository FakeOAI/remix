import{j as e,H as p,E as x,F as j,R as S,a7 as F,K as i,N as y}from"./gdbo8e7dyfri4is1.js";import{aR as M,n as N}from"./lfqdgp7xsc2kl8bj.js";import{b as R}from"./hx4nuyiea8nyedix.js";import{A as b}from"./o9mxa8ut0x65y74x.js";function h(){return e.jsx(R,{className:"icon-sm ml-1 text-token-text-tertiary"})}function C({workspaceId:r,Icon:a,label:o,feature:l,value:d,tooltip:n,disabled:u=!1}){const m=p(),c=x(),{variables:t,mutate:f}=j({mutationFn:({feature:s,enabled:g})=>S.setWorkspaceBetaFeature(r,s,g),onSettled:()=>{c.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{F.danger(m.formatMessage(k.featureSettingsUpdateFailed))}});return e.jsxs(b,{className:"justify-start py-6",children:[e.jsx(M,{label:"",disabled:u,enabled:(t==null?void 0:t.enabled)??d,onChange:s=>{f({feature:l,enabled:s})}}),e.jsxs("p",{className:"text-md inline-flex items-center",children:[a&&e.jsx(a,{className:"icon-md mr-2"}),e.jsx(i,{...o}),n&&e.jsx(N,{sideOffset:4,interactive:!0,delayDuration:0,label:e.jsx(i,{...n}),side:"top",children:e.jsx(h,{})})]})]})}const k=y({featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"}});export{C as B,h as S};
//# sourceMappingURL=k399igm6f7gsaysi.js.map