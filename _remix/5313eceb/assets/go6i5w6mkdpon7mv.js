import{N as f,aq as c,V as j,r as m,G,j as e,J as n,aK as P,bb as g,K as v,bj as y}from"./dvzkaody587rk08a.js";import{u as M}from"./gg8f6rgrhv3cfuhr.js";import{k as T}from"./od5diow45t6yuhzs.js";import{C,a as N,G as z}from"./4vjhaf511fsujv4p.js";import{H as w}from"./mg4kwc6awjmtudx2.js";import{s as k,db as L}from"./fku109ioiqpwlajh.js";import{G as S}from"./hxdklsu7b4o177np.js";import{b as E,P as _}from"./lqbluvktt4mdnyct.js";import"./exu8sqazer2zujr0.js";import"./h0336duz3b54502g.js";import"./hx1dr086ejea7hpk.js";import"./dr8cda1gmg2j3rrv.js";import"./il66am63va0jty5c.js";import"./cdqx11510b8o7c0s.js";import"./ik4e5kkxirlsdflr.js";import"./pbm0z4h0aqm3739w.js";import"./jwptbron7a79o1ia.js";import"./jrsgle4cz7ihpo9a.js";import"./dfzrymwvsy6ovh98.js";import"./o5tzickdl56qteaa.js";import"./bztyxyyzhgy6s9qb.js";import"./lnf9bkt00g2q2pbk.js";import"./bek1exzbtpnvo9r1.js";import"./ifw8qgye7064l9dt.js";const A=8,p=f.div`border-b-2 border-b-black pb-3 dark:border-b-white`,h=f.div`cursor-pointer border-b-2 border-b-transparent pb-3 text-token-text-secondary`;function I(){const s=c(),t=j(),i=s==null?void 0:s.isWorkspaceAccount(),[a,r]=m.useState("mine");M({resetThreadAction:()=>{t.push("/")}});const d=G();if(s==null)return null;const l=e.jsx(n,{id:"1pqG1A",defaultMessage:"Created by me"}),o=e.jsx(n,{id:"2oQjZs",defaultMessage:"Shared with me"});return e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"mx-auto max-w-3xl px-4 py-12 pt-0",children:[e.jsx("h1",{className:"mb-8 text-xl font-semibold md:text-2xl",children:e.jsx(n,{id:"dgQTc/",defaultMessage:"My GPTs"})}),i&&(a==="mine"?e.jsxs("div",{className:"mb-4 flex flex-row space-x-4",children:[e.jsx(p,{children:l}),e.jsx(h,{onClick:()=>r("shared_with_me"),children:o})]}):e.jsxs("div",{className:"mb-4 flex flex-row space-x-4",children:[e.jsx(h,{onClick:()=>r("mine"),children:l}),e.jsx(p,{children:o})]})),a==="mine"&&e.jsx(C,{type:N.Enabled}),e.jsx(R,{emptyMessage:a==="shared_with_me"?d.formatMessage({id:"zG4NW2",defaultMessage:"No GPTs have been shared with you yet"}):void 0,cutId:a},a)]})})}function R({cutId:s,emptyMessage:t}){var u;const[i,a]=m.useState(!0),{data:r,hasNextPage:d,fetchNextPage:l,isLoading:o}=T({cutId:s,limit:A,enabled:i});return o&&(r==null||r.pages.length===0)?e.jsx("div",{className:"my-8 flex justify-center",children:e.jsx(P,{})}):!o&&((u=r==null?void 0:r.pages)==null?void 0:u[0].list.items.length)===0?e.jsx("span",{children:t}):e.jsxs("div",{children:[e.jsx("div",{children:r==null?void 0:r.pages.flatMap(b=>b.list.items.map(({resource:x})=>e.jsx(z,{gizmoResource:x},x.gizmo.id)))}),!i||d||o?e.jsx(g,{color:"secondary",onClick:()=>{i?l():a(!0)},loading:o,fullWidth:!0,children:e.jsx(n,{...W.discoveryLoadMore})}):null]})}const W=v({discoveryLoadMore:{id:"gizmo.mygpts.loadMore",defaultMessage:"Load more"}});function U({children:s}){const t=c(),i=y();return t==null?null:t.canInteractWithGizmos()?e.jsxs("div",{children:[s,e.jsx("div",{className:"fixed bottom-3 right-3",children:e.jsx(w,{})})]}):t.hasPaidSubscription()?null:e.jsx(B,{button:e.jsx(g,{onClick:()=>k(i,"Gizmo landing upsell"),children:e.jsx(n,{id:"gizmosLanding.upgradeToChatGPTPlus",defaultMessage:"Upgrade to ChatGPT Plus"})}),children:e.jsx(n,{id:"gizmosLanding.gptsRollingOut",defaultMessage:"GPTs are gradually rolling out to Plus users"})})}function B({children:s,button:t}){return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsxs("div",{className:"flex max-w-sm flex-col gap-4 p-6 text-center",children:[e.jsx("h2",{children:s}),e.jsx("div",{className:"m-auto",children:t})]})})}function me(){const s=c(),t=s==null?void 0:s.canCreateGizmos(),i=j();return m.useEffect(()=>{s!=null&&!t&&i.push("/gpts")},[s,t,i]),s!=null&&s.canCreateGizmos()?e.jsx(S,{header:e.jsxs(L,{children:[e.jsx(E,{}),e.jsx("div",{className:"ml-auto",children:e.jsx(_,{})})]}),children:e.jsx(U,{children:e.jsx(I,{})})}):null}export{me as default};
//# sourceMappingURL=go6i5w6mkdpon7mv.js.map