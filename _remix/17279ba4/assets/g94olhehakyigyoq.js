import{a1 as h,aN as c,a8 as b,r as m,V as G,l as e,Z as n,a$ as v,be as f,a0 as P,bp as g,dL as y}from"./knistvoayd9w5dlh.js";import{a as M}from"./i0c7avbvchmycpje.js";import{k as C}from"./c3cyng6qx8iiz8qa.js";import{C as T,a as N,b as z}from"./fi6uydh3ep5wk8bh.js";import{H as w}from"./kz1akz3adysr1hkk.js";import{z as L,bY as k}from"./bzpogxw1ym966dib.js";import{G as S}from"./l9kyjma2c9d9fcou.js";import{E,a as _}from"./bo6ajkrtbac292qn.js";import"./egxlpxkjkn5vlr2a.js";import"./29q49b6ohvllb80t.js";import"./hr63ipejtreaccw8.js";import"./l1uldd1k8t2kfbof.js";import"./g3edk9aakj5fvio1.js";import"./f82fvalqosmyoquc.js";import"./ltygg1rmae4fu7m0.js";import"./k1g7ixcrm08fbb8r.js";import"./e4d1gms1m9qt8gxd.js";import"./h9vj7n7cqctoc7pi.js";import"./ddotepeck17pieaf.js";import"./ows4l7dei3tk1y7i.js";import"./l1nutrscmdo31wpr.js";import"./ltrrnqt1nze896le.js";import"./oreqyxqpkhezhrvm.js";import"./jy0ytxf2nsk2z09n.js";const A=8,x=h.div`border-b-2 border-b-black pb-3 dark:border-b-white`,p=h.div`cursor-pointer border-b-2 border-b-transparent pb-3 text-token-text-secondary`;function I(){const s=c(),t=b(),a=s?.isWorkspaceAccount(),[r,i]=m.useState("mine");M({resetThreadAction:()=>{t.push("/")}});const d=G();if(s==null)return null;const l=e.jsx(n,{id:"1pqG1A",defaultMessage:"Created by me"}),o=e.jsx(n,{id:"2oQjZs",defaultMessage:"Shared with me"});return e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"mx-auto max-w-3xl px-4 py-12 pt-0",children:[e.jsx("h1",{className:"mb-8 text-xl font-semibold md:text-2xl",children:e.jsx(n,{id:"dgQTc/",defaultMessage:"My GPTs"})}),a&&(r==="mine"?e.jsxs("div",{className:"mb-4 flex flex-row space-x-4",children:[e.jsx(x,{children:l}),e.jsx(p,{onClick:()=>i("shared_with_me"),children:o})]}):e.jsxs("div",{className:"mb-4 flex flex-row space-x-4",children:[e.jsx(p,{onClick:()=>i("mine"),children:l}),e.jsx(x,{children:o})]})),r==="mine"&&e.jsx(T,{type:N.Enabled}),e.jsx(R,{emptyMessage:r==="shared_with_me"?d.formatMessage({id:"zG4NW2",defaultMessage:"No GPTs have been shared with you yet"}):void 0,cutId:r},r)]})})}function R({cutId:s,emptyMessage:t}){const[a,r]=m.useState(!0),{data:i,hasNextPage:d,fetchNextPage:l,isLoading:o}=C({cutId:s,limit:A,enabled:a});return o&&(i==null||i.pages.length===0)?e.jsx("div",{className:"my-8 flex justify-center",children:e.jsx(v,{})}):!o&&i?.pages?.[0].list.items.length===0?e.jsx("span",{children:t}):e.jsxs("div",{children:[e.jsx("div",{children:i?.pages.flatMap(j=>j.list.items.map(({resource:u})=>e.jsx(z,{gizmoResource:u},u.gizmo.id)))}),!a||d||o?e.jsx(f,{color:"secondary",onClick:()=>{a?l():r(!0)},loading:o,fullWidth:!0,children:e.jsx(n,{...W.discoveryLoadMore})}):null]})}const W=P({discoveryLoadMore:{id:"gizmo.mygpts.loadMore",defaultMessage:"Load more"}});function B({children:s}){const t=c(),a=g();return t==null?null:t.canInteractWithGizmos()?e.jsxs("div",{children:[s,e.jsx("div",{className:"fixed bottom-3 right-3",children:e.jsx(w,{})})]}):t.hasPaidSubscription()?null:e.jsx(U,{button:e.jsx(f,{onClick:()=>L(a,"Gizmo landing upsell"),children:e.jsx(n,{id:"gizmosLanding.upgradeToChatGPTPlus",defaultMessage:"Upgrade to ChatGPT Plus"})}),children:e.jsx(n,{id:"gizmosLanding.gptsRollingOut",defaultMessage:"GPTs are gradually rolling out to Plus users"})})}function U({children:s,button:t}){return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsxs("div",{className:"flex max-w-sm flex-col gap-4 p-6 text-center",children:[e.jsx("h2",{children:s}),e.jsx("div",{className:"m-auto",children:t})]})})}const me=()=>(y(),null);function ue(){const s=c(),t=s?.canCreateGizmos(),a=g();return m.useEffect(()=>{s!=null&&!t&&a("/gpts")},[s,t,a]),s?.canCreateGizmos()?e.jsx(S,{header:e.jsxs(k,{children:[e.jsx(E,{}),e.jsx("div",{className:"ml-auto",children:e.jsx(_,{})})]}),children:e.jsx(B,{children:e.jsx(I,{})})}):null}export{me as clientLoader,ue as default};
//# sourceMappingURL=g94olhehakyigyoq.js.map