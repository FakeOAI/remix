import{ar as f,Z as d,W as u,r as m,J as v,j as e,aB as o,bv as G,aF as j,I as P,eM as M}from"./b49w4g1m4rvlf13k.js";import{dh as y,eC as C,aV as g,eM as T,m as z,eK as N}from"./h7m9odjd9i4xn2nr.js";import{C as w,b as S,c as L,a as A}from"./e4h0a9fzwibb0uia.js";import{G as k}from"./d4l4qog6o3nwly1q.js";import{E,P as _}from"./mx8ks10z8e6msvoe.js";import"./eqa10itkkpekkuyz.js";import"./ir6w11med9350gpb.js";import"./gl9pn5hdn6js7p18.js";import"./k3myfrovinforztc.js";import"./k0vbuy6ljrfv1h1g.js";import"./ownxj8ojhsr6p38e.js";import"./no5lguy3vqe7hbzq.js";import"./fv6ot224ugmdh2qb.js";const I=8,h=f.div`border-b-2 border-b-black pb-3 dark:border-b-white`,p=f.div`cursor-pointer border-b-2 border-b-transparent pb-3 text-token-text-secondary`;function W(){const s=d(),t=u(),r=s?.isWorkspaceAccount(),[a,i]=m.useState("mine");y({resetThreadAction:()=>{t("/")}});const c=v();if(s==null)return null;const l=e.jsx(o,{id:"1pqG1A",defaultMessage:"Created by me"}),n=e.jsx(o,{id:"2oQjZs",defaultMessage:"Shared with me"});return e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"mx-auto max-w-3xl px-4 py-12 pt-0",children:[e.jsx("h1",{className:"mb-8 text-xl font-semibold md:text-2xl",children:e.jsx(o,{id:"dgQTc/",defaultMessage:"My GPTs"})}),r&&(a==="mine"?e.jsxs("div",{className:"mb-4 flex flex-row space-x-4",children:[e.jsx(h,{children:l}),e.jsx(p,{onClick:()=>i("shared_with_me"),children:n})]}):e.jsxs("div",{className:"mb-4 flex flex-row space-x-4",children:[e.jsx(p,{onClick:()=>i("mine"),children:l}),e.jsx(h,{children:n})]})),a==="mine"&&e.jsx(w,{type:S.Enabled}),e.jsx(B,{emptyMessage:a==="shared_with_me"?c.formatMessage({id:"zG4NW2",defaultMessage:"No GPTs have been shared with you yet"}):void 0,cutId:a},a)]})})}function B({cutId:s,emptyMessage:t}){const[r,a]=m.useState(!0),{data:i,hasNextPage:c,fetchNextPage:l,isLoading:n}=C({cutId:s,limit:I,enabled:r});return n&&i==null?e.jsx("div",{className:"my-8 flex justify-center",children:e.jsx(G,{})}):!n&&i?.pages?.[0].list.items.length===0?e.jsx("span",{children:t}):e.jsxs("div",{children:[e.jsx("div",{children:i?.pages.flatMap(b=>b.list.items.map(({resource:x})=>e.jsx(L,{gizmoResource:x},x.gizmo.id)))}),!r||c||n?e.jsx(j,{color:"secondary",onClick:()=>{r?l():a(!0)},loading:n,fullWidth:!0,children:e.jsx(o,{...R.discoveryLoadMore})}):null]})}const R=P({discoveryLoadMore:{id:"gizmo.mygpts.loadMore",defaultMessage:"Load more"}});function F({children:s}){const t=d(),r=u(),a=g();return t==null?null:t.canInteractWithGizmos()?e.jsxs("div",{children:[s,!a&&e.jsx("div",{className:"fixed bottom-3 right-3",children:e.jsx(T,{})})]}):t.hasPaidSubscription()?null:e.jsx(U,{button:e.jsx(j,{onClick:()=>z(r,"Gizmo landing upsell"),children:e.jsx(o,{id:"gizmosLanding.upgradeToChatGPTPlus",defaultMessage:"Upgrade to ChatGPT Plus"})}),children:e.jsx(o,{id:"gizmosLanding.gptsRollingOut",defaultMessage:"GPTs are gradually rolling out to Plus users"})})}function U({children:s,button:t}){return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsxs("div",{className:"flex max-w-sm flex-col gap-4 p-6 text-center",children:[e.jsx("h2",{children:s}),e.jsx("div",{className:"m-auto",children:t})]})})}const se=()=>(M(),null);function te(){const s=d(),t=s?.canCreateGizmos(),r=u(),a=g();if(m.useEffect(()=>{s!=null&&!t&&r("/gpts")},[s,t,r]),!s?.canCreateGizmos())return null;const i=e.jsx(F,{children:e.jsx(W,{})});return a?e.jsx(A,{children:i}):e.jsx(k,{header:e.jsxs(N,{children:[e.jsx(E,{}),e.jsx("div",{className:"ml-auto",children:e.jsx(_,{})})]}),children:i})}export{se as clientLoader,te as default};
//# sourceMappingURL=j0b45tkforgezkbd.js.map