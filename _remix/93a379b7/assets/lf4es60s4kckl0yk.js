const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sso-l6maw02gfr61gxuy.js","assets/l3hptpare9m1mqfv.js","assets/km9gro7xi1t4gs2t.js","assets/root-pbd7dlk8.css","assets/c7sgref9mfwezh7s.js","assets/conversation-small-ict01xsi.css","assets/dpmpp4vjdzk6xdj4.js","assets/ds7myuf7nkx8b20x.js","assets/bkgevi7dwlpkqxzf.js","assets/ev3ca23urw2rf3h9.js","assets/i4jzjalmx9h3noc6.js","assets/mh08vel4sd7gl5e4.js","assets/o8pwa9djmd3woe3v.js","assets/lns5kq4ey1gyy1uu.js","assets/duyea5q9uhztwp3a.js","assets/m3u39f47qeyvq62d.js","assets/mht8s0gbxscgla4h.js","assets/bn8prp53be57kvrr.js","assets/nnbdhs3jm6w31w40.js","assets/itghwucfyv5ciib7.js","assets/hfnvhnx4tjyvep6z.js","assets/iun23drvqs0fpxk6.js","assets/n5kcz8n2w7jr63jr.js","assets/lvbcuxdmjki2cvij.js","assets/983a0dy92b3ronpv.js","assets/g1bu5c1ec5yxyg3p.js","assets/kqwdyvkaaavvn8k3.js","assets/ncl359hthn5v44i3.js","assets/ng2uc9w22y62gn06.js","assets/okp41zh4bsuygyd2.js","assets/i6qz7v651vjjrezh.js","assets/e9lafxuzyeh4418f.js","assets/g17ny8y1cqtvxzoo.js","assets/ee918rv19yl7fa6v.js","assets/not8qb855y7h2g0l.js","assets/ngbip2m6jkxbcxc8.js","assets/gde52p7rbqlsz28z.js","assets/dblqglbuigwu0tuc.js","assets/iej0cupg2dqkmejt.js","assets/n6f2h57crrqbwq7s.js","assets/dlgj6pr5esd4jcw4.js","assets/jk8w36bsokizpx57.js","assets/ighnjpo7t7h4h60s.js","assets/0odnh5vt1ryeof4u.js"])))=>i.map(i=>d[i]);
import{w as C,aE as k,aG as E,Z as j,a6 as e,r as h,ar as d,aZ as T,c$ as w,aP as A,b7 as I,J as O,aw as R,cN as D,b8 as p,D as L}from"./l3hptpare9m1mqfv.js";import{a_ as _,bt as G,r as P,bu as v,bv as U,aw as B,bw as M,bx as $,as as F,aI as H}from"./km9gro7xi1t4gs2t.js";import{iX as q,iY as V}from"./c7sgref9mfwezh7s.js";import{D as i}from"./ds7myuf7nkx8b20x.js";import{a as u,D as Z}from"./lns5kq4ey1gyy1uu.js";import{U as g,d as o,b as z}from"./iun23drvqs0fpxk6.js";import{a as J,I as W}from"./bn8prp53be57kvrr.js";const X="https://openai.com/index/searchgpt-prototype/";function N(){return C("2000076788")?.value}const Y=k(()=>E(()=>import("./sso-l6maw02gfr61gxuy.js").then(t=>t.A),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43])).then(t=>t.AvatarButtons)),l=i.Item;function K(){const t=u.useStore();return V()?e.jsx(l,{onClick:()=>{t.setState({shouldShowAddToHomePopover:!0})},icon:e.jsx(U,{className:"icon-md-heavy text-token-text-primary"}),children:"Add to home screen"}):null}function Q({className:t,iconSize:s,children:n}){const a=N(),r=j();return e.jsxs(i.Root,{modal:!1,children:[e.jsx(b,{className:t,iconSize:s,children:n}),e.jsx(i.Portal,{children:e.jsxs(i.Content,{collisionPadding:10,children:[e.jsx(l,{onClick:()=>g.toggleSettingsModalOpen(),icon:e.jsx(_,{className:"icon-md-heavy text-token-text-primary"}),children:"Settings"}),e.jsx(l,{onClick:()=>window.open(X,"_blank"),icon:e.jsx(G,{className:"icon-md-heavy text-token-text-primary"}),children:"About SearchGPT"}),e.jsx(l,{onClick:()=>window.open("https://chatgpt.com","_blank"),icon:e.jsx(P,{className:"icon-md-heavy text-token-text-primary"}),children:"Open ChatGPT"}),e.jsx(K,{}),e.jsx(i.Separator,{}),e.jsx(l,{onClick:()=>r("/auth/logout"),icon:e.jsx(v,{className:"icon-md-heavy text-token-text-primary"}),children:"Log out"}),a&&e.jsx(Y,{})]})})]})}function ee({className:t,iconSize:s}){const n=j();return e.jsxs(i.Root,{modal:!1,children:[e.jsx(b,{className:t,iconSize:s}),e.jsx(i.Portal,{children:e.jsx(i.Content,{collisionPadding:10,children:e.jsx(l,{onClick:()=>n("/auth/logout"),icon:e.jsx(v,{className:"icon-md-heavy text-token-text-primary"}),children:"Log out"})})})]})}function b({className:t,iconSize:s,children:n}){return e.jsx(i.Trigger,{className:"group border-0 !bg-transparent p-0",children:e.jsx("div",{className:"rounded-full",children:n??e.jsx(q,{iconSize:s,className:t})})})}const te={[o.ReadyState.CONNECTING]:"Connecting",[o.ReadyState.OPEN]:"Open",[o.ReadyState.CLOSING]:"Closing",[o.ReadyState.CLOSED]:"Closed",[o.ReadyState.UNINSTANTIATED]:"Uninstantiated"};function se({readyState:t,className:s}){const[n,a]=h.useState(!0);return h.useEffect(()=>{setTimeout(()=>{a(!0)},1e3)},[]),t===o.ReadyState.OPEN||!n?null:e.jsx("div",{className:d("flex items-center gap-2 p-3 text-sm",s),children:e.jsx(T,{label:te[t],sideOffset:0,side:"right",children:e.jsx("div",{className:d("h-2 w-2 rounded-full",(t===o.ReadyState.CLOSING||t===o.ReadyState.CONNECTING)&&"bg-yellow-500",(t===o.ReadyState.CLOSED||t===o.ReadyState.UNINSTANTIATED)&&"bg-red-500",n?"block":"hidden")})})})}function m({label:t,labelSide:s="right",className:n,onClick:a,children:r,...c}){return e.jsx(w,{label:t,sideOffset:0,side:s,disabled:!t,children:e.jsx("button",{onClick:a,className:d("flex items-center justify-center p-1.5 text-token-text-tertiary hover:text-token-text-primary",n),...c,children:r})})}function f(t,s){return Object.keys(t).reduce((n,a)=>(O(t[a],s[a])||(n[a]=s[a]),n),{})}function ne(){const{setTheme:t,resolvedTheme:s}=A(),n=u.useState(u.selectAgentSettingsOverrides),[a]=J(),r=f(Z,n),c=f(W,a),S={...r,...c},x=Object.keys(S).length>0;return e.jsxs(e.Fragment,{children:[e.jsx(m,{"data-testid":"sonic-debug-button",label:"Debug (Internal)",onClick:()=>g.toggleDebugModalOpen(),children:e.jsx(B,{className:"icon-sm-heavy"})}),e.jsx(m,{label:"Theme (Internal)",onClick:()=>{t(s==="dark"?"light":"dark")},children:e.jsxs(I,{children:[s==="dark"&&e.jsx(M,{className:"icon-md-heavy"}),s==="light"&&e.jsx($,{className:"icon-md-heavy"})]})}),e.jsx(m,{label:x?["Config (Internal) - Changes:",Object.keys(S).join(", ")].join(`
`):"Config (Internal)",onClick:()=>g.toggleInternalSettingsModalOpen(),children:e.jsx(F,{className:d(x?"icon-lg-heavy":"icon-md-heavy",{"text-red-500":x})})})]})}function ae({hideReadyState:t=!1,onResultsPage:s=!1,children:n}){const{readyState:a,resetSearch:r}=z(),c=N();return e.jsxs("div",{className:d("hidden w-20 shrink-0 flex-col items-center justify-between border-r py-6 sm:flex",s?"relative border-token-border-light":"absolute bottom-0 left-0 top-0 border-transparent"),children:[e.jsxs(D,{onClick:()=>r(),to:"/search",className:"text-token-text-primary hover:text-token-text-secondary",title:"Go to SearchGPT",children:[e.jsx(p,{className:"h-8 w-8"}),c&&!t&&e.jsx(se,{readyState:a})]}),c&&e.jsx("div",{className:"flex flex-col items-center gap-2",children:e.jsx(ne,{})}),e.jsx("div",{className:"absolute top-1/2 -translate-y-1/2",children:n})]})}function oe(){return e.jsx("div",{className:"absolute right-5 top-5 hidden sm:block",children:e.jsx(Q,{className:"h-8 w-8"})})}function ge(){return e.jsx(y,{$side:"left",children:e.jsx(p,{className:"h-8 w-8"})})}function Se({className:t}){return e.jsx(y,{$side:"right",className:`${t}`,children:e.jsx(ee,{className:"h-8 w-8"})})}const y=R.div`absolute ${t=>t.$side==="left"?"left-5":"right-5"} bottom-5 top-5 z-10 w-10 flex-col justify-between items-center hidden sm:flex`;function ie({children:t}){return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsxs("div",{className:"flex flex-col items-center gap-1 text-sm font-semibold text-token-text-tertiary",children:[e.jsx(H,{className:"icon-2xl"}),t]})})}function re({onClickRetry:t,children:s}){return e.jsxs(ie,{children:[e.jsxs("div",{children:["Error."," ",e.jsx("button",{onClick:t,className:"inline font-semibold text-token-text-primary hover:opacity-70",children:"Try again?"})]}),s]})}function fe({resetError:t,componentStack:s,error:n}){return h.useEffect(()=>{L.addError(n)},[n]),e.jsxs(re,{onClickRetry:t,children:[e.jsx("div",{className:"fixed left-2 top-2",children:e.jsx(ae,{})}),e.jsx("div",{className:"fixed right-2 top-2",children:e.jsx(oe,{})}),!1]})}export{Q as A,re as D,ie as E,fe as G,ge as L,oe as R,X as S,Se as a,ae as b,N as u};
//# sourceMappingURL=lf4es60s4kckl0yk.js.map