import{r as n,j as t,c as P,O as R,by as A,e4 as F,P as v,A as m,bg as j,K as b,cQ as _,cD as z}from"./l8rxl89ki17pr98v.js";import{bv as I,cH as K,cI as D}from"./e5vof8gm97tserr9.js";import{g as G,T}from"./gkunztsgik0aqyg7.js";import"./niys9t9a5yd9d6hx.js";import"./df1b7c14snj67tn9.js";const $=n.forwardRef(function(s,a){const{className:c,...l}=s;return t.jsxs("div",{className:"grid",children:[t.jsx("textarea",{className:P("col-start-1 col-end-2 row-start-1 row-end-2 resize-none overflow-hidden p-0",c),ref:a,...l}),t.jsxs("span",{className:"invisible col-start-1 col-end-2 row-start-1 row-end-2 whitespace-pre-wrap p-0",children:[s.value," "]})]})});function B({initialText:r,clientThreadId:s,currentLeaf:a,onChangeItemInView:c,onExitEdit:l,onRequestCompletion:h,disabled:N,attachments:i}){const w=n.useId(),u=`${a}-${w}`,[x,k]=n.useState(r??""),p=n.useRef(null),y=A(),E=n.useCallback(e=>{k(e.currentTarget.value)},[]),f=n.useCallback(()=>{const e=()=>{T.updateTree(s,d=>{const S=d.getParentId(a);d.addNode(u,x,S,_.User,void 0,i?{attachments:i}:void 0)}),c(u)},o=new I;h({type:F.Next,promptId:u,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!0,completionMetadata:{conversationMode:G.getConversationMode(s)},updateTree:e,turnTracker:o}),l(),v.logEvent(m.changeNode,{intent:"edit_save"})},[i,s,a,u,x,c,h,l]),g=n.useCallback(()=>{c(a),v.logEvent(m.changeNode,{intent:"edit_cancel"}),l(),v.logEvent(m.cancelEditPrompt,{threadId:T.getServerThreadId(s)})},[a,c,l,s]);n.useEffect(()=>{const e=p.current;if(e){e.focus();const o=e.value.length;e.setSelectionRange(o,o)}},[]),n.useEffect(()=>{const e=p.current,o=d=>{d.key==="Enter"&&d.metaKey?f():d.key==="Escape"&&g()};return e&&e.addEventListener("keydown",o),()=>{e&&e.removeEventListener("keydown",o)}},[g,f]);const M=i&&i.length>0&&t.jsx(H,{children:i.map(e=>t.jsx(K,{width:y?"normal":"wide",file:e.name,contextConnectorInfo:D(e.context_connector_info)},e.id))}),C=t.jsx("div",{className:"m-2 max-h-[25dvh] overflow-auto",children:t.jsx($,{ref:p,value:x,onChange:E,className:"m-0 w-full resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0"})});return t.jsxs("div",{className:"rounded-3xl bg-token-main-surface-tertiary px-3 py-3",children:[M,C,t.jsxs("div",{className:"flex justify-end gap-2",children:[t.jsx(j,{as:"button",color:"secondary",onClick:g,children:t.jsx(b,{id:"D9gbPp",defaultMessage:"Cancel"})}),t.jsx(j,{as:"button",onClick:f,disabled:N,children:t.jsx(b,{id:"KGxIJG",defaultMessage:"Send"})})]})]})}const H=R.div`flex gap-2 flex-wrap`;function L({message:r,...s}){var a;return t.jsx(B,{currentLeaf:r.nodeId,initialText:z(r.message),attachments:(a=r.message.metadata)==null?void 0:a.attachments,...s})}export{L as TextMessageEditor};
//# sourceMappingURL=l6i9rbp0fir2uy6k.js.map