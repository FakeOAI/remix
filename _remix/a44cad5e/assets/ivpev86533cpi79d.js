const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sso-jfisjgs2lulw5cra.js","assets/f1tbg9vupz7s4vaz.js","assets/ku9ixf6u9z228exb.js","assets/root-knsezumx.css","assets/mt6h4jzk1jkcs287.js","assets/eyfm2skil9fzhvo1.js","assets/conversation-small-ao874ap7.css","assets/ioundd5um2qmksi3.js","assets/fitsuk0mifdju5f0.js","assets/jjp48s31c2bxsk72.js","assets/oixhn1b8fi6yhijp.js","assets/fe4da7l7k2gvtlow.js","assets/c77l8ej6lw2btxdd.js","assets/hprljityfrryo2gz.js","assets/jdy1yw2t3lc2tl2b.js","assets/ljaj5cms73a3s5g2.js","assets/eg0vn9lfdm5eewe7.js","assets/l45k6ig1jn8cj2c1.js","assets/jzmm2rrmfulao93u.js","assets/ix46tddc1xj4hezn.js","assets/xcvndoea5vc453da.js","assets/c6kd1weycjes4auh.js","assets/jlp1wc38uftuvbnc.js","assets/izuhhbgfb71w5jo8.js","assets/hczz7kvq1fag8y91.js","assets/m2732nldl48v42hm.js","assets/kat809v1xmvdnemn.js","assets/jeefkxney3bd05h2.js","assets/ncab5sw9ztwzfksi.js","assets/cunvjnga8y9l0b0m.js","assets/kqwdyvkaaavvn8k3.js","assets/kxyu5txslxyiprj8.js","assets/i23lp29av3airqbk.js","assets/i1g9z8xwetedgm48.js","assets/c5t9ovl5ogku9l5l.js","assets/e9lafxuzyeh4418f.js","assets/bst9lq9idt62o2tf.js","assets/ceh546ck2n67losg.js","assets/gbwdai5w2ush8kio.js","assets/baqpwfc9am8y1apz.js","assets/k3ozvrpzdm84eif1.js","assets/nhwwej1nq0zrd7sc.js","assets/fb8inj1dqj4rnde8.js","assets/iduegiibfbnnhhxj.js","assets/ab3r8vaqaocz8og0.js","assets/iwakq96x7vt4obk7.js","assets/abgj1vb4suh1frp8.js","assets/i7szpvpxevaselft.js","assets/cb79tl9h1nhnbjw3.js","assets/lvz3vh6ykh5o8ezo.js","assets/fqhel6l5kixv21rc.js","assets/b8d7o0pzbl5hx1cn.js","assets/ipl67ty0q5fdffnm.js","assets/lvqsfhnymxttluri.js","assets/eg44zdeoyh5lcz2a.js","assets/hbwgmqpeg6jgm13g.js","assets/d3l0jj29l0t7ue9i.js","assets/oswq7qjoagmz10ah.js","assets/ldqr3sm46s59nho2.js","assets/ev42z1nwom6uhhqj.js","assets/ehf18zgtmzawgmhc.js","assets/iej0cupg2dqkmejt.js","assets/n6dqnqvsp27wmlfh.js","assets/jk8w36bsokizpx57.js","assets/iav3uaq52jmw7ons.js","assets/bmw39m5zj28ppzvz.js","assets/carousel-bss5aguy.css","assets/c0aszv0mpanmfcmv.js","assets/nm04jgpfyxi6pn12.js"])))=>i.map(i=>d[i]);
import{aM as F,d8 as H,bz as Q,bo as V,Q as W,bC as w,P as m,d9 as y,l as e,a0 as B,aC as Y,aD as q,az as Z,a1 as J,r as f,bL as K,a_ as X,ch as $,Z as z,ep as ee,a as R,eq as te,m as b,V as ne}from"./f1tbg9vupz7s4vaz.js";import{G as A}from"./lvz3vh6ykh5o8ezo.js";import{u as se,k as ae,y as oe}from"./jjp48s31c2bxsk72.js";import{q as re,r as ie,t as le,v as E,P as ce,w as ue,L as de,a1 as I}from"./eyfm2skil9fzhvo1.js";import{I as me,a_ as ge,aZ as pe,a as xe}from"./ku9ixf6u9z228exb.js";import{u as fe}from"./oixhn1b8fi6yhijp.js";const he=({clientThreadId:n,rateLimitInfo:r,onDismiss:i})=>{const{name:c,title:u,call_to_action:l,description:d}=r,g=F(),h=se(!0),a=H(),s=fe(n),t=g?.planType??"unknown",o=Q(),k=a&&"block_reason"in a?a.block_reason:null,v="banner_description",P={type:c||"unknown",location:v,plan_type:t,is_new_conversation:s,is_hard_block:!!a,hard_block_reason:k??"",call_to_action:l},M=V(),T=re(),{isUnauthenticated:D}=W(),p=ie(),j=le(w.signUpButtonText),L=O=>{switch(O){case y.AUTHENTICATE:return{text:p?w.logInButtonText:j,onClick:()=>{T({authType:p?"login":"signup",callback:x=>{p?m.logLogInButtonClicked({location:"Rate limit banner",provider:x}):m.logSignUpButtonClicked({location:"Rate limit banner",provider:x})}})}};case y.AUTHENTICATE_SECONDARY:return{text:p?j:w.logInButtonText,onClick:()=>{T({authType:p?"signup":"login",callback:x=>{p?m.logSignUpButtonClicked({location:"Rate limit banner",provider:x}):m.logLogInButtonClicked({location:"Rate limit banner",provider:x})}})}};case y.GET_PLUS:return{text:S.getPlusButton,onClick:()=>{m.logRateLimitGetPlusButtonClicked(P),D?T({authType:p?"login":"signup",shouldOpenPaymentModalOnAuth:!0,callback:x=>{p?m.logLogInButtonClicked({location:"Rate limit banner Get Plus upsell",provider:x}):m.logSignUpButtonClicked({location:"Rate limit banner Get Plus upsell",provider:x})}}):ue(M,"Prompt textarea rate limit banner")}};case y.NEW_CHAT:return{text:S.newChatButton,onClick:()=>{h({modelId:"",location:v})}}}};E(()=>{m.logRateLimitBannerShown(P)});let[N,_]=l??[];N===y.AUTHENTICATE&&o&&(_=y.AUTHENTICATE_SECONDARY);const U={primaryAction:L(N),secondaryAction:L(_)};return e.jsx(ce,{onDismiss:i,title:u,description:d,actions:U})},S=B({getPlusButton:{id:"TeyLcp",defaultMessage:"Get Plus"},newChatButton:{id:"7OvnJ5",defaultMessage:"New chat"}}),ye=Y(()=>q(()=>import("./sso-jfisjgs2lulw5cra.js").then(n=>n.p),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68])).then(n=>n.PromptTextareaRateLimitBannerNew)),ke=n=>{const{value:r}=Z("1028682714");return r?e.jsx(ye,{...n}):e.jsx(he,{...n})},G=J.div`group flex h-10 items-center gap-2 rounded-lg px-2 hover:bg-token-main-surface-secondary text-sm text-token-text-primary`;function Te(){const{data:n,isLoading:r}=ae({cutId:"recent",limit:8}),{data:i,isLoading:c}=oe();return{isLoading:r||c,recent:n,pinned:i}}function we({query:n,onSelectGizmo:r,selectedIdx:i},c){const u=K(),l=f.useRef([]),{isLoading:d,recent:g,pinned:h}=Te();f.useImperativeHandle(c,()=>({handleEnterOnIndex:t=>{if(!s[t])return t<a.length?a[t].resource:"create"},getResultsLength:()=>a.length+1,scrollToItem:t=>{const o=l.current[t];o&&o.scrollIntoView({behavior:"instant",block:"nearest"})}}));let a=[];if(d)return e.jsx("div",{className:"absolute right-4 top-0 flex h-full items-center justify-center",children:e.jsx(X,{})});g&&a.push(...g.pages.flatMap(t=>t.list.items).map(t=>({resource:t.resource,from:"recent"}))),h&&a.push(...h.items.map(t=>({resource:t,from:"pinned"}))),a=de(a,t=>t.resource.gizmo.id);const s=a.map(t=>t.resource.gizmo.tags?.includes(I.WorkspaceDisabled));return n&&n!==""&&(a=a.filter(t=>(t.resource.gizmo.display.name.toLowerCase()+t.resource.gizmo.display.description?.toLowerCase()+t.resource.gizmo.author.display_name?.toLowerCase()).includes(n?.toLowerCase()))),e.jsxs("div",{className:"max-h-40 overflow-y-auto",children:[a.map((t,o)=>e.jsx("div",{ref:k=>{l.current[o]=k},tabIndex:o,onClick:()=>{s[o]||r(t.resource)},children:e.jsx(ve,{gizmoResource:t.resource,from:t.from,showDescription:u,isSelected:i===o,grayedOut:s[o]})},t.resource.gizmo.id)),e.jsx("div",{ref:t=>{l.current[a.length]=t},tabIndex:a.length,onClick:()=>{r("create")},children:e.jsx(Ie,{isSelected:i===a.length})},"create")]})}const be=f.forwardRef(we),Ie=({isSelected:n})=>e.jsx(G,{className:n?"bg-token-main-surface-secondary":"",children:e.jsxs($,{to:"/gpts/editor",target:"_blank",className:"flex flex-row space-x-2 font-semibold",children:[e.jsx("span",{className:"self-center",children:e.jsx(me,{className:"icon-sm"})}),e.jsx("span",{children:e.jsx(z,{...C.dropdownCreateLabel})})]})}),Ce=({onClick:n,onClose:r})=>{const[i,c]=f.useState(null),u=f.useRef(null),l=f.useRef(null),[d,g]=f.useState(0),h=ne(),a=s=>{m.logEvent(R.mentionsClickGizmo,{gizmo_id:s==="create"?"create":s.gizmo.id}),s!=="create"&&n(s)};return e.jsxs(e.Fragment,{children:[e.jsx("input",{autoFocus:!0,placeholder:h.formatMessage(C.searchPlaceholder),ref:u,onKeyDown:s=>{const t=l.current?.getResultsLength()??0;if((s.key==="Escape"||s.key==="Backspace"&&!i)&&(s.preventDefault(),r()),s.key==="Enter"||s.key==="Tab"){s.preventDefault();const o=l.current?.handleEnterOnIndex(d);if(!o)return;o==="create"?(window.open("/gpts/editor","_blank"),r()):a(o)}if(s.key==="ArrowDown"&&d<t-1){s.preventDefault();const o=d+1;l.current?.scrollToItem(o),g(o)}if(s.key==="ArrowUp"&&d>0){s.preventDefault();const o=d-1;l.current?.scrollToItem(o),g(o)}},onChange:s=>{c(s.target.value),g(0)},className:"w-full border-0 bg-token-main-surface-primary p-2 text-sm focus:outline-none"}),e.jsx(be,{ref:l,query:i,selectedIdx:d,onSelectGizmo:a})]})},Be=({onClick:n,onClose:r})=>{const i=ee(),c=!!i;return E(()=>{m.logEvent(R.mentionsOpened,{gizmo_selector_disabled:c})}),c?e.jsx(ke,{clientThreadId:te,rateLimitInfo:i}):e.jsx("div",{onBlur:u=>{u.currentTarget.contains(u.relatedTarget)||r()},className:"popover rounded-2xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-lg",children:e.jsx(Ce,{onClick:n,onClose:r})})};function ve({gizmoResource:n,from:r,showDescription:i,isSelected:c,grayedOut:u}){const l=!!n.gizmo.tags?.includes(I.FirstParty);return e.jsxs(G,{className:b(c?"bg-token-main-surface-secondary":"",u&&"opacity-50"),children:[e.jsx(A,{isFirstParty:l,src:n.gizmo.display.profile_picture_url,className:b("icon-xl h-7 w-7 flex-shrink-0",u&&"grayscale group-hover:grayscale-0")}),e.jsxs("div",{className:"flex h-fit grow flex-row justify-between space-x-2 overflow-hidden text-ellipsis whitespace-nowrap",children:[e.jsxs("div",{className:"flex flex-row space-x-2",children:[e.jsx("span",{className:"shrink-0 truncate font-semibold",children:n.gizmo.display.name}),i&&e.jsx("span",{className:"flex-grow truncate text-sm text-token-text-tertiary sm:max-w-xs lg:max-w-md",children:n.gizmo.display.description})]}),e.jsx("span",{className:"shrink-0 self-center",children:r==="recent"?e.jsx(ge,{className:"icon-sm"}):e.jsx(pe,{className:"icon-sm"})})]})]})}function ze({gizmoResource:n,onRemove:r}){const i=!!n.gizmo.tags?.includes(I.FirstParty);return e.jsxs("div",{className:"flex w-full flex-row items-center rounded-t-2xl bg-token-main-surface-secondary px-2 py-1",children:[e.jsxs("div",{className:b("group flex h-10 items-center gap-2 rounded-lg px-2 font-semibold"),children:[e.jsx(A,{isFirstParty:i,src:n.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),e.jsxs("div",{className:"space-x-2 overflow-hidden text-ellipsis text-sm text-token-text-tertiary",children:[e.jsx(z,{...C.talkingTo})," ",e.jsx("span",{className:"font-semibold text-token-text-secondary",children:n.gizmo.display.name})]})]}),r&&e.jsx("button",{className:"absolute right-4 text-sm font-bold",onClick:r,children:e.jsx(xe,{className:"icon-md text-token-text-secondary hover:text-token-text-primary"})})]})}const C=B({talkingTo:{id:"TaggingDropdown.talkingTo",defaultMessage:"Talking to"},dropdownCreateLabel:{id:"TaggingDropdown.dropdownCreateLabel",defaultMessage:"Create a GPT"},searchPlaceholder:{id:"TaggingDropdown.searchPlaceholder",defaultMessage:"Search recent and pinned GPTs"}});export{Be as I,ke as P,ze as a,Te as u};
//# sourceMappingURL=ivpev86533cpi79d.js.map