const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sso-du8qpq5vjoqqjcsr.js","assets/d63lrq7vlweafxz1.js","assets/ohl9cn85y3aaicqe.js","assets/root-myjlts4g.css","assets/eg006duzrl772rkr.js","assets/g3zxt2mfvuei9piv.js","assets/conversation-small-eplmind9.css","assets/dlxsegamgppyh1m2.js","assets/n1fvj6hucql2s9uh.js","assets/nd9ur07kk6ra2se2.js","assets/cq1y7321szaais9t.js","assets/egad5p4nnncoj5lt.js","assets/oihs7qirgd79606r.js","assets/hcjfdejqunesw5hr.js","assets/eexqsmb80tn46cif.js","assets/h4lih5uze5fpkxoc.js","assets/t1dfvypwzj0qsy2j.js","assets/hzasuzxvzvyrjf2o.js","assets/hkx1bz4jqqtrfhvx.js","assets/dx4rebrbej3bnhtk.js","assets/c9hrleon4it9dd8i.js","assets/kqwdyvkaaavvn8k3.js","assets/n5ahjqhrkqy0jylg.js","assets/orovqpljoil3dvcp.js","assets/fs5gbgqmch243kc5.js","assets/l08ekra2d8ldulbn.js","assets/bqsfbsobfq5v0zm9.js","assets/ivgpxeooi0uqhm6x.js","assets/e9lafxuzyeh4418f.js","assets/hmvrebixodjr6xjb.js","assets/jmutnjyuz0rby5b2.js","assets/gi44bvnt6o378yl7.js","assets/nhwwej1nq0zrd7sc.js","assets/eai0uwy74zgjw354.js","assets/elv9wxkt388figo6.js","assets/cm5zpyah0wjmzbea.js","assets/eaehzgrq0vivay3l.js","assets/le0xcrm6n3gyouuy.js","assets/h99ffdd228yp7l1w.js","assets/ih3r3e5fseau9nil.js","assets/jb449adwxbxi1me5.js","assets/bcovyowsarx5yswc.js","assets/kshxul0ya814ewyl.js","assets/iqar95ryuif6yyj3.js","assets/8vh5q4uhm32edkaw.js","assets/mwn34khfvfuni0fv.js","assets/e86hbuttel85uo7n.js","assets/ma0trg4hlajpugg1.js","assets/i4qjt97rop38eyad.js","assets/f6as8rp3frmuxk07.js","assets/jc2o6eso9143w50x.js","assets/h5i2wk1a7tmm62se.js","assets/nna9ilfncfkfg7ao.js","assets/irie1aobe3i7l8l1.js","assets/lcjnejyvp3ebqq39.js","assets/fvaa0mqriwbjied4.js","assets/bousfifz3mn35mf5.js","assets/isjdmfmhzv09v01t.js","assets/joomb6bxttz5gps8.js","assets/nqq4f8qgta3xm0ej.js","assets/abz13ota5bifxt9z.js","assets/jg1dn4o9kyy6jpom.js","assets/krbu5eyixgsudso2.js","assets/irohp5kld90m8cgs.js","assets/jcyypd2lct8700iz.js","assets/ipertg899tfw9d0x.js","assets/n26caucmlr80mwhl.js","assets/bbeacn3j1iw8git6.js","assets/jmvnrotytmmjxh92.js","assets/nt7z8gn37avt7dvg.js","assets/lditcvqi45cljwv4.js","assets/k0fwm481sijd5wtj.js","assets/iej0cupg2dqkmejt.js","assets/bm5ormrm2birxiqq.js","assets/jk8w36bsokizpx57.js","assets/cj41wzzrws7kz17o.js","assets/lq8k3341uiqnprxz.js","assets/okimoylbw5y0gw5m.js","assets/kemvu2urfs784xxi.js","assets/cdyunlitq8j9wmry.js","assets/bnj6ccg0tq916jup.js","assets/bk4659kb53upiah6.js","assets/nmt62ce3ewyovuox.js","assets/hankm9x23o4lsqpx.js","assets/carousel-bss5aguy.css","assets/k4y1jnrmr7lo5o57.js","assets/nm04jgpfyxi6pn12.js","assets/hxlqfjxu5nzljsdh.js","assets/c2y7774ga4ukr940.js","assets/dkzh9se38idv28hu.js","assets/shared-mk6ngktc.css","assets/sso-fb8wsaex.css"])))=>i.map(i=>d[i]);
import{aq as B,de as D,ay as A,P as y,j as e,df as b,N as T,ck as E,c1 as M,aA as F,O,r as f,bN as H,aY as Q,bz as U,K as _,eG as V,A as L,eH as W,c as k,H as Y}from"./d63lrq7vlweafxz1.js";import{G as N}from"./e86hbuttel85uo7n.js";import{u as K,n as J,o as X}from"./fs5gbgqmch243kc5.js";import{Y as I,Z,_ as $,ab as q,au as j}from"./g3zxt2mfvuei9piv.js";import{W as ee,bj as te,bf as se,a as ne}from"./ohl9cn85y3aaicqe.js";import{d as ae}from"./hzasuzxvzvyrjf2o.js";const re=({clientThreadId:t,rateLimitInfo:r,onDismiss:i})=>{const{name:c,title:m,call_to_action:l,description:d}=r,p=B(),h=K(!0),a=D(),n=ae(t),s=(p==null?void 0:p.planType)??"unknown",o=a&&"block_reason"in a?a.block_reason:null,g="banner_description",x={type:c||"unknown",location:g,plan_type:s,is_new_conversation:n,is_hard_block:!!a,hard_block_reason:o??"",call_to_action:l},w=A(),u=R=>{switch(R){case b.GET_PLUS:return{text:P.getPlusButton,onClick:()=>{y.logRateLimitGetPlusButtonClicked(x),$(w,"Prompt textarea rate limit banner")}};case b.NEW_CHAT:return{text:P.newChatButton,onClick:()=>{h({modelId:"",location:g})}}}};I(()=>{y.logRateLimitBannerShown(x)});const[C,S]=l??[],G={primaryAction:u(C),secondaryAction:u(S)};return e.jsx(Z,{onDismiss:i,title:m,description:d,actions:G})},P=T({getPlusButton:{id:"TeyLcp",defaultMessage:"Get Plus"},newChatButton:{id:"7OvnJ5",defaultMessage:"New chat"}}),oe=E(()=>M(()=>import("./sso-du8qpq5vjoqqjcsr.js").then(t=>t.p),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91])).then(t=>t.PromptTextareaRateLimitBannerNew)),ie=t=>{const{value:r}=F("1028682714");return r?e.jsx(oe,{...t}):e.jsx(re,{...t})},z=O.div`group flex h-10 items-center gap-2 rounded-lg px-2 hover:bg-token-main-surface-secondary text-sm text-token-text-primary`;function ce(){const{data:t,isLoading:r}=J({cutId:"recent",limit:8}),{data:i,isLoading:c}=X();return{isLoading:r||c,recent:t,pinned:i}}function le({query:t,onSelectGizmo:r,selectedIdx:i},c){const m=H(),l=f.useRef([]),{isLoading:d,recent:p,pinned:h}=ce();f.useImperativeHandle(c,()=>({handleEnterOnIndex:s=>{if(!n[s])return s<a.length?a[s].resource:"create"},getResultsLength:()=>a.length+1,scrollToItem:s=>{const o=l.current[s];o&&o.scrollIntoView({behavior:"instant",block:"nearest"})}}));let a=[];if(d)return e.jsx("div",{className:"absolute right-4 top-0 flex h-full items-center justify-center",children:e.jsx(Q,{})});p&&a.push(...p.pages.flatMap(s=>s.list.items).map(s=>({resource:s.resource,from:"recent"}))),h&&a.push(...h.items.map(s=>({resource:s,from:"pinned"}))),a=q(a,s=>s.resource.gizmo.id);const n=a.map(s=>{var o;return(o=s.resource.gizmo.tags)==null?void 0:o.includes(j.WorkspaceDisabled)});return t&&t!==""&&(a=a.filter(s=>{var g,x;return(s.resource.gizmo.display.name.toLowerCase()+((g=s.resource.gizmo.display.description)==null?void 0:g.toLowerCase())+((x=s.resource.gizmo.author.display_name)==null?void 0:x.toLowerCase())).includes(t==null?void 0:t.toLowerCase())})),e.jsxs("div",{className:"max-h-40 overflow-y-auto",children:[a.map((s,o)=>e.jsx("div",{ref:g=>{l.current[o]=g},tabIndex:o,onClick:()=>{n[o]||r(s.resource)},children:e.jsx(pe,{gizmoResource:s.resource,from:s.from,showDescription:m,isSelected:i===o,grayedOut:n[o]})},s.resource.gizmo.id)),e.jsx("div",{ref:s=>{l.current[a.length]=s},tabIndex:a.length,onClick:()=>{r("create")},children:e.jsx(ue,{isSelected:i===a.length})},"create")]})}const de=f.forwardRef(le),ue=({isSelected:t})=>e.jsx(z,{className:t?"bg-token-main-surface-secondary":"",children:e.jsxs(U,{to:"/gpts/editor",target:"_blank",className:"flex flex-row space-x-2 font-semibold",children:[e.jsx("span",{className:"self-center",children:e.jsx(ee,{className:"icon-sm"})}),e.jsx("span",{children:e.jsx(_,{...v.dropdownCreateLabel})})]})}),me=({onClick:t,onClose:r})=>{const[i,c]=f.useState(null),m=f.useRef(null),l=f.useRef(null),[d,p]=f.useState(0),h=Y(),a=n=>{y.logEvent(L.mentionsClickGizmo,{gizmo_id:n==="create"?"create":n.gizmo.id}),n!=="create"&&t(n)};return e.jsxs(e.Fragment,{children:[e.jsx("input",{autoFocus:!0,placeholder:h.formatMessage(v.searchPlaceholder),ref:m,onKeyDown:n=>{var o,g,x,w;const s=((o=l.current)==null?void 0:o.getResultsLength())??0;if((n.key==="Escape"||n.key==="Backspace"&&!i)&&(n.preventDefault(),r()),n.key==="Enter"||n.key==="Tab"){n.preventDefault();const u=(g=l.current)==null?void 0:g.handleEnterOnIndex(d);if(!u)return;u==="create"?(window.open("/gpts/editor","_blank"),r()):a(u)}if(n.key==="ArrowDown"&&d<s-1){n.preventDefault();const u=d+1;(x=l.current)==null||x.scrollToItem(u),p(u)}if(n.key==="ArrowUp"&&d>0){n.preventDefault();const u=d-1;(w=l.current)==null||w.scrollToItem(u),p(u)}},onChange:n=>{c(n.target.value),p(0)},className:"w-full border-0 bg-token-main-surface-primary p-2 text-sm focus:outline-none"}),e.jsx(de,{ref:l,query:i,selectedIdx:d,onSelectGizmo:a})]})},ke=({onClick:t,onClose:r})=>{const i=V(),c=!!i;return I(()=>{y.logEvent(L.mentionsOpened,{gizmo_selector_disabled:c})}),c?e.jsx(ie,{clientThreadId:W,rateLimitInfo:i}):e.jsx("div",{onBlur:m=>{m.currentTarget.contains(m.relatedTarget)||r()},className:"popover rounded-2xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-lg",children:e.jsx(me,{onClick:t,onClose:r})})};function pe({gizmoResource:t,from:r,showDescription:i,isSelected:c,grayedOut:m}){var d;const l=!!((d=t.gizmo.tags)!=null&&d.includes(j.FirstParty));return e.jsxs(z,{className:k(c?"bg-token-main-surface-secondary":"",m&&"opacity-50"),children:[e.jsx(N,{isFirstParty:l,src:t.gizmo.display.profile_picture_url,className:k("icon-xl h-7 w-7 flex-shrink-0",m&&"grayscale group-hover:grayscale-0")}),e.jsxs("div",{className:"flex h-fit grow flex-row justify-between space-x-2 overflow-hidden text-ellipsis whitespace-nowrap",children:[e.jsxs("div",{className:"flex flex-row space-x-2",children:[e.jsx("span",{className:"shrink-0 truncate font-semibold",children:t.gizmo.display.name}),i&&e.jsx("span",{className:"flex-grow truncate text-sm text-token-text-tertiary sm:max-w-xs lg:max-w-md",children:t.gizmo.display.description})]}),e.jsx("span",{className:"shrink-0 self-center",children:r==="recent"?e.jsx(te,{className:"icon-sm"}):e.jsx(se,{className:"icon-sm"})})]})]})}function je({gizmoResource:t,onRemove:r}){var c;const i=!!((c=t.gizmo.tags)!=null&&c.includes(j.FirstParty));return e.jsxs("div",{className:"flex w-full flex-row items-center rounded-t-2xl bg-token-main-surface-secondary px-2 py-1",children:[e.jsxs("div",{className:k("group flex h-10 items-center gap-2 rounded-lg px-2 font-semibold"),children:[e.jsx(N,{isFirstParty:i,src:t.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),e.jsxs("div",{className:"space-x-2 overflow-hidden text-ellipsis text-sm text-token-text-tertiary",children:[e.jsx(_,{...v.talkingTo})," ",e.jsx("span",{className:"font-semibold text-token-text-secondary",children:t.gizmo.display.name})]})]}),r&&e.jsx("button",{className:"absolute right-4 text-sm font-bold",onClick:r,children:e.jsx(ne,{className:"icon-md text-token-text-secondary hover:text-token-text-primary"})})]})}const v=T({talkingTo:{id:"TaggingDropdown.talkingTo",defaultMessage:"Talking to"},dropdownCreateLabel:{id:"TaggingDropdown.dropdownCreateLabel",defaultMessage:"Create a GPT"},searchPlaceholder:{id:"TaggingDropdown.searchPlaceholder",defaultMessage:"Search recent and pinned GPTs"}});export{ke as I,ie as P,je as a,ce as u};
//# sourceMappingURL=n854wotqaqg7ecwr.js.map