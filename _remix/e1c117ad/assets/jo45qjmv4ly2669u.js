const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/k2e6su7r7aotbpyc.js","assets/ns1tfo6glfhr2njn.js","assets/jeba75ammv4sijqh.js","assets/root-jhvoex1m.css","assets/f4axing0y0uimu3h.js","assets/lnlvqx2sg8j5t2nm.js","assets/conversation-small-ict01xsi.css","assets/dxxsw577akyd0slr.js","assets/bf1fa2lxk3a560fa.js","assets/bg8zaety70bid1mn.js","assets/e947clt63wzokhjj.js","assets/b18gqf291rre3pmr.js","assets/bp8s1e0xdpx41ov5.js","assets/dm95sr2w80ve06wg.js","assets/ivgpo5nrepdzyqp7.js","assets/bk3hsgjed6qvj0wl.js","assets/evn5zm2tjn42ro46.js","assets/n647tcibatqrw7np.js","assets/mnp3zbnvvsr2wfqq.js","assets/g7zewj87vd50b090.js","assets/is-scrollable-element-i34sjb0l.css","assets/c77fe073gd6jw1kz.js","assets/obsnxi9d52vyw6j4.js","assets/code-composer-ne11stli.css","assets/d1fwwqckc7k7hckz.js","assets/lrc87yglljcdt36m.js","assets/n7cnhtxkut372o2k.js","assets/oi6ocqzrn125jvmt.js","assets/bb55p8t3xqbx6xyj.js","assets/jfqq8qv0m44zgfjc.js","assets/fm81gxdx7yh851yo.js","assets/ll1x6vhhgznx1jro.js","assets/document-composer-ofhzvcxp.css"])))=>i.map(i=>d[i]);
import{j as t,ar as c,ay as l,r as n,J as _,ax as E,I as b,au as m,av as p}from"./ns1tfo6glfhr2njn.js";import{m as y}from"./bf1fa2lxk3a560fa.js";import{F as O,b as D}from"./jeba75ammv4sijqh.js";import{a9 as x,jl as N,jm as S,jn as I,jo as A,b_ as H,j4 as d,jp as k,j5 as w}from"./lnlvqx2sg8j5t2nm.js";import{B as z}from"./obsnxi9d52vyw6j4.js";import{P as h}from"./dm95sr2w80ve06wg.js";import{u as P}from"./ivgpo5nrepdzyqp7.js";const R="py-[0.108em]",M="selection-highlight",hs={code:`${R} bg-[Highlight]`,document:`${M} bg-[Highlight]`},f={code:"flex justify-start pt-2 h-full",document:"flex h-full justify-center"},fs="shadow-xl",T={blockCommentHover:"z-[-1]",collapsedComment:"z-0",composer:"z-10",expandedComment:"z-10",chatOverlay:"z-20",commentGutter:"z-20",expandedCommentHovered:"z-30",expandedCommentFocused:"z-40",toolbar:"z-50",commentComposer:"z-50",textdocDiffLoadingOverlay:"z-[60]",acceleratorsOverlay:"z-[60]",accelerators:"z-[70]"},us={active:"!bg-blue-400/15 !text-blue-400 transition-colors",hoverActive:"!bg-blue-400/20 !text-blue-400 transition-colors"};function B({className:s,zIndexKey:r,onClick:e}){return t.jsx(y.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:c("absolute inset-0",s,T[r]),onClick:e})}function G({zIndexKey:s,onClick:r}){return t.jsx(B,{zIndexKey:s,onClick:r,className:"bg-gray-50/50 dark:bg-black/50"})}const C=({onScroll:s})=>(N(({scrollTop:r})=>{s?.(r)}),null),W=({shouldScrollToTop:s})=>{const r=S();return n.useEffect(()=>{s===!0&&r({behavior:"smooth"})},[s,r]),null},F=()=>{const s=I();n.useEffect(()=>{s({behavior:"smooth"})},[s]);const[r]=A();return r?null:t.jsx("button",{onClick:()=>s({behavior:"smooth"}),className:"absolute bottom-5 right-1/2 z-10 flex h-8 w-8 translate-x-1/2 cursor-pointer items-center justify-center rounded-full border border-token-border-light bg-token-main-surface-primary bg-clip-padding text-token-text-secondary",children:t.jsx(O,{className:"icon-md text-token-text-primary"})})},U=l.section`w-full h-full flex flex-col popover bg-token-main-surface-primary`,V=({children:s,onScroll:r,shouldScrollToTop:e,scrollToBottomMode:i="top",isLoading:j=!1},v)=>t.jsxs("main",{className:"relative flex min-h-0 flex-auto flex-grow flex-col",ref:v,children:[t.jsx(x,{children:j&&t.jsx(G,{zIndexKey:"textdocDiffLoadingOverlay"})}),t.jsxs(z,{followButtonClassName:"hidden",initialScrollBehavior:"auto",className:"h-full",mode:i,children:[s,i==="bottom"&&t.jsx(F,{}),t.jsx(C,{onScroll:r}),t.jsx(W,{shouldScrollToTop:e})]})]}),X=n.forwardRef(V),$=l.header`flex items-center justify-between p-3 h-14`,q=l.h2`ml-2.5 text-base text-lg text-gray-700 dark:text-token-text-secondary truncate`,K=({onClick:s})=>{const r=_();return t.jsx(E,{label:r.formatMessage(Z.close),children:t.jsx(H,{icon:D,onClick:s})})},o=({children:s})=>t.jsx(U,{children:s});o.Title=q;o.CloseButton=K;o.Header=$;o.Content=X;const Z=b({close:{id:"Bix/Kd",defaultMessage:"Close"}}),J=m(()=>p(()=>import("./k2e6su7r7aotbpyc.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])).then(s=>s.CodeComposer),{loading:()=>t.jsx("div",{className:f.code,children:t.jsx("div",{className:"h-full w-full px-4",children:t.jsx(h,{lines:20})})})}),js=s=>t.jsx(J,{...s});var u=(s=>(s.javascript="javascript",s.typescript="typescript",s.bash="bash",s.zsh="zsh",s.html="html",s.css="css",s.python="python",s.json="json",s.sql="sql",s.go="go",s.yaml="yaml",s.java="java",s.rust="rust",s.cpp="cpp",s.swift="swift",s.php="php",s.xml="xml",s.ruby="ruby",s.haskell="haskell",s.kotlin="kotlin",s.csharp="csharp",s.c="c",s.objectivec="objectivec",s.r="r",s.lua="lua",s.dart="dart",s.scala="scala",s.perl="perl",s.commonlisp="commonlisp",s.clojure="clojure",s.ocaml="ocaml",s.powershell="powershell",s.verilog="verilog",s.dockerfile="dockerfile",s.vue="vue",s.other="other",s))(u||{});function vs(s){if(d(s))switch(s){case w.CODE_REACT:return"typescript";default:return k(s.replace(/^code\//,""),Object.values(u),"other")}}var Y=(s=>(s.ALL_HIDDEN="all_hidden",s.COMMENTS_READONLY="comments_readonly",s.ENABLED="enabled",s))(Y||{});const Q=36,_s=-24,L=280,g=L+Q,Es=40;var ss=(s=>(s.COLLAPSED="collapsed",s.EXPANDED="expanded",s))(ss||{});const a=775,ts=580,rs=36,es=()=>{const[{width:s},r]=P(),e=s>=a+g?a:ts;return t.jsx("div",{className:c(f.document,"mt-4"),ref:r,style:{margin:`0 ${rs}px`},children:t.jsx("div",{style:{width:e},children:t.jsx(h,{lines:20})})})},os=m(()=>p(()=>import("./d1fwwqckc7k7hckz.js"),__vite__mapDeps([24,1,2,3,18,17,4,5,6,7,8,9,10,11,12,13,14,15,16,19,20,25,26,27,28,29,30,31,22,32])).then(s=>s.DocumentComposer),{loading:es}),bs=s=>t.jsx(os,{...s});export{js as A,Y as C,ts as D,L as E,ss as G,hs as H,G as L,rs as M,us as N,B as O,g as T,T as Z,bs as a,o as b,es as c,R as d,f as e,Es as f,vs as g,M as h,u as i,fs as j,Q as k,_s as l,a as m};
//# sourceMappingURL=jo45qjmv4ly2669u.js.map