import{ar as C,r as l,j as e,aB as t,aq as g,I as j}from"./mu20ogmmsnkt4j0x.js";import{bj as y}from"./iidp53rspda4k6vq.js";import{ag as M,q as h}from"./mcvowvvxr8nxyv49.js";const u=j({copy:{id:"CopyButton.copy",defaultMessage:"Copy"},copied:{id:"CopyButton.copied",defaultMessage:"Copied!"}});function k({buttonText:a,shouldChangeText:m=!0,iconClassName:i="icon-sm",onCopy:p,className:n}){const[o,d]=l.useState(!1),r=y(),x=l.useCallback(c=>{c.stopPropagation(),p(c),d(!0),setTimeout(()=>{r()&&d(!1)},2e3)},[r,p]);let s=a;return m&&o?s=e.jsx(t,{...u.copied}):a===!0&&(s=e.jsx(t,{...u.copy})),e.jsxs(e.Fragment,{children:[!o&&e.jsx(g,{label:e.jsx(t,{id:"CopyButton.copyTooltip",defaultMessage:"Copy"}),sideOffset:0,children:e.jsxs(f,{onClick:x,className:n,children:[e.jsx(M,{className:i}),s]})}),o&&e.jsxs(f,{className:n,children:[e.jsx(h,{className:i}),s]})]})}const f=C.button`flex gap-1 items-center select-none`;export{k as C};
//# sourceMappingURL=dw2a7r78m2uqwxd9.js.map