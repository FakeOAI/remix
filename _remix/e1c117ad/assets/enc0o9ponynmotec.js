import{fW as se,fX as te,fY as ae,dz as re,fZ as ne,g as oe,f_ as ie,x as le,dG as de,j as e,ar as b,ao as d,ax as F,r as w,J as S,K as A,aL as P,P as v,d as p,bF as $,aq as U,O as E,m as q,l as ce,o as me,a$ as y,ay as ue}from"./ns1tfo6glfhr2njn.js";import{ja as H,jb as fe,jc as ge,jd as xe,je as B,jf as Me,jg as he,jh as je,ji as ye,A as x,jj as W,jk as be,cw as ve}from"./lnlvqx2sg8j5t2nm.js";import{bC as pe,D as we,ad as Se}from"./jeba75ammv4sijqh.js";import{m as Ce}from"./bf1fa2lxk3a560fa.js";var Re=se,Ne=te,ke="[object RegExp]";function _e(s){return Ne(s)&&Re(s)==ke}var Ee=_e,Te=Ee,Oe=re,G=ae,z=G&&G.isRegExp,Ue=z?Oe(z):Te,Be=Ue,Ge=ne,ze=Ge("length"),Ie=ze,Q="\\ud800-\\udfff",Le="\\u0300-\\u036f",De="\\ufe20-\\ufe2f",Fe="\\u20d0-\\u20ff",Ae=Le+De+Fe,Pe="\\ufe0e\\ufe0f",$e="["+Q+"]",N="["+Ae+"]",k="\\ud83c[\\udffb-\\udfff]",qe="(?:"+N+"|"+k+")",Y="[^"+Q+"]",K="(?:\\ud83c[\\udde6-\\uddff]){2}",J="[\\ud800-\\udbff][\\udc00-\\udfff]",He="\\u200d",V=qe+"?",Z="["+Pe+"]?",We="(?:"+He+"(?:"+[Y,K,J].join("|")+")"+Z+V+")*",Qe=Z+V+We,Ye="(?:"+[Y+N+"?",N,K,J,$e].join("|")+")",I=RegExp(k+"(?="+k+")|"+Ye+Qe,"g");function Ke(s){for(var t=I.lastIndex=0;I.test(s);)++t;return t}var Je=Ke,Ve=Ie,Ze=H,Xe=Je;function es(s){return Ze(s)?Xe(s):Ve(s)}var ss=es,L=ie,ts=fe,as=H,rs=le,ns=Be,os=ss,is=ge,ls=xe,D=de,ds=30,cs="...",ms=/\w*$/;function us(s,t){var o=ds,a=cs;if(rs(t)){var r="separator"in t?t.separator:r;o="length"in t?ls(t.length):o,a="omission"in t?L(t.omission):a}s=D(s);var n=s.length;if(as(s)){var c=is(s);n=c.length}if(o>=n)return s;var l=o-os(a);if(l<1)return a;var i=c?ts(c,0,l).join(""):s.slice(0,l);if(r===void 0)return i+a;if(c&&(l+=i.length-l),ns(r)){if(s.slice(l).search(r)){var u,f=i;for(r.global||(r=RegExp(r.source,D(ms.exec(r))+"g")),r.lastIndex=0;u=r.exec(f);)var M=u.index;i=i.slice(0,M===void 0?l:M)}}else if(s.indexOf(L(r),l)!=l){var g=i.lastIndexOf(r);g>-1&&(i=i.slice(0,g))}return i+a}var fs=us;const gs=oe(fs),xs=91,T=100;function _(s){return s<T?"bg-[#fcf6e0] text-yellow-500 dark:bg-yellow-600 dark:text-yellow-100":"bg-orange-100 text-[#f48c15] dark:bg-orange-800 dark:text-orange-100"}function O(s){return Me()&&s!=null&&s>=xs}function Ms({memoryFullPct:s,className:t,children:o}){return O(s)?e.jsx("div",{className:b("rounded-lg border border-token-border-light p-1 text-sm",t),children:e.jsxs(Ce.div,{className:b("flex items-center overflow-hidden whitespace-nowrap rounded px-2 py-1.5",_(s)),initial:{width:0},animate:{width:`${s}%`},transition:{duration:.5},children:[e.jsx(d,{id:"6D2etG",defaultMessage:"{memoryFullPct}% full",values:{memoryFullPct:s}}),o]})}):null}function Ns({memoryFullPct:s}){return O(s)?e.jsxs("div",{className:"flex items-center justify-center",children:[e.jsx("div",{className:b("relative -mr-1 h-2 w-2 rotate-45 transform border-white/10",_(s))}),e.jsxs("div",{className:b("flex items-center rounded-lg px-3 py-1.5",_(s)),children:[e.jsx(d,{id:"x7M6HK",defaultMessage:"{memoryFullPct}%",values:{memoryFullPct:s}}),e.jsx(F,{label:s<T?e.jsx(d,{id:"VXohcH",defaultMessage:"Memory is almost full. Once memory is full, new memories won’t be created. You can forget existing memories to make space."}):e.jsx(d,{id:"pQ9dnt",defaultMessage:"Memory is full. New memories won’t be created. You can forget existing memories to make space."}),children:e.jsx(pe,{className:"icon-sm ml-1 text-token-text-secondary"})})]})]}):null}function hs({memoryFullPct:s,className:t}){return O(s)?e.jsxs("div",{className:b("flex flex-col gap-2",t),children:[e.jsx(Ms,{memoryFullPct:s}),e.jsx("div",{className:"pl-3 text-sm text-token-text-secondary",children:s<T?e.jsx(d,{id:"z3LYM2",defaultMessage:"<strong>Memory almost full</strong>. Once memory is full, new memories won’t be created. You can forget existing memories to make space. <a>Learn more</a>.",values:{strong:a=>e.jsx("strong",{children:a}),a:a=>e.jsx("a",{href:B,target:"_blank",rel:"noopener noreferrer",className:"underline",children:a})}}):e.jsx(d,{id:"6rc4Jv",defaultMessage:"<strong>Memory is full</strong>. New memories won’t be created. You can forget existing memories to make space. <a>Learn more</a>.",values:{strong:a=>e.jsx("strong",{children:a}),a:a=>e.jsx("a",{href:B,target:"_blank",rel:"noopener noreferrer",className:"underline",children:a})}})})]}):null}function js({description:s,onClose:t,onConfirm:o}){const a=S();return e.jsx($,{isOpen:!0,onClose:t,type:"success",title:a.formatMessage({id:"MemoriesModal.resetModalTitle",defaultMessage:"Are you sure?"}),description:s,primaryButton:e.jsx(U.Button,{title:a.formatMessage({id:"MemoriesModal.resetModalConfirm",defaultMessage:"Clear memory"}),color:"danger",onClick:o,"data-testid":"confirm-reset-memories-button"}),secondaryButton:e.jsx(U.Button,{title:a.formatMessage({id:"MemoriesModal.resetModalCancel",defaultMessage:"Cancel"}),color:"secondary",onClick:t})})}function ys({onReset:s,gizmoId:t,memoryName:o}){const[a,r]=w.useState(!1),n=S(),c=A(),l=async()=>{v.logEvent(p.memorySettingsResetButtonConfirmed);try{await E.clearUserMemory(t),c.success(n.formatMessage({id:"ResetMemoriesButton.resetSuccess",defaultMessage:"Memory cleared."})),s?.(),r(!1)}catch{c.danger(n.formatMessage({id:"ResetMemoriesButton.resetFailed",defaultMessage:"Failed to clear memory."}))}};return e.jsxs(e.Fragment,{children:[e.jsx(P,{color:"danger-outline",onClick:()=>{v.logEvent(p.memorySettingsResetButtonClicked),r(!0)},"data-testid":"reset-memories-button",children:t?e.jsx(d,{id:"ResetMemoriesButton.resetGizmo",defaultMessage:"Clear this GPT's memory"}):e.jsx(d,{id:"ResetMemoriesButton.resetChatGPT",defaultMessage:"Clear memories"})}),a&&e.jsx(js,{description:n.formatMessage({id:"MemoriesModal.resetGizmoModalDescription",defaultMessage:"{name} will forget everything it has remembered from your chats. This cannot be undone."},{name:o}),onClose:()=>r(!1),onConfirm:l})]})}function bs({gizmo:s,memory:t}){const o=S(),a=A(),r=q(),{mutate:n,isPending:c}=me({mutationFn:f=>E.deleteMemory(f,s?.id),onSettled:()=>{r.invalidateQueries({queryKey:W(s?.id)})},onError:()=>{a.danger(o.formatMessage({id:"MemoriesModal.deleteFailed",defaultMessage:"Failed to forget memory"}),{id:"memoryDeleteFailed"})}}),[l,i]=w.useState(!1),u=o.formatMessage({id:"z2CNgB",defaultMessage:"Forget"});return e.jsxs(e.Fragment,{children:[e.jsxs(x.Row,{disabled:c,children:[e.jsx(x.Cell,{children:e.jsx("div",{className:"whitespace-pre-wrap py-2",children:t.content})}),e.jsx(x.Cell,{textAlign:"right",children:e.jsx(x.Actions,{children:e.jsx("button",{onClick:()=>{v.logEvent(p.memoryModalMemoryDeleteClicked),i(!0)},"aria-label":u,className:"text-token-text-tertiary hover:text-token-text-secondary",children:e.jsx(F,{className:"leading-none",label:u,sideOffset:4,side:"top",children:e.jsx(we,{className:"icon-sm"})})})})})]}),l&&e.jsx(be,{isOpen:!0,primaryButtonColor:"danger",title:u,confirmText:o.formatMessage({id:"fCn0ar",defaultMessage:"Forget"}),onConfirm:()=>{v.logEvent(p.memoryModalMemoryDeleteConfirmed),n(t.id),i(!1)},onClose:()=>{i(!1)},children:e.jsx(d,{id:"pZ/TCe",defaultMessage:'{name} will forget "{title}". This cannot be undone. <link>Learn more</link>',values:{name:s?.name??"ChatGPT",title:e.jsx("strong",{children:gs(t.content,{length:130,omission:"..."})}),link:f=>e.jsx("a",{href:"https://help.openai.com/en/articles/8590148-memory-faq#h_41527f643d",target:"_blank",className:"underline",rel:"noreferrer",children:f})}})})]})}function vs({selectedGizmoId:s,onSelect:t,items:o}){const a=o.find(n=>n.id===s);function r(n){return e.jsx(ve,{isFirstParty:n.id===void 0,src:n.iconUrl??null,className:"icon-md"})}return e.jsx("div",{className:"mb-2 inline-flex rounded-md border border-token-border-medium",children:e.jsxs(y.Root,{children:[e.jsx(y.Trigger,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[a?e.jsxs(e.Fragment,{children:[r(a),e.jsx("span",{className:"text-token-text-primary",children:a?.name})]}):e.jsx(d,{id:"MemoriesModal.unknownGizmo",defaultMessage:"Unknown GPT"}),e.jsx(Se,{className:"icon-sm text-token-text-tertiary"})]})}),e.jsx(y.Portal,{children:e.jsx(y.Content,{children:o.map(n=>e.jsxs(y.Item,{className:"flex items-center gap-3",onClick:()=>{t(n.id)},children:[r(n),n.name]},n.id))})})]})})}const R=ue.div`flex h-full items-center justify-center pb-8 text-sm text-token-text-tertiary rounded-lg border border-token-border-light`;function ps({onClose:s,initialGizmoId:t}){const o=S(),a=q(),r=he(),[n,c]=w.useState(t),l=je();w.useEffect(()=>{v.logEvent(p.memoryModalShown)},[]);const{data:i,isLoading:u,isError:f,refetch:M}=ye(n,!0,r),g=i?.memories,{data:X,refetch:ee}=ce({queryKey:["memory_gizmos"],queryFn:()=>E.getGizmosWithMemory(),refetchOnMount:"always"}),C=[{id:void 0,name:"ChatGPT",iconUrl:null},...X?.items?.map(({gizmo:m})=>({id:m.id,name:m.display.name,iconUrl:m.display.profile_picture_url}))??[]],h=C.find(m=>m.id===n);let j;return u?j=e.jsx(R,{children:e.jsx(d,{id:"MemoriesModal.loading",defaultMessage:"Loading..."})}):f?j=e.jsx(R,{children:e.jsxs("div",{className:"max-w-sm text-center",children:[e.jsx("div",{className:"mb-4 text-red-500",children:e.jsx(d,{id:"MemoriesModal.somethingWentWrong",defaultMessage:"Something went wrong..."})}),e.jsx("div",{children:e.jsx(P,{color:"secondary",onClick:()=>{M()},children:e.jsx(d,{id:"MemoriesModal.retry",defaultMessage:"Retry"})})})]})}):!g||g.length===0?j=e.jsx(R,{children:e.jsx("div",{className:"max-w-sm text-center",children:r?e.jsx(d,{id:"MemoriesModal.noMemories.1",defaultMessage:"As you chat with {name}, the details and preferences it remembers will be shown here.",values:{name:h?.name??"ChatGPT"}}):e.jsx(d,{id:"MemoriesModal.noMemoriesAndDisabled",defaultMessage:"Memory is disabled. ChatGPT won't use or create memories."})})}):j=e.jsx(x.Root,{className:"h-full",size:"compact",bordered:!0,children:e.jsx(x.Body,{children:g.map(m=>e.jsx(bs,{gizmo:h?{id:h.id,name:h.name}:void 0,memory:m},m.id))})}),e.jsxs($,{isOpen:!0,onClose:s,size:"custom",className:"max-w-5xl",type:"success",title:o.formatMessage({id:"MemoriesModal.title",defaultMessage:"Memory"}),showCloseButton:!0,children:[l&&C.length>1&&e.jsx("div",{className:"mb-4",children:e.jsx(vs,{selectedGizmoId:n,items:C,onSelect:m=>{a.invalidateQueries({queryKey:W(m)}),c(m)}})}),e.jsx(hs,{memoryFullPct:i?.memoryFullPct,className:"mb-5"}),e.jsx("div",{className:"h-[24rem]",children:j}),e.jsx("div",{className:"mt-5 flex justify-end",children:e.jsx(ys,{onReset:()=>{M(),ee(),n&&c(void 0)},gizmoId:n,memoryName:h?.name??"ChatGPT"})})]})}const ks=Object.freeze(Object.defineProperty({__proto__:null,default:ps},Symbol.toStringTag,{value:"Module"}));export{Ns as M,ys as R,ps as a,ks as b};
//# sourceMappingURL=enc0o9ponynmotec.js.map