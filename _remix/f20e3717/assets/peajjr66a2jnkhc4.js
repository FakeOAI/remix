import{be as b,r as a,a$ as A,y as t,aA as l,ae as r,a1 as P}from"./c18i0pp13au3y7ic.js";import{A as S,a as p,b as h}from"./f1ovjpbluphg54th.js";import{a2 as L,a3 as w}from"./g4twu77u2twhehgk.js";import"./haiie99g2z7r06p2.js";import"./a6yq7dxv0hbp7yf9.js";import"./d6pd9vw7xwm0s8og.js";import"./oebbfh7ymqr9h0bg.js";import"./ipokt9i7zjv6h6xg.js";import"./l72gguc1sdhtezl5.js";const n=P({primaryButton:{id:"OpenInDesktopApp.launchButton",defaultMessage:"Launch ChatGPT desktop app"},secondaryButton:{id:"OpenInDesktopApp.secondaryButton",defaultMessage:"Not launching? Click here instead."},oops:{id:"AuthError.oops",defaultMessage:"Oops!"},goBack:{id:"AuthError.goBack",defaultMessage:"Go back"}});function $(){const m=b(),[e,g]=a.useState(),[x,f]=a.useState(!1),[k,j]=a.useState(!1),[s]=A(),c=a.useCallback(()=>{e!==void 0&&(window.location.href=e)},[e]);a.useEffect(()=>{let o=s.get("path");const d=s.get("code"),u=s.get("state"),C=s.get("scheme")??L;if(!o||!d||!u)return;o.startsWith("/")||(o="/"+o);const i=new URL(`${C}://${w}${o}`);i.searchParams.set("code",d),i.searchParams.set("state",u);const y=i.toString();g(y),f(!0),c(),setTimeout(()=>{j(!0)},3e3)},[c,s]);const B=()=>{e&&navigator.clipboard.writeText(e)};return t.jsx(t.Fragment,{children:x?t.jsx(S,{isStorageComplianceEnabled:!1,children:e?t.jsxs(p,{children:[t.jsx(h,{}),t.jsx(l,{as:"button",color:"secondary",onClick:c,children:t.jsx(r,{...n.primaryButton})}),t.jsx("div",{className:"mt-2 h-4 text-center text-xs text-token-text-tertiary",children:k&&t.jsx(l,{as:"button",color:"ghost",onClick:B,children:t.jsx(r,{...n.secondaryButton})})})]}):t.jsxs(p,{children:[t.jsx(h,{}),t.jsx("div",{className:"mb-2 text-center text-lg",children:t.jsx(r,{...n.oops})}),t.jsx(l,{as:"button",color:"secondary",onClick:()=>m("/auth/login",{replace:!0}),children:t.jsx(r,{...n.goBack})})]})}):null})}export{$ as default};
//# sourceMappingURL=peajjr66a2jnkhc4.js.map