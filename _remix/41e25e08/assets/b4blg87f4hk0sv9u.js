import{f8 as T,bx as N,r as d,t as n,cF as V,f9 as B,T as q,fa as P}from"./ius2rjc8aciuj2rl.js";import{fr as $,fs as Y,am as g,ft as K,cz as J,fu as X,fv as Q,fw as Z,fx as ee,fy as te,fz as se,fA as ae,fB as oe,fC as j,fD as ne,fE as W,fF as ie,fG as re,fH as ce,fI as _,af as de,fJ as R}from"./jdz9mwngh3t5nytb.js";import{L as le}from"./frgkesjr4ohtrucy.js";import{e as ue,f as fe,u as pe,g as me}from"./n0xyk1p8mg8xlrhw.js";import{u as D,U as F}from"./kjc4oshqrhzrg3a0.js";import{f as he}from"./flwz54elvf71vzv6.js";import{T as xe}from"./jztv8relggk7ivv2.js";import{B as ge,i as ve,D as be,E as Ce}from"./ohr11q9jfhdrs62c.js";import{m as h}from"./og6klen52wg15s6b.js";import"./lzyd9n5t1klxadwf.js";import"./nsq2pgu8tq1tcawc.js";import"./fhdlfdpwiavhel0q.js";import"./oy4uroqongt50tdh.js";import"./jxn2hsz21dzfafcn.js";import"./neli2etkemqy682b.js";import"./bt3rjqq715dlb9rk.js";import"./e695g0c5z01sstpf.js";import"./gh97h5wmaiswo7ni.js";import"./vx5bizwg1cu9jie5.js";import"./o9abjlquvgplxwex.js";import"./itvvna1wmnp67bph.js";import"./bixdynutlthfnow9.js";import"./bii0ba6df7fk4nts.js";import"./nrbhchjhpmcxnzn5.js";import"./nz7exheo0ysu8iuh.js";import"./kmnmauzwuq5adycj.js";import"./nhypl2d7pkfgtosq.js";import"./eqm4edxaoi446921.js";import"./iwwjngk487xweh0v.js";const M="oai/apps/canmoreSidebarWidth",we=.25,ye=400,O=400;function k(e){return e-ye}function w(e,o){return Y(O,k(e),o??we*e)}function Te(){const e=T.useState(T.selectWindowWidth),o=w(e,$(N.DANGER_SECRET_FOLDERS_ONLY_getItem(M))),s=L(),[t,i]=d.useState(o);d.useEffect(()=>{(t<O||t>k(e))&&i(w(e,t))},[e]);function a(c){i(p=>w(e,p+=c.delta.x))}function r(c){i(c),N.DANGER_SECRET_FOLDERS_ONLY_setItem(M,c)}function l(){const c=w(e,void 0);r(c)}const f=`calc(100vw - ${t}px)`;return s?{chatWidth:t,canvasWidth:e-t,canvasWidthCalc:f,viewportWidth:e,handleDrag:a,handleDoubleClick:l,persist:r}:{chatWidth:0,canvasWidth:e,canvasWidthCalc:"100vw",viewportWidth:e,handleDrag:()=>{},handleDoubleClick:()=>{},persist:()=>{}}}function L(){return T.useState(e=>T.selectWindowWidth(e)>1e3)}function Ie(e,o){let s;return o?.type===g.Textdoc&&(s={type:"canvas_textdoc",id:o.textdocId}),{...e,messageMetadata:{...e.messageMetadata,open_in_canvas_view:s}}}const z=({isFullScreen:e=!1,clientThreadId:o,focusedObject:s,onClose:t,isAnimating:i=!1,width:a})=>{const{setTargetedContent:r}=K(),l=d.useRef(!1);if(d.useEffect(()=>(l.current&&r(void 0),l.current=!0,()=>{l.current=!1}),[s]),s==null)return null;switch(s.type){case g.Textdoc:return n.jsx(xe,{isFullScreen:e,onClose:t,clientThreadId:o,focusedTextdoc:s,isAnimating:i,width:a});case g.ADAVisualization:return null}},Se=300,Ee=e=>e?.type===g.Textdoc?e.textdocId:null;function Ae(e){const o=ge(e),s=J(o),t=ve(e),i=be(e,t),a=Ce({clientThreadId:e,conversationLeafId:t}),r=ue(),[l,f]=d.useMemo(()=>{let x;return!a&&i&&(x=X(Q(i.messages))),Ne(s,r,x)},[a,i,s,r]),c=f!=null,p=Ee(f);d.useEffect(()=>{if(f&&l&&(Z(f,l),f.type===g.Textdoc)){const{textdocId:x}=f,I=ne(x);ee(document.getElementById(I))}},[c,p])}function Ne(e,o,s){switch(s?.type){case te.Canmore:{const[t,i]=s.messages;if(!se(t?.message))break;const a=ae(e,t.message,i?.message??null),r=a.textdocId??o;if(r&&(a.function===oe.CreateTextdoc?(a.content??"").length>Se||a.status===j.WAITING:a.status===j.STREAMING))return[a.messageId,{type:g.Textdoc,textdocId:r}];break}}return[void 0,null]}const je=260,y={type:"spring",bounce:.12,duration:.64},_e={type:"spring",bounce:0,duration:.58},Re=({clientThreadId:e,focusedObject:o,onClose:s})=>{const{chatWidth:t,canvasWidthCalc:i,handleDrag:a,handleDoubleClick:r,persist:l}=Te(),[f,c]=d.useState(!0),[p,x]=d.useState(!1),I=D(u=>u.activeSidebar),S=re(({rect:u})=>u),{windowHeight:v,windowWidth:b}=B(u=>u,{windowWidth:0,windowHeight:0});let m=S??{top:0,left:t,width:b-t,height:v},A=!1;if(S&&(m.top<0||m.top+m.height>v)){A=!0;const u={width:(b-t)*.75,height:v*.75};m={top:v/2-u.height/2,left:(b-t-u.width)/2+t,width:u.width,height:u.height}}const C=S?.borderRadius,E=fe(),H=E?.history!=null||E?.showChangesAtVersion!=null,G=D(u=>u.isDesktopNavCollapsed);return n.jsxs(n.Fragment,{children:[H&&n.jsx(le,{onClick:()=>ce(E.textdocId),zIndexKey:"chatOverlay"}),n.jsxs(h.div,{initial:{marginRight:G?0:-je},animate:{marginRight:0},transition:_e,children:[n.jsx(h.div,{initial:{opacity:1},animate:{opacity:0},exit:{opacity:[1,0]},transition:{...y,delay:.22},className:"pointer-events-none absolute left-0 top-0 z-20 h-full w-full bg-token-main-surface-primary"}),n.jsx(h.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-black/[0.025] dark:bg-transparent"}),n.jsx(h.div,{className:"relative z-20 h-full",style:{width:i},exit:{width:0},transition:{type:"spring",bounce:0,duration:.1}})]}),n.jsx(h.div,{className:q("absolute z-20 h-full overflow-hidden transition-shadow",I==="debug"?"md:left-[-250px] lg:left-[-300px] xl:left-[-350px] 2xl:left-[-400px]":"left-0"),initial:{opacity:A?0:1,x:m.left,y:m.top,width:m.width,height:m.height,borderRadius:C,boxShadow:"0px 12px 32px 0px rgba(0, 0, 0, 0.064)"},animate:{opacity:1,x:t,y:0,width:i,height:"100%",borderRadius:0,boxShadow:"0px 0px 18px rgba(0,0,0,0.075)"},exit:{scale:.64,opacity:0,filter:"blur(12px)",transition:{opacity:{duration:.14,bounce:.1}},borderRadius:C,boxShadow:"0px 12px 32px 0px rgba(0, 0, 0, 0.064)"},transition:p?{duration:0}:y,onAnimationComplete:()=>c(!1),children:n.jsx(h.div,{className:"h-full overflow-hidden border-l border-gray-100 dark:border-token-border-medium",initial:{borderRadius:C},animate:{borderRadius:0},exit:{borderRadius:C},transition:y,children:n.jsxs("div",{className:"h-full",children:[n.jsx(h.div,{drag:"x",className:"absolute left-[-2px] z-10 h-full w-[4px] cursor-ew-resize bg-token-text-quaternary opacity-0",whileHover:{opacity:.5},whileDrag:{opacity:.75,width:"8px",left:"-4px"},transition:{type:"tween",duration:.1},style:{x:0,y:0,transform:"translateX(0px)"},dragMomentum:!1,dragSnapToOrigin:!1,dragElastic:!1,dragConstraints:{left:0,right:0,top:0,bottom:0},onDrag:(u,U)=>{x(!0),a(U)},onDragEnd:()=>{x(!1),l(t)},onDoubleClick:()=>r()}),n.jsx(z,{onClose:s,clientThreadId:e,isAnimating:f,focusedObject:o,width:b-t})]})})})]})},De=d.memo(Re),Fe=({clientThreadId:e,focusedObject:o,onClose:s})=>n.jsx(P,{children:n.jsx(h.div,{className:"fixed inset-0 z-20 overflow-hidden shadow-xl md:border-gray-100 md:dark:border-gray-700",initial:{scale:.98},animate:{scale:1},transition:y,children:n.jsx(z,{isFullScreen:!0,clientThreadId:e,focusedObject:o,onClose:s})})}),Me=({clientThreadId:e})=>{const o=L(),s=he(e);Ae(e);const t=pe(),i=me(),a=d.useMemo(()=>{let c=t;if(t?.type===g.Textdoc){const p=i?.[t.textdocId];p&&(c={...t,textdocId:p})}return c},[t,i]);d.useEffect(()=>{W()},[e]);const r=a&&(o?n.jsx(De,{clientThreadId:e,onClose:R,focusedObject:a},"canvas-sidebar"):n.jsx(Fe,{clientThreadId:e,onClose:R,focusedObject:a},"canvas-modal"));d.useEffect(()=>{if(a)return _(c=>Ie(c,a)),()=>_(null)},[a,i]);const l=r!=null;return d.useEffect(()=>(F.setActiveStageSidebar(l),()=>F.setActiveStageSidebar(!1)),[l]),s!==e?null:n.jsx(de,{children:r})},lt=e=>{const o=d.useRef(null);return n.jsx(V,{ref:o,onError:(s,t)=>{W(),setTimeout(()=>{o.current?.resetErrorBoundary()}),ie.logError("Error boundary hit",s,{componentStack:t})},name:"canmore-focused-view",children:n.jsx(Me,{...e})})};export{lt as CanvasFocusedViewManager};
//# sourceMappingURL=b4blg87f4hk0sv9u.js.map