import{r,E as y,P as h,d as b,j as n,ar as E}from"./lyq6iybqnfh2fenf.js";import{bH as v,q as A,bp as j,bC as k,bI as P}from"./n542xv17vu5zyr22.js";import{u as C}from"./hisa0l2o7w2sqab0.js";import{T as S}from"./s7ea4qurxyiezrhv.js";import{T as D}from"./c0rg223szyd362nb.js";import"./dmskyifkjcri638q.js";import"./juwn1ys4rchpfi43.js";import"./i0vdufu3pvggzqzi.js";const R={strong:o=>{const{node:e,children:t,...s}=o;return n.jsx("strong",{...s,className:E(s.className,"font-semibold text-token-text-primary"),children:t})},p:o=>{const{node:e,children:t,...s}=o;return n.jsx("p",{...s,className:E(s.className,"text-base","has-[strong]:mb-1 [&:not(:first-child)]:has-[strong]:mt-3 [&:not(:has(strong))]:mb-3"),children:t})}};function O({headline:o,message:e}){const s=e.create_time?new Date(e.create_time*1e3):Date.now(),i=C(+s,48e4);return n.jsxs("div",{className:"flex items-center gap-2.5",children:[n.jsx(P,{percentage:i,thickness:1/8,className:"h-5 w-5 text-token-text-primary",backgroundStrokeClassName:"stroke-token-main-surface-tertiary",transitionDuration:`${(100-i)/100*.2}s`,transitionTimingFunction:"cubic-bezier(0.55, 0, 1, 1)"}),o]})}function G({messages:o,isStreaming:e,clientThreadId:t}){const[s,i]=r.useState(""),[m,_]=r.useState(!1),g=v(t)===y.STREAMING||e,a=o[0].message,x=a.id,p=A.getServerThreadId(t),c=j(a),l=a.metadata?.summarization_headline,M=e&&l!=null;r.useEffect(()=>{const T=/\*\*(.*?)(?:\*\*|\n|$)/g;let f,u="";for(;(f=T.exec(c))!=null;)u=f[1].trim();u?i(u):a.metadata?.initial_text!=null&&i(a.metadata.initial_text)},[c,a.metadata?.initial_text]),r.useEffect(()=>{c.length>0&&!l&&_(!0)},[c,l]);const d=r.useMemo(()=>({client_thread_id:t,message_id:x,conversationId:p}),[t,x,p]);r.useEffect(()=>{m&&h.logEvent(b.receivedA8KM123Message,d)},[m]);const N=r.useCallback(()=>{h.logEvent(b.openedA8KM123Message,{...d,isStreaming:e})},[d,e]);return n.jsx(D,{status:g?S.Running:S.Finished,highlightedCommand:g?l==null?s:n.jsx(O,{headline:l,message:a}):a.metadata?.finished_text??"",onOpenAnalytics:N,children:m&&!M?n.jsx("div",{className:"mb-4 border-l-2 pl-4 dark:border-token-text-secondary",children:n.jsx(k,{componentOverrides:R,className:"not-prose leading-6",children:c})}):null})}export{R as SUMMARY_MARKDOWN_COMPONENT_OVERRIDES,G as default};
//# sourceMappingURL=ezr4fresy3q5vcnw.js.map