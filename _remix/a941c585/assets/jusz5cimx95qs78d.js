import{fy as p,a3 as h,t as A,r as e,f_ as m}from"./nz9x58rcwaqc60b4.js";import"./ogd9t3e603yvziyi.js";function y(){const a=p(),c=h(),u=A(),[s,d]=e.useState(!1),[o,f]=e.useState(!1),t=a.accountId;e.useEffect(()=>{let n=!1;if(t&&!s){const i=()=>{if(n)return;const{updatedAccount:l}=m(u,t);l?d(!0):setTimeout(i,100)};i()}return()=>{n=!0}},[t,s,u]);const r=!t||s;return e.useEffect(()=>{!o&&r&&(c(a.toPath,{replace:!0}),f(!0))},[o,r,a.toPath,c]),null}export{y as default};
//# sourceMappingURL=jusz5cimx95qs78d.js.map