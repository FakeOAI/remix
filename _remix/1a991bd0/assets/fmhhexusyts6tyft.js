import{W as f,ag as c,bc as m,r as u,X as b,y as e,a1 as n,ar as v,av as g,a6 as G,dF as y}from"./flidd11gv2mtd3pr.js";import{u as P}from"./hxu94zaptf8mjpkm.js";import{j as M}from"./hcy36too2a4zuew8.js";import{C,a as T,b as N}from"./c1hsq35swzu866sx.js";import z from"./f8a9euxayv7xoup7.js";import{y as w,bF as L}from"./b3rades3r6m68flq.js";import{G as S}from"./baiy6yaaqpqjlp2e.js";import{E as k,c as E}from"./fqhitr15xecbhn4t.js";import"./hblp7wkoj3uom6wj.js";import"./mqac55qx5mn89v48.js";import"./hz1r57eozmvrgxlo.js";import"./bwm8ulkt7rpl8jcy.js";import"./ez1kjz5fvk5gkbgz.js";import"./f4lu6fjawq1oq6b1.js";import"./l0fcm4l649pd7v83.js";import"./c2irxumz2s63grlt.js";import"./he7piz7zzhgkln8o.js";import"./g6hxbnpma4c3horj.js";import"./jjecl7pi17ucp9nv.js";import"./njhh8r5d8rse2moq.js";import"./pazlvdzau2lnsgvh.js";import"./fzje20yj7sf4tzes.js";import"./oy0n1vstonf5d3gr.js";import"./b1qio0zbm7u3f55t.js";import"./grjj5fhjl543khxi.js";import"./gmdmr9wfsgbqi27t.js";import"./lp2a7a6x1h38kn3s.js";const _=8,p=f.div`border-b-2 border-b-black pb-3 dark:border-b-white`,h=f.div`cursor-pointer border-b-2 border-b-transparent pb-3 text-token-text-secondary`;function A(){const s=c(),t=m(),a=s?.isWorkspaceAccount(),[r,o]=u.useState("mine");P({resetThreadAction:()=>{t("/")}});const d=b();if(s==null)return null;const l=e.jsx(n,{id:"1pqG1A",defaultMessage:"Created by me"}),i=e.jsx(n,{id:"2oQjZs",defaultMessage:"Shared with me"});return e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"mx-auto max-w-3xl px-4 py-12 pt-0",children:[e.jsx("h1",{className:"mb-8 text-xl font-semibold md:text-2xl",children:e.jsx(n,{id:"dgQTc/",defaultMessage:"My GPTs"})}),a&&(r==="mine"?e.jsxs("div",{className:"mb-4 flex flex-row space-x-4",children:[e.jsx(p,{children:l}),e.jsx(h,{onClick:()=>o("shared_with_me"),children:i})]}):e.jsxs("div",{className:"mb-4 flex flex-row space-x-4",children:[e.jsx(h,{onClick:()=>o("mine"),children:l}),e.jsx(p,{children:i})]})),r==="mine"&&e.jsx(C,{type:T.Enabled}),e.jsx(W,{emptyMessage:r==="shared_with_me"?d.formatMessage({id:"zG4NW2",defaultMessage:"No GPTs have been shared with you yet"}):void 0,cutId:r},r)]})})}function W({cutId:s,emptyMessage:t}){const[a,r]=u.useState(!0),{data:o,hasNextPage:d,fetchNextPage:l,isLoading:i}=M({cutId:s,limit:_,enabled:a});return i&&o==null?e.jsx("div",{className:"my-8 flex justify-center",children:e.jsx(v,{})}):!i&&o?.pages?.[0].list.items.length===0?e.jsx("span",{children:t}):e.jsxs("div",{children:[e.jsx("div",{children:o?.pages.flatMap(j=>j.list.items.map(({resource:x})=>e.jsx(N,{gizmoResource:x},x.gizmo.id)))}),!a||d||i?e.jsx(g,{color:"secondary",onClick:()=>{a?l():r(!0)},loading:i,fullWidth:!0,children:e.jsx(n,{...I.discoveryLoadMore})}):null]})}const I=G({discoveryLoadMore:{id:"gizmo.mygpts.loadMore",defaultMessage:"Load more"}});function F({children:s}){const t=c(),a=m();return t==null?null:t.canInteractWithGizmos()?e.jsxs("div",{children:[s,e.jsx("div",{className:"fixed bottom-3 right-3",children:e.jsx(z,{})})]}):t.hasPaidSubscription()?null:e.jsx(R,{button:e.jsx(g,{onClick:()=>w(a,"Gizmo landing upsell"),children:e.jsx(n,{id:"gizmosLanding.upgradeToChatGPTPlus",defaultMessage:"Upgrade to ChatGPT Plus"})}),children:e.jsx(n,{id:"gizmosLanding.gptsRollingOut",defaultMessage:"GPTs are gradually rolling out to Plus users"})})}function R({children:s,button:t}){return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsxs("div",{className:"flex max-w-sm flex-col gap-4 p-6 text-center",children:[e.jsx("h2",{children:s}),e.jsx("div",{className:"m-auto",children:t})]})})}const xe=()=>(y(),null);function pe(){const s=c(),t=s?.canCreateGizmos(),a=m();return u.useEffect(()=>{s!=null&&!t&&a("/gpts")},[s,t,a]),s?.canCreateGizmos()?e.jsx(S,{header:e.jsxs(L,{children:[e.jsx(k,{}),e.jsx("div",{className:"ml-auto",children:e.jsx(E,{})})]}),children:e.jsx(F,{children:e.jsx(A,{})})}):null}export{xe as clientLoader,pe as default};
//# sourceMappingURL=fmhhexusyts6tyft.js.map