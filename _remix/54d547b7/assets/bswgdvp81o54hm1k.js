import{dp as p,bn as h,a as A,r as e,dR as R}from"./j2za2a5bh01bf12l.js";import"./jwd9u48bpcglqn07.js";function C(){const a=p(),c=h(),u=A(),[s,d]=e.useState(!1),[o,f]=e.useState(!1),t=a.accountId;e.useEffect(()=>{let n=!1;if(t&&!s){const i=()=>{if(n)return;const{updatedAccount:l}=R(u,t);l?d(!0):setTimeout(i,100)};i()}return()=>{n=!0}},[t,s,u]);const r=!t||s;return e.useEffect(()=>{!o&&r&&(c(a.toPath,{replace:!0}),f(!0))},[o,r,a.toPath,c]),null}export{C as default};
//# sourceMappingURL=bswgdvp81o54hm1k.js.map