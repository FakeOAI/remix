const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/kla4cznggquldyr9.js","assets/in7dip9jd052wfku.js","assets/kzsmtp7fxxv1xp93.js","assets/root-vof5cayc.css","assets/hclnq916jc5jz97n.js","assets/conversation-small-eplmind9.css","assets/joa8jajuiu4xqpzn.js"])))=>i.map(i=>d[i]);
import{r as c,$ as we,f as R,b as Ee,_ as I,h as k,g as O,D as ye,bu as Ce,O as oe,H as F,j as a,c as W,K as N,bt as De,ak as je,P as Ie,A as Me,cm as Pe,c2 as _e,cw as J,cv as Q,E as ke,c8 as Re,cK as Te,bM as Ae,a4 as Ne}from"./in7dip9jd052wfku.js";import{F as Ve}from"./oxvx4oij73fwus5k.js";import{ce as Ke,cf as Be,cg as ae,cS as re,gn as Le,go as Oe,bM as L,gp as Fe,p as He,n as ze,bJ as Ue,aE as We,c8 as Ge,gq as Xe,gr as Ye,E as qe,bN as se,cM as Je,gs as Qe}from"./hclnq916jc5jz97n.js";import{r as Ze,q as ie,j as et,s as tt,t as nt}from"./kh8btf8cg8yyrokh.js";import{T as ot,u as at,j as rt}from"./jzk6rnaxlh9mg40v.js";import{P as st,b as ce,a as it,T as ct,z as lt,w as dt}from"./kzsmtp7fxxv1xp93.js";import{m as le}from"./e60bx5m3fgrnp7m8.js";import"./3qn82ow3uy8upfk9.js";import"./mtxjf02tkq7k5viu.js";import"./fyr7vkqhxmyv2fse.js";import"./eee2gx83eywoamy0.js";import"./on3ggizkxeoiube6.js";import"./760127byb5w85zi0.js";import"./l3r166cv49mcthx9.js";import"./1cukvp5ie8shy7wg.js";import"./oickswvpn6lineaa.js";import"./egdzsh6d0m8cw7ec.js";import"./o2day4o7036e5d8e.js";import"./fy3h877ykbdmbqsr.js";import"./m2aw20nhr8qt9iq8.js";import"./kydz3lvptjooxn8n.js";import"./jcu2a53eocfrkw7z.js";import"./m4vr72rovrt5vqj0.js";import"./jk9y7mw8e50tcqsf.js";import"./dw1asvt2yycdjvsu.js";import"./dl252isj7oci0zzx.js";import"./c0iirbrdp77yfalm.js";import"./fxkewxci7yz2a46h.js";import"./gr0gzu1e7tf3pfo5.js";import"./nmxkbfbxv5aho1gz.js";import"./nmecn2iqfvn31fl5.js";import"./lz2s4le88cpifwlp.js";import"./latget33c6ripn7f.js";import"./fyvaj3xna6b9asf6.js";import"./jnjebj1zels12e6l.js";import"./nzztuzrd8mw4yg8v.js";import"./dyccf8iklrtn6o33.js";import"./fydfil2b1ohl1flw.js";import"./hl4ci9ofqkpntyik.js";import"./h43i4mjk1yhtr4do.js";import"./lv9i01ritkrf6qli.js";function ut(){const[e,t]=c.useState({undoStack:[],currentIndex:-1});function n(s){t(l=>({undoStack:[...l.undoStack.slice(0,l.currentIndex+1),s],currentIndex:l.currentIndex+1}))}function r(){t(s=>({undoStack:s.undoStack,currentIndex:Math.max(s.currentIndex-1,-1)}))}function i(){t(s=>({undoStack:s.undoStack,currentIndex:Math.min(s.currentIndex+1,s.undoStack.length-1)}))}function o(){t({undoStack:[],currentIndex:-1})}return{currentDrawnShape:e.undoStack.length>0?e.undoStack[e.currentIndex]:null,onNewDrawnShape:n,canUndoDrawing:e.currentIndex>=0,undoDrawing:r,canRedoDrawing:e.currentIndex<e.undoStack.length-1,redoDrawing:i,clearAllDrawings:o}}const de=["PageUp","PageDown"],ue=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],fe={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},V="Slider",[U,ft,mt]=Ke(V),[me,Tn]=we(V,[mt]),[pt,H]=me(V),gt=c.forwardRef((e,t)=>{const{name:n,min:r=0,max:i=100,step:o=1,orientation:s="horizontal",disabled:l=!1,minStepsBetweenThumbs:u=0,defaultValue:p=[r],value:m,onValueChange:d=()=>{},onValueCommit:f=()=>{},inverted:S=!1,...b}=e,[g,x]=c.useState(null),v=R(t,w=>x(w)),E=c.useRef(new Set),$=c.useRef(0),h=s==="horizontal",D=g?!!g.closest("form"):!0,K=h?ht:xt,[y=[],Se]=Ee({prop:m,defaultProp:p,onChange:w=>{var j;(j=[...E.current][$.current])===null||j===void 0||j.focus(),d(w)}}),X=c.useRef(y);function $e(w){const j=Dt(y,w);T(w,j)}function be(w){T(w,$.current)}function ve(){const w=X.current[$.current];y[$.current]!==w&&f(y)}function T(w,j,{commit:B}={commit:!1}){const Y=Pt(o),z=_t(Math.round((w-r)/o)*o+r,Y),A=ae(z,[r,i]);Se((_=[])=>{const P=yt(_,A,j);if(Mt(P,u*o)){$.current=P.indexOf(A);const q=String(P)!==String(_);return q&&B&&f(P),q?P:_}else return _})}return c.createElement(pt,{scope:e.__scopeSlider,disabled:l,min:r,max:i,valueIndexToChangeRef:$,thumbs:E.current,values:y,orientation:s},c.createElement(U.Provider,{scope:e.__scopeSlider},c.createElement(U.Slot,{scope:e.__scopeSlider},c.createElement(K,I({"aria-disabled":l,"data-disabled":l?"":void 0},b,{ref:v,onPointerDown:k(b.onPointerDown,()=>{l||(X.current=y)}),min:r,max:i,inverted:S,onSlideStart:l?void 0:$e,onSlideMove:l?void 0:be,onSlideEnd:l?void 0:ve,onHomeKeyDown:()=>!l&&T(r,0,{commit:!0}),onEndKeyDown:()=>!l&&T(i,y.length-1,{commit:!0}),onStepKeyDown:({event:w,direction:j})=>{if(!l){const z=de.includes(w.key)||w.shiftKey&&ue.includes(w.key)?10:1,A=$.current,_=y[A],P=o*z*j;T(_+P,A,{commit:!0})}}})))),D&&y.map((w,j)=>c.createElement(Et,{key:j,name:n?n+(y.length>1?"[]":""):void 0,value:w})))}),[pe,ge]=me(V,{startEdge:"left",endEdge:"right",size:"width",direction:1}),ht=c.forwardRef((e,t)=>{const{min:n,max:r,dir:i,inverted:o,onSlideStart:s,onSlideMove:l,onSlideEnd:u,onStepKeyDown:p,...m}=e,[d,f]=c.useState(null),S=R(t,$=>f($)),b=c.useRef(),g=Ce(i),x=g==="ltr",v=x&&!o||!x&&o;function E($){const h=b.current||d.getBoundingClientRect(),D=[0,h.width],y=G(D,v?[n,r]:[r,n]);return b.current=h,y($-h.left)}return c.createElement(pe,{scope:e.__scopeSlider,startEdge:v?"left":"right",endEdge:v?"right":"left",direction:v?1:-1,size:"width"},c.createElement(he,I({dir:g,"data-orientation":"horizontal"},m,{ref:S,style:{...m.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:$=>{const h=E($.clientX);s==null||s(h)},onSlideMove:$=>{const h=E($.clientX);l==null||l(h)},onSlideEnd:()=>{b.current=void 0,u==null||u()},onStepKeyDown:$=>{const D=fe[v?"from-left":"from-right"].includes($.key);p==null||p({event:$,direction:D?-1:1})}})))}),xt=c.forwardRef((e,t)=>{const{min:n,max:r,inverted:i,onSlideStart:o,onSlideMove:s,onSlideEnd:l,onStepKeyDown:u,...p}=e,m=c.useRef(null),d=R(t,m),f=c.useRef(),S=!i;function b(g){const x=f.current||m.current.getBoundingClientRect(),v=[0,x.height],$=G(v,S?[r,n]:[n,r]);return f.current=x,$(g-x.top)}return c.createElement(pe,{scope:e.__scopeSlider,startEdge:S?"bottom":"top",endEdge:S?"top":"bottom",size:"height",direction:S?1:-1},c.createElement(he,I({"data-orientation":"vertical"},p,{ref:d,style:{...p.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:g=>{const x=b(g.clientY);o==null||o(x)},onSlideMove:g=>{const x=b(g.clientY);s==null||s(x)},onSlideEnd:()=>{f.current=void 0,l==null||l()},onStepKeyDown:g=>{const v=fe[S?"from-bottom":"from-top"].includes(g.key);u==null||u({event:g,direction:v?-1:1})}})))}),he=c.forwardRef((e,t)=>{const{__scopeSlider:n,onSlideStart:r,onSlideMove:i,onSlideEnd:o,onHomeKeyDown:s,onEndKeyDown:l,onStepKeyDown:u,...p}=e,m=H(V,n);return c.createElement(O.span,I({},p,{ref:t,onKeyDown:k(e.onKeyDown,d=>{d.key==="Home"?(s(d),d.preventDefault()):d.key==="End"?(l(d),d.preventDefault()):de.concat(ue).includes(d.key)&&(u(d),d.preventDefault())}),onPointerDown:k(e.onPointerDown,d=>{const f=d.target;f.setPointerCapture(d.pointerId),d.preventDefault(),m.thumbs.has(f)?f.focus():r(d)}),onPointerMove:k(e.onPointerMove,d=>{d.target.hasPointerCapture(d.pointerId)&&i(d)}),onPointerUp:k(e.onPointerUp,d=>{const f=d.target;f.hasPointerCapture(d.pointerId)&&(f.releasePointerCapture(d.pointerId),o(d))})}))}),St="SliderTrack",$t=c.forwardRef((e,t)=>{const{__scopeSlider:n,...r}=e,i=H(St,n);return c.createElement(O.span,I({"data-disabled":i.disabled?"":void 0,"data-orientation":i.orientation},r,{ref:t}))}),Z="SliderRange",bt=c.forwardRef((e,t)=>{const{__scopeSlider:n,...r}=e,i=H(Z,n),o=ge(Z,n),s=c.useRef(null),l=R(t,s),u=i.values.length,p=i.values.map(f=>xe(f,i.min,i.max)),m=u>1?Math.min(...p):0,d=100-Math.max(...p);return c.createElement(O.span,I({"data-orientation":i.orientation,"data-disabled":i.disabled?"":void 0},r,{ref:l,style:{...e.style,[o.startEdge]:m+"%",[o.endEdge]:d+"%"}}))}),ee="SliderThumb",vt=c.forwardRef((e,t)=>{const n=ft(e.__scopeSlider),[r,i]=c.useState(null),o=R(t,l=>i(l)),s=c.useMemo(()=>r?n().findIndex(l=>l.ref.current===r):-1,[n,r]);return c.createElement(wt,I({},e,{ref:o,index:s}))}),wt=c.forwardRef((e,t)=>{const{__scopeSlider:n,index:r,...i}=e,o=H(ee,n),s=ge(ee,n),[l,u]=c.useState(null),p=R(t,x=>u(x)),m=ye(l),d=o.values[r],f=d===void 0?0:xe(d,o.min,o.max),S=Ct(r,o.values.length),b=m==null?void 0:m[s.size],g=b?jt(b,f,s.direction):0;return c.useEffect(()=>{if(l)return o.thumbs.add(l),()=>{o.thumbs.delete(l)}},[l,o.thumbs]),c.createElement("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[s.startEdge]:`calc(${f}% + ${g}px)`}},c.createElement(U.ItemSlot,{scope:e.__scopeSlider},c.createElement(O.span,I({role:"slider","aria-label":e["aria-label"]||S,"aria-valuemin":o.min,"aria-valuenow":d,"aria-valuemax":o.max,"aria-orientation":o.orientation,"data-orientation":o.orientation,"data-disabled":o.disabled?"":void 0,tabIndex:o.disabled?void 0:0},i,{ref:p,style:d===void 0?{display:"none"}:e.style,onFocus:k(e.onFocus,()=>{o.valueIndexToChangeRef.current=r})}))))}),Et=e=>{const{value:t,...n}=e,r=c.useRef(null),i=Be(t);return c.useEffect(()=>{const o=r.current,s=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(s,"value").set;if(i!==t&&u){const p=new Event("input",{bubbles:!0});u.call(o,t),o.dispatchEvent(p)}},[i,t]),c.createElement("input",I({style:{display:"none"}},n,{ref:r,defaultValue:t}))};function yt(e=[],t,n){const r=[...e];return r[n]=t,r.sort((i,o)=>i-o)}function xe(e,t,n){const o=100/(n-t)*(e-t);return ae(o,[0,100])}function Ct(e,t){return t>2?`Value ${e+1} of ${t}`:t===2?["Minimum","Maximum"][e]:void 0}function Dt(e,t){if(e.length===1)return 0;const n=e.map(i=>Math.abs(i-t)),r=Math.min(...n);return n.indexOf(r)}function jt(e,t,n){const r=e/2,o=G([0,50],[0,r]);return(r-o(t)*n)*n}function It(e){return e.slice(0,-1).map((t,n)=>e[n+1]-t)}function Mt(e,t){if(t>0){const n=It(e);return Math.min(...n)>=t}return!0}function G(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}function Pt(e){return(String(e).split(".")[1]||"").length}function _t(e,t){const n=Math.pow(10,t);return Math.round(e*n)/n}const kt=gt,Rt=$t,Tt=bt,At=vt;var C=(e=>(e[e.Default=0]="Default",e[e.Inpaint=1]="Inpaint",e))(C||{});function Nt({imageAsset:e,mode:t,setMode:n,clientThreadId:r,messageId:i,cursorWidth:o,setCursorWidth:s,inpaintingDrawingState:l,isLoadingNewImage:u}){const p=ot.getServerThreadId(r),{canUndoDrawing:m,undoDrawing:d,canRedoDrawing:f,redoDrawing:S,clearAllDrawings:b}=l,g=F();return a.jsxs(le.div,{className:"flex h-16 w-full justify-between px-4",...re,children:[a.jsx("div",{className:"flex items-center",children:t===C.Inpaint&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:W("flex items-center gap-3",u&&"opacity-50"),children:[a.jsx(ne,{className:"h-[11px] w-[11px]"}),a.jsxs(kt,{className:"relative flex w-[90px] items-center",min:32,max:240,step:.01,value:[o],onValueChange:x=>s(x[0]),disabled:u,children:[a.jsx(Rt,{className:"relative h-[2px] grow bg-token-text-quaternary",children:a.jsx(Tt,{className:"absolute h-full bg-token-text-secondary"})}),a.jsx(At,{className:"block h-[11px] w-[11px] rounded-full bg-token-text-secondary"})]}),a.jsx(ne,{className:"h-6 w-6"})]}),a.jsx(te,{}),a.jsx(M,{disabled:!m||u,onClick:d,children:a.jsx(Le,{})}),a.jsx(M,{disabled:!f||u,onClick:S,children:a.jsx(Oe,{})}),a.jsx(te,{}),a.jsx(M,{disabled:!m||u,onClick:b,children:a.jsx(N,{id:"imageEditorControls.clearSelectionButtonLabel",defaultMessage:"Clear selection"})})]})}),a.jsx("div",{className:"flex items-center",children:t===C.Inpaint?a.jsx(M,{onClick:()=>n(C.Default),disabled:u,children:a.jsx(N,{id:"imageEditorControls.cancelButtonLabel",defaultMessage:"Cancel"})}):a.jsxs(a.Fragment,{children:[a.jsx(Kt,{imageAsset:e,setMode:n,messageId:i,serverThreadId:p}),a.jsx(M,{tooltip:g.formatMessage({id:"imageEditorControls.downloadButtonTooltip",defaultMessage:"Save"}),onClick:()=>Ze(e,p,i),children:a.jsx(st,{})}),a.jsx(Vt,{prompt:ie(e),children:a.jsx(M,{tooltip:g.formatMessage({id:"imageEditorControls.promptButtonTooltip",defaultMessage:"Prompt"}),children:a.jsx(ce,{})})}),a.jsx(M,{tooltip:g.formatMessage({id:"imageEditorControls.closeButtonTooltip",defaultMessage:"Close"}),onClick:L.close,children:a.jsx(it,{className:"icon-lg"})})]})})]})}function Vt({prompt:e,children:t}){const[n,r]=c.useState(!1),i=F();return a.jsx(Fe,{sideOffset:4,alignAgainstAnchor:"end",triggerButton:a.jsx("div",{className:"group",children:t}),className:"z-10",size:"none",children:a.jsxs("div",{className:"flex max-w-sm flex-col gap-3 p-4",children:[a.jsx("div",{className:"text-token-text-secondary",children:a.jsx(N,{id:"imageEditorControls.promptPopoverLabel",defaultMessage:"Prompt"})}),a.jsx("div",{children:e}),a.jsx("div",{children:a.jsx(De,{color:"secondary",disabled:n,onClick:()=>{r(!0),He(e),setTimeout(()=>r(!1),2e3)},icon:ct,children:n?i.formatMessage({id:"imageEditorControls.copiedButtonLabel",defaultMessage:"Copied!"}):i.formatMessage({id:"imageEditorControls.copyButtonLabel",defaultMessage:"Copy"})})})]})})}function M({children:e,tooltip:t,disabled:n,onClick:r}){const i=a.jsx("button",{className:W("rounded p-2 font-semibold hover:bg-token-main-surface-tertiary group-radix-state-open:bg-token-main-surface-tertiary",n?"text-token-text-quaternary":"text-token-text-secondary"),disabled:n,onClick:r,children:e});return t!=null?a.jsx(ze,{label:t,sideOffset:4,children:i}):i}function Kt({imageAsset:e,setMode:t,messageId:n,serverThreadId:r,disabled:i}){const o=F(),s=Ue(We.DalleEditingOnboarding),l=s.eligible&&!s.isLoading,u=a.jsx(M,{tooltip:l?void 0:o.formatMessage({id:"imageEditorControls.inpaintButtonTooltip",defaultMessage:"Select"}),onClick:()=>{var p,m,d,f,S,b,g,x,v,E;t(C.Inpaint),je.logEvent("chatgpt_dalle_inpaint_click",null,{sourceOperation:((m=(p=e.metadata)==null?void 0:p.dalle)==null?void 0:m.edit_op)??"none",hasParent:((f=(d=e.metadata)==null?void 0:d.dalle)==null?void 0:f.parent_gen_id)!=null?"true":"false"}),Ie.logEvent(Me.dalleImageClickInpaint,{conversationId:r,messageId:n,generationId:(b=(S=e.metadata)==null?void 0:S.dalle)==null?void 0:b.gen_id,fileId:Ge(e.asset_pointer),parentGenerationId:(x=(g=e.metadata)==null?void 0:g.dalle)==null?void 0:x.parent_gen_id,sourceOperation:(E=(v=e.metadata)==null?void 0:v.dalle)==null?void 0:E.edit_op})},disabled:i,children:a.jsx(Xe,{})});return l?a.jsx(Ye,{show:!0,side:"bottom",sideOffset:0,title:o.formatMessage({id:"imageEditorNUX.title",defaultMessage:"Select area of the image to edit"}),description:o.formatMessage({id:"imageEditorNUX.description",defaultMessage:"Highlight the area and describe changes in chat."}),onDismiss:s.markAsViewed,children:a.jsx("div",{children:u})}):u}const te=oe.div`mx-3 w-[1px] h-6 bg-token-border-light`,ne=oe.div`rounded-full border-2 border-token-text-secondary`;function Bt({mode:e,imageIndex:t,allImages:n,onSwitchImage:r,isLoadingNewImage:i}){const o=t>0,s=c.useCallback(()=>{o&&r(n[t-1])},[o,n,t,r]),l=t<n.length-1,u=c.useCallback(()=>{l&&r(n[t+1])},[l,n,t,r]);return c.useEffect(()=>{function p(m){m.target instanceof HTMLTextAreaElement||e===C.Default&&(m.key==="ArrowLeft"?s():m.key==="ArrowRight"&&u())}return document.addEventListener("keydown",p),()=>{document.removeEventListener("keydown",p)}},[e,s,u]),a.jsx("div",{className:"flex h-16 w-full items-center justify-center gap-3 font-semibold text-token-text-secondary",children:e===C.Inpaint?!i&&a.jsxs("div",{className:"flex items-center gap-1.5",children:[a.jsx(N,{id:"imageEditor.selectArea",defaultMessage:"Select an area to edit"}),a.jsx("a",{href:"https://help.openai.com/en/articles/9055440",target:"_blank",rel:"noreferrer",children:a.jsx(ce,{className:"icon-md"})})]}):n.length>1?a.jsxs(a.Fragment,{children:[a.jsx("button",{disabled:!o,className:"disabled:text-token-text-tertiary",onClick:s,children:a.jsx(lt,{className:"icon-lg"})}),a.jsx("div",{children:a.jsx(N,{id:"imageEditor.imageNumber",defaultMessage:"Image {num} of {numImages}",values:{num:t+1,numImages:n.length}})}),a.jsx("button",{disabled:!l,className:"disabled:text-token-text-tertiary",onClick:u,children:a.jsx(dt,{className:"icon-lg"})})]}):null})}const Lt=0,Ot=64;function Ft({imageAsset:e,children:t,containerDimensions:n,isLoadingNewImage:r}){return a.jsxs(le.div,{className:"absolute",style:Ht(e,n),...re,children:[t,a.jsx("div",{className:W("absolute inset-0 flex items-center justify-center bg-token-main-surface-primary transition-opacity duration-1000",r?"pointer-events-auto opacity-60":"pointer-events-none opacity-0")})]})}function Ht(e,t){const{width:n,height:r}=e,{width:i,height:o}=t,s=i-2*Lt,l=o-2*Ot,u=n/r,p=s/l,m=u>p,d=m?s:l*u,f=m?s/u:l,S=(o-f)/2,b=(i-d)/2;return{top:S,left:b,width:d,height:f}}const zt=Pe(()=>_e(()=>import("./kla4cznggquldyr9.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(e=>e.DynamicDrawingCanvas));function An({clientThreadId:e,messageId:t,image:n,allImages:r}){const i=at(e),o=rt(e,i),s=o==null?void 0:o.messages[o.messages.length-1],l=s!=null&&J(s.message)===Q.Dalle&&!et(s.message),u=ke();return c.useEffect(()=>{async function p(m,d){try{const f=await Qe(u,m);L.setFocusedObject({type:se.Image,image:f[0],allImages:f,messageId:d})}catch(f){Ne.addError(new Error("Failed to load newly created images:",{cause:f}))}}if(s!=null&&J(s.message)===Q.DalleTool&&s.message.content.content_type===Re.MultimodalText){const m=Te.getImageAssetPointers(s.message);p(m,s.message.id)}},[u,s]),a.jsx(Ut,{image:n,allImages:r,isLoadingNewImage:l,clientThreadId:e,messageId:t})}function Ut({image:e,allImages:t,isLoadingNewImage:n,clientThreadId:r,messageId:i}){const[o,s]=c.useState(C.Default),[l,u]=c.useState({width:window.innerWidth-Ve,height:window.innerHeight}),p=c.useRef(null),[m,d]=c.useState(136),f=ut(),{currentDrawnShape:S,onNewDrawnShape:b,clearAllDrawings:g}=f,x=c.useRef(null),v=F(),{setTargetedContent:E}=qe();c.useEffect(()=>{const h=new ResizeObserver(D=>{const{width:K,height:y}=D[0].contentRect;u({width:K,height:y})});return p.current&&h.observe(p.current),()=>{h.disconnect()}},[]),c.useEffect(()=>{function h(D){D.key==="Escape"&&(o===C.Inpaint?s(C.Default):L.close())}return document.addEventListener("keydown",h),()=>{document.removeEventListener("keydown",h)}},[o]),c.useEffect(()=>(S==null?E({type:"object",placeholderTextOverride:Ae({id:"imageEditor.transformationTextareaPlaceholder",defaultMessage:"Edit image…"}),shouldPersistAcrossMessages:!0,isFocusedViewContent:!0,createNewCompletionParams:h=>tt(h,e)}):E({type:"object",label:v.formatMessage({id:"imageEditor.inpaintingTargetedContentLabel",defaultMessage:"Edit selection"}),isFocusedViewContent:!0,createNewCompletionParams:async h=>{var D;return await nt(h,e,(D=x.current)==null?void 0:D.getImageData(),v)},onCleared:()=>s(C.Default)}),()=>{E(void 0)}),[e,v,E,S]),c.useEffect(()=>{o!==C.Inpaint&&g()},[o]),c.useEffect(()=>{s(C.Default)},[e]);const $=t.findIndex(h=>h.asset_pointer===e.asset_pointer);return a.jsxs("div",{ref:p,className:"flex h-full w-full flex-col justify-between",children:[a.jsx(Nt,{imageAsset:e,mode:o,setMode:s,clientThreadId:r,messageId:i,cursorWidth:m,setCursorWidth:d,inpaintingDrawingState:f,isLoadingNewImage:n}),a.jsx(Bt,{mode:o,imageIndex:$,allImages:t,onSwitchImage:h=>{L.setFocusedObject({type:se.Image,image:h,allImages:t,messageId:i})},isLoadingNewImage:n}),a.jsxs(Ft,{imageAsset:e,containerDimensions:l,isLoadingNewImage:n,children:[a.jsx(Je,{className:"h-full w-full",alt:ie(e),src:e.url,width:e.width,height:e.height,fadeIn:!1}),o===C.Inpaint&&a.jsx("div",{className:"absolute inset-0",children:a.jsx(zt,{drawingCanvasRef:x,color:"rgba(0, 122, 255, 0.5)",dashedOutlineColor:"rgba(255, 255, 255, 0.65)",cursorWidth:m,canvasWidth:e.width,canvasHeight:e.height,currentDrawnShape:S,onNewDrawnShape:b})})]})]})}export{An as ImageEditor};
//# sourceMappingURL=bl80vu09hehao8p5.js.map