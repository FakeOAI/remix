const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sso-gsg6r40sw576qcy5.js","assets/bx2z9ivcrsrexei9.js","assets/kdf6ofrec7z23k2d.js","assets/root-c7p9nir8.css","assets/f38w6kpru9q6svrw.js","assets/hfnzsjsy2v8td6lt.js","assets/conversation-small-kig9eefw.css","assets/lfr59nmx2d0ea1em.js","assets/ieli56gcvxx4ptw4.js","assets/dunhbzxyeq2iaj0t.js","assets/ff1locaonhpi5m3y.js","assets/i5qnifwt29u1ntiz.js","assets/otb1kwtamb5qovry.js","assets/cl4pe3mdfiybgkke.js","assets/n6yoqi4rb6b4hqdr.js","assets/k6z5o3o7hknz4a9g.js","assets/dcvgvpmhthpprpks.js","assets/lejurgig1py1s6jm.js","assets/bjkzf2yonaivaiu4.js","assets/3jxeofm78c0mkurb.js","assets/n03fl0u8p8q5jn85.js","assets/i82cgvuhknralmgw.js","assets/c9gwlp6b5l82ysfn.js","assets/grj2e07lzpc66mp6.js","assets/mfl2yyqrk05a9ayt.js","assets/hhgnf3sk05b5th1j.js","assets/jegff47ue3xaoe4o.js","assets/jmnqftedpv3gcce5.js","assets/dl0v1qftjx5fyqhj.js","assets/i531oci4u4fnd1kl.js","assets/mpajy59potg32e7u.js","assets/itghwucfyv5ciib7.js","assets/kyaqz37l36j9zg4n.js","assets/btsojkvxek2ew57n.js","assets/c35jte7u7eq0rwri.js","assets/983a0dy92b3ronpv.js","assets/pbayqnpgzkstwwkx.js","assets/ce71vv61rhyen5d1.js","assets/kqwdyvkaaavvn8k3.js","assets/njtbcqk2pazwkh4o.js","assets/cv45fmebxojzpfnl.js","assets/initgoig04dd7gp5.js","assets/f5abium4ag3w3lsv.js","assets/nhwwej1nq0zrd7sc.js","assets/jmij9o6shkyu9olq.js","assets/cctu0dge4clrte77.js","assets/jbw8lv7f8qhm0v5u.js","assets/oy2symtxzifuy88b.js","assets/glska7aameb033xh.js","assets/bk017ft03ulh54nl.js","assets/ks4d58ezu5h9g0ku.js","assets/jvjstws7ty16x8l1.js","assets/cmhm4o9093xqyv1m.js","assets/iej0cupg2dqkmejt.js","assets/kn9vbifn3fzowlrp.js","assets/c54opuct6xjfa8lp.js","assets/jk8w36bsokizpx57.js","assets/hdv6o13doq45rhjc.js","assets/eo99kewrogf9jldd.js","assets/k47zppif2nqkv0a9.js","assets/ek15zqskgn8g0o98.js","assets/kn78gnrl705comyt.js","assets/eylx1hr5d9wxgdiv.js","assets/iipjjid2gmv3c0ry.js","assets/swiper-kmk1dd5x.css"])))=>i.map(i=>d[i]);
import{aO as F,de as H,bH as Q,Q as $,bJ as w,cy as B,P as m,df as y,l as e,a1 as R,aE as J,aF as V,aB as W,a2 as Y,r as f,b0 as K,cp as X,a0 as z,eJ as Z,d as A,eK as q,m as b,W as ee}from"./bx2z9ivcrsrexei9.js";import{G as E}from"./oy2symtxzifuy88b.js";import{u as te,j as ne,B as se}from"./ieli56gcvxx4ptw4.js";import{y as ae,v as oe,w as re,x as ie,z as le,A as ce,bO as ue,F as de,Y as I}from"./hfnzsjsy2v8td6lt.js";import{J as me,aU as ge,aZ as pe,a as xe}from"./kdf6ofrec7z23k2d.js";import{u as fe}from"./dunhbzxyeq2iaj0t.js";const he=({clientThreadId:n,rateLimitInfo:r,onDismiss:i})=>{const{name:l,title:u,call_to_action:c,description:d}=r,g=F(),h=te(!0),a=H(),s=fe(n),t=g?.planType??"unknown",o=ae(),k=a&&"block_reason"in a?a.block_reason:null,j="banner_description",C={type:l||"unknown",location:j,plan_type:t,is_new_conversation:s,is_hard_block:!!a,hard_block_reason:k??"",call_to_action:c},M=Q(),T=oe(),{isUnauthenticated:D}=$(),p=re(),P=ie(w.signUpButtonText),N=O=>{switch(O){case y.AUTHENTICATE:return{text:p?w.logInButtonText:P,onClick:()=>{T({authType:p?"login":"signup",callback:x=>{p?m.logLogInButtonClicked({location:`Rate limit banner - ${l}`,provider:x}):m.logSignUpButtonClicked({location:`Rate limit banner - ${l}`,provider:x})}})}};case y.AUTHENTICATE_SECONDARY:return{text:p?P:w.logInButtonText,onClick:()=>{T({authType:p?"signup":"login",callback:x=>{p?m.logSignUpButtonClicked({location:`Rate limit banner - ${l}`,provider:x}):m.logLogInButtonClicked({location:`Rate limit banner - ${l}`,provider:x})}})}};case y.GET_PLUS:return{text:S.getPlusButton,onClick:()=>{m.logRateLimitGetPlusButtonClicked(C),D?T({authType:p?"login":"signup",shouldOpenPaymentModalOnAuth:!0,callback:x=>{p?m.logLogInButtonClicked({location:"Rate limit banner Get Plus upsell",provider:x}):m.logSignUpButtonClicked({location:"Rate limit banner Get Plus upsell",provider:x})}}):ce(M,"Prompt textarea rate limit banner")}};case y.NEW_CHAT:return{text:S.newChatButton,onClick:()=>{h({modelId:"",location:j})}}}};B(()=>{m.logRateLimitBannerShown(C)});let[L,_]=c??[];L===y.AUTHENTICATE&&o&&(_=y.AUTHENTICATE_SECONDARY);const U={primaryAction:N(L),secondaryAction:N(_)};return e.jsx(le,{onDismiss:i,title:u,description:d,actions:U})},S=R({getPlusButton:{id:"TeyLcp",defaultMessage:"Get Plus"},newChatButton:{id:"7OvnJ5",defaultMessage:"New chat"}}),ye=J(()=>V(()=>import("./sso-gsg6r40sw576qcy5.js").then(n=>n.p),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64])).then(n=>n.PromptTextareaRateLimitBannerNew)),ke=n=>{const{value:r}=W("1028682714");return r?e.jsx(ye,{...n}):e.jsx(he,{...n})},G=Y.div`group flex h-10 items-center gap-2 rounded-lg px-2 hover:bg-token-main-surface-secondary text-sm text-token-text-primary`;function Te(){const{data:n,isLoading:r}=ne({cutId:"recent",limit:8}),{data:i,isLoading:l}=se();return{isLoading:r||l,recent:n,pinned:i}}function we({query:n,onSelectGizmo:r,selectedIdx:i},l){const u=ue(),c=f.useRef([]),{isLoading:d,recent:g,pinned:h}=Te();f.useImperativeHandle(l,()=>({handleEnterOnIndex:t=>{if(!s[t])return t<a.length?a[t].resource:"create"},getResultsLength:()=>a.length+1,scrollToItem:t=>{const o=c.current[t];o&&o.scrollIntoView({behavior:"instant",block:"nearest"})}}));let a=[];if(d)return e.jsx("div",{className:"absolute right-4 top-0 flex h-full items-center justify-center",children:e.jsx(K,{})});g&&a.push(...g.pages.flatMap(t=>t.list.items).map(t=>({resource:t.resource,from:"recent"}))),h&&a.push(...h.items.map(t=>({resource:t,from:"pinned"}))),a=de(a,t=>t.resource.gizmo.id);const s=a.map(t=>t.resource.gizmo.tags?.includes(I.WorkspaceDisabled));return n&&n!==""&&(a=a.filter(t=>(t.resource.gizmo.display.name.toLowerCase()+t.resource.gizmo.display.description?.toLowerCase()+t.resource.gizmo.author.display_name?.toLowerCase()).includes(n?.toLowerCase()))),e.jsxs("div",{className:"max-h-40 overflow-y-auto",children:[a.map((t,o)=>e.jsx("div",{ref:k=>{c.current[o]=k},tabIndex:o,onClick:()=>{s[o]||r(t.resource)},children:e.jsx(je,{gizmoResource:t.resource,from:t.from,showDescription:u,isSelected:i===o,grayedOut:s[o]})},t.resource.gizmo.id)),e.jsx("div",{ref:t=>{c.current[a.length]=t},tabIndex:a.length,onClick:()=>{r("create")},children:e.jsx(Ie,{isSelected:i===a.length})},"create")]})}const be=f.forwardRef(we),Ie=({isSelected:n})=>e.jsx(G,{className:n?"bg-token-main-surface-secondary":"",children:e.jsxs(X,{to:"/gpts/editor",target:"_blank",className:"flex flex-row space-x-2 font-semibold",children:[e.jsx("span",{className:"self-center",children:e.jsx(me,{className:"icon-sm"})}),e.jsx("span",{children:e.jsx(z,{...v.dropdownCreateLabel})})]})}),ve=({onClick:n,onClose:r})=>{const[i,l]=f.useState(null),u=f.useRef(null),c=f.useRef(null),[d,g]=f.useState(0),h=ee(),a=s=>{m.logEvent(A.mentionsClickGizmo,{gizmo_id:s==="create"?"create":s.gizmo.id}),s!=="create"&&n(s)};return e.jsxs(e.Fragment,{children:[e.jsx("input",{autoFocus:!0,placeholder:h.formatMessage(v.searchPlaceholder),ref:u,onKeyDown:s=>{const t=c.current?.getResultsLength()??0;if((s.key==="Escape"||s.key==="Backspace"&&!i)&&(s.preventDefault(),r()),s.key==="Enter"||s.key==="Tab"){s.preventDefault();const o=c.current?.handleEnterOnIndex(d);if(!o)return;o==="create"?(window.open("/gpts/editor","_blank"),r()):a(o)}if(s.key==="ArrowDown"&&d<t-1){s.preventDefault();const o=d+1;c.current?.scrollToItem(o),g(o)}if(s.key==="ArrowUp"&&d>0){s.preventDefault();const o=d-1;c.current?.scrollToItem(o),g(o)}},onChange:s=>{l(s.target.value),g(0)},className:"w-full border-0 bg-token-main-surface-primary p-2 text-sm focus:outline-none"}),e.jsx(be,{ref:c,query:i,selectedIdx:d,onSelectGizmo:a})]})},Be=({onClick:n,onClose:r})=>{const i=Z(),l=!!i;return B(()=>{m.logEvent(A.mentionsOpened,{gizmo_selector_disabled:l})}),l?e.jsx(ke,{clientThreadId:q,rateLimitInfo:i}):e.jsx("div",{onBlur:u=>{u.currentTarget.contains(u.relatedTarget)||r()},className:"popover rounded-2xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-lg",children:e.jsx(ve,{onClick:n,onClose:r})})};function je({gizmoResource:n,from:r,showDescription:i,isSelected:l,grayedOut:u}){const c=!!n.gizmo.tags?.includes(I.FirstParty);return e.jsxs(G,{className:b(l?"bg-token-main-surface-secondary":"",u&&"opacity-50"),children:[e.jsx(E,{isFirstParty:c,src:n.gizmo.display.profile_picture_url,className:b("icon-xl h-7 w-7 flex-shrink-0",u&&"grayscale group-hover:grayscale-0")}),e.jsxs("div",{className:"flex h-fit grow flex-row justify-between space-x-2 overflow-hidden text-ellipsis whitespace-nowrap",children:[e.jsxs("div",{className:"flex flex-row space-x-2",children:[e.jsx("span",{className:"shrink-0 truncate font-semibold",children:n.gizmo.display.name}),i&&e.jsx("span",{className:"flex-grow truncate text-sm text-token-text-tertiary sm:max-w-xs lg:max-w-md",children:n.gizmo.display.description})]}),e.jsx("span",{className:"shrink-0 self-center",children:r==="recent"?e.jsx(ge,{className:"icon-sm"}):e.jsx(pe,{className:"icon-sm"})})]})]})}function Re({gizmoResource:n,onRemove:r}){const i=!!n.gizmo.tags?.includes(I.FirstParty);return e.jsxs("div",{className:"flex w-full flex-row items-center rounded-t-2xl bg-token-main-surface-secondary px-2 py-1",children:[e.jsxs("div",{className:b("group flex h-10 items-center gap-2 rounded-lg px-2 font-semibold"),children:[e.jsx(E,{isFirstParty:i,src:n.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),e.jsxs("div",{className:"space-x-2 overflow-hidden text-ellipsis text-sm text-token-text-tertiary",children:[e.jsx(z,{...v.talkingTo})," ",e.jsx("span",{className:"font-semibold text-token-text-secondary",children:n.gizmo.display.name})]})]}),r&&e.jsx("button",{className:"absolute right-4 text-sm font-bold",onClick:r,children:e.jsx(xe,{className:"icon-md text-token-text-secondary hover:text-token-text-primary"})})]})}const v=R({talkingTo:{id:"TaggingDropdown.talkingTo",defaultMessage:"Talking to"},dropdownCreateLabel:{id:"TaggingDropdown.dropdownCreateLabel",defaultMessage:"Create a GPT"},searchPlaceholder:{id:"TaggingDropdown.searchPlaceholder",defaultMessage:"Search recent and pinned GPTs"}});export{Be as I,ke as P,Re as a,Te as u};
//# sourceMappingURL=nlg5kcwe5amcxbhy.js.map