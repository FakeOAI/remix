import{a1 as p,dY as a,bE as f,U as h,r as m,l as e,X as w,bm as x,eG as b,eH as g}from"./ggqkrs5vmoblzdof.js";import{C as v,a as C}from"./j4v7rd8e6dk6co25.js";import{ec as W,c,ed as j}from"./q9yjk42glkz6k7z4.js";import{b3 as y,b4 as E}from"./ewkai8s4e9yar8dc.js";import{b as k,a as M,l as O}from"./b8d848azo3dhtxr3.js";import{c as S}from"./gbv1uw39asifi1jh.js";import"./hmddwd68wyz1zxhg.js";import"./i0warstii4ooeu5q.js";import"./b2ipu85lq53l0g5n.js";import"./flx3aslm8lcme041.js";import"./ox8oq6hs752ni9zr.js";import"./cpxgbmji7o6dpuj3.js";import"./nqbt8yx7mry886w9.js";import"./ewyixyddh5pmlp1p.js";import"./kcu7yb7kmfakkuk4.js";import"./iza8y8l6mmli306n.js";import"./lurjpvlfqaw76wz0.js";import"./dy0de7qsh4wsq4f7.js";import"./dnnti5ycxlkock1t.js";import"./pi90stopy4shtu36.js";import"./jlb9l8rbqx4i5ov5.js";import"./o64a6eeici4vp3h1.js";import"./o4sp6ycnliaevawi.js";import"./nk84vjeawg79ihe8.js";import"./nknlh5fqjrqo75k7.js";import"./grfy5trva0gtc1qj.js";import"./j1b37ssqqo48obtm.js";import"./fz6zlryqc5ygvbv8.js";import"./eh7h2s7qojuftokk.js";import"./djhd3vso5u446lz6.js";const L=S("Dismiss16Regular","16",["m2.59 2.72.06-.07a.5.5 0 0 1 .63-.06l.07.06L8 7.29l4.65-4.64a.5.5 0 0 1 .7.7L8.71 8l4.64 4.65c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L8 8.71l-4.65 4.64a.5.5 0 0 1-.7-.7L7.29 8 2.65 3.35a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"]);function N({onNewThread:s,onOpenInMainWindow:i,onClose:n}){const t=w(),o=t.formatMessage({id:"cHkwhd",defaultMessage:"New chat"}),r=t.formatMessage({id:"BzpJ40",defaultMessage:"Open in Main Window"}),l=t.formatMessage({id:"63wWYx",defaultMessage:"Close"});return e.jsxs("div",{className:"draggable no-draggable-children fixed top-0 flex h-[32px] w-full justify-between",children:[e.jsx(c,{label:o,sideOffset:4,side:"bottom",children:e.jsx(u,{onClick:s,"aria-label":o,children:e.jsx(y,{})})}),i&&e.jsx(c,{label:r,sideOffset:4,side:"bottom",className:"ml-auto",children:e.jsx(u,{onClick:i,"aria-label":r,children:e.jsx(E,{})})}),e.jsx(c,{label:l,sideOffset:4,side:"bottom",children:e.jsx(T,{onClick:n,"aria-label":l,children:e.jsx(L,{})})})]})}const u=p.button`flex h-full w-[46px] cursor-default items-center justify-center hover:bg-gray-200 active:bg-gray-100 dark:hover:bg-gray-600 dark:active:bg-gray-700`,T=p.button`flex h-full w-[46px] cursor-default items-center justify-center hover:bg-red-500 hover:text-white active:bg-red-400 active:text-white`;function B({onNewThread:s,onOpenInMainWindow:i,onClose:n,children:t}){const o=m.useRef(null);return e.jsxs("div",{className:"flex h-full w-full flex-col pt-[32px]",ref:o,children:[e.jsx(N,{onNewThread:s,onOpenInMainWindow:i,onClose:n}),t]})}function D({clientThreadId:s}){const i=a.useStore(),n=f(),t=k(r=>M.resolveThreadId(s,r)),o=h();return m.useEffect(()=>{if(!o)return;function r(d){d.key==="Escape"&&!d.shiftKey&&!d.ctrlKey&&!d.metaKey&&!d.altKey&&a.hide()}function l(){o&&W()&&a.hide()}return o.document.addEventListener("keydown",r),o.addEventListener("blur",l),()=>{o.document.removeEventListener("keydown",r),o.removeEventListener("blur",l)}},[o]),e.jsx(B,{onNewThread:()=>{i.newThread()},onOpenInMainWindow:t!==s||!O(s)?()=>{n(`/c/${s}`),i.newThread(),a.focusMainWindow()}:void 0,onClose:()=>{a.hide()},children:e.jsx(v,{clientThreadId:s})})}function me(){const{value:s}=x("3653083604"),{isOpen:i}=j(),n=s&&!i,{clientThreadId:t}=a.useState(),o=a.useStore();if(m.useEffect(()=>{n&&!t&&o.newThread()},[n,t,o]),!(!n||!t))return e.jsx(C,{features:`${b}=${g.COMPANION}`,children:e.jsx(D,{clientThreadId:t})})}export{me as DesktopCompanionWindowController};
//# sourceMappingURL=j17wmprgvjifxhrb.js.map