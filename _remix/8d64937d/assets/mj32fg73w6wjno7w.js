import{ar as p,r as n,j as e,ak as c}from"./e9yuj0ll30e3kmlx.js";import{aG as N,ad as T}from"./mhi0wfvgf6n45t1b.js";import{T as r}from"./ixdbgduk5tyikx9n.js";import{aE as m}from"./ihoxwwe79kyl4jef.js";import{m as d}from"./ogeaiwpkr6sm1oz0.js";const h=p.div`group absolute left-0 top-0 mr-1.5 h-8 overflow-hidden mt-1`;function F({highlightedCommand:t,status:a,children:s,showWorkUserSetting:i=!1,hideOnlyIfNotInteractedWith:f=!1,onOpenAnalytics:u}){const j=s!=null,[v]=n.useState(i),[o,S]=n.useState(i),[k,y]=n.useState(!1),g=a===r.Finished||a===r.Error,w=f?v?!1:!k:!1,l=a===r.Running&&"loading-shimmer";return g&&w?null:j?e.jsxs(e.Fragment,{children:[e.jsx(x,{$canShowWork:!0,children:e.jsx(m,{children:e.jsx(h,{children:e.jsx(d.button,{onClick:()=>{o||u?.(),S(W=>!W),y(!0)},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:c(l),children:e.jsxs("div",{className:"flex items-center justify-start gap-1",children:[e.jsx("span",{children:t}),o?e.jsx(N,{className:"icon-md"}):e.jsx(T,{className:"icon-md"})]})},t?.toString())})})}),e.jsx(m,{children:o&&s&&e.jsx(d.div,{initial:"collapsed",animate:"reveal",exit:"collapsed",variants:{collapsed:{translateY:-20,opacity:0,height:0},reveal:{translateY:0,opacity:1,height:"auto"}},transition:{duration:.3,ease:"easeInOut"},className:"overflow-hidden",children:s})})]}):e.jsx(x,{$canShowWork:!1,children:e.jsx(h,{className:c(l),children:t})})}const x=p.span`block first:mt-0 relative h-8
${({$canShowWork:t})=>t?"text-token-text-secondary hover:text-token-text-primary my-1.5":"text-token-text-secondary"}`;export{F as T};
//# sourceMappingURL=mj32fg73w6wjno7w.js.map