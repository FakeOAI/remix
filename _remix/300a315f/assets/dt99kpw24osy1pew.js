import{a0 as g,E as k,cy as v,a2 as j,g as M,y as a,a4 as _,ae as d,az as S,as as E,r as f,d as p,P as R}from"./go0egeb74rmznen8.js";import{fb as A,fc as D,bL as L,fd as N,fe as m,bF as C}from"./1dr2p6hme0f5dqoq.js";import{S as w,a as T}from"./cmpf6zcqsgnh94w1.js";import{w as F,x as P}from"./jxqgv3mf0shugzvg.js";import{g as $}from"./kqwdyvkaaavvn8k3.js";import{a as z}from"./gi90k98mxd5fyji4.js";import{b as I}from"./b5c9xxvdsy41nleh.js";import{E as U}from"./etdxb4fpydr62a1r.js";import{m as H}from"./h599ywc2yh681j9p.js";import"./btq18ey8ynma5fil.js";import"./n5k6ufc82r8hib3t.js";function q({date:e}){const t=g(),s=e instanceof Date?e:new Date(e*1e3),n=A(s,new Date);if(n<4&&n>-4){const o=t.formatRelativeTime(n,"day",{numeric:"auto"});return o.charAt(0).toUpperCase()+o.slice(1)}else return t.formatDate(s,{year:"numeric",month:"long",day:"numeric"})}var B=v,G=k,O=D,V=j;function W(e,t){var s=V(e)?B:O;return s(e,G(t))}var J=W,K=L,Q=J;function X(e,t){return K(Q(e,t),1)}var Y=X;const Z=M(Y);function pe({clientThreadId:e,turnIndex:t,messageId:s,isInSidebar:n=!1}){const o=F(e,t),i=P(e,t),r={clientThreadId:e,messageId:s,turnIndex:t},l=Z(i,c=>c.entries).toSorted((c,u)=>(u?.pub_date??0)-(c?.pub_date??0));return a.jsxs("div",{className:_("flex w-full flex-col border-t border-token-border-light bg-token-main-surface-primary",n?"mt-[-57px]":"mt-0"),children:[a.jsx(x,{title:a.jsx(d,{id:"dlVlo6",defaultMessage:"Citations"}),items:o,analyticsMetadata:{...r,linkType:"citation"},messageId:s}),a.jsx(x,{title:a.jsx(d,{id:"iUafP7",defaultMessage:"Search Results"}),items:l,analyticsMetadata:{...r,linkType:"search_result"},messageId:s,analyticsIndexOffset:o.length})]},`${t}-${e}`)}function x({title:e,items:t,analyticsMetadata:s,analyticsIndexOffset:n=0,messageId:o}){return!t||t.length===0?null:a.jsxs("div",{children:[a.jsx(h,{className:"sticky top-0 z-[1] h-[56px] border-b border-token-border-light bg-token-main-surface-primary px-6 py-4 text-sm font-medium text-token-text-primary",children:e}),a.jsx("div",{className:"flex flex-col px-3 py-2",children:t.map((i,r)=>a.jsx(h,{index:r,children:a.jsx(ee,{item:i,analyticsMetadata:{...s,groupIndex:r,entireListIndex:r+n},messageId:o},r)},`${e}-${r}`))})]})}function h({children:e,index:t=0,className:s=""}){return a.jsx(H.div,{className:s,initial:{opacity:0},animate:{opacity:1},transition:{delay:(t+1)*.03},children:e})}function ee({item:e,analyticsMetadata:t,messageId:s}){const n=z(e.url).data??$(e.url,"short"),o=c=>"ref_id"in c&&"content_type"in c,i=N(),r=S().resolvedTheme==="dark",l=a.jsxs(te,{analyticsMetadata:t,href:e.url,target:"_blank",rel:"noopener",className:"flex flex-col gap-0.5 rounded-xl px-3 py-2.5 hover:bg-token-main-surface-secondary",onMouseEnter:()=>{e.attributions&&m.setHighlightBySource(s,e)},onMouseLeave:()=>{m.clearHighlights()},children:[a.jsxs("div",{className:"line-clamp-1 flex h-6 items-center gap-2 text-xs",children:[a.jsx(C,{url:e.url,className:"icon-sm rounded-full bg-token-main-surface-primary object-cover",size:32,minSize:20,fallback:a.jsx(w,{className:"icon-sm text-token-text-quaternary"})}),n,o(e)&&a.jsx(T,{searchResult:e,className:"inline h-4 w-4 text-token-text-tertiary"})]}),a.jsx("div",{className:"line-clamp-2 text-sm font-semibold",children:e.title}),(e.pub_date??e.snippet)&&a.jsxs("div",{className:"line-clamp-2 text-sm font-normal leading-snug text-token-text-secondary",children:[e.pub_date&&a.jsx(q,{date:e.pub_date}),e.pub_date&&e.snippet&&" — ",e.snippet]})]});return i?a.jsx(E,{label:a.jsx(U,{item:e}),className:"text-left text-xs",theme:r?"default":"white",children:l}):l}const te=f.forwardRef(function(t,s){const{analyticsMetadata:n,...o}=t;function i(r,l){if(!t.href)return;const{entireListIndex:c,groupIndex:u,linkType:b,...y}=n;R.logEventWithStatsig(r,l,{...I(y),url:t.href,global_index:c.toString(),local_index:u.toString(),type:b})}return f.useEffect(()=>{i(p.searchLinkShown,"search_link_shown")},[]),a.jsx("a",{ref:s,...o,onClick:r=>{t.onClick?.(r),r.stopPropagation(),i(p.searchLinkClicked,"search_link_clicked")}})});export{pe as SearchSources,x as SourcesListGroup};
//# sourceMappingURL=dt99kpw24osy1pew.js.map