import{W as g,l as a,m as k,a0 as m,r as p,d as f,P as b}from"./5owd3ee156wpz27v.js";import{dF as y,dG as j,bW as v}from"./i6xi3s7uv52pwxhq.js";import{S,a as _}from"./d9oat00mlpbncey5.js";import{o as R,p as C}from"./n9bl8h8dwgedvxgc.js";import{g as N}from"./kqwdyvkaaavvn8k3.js";import{a as w}from"./chtpv1t7jthcarb1.js";import{z as M}from"./lmzf96u3byd7ysa0.js";import{m as E}from"./m40jmshfqkclfeg2.js";import"./jy1r24jznpivy1dp.js";function L({date:e}){const t=g(),n=e instanceof Date?e:new Date(e*1e3),r=y(n,new Date);if(r<4&&r>-4){const s=t.formatRelativeTime(r,"day",{numeric:"auto"});return s.charAt(0).toUpperCase()+s.slice(1)}else return t.formatDate(n,{year:"numeric",month:"long",day:"numeric"})}function V({clientThreadId:e,turnIndex:t,messageId:n,isInSidebar:r=!1}){const s=R(e,t),o=C(e,t),c={clientThreadId:e,messageId:n,turnIndex:t},i=j(o,l=>l.entries).toSorted((l,d)=>(d?.pub_date??0)-(l?.pub_date??0)),u=s.toSorted((l,d)=>(d?.pub_date??0)-(l?.pub_date??0));return a.jsxs("div",{className:k("flex w-full flex-col bg-token-main-surface-primary",r?"mt-[-56px]":"mt-0"),children:[a.jsx(x,{title:a.jsx(m,{id:"dlVlo6",defaultMessage:"Citations"}),items:u,analyticsMetadata:c}),a.jsx(x,{title:a.jsx(m,{id:"iUafP7",defaultMessage:"Search Results"}),items:i,analyticsMetadata:c})]},`${t}-${e}`)}function x({title:e,items:t,analyticsMetadata:n}){return!t||t.length===0?null:a.jsxs("div",{children:[a.jsx(h,{className:"sticky top-0 z-[1] h-[56px] border-y border-token-border-light bg-token-main-surface-primary px-6 py-4 text-sm font-medium text-token-text-primary",children:e}),a.jsx("div",{className:"flex flex-col px-3 py-2",children:t.map((r,s)=>a.jsx(h,{index:s,children:a.jsx(D,{item:r,analyticsMetadata:n,index:s},s)},`${e}-${s}`))})]})}function h({children:e,index:t=0,className:n=""}){return a.jsx(E.div,{className:n,initial:{opacity:0},animate:{opacity:1},transition:{delay:(t+1)*.03},children:e})}function D({item:e,index:t,analyticsMetadata:n}){const r=w(e.url).data??N(e.url,"short"),s=o=>"ref_id"in o&&"content_type"in o;return a.jsxs(P,{analyticsMetadata:n,href:e.url,position:t,target:"_blank",rel:"noopener",className:"flex flex-col gap-0.5 rounded-xl px-3 py-2.5 hover:bg-token-main-surface-secondary",children:[a.jsxs("div",{className:"line-clamp-1 flex h-6 items-center gap-2 text-xs",children:[a.jsx(v,{url:e.url,className:"icon-sm rounded-full bg-token-main-surface-primary object-cover",size:32,minSize:20,fallback:a.jsx(S,{className:"icon-sm text-token-text-quaternary"})}),r,s(e)&&a.jsx(_,{searchResult:e,className:"inline h-4 w-4 text-token-text-tertiary"})]}),a.jsx("div",{className:"line-clamp-2 text-sm font-semibold",children:e.title}),(e.pub_date??e.snippet)&&a.jsxs("div",{className:"line-clamp-2 text-sm font-normal leading-snug text-token-text-secondary",children:[e.pub_date&&a.jsx(L,{date:e.pub_date}),e.pub_date&&e.snippet&&" — ",e.snippet]})]})}const P=p.forwardRef(function(t,n){const{analyticsMetadata:r,position:s,...o}=t;function c(i,u){t.href&&b.logEventWithStatsig(i,u,{...M(r),url:t.href,raw_position:s.toString()})}return p.useEffect(()=>{c(f.searchLinkShown,"search_link_shown")},[]),a.jsx("a",{ref:n,...o,onClick:i=>{t.onClick?.(i),i.stopPropagation(),c(f.searchLinkClicked,"search_link_clicked")}})});export{V as SearchSources,x as SourcesListGroup};
//# sourceMappingURL=lpkh88667v19h456.js.map