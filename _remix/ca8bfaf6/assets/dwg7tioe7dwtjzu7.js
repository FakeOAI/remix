const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sso-nter2iehrtf5avlv.js","assets/i50pu8hyebaw9kd6.js","assets/ler115iciu2bvc07.js","assets/root-kyx67gpb.css","assets/dghhjwukptxfqwlg.js","assets/mixmhi71ciem9jn6.js","assets/conversation-small-ict01xsi.css","assets/cdli15fahs96hcpj.js","assets/j5w4166bn3c02o6l.js","assets/kdu1jt8u0emg2jou.js","assets/fk9ojk6xx6izw5yr.js","assets/2andadqcktypfrts.js","assets/f124ljhn8hg0ku1q.js","assets/dyksh46aahhpb9mc.js","assets/itghwucfyv5ciib7.js","assets/dixjzrpq5x1prnzh.js","assets/gutqz9p5lfo53m3m.js","assets/roq9fh68okqqi129.js","assets/n07ww21dz4jo1lya.js","assets/it6k5ae32m299zdv.js","assets/2q3nvyr3do2vjil2.js","assets/obdrcw978epnpqji.js","assets/983a0dy92b3ronpv.js","assets/nmjcaip3k576u4ic.js","assets/dl8otndrqr5jwuge.js","assets/kqwdyvkaaavvn8k3.js","assets/i8ss3qsqvfei5u5z.js","assets/cz0o0w1g4hd6yukx.js","assets/dmbuafsoaaunp0b7.js","assets/oepupwk3rf2ged1k.js","assets/e9lafxuzyeh4418f.js","assets/n5z3x3cv5fuwh3xw.js","assets/dsebnz6w8c56llqn.js","assets/ch57iixw7reuibzs.js","assets/h1jm0ocymr7zzvr3.js","assets/dj2x6mhu8gxqei0f.js","assets/mnikdyknc6lees7j.js","assets/iej0cupg2dqkmejt.js","assets/bp89eiosdd1pnk4r.js","assets/gx0en2phcl201p99.js","assets/jk8w36bsokizpx57.js","assets/lfdgenmhnubxn1z5.js","assets/zbkvgno7pi0e7kyr.js","assets/g4gq7wj38irj9xjt.js"])))=>i.map(i=>d[i]);
import{y as C,aM as k,aN as E,a3 as f,j as e,bb as i,r as h,az as d,b0 as T,d5 as A,aU as I,b9 as O,L as R,aE as w,cS as L,ba as p,D}from"./i50pu8hyebaw9kd6.js";import{b7 as _,bE as G,r as P,by as N,bF as U,aN as M,bG as B,bH as F,ak as $,aX as H}from"./ler115iciu2bvc07.js";import{iM as q,j_ as z}from"./mixmhi71ciem9jn6.js";import{a as u,D as V}from"./dghhjwukptxfqwlg.js";import{U as g,d as o,b as W}from"./n07ww21dz4jo1lya.js";import{a as X,I as J}from"./f124ljhn8hg0ku1q.js";const K="https://openai.com/index/searchgpt-prototype/";function v(){return C("2000076788")?.value}const Q=k(()=>E(()=>import("./sso-nter2iehrtf5avlv.js").then(t=>t.A),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43])).then(t=>t.AvatarButtons)),l=i.Item;function Y(){const t=u.useStore();return z()?e.jsx(l,{onClick:()=>{t.setState({shouldShowAddToHomePopover:!0})},icon:e.jsx(U,{className:"icon-md-heavy text-token-text-primary"}),children:"Add to home screen"}):null}function Z({className:t,iconSize:s,children:n}){const a=v(),r=f();return e.jsxs(i.Root,{modal:!1,children:[e.jsx(b,{className:t,iconSize:s,children:n}),e.jsx(i.Portal,{children:e.jsxs(i.Content,{collisionPadding:10,children:[e.jsx(l,{onClick:()=>g.toggleSettingsModalOpen(),icon:e.jsx(_,{className:"icon-md-heavy text-token-text-primary"}),children:"Settings"}),e.jsx(l,{onClick:()=>window.open(K,"_blank"),icon:e.jsx(G,{className:"icon-md-heavy text-token-text-primary"}),children:"About SearchGPT"}),e.jsx(l,{onClick:()=>window.open("https://chatgpt.com","_blank"),icon:e.jsx(P,{className:"icon-md-heavy text-token-text-primary"}),children:"Open ChatGPT"}),e.jsx(Y,{}),e.jsx(i.Separator,{}),e.jsx(l,{onClick:()=>r("/auth/logout"),icon:e.jsx(N,{className:"icon-md-heavy text-token-text-primary"}),children:"Log out"}),a&&e.jsx(Q,{})]})})]})}function ee({className:t,iconSize:s}){const n=f();return e.jsxs(i.Root,{modal:!1,children:[e.jsx(b,{className:t,iconSize:s}),e.jsx(i.Portal,{children:e.jsx(i.Content,{collisionPadding:10,children:e.jsx(l,{onClick:()=>n("/auth/logout"),icon:e.jsx(N,{className:"icon-md-heavy text-token-text-primary"}),children:"Log out"})})})]})}function b({className:t,iconSize:s,children:n}){return e.jsx(i.Trigger,{className:"group border-0 !bg-transparent p-0",children:e.jsx("div",{className:"rounded-full",children:n??e.jsx(q,{iconSize:s,className:t})})})}const te={[o.ReadyState.CONNECTING]:"Connecting",[o.ReadyState.OPEN]:"Open",[o.ReadyState.CLOSING]:"Closing",[o.ReadyState.CLOSED]:"Closed",[o.ReadyState.UNINSTANTIATED]:"Uninstantiated"};function se({readyState:t,className:s}){const[n,a]=h.useState(!0);return h.useEffect(()=>{setTimeout(()=>{a(!0)},1e3)},[]),t===o.ReadyState.OPEN||!n?null:e.jsx("div",{className:d("flex items-center gap-2 p-3 text-sm",s),children:e.jsx(T,{label:te[t],sideOffset:0,side:"right",children:e.jsx("div",{className:d("h-2 w-2 rounded-full",(t===o.ReadyState.CLOSING||t===o.ReadyState.CONNECTING)&&"bg-yellow-500",(t===o.ReadyState.CLOSED||t===o.ReadyState.UNINSTANTIATED)&&"bg-red-500",n?"block":"hidden")})})})}function m({label:t,labelSide:s="right",className:n,onClick:a,children:r,...c}){return e.jsx(A,{label:t,sideOffset:0,side:s,disabled:!t,children:e.jsx("button",{onClick:a,className:d("flex items-center justify-center p-1.5 text-token-text-tertiary hover:text-token-text-primary",n),...c,children:r})})}function j(t,s){return Object.keys(t).reduce((n,a)=>(R(t[a],s[a])||(n[a]=s[a]),n),{})}function ne(){const{setTheme:t,resolvedTheme:s}=I(),n=u.useState(u.selectAgentSettingsOverrides),[a]=X(),r=j(V,n),c=j(J,a),S={...r,...c},x=Object.keys(S).length>0;return e.jsxs(e.Fragment,{children:[e.jsx(m,{"data-testid":"sonic-debug-button",label:"Debug (Internal)",onClick:()=>g.toggleDebugModalOpen(),children:e.jsx(M,{className:"icon-sm-heavy"})}),e.jsx(m,{label:"Theme (Internal)",onClick:()=>{t(s==="dark"?"light":"dark")},children:e.jsxs(O,{children:[s==="dark"&&e.jsx(B,{className:"icon-md-heavy"}),s==="light"&&e.jsx(F,{className:"icon-md-heavy"})]})}),e.jsx(m,{label:x?["Config (Internal) - Changes:",Object.keys(S).join(", ")].join(`
`):"Config (Internal)",onClick:()=>g.toggleInternalSettingsModalOpen(),children:e.jsx($,{className:d(x?"icon-lg-heavy":"icon-md-heavy",{"text-red-500":x})})})]})}function ae({hideReadyState:t=!1,onResultsPage:s=!1,children:n}){const{readyState:a,resetSearch:r}=W(),c=v();return e.jsxs("div",{className:d("hidden w-20 shrink-0 flex-col items-center justify-between border-r py-6 sm:flex",s?"relative border-token-border-light":"absolute bottom-0 left-0 top-0 border-transparent"),children:[e.jsxs(L,{onClick:()=>r(),to:"/search",className:"text-token-text-primary hover:text-token-text-secondary",title:"Go to SearchGPT",children:[e.jsx(p,{className:"h-8 w-8"}),c&&!t&&e.jsx(se,{readyState:a})]}),c&&e.jsx("div",{className:"flex flex-col items-center gap-2",children:e.jsx(ne,{})}),e.jsx("div",{className:"absolute top-1/2 -translate-y-1/2",children:n})]})}function oe(){return e.jsx("div",{className:"absolute right-5 top-5 hidden sm:block",children:e.jsx(Z,{className:"h-8 w-8"})})}function ue(){return e.jsx(y,{$side:"left",children:e.jsx(p,{className:"h-8 w-8"})})}function ge({className:t}){return e.jsx(y,{$side:"right",className:`${t}`,children:e.jsx(ee,{className:"h-8 w-8"})})}const y=w.div`absolute ${t=>t.$side==="left"?"left-5":"right-5"} bottom-5 top-5 z-10 w-10 flex-col justify-between items-center hidden sm:flex`;function ie({children:t}){return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsxs("div",{className:"flex flex-col items-center gap-1 text-sm font-semibold text-token-text-tertiary",children:[e.jsx(H,{className:"icon-2xl"}),t]})})}function re({onClickRetry:t,children:s}){return e.jsxs(ie,{children:[e.jsxs("div",{children:["Error."," ",e.jsx("button",{onClick:t,className:"inline font-semibold text-token-text-primary hover:opacity-70",children:"Try again?"})]}),s]})}function Se({resetError:t,componentStack:s,error:n}){return h.useEffect(()=>{D.addError(n)},[n]),e.jsxs(re,{onClickRetry:t,children:[e.jsx("div",{className:"fixed left-2 top-2",children:e.jsx(ae,{})}),e.jsx("div",{className:"fixed right-2 top-2",children:e.jsx(oe,{})}),!1]})}export{Z as A,re as D,ie as E,Se as G,ue as L,oe as R,K as S,ge as a,ae as b,v as u};
//# sourceMappingURL=dwg7tioe7dwtjzu7.js.map