import{d_ as p,Z as h,j as A,r as e,eo as m}from"./bve7stqsvuyp30oy.js";import"./jza0wh4acfmo8aml.js";function C(){const s=p(),c=h(),o=A(),[a,d]=e.useState(!1),[u,f]=e.useState(!1),t=s.accountId;e.useEffect(()=>{let n=!1;if(t&&!a){const i=()=>{if(n)return;const{updatedAccount:l}=m(o,t);l?d(!0):setTimeout(i,100)};i()}return()=>{n=!0}},[t,a,o]);const r=!t||a;return e.useEffect(()=>{!u&&r&&(c(s.toPath,{replace:!0}),f(!0))},[u,r,s.toPath,c]),null}export{C as default};
//# sourceMappingURL=o9amkymmfixlnn5x.js.map