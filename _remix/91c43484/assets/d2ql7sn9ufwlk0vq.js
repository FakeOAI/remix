import{W as f,ag as c,bc as m,r as u,X as b,y as e,a1 as n,ar as v,av as g,a6 as G,dF as y}from"./hbchlcqon2hwxr80.js";import{u as P}from"./b0d858md1jzm3gmv.js";import{j as M}from"./iecjxwy4bdhrkjjx.js";import{C,a as T,b as N}from"./l4azx1rtqm888r2w.js";import z from"./lwqxrye0gekqs8uy.js";import{y as w,bD as L}from"./bj9u7c4m96v4ynu9.js";import{G as S}from"./lznukf6bvzphzvjh.js";import{E as k,c as E}from"./nmbaat51mx0cnwxl.js";import"./mu86dgakvedfv6hm.js";import"./dkrigemuevrjmbmp.js";import"./bxynqddfbn61ak0f.js";import"./f6z2m8gdbpzzrq6z.js";import"./dwa9sqyvk67hw6bw.js";import"./c7exg25ifvm7b7xd.js";import"./fopi3aherabk7cf4.js";import"./hnr9t72m288h52wy.js";import"./ncy4hvjnjzcxnzjh.js";import"./ijfune6n6oa8hq55.js";import"./lfqqnt0qvtxdwdjt.js";import"./o5x7gvzeojoc6d1x.js";import"./lrwr6p7cpg35s37u.js";import"./k2c7tqr68enp7jbi.js";import"./i5rzxlz3df8nx271.js";import"./icpk1o89aiyc59sk.js";import"./j17phbzpsei7xean.js";import"./i7m4n3tcy28jqwxt.js";import"./frm3a708djqebpl7.js";const _=8,p=f.div`border-b-2 border-b-black pb-3 dark:border-b-white`,h=f.div`cursor-pointer border-b-2 border-b-transparent pb-3 text-token-text-secondary`;function A(){const s=c(),t=m(),a=s?.isWorkspaceAccount(),[r,o]=u.useState("mine");P({resetThreadAction:()=>{t("/")}});const d=b();if(s==null)return null;const l=e.jsx(n,{id:"1pqG1A",defaultMessage:"Created by me"}),i=e.jsx(n,{id:"2oQjZs",defaultMessage:"Shared with me"});return e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"mx-auto max-w-3xl px-4 py-12 pt-0",children:[e.jsx("h1",{className:"mb-8 text-xl font-semibold md:text-2xl",children:e.jsx(n,{id:"dgQTc/",defaultMessage:"My GPTs"})}),a&&(r==="mine"?e.jsxs("div",{className:"mb-4 flex flex-row space-x-4",children:[e.jsx(p,{children:l}),e.jsx(h,{onClick:()=>o("shared_with_me"),children:i})]}):e.jsxs("div",{className:"mb-4 flex flex-row space-x-4",children:[e.jsx(h,{onClick:()=>o("mine"),children:l}),e.jsx(p,{children:i})]})),r==="mine"&&e.jsx(C,{type:T.Enabled}),e.jsx(W,{emptyMessage:r==="shared_with_me"?d.formatMessage({id:"zG4NW2",defaultMessage:"No GPTs have been shared with you yet"}):void 0,cutId:r},r)]})})}function W({cutId:s,emptyMessage:t}){const[a,r]=u.useState(!0),{data:o,hasNextPage:d,fetchNextPage:l,isLoading:i}=M({cutId:s,limit:_,enabled:a});return i&&o==null?e.jsx("div",{className:"my-8 flex justify-center",children:e.jsx(v,{})}):!i&&o?.pages?.[0].list.items.length===0?e.jsx("span",{children:t}):e.jsxs("div",{children:[e.jsx("div",{children:o?.pages.flatMap(j=>j.list.items.map(({resource:x})=>e.jsx(N,{gizmoResource:x},x.gizmo.id)))}),!a||d||i?e.jsx(g,{color:"secondary",onClick:()=>{a?l():r(!0)},loading:i,fullWidth:!0,children:e.jsx(n,{...I.discoveryLoadMore})}):null]})}const I=G({discoveryLoadMore:{id:"gizmo.mygpts.loadMore",defaultMessage:"Load more"}});function R({children:s}){const t=c(),a=m();return t==null?null:t.canInteractWithGizmos()?e.jsxs("div",{children:[s,e.jsx("div",{className:"fixed bottom-3 right-3",children:e.jsx(z,{})})]}):t.hasPaidSubscription()?null:e.jsx(B,{button:e.jsx(g,{onClick:()=>w(a,"Gizmo landing upsell"),children:e.jsx(n,{id:"gizmosLanding.upgradeToChatGPTPlus",defaultMessage:"Upgrade to ChatGPT Plus"})}),children:e.jsx(n,{id:"gizmosLanding.gptsRollingOut",defaultMessage:"GPTs are gradually rolling out to Plus users"})})}function B({children:s,button:t}){return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsxs("div",{className:"flex max-w-sm flex-col gap-4 p-6 text-center",children:[e.jsx("h2",{children:s}),e.jsx("div",{className:"m-auto",children:t})]})})}const xe=()=>(y(),null);function pe(){const s=c(),t=s?.canCreateGizmos(),a=m();return u.useEffect(()=>{s!=null&&!t&&a("/gpts")},[s,t,a]),s?.canCreateGizmos()?e.jsx(S,{header:e.jsxs(L,{children:[e.jsx(k,{}),e.jsx("div",{className:"ml-auto",children:e.jsx(E,{})})]}),children:e.jsx(R,{children:e.jsx(A,{})})}):null}export{xe as clientLoader,pe as default};
//# sourceMappingURL=d2ql7sn9ufwlk0vq.js.map