const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/nm0m38qoc1dp7xz0.js","assets/bve7stqsvuyp30oy.js","assets/jza0wh4acfmo8aml.js","assets/root-cqviwlml.css","assets/ey0wg4za1oyqifqv.js","assets/conversation-small-cll5buey.css","assets/en4ah4mlj5ghc2x0.js","assets/fog1yonf608aoaaa.js","assets/bn2v79ozjo8eo6v4.js","assets/obqiy7chyfqfv9jk.js","assets/o7hx7t93qndcj9et.js","assets/deec37q0oqrigjkr.js","assets/lk3ytoqve6n2hksk.js","assets/25r7helde3zylny5.js","assets/lcsvs3nxna2cdwpx.js","assets/ljvnn957d5onfwd2.js","assets/horqi5aemy4xy4nt.js","assets/j6nq6u5ihk30ar3w.js","assets/homvezumadjdugh4.js","assets/ocnf3ui8jti1f2ip.js","assets/mp0614vfts6nkoji.js","assets/n640p7wci9qc0roq.js","assets/lmrzag0kj4b77hde.js","assets/o3ri39irm2jpyb44.js","assets/ikea4zymh7bah5vz.js","assets/jibp2s1dox9ncuc4.js"])))=>i.map(i=>d[i]);
import{a7 as je,aB as L,a6 as e,aG as C,U as be,ar as N,bs as K,aK as ye,aY as ve,aE as Q,aF as V,aw as we,fh as Ce,aj as U,r as Z,P,d as H,S as J,w as ee,a2 as Ne,Z as te,at as Ae,an as se,$ as ke,fi as Y,ak as Ee,aR as Te,a3 as _e}from"./bve7stqsvuyp30oy.js";import{aa as Pe,f1 as Ie,A as Le,U as q,ae as X,u as Ue,t as De,f2 as Oe,cR as ae,dX as ne,f3 as oe,f4 as Ge,cf as ze,cg as He,c8 as re,cl as Re,X as ie,f5 as Be,m as Fe,f6 as S,q as We,f7 as Ye,dY as z,f8 as qe,l as Xe,i as $e,f9 as _,fa as Ke,ce as Qe,e6 as Ve,fb as Ze,bi as Je,bG as et,bt as tt,fc as st,fd as at,fe as nt}from"./ey0wg4za1oyqifqv.js";import{B as le,D as u}from"./lk3ytoqve6n2hksk.js";import{af as ot,ba as rt,b3 as it,aq as lt,ae as ct,bb as dt,as as ut,bc as ht,ap as gt,bd as mt,a1 as pt,be as xt,c as ft}from"./jza0wh4acfmo8aml.js";import{E as St}from"./fc8def5hazxahl9b.js";import{e as Mt,f as jt}from"./deec37q0oqrigjkr.js";function bt(){const t=Pe(),a=je(),{isUnauthenticated:s}=L(),o=be("3376455464")?.value,{openSettings:i}=Ie();return e.jsx(e.Fragment,{children:e.jsxs(le,{triggerButton:e.jsx("button",{className:"flex h-6 w-6 items-center justify-center rounded-full border border-token-border-light text-xs text-token-text-secondary",children:"?"}),children:[t&&!s&&e.jsx(u.Item,{onClick:l=>{Le(t.id,a,l).then(()=>{a.success("Copied your User ID to clipboard")})},icon:ot,children:t.email}),e.jsx(St,{}),e.jsx(u.Item,{icon:rt,onClick:()=>{q.openModal(X.KeyboardActions)},children:e.jsx(C,{id:"thread.keyboardShortcutsMenu",defaultMessage:"Keyboard shortcuts"})}),o&&e.jsx(u.Item,{icon:it,onClick:()=>{q.openModal(X.ReportConversation)},children:e.jsx(C,{id:"thread.report",defaultMessage:"Report Illegal Content"})}),s&&e.jsx(u.Item,{onClick:()=>i(),icon:lt,children:e.jsx(C,{id:"helpMenu.items.settings",defaultMessage:"Settings"})})]})})}const Ht=Object.freeze(Object.defineProperty({__proto__:null,default:bt},Symbol.toStringTag,{value:"Module"}));function yt({currentModel:t,categoryOptions:a,className:s,modelSwitcherDenialsBySlug:o,displayInFull_INTERNAL_USE_ONLY:i=!1}){const l=t?.id;return e.jsx(u.Portal,{children:e.jsx(u.SubContent,{className:s,children:a.map(n=>{const{value:r}=n;return"options"in n?e.jsx(k,{currentModel:t,isSelected:l.startsWith(r),option:n,modelSwitcherDenialsBySlug:o,displayInFull_INTERNAL_USE_ONLY:i},r):e.jsx(I,{isSelected:l===r,value:r,renderName:()=>n.name,modelSwitcherDenialsBySlug:o,showNewChatHint:!1,displayInFull_INTERNAL_USE_ONLY:i},r)})})})}function k({currentModel:t,option:a,isSelected:s=!1,modelSwitcherDenialsBySlug:o,displayInFull_INTERNAL_USE_ONLY:i=!1}){const{name:l,options:n,categoryId:r}=a,h=`${l} Models`,c=()=>e.jsx("div",{className:"flex shrink-0 grow justify-between gap-2",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(ut,{className:"icon-md w-7 text-token-text-secondary"}),h]})});let g;return i&&s&&(g=a.options.find(m=>m.value===t.id)?.name),e.jsxs(u.Sub,{children:[e.jsx(u.SubMenuTrigger,{children:e.jsxs("div",{className:N("flex grow justify-between gap-2 overflow-hidden",i?"items-center break-all":""),children:[r?c():l,s&&e.jsx("div",{className:"truncate text-token-text-tertiary",children:g??t.title})]})}),e.jsx(yt,{currentModel:t,categoryOptions:n,modelSwitcherDenialsBySlug:o,displayInFull_INTERNAL_USE_ONLY:i})]})}function I({value:t,renderName:a,isSelected:s,showNewChatHint:o=!0,onClick:i,modelSwitcherDenialsBySlug:l,isUpgradeUpsell:n=!1,testId:r,displayInFull_INTERNAL_USE_ONLY:h=!1}){const c=Ue(),g=De(),m=t?l[t]?.conversation?.[0]:null,{layer:x}=K("1846737571"),j=e.jsx(u.Item,{onClick:()=>{if(i)i();else if(t){const b=t;c({modelId:b,location:"Model switcher menu item"}),g(b)}},className:N("!pr-3",s&&"!opacity-100",m&&"pointer-events-none text-token-text-quaternary"),"data-testid":r,children:e.jsxs("div",{className:"flex grow items-center justify-between gap-2",children:[e.jsx("div",{className:h?"break-all":"",children:a(m!=null)}),n&&e.jsx(ye,{color:"secondary",size:"small",className:x.get("is_upgrade_button_blue",!1)?"border-none bg-blue-600 text-white hover:bg-blue-800":"",children:e.jsx(C,{id:"oKo8wt",defaultMessage:"Upgrade"})}),n?e.jsx(e.Fragment,{children:s&&e.jsx(dt,{className:N("icon-md group-hover:invisible",!o&&"block group-hover:hidden")})}):s&&e.jsx(ct,{className:"icon-md"})]})},t);return m?e.jsx(ve,{isLeftArrow:!0,sideOffset:-10,label:e.jsx(Oe,{modelSwitcherDeny:m}),children:j}):j}const vt=Q(()=>V(()=>import("./nm0m38qoc1dp7xz0.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(t=>t.ThreadHeaderGizmoDropdown)),$=we.button`group flex cursor-pointer items-center gap-1 rounded-lg py-1.5 ${({$isScreenArch:t})=>t?"text-md px-2 ml-1.5 translate-x-[-0.4rem]":"px-3 text-lg"} hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary font-semibold text-token-text-secondary overflow-hidden whitespace-nowrap`;function wt({clientThreadId:t}){const a=U(),s=se(),o=Xe(t),i=te(),[,l]=ke(),n=()=>{!o&&!s?i({pathname:"/",search:new URLSearchParams({[_]:"true"}).toString()}):l(r=>(r.get(_)==="true"?r.delete(_):r.set(_,"true"),r),{replace:o,state:Ke()})};return e.jsx(u.Item,{size:"large",className:"!pr-3",onClick:n,icon:pt,children:e.jsxs("div",{className:"flex grow items-center justify-between gap-2",children:[e.jsx("div",{className:"flex flex-1 items-center gap-3",children:e.jsx(C,{...ue.temporaryChat})}),e.jsx($e,{enabled:s,label:a.formatMessage({defaultMessage:"Temporary",id:"temporaryChatToggleLabel"}),testId:"temporary-chat-toggle"})]})})}function ce(t,a,s){let o=t;if(t===Y.AUTO){const n=a.filter(({defaultModel:r})=>r!==Y.AUTO);n.length===1&&(o=n[0].defaultModel)}const i=a.find(({defaultModel:n})=>n===o);if(i){const{categoryId:n,shortLabel:r}=i;return{selectedCategory:n,modelLabel:r}}const l=s.find(({modelIds:n})=>n.includes(o));if(l){const{group:n,shortLabel:r}=l;return{selectedCategory:n,modelLabel:r}}return{selectedCategory:null,modelLabel:null}}function Ct({modelLabel:t}){return e.jsx("span",{className:"text-token-text-secondary",children:t})}function Nt({clientThreadId:t,inMobileHeader:a}){const{isLoading:s,categories:o,groups:i}=ne(),l=Ce(),r=oe(t).id,h=Ge(),{modelLabel:c}=ce(r,o,i),g=kt(t,h),m=U(),{isUnauthenticated:x}=L(),j=de(),b=(!x||!j)&&!l;Z.useEffect(()=>{s||ze({namespace:He.ChatPageLoad})?.logTiming("render_model_switcher")},[s]);const A=re(),E=e.jsxs("div",{className:N(!A&&"text-token-text-secondary"),children:[Re," ",b?e.jsx("span",{className:"text-token-text-secondary",children:c}):x&&c?e.jsx(Ct,{modelLabel:c}):null]});return g.length?s?null:e.jsx(le,{sideOffset:8,size:"large",triggerButton:e.jsxs($,{$isScreenArch:A,"aria-label":c?m.formatMessage({id:"JrtGPQ",defaultMessage:"Model selector, current model is {modelLabel}"},{modelLabel:c}):"",children:[E,A?e.jsx(ht,{className:"icon-md text-token-text-tertiary"}):e.jsx(gt,{className:"icon-md text-token-text-tertiary"})]}),onOpenChange:y=>{P.logEvent(H.toggleModelSwitcher,{isOpen:y}),J.logEvent("toggle_model_switcher",null,{isOpen:String(y)})},contentAlign:a?"center":"start",testId:"model-switcher-dropdown",children:e.jsx(Tt,{sections:g})}):e.jsx($,{className:"cursor-default",children:E})}function de(){return ee("462735957").value}function At({category:t,modelSwitcherDenialsBySlug:a,currentGizmoId:s,currentModelId:o,omitIcon:i,testId:l}){const{defaultModel:n,label:r,categoryId:h,description:c,isBeta:g}=t;return e.jsx(I,{value:n,modelSwitcherDenialsBySlug:a,renderName:m=>e.jsx(R,{categoryId:h,name:r,description:c,isDisabled:m,omitIcon:i,isBeta:g}),isSelected:!s&&o===n,testId:l},n)}function kt(t,a){const s=oe(t),o=s.id,i=ae(t),{categories:l,groups:n}=ne(),{doesUserHaveAnyAccountsWithPlusFeatures:r}=Ne(),h=ie.getServerThreadId(t),c=Be({clientThreadId:t}),g=U(),m=!h,{isUnauthenticated:x}=L(),j=Fe(),{layer:b}=K("2723963139"),A=b.get("is_dynamic_model_enabled",!1),E=de(),y=a.find(({categoryId:d})=>d===S.ALPHA),D=a.find(({categoryId:d})=>d===S.DATA_CAMPAIGNS),O=a.find(({categoryId:d})=>d===S.EXPERIMENTS),G=a.find(({categoryId:d})=>d===S.MAINLINE),he=ee("566128514").value,ge=!!y?.options?.length,me=!!D?.options?.length,pe=!!O?.options?.length,xe=!!G?.options?.length,B=te(),fe=Z.useCallback(()=>{P.logEvent(H.openModalAccountPaymentfromModelPicker,{content:"gizmo-button"}),We(B,"Thread header dropdown")},[B]),Se=()=>{J.logEvent("chatgpt_model_switcher_plus_upgrade_button_clicked"),P.logEvent(H.modelSwitcherPlusUpgradeButtonClicked),x?j({shouldOpenPaymentModalOnAuth:!0,callback:d=>{P.logSignUpButtonClicked({location:"Model switcher GPT-4 upsell",provider:d})}}):fe()},v=[],Me=e.jsxs("div",{className:"mb-1 flex items-center justify-between px-5 pt-2",children:[e.jsx("span",{className:"text-sm text-token-text-tertiary",children:e.jsx(C,{id:"ilkdMh",defaultMessage:"Model"})}),e.jsx("a",{href:A?"https://help.openai.com/en/articles/9155758-what-is-the-chatgpt-plus-model-selector":"https://help.openai.com/en/articles/7102672-how-can-i-access-gpt-4",target:"_blank",rel:"noreferrer",children:e.jsx(ft,{className:"icon-md h-5 w-5 pl-0.5 text-token-text-tertiary"})})]},"header");if(E&&x){const d={id:"modelSection",content:[]};d.content.push(e.jsx(Ye,{},"noAuthUpsell")),v.push(d)}else if(r){const d={id:"modelSection",content:[]};l.length&&d.content.push(Me);const f=new Map;l.forEach(p=>{const M=e.jsx(At,{category:p,currentGizmoId:i,currentModelId:o,modelSwitcherDenialsBySlug:c,omitIcon:he,testId:`model-switcher-${p.defaultModel}`},p.categoryId);p.subcategory?(f.has(p.subcategory)||f.set(p.subcategory,[]),f.get(p.subcategory)?.push(M)):d.content.push(M)}),f.forEach((p,M)=>{const F=l.find(W=>W.subcategory===M&&W.defaultModel===s.id);d.content.push(e.jsxs(u.Sub,{children:[e.jsx(u.SubMenuTrigger,{"data-testid":M==="More models"?"more-models-submenu":void 0,children:e.jsxs("div",{className:"flex grow justify-between gap-2 overflow-hidden",children:[M,!!F&&e.jsx("div",{className:"truncate text-token-text-tertiary",children:F.label})]})}),e.jsx(u.Portal,{children:e.jsx(u.SubContent,{className:"min-w-72",children:p})})]},M))}),v.push(d)}else{const d={id:"modelSection",content:[]};d.content.push(e.jsx(I,{value:"",onClick:Se,modelSwitcherDenialsBySlug:c,isUpgradeUpsell:!0,renderName:f=>e.jsx(R,{icon:xt,isDisabled:f,name:g.formatMessage({id:"mzDzkX",defaultMessage:"ChatGPT Plus"}),description:g.formatMessage({id:"bqTHri",defaultMessage:"Our smartest model & more"}),omitIcon:!1}),isSelected:!1,showNewChatHint:!1},"plusUpgrade")),d.content.push(e.jsx(I,{value:z.AUTO,modelSwitcherDenialsBySlug:c,renderName:f=>e.jsx(R,{icon:mt,name:g.formatMessage({id:"U9E7Rx",defaultMessage:"ChatGPT"}),description:g.formatMessage({id:"n96qML",defaultMessage:"Great for everyday tasks"}),isDisabled:f,omitIcon:!1}),isSelected:!i&&o===z.AUTO,showNewChatHint:!0},z.AUTO)),v.push(d)}const w={id:"otherOptionsSection",content:[]},{selectedCategory:T}=ce(o,l,n);return m&&(ge&&w.content.push(e.jsx(k,{isSelected:T===S.ALPHA,currentModel:s,option:y,modelSwitcherDenialsBySlug:c,displayInFull_INTERNAL_USE_ONLY:!0},y.value)),me&&w.content.push(e.jsx(k,{isSelected:T===S.DATA_CAMPAIGNS,currentModel:s,option:D,modelSwitcherDenialsBySlug:c,displayInFull_INTERNAL_USE_ONLY:!0},D.value)),pe&&w.content.push(e.jsx(k,{currentModel:s,isSelected:T===S.EXPERIMENTS,option:O,modelSwitcherDenialsBySlug:c,displayInFull_INTERNAL_USE_ONLY:!0},O.value)),xe&&w.content.push(e.jsx(k,{isSelected:T===S.MAINLINE,currentModel:s,option:G,modelSwitcherDenialsBySlug:c,displayInFull_INTERNAL_USE_ONLY:!0},G.value))),w.content.length&&v.push(w),x||v.push({id:"temporaryChatSection",content:[e.jsx(wt,{clientThreadId:t},"tempChat")]}),v}function Et(){const t=U();return e.jsx("div",{className:"border-token-text-quartenary items-center rounded-full border px-1 py-0.5 text-[8px] font-semibold uppercase leading-3 text-token-text-secondary dark:border-token-border-heavy dark:text-token-text-tertiary",children:t.formatMessage(ue.beta)})}function R({isDisabled:t,name:a,icon:s,categoryId:o,description:i,extra:l,omitIcon:n,isBeta:r=!1}){let h=a;return r&&(h=e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:a}),e.jsx(Et,{})]})),e.jsxs("div",{className:"flex items-center gap-3",children:[!n&&e.jsx("span",{className:"flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-token-main-surface-secondary",children:s?e.jsx(s,{className:"h-4 w-4 text-token-text-primary"}):o&&e.jsx(qe,{type:"filled",className:N("h-4 w-4",t&&"text-gray-300",!t&&"text-token-text-primary"),categoryId:o})}),e.jsxs("div",{children:[h,e.jsxs("div",{className:N(!t&&"text-token-text-secondary","text-xs"),children:[i,l]})]})]})}function Tt({sections:t}){return e.jsx(e.Fragment,{children:t.map((a,s)=>e.jsxs(Ae.Fragment,{children:[s!==0?e.jsx(u.Separator,{}):null,a.content]},a.id))})}function _t({clientThreadId:t,inMobileHeader:a=!1}){const s=ae(t);return s==null?e.jsx(Nt,{clientThreadId:t,inMobileHeader:a}):e.jsx(vt,{clientThreadId:t,gizmoId:s,inMobileHeader:a})}const ue=Ee({beta:{id:"XZwFET",defaultMessage:"Beta"},gpt35ShortExplainer:{defaultMessage:"Great for everyday tasks",id:"ModelSwitcher.gpt35ShortExplainer"},modelTunerSmartSelectionTitle:{id:"czjW8I",defaultMessage:"Dynamic"},modelTunerSmartSelectionExplainer:{id:"gp/YH1",defaultMessage:"Optimized for speed and intelligence"},gpt4ShortExplainer:{defaultMessage:"With DALL·E, browsing and analysis",id:"ModelSwitcher.gpt4ShortExplainer"},gpt4ShortExplainerWithoutBrowse:{defaultMessage:"With DALL·E and analysis",id:"ModelSwitcher.gpt4ShortExplainerWithoutBrowse"},gpt4UpsellExplainer:{id:"ModelSwitcher.gpt4Upsell",defaultMessage:"Our smartest and most capable model. Includes DALL·E, browsing and more."},userUpgrade:{id:"ModelSwithcer.upgradeButton",defaultMessage:"Upgrade to Plus"},userUpgradeSignup:{id:"ModelSwitcher.signupUpgradeButton",defaultMessage:"Sign up for ChatGPT Plus"},temporaryChat:{id:"ModelSwitcher.temporaryChat",defaultMessage:"Temporary chat"},shareChat:{id:"ModelSwitcher.shareChat",defaultMessage:"Share chat"}}),Pt=Q(()=>V(()=>import("./fog1yonf608aoaaa.js"),__vite__mapDeps([7,1,2,3,8,9,4,5,10,11,12,13,14,15,16,17,18,19,20,21,6,22,23,24,25])).then(t=>t.GizmoUsingAsOwnerNotice)),It=({clientThreadId:t})=>{const a=Qe(c=>c.activeStageSidebar),s=ie.getServerThreadId(t),o=Ve(Te.WorkspaceShareLinks),{isUnauthenticated:i}=L(),l=se(),n=o&&s&&!i&&!l,r=re(),h=!a&&!r;return e.jsx("div",{className:"flex items-center gap-2 pr-1 leading-[0]",children:e.jsx(Mt,{showShareButton:n,showProfileDropdown:h,clientThreadId:t})})};function Rt({clientThreadId:t,gizmoId:a}){const s=Ze(),{data:o}=Je(a),i=_e();return e.jsxs(e.Fragment,{children:[e.jsxs(et,{className:"max-md:hidden",children:[e.jsxs("div",{className:"absolute start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2",children:[o!=null&&i?.isWorkspaceAccount()&&o.gizmo.tags?.includes(tt.WorkspaceDisabled)&&e.jsx(Pt,{gizmo:o}),e.jsx(st,{gizmoId:a,clientThreadId:t})]}),e.jsx(at,{children:e.jsxs("div",{className:"flex items-center gap-0 overflow-hidden",children:[e.jsx(jt,{clientThreadId:t}),e.jsx(_t,{clientThreadId:t})]})}),e.jsx(It,{clientThreadId:t})]}),s&&e.jsx(nt,{})]})}export{It as C,$ as G,bt as H,_t as T,Rt as a,Ht as b};
//# sourceMappingURL=o8uyy9ytn5mdu56y.js.map