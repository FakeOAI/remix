import{ar as C,r as l,j as e,aB as t,aq as g,I as y}from"./dwbtt4oxebq3shuk.js";import{aM as j}from"./lx77lh9ohr6roqdc.js";import{ag as M,r as h}from"./dskg6kk1cd2zdyzo.js";const u=y({copy:{id:"CopyButton.copy",defaultMessage:"Copy"},copied:{id:"CopyButton.copied",defaultMessage:"Copied!"}});function k({buttonText:a,shouldChangeText:m=!0,iconClassName:i="icon-sm",onCopy:p,className:n}){const[o,r]=l.useState(!1),d=j(),x=l.useCallback(c=>{c.stopPropagation(),p(c),r(!0),setTimeout(()=>{d()&&r(!1)},2e3)},[d,p]);let s=a;return m&&o?s=e.jsx(t,{...u.copied}):a===!0&&(s=e.jsx(t,{...u.copy})),e.jsxs(e.Fragment,{children:[!o&&e.jsx(g,{label:e.jsx(t,{id:"CopyButton.copyTooltip",defaultMessage:"Copy"}),sideOffset:0,children:e.jsxs(f,{onClick:x,className:n,children:[e.jsx(M,{className:i}),s]})}),o&&e.jsxs(f,{className:n,children:[e.jsx(h,{className:i}),s]})]})}const f=C.button`flex gap-1 items-center select-none`;export{k as C};
//# sourceMappingURL=o7cy7ark1pzkeqyv.js.map