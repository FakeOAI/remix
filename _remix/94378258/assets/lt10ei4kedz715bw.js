import{a9 as f,$ as c,be as m,r as u,a0 as b,y as e,ae as n,aw as v,aA as g,a1 as G,dH as P}from"./i5bamk05qmvsi6c3.js";import{u as y}from"./mmrg2ruvit3yy6k8.js";import{j as M}from"./ke6ca343lrs30bzf.js";import{C,a as T,b as z}from"./i09g2mvrw4km7sn0.js";import N from"./e3nlqujb5lj65pa2.js";import{z as w,bI as L}from"./b5wtmoh4inpzei0d.js";import{G as S}from"./kiaoqcv6006uanlq.js";import{E as k,c as E}from"./basnv9fux9j484go.js";import"./mqz1li9meltzje6z.js";import"./i5ztl46q405lbqos.js";import"./jn8sbvvcvfq89cru.js";import"./mk4ingvn6gaf4ymp.js";import"./hyvagn7wiyqjw66o.js";import"./kmyp4ah1dd5ptfwx.js";import"./f8m2hnrr877wbn2c.js";import"./n5sxb9l1jmluwhlc.js";import"./kfe2c9wpphxhi1gf.js";import"./k4owery9q8o61suw.js";import"./enzbfz65vpzupghi.js";import"./drouahjtjbpzqjlc.js";import"./c3bo1tgi83ukaug4.js";import"./lipvfqcybsnta3w3.js";import"./jh608eser2rz5gpi.js";import"./f0xcjowxwlfqmke5.js";import"./js5qb1fmq9lggf33.js";import"./go8i9ioogzsa6rv8.js";import"./chzj6qbe1fufxjay.js";import"./j9x5yz86yxlnd515.js";import"./leiuw82gjevvfzoe.js";const A=8,p=f.div`border-b-2 border-b-black pb-3 dark:border-b-white`,h=f.div`cursor-pointer border-b-2 border-b-transparent pb-3 text-token-text-secondary`;function _(){const s=c(),t=m(),a=s?.isWorkspaceAccount(),[i,o]=u.useState("mine");y({resetThreadAction:()=>{t("/")}});const d=b();if(s==null)return null;const l=e.jsx(n,{id:"1pqG1A",defaultMessage:"Created by me"}),r=e.jsx(n,{id:"2oQjZs",defaultMessage:"Shared with me"});return e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"mx-auto max-w-3xl px-4 py-12 pt-0",children:[e.jsx("h1",{className:"mb-8 text-xl font-semibold md:text-2xl",children:e.jsx(n,{id:"dgQTc/",defaultMessage:"My GPTs"})}),a&&(i==="mine"?e.jsxs("div",{className:"mb-4 flex flex-row space-x-4",children:[e.jsx(p,{children:l}),e.jsx(h,{onClick:()=>o("shared_with_me"),children:r})]}):e.jsxs("div",{className:"mb-4 flex flex-row space-x-4",children:[e.jsx(h,{onClick:()=>o("mine"),children:l}),e.jsx(p,{children:r})]})),i==="mine"&&e.jsx(C,{type:T.Enabled}),e.jsx(I,{emptyMessage:i==="shared_with_me"?d.formatMessage({id:"zG4NW2",defaultMessage:"No GPTs have been shared with you yet"}):void 0,cutId:i},i)]})})}function I({cutId:s,emptyMessage:t}){const[a,i]=u.useState(!0),{data:o,hasNextPage:d,fetchNextPage:l,isLoading:r}=M({cutId:s,limit:A,enabled:a});return r&&o==null?e.jsx("div",{className:"my-8 flex justify-center",children:e.jsx(v,{})}):!r&&o?.pages?.[0].list.items.length===0?e.jsx("span",{children:t}):e.jsxs("div",{children:[e.jsx("div",{children:o?.pages.flatMap(j=>j.list.items.map(({resource:x})=>e.jsx(z,{gizmoResource:x},x.gizmo.id)))}),!a||d||r?e.jsx(g,{color:"secondary",onClick:()=>{a?l():i(!0)},loading:r,fullWidth:!0,children:e.jsx(n,{...W.discoveryLoadMore})}):null]})}const W=G({discoveryLoadMore:{id:"gizmo.mygpts.loadMore",defaultMessage:"Load more"}});function R({children:s}){const t=c(),a=m();return t==null?null:t.canInteractWithGizmos()?e.jsxs("div",{children:[s,e.jsx("div",{className:"fixed bottom-3 right-3",children:e.jsx(N,{})})]}):t.hasPaidSubscription()?null:e.jsx(B,{button:e.jsx(g,{onClick:()=>w(a,"Gizmo landing upsell"),children:e.jsx(n,{id:"gizmosLanding.upgradeToChatGPTPlus",defaultMessage:"Upgrade to ChatGPT Plus"})}),children:e.jsx(n,{id:"gizmosLanding.gptsRollingOut",defaultMessage:"GPTs are gradually rolling out to Plus users"})})}function B({children:s,button:t}){return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsxs("div",{className:"flex max-w-sm flex-col gap-4 p-6 text-center",children:[e.jsx("h2",{children:s}),e.jsx("div",{className:"m-auto",children:t})]})})}const he=()=>(P(),null);function fe(){const s=c(),t=s?.canCreateGizmos(),a=m();return u.useEffect(()=>{s!=null&&!t&&a("/gpts")},[s,t,a]),s?.canCreateGizmos()?e.jsx(S,{header:e.jsxs(L,{children:[e.jsx(k,{}),e.jsx("div",{className:"ml-auto",children:e.jsx(E,{})})]}),children:e.jsx(R,{children:e.jsx(_,{})})}):null}export{he as clientLoader,fe as default};
//# sourceMappingURL=lt10ei4kedz715bw.js.map