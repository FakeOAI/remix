import{be as y,r as a,a$ as A,y as t,aA as l,ae as r,a1 as P}from"./b75w2kxjgzazjxw6.js";import{A as S,a as p,b as h}from"./ipvwhx2svrrcbhci.js";import{ab as L,ac as w}from"./d49gc0vs991bd5hw.js";import"./d9rj50fkuog8a2dx.js";import"./jg0a70ig11n05oc2.js";import"./khpj3fhwc1ujxt07.js";import"./l3t5j1v6ohfi6mj0.js";import"./hv0th18lgha96dw2.js";import"./fwafa1jjc84yhlto.js";const n=P({primaryButton:{id:"OpenInDesktopApp.launchButton",defaultMessage:"Launch ChatGPT desktop app"},secondaryButton:{id:"OpenInDesktopApp.secondaryButton",defaultMessage:"Not launching? Click here instead."},oops:{id:"AuthError.oops",defaultMessage:"Oops!"},goBack:{id:"AuthError.goBack",defaultMessage:"Go back"}});function $(){const m=y(),[e,g]=a.useState(),[x,f]=a.useState(!1),[k,j]=a.useState(!1),[s]=A(),c=a.useCallback(()=>{e!==void 0&&(window.location.href=e)},[e]);a.useEffect(()=>{let o=s.get("path");const d=s.get("code"),u=s.get("state"),C=s.get("scheme")??L;if(!o||!d||!u)return;o.startsWith("/")||(o="/"+o);const i=new URL(`${C}://${w}${o}`);i.searchParams.set("code",d),i.searchParams.set("state",u);const b=i.toString();g(b),f(!0),c(),setTimeout(()=>{j(!0)},3e3)},[c,s]);const B=()=>{e&&navigator.clipboard.writeText(e)};return t.jsx(t.Fragment,{children:x?t.jsx(S,{isStorageComplianceEnabled:!1,children:e?t.jsxs(p,{children:[t.jsx(h,{}),t.jsx(l,{as:"button",color:"secondary",onClick:c,children:t.jsx(r,{...n.primaryButton})}),t.jsx("div",{className:"mt-2 h-4 text-center text-xs text-token-text-tertiary",children:k&&t.jsx(l,{as:"button",color:"ghost",onClick:B,children:t.jsx(r,{...n.secondaryButton})})})]}):t.jsxs(p,{children:[t.jsx(h,{}),t.jsx("div",{className:"mb-2 text-center text-lg",children:t.jsx(r,{...n.oops})}),t.jsx(l,{as:"button",color:"secondary",onClick:()=>m("/auth/login",{replace:!0}),children:t.jsx(r,{...n.goBack})})]})}):null})}export{$ as default};
//# sourceMappingURL=fspei1h0mbzxzkes.js.map