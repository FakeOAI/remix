const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/hsrist31d9439t0x.js","assets/es28fsfv6yr4r7t0.js","assets/fywton14jd85t5em.js","assets/root-e4b0txdx.css","assets/lz4uwss82o8aau0y.js","assets/knksm8jtt3et03lk.js","assets/conversation-small-ogafjggy.css","assets/elvm24329arjt3o8.js","assets/komg9ol1i6c41q0e.js","assets/dncd2pyz7qtauwp2.js"])))=>i.map(i=>d[i]);
import{l as e,m as g,aK as A,r as v,D as L,a0 as r,a1 as y,aD as R,aE as T,a2 as p,P as z,a as N,X as E,a$ as P,be as B,h as w,bd as G,bU as k,df as d,ck as F}from"./es28fsfv6yr4r7t0.js";import{a7 as U,bR as O,a3 as I,aT as H,aH as j,al as C,V as q,d as K,a4 as $}from"./knksm8jtt3et03lk.js";import{D as Q,B as J}from"./lz4uwss82o8aau0y.js";import{J as V,b4 as W,G as Y,a7 as X,aO as M,O as _}from"./fywton14jd85t5em.js";import{G as Z}from"./dvwc32cun5g6ge4r.js";import{G as ee}from"./g19roq1pex6046gj.js";import{B as se,d as S,b as te,C as ae}from"./elvm24329arjt3o8.js";import{G as ie}from"./bpuql4ex5a5bq5jf.js";import{m as re}from"./dncd2pyz7qtauwp2.js";function oe({resource:s,grayedOut:t,className:i}){const a=s.gizmo.vanity_metrics?.num_conversations_str;return e.jsxs("div",{className:g("flex w-full flex-grow items-center gap-4 overflow-hidden",i),children:[e.jsx(ee,{isFirstParty:!!s.gizmo.tags?.includes(U.FirstParty),src:s.gizmo.display.profile_picture_url??void 0,className:g("h-12 w-12 flex-shrink-0",t&&"grayscale group-hover:grayscale-0")}),e.jsxs("div",{className:"overflow-hidden text-ellipsis break-words",children:[e.jsx("span",{className:"line-clamp-2 text-sm font-semibold leading-tight",children:s.gizmo.display.name}),e.jsx("span",{className:"line-clamp-3 text-xs",children:s.gizmo.display.description}),e.jsxs("div",{className:"mt-1 flex items-center gap-1 text-ellipsis whitespace-nowrap pr-1 text-xs text-token-text-tertiary",children:[e.jsx(Z,{gizmo:s,className:"text-xs",hideLink:!0}),a&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-[8px]",children:"•"}),e.jsx(V,{className:"h-3 w-3"}),a]})]})]})]})}function ne({gizmoResource:s}){const t=A(),[i,a]=v.useState(!1);return s.gizmo.share_recipient===O.Private?null:e.jsx(Q.Item,{onClick:async o=>{o.stopPropagation(),o.preventDefault();try{const n=s.gizmo.short_url?se(s.gizmo.short_url):`https://chatgpt.com${S(s)}`;await I(n,t,o),a(!0),setTimeout(()=>{a(!1)},2e3)}catch(n){L.addError(n);return}},icon:W,children:i?e.jsx(r,{...b.copiedURL}):e.jsx(r,{...b.copyLink})})}const b=y({copyLink:{defaultMessage:"Copy link",id:"GizmoInformation.copyLink"},copiedURL:{defaultMessage:"Copied URL",id:"GizmoInformation.copiedURL"}}),le=R(()=>T(()=>import("./hsrist31d9439t0x.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(s=>s.GizmoKeepInSidebarMenuItem)),ce=4,f=p.div`font-bold mt-6`,de=s=>w({queryFn:async()=>C.getAbout(s),queryKey:["gizmo","about",{gizmoId:s}]}),me=s=>w({queryFn:async()=>C.getCreatorSlice({creatorId:s}),queryKey:["gizmo","creator",{creatorId:s}],enabled:s!=null}),xe=s=>{switch(s.type){case d.BROWSER:return{title:l.browsing};case d.PYTHON:return{title:l.dataAnalysis};case d.DALLE:return{title:l.dalle};case d.MEMORY:return{title:l.memory,description:l.memoryDescription};case d.JIT_PLUGIN:return{title:l.actions,description:l.actionsDescription};default:return null}},ue=({tools:s})=>{const t=q(s??[],a=>a.type),i=K(t.map(xe).filter(a=>a!=null)??[]);return i.length===0?null:e.jsxs("div",{className:"flex flex-col",children:[e.jsx(f,{className:"mb-2",children:e.jsx(r,{id:"gizmo.about.capabilitiesHeader",defaultMessage:"Capabilities"})}),i.map(a=>e.jsxs("div",{className:"flex flex-row items-start gap-2 py-1 text-sm",children:[e.jsx(Y,{className:"icon-sm mt-0.5 text-green-600"}),e.jsxs("div",{children:[e.jsx(r,{...a.title}),a.description!=null&&e.jsx("div",{className:"text-xs text-token-text-tertiary",children:e.jsx(r,{...a.description})})]})]},a.title.id))]})},m=p.div`flex flex-col justify-center items-center gap-2 border-l border-token-border-heavy first:border-0 w-48 mt-4 px-2`,x=p.div`flex flex-row items-center gap-1.5 pt-1 text-xl font-semibold text-center leading-none`,u=p.div`text-xs text-token-text-tertiary`,ge=({gizmoResource:s})=>e.jsxs(J,{contentAlign:"end",sideOffset:4,triggerButton:e.jsx(G,{color:"ghost",icon:X}),children:[e.jsx(le,{gizmoResource:s}),e.jsx(ne,{gizmoResource:s})]}),pe=({aboutBlock:s})=>{switch(s.type){case"generic_title_subtitle":return e.jsxs(m,{children:[e.jsx(x,{children:s.title}),e.jsx(u,{children:s.subtitle})]});case"rating":return e.jsxs(m,{children:[e.jsxs(x,{children:[e.jsx(M,{className:"icon-sm"}),s.avg]}),e.jsx(u,{children:s.count_str})]});case"category":return s.category_ranking!=null?e.jsxs(m,{children:[e.jsx(x,{children:e.jsx(r,{id:"gizmo.about.trendingRank",defaultMessage:"#{rank}",values:{rank:s.category_ranking}})}),e.jsx(u,{children:e.jsx(r,{id:"gizmo.about.inCategory",defaultMessage:"in {category} {locale}",values:{category:s.category_str,locale:s.category_locale_str??""}})})]}):e.jsxs(m,{children:[e.jsx(x,{children:s.category_str}),e.jsx(u,{children:e.jsx(r,{id:"gizmo.about.category",defaultMessage:"Category"})})]})}},fe=({blocks:s})=>e.jsx("div",{className:"flex justify-center",children:s.map(t=>e.jsx(pe,{aboutBlock:t},t.type))}),he=({href:s,onClick:t,children:i})=>e.jsx(re.div,{whileTap:{scale:.98},className:"flex",children:e.jsxs(F,{to:s,onClick:t,className:g("group relative ml-2 h-14 flex-grow rounded-xl border border-token-border-medium bg-token-main-surface-primary px-4 hover:bg-token-main-surface-secondary focus:outline-none"),children:[e.jsx("div",{className:"flex h-full items-center",children:e.jsx("div",{className:"line-clamp-2 text-sm",children:i})}),e.jsx("div",{className:"absolute -bottom-px -left-2 h-3 w-4 border-b border-token-border-medium bg-token-main-surface-primary group-hover:bg-token-main-surface-secondary",children:e.jsx("div",{className:"h-3 w-2 rounded-br-full border-b border-r border-token-border-medium bg-token-main-surface-primary"})}),e.jsx("div",{className:"absolute bottom-0 right-2 top-0 hidden items-center group-hover:flex",children:e.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-lg bg-token-main-surface-primary",children:e.jsx(_,{className:"icon-md text-token-text-primary"})})})]})}),je=({gizmo:s,onClose:t})=>{const i=k("1825130190").value,a=s.gizmo.display.prompt_starters?.slice(0,ce);return a==null||a.length===0||!i?null:e.jsxs("div",{className:"flex flex-col",children:[e.jsx(f,{children:e.jsx(r,{id:"gizmo.about.conversationStartersHeader",defaultMessage:"Conversation Starters"})}),e.jsx("div",{className:"mt-4 grid grid-cols-2 gap-x-1.5 gap-y-2",children:a.map((o,n)=>e.jsx(be,{gizmo:s,prompt:o,onClick:t},n))})]})};function be(s){const{gizmo:t,prompt:i,onClick:a}=s,o=ae(t,i);return e.jsx(he,{href:o?.toString()??"#",onClick:a,children:i})}const ve=({reviewStats:s})=>k("1825130190").value?e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"mb-2",children:e.jsx(f,{children:e.jsx(r,{id:"gizmo.about.ratingsHeader",defaultMessage:"Ratings"})})}),s!=null?[5,4,3,2,1].map(i=>e.jsxs("div",{className:"flex flex-row items-center gap-2 py-1 text-xl font-semibold",children:[e.jsxs("div",{className:"icon-lg relative",children:[e.jsx(M,{className:"icon-lg text-green-500"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-[11px] text-white",children:i})]}),e.jsx("div",{className:"h-2.5 flex-grow overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700",children:e.jsx("div",{className:"h-full bg-green-500",style:{width:`${(s?.by_rating[i-1]??0)*100}%`}})})]},i)):e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(r,{id:"gizmo.about.ratings.notEnoughRatings",defaultMessage:"Not enough ratings yet"})})]}):null,Ae=({gizmoId:s,creatorId:t})=>{const i=H(j.GPTDetails),a=()=>$.closeModal(j.GPTDetails);return i?e.jsx(ye,{gizmoId:s,creatorId:t,onClose:a}):null},ye=({gizmoId:s,creatorId:t,onClose:i,children:a})=>{const o=de(s),{data:n}=me(t),D=o.data?.gizmo,h=te(s),c=h?.data;return v.useEffect(()=>{z.logEvent(N.showDetailModal,{gizmo_id:s})},[s]),e.jsx(E,{isOpen:!0,onClose:i,type:"success",hideSeparator:!0,showCloseButton:!0,noPadding:!0,className:"flex h-[calc(100vh-25rem)] min-h-[80vh] max-w-xl flex-col",children:e.jsx("div",{className:"relative flex h-full flex-col gap-2 overflow-hidden px-2 py-4",children:o.isLoading||h.isLoading?e.jsx("div",{className:"flex h-40 items-center justify-center pb-10",children:e.jsx(P,{})}):D==null||c==null||o.data==null?e.jsx("div",{className:"flex flex-col gap-4 pb-10",children:e.jsx(r,{id:"gizmo.about.notFound",defaultMessage:"GPT not found"})}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative flex flex-grow flex-col gap-4 overflow-y-auto px-6 pb-20 pt-16",children:[e.jsx("div",{className:"absolute top-0",children:e.jsxs("div",{className:"fixed left-4 right-4 z-10 flex items-center justify-end bg-gradient-to-b from-token-main-surface-primary to-transparent pb-2",children:[c&&e.jsx(ge,{gizmoResource:c}),e.jsx(B,{onClick:i})]})}),e.jsx("div",{className:"absolute bottom-[64px]",children:e.jsx("div",{className:"fixed left-4 right-4 z-10 flex min-h-[64px] items-end bg-gradient-to-t from-token-main-surface-primary to-transparent px-2",children:a})}),e.jsx(ie,{gizmo:c,className:"!h-fit",avatarClassName:"!h-20 !w-20"}),e.jsx(fe,{blocks:o.data.about_blocks}),e.jsx(je,{gizmo:c,onClose:i}),e.jsx(ue,{tools:c.tools}),e.jsx(ve,{reviewStats:o.data.review_stats}),n&&e.jsx(ze,{gizmos:n.items})]})})})})};function ze({gizmos:s}){return s.length>0?e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"mb-2",children:e.jsx(f,{children:e.jsx(r,{id:"gizmo.about.moreByHeader",defaultMessage:"More by {creatorName}",values:{creatorName:s[0].gizmo.author.display_name}})})}),e.jsx("div",{className:g("no-scrollbar group flex min-h-[104px] items-center space-x-2 overflow-x-auto overflow-y-hidden"),children:s&&s.map(t=>e.jsx("a",{onClick:()=>{z.logEvent(N.detailClickGizmo,{gizmo_id:t.gizmo.id})},href:S(t),className:"h-fit min-w-fit rounded-xl bg-token-main-surface-secondary px-1 py-4 md:px-3 md:py-4 lg:px-3",children:e.jsx(oe,{resource:t})},t.gizmo.id))})]}):null}const Le=s=>e.jsx("div",{className:"flex flex-grow flex-col items-center",children:e.jsxs(G,{color:"primary",className:"h-12 w-full",icon:_,...s,children:[e.jsx(r,{id:"gizmo.about.startChat",defaultMessage:"Start Chat"}),s.children]})}),l=y({browsing:{id:"gizmo.about.tools.browsing",defaultMessage:"Browsing"},dataAnalysis:{id:"gizmo.about.tools.dataAnalysis",defaultMessage:"Code Interpreter & Data Analysis"},dalle:{id:"gizmo.about.tools.dalle",defaultMessage:"DALL·E Images"},memory:{id:"gizmo.about.tools.memory",defaultMessage:"Memory"},actions:{id:"gizmo.about.tools.actions",defaultMessage:"Actions"},actionsDescription:{id:"gizmo.about.tools.actionsDescription",defaultMessage:"Retrieves or takes actions outside of ChatGPT"},memoryDescription:{id:"gizmo.about.tools.memoryDescription",defaultMessage:"Learns from previous chats to improve future conversations"}});export{ye as G,Le as a,oe as b,Ae as c,ne as d};
//# sourceMappingURL=bh147n6ziycms0yi.js.map