import{X as C,r as a,j as t,bg as u,K as r,N as b}from"./ipnfovpzfewxgzg3.js";import{A,a as p,b as h}from"./l9f5hmtd68xk0o0y.js";import"./mmcqi5fu0b3qaeam.js";import"./ewwu24rqftk2ujih.js";import"./ej408pdx458tsy3t.js";import"./ehatbj8iwbpf4wh7.js";import"./o9fw4ao9md6zve03.js";const L="chatgpt",P="oauth_complete",n=b({primaryButton:{id:"OpenInDesktopApp.launchButton",defaultMessage:"Launch ChatGPT desktop app"},secondaryButton:{id:"OpenInDesktopApp.secondaryButton",defaultMessage:"Not launching? Click here instead."},oops:{id:"AuthError.oops",defaultMessage:"Oops!"},goBack:{id:"AuthError.goBack",defaultMessage:"Go back"}});function v(){const e=C(),[s,m]=a.useState(),[x,g]=a.useState(!1),[k,f]=a.useState(!1),c=a.useCallback(()=>{s!==void 0&&(window.location.href=s)},[s]);a.useEffect(()=>{let o=e.query.path;const l=e.query.code,d=e.query.state,y=e.query.scheme??L;if(!o||!l||!d)return;o.startsWith("/")||(o="/"+o);const i=new URL(`${y}://${P}${o}`);i.searchParams.set("code",l),i.searchParams.set("state",d);const B=i.toString();m(B),g(!0),c(),setTimeout(()=>{f(!0)},3e3)},[c,e]);const j=()=>{s&&navigator.clipboard.writeText(s)};return t.jsx(t.Fragment,{children:x?t.jsx(A,{isStorageComplianceEnabled:!1,children:s?t.jsxs(p,{children:[t.jsx(h,{}),t.jsx(u,{as:"button",color:"secondary",onClick:c,children:t.jsx(r,{...n.primaryButton})}),t.jsx("div",{className:"mt-2 h-4 text-center text-xs text-token-text-tertiary",children:k&&t.jsx(u,{as:"button",color:"ghost",onClick:j,children:t.jsx(r,{...n.secondaryButton})})})]}):t.jsxs(p,{children:[t.jsx(h,{}),t.jsx("div",{className:"mb-2 text-center text-lg",children:t.jsx(r,{...n.oops})}),t.jsx(u,{as:"button",color:"secondary",onClick:()=>e.replace("/auth/login"),children:t.jsx(r,{...n.goBack})})]})}):null})}export{v as default};
//# sourceMappingURL=l40a22vioq5poamz.js.map