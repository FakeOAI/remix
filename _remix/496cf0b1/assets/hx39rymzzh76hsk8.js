import{G as j,dG as v,aq as U,r as A,P as d,y as n,j as e,M as o,I as G,bi as C,b3 as I,J as r,b4 as F,K as k}from"./e8vun44xdcdlb616.js";import{bz as X,aD as E,x as L,aU as D,bA as O,ae as S}from"./ggfd01qgvnzl1dfn.js";import{u as $}from"./hh81ty3bbkmbgknd.js";import{u,b as _}from"./8hnumlh3uw9b5jv3.js";import"./en0webbbxycrteaa.js";import"./bquctxd2pduue2mp.js";import"./w6ck9aw2zcc1q7e6.js";import"./bhmbk3lmmg39hscv.js";const W=({onClose:c})=>{const g=j(),{eligible:p,isLoading:f}=$(),{markAsViewed:x}=X(E.AG8PqS2q),M=u(!1),h=u(!0),i=L(),{doesUserHaveAnyAccountsWithPlusFeatures:y}=v(),{categories:N,isLoading:b}=_(),s=U(),t=N.find(({categoryId:T})=>T===D.GPT4o),l=p&&!f&&!b&&t;if(A.useEffect(()=>{l&&d.logEvent(n.gpt4oNUXModalShown,{plan_type:s==null?void 0:s.planType})},[l,s==null?void 0:s.planType]),!l)return null;const m=()=>{x(),S(),c()},w=()=>{d.logEvent(n.gpt4oNUXModalDismissed,{plan_type:s==null?void 0:s.planType,switch_to_gpt4o:!0}),M({modelId:t.defaultModel,location:"GPT‑4o NUX Modal"}),i(t.defaultModel),m()},P=()=>{d.logEvent(n.gpt4oNUXModalTryItNowClicked,{plan_type:s==null?void 0:s.planType}),h({modelId:t.defaultModel,location:"GPT‑4o NUX Modal"}),i(t.defaultModel),m()};return e.jsx(o.Root,{isOpen:!0,onClose:G,children:e.jsx(o.Overlay,{children:e.jsxs(o.Content,{className:"relative flex max-w-md flex-col items-center rounded-xl p-0 pb-10 text-center focus:outline-none",children:[e.jsxs("div",{className:"relative flex w-full items-center justify-center overflow-hidden bg-clip-content",children:[e.jsx("img",{src:O.src,height:210,fetchPriority:"high",className:"rounded-t-xl"}),e.jsx(C,{className:"absolute right-0 top-0 m-4",onClick:w})]}),e.jsxs("div",{className:"mb-5 mt-8 flex flex-col px-6",children:[e.jsx(I,{className:"font-semibold leading-6",children:e.jsx(r,{...a.title,values:{modelName:"GPT‑4o"}})}),e.jsx(F,{className:"pt-3 text-sm text-token-text-secondary",children:y?e.jsx(r,{...a.bodyPaidFinal,values:{modelName:"GPT‑4o",anotherModelName:"GPT‑4"}}):e.jsx(r,{...a.bodyFreeFinal,values:{modelName:"GPT‑4o"}})})]}),e.jsx("div",{className:"flex justify-center gap-4",children:e.jsx(o.Button,{onClick:P,title:g.formatMessage(a.buttonTryItNow),className:"rounded-xl px-5",color:"primary"})})]})})})},a=k({title:{id:"1kewDD",defaultMessage:"Introducing {modelName}"},bodyPaidFinal:{id:"Z6KHqN",defaultMessage:"You can now try our newest model, {modelName}. It’s faster than {anotherModelName}, better at understanding images, and speaks more languages."},bodyFreeFinal:{id:"w8Y79o",defaultMessage:"You now have limited access to our latest model, {modelName}. It’s smarter, understands images, can browse the web, and speaks more languages."},buttonTryItNow:{id:"RHbQLy",defaultMessage:"Try it now"},titleNoAuth:{id:"k9PG/O",defaultMessage:"Sign up to try GPT‑4o"},bodyNoAuth:{id:"Pd71un",defaultMessage:"Get smarter responses, upload files, analyze images, and browse the web with our latest model."}});export{W as ModelOnboardingNUXModal};
//# sourceMappingURL=hx39rymzzh76hsk8.js.map