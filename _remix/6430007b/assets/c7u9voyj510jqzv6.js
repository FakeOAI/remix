import{O as f,aq as c,X as g,r as m,H as G,j as e,K as n,aZ as P,bt as j,N as v,ay as y,dP as M}from"./7q6a9ksdf0pmxyke.js";import{u as C}from"./mswg0syw7t5hhunh.js";import{n as T}from"./okhnpblvnj0kkqgn.js";import{C as N,a as z,G as w}from"./g9ncrgafr8gk984k.js";import{H as L}from"./np3npx5jfq9bbwqo.js";import{_ as S,du as k}from"./g61cr21b5136jq6j.js";import{G as E}from"./hip9cs0g9arhvlfe.js";import{E as _,P as A}from"./ho1a4nnxi9o2a33u.js";import"./hk3bf7nz434dsnqo.js";import"./mbounqbdqvic35ki.js";import"./cm2wm4e12j79q85q.js";import"./gz5re6xwi3tsdosw.js";import"./gvb6eavigf3tyks0.js";import"./obtz9g1upg41tlji.js";import"./v4kvvrw533l7srsl.js";import"./htxj1h1yaw7fp9ax.js";import"./cajrgbe5bf885l12.js";import"./iyp1l4o6y6ufqjt7.js";import"./i562x7s3ysjk8eld.js";import"./gsio46vq179oop0c.js";import"./c5skys0ao3aqjau7.js";import"./dmclktsjqsuvf2fg.js";import"./mrk3rb7h0czi8yqx.js";import"./dilk8elagkdwchae.js";import"./jqf3ygjfbrgslpls.js";import"./jpt1t38j1d9lytbb.js";const I=8,p=f.div`border-b-2 border-b-black pb-3 dark:border-b-white`,h=f.div`cursor-pointer border-b-2 border-b-transparent pb-3 text-token-text-secondary`;function R(){const s=c(),t=g(),i=s==null?void 0:s.isWorkspaceAccount(),[a,r]=m.useState("mine");C({resetThreadAction:()=>{t.push("/")}});const d=G();if(s==null)return null;const l=e.jsx(n,{id:"1pqG1A",defaultMessage:"Created by me"}),o=e.jsx(n,{id:"2oQjZs",defaultMessage:"Shared with me"});return e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"mx-auto max-w-3xl px-4 py-12 pt-0",children:[e.jsx("h1",{className:"mb-8 text-xl font-semibold md:text-2xl",children:e.jsx(n,{id:"dgQTc/",defaultMessage:"My GPTs"})}),i&&(a==="mine"?e.jsxs("div",{className:"mb-4 flex flex-row space-x-4",children:[e.jsx(p,{children:l}),e.jsx(h,{onClick:()=>r("shared_with_me"),children:o})]}):e.jsxs("div",{className:"mb-4 flex flex-row space-x-4",children:[e.jsx(h,{onClick:()=>r("mine"),children:l}),e.jsx(p,{children:o})]})),a==="mine"&&e.jsx(N,{type:z.Enabled}),e.jsx(W,{emptyMessage:a==="shared_with_me"?d.formatMessage({id:"zG4NW2",defaultMessage:"No GPTs have been shared with you yet"}):void 0,cutId:a},a)]})})}function W({cutId:s,emptyMessage:t}){var u;const[i,a]=m.useState(!0),{data:r,hasNextPage:d,fetchNextPage:l,isLoading:o}=T({cutId:s,limit:I,enabled:i});return o&&(r==null||r.pages.length===0)?e.jsx("div",{className:"my-8 flex justify-center",children:e.jsx(P,{})}):!o&&((u=r==null?void 0:r.pages)==null?void 0:u[0].list.items.length)===0?e.jsx("span",{children:t}):e.jsxs("div",{children:[e.jsx("div",{children:r==null?void 0:r.pages.flatMap(b=>b.list.items.map(({resource:x})=>e.jsx(w,{gizmoResource:x},x.gizmo.id)))}),!i||d||o?e.jsx(j,{color:"secondary",onClick:()=>{i?l():a(!0)},loading:o,fullWidth:!0,children:e.jsx(n,{...B.discoveryLoadMore})}):null]})}const B=v({discoveryLoadMore:{id:"gizmo.mygpts.loadMore",defaultMessage:"Load more"}});function H({children:s}){const t=c(),i=y();return t==null?null:t.canInteractWithGizmos()?e.jsxs("div",{children:[s,e.jsx("div",{className:"fixed bottom-3 right-3",children:e.jsx(L,{})})]}):t.hasPaidSubscription()?null:e.jsx(U,{button:e.jsx(j,{onClick:()=>S(i,"Gizmo landing upsell"),children:e.jsx(n,{id:"gizmosLanding.upgradeToChatGPTPlus",defaultMessage:"Upgrade to ChatGPT Plus"})}),children:e.jsx(n,{id:"gizmosLanding.gptsRollingOut",defaultMessage:"GPTs are gradually rolling out to Plus users"})})}function U({children:s,button:t}){return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsxs("div",{className:"flex max-w-sm flex-col gap-4 p-6 text-center",children:[e.jsx("h2",{children:s}),e.jsx("div",{className:"m-auto",children:t})]})})}const pe=()=>(M(),null);function he(){const s=c(),t=s==null?void 0:s.canCreateGizmos(),i=g();return m.useEffect(()=>{s!=null&&!t&&i.push("/gpts")},[s,t,i]),s!=null&&s.canCreateGizmos()?e.jsx(E,{header:e.jsxs(k,{children:[e.jsx(_,{}),e.jsx("div",{className:"ml-auto",children:e.jsx(A,{})})]}),children:e.jsx(H,{children:e.jsx(R,{})})}):null}export{pe as clientLoader,he as default};
//# sourceMappingURL=c7u9voyj510jqzv6.js.map