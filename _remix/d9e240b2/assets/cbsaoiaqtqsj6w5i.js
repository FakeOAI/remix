const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sso-gmjsrepfahh0ddt1.js","assets/dox08siw8jpmvomc.js","assets/fqwcm8tlxlxeznk9.js","assets/root-c7p9nir8.css","assets/iholtkkr5grlradu.js","assets/fc5wvqf6bpwfisto.js","assets/conversation-small-kig9eefw.css","assets/kdbhtbgulpasozq8.js","assets/dl9ejqfgqqudmtu4.js","assets/jsdkerkdejse6xvb.js","assets/mo5vwcgxj3k03z2d.js","assets/i88bh24qis64ygc6.js","assets/f4fahqjmmck92axl.js","assets/g77py3egqoj5m045.js","assets/eagsb0h5hjvq1bwj.js","assets/fub3qur6pkjxggnx.js","assets/eldxuy3s54b4zcvl.js","assets/eur3skihl3colpxk.js","assets/btldgutg0osc4iuj.js","assets/mhu6r7ghk0im1u7r.js","assets/b5y1wjr6mtaq20i2.js","assets/ct45fs11m9lhg2f3.js","assets/e5game9ahtm2rhqo.js","assets/h28e3qjqifm65lm8.js","assets/hmrjtjwm4jpzisl0.js","assets/gb4chkfr5a3i9htz.js","assets/nvonzw94bsm0qu07.js","assets/d8tfnb6sx52pmbk0.js","assets/kr8i4zveiug2wewf.js","assets/li9j6giooapl805b.js","assets/g15bkfl8ixxpuzta.js","assets/itghwucfyv5ciib7.js","assets/sh6u7u9l96e2dhsp.js","assets/bvo1gu2pqnmc4kiz.js","assets/f2psysjbot8hs8wr.js","assets/983a0dy92b3ronpv.js","assets/hdmulcdg9g53xytw.js","assets/g00z8zycxjylvho5.js","assets/kqwdyvkaaavvn8k3.js","assets/dryemyb8mi96zpw0.js","assets/g7qb5tooqltm4tyq.js","assets/o9r7yw63z860yn3q.js","assets/o4jao21iw11lt9w4.js","assets/nhwwej1nq0zrd7sc.js","assets/dznqu289kon3lnff.js","assets/fnke542qdk6d17ze.js","assets/isyat6xrfarhd7f9.js","assets/it1pdgbrpfk05qgr.js","assets/bax9klr6rhjb1b1r.js","assets/hrjcbehz3zo911dt.js","assets/lgko6nli7w2sxe5c.js","assets/c4ypubzfbkgitdgc.js","assets/caa5di0xkm7m8gzi.js","assets/iej0cupg2dqkmejt.js","assets/fachrmt851jz6ju0.js","assets/6qzv114miibbnvza.js","assets/jk8w36bsokizpx57.js","assets/ibgdshmp3ef9xezp.js","assets/h1gtqzlr6dza00zp.js","assets/gq2086z17qec4v93.js","assets/c4a36gsyoo2n4bws.js","assets/gee2fuywt6p6xpj9.js","assets/g9y5ekzcwhqq1ggz.js","assets/k0d6r01brwhtuewp.js","assets/swiper-kmk1dd5x.css"])))=>i.map(i=>d[i]);
import{aO as F,de as H,bH as Q,Q as $,bJ as w,cy as B,P as m,df as y,l as e,a1 as R,aE as J,aF as V,aB as W,a2 as Y,r as f,b0 as K,cp as X,a0 as z,eJ as Z,d as A,eK as q,m as b,W as ee}from"./dox08siw8jpmvomc.js";import{G as E}from"./it1pdgbrpfk05qgr.js";import{u as te,j as ne,B as se}from"./dl9ejqfgqqudmtu4.js";import{y as ae,v as oe,w as re,x as ie,z as le,A as ce,bO as ue,F as de,Y as I}from"./fc5wvqf6bpwfisto.js";import{J as me,aU as ge,aZ as pe,a as xe}from"./fqwcm8tlxlxeznk9.js";import{u as fe}from"./jsdkerkdejse6xvb.js";const he=({clientThreadId:n,rateLimitInfo:r,onDismiss:i})=>{const{name:l,title:u,call_to_action:c,description:d}=r,g=F(),h=te(!0),a=H(),s=fe(n),t=g?.planType??"unknown",o=ae(),k=a&&"block_reason"in a?a.block_reason:null,j="banner_description",C={type:l||"unknown",location:j,plan_type:t,is_new_conversation:s,is_hard_block:!!a,hard_block_reason:k??"",call_to_action:c},M=Q(),T=oe(),{isUnauthenticated:D}=$(),p=re(),P=ie(w.signUpButtonText),N=O=>{switch(O){case y.AUTHENTICATE:return{text:p?w.logInButtonText:P,onClick:()=>{T({authType:p?"login":"signup",callback:x=>{p?m.logLogInButtonClicked({location:`Rate limit banner - ${l}`,provider:x}):m.logSignUpButtonClicked({location:`Rate limit banner - ${l}`,provider:x})}})}};case y.AUTHENTICATE_SECONDARY:return{text:p?P:w.logInButtonText,onClick:()=>{T({authType:p?"signup":"login",callback:x=>{p?m.logSignUpButtonClicked({location:`Rate limit banner - ${l}`,provider:x}):m.logLogInButtonClicked({location:`Rate limit banner - ${l}`,provider:x})}})}};case y.GET_PLUS:return{text:S.getPlusButton,onClick:()=>{m.logRateLimitGetPlusButtonClicked(C),D?T({authType:p?"login":"signup",shouldOpenPaymentModalOnAuth:!0,callback:x=>{p?m.logLogInButtonClicked({location:"Rate limit banner Get Plus upsell",provider:x}):m.logSignUpButtonClicked({location:"Rate limit banner Get Plus upsell",provider:x})}}):ce(M,"Prompt textarea rate limit banner")}};case y.NEW_CHAT:return{text:S.newChatButton,onClick:()=>{h({modelId:"",location:j})}}}};B(()=>{m.logRateLimitBannerShown(C)});let[L,_]=c??[];L===y.AUTHENTICATE&&o&&(_=y.AUTHENTICATE_SECONDARY);const U={primaryAction:N(L),secondaryAction:N(_)};return e.jsx(le,{onDismiss:i,title:u,description:d,actions:U})},S=R({getPlusButton:{id:"TeyLcp",defaultMessage:"Get Plus"},newChatButton:{id:"7OvnJ5",defaultMessage:"New chat"}}),ye=J(()=>V(()=>import("./sso-gmjsrepfahh0ddt1.js").then(n=>n.p),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64])).then(n=>n.PromptTextareaRateLimitBannerNew)),ke=n=>{const{value:r}=W("1028682714");return r?e.jsx(ye,{...n}):e.jsx(he,{...n})},G=Y.div`group flex h-10 items-center gap-2 rounded-lg px-2 hover:bg-token-main-surface-secondary text-sm text-token-text-primary`;function Te(){const{data:n,isLoading:r}=ne({cutId:"recent",limit:8}),{data:i,isLoading:l}=se();return{isLoading:r||l,recent:n,pinned:i}}function we({query:n,onSelectGizmo:r,selectedIdx:i},l){const u=ue(),c=f.useRef([]),{isLoading:d,recent:g,pinned:h}=Te();f.useImperativeHandle(l,()=>({handleEnterOnIndex:t=>{if(!s[t])return t<a.length?a[t].resource:"create"},getResultsLength:()=>a.length+1,scrollToItem:t=>{const o=c.current[t];o&&o.scrollIntoView({behavior:"instant",block:"nearest"})}}));let a=[];if(d)return e.jsx("div",{className:"absolute right-4 top-0 flex h-full items-center justify-center",children:e.jsx(K,{})});g&&a.push(...g.pages.flatMap(t=>t.list.items).map(t=>({resource:t.resource,from:"recent"}))),h&&a.push(...h.items.map(t=>({resource:t,from:"pinned"}))),a=de(a,t=>t.resource.gizmo.id);const s=a.map(t=>t.resource.gizmo.tags?.includes(I.WorkspaceDisabled));return n&&n!==""&&(a=a.filter(t=>(t.resource.gizmo.display.name.toLowerCase()+t.resource.gizmo.display.description?.toLowerCase()+t.resource.gizmo.author.display_name?.toLowerCase()).includes(n?.toLowerCase()))),e.jsxs("div",{className:"max-h-40 overflow-y-auto",children:[a.map((t,o)=>e.jsx("div",{ref:k=>{c.current[o]=k},tabIndex:o,onClick:()=>{s[o]||r(t.resource)},children:e.jsx(je,{gizmoResource:t.resource,from:t.from,showDescription:u,isSelected:i===o,grayedOut:s[o]})},t.resource.gizmo.id)),e.jsx("div",{ref:t=>{c.current[a.length]=t},tabIndex:a.length,onClick:()=>{r("create")},children:e.jsx(Ie,{isSelected:i===a.length})},"create")]})}const be=f.forwardRef(we),Ie=({isSelected:n})=>e.jsx(G,{className:n?"bg-token-main-surface-secondary":"",children:e.jsxs(X,{to:"/gpts/editor",target:"_blank",className:"flex flex-row space-x-2 font-semibold",children:[e.jsx("span",{className:"self-center",children:e.jsx(me,{className:"icon-sm"})}),e.jsx("span",{children:e.jsx(z,{...v.dropdownCreateLabel})})]})}),ve=({onClick:n,onClose:r})=>{const[i,l]=f.useState(null),u=f.useRef(null),c=f.useRef(null),[d,g]=f.useState(0),h=ee(),a=s=>{m.logEvent(A.mentionsClickGizmo,{gizmo_id:s==="create"?"create":s.gizmo.id}),s!=="create"&&n(s)};return e.jsxs(e.Fragment,{children:[e.jsx("input",{autoFocus:!0,placeholder:h.formatMessage(v.searchPlaceholder),ref:u,onKeyDown:s=>{const t=c.current?.getResultsLength()??0;if((s.key==="Escape"||s.key==="Backspace"&&!i)&&(s.preventDefault(),r()),s.key==="Enter"||s.key==="Tab"){s.preventDefault();const o=c.current?.handleEnterOnIndex(d);if(!o)return;o==="create"?(window.open("/gpts/editor","_blank"),r()):a(o)}if(s.key==="ArrowDown"&&d<t-1){s.preventDefault();const o=d+1;c.current?.scrollToItem(o),g(o)}if(s.key==="ArrowUp"&&d>0){s.preventDefault();const o=d-1;c.current?.scrollToItem(o),g(o)}},onChange:s=>{l(s.target.value),g(0)},className:"w-full border-0 bg-token-main-surface-primary p-2 text-sm focus:outline-none"}),e.jsx(be,{ref:c,query:i,selectedIdx:d,onSelectGizmo:a})]})},Be=({onClick:n,onClose:r})=>{const i=Z(),l=!!i;return B(()=>{m.logEvent(A.mentionsOpened,{gizmo_selector_disabled:l})}),l?e.jsx(ke,{clientThreadId:q,rateLimitInfo:i}):e.jsx("div",{onBlur:u=>{u.currentTarget.contains(u.relatedTarget)||r()},className:"popover rounded-2xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-lg",children:e.jsx(ve,{onClick:n,onClose:r})})};function je({gizmoResource:n,from:r,showDescription:i,isSelected:l,grayedOut:u}){const c=!!n.gizmo.tags?.includes(I.FirstParty);return e.jsxs(G,{className:b(l?"bg-token-main-surface-secondary":"",u&&"opacity-50"),children:[e.jsx(E,{isFirstParty:c,src:n.gizmo.display.profile_picture_url,className:b("icon-xl h-7 w-7 flex-shrink-0",u&&"grayscale group-hover:grayscale-0")}),e.jsxs("div",{className:"flex h-fit grow flex-row justify-between space-x-2 overflow-hidden text-ellipsis whitespace-nowrap",children:[e.jsxs("div",{className:"flex flex-row space-x-2",children:[e.jsx("span",{className:"shrink-0 truncate font-semibold",children:n.gizmo.display.name}),i&&e.jsx("span",{className:"flex-grow truncate text-sm text-token-text-tertiary sm:max-w-xs lg:max-w-md",children:n.gizmo.display.description})]}),e.jsx("span",{className:"shrink-0 self-center",children:r==="recent"?e.jsx(ge,{className:"icon-sm"}):e.jsx(pe,{className:"icon-sm"})})]})]})}function Re({gizmoResource:n,onRemove:r}){const i=!!n.gizmo.tags?.includes(I.FirstParty);return e.jsxs("div",{className:"flex w-full flex-row items-center rounded-t-2xl bg-token-main-surface-secondary px-2 py-1",children:[e.jsxs("div",{className:b("group flex h-10 items-center gap-2 rounded-lg px-2 font-semibold"),children:[e.jsx(E,{isFirstParty:i,src:n.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),e.jsxs("div",{className:"space-x-2 overflow-hidden text-ellipsis text-sm text-token-text-tertiary",children:[e.jsx(z,{...v.talkingTo})," ",e.jsx("span",{className:"font-semibold text-token-text-secondary",children:n.gizmo.display.name})]})]}),r&&e.jsx("button",{className:"absolute right-4 text-sm font-bold",onClick:r,children:e.jsx(xe,{className:"icon-md text-token-text-secondary hover:text-token-text-primary"})})]})}const v=R({talkingTo:{id:"TaggingDropdown.talkingTo",defaultMessage:"Talking to"},dropdownCreateLabel:{id:"TaggingDropdown.dropdownCreateLabel",defaultMessage:"Create a GPT"},searchPlaceholder:{id:"TaggingDropdown.searchPlaceholder",defaultMessage:"Search recent and pinned GPTs"}});export{Be as I,ke as P,Re as a,Te as u};
//# sourceMappingURL=cbsaoiaqtqsj6w5i.js.map