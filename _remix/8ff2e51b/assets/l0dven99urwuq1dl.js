import{H as j,e6 as v,ar as A,r as C,P as n,A as d,j as e,M as o,J as U,bn as G,b8 as E,K as r,b9 as F,N as I}from"./akpsmk6cb1cg4zar.js";import{bC as k,aE as X,y as L,bD as D,bE as O,a8 as S}from"./g39shxtad7atpc8r.js";import{u as $}from"./lie5p3zp6olp9h8s.js";import{u,b as H}from"./g5kkvpknp0ak80ql.js";import"./kad6c5t9gqqe4h5y.js";import"./elyve5qg9n76v78m.js";import"./j92d0uykuhvxtukf.js";import"./if4w7u95kxtmlu1f.js";const W=({onClose:c})=>{const g=j(),{eligible:p,isLoading:f}=$(),{markAsViewed:x}=k(X.AG8PqS2q),M=u(!1),N=u(!0),i=L(),{doesUserHaveAnyAccountsWithPlusFeatures:h}=v(),{categories:y,isLoading:b}=H(),s=A(),t=y.find(({categoryId:T})=>T===D.GPT4o),l=p&&!f&&!b&&t;if(C.useEffect(()=>{l&&n.logEvent(d.gpt4oNUXModalShown,{plan_type:s==null?void 0:s.planType})},[l,s==null?void 0:s.planType]),!l)return null;const m=()=>{x(),S(),c()},w=()=>{n.logEvent(d.gpt4oNUXModalDismissed,{plan_type:s==null?void 0:s.planType,switch_to_gpt4o:!0}),M({modelId:t.defaultModel,location:"GPT‑4o NUX Modal"}),i(t.defaultModel),m()},P=()=>{n.logEvent(d.gpt4oNUXModalTryItNowClicked,{plan_type:s==null?void 0:s.planType}),N({modelId:t.defaultModel,location:"GPT‑4o NUX Modal"}),i(t.defaultModel),m()};return e.jsx(o.Root,{isOpen:!0,onClose:U,children:e.jsx(o.Overlay,{children:e.jsxs(o.Content,{className:"relative flex max-w-md flex-col items-center rounded-xl p-0 pb-10 text-center focus:outline-none",children:[e.jsxs("div",{className:"relative flex w-full items-center justify-center overflow-hidden bg-clip-content",children:[e.jsx("img",{src:O.src,height:210,fetchPriority:"high",className:"rounded-t-xl"}),e.jsx(G,{className:"absolute right-0 top-0 m-4",onClick:w})]}),e.jsxs("div",{className:"mb-5 mt-8 flex flex-col px-6",children:[e.jsx(E,{className:"font-semibold leading-6",children:e.jsx(r,{...a.title,values:{modelName:"GPT‑4o"}})}),e.jsx(F,{className:"pt-3 text-sm text-token-text-secondary",children:h?e.jsx(r,{...a.bodyPaidFinal,values:{modelName:"GPT‑4o",anotherModelName:"GPT‑4"}}):e.jsx(r,{...a.bodyFreeFinal,values:{modelName:"GPT‑4o"}})})]}),e.jsx("div",{className:"flex justify-center gap-4",children:e.jsx(o.Button,{onClick:P,title:g.formatMessage(a.buttonTryItNow),className:"rounded-xl px-5",color:"primary"})})]})})})},a=I({title:{id:"1kewDD",defaultMessage:"Introducing {modelName}"},bodyPaidFinal:{id:"Z6KHqN",defaultMessage:"You can now try our newest model, {modelName}. It’s faster than {anotherModelName}, better at understanding images, and speaks more languages."},bodyFreeFinal:{id:"w8Y79o",defaultMessage:"You now have limited access to our latest model, {modelName}. It’s smarter, understands images, can browse the web, and speaks more languages."},buttonTryItNow:{id:"RHbQLy",defaultMessage:"Try it now"},titleNoAuth:{id:"k9PG/O",defaultMessage:"Sign up to try GPT‑4o"},bodyNoAuth:{id:"Pd71un",defaultMessage:"Get smarter responses, upload files, analyze images, and browse the web with our latest model."}});export{W as ModelOnboardingNUXModal};
//# sourceMappingURL=l0dven99urwuq1dl.js.map