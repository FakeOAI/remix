import{f2 as S,K as j,r as c,l as n,cA as B,f3 as q,m as P,f4 as $}from"./l5rf55y8gpic9j7j.js";import{f8 as Y,f9 as K,ar as g,fa as X,dr as Z,fb as J,fc as Q,fd as tt,fe as et,ff as st,fg as at,fh as ot,fi as nt,fj as it,fk as _,fl as rt,fm as k,fn as ct,D as R,fo as dt,fp as lt,fq as ut,ap as ft,fr as pt,fs as M,Z as D,G as mt,ft as F}from"./c8ww2t9q7rwlhved.js";import{T as ht}from"./g05t9vjo16ly1mfs.js";import{p as xt,r as gt,E as bt,F as vt}from"./kfqicesy8adidsoj.js";import{m as p}from"./c3evsddbj4url2js.js";import"./hxwnvznhtn7zt599.js";import"./hhndevom81hqjije.js";import"./kpq79bmjrg2cdmv0.js";import"./hlx564c7m7nbdo16.js";import"./b4ve8i43g8dzy4nm.js";import"./ggl8ej2y92j1hjpc.js";import"./dhbqxj38yqs19ycp.js";import"./far2w778d506euen.js";import"./i7w5dyo9d6x2grvw.js";import"./m5s574269sxo58qz.js";import"./obmlpvf0eu01tyh4.js";import"./jpgi6tolg12nbn71.js";import"./catcclko34r9lbh0.js";import"./chfv6vbnigxawfjy.js";import"./n7h7w1vm4f0z2mu5.js";import"./md38s2ry2qvejb8x.js";import"./m0rry74g6mtwf8hx.js";import"./onqhjclv3raud604.js";import"./o71s28u01641zi2u.js";const W="oai/apps/canmoreSidebarWidth",Ct=.25,wt=400,L=400;function G(t){return t-wt}function w(t,s){return K(L,G(t),s??Ct*t)}function yt(){const t=S.useState(S.selectWindowWidth),s=w(t,Y(j.DANGER_SECRET_FOLDERS_ONLY_getItem(W))),a=A(),[e,i]=c.useState(s);c.useEffect(()=>{(e<L||e>G(t))&&i(w(t,e))},[t]);function o(r){i(m=>w(t,m+=r.delta.x))}function d(r){i(r),j.DANGER_SECRET_FOLDERS_ONLY_setItem(W,r)}function l(){const r=w(t,void 0);d(r)}const f=`calc(100vw - ${e}px)`;return a?{chatWidth:e,canvasWidth:t-e,canvasWidthCalc:f,viewportWidth:t,handleDrag:o,handleDoubleClick:l,persist:d}:{chatWidth:0,canvasWidth:t,canvasWidthCalc:"100vw",viewportWidth:t,handleDrag:()=>{},handleDoubleClick:()=>{},persist:()=>{}}}function A(){return S.useState(t=>S.selectWindowWidth(t)>1e3)}const St=t=>{const s=c.useRef(void 0);return c.useEffect(()=>{s.current=t},[t]),s.current};function Tt(t,s){let a;return s?.type===g.Textdoc&&(a={type:"canvas_textdoc",id:s.textdocId}),{...t,messageMetadata:{...t.messageMetadata,open_in_canvas_view:a}}}const H=({isFullScreen:t=!1,clientThreadId:s,focusedObject:a,onClose:e,isAnimating:i=!1,width:o})=>{const{setTargetedContent:d}=X(),l=c.useRef(!1);if(c.useEffect(()=>(l.current&&d(void 0),l.current=!0,()=>{l.current=!1}),[a]),a==null)return null;switch(a.type){case g.Textdoc:return n.jsx(ht,{isFullScreen:t,onClose:e,clientThreadId:s,focusedTextdoc:a,isAnimating:i,width:o});case g.ADAVisualization:return null}},It=300,Et=t=>t?.type===g.Textdoc?t.textdocId:null;function At(t){const s=xt(t),a=Z(s),e=gt(t),i=bt(t,e),o=vt({clientThreadId:t,conversationLeafId:e}),d=J(),[l,f]=c.useMemo(()=>{let x;return!o&&i&&(x=Q(tt(i.messages))),Nt(a,d,x)},[o,i,a,d]),r=f!=null,m=Et(f);c.useEffect(()=>{if(f&&l&&(et(f,l),f.type===g.Textdoc)){const{textdocId:x}=f,T=rt(x);st(document.getElementById(T))}},[r,m])}function Nt(t,s,a){switch(a?.type){case at.Canmore:{const[e,i]=a.messages;if(!ot(e?.message))break;const o=nt(t,e.message,i?.message??null),d=o.textdocId??s;if(d&&(o.function===it.CreateTextdoc?(o.content??"").length>It||o.status===_.WAITING:o.status===_.STREAMING))return[o.messageId,{type:g.Textdoc,textdocId:d}];break}}return[void 0,null]}const jt=260,y={type:"spring",bounce:.12,duration:.64},O={type:"spring",bounce:0,duration:.58},_t=({clientThreadId:t,focusedObject:s,onClose:a})=>{const{chatWidth:e,canvasWidthCalc:i,handleDrag:o,handleDoubleClick:d,persist:l}=yt(),[f,r]=c.useState(!0),[m,x]=c.useState(!1),T=R(u=>u.activeSidebar),I=dt(({rect:u})=>u),{windowHeight:b,windowWidth:v}=q(u=>u,{windowWidth:0,windowHeight:0});let h=I??{top:0,left:e,width:v-e,height:b},N=!1;if(I&&(h.top<0||h.top+h.height>b)){N=!0;const u={width:(v-e)*.75,height:b*.75};h={top:b/2-u.height/2,left:(v-e-u.width)/2+e,width:u.width,height:u.height}}const C=I?.borderRadius,E=lt(),U=E?.history!=null||E?.showChangesAtVersion!=null,V=R(u=>u.isDesktopNavCollapsed);return n.jsxs(n.Fragment,{children:[U&&n.jsx(p.div,{className:"fixed inset-0 z-20 bg-gray-50/50 dark:bg-black/50",initial:{opacity:0},animate:{opacity:1},onClick:()=>ut(E.textdocId)}),n.jsxs(p.div,{initial:{marginRight:V?0:-jt},animate:{marginRight:0},transition:O,children:[n.jsx(p.div,{initial:{opacity:1},animate:{opacity:0},exit:{opacity:[1,0]},transition:{...y,delay:.22},className:"pointer-events-none absolute left-0 top-0 z-20 h-full w-full bg-token-main-surface-primary"}),n.jsx(p.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-black/[0.025] dark:bg-transparent"}),n.jsx(p.div,{className:"relative z-20 h-full",initial:!1,style:{width:i},exit:{width:0,transition:{duration:0}},transition:O})]}),n.jsx(p.div,{className:P("absolute z-20 h-full overflow-hidden transition-shadow",T==="debug"?"md:left-[-250px] lg:left-[-300px] xl:left-[-350px] 2xl:left-[-400px]":"left-0"),initial:{opacity:N?0:1,x:h.left,y:h.top,width:h.width,height:h.height,borderRadius:C,boxShadow:"0px 12px 32px 0px rgba(0, 0, 0, 0.064)"},animate:{opacity:1,x:e,y:0,width:i,height:"100%",borderRadius:0,boxShadow:"0px 0px 18px rgba(0,0,0,0.075)"},exit:{scale:.64,opacity:0,filter:"blur(12px)",transition:{opacity:{duration:.14,bounce:.1}},borderRadius:C,boxShadow:"0px 12px 32px 0px rgba(0, 0, 0, 0.064)"},transition:m?{duration:0}:y,onAnimationComplete:()=>r(!1),children:n.jsx(p.div,{className:"h-full overflow-hidden border-l border-gray-100 dark:border-token-border-medium",initial:{borderRadius:C},animate:{borderRadius:0},exit:{borderRadius:C},transition:y,children:n.jsxs("div",{className:"h-full",children:[n.jsx(p.div,{drag:"x",className:"absolute left-[-2px] z-10 h-full w-[4px] cursor-ew-resize bg-token-text-quaternary opacity-0",whileHover:{opacity:.5},whileDrag:{opacity:.75,width:"8px",left:"-4px"},transition:{type:"tween",duration:.1},style:{x:0,y:0,transform:"translateX(0px)"},dragMomentum:!1,dragSnapToOrigin:!1,dragElastic:!1,dragConstraints:{left:0,right:0,top:0,bottom:0},onDrag:(u,z)=>{x(!0),o(z)},onDragEnd:()=>{x(!1),l(e)},onDoubleClick:()=>d()}),n.jsx(H,{onClose:a,clientThreadId:t,isAnimating:f,focusedObject:s,width:v-e})]})})})]})},Rt=c.memo(_t),Mt=({clientThreadId:t,focusedObject:s,onClose:a})=>{const e=A();return n.jsx($,{children:n.jsx(p.div,{className:"fixed inset-0 z-20 overflow-hidden shadow-xl md:border-gray-100 md:dark:border-gray-700",initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},exit:e?void 0:{opacity:0,scale:.98},transition:y,children:n.jsx(H,{isFullScreen:!0,clientThreadId:t,focusedObject:s,onClose:a})})})},Dt=({clientThreadId:t})=>{const s=A(),a=St(t);At(t);const e=ft(),i=pt(({resolveTempTextdocId:r})=>r),o=c.useMemo(()=>{let r=e;if(e?.type===g.Textdoc){const m=i?.[e.textdocId];m&&(r={...e,textdocId:m})}return r},[e,i]);c.useEffect(()=>{k()},[t]);const d=o&&(s?n.jsx(Rt,{clientThreadId:t,onClose:F,focusedObject:o},"canvas-sidebar"):n.jsx(Mt,{clientThreadId:t,onClose:F,focusedObject:o},"canvas-modal"));c.useEffect(()=>{if(o)return M(r=>Tt(r,o)),()=>M(null)},[o,i]);const l=d!=null;return c.useEffect(()=>(D.setActiveStageSidebar(l),()=>D.setActiveStageSidebar(!1)),[l]),a!==t?null:n.jsx(mt,{initial:!1,children:d})},oe=t=>{const s=c.useRef(null);return n.jsx(B,{ref:s,onError:(a,e)=>{k(),setTimeout(()=>{s.current?.resetErrorBoundary()}),ct.logError("Error boundary hit",a,{componentStack:e})},name:"canmore-focused-view",children:n.jsx(Dt,{...t})})};export{oe as CanvasFocusedViewManager};
//# sourceMappingURL=d0ekqeae60c4w8bi.js.map