import{a1 as C,r as l,l as e,Z as t,a0 as y}from"./ce20vh2pwl1h2mrx.js";import{b_ as g,c as j}from"./izfif69im9lzk9q2.js";import{Y as M,G as h}from"./n3h96e4yqztse0yi.js";const u=y({copy:{id:"CopyButton.copy",defaultMessage:"Copy"},copied:{id:"CopyButton.copied",defaultMessage:"Copied!"}});function k({buttonText:a,shouldChangeText:m=!0,iconClassName:i="icon-sm",onCopy:p,className:d}){const[o,c]=l.useState(!1),n=g(),x=l.useCallback(r=>{r.stopPropagation(),p(r),c(!0),setTimeout(()=>{n()&&c(!1)},2e3)},[n,p]);let s=a;return m&&o?s=e.jsx(t,{...u.copied}):a===!0&&(s=e.jsx(t,{...u.copy})),e.jsxs(e.Fragment,{children:[!o&&e.jsx(j,{label:e.jsx(t,{id:"CopyButton.copyTooltip",defaultMessage:"Copy"}),sideOffset:0,children:e.jsxs(f,{onClick:x,className:d,children:[e.jsx(M,{className:i}),s]})}),o&&e.jsxs(f,{className:d,children:[e.jsx(h,{className:i}),s]})]})}const f=C.button`flex gap-1 items-center`;export{k as C};
//# sourceMappingURL=lzd85nrn7izic68h.js.map