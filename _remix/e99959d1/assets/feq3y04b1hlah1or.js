import{ar as T,bC as O,cj as G,ck as k,cl as F,K as Q,j as e,bz as H,aF as q,ak as g,o as M,a1 as B,fR as v,aA as V,$ as E,aW as l,r as y,aq as W,d6 as $,aU as z,z as K,cU as J,aV as L,D as X}from"./gm14raa1g9oy5lze.js";import{aV as Y,bv as Z,N as ee,bm as _,bw as te,b3 as se,bx as ae,by as ne,aj as ie,aH as oe}from"./epq05yjlon4syv7z.js";import{fa as A,aK as re,hW as le,ka as ce}from"./goq6gw3hck5id2f9.js";import{S as r}from"./ju2uni7cwtbdlziv.js";import{B as d,e as de}from"./gu17whh6u70a0q6r.js";import{L as f}from"./lbgax8upzwf9m2ik.js";import{u as ue}from"./ye77dqhe8ry8y7ob.js";import{u as he,b,d as o,c as me,I as ge,e as xe}from"./m1myd8td2d23l73m.js";const Se="https://openai.com/index/searchgpt-prototype/",C={debug_mode:!1,base_config:d.SCALLION,completion_model:"production",eval_preset:"production",use_labrador:!0,show_image_to_model:!0,emulated_location:void 0,emulated_date:void 0};function fe({children:s,...t}){return e.jsx(r.Content,{...t,className:g("z-50",t.className),children:s})}function pe(s){return M({mutationFn:de,onSuccess:s})}function qe({onClose:s}){const{theme:t,setTheme:a}=O(),{data:n}=G(k.TrainingAllowed),i=F(),c=Q(),x=pe(()=>c.success("All search logs have been deleted",{duration:3})),[u,U]=he(),I=ue();return e.jsx(H,{isOpen:!0,onClose:s,type:"success",size:"custom",className:"max-w-2xl",title:"SearchGPT Settings",showCloseButton:!0,children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs(p,{children:[e.jsx(f,{htmlFor:"theme",className:"text-sm",children:"Theme"}),e.jsxs(r.Root,{value:t,onValueChange:h=>{h!==t&&a(h)},children:[e.jsxs(r.Trigger,{id:"theme",children:[e.jsx(r.Value,{}),e.jsx(r.Icon,{})]}),e.jsx(r.Portal,{children:e.jsxs(fe,{children:[e.jsx(r.Item,{value:"light",children:"Light"}),e.jsx(r.Item,{value:"dark",children:"Dark"}),e.jsx(r.Item,{value:"system",children:"System"})]})})]})]}),e.jsxs("div",{className:"flex flex-col border-t border-token-border-medium pt-1",children:[e.jsxs(p,{children:[e.jsx(f,{htmlFor:"location",className:"text-sm",children:"Share precise location"}),e.jsx(A,{onChange:h=>{U({...u,useLocation:h})},enabled:u.useLocation,disabled:!I||I==="denied",label:"Use location from browser"})]}),e.jsx("div",{className:"text-xs text-token-text-secondary",children:"Improve searches using precise location data from your device e.g. “restaurants near me” will try to show you restaurants near your current location. (When precise location is off, we’ll still use general location info based on your IP address so we can help you search local weather, etc.)"})]}),e.jsxs("div",{className:"flex flex-col border-t border-token-border-medium pt-1",children:[e.jsxs(p,{children:[e.jsx(f,{htmlFor:"trainingAllowed",className:"text-sm",children:"Improve search for everyone"}),e.jsx(A,{onChange:h=>{i.mutate({setting:k.TrainingAllowed,value:h})},enabled:n??!0,label:"Use location from browser"})]}),e.jsxs("div",{className:"text-xs text-token-text-secondary",children:["Allow your conversations to be used to improve our search functionality, which makes our services better for you and everyone who uses them. We take steps to protect your privacy."," ",e.jsx("a",{className:"underline",href:"https://openai.com/policies/privacy-policy/",target:"_blank",rel:"noreferrer",children:"Learn more"})]})]}),e.jsx("div",{className:"flex flex-col border-t border-token-border-medium pt-2",children:e.jsxs(p,{children:[e.jsx(f,{htmlFor:"deleteLogs",className:"text-sm",children:"Delete search logs"}),e.jsx(q,{color:"danger",loading:x.isPending,onClick:()=>x.mutate(),children:"Delete All"})]})})]})})}const p=T.div`flex justify-between items-center gap-2 min-h-[36px]`;var je=(s=>(s[s.InitialPending=0]="InitialPending",s[s.Active=1]="Active",s))(je||{});class S extends B()(t=>({queryInput:t?.initialQuery??"",followupQueryInput:"",initialQuery:t?.initialQuery??void 0,shouldShowComposer:!1,agentSettingsOverrides:t?.initialAgentSettingsOverrides??be(t?.isUserAdmin??!1),currentSearch:t?.initialQuery?{config:{threadId:t.initialThreadId??null,query:t.initialQuery,isFollowup:!1,querySource:"url_query"},state:0}:void 0,lastPrefetchedQuery:void 0,shouldShowAddToHomePopover:!1,hasSearched:localStorage.getItem("oai/apps/hasSearched")==="1",hasDismissedExtensionUpsell:localStorage.getItem("oai/apps/dismissExtensionUpsell")==="1",hasDismissedAddToHome:localStorage.getItem("oai/apps/dismissAddToHome")==="1"})){static selectQueryInput=t=>t.queryInput;static selectFollowupQueryInput=t=>t.followupQueryInput;static selectAgentSettingsOverrides=t=>t.agentSettingsOverrides;static selectLastSubmittedQuery=t=>t.currentSearch?.config.query;static selectWasCurrentSearchPrefetched=t=>t.currentSearch?.config.query===t.lastPrefetchedQuery;setQueryInput(t){this.setState({queryInput:t})}setFollowupQueryInput(t){this.setState({followupQueryInput:t})}setCurrentSearch(t){this.setState({currentSearch:t})}setLastPrefetchedQuery(t){this.setState({lastPrefetchedQuery:t})}handlePendingInitialSearch(){const t=this.getState();if(t.currentSearch?.state===0){const a={...t.currentSearch,state:1};return this.setState({currentSearch:a}),a}}updateAgentSettingsOverrides(t){const a={...this.getState().agentSettingsOverrides,...t};this.setState({agentSettingsOverrides:a}),Ne(a)}markHasSearched(){this.getState().hasSearched||(this.setState({hasSearched:!0}),localStorage.setItem("oai/apps/hasSearched","1"))}dismissExtensionUpsell(){this.getState().hasDismissedExtensionUpsell||(this.setState({hasDismissedExtensionUpsell:!0}),localStorage.setItem("oai/apps/dismissExtensionUpsell","1"))}dismissAddToHomePrompt(){this.getState().hasDismissedAddToHome||(this.setState({hasDismissedAddToHome:!0}),localStorage.setItem("oai/apps/dismissAddToHome","1"))}}function Me({children:s,serverProps:t}){return e.jsx(S.Provider,{store:()=>new S(t),children:s})}const N="agent_overrides";function ve(s,t){switch(s){case"scallion-prod":return d.SCALLION;case"scallion-rc":return d.SCALLION_RC;case"scallion":return t?d.SCALLION_RC:d.SCALLION}}function ye(s){switch(s){case d.SCALLION:return"scallion-prod";case d.SCALLION_RC:return"scallion-rc"}}function be(s,t){let a={};try{const n=v.getCookie(N,t);let i={};typeof n=="string"&&(i=JSON.parse(n)),a={...i,base_config:i.base_config?ve(i.base_config,s):i.base_config}}catch{}return{...C,...a}}function Ne(s){if(s===C)v.deleteCookie(N);else{const t={...s,base_config:ye(s.base_config)};v.setCookie(N,JSON.stringify(t),{maxAge:re})}}function D(){return V("2000076788")?.value}const m=l.Item;function Ce(){const s=S.useStore();return ce()?e.jsx(m,{onClick:()=>{s.setState({shouldShowAddToHomePopover:!0})},icon:e.jsx(te,{className:"icon-md-heavy text-token-text-primary"}),children:"Add to home screen"}):null}function Ie({className:s,iconSize:t,children:a}){D();const n=E();return e.jsxs(l.Root,{modal:!1,children:[e.jsx(R,{className:s,iconSize:t,children:a}),e.jsx(l.Portal,{children:e.jsxs(l.Content,{collisionPadding:10,children:[e.jsx(m,{onClick:()=>b.toggleSettingsModalOpen(),icon:e.jsx(Y,{className:"icon-md-heavy text-token-text-primary"}),children:"Settings"}),e.jsx(m,{onClick:()=>window.open(Se,"_blank"),icon:e.jsx(Z,{className:"icon-md-heavy text-token-text-primary"}),children:"About SearchGPT"}),e.jsx(m,{onClick:()=>window.open("https://chatgpt.com","_blank"),icon:e.jsx(ee,{className:"icon-md-heavy text-token-text-primary"}),children:"Open ChatGPT"}),e.jsx(Ce,{}),e.jsx(l.Separator,{}),e.jsx(m,{onClick:()=>n("/auth/logout"),icon:e.jsx(_,{className:"icon-md-heavy text-token-text-primary"}),children:"Log out"}),!1]})})]})}function ke({className:s,iconSize:t}){const a=E();return e.jsxs(l.Root,{modal:!1,children:[e.jsx(R,{className:s,iconSize:t}),e.jsx(l.Portal,{children:e.jsx(l.Content,{collisionPadding:10,children:e.jsx(m,{onClick:()=>a("/auth/logout"),icon:e.jsx(_,{className:"icon-md-heavy text-token-text-primary"}),children:"Log out"})})})]})}function R({className:s,iconSize:t,children:a}){return e.jsx(l.Trigger,{className:"group border-0 !bg-transparent p-0",children:e.jsx("div",{className:"rounded-full",children:a??e.jsx(le,{iconSize:t,className:s})})})}const Ae={[o.ReadyState.CONNECTING]:"Connecting",[o.ReadyState.OPEN]:"Open",[o.ReadyState.CLOSING]:"Closing",[o.ReadyState.CLOSED]:"Closed",[o.ReadyState.UNINSTANTIATED]:"Uninstantiated"};function we({readyState:s,className:t}){const[a,n]=y.useState(!0);return y.useEffect(()=>{setTimeout(()=>{n(!0)},1e3)},[]),s===o.ReadyState.OPEN||!a?null:e.jsx("div",{className:g("flex items-center gap-2 p-3 text-sm",t),children:e.jsx(W,{label:Ae[s],sideOffset:0,side:"right",children:e.jsx("div",{className:g("h-2 w-2 rounded-full",(s===o.ReadyState.CLOSING||s===o.ReadyState.CONNECTING)&&"bg-yellow-500",(s===o.ReadyState.CLOSED||s===o.ReadyState.UNINSTANTIATED)&&"bg-red-500",a?"block":"hidden")})})})}function j({label:s,labelSide:t="right",className:a,onClick:n,children:i,...c}){return e.jsx($,{label:s,sideOffset:0,side:t,disabled:!s,children:e.jsx("button",{onClick:n,className:g("flex items-center justify-center p-1.5 text-token-text-tertiary hover:text-token-text-primary",a),...c,children:i})})}function w(s,t){return Object.keys(s).reduce((a,n)=>(K(s[n],t[n])||(a[n]=t[n]),a),{})}function Te(){const{setTheme:s,resolvedTheme:t}=O(),a=S.useState(S.selectAgentSettingsOverrides),[n]=me(),i=w(C,a),c=w(ge,n),x={...i,...c},u=Object.keys(x).length>0;return e.jsxs(e.Fragment,{children:[e.jsx(j,{"data-testid":"sonic-debug-button",label:"Debug (Internal)",onClick:()=>b.toggleDebugModalOpen(),children:e.jsx(se,{className:"icon-sm-heavy"})}),e.jsx(j,{label:"Theme (Internal)",onClick:()=>{s(t==="dark"?"light":"dark")},children:e.jsxs(z,{children:[t==="dark"&&e.jsx(ae,{className:"icon-md-heavy"}),t==="light"&&e.jsx(ne,{className:"icon-md-heavy"})]})}),e.jsx(j,{label:u?["Config (Internal) - Changes:",Object.keys(x).join(", ")].join(`
`):"Config (Internal)",onClick:()=>b.toggleInternalSettingsModalOpen(),children:e.jsx(ie,{className:g(u?"icon-lg-heavy":"icon-md-heavy",{"text-red-500":u})})})]})}function Oe({hideReadyState:s=!1,onResultsPage:t=!1,children:a}){const{readyState:n,resetSearch:i}=xe(),c=D();return e.jsxs("div",{className:g("hidden w-20 shrink-0 flex-col items-center justify-between border-r py-6 sm:flex",t?"relative border-token-border-light":"absolute bottom-0 left-0 top-0 border-transparent"),children:[e.jsxs(J,{onClick:()=>i(),to:"/search",className:"text-token-text-primary hover:text-token-text-secondary",title:"Go to SearchGPT",children:[e.jsx(L,{className:"h-8 w-8"}),c&&!s&&e.jsx(we,{readyState:n})]}),c&&e.jsx("div",{className:"flex flex-col items-center gap-2",children:e.jsx(Te,{})}),e.jsx("div",{className:"absolute top-1/2 -translate-y-1/2",children:a})]})}function Ee(){return e.jsx("div",{className:"absolute right-5 top-5 hidden sm:block",children:e.jsx(Ie,{className:"h-8 w-8"})})}function Be(){return e.jsx(P,{$side:"left",children:e.jsx(L,{className:"h-8 w-8"})})}function Ve({className:s}){return e.jsx(P,{$side:"right",className:`${s}`,children:e.jsx(ke,{className:"h-8 w-8"})})}const P=T.div`absolute ${s=>s.$side==="left"?"left-5":"right-5"} bottom-5 top-5 z-10 w-10 flex-col justify-between items-center hidden sm:flex`;function Le({children:s}){return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:e.jsxs("div",{className:"flex flex-col items-center gap-1 text-sm font-semibold text-token-text-tertiary",children:[e.jsx(oe,{className:"icon-2xl"}),s]})})}function _e({onClickRetry:s,children:t}){return e.jsxs(Le,{children:[e.jsxs("div",{children:["Error."," ",e.jsx("button",{onClick:s,className:"inline font-semibold text-token-text-primary hover:opacity-70",children:"Try again?"})]}),t]})}function We({resetError:s,componentStack:t,error:a}){return y.useEffect(()=>{X.addError(a)},[a]),e.jsxs(_e,{onClickRetry:s,children:[e.jsx("div",{className:"fixed left-2 top-2",children:e.jsx(Oe,{})}),e.jsx("div",{className:"fixed right-2 top-2",children:e.jsx(Ee,{})}),!1]})}export{Ie as A,_e as D,qe as E,We as G,Be as L,Ee as R,Me as S,S as a,Ve as b,Se as c,Oe as d,je as e,Le as f,D as u};
//# sourceMappingURL=feq3y04b1hlah1or.js.map