import{r as n,j as t,c as F,W as R,cw as A,e2 as _,P as v,F as h,aQ as b,U as T,b as z}from"./iryvtox9frru8zal.js";import{c1 as I,d0 as G,d1 as K,g as U}from"./ibpo4l2zkh6u1ih1.js";import{e as W,T as w}from"./i7imfmvlw2tpm5ab.js";import"./ju8uhwb40r1gh3q5.js";import"./huvolgphco6l4rty.js";const $=n.forwardRef(function(s,a){const{className:c,...i}=s;return t.jsxs("div",{className:"grid",children:[t.jsx("textarea",{className:F("col-start-1 col-end-2 row-start-1 row-end-2 resize-none overflow-hidden p-0",c),ref:a,...i}),t.jsxs("span",{className:"invisible col-start-1 col-end-2 row-start-1 row-end-2 whitespace-pre-wrap p-0",children:[s.value," "]})]})});function B({initialText:r,clientThreadId:s,currentLeaf:a,onChangeItemInView:c,onExitEdit:i,onRequestCompletion:j,disabled:N,attachments:l}){const E=n.useId(),u=`${a}-${E}`,[x,k]=n.useState(r??""),p=n.useRef(null),y=A(),f=x.trim()==="",M=n.useCallback(e=>{k(e.currentTarget.value)},[]),m=n.useCallback(()=>{if(f)return;const e=()=>{w.updateTree(s,d=>{const P=d.getParentId(a);d.addNode(u,x,P,z.User,void 0,l?{attachments:l}:void 0)}),c(u)},o=new I;j({type:_.Next,promptId:u,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!0,completionMetadata:{conversationMode:W.getConversationMode(s)},updateTree:e,turnTracker:o}),i(),v.logEvent(h.changeNode,{intent:"edit_save"})},[l,s,a,u,x,c,j,i,f]),g=n.useCallback(()=>{c(a),v.logEvent(h.changeNode,{intent:"edit_cancel"}),i(),v.logEvent(h.cancelEditPrompt,{threadId:w.getServerThreadId(s)})},[a,c,i,s]);n.useEffect(()=>{const e=p.current;if(e){e.focus();const o=e.value.length;e.setSelectionRange(o,o)}},[]),n.useEffect(()=>{const e=p.current,o=d=>{d.key==="Enter"&&d.metaKey?m():d.key==="Escape"&&g()};return e&&e.addEventListener("keydown",o),()=>{e&&e.removeEventListener("keydown",o)}},[g,m]);const C=l&&l.length>0&&t.jsx(D,{children:l.map(e=>t.jsx(G,{width:y?"normal":"wide",file:e.name,contextConnectorInfo:K(e.context_connector_info)},e.id))}),S=t.jsx("div",{className:"m-2 max-h-[25dvh] overflow-auto",children:t.jsx($,{ref:p,value:x,onChange:M,className:"m-0 w-full resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0"})});return t.jsxs("div",{className:"rounded-3xl bg-token-main-surface-tertiary px-3 py-3",children:[C,S,t.jsxs("div",{className:"flex justify-end gap-2",children:[t.jsx(b,{as:"button",color:"secondary",onClick:g,children:t.jsx(T,{id:"D9gbPp",defaultMessage:"Cancel"})}),t.jsx(b,{as:"button",onClick:m,disabled:N||f,children:t.jsx(T,{id:"KGxIJG",defaultMessage:"Send"})})]})]})}const D=R.div`flex gap-2 flex-wrap`;function X({message:r,...s}){var a;return t.jsx(B,{currentLeaf:r.nodeId,initialText:U(r.message),attachments:(a=r.message.metadata)==null?void 0:a.attachments,...s})}export{X as TextMessageEditor};
//# sourceMappingURL=ldtg2y8sinuc9an3.js.map