import{a3 as b,r as o,a4 as P,j as t,aR as l,aw as n,X as A}from"./gblfh15g18zr7pwb.js";import{A as S,a as h,b as p}from"./ifwskpsg62qkaowx.js";import{a3 as w,a4 as L}from"./excramzz6zmdjrf7.js";import"./fxihrcxhyf7cscoy.js";const r=A({primaryButton:{id:"OpenInDesktopApp.launchButton",defaultMessage:"Launch ChatGPT desktop app"},secondaryButton:{id:"OpenInDesktopApp.secondaryButton",defaultMessage:"Not launching? Click here instead."},oops:{id:"AuthError.oops",defaultMessage:"Oops!"},goBack:{id:"AuthError.goBack",defaultMessage:"Go back"}});function R(){const g=b(),[e,m]=o.useState(),[x,f]=o.useState(!1),[k,j]=o.useState(!1),[s]=P(),c=o.useCallback(()=>{e!==void 0&&(window.location.href=e)},[e]);o.useEffect(()=>{let a=s.get("path");const d=s.get("code"),u=s.get("state"),C=s.get("scheme")??w;if(!a||!d||!u)return;a.startsWith("/")||(a="/"+a);const i=new URL(`${C}://${L}${a}`);i.searchParams.set("code",d),i.searchParams.set("state",u);const y=i.toString();m(y),f(!0),c(),setTimeout(()=>{j(!0)},3e3)},[c,s]);const B=()=>{e&&navigator.clipboard.writeText(e)};return t.jsx(t.Fragment,{children:x?t.jsx(S,{isStorageComplianceEnabled:!1,children:e?t.jsxs(h,{children:[t.jsx(p,{}),t.jsx(l,{as:"button",color:"secondary",onClick:c,children:t.jsx(n,{...r.primaryButton})}),t.jsx("div",{className:"mt-2 h-4 text-center text-xs text-token-text-tertiary",children:k&&t.jsx(l,{as:"button",color:"ghost",onClick:B,children:t.jsx(n,{...r.secondaryButton})})})]}):t.jsxs(h,{children:[t.jsx(p,{}),t.jsx("div",{className:"mb-2 text-center text-lg",children:t.jsx(n,{...r.oops})}),t.jsx(l,{as:"button",color:"secondary",onClick:()=>g("/auth/login",{replace:!0}),children:t.jsx(n,{...r.goBack})})]})}):null})}export{R as default};
//# sourceMappingURL=o42ln1ziyy9thn3b.js.map