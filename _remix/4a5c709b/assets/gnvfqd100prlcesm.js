const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ns9gq0qhfk6qte48.js","assets/oekykjd73qa82yti.js","assets/dg9kyz0flvvgkn3v.js","assets/root-ehcwjjjl.css","assets/mazb227dclb16kbk.js","assets/ea8db8p61xn3dl41.js","assets/conversation-small-o5ybpv0e.css","assets/bva9obs1v3upiudq.js","assets/jc0heq139qjn0ife.js","assets/bo1eog35b5y0x36j.js","assets/fijqvyq2i9aelgx9.js","assets/doqjumb4xtfm9gdp.js","assets/cdrwkqz6w38xd7n2.js","assets/imxne7cqtt55cx4i.js","assets/kngv21ammg8f0cgt.js","assets/lazua3a0sw5bc7ay.js","assets/nz0cpjpk13dg73bg.js","assets/ckvdh4zr3d3qkx3r.js","assets/dlovdd6q6lshjreq.js","assets/bp8jgluwk7b4vfp6.js","assets/is-scrollable-element-i34sjb0l.css","assets/kf7glz0zeu5vjnly.js","assets/njq349kzc2cy5m0p.js","assets/code-composer-ne11stli.css","assets/h1rhx4gi9c9vn1f8.js","assets/dye8z9fdfvpew78r.js","assets/i9mwn264ud9x3af6.js","assets/mmqv06p9axz4hrx8.js","assets/eoll57x4secg4lm4.js","assets/dwp1tcfzacm3et2e.js","assets/gvd99e5t9ypovu38.js","assets/jq4uei78sudi2e1o.js","assets/document-composer-ofhzvcxp.css"])))=>i.map(i=>d[i]);
import{j as t,ak as c,ar as l,r as n,J as v,aq as _,I as b,an as m,ao as p}from"./oekykjd73qa82yti.js";import{m as E}from"./bva9obs1v3upiudq.js";import{F as O,b as D}from"./dg9kyz0flvvgkn3v.js";import{a8 as N,jK as x,jL as S,jM as I,jN as d,bY as H,jq as R,jO as A,jr as k}from"./ea8db8p61xn3dl41.js";import{B as w}from"./njq349kzc2cy5m0p.js";import{P as h}from"./imxne7cqtt55cx4i.js";import{u as P}from"./kngv21ammg8f0cgt.js";const z="py-[0.108em]",M="selection-highlight",us={code:`${z} bg-[Highlight]`,document:`${M} bg-[Highlight]`},u={code:"flex justify-start pt-2 h-full",document:"flex h-full justify-center"},fs="shadow-xl",T={blockCommentHover:"z-[-1]",collapsedComment:"z-0",composer:"z-10",expandedComment:"z-10",chatOverlay:"z-20",commentGutter:"z-20",expandedCommentHovered:"z-30",expandedCommentFocused:"z-40",toolbar:"z-50",commentComposer:"z-50",textdocDiffLoadingOverlay:"z-[60]",acceleratorsOverlay:"z-[60]",accelerators:"z-[70]"},js={active:"!bg-blue-400/15 !text-blue-400 transition-colors",hoverActive:"!bg-blue-400/20 !text-blue-400 transition-colors"};function B({className:s,zIndexKey:r,onClick:e}){return t.jsx(E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:c("absolute inset-0",s,T[r]),onClick:e})}function C({zIndexKey:s,onClick:r}){return t.jsx(B,{zIndexKey:s,onClick:r,className:"bg-gray-50/50 dark:bg-black/50"})}const G=({onScroll:s})=>(x(({scrollTop:r})=>{s?.(r)}),null),W=({shouldScrollToTop:s})=>{const r=S();return n.useEffect(()=>{s===!0&&r({behavior:"smooth"})},[s,r]),null},F=()=>{const s=I();n.useEffect(()=>{s({behavior:"smooth"})},[s]);const[r]=d();return r?null:t.jsx("button",{onClick:()=>s({behavior:"smooth"}),className:"absolute bottom-5 right-1/2 z-10 flex h-8 w-8 translate-x-1/2 cursor-pointer items-center justify-center rounded-full border border-token-border-light bg-token-main-surface-primary bg-clip-padding text-token-text-secondary",children:t.jsx(O,{className:"icon-md text-token-text-primary"})})},V=l.section`w-full h-full flex flex-col popover bg-token-main-surface-primary`,U=({children:s,onScroll:r,shouldScrollToTop:e,scrollToBottomMode:i="top",isLoading:j=!1},y)=>t.jsxs("main",{className:"relative flex min-h-0 flex-auto flex-grow flex-col",ref:y,children:[t.jsx(N,{children:j&&t.jsx(C,{zIndexKey:"textdocDiffLoadingOverlay"})}),t.jsxs(w,{followButtonClassName:"hidden",initialScrollBehavior:"auto",className:"h-full",mode:i,children:[s,i==="bottom"&&t.jsx(F,{}),t.jsx(G,{onScroll:r}),t.jsx(W,{shouldScrollToTop:e})]})]}),X=n.forwardRef(U),q=l.header`flex items-center justify-between p-3 h-14`,K=l.h2`ml-2.5 text-base text-lg text-gray-700 dark:text-token-text-secondary truncate`,$=({onClick:s})=>{const r=v();return t.jsx(_,{label:r.formatMessage(Q.close),children:t.jsx(H,{icon:D,onClick:s})})},o=({children:s})=>t.jsx(V,{children:s});o.Title=K;o.CloseButton=$;o.Header=q;o.Content=X;const Q=b({close:{id:"Bix/Kd",defaultMessage:"Close"}}),Y=m(()=>p(()=>import("./ns9gq0qhfk6qte48.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])).then(s=>s.CodeComposer),{loading:()=>t.jsx("div",{className:u.code,children:t.jsx("div",{className:"h-full w-full px-4",children:t.jsx(h,{lines:20})})})}),ys=s=>t.jsx(Y,{...s});var f=(s=>(s.javascript="javascript",s.typescript="typescript",s.bash="bash",s.zsh="zsh",s.html="html",s.css="css",s.python="python",s.json="json",s.sql="sql",s.go="go",s.yaml="yaml",s.java="java",s.rust="rust",s.cpp="cpp",s.swift="swift",s.php="php",s.xml="xml",s.ruby="ruby",s.haskell="haskell",s.kotlin="kotlin",s.csharp="csharp",s.c="c",s.objectivec="objectivec",s.r="r",s.lua="lua",s.dart="dart",s.scala="scala",s.perl="perl",s.commonlisp="commonlisp",s.clojure="clojure",s.ocaml="ocaml",s.powershell="powershell",s.verilog="verilog",s.dockerfile="dockerfile",s.vue="vue",s.other="other",s))(f||{});function vs(s){if(R(s))switch(s){case k.CODE_REACT:return"typescript";default:return A(s.replace(/^code\//,""),Object.values(f),"other")}}var Z=(s=>(s.ALL_HIDDEN="all_hidden",s.COMMENTS_READONLY="comments_readonly",s.ENABLED="enabled",s))(Z||{});const J=36,_s=-24,L=280,g=L+J,bs=40;var ss=(s=>(s.COLLAPSED="collapsed",s.EXPANDED="expanded",s))(ss||{});const a=775,ts=580,rs=36,es=()=>{const[{width:s},r]=P(),e=s>=a+g?a:ts;return t.jsx("div",{className:c(u.document,"mt-4"),ref:r,style:{margin:`0 ${rs}px`},children:t.jsx("div",{style:{width:e},children:t.jsx(h,{lines:20})})})},os=m(()=>p(()=>import("./h1rhx4gi9c9vn1f8.js"),__vite__mapDeps([24,1,2,3,18,17,4,5,6,7,8,9,10,11,12,13,14,15,16,19,20,25,26,27,28,29,30,31,22,32])).then(s=>s.DocumentComposer),{loading:es}),Es=s=>t.jsx(os,{...s});class ls{constructor(r){this.params=r}get isReadonly(){return Object.values(this.params).some(r=>!!r)}get isHistoricalVersion(){return!!this.params.isHistoricalVersion}get isStreaming(){return!!this.params.isStreaming}get isRestoring(){return!!this.params.isRestoring}get isShowingChanges(){return!!this.params.isShowingChanges}get isReadonlyFromQueryParam(){return!!this.params.isReadonlyFromQueryParam}}const Os=s=>new ls(s);export{ys as A,Z as C,ts as D,L as E,ss as G,us as H,C as L,rs as M,js as N,B as O,g as T,T as Z,Es as a,o as b,Os as c,es as d,z as e,u as f,vs as g,bs as h,f as i,fs as j,J as k,_s as l,M as m,a as n};
//# sourceMappingURL=gnvfqd100prlcesm.js.map