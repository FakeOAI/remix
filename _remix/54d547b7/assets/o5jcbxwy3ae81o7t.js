import{a3 as T,bK as j,aj as A,r as U,P as l,d,t as e,bJ as o,by as C,aV as G,aS as F,a8 as r,aT as I,ad as k}from"./j2za2a5bh01bf12l.js";import{cK as S,a5 as X,dt as E,du as L}from"./ol4rayecis5vwkrv.js";import{t as _}from"./dsfspetclj3qqxnn.js";import{u as O}from"./ozwh34fmdynh510n.js";import{u,y as $}from"./ijauqsk65ba42v28.js";import"./jwd9u48bpcglqn07.js";import"./bdkmoklqtrhgpmvf.js";import"./0nplc8csropx3b2z.js";import"./e1k1bicdxyg64hj7.js";import"./7eaepxiuvocxcnyo.js";import"./b0u6reko7ueifq6h.js";const D="webp",H=2579,K=1159,Q="srgb",q=3,R="uchar",Y=72,z="4:2:0",B=!1,V=!0,W=!1,J="https://cdn.oaistatic.com/assets/gpt4o_nux_bg-ofsa8c8d.webp",Z={format:D,width:H,height:K,space:Q,channels:q,depth:R,density:Y,chromaSubsampling:z,isProgressive:B,hasProfile:V,hasAlpha:W,src:J},ue=({onClose:m})=>{const p=T(),{eligible:g,isLoading:h}=O(),{markAsViewed:f}=S(X.AG8PqS2q),x=u(!1),y=u(!0),i=E(),{doesUserHaveAnyAccountsWithPlusFeatures:M}=j(),{categories:N,isLoading:b}=$(),t=A(),s=N.find(({categoryId:v})=>v===L.GPT4o),n=g&&!h&&!b&&s;if(U.useEffect(()=>{n&&l.logEvent(d.gpt4oNUXModalShown,{plan_type:t?.planType})},[n,t?.planType]),!n)return null;const c=()=>{f(),_(),m()},w=()=>{l.logEvent(d.gpt4oNUXModalDismissed,{plan_type:t?.planType,switch_to_gpt4o:!0}),x({modelId:s.defaultModel,location:"GPT‑4o NUX Modal"}),i(s.defaultModel),c()},P=()=>{l.logEvent(d.gpt4oNUXModalTryItNowClicked,{plan_type:t?.planType}),y({modelId:s.defaultModel,location:"GPT‑4o NUX Modal"}),i(s.defaultModel),c()};return e.jsx(o.Root,{isOpen:!0,onClose:C,children:e.jsx(o.Overlay,{children:e.jsxs(o.Content,{className:"relative flex max-w-md flex-col items-center rounded-xl p-0 pb-10 text-center focus:outline-none",children:[e.jsxs("div",{className:"relative flex w-full items-center justify-center overflow-hidden bg-clip-content",children:[e.jsx("img",{src:Z.src,height:210,fetchPriority:"high",className:"rounded-t-xl"}),e.jsx(G,{className:"absolute right-0 top-0 m-4",onClick:w})]}),e.jsxs("div",{className:"mb-5 mt-8 flex flex-col px-6",children:[e.jsx(F,{className:"font-semibold leading-6",children:e.jsx(r,{...a.title,values:{modelName:"GPT‑4o"}})}),e.jsx(I,{className:"pt-3 text-sm text-token-text-secondary",children:M?e.jsx(r,{...a.bodyPaidFinal,values:{modelName:"GPT‑4o",anotherModelName:"GPT‑4"}}):e.jsx(r,{...a.bodyFreeFinal,values:{modelName:"GPT‑4o"}})})]}),e.jsx("div",{className:"flex justify-center gap-4",children:e.jsx(o.Button,{onClick:P,title:p.formatMessage(a.buttonTryItNow),className:"rounded-xl px-5",color:"primary"})})]})})})},a=k({title:{id:"1kewDD",defaultMessage:"Introducing {modelName}"},bodyPaidFinal:{id:"Z6KHqN",defaultMessage:"You can now try our newest model, {modelName}. It’s faster than {anotherModelName}, better at understanding images, and speaks more languages."},bodyFreeFinal:{id:"w8Y79o",defaultMessage:"You now have limited access to our latest model, {modelName}. It’s smarter, understands images, can browse the web, and speaks more languages."},buttonTryItNow:{id:"RHbQLy",defaultMessage:"Try it now"},titleNoAuth:{id:"k9PG/O",defaultMessage:"Sign up to try GPT‑4o"},bodyNoAuth:{id:"Pd71un",defaultMessage:"Get smarter responses, upload files, analyze images, and browse the web with our latest model."}});export{ue as ModelOnboardingNUXModal};
//# sourceMappingURL=o5jcbxwy3ae81o7t.js.map