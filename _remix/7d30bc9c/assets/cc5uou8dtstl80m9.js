import{r as o,a4 as V,j as e,b3 as T,O as Q,P as N,A as S,c as x,w as X,aq as J,cw as $,K as f}from"./ntq5iea1ifpghbh4.js";import{c as _,T as Y,d as L,a as Z,C as ee,b as te,F as ae,g as se}from"./gf6n3imm7llmk62i.js";import{T as re,R as ne,bf as H,aE as O,aX as oe,aY as R,bg as ie,bh as le}from"./nf0qvn7pzl3qf9lm.js";import{c as ce}from"./fs8mv9ym7ioqi7b7.js";import{S as k}from"./b949dcaljf2jwn2n.js";import{bg as B,bK as I,cM as de,l as E,cN as z,A as me,bJ as F}from"./dsu6tzr1kwqiabf1.js";import{C as W}from"./l9sr2synhxmui7x9.js";import{u as ue,y as xe,v as fe,x as pe,Q as he}from"./nc052w5b3nznd337.js";import{m as M}from"./kvw8la6c9wu9haqx.js";import"./cf79rvi4vrtumun5.js";import"./mxr1gkel101vt03l.js";import"./nm04jgpfyxi6pn12.js";import"./i9xc6p3b6vuip4va.js";import"./lxfvr7rgrfnzl9f9.js";import"./acdldifcymtj98g5.js";import"./oyd8m12rmt9g40i3.js";import"./nsh1luyr88ky6rko.js";import"./meqv2ckejcfx1drf.js";import"./ht9npwfvs0wuam4g.js";import"./l37bscsjwcvff8qq.js";import"./2suora4w4t5kcn2e.js";import"./iwfhsd4skatxuvzf.js";import"./kz724jq7899jyczt.js";import"./btzc6qd5086xdpyx.js";function ge(t){const a=o.useRef(!1);return()=>{a.current||(t(),a.current=!0)}}const G=300,je=350;function Je({visualization:t,clientThreadId:a,expanded:n=!1}){return t.type==="chart"?t.fallback_image==null?(V.addError("Chart visualizations require a fallback image message"),null):t.fallback_to_image?t.fallback_image==null?(V.addError("No fallback image message provided for fallback chart"),null):e.jsx(Ce,{visualization:t,expanded:n}):e.jsx(ke,{visualization:t,clientThreadId:a,expanded:n}):t.type==="table"?e.jsx(be,{visualization:t,expanded:n}):(V.addError("Unsupported visualization type",t.type),null)}function be({visualization:t,expanded:a}){const n=B(),c=n&&!a,{isLoading:r,data:s,isError:u}=ue(t),[p,l]=o.useState(),g=o.useCallback(()=>{s&&_(s.download_url)},[s]),[b,h]=o.useState(0),[y,C]=o.useState(0),j=o.useRef(null);let d;s&&(Array.isArray(s.content)?d=s.content.find(i=>i.name===p)??s.content[0]:d=s.content);const m=()=>{j.current&&C(j.current.offsetWidth)};return o.useEffect(()=>(m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)),[]),o.useEffect(()=>{const i=()=>{const v=window.innerHeight-48;h(v)};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),u?e.jsx(U,{fileName:t.title}):e.jsx(D,{ref:j,focusObject:{type:I.ADAVisualization,visualization:t},title:e.jsxs(e.Fragment,{children:[t.title,!c&&Array.isArray(s==null?void 0:s.content)&&e.jsxs(k.Root,{defaultValue:p,onValueChange:i=>{l(i)},children:[e.jsxs(k.Trigger,{className:"m-0 h-4 bg-transparent p-1 text-xs font-semibold",children:[p??s.content[0].name,e.jsx(k.Icon,{})]}),e.jsx(k.Portal,{children:e.jsx(k.Content,{children:s.content.map(i=>e.jsx(k.Item,{className:"text-xs font-semibold",value:i.name??"",children:i.name},i.name))})})]})]}),onDownload:g,expanded:a,children:r||d==null?e.jsx("div",{className:"flex w-full items-center justify-center",children:e.jsx(T,{})}):e.jsx("div",{className:"border-t border-token-border-light",children:e.jsx(Y,{table:{...d,name:t.title,sheetName:p},height:a?b:G,width:y,isInFocusedView:n})})})}function ye({showStatic:t,setShowStatic:a}){return e.jsx(E,{side:"top",sideOffset:4,label:t?e.jsx(f,{id:"o0thnT",defaultMessage:"Switch to interactive chart"}):e.jsx(f,{id:"cigiQO",defaultMessage:"Switch to static chart"}),children:e.jsx("button",{className:"flex",onClick:()=>{a(!t)},children:t?e.jsx(oe,{className:"icon-md text-token-text-tertiary hover:text-token-text-primary"}):e.jsx(R,{className:"icon-md text-token-text-tertiary hover:text-token-text-primary"})})})}function ve({type:t}){return e.jsx(we,{children:t==="chart"?e.jsxs(e.Fragment,{children:[e.jsx(f,{id:"XBhWwK",defaultMessage:"Now interactive! (Beta)"})," ",e.jsx(R,{className:"icon-md"})]}):e.jsx(f,{id:"N0TMRs",defaultMessage:"Now interactive!"})})}const we=Q.div`flex flex-shrink-0 cursor-pointer flex-nowrap items-center gap-1 rounded-lg bg-blue-selection/[0.1] py-1 pl-2 pr-1.5 text-xs font-semibold text-blue-selection`;function ke({visualization:t,clientThreadId:a,expanded:n}){const{isLoading:c,data:r,isError:s}=xe(t),u=o.useRef(null),p=fe(),[l,g]=o.useState(!p),b=o.useCallback(async()=>{if(l&&t.fallback_image)N.logEvent(S.adaDownloadedStaticChart),await L(t.fallback_image);else if(u.current){const m=u.current.getBase64Image();m&&(N.logEvent(S.adaDownloadedInteractiveChart),_(m,`${t.title}.png`))}},[t.fallback_image,l,u,t.title]),[h,y]=o.useState(void 0),C=ce(a),j=ge(()=>{N.logEvent(S.adaToggledInteractiveChart,{conversationId:C})}),d=m=>{j(),g(m)};return o.useEffect(()=>{N.logEvent(S.adaInteractiveChartShown)},[]),o.useEffect(()=>{if(r&&r.content!==h){const{chart_type:m,datasets:i,labels:w}=r.content,v=r.content;v.datasets=i.map((A,K)=>{const q=Z(m,A,K);return{...A,colors:q}}),v.labels=Array.isArray(w)?w:[w],y(v)}},[h,r]),s?e.jsx(U,{fileName:t.title}):e.jsx(D,{focusObject:{type:I.ADAVisualization,visualization:t},title:t.title,onDownload:b,additionalActions:[e.jsx(ye,{showStatic:l,setShowStatic:d},0),e.jsx(ee,{chartData:h,setChartData:y},1)],expanded:n,children:c||h==null?e.jsx("div",{className:"flex w-full items-center justify-center",children:e.jsx(T,{})}):l&&t.fallback_image?e.jsx(W,{jupyterMessage:t.fallback_image}):e.jsx(te,{ref:u,chart:h})})}function Ce({visualization:t,expanded:a}){const[n,c]=o.useState(!1),r=pe(),s=o.useCallback(async()=>{t.fallback_image&&await L(t.fallback_image)},[t.fallback_image]);return t.fallback_image==null?null:e.jsx(D,{focusObject:{type:I.ADAVisualization,visualization:t},title:t.title,onDownload:s,expanded:a,children:e.jsx("div",{className:x("h-full w-full",a&&"cursor-pointer items-center justify-center"),onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:e.jsxs("div",{className:x("relative flex h-full cursor-pointer items-center justify-center",!a&&"w-full"),children:[e.jsx(W,{jupyterMessage:t.fallback_image}),r&&e.jsx(ae,{isHovered:n})]})})})}const D=X.forwardRef(({focusObject:t,title:a="",onDownload:n=()=>{},additionalActions:c=[],expanded:r=!1,children:s},u)=>{const p=B(),l=de(),g=l&&l.type===I.ADAVisualization&&l.type===t.type&&l.visualization.file_id===t.visualization.file_id&&t.visualization.title===l.visualization.title,b=J(),h=t.visualization.type,[y,C]=he(h,(b==null?void 0:b.id)??""),j=$(),d=t.visualization.type,{sourceUrl:m,contextConnectorName:i}=se(t.visualization);if(p&&!r||j)return e.jsx(Ne,{focusObject:t,title:a,type:d,isFocused:g??!1,disabled:j});const w=e.jsxs(e.Fragment,{children:[c.map((v,A)=>e.jsx("div",{className:"flex p-0",children:v},A)),m&&i&&e.jsx(E,{side:"top",sideOffset:4,label:e.jsx(f,{id:"KG958Q",defaultMessage:"Open in {contextConnectorName}",values:{contextConnectorName:i}}),children:e.jsx("a",{className:"flex items-center text-xs",href:m,target:"_blank",rel:"noreferrer",children:e.jsx(re,{className:x("icon-md text-token-text-tertiary hover:text-token-text-primary")})})}),n&&e.jsx(E,{side:"top",sideOffset:4,label:e.jsx(f,{id:"X0SJIT",defaultMessage:"Download {type}",values:{type:d}}),children:e.jsx("button",{onClick:n,className:"flex items-center text-xs",children:e.jsx(ne,{className:x("icon-md text-token-text-tertiary hover:text-token-text-primary")})})}),e.jsx(E,{side:"top",sideOffset:4,label:g?e.jsx(f,{id:"vilGuu",defaultMessage:"Collapse {type}",values:{type:d}}):e.jsx(f,{id:"7kLyF5",defaultMessage:"Expand {type}",values:{type:d}}),children:e.jsx("button",{onClick:()=>{P(g??!1,t)},className:"flex items-center text-xs",children:g?e.jsx(H,{className:x("icon-md text-token-text-tertiary hover:text-token-text-primary")}):e.jsx(O,{className:x("icon-md text-token-text-tertiary hover:text-token-text-primary")})})})]});return e.jsxs(M.div,{className:x("relative overflow-hidden border-token-border-light text-token-text-primary",!r&&"rounded-2xl border"),ref:u,onMouseEnter:()=>{C(!0)},...z,children:[e.jsxs("div",{className:x("flex items-center justify-between gap-2 bg-token-main-surface-primary px-4 py-3"),children:[e.jsx("span",{className:"flex-grow items-center truncate font-semibold capitalize",children:a}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(me,{children:!y&&e.jsx(M.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"tween",ease:"easeInOut",duration:.2},className:"absolute right-3 top-3",children:e.jsx(ve,{type:d})})}),y&&w]})]}),e.jsx("div",{className:"flex items-center justify-center bg-token-main-surface-primary",style:{height:r?"calc(100vh - 48px)":`${d==="table"?G:je}px`},children:s})]})});D.displayName="ADAVisualizationWrapper";function Ne({focusObject:t,title:a="",type:n,isFocused:c,disabled:r=!1}){const[s,u]=o.useState(!1),p=n==="chart"?ie:le,l=c||s||r;return e.jsx(M.div,{className:x("relative w-52 overflow-hidden rounded-2xl border",c&&"border-blue-selection/[.3]",l?"text-token-text-primary":"text-token-text-secondary",!r&&"cursor-pointer"),onMouseEnter:()=>{r||u(!0)},onMouseLeave:()=>{r||u(!1)},onClick:()=>{r||P(c,t)},...z,children:e.jsxs("div",{className:"flex justify-between bg-token-main-surface-primary px-3 py-2",children:[e.jsxs("div",{className:"my-0 flex w-full items-center gap-2 overflow-hidden text-sm font-semibold capitalize",children:[e.jsx(p,{className:x("icon-lg flex-shrink-0",l?"text-brand-green-800":"text-token-text-quaternary")}),e.jsx("span",{className:"flex-grow truncate",children:a})]}),s&&e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(E,{side:"top",sideOffset:4,label:c?e.jsx(f,{id:"vilGuu",defaultMessage:"Collapse {type}",values:{type:n}}):e.jsx(f,{id:"7kLyF5",defaultMessage:"Expand {type}",values:{type:n}}),children:c?e.jsx(H,{className:"icon-md icon-md text-token-text-secondary"}):e.jsx(O,{className:x("icon-md text-token-text-secondary")})})})]})})}function U({fileName:t=""}){return e.jsx("div",{className:"w-full rounded-2xl border border-red-600 p-3",children:e.jsxs("div",{className:"my-0 flex items-center justify-between",children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("p",{className:"m-0 p-0 text-lg font-semibold capitalize",children:t})}),e.jsx("span",{className:"text-sm text-red-600",children:e.jsx(f,{id:"ADAVisualzationComponent.unableToLoadOutput",defaultMessage:"Unable to display visualization"})})]})})}const P=(t,a)=>{N.logEvent(S.adaFocusModeToggled),t?F.close():F.setFocusedObject(a)};export{Je as default};
//# sourceMappingURL=cc5uou8dtstl80m9.js.map