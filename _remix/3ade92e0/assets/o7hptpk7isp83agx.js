import{Y as w,M as b,e1 as s,x as r,R as k,O as S,e2 as j,W as _,X as E}from"./jipkz7wahhvzzuqx.js";import{bO as Q,aI as F,bP as B}from"./e6zhtx99a7i1g9zc.js";import{p as T,t as q}from"./n5nz8vnsxibd6bik.js";import{o as v}from"./lb2bw82esu8k4ire.js";import{u as L}from"./eckxh6cogpyr8kwq.js";import{a as h,T as N}from"./gecwa6udk6b6d8e5.js";import{d as O}from"./ojtyfghvwqol77ni.js";import{m as D}from"./hu4ya3hu1q2mtj3c.js";import"./lbv1zpv4g2ap41f2.js";import"./fwm14uzkyzsxflxc.js";import"./g70459ispqthxwkc.js";import"./kl3gqai6eyrksb78.js";import"./npl77qwfuvi2jyha.js";import"./ncnmvo4fatoh9z2b.js";import"./it892upc0b17konk.js";import"./fqai4h0y4a7y6yiz.js";import"./kgz011geyku0c84g.js";import"./gf1rzma6lb3hhiaa.js";import"./n7shmditr84egzzk.js";import"./efad9c3t7hoskfux.js";function he({messages:e,isRequestActive:t,isLastMessageInTurn:n,isRetrieval:o,isUsingGizmo:i}){const u=e.map(g=>g.message),p=W(u),l=p.filter(g=>H(g,!1)),c=l[l.length-1]??void 0,a=w();if(V(u).some(({content:g})=>g.content_type===b.SystemError))return null;let m=h.Running;const y=l.filter(g=>g.type===s.Search).length,f={count:l.length-y,domain:c?v(M(c)??""):void 0,query:c?C(c):void 0};let d=o?i?a.formatMessage({id:"browsingMessage.searchingKnowledge",defaultMessage:"Searching my knowledge"}):a.formatMessage({id:"browsingMessage.startingRetrieval",defaultMessage:"Reading documents"}):a.formatMessage({id:"message.tools.browse.running",defaultMessage:"Searching the web"});return u.some(O)?(m=h.Stopped,d=o?i?a.formatMessage({id:"browsingMessage.searchingKnowledgeStopped",defaultMessage:"Stopped searching knowledge"}):a.formatMessage({id:"browsingMessage.retrievalStopped",defaultMessage:"Stopped reading documents"}):a.formatMessage({id:"message.tools.browse.stopped",defaultMessage:"Search stopped"})):!n||!t?p.length>0&&p.every(g=>g.didError)?(m=h.Error,d=o?i?a.formatMessage({id:"browsingMessage.searchingKnowledgeFailed",defaultMessage:"Error searching knowledge"}):a.formatMessage({id:"browsingMessage.retrievalFailed",defaultMessage:"Error reading documents"}):a.formatMessage({id:"message.tools.browse.failed",defaultMessage:"Search failed"})):(m=h.Finished,d=o?null:f.count===0?a.formatMessage({id:"message.tools.browse.started",defaultMessage:"Searching the web..."}):a.formatMessage({id:"message.tools.browse.finished",defaultMessage:"Searched {count, plural, =0 {0 sites} one {# site} other {# sites}}"},f)):l.length>0&&(d=I(a,f,o,i,l[l.length-1])),(l.length>0||o&&n)&&m!==h.Error?r.jsx(N,{highlightedCommand:d,showWorkUserSetting:!1,status:m,children:l.length===0?null:r.jsx(U,{commands:l})}):r.jsx(X,{$isError:m===h.Error,children:d})}function x(e){return e.metadata?.command==="quote"||e.metadata?.command==="quote_full"||e.metadata?.command==="quote_lines"}function W(e){return e.map((t,n)=>{if(t.author.role!==k.Tool||n>0&&x(t)&&x(e[n-1]))return null;const o=t.metadata;if(!o)return null;const{command:i,status:u}=o;return i?{type:i,status:u,didError:t.content.content_type===b.SystemError,message:t}:null}).filter(Q)}function U({commands:e}){const t=w(),n=e.map(M).filter(i=>i!=null),o=L(n);return r.jsx("div",{className:"mb-4 divide-y divide-token-border-light rounded-xl border border-token-border-light text-sm",children:r.jsx(F,{initial:!1,children:e.map((i,u)=>{const p=R(i);if(p==null)return null;const{icon:l,url:c,title:a,externalLink:m}=p,y=c?v(c):void 0,f=a?typeof a=="string"?a:t.formatMessage(a):null,d=c?o.get(c):null;return r.jsx(D.div,{initial:"collapsed",animate:"open",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}},children:r.jsxs(K,{url:m??c,className:S("flex items-start gap-3 px-4 py-3",a?"text-token-text-secondary":"text-token-text-primary",u===0&&"rounded-t-xl",u===e.length-1&&"rounded-b-xl"),children:[l?r.jsx(l,{className:"icon-sm mt-0.5 flex-shrink-0 text-token-text-secondary"}):c?r.jsx(B,{url:c,className:"mt-1"}):null,r.jsxs("div",{children:[f&&r.jsxs("div",{className:"line-clamp-1 text-token-text-primary",children:[d&&`${d} — `,f]}),r.jsx("div",{children:y})]})]})},u)})})})}function K({url:e,children:t,className:n}){return e?r.jsxs("a",{href:e,target:"_blank",className:S(n,"group relative hover:bg-token-main-surface-secondary"),rel:"noreferrer",children:[t,r.jsx("div",{className:"invisible absolute right-3 bg-gradient-to-l from-token-main-surface-secondary to-transparent pl-4 group-hover:visible",children:r.jsx(T,{className:"icon-md text-token-text-secondary"})})]}):r.jsx("div",{className:n,children:t})}function P(e){const t=e.message.metadata?._cite_metadata?.metadata_list[0];return t!=null&&t.type!=="file"?t.title:null}function C(e){return e.message.metadata?.args?.[0]}function R(e){switch(e.type){case s.Search:{const t=e.message.metadata?.search_engine;if(t&&t!==j.Bing)return null;const n=C(e);return{icon:q,url:"bing.com",externalLink:$(e),title:n?`“${n}”`:{id:"message.tools.browse.querying",defaultMessage:"Querying",description:"Status message when issuing a query"}}}case s.Click:case s.MultiClick:case s.Lookup:case s.OpenUrl:case s.Open:case s.Quote:case s.QuoteFull:case s.QuoteLines:case s.Scroll:return{url:M(e),title:P(e)??void 0};case s.Back:return null}}function $(e){const t=e.message.metadata?.args?.[0];return t===void 0?null:_.getBingLink({query:t})}function I(e,t,n,o,i){switch(i?.type){case s.Click:case s.MultiClick:case s.Lookup:case s.OpenUrl:case s.Quote:case s.QuoteFull:case s.QuoteLines:case s.Scroll:case s.Open:case s.Back:return e.formatMessage({id:"message.tools.browse.reading",defaultMessage:"Browsing {domain}"},t);case s.Search:case void 0:return n?o?e.formatMessage({id:"browsingMessage.searchingKnowledge",defaultMessage:"Searching my knowledge"}):e.formatMessage({id:"browsingMessage.startingRetrieval",defaultMessage:"Reading documents"}):e.formatMessage({id:"message.tools.browse.searching",defaultMessage:'Searching "{query}"'},t)}}function A(e){const t=e.message.metadata?._cite_metadata?.metadata_list[0];return t!=null&&t.type==="file"?t.name:null}function H(e,t){switch(e.type){case s.Search:return!0;case s.Click:case s.Lookup:case s.MultiClick:case s.OpenUrl:case s.Quote:case s.QuoteFull:case s.QuoteLines:return t?A(e)!=null:M(e)!=null;case s.Open:case s.Back:case s.Scroll:return!1}}function M(e){const t=e.message.metadata?._cite_metadata?.metadata_list[0];return t!=null&&t.type!=="file"?t.url:null}function V(e){return e.filter(t=>t.author.role===k.Tool)}const X=E.p`first:mt-0 my-1.5 h-8 flex items-center ltr:mr-auto rtl:ml-auto empty:hidden
${({$isError:e})=>e?"text-token-text-error":"text-token-text-secondary"}`;export{he as BrowsingMessage,M as getVisitedUrl};
//# sourceMappingURL=o7hptpk7isp83agx.js.map