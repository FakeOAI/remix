const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sso-kag7pjrd6tucy066.js","assets/knistvoayd9w5dlh.js","assets/egxlpxkjkn5vlr2a.js","assets/root-hfasch8z.css","assets/j54gpyg7scwggnwc.js","assets/bzpogxw1ym966dib.js","assets/conversation-small-eplmind9.css","assets/gf1ybvsw9s8rxh1y.js","assets/f82fvalqosmyoquc.js","assets/c3cyng6qx8iiz8qa.js","assets/g3edk9aakj5fvio1.js","assets/bo6ajkrtbac292qn.js","assets/ltygg1rmae4fu7m0.js","assets/hr63ipejtreaccw8.js","assets/l1uldd1k8t2kfbof.js","assets/oreqyxqpkhezhrvm.js","assets/jy0ytxf2nsk2z09n.js","assets/e7mfms0j0nge19ns.js","assets/n8t4r72rt5wngx3w.js","assets/29q49b6ohvllb80t.js","assets/ckoa7i9b12vmohpl.js","assets/leztn26q6hvi8ukm.js","assets/npi9ttbdfbqna0x2.js","assets/j7ye2yrhv4fx40zc.js","assets/haz16gd4y4f4xs4y.js","assets/ja8tpnpdtr3ntaav.js","assets/f3bctg478d15cgrd.js","assets/mfagicpltdf0mw83.js","assets/f3lqwvx957hvs3rz.js","assets/c376e2r3ouixr2sg.js","assets/hgkwov7jmsff50aq.js","assets/mdxwkzfeqq4yss30.js","assets/kqwdyvkaaavvn8k3.js","assets/c1f0bhtfdgzfjot3.js","assets/mb4zlobzz5dlzhu5.js","assets/devh2idstt28977e.js","assets/erkk0eubu93yjyhn.js","assets/e9lafxuzyeh4418f.js","assets/isozyq6ltmdrufy7.js","assets/my3ssdwdbh4u1d8x.js","assets/i0c7avbvchmycpje.js","assets/l1nutrscmdo31wpr.js","assets/616ocht9n6wx1ab4.js","assets/nhwwej1nq0zrd7sc.js","assets/fuaxj33it2v1eluv.js","assets/h4k9s58dkfbjfrht.js","assets/e95k6erq1i5ab2g1.js","assets/mo44rey4q9boshj7.js","assets/w8u6izfbi1diuc1i.js","assets/nphei4ty0d24vwoy.js","assets/l8fss1xcjpe6fkyh.js","assets/k1g7ixcrm08fbb8r.js","assets/ckkfcjx2sdlfhl2p.js","assets/kz1akz3adysr1hkk.js","assets/ddotepeck17pieaf.js","assets/cbflt7ed7lgr23wj.js","assets/74613w41l0vwfqtf.js","assets/o2ugwzgjgrm6z5ip.js","assets/nu8ec7l3j4bx28ca.js","assets/qyqhe9cckzm27zg8.js","assets/fds917wan3g6vorp.js","assets/51qwp1bt1ush7x5s.js","assets/iej0cupg2dqkmejt.js","assets/ct0uhz2mg3xfc17z.js","assets/jk8w36bsokizpx57.js","assets/e4d1gms1m9qt8gxd.js","assets/n65a8dtysplp539u.js","assets/d4o09pw9e279n0nz.js","assets/carousel-bss5aguy.css","assets/f5w1hd2n9ghmx3ao.js","assets/nm04jgpfyxi6pn12.js"])))=>i.map(i=>d[i]);
import{r as C,bQ as F,aH as T,aN as E,h as I,j as P,aD as A,aE as q,l as t,m as h,Q as U,f5 as D,ck as k,bh as H,b6 as R,Z as O}from"./knistvoayd9w5dlh.js";import{G as Q}from"./k1g7ixcrm08fbb8r.js";import{d$ as $,a3 as z,c3 as B,e0 as K,e1 as W,aL as M,e2 as S,e3 as Z,e4 as J,O as V,e5 as X,e6 as Y,a6 as ee}from"./bzpogxw1ym966dib.js";import{a as te,T as se,n as re,i as ae,x as ne}from"./g3edk9aakj5fvio1.js";import{g as oe,t as ie,a as le}from"./n8t4r72rt5wngx3w.js";import{H as ce,b as de,a as ue}from"./c3cyng6qx8iiz8qa.js";import{t as me}from"./29q49b6ohvllb80t.js";import{m as b}from"./f82fvalqosmyoquc.js";import{G as w}from"./e4d1gms1m9qt8gxd.js";function _(){const{store:e}=$(),a=e.useSharedProps(),r=ce();return C.useCallback(async(n,i,s)=>{if(!a)return;const{clientThreadId:o,currentLeafId:c,onCreateNewCompletion:l,onResetState:d,conversationMode:m}=a;z.hideThreadHeader();const p=`${c}-nextPrompt`,x=new B;await l({promptId:p,content:oe(n),eventMetadata:{eventSource:"mouse"},completionMetadata:{suggestions:i,conversationMode:m??te.getConversationMode(o),systemHints:[...r]},messageMetadata:{is_starter_prompt:!0,suggestion_type:n.type},turnTracker:x});const g=se.getTree(o).getMessageId(p);d(),ie(n,s,o,g),me()},[a,r])}function y(e){return(S(e)?e.promptStarters:e.gizmo.display.prompt_starters)?.map(a=>({type:M.Starter,title:"",body:a,prompt:a}))}function pe(e,a,r,n,i,s){const o=F(),c=re(a),l=de(c?.kind===T.GizmoInteraction?c.gizmo_id:void 0).data,{gizmoEditorData:d,mode:m}=K(),p=W(c),x=E(),f=e&&!p&&(n||!x?.isEnterprisey()),{data:g,isLoading:j,isSuccess:v,isError:G}=I({queryKey:["promptStarters",a,r,i,s],queryFn:()=>P.getSampledPromptStarter(r,i,s),enabled:f});return o==null?{promptStarters:[],isLoading:!0,isSuccess:!1}:m==="test"&&d?{promptStarters:y(d)??[],isLoading:!1,isSuccess:!0}:l!=null?{promptStarters:y(l),isLoading:!1,isSuccess:!0}:f?{promptStarters:g?.items.map(u=>({type:M.Starter,id:u.id,title:u.title,body:u.description,prompt:u.prompt,category:u.category,oneliner:u.oneliner,theme:u.theme,requires_file_upload:u.requires_file_upload}))??[],isLoading:j,isSuccess:v,isError:G}:{promptStarters:[],isLoading:!1,isSuccess:!0}}const xe=A(()=>q(()=>import("./sso-kag7pjrd6tucy066.js").then(e=>e.d),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70])).then(e=>e.CaNewThreadSplash).catch(()=>()=>null));function Ge({clientThreadId:e}){const{isUnauthenticated:a}=U(),r=!a,n=ae(e),i=ne(e),s=D(),o=k(),c=_(),l=ue(e),d=J(l),{promptStarters:m,isSuccess:p,isError:x}=pe(n&&!i,e,o?2:4,void 0,void 0,l??void 0),f=m&&m?.length>0,g=p&&f&&r&&!d,{layer:j}=H("4031588851"),v=j.get("is_two_line",!1);return t.jsx(t.Fragment,{children:t.jsx(V,{children:(x||p)&&t.jsxs(t.Fragment,{children:[t.jsx(R,{className:`h-12 w-12 ${r?"":"max-sm:hidden"}`}),g&&t.jsx(fe,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},promptStarters:m,onSelectStarterPrompt:c,isSendBlocked:s,clientThreadId:e,isTwoLine:v}),!f&&r&&!d&&t.jsx(N,{}),d?t.jsx(xe,{}):null,x&&r&&t.jsx(N,{})]})})})}function N(){return t.jsx("div",{className:"mt-7 text-3xl",children:t.jsx(O,{id:"24tuqq",defaultMessage:"Hi, how can I help?"})})}function fe({promptStarters:e,onSelectStarterPrompt:a,isSendBlocked:r,clientThreadId:n,isTwoLine:i,...s}){return C.useEffect(()=>{le(e,n)},[n]),t.jsx(t.Fragment,{children:i?t.jsx(b.div,{...s,className:"absolute bottom-6 w-full px-4",children:t.jsx(X,{children:t.jsx(ge,{starterPrompts:e,onSelectStarterPrompt:a,disabled:r})})}):t.jsx(b.div,{...s,children:t.jsx(L,{starterPrompts:e,onSelectStarterPrompt:a,disabled:r})})})}const he=/\s/;function L({starterPrompts:e,onSelectStarterPrompt:a,disabled:r,cssMobileDisplayLimit:n,marginOverride:i}){let s=e.map((o,c)=>{let l=o.oneliner??o.title;l===""&&(l=o.body);const d=he.test(l);return t.jsxs("button",{className:h(n!==void 0&&c>=n&&"max-sm:hidden","relative flex w-40 flex-col gap-2 rounded-2xl border border-token-border-light px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed"),disabled:r,onClick:()=>a(o,e,c),children:[t.jsx(Z,{starterPrompt:o}),t.jsx("div",{className:h("line-clamp-3 max-w-full text-balance text-gray-600 dark:text-gray-500",d?"break-word":"break-all"),children:l})]},o.id??c)});if(s.length>2){const o=Math.floor(s.length/2);s=[s.slice(0,o),s.slice(o)].map((c,l)=>t.jsx("div",{className:"flex max-w-3xl flex-wrap items-stretch justify-center gap-4",children:c},l))}return t.jsx("div",{className:h("mx-3 flex max-w-3xl flex-wrap items-stretch justify-center gap-4",i??"mt-12"),children:s})}function ge({starterPrompts:e,onSelectStarterPrompt:a,disabled:r}){let n=e.map((s,o)=>t.jsx("button",{className:"relative whitespace-nowrap rounded-2xl border border-token-border-light px-4 py-2 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed",disabled:r,onClick:()=>a(s,e,o),children:t.jsxs("div",{className:"flex flex-col overflow-hidden",children:[s.title&&t.jsx("div",{className:"truncate font-semibold",children:s.title}),t.jsx("div",{className:h("truncate font-normal",s.title?"opacity-50":""),children:s.body})]})},s.id??o));const i=Math.floor(n.length/2);return n=[n.slice(0,i),n.slice(i)].map((s,o)=>t.jsx("div",{className:"flex flex-col gap-2",children:s},o)),t.jsx("div",{className:"grid w-full grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2",children:n})}function Fe({gizmo:e,hideOwner:a=!1,children:r,className:n,avatarClassName:i,showStarterPrompts:s=!1,disableStarterPrompts:o=!1}){return e==null?null:t.jsx(t.Fragment,{children:t.jsxs("div",{className:h("flex h-full flex-col items-center justify-center text-token-text-primary",n),children:[t.jsx(Se,{gizmo:e,avatarClassName:i}),t.jsx(ve,{gizmo:e,hideOwner:a,showStarterPrompts:s,disableStarterPrompts:o}),r]})})}function Se({gizmo:e,avatarClassName:a}){const r=!!(e!=null&&Y(e)&&e?.gizmo.tags?.includes(ee.FirstParty));return t.jsx("div",{className:"relative",children:t.jsx(Q,{isFirstParty:r||!e,src:e!=null&&S(e)?e.profilePictureUrl:e?.gizmo.display.profile_picture_url,className:h("mb-3 h-12 w-12",a)})})}function je({gizmo:e,disabled:a}){const r=y(e),n=_(),i=k();if(r==null||r.length===0)return null;const s=r.slice(0,i?2:4);return t.jsx(L,{starterPrompts:s,onSelectStarterPrompt:n,disabled:a})}function ve({gizmo:e,hideOwner:a,showStarterPrompts:r,disableStarterPrompts:n}){const i=e!=null&&S(e)?e.name:e?.gizmo.display.name,s=e!=null&&S(e)?e.description:e?.gizmo.display.description;return t.jsxs("div",{className:"flex flex-col items-center gap-2",children:[t.jsx("div",{className:"text-center text-2xl font-semibold",children:i}),!a&&t.jsx("div",{className:"flex items-center gap-1 text-token-text-tertiary",children:t.jsx(t.Fragment,{children:e&&S(e)?t.jsx(w,{gizmo:e}):t.jsx(w,{gizmo:e,socials:e.gizmo.author.display_socials})})}),s&&t.jsx("div",{className:"max-w-md text-center text-sm font-normal text-token-text-primary",children:s}),r&&t.jsx(je,{gizmo:e,disabled:n})]})}export{Fe as G,Se as L,ge as S,pe as a,N as b,L as c,Ge as d,_ as u};
//# sourceMappingURL=i59zj58kypm4uwpf.js.map