import{j as t,cN as R,K as x,r as d,P as p,A as f,H as k,a8 as _,ce as C,bR as E,a1 as A,O as h,I as F,c as T,bP as D,N as L}from"./csnclwvitc93pb4o.js";import{E as P,p as U,F as q,f as z,m as G}from"./n4qj6ulh3s8xnvd9.js";import{g as w}from"./kqwdyvkaaavvn8k3.js";import{u as N}from"./4rh48uyp9qogyras.js";import{b as I}from"./ie01om017iu6xi4n.js";import{bG as O,bF as B,fO as H,fP as Q,bD as V,bI as $,fQ as K,fR as c,fS as j,A as Z}from"./h60ucn2y7ct2d4ke.js";import{b2 as J}from"./iqrmcf3yr8rsq080.js";import{S as W,a as X}from"./lnsx1zlwfj6bnk68.js";import{m as v}from"./rda984i6rgyzirgj.js";import"./fqo53v4s3w183q3i.js";import"./bttpfgsfg4ef0gbl.js";function M({children:e}){return t.jsx("div",{className:"flex h-full w-full items-center justify-center",children:t.jsxs("div",{className:"flex flex-col items-center gap-1 text-sm font-semibold text-token-text-tertiary",children:[t.jsx(J,{className:"icon-2xl"}),e]})})}const Y=({images:e,analyticsMetadata:s})=>{const r=e.map(a=>a.thumbnail_url),n=R({queries:r.map(a=>P(a)),combine:a=>{const o=new Set;return a.forEach((l,i)=>{l.isError&&o.add(r[i])}),o}});return t.jsx(t.Fragment,{children:(e==null?void 0:e.length)>0?t.jsx("div",{className:"columns-1 gap-2 px-6 py-4 xs:columns-2 md:columns-3",children:e.map((a,o)=>!n.has(a.thumbnail_url)&&t.jsx("div",{className:"relative mb-0.5 break-inside-avoid",children:t.jsx(ee,{image:a,analyticsMetadata:s})},o))}):t.jsx("div",{className:"flex items-center justify-center py-8",children:t.jsx(M,{children:t.jsx(x,{id:"AbVGAw",defaultMessage:"No Results"})})})})},ee=({image:e,analyticsMetadata:s})=>{const r=N(e.url).data??w(e.url,"short"),{isSuccess:n}=U(e==null?void 0:e.thumbnail_url),a={...I(s),url:e.url,title:e.title};return d.useEffect(()=>{p.logEvent(f.searchSidebarImageShown,a)},[]),t.jsx("button",{onClick:()=>{p.logEvent(f.searchSidebarImageClicked,a),O.setCurrentImage(e?{image:e,source:B.ImagesTab,turnIndex:s.turnIndex}:void 0)},children:n?t.jsxs("div",{className:"group relative h-full w-full",children:[t.jsx("img",{src:e.thumbnail_url,alt:e.content_url,className:"w-full rounded-lg hover:opacity-100 group-hover:opacity-90"}),t.jsx("div",{className:"absolute bottom-1 left-1 max-w-[75%] truncate rounded-xl bg-black/40 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm",children:r})]}):t.jsx("div",{className:"aspect-square h-full w-full animate-pulse bg-token-main-surface-tertiary"})})};function te({date:e}){const s=k(),r=e instanceof Date?e:new Date(e*1e3),n=H(r,new Date);if(n<4&&n>-4){const a=s.formatRelativeTime(n,"day",{numeric:"auto"});return a.charAt(0).toUpperCase()+a.slice(1)}else return s.formatDate(r,{year:"numeric",month:"long",day:"numeric"})}var se=C,ae=_,re=Q,ne=E;function oe(e,s){var r=ne(e)?se:re;return r(e,ae(s))}var le=oe,ie=V,ce=le;function ue(e,s){return ie(ce(e,s),1)}var de=ue;const me=A(de);function xe({citations:e,searchResults:s,analyticsMetadata:r}){if(e.length===0&&s.length===0)return t.jsx("div",{className:"flex items-center justify-center py-8",children:t.jsx(M,{children:t.jsx(x,{id:"AbVGAw",defaultMessage:"No Results"})})});const n=me(s,o=>o.entries).toSorted((o,l)=>((l==null?void 0:l.pub_date)??0)-((o==null?void 0:o.pub_date)??0)),a=e.toSorted((o,l)=>((l==null?void 0:l.pub_date)??0)-((o==null?void 0:o.pub_date)??0));return t.jsxs("div",{className:"mt-[-1px] flex w-full flex-col",children:[t.jsx(y,{title:t.jsx(x,{id:"dlVlo6",defaultMessage:"Citations"}),items:a,analyticsMetadata:r}),t.jsx(y,{title:t.jsx(x,{id:"iUafP7",defaultMessage:"Search Results"}),items:n,analyticsMetadata:r})]})}const fe=h.div`sticky top-[-1px] text-xs font-semibold border-token-border-light text-token-text-secondary border-y py-3 px-6 bg-token-main-surface-primary`;function y({title:e,items:s,analyticsMetadata:r}){return!s||s.length===0?null:t.jsxs(t.Fragment,{children:[t.jsx(fe,{children:e}),t.jsx("div",{className:"flex flex-col gap-6 px-6 py-4",children:s.map((n,a)=>t.jsx(he,{item:n,analyticsMetadata:r,index:a},a))})]})}function he({item:e,index:s,analyticsMetadata:r}){const n=N(e.url).data??w(e.url,"short"),a=o=>"ref_id"in o&&"content_type"in o;return t.jsx(pe,{analyticsMetadata:r,href:e.url,position:s,target:"_blank",rel:"noopener",className:"group flex gap-6",children:t.jsxs("div",{children:[t.jsxs("div",{className:"line-clamp-1 flex items-center gap-2 text-sm",children:[t.jsx($,{url:e.url,className:"icon-sm rounded bg-token-main-surface-primary object-cover",size:32,minSize:20,fallback:t.jsx(W,{className:"icon-sm text-token-text-quaternary"})}),n,a(e)&&t.jsx(X,{searchResult:e,className:"inline h-4 w-4 text-token-text-tertiary"})]}),t.jsx("div",{className:"line-clamp-2 text-sm font-semibold hover:underline",children:e.title}),(e.pub_date??e.snippet)&&t.jsxs("div",{className:"line-clamp-1 text-sm font-normal text-token-text-secondary",children:[e.pub_date&&t.jsx(te,{date:e.pub_date}),e.pub_date&&e.snippet&&" — ",e.snippet]})]})})}const pe=d.forwardRef(function(s,r){const{analyticsMetadata:n,position:a,...o}=s;function l(i){s.href&&p.logEvent(i,{...I(n),url:s.href,raw_position:a})}return d.useEffect(()=>{l(f.searchLinkShown)},[]),t.jsx("a",{ref:r,...o,onClick:i=>{var u;(u=s.onClick)==null||u.call(s,i),i.stopPropagation(),l(f.searchLinkClicked)}})});function Ae({clientThreadId:e}){const s=k(),{tab:r,turnIndex:n,messageId:a}=K(),o=[],l=n?q(e,n):[],i=n?z.getTurnSearchResults(e,n):[],u=n?G(e,n):[];(l.length>0||i.length>0)&&o.push(c.Sources),u.length>0&&o.push(c.Images);const b=d.useCallback(()=>{j.close(r)},[r]),g=d.useMemo(()=>({clientThreadId:e,messageId:a,turnIndex:n}),[e,a,n]);return!r||!n||o.length===0||!o.includes(r)?null:t.jsx(F,{size:"custom",noPadding:!0,isOpen:!0,onClose:b,type:"success",className:"focus-none max-w-2xl !shadow-none outline-none",children:t.jsxs("div",{className:"focus-none flex h-full flex-col items-center justify-start overflow-hidden rounded-lg outline-none",children:[t.jsxs(be,{children:[t.jsx(ge,{children:o.map(m=>t.jsx("button",{onClick:()=>{j.open(m,n,a)},className:T("mb-[-1px] border-b-2 border-solid border-transparent py-6 text-lg font-medium text-token-text-tertiary hover:text-token-text-secondary",{"!border-token-text-primary font-semibold !text-token-text-primary":r===m}),children:s.formatMessage(ve[m])},m))}),t.jsx(D,{onClick:b})]}),t.jsx(je,{children:t.jsx(Z,{children:r===c.Sources?t.jsx(v.div,{...S,children:t.jsx(xe,{citations:l,searchResults:i,analyticsMetadata:g})},"sources"):r===c.Images?t.jsx(v.div,{...S,children:t.jsx(Y,{images:u,analyticsMetadata:g})},"images"):null})})]})})}const S={initial:{opacity:0},animate:{opacity:1},transition:{duration:.1},className:"h-full overflow-y-auto relative"},be=h.div`flex w-full flex-row items-center justify-between border-b px-6 dark:border-gray-700`,ge=h.span`text-base font-semibold sm:text-base flex gap-4`,je=h.div`h-[60vh] max-h-[700px] w-full`,ve=L({[c.Images]:{id:"Z0ljgR",defaultMessage:"Images"},[c.Sources]:{id:"MqF7a0",defaultMessage:"Links"}});export{Ae as SearchResultsModal};
//# sourceMappingURL=m7f91ketwo1ar91m.js.map