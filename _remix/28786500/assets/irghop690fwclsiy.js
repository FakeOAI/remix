import{dk as p,bE as h,a as A,r as e,dM as m}from"./fdeezme0a1kjg5dr.js";import"./l2x363deltqu16i4.js";function C(){const a=p(),c=h(),u=A(),[s,d]=e.useState(!1),[o,f]=e.useState(!1),t=a.accountId;e.useEffect(()=>{let n=!1;if(t&&!s){const i=()=>{if(n)return;const{updatedAccount:l}=m(u,t);l?d(!0):setTimeout(i,100)};i()}return()=>{n=!0}},[t,s,u]);const r=!t||s;return e.useEffect(()=>{!o&&r&&(c(a.toPath,{replace:!0}),f(!0))},[o,r,a.toPath,c]),null}export{C as default};
//# sourceMappingURL=irghop690fwclsiy.js.map