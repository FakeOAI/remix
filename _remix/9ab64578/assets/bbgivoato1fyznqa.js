const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sso-oqylhbcvl45iyt6z.js","assets/n6pd72le962cb7i2.js","assets/b84o1u0lhllftt1g.js","assets/root-k8lflb3j.css","assets/jz3yie9s5yhl0osu.js","assets/conversation-small-ict01xsi.css","assets/oj2veiwipsmw7uuk.js","assets/gig7dd13aioyin14.js","assets/4chk33l3szqq2hql.js","assets/iimzyot6hhcmz5qa.js","assets/k34nwqibnbti3wva.js","assets/j8qj2mi7846az0e7.js","assets/ie547sv5ox2nkp3n.js","assets/f0tq8leeyal5vk7s.js","assets/bckgb13tekr216h4.js","assets/hqh4x8749n2kj7ge.js","assets/filbl5aieb5bkhmw.js","assets/fx3mce06d5u56khw.js","assets/lfd7q1temspxd4jw.js","assets/itghwucfyv5ciib7.js","assets/zb5ak5e0r6rar6e9.js","assets/kk96b70qyksdg7et.js","assets/kql6flvvdpy5h8bt.js","assets/nzqt7inyyq32cen4.js","assets/983a0dy92b3ronpv.js","assets/fus06byhc4p20wb1.js","assets/kqwdyvkaaavvn8k3.js","assets/hsh822269qp8bzmy.js","assets/heu9be81ww1kispb.js","assets/botls2etwxio3srn.js","assets/jqdkr8jb3ji5agov.js","assets/e9lafxuzyeh4418f.js","assets/km3vamldayfrr3no.js","assets/kl3jr1tf2vy24qaj.js","assets/kw36kzuk49u3f1ak.js","assets/yv0ocr6xjzwc4k2s.js","assets/kgsoo4cr452bb370.js","assets/edgqdrehlp0o9wbk.js","assets/iej0cupg2dqkmejt.js","assets/ohiikrhvx7p81wqk.js","assets/hy21uuzjkoi9r4jc.js","assets/jk8w36bsokizpx57.js","assets/novzfx48sevom88u.js","assets/lqk3sweiitsdlxwj.js"])))=>i.map(i=>d[i]);
import{w as C,aE as k,aF as E,Z as f,a6 as e,r as h,ar as d,aY as T,cT as w,aO as A,b6 as I,J as O,aw as R,cF as D,b7 as p,D as L}from"./n6pd72le962cb7i2.js";import{a_ as _,bt as G,r as P,bu as v,bv as U,aw as B,bw as F,bx as M,as as $,aI as H}from"./b84o1u0lhllftt1g.js";import{j4 as q,j5 as V}from"./jz3yie9s5yhl0osu.js";import{D as i}from"./gig7dd13aioyin14.js";import{a as u,D as z}from"./f0tq8leeyal5vk7s.js";import{U as g,d as o,b as J}from"./kk96b70qyksdg7et.js";import{a as W,I as Y}from"./fx3mce06d5u56khw.js";const Z="https://openai.com/index/searchgpt-prototype/";function N(){return C("2000076788")?.value}const K=k(()=>E(()=>import("./sso-oqylhbcvl45iyt6z.js").then(t=>t.A),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43])).then(t=>t.AvatarButtons)),l=i.Item;function Q(){const t=u.useStore();return V()?e.jsx(l,{onClick:()=>{t.setState({shouldShowAddToHomePopover:!0})},icon:e.jsx(U,{className:"icon-md-heavy text-token-text-primary"}),children:"Add to home screen"}):null}function X({className:t,iconSize:s,children:n}){const a=N(),r=f();return e.jsxs(i.Root,{modal:!1,children:[e.jsx(b,{className:t,iconSize:s,children:n}),e.jsx(i.Portal,{children:e.jsxs(i.Content,{collisionPadding:10,children:[e.jsx(l,{onClick:()=>g.toggleSettingsModalOpen(),icon:e.jsx(_,{className:"icon-md-heavy text-token-text-primary"}),children:"Settings"}),e.jsx(l,{onClick:()=>window.open(Z,"_blank"),icon:e.jsx(G,{className:"icon-md-heavy text-token-text-primary"}),children:"About SearchGPT"}),e.jsx(l,{onClick:()=>window.open("https://chatgpt.com","_blank"),icon:e.jsx(P,{className:"icon-md-heavy text-token-text-primary"}),children:"Open ChatGPT"}),e.jsx(Q,{}),e.jsx(i.Separator,{}),e.jsx(l,{onClick:()=>r("/auth/logout"),icon:e.jsx(v,{className:"icon-md-heavy text-token-text-primary"}),children:"Log out"}),a&&e.jsx(K,{})]})})]})}function ee({className:t,iconSize:s}){const n=f();return e.jsxs(i.Root,{modal:!1,children:[e.jsx(b,{className:t,iconSize:s}),e.jsx(i.Portal,{children:e.jsx(i.Content,{collisionPadding:10,children:e.jsx(l,{onClick:()=>n("/auth/logout"),icon:e.jsx(v,{className:"icon-md-heavy text-token-text-primary"}),children:"Log out"})})})]})}function b({className:t,iconSize:s,children:n}){return e.jsx(i.Trigger,{className:"group border-0 !bg-transparent p-0",children:e.jsx("div",{className:"rounded-full",children:n??e.jsx(q,{iconSize:s,className:t})})})}const te={[o.ReadyState.CONNECTING]:"Connecting",[o.ReadyState.OPEN]:"Open",[o.ReadyState.CLOSING]:"Closing",[o.ReadyState.CLOSED]:"Closed",[o.ReadyState.UNINSTANTIATED]:"Uninstantiated"};function se({readyState:t,className:s}){const[n,a]=h.useState(!0);return h.useEffect(()=>{setTimeout(()=>{a(!0)},1e3)},[]),t===o.ReadyState.OPEN||!n?null:e.jsx("div",{className:d("flex items-center gap-2 p-3 text-sm",s),children:e.jsx(T,{label:te[t],sideOffset:0,side:"right",children:e.jsx("div",{className:d("h-2 w-2 rounded-full",(t===o.ReadyState.CLOSING||t===o.ReadyState.CONNECTING)&&"bg-yellow-500",(t===o.ReadyState.CLOSED||t===o.ReadyState.UNINSTANTIATED)&&"bg-red-500",n?"block":"hidden")})})})}function m({label:t,labelSide:s="right",className:n,onClick:a,children:r,...c}){return e.jsx(w,{label:t,sideOffset:0,side:s,disabled:!t,children:e.jsx("button",{onClick:a,className:d("flex items-center justify-center p-1.5 text-token-text-tertiary hover:text-token-text-primary",n),...c,children:r})})}function S(t,s){return Object.keys(t).reduce((n,a)=>(O(t[a],s[a])||(n[a]=s[a]),n),{})}function ne(){const{setTheme:t,resolvedTheme:s}=A(),n=u.useState(u.selectAgentSettingsOverrides),[a]=W(),r=S(z,n),c=S(Y,a),j={...r,...c},x=Object.keys(j).length>0;return e.jsxs(e.Fragment,{children:[e.jsx(m,{"data-testid":"sonic-debug-button",label:"Debug (Internal)",onClick:()=>g.toggleDebugModalOpen(),children:e.jsx(B,{className:"icon-sm-heavy"})}),e.jsx(m,{label:"Theme (Internal)",onClick:()=>{t(s==="dark"?"light":"dark")},children:e.jsxs(I,{children:[s==="dark"&&e.jsx(F,{className:"icon-md-heavy"}),s==="light"&&e.jsx(M,{className:"icon-md-heavy"})]})}),e.jsx(m,{label:x?["Config (Internal) - Changes:",Object.keys(j).join(", ")].join(`
`):"Config (Internal)",onClick:()=>g.toggleInternalSettingsModalOpen(),children:e.jsx($,{className:d(x?"icon-lg-heavy":"icon-md-heavy",{"text-red-500":x})})})]})}function ae({hideReadyState:t=!1,onResultsPage:s=!1,children:n}){const{readyState:a,resetSearch:r}=J(),c=N();return e.jsxs("div",{className:d("hidden w-20 shrink-0 flex-col items-center justify-between border-r py-6 sm:flex",s?"relative border-token-border-light":"absolute bottom-0 left-0 top-0 border-transparent"),children:[e.jsxs(D,{onClick:()=>r(),to:"/search",className:"text-token-text-primary hover:text-token-text-secondary",title:"Go to SearchGPT",children:[e.jsx(p,{className:"h-8 w-8"}),c&&!t&&e.jsx(se,{readyState:a})]}),c&&e.jsx("div",{className:"flex flex-col items-center gap-2",children:e.jsx(ne,{})}),e.jsx("div",{className:"absolute top-1/2 -translate-y-1/2",children:n})]})}function oe(){return e.jsx("div",{className:"absolute right-5 top-5 hidden sm:block",children:e.jsx(X,{className:"h-8 w-8"})})}function ge(){return e.jsx(y,{$side:"left",children:e.jsx(p,{className:"h-8 w-8"})})}function je({className:t}){return e.jsx(y,{$side:"right",className:`${t}`,children:e.jsx(ee,{className:"h-8 w-8"})})}const y=R.div`absolute ${t=>t.$side==="left"?"left-5":"right-5"} bottom-5 top-5 z-10 w-10 flex-col justify-between items-center hidden sm:flex`;function ie({children:t}){return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsxs("div",{className:"flex flex-col items-center gap-1 text-sm font-semibold text-token-text-tertiary",children:[e.jsx(H,{className:"icon-2xl"}),t]})})}function re({onClickRetry:t,children:s}){return e.jsxs(ie,{children:[e.jsxs("div",{children:["Error."," ",e.jsx("button",{onClick:t,className:"inline font-semibold text-token-text-primary hover:opacity-70",children:"Try again?"})]}),s]})}function Se({resetError:t,componentStack:s,error:n}){return h.useEffect(()=>{L.addError(n)},[n]),e.jsxs(re,{onClickRetry:t,children:[e.jsx("div",{className:"fixed left-2 top-2",children:e.jsx(ae,{})}),e.jsx("div",{className:"fixed right-2 top-2",children:e.jsx(oe,{})}),!1]})}export{X as A,re as D,ie as E,Se as G,ge as L,oe as R,Z as S,je as a,ae as b,N as u};
//# sourceMappingURL=bbgivoato1fyznqa.js.map