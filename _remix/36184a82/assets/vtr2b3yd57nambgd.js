import{ei as p,$ as h,m,r as e,eJ as A}from"./gqk04r9jqxgk1fuf.js";import"./olate5wy2a07kgm1.js";function C(){const s=p(),c=h(),u=m(),[a,d]=e.useState(!1),[o,f]=e.useState(!1),t=s.accountId;e.useEffect(()=>{let n=!1;if(t&&!a){const i=()=>{if(n)return;const{updatedAccount:l}=A(u,t);l?d(!0):setTimeout(i,100)};i()}return()=>{n=!0}},[t,a,u]);const r=!t||a;return e.useEffect(()=>{!o&&r&&(c(s.toPath,{replace:!0}),f(!0))},[o,r,s.toPath,c]),null}export{C as default};
//# sourceMappingURL=vtr2b3yd57nambgd.js.map