import{r as a,j as t,ak as R,ar as F,a3 as A,P as m,d as h,aF as b,aB as N,R as _}from"./ign6lc5qqsbgzj3q.js";import{cl as z,dd as I,a6 as B,q as T,db as G,dc as K,bo as $}from"./f2jm88xc868xaf4h.js";import"./wrbxtg8dgsjl2z0d.js";const q=a.forwardRef(function(s,n){const{className:c,...d}=s;return t.jsxs("div",{className:"grid",children:[t.jsx("textarea",{className:R("col-start-1 col-end-2 row-start-1 row-end-2 resize-none overflow-hidden p-0",c),ref:n,...d}),t.jsxs("span",{className:"invisible col-start-1 col-end-2 row-start-1 row-end-2 whitespace-pre-wrap p-0",children:[s.value," "]})]})});function D({initialText:r,clientThreadId:s,currentLeaf:n,onChangeItemInView:c,onExitEdit:d,onRequestCompletion:j,disabled:k,attachments:l}){const w=a.useId(),u=`${n}-${w}`,[x,E]=a.useState(r??""),p=a.useRef(null),y=z(),f=x.trim()==="",M=a.useCallback(e=>{E(e.currentTarget.value)},[]),v=a.useCallback(()=>{if(f)return;const e=()=>{T.updateTree(s,i=>{const P=i.getParentId(n);i.addNode(u,x,P,_.User,void 0,l?{attachments:l}:void 0)}),c(u)},o=new I;j({type:A.Next,promptId:u,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!0,completionMetadata:{conversationMode:B.getConversationMode(s)},updateTree:e,turnTracker:o}),d(),m.logEvent(h.changeNode,{intent:"edit_save"})},[l,s,n,u,x,c,j,d,f]),g=a.useCallback(()=>{c(n),m.logEvent(h.changeNode,{intent:"edit_cancel"}),d(),m.logEvent(h.cancelEditPrompt,{threadId:T.getServerThreadId(s)})},[n,c,d,s]);a.useEffect(()=>{const e=p.current;if(e){e.focus();const o=e.value.length;e.setSelectionRange(o,o)}},[]),a.useEffect(()=>{const e=p.current,o=i=>{i.key==="Enter"&&i.metaKey?v():i.key==="Escape"&&g()};return e&&e.addEventListener("keydown",o),()=>{e&&e.removeEventListener("keydown",o)}},[g,v]);const C=l&&l.length>0&&t.jsx(J,{children:l.map(e=>t.jsx(G,{width:y?"normal":"wide",file:e.name,contextConnectorInfo:K(e.context_connector_info)},e.id))}),S=t.jsx("div",{className:"m-2 max-h-[25dvh] overflow-auto",children:t.jsx(q,{ref:p,value:x,onChange:M,className:"m-0 w-full resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0"})});return t.jsxs("div",{className:"rounded-3xl bg-token-main-surface-tertiary px-3 py-3",children:[C,S,t.jsxs("div",{className:"flex justify-end gap-2",children:[t.jsx(b,{as:"button",color:"secondary",onClick:g,children:t.jsx(N,{id:"D9gbPp",defaultMessage:"Cancel"})}),t.jsx(b,{as:"button",onClick:v,disabled:k||f,children:t.jsx(N,{id:"KGxIJG",defaultMessage:"Send"})})]})]})}const J=F.div`flex gap-2 flex-wrap`;function O({message:r,...s}){return t.jsx(D,{currentLeaf:r.nodeId,initialText:$(r.message),attachments:r.message.metadata?.attachments,...s})}export{O as TextMessageEditor};
//# sourceMappingURL=cx3z77tlzmwh8b29.js.map