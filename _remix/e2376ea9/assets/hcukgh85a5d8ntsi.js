import{aw as w,ew as l,Z as T,aL as g,r as u,a6 as o,U as E,aj as I,aY as m,f0 as v,f1 as b}from"./b0yd4b4kjz1x36ki.js";import{C as _,a as C}from"./fit2ha3t6z5robsl.js";import{a as D}from"./o7rdjhxa9woiizhq.js";import"./jlqp13yfbhxd71e2.js";import{a7 as W,a8 as S,cT as B,c8 as L,ed as y,ee as j}from"./b96clgxumfjg5jjm.js";import{a$ as O,b0 as A}from"./coaq057lk9sfedb2.js";import{c as R}from"./noyz6av1ocaw3cxv.js";import"./h5ufi5bch677ipz3.js";import"./ilm2a2yioj15f7xd.js";import"./khpgin38dhkqymea.js";import"./jb9kjkhndho3i15k.js";import"./dytnb75iigquej3g.js";import"./srbowbdpouoh01hw.js";import"./ft25f52m4p13jgsj.js";import"./dbv04stdtm3q06nn.js";import"./caqxvw1v1yl9l61x.js";import"./kw9ddor7oc85so5w.js";import"./iyibwghquy0bm3wp.js";import"./jq2hxkuwup9sbzd1.js";import"./n9zf798cnlfrlnfg.js";import"./d1fbijmf8yzjrbz2.js";import"./eg1obrepv9nobkuo.js";import"./mg44h51t7jaa7rga.js";import"./dop6y0snbfj7b396.js";import"./c3mzt1qwgy8ysm2n.js";import"./bwswffjc0btm1bxn.js";const $=R("Dismiss16Regular","16",["m2.59 2.72.06-.07a.5.5 0 0 1 .63-.06l.07.06L8 7.29l4.65-4.64a.5.5 0 0 1 .7.7L8.71 8l4.64 4.65c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L8 8.71l-4.65 4.64a.5.5 0 0 1-.7-.7L7.29 8 2.65 3.35a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"]);function p(s,r){return s/r}function x(){const[n,e]=u.useState({titleBarHeight:32,buttonWidth:46,iconSize:16}),{value:t}=E("842034403");return u.useEffect(()=>{if(!t)return;const i=async()=>{const a=await window.getScreenDetails(),d=window.devicePixelRatio/a.currentScreen.devicePixelRatio;e({titleBarHeight:p(32,d),buttonWidth:p(46,d),iconSize:p(16,d)})};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[t]),n}function N({onNewThread:s,onOpenInMainWindow:r,onClose:c}){const n=I(),{titleBarHeight:e,buttonWidth:t,iconSize:i}=x(),a=n.formatMessage({id:"DAjGx7",defaultMessage:"New chat"}),d=n.formatMessage({defaultMessage:"Open in main window",id:"CompanionWindow.openInMainWindow1"}),h=n.formatMessage({id:"/LZfgc",defaultMessage:"Close"});return o.jsxs("div",{className:"draggable no-draggable-children fixed top-0 flex w-full justify-between",style:{height:`${e}px`},children:[o.jsx(m,{label:a,sideOffset:4,side:"bottom",children:o.jsx(f,{onClick:s,"aria-label":a,style:{height:`${e}px`,width:`${t}px`},children:o.jsx(O,{style:{height:`${i}px`,width:`${i}px`}})})}),r&&o.jsx(m,{label:d,sideOffset:4,side:"bottom",className:"ml-auto",children:o.jsx(f,{onClick:r,"aria-label":d,style:{height:`${e}px`,width:`${t}px`},children:o.jsx(A,{style:{height:`${i}px`,width:`${i}px`}})})}),o.jsx(m,{label:h,sideOffset:4,side:"bottom",children:o.jsx(F,{onClick:c,"aria-label":h,style:{height:`${e}px`,width:`${t}px`},children:o.jsx($,{style:{height:`${i}px`,width:`${i}px`}})})})]})}const f=w.button`flex items-center justify-center cursor-default hover:bg-gray-200 active:bg-gray-100 dark:hover:bg-gray-600 dark:active:bg-gray-700`,F=w.button`flex items-center justify-center cursor-default hover:bg-red-500 hover:text-white active:bg-red-400 active:text-white`;function M({onNewThread:s,onOpenInMainWindow:r,onClose:c,children:n}){const e=u.useRef(null),{titleBarHeight:t}=x(),i=L();return o.jsxs("div",{className:"flex h-full w-full flex-col",style:{paddingTop:i?void 0:`${t}px`,"--screen-titlebar-height":`${t}px`},ref:e,children:[o.jsx(N,{onNewThread:s,onOpenInMainWindow:r,onClose:c}),n]})}function H({clientThreadId:s}){const r=l.useStore(),c=T(),n=W(t=>S.resolveThreadId(s,t)),e=g();return u.useEffect(()=>{if(!e)return;function t(a){a.key==="Escape"&&!a.shiftKey&&!a.ctrlKey&&!a.metaKey&&!a.altKey&&l.hide()}function i(){e&&y()&&l.hide()}return e.document.addEventListener("keydown",t),e.addEventListener("blur",i),()=>{e.document.removeEventListener("keydown",t),e.removeEventListener("blur",i)}},[e]),o.jsx(M,{onNewThread:()=>{r.newThread(!0)},onOpenInMainWindow:n!==s||!B(s)?()=>{c(`/c/${s}`),r.newThread(!0),l.focusMainWindow()}:void 0,onClose:()=>{l.hide()},children:o.jsx(_,{clientThreadId:s})})}function pe(){const{value:s}=E("3653083604"),{isOpen:r}=j(),c=D(i=>i.isVoiceModeActive),n=s&&!r&&!c,{clientThreadId:e}=l.useState(),t=l.useStore();if(u.useEffect(()=>{n&&!e&&t.newThread(!1)},[n,e,t]),!(!n||!e))return o.jsx(C,{features:`${v}=${b.COMPANION}`,children:o.jsx(H,{clientThreadId:e})})}export{pe as DesktopCompanionWindowController};
//# sourceMappingURL=hcukgh85a5d8ntsi.js.map