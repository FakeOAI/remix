const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/l0nnuda9m7p19moh.js","assets/2dfa7mijpk96ivcu.js","assets/m7q6a5a1jrchs75r.js","assets/root-gq5hrjjg.css","assets/pc5a5cklysxf4x5p.js","assets/n1ui85qe1scppnjf.js","assets/conversation-small-ile61fj8.css","assets/g3hvxy56tv07g0h8.js","assets/jtayzke3yne0l6ll.js","assets/ep00l7qunu6c6ide.js","assets/g0du3b3b9nyfc1v8.js","assets/fzrn137102spawew.js","assets/d09qbjvn5u8bbvo8.js","assets/0tg42t7hl58xu5x8.js","assets/ezc87u1mqtncpz72.js","assets/bpihryko4plnbcot.js","assets/nwrh6um6fpjo32w3.js","assets/ie7v43g5qygpflgz.js","assets/b7xf01c2wmap518g.js","assets/foznybl24hqmoydf.js","assets/g5tb29ae6ah95rm1.js","assets/k8emwpwrfth5dcx8.js","assets/is-scrollable-element-i34sjb0l.css","assets/eqzx0545eavxswc6.js","assets/kpf6ck5up6q5nl10.js","assets/code-composer-ne11stli.css","assets/zjawjjygdnsxsaon.js","assets/oavqlc4qlkznoddo.js","assets/c1lev1f2vhxm7pq3.js","assets/iovqee4sejyy00ky.js","assets/m7lo9lwvdzttopue.js","assets/c2q24pco4kh418f7.js","assets/kv7d16qvjtvbylke.js","assets/document-composer-ofhzvcxp.css"])))=>i.map(i=>d[i]);
import{m as t,aD as o,aL as j,r as n,G as _,aJ as E,F as v,aH as c,aI as m}from"./2dfa7mijpk96ivcu.js";import{m as x}from"./g3hvxy56tv07g0h8.js";import{G as O,b as D}from"./m7q6a5a1jrchs75r.js";import{ay as d,jj as N,jk as S,be as A,jl as I,ak as p,al as R,bs as H,iE as k,jm as w,iF as z}from"./n1ui85qe1scppnjf.js";import{B as M}from"./kpf6ck5up6q5nl10.js";import{a as h}from"./ezc87u1mqtncpz72.js";import{u as P}from"./g5tb29ae6ah95rm1.js";const T="py-[0.108em]",B="selection-highlight",ys={code:`${T} bg-[Highlight]`,document:`${B} bg-[Highlight]`},u={code:"flex justify-start pt-2 h-full",document:"flex h-full justify-center"},bs="shadow-xl",G={blockCommentHover:"z-[-1]",collapsedComment:"z-0",composer:"z-10",expandedComment:"z-10",chatOverlay:"z-20",commentGutter:"z-20",expandedCommentHovered:"z-30",expandedCommentFocused:"z-40",toolbar:"z-50",commentComposer:"z-50",textdocDiffLoadingOverlay:"z-[60]",acceleratorsOverlay:"z-[60]",accelerators:"z-[70]"},js="text-blue-400 disabled:text-blue-400 bg-blue-400/15 focus-visible:bg-blue-400/15 enabled:hover:bg-blue-400/20 disabled:opacity-40";function C({className:s,zIndexKey:e,onClick:r}){return t.jsx(x.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:o("absolute inset-0",s,G[e]),onClick:r})}function F({zIndexKey:s,onClick:e}){return t.jsx(C,{zIndexKey:s,onClick:e,className:"bg-gray-50/50 dark:bg-black/50"})}const W=({onScroll:s})=>(N(({scrollTop:e})=>{s?.(e)}),null),V=({shouldScrollToTop:s})=>{const e=S();return n.useEffect(()=>{s===!0&&e({behavior:"smooth"})},[s,e]),null},U=()=>{const s=A();n.useEffect(()=>{s({behavior:"smooth"})},[s]);const[e]=I();return e?null:t.jsx("button",{onClick:()=>s({behavior:"smooth"}),className:"absolute bottom-5 right-1/2 z-10 flex h-8 w-8 translate-x-1/2 cursor-pointer items-center justify-center rounded-full border border-token-border-light bg-token-main-surface-primary bg-clip-padding text-token-text-secondary",children:t.jsx(O,{className:"icon-md text-token-text-primary"})})},X=j.section`w-full h-full flex flex-col popover bg-token-main-surface-primary`,$=({children:s,onScroll:e,shouldScrollToTop:r,scrollToBottomMode:a="top",isLoading:y=!1},b)=>t.jsxs("main",{className:"relative flex min-h-0 flex-auto flex-grow flex-col",ref:b,children:[t.jsx(d,{children:y&&t.jsx(F,{zIndexKey:"textdocDiffLoadingOverlay"})}),t.jsxs(M,{followButtonClassName:"hidden",initialScrollBehavior:"auto",className:"h-full",mode:a,children:[s,a==="bottom"&&t.jsx(U,{}),t.jsx(W,{onScroll:e}),t.jsx(V,{shouldScrollToTop:r})]})]}),q=n.forwardRef($);function K({className:s,children:e}){return p()?t.jsx(R,{leading:!0,type:"primary",className:o(s,"top-0 z-[1] h-[var(--screen-thread-header-min-height,60px)] flex-none px-3.5"),children:t.jsx("div",{className:"flex items-center justify-between gap-4",children:e})}):t.jsx("header",{className:o(s,"flex h-14 flex-none items-center justify-between gap-4 px-3"),children:e})}function Q({className:s,children:e}){const r=p();return t.jsx("h2",{className:o(s,"ml-2.5 truncate",r?"text-[17px] font-medium leading-[30px] text-token-text-secondary":"text-lg text-gray-700 dark:text-token-text-secondary"),children:e})}const Y=({onClick:s})=>{const e=_();return t.jsx(E,{label:e.formatMessage(Z.close),children:t.jsx(H,{icon:D,onClick:s})})},l=({children:s})=>t.jsx(X,{children:s});l.Title=Q;l.CloseButton=Y;l.Header=K;l.Content=q;const Z=v({close:{id:"Bix/Kd",defaultMessage:"Close"}}),J=c(()=>m(()=>import("./l0nnuda9m7p19moh.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])).then(s=>s.CodeComposer),{loading:()=>t.jsx("div",{className:u.code,children:t.jsx("div",{className:"h-full w-full px-4",children:t.jsx(h,{lines:20})})})}),_s=s=>t.jsx(J,{...s});var f=(s=>(s.javascript="javascript",s.typescript="typescript",s.bash="bash",s.zsh="zsh",s.html="html",s.css="css",s.python="python",s.json="json",s.sql="sql",s.go="go",s.yaml="yaml",s.java="java",s.rust="rust",s.cpp="cpp",s.swift="swift",s.php="php",s.xml="xml",s.ruby="ruby",s.haskell="haskell",s.kotlin="kotlin",s.csharp="csharp",s.c="c",s.objectivec="objectivec",s.r="r",s.lua="lua",s.dart="dart",s.scala="scala",s.perl="perl",s.commonlisp="commonlisp",s.clojure="clojure",s.ocaml="ocaml",s.powershell="powershell",s.verilog="verilog",s.dockerfile="dockerfile",s.vue="vue",s.other="other",s))(f||{});function Es(s){if(k(s))switch(s){case z.CODE_REACT:return"typescript";default:return w(s.replace(/^code\//,""),Object.values(f),"other")}}var g=(s=>(s.ALL_HIDDEN="all_hidden",s.COMMENTS_READONLY="comments_readonly",s.ENABLED="enabled",s))(g||{});const L=36,vs=-24,ss=280,ts=ss+L,xs=40;var es=(s=>(s.COLLAPSED="collapsed",s.EXPANDED="expanded",s))(es||{});const i=775,rs=580,os=36,Os=18,ls=()=>{const[{width:s},e]=P(),r=s>=i+ts?i:rs;return t.jsx("div",{className:o(u.document,"mt-4"),ref:e,style:{margin:`0 ${os}px`},children:t.jsx("div",{style:{width:r},children:t.jsx(h,{lines:20})})})},ns=c(()=>m(()=>import("./zjawjjygdnsxsaon.js"),__vite__mapDeps([26,1,2,3,18,17,4,5,6,7,8,9,10,11,12,13,14,15,16,19,20,21,22,27,28,29,30,31,32,24,33])).then(s=>s.DocumentComposer),{loading:ls}),Ds=s=>t.jsx(ns,{...s});class as{constructor(e){this.params=e}get isReadonly(){return Object.values(this.params).some(e=>!!e)}get isHistoricalVersion(){return!!this.params.isHistoricalVersion}get isStreaming(){return!!this.params.isStreaming}get isRestoring(){return!!this.params.isRestoring}get isShowingChanges(){return!!this.params.isShowingChanges}get isReadonlyFromQueryParam(){return!!this.params.isReadonlyFromQueryParam}}const ds=s=>new as(s);export{_s as A,g as C,ls as D,ss as E,es as G,ys as H,F as L,Os as M,js as N,C as O,ts as T,G as Z,Ds as a,l as b,ds as c,T as d,u as e,xs as f,Es as g,f as h,bs as i,L as j,vs as k,B as l,os as m,i as n,rs as o};
//# sourceMappingURL=mcxo7dfics5rwb0z.js.map