const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sso-nmipjo3y225h2b41.js","assets/h11ymloodq9g1jsm.js","assets/b4lc2pk5tx9fvyxr.js","assets/root-nv4udjzh.css","assets/bwdp3ugp1ll74h3f.js","assets/d99imeng6jbz5fyz.js","assets/conversation-small-cll5buey.css","assets/opy89b7ztw9itay4.js","assets/jw64vuuhp544up6k.js","assets/kwrfyfn5nclbwyy3.js","assets/bjn84gz6ir9jwwg5.js","assets/eq74s9a1xv98w014.js","assets/dsaua33b1n5eatnj.js","assets/fzg4ztxf1dd6k2qj.js","assets/f62aedxhypzva2sq.js","assets/la7sxhxz2eo8dk9z.js","assets/o0yhon7qg91yktpl.js","assets/geaae92xvjdyqon0.js","assets/iua4ktursgg3kvfl.js","assets/ojuvt29p72858xnp.js","assets/izfvs4rurgoo3d97.js","assets/defoobo64skv3wz9.js","assets/ddxrq73fxcc37bs9.js","assets/lnwf5tuhjzdd3csy.js","assets/ba4s5g2ilfdydlf3.js","assets/dyl0jvm0209a32w3.js","assets/f6g2osmki24tx9zw.js","assets/lbtvrw7bmp0qfi2u.js","assets/bidf3yazmurxka7d.js","assets/itghwucfyv5ciib7.js","assets/n05casw56nmzxqe9.js","assets/n9x1pcry0bgct7hy.js","assets/b98vurscpdi0nrgu.js","assets/983a0dy92b3ronpv.js","assets/l4tymg1dgnm2lm56.js","assets/kqwdyvkaaavvn8k3.js","assets/hlzfz0eqcqf6hi37.js","assets/no8avpul38ppxgr8.js","assets/crh0xyq3tu0z7x3d.js","assets/n734xk2th0xqcc5b.js","assets/e9lafxuzyeh4418f.js","assets/d5q1hxhmgh51ghl2.js","assets/ddq1090g6hpci2fa.js","assets/h0yesal4cg7q28d0.js","assets/i4famerroaypbjp3.js","assets/ebch7wjn3sasdhbv.js","assets/m6qqcwha2gyr3c42.js","assets/dty4diddifdytned.js","assets/nypa9yjph7k6fhxm.js","assets/iej0cupg2dqkmejt.js","assets/m0hv1rxyw2njl6l6.js","assets/fckg6ul6qbqss1w4.js","assets/jk8w36bsokizpx57.js","assets/ea4quymaofxia95e.js","assets/cgd37mc74n5gfo99.js"])))=>i.map(i=>d[i]);
import{ah as F,d7 as H,bd as $,a9 as Q,bw as w,bf as B,P as m,d8 as y,x as e,a7 as R,$ as Y,a0 as V,t as W,X as K,r as f,as as X,c3 as J,a2 as A,eA as q,b as z,eB as Z,O as b,Y as ee}from"./h11ymloodq9g1jsm.js";import{G as E}from"./h0yesal4cg7q28d0.js";import{u as te,j as ne,x as se}from"./bjn84gz6ir9jwwg5.js";import{w as ae,r as oe,t as re,v as ie,x as le,y as ce,bF as ue,bG as de,K as I}from"./d99imeng6jbz5fyz.js";import{I as me,aT as ge,aY as pe,S as xe}from"./b4lc2pk5tx9fvyxr.js";import{u as fe}from"./eq74s9a1xv98w014.js";const he=({clientThreadId:n,rateLimitInfo:r,onDismiss:i})=>{const{name:l,title:u,call_to_action:c,description:d}=r,g=F(),h=te(!0),a=H(),s=fe(n),t=g?.planType??"unknown",o=ae(),k=a&&"block_reason"in a?a.block_reason:null,j="banner_description",C={type:l||"unknown",location:j,plan_type:t,is_new_conversation:s,is_hard_block:!!a,hard_block_reason:k??"",call_to_action:c},M=$(),T=oe(),{isUnauthenticated:D}=Q(),p=re(),P=ie(w.signUpButtonText),N=O=>{switch(O){case y.AUTHENTICATE:return{text:p?w.logInButtonText:P,onClick:()=>{T({authType:p?"login":"signup",callback:x=>{p?m.logLogInButtonClicked({location:`Rate limit banner - ${l}`,provider:x}):m.logSignUpButtonClicked({location:`Rate limit banner - ${l}`,provider:x})}})}};case y.AUTHENTICATE_SECONDARY:return{text:p?P:w.logInButtonText,onClick:()=>{T({authType:p?"signup":"login",callback:x=>{p?m.logSignUpButtonClicked({location:`Rate limit banner - ${l}`,provider:x}):m.logLogInButtonClicked({location:`Rate limit banner - ${l}`,provider:x})}})}};case y.GET_PLUS:return{text:_.getPlusButton,onClick:()=>{m.logRateLimitGetPlusButtonClicked(C),D?T({authType:p?"login":"signup",shouldOpenPaymentModalOnAuth:!0,callback:x=>{p?m.logLogInButtonClicked({location:"Rate limit banner Get Plus upsell",provider:x}):m.logSignUpButtonClicked({location:"Rate limit banner Get Plus upsell",provider:x})}}):ce(M,"Prompt textarea rate limit banner")}};case y.NEW_CHAT:return{text:_.newChatButton,onClick:()=>{h({modelId:"",location:j})}}}};B(()=>{m.logRateLimitBannerShown(C)});let[L,S]=c??[];L===y.AUTHENTICATE&&o&&(S=y.AUTHENTICATE_SECONDARY);const U={primaryAction:N(L),secondaryAction:N(S)};return e.jsx(le,{onDismiss:i,title:u,description:d,actions:U})},_=R({getPlusButton:{id:"TeyLcp",defaultMessage:"Get Plus"},newChatButton:{id:"7OvnJ5",defaultMessage:"New chat"}}),ye=Y(()=>V(()=>import("./sso-nmipjo3y225h2b41.js").then(n=>n.p),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54])).then(n=>n.PromptTextareaRateLimitBannerNew)),ke=n=>{const{value:r}=W("1028682714");return r?e.jsx(ye,{...n}):e.jsx(he,{...n})},G=K.div`group flex h-10 items-center gap-2 rounded-lg px-2 hover:bg-token-main-surface-secondary text-sm text-token-text-primary`;function Te(){const{data:n,isLoading:r}=ne({cutId:"recent",limit:8}),{data:i,isLoading:l}=se();return{isLoading:r||l,recent:n,pinned:i}}function we({query:n,onSelectGizmo:r,selectedIdx:i},l){const u=ue(),c=f.useRef([]),{isLoading:d,recent:g,pinned:h}=Te();f.useImperativeHandle(l,()=>({handleEnterOnIndex:t=>{if(!s[t])return t<a.length?a[t].resource:"create"},getResultsLength:()=>a.length+1,scrollToItem:t=>{const o=c.current[t];o&&o.scrollIntoView({behavior:"instant",block:"nearest"})}}));let a=[];if(d)return e.jsx("div",{className:"absolute right-4 top-0 flex h-full items-center justify-center",children:e.jsx(X,{})});g&&a.push(...g.pages.flatMap(t=>t.list.items).map(t=>({resource:t.resource,from:"recent"}))),h&&a.push(...h.items.map(t=>({resource:t,from:"pinned"}))),a=de(a,t=>t.resource.gizmo.id);const s=a.map(t=>t.resource.gizmo.tags?.includes(I.WorkspaceDisabled));return n&&n!==""&&(a=a.filter(t=>(t.resource.gizmo.display.name.toLowerCase()+t.resource.gizmo.display.description?.toLowerCase()+t.resource.gizmo.author.display_name?.toLowerCase()).includes(n?.toLowerCase()))),e.jsxs("div",{className:"max-h-40 overflow-y-auto",children:[a.map((t,o)=>e.jsx("div",{ref:k=>{c.current[o]=k},tabIndex:o,onClick:()=>{s[o]||r(t.resource)},children:e.jsx(je,{gizmoResource:t.resource,from:t.from,showDescription:u,isSelected:i===o,grayedOut:s[o]})},t.resource.gizmo.id)),e.jsx("div",{ref:t=>{c.current[a.length]=t},tabIndex:a.length,onClick:()=>{r("create")},children:e.jsx(Ie,{isSelected:i===a.length})},"create")]})}const be=f.forwardRef(we),Ie=({isSelected:n})=>e.jsx(G,{className:n?"bg-token-main-surface-secondary":"",children:e.jsxs(J,{to:"/gpts/editor",target:"_blank",className:"flex flex-row space-x-2 font-semibold",children:[e.jsx("span",{className:"self-center",children:e.jsx(me,{className:"icon-sm"})}),e.jsx("span",{children:e.jsx(A,{...v.dropdownCreateLabel})})]})}),ve=({onClick:n,onClose:r})=>{const[i,l]=f.useState(null),u=f.useRef(null),c=f.useRef(null),[d,g]=f.useState(0),h=ee(),a=s=>{m.logEvent(z.mentionsClickGizmo,{gizmo_id:s==="create"?"create":s.gizmo.id}),s!=="create"&&n(s)};return e.jsxs(e.Fragment,{children:[e.jsx("input",{autoFocus:!0,placeholder:h.formatMessage(v.searchPlaceholder),ref:u,onKeyDown:s=>{const t=c.current?.getResultsLength()??0;if((s.key==="Escape"||s.key==="Backspace"&&!i)&&(s.preventDefault(),r()),s.key==="Enter"||s.key==="Tab"){s.preventDefault();const o=c.current?.handleEnterOnIndex(d);if(!o)return;o==="create"?(window.open("/gpts/editor","_blank"),r()):a(o)}if(s.key==="ArrowDown"&&d<t-1){s.preventDefault();const o=d+1;c.current?.scrollToItem(o),g(o)}if(s.key==="ArrowUp"&&d>0){s.preventDefault();const o=d-1;c.current?.scrollToItem(o),g(o)}},onChange:s=>{l(s.target.value),g(0)},className:"w-full border-0 bg-token-main-surface-primary p-2 text-sm focus:outline-none"}),e.jsx(be,{ref:c,query:i,selectedIdx:d,onSelectGizmo:a})]})},Be=({onClick:n,onClose:r})=>{const i=q(),l=!!i;return B(()=>{m.logEvent(z.mentionsOpened,{gizmo_selector_disabled:l})}),l?e.jsx(ke,{clientThreadId:Z,rateLimitInfo:i}):e.jsx("div",{onBlur:u=>{u.currentTarget.contains(u.relatedTarget)||r()},className:"popover rounded-2xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-lg",children:e.jsx(ve,{onClick:n,onClose:r})})};function je({gizmoResource:n,from:r,showDescription:i,isSelected:l,grayedOut:u}){const c=!!n.gizmo.tags?.includes(I.FirstParty);return e.jsxs(G,{className:b(l?"bg-token-main-surface-secondary":"",u&&"opacity-50"),children:[e.jsx(E,{isFirstParty:c,src:n.gizmo.display.profile_picture_url,className:b("icon-xl h-7 w-7 flex-shrink-0",u&&"grayscale group-hover:grayscale-0")}),e.jsxs("div",{className:"flex h-fit grow flex-row justify-between space-x-2 overflow-hidden text-ellipsis whitespace-nowrap",children:[e.jsxs("div",{className:"flex flex-row space-x-2",children:[e.jsx("span",{className:"shrink-0 truncate font-semibold",children:n.gizmo.display.name}),i&&e.jsx("span",{className:"flex-grow truncate text-sm text-token-text-tertiary sm:max-w-xs lg:max-w-md",children:n.gizmo.display.description})]}),e.jsx("span",{className:"shrink-0 self-center",children:r==="recent"?e.jsx(ge,{className:"icon-sm"}):e.jsx(pe,{className:"icon-sm"})})]})]})}function Re({gizmoResource:n,onRemove:r}){const i=!!n.gizmo.tags?.includes(I.FirstParty);return e.jsxs("div",{className:"flex w-full flex-row items-center rounded-t-2xl bg-token-main-surface-secondary px-2 py-1",children:[e.jsxs("div",{className:b("group flex h-10 items-center gap-2 rounded-lg px-2 font-semibold"),children:[e.jsx(E,{isFirstParty:i,src:n.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),e.jsxs("div",{className:"space-x-2 overflow-hidden text-ellipsis text-sm text-token-text-tertiary",children:[e.jsx(A,{...v.talkingTo})," ",e.jsx("span",{className:"font-semibold text-token-text-secondary",children:n.gizmo.display.name})]})]}),r&&e.jsx("button",{className:"absolute right-4 text-sm font-bold",onClick:r,children:e.jsx(xe,{className:"icon-md text-token-text-secondary hover:text-token-text-primary"})})]})}const v=R({talkingTo:{id:"TaggingDropdown.talkingTo",defaultMessage:"Talking to"},dropdownCreateLabel:{id:"TaggingDropdown.dropdownCreateLabel",defaultMessage:"Create a GPT"},searchPlaceholder:{id:"TaggingDropdown.searchPlaceholder",defaultMessage:"Search recent and pinned GPTs"}});export{Be as I,ke as P,Re as a,Te as u};
//# sourceMappingURL=ioik0sgwbaicyza1.js.map