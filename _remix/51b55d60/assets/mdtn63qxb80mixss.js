const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sso-y24qlvpjvdevd8x6.js","assets/otclk14vst88v95n.js","assets/cqauunpqwnjujx3i.js","assets/root-cn1q1n2n.css","assets/f6bdrzwk5aclba0b.js","assets/cef20f49k9y1cwjs.js","assets/conversation-small-mclg7qvi.css","assets/d9zyifn8newo7zbx.js","assets/m5be5ov74xrjmrp3.js","assets/ge4estcii3ilqp3x.js","assets/fjotlmkpidhbg5lv.js","assets/dz5d6zj45kdshiom.js","assets/g2mu0f7itg7huslu.js","assets/o0zm8r4ulpygvxzt.js","assets/frpk4161je4wyyc5.js","assets/grwsm8tx5qgi12pr.js","assets/fk3u4mjp5mpw70zy.js","assets/mmxiwemqqtmqbesv.js","assets/ibb3ldlzt4z2r22d.js","assets/k634wtly9qqhfuwz.js","assets/nrpg61rmusf8o8ub.js","assets/dnzexkfcmjpqmtba.js","assets/bj5ozoczrnueocbo.js","assets/k1bybifg8757yvsg.js","assets/bj84hod8soycdu5o.js","assets/kgpt3malt6eqacih.js","assets/hxegvzgw7bblgaxl.js","assets/eayiiad2l5prvvwc.js","assets/i3lhp0y9ixfjs84k.js","assets/j6i8vfg92lbcflka.js","assets/n9r8w67q4d2shpjh.js","assets/fg1cceh1nyryady0.js","assets/gadgua8tzgpajxqz.js","assets/itghwucfyv5ciib7.js","assets/nzal8atexc0mul29.js","assets/hj6cj7m5qcsoqxlf.js","assets/lbcnuoctupcnvlt2.js","assets/983a0dy92b3ronpv.js","assets/dppwq2udw3en7vdg.js","assets/mi7ib6zg2mtczyia.js","assets/kqwdyvkaaavvn8k3.js","assets/g0g7owg6j7cwi23a.js","assets/hvmghhep8rwhhb5m.js","assets/edllx3ycekthkzxl.js","assets/jxgasw6r93foshbs.js","assets/nhwwej1nq0zrd7sc.js","assets/j2ohic1668qrk25b.js","assets/dumt5x10tr8cp7v9.js","assets/igvvklrr5qpdyj7e.js","assets/lkvsxcy06l4nodjs.js","assets/j6hkozum2eq0un17.js","assets/jymfcxvqtjbkrst6.js","assets/cy19cl7z1ypv8mks.js","assets/eg3uwjflf5osl97h.js","assets/j2wfs46bm5ondumk.js","assets/iej0cupg2dqkmejt.js","assets/06o75hql6ljdmcq5.js","assets/lw5mafjeq59vrl67.js","assets/jk8w36bsokizpx57.js","assets/g3t9mr0690be3awb.js","assets/bs15anz3z72ppl2r.js","assets/f5b9dpiw5iadkbq2.js","assets/npw1l0xd4g5ieuef.js","assets/dnz4j21u8t8m6fvq.js","assets/n6wvh22fesvcbzv1.js","assets/inqphz7z0wez6nc0.js","assets/swiper-kmk1dd5x.css"])))=>i.map(i=>d[i]);
import{ak as F,dd as H,bq as Q,ag as $,bF as w,cx as B,P as m,de as y,t as e,ae as A,a6 as V,a7 as K,a2 as W,Q as X,r as f,ay as Y,cd as J,a9 as R,eJ as q,d as z,eK as Z,U as b,a4 as ee}from"./otclk14vst88v95n.js";import{G as E}from"./lkvsxcy06l4nodjs.js";import{u as te,j as ne,A as se}from"./m5be5ov74xrjmrp3.js";import{y as ae,v as oe,w as re,x as ie,z as le,A as ce,bK as ue,F as de,X as I}from"./cef20f49k9y1cwjs.js";import{I as me,aS as ge,aX as pe,S as xe}from"./cqauunpqwnjujx3i.js";import{u as fe}from"./ge4estcii3ilqp3x.js";const he=({clientThreadId:n,rateLimitInfo:r,onDismiss:i})=>{const{name:l,title:u,call_to_action:c,description:d}=r,g=F(),h=te(!0),a=H(),s=fe(n),t=g?.planType??"unknown",o=ae(),k=a&&"block_reason"in a?a.block_reason:null,j="banner_description",C={type:l||"unknown",location:j,plan_type:t,is_new_conversation:s,is_hard_block:!!a,hard_block_reason:k??"",call_to_action:c},M=Q(),T=oe(),{isUnauthenticated:D}=$(),p=re(),P=ie(w.signUpButtonText),N=O=>{switch(O){case y.AUTHENTICATE:return{text:p?w.logInButtonText:P,onClick:()=>{T({authType:p?"login":"signup",callback:x=>{p?m.logLogInButtonClicked({location:`Rate limit banner - ${l}`,provider:x}):m.logSignUpButtonClicked({location:`Rate limit banner - ${l}`,provider:x})}})}};case y.AUTHENTICATE_SECONDARY:return{text:p?P:w.logInButtonText,onClick:()=>{T({authType:p?"signup":"login",callback:x=>{p?m.logSignUpButtonClicked({location:`Rate limit banner - ${l}`,provider:x}):m.logLogInButtonClicked({location:`Rate limit banner - ${l}`,provider:x})}})}};case y.GET_PLUS:return{text:_.getPlusButton,onClick:()=>{m.logRateLimitGetPlusButtonClicked(C),D?T({authType:p?"login":"signup",shouldOpenPaymentModalOnAuth:!0,callback:x=>{p?m.logLogInButtonClicked({location:"Rate limit banner Get Plus upsell",provider:x}):m.logSignUpButtonClicked({location:"Rate limit banner Get Plus upsell",provider:x})}}):ce(M,"Prompt textarea rate limit banner")}};case y.NEW_CHAT:return{text:_.newChatButton,onClick:()=>{h({modelId:"",location:j})}}}};B(()=>{m.logRateLimitBannerShown(C)});let[L,S]=c??[];L===y.AUTHENTICATE&&o&&(S=y.AUTHENTICATE_SECONDARY);const U={primaryAction:N(L),secondaryAction:N(S)};return e.jsx(le,{onDismiss:i,title:u,description:d,actions:U})},_=A({getPlusButton:{id:"TeyLcp",defaultMessage:"Get Plus"},newChatButton:{id:"7OvnJ5",defaultMessage:"New chat"}}),ye=V(()=>K(()=>import("./sso-y24qlvpjvdevd8x6.js").then(n=>n.p),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66])).then(n=>n.PromptTextareaRateLimitBannerNew)),ke=n=>{const{value:r}=W("1028682714");return r?e.jsx(ye,{...n}):e.jsx(he,{...n})},G=X.div`group flex h-10 items-center gap-2 rounded-lg px-2 hover:bg-token-main-surface-secondary text-sm text-token-text-primary`;function Te(){const{data:n,isLoading:r}=ne({cutId:"recent",limit:8}),{data:i,isLoading:l}=se();return{isLoading:r||l,recent:n,pinned:i}}function we({query:n,onSelectGizmo:r,selectedIdx:i},l){const u=ue(),c=f.useRef([]),{isLoading:d,recent:g,pinned:h}=Te();f.useImperativeHandle(l,()=>({handleEnterOnIndex:t=>{if(!s[t])return t<a.length?a[t].resource:"create"},getResultsLength:()=>a.length+1,scrollToItem:t=>{const o=c.current[t];o&&o.scrollIntoView({behavior:"instant",block:"nearest"})}}));let a=[];if(d)return e.jsx("div",{className:"absolute right-4 top-0 flex h-full items-center justify-center",children:e.jsx(Y,{})});g&&a.push(...g.pages.flatMap(t=>t.list.items).map(t=>({resource:t.resource,from:"recent"}))),h&&a.push(...h.items.map(t=>({resource:t,from:"pinned"}))),a=de(a,t=>t.resource.gizmo.id);const s=a.map(t=>t.resource.gizmo.tags?.includes(I.WorkspaceDisabled));return n&&n!==""&&(a=a.filter(t=>(t.resource.gizmo.display.name.toLowerCase()+t.resource.gizmo.display.description?.toLowerCase()+t.resource.gizmo.author.display_name?.toLowerCase()).includes(n?.toLowerCase()))),e.jsxs("div",{className:"max-h-40 overflow-y-auto",children:[a.map((t,o)=>e.jsx("div",{ref:k=>{c.current[o]=k},tabIndex:o,onClick:()=>{s[o]||r(t.resource)},children:e.jsx(je,{gizmoResource:t.resource,from:t.from,showDescription:u,isSelected:i===o,grayedOut:s[o]})},t.resource.gizmo.id)),e.jsx("div",{ref:t=>{c.current[a.length]=t},tabIndex:a.length,onClick:()=>{r("create")},children:e.jsx(Ie,{isSelected:i===a.length})},"create")]})}const be=f.forwardRef(we),Ie=({isSelected:n})=>e.jsx(G,{className:n?"bg-token-main-surface-secondary":"",children:e.jsxs(J,{to:"/gpts/editor",target:"_blank",className:"flex flex-row space-x-2 font-semibold",children:[e.jsx("span",{className:"self-center",children:e.jsx(me,{className:"icon-sm"})}),e.jsx("span",{children:e.jsx(R,{...v.dropdownCreateLabel})})]})}),ve=({onClick:n,onClose:r})=>{const[i,l]=f.useState(null),u=f.useRef(null),c=f.useRef(null),[d,g]=f.useState(0),h=ee(),a=s=>{m.logEvent(z.mentionsClickGizmo,{gizmo_id:s==="create"?"create":s.gizmo.id}),s!=="create"&&n(s)};return e.jsxs(e.Fragment,{children:[e.jsx("input",{autoFocus:!0,placeholder:h.formatMessage(v.searchPlaceholder),ref:u,onKeyDown:s=>{const t=c.current?.getResultsLength()??0;if((s.key==="Escape"||s.key==="Backspace"&&!i)&&(s.preventDefault(),r()),s.key==="Enter"||s.key==="Tab"){s.preventDefault();const o=c.current?.handleEnterOnIndex(d);if(!o)return;o==="create"?(window.open("/gpts/editor","_blank"),r()):a(o)}if(s.key==="ArrowDown"&&d<t-1){s.preventDefault();const o=d+1;c.current?.scrollToItem(o),g(o)}if(s.key==="ArrowUp"&&d>0){s.preventDefault();const o=d-1;c.current?.scrollToItem(o),g(o)}},onChange:s=>{l(s.target.value),g(0)},className:"w-full border-0 bg-token-main-surface-primary p-2 text-sm focus:outline-none"}),e.jsx(be,{ref:c,query:i,selectedIdx:d,onSelectGizmo:a})]})},Be=({onClick:n,onClose:r})=>{const i=q(),l=!!i;return B(()=>{m.logEvent(z.mentionsOpened,{gizmo_selector_disabled:l})}),l?e.jsx(ke,{clientThreadId:Z,rateLimitInfo:i}):e.jsx("div",{onBlur:u=>{u.currentTarget.contains(u.relatedTarget)||r()},className:"popover rounded-2xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-lg",children:e.jsx(ve,{onClick:n,onClose:r})})};function je({gizmoResource:n,from:r,showDescription:i,isSelected:l,grayedOut:u}){const c=!!n.gizmo.tags?.includes(I.FirstParty);return e.jsxs(G,{className:b(l?"bg-token-main-surface-secondary":"",u&&"opacity-50"),children:[e.jsx(E,{isFirstParty:c,src:n.gizmo.display.profile_picture_url,className:b("icon-xl h-7 w-7 flex-shrink-0",u&&"grayscale group-hover:grayscale-0")}),e.jsxs("div",{className:"flex h-fit grow flex-row justify-between space-x-2 overflow-hidden text-ellipsis whitespace-nowrap",children:[e.jsxs("div",{className:"flex flex-row space-x-2",children:[e.jsx("span",{className:"shrink-0 truncate font-semibold",children:n.gizmo.display.name}),i&&e.jsx("span",{className:"flex-grow truncate text-sm text-token-text-tertiary sm:max-w-xs lg:max-w-md",children:n.gizmo.display.description})]}),e.jsx("span",{className:"shrink-0 self-center",children:r==="recent"?e.jsx(ge,{className:"icon-sm"}):e.jsx(pe,{className:"icon-sm"})})]})]})}function Ae({gizmoResource:n,onRemove:r}){const i=!!n.gizmo.tags?.includes(I.FirstParty);return e.jsxs("div",{className:"flex w-full flex-row items-center rounded-t-2xl bg-token-main-surface-secondary px-2 py-1",children:[e.jsxs("div",{className:b("group flex h-10 items-center gap-2 rounded-lg px-2 font-semibold"),children:[e.jsx(E,{isFirstParty:i,src:n.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),e.jsxs("div",{className:"space-x-2 overflow-hidden text-ellipsis text-sm text-token-text-tertiary",children:[e.jsx(R,{...v.talkingTo})," ",e.jsx("span",{className:"font-semibold text-token-text-secondary",children:n.gizmo.display.name})]})]}),r&&e.jsx("button",{className:"absolute right-4 text-sm font-bold",onClick:r,children:e.jsx(xe,{className:"icon-md text-token-text-secondary hover:text-token-text-primary"})})]})}const v=A({talkingTo:{id:"TaggingDropdown.talkingTo",defaultMessage:"Talking to"},dropdownCreateLabel:{id:"TaggingDropdown.dropdownCreateLabel",defaultMessage:"Create a GPT"},searchPlaceholder:{id:"TaggingDropdown.searchPlaceholder",defaultMessage:"Search recent and pinned GPTs"}});export{Be as I,ke as P,Ae as a,Te as u};
//# sourceMappingURL=mdtn63qxb80mixss.js.map