import{a2 as p,d_ as a,bC as f,T as h,r as c,l as e,W as w,bT as x,eD as b,eE as g}from"./kexrdnttddh7qzt6.js";import{C as v,a as C}from"./kvhd3yx1n71niwak.js";import{e5 as W,c as m}from"./kbiqh4382wehgkqs.js";import{b6 as j,b7 as y}from"./gukghwx1w2wt60o7.js";import{d as E,a as T,i as S}from"./e2pyafzb82ijtxoo.js";import{c as k}from"./lt7gct56f27mkoyz.js";import"./m3suotb2kdzp3nq3.js";import"./pcze8pakrqd1wcyc.js";import"./dqrm07f83dsa3vts.js";import"./f29uy9wy2omzvjqd.js";import"./c57f1aogbgmodxil.js";import"./cb8zko7art8nvyzt.js";import"./hws19ll2nuxbz6ke.js";import"./dg6ryjaqq03jv6n1.js";import"./inl7g1nupbgfgd2w.js";import"./ca7unlhgrz2u1cog.js";import"./l1v4ozua6xh9x4sy.js";import"./n0jil0j1403wvw54.js";import"./i6xcv697pfw205k7.js";import"./gcg54mujpz2xfwtj.js";import"./ow9s4cb6jxf218c1.js";import"./jwncpbabjtovk61p.js";import"./cwe6kp96m6p56ec2.js";import"./d25d1lrjjun5qaoa.js";import"./e4fql0g8i7iowtej.js";import"./cm1ori5usrbosu4x.js";import"./bqr6al75rygnttj7.js";import"./kgr94pa8j09816d0.js";import"./mqt8ma5t2ze5cot7.js";import"./i2l5hq5zgnuspzws.js";import"./hmig5dzvxoboh2wi.js";import"./75wj0b5pdv0deay3.js";import"./odw816q8jb6i4857.js";import"./b3594fo2anq23gib.js";import"./fjxlokfpy71hapsb.js";const L=k("Dismiss16Regular","16",["m2.59 2.72.06-.07a.5.5 0 0 1 .63-.06l.07.06L8 7.29l4.65-4.64a.5.5 0 0 1 .7.7L8.71 8l4.64 4.65c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L8 8.71l-4.65 4.64a.5.5 0 0 1-.7-.7L7.29 8 2.65 3.35a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"]);function N({onNewThread:t,onOpenInMainWindow:i,onClose:s}){const r=w(),o=r.formatMessage({id:"cHkwhd",defaultMessage:"New chat"}),n=r.formatMessage({id:"BzpJ40",defaultMessage:"Open in Main Window"}),l=r.formatMessage({id:"63wWYx",defaultMessage:"Close"});return e.jsxs("div",{className:"draggable no-draggable-children fixed top-0 flex h-[32px] w-full justify-between",children:[e.jsx(m,{label:o,sideOffset:4,side:"bottom",children:e.jsx(u,{onClick:t,"aria-label":o,children:e.jsx(j,{})})}),i&&e.jsx(m,{label:n,sideOffset:4,side:"bottom",className:"ml-auto",children:e.jsx(u,{onClick:i,"aria-label":n,children:e.jsx(y,{})})}),e.jsx(m,{label:l,sideOffset:4,side:"bottom",children:e.jsx(O,{onClick:s,"aria-label":l,children:e.jsx(L,{})})})]})}const u=p.button`flex h-full w-[46px] cursor-default items-center justify-center hover:bg-gray-200 active:bg-gray-100 dark:hover:bg-gray-600 dark:active:bg-gray-700`,O=p.button`flex h-full w-[46px] cursor-default items-center justify-center hover:bg-red-500 hover:text-white active:bg-red-400 active:text-white`;function M({onNewThread:t,onOpenInMainWindow:i,onClose:s,children:r}){const o=c.useRef(null);return e.jsxs("div",{className:"flex h-full w-full flex-col pt-8",ref:o,children:[e.jsx(N,{onNewThread:t,onOpenInMainWindow:i,onClose:s}),r]})}function D({clientThreadId:t}){const i=a.useStore(),s=f(),r=E(n=>T.resolveThreadId(t,n)),o=h();return c.useEffect(()=>{if(!o)return;function n(d){d.key==="Escape"&&!d.shiftKey&&!d.ctrlKey&&!d.metaKey&&!d.altKey&&a.hide()}function l(){o&&W(o)&&a.hide()}return o.document.addEventListener("keydown",n),o.addEventListener("blur",l),()=>{o.document.removeEventListener("keydown",n),o.removeEventListener("blur",l)}},[o]),e.jsx(M,{onNewThread:()=>{i.newThread()},onOpenInMainWindow:r!==t||!S(t)?()=>{s(`/c/${t}`),i.newThread(),a.focusMainWindow()}:void 0,onClose:()=>{a.hide()},children:e.jsx(v,{clientThreadId:t})})}function he(){const{value:t}=x("3653083604"),{clientThreadId:i}=a.useState(),s=a.useStore();if(c.useEffect(()=>{t&&!i&&s.newThread()},[t,i,s]),!(!t||!i))return e.jsx(C,{features:`${b}=${g.COMPANION}`,children:e.jsx(D,{clientThreadId:i})})}export{he as DesktopCompanionWindowController};
//# sourceMappingURL=e7qhmlzlzo11pfq8.js.map