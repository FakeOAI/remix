import{fI as E,aG as R,r as g,j as i,dD as q,fJ as P,az as $,fK as K}from"./iw5llf4a9z2k4qli.js";import{g3 as Y,g4 as J,V as b,fg as Q,g5 as X,g6 as Z,ep as ee,g7 as te,g8 as se,g9 as ae,ga as oe,gb as ne,gc as ie,gd as re,ge as ce,gf as de,gg as le,gh as ue,gi as ge,gj as N,gk as pe,gl as F,gm as he,b0 as k,dh as W,gn as fe,go as me,gp as xe,gq as be,Q as ve,gr as Ce,gs as j,U as D,a9 as Se,gt as O,gu as we,gv as Te}from"./ffbc0egt64q2hvb1.js";import{L as ye}from"./i427bddftbowt48m.js";import{u as Ie}from"./l1hnzmdnnyhyq50n.js";import{T as Ee}from"./cl36x71jw22xq21h.js";import{m as x}from"./zbbavq3fohnytg6f.js";import"./ere5qx05or5w4r80.js";import"./hskeo4a0suuacupd.js";import"./ka9urk6fl3lg45ww.js";import"./sbh3gyxbsik6r1mv.js";import"./i2dv3y3bfx4gju2h.js";import"./b98iri3l289u5mbt.js";import"./ioi62ycdahm2tnd9.js";import"./k62b7lpgll63icj7.js";import"./hhgzgwwiotxpkejj.js";import"./o69vrzt176p1v6rh.js";import"./iaugkapujzwqym4n.js";import"./izrqkoclzq344wn2.js";import"./bixe314hudxgokbp.js";const M="oai/apps/canmoreSidebarWidth",Ae=.25,_e=400,L=400;function H(e){return e-_e}function y(e,a){return J(L,H(e),a??Ae*e)}function Re(){const e=E.useState(E.selectWindowWidth),a=y(e,Y(R.DANGER_SECRET_FOLDERS_ONLY_getItem(M))),s=U(),[t,r]=g.useState(a);g.useEffect(()=>{(t<L||t>H(e))&&r(y(e,t))},[e]);function o(u){r(m=>y(e,m+=u.delta.x))}function d(u){r(u),R.DANGER_SECRET_FOLDERS_ONLY_setItem(M,u)}function c(){const u=y(e,void 0);d(u)}const n=`calc(100vw - ${t}px)`;return s?{chatWidth:t,canvasWidth:e-t,canvasWidthCalc:n,viewportWidth:e,handleDrag:o,handleDoubleClick:c,persist:d}:{chatWidth:0,canvasWidth:e,canvasWidthCalc:"100vw",viewportWidth:e,handleDrag:()=>{},handleDoubleClick:()=>{},persist:()=>{}}}function U(){return E.useState(e=>E.selectWindowWidth(e)>1e3)}function Ne(e,a){let s;return a?.type===b.Textdoc&&(s={type:"canvas_textdoc",id:a.textdocId}),{...e,messageMetadata:{...e.messageMetadata,open_in_canvas_view:s}}}const G=({isFullScreen:e=!1,clientThreadId:a,focusedObject:s,onClose:t,isAnimating:r=!1,width:o})=>{const{setTargetedContent:d}=Q(),c=g.useRef(!1);if(g.useEffect(()=>(c.current&&d(void 0),c.current=!0,()=>{c.current=!1}),[s]),s==null)return null;switch(s.type){case b.Textdoc:return i.jsx(Ee,{isFullScreen:e,onClose:t,clientThreadId:a,focusedTextdoc:s,isAnimating:r,width:o});case b.ADAVisualization:return null}},We=300,je=e=>e?.type===b.Textdoc?e.textdocId:null;function De(e){const a=X(e),s=Z(a),t=ee(e),r=te(e,t),o=se({clientThreadId:e,conversationLeafId:t}),d=ae(),[c,n]=g.useMemo(()=>{if(r&&oe(r))return[void 0,null];let h;return!o&&r&&(h=ne(ie(r.messages))),Oe(s,d,h)},[o,r,s,d]),u=n!=null,m=je(n);g.useEffect(()=>{if(n&&c&&(re(n,c),n.type===b.Textdoc)){const{textdocId:h}=n,C=pe(h);ce(document.getElementById(C))}},[u,m])}function Oe(e,a,s){switch(s?.type){case de.Canmore:{const[t,r]=s.messages;if(!le(t?.message))break;const o=ue(e,t.message,r?.message??null),d=o.textdocId??a;if(d&&(o.function===ge.CreateTextdoc?(o.content??"").length>We||o.status===N.WAITING:o.status===N.STREAMING))return[o.messageId,{type:b.Textdoc,textdocId:d}];break}}return[void 0,null]}const Me=260,Fe=280,I={type:"spring",bounce:.12,duration:.64},ke={type:"spring",bounce:0,duration:.58},Le=({clientThreadId:e,focusedObject:a,onClose:s})=>{const{chatWidth:t,canvasWidthCalc:r,handleDrag:o,handleDoubleClick:d,persist:c}=Re(),n=k(),[u,m]=g.useState(!0),[h,C]=g.useState(!1),f=W(l=>l.activeSidebar),v=fe(({rect:l})=>l),{windowHeight:w,windowWidth:S}=P(l=>l,{windowWidth:0,windowHeight:0});let p=v??{top:0,left:t,width:S-t,height:w},_=!1;if(v&&(p.top<0||p.top+p.height>w)){_=!0;const l={width:(S-t)*.75,height:w*.75};p={top:w/2-l.height/2,left:(S-t-l.width)/2+t,width:l.width,height:l.height}}if(n){const l=S-p.width-p.left;p={...p,left:-l}}const T=v?.borderRadius,A=me(),V=A?.history!=null||A?.showChangesAtVersion!=null,z=W(l=>l.isDesktopNavCollapsed);return i.jsxs(i.Fragment,{children:[V&&i.jsx(ye,{onClick:()=>xe(A.textdocId),zIndexKey:"chatOverlay"}),i.jsxs(x.div,{initial:!n&&{marginRight:z?0:-Me},animate:!n&&{marginRight:0},transition:ke,children:[i.jsx(x.div,{initial:{opacity:1},animate:{opacity:0},exit:{opacity:[1,0]},transition:{...I,delay:.22},className:"pointer-events-none absolute left-0 top-0 z-20 h-full w-full bg-token-main-surface-primary"}),!n&&i.jsx(x.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"pointer-events-none absolute left-0 top-0 z-10 h-full w-full bg-black/[0.025] dark:bg-transparent"}),i.jsx(x.div,{className:"relative z-20 h-full",style:{width:r},exit:{width:0},transition:{type:"spring",bounce:0,duration:.1}})]}),i.jsx(x.div,{className:$("absolute z-20 h-full transition-shadow",n&&"right-0 max-h-[100cqh] max-w-[var(--available-details-width)] overflow-y-auto overflow-x-clip",!n&&"overflow-hidden",!n&&(f==="debug"?"md:left-[-250px] lg:left-[-300px] xl:left-[-350px] 2xl:left-[-400px]":"left-0")),initial:{borderRadius:T,boxShadow:"0px 12px 32px 0px rgba(0, 0, 0, 0.064)",opacity:_?0:1,x:p.left,y:p.top,height:p.height,width:p.width},animate:{opacity:1,x:n?0:t,y:0,width:n?`calc(100cqw - ${t}px)`:r,height:"100%",borderRadius:0,boxShadow:"0px 0px 18px rgba(0,0,0,0.075)"},exit:{scale:.64,opacity:0,filter:"blur(12px)",transition:{opacity:{duration:.14,bounce:.1}},borderRadius:T,boxShadow:"0px 12px 32px 0px rgba(0, 0, 0, 0.064)"},transition:h?{duration:0}:I,onAnimationComplete:()=>m(!1),children:i.jsx(x.div,{className:"h-full overflow-hidden border-l border-gray-100 dark:border-token-border-medium",initial:{borderRadius:T},animate:{borderRadius:0},exit:{borderRadius:T},transition:I,children:i.jsxs("div",{className:"h-full",children:[i.jsx(x.div,{drag:"x",className:"absolute left-[-2px] z-10 h-full w-[4px] cursor-ew-resize bg-token-text-quaternary opacity-0",whileHover:{opacity:.5},whileDrag:{opacity:.75,width:"8px",left:"-4px"},transition:{type:"tween",duration:.1},style:{x:0,y:0,transform:"translateX(0px)"},dragMomentum:!1,dragSnapToOrigin:!1,dragElastic:!1,dragConstraints:{left:0,right:0,top:0,bottom:0},onDrag:(l,B)=>{C(!0),o(B)},onDragEnd:()=>{C(!1),c(t)},onDoubleClick:()=>d()}),i.jsx(G,{onClose:s,clientThreadId:e,isAnimating:u,focusedObject:a,width:S-t})]})})})]})},He=g.memo(Le),Ue=({clientThreadId:e,focusedObject:a,onClose:s})=>i.jsx(K,{children:i.jsx(x.div,{className:"fixed inset-0 z-20 overflow-hidden shadow-xl md:border-gray-100 md:dark:border-gray-700",initial:{scale:.98},animate:{scale:1},transition:I,children:i.jsx(G,{isFullScreen:!0,clientThreadId:e,focusedObject:a,onClose:s})})}),Ge=({clientThreadId:e})=>{const{store:a,actions:s}=be(),t=U(),r=Ie(e);De(e);const o=ve(),d=Ce(),c=g.useMemo(()=>{let f=o;if(o?.type===b.Textdoc){const v=d?.[o.textdocId];v&&(f={...o,textdocId:v})}return f},[o,d]);g.useEffect(()=>{F()},[e]);const n=c&&(t?i.jsx(He,{clientThreadId:e,onClose:O,focusedObject:c},"canvas-sidebar"):i.jsx(Ue,{clientThreadId:e,onClose:O,focusedObject:c},"canvas-modal"));g.useEffect(()=>{if(c)return j(f=>Ne(f,c)),()=>j(null)},[c,d]);const u=k(),m=Fe+400+64+we+Te,h=n!=null;return g.useEffect(()=>{const f=u&&a.getState().isSidebarOpen&&window.innerWidth<m;return f&&h&&s.closeSidebar(),D.setActiveStageSidebar(h),()=>{h&&(u&&f&&s.openSidebar(),D.setActiveStageSidebar(!1))}},[h,a,s,u,m]),r!==e?null:i.jsx(Se,{children:n})},rt=e=>{const a=g.useRef(null);return i.jsx(q,{ref:a,onError:(s,t)=>{F(),setTimeout(()=>{a.current?.resetErrorBoundary()}),he.logError("Error boundary hit",s,{componentStack:t})},name:"canmore-focused-view",children:i.jsx(Ge,{...e})})};export{rt as CanvasFocusedViewManager};
//# sourceMappingURL=gpt3umerc2v63w2i.js.map