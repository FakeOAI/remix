import{cF as m,cG as nt,cH as se,cI as M,cJ as lt,cK as ct,cL as p,cM as c,cN as s,cO as ie,cP as ue,cQ as st,cR as it,cS as ut,cT as dt,cU as ft,cV as mt,cW as vt,cX as ht,cY as gt,cZ as pt,c_ as Le,c$ as bt,d0 as St,d1 as Ke,d2 as Tt,d3 as yt,d4 as $e,d5 as wt,d6 as Ct,d7 as Et,d8 as Ht,d9 as _t,da as Nt}from"./gpe91l6ql3o0s610.js";import{r as l,O as y,a7 as kt,m as L,q as de}from"./cbv020t7gzp4f872.js";import{m as ze}from"./j1mltnb4g3et1nfv.js";function je(i,t){var u=yt(i);if($e){var v=$e(i);t&&(v=wt(v).call(v,function(g){return Ke(i,g).enumerable})),u.push.apply(u,v)}return u}function De(i){for(var t=1;t<arguments.length;t++){var u=arguments[t]!=null?arguments[t]:{};if(t%2){var v;ue(v=je(Object(u),!0)).call(v,function(h){pt(i,h,u[h])})}else if(Le)bt(i,Le(u));else{var g;ue(g=je(Object(u))).call(g,function(h){St(i,h,Ke(u,h))})}}return i}var xt=function(){return 1/0},Ve=17,Bt="bottom",E="top",Fe=1,Pt=34,We={};function Ot(i,t){return i(),Tt(i,t)}function Xe(i){var t=i.mode,u=i.target,v=u.offsetHeight,g=u.scrollHeight,h=u.scrollTop,b=g-h-v<Fe,r=h<Fe,S=t===E?r:b,w=t!==E?r:b;return{atBottom:b,atEnd:S,atStart:w,atTop:r}}function K(i,t){return i===(t===E?0:"100%")}var fe=function(t){var u=t.checkInterval,v=t.children,g=t.debounce,h=t.debug,b=t.initialScrollBehavior,r=t.mode,S=t.nonce,w=t.scroller,n=l.useMemo(function(){return nt("<ScrollToBottom>",{force:h})},[h]);r=r===E?E:Bt;var $=l.useRef(0),z=l.useRef(b),Ye=se(r===E?0:"100%"),Z=M(Ye,3),P=Z[0],U=Z[1],j=Z[2],Ge=se(null),q=M(Ge,3),T=q[0],ve=q[1],H=q[2],A=l.useRef(0),ee=l.useRef(0),Y=l.useRef(0),Je=l.useState(!0),he=M(Je,2),ge=he[0],pe=he[1],Qe=l.useState(!0),be=M(Qe,2),Se=be[0],Te=be[1],Ze=l.useState(!0),ye=M(Ze,2),we=ye[0],Ce=ye[1],qe=l.useState(!1),Ee=M(qe,2),He=Ee[0],_e=Ee[1],Ae=se(!0),te=M(Ae,3),re=te[0],N=te[1],k=te[2],X=l.useRef([]),Ne=l.useCallback(function(e){var o=H.current;return X.current.push(e),o&&e({scrollTop:o.scrollTop}),function(){var a=X.current,d=lt(a).call(a,e);~d&&ct(a).call(a,d,1)}},[X,H]),ae=l.useCallback(function(){var e=j.current;n(function(){var o;return p(o=["%cSpineTo%c: %conEnd%c is fired."]).call(o,c(s("magenta")),c(s("orange")),[{animateTo:e}])}),$.current=ie(),K(e,r)||N(!1),U(null)},[j,n,$,r,U,N]),x=l.useCallback(function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=o.behavior,d=H.current;if(typeof e!="number"&&e!=="100%")return console.warn('react-scroll-to-bottom: Arguments passed to scrollTo() must be either number or "100%".');n(function(){var f;return[p(f=["%cscrollTo%c: Will scroll to %c".concat(typeof e=="number"?e+"px":e.replace(/%/g,"%%"),"%c")]).call(f,c(s("lime","")),c(s("purple"))),{behavior:a,nextAnimateTo:e,target:d}]}),a==="auto"?(ae(),d&&(d.scrollTop=e==="100%"?d.scrollHeight-d.offsetHeight:e)):(a!=="smooth"&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollTo". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'),U(e)),K(e,r)&&(n(function(){var f;return[p(f=["%cscrollTo%c: Scrolling to end, will set sticky to %ctrue%c."]).call(f,c(s("lime","")),c(s("purple"))),[{mode:r,nextAnimateTo:e}]]}),N(!0))},[n,ae,r,U,N,H]),D=l.useCallback(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=e.behavior;n(function(){var a;return p(a=["%cscrollToBottom%c: Called"]).call(a,c(s("yellow","")))}),o!=="smooth"&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToBottom". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'),x("100%",{behavior:o||"smooth"})},[n,x]),V=l.useCallback(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=e.behavior;n(function(){var a;return p(a=["%cscrollToTop%c: Called"]).call(a,c(s("yellow","")))}),o!=="smooth"&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToTop". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'),x(0,{behavior:o||"smooth"})},[n,x]),ke=l.useCallback(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=e.behavior;n(function(){var d;return p(d=["%cscrollToEnd%c: Called"]).call(d,c(s("yellow","")))}),o!=="smooth"&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToEnd". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.');var a={behavior:o||"smooth"};r===E?V(a):D(a)},[n,r,D,V]),xe=l.useCallback(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=e.behavior;n(function(){var d;return p(d=["%cscrollToStart%c: Called"]).call(d,c(s("yellow","")))}),o!=="smooth"&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToStart". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.');var a={behavior:o||"smooth"};r===E?D(a):V(a)},[n,r,D,V]),G=l.useCallback(function(){var e=H.current;if(e){if(z.current==="auto"){n(function(){var I;return p(I=["%ctarget changed%c: Initial scroll"]).call(I,c(s("blue")))}),e.scrollTop=r===E?0:e.scrollHeight-e.offsetHeight,z.current=!1;return}var o=A.current,a=e.offsetHeight,d=e.scrollHeight,f=e.scrollTop,_=r===E?0:Math.max(0,d-a-f),O=Math.max(0,o-f),J=w({maxValue:_,minValue:O,offsetHeight:a,scrollHeight:d,scrollTop:f}),B=Math.max(0,Math.min(_,J)),C;r===E||B!==_?C=f+B:C="100%",n(function(){var I,F,W;return[p(I=[p(F=p(W="%cscrollToSticky%c: Will animate from %c".concat(o,"px%c to %c")).call(W,typeof C=="number"?C+"px":C.replace(/%/g,"%%"),"%c (%c")).call(F,(C==="100%"?_:C)+o,"px%c)")]).call(I,c(s("orange")),c(s("purple")),c(s("purple")),c(s("purple"))),{animateFrom:o,maxValue:_,minValue:O,nextAnimateTo:C,nextValue:B,offsetHeight:a,rawNextValue:J,scrollHeight:d,scrollTop:f}]}),x(C,{behavior:"smooth"})}},[A,n,r,w,x,H]),et=l.useCallback(function(e){var o,a=e.timeStampLow,d=j.current,f=H.current,_=d!==null;if(!(a<=$.current||!f)){var O=Xe({mode:r,target:f}),J=O.atBottom,B=O.atEnd,C=O.atStart,I=O.atTop;pe(J),Te(B),_e(C),Ce(I);var F=f.offsetHeight,W=f.scrollHeight,Pe=ee.current,Oe=Y.current,le=F!==Pe,ce=W!==Oe;if(le&&(ee.current=F),ce&&(Y.current=W),!le&&!ce){var Q=_&&K(d,r)||B;k.current!==Q&&(n(function(){var R,Ie,Re,Me;return[p(R=["%conScroll%c: %csetSticky%c(%c".concat(Q,"%c)")]).call(R,c(s("red")),c(s("red")),c(s("purple"))),p(Ie=[p(Re=p(Me="(animating = %c".concat(_,"%c && isEnd = %c")).call(Me,K(d,r),"%c) || atEnd = %c")).call(Re,B,"%c")]).call(Ie,c(s("purple")),c(s("purple")),c(s("purple")),[{animating:_,animateTo:d,atEnd:B,mode:r,offsetHeight:f.offsetHeight,scrollHeight:f.scrollHeight,sticky:k.current,nextSticky:Q}])]}),N(Q))}else k.current&&(n(function(){var R;return[p(R=["%conScroll%c: Size changed while sticky, calling %cscrollToSticky()%c"]).call(R,c(s("red")),c(s("orange")),[{offsetHeightChanged:le,scrollHeightChanged:ce}]),{nextOffsetHeight:F,prevOffsetHeight:Pe,nextScrollHeight:W,prevScrollHeight:Oe}]}),G());var ot=f.scrollTop;ue(o=X.current).call(o,function(R){return R({scrollTop:ot})})}},[j,n,$,r,ee,Y,X,G,pe,Te,_e,Ce,N,k,H]);l.useEffect(function(){if(T){var e=!1,o=Ot(function(){var a=H.current,d=j.current!==null;k.current?Xe({mode:r,target:a}).atEnd?e=!1:e?ie()-e>Pt&&(d||(A.current=a.scrollTop,n(function(){var f;return p(f=["%cInterval check%c: Should sticky but not at end, calling %cscrollToSticky()%c to scroll"]).call(f,c(s("navy")),c(s("orange")))}),G()),e=!1):e=ie():a.scrollHeight<=a.offsetHeight&&!k.current&&(n(function(){var f;return[p(f=["%cInterval check%c: Container is emptied, setting sticky back to %ctrue%c"]).call(f,c(s("navy")),c(s("purple"))),[{offsetHeight:a.offsetHeight,scrollHeight:a.scrollHeight,sticky:k.current}]]}),N(!0))},Math.max(Ve,u)||Ve);return function(){return clearInterval(o)}}},[j,u,n,r,G,N,k,T,H]);var Be=l.useMemo(function(){var e=We[S]||(We[S]=st({key:"react-scroll-to-bottom--css-"+it(),nonce:S}));return function(o){return e.css(o)+""}},[S]),tt=l.useMemo(function(){return{observeScrollPosition:Ne,setTarget:ve,styleToClassName:Be}},[Ne,ve,Be]),oe=l.useMemo(function(){return{atBottom:ge,atEnd:Se,atStart:He,atTop:we,mode:r}},[ge,Se,He,we,r]),ne=l.useMemo(function(){var e=P!==null;return{animating:e,animatingToEnd:e&&K(P,r),sticky:re}},[P,r,re]),rt=l.useMemo(function(){return De(De({},oe),ne)},[oe,ne]),at=l.useMemo(function(){return{scrollTo:x,scrollToBottom:D,scrollToEnd:ke,scrollToStart:xe,scrollToTop:V}},[x,D,ke,xe,V]);return l.useEffect(function(){if(T){var e=function(){Y.current=T.scrollHeight};return T.addEventListener("focus",e,{capture:!0,passive:!0}),function(){return T.removeEventListener("focus",e)}}},[T]),n(function(){var e;return[p(e=["%cRender%c: Render"]).call(e,c(s("cyan",""))),{animateTo:P,animating:P!==null,sticky:re,target:T}]}),y.createElement(ut.Provider,{value:tt},y.createElement(dt.Provider,{value:at},y.createElement(ft.Provider,{value:rt},y.createElement(mt.Provider,{value:oe},y.createElement(vt.Provider,{value:ne},v,T&&y.createElement(ht,{debounce:g,name:"scroll",onEvent:et,target:T}),T&&P!==null&&y.createElement(gt,{name:"scrollTop",onEnd:ae,target:T,value:P}))))))};fe.defaultProps={checkInterval:100,children:void 0,debounce:17,debug:void 0,initialScrollBehavior:"smooth",mode:void 0,nonce:void 0,scroller:xt};fe.propTypes={checkInterval:m.number,children:m.any,debounce:m.number,debug:m.bool,initialScrollBehavior:m.oneOf(["auto","smooth"]),mode:m.oneOf(["bottom","top"]),nonce:m.string,scroller:m.func};var It={position:"relative"},me=function(t){var u=t.children,v=t.className,g=t.followButtonClassName,h=t.scrollViewClassName,b=Ct()(It);return y.createElement("div",{className:Et(b,(v||"")+"")},y.createElement(Ht,{className:(h||"")+""},u),y.createElement(_t,{className:(g||"")+""}))};me.defaultProps={children:void 0,className:void 0,followButtonClassName:void 0,scrollViewClassName:void 0};me.propTypes={children:m.any,className:m.string,followButtonClassName:m.string,scrollViewClassName:m.string};var Ue=function(t){var u=t.checkInterval,v=t.children,g=t.className,h=t.debounce,b=t.debug,r=t.followButtonClassName,S=t.initialScrollBehavior,w=t.mode,n=t.nonce,$=t.scroller,z=t.scrollViewClassName;return y.createElement(fe,{checkInterval:u,debounce:h,debug:b,initialScrollBehavior:S,mode:w,nonce:n,scroller:$},y.createElement(me,{className:g,followButtonClassName:r,scrollViewClassName:z},v))};Ue.defaultProps={checkInterval:void 0,children:void 0,className:void 0,debounce:void 0,debug:void 0,followButtonClassName:void 0,initialScrollBehavior:"smooth",mode:void 0,nonce:void 0,scroller:void 0,scrollViewClassName:void 0};Ue.propTypes={checkInterval:m.number,children:m.any,className:m.string,debounce:m.number,debug:m.bool,followButtonClassName:m.string,initialScrollBehavior:m.oneOf(["auto","smooth"]),mode:m.oneOf(["bottom","top"]),nonce:m.string,scroller:m.func,scrollViewClassName:m.string};Nt();function Dt({lines:i=1,variance:t=0,size:u="base",width:v=50,widthVariance:g=50,className:h}){const[b]=l.useState(Array.from({length:i+Math.random()*(t??0)},()=>v+Math.random()*g));let r="";switch(u){case"sm":r="h-3 mb-2 mt-0.5";break;case"base":r="h-4 my-2";break;case"lg":r="h-5 my-2";break}return L.jsx(L.Fragment,{children:b.map((S,w)=>L.jsx("div",{className:de("relative w-full overflow-hidden rounded-md bg-token-sidebar-surface-secondary",r,h),style:{width:`${S}%`},children:L.jsx(ze.div,{className:"absolute left-0 top-0 h-full w-full rotate-45 bg-gradient-to-r from-transparent via-black/20 to-transparent opacity-50 dark:via-white/5",animate:{x:["-100%","100%"],opacity:[1,0,1],transition:{repeat:1/0,repeatType:"loop",duration:1.5+w}}})},w))})}function Vt({lines:i=1,indexOffset:t=0,variance:u=0,width:v=50,widthVariance:g=50,gapFrequency:h=0,scaleUpAnimation:b,className:r}){const S=l.useMemo(()=>Array.from({length:i+Math.random()*(u??0)},()=>v+Math.random()*g),[i,u,v,g]);return L.jsx(Rt,{className:r,children:S.map((w,n)=>L.jsx(Mt,{index:n+t,width:w,className:de(h>0&&(n+1)%h===0&&"mb-snc-1"),customAnimation:b?{initial:{scaleX:b.initialScaleX},animate:{scaleX:1},transition:{scaleX:{duration:b.duration,ease:"easeInOut",delay:n*.07}}}:void 0},n))})}const Rt=kt.div`flex flex-col items-start gap-2`;function Mt({index:i,width:t,className:u,customAnimation:v}){const{initial:g,animate:h,transition:b}=v??{initial:{},animate:{},transition:{}};return L.jsx(ze.div,{className:de("h-5 origin-left rounded-md bg-token-border-light dark:bg-white/10",u),style:{width:`${t}%`},initial:{opacity:1,...g},animate:{opacity:[1,.4],...h},transition:{opacity:{repeat:1/0,repeatType:"reverse",duration:.85,ease:"easeInOut",delay:i*.07},...b}})}export{Ue as B,Dt as P,Vt as a,Mt as b};
//# sourceMappingURL=nriec8vah7hgye40.js.map