import{aL as p,r as n,m as e,aD as c}from"./nz9x58rcwaqc60b4.js";import{aG as N,ad as T}from"./ogd9t3e603yvziyi.js";import{T as r}from"./gly56lcl2lwdwbcj.js";import{ay as m}from"./or560n5qz3kpvvuq.js";import{m as d}from"./bgy2h3g6753v0xxk.js";const h=p.div`group absolute left-0 top-0 mr-1.5 h-8 overflow-hidden mt-1`;function E({highlightedCommand:t,status:a,children:s,showWorkUserSetting:i=!1,hideOnlyIfNotInteractedWith:f=!1,onOpenAnalytics:u}){const j=s!=null,[v]=n.useState(i),[o,y]=n.useState(i),[S,k]=n.useState(!1),g=a===r.Finished||a===r.Error,w=f?v?!1:!S:!1,l=a===r.Running&&"loading-shimmer";return g&&w?null:j?e.jsxs(e.Fragment,{children:[e.jsx(x,{$canShowWork:!0,children:e.jsx(m,{children:e.jsx(h,{children:e.jsx(d.button,{onClick:()=>{o||u?.(),y(W=>!W),k(!0)},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:c(l),children:e.jsxs("div",{className:"flex items-center justify-start gap-1",children:[e.jsx("span",{children:t}),o?e.jsx(N,{className:"icon-md"}):e.jsx(T,{className:"icon-md"})]})},t?.toString())})})}),e.jsx(m,{children:o&&s&&e.jsx(d.div,{initial:"collapsed",animate:"reveal",exit:"collapsed",variants:{collapsed:{translateY:-20,opacity:0,height:0},reveal:{translateY:0,opacity:1,height:"auto"}},transition:{duration:.3,ease:"easeInOut"},className:"overflow-hidden",children:s})})]}):e.jsx(x,{$canShowWork:!1,children:e.jsx(h,{className:c(l),children:t})})}const x=p.span`block first:mt-0 relative h-8
${({$canShowWork:t})=>t?"text-token-text-secondary hover:text-token-text-primary my-1.5":"text-token-text-secondary"}`;export{E as T};
//# sourceMappingURL=jwqm43jint0hvltv.js.map