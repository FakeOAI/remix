const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sso-gh057in49rh8mssm.js","assets/ce20vh2pwl1h2mrx.js","assets/n3h96e4yqztse0yi.js","assets/root-fk4ggifc.css","assets/kyrlol8yqnckq752.js","assets/izfif69im9lzk9q2.js","assets/conversation-small-ni0cc2o5.css","assets/igr620nm6ul2k0dq.js","assets/iu1uhy1kwbh1vhmq.js","assets/e1cnpm5dmj2ijz1x.js","assets/ivcjr0x9hy2blveg.js","assets/lk82dixphe168qlu.js","assets/gye8zmhcxzn16c06.js","assets/dxe24b6kimaxjpej.js","assets/n076a76oyaedfeaj.js","assets/f9sftf5ifkxx4em1.js","assets/ljjzyc89di80jgp8.js","assets/bbvbwtndkb3isz5w.js","assets/dj9bz6cbmh1ab2xh.js","assets/hyla2v40qozg750d.js","assets/mqwrijc9iq97phte.js","assets/ids11ko64yz0tasz.js","assets/fotmvjzrsjefwj60.js","assets/e7iohkwy7ipr3lja.js","assets/jpqxod050oqd215w.js","assets/nnsdxccmr8ht5fhz.js","assets/ciawcwagf4hp0vn2.js","assets/en9tyk5yljejxllh.js","assets/gdiq1iragebzcj1g.js","assets/crtpnhrim2bnp21o.js","assets/iqzuxxu1599b2keo.js","assets/gex3f34w5hb7r28r.js","assets/hyy5gubjul2f2pn2.js","assets/kqwdyvkaaavvn8k3.js","assets/hph88jzhkyo9o9ic.js","assets/c1iq1kes33hnqvji.js","assets/o8evbpa4hpo1od16.js","assets/du5wgs3rahkctmso.js","assets/e9lafxuzyeh4418f.js","assets/oip7ffxgmx7yutyi.js","assets/e8ck6g8oydmtgiw9.js","assets/i2kr40j240vpsky5.js","assets/e3znbdl56zpegr6d.js","assets/nhwwej1nq0zrd7sc.js","assets/kol3ptso031lympp.js","assets/n60pzhz119lcsyep.js","assets/f7ra15hzmcwil9n6.js","assets/lkb5a9snuu2v9rtn.js","assets/burxvec6mb77df6k.js","assets/c0s6a8c2n23w48xk.js","assets/jg09jol7fzjugpon.js","assets/ju8gljxw2gelfujo.js","assets/jg9h5te509clo47e.js","assets/l6gldun15fmlcfwc.js","assets/dn64nodlq4h0w5l4.js","assets/h8t74o2ito5be7pg.js","assets/khqsniaf6579sw5l.js","assets/j1yy7x13k3army8o.js","assets/d1om9sr1e7m0t66c.js","assets/kqqpj7ru1prchyyo.js","assets/e0cm2qk8kwx03zk5.js","assets/k5m7gigc7k6vi7li.js","assets/iej0cupg2dqkmejt.js","assets/jvzqhkhvtms4rytd.js","assets/jk8w36bsokizpx57.js","assets/nnvh9rm6xzgcm84x.js","assets/e1huqohure6t2tlw.js","assets/igq61z8n6936agma.js","assets/7cuxyxswlqgybx04.js","assets/fcbfq77dl739jgs1.js","assets/dqz1c5s75xz4m91o.js","assets/carousel-bss5aguy.css","assets/xahw2bt3qvcv6kfe.js","assets/nm04jgpfyxi6pn12.js"])))=>i.map(i=>d[i]);
import{r as N,bP as L,aG as F,aM as I,h as P,j as E,aC as A,aD as U,l as t,m as S,Q as q,f5 as D,cj as T,bg as H,b5 as R,Z as B}from"./ce20vh2pwl1h2mrx.js";import{G as z}from"./ju8gljxw2gelfujo.js";import{ey as K,a3 as O,c2 as Q,cB as W,ez as $,eA as Z,aK as _,eB as v,eC as J,eD as V,L as X,eE as Y,eF as ee,a6 as te}from"./izfif69im9lzk9q2.js";import{a as se,T as re,n as ae,i as ne,x as oe}from"./ivcjr0x9hy2blveg.js";import{g as ie,t as le,a as ce}from"./hyla2v40qozg750d.js";import{I as de,b as ue,a as me}from"./e1cnpm5dmj2ijz1x.js";import{u as pe,t as xe}from"./mqwrijc9iq97phte.js";import{m as w}from"./iu1uhy1kwbh1vhmq.js";import{G as C}from"./nnvh9rm6xzgcm84x.js";function k(){const{store:e}=K(),a=e.useSharedProps(),r=de(),{clearSearchModeTrigger:n,getSearchModeTrigger:i}=pe();return N.useCallback(async(s,o,c)=>{if(!a)return;const{clientThreadId:l,currentLeafId:d,onCreateNewCompletion:p,onResetState:x,conversationMode:h}=a;O.hideThreadHeader();const m=`${d}-nextPrompt`,j=new Q,f=r.has(W.Search),g=f?i():void 0;await p({promptId:m,content:ie(s),eventMetadata:{eventSource:"mouse"},completionMetadata:{suggestions:o,conversationMode:h??se.getConversationMode(l),systemHints:[...r],searchSource:g},messageMetadata:{is_starter_prompt:!0,suggestion_type:s.type},turnTracker:j});const u=re.getTree(l).getMessageId(m);x(),le(s,c,l,u),xe(),g&&f&&n()},[a,r,i,n])}function y(e){return(v(e)?e.promptStarters:e.gizmo.display.prompt_starters)?.map(a=>({type:_.Starter,title:"",body:a,prompt:a}))}function he(e,a,r,n,i,s){const o=L(),c=ae(a),l=ue(c?.kind===F.GizmoInteraction?c.gizmo_id:void 0).data,{gizmoEditorData:d,mode:p}=$(),x=Z(c),h=I(),m=e&&!x&&(n||!h?.isEnterprisey()),{data:j,isLoading:f,isSuccess:g,isError:b}=P({queryKey:["promptStarters",a,r,i,s],queryFn:()=>E.getSampledPromptStarter(r,i,s),enabled:m});return o==null?{promptStarters:[],isLoading:!0,isSuccess:!1}:p==="test"&&d?{promptStarters:y(d)??[],isLoading:!1,isSuccess:!0}:l!=null?{promptStarters:y(l),isLoading:!1,isSuccess:!0}:m?{promptStarters:j?.items.map(u=>({type:_.Starter,id:u.id,title:u.title,body:u.description,prompt:u.prompt,category:u.category,oneliner:u.oneliner,theme:u.theme,requires_file_upload:u.requires_file_upload}))??[],isLoading:f,isSuccess:g,isError:b}:{promptStarters:[],isLoading:!1,isSuccess:!0}}const fe=A(()=>U(()=>import("./sso-gh057in49rh8mssm.js").then(e=>e.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73])).then(e=>e.CaNewThreadSplash).catch(()=>()=>null));function Fe({clientThreadId:e}){const{isUnauthenticated:a}=q(),r=!a,n=ne(e),i=oe(e),s=D(),o=T(),c=k(),l=me(e),d=V(l),{promptStarters:p,isSuccess:x,isError:h}=he(n&&!i,e,o?2:4,void 0,void 0,l??void 0),m=p&&p?.length>0,j=x&&m&&r&&!d,{layer:f}=H("4031588851"),g=f.get("is_two_line",!1);return t.jsx(t.Fragment,{children:t.jsx(X,{children:(h||x)&&t.jsxs(t.Fragment,{children:[t.jsx(R,{className:`h-12 w-12 ${r?"":"max-sm:hidden"}`}),j&&t.jsx(ge,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},promptStarters:p,onSelectStarterPrompt:c,isSendBlocked:s,clientThreadId:e,isTwoLine:g}),!m&&r&&!d&&t.jsx(M,{}),d?t.jsx(fe,{}):null,h&&r&&t.jsx(M,{})]})})})}function M(){return t.jsx("div",{className:"mt-7 text-3xl",children:t.jsx(B,{id:"24tuqq",defaultMessage:"Hi, how can I help?"})})}function ge({promptStarters:e,onSelectStarterPrompt:a,isSendBlocked:r,clientThreadId:n,isTwoLine:i,...s}){return N.useEffect(()=>{ce(e,n)},[n]),t.jsx(t.Fragment,{children:i?t.jsx(w.div,{...s,className:"absolute bottom-6 w-full px-4",children:t.jsx(Y,{children:t.jsx(je,{starterPrompts:e,onSelectStarterPrompt:a,disabled:r})})}):t.jsx(w.div,{...s,children:t.jsx(G,{starterPrompts:e,onSelectStarterPrompt:a,disabled:r})})})}const Se=/\s/;function G({starterPrompts:e,onSelectStarterPrompt:a,disabled:r,cssMobileDisplayLimit:n,marginOverride:i}){let s=e.map((o,c)=>{let l=o.oneliner??o.title;l===""&&(l=o.body);const d=Se.test(l);return t.jsxs("button",{className:S(n!==void 0&&c>=n&&"max-sm:hidden","relative flex w-40 flex-col gap-2 rounded-2xl border border-token-border-light px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed"),disabled:r,onClick:()=>a(o,e,c),children:[t.jsx(J,{starterPrompt:o}),t.jsx("div",{className:S("line-clamp-3 max-w-full text-balance text-gray-600 dark:text-gray-500",d?"break-word":"break-all"),children:l})]},o.id??c)});if(s.length>2){const o=Math.floor(s.length/2);s=[s.slice(0,o),s.slice(o)].map((c,l)=>t.jsx("div",{className:"flex max-w-3xl flex-wrap items-stretch justify-center gap-4",children:c},l))}return t.jsx("div",{className:S("mx-3 flex max-w-3xl flex-wrap items-stretch justify-center gap-4",i??"mt-12"),children:s})}function je({starterPrompts:e,onSelectStarterPrompt:a,disabled:r}){let n=e.map((s,o)=>t.jsx("button",{className:"relative whitespace-nowrap rounded-2xl border border-token-border-light px-4 py-2 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed",disabled:r,onClick:()=>a(s,e,o),children:t.jsxs("div",{className:"flex flex-col overflow-hidden",children:[s.title&&t.jsx("div",{className:"truncate font-semibold",children:s.title}),t.jsx("div",{className:S("truncate font-normal",s.title?"opacity-50":""),children:s.body})]})},s.id??o));const i=Math.floor(n.length/2);return n=[n.slice(0,i),n.slice(i)].map((s,o)=>t.jsx("div",{className:"flex flex-col gap-2",children:s},o)),t.jsx("div",{className:"grid w-full grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2",children:n})}function Ie({gizmo:e,hideOwner:a=!1,children:r,className:n,avatarClassName:i,showStarterPrompts:s=!1,disableStarterPrompts:o=!1}){return e==null?null:t.jsx(t.Fragment,{children:t.jsxs("div",{className:S("flex h-full flex-col items-center justify-center text-token-text-primary",n),children:[t.jsx(ve,{gizmo:e,avatarClassName:i}),t.jsx(be,{gizmo:e,hideOwner:a,showStarterPrompts:s,disableStarterPrompts:o}),r]})})}function ve({gizmo:e,avatarClassName:a}){const r=!!(e!=null&&ee(e)&&e?.gizmo.tags?.includes(te.FirstParty));return t.jsx("div",{className:"relative",children:t.jsx(z,{isFirstParty:r||!e,src:e!=null&&v(e)?e.profilePictureUrl:e?.gizmo.display.profile_picture_url,className:S("mb-3 h-12 w-12",a)})})}function ye({gizmo:e,disabled:a}){const r=y(e),n=k(),i=T();if(r==null||r.length===0)return null;const s=r.slice(0,i?2:4);return t.jsx(G,{starterPrompts:s,onSelectStarterPrompt:n,disabled:a})}function be({gizmo:e,hideOwner:a,showStarterPrompts:r,disableStarterPrompts:n}){const i=e!=null&&v(e)?e.name:e?.gizmo.display.name,s=e!=null&&v(e)?e.description:e?.gizmo.display.description;return t.jsxs("div",{className:"flex flex-col items-center gap-2",children:[t.jsx("div",{className:"text-center text-2xl font-semibold",children:i}),!a&&t.jsx("div",{className:"flex items-center gap-1 text-token-text-tertiary",children:t.jsx(t.Fragment,{children:e&&v(e)?t.jsx(C,{gizmo:e}):t.jsx(C,{gizmo:e,socials:e.gizmo.author.display_socials})})}),s&&t.jsx("div",{className:"max-w-md text-center text-sm font-normal text-token-text-primary",children:s}),r&&t.jsx(ye,{gizmo:e,disabled:n})]})}export{Ie as G,ve as L,je as S,he as a,M as b,G as c,Fe as d,k as u};
//# sourceMappingURL=ilvfnt6y0uusyw86.js.map