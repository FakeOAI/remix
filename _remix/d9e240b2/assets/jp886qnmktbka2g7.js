import{bH as y,r as a,bj as P,l as t,be as l,a0 as n,a1 as A}from"./dox08siw8jpmvomc.js";import{A as S,a as p,b as h}from"./i6v7xh4txqoom62t.js";import"./fqwcm8tlxlxeznk9.js";import"./fc5wvqf6bpwfisto.js";import"./g77py3egqoj5m045.js";import"./jsdkerkdejse6xvb.js";import"./mo5vwcgxj3k03z2d.js";const L="chatgpt",w="oauth_complete",r=A({primaryButton:{id:"OpenInDesktopApp.launchButton",defaultMessage:"Launch ChatGPT desktop app"},secondaryButton:{id:"OpenInDesktopApp.secondaryButton",defaultMessage:"Not launching? Click here instead."},oops:{id:"AuthError.oops",defaultMessage:"Oops!"},goBack:{id:"AuthError.goBack",defaultMessage:"Go back"}});function T(){const g=y(),[e,m]=a.useState(),[x,k]=a.useState(!1),[f,j]=a.useState(!1),[s]=P(),c=a.useCallback(()=>{e!==void 0&&(window.location.href=e)},[e]);a.useEffect(()=>{let o=s.get("path");const u=s.get("code"),d=s.get("state"),B=s.get("scheme")??L;if(!o||!u||!d)return;o.startsWith("/")||(o="/"+o);const i=new URL(`${B}://${w}${o}`);i.searchParams.set("code",u),i.searchParams.set("state",d);const C=i.toString();m(C),k(!0),c(),setTimeout(()=>{j(!0)},3e3)},[c,s]);const b=()=>{e&&navigator.clipboard.writeText(e)};return t.jsx(t.Fragment,{children:x?t.jsx(S,{isStorageComplianceEnabled:!1,children:e?t.jsxs(p,{children:[t.jsx(h,{}),t.jsx(l,{as:"button",color:"secondary",onClick:c,children:t.jsx(n,{...r.primaryButton})}),t.jsx("div",{className:"mt-2 h-4 text-center text-xs text-token-text-tertiary",children:f&&t.jsx(l,{as:"button",color:"ghost",onClick:b,children:t.jsx(n,{...r.secondaryButton})})})]}):t.jsxs(p,{children:[t.jsx(h,{}),t.jsx("div",{className:"mb-2 text-center text-lg",children:t.jsx(n,{...r.oops})}),t.jsx(l,{as:"button",color:"secondary",onClick:()=>g("/auth/login",{replace:!0}),children:t.jsx(n,{...r.goBack})})]})}):null})}export{T as default};
//# sourceMappingURL=jp886qnmktbka2g7.js.map