import{r as T,W as $,l as c,bd as Ze,Y as z,R as Ke,m as Ie,aK as $t,d_ as Ut,a1 as Re,c_ as Ft,c$ as Bt,d0 as Vt,e8 as zt,b as gt,h as Gt,ft as et,d6 as tt,a as vt,dj as Yt,dQ as Jt}from"./mdvve60r3u0lq3gw.js";import{e7 as Wt,fm as Qt,jv as Xt,ag as Ct,jw as fe,jx as Q,jd as nt,c as me,N as X,fw as O,id as he,U as Zt,jy as Ae,jz as Tt,fz as ve,hR as yt,jA as Kt,jm as xt,jk as en,ap as j,c1 as tn,ci as nn,jB as sn,jC as on,jD as M,jE as rn,i5 as wt,jF as an,jG as un,e as ln,jH as cn,jI as fn,jJ as dn,fl as mn,hO as hn,fh as pn,hP as gn,fj as vn,ex as Cn,jK as Tn,jL as yn,aq as st,jM as xn,jN as wn,fA as En,jO as bn,jP as Sn,jQ as ot,jR as G}from"./ggghhsqfrwvy26w6.js";import{C as In,s as J,g as An,t as Mn,v as Dn,w as kn,x as Ln,y as Nn}from"./la9ot4ejr0xq00fv.js";import{c as jn,C as Rn}from"./gpjwrbjmoz7o88p1.js";import{C as pe,f as _n,S as F,g as rt}from"./n0ojh6bfoj4dk660.js";import{m as W}from"./1em6js9ldywb8jo9.js";import{D as On}from"./ok8p19uoikh9hkr4.js";import{bG as Pn,bx as qn,Z as Hn,bI as $n,bJ as Un,an as Fn,y as Bn}from"./eiz85vh9wqm3txxu.js";import{i as Vn}from"./d80qtv312a7yflxk.js";import{j as zn,p as Gn,T as Yn,w as Jn,d as Wn}from"./j0mwk4jy2xii6a90.js";import{L as Qn,g as Xn,h as Zn,i as Kn}from"./kmd2waqqxb3nrm9d.js";import{P as es}from"./jfxv6pru1fep6d0n.js";import{p as ts,q as ns}from"./mgzwrqlcqpofwvnn.js";import{u as ss}from"./ea3vyshiig16yfh1.js";var Me=(t=>(t.Close="close",t.Loaded="loaded",t.Streaming="streaming",t.Download="download",t))(Me||{});const os=({isTextdocStreaming:t,isRequestActive:e,value:n,comments:s})=>{const[o,r]=T.useState(!1);return T.useEffect(()=>{t&&o&&(r(!1),pe.reset())},[n,s]),T.useEffect(()=>{e||(r(!1),pe.reset())},[e]),[o,r]};function rs({onClickRestore:t,onClickResetLatest:e}){const n=$();return c.jsx(W.div,{initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{bounce:0,duration:.24},className:"absolute bottom-0 left-0 z-30 w-full items-center border-t border-gray-100 bg-token-main-surface-primary p-6 shadow-[0_-4px_32px_rgba(0,0,0,0.08)] @container dark:border-token-border-xlight dark:shadow-[0_-4px_32px_rgba(0,0,0,0.12)] lg:border-l",children:c.jsxs("div",{className:"mx-auto flex max-w-[48rem] flex-col flex-wrap justify-center gap-5 @2xl:flex-row @2xl:justify-between",children:[c.jsxs("div",{className:"flex flex-col px-2 text-center @2xl:text-start",children:[c.jsx("span",{className:"text-md text-wrap font-semibold",children:n.formatMessage({id:"gt23pb",defaultMessage:"You are viewing a previous version"})}),c.jsx("span",{className:"text-wrap text-sm text-token-text-secondary",children:n.formatMessage({id:"sAlUJn",defaultMessage:"Restore this version to make edits"})})]}),c.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4",children:[c.jsx(Ze,{as:"button",color:"primary",onClick:t,children:n.formatMessage({id:"+cddAb",defaultMessage:"Restore this version"})}),c.jsx(Ze,{as:"button",color:"secondary",onClick:e,children:n.formatMessage({id:"qCD3eu",defaultMessage:"Back to latest version"})})]})]})})}const as={type:"spring",damping:35,stiffness:300},is=({clientThreadId:t,turn:e})=>{const n=Wt(),s=Qt(e.messages);return c.jsxs(W.div,{className:"absolute left-0 right-0 top-0 z-10 -translate-y-full",children:[c.jsx(W.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute inset-0 bg-vert-light-gradient dark:bg-vert-dark-gradient"}),c.jsx(W.div,{className:"flex items-center px-6 py-2",initial:{opacity:.75,translateX:-50,translateY:"100%"},animate:{opacity:1,translateX:0,translateY:"0"},exit:{opacity:0,translateY:20},transition:as,children:c.jsx(In,{clientThreadId:t,onChangeItemInView:z,onRequestCompletion:async o=>z(o),onRequestMoreCompletions:z,groupedMessagesToRender:s,allGroupedMessages:s,isEditing:!1,isUserTurn:!0,turnIndex:0,isCompletionRequestInProgress:!1,isFeedbackEnabled:!1,isFinalTurn:!1,hasActiveRequest:n,showEditButton:!1,handleEnterEdit:z,handleExitEdit:z})})]},"user-message")},us=({clientThreadId:t})=>{const e=zn(t),n=Gn(t,e),{lastUserTurn:s,lastAssistantTurn:o}=T.useMemo(()=>{let a=null,i=null;for(let l=n.length-1;l>0;l--){const u=n[l];if(!a&&u.role===Ke.User?a=u:!i&&u.role===Ke.Assistant&&(i=u),a&&i)break}return{lastUserTurn:a,lastAssistantTurn:i}},[n]),r=s&&!o?.messages.find(({message:a})=>a.recipient?.startsWith(Xt));return c.jsx(Ct,{initial:!1,children:r&&c.jsx(is,{turn:s,clientThreadId:t})})},ls=({isRequestActive:t=!1,clientThreadId:e,onCancel:n,onSubmit:s,onSubmitAccelerator:o,acceleratorActions:r=[]})=>{const[a,i]=T.useState(""),[l,u]=T.useState(!0),f=$(),d=()=>{s?.(a),i("")},g=p=>{const{metaKey:h,shiftKey:m,key:C}=p;C==="Enter"&&a.trim()&&!(m||h)&&(d(),p.preventDefault())};return c.jsxs("div",{className:"relative mb-3 flex max-w-2xl flex-1 justify-center",children:[c.jsx(us,{clientThreadId:e}),c.jsx("div",{className:"flex flex-auto items-start",children:c.jsx("div",{className:Ie("mx-6 flex min-h-12 flex-auto items-center bg-[#f4f4f4] py-1 pl-6 pr-2 dark:bg-token-main-surface-secondary",{"rounded-full":l,"rounded-2xl":!l}),children:c.jsxs("div",{className:"relative flex flex-auto items-center self-stretch",children:[c.jsx(Vn,{placeholder:f.formatMessage({id:"zrUbTJ",defaultMessage:"Ask ChatGPT to edit"}),disabled:t,value:a,className:"w-full resize-none border-0 bg-transparent p-0 text-token-text-primary outline-0 placeholder:text-token-text-secondary focus:ring-0 focus-visible:ring-0",maxRows:4,onChange:({target:{value:p}})=>i(p),onKeyDown:g,onHeightChange:(p,{rowHeight:h})=>u(Math.floor(p/h)<=1)}),a?c.jsx(W.button,{className:Ie("dark h-8 w-8 rounded-full bg-token-main-surface-primary text-center dark:bg-token-main-surface-primary",{"self-end":!l}),initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"tween",duration:.1},onMouseDown:()=>d(),children:c.jsx(Pn,{className:"h-8 w-8 text-token-text-primary"})}):(r?.length??0)>0&&c.jsx(_n,{disableHint:!0,isEmbeddedInPromptArea:!0,isRequestActive:t,actions:r,onCancel:n,onSubmit:o,right:0,bottom:4})]})})})]})};function R(){}R.prototype={diff:function(e,n){var s,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=o.callback;typeof o=="function"&&(r=o,o={});var a=this;function i(v){return v=a.postProcess(v,o),r?(setTimeout(function(){r(v)},0),!0):v}e=this.castInput(e,o),n=this.castInput(n,o),e=this.removeEmpty(this.tokenize(e,o)),n=this.removeEmpty(this.tokenize(n,o));var l=n.length,u=e.length,f=1,d=l+u;o.maxEditLength!=null&&(d=Math.min(d,o.maxEditLength));var g=(s=o.timeout)!==null&&s!==void 0?s:1/0,p=Date.now()+g,h=[{oldPos:-1,lastComponent:void 0}],m=this.extractCommon(h[0],n,e,0,o);if(h[0].oldPos+1>=u&&m+1>=l)return i(at(a,h[0].lastComponent,n,e,a.useLongestToken));var C=-1/0,x=1/0;function w(){for(var v=Math.max(C,-f);v<=Math.min(x,f);v+=2){var I=void 0,b=h[v-1],L=h[v+1];b&&(h[v-1]=void 0);var B=!1;if(L){var q=L.oldPos-v;B=L&&0<=q&&q<l}var D=b&&b.oldPos+1<u;if(!B&&!D){h[v]=void 0;continue}if(!D||B&&b.oldPos<L.oldPos?I=a.addToPath(L,!0,!1,0,o):I=a.addToPath(b,!1,!0,1,o),m=a.extractCommon(I,n,e,v,o),I.oldPos+1>=u&&m+1>=l)return i(at(a,I.lastComponent,n,e,a.useLongestToken));h[v]=I,I.oldPos+1>=u&&(x=Math.min(x,v-1)),m+1>=l&&(C=Math.max(C,v+1))}f++}if(r)(function v(){setTimeout(function(){if(f>d||Date.now()>p)return r();w()||v()},0)})();else for(;f<=d&&Date.now()<=p;){var S=w();if(S)return S}},addToPath:function(e,n,s,o,r){var a=e.lastComponent;return a&&!r.oneChangePerToken&&a.added===n&&a.removed===s?{oldPos:e.oldPos+o,lastComponent:{count:a.count+1,added:n,removed:s,previousComponent:a.previousComponent}}:{oldPos:e.oldPos+o,lastComponent:{count:1,added:n,removed:s,previousComponent:a}}},extractCommon:function(e,n,s,o,r){for(var a=n.length,i=s.length,l=e.oldPos,u=l-o,f=0;u+1<a&&l+1<i&&this.equals(s[l+1],n[u+1],r);)u++,l++,f++,r.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return f&&!r.oneChangePerToken&&(e.lastComponent={count:f,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=l,u},equals:function(e,n,s){return s.comparator?s.comparator(e,n):e===n||s.ignoreCase&&e.toLowerCase()===n.toLowerCase()},removeEmpty:function(e){for(var n=[],s=0;s<e.length;s++)e[s]&&n.push(e[s]);return n},castInput:function(e){return e},tokenize:function(e){return Array.from(e)},join:function(e){return e.join("")},postProcess:function(e){return e}};function at(t,e,n,s,o){for(var r=[],a;e;)r.push(e),a=e.previousComponent,delete e.previousComponent,e=a;r.reverse();for(var i=0,l=r.length,u=0,f=0;i<l;i++){var d=r[i];if(d.removed)d.value=t.join(s.slice(f,f+d.count)),f+=d.count;else{if(!d.added&&o){var g=n.slice(u,u+d.count);g=g.map(function(p,h){var m=s[f+h];return m.length>p.length?m:p}),d.value=t.join(g)}else d.value=t.join(n.slice(u,u+d.count));u+=d.count,d.added||(f+=d.count)}}return r}function it(t,e){var n;for(n=0;n<t.length&&n<e.length;n++)if(t[n]!=e[n])return t.slice(0,n);return t.slice(0,n)}function ut(t,e){var n;if(!t||!e||t[t.length-1]!=e[e.length-1])return"";for(n=0;n<t.length&&n<e.length;n++)if(t[t.length-(n+1)]!=e[e.length-(n+1)])return t.slice(-n);return t.slice(-n)}function De(t,e,n){if(t.slice(0,e.length)!=e)throw Error("string ".concat(JSON.stringify(t)," doesn't start with prefix ").concat(JSON.stringify(e),"; this is a bug"));return n+t.slice(e.length)}function ke(t,e,n){if(!e)return t+n;if(t.slice(-e.length)!=e)throw Error("string ".concat(JSON.stringify(t)," doesn't end with suffix ").concat(JSON.stringify(e),"; this is a bug"));return t.slice(0,-e.length)+n}function Y(t,e){return De(t,e,"")}function ce(t,e){return ke(t,e,"")}function lt(t,e){return e.slice(0,cs(t,e))}function cs(t,e){var n=0;t.length>e.length&&(n=t.length-e.length);var s=e.length;t.length<e.length&&(s=t.length);var o=Array(s),r=0;o[0]=0;for(var a=1;a<s;a++){for(e[a]==e[r]?o[a]=o[r]:o[a]=r;r>0&&e[a]!=e[r];)r=o[r];e[a]==e[r]&&r++}r=0;for(var i=n;i<t.length;i++){for(;r>0&&t[i]!=e[r];)r=o[r];t[i]==e[r]&&r++}return r}var ge="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",fs=new RegExp("[".concat(ge,"]+|\\s+|[^").concat(ge,"]"),"ug"),Ce=new R;Ce.equals=function(t,e,n){return n.ignoreCase&&(t=t.toLowerCase(),e=e.toLowerCase()),t.trim()===e.trim()};Ce.tokenize=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n;if(e.intlSegmenter){if(e.intlSegmenter.resolvedOptions().granularity!="word")throw new Error('The segmenter passed must have a granularity of "word"');n=Array.from(e.intlSegmenter.segment(t),function(r){return r.segment})}else n=t.match(fs)||[];var s=[],o=null;return n.forEach(function(r){/\s/.test(r)?o==null?s.push(r):s.push(s.pop()+r):/\s/.test(o)?s[s.length-1]==o?s.push(s.pop()+r):s.push(o+r):s.push(r),o=r}),s};Ce.join=function(t){return t.map(function(e,n){return n==0?e:e.replace(/^\s+/,"")}).join("")};Ce.postProcess=function(t,e){if(!t||e.oneChangePerToken)return t;var n=null,s=null,o=null;return t.forEach(function(r){r.added?s=r:r.removed?o=r:((s||o)&&ct(n,o,s,r),n=r,s=null,o=null)}),(s||o)&&ct(n,o,s,null),t};function ct(t,e,n,s){if(e&&n){var o=e.value.match(/^\s*/)[0],r=e.value.match(/\s*$/)[0],a=n.value.match(/^\s*/)[0],i=n.value.match(/\s*$/)[0];if(t){var l=it(o,a);t.value=ke(t.value,a,l),e.value=Y(e.value,l),n.value=Y(n.value,l)}if(s){var u=ut(r,i);s.value=De(s.value,i,u),e.value=ce(e.value,u),n.value=ce(n.value,u)}}else if(n)t&&(n.value=n.value.replace(/^\s*/,"")),s&&(s.value=s.value.replace(/^\s*/,""));else if(t&&s){var f=s.value.match(/^\s*/)[0],d=e.value.match(/^\s*/)[0],g=e.value.match(/\s*$/)[0],p=it(f,d);e.value=Y(e.value,p);var h=ut(Y(f,p),g);e.value=ce(e.value,h),s.value=De(s.value,f,h),t.value=ke(t.value,f,f.slice(0,f.length-h.length))}else if(s){var m=s.value.match(/^\s*/)[0],C=e.value.match(/\s*$/)[0],x=lt(C,m);e.value=ce(e.value,x)}else if(t){var w=t.value.match(/\s*$/)[0],S=e.value.match(/^\s*/)[0],v=lt(w,S);e.value=Y(e.value,v)}}var ds=new R;ds.tokenize=function(t){var e=new RegExp("(\\r?\\n)|[".concat(ge,"]+|[^\\S\\n\\r]+|[^").concat(ge,"]"),"ug");return t.match(e)||[]};var Te=new R;Te.tokenize=function(t,e){e.stripTrailingCr&&(t=t.replace(/\r\n/g,`
`));var n=[],s=t.split(/(\n|\r\n)/);s[s.length-1]||s.pop();for(var o=0;o<s.length;o++){var r=s[o];o%2&&!e.newlineIsToken?n[n.length-1]+=r:n.push(r)}return n};Te.equals=function(t,e,n){return n.ignoreWhitespace?((!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim()),(!n.newlineIsToken||!e.includes(`
`))&&(e=e.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(t.endsWith(`
`)&&(t=t.slice(0,-1)),e.endsWith(`
`)&&(e=e.slice(0,-1))),R.prototype.equals.call(this,t,e,n)};function ms(t,e,n){return Te.diff(t,e,n)}var hs=new R;hs.tokenize=function(t){return t.split(/(\S.+?[.!?])(?=\s+|$)/)};var ps=new R;ps.tokenize=function(t){return t.split(/([{}:;,]|\s+)/)};function Le(t){"@babel/helpers - typeof";return Le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Le(t)}var Z=new R;Z.useLongestToken=!0;Z.tokenize=Te.tokenize;Z.castInput=function(t,e){var n=e.undefinedReplacement,s=e.stringifyReplacer,o=s===void 0?function(r,a){return typeof a>"u"?n:a}:s;return typeof t=="string"?t:JSON.stringify(Ne(t,null,null,o),o,"  ")};Z.equals=function(t,e,n){return R.prototype.equals.call(Z,t.replace(/,([\r\n])/g,"$1"),e.replace(/,([\r\n])/g,"$1"),n)};function Ne(t,e,n,s,o){e=e||[],n=n||[],s&&(t=s(o,t));var r;for(r=0;r<e.length;r+=1)if(e[r]===t)return n[r];var a;if(Object.prototype.toString.call(t)==="[object Array]"){for(e.push(t),a=new Array(t.length),n.push(a),r=0;r<t.length;r+=1)a[r]=Ne(t[r],e,n,s,o);return e.pop(),n.pop(),a}if(t&&t.toJSON&&(t=t.toJSON()),Le(t)==="object"&&t!==null){e.push(t),a={},n.push(a);var i=[],l;for(l in t)Object.prototype.hasOwnProperty.call(t,l)&&i.push(l);for(i.sort(),r=0;r<i.length;r+=1)l=i[r],a[l]=Ne(t[l],e,n,s,l);e.pop(),n.pop()}else a=t;return a}var je=new R;je.tokenize=function(t){return t.slice()};je.join=je.removeEmpty=function(t){return t};var de=(t=>(t.ADDED="added",t.REMOVED="removed",t.UNCHANGED="unchanged",t))(de||{});function _e(t){if(t==="")return 0;const e=t.split(`
`).length;return t.endsWith(`
`)?e-1:e}function gs(t,e){return ms(t,e,{newlineIsToken:!0}).map(s=>({count:s.count??_e(s.value),value:s.value,type:s.added?"added":s.removed?"removed":"unchanged"}))}function vs(t){let e="";for(const{type:n,value:s}of t)(n==="added"||n==="unchanged")&&(e+=s);return e}function Cs(t,e){const n=_e(e),s=xs(t,n);return{changes:gs(s,e),numLinesDiffed:n}}function Ts(t){const e=[...t],n=[],s=[];for(;e.length>0;){const o=e[e.length-1];if(o.type===de.REMOVED)e.pop(),o.type===de.REMOVED&&n.unshift(o);else if(o.type===de.ADDED)e.pop(),s.unshift(o);else break}return{prunedChanges:[...e,...s],prunedRemovedChanges:n}}function ys(t,e){const{changes:n,numLinesDiffed:s}=Cs(t,e),{prunedChanges:o,prunedRemovedChanges:r}=Ts(n),a=vs(o),i=r.map(u=>u.value).join(`
`),l=Et(t,s,"start");return{content:a+i+l,numLinesDiffed:_e(a)}}function xs(t,e){if(e<=0)return"";let n=0,s=t.length;for(let o=0;o<t.length;o++)if(t[o]===`
`&&(n++,n===e)){s=o+1;break}return t.substring(0,s)}function Et(t,e,n="start"){if(e<=0)return t;if(n==="start"){let a=0;for(let i=0;i<t.length;i++)if(t[i]===`
`&&(a++,a===e))return t.substring(i+1);return""}let s=0,o=-1;const r=t.endsWith(`
`)?e+1:e;for(let a=t.length-1;a>=0;a--)if(t[a]===`
`&&(s++,s===r)){o=a;break}return o===-1?"":t.substring(0,o+1)}function ws(t,e){const n=t?.type??fe.LOADING,s=t?.content??"",o=!!t?.isPartial;if(!Q(n)||e==null||!o||t?.isRewriting!==!0)return{content:s,currentlyStreamingLineIndex:null};const r=Et(s,1,"end");if(r==="")return{content:e.content,currentlyStreamingLineIndex:0};const a=ys(e.content,r);return{content:a.content,currentlyStreamingLineIndex:a.numLinesDiffed}}function Es(t,e){const n=new Set(t.map(i=>i.id)),s=new Set(e.map(i=>i.id)),o=t.filter(i=>!s.has(i.id)).map(i=>({...i,diffStatus:nt.REMOVED})),r=e.filter(i=>!n.has(i.id)).map(i=>({...i,diffStatus:nt.ADDED})),a=t.filter(i=>s.has(i.id));return o.concat(r,a)}function bs({textdocVersion:t}){const e=$(),n=$t(),[s,o]=T.useState(!1),r=Ut(),a=T.useRef(t?.content??"");T.useEffect(()=>{a.current=t?.content??""},[t]);const i=l=>{s||(r(()=>{O.logButtonClick(he.COPY,{contentLength:a.current.length,textdocType:t?.type}),Zt(a.current,n,l)},0),o(!0),r(()=>o(!1),2e3))};return c.jsx(me,{label:e.formatMessage(Ss.copy),children:c.jsx(X,{icon:s?qn:Hn,onClick:i})})}const Ss=Re({copy:{id:"rbIYfo",defaultMessage:"Copy"}});function Is({textdocId:t,version:e,isHistorical:n,isShowingChanges:s,latestVersionInt:o,nextVersion:r,previousVersion:a,onHoverPrevious:i,textdocType:l}){const u=$(),f=e==null||e===1,d=e!=null&&e>1;return f&&!n?null:c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx(me,{label:d&&u.formatMessage({id:"PoD5+8",defaultMessage:"Previous version"}),children:c.jsx(X,{disabled:!d,icon:$n,onMouseOver:i,onClick:()=>{O.logButtonClick(he.HISTORY_PREVIOUS,{textdocType:l}),t&&e&&d&&Ae(t,{beforeVersion:e},s&&a!=null?a:void 0)}})}),c.jsx(me,{label:n&&u.formatMessage({id:"PJ8YVJ",defaultMessage:"Next version"}),children:c.jsx(X,{disabled:!n,icon:Un,onClick:()=>{O.logButtonClick(he.HISTORY_NEXT,{textdocType:l}),n&&(r?Ae(t,{version:r},s?r:void 0):s&&o?Tt(t,o,null):ve(t))}})})]})}function As({textdocId:t,history:e,version:n,isShowingChanges:s}){const o=yt(),r=$(),a=()=>{e?Ae(t,e):ve(t)},i=(n?.versionInt??0)>1,l=()=>{n?.versionInt!=null&&Tt(t,n.versionInt,e)},u=()=>{n?.versionInt!=null&&o(t,n.versionInt)};return c.jsx(me,{label:i&&r.formatMessage(Ms.showChanges),children:c.jsx(X,{icon:Fn,disabled:!i,onClick:s?a:l,onMouseOver:u,className:s?"enabled:bg-token-main-surface-secondary":void 0})})}const Ms=Re({done:{id:"0MCBfo",defaultMessage:"Done"},showChanges:{id:"3jMGNS",defaultMessage:"Show changes"}}),Ds=800,ks=100,ft=100,Ls=({textdocId:t,isHistoricalVersion:e,nextHistoricalTextdocVersion:n,previousHistoricalTextdocVersion:s,textdocVersion:o,readonlyReason:r,history:a,latestVersionInt:i,hasDebug:l,contentWidth:u,isEmbedded:f,isPersisting:d,isShowChangesFeatureEnabled:g,isShowingChanges:p,hideHistoryActions:h=!1,prefetchHistoricalTextdocVersion:m,restoreHistoricalTextdocVersion:C,setShowDebugView:x,onClose:w})=>{const S=Kt(o?.title??""),[{width:v},I]=xt(),b=u-v-ks-ft>0;return c.jsxs(J.Header,{children:[c.jsxs("div",{className:"flex flex-1 items-center leading-[0]",children:[c.jsx(J.CloseButton,{onClick:w}),b&&c.jsx("div",{className:"flex flex-row items-center gap-2.5",children:c.jsx(J.Title,{style:{maxWidth:u-v-ft},children:S||c.jsx("div",{className:"w-52",children:c.jsx(es,{lines:1,size:"base",width:100,widthVariance:0})})})}),d&&c.jsx(en,{size:12,className:"pl-2 text-token-text-secondary"})]}),c.jsxs("div",{className:"flex select-none items-center gap-2 leading-[0]",ref:I,children:[c.jsxs("div",{className:Ie("flex items-center gap-2 transition-opacity duration-500",r===j.Streaming&&"pointer-events-none opacity-0"),children:[l&&u>Ds&&c.jsx(X,{icon:Bn,onClick:()=>x(L=>!L)}),!h&&c.jsx(Is,{textdocId:t,isHistorical:e,isShowingChanges:p,version:o?.versionInt,previousVersion:s?.versionInt,nextVersion:n?.versionInt,readonlyReason:r,onHoverPrevious:m,onClickRestore:C,textdocType:o?.type,latestVersionInt:i}),!h&&g&&c.jsx(As,{textdocId:t,history:a,version:o,isShowingChanges:p}),c.jsx(bs,{textdocVersion:o})]}),!f&&c.jsx(Qn,{})]})]})},Ns=/\s/,js=30;function dt(t,e){const n=t.indexOf(e);return n===-1?!1:t.indexOf(e,n+e.length)===-1}function P(t,e){return Ns.test(t[e])}function mt(t,e,n=!1){if(e===0||n&&P(t,e-1))return e;for(;e>0&&P(t,e-1);)e--;for(;e>0&&!P(t,e-1);)e--;return P(t,e)&&e++,e}function ht(t,e,n=!1){if(e===t.length||n&&P(t,e))return e;for(;e<t.length&&P(t,e);)e++;for(;e<t.length&&!P(t,e);)e++;return P(t,e-1)&&e--,e}function Rs(t,e,n=!0,s=js){if(t.start<0||t.end>e.length||t.start>t.end)throw new Error("Invalid commentSourceRange provided.");const o=e.substring(t.start,t.end);let r=t.start,a=t.end;n&&(r=mt(e,r,!0),a=ht(e,a,!0));let i=e.substring(r,t.start),l=e.substring(t.end,a),u=`${i}${o}${l}`;if(dt(e,u)&&(s==null||u.length>=s))return{before:i,after:l,allSurrounding:u};let f=r,d=a,g=!0;for(;g&&(s==null||u.length<s);){let p=!1;const h=f>0?mt(e,f):f;h<f&&(f=h,p=!0);const m=d<e.length?ht(e,d):d;if(m>d&&(d=m,p=!0),p){const C=e.substring(f,t.start),x=e.substring(t.end,d),w=`${C}${o}${x}`;if(dt(e,w)&&(s==null||w.length>=s))return{before:C,after:x,allSurrounding:w};i=C,l=x,u=w}else g=!1}return{before:i,after:l,allSurrounding:u}}const K="# Context",ee="# Instructions";function te(t,e,n){if(e==null||n==null)return`The user is referring to the entire text of "${t}".`;const s=`
## Selected Text
The user has selected this text in "${t}" in particular:
${e}
`.trim();return n.allSurrounding===e?s:`
${s}

## Surrounding Context
Here is the surrounding context:
${n.allSurrounding}
`.trim()}function bt(t,e){return t==null||e==null?"entire document":t===e.allSurrounding?"selected text":"surrounding context"}function St(t){return`For the update pattern, create a regex which exactly matches the ${t}. Edit just this string in order to fullfill the user's request. NEVER rewrite the entire document. Instead, ALWAYS edit ONLY the ${t}. The only exception to this rule is if the ${t} includes markdown lists or tables. In that case, fully rewrite the document using ".*" as the regex update pattern.`.trim()}function _s(t,e,n,s){if(!Q(e)&&n&&s){const o=bt(n,s);return`
${K}
The user requests that you directly edit the document.

${te(t,n,s)}

${ee}
Use the update_textdoc tool to make this edit. ${St(o)}`.trim()}return`
${K}
The user requests that you directly edit the document.

${te(t,n,s)}

${ee}
Use the update_textdoc tool to make this edit. You MUST fully rewrite the entire document by using ".*" as the update regex pattern.`.trim()}function Os(t,e,n){return`
${K}
The user requests that you add comments about some text.

${te(t,e,n)}

${ee}
Do not respond to the user's question directly, just leave comments.`.trim()}function Ps(t,e){return Q(t)?e==="entire document"?` If you choose to update the ${e}, you MUST fully rewrite the ${e} by using ".*" as the update regex pattern.`:` If you choose to update the ${e}, you MUST fully rewrite the entire document by using ".*" as the update regex pattern. When you do so, ONLY modify the ${e} and rewrite other sections exactly as is, except for parts that must change based on this update`:e==="entire document"?"":` If you choose to update the ${e}, follow these instructions: ${St(e)}`}function qs(t,e,n,s){const o=bt(n,s),r=Ps(e,o);return`
${K}
${te(t,n,s)}

${ee}
The user would like you perform one of the following actions:
- Update the ${o} via the \`update_textdoc\` tool.${r}
- Explain the selected text via chat, or answer a general question about the selected text (no tool call required).
- Comment on the ${o} with feedback via the \`comment_textdoc\` tool. This should only be used if the user very explicitly asks for feedback, critique, or comments.

Based on the user's request, choose the appropriate action.
`.trim()}function Hs(t,e,n){return`
${K}
${te(t,e,n)}

${ee}
The user would like you to create a new textdoc.
`.trim()}function $s(t,e,n,s=null,o=null){switch(n){case F.ASK:return qs(t,e,s,o);case F.CREATE_TEXTDOC:return Hs(t,s,o);case F.EDIT:return _s(t,e,s,o);case F.COMMENT:return Os(t,s,o)}}function Us(t){const e=ts(),n=An(t),s=ns(t)??e.id,o=Mn({clientThreadId:t});return async function(r){const a=new tn,i=Yn.getThreadCurrentLeafId(t),l=performance.now(),u=await Ft(),[f,d,g]=await Promise.all([Bt.getEnforcementToken(u),nn.getEnforcementToken(u),Vt.getEnforcementToken(u)]);o({model:s,completionType:zt.Next,parentNodeId:i,metadata:{eventSource:"mouse"},completionMetadata:{conversationMode:n},chatReq:u,arkoseToken:f??null,turnstileToken:d??null,proofToken:g??null,preflightTime:performance.now()-l,appendMessages:r,turnTracker:a})}}function Fs(t){switch(t){case M.ACCELERATOR:case M.ACCEPT_COMMENT:return!0;case M.ASK_CHATGPT:case M.FULL_SCREEN_SUBMIT:return!1}}function Bs(t,e){switch(e){case M.ASK_CHATGPT:case M.ACCEPT_COMMENT:case M.FULL_SCREEN_SUBMIT:return t.formatMessage(zs.askChatGPT);case M.ACCELERATOR:return}}const Vs=(t,e)=>{const n=Us(t),s=$();return T.useCallback(({content:o,sourceRange:r,action:a,userMessageType:i,acceleratorMetadata:l,selectionMetadata:u})=>{if(e?.versionInt==null)return;const{textdocId:f,type:d,versionInt:g,content:p}=e;let h,m=null;r&&(h=p.slice(r.start,r.end),m=Rs(r,p)),n([sn([o],{canvas:{textdoc_id:f,textdoc_type:d,version:g,textdoc_content_length:p.length,user_message_type:i,accelerator_metadata:l,selection_metadata:u},is_visually_hidden_from_conversation:Fs(i),targeted_reply:h,targeted_reply_label:Bs(s,i),open_in_canvas_view:{type:"canvas_textdoc",id:f}}),on([$s(f,d,a,h,m)],{exclude_after_next_user_message:!0})])},[n,s,e])},zs=Re({askChatGPT:{id:"h5ANdM",defaultMessage:"Asked ChatGPT"}});function Gs(t){const e=/\[([^\]]+)\]\((https?:\/\/[^\s)]+|www\.[^\s)]+)\)/gi,n=new Set,s=t.matchAll(e);for(const o of s){const r=o[2];try{let a=r;a.startsWith("www.")&&(a="http://"+r),new URL(a),n.add(r)}catch{}}return n}const Ys=async({lastVersion:t,textdocId:e,content:n,comments:s})=>{const o=rn(s,n);return(await gt.safePost("/textdoc/{textdoc_id}",{parameters:{path:{textdoc_id:e}},requestBody:{version:t,content:n,comments:o}})).version},Js=()=>{const t=T.useRef([]),e=T.useRef(null),{mutateAsync:n,isPending:s}=Gt({mutationKey:["canvas","textdoc","persist"],mutationFn:Ys});return[T.useCallback(async(r,a,i)=>{const l=new AbortController,f=(async()=>{const[h]=t.current;try{await h?.promise}catch(m){O.logError("Saving document",m)}if(!l.signal.aborted)try{const m=Math.max(e.current??0,r.versionInt??wt);let C="";try{et(a)?C=a():C=a}catch(v){O.logError("Serializing document",v)}let x=[];try{et(i)?x=i():x=i}catch(v){O.logError("Adjusting comments",v)}const{textdocId:w}=r;an({textdocId:w,basedOnVersionInt:m,content:C,comments:x});const S=await n({textdocId:w,lastVersion:m,content:C,comments:x});un({textdocId:w,basedOnVersionInt:m,newVersion:S}),e.current=S}catch(m){O.logError("Error saving document",m)}finally{t.current.shift()}})(),d={abort:()=>l.abort(),promise:f},[g,p]=t.current;return p&&(p.abort(),t.current=g?[g]:[]),t.current=g?[g,d]:[d],f},[n]),t,s]},Ws=3e3,Qs=t=>{const[e,n,s]=Js(),o=$(),r=T.useRef(null),a=T.useCallback(ln(e,Ws,{leading:!1}),[e]),i=cn(t);return T.useEffect(()=>{if(!i)return;const u=tt(window,{pagehide:()=>a.flush(),beforeunload:d=>{a.flush(),d.returnValue=o.formatMessage({id:"QZrKwi",defaultMessage:"You have a canvas save in progress."})}}),f=tt(document,{visibilitychange:()=>a.flush(),keydown:()=>{r.current="keyboard"},mousemove:()=>{r.current!=="mouse"&&a.flush(),r.current="mouse"}});return()=>{r.current=null,f(),u()}},[o,i,a]),T.useEffect(()=>()=>{a.flush()},[t,a]),fn(async()=>{await a.flush(),await Promise.allSettled(n.current?.map(({promise:u})=>u)??[])}),[T.useCallback((u,f,d)=>{const{textdocId:g}=u;return dn(g),a(u,f,d)},[a]),a.flush,s||i]};function Xs(t,e,n){const s=vt(),o=n!=null&&e!=null,{data:r,error:a,fetchNextPage:i,hasNextPage:l,isFetching:u}=Yt(pt(t,e,o)),f=T.useCallback(async()=>{const m=e!=null;await s.prefetchInfiniteQuery(pt(t,e,m))},[s,t,e]);T.useEffect(()=>{const m=e;return()=>{s.removeQueries({queryKey:It(t,m),exact:!0})}},[s,t,e]);const[d,g,p,h]=T.useMemo(()=>{if(r&&n){const C=r.pages.flatMap(w=>w),x=C.findIndex(w=>"beforeVersion"in n?(w.versionInt??wt)<n.beforeVersion:w.versionInt===n.version);if(x!==-1)return[x===C.length-1,C[x],x>0?C[x-1]:null,x<C.length-1?C[x+1]:null]}const m=r?.pages.flatMap(C=>C)??[];return[!0,null,null,m.length===0?null:m[0]]},[r,n]);return T.useEffect(()=>{!u&&o&&l&&d&&i()},[u,o,l,d,i]),T.useEffect(()=>{!g&&a&&ve(t)},[g,a,t]),{historicalTextdocVersion:g,nextHistoricalTextdocVersion:p,prefetchHistoricalTextdocVersion:f,previousHistoricalTextdocVersion:h}}function It(t,e=null){return["textdocHistory",t,e]}function pt(t,e,n=!0){return{queryKey:It(t,e),queryFn:({pageParam:s})=>Zs(t,s),initialPageParam:e??void 0,getNextPageParam:s=>{const o=mn(s)?.versionInt;if(o&&o>1)return o},enabled:n,staleTime:1/0,retry:2}}async function Zs(t,e){return e===void 0?[]:(await gt.safeGet("/textdoc/{textdoc_id}/history",{parameters:{path:{textdoc_id:t},query:{before_version:e}}})).previous_doc_states.map(({id:s,version:o,textdoc_type:r,title:a,content:i,updated_at:l,comments:u})=>({textdocId:s,versionInt:o,messageId:null,title:a,type:hn(r),content:i,createdAt:pn(l),comments:gn(u,i)}))}const go=({isFullScreen:t=!1,isEmbedded:e=!1,hideHeader:n=!1,readonlyReason:s,clientThreadId:o,focusedTextdoc:r,onClose:a,isAnimating:i=!1,width:l})=>{const{textdocId:u,history:f,showChangesAtVersion:d=null}=r,[g,p,h]=Qs(u),{targetedContent:m}=vn(),C=Xn(),[x,w]=T.useState(!1),S=Zn(u),v=Kn(),I=Jn(o),b=Cn(I),[L,B]=xt(),q=Tn(),{data:D}=yn(u,q?d:null),_=S?.versions??[],Oe=_[0]?.versionInt,{historicalTextdocVersion:ne,nextHistoricalTextdocVersion:At,previousHistoricalTextdocVersion:Pe,prefetchHistoricalTextdocVersion:Mt}=Xs(u,Oe,f),Dt=yt();T.useEffect(()=>{pe.reset()},[u]),T.useEffect(()=>{S?.metadata?.textdocId&&st().sendMessage({type:Me.Loaded})},[S?.metadata?.textdocId]);const qe=_.length>0?_[_.length-1]:null,ye=_.length>1?_[_.length-2]:null,He=Wn(o),{restoreHistoricalTextdocVersion:$e,optimisticRestoredTextdocVersion:kt}=xn(He,qe,ne),V=f!=null,E=V?ne:qe,se=q&&d!=null,oe=Vs(o,E),Ue=i||!q?null:D,re=(()=>{if(i)return[];const y=E?.comments.filter(N=>N.status!==Sn.DISMISSED)??[];return E==null?y:!se&&ne!=null?ne.comments:!se||D==null?y:D.contentBefore!==D.contentAfter?[]:Es(D.commentsBefore,D.commentsAfter)})(),ae=E?.type??fe.LOADING,H=!!E?.isPartial;T.useEffect(()=>{_.length===0&&!v&&a?.()},[_.length,a,v]);const Lt=!!s&&s!==j.OldVersion,xe=H&&!!E?.isRewriting,Nt=H&&!!E?.isCreation,{content:ie,currentlyStreamingLineIndex:Fe}=D?.contentBefore!=null&&!Q(ae)?{content:D.contentBefore,currentlyStreamingLineIndex:null}:ws(E,ye),jt=ss(He,Array.from(Gs(ie))),[ue,we]=os({value:ie,isRequestActive:b,isTextdocStreaming:H,comments:re}),Be=wn(E),Ve=H||b||ue||h;T.useEffect(()=>{st().sendMessage({type:Me.Streaming,streaming:Ve})},[Ve]);const Rt=({getSerializedDocument:y,getAdjustedComments:k})=>{E&&g(E,y,k)},_t=y=>{if(!E)return;const k=y.doc.toString();g(E,k,y.field(jn,!1)??[])},ze=(y,k,N,U)=>{we(!0),oe({action:k,content:y,userMessageType:M.ASK_CHATGPT,sourceRange:N,selectionMetadata:{selection_type:U,selection_position_range:N}})},Ge=({id:y})=>{Be(y,ot.DISMISS),pe.reset()},Ye=async y=>{we(!0);const{id:k,at:N,content:U}=y;if(await Be(k,ot.ACCEPT)===!1)return we(!1);oe({content:U,userMessageType:M.ACCEPT_COMMENT,sourceRange:N,action:F.EDIT,selectionMetadata:{selection_type:rt.SELECTION,selection_position_range:N}})},Ee=(y,k,N)=>{const{action:U}=N;oe({action:U,content:k,sourceRange:y,userMessageType:M.ACCELERATOR,acceleratorMetadata:{action:U,id:N.id,prompt:k},selectionMetadata:y!=null?{selection_type:rt.SELECTION,selection_position_range:y}:void 0})},Ot=y=>{oe({action:F.EDIT,content:y,userMessageType:M.FULL_SCREEN_SUBMIT})},Pt=Jt(),qt=vt(),Ht=En(({resolveTempCommentId:y})=>y),Je=y=>Ht[y]||y,be=()=>Ln({clientThreadId:o,currentRequestId:I,queryClient:qt,isHistoryAndTrainingDisabled:Pt});let A=s;V?A=j.OldVersion:se?A=j.ShowingChanges:kt!=null?A=j.Restoring:(H||b)&&(A=j.Streaming);let le=null;const We=i||A!=null||ue,Qe=()=>{if(i&&re.length>0)return G.ALL_HIDDEN;if(A==null)return G.ENABLED;switch(A){case j.Streaming:return G.ENABLED;case j.ShowingChanges:case j.OldVersion:return G.COMMENTS_READONLY;default:return G.ALL_HIDDEN}},Xe=t||i;let Se=[];switch(ae){case fe.LOADING:le=c.jsx(Nn,{});break;case fe.DOCUMENT:le=c.jsx(kn,{value:ie,comments:re,previousValue:ye?.content,previousComments:ye?.comments,isRewriting:xe,isAnimatingFromPreview:i,getStableCommentId:Je,diff:Ue,isRequestActive:b,isDisabled:A!=null||v,isWaitingForCommentResponse:ue,hideAccelerators:Xe,hideToolbar:We,hideEditOverlay:i,commentsMode:Qe(),readonlyReason:A,canvasContentRect:L,onBlur:p,onSave:p,onChange:Rt,onCancelRequest:be,targetedContent:m,onAddComment:ze,onAcceptComment:Ye,onDismissComment:Ge,onSubmitAccelerator:Ee,safeUrls:jt,width:l,modelCursor:H&&!xe?E?.modelCursor:void 0,shouldResetSelection:E?.versionInt===1}),Se=On;break;default:Q(ae)&&(le=c.jsx(Dn,{id:"codemirror",getStableCommentId:Je,language:bn(ae),value:ie,comments:re,hideAccelerators:Xe,commentsMode:Qe(),hideToolbar:We,onSubmitAccelerator:Ee,currentlyStreamingLineIndex:Fe??null,readonlyReason:A,isRequestActive:b,isWaitingForCommentResponse:ue,onChange:_t,onCancelRequest:be,onAddComment:ze,onDismissComment:Ge,onAcceptComment:Ye,textdocDiff:Ue??void 0,modelCursor:H&&Fe==null?E?.modelCursor:void 0}),Se=Rn)}return c.jsxs(J,{children:[!n&&c.jsx(Ls,{textdocId:u,isHistoricalVersion:V,nextHistoricalTextdocVersion:At,previousHistoricalTextdocVersion:Pe,textdocVersion:E,readonlyReason:A,history:f,hasDebug:C,contentWidth:L.width,isEmbedded:e,isPersisting:h,isShowChangesFeatureEnabled:q,isShowingChanges:se,latestVersionInt:Oe,hideHistoryActions:A===j.QueryParam,prefetchHistoricalTextdocVersion:()=>{Mt();const y=Pe?.versionInt;y!=null&&Dt(u,y)},restoreHistoricalTextdocVersion:$e,setShowDebugView:w,onClose:()=>{O.logButtonClick(he.CLOSE_TEXTDOC,{textdocType:E?.type}),a?.()}}),c.jsxs(J.Content,{ref:B,scrollToBottomMode:Nt?"bottom":"top",shouldScrollToTop:xe,children:[!1,le]}),c.jsx(Ct,{children:V&&!Lt&&c.jsx(rs,{onClickRestore:$e,onClickResetLatest:()=>ve(u)})}),t&&!V&&c.jsx("div",{className:"relative flex items-center justify-center pb-3",children:c.jsx(ls,{isRequestActive:b,clientThreadId:o,onSubmitAccelerator:Ee,onSubmit:Ot,onCancel:be,acceleratorActions:Se})})]})};export{Me as C,go as T};
//# sourceMappingURL=jfvuvuj4kke403dn.js.map