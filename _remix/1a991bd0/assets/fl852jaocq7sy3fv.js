const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sso-dmf0q06bhofo0dzh.js","assets/flidd11gv2mtd3pr.js","assets/hblp7wkoj3uom6wj.js","assets/root-m9ef0vyd.css","assets/ipbze00pn8qquhuv.js","assets/b3rades3r6m68flq.js","assets/conversation-small-cll5buey.css","assets/wpujrihzys0fipz2.js","assets/f4lu6fjawq1oq6b1.js","assets/i2s1xzcbw7ed8pb9.js","assets/hcy36too2a4zuew8.js","assets/ez1kjz5fvk5gkbgz.js","assets/c2irxumz2s63grlt.js","assets/fqhitr15xecbhn4t.js","assets/he7piz7zzhgkln8o.js","assets/hz1r57eozmvrgxlo.js","assets/bwm8ulkt7rpl8jcy.js","assets/grjj5fhjl543khxi.js","assets/l0fcm4l649pd7v83.js","assets/gmdmr9wfsgbqi27t.js","assets/lp2a7a6x1h38kn3s.js","assets/mqac55qx5mn89v48.js","assets/cal0u03lp7thvbxn.js","assets/meugxv74uw703qco.js","assets/i734c6y7d91os1op.js","assets/mlujohirqfcvw089.js","assets/n42kbqjdrve5pcm7.js","assets/bkuyfvqo7hz3i261.js","assets/o8alru721cmk9wr3.js","assets/itghwucfyv5ciib7.js","assets/b4es1bjav85vj4sv.js","assets/cau48tp2f4eaz0wt.js","assets/c4rvlhpljar7u3qm.js","assets/983a0dy92b3ronpv.js","assets/m0ydr4onnlhrowip.js","assets/kqwdyvkaaavvn8k3.js","assets/hd6hdmymthl86w8f.js","assets/itqsq7omc5n6zia6.js","assets/pex6yk3nk94vbrz9.js","assets/gc1pxs1h3evckg8x.js","assets/e9lafxuzyeh4418f.js","assets/fv7ub7cxj399tr6j.js","assets/h5et0ymbzpnns188.js","assets/g6hxbnpma4c3horj.js","assets/h7u89x5q6weejt5e.js","assets/ld8gw8gf75kim1j4.js","assets/op2cpjdree4q4n5r.js","assets/ojvd3u4eh18asfwl.js","assets/hvweoiki9q8t0cje.js","assets/iej0cupg2dqkmejt.js","assets/iektjrxk65b0n0av.js","assets/4bk6jyb0q93tbvk4.js","assets/jk8w36bsokizpx57.js","assets/jjecl7pi17ucp9nv.js","assets/l2ys2h7991porc75.js"])))=>i.map(i=>d[i]);
import{ag as F,d6 as H,bc as $,a8 as Q,bv as w,be as B,P as m,d7 as y,y as e,a6 as R,Z as V,$ as W,w as Y,W as K,r as f,ar as X,c3 as J,a1 as z,ew as Z,b as A,ex as q,O as b,X as ee}from"./flidd11gv2mtd3pr.js";import{G as E}from"./g6hxbnpma4c3horj.js";import{u as te,j as ne,x as se}from"./hcy36too2a4zuew8.js";import{w as ae,r as oe,t as re,v as ie,x as le,y as ce,bC as ue,bD as de,K as I}from"./b3rades3r6m68flq.js";import{I as me,aT as ge,aY as pe,S as xe}from"./hblp7wkoj3uom6wj.js";import{u as fe}from"./ez1kjz5fvk5gkbgz.js";const he=({clientThreadId:n,rateLimitInfo:r,onDismiss:i})=>{const{name:l,title:u,call_to_action:c,description:d}=r,g=F(),h=te(!0),a=H(),s=fe(n),t=g?.planType??"unknown",o=ae(),k=a&&"block_reason"in a?a.block_reason:null,C="banner_description",j={type:l||"unknown",location:C,plan_type:t,is_new_conversation:s,is_hard_block:!!a,hard_block_reason:k??"",call_to_action:c},M=$(),T=oe(),{isUnauthenticated:D}=Q(),p=re(),P=ie(w.signUpButtonText),N=O=>{switch(O){case y.AUTHENTICATE:return{text:p?w.logInButtonText:P,onClick:()=>{T({authType:p?"login":"signup",callback:x=>{p?m.logLogInButtonClicked({location:`Rate limit banner - ${l}`,provider:x}):m.logSignUpButtonClicked({location:`Rate limit banner - ${l}`,provider:x})}})}};case y.AUTHENTICATE_SECONDARY:return{text:p?P:w.logInButtonText,onClick:()=>{T({authType:p?"signup":"login",callback:x=>{p?m.logSignUpButtonClicked({location:`Rate limit banner - ${l}`,provider:x}):m.logLogInButtonClicked({location:`Rate limit banner - ${l}`,provider:x})}})}};case y.GET_PLUS:return{text:_.getPlusButton,onClick:()=>{m.logRateLimitGetPlusButtonClicked(j),D?T({authType:p?"login":"signup",shouldOpenPaymentModalOnAuth:!0,callback:x=>{p?m.logLogInButtonClicked({location:"Rate limit banner Get Plus upsell",provider:x}):m.logSignUpButtonClicked({location:"Rate limit banner Get Plus upsell",provider:x})}}):ce(M,"Prompt textarea rate limit banner")}};case y.NEW_CHAT:return{text:_.newChatButton,onClick:()=>{h({modelId:"",location:C})}}}};B(()=>{m.logRateLimitBannerShown(j)});let[L,S]=c??[];L===y.AUTHENTICATE&&o&&(S=y.AUTHENTICATE_SECONDARY);const U={primaryAction:N(L),secondaryAction:N(S)};return e.jsx(le,{onDismiss:i,title:u,description:d,actions:U})},_=R({getPlusButton:{id:"TeyLcp",defaultMessage:"Get Plus"},newChatButton:{id:"7OvnJ5",defaultMessage:"New chat"}}),ye=V(()=>W(()=>import("./sso-dmf0q06bhofo0dzh.js").then(n=>n.p),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54])).then(n=>n.PromptTextareaRateLimitBannerNew)),ke=n=>{const{value:r}=Y("1028682714");return r?e.jsx(ye,{...n}):e.jsx(he,{...n})},G=K.div`group flex h-10 items-center gap-2 rounded-lg px-2 hover:bg-token-main-surface-secondary text-sm text-token-text-primary`;function Te(){const{data:n,isLoading:r}=ne({cutId:"recent",limit:8}),{data:i,isLoading:l}=se();return{isLoading:r||l,recent:n,pinned:i}}function we({query:n,onSelectGizmo:r,selectedIdx:i},l){const u=ue(),c=f.useRef([]),{isLoading:d,recent:g,pinned:h}=Te();f.useImperativeHandle(l,()=>({handleEnterOnIndex:t=>{if(!s[t])return t<a.length?a[t].resource:"create"},getResultsLength:()=>a.length+1,scrollToItem:t=>{const o=c.current[t];o&&o.scrollIntoView({behavior:"instant",block:"nearest"})}}));let a=[];if(d)return e.jsx("div",{className:"absolute right-4 top-0 flex h-full items-center justify-center",children:e.jsx(X,{})});g&&a.push(...g.pages.flatMap(t=>t.list.items).map(t=>({resource:t.resource,from:"recent"}))),h&&a.push(...h.items.map(t=>({resource:t,from:"pinned"}))),a=de(a,t=>t.resource.gizmo.id);const s=a.map(t=>t.resource.gizmo.tags?.includes(I.WorkspaceDisabled));return n&&n!==""&&(a=a.filter(t=>(t.resource.gizmo.display.name.toLowerCase()+t.resource.gizmo.display.description?.toLowerCase()+t.resource.gizmo.author.display_name?.toLowerCase()).includes(n?.toLowerCase()))),e.jsxs("div",{className:"max-h-40 overflow-y-auto",children:[a.map((t,o)=>e.jsx("div",{ref:k=>{c.current[o]=k},tabIndex:o,onClick:()=>{s[o]||r(t.resource)},children:e.jsx(Ce,{gizmoResource:t.resource,from:t.from,showDescription:u,isSelected:i===o,grayedOut:s[o]})},t.resource.gizmo.id)),e.jsx("div",{ref:t=>{c.current[a.length]=t},tabIndex:a.length,onClick:()=>{r("create")},children:e.jsx(Ie,{isSelected:i===a.length})},"create")]})}const be=f.forwardRef(we),Ie=({isSelected:n})=>e.jsx(G,{className:n?"bg-token-main-surface-secondary":"",children:e.jsxs(J,{to:"/gpts/editor",target:"_blank",className:"flex flex-row space-x-2 font-semibold",children:[e.jsx("span",{className:"self-center",children:e.jsx(me,{className:"icon-sm"})}),e.jsx("span",{children:e.jsx(z,{...v.dropdownCreateLabel})})]})}),ve=({onClick:n,onClose:r})=>{const[i,l]=f.useState(null),u=f.useRef(null),c=f.useRef(null),[d,g]=f.useState(0),h=ee(),a=s=>{m.logEvent(A.mentionsClickGizmo,{gizmo_id:s==="create"?"create":s.gizmo.id}),s!=="create"&&n(s)};return e.jsxs(e.Fragment,{children:[e.jsx("input",{autoFocus:!0,placeholder:h.formatMessage(v.searchPlaceholder),ref:u,onKeyDown:s=>{const t=c.current?.getResultsLength()??0;if((s.key==="Escape"||s.key==="Backspace"&&!i)&&(s.preventDefault(),r()),s.key==="Enter"||s.key==="Tab"){s.preventDefault();const o=c.current?.handleEnterOnIndex(d);if(!o)return;o==="create"?(window.open("/gpts/editor","_blank"),r()):a(o)}if(s.key==="ArrowDown"&&d<t-1){s.preventDefault();const o=d+1;c.current?.scrollToItem(o),g(o)}if(s.key==="ArrowUp"&&d>0){s.preventDefault();const o=d-1;c.current?.scrollToItem(o),g(o)}},onChange:s=>{l(s.target.value),g(0)},className:"w-full border-0 bg-token-main-surface-primary p-2 text-sm focus:outline-none"}),e.jsx(be,{ref:c,query:i,selectedIdx:d,onSelectGizmo:a})]})},Be=({onClick:n,onClose:r})=>{const i=Z(),l=!!i;return B(()=>{m.logEvent(A.mentionsOpened,{gizmo_selector_disabled:l})}),l?e.jsx(ke,{clientThreadId:q,rateLimitInfo:i}):e.jsx("div",{onBlur:u=>{u.currentTarget.contains(u.relatedTarget)||r()},className:"popover rounded-2xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-lg",children:e.jsx(ve,{onClick:n,onClose:r})})};function Ce({gizmoResource:n,from:r,showDescription:i,isSelected:l,grayedOut:u}){const c=!!n.gizmo.tags?.includes(I.FirstParty);return e.jsxs(G,{className:b(l?"bg-token-main-surface-secondary":"",u&&"opacity-50"),children:[e.jsx(E,{isFirstParty:c,src:n.gizmo.display.profile_picture_url,className:b("icon-xl h-7 w-7 flex-shrink-0",u&&"grayscale group-hover:grayscale-0")}),e.jsxs("div",{className:"flex h-fit grow flex-row justify-between space-x-2 overflow-hidden text-ellipsis whitespace-nowrap",children:[e.jsxs("div",{className:"flex flex-row space-x-2",children:[e.jsx("span",{className:"shrink-0 truncate font-semibold",children:n.gizmo.display.name}),i&&e.jsx("span",{className:"flex-grow truncate text-sm text-token-text-tertiary sm:max-w-xs lg:max-w-md",children:n.gizmo.display.description})]}),e.jsx("span",{className:"shrink-0 self-center",children:r==="recent"?e.jsx(ge,{className:"icon-sm"}):e.jsx(pe,{className:"icon-sm"})})]})]})}function Re({gizmoResource:n,onRemove:r}){const i=!!n.gizmo.tags?.includes(I.FirstParty);return e.jsxs("div",{className:"flex w-full flex-row items-center rounded-t-2xl bg-token-main-surface-secondary px-2 py-1",children:[e.jsxs("div",{className:b("group flex h-10 items-center gap-2 rounded-lg px-2 font-semibold"),children:[e.jsx(E,{isFirstParty:i,src:n.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),e.jsxs("div",{className:"space-x-2 overflow-hidden text-ellipsis text-sm text-token-text-tertiary",children:[e.jsx(z,{...v.talkingTo})," ",e.jsx("span",{className:"font-semibold text-token-text-secondary",children:n.gizmo.display.name})]})]}),r&&e.jsx("button",{className:"absolute right-4 text-sm font-bold",onClick:r,children:e.jsx(xe,{className:"icon-md text-token-text-secondary hover:text-token-text-primary"})})]})}const v=R({talkingTo:{id:"TaggingDropdown.talkingTo",defaultMessage:"Talking to"},dropdownCreateLabel:{id:"TaggingDropdown.dropdownCreateLabel",defaultMessage:"Create a GPT"},searchPlaceholder:{id:"TaggingDropdown.searchPlaceholder",defaultMessage:"Search recent and pinned GPTs"}});export{Be as I,ke as P,Re as a,Te as u};
//# sourceMappingURL=fl852jaocq7sy3fv.js.map