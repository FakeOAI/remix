const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sso-o0ordy3is7cqyfhc.js","assets/egi9yqe8h527q0wn.js","assets/e6itquh41uv61tg7.js","assets/root-mqr9jcw8.css","assets/fsldftql3hgxsggg.js","assets/kovfiydeinrm6blw.js","assets/conversation-small-n29wfzgk.css","assets/fv2lx90pr3xg3map.js","assets/hv5dp5z9yhve225l.js","assets/bue7ssrf5lr74ywi.js","assets/d1idnzvl0pqu9wz9.js","assets/mk14lgsmrpmo2zsf.js","assets/efbz2xeupq2vm8nx.js","assets/hjyufao59r59iwke.js","assets/mulk6actptn6vk4t.js","assets/fudx0zpt1yfrknlw.js","assets/er0ahr1yq57dmlc2.js","assets/z0c6vm4df23yv2bb.js","assets/i04pcwd992jm5mp6.js","assets/fkawcdcy1eq7glw1.js","assets/ed4yr7r1n1jkra8g.js","assets/jjgbixfnrr7f0qh3.js","assets/mgq1wtzg44y87iu2.js","assets/lew6vqidx3rgvrcj.js","assets/flyr16ctvc00vp1u.js","assets/j4qppop119es06ph.js","assets/esnat1gvfhavkz4p.js","assets/d3w35uzpylqjfq4t.js","assets/no5diehbeq5uzkos.js","assets/ffgb6cqlnn5rmgr5.js","assets/mqdz0jzpbpscyuh1.js","assets/k47fatma6a4s1ju0.js","assets/ly000ew6ys3ezbz9.js","assets/kqwdyvkaaavvn8k3.js","assets/o8ef0qyen304hbei.js","assets/l02mfs267sy7zqwa.js","assets/kdau7fbyqjqphc5h.js","assets/cbfhk7wf0lp6ezdz.js","assets/e9lafxuzyeh4418f.js","assets/rs45oebfwlfkc0d4.js","assets/hmqx94uou5mdgys6.js","assets/bzjoh1jo39slpjo5.js","assets/k06br910ge3nee84.js","assets/nhwwej1nq0zrd7sc.js","assets/itoaii0x6pbp2y4g.js","assets/jmmt8kt50szmpk6v.js","assets/g8dk0p9fqqplk9i1.js","assets/i91n50yt16oqkyc4.js","assets/o454bpu1c0xgns3r.js","assets/diemq8s9dr5y0vfm.js","assets/elp95vs8lkf3yodn.js","assets/egua8rkjrlzqa57o.js","assets/kjok3qqpzyd4jz2x.js","assets/ob86mfmf3mgwxue8.js","assets/kgbcmaztr0mh2fpl.js","assets/lyajfocluai5tj3m.js","assets/lv0rtycw52wt1lk8.js","assets/j7203wvxxu1lsat2.js","assets/kn5b5ysm9iqn7ekh.js","assets/jl28rdpcclvtsph2.js","assets/le3p8r41qbeaqkun.js","assets/fq54pyiqhdt6emap.js","assets/iej0cupg2dqkmejt.js","assets/bngzwf3qmkqndg8v.js","assets/jk8w36bsokizpx57.js","assets/louqp0wzqldquiqi.js","assets/ieqslg527rfb980v.js","assets/g33i75sjew1w3z8j.js","assets/hb6lghr92jcoc968.js","assets/dt5muwk0s9zorngf.js","assets/kefzn796srd2xhnv.js","assets/k63hcl256h5irly1.js","assets/carousel-bss5aguy.css","assets/iwxx3c896o976984.js","assets/nm04jgpfyxi6pn12.js"])))=>i.map(i=>d[i]);
import{r as C,bP as L,aH as F,aN as I,h as P,j as E,aD as A,aE as U,l as t,m as S,Q as q,f0 as H,bg as D,b5 as R,a0 as Q}from"./egi9yqe8h527q0wn.js";import{G as K}from"./kjok3qqpzyd4jz2x.js";import{eG as O,a4 as z,c5 as B,cC as W,eH as $,eI as J,aM as T,eJ as j,eK as V,ao as _,eL as X,Q as Y,eM as Z,eN as ee,a7 as te}from"./kovfiydeinrm6blw.js";import{a as se,T as re,n as ae,i as ne,x as oe}from"./d1idnzvl0pqu9wz9.js";import{g as ie,t as le,a as ce}from"./fkawcdcy1eq7glw1.js";import{I as de,b as ue,a as me}from"./bue7ssrf5lr74ywi.js";import{u as pe,t as xe}from"./ed4yr7r1n1jkra8g.js";import{m as w}from"./hv5dp5z9yhve225l.js";import{G as M}from"./louqp0wzqldquiqi.js";function k(){const{store:e}=O(),a=e.useSharedProps(),r=de(),{clearSearchModeTrigger:n,getSearchModeTrigger:i}=pe();return C.useCallback(async(s,o,c)=>{if(!a)return;const{clientThreadId:l,currentLeafId:d,onCreateNewCompletion:p,onResetState:x,conversationMode:h}=a;z.hideThreadHeader();const m=`${d}-nextPrompt`,v=new B,f=r.has(W.Search),g=f?i():void 0;await p({promptId:m,content:ie(s),eventMetadata:{eventSource:"mouse"},completionMetadata:{suggestions:o,conversationMode:h??se.getConversationMode(l),systemHints:[...r],searchSource:g},messageMetadata:{is_starter_prompt:!0,suggestion_type:s.type},turnTracker:v});const u=re.getTree(l).getMessageId(m);x(),le(s,c,l,u),xe(),g&&f&&n()},[a,r,i,n])}function y(e){return(j(e)?e.promptStarters:e.gizmo.display.prompt_starters)?.map(a=>({type:T.Starter,title:"",body:a,prompt:a}))}function he(e,a,r,n,i,s){const o=L(),c=ae(a),l=ue(c?.kind===F.GizmoInteraction?c.gizmo_id:void 0).data,{gizmoEditorData:d,mode:p}=$(),x=J(c),h=I(),m=e&&!x&&(n||!h?.isEnterprisey()),{data:v,isLoading:f,isSuccess:g,isError:b}=P({queryKey:["promptStarters",a,r,i,s],queryFn:()=>E.getSampledPromptStarter(r,i,s),enabled:m});return o==null?{promptStarters:[],isLoading:!0,isSuccess:!1}:p==="test"&&d?{promptStarters:y(d)??[],isLoading:!1,isSuccess:!0}:l!=null?{promptStarters:y(l),isLoading:!1,isSuccess:!0}:m?{promptStarters:v?.items.map(u=>({type:T.Starter,id:u.id,title:u.title,body:u.description,prompt:u.prompt,category:u.category,oneliner:u.oneliner,theme:u.theme,requires_file_upload:u.requires_file_upload}))??[],isLoading:f,isSuccess:g,isError:b}:{promptStarters:[],isLoading:!1,isSuccess:!0}}const fe=A(()=>U(()=>import("./sso-o0ordy3is7cqyfhc.js").then(e=>e.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74])).then(e=>e.CaNewThreadSplash).catch(()=>()=>null));function Fe({clientThreadId:e}){const{isUnauthenticated:a}=q(),r=!a,n=ne(e),i=oe(e),s=H(),o=_(),c=k(),l=me(e),d=X(l),{promptStarters:p,isSuccess:x,isError:h}=he(n&&!i,e,o?2:4,void 0,void 0,l??void 0),m=p&&p?.length>0,v=x&&m&&r&&!d,{layer:f}=D("4031588851"),g=f.get("is_two_line",!1);return t.jsx(t.Fragment,{children:t.jsx(Y,{children:(h||x)&&t.jsxs(t.Fragment,{children:[t.jsx(R,{className:`h-12 w-12 ${r?"":"max-sm:hidden"}`}),v&&t.jsx(ge,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},promptStarters:p,onSelectStarterPrompt:c,isSendBlocked:s,clientThreadId:e,isTwoLine:g}),!m&&r&&!d&&t.jsx(N,{}),d?t.jsx(fe,{}):null,h&&r&&t.jsx(N,{})]})})})}function N(){return t.jsx("div",{className:"mt-7 text-3xl",children:t.jsx(Q,{id:"24tuqq",defaultMessage:"Hi, how can I help?"})})}function ge({promptStarters:e,onSelectStarterPrompt:a,isSendBlocked:r,clientThreadId:n,isTwoLine:i,...s}){return C.useEffect(()=>{ce(e,n)},[n]),t.jsx(t.Fragment,{children:i?t.jsx(w.div,{...s,className:"absolute bottom-6 w-full px-4",children:t.jsx(Z,{children:t.jsx(ve,{starterPrompts:e,onSelectStarterPrompt:a,disabled:r})})}):t.jsx(w.div,{...s,children:t.jsx(G,{starterPrompts:e,onSelectStarterPrompt:a,disabled:r})})})}const Se=/\s/;function G({starterPrompts:e,onSelectStarterPrompt:a,disabled:r,cssMobileDisplayLimit:n,marginOverride:i}){let s=e.map((o,c)=>{let l=o.oneliner??o.title;l===""&&(l=o.body);const d=Se.test(l);return t.jsxs("button",{className:S(n!==void 0&&c>=n&&"max-sm:hidden","relative flex w-40 flex-col gap-2 rounded-2xl border border-token-border-light px-3 pb-4 pt-3 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed"),disabled:r,onClick:()=>a(o,e,c),children:[t.jsx(V,{starterPrompt:o}),t.jsx("div",{className:S("line-clamp-3 max-w-full text-balance text-gray-600 dark:text-gray-500",d?"break-word":"break-all"),children:l})]},o.id??c)});if(s.length>2){const o=Math.floor(s.length/2);s=[s.slice(0,o),s.slice(o)].map((c,l)=>t.jsx("div",{className:"flex max-w-3xl flex-wrap items-stretch justify-center gap-4",children:c},l))}return t.jsx("div",{className:S("mx-3 flex max-w-3xl flex-wrap items-stretch justify-center gap-4",i??"mt-12"),children:s})}function ve({starterPrompts:e,onSelectStarterPrompt:a,disabled:r}){let n=e.map((s,o)=>t.jsx("button",{className:"relative whitespace-nowrap rounded-2xl border border-token-border-light px-4 py-2 text-start align-top text-[15px] shadow-xxs transition enabled:hover:bg-token-main-surface-secondary disabled:cursor-not-allowed",disabled:r,onClick:()=>a(s,e,o),children:t.jsxs("div",{className:"flex flex-col overflow-hidden",children:[s.title&&t.jsx("div",{className:"truncate font-semibold",children:s.title}),t.jsx("div",{className:S("truncate font-normal",s.title?"opacity-50":""),children:s.body})]})},s.id??o));const i=Math.floor(n.length/2);return n=[n.slice(0,i),n.slice(i)].map((s,o)=>t.jsx("div",{className:"flex flex-col gap-2",children:s},o)),t.jsx("div",{className:"grid w-full grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2",children:n})}function Ie({gizmo:e,hideOwner:a=!1,children:r,className:n,avatarClassName:i,showStarterPrompts:s=!1,disableStarterPrompts:o=!1}){return e==null?null:t.jsx(t.Fragment,{children:t.jsxs("div",{className:S("flex h-full flex-col items-center justify-center text-token-text-primary",n),children:[t.jsx(je,{gizmo:e,avatarClassName:i}),t.jsx(be,{gizmo:e,hideOwner:a,showStarterPrompts:s,disableStarterPrompts:o}),r]})})}function je({gizmo:e,avatarClassName:a}){const r=!!(e!=null&&ee(e)&&e?.gizmo.tags?.includes(te.FirstParty));return t.jsx("div",{className:"relative",children:t.jsx(K,{isFirstParty:r||!e,src:e!=null&&j(e)?e.profilePictureUrl:e?.gizmo.display.profile_picture_url,className:S("mb-3 h-12 w-12",a)})})}function ye({gizmo:e,disabled:a}){const r=y(e),n=k(),i=_();if(r==null||r.length===0)return null;const s=r.slice(0,i?2:4);return t.jsx(G,{starterPrompts:s,onSelectStarterPrompt:n,disabled:a})}function be({gizmo:e,hideOwner:a,showStarterPrompts:r,disableStarterPrompts:n}){const i=e!=null&&j(e)?e.name:e?.gizmo.display.name,s=e!=null&&j(e)?e.description:e?.gizmo.display.description;return t.jsxs("div",{className:"flex flex-col items-center gap-2",children:[t.jsx("div",{className:"text-center text-2xl font-semibold",children:i}),!a&&t.jsx("div",{className:"flex items-center gap-1 text-token-text-tertiary",children:t.jsx(t.Fragment,{children:e&&j(e)?t.jsx(M,{gizmo:e}):t.jsx(M,{gizmo:e,socials:e.gizmo.author.display_socials})})}),s&&t.jsx("div",{className:"max-w-md text-center text-sm font-normal text-token-text-primary",children:s}),r&&t.jsx(ye,{gizmo:e,disabled:n})]})}export{Ie as G,je as L,ve as S,he as a,N as b,G as c,Fe as d,k as u};
//# sourceMappingURL=j6ontdtp704853qp.js.map