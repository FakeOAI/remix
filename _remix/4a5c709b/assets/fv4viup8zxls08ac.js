import{fF as E,at as R,r as f,j as i,aS as q,fG as P,ak as $,fH as Y}from"./oekykjd73qa82yti.js";import{fQ as K,fR as Q,V as b,f4 as X,fS as Z,fT as J,eh as ee,fU as te,fV as se,fW as ae,fX as oe,fY as ne,fZ as ie,f_ as re,c4 as ce,f$ as de,g0 as le,g1 as ue,g2 as W,g3 as F,g4 as fe,a_ as k,g5 as N,g6 as he,g7 as pe,g8 as me,Q as ge,g9 as xe,ga as D,U as O,a8 as be,gb as j}from"./ea8db8p61xn3dl41.js";import{s as ve,g as Ce,u as Se}from"./hleqic3nfevjef5m.js";import{L as we,D as Te,T as ye}from"./gnvfqd100prlcesm.js";import{u as Ie}from"./nz0cpjpk13dg73bg.js";import{T as Ee}from"./mazb227dclb16kbk.js";import{m as x}from"./bva9obs1v3upiudq.js";import"./dg9kyz0flvvgkn3v.js";import"./njq349kzc2cy5m0p.js";import"./imxne7cqtt55cx4i.js";import"./kngv21ammg8f0cgt.js";import"./jc0heq139qjn0ife.js";import"./bo1eog35b5y0x36j.js";import"./fijqvyq2i9aelgx9.js";import"./doqjumb4xtfm9gdp.js";import"./cdrwkqz6w38xd7n2.js";import"./lazua3a0sw5bc7ay.js";const M="oai/apps/canmoreSidebarWidth",Ae=.25,_e=400,L=400;function H(e){return e-_e}function y(e,a){return Q(L,H(e),a??Ae*e)}function Re(){const e=E.useState(E.selectWindowWidth),a=y(e,K(R.DANGER_SECRET_FOLDERS_ONLY_getItem(M))),s=U(),[t,r]=f.useState(a);f.useEffect(()=>{(t<L||t>H(e))&&r(y(e,t))},[e]);function o(u){r(g=>y(e,g+=u.delta.x))}function d(u){r(u),R.DANGER_SECRET_FOLDERS_ONLY_setItem(M,u)}function c(){const u=y(e,void 0);d(u)}const n=`calc(100vw - ${t}px)`;return s?{chatWidth:t,canvasWidth:e-t,canvasWidthCalc:n,viewportWidth:e,handleDrag:o,handleDoubleClick:c,persist:d}:{chatWidth:0,canvasWidth:e,canvasWidthCalc:"100vw",viewportWidth:e,handleDrag:()=>{},handleDoubleClick:()=>{},persist:()=>{}}}function U(){return E.useState(e=>E.selectWindowWidth(e)>1e3)}function We(e,a){let s;return a?.type===b.Textdoc&&(s={type:"canvas_textdoc",id:a.textdocId}),{...e,messageMetadata:{...e.messageMetadata,open_in_canvas_view:s}}}const V=({isFullScreen:e=!1,clientThreadId:a,focusedObject:s,onClose:t,isAnimating:r=!1,width:o})=>{const{setTargetedContent:d}=X(),c=f.useRef(!1);if(f.useEffect(()=>(c.current&&d(void 0),c.current=!0,()=>{c.current=!1}),[s]),s==null)return null;switch(s.type){case b.Textdoc:return i.jsx(Ee,{isFullScreen:e,onClose:t,clientThreadId:a,focusedTextdoc:s,isAnimating:r,width:o});case b.ADAVisualization:return null}},Ne=300,De=e=>e?.type===b.Textdoc?e.textdocId:null;function Oe(e){const a=Z(e),s=J(a),t=ee(e),r=te(e,t),o=se({clientThreadId:e,conversationLeafId:t}),d=ae(),[c,n]=f.useMemo(()=>{if(r&&oe(r))return[void 0,null];let p;return!o&&r&&(p=ne(ie(r.messages))),je(s,d,p)},[o,r,s,d]),u=n!=null,g=De(n);f.useEffect(()=>{if(n&&c&&(re(n,c),n.type===b.Textdoc)){const{textdocId:p}=n,C=Ce(p);ve(document.getElementById(C))}},[u,g])}function je(e,a,s){switch(s?.type){case ce.Canmore:{const[t,r]=s.messages;if(!de(t?.message))break;const o=le(e,t.message,r?.message??null),d=o.textdocId??a;if(d&&(o.function===ue.CreateTextdoc?(o.content??"").length>Ne||o.status===W.WAITING:o.status===W.STREAMING))return[o.messageId,{type:b.Textdoc,textdocId:d}];break}}return[void 0,null]}const Me=260,Fe=280,I={type:"spring",bounce:.12,duration:.64},ke={type:"spring",bounce:0,duration:.58},Le=({clientThreadId:e,focusedObject:a,onClose:s})=>{const{chatWidth:t,canvasWidthCalc:r,handleDrag:o,handleDoubleClick:d,persist:c}=Re(),n=k(),[u,g]=f.useState(!0),[p,C]=f.useState(!1),m=N(l=>l.activeSidebar),v=Se(({rect:l})=>l),{windowHeight:w,windowWidth:S}=P(l=>l,{windowWidth:0,windowHeight:0});let h=v??{top:0,left:t,width:S-t,height:w},_=!1;if(v&&(h.top<0||h.top+h.height>w)){_=!0;const l={width:(S-t)*.75,height:w*.75};h={top:w/2-l.height/2,left:(S-t-l.width)/2+t,width:l.width,height:l.height}}if(n){const l=S-h.width-h.left;h={...h,left:-l}}const T=v?.borderRadius,A=he(),G=A?.history!=null||A?.showChangesAtVersion!=null,z=N(l=>l.isDesktopNavCollapsed);return i.jsxs(i.Fragment,{children:[G&&i.jsx(we,{onClick:()=>pe(A.textdocId),zIndexKey:"chatOverlay"}),i.jsxs(x.div,{initial:!n&&{marginRight:z?0:-Me},animate:!n&&{marginRight:0},transition:ke,children:[i.jsx(x.div,{initial:{opacity:1},animate:{opacity:0},exit:{opacity:[1,0]},transition:{...I,delay:.22},className:"pointer-events-none absolute left-0 top-0 z-20 h-full w-full bg-token-main-surface-primary"}),!n&&i.jsx(x.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-black/[0.025] dark:bg-transparent"}),i.jsx(x.div,{className:"relative z-20 h-full",style:{width:r},exit:{width:0},transition:{type:"spring",bounce:0,duration:.1}})]}),i.jsx(x.div,{className:$("absolute z-20 h-full transition-shadow",n&&"right-0 max-h-[100cqh] max-w-[var(--available-details-width)] overflow-y-auto overflow-x-clip",!n&&"overflow-hidden",!n&&(m==="debug"?"md:left-[-250px] lg:left-[-300px] xl:left-[-350px] 2xl:left-[-400px]":"left-0")),initial:{borderRadius:T,boxShadow:"0px 12px 32px 0px rgba(0, 0, 0, 0.064)",opacity:_?0:1,x:h.left,y:h.top,height:h.height,width:h.width},animate:{opacity:1,x:n?0:t,y:0,width:n?`calc(100cqw - ${t}px)`:r,height:"100%",borderRadius:0,boxShadow:"0px 0px 18px rgba(0,0,0,0.075)"},exit:{scale:.64,opacity:0,filter:"blur(12px)",transition:{opacity:{duration:.14,bounce:.1}},borderRadius:T,boxShadow:"0px 12px 32px 0px rgba(0, 0, 0, 0.064)"},transition:p?{duration:0}:I,onAnimationComplete:()=>g(!1),children:i.jsx(x.div,{className:"h-full overflow-hidden border-l border-gray-100 dark:border-token-border-medium",initial:{borderRadius:T},animate:{borderRadius:0},exit:{borderRadius:T},transition:I,children:i.jsxs("div",{className:"h-full",children:[i.jsx(x.div,{drag:"x",className:"absolute left-[-2px] z-10 h-full w-[4px] cursor-ew-resize bg-token-text-quaternary opacity-0",whileHover:{opacity:.5},whileDrag:{opacity:.75,width:"8px",left:"-4px"},transition:{type:"tween",duration:.1},style:{x:0,y:0,transform:"translateX(0px)"},dragMomentum:!1,dragSnapToOrigin:!1,dragElastic:!1,dragConstraints:{left:0,right:0,top:0,bottom:0},onDrag:(l,B)=>{C(!0),o(B)},onDragEnd:()=>{C(!1),c(t)},onDoubleClick:()=>d()}),i.jsx(V,{onClose:s,clientThreadId:e,isAnimating:u,focusedObject:a,width:S-t})]})})})]})},He=f.memo(Le),Ue=({clientThreadId:e,focusedObject:a,onClose:s})=>i.jsx(Y,{children:i.jsx(x.div,{className:"fixed inset-0 z-20 overflow-hidden shadow-xl md:border-gray-100 md:dark:border-gray-700",initial:{scale:.98},animate:{scale:1},transition:I,children:i.jsx(V,{isFullScreen:!0,clientThreadId:e,focusedObject:a,onClose:s})})}),Ve=({clientThreadId:e})=>{const{store:a,actions:s}=me(),t=U(),r=Ie(e);Oe(e);const o=ge(),d=xe(),c=f.useMemo(()=>{let m=o;if(o?.type===b.Textdoc){const v=d?.[o.textdocId];v&&(m={...o,textdocId:v})}return m},[o,d]);f.useEffect(()=>{F()},[e]);const n=c&&(t?i.jsx(He,{clientThreadId:e,onClose:j,focusedObject:c},"canvas-sidebar"):i.jsx(Ue,{clientThreadId:e,onClose:j,focusedObject:c},"canvas-modal"));f.useEffect(()=>{if(c)return D(m=>We(m,c)),()=>D(null)},[c,d]);const u=k(),g=Fe+400+64+Te+ye,p=n!=null;return f.useEffect(()=>{const m=u&&a.getState().isSidebarOpen&&window.innerWidth<g;return m&&p&&s.closeSidebar(),O.setActiveStageSidebar(p),()=>{p&&(u&&m&&s.openSidebar(),O.setActiveStageSidebar(!1))}},[p,a,s,u,g]),r!==e?null:i.jsx(be,{children:n})},nt=e=>{const a=f.useRef(null);return i.jsx(q,{ref:a,onError:(s,t)=>{F(),setTimeout(()=>{a.current?.resetErrorBoundary()}),fe.logError("Error boundary hit",s,{componentStack:t})},name:"canmore-focused-view",children:i.jsx(Ve,{...e})})};export{nt as CanvasFocusedViewManager};
//# sourceMappingURL=fv4viup8zxls08ac.js.map