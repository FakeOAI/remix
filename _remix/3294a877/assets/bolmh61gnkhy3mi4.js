import{aw as C,r as l,j as e,aG as t,aY as y,X as g}from"./e2gys00277jk3j4m.js";import{bk as j}from"./g620wqgic7gc7jni.js";import{ah as M,E as h}from"./bfszm5z7s58noy3i.js";const u=g({copy:{id:"CopyButton.copy",defaultMessage:"Copy"},copied:{id:"CopyButton.copied",defaultMessage:"Copied!"}});function S({buttonText:a,shouldChangeText:m=!0,iconClassName:i="icon-sm",onCopy:p,className:n}){const[o,d]=l.useState(!1),c=j(),x=l.useCallback(r=>{r.stopPropagation(),p(r),d(!0),setTimeout(()=>{c()&&d(!1)},2e3)},[c,p]);let s=a;return m&&o?s=e.jsx(t,{...u.copied}):a===!0&&(s=e.jsx(t,{...u.copy})),e.jsxs(e.Fragment,{children:[!o&&e.jsx(y,{label:e.jsx(t,{id:"CopyButton.copyTooltip",defaultMessage:"Copy"}),sideOffset:0,children:e.jsxs(f,{onClick:x,className:n,children:[e.jsx(M,{className:i}),s]})}),o&&e.jsxs(f,{className:n,children:[e.jsx(h,{className:i}),s]})]})}const f=C.button`flex gap-1 items-center select-none`;export{S as C};
//# sourceMappingURL=bolmh61gnkhy3mi4.js.map