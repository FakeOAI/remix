import{j as t,cQ as _,K as x,r as d,P as p,A as f,H as k,a8 as C,ch as R,bF as E,a1 as A,O as h,I as L,c as T,bJ as F,N as D}from"./byjsl6fmrkvfkikz.js";import{H as P,p as U,I as q,f as z,m as G}from"./k9y60274mtouqpk6.js";import{g as w}from"./kqwdyvkaaavvn8k3.js";import{u as N}from"./kf5zxpztnuu7yce4.js";import{b as I}from"./m36bvnc1ib0zw0yp.js";import{bM as H,bN as B,gb as O,gc as Q,bG as V,bP as $,gd as J,ge as c,gf as j,A as K}from"./haljegjt87cup22y.js";import{b2 as Z}from"./mkdzigrfhg3ljd4p.js";import{S as W,a as X}from"./l5a0pu4y0h7un3az.js";import{m as v}from"./g9imwwsgx97bm1kq.js";import"./j2utxaosc39xc7qz.js";import"./c5t9jayedjb4qxry.js";function M({children:e}){return t.jsx("div",{className:"flex h-full w-full items-center justify-center",children:t.jsxs("div",{className:"flex flex-col items-center gap-1 text-sm font-semibold text-token-text-tertiary",children:[t.jsx(Z,{className:"icon-2xl"}),e]})})}const Y=({images:e,analyticsMetadata:s})=>{const n=e.map(a=>a.thumbnail_url),o=_({queries:n.map(a=>P(a)),combine:a=>{const r=new Set;return a.forEach((l,i)=>{l.isError&&r.add(n[i])}),r}});return t.jsx(t.Fragment,{children:(e==null?void 0:e.length)>0?t.jsx("div",{className:"columns-1 gap-2 px-6 py-4 xs:columns-2 md:columns-3",children:e.map((a,r)=>!o.has(a.thumbnail_url)&&t.jsx("div",{className:"relative mb-0.5 break-inside-avoid",children:t.jsx(ee,{image:a,analyticsMetadata:s})},r))}):t.jsx("div",{className:"flex items-center justify-center py-8",children:t.jsx(M,{children:t.jsx(x,{id:"AbVGAw",defaultMessage:"No Results"})})})})},ee=({image:e,analyticsMetadata:s})=>{const n=N(e.url).data??w(e.url,"short"),{isSuccess:o}=U(e==null?void 0:e.thumbnail_url),a={...I(s),url:e.url,title:e.title};d.useEffect(()=>{p.logEvent(f.searchSidebarImageShown,a)},[]);const r=H.useStore();return t.jsx("button",{onClick:()=>{p.logEvent(f.searchSidebarImageClicked,a),r.setCurrentImage(e?{image:e,source:B.ImagesTab,turnIndex:s.turnIndex}:void 0)},children:o?t.jsxs("div",{className:"group relative h-full w-full",children:[t.jsx("img",{src:e.thumbnail_url,alt:e.content_url,className:"w-full rounded-lg hover:opacity-100 group-hover:opacity-90"}),t.jsx("div",{className:"absolute bottom-1 left-1 max-w-[75%] truncate rounded-xl bg-black/40 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm",children:n})]}):t.jsx("div",{className:"aspect-square h-full w-full animate-pulse bg-token-main-surface-tertiary"})})};function te({date:e}){const s=k(),n=e instanceof Date?e:new Date(e*1e3),o=O(n,new Date);if(o<4&&o>-4){const a=s.formatRelativeTime(o,"day",{numeric:"auto"});return a.charAt(0).toUpperCase()+a.slice(1)}else return s.formatDate(n,{year:"numeric",month:"long",day:"numeric"})}var se=R,ae=C,re=Q,ne=E;function oe(e,s){var n=ne(e)?se:re;return n(e,ae(s))}var le=oe,ie=V,ce=le;function ue(e,s){return ie(ce(e,s),1)}var de=ue;const me=A(de);function xe({citations:e,searchResults:s,analyticsMetadata:n}){if(e.length===0&&s.length===0)return t.jsx("div",{className:"flex items-center justify-center py-8",children:t.jsx(M,{children:t.jsx(x,{id:"AbVGAw",defaultMessage:"No Results"})})});const o=me(s,r=>r.entries).toSorted((r,l)=>((l==null?void 0:l.pub_date)??0)-((r==null?void 0:r.pub_date)??0)),a=e.toSorted((r,l)=>((l==null?void 0:l.pub_date)??0)-((r==null?void 0:r.pub_date)??0));return t.jsxs("div",{className:"mt-[-1px] flex w-full flex-col",children:[t.jsx(y,{title:t.jsx(x,{id:"dlVlo6",defaultMessage:"Citations"}),items:a,analyticsMetadata:n}),t.jsx(y,{title:t.jsx(x,{id:"iUafP7",defaultMessage:"Search Results"}),items:o,analyticsMetadata:n})]})}const fe=h.div`sticky top-[-1px] text-xs font-semibold border-token-border-light text-token-text-secondary border-y py-3 px-6 bg-token-main-surface-primary`;function y({title:e,items:s,analyticsMetadata:n}){return!s||s.length===0?null:t.jsxs(t.Fragment,{children:[t.jsx(fe,{children:e}),t.jsx("div",{className:"flex flex-col gap-6 px-6 py-4",children:s.map((o,a)=>t.jsx(he,{item:o,analyticsMetadata:n,index:a},a))})]})}function he({item:e,index:s,analyticsMetadata:n}){const o=N(e.url).data??w(e.url,"short"),a=r=>"ref_id"in r&&"content_type"in r;return t.jsx(pe,{analyticsMetadata:n,href:e.url,position:s,target:"_blank",rel:"noopener",className:"group flex gap-6",children:t.jsxs("div",{children:[t.jsxs("div",{className:"line-clamp-1 flex items-center gap-2 text-sm",children:[t.jsx($,{url:e.url,className:"icon-sm rounded bg-token-main-surface-primary object-cover",size:32,minSize:20,fallback:t.jsx(W,{className:"icon-sm text-token-text-quaternary"})}),o,a(e)&&t.jsx(X,{searchResult:e,className:"inline h-4 w-4 text-token-text-tertiary"})]}),t.jsx("div",{className:"line-clamp-2 text-sm font-semibold hover:underline",children:e.title}),(e.pub_date??e.snippet)&&t.jsxs("div",{className:"line-clamp-1 text-sm font-normal text-token-text-secondary",children:[e.pub_date&&t.jsx(te,{date:e.pub_date}),e.pub_date&&e.snippet&&" — ",e.snippet]})]})})}const pe=d.forwardRef(function(s,n){const{analyticsMetadata:o,position:a,...r}=s;function l(i){s.href&&p.logEvent(i,{...I(o),url:s.href,raw_position:a})}return d.useEffect(()=>{l(f.searchLinkShown)},[]),t.jsx("a",{ref:n,...r,onClick:i=>{var u;(u=s.onClick)==null||u.call(s,i),i.stopPropagation(),l(f.searchLinkClicked)}})});function Ae({clientThreadId:e}){const s=k(),{tab:n,turnIndex:o,messageId:a}=J(),r=[],l=o?q(e,o):[],i=o?z.getTurnSearchResults(e,o):[],u=o?G(e,o):[];(l.length>0||i.length>0)&&r.push(c.Sources),u.length>0&&r.push(c.Images);const b=d.useCallback(()=>{j.close(n)},[n]),g=d.useMemo(()=>({clientThreadId:e,messageId:a,turnIndex:o}),[e,a,o]);return!n||!o||r.length===0||!r.includes(n)?null:t.jsx(L,{size:"custom",noPadding:!0,isOpen:!0,onClose:b,type:"success",className:"focus-none max-w-2xl !shadow-none outline-none",children:t.jsxs("div",{className:"focus-none flex h-full flex-col items-center justify-start overflow-hidden rounded-lg outline-none",children:[t.jsxs(be,{children:[t.jsx(ge,{children:r.map(m=>t.jsx("button",{onClick:()=>{j.open(m,o,a)},className:T("mb-[-1px] border-b-2 border-solid border-transparent py-6 text-lg font-medium text-token-text-tertiary hover:text-token-text-secondary",{"!border-token-text-primary font-semibold !text-token-text-primary":n===m}),children:s.formatMessage(ve[m])},m))}),t.jsx(F,{onClick:b})]}),t.jsx(je,{children:t.jsx(K,{children:n===c.Sources?t.jsx(v.div,{...S,children:t.jsx(xe,{citations:l,searchResults:i,analyticsMetadata:g})},"sources"):n===c.Images?t.jsx(v.div,{...S,children:t.jsx(Y,{images:u,analyticsMetadata:g})},"images"):null})})]})})}const S={initial:{opacity:0},animate:{opacity:1},transition:{duration:.1},className:"h-full overflow-y-auto relative"},be=h.div`flex w-full flex-row items-center justify-between border-b px-6 dark:border-gray-700`,ge=h.span`text-base font-semibold sm:text-base flex gap-4`,je=h.div`h-[60vh] max-h-[700px] w-full`,ve=D({[c.Images]:{id:"Z0ljgR",defaultMessage:"Images"},[c.Sources]:{id:"MqF7a0",defaultMessage:"Links"}});export{Ae as SearchResultsModal};
//# sourceMappingURL=g2ybrurjshtvlw29.js.map