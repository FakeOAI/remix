const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sso-fdxls5hzisma1l7o.js","assets/pd64dl4pt4e5g9vc.js","assets/iw8eqo9ou59qhn0h.js","assets/root-fk4ggifc.css","assets/otokzv7q5t6qxtps.js","assets/g5tg1ou1mdwoqo8e.js","assets/conversation-small-ni0cc2o5.css","assets/jd2utdtcm2yggiqc.js","assets/dhmm93wh7jq47k0y.js","assets/jff4q9zofpalq4v1.js","assets/gea76n0cnf3u5b5x.js","assets/pflz6eij70odao7c.js","assets/kw08l8rgg7n2n90f.js","assets/be5j3lin9z9akqco.js","assets/f5szkclm2kittk11.js","assets/9ymg7e089l6mcavz.js","assets/ab6mu05rcp6v4wam.js","assets/dwsu7ht21mrqfd59.js","assets/ty5744e0daj8z9ay.js","assets/c75xpyzc0peppmem.js","assets/oypc9t5q5413y6i2.js","assets/lqug1fbflg0m1w72.js","assets/oyeaia7dq3yihhcd.js","assets/ia6xvy13czl7vmph.js","assets/evzm6tu9de8e86by.js","assets/pa502p8s2hrlje1v.js","assets/d23kr1zqs5km80wt.js","assets/dvjz4q8yuoeyefo9.js","assets/dkaqqr7ih94cnlwt.js","assets/m9vah160uz4ct74b.js","assets/dokfhjx0cx1fpmsb.js","assets/frxnwopwg01h946n.js","assets/lv702ck3ky9cud9j.js","assets/kqwdyvkaaavvn8k3.js","assets/et4s3hkpdxzntxsw.js","assets/o9hicbasuzozzir9.js","assets/hlkj3usltwq7hx06.js","assets/i97qg3hqja8xeq6s.js","assets/e9lafxuzyeh4418f.js","assets/b20tbufl7pw8pdjb.js","assets/d90j6egyrk66k5wd.js","assets/fqyuaf1hh16mi4pg.js","assets/js63cbf9w70vcbjp.js","assets/nhwwej1nq0zrd7sc.js","assets/mu5hs4ahvhyyr25o.js","assets/g3kafrzhf2i6ifut.js","assets/pe9n1iytfqkw3ehs.js","assets/osofquqt0f3hphls.js","assets/b1jte7i083axdm36.js","assets/f31xo4f7p3gnlwjn.js","assets/8xi7nk1gdjiwya9w.js","assets/kzzucb3j3gugc3vq.js","assets/c5ozct7nsfv8lm6r.js","assets/frc4tf3htn7n2xg5.js","assets/cy0snnvh2qrm0sll.js","assets/bcb8m1zwalqphegy.js","assets/n4ztglnrj5fxayrd.js","assets/cu110sl56gwac6v4.js","assets/i0xcrsfczazbamq8.js","assets/okah5jlhn1nqss5j.js","assets/nmlot9jn92cbim28.js","assets/mk2p75enm8gzw27d.js","assets/k2ge7jnp5uwq950p.js","assets/iej0cupg2dqkmejt.js","assets/gk4nsn1w64xq2bxw.js","assets/jk8w36bsokizpx57.js","assets/gi0rlxiuny344rvr.js","assets/m2qnzt4szzji9zef.js","assets/gtn74ami78e1znea.js","assets/cs9x8vdavc4x55sg.js","assets/muapfta88g0vrl5s.js","assets/carousel-bss5aguy.css","assets/hkvwkt0hwyl5aay7.js","assets/nm04jgpfyxi6pn12.js"])))=>i.map(i=>d[i]);
import{aM as F,dc as H,bz as Q,bA as V,Q as $,bC as w,ct as B,P as m,dd as y,l as e,a0 as z,aC as W,aD as Y,az as J,a1 as K,r as f,bL as X,a_ as Z,ci as q,Z as A,eC as ee,a as R,eD as te,m as b,V as ne}from"./pd64dl4pt4e5g9vc.js";import{G as E}from"./kzzucb3j3gugc3vq.js";import{u as se,k as ae,A as oe}from"./jff4q9zofpalq4v1.js";import{v as re,w as ie,x as le,y as ce,z as ue,U as de,a6 as C}from"./g5tg1ou1mdwoqo8e.js";import{I as me,b2 as ge,b1 as pe,a as xe}from"./iw8eqo9ou59qhn0h.js";import{u as fe}from"./gea76n0cnf3u5b5x.js";const he=({clientThreadId:n,rateLimitInfo:r,onDismiss:i})=>{const{name:l,title:u,call_to_action:c,description:d}=r,g=F(),h=se(!0),a=H(),s=fe(n),t=g?.planType??"unknown",o=Q(),k=a&&"block_reason"in a?a.block_reason:null,v="banner_description",P={type:l||"unknown",location:v,plan_type:t,is_new_conversation:s,is_hard_block:!!a,hard_block_reason:k??"",call_to_action:c},M=V(),T=re(),{isUnauthenticated:D}=$(),p=ie(),j=le(w.signUpButtonText),L=O=>{switch(O){case y.AUTHENTICATE:return{text:p?w.logInButtonText:j,onClick:()=>{T({authType:p?"login":"signup",callback:x=>{p?m.logLogInButtonClicked({location:`Rate limit banner - ${l}`,provider:x}):m.logSignUpButtonClicked({location:`Rate limit banner - ${l}`,provider:x})}})}};case y.AUTHENTICATE_SECONDARY:return{text:p?j:w.logInButtonText,onClick:()=>{T({authType:p?"signup":"login",callback:x=>{p?m.logSignUpButtonClicked({location:`Rate limit banner - ${l}`,provider:x}):m.logLogInButtonClicked({location:`Rate limit banner - ${l}`,provider:x})}})}};case y.GET_PLUS:return{text:S.getPlusButton,onClick:()=>{m.logRateLimitGetPlusButtonClicked(P),D?T({authType:p?"login":"signup",shouldOpenPaymentModalOnAuth:!0,callback:x=>{p?m.logLogInButtonClicked({location:"Rate limit banner Get Plus upsell",provider:x}):m.logSignUpButtonClicked({location:"Rate limit banner Get Plus upsell",provider:x})}}):ue(M,"Prompt textarea rate limit banner")}};case y.NEW_CHAT:return{text:S.newChatButton,onClick:()=>{h({modelId:"",location:v})}}}};B(()=>{m.logRateLimitBannerShown(P)});let[N,_]=c??[];N===y.AUTHENTICATE&&o&&(_=y.AUTHENTICATE_SECONDARY);const U={primaryAction:L(N),secondaryAction:L(_)};return e.jsx(ce,{onDismiss:i,title:u,description:d,actions:U})},S=z({getPlusButton:{id:"TeyLcp",defaultMessage:"Get Plus"},newChatButton:{id:"7OvnJ5",defaultMessage:"New chat"}}),ye=W(()=>Y(()=>import("./sso-fdxls5hzisma1l7o.js").then(n=>n.p),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73])).then(n=>n.PromptTextareaRateLimitBannerNew)),ke=n=>{const{value:r}=J("1028682714");return r?e.jsx(ye,{...n}):e.jsx(he,{...n})},G=K.div`group flex h-10 items-center gap-2 rounded-lg px-2 hover:bg-token-main-surface-secondary text-sm text-token-text-primary`;function Te(){const{data:n,isLoading:r}=ae({cutId:"recent",limit:8}),{data:i,isLoading:l}=oe();return{isLoading:r||l,recent:n,pinned:i}}function we({query:n,onSelectGizmo:r,selectedIdx:i},l){const u=X(),c=f.useRef([]),{isLoading:d,recent:g,pinned:h}=Te();f.useImperativeHandle(l,()=>({handleEnterOnIndex:t=>{if(!s[t])return t<a.length?a[t].resource:"create"},getResultsLength:()=>a.length+1,scrollToItem:t=>{const o=c.current[t];o&&o.scrollIntoView({behavior:"instant",block:"nearest"})}}));let a=[];if(d)return e.jsx("div",{className:"absolute right-4 top-0 flex h-full items-center justify-center",children:e.jsx(Z,{})});g&&a.push(...g.pages.flatMap(t=>t.list.items).map(t=>({resource:t.resource,from:"recent"}))),h&&a.push(...h.items.map(t=>({resource:t,from:"pinned"}))),a=de(a,t=>t.resource.gizmo.id);const s=a.map(t=>t.resource.gizmo.tags?.includes(C.WorkspaceDisabled));return n&&n!==""&&(a=a.filter(t=>(t.resource.gizmo.display.name.toLowerCase()+t.resource.gizmo.display.description?.toLowerCase()+t.resource.gizmo.author.display_name?.toLowerCase()).includes(n?.toLowerCase()))),e.jsxs("div",{className:"max-h-40 overflow-y-auto",children:[a.map((t,o)=>e.jsx("div",{ref:k=>{c.current[o]=k},tabIndex:o,onClick:()=>{s[o]||r(t.resource)},children:e.jsx(ve,{gizmoResource:t.resource,from:t.from,showDescription:u,isSelected:i===o,grayedOut:s[o]})},t.resource.gizmo.id)),e.jsx("div",{ref:t=>{c.current[a.length]=t},tabIndex:a.length,onClick:()=>{r("create")},children:e.jsx(Ce,{isSelected:i===a.length})},"create")]})}const be=f.forwardRef(we),Ce=({isSelected:n})=>e.jsx(G,{className:n?"bg-token-main-surface-secondary":"",children:e.jsxs(q,{to:"/gpts/editor",target:"_blank",className:"flex flex-row space-x-2 font-semibold",children:[e.jsx("span",{className:"self-center",children:e.jsx(me,{className:"icon-sm"})}),e.jsx("span",{children:e.jsx(A,{...I.dropdownCreateLabel})})]})}),Ie=({onClick:n,onClose:r})=>{const[i,l]=f.useState(null),u=f.useRef(null),c=f.useRef(null),[d,g]=f.useState(0),h=ne(),a=s=>{m.logEvent(R.mentionsClickGizmo,{gizmo_id:s==="create"?"create":s.gizmo.id}),s!=="create"&&n(s)};return e.jsxs(e.Fragment,{children:[e.jsx("input",{autoFocus:!0,placeholder:h.formatMessage(I.searchPlaceholder),ref:u,onKeyDown:s=>{const t=c.current?.getResultsLength()??0;if((s.key==="Escape"||s.key==="Backspace"&&!i)&&(s.preventDefault(),r()),s.key==="Enter"||s.key==="Tab"){s.preventDefault();const o=c.current?.handleEnterOnIndex(d);if(!o)return;o==="create"?(window.open("/gpts/editor","_blank"),r()):a(o)}if(s.key==="ArrowDown"&&d<t-1){s.preventDefault();const o=d+1;c.current?.scrollToItem(o),g(o)}if(s.key==="ArrowUp"&&d>0){s.preventDefault();const o=d-1;c.current?.scrollToItem(o),g(o)}},onChange:s=>{l(s.target.value),g(0)},className:"w-full border-0 bg-token-main-surface-primary p-2 text-sm focus:outline-none"}),e.jsx(be,{ref:c,query:i,selectedIdx:d,onSelectGizmo:a})]})},Be=({onClick:n,onClose:r})=>{const i=ee(),l=!!i;return B(()=>{m.logEvent(R.mentionsOpened,{gizmo_selector_disabled:l})}),l?e.jsx(ke,{clientThreadId:te,rateLimitInfo:i}):e.jsx("div",{onBlur:u=>{u.currentTarget.contains(u.relatedTarget)||r()},className:"popover rounded-2xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-lg",children:e.jsx(Ie,{onClick:n,onClose:r})})};function ve({gizmoResource:n,from:r,showDescription:i,isSelected:l,grayedOut:u}){const c=!!n.gizmo.tags?.includes(C.FirstParty);return e.jsxs(G,{className:b(l?"bg-token-main-surface-secondary":"",u&&"opacity-50"),children:[e.jsx(E,{isFirstParty:c,src:n.gizmo.display.profile_picture_url,className:b("icon-xl h-7 w-7 flex-shrink-0",u&&"grayscale group-hover:grayscale-0")}),e.jsxs("div",{className:"flex h-fit grow flex-row justify-between space-x-2 overflow-hidden text-ellipsis whitespace-nowrap",children:[e.jsxs("div",{className:"flex flex-row space-x-2",children:[e.jsx("span",{className:"shrink-0 truncate font-semibold",children:n.gizmo.display.name}),i&&e.jsx("span",{className:"flex-grow truncate text-sm text-token-text-tertiary sm:max-w-xs lg:max-w-md",children:n.gizmo.display.description})]}),e.jsx("span",{className:"shrink-0 self-center",children:r==="recent"?e.jsx(ge,{className:"icon-sm"}):e.jsx(pe,{className:"icon-sm"})})]})]})}function ze({gizmoResource:n,onRemove:r}){const i=!!n.gizmo.tags?.includes(C.FirstParty);return e.jsxs("div",{className:"flex w-full flex-row items-center rounded-t-2xl bg-token-main-surface-secondary px-2 py-1",children:[e.jsxs("div",{className:b("group flex h-10 items-center gap-2 rounded-lg px-2 font-semibold"),children:[e.jsx(E,{isFirstParty:i,src:n.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),e.jsxs("div",{className:"space-x-2 overflow-hidden text-ellipsis text-sm text-token-text-tertiary",children:[e.jsx(A,{...I.talkingTo})," ",e.jsx("span",{className:"font-semibold text-token-text-secondary",children:n.gizmo.display.name})]})]}),r&&e.jsx("button",{className:"absolute right-4 text-sm font-bold",onClick:r,children:e.jsx(xe,{className:"icon-md text-token-text-secondary hover:text-token-text-primary"})})]})}const I=z({talkingTo:{id:"TaggingDropdown.talkingTo",defaultMessage:"Talking to"},dropdownCreateLabel:{id:"TaggingDropdown.dropdownCreateLabel",defaultMessage:"Create a GPT"},searchPlaceholder:{id:"TaggingDropdown.searchPlaceholder",defaultMessage:"Search recent and pinned GPTs"}});export{Be as I,ke as P,ze as a,Te as u};
//# sourceMappingURL=mgaq3vz9ydc47xkz.js.map