const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sso-efm61fckgo0kqyaf.js","assets/lj2b9v3ilohzzubf.js","assets/np8fo7dxv82gt6zv.js","assets/root-jo2ifv11.css","assets/crj0dmpqq8mv3ntq.js","assets/m2xe8hrs3fe8d0zo.js","assets/conversation-small-o3h1ik6j.css","assets/ftlpzyflvlw4vun3.js","assets/c4bxzbp1808foto4.js","assets/oeu2xp5bhn801ov0.js","assets/dxg92epnfykz3ak0.js","assets/cw3jb5qf0g3iapsl.js","assets/fnx51xc2tuy5qjh9.js","assets/evcz8wv16kyur3mm.js","assets/itghwucfyv5ciib7.js","assets/ccgem6t7l936xpmt.js","assets/ih9daw890a94om4n.js","assets/utt1v4s8vubsyl62.js","assets/j3m7mblm9oky51d5.js","assets/nv455f1273g8wcar.js","assets/b5vmhminnfygy5wt.js","assets/nuho9o392xhbz80e.js","assets/983a0dy92b3ronpv.js","assets/otlsz2b7ph0d84bq.js","assets/f756fg9pfg2n56pn.js","assets/d9vdcakeqav3xsi4.js","assets/kqwdyvkaaavvn8k3.js","assets/d7i7xmy31eeb8e80.js","assets/d7xd1qpirdp9fc9b.js","assets/nnss1zs72xc34og8.js","assets/jcdfkkc7iqnya4rn.js","assets/fzrn137102spawew.js","assets/e9lafxuzyeh4418f.js","assets/okjoaa5a857mns87.js","assets/hrk0tmbz7knydu0v.js","assets/f7aadd1e862ad84m.js","assets/kp5pdrigz3wqy4ys.js","assets/n0y77d66tghmqc6s.js","assets/l30wv3e9u4mghwbs.js","assets/lpssxu4zr5a0f91e.js","assets/g2tpotr3lhgcas9c.js","assets/iej0cupg2dqkmejt.js","assets/mlg2f29krveebm2t.js","assets/dktctc7f2lfkgdqj.js","assets/jk8w36bsokizpx57.js","assets/o08nmkcxb6lwuon7.js","assets/f8ixwjo0ebo0wqqe.js"])))=>i.map(i=>d[i]);
import{aA as C,ao as k,ap as T,W as f,j as e,aX as i,r as h,ak as d,aq as E,d7 as A,bD as I,aV as O,z as R,ar as w,cV as D,aW as p,D as L}from"./lj2b9v3ilohzzubf.js";import{b1 as _,bx as G,N as P,bq as v,by as U,aO as B,bz as M,bA as $,aj as q,aT as F}from"./np8fo7dxv82gt6zv.js";import{ib as H,jH as V}from"./m2xe8hrs3fe8d0zo.js";import{a as u,D as z}from"./crj0dmpqq8mv3ntq.js";import{U as g,d as o,b as W}from"./j3m7mblm9oky51d5.js";import{u as X,I as J}from"./fnx51xc2tuy5qjh9.js";const K="https://openai.com/index/searchgpt-prototype/";function N(){return C("2000076788")?.value}const Q=k(()=>T(()=>import("./sso-efm61fckgo0kqyaf.js").then(t=>t.A),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46])).then(t=>t.AvatarButtons)),l=i.Item;function Y(){const t=u.useStore();return V()?e.jsx(l,{onClick:()=>{t.setState({shouldShowAddToHomePopover:!0})},icon:e.jsx(U,{className:"icon-md-heavy text-token-text-primary"}),children:"Add to home screen"}):null}function Z({className:t,iconSize:s,children:n}){const a=N(),r=f();return e.jsxs(i.Root,{modal:!1,children:[e.jsx(b,{className:t,iconSize:s,children:n}),e.jsx(i.Portal,{children:e.jsxs(i.Content,{collisionPadding:10,children:[e.jsx(l,{onClick:()=>g.toggleSettingsModalOpen(),icon:e.jsx(_,{className:"icon-md-heavy text-token-text-primary"}),children:"Settings"}),e.jsx(l,{onClick:()=>window.open(K,"_blank"),icon:e.jsx(G,{className:"icon-md-heavy text-token-text-primary"}),children:"About SearchGPT"}),e.jsx(l,{onClick:()=>window.open("https://chatgpt.com","_blank"),icon:e.jsx(P,{className:"icon-md-heavy text-token-text-primary"}),children:"Open ChatGPT"}),e.jsx(Y,{}),e.jsx(i.Separator,{}),e.jsx(l,{onClick:()=>r("/auth/logout"),icon:e.jsx(v,{className:"icon-md-heavy text-token-text-primary"}),children:"Log out"}),a&&e.jsx(Q,{})]})})]})}function ee({className:t,iconSize:s}){const n=f();return e.jsxs(i.Root,{modal:!1,children:[e.jsx(b,{className:t,iconSize:s}),e.jsx(i.Portal,{children:e.jsx(i.Content,{collisionPadding:10,children:e.jsx(l,{onClick:()=>n("/auth/logout"),icon:e.jsx(v,{className:"icon-md-heavy text-token-text-primary"}),children:"Log out"})})})]})}function b({className:t,iconSize:s,children:n}){return e.jsx(i.Trigger,{className:"group border-0 !bg-transparent p-0",children:e.jsx("div",{className:"rounded-full",children:n??e.jsx(H,{iconSize:s,className:t})})})}const te={[o.ReadyState.CONNECTING]:"Connecting",[o.ReadyState.OPEN]:"Open",[o.ReadyState.CLOSING]:"Closing",[o.ReadyState.CLOSED]:"Closed",[o.ReadyState.UNINSTANTIATED]:"Uninstantiated"};function se({readyState:t,className:s}){const[n,a]=h.useState(!0);return h.useEffect(()=>{setTimeout(()=>{a(!0)},1e3)},[]),t===o.ReadyState.OPEN||!n?null:e.jsx("div",{className:d("flex items-center gap-2 p-3 text-sm",s),children:e.jsx(E,{label:te[t],sideOffset:0,side:"right",children:e.jsx("div",{className:d("h-2 w-2 rounded-full",(t===o.ReadyState.CLOSING||t===o.ReadyState.CONNECTING)&&"bg-yellow-500",(t===o.ReadyState.CLOSED||t===o.ReadyState.UNINSTANTIATED)&&"bg-red-500",n?"block":"hidden")})})})}function m({label:t,labelSide:s="right",className:n,onClick:a,children:r,...c}){return e.jsx(A,{label:t,sideOffset:0,side:s,disabled:!t,children:e.jsx("button",{onClick:a,className:d("flex items-center justify-center p-1.5 text-token-text-tertiary hover:text-token-text-primary",n),...c,children:r})})}function S(t,s){return Object.keys(t).reduce((n,a)=>(R(t[a],s[a])||(n[a]=s[a]),n),{})}function ne(){const{setTheme:t,resolvedTheme:s}=I(),n=u.useState(u.selectAgentSettingsOverrides),[a]=X(),r=S(z,n),c=S(J,a),j={...r,...c},x=Object.keys(j).length>0;return e.jsxs(e.Fragment,{children:[e.jsx(m,{"data-testid":"sonic-debug-button",label:"Debug (Internal)",onClick:()=>g.toggleDebugModalOpen(),children:e.jsx(B,{className:"icon-sm-heavy"})}),e.jsx(m,{label:"Theme (Internal)",onClick:()=>{t(s==="dark"?"light":"dark")},children:e.jsxs(O,{children:[s==="dark"&&e.jsx(M,{className:"icon-md-heavy"}),s==="light"&&e.jsx($,{className:"icon-md-heavy"})]})}),e.jsx(m,{label:x?["Config (Internal) - Changes:",Object.keys(j).join(", ")].join(`
`):"Config (Internal)",onClick:()=>g.toggleInternalSettingsModalOpen(),children:e.jsx(q,{className:d(x?"icon-lg-heavy":"icon-md-heavy",{"text-red-500":x})})})]})}function ae({hideReadyState:t=!1,onResultsPage:s=!1,children:n}){const{readyState:a,resetSearch:r}=W(),c=N();return e.jsxs("div",{className:d("hidden w-20 shrink-0 flex-col items-center justify-between border-r py-6 sm:flex",s?"relative border-token-border-light":"absolute bottom-0 left-0 top-0 border-transparent"),children:[e.jsxs(D,{onClick:()=>r(),to:"/search",className:"text-token-text-primary hover:text-token-text-secondary",title:"Go to SearchGPT",children:[e.jsx(p,{className:"h-8 w-8"}),c&&!t&&e.jsx(se,{readyState:a})]}),c&&e.jsx("div",{className:"flex flex-col items-center gap-2",children:e.jsx(ne,{})}),e.jsx("div",{className:"absolute top-1/2 -translate-y-1/2",children:n})]})}function oe(){return e.jsx("div",{className:"absolute right-5 top-5 hidden sm:block",children:e.jsx(Z,{className:"h-8 w-8"})})}function ue(){return e.jsx(y,{$side:"left",children:e.jsx(p,{className:"h-8 w-8"})})}function ge({className:t}){return e.jsx(y,{$side:"right",className:`${t}`,children:e.jsx(ee,{className:"h-8 w-8"})})}const y=w.div`absolute ${t=>t.$side==="left"?"left-5":"right-5"} bottom-5 top-5 z-10 w-10 flex-col justify-between items-center hidden sm:flex`;function ie({children:t}){return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsxs("div",{className:"flex flex-col items-center gap-1 text-sm font-semibold text-token-text-tertiary",children:[e.jsx(F,{className:"icon-2xl"}),t]})})}function re({onClickRetry:t,children:s}){return e.jsxs(ie,{children:[e.jsxs("div",{children:["Error."," ",e.jsx("button",{onClick:t,className:"inline font-semibold text-token-text-primary hover:opacity-70",children:"Try again?"})]}),s]})}function je({resetError:t,componentStack:s,error:n}){return h.useEffect(()=>{L.addError(n)},[n]),e.jsxs(re,{onClickRetry:t,children:[e.jsx("div",{className:"fixed left-2 top-2",children:e.jsx(ae,{})}),e.jsx("div",{className:"fixed right-2 top-2",children:e.jsx(oe,{})}),!1]})}export{Z as A,re as D,ie as E,je as G,ue as L,oe as R,K as S,ge as a,ae as b,N as u};
//# sourceMappingURL=mtwcxr7nsxjfi736.js.map