const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sso-ctg9a5sq3kglttk3.js","assets/ius2rjc8aciuj2rl.js","assets/lzyd9n5t1klxadwf.js","assets/root-nu4yhphs.css","assets/frgkesjr4ohtrucy.js","assets/jdz9mwngh3t5nytb.js","assets/conversation-small-mclg7qvi.css","assets/n0xyk1p8mg8xlrhw.js","assets/oy4uroqongt50tdh.js","assets/ohr11q9jfhdrs62c.js","assets/og6klen52wg15s6b.js","assets/jxn2hsz21dzfafcn.js","assets/vx5bizwg1cu9jie5.js","assets/o9abjlquvgplxwex.js","assets/itvvna1wmnp67bph.js","assets/bixdynutlthfnow9.js","assets/kjc4oshqrhzrg3a0.js","assets/bii0ba6df7fk4nts.js","assets/nrbhchjhpmcxnzn5.js","assets/nz7exheo0ysu8iuh.js","assets/nsq2pgu8tq1tcawc.js","assets/fhdlfdpwiavhel0q.js","assets/neli2etkemqy682b.js","assets/bt3rjqq715dlb9rk.js","assets/e695g0c5z01sstpf.js","assets/gh97h5wmaiswo7ni.js","assets/u6thjkb4r1eqndx3.js","assets/0bwk4yohoavyqsv1.js","assets/l2j01q810j3zjzww.js","assets/ky5ok5k0ed6x3vme.js","assets/eduhtg8y78f7tze9.js","assets/ft4dy4z5nigizpf8.js","assets/mu9ke4rpa9rfyp02.js","assets/itghwucfyv5ciib7.js","assets/fqbvvmg349ntwq4o.js","assets/jpag4ehj1efp4ih5.js","assets/n26tmesjrowexjbj.js","assets/983a0dy92b3ronpv.js","assets/bh4kjvk3v4d9k3jy.js","assets/bmkzp1rg2dyojp4j.js","assets/kqwdyvkaaavvn8k3.js","assets/howlcyslqvylg9xo.js","assets/oz00974pnbcwk981.js","assets/iewlaw4gerpbcunt.js","assets/ffwsu9upc6u27gy7.js","assets/nhwwej1nq0zrd7sc.js","assets/io77c0notgzmatr6.js","assets/n9zyleymc3kvbr89.js","assets/mvelxfnasjxd6rg2.js","assets/m4r389o9pzt9brms.js","assets/eoacf68t850etpy2.js","assets/bvgjh7k2bvk548yv.js","assets/k24m5penms4frrso.js","assets/pb191eqwuvlbklct.js","assets/ybdlh0et9a3200gw.js","assets/iej0cupg2dqkmejt.js","assets/j182y8iwep147689.js","assets/hj3i75w5vshc3jll.js","assets/jk8w36bsokizpx57.js","assets/i2h90m54554wkshr.js","assets/hdjgf6zsg638vv66.js","assets/666aza9h89iaqdaw.js","assets/okbbzgcxywoz0l9o.js","assets/irdgh4803y6zg4hd.js","assets/nq6m9u1jii0eyuhu.js","assets/esf1w59tineqx7a9.js","assets/swiper-kmk1dd5x.css"])))=>i.map(i=>d[i]);
import{aj as F,dc as H,bp as Q,af as $,bE as w,cw as B,P as m,dd as y,t as e,ad as A,a5 as V,a6 as W,a1 as X,O as Y,r as f,ax as J,cc as K,a8 as R,eI as q,d as z,eJ as Z,T as b,a3 as ee}from"./ius2rjc8aciuj2rl.js";import{G as E}from"./m4r389o9pzt9brms.js";import{u as te,j as ne,A as se}from"./oy4uroqongt50tdh.js";import{y as ae,v as oe,w as re,x as ie,z as ce,A as le,bK as ue,F as de,X as I}from"./jdz9mwngh3t5nytb.js";import{I as me,aS as ge,aX as pe,S as xe}from"./lzyd9n5t1klxadwf.js";import{u as fe}from"./ohr11q9jfhdrs62c.js";const he=({clientThreadId:n,rateLimitInfo:r,onDismiss:i})=>{const{name:c,title:u,call_to_action:l,description:d}=r,g=F(),h=te(!0),a=H(),s=fe(n),t=g?.planType??"unknown",o=ae(),k=a&&"block_reason"in a?a.block_reason:null,v="banner_description",C={type:c||"unknown",location:v,plan_type:t,is_new_conversation:s,is_hard_block:!!a,hard_block_reason:k??"",call_to_action:l},M=Q(),T=oe(),{isUnauthenticated:D}=$(),p=re(),P=ie(w.signUpButtonText),N=O=>{switch(O){case y.AUTHENTICATE:return{text:p?w.logInButtonText:P,onClick:()=>{T({authType:p?"login":"signup",callback:x=>{p?m.logLogInButtonClicked({location:`Rate limit banner - ${c}`,provider:x}):m.logSignUpButtonClicked({location:`Rate limit banner - ${c}`,provider:x})}})}};case y.AUTHENTICATE_SECONDARY:return{text:p?P:w.logInButtonText,onClick:()=>{T({authType:p?"signup":"login",callback:x=>{p?m.logSignUpButtonClicked({location:`Rate limit banner - ${c}`,provider:x}):m.logLogInButtonClicked({location:`Rate limit banner - ${c}`,provider:x})}})}};case y.GET_PLUS:return{text:_.getPlusButton,onClick:()=>{m.logRateLimitGetPlusButtonClicked(C),D?T({authType:p?"login":"signup",shouldOpenPaymentModalOnAuth:!0,callback:x=>{p?m.logLogInButtonClicked({location:"Rate limit banner Get Plus upsell",provider:x}):m.logSignUpButtonClicked({location:"Rate limit banner Get Plus upsell",provider:x})}}):le(M,"Prompt textarea rate limit banner")}};case y.NEW_CHAT:return{text:_.newChatButton,onClick:()=>{h({modelId:"",location:v})}}}};B(()=>{m.logRateLimitBannerShown(C)});let[L,S]=l??[];L===y.AUTHENTICATE&&o&&(S=y.AUTHENTICATE_SECONDARY);const U={primaryAction:N(L),secondaryAction:N(S)};return e.jsx(ce,{onDismiss:i,title:u,description:d,actions:U})},_=A({getPlusButton:{id:"TeyLcp",defaultMessage:"Get Plus"},newChatButton:{id:"7OvnJ5",defaultMessage:"New chat"}}),ye=V(()=>W(()=>import("./sso-ctg9a5sq3kglttk3.js").then(n=>n.p),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66])).then(n=>n.PromptTextareaRateLimitBannerNew)),ke=n=>{const{value:r}=X("1028682714");return r?e.jsx(ye,{...n}):e.jsx(he,{...n})},G=Y.div`group flex h-10 items-center gap-2 rounded-lg px-2 hover:bg-token-main-surface-secondary text-sm text-token-text-primary`;function Te(){const{data:n,isLoading:r}=ne({cutId:"recent",limit:8}),{data:i,isLoading:c}=se();return{isLoading:r||c,recent:n,pinned:i}}function we({query:n,onSelectGizmo:r,selectedIdx:i},c){const u=ue(),l=f.useRef([]),{isLoading:d,recent:g,pinned:h}=Te();f.useImperativeHandle(c,()=>({handleEnterOnIndex:t=>{if(!s[t])return t<a.length?a[t].resource:"create"},getResultsLength:()=>a.length+1,scrollToItem:t=>{const o=l.current[t];o&&o.scrollIntoView({behavior:"instant",block:"nearest"})}}));let a=[];if(d)return e.jsx("div",{className:"absolute right-4 top-0 flex h-full items-center justify-center",children:e.jsx(J,{})});g&&a.push(...g.pages.flatMap(t=>t.list.items).map(t=>({resource:t.resource,from:"recent"}))),h&&a.push(...h.items.map(t=>({resource:t,from:"pinned"}))),a=de(a,t=>t.resource.gizmo.id);const s=a.map(t=>t.resource.gizmo.tags?.includes(I.WorkspaceDisabled));return n&&n!==""&&(a=a.filter(t=>(t.resource.gizmo.display.name.toLowerCase()+t.resource.gizmo.display.description?.toLowerCase()+t.resource.gizmo.author.display_name?.toLowerCase()).includes(n?.toLowerCase()))),e.jsxs("div",{className:"max-h-40 overflow-y-auto",children:[a.map((t,o)=>e.jsx("div",{ref:k=>{l.current[o]=k},tabIndex:o,onClick:()=>{s[o]||r(t.resource)},children:e.jsx(ve,{gizmoResource:t.resource,from:t.from,showDescription:u,isSelected:i===o,grayedOut:s[o]})},t.resource.gizmo.id)),e.jsx("div",{ref:t=>{l.current[a.length]=t},tabIndex:a.length,onClick:()=>{r("create")},children:e.jsx(Ie,{isSelected:i===a.length})},"create")]})}const be=f.forwardRef(we),Ie=({isSelected:n})=>e.jsx(G,{className:n?"bg-token-main-surface-secondary":"",children:e.jsxs(K,{to:"/gpts/editor",target:"_blank",className:"flex flex-row space-x-2 font-semibold",children:[e.jsx("span",{className:"self-center",children:e.jsx(me,{className:"icon-sm"})}),e.jsx("span",{children:e.jsx(R,{...j.dropdownCreateLabel})})]})}),je=({onClick:n,onClose:r})=>{const[i,c]=f.useState(null),u=f.useRef(null),l=f.useRef(null),[d,g]=f.useState(0),h=ee(),a=s=>{m.logEvent(z.mentionsClickGizmo,{gizmo_id:s==="create"?"create":s.gizmo.id}),s!=="create"&&n(s)};return e.jsxs(e.Fragment,{children:[e.jsx("input",{autoFocus:!0,placeholder:h.formatMessage(j.searchPlaceholder),ref:u,onKeyDown:s=>{const t=l.current?.getResultsLength()??0;if((s.key==="Escape"||s.key==="Backspace"&&!i)&&(s.preventDefault(),r()),s.key==="Enter"||s.key==="Tab"){s.preventDefault();const o=l.current?.handleEnterOnIndex(d);if(!o)return;o==="create"?(window.open("/gpts/editor","_blank"),r()):a(o)}if(s.key==="ArrowDown"&&d<t-1){s.preventDefault();const o=d+1;l.current?.scrollToItem(o),g(o)}if(s.key==="ArrowUp"&&d>0){s.preventDefault();const o=d-1;l.current?.scrollToItem(o),g(o)}},onChange:s=>{c(s.target.value),g(0)},className:"w-full border-0 bg-token-main-surface-primary p-2 text-sm focus:outline-none"}),e.jsx(be,{ref:l,query:i,selectedIdx:d,onSelectGizmo:a})]})},Be=({onClick:n,onClose:r})=>{const i=q(),c=!!i;return B(()=>{m.logEvent(z.mentionsOpened,{gizmo_selector_disabled:c})}),c?e.jsx(ke,{clientThreadId:Z,rateLimitInfo:i}):e.jsx("div",{onBlur:u=>{u.currentTarget.contains(u.relatedTarget)||r()},className:"popover rounded-2xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-lg",children:e.jsx(je,{onClick:n,onClose:r})})};function ve({gizmoResource:n,from:r,showDescription:i,isSelected:c,grayedOut:u}){const l=!!n.gizmo.tags?.includes(I.FirstParty);return e.jsxs(G,{className:b(c?"bg-token-main-surface-secondary":"",u&&"opacity-50"),children:[e.jsx(E,{isFirstParty:l,src:n.gizmo.display.profile_picture_url,className:b("icon-xl h-7 w-7 flex-shrink-0",u&&"grayscale group-hover:grayscale-0")}),e.jsxs("div",{className:"flex h-fit grow flex-row justify-between space-x-2 overflow-hidden text-ellipsis whitespace-nowrap",children:[e.jsxs("div",{className:"flex flex-row space-x-2",children:[e.jsx("span",{className:"shrink-0 truncate font-semibold",children:n.gizmo.display.name}),i&&e.jsx("span",{className:"flex-grow truncate text-sm text-token-text-tertiary sm:max-w-xs lg:max-w-md",children:n.gizmo.display.description})]}),e.jsx("span",{className:"shrink-0 self-center",children:r==="recent"?e.jsx(ge,{className:"icon-sm"}):e.jsx(pe,{className:"icon-sm"})})]})]})}function Ae({gizmoResource:n,onRemove:r}){const i=!!n.gizmo.tags?.includes(I.FirstParty);return e.jsxs("div",{className:"flex w-full flex-row items-center rounded-t-2xl bg-token-main-surface-secondary px-2 py-1",children:[e.jsxs("div",{className:b("group flex h-10 items-center gap-2 rounded-lg px-2 font-semibold"),children:[e.jsx(E,{isFirstParty:i,src:n.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),e.jsxs("div",{className:"space-x-2 overflow-hidden text-ellipsis text-sm text-token-text-tertiary",children:[e.jsx(R,{...j.talkingTo})," ",e.jsx("span",{className:"font-semibold text-token-text-secondary",children:n.gizmo.display.name})]})]}),r&&e.jsx("button",{className:"absolute right-4 text-sm font-bold",onClick:r,children:e.jsx(xe,{className:"icon-md text-token-text-secondary hover:text-token-text-primary"})})]})}const j=A({talkingTo:{id:"TaggingDropdown.talkingTo",defaultMessage:"Talking to"},dropdownCreateLabel:{id:"TaggingDropdown.dropdownCreateLabel",defaultMessage:"Create a GPT"},searchPlaceholder:{id:"TaggingDropdown.searchPlaceholder",defaultMessage:"Search recent and pinned GPTs"}});export{Be as I,ke as P,Ae as a,Te as u};
//# sourceMappingURL=mc6hqckm2bovm7c7.js.map