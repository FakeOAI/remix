const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sso-bjwip24cfpjix9zk.js","assets/m4jglq4xyu9yijkb.js","assets/gzoh6r3q6qh4zfpi.js","assets/root-pbd7dlk8.css","assets/gn2j41krkucmoxrw.js","assets/conversation-small-ict01xsi.css","assets/b5gltvjzlc9evdvr.js","assets/ivxou8kx91les96v.js","assets/kmpucbiylqzkcgdk.js","assets/hvyuw7c7sm6fsxp1.js","assets/cqg3kpt9u375ev86.js","assets/kvkl8s6f0yhultlt.js","assets/nfcpii4ruf57h2v7.js","assets/f67vlkxqkaizxb84.js","assets/g6ye7y81pgxisdwu.js","assets/dqjm1680k7gra62l.js","assets/dgo0si90cehyzn05.js","assets/ni1aur35vt1ognr7.js","assets/cmvt63typmf25g7l.js","assets/itghwucfyv5ciib7.js","assets/cpnurokmrif4jvf4.js","assets/j8onjfu8rlwqgfi9.js","assets/o6lsyabkaimv748i.js","assets/fzzrzbk67754qcoz.js","assets/983a0dy92b3ronpv.js","assets/jan1i7sl07z75xch.js","assets/kqwdyvkaaavvn8k3.js","assets/mwf3h82s20izathd.js","assets/o2y0xttfclkd5j2f.js","assets/czb87fgijscy30x5.js","assets/ln65c363x8kjlcfc.js","assets/e9lafxuzyeh4418f.js","assets/hbwpgc6wnn4y4l9j.js","assets/gbccwc5mokhhtuuu.js","assets/j5d8fg82inr2xuea.js","assets/eq1msp0np92105dr.js","assets/hq619fyulkvq5nui.js","assets/fmebmoasih3triij.js","assets/iej0cupg2dqkmejt.js","assets/fpzmjn2989fbpowk.js","assets/ex7dpyj8ps0k4e7z.js","assets/jk8w36bsokizpx57.js","assets/hjwaq2h3bscy0qwh.js","assets/ho3pyqxxknt5hoic.js"])))=>i.map(i=>d[i]);
import{w as C,aE as k,aG as E,Z as j,a6 as e,r as h,ar as d,aZ as T,c$ as w,aP as A,b7 as I,J as O,aw as R,cN as D,b8 as p,D as L}from"./m4jglq4xyu9yijkb.js";import{a_ as _,bt as G,r as P,bu as v,bv as U,aw as B,bw as M,bx as $,as as F,aI as H}from"./gzoh6r3q6qh4zfpi.js";import{iX as q,iY as V}from"./gn2j41krkucmoxrw.js";import{D as i}from"./ivxou8kx91les96v.js";import{a as u,D as Z}from"./f67vlkxqkaizxb84.js";import{U as g,d as o,b as z}from"./j8onjfu8rlwqgfi9.js";import{a as J,I as W}from"./ni1aur35vt1ognr7.js";const X="https://openai.com/index/searchgpt-prototype/";function N(){return C("2000076788")?.value}const Y=k(()=>E(()=>import("./sso-bjwip24cfpjix9zk.js").then(t=>t.A),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43])).then(t=>t.AvatarButtons)),l=i.Item;function K(){const t=u.useStore();return V()?e.jsx(l,{onClick:()=>{t.setState({shouldShowAddToHomePopover:!0})},icon:e.jsx(U,{className:"icon-md-heavy text-token-text-primary"}),children:"Add to home screen"}):null}function Q({className:t,iconSize:s,children:n}){const a=N(),r=j();return e.jsxs(i.Root,{modal:!1,children:[e.jsx(b,{className:t,iconSize:s,children:n}),e.jsx(i.Portal,{children:e.jsxs(i.Content,{collisionPadding:10,children:[e.jsx(l,{onClick:()=>g.toggleSettingsModalOpen(),icon:e.jsx(_,{className:"icon-md-heavy text-token-text-primary"}),children:"Settings"}),e.jsx(l,{onClick:()=>window.open(X,"_blank"),icon:e.jsx(G,{className:"icon-md-heavy text-token-text-primary"}),children:"About SearchGPT"}),e.jsx(l,{onClick:()=>window.open("https://chatgpt.com","_blank"),icon:e.jsx(P,{className:"icon-md-heavy text-token-text-primary"}),children:"Open ChatGPT"}),e.jsx(K,{}),e.jsx(i.Separator,{}),e.jsx(l,{onClick:()=>r("/auth/logout"),icon:e.jsx(v,{className:"icon-md-heavy text-token-text-primary"}),children:"Log out"}),a&&e.jsx(Y,{})]})})]})}function ee({className:t,iconSize:s}){const n=j();return e.jsxs(i.Root,{modal:!1,children:[e.jsx(b,{className:t,iconSize:s}),e.jsx(i.Portal,{children:e.jsx(i.Content,{collisionPadding:10,children:e.jsx(l,{onClick:()=>n("/auth/logout"),icon:e.jsx(v,{className:"icon-md-heavy text-token-text-primary"}),children:"Log out"})})})]})}function b({className:t,iconSize:s,children:n}){return e.jsx(i.Trigger,{className:"group border-0 !bg-transparent p-0",children:e.jsx("div",{className:"rounded-full",children:n??e.jsx(q,{iconSize:s,className:t})})})}const te={[o.ReadyState.CONNECTING]:"Connecting",[o.ReadyState.OPEN]:"Open",[o.ReadyState.CLOSING]:"Closing",[o.ReadyState.CLOSED]:"Closed",[o.ReadyState.UNINSTANTIATED]:"Uninstantiated"};function se({readyState:t,className:s}){const[n,a]=h.useState(!0);return h.useEffect(()=>{setTimeout(()=>{a(!0)},1e3)},[]),t===o.ReadyState.OPEN||!n?null:e.jsx("div",{className:d("flex items-center gap-2 p-3 text-sm",s),children:e.jsx(T,{label:te[t],sideOffset:0,side:"right",children:e.jsx("div",{className:d("h-2 w-2 rounded-full",(t===o.ReadyState.CLOSING||t===o.ReadyState.CONNECTING)&&"bg-yellow-500",(t===o.ReadyState.CLOSED||t===o.ReadyState.UNINSTANTIATED)&&"bg-red-500",n?"block":"hidden")})})})}function m({label:t,labelSide:s="right",className:n,onClick:a,children:r,...c}){return e.jsx(w,{label:t,sideOffset:0,side:s,disabled:!t,children:e.jsx("button",{onClick:a,className:d("flex items-center justify-center p-1.5 text-token-text-tertiary hover:text-token-text-primary",n),...c,children:r})})}function f(t,s){return Object.keys(t).reduce((n,a)=>(O(t[a],s[a])||(n[a]=s[a]),n),{})}function ne(){const{setTheme:t,resolvedTheme:s}=A(),n=u.useState(u.selectAgentSettingsOverrides),[a]=J(),r=f(Z,n),c=f(W,a),S={...r,...c},x=Object.keys(S).length>0;return e.jsxs(e.Fragment,{children:[e.jsx(m,{"data-testid":"sonic-debug-button",label:"Debug (Internal)",onClick:()=>g.toggleDebugModalOpen(),children:e.jsx(B,{className:"icon-sm-heavy"})}),e.jsx(m,{label:"Theme (Internal)",onClick:()=>{t(s==="dark"?"light":"dark")},children:e.jsxs(I,{children:[s==="dark"&&e.jsx(M,{className:"icon-md-heavy"}),s==="light"&&e.jsx($,{className:"icon-md-heavy"})]})}),e.jsx(m,{label:x?["Config (Internal) - Changes:",Object.keys(S).join(", ")].join(`
`):"Config (Internal)",onClick:()=>g.toggleInternalSettingsModalOpen(),children:e.jsx(F,{className:d(x?"icon-lg-heavy":"icon-md-heavy",{"text-red-500":x})})})]})}function ae({hideReadyState:t=!1,onResultsPage:s=!1,children:n}){const{readyState:a,resetSearch:r}=z(),c=N();return e.jsxs("div",{className:d("hidden w-20 shrink-0 flex-col items-center justify-between border-r py-6 sm:flex",s?"relative border-token-border-light":"absolute bottom-0 left-0 top-0 border-transparent"),children:[e.jsxs(D,{onClick:()=>r(),to:"/search",className:"text-token-text-primary hover:text-token-text-secondary",title:"Go to SearchGPT",children:[e.jsx(p,{className:"h-8 w-8"}),c&&!t&&e.jsx(se,{readyState:a})]}),c&&e.jsx("div",{className:"flex flex-col items-center gap-2",children:e.jsx(ne,{})}),e.jsx("div",{className:"absolute top-1/2 -translate-y-1/2",children:n})]})}function oe(){return e.jsx("div",{className:"absolute right-5 top-5 hidden sm:block",children:e.jsx(Q,{className:"h-8 w-8"})})}function ge(){return e.jsx(y,{$side:"left",children:e.jsx(p,{className:"h-8 w-8"})})}function Se({className:t}){return e.jsx(y,{$side:"right",className:`${t}`,children:e.jsx(ee,{className:"h-8 w-8"})})}const y=R.div`absolute ${t=>t.$side==="left"?"left-5":"right-5"} bottom-5 top-5 z-10 w-10 flex-col justify-between items-center hidden sm:flex`;function ie({children:t}){return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsxs("div",{className:"flex flex-col items-center gap-1 text-sm font-semibold text-token-text-tertiary",children:[e.jsx(H,{className:"icon-2xl"}),t]})})}function re({onClickRetry:t,children:s}){return e.jsxs(ie,{children:[e.jsxs("div",{children:["Error."," ",e.jsx("button",{onClick:t,className:"inline font-semibold text-token-text-primary hover:opacity-70",children:"Try again?"})]}),s]})}function fe({resetError:t,componentStack:s,error:n}){return h.useEffect(()=>{L.addError(n)},[n]),e.jsxs(re,{onClickRetry:t,children:[e.jsx("div",{className:"fixed left-2 top-2",children:e.jsx(ae,{})}),e.jsx("div",{className:"fixed right-2 top-2",children:e.jsx(oe,{})}),!1]})}export{Q as A,re as D,ie as E,fe as G,ge as L,oe as R,X as S,Se as a,ae as b,N as u};
//# sourceMappingURL=orkq8ko8p7h875xn.js.map