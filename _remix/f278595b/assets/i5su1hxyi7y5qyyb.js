import{X as b,E as g,cy as y,L as k,g as v,y as a,O as j,a1 as f,au as S,an as _,r as p,b as d,P as M}from"./ddcjry37y0ueobh3.js";import{f8 as E,f9 as R,bR as D,fa as N,fb as m,bK as A}from"./mlzz6djcph5fthpz.js";import{S as C,a as L}from"./d2mied9k9jcdop2v.js";import{x as w,y as F}from"./dcc45rtf5i4crsq0.js";import{g as T}from"./kqwdyvkaaavvn8k3.js";import{a as P}from"./m246earnfw381n0v.js";import{b as $}from"./s8ck5rhbggwsgpvb.js";import{E as z}from"./ihgyq5i3uu1yedym.js";import{m as U}from"./g232mik5xb95sf81.js";import"./ostblj7tqg38i6fa.js";import"./m780wk85gg28bdfy.js";function H({date:e}){const t=b(),r=e instanceof Date?e:new Date(e*1e3),s=E(r,new Date);if(s<4&&s>-4){const n=t.formatRelativeTime(s,"day",{numeric:"auto"});return n.charAt(0).toUpperCase()+n.slice(1)}else return t.formatDate(r,{year:"numeric",month:"long",day:"numeric"})}var q=y,B=g,G=R,K=k;function O(e,t){var r=K(e)?q:G;return r(e,B(t))}var V=O,W=D,X=V;function J(e,t){return W(X(e,t),1)}var Q=J;const Y=v(Q);function fe({clientThreadId:e,turnIndex:t,messageId:r,isInSidebar:s=!1}){const n=w(e,t),o=F(e,t),l={clientThreadId:e,messageId:r,turnIndex:t},i=Y(o,c=>c.entries).toSorted((c,u)=>(u?.pub_date??0)-(c?.pub_date??0));return a.jsxs("div",{className:j("flex w-full flex-col border-t border-token-border-light bg-token-main-surface-primary",s?"mt-[-57px]":"mt-0"),children:[a.jsx(x,{title:a.jsx(f,{id:"dlVlo6",defaultMessage:"Citations"}),items:n,analyticsMetadata:l,messageId:r}),a.jsx(x,{title:a.jsx(f,{id:"iUafP7",defaultMessage:"Search Results"}),items:i,analyticsMetadata:l,messageId:r})]},`${t}-${e}`)}function x({title:e,items:t,analyticsMetadata:r,messageId:s}){return!t||t.length===0?null:a.jsxs("div",{children:[a.jsx(h,{className:"sticky top-0 z-[1] h-[56px] border-b border-token-border-light bg-token-main-surface-primary px-6 py-4 text-sm font-medium text-token-text-primary",children:e}),a.jsx("div",{className:"flex flex-col px-3 py-2",children:t.map((n,o)=>a.jsx(h,{index:o,children:a.jsx(Z,{item:n,analyticsMetadata:r,index:o,messageId:s},o)},`${e}-${o}`))})]})}function h({children:e,index:t=0,className:r=""}){return a.jsx(U.div,{className:r,initial:{opacity:0},animate:{opacity:1},transition:{delay:(t+1)*.03},children:e})}function Z({item:e,index:t,analyticsMetadata:r,messageId:s}){const n=P(e.url).data??T(e.url,"short"),o=u=>"ref_id"in u&&"content_type"in u,l=N(),i=S().resolvedTheme==="dark",c=a.jsxs(I,{analyticsMetadata:r,href:e.url,position:t,target:"_blank",rel:"noopener",className:"flex flex-col gap-0.5 rounded-xl px-3 py-2.5 hover:bg-token-main-surface-secondary",onMouseEnter:()=>{e.attributions&&m.setHighlightBySource(s,e)},onMouseLeave:()=>{m.clearHighlights()},children:[a.jsxs("div",{className:"line-clamp-1 flex h-6 items-center gap-2 text-xs",children:[a.jsx(A,{url:e.url,className:"icon-sm rounded-full bg-token-main-surface-primary object-cover",size:32,minSize:20,fallback:a.jsx(C,{className:"icon-sm text-token-text-quaternary"})}),n,o(e)&&a.jsx(L,{searchResult:e,className:"inline h-4 w-4 text-token-text-tertiary"})]}),a.jsx("div",{className:"line-clamp-2 text-sm font-semibold",children:e.title}),(e.pub_date??e.snippet)&&a.jsxs("div",{className:"line-clamp-2 text-sm font-normal leading-snug text-token-text-secondary",children:[e.pub_date&&a.jsx(H,{date:e.pub_date}),e.pub_date&&e.snippet&&" — ",e.snippet]})]});return l?a.jsx(_,{label:a.jsx(z,{item:e}),className:"text-left text-xs",theme:i?"default":"white",children:c}):c}const I=p.forwardRef(function(t,r){const{analyticsMetadata:s,position:n,...o}=t;function l(i,c){t.href&&M.logEventWithStatsig(i,c,{...$(s),url:t.href,index:n.toString()})}return p.useEffect(()=>{l(d.searchLinkShown,"search_link_shown")},[]),a.jsx("a",{ref:r,...o,onClick:i=>{t.onClick?.(i),i.stopPropagation(),l(d.searchLinkClicked,"search_link_clicked")}})});export{fe as SearchSources,x as SourcesListGroup};
//# sourceMappingURL=i5su1hxyi7y5qyyb.js.map