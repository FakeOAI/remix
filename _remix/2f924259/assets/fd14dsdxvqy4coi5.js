import{dM as f,dN as rt,dO as ce,dP as x,dQ as ot,dR as at,dS as m,dT as l,dU as n,dV as se,dW as ie,dX as lt,dY as nt,dZ as ct,d_ as st,d$ as it,e0 as ut,e1 as ft,e2 as dt,e3 as vt,e4 as mt,e5 as xe,e6 as ht,e7 as gt,e8 as Fe,e9 as pt,ea as bt,eb as Me,ec as St,ed as Tt,ee as Ct,ef as wt,eg as Et,eh as yt}from"./sfdamp1qo3tlrbo9.js";import{r as c,an as S}from"./f2udakjpoavu4gos.js";function Le(d,t){var v=bt(d);if(Me){var h=Me(d);t&&(h=St(h).call(h,function(p){return Fe(d,p).enumerable})),v.push.apply(v,h)}return v}function $e(d){for(var t=1;t<arguments.length;t++){var v=arguments[t]!=null?arguments[t]:{};if(t%2){var h;ie(h=Le(Object(v),!0)).call(h,function(g){mt(d,g,v[g])})}else if(xe)ht(d,xe(v));else{var p;ie(p=Le(Object(v))).call(p,function(g){gt(d,g,Fe(v,g))})}}return d}var _t=function(){return 1/0},Ve=17,Ht="bottom",C="top",De=1,Bt=34,je={};function Nt(d,t){return d(),pt(d,t)}function Ue(d){var t=d.mode,v=d.target,h=v.offsetHeight,p=v.scrollHeight,g=v.scrollTop,E=p-g-h<De,r=g<De,_=t===C?r:E,M=t!==C?r:E;return{atBottom:E,atEnd:_,atStart:M,atTop:r}}function K(d,t){return d===(t===C?0:"100%")}var ue=function(t){var v=t.checkInterval,h=t.children,p=t.debounce,g=t.debug,E=t.initialScrollBehavior,r=t.mode,_=t.nonce,M=t.scroller,s=c.useMemo(function(){return rt("<ScrollToBottom>",{force:g})},[g]);r=r===C?C:Ht;var L=c.useRef(0),W=c.useRef(E),We=ce(r===C?0:"100%"),q=x(We,3),O=q[0],Y=q[1],$=q[2],Ye=ce(null),G=x(Ye,3),b=G[0],de=G[1],w=G[2],J=c.useRef(0),A=c.useRef(0),z=c.useRef(0),ze=c.useState(!0),ve=x(ze,2),me=ve[0],he=ve[1],Qe=c.useState(!0),ge=x(Qe,2),pe=ge[0],be=ge[1],Xe=c.useState(!0),Se=x(Xe,2),Te=Se[0],Ce=Se[1],Ze=c.useState(!1),we=x(Ze,2),Ee=we[0],ye=we[1],qe=ce(!0),ee=x(qe,3),te=ee[0],H=ee[1],B=ee[2],F=c.useRef([]),_e=c.useCallback(function(e){var a=w.current;return F.current.push(e),a&&e({scrollTop:a.scrollTop}),function(){var o=F.current,i=ot(o).call(o,e);~i&&at(o).call(o,i,1)}},[F,w]),re=c.useCallback(function(){var e=$.current;s(function(){var a;return m(a=["%cSpineTo%c: %conEnd%c is fired."]).call(a,l(n("magenta")),l(n("orange")),[{animateTo:e}])}),L.current=se(),K(e,r)||H(!1),Y(null)},[$,s,L,r,Y,H]),N=c.useCallback(function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=a.behavior,i=w.current;if(typeof e!="number"&&e!=="100%")return console.warn('react-scroll-to-bottom: Arguments passed to scrollTo() must be either number or "100%".');s(function(){var u;return[m(u=["%cscrollTo%c: Will scroll to %c".concat(typeof e=="number"?e+"px":e.replace(/%/g,"%%"),"%c")]).call(u,l(n("lime","")),l(n("purple"))),{behavior:o,nextAnimateTo:e,target:i}]}),o==="auto"?(re(),i&&(i.scrollTop=e==="100%"?i.scrollHeight-i.offsetHeight:e)):(o!=="smooth"&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollTo". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'),Y(e)),K(e,r)&&(s(function(){var u;return[m(u=["%cscrollTo%c: Scrolling to end, will set sticky to %ctrue%c."]).call(u,l(n("lime","")),l(n("purple"))),[{mode:r,nextAnimateTo:e}]]}),H(!0))},[s,re,r,Y,H,w]),V=c.useCallback(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.behavior;s(function(){var o;return m(o=["%cscrollToBottom%c: Called"]).call(o,l(n("yellow","")))}),a!=="smooth"&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToBottom". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'),N("100%",{behavior:a||"smooth"})},[s,N]),D=c.useCallback(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.behavior;s(function(){var o;return m(o=["%cscrollToTop%c: Called"]).call(o,l(n("yellow","")))}),a!=="smooth"&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToTop". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.'),N(0,{behavior:a||"smooth"})},[s,N]),He=c.useCallback(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.behavior;s(function(){var i;return m(i=["%cscrollToEnd%c: Called"]).call(i,l(n("yellow","")))}),a!=="smooth"&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToEnd". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.');var o={behavior:a||"smooth"};r===C?D(o):V(o)},[s,r,V,D]),Be=c.useCallback(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.behavior;s(function(){var i;return m(i=["%cscrollToStart%c: Called"]).call(i,l(n("yellow","")))}),a!=="smooth"&&console.warn('react-scroll-to-bottom: Please set "behavior" when calling "scrollToStart". In future versions, the default behavior will be changed from smooth scrolling to discrete scrolling to align with HTML Standard.');var o={behavior:a||"smooth"};r===C?V(o):D(o)},[s,r,V,D]),Q=c.useCallback(function(){var e=w.current;if(e){if(W.current==="auto"){s(function(){var k;return m(k=["%ctarget changed%c: Initial scroll"]).call(k,l(n("blue")))}),e.scrollTop=r===C?0:e.scrollHeight-e.offsetHeight,W.current=!1;return}var a=J.current,o=e.offsetHeight,i=e.scrollHeight,u=e.scrollTop,y=r===C?0:Math.max(0,i-o-u),P=Math.max(0,a-u),X=M({maxValue:y,minValue:P,offsetHeight:o,scrollHeight:i,scrollTop:u}),R=Math.max(0,Math.min(y,X)),T;r===C||R!==y?T=u+R:T="100%",s(function(){var k,j,U;return[m(k=[m(j=m(U="%cscrollToSticky%c: Will animate from %c".concat(a,"px%c to %c")).call(U,typeof T=="number"?T+"px":T.replace(/%/g,"%%"),"%c (%c")).call(j,(T==="100%"?y:T)+a,"px%c)")]).call(k,l(n("orange")),l(n("purple")),l(n("purple")),l(n("purple"))),{animateFrom:a,maxValue:y,minValue:P,nextAnimateTo:T,nextValue:R,offsetHeight:o,rawNextValue:X,scrollHeight:i,scrollTop:u}]}),N(T,{behavior:"smooth"})}},[J,s,r,M,N,w]),Ge=c.useCallback(function(e){var a,o=e.timeStampLow,i=$.current,u=w.current,y=i!==null;if(!(o<=L.current||!u)){var P=Ue({mode:r,target:u}),X=P.atBottom,R=P.atEnd,T=P.atStart,k=P.atTop;he(X),be(R),ye(T),Ce(k);var j=u.offsetHeight,U=u.scrollHeight,Re=A.current,Oe=z.current,le=j!==Re,ne=U!==Oe;if(le&&(A.current=j),ne&&(z.current=U),!le&&!ne){var Z=y&&K(i,r)||R;B.current!==Z&&(s(function(){var I,Pe,ke,Ie;return[m(I=["%conScroll%c: %csetSticky%c(%c".concat(Z,"%c)")]).call(I,l(n("red")),l(n("red")),l(n("purple"))),m(Pe=[m(ke=m(Ie="(animating = %c".concat(y,"%c && isEnd = %c")).call(Ie,K(i,r),"%c) || atEnd = %c")).call(ke,R,"%c")]).call(Pe,l(n("purple")),l(n("purple")),l(n("purple")),[{animating:y,animateTo:i,atEnd:R,mode:r,offsetHeight:u.offsetHeight,scrollHeight:u.scrollHeight,sticky:B.current,nextSticky:Z}])]}),H(Z))}else B.current&&(s(function(){var I;return[m(I=["%conScroll%c: Size changed while sticky, calling %cscrollToSticky()%c"]).call(I,l(n("red")),l(n("orange")),[{offsetHeightChanged:le,scrollHeightChanged:ne}]),{nextOffsetHeight:j,prevOffsetHeight:Re,nextScrollHeight:U,prevScrollHeight:Oe}]}),Q());var tt=u.scrollTop;ie(a=F.current).call(a,function(I){return I({scrollTop:tt})})}},[$,s,L,r,A,z,F,Q,he,be,ye,Ce,H,B,w]);c.useEffect(function(){if(b){var e=!1,a=Nt(function(){var o=w.current,i=$.current!==null;B.current?Ue({mode:r,target:o}).atEnd?e=!1:e?se()-e>Bt&&(i||(J.current=o.scrollTop,s(function(){var u;return m(u=["%cInterval check%c: Should sticky but not at end, calling %cscrollToSticky()%c to scroll"]).call(u,l(n("navy")),l(n("orange")))}),Q()),e=!1):e=se():o.scrollHeight<=o.offsetHeight&&!B.current&&(s(function(){var u;return[m(u=["%cInterval check%c: Container is emptied, setting sticky back to %ctrue%c"]).call(u,l(n("navy")),l(n("purple"))),[{offsetHeight:o.offsetHeight,scrollHeight:o.scrollHeight,sticky:B.current}]]}),H(!0))},Math.max(Ve,v)||Ve);return function(){return clearInterval(a)}}},[$,v,s,r,Q,H,B,b,w]);var Ne=c.useMemo(function(){var e=je[_]||(je[_]=lt({key:"react-scroll-to-bottom--css-"+nt(),nonce:_}));return function(a){return e.css(a)+""}},[_]),Je=c.useMemo(function(){return{observeScrollPosition:_e,setTarget:de,styleToClassName:Ne}},[_e,de,Ne]),oe=c.useMemo(function(){return{atBottom:me,atEnd:pe,atStart:Ee,atTop:Te,mode:r}},[me,pe,Ee,Te,r]),ae=c.useMemo(function(){var e=O!==null;return{animating:e,animatingToEnd:e&&K(O,r),sticky:te}},[O,r,te]),Ae=c.useMemo(function(){return $e($e({},oe),ae)},[oe,ae]),et=c.useMemo(function(){return{scrollTo:N,scrollToBottom:V,scrollToEnd:He,scrollToStart:Be,scrollToTop:D}},[N,V,He,Be,D]);return c.useEffect(function(){if(b){var e=function(){z.current=b.scrollHeight};return b.addEventListener("focus",e,{capture:!0,passive:!0}),function(){return b.removeEventListener("focus",e)}}},[b]),s(function(){var e;return[m(e=["%cRender%c: Render"]).call(e,l(n("cyan",""))),{animateTo:O,animating:O!==null,sticky:te,target:b}]}),S.createElement(ct.Provider,{value:Je},S.createElement(st.Provider,{value:et},S.createElement(it.Provider,{value:Ae},S.createElement(ut.Provider,{value:oe},S.createElement(ft.Provider,{value:ae},h,b&&S.createElement(dt,{debounce:p,name:"scroll",onEvent:Ge,target:b}),b&&O!==null&&S.createElement(vt,{name:"scrollTop",onEnd:re,target:b,value:O}))))))};ue.defaultProps={checkInterval:100,children:void 0,debounce:17,debug:void 0,initialScrollBehavior:"smooth",mode:void 0,nonce:void 0,scroller:_t};ue.propTypes={checkInterval:f.number,children:f.any,debounce:f.number,debug:f.bool,initialScrollBehavior:f.oneOf(["auto","smooth"]),mode:f.oneOf(["bottom","top"]),nonce:f.string,scroller:f.func};var Rt={position:"relative"},fe=function(t){var v=t.children,h=t.className,p=t.followButtonClassName,g=t.scrollViewClassName,E=Tt()(Rt);return S.createElement("div",{className:Ct(E,(h||"")+"")},S.createElement(wt,{className:(g||"")+""},v),S.createElement(Et,{className:(p||"")+""}))};fe.defaultProps={children:void 0,className:void 0,followButtonClassName:void 0,scrollViewClassName:void 0};fe.propTypes={children:f.any,className:f.string,followButtonClassName:f.string,scrollViewClassName:f.string};var Ke=function(t){var v=t.checkInterval,h=t.children,p=t.className,g=t.debounce,E=t.debug,r=t.followButtonClassName,_=t.initialScrollBehavior,M=t.mode,s=t.nonce,L=t.scroller,W=t.scrollViewClassName;return S.createElement(ue,{checkInterval:v,debounce:g,debug:E,initialScrollBehavior:_,mode:M,nonce:s,scroller:L},S.createElement(fe,{className:p,followButtonClassName:r,scrollViewClassName:W},h))};Ke.defaultProps={checkInterval:void 0,children:void 0,className:void 0,debounce:void 0,debug:void 0,followButtonClassName:void 0,initialScrollBehavior:"smooth",mode:void 0,nonce:void 0,scroller:void 0,scrollViewClassName:void 0};Ke.propTypes={checkInterval:f.number,children:f.any,className:f.string,debounce:f.number,debug:f.bool,followButtonClassName:f.string,initialScrollBehavior:f.oneOf(["auto","smooth"]),mode:f.oneOf(["bottom","top"]),nonce:f.string,scroller:f.func,scrollViewClassName:f.string};yt();export{Ke as B};
//# sourceMappingURL=fd14dsdxvqy4coi5.js.map