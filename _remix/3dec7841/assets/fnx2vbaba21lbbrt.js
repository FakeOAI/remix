import{G as j,e6 as v,ar as C,r as U,P as n,y as d,j as e,M as o,I as A,bn as G,b8 as I,J as r,b9 as F,K as k}from"./fl2d4axqwlec442f.js";import{bB as X,aD as E,y as L,bC as D,bD as O,a7 as S}from"./gh19awl4r9489re0.js";import{u as $}from"./k07takrbtrsk9de9.js";import{u,b as _}from"./bgwzf28nepp7ingk.js";import"./j1he6evgnbin0qu0.js";import"./lq6036cn7rmiq25p.js";import"./mdv4qne5bad6k363.js";import"./ftwz3m1z6v8nrdrn.js";const W=({onClose:c})=>{const g=j(),{eligible:p,isLoading:f}=$(),{markAsViewed:x}=X(E.AG8PqS2q),y=u(!1),M=u(!0),i=L(),{doesUserHaveAnyAccountsWithPlusFeatures:h}=v(),{categories:N,isLoading:b}=_(),s=C(),t=N.find(({categoryId:T})=>T===D.GPT4o),l=p&&!f&&!b&&t;if(U.useEffect(()=>{l&&n.logEvent(d.gpt4oNUXModalShown,{plan_type:s==null?void 0:s.planType})},[l,s==null?void 0:s.planType]),!l)return null;const m=()=>{x(),S(),c()},w=()=>{n.logEvent(d.gpt4oNUXModalDismissed,{plan_type:s==null?void 0:s.planType,switch_to_gpt4o:!0}),y({modelId:t.defaultModel,location:"GPT‑4o NUX Modal"}),i(t.defaultModel),m()},P=()=>{n.logEvent(d.gpt4oNUXModalTryItNowClicked,{plan_type:s==null?void 0:s.planType}),M({modelId:t.defaultModel,location:"GPT‑4o NUX Modal"}),i(t.defaultModel),m()};return e.jsx(o.Root,{isOpen:!0,onClose:A,children:e.jsx(o.Overlay,{children:e.jsxs(o.Content,{className:"relative flex max-w-md flex-col items-center rounded-xl p-0 pb-10 text-center focus:outline-none",children:[e.jsxs("div",{className:"relative flex w-full items-center justify-center overflow-hidden bg-clip-content",children:[e.jsx("img",{src:O.src,height:210,fetchPriority:"high",className:"rounded-t-xl"}),e.jsx(G,{className:"absolute right-0 top-0 m-4",onClick:w})]}),e.jsxs("div",{className:"mb-5 mt-8 flex flex-col px-6",children:[e.jsx(I,{className:"font-semibold leading-6",children:e.jsx(r,{...a.title,values:{modelName:"GPT‑4o"}})}),e.jsx(F,{className:"pt-3 text-sm text-token-text-secondary",children:h?e.jsx(r,{...a.bodyPaidFinal,values:{modelName:"GPT‑4o",anotherModelName:"GPT‑4"}}):e.jsx(r,{...a.bodyFreeFinal,values:{modelName:"GPT‑4o"}})})]}),e.jsx("div",{className:"flex justify-center gap-4",children:e.jsx(o.Button,{onClick:P,title:g.formatMessage(a.buttonTryItNow),className:"rounded-xl px-5",color:"primary"})})]})})})},a=k({title:{id:"1kewDD",defaultMessage:"Introducing {modelName}"},bodyPaidFinal:{id:"Z6KHqN",defaultMessage:"You can now try our newest model, {modelName}. It’s faster than {anotherModelName}, better at understanding images, and speaks more languages."},bodyFreeFinal:{id:"w8Y79o",defaultMessage:"You now have limited access to our latest model, {modelName}. It’s smarter, understands images, can browse the web, and speaks more languages."},buttonTryItNow:{id:"RHbQLy",defaultMessage:"Try it now"},titleNoAuth:{id:"k9PG/O",defaultMessage:"Sign up to try GPT‑4o"},bodyNoAuth:{id:"Pd71un",defaultMessage:"Get smarter responses, upload files, analyze images, and browse the web with our latest model."}});export{W as ModelOnboardingNUXModal};
//# sourceMappingURL=fnx2vbaba21lbbrt.js.map