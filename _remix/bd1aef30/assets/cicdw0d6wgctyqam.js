const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sso-fwsahdzij36k3l6m.js","assets/gghzs582a65dvm3m.js","assets/e34jsxd5qw5romn0.js","assets/root-eakuwlaq.css","assets/jjibai5naylf11fy.js","assets/pd094ob9wacofnvk.js","assets/conversation-small-eplmind9.css","assets/oumq0lo7vo2u8qdw.js","assets/knl5287dkf7ic29t.js","assets/egu0eqrtgme3ss9j.js","assets/l69acfj4t0bghaz3.js","assets/ljnuyiuz0czms6ve.js","assets/ke4wseue2s3xar0a.js","assets/inxv3p5hyolpb7jk.js","assets/h6nboy9daks7d3l6.js","assets/ezmptwrca6wtpbet.js","assets/hxxw62av1uep63qt.js","assets/mjaocuyfmbcvmeq2.js","assets/l1ucg8fno55vfzot.js","assets/eca8j1i3jpdssmzb.js","assets/i3bsprcjiakga09v.js","assets/hlwo8mj4kkypxx9x.js","assets/fxmm9j57b7djuuv3.js","assets/kkn9p6bog8b0e20o.js","assets/dznfrh6uio01pkpq.js","assets/ab1xljjh49di1zhd.js","assets/kppihd4wo4hvd0qh.js","assets/bk3ae4zowkrdsix1.js","assets/ibfbjt9proxby44l.js","assets/mixz5f2xfzr3498p.js","assets/kqwdyvkaaavvn8k3.js","assets/lqkklfnt93ceixeb.js","assets/oobaa4xxaxaahayc.js","assets/bzdcv6jyquxbvy4s.js","assets/9iu40ylckxf6thie.js","assets/e9lafxuzyeh4418f.js","assets/l9i70kk4johcjkju.js","assets/nhwwej1nq0zrd7sc.js","assets/lq9pgrjc6kc7b1u6.js","assets/z9wgp6806nzi3d0o.js","assets/d63v6mktd1qd1cjz.js","assets/ffunyctp11y2ksjz.js","assets/nqou5lpn9p5mdas2.js","assets/hz11832it84vg9k2.js","assets/bzna72oknccd3y3z.js","assets/dwhz5kc0o6vohsx7.js","assets/i8targjz3lzsg5l7.js","assets/ktanlhq13iryvuof.js","assets/b8xoxl5j81sd7x8m.js","assets/bbie8a5uhoq6uzh7.js","assets/ixa3d1rinu3hpr0x.js","assets/i5r2307o44m8ec9j.js","assets/jie76fg6886bj7si.js","assets/dfxa4ysimawfhzbs.js","assets/j1brk1reynmphxdb.js","assets/boa9lgi51cqwxlbi.js","assets/e0m9ltn6n2rbsel6.js","assets/j55bx7j9ph7ox77b.js","assets/h63g546sqzyfxlvo.js","assets/iej0cupg2dqkmejt.js","assets/i5g906u8cgria7gx.js","assets/jk8w36bsokizpx57.js","assets/i69hma68h4ayy56u.js","assets/16p9mjvcvp7r52hl.js","assets/carousel-bss5aguy.css","assets/nxrjmz20sk5ywca0.js","assets/nm04jgpfyxi6pn12.js"])))=>i.map(i=>d[i]);
import{aP as O,d7 as F,bq as Q,W as V,bz as I,P as f,l as e,d8 as T,a6 as N,aF as H,aG as W,aC as Y,a7 as J,r as h,cm as K,b0 as X,bs as $,a5 as _,eo as Z,V as S,ep as q,m as P,a1 as ee}from"./gghzs582a65dvm3m.js";import{G as z}from"./bzna72oknccd3y3z.js";import{u as te,r as ne,s as se}from"./ke4wseue2s3xar0a.js";import{u as ae,l as oe,m as re,n as B,P as ie,o as le,L as ce,a1 as v}from"./pd094ob9wacofnvk.js";import{Y as ue,ba as de,b9 as me,k as ge}from"./e34jsxd5qw5romn0.js";import{u as pe}from"./l69acfj4t0bghaz3.js";const xe=({clientThreadId:t,rateLimitInfo:o,onDismiss:i})=>{const{name:l,title:m,call_to_action:c,description:u}=o,g=O(),k=te(!0),a=F(),s=pe(t),n=(g==null?void 0:g.planType)??"unknown",r=a&&"block_reason"in a?a.block_reason:null,p="banner_description",x={type:l||"unknown",location:p,plan_type:n,is_new_conversation:s,is_hard_block:!!a,hard_block_reason:r??"",call_to_action:c},b=Q(),d=ae(),{isUnauthenticated:G}=V(),y=oe(),A=re(I.signUpButtonText),L=U=>{switch(U){case T.AUTHENTICATE:return{text:y?I.logInButtonText:A,onClick:()=>{d({authType:y?"login":"signup",callback:w=>{y?f.logLogInButtonClicked({location:"Rate limit banner",provider:w}):f.logSignUpButtonClicked({location:"Rate limit banner",provider:w})}})}};case T.GET_PLUS:return{text:C.getPlusButton,onClick:()=>{f.logRateLimitGetPlusButtonClicked(x),G?d({authType:y?"login":"signup",shouldOpenPaymentModalOnAuth:!0,callback:w=>{y?f.logLogInButtonClicked({location:"Rate limit banner Get Plus upsell",provider:w}):f.logSignUpButtonClicked({location:"Rate limit banner Get Plus upsell",provider:w})}}):le(b,"Prompt textarea rate limit banner")}};case T.NEW_CHAT:return{text:C.newChatButton,onClick:()=>{k({modelId:"",location:p})}}}};B(()=>{f.logRateLimitBannerShown(x)});const[E,M]=c??[],D={primaryAction:L(E),secondaryAction:L(M)};return e.jsx(ie,{onDismiss:i,title:m,description:u,actions:D})},C=N({getPlusButton:{id:"TeyLcp",defaultMessage:"Get Plus"},newChatButton:{id:"7OvnJ5",defaultMessage:"New chat"}}),fe=H(()=>W(()=>import("./sso-fwsahdzij36k3l6m.js").then(t=>t.p),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66])).then(t=>t.PromptTextareaRateLimitBannerNew)),he=t=>{const{value:o}=Y("1028682714");return o?e.jsx(fe,{...t}):e.jsx(xe,{...t})},R=J.div`group flex h-10 items-center gap-2 rounded-lg px-2 hover:bg-token-main-surface-secondary text-sm text-token-text-primary`;function ke(){const{data:t,isLoading:o}=ne({cutId:"recent",limit:8}),{data:i,isLoading:l}=se();return{isLoading:o||l,recent:t,pinned:i}}function ye({query:t,onSelectGizmo:o,selectedIdx:i},l){const m=K(),c=h.useRef([]),{isLoading:u,recent:g,pinned:k}=ke();h.useImperativeHandle(l,()=>({handleEnterOnIndex:n=>{if(!s[n])return n<a.length?a[n].resource:"create"},getResultsLength:()=>a.length+1,scrollToItem:n=>{const r=c.current[n];r&&r.scrollIntoView({behavior:"instant",block:"nearest"})}}));let a=[];if(u)return e.jsx("div",{className:"absolute right-4 top-0 flex h-full items-center justify-center",children:e.jsx(X,{})});g&&a.push(...g.pages.flatMap(n=>n.list.items).map(n=>({resource:n.resource,from:"recent"}))),k&&a.push(...k.items.map(n=>({resource:n,from:"pinned"}))),a=ce(a,n=>n.resource.gizmo.id);const s=a.map(n=>{var r;return(r=n.resource.gizmo.tags)==null?void 0:r.includes(v.WorkspaceDisabled)});return t&&t!==""&&(a=a.filter(n=>{var p,x;return(n.resource.gizmo.display.name.toLowerCase()+((p=n.resource.gizmo.display.description)==null?void 0:p.toLowerCase())+((x=n.resource.gizmo.author.display_name)==null?void 0:x.toLowerCase())).includes(t==null?void 0:t.toLowerCase())})),e.jsxs("div",{className:"max-h-40 overflow-y-auto",children:[a.map((n,r)=>e.jsx("div",{ref:p=>{c.current[r]=p},tabIndex:r,onClick:()=>{s[r]||o(n.resource)},children:e.jsx(Pe,{gizmoResource:n.resource,from:n.from,showDescription:m,isSelected:i===r,grayedOut:s[r]})},n.resource.gizmo.id)),e.jsx("div",{ref:n=>{c.current[a.length]=n},tabIndex:a.length,onClick:()=>{o("create")},children:e.jsx(be,{isSelected:i===a.length})},"create")]})}const we=h.forwardRef(ye),be=({isSelected:t})=>e.jsx(R,{className:t?"bg-token-main-surface-secondary":"",children:e.jsxs($,{to:"/gpts/editor",target:"_blank",className:"flex flex-row space-x-2 font-semibold",children:[e.jsx("span",{className:"self-center",children:e.jsx(ue,{className:"icon-sm"})}),e.jsx("span",{children:e.jsx(_,{...j.dropdownCreateLabel})})]})}),Te=({onClick:t,onClose:o})=>{const[i,l]=h.useState(null),m=h.useRef(null),c=h.useRef(null),[u,g]=h.useState(0),k=ee(),a=s=>{f.logEvent(S.mentionsClickGizmo,{gizmo_id:s==="create"?"create":s.gizmo.id}),s!=="create"&&t(s)};return e.jsxs(e.Fragment,{children:[e.jsx("input",{autoFocus:!0,placeholder:k.formatMessage(j.searchPlaceholder),ref:m,onKeyDown:s=>{var r,p,x,b;const n=((r=c.current)==null?void 0:r.getResultsLength())??0;if((s.key==="Escape"||s.key==="Backspace"&&!i)&&(s.preventDefault(),o()),s.key==="Enter"||s.key==="Tab"){s.preventDefault();const d=(p=c.current)==null?void 0:p.handleEnterOnIndex(u);if(!d)return;d==="create"?(window.open("/gpts/editor","_blank"),o()):a(d)}if(s.key==="ArrowDown"&&u<n-1){s.preventDefault();const d=u+1;(x=c.current)==null||x.scrollToItem(d),g(d)}if(s.key==="ArrowUp"&&u>0){s.preventDefault();const d=u-1;(b=c.current)==null||b.scrollToItem(d),g(d)}},onChange:s=>{l(s.target.value),g(0)},className:"w-full border-0 bg-token-main-surface-primary p-2 text-sm focus:outline-none"}),e.jsx(we,{ref:c,query:i,selectedIdx:u,onSelectGizmo:a})]})},_e=({onClick:t,onClose:o})=>{const i=Z(),l=!!i;return B(()=>{f.logEvent(S.mentionsOpened,{gizmo_selector_disabled:l})}),l?e.jsx(he,{clientThreadId:q,rateLimitInfo:i}):e.jsx("div",{onBlur:m=>{m.currentTarget.contains(m.relatedTarget)||o()},className:"popover rounded-2xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-lg",children:e.jsx(Te,{onClick:t,onClose:o})})};function Pe({gizmoResource:t,from:o,showDescription:i,isSelected:l,grayedOut:m}){var u;const c=!!((u=t.gizmo.tags)!=null&&u.includes(v.FirstParty));return e.jsxs(R,{className:P(l?"bg-token-main-surface-secondary":"",m&&"opacity-50"),children:[e.jsx(z,{isFirstParty:c,src:t.gizmo.display.profile_picture_url,className:P("icon-xl h-7 w-7 flex-shrink-0",m&&"grayscale group-hover:grayscale-0")}),e.jsxs("div",{className:"flex h-fit grow flex-row justify-between space-x-2 overflow-hidden text-ellipsis whitespace-nowrap",children:[e.jsxs("div",{className:"flex flex-row space-x-2",children:[e.jsx("span",{className:"shrink-0 truncate font-semibold",children:t.gizmo.display.name}),i&&e.jsx("span",{className:"flex-grow truncate text-sm text-token-text-tertiary sm:max-w-xs lg:max-w-md",children:t.gizmo.display.description})]}),e.jsx("span",{className:"shrink-0 self-center",children:o==="recent"?e.jsx(de,{className:"icon-sm"}):e.jsx(me,{className:"icon-sm"})})]})]})}function Se({gizmoResource:t,onRemove:o}){var l;const i=!!((l=t.gizmo.tags)!=null&&l.includes(v.FirstParty));return e.jsxs("div",{className:"flex w-full flex-row items-center rounded-t-2xl bg-token-main-surface-secondary px-2 py-1",children:[e.jsxs("div",{className:P("group flex h-10 items-center gap-2 rounded-lg px-2 font-semibold"),children:[e.jsx(z,{isFirstParty:i,src:t.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),e.jsxs("div",{className:"space-x-2 overflow-hidden text-ellipsis text-sm text-token-text-tertiary",children:[e.jsx(_,{...j.talkingTo})," ",e.jsx("span",{className:"font-semibold text-token-text-secondary",children:t.gizmo.display.name})]})]}),o&&e.jsx("button",{className:"absolute right-4 text-sm font-bold",onClick:o,children:e.jsx(ge,{className:"icon-md text-token-text-secondary hover:text-token-text-primary"})})]})}const j=N({talkingTo:{id:"TaggingDropdown.talkingTo",defaultMessage:"Talking to"},dropdownCreateLabel:{id:"TaggingDropdown.dropdownCreateLabel",defaultMessage:"Create a GPT"},searchPlaceholder:{id:"TaggingDropdown.searchPlaceholder",defaultMessage:"Search recent and pinned GPTs"}});export{_e as I,he as P,Se as a,ke as u};
//# sourceMappingURL=cicdw0d6wgctyqam.js.map