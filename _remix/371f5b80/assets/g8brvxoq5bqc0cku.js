import{aX as te,aY as Y,aZ as Q,a_ as he,a$ as ie,b0 as ce,b1 as be,b2 as y,b3 as xe,b4 as we,b5 as Be,b6 as Ce,b7 as Fe,b8 as me,b9 as Te,ba as Me,bb as Z,bc as V,bd as ee,be as ke,bf as Oe,bg as Re,bh as _e,bi as ae,bj as Pe,bk as le,bl as ue,bm as $e,bn as Se,bo as ye,bp as De,bq as Ne,br as Ae,bs as Le,bt as X,bu as N,bv as He,bw as Ge,bx as Ke,by as Ue,bz as Xe,bA as U,bB as Ee,bC as Ze,bD as A,bE as se}from"./fhv3hyfwgezymfbi.js";import{r as o,a2 as P}from"./ib63zzsfkf72wln1.js";import{M as Je,y as We,x as je,R as qe,b as Qe}from"./mf1bkj87fupn68va.js";var Ve=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ve||{}),Ye=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(Ye||{});let ze={0:e=>({...e,popoverState:Z(e.popoverState,{0:1,1:0}),__demoMode:!1}),1(e){return e.popoverState===1?e:{...e,popoverState:1,__demoMode:!1}},2(e,l){return e.button===l.button?e:{...e,button:l.button}},3(e,l){return e.buttonId===l.buttonId?e:{...e,buttonId:l.buttonId}},4(e,l){return e.panel===l.panel?e:{...e,panel:l.panel}},5(e,l){return e.panelId===l.panelId?e:{...e,panelId:l.panelId}}},pe=o.createContext(null);pe.displayName="PopoverContext";function ne(e){let l=o.useContext(pe);if(l===null){let v=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(v,ne),v}return l}let oe=o.createContext(null);oe.displayName="PopoverAPIContext";function de(e){let l=o.useContext(oe);if(l===null){let v=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(v,de),v}return l}let fe=o.createContext(null);fe.displayName="PopoverGroupContext";function ge(){return o.useContext(fe)}let re=o.createContext(null);re.displayName="PopoverPanelContext";function et(){return o.useContext(re)}function tt(e,l){return Z(l.type,ze,e,l)}let nt="div";function ot(e,l){var v;let{__demoMode:x=!1,...$}=e,g=o.useRef(null),w=Q(l,he(u=>{g.current=u})),a=o.useRef([]),m=o.useReducer(tt,{__demoMode:x,popoverState:x?0:1,buttons:a,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:o.createRef(),afterPanelSentinel:o.createRef(),afterButtonSentinel:o.createRef()}),[{popoverState:I,button:t,buttonId:S,panel:b,panelId:E,beforePanelSentinel:i,afterPanelSentinel:d,afterButtonSentinel:s},f]=m,h=ie((v=g.current)!=null?v:t),M=o.useMemo(()=>{if(!t||!b)return!1;for(let C of document.querySelectorAll("body > *"))if(Number(C?.contains(t))^Number(C?.contains(b)))return!0;let u=ce(),n=u.indexOf(t),r=(n+u.length-1)%u.length,p=(n+1)%u.length,c=u[r],T=u[p];return!b.contains(c)&&!b.contains(T)},[t,b]),J=be(S),k=be(E),W=o.useMemo(()=>({buttonId:J,panelId:k,close:()=>f({type:1})}),[J,k,f]),O=ge(),B=O?.registerPopover,j=y(()=>{var u;return(u=O?.isFocusWithinPopoverGroup())!=null?u:h?.activeElement&&(t?.contains(h.activeElement)||b?.contains(h.activeElement))});o.useEffect(()=>B?.(W),[B,W]);let[L,F]=xe(),H=we(t),R=Be({mainTreeNode:H,portals:L,defaultContainers:[t,b]});Ce(h?.defaultView,"focus",u=>{var n,r,p,c,T,C;u.target!==window&&u.target instanceof HTMLElement&&I===0&&(j()||t&&b&&(R.contains(u.target)||(r=(n=i.current)==null?void 0:n.contains)!=null&&r.call(n,u.target)||(c=(p=d.current)==null?void 0:p.contains)!=null&&c.call(p,u.target)||(C=(T=s.current)==null?void 0:T.contains)!=null&&C.call(T,u.target)||f({type:1})))},!0),Fe(I===0,R.resolveContainers,(u,n)=>{f({type:1}),Ue(n,Xe.Loose)||(u.preventDefault(),t?.focus())});let _=y(u=>{f({type:1});let n=u?u instanceof HTMLElement?u:"current"in u&&u.current instanceof HTMLElement?u.current:t:t;n?.focus()}),q=o.useMemo(()=>({close:_,isPortalled:M}),[_,M]),z=o.useMemo(()=>({open:I===0,close:_}),[I,_]),G={ref:w};return P.createElement(me,{node:H},P.createElement(Je,null,P.createElement(re.Provider,{value:null},P.createElement(pe.Provider,{value:m},P.createElement(oe.Provider,{value:q},P.createElement(Te,{value:_},P.createElement(Me,{value:Z(I,{0:V.Open,1:V.Closed})},P.createElement(F,null,ee({ourProps:G,theirProps:$,slot:z,defaultTag:nt,name:"Popover"})))))))))}let rt="button";function at(e,l){let v=o.useId(),{id:x=`headlessui-popover-button-${v}`,disabled:$=!1,autoFocus:g=!1,...w}=e,[a,m]=ne("Popover.Button"),{isPortalled:I}=de("Popover.Button"),t=o.useRef(null),S=`headlessui-focus-sentinel-${o.useId()}`,b=ge(),E=b?.closeOthers,i=et()!==null;o.useEffect(()=>{if(!i)return m({type:3,buttonId:x}),()=>{m({type:3,buttonId:null})}},[i,x,m]);let[d]=o.useState(()=>Symbol()),s=Q(t,l,We(),y(n=>{if(!i){if(n)a.buttons.current.push(d);else{let r=a.buttons.current.indexOf(d);r!==-1&&a.buttons.current.splice(r,1)}a.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),n&&m({type:2,button:n})}})),f=Q(t,l),h=ie(t),M=y(n=>{var r,p,c;if(i){if(a.popoverState===1)return;switch(n.key){case U.Space:case U.Enter:n.preventDefault(),(p=(r=n.target).click)==null||p.call(r),m({type:1}),(c=a.button)==null||c.focus();break}}else switch(n.key){case U.Space:case U.Enter:n.preventDefault(),n.stopPropagation(),a.popoverState===1&&E?.(a.buttonId),m({type:0});break;case U.Escape:if(a.popoverState!==0)return E?.(a.buttonId);if(!t.current||h!=null&&h.activeElement&&!t.current.contains(h.activeElement))return;n.preventDefault(),n.stopPropagation(),m({type:1});break}}),J=y(n=>{i||n.key===U.Space&&n.preventDefault()}),k=y(n=>{var r,p;Ee(n.currentTarget)||$||(i?(m({type:1}),(r=a.button)==null||r.focus()):(n.preventDefault(),n.stopPropagation(),a.popoverState===1&&E?.(a.buttonId),m({type:0}),(p=a.button)==null||p.focus()))}),W=y(n=>{n.preventDefault(),n.stopPropagation()}),{isFocusVisible:O,focusProps:B}=ke({autoFocus:g}),{isHovered:j,hoverProps:L}=Oe({isDisabled:$}),{pressed:F,pressProps:H}=Re({disabled:$}),R=a.popoverState===0,_=o.useMemo(()=>({open:R,active:F||R,disabled:$,hover:j,focus:O,autofocus:g}),[R,j,O,F,$,g]),q=_e(e,a.button),z=i?ae({ref:f,type:q,onKeyDown:M,onClick:k,disabled:$||void 0,autoFocus:g},B,L,H):ae({ref:s,id:a.buttonId,type:q,"aria-expanded":a.popoverState===0,"aria-controls":a.panel?a.panelId:void 0,disabled:$||void 0,autoFocus:g,onKeyDown:M,onKeyUp:J,onClick:k,onMouseDown:W},B,L,H),G=Pe(),u=y(()=>{let n=a.panel;if(!n)return;function r(){Z(G.current,{[A.Forwards]:()=>X(n,N.First),[A.Backwards]:()=>X(n,N.Last)})===se.Error&&X(ce().filter(p=>p.dataset.headlessuiFocusGuard!=="true"),Z(G.current,{[A.Forwards]:N.Next,[A.Backwards]:N.Previous}),{relativeTo:a.button})}r()});return P.createElement(P.Fragment,null,ee({ourProps:z,theirProps:w,slot:_,defaultTag:rt,name:"Popover.Button"}),R&&!i&&I&&P.createElement(le,{id:S,ref:a.afterButtonSentinel,features:ue.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:u}))}let lt="div",ut=te.RenderStrategy|te.Static;function Ie(e,l){let v=o.useId(),{id:x=`headlessui-popover-backdrop-${v}`,transition:$=!1,...g}=e,[{popoverState:w},a]=ne("Popover.Backdrop"),[m,I]=o.useState(null),t=Q(l,I),S=$e(),[b,E]=Se($,m,S!==null?(S&V.Open)===V.Open:w===0),i=y(f=>{if(Ee(f.currentTarget))return f.preventDefault();a({type:1})}),d=o.useMemo(()=>({open:w===0}),[w]),s={ref:t,id:x,"aria-hidden":!0,onClick:i,...ye(E)};return ee({ourProps:s,theirProps:g,slot:d,defaultTag:lt,features:ut,visible:b,name:"Popover.Backdrop"})}let st="div",it=te.RenderStrategy|te.Static;function ct(e,l){let v=o.useId(),{id:x=`headlessui-popover-panel-${v}`,focus:$=!1,anchor:g,portal:w=!1,modal:a=!1,transition:m=!1,...I}=e,[t,S]=ne("Popover.Panel"),{close:b,isPortalled:E}=de("Popover.Panel"),i=`headlessui-focus-sentinel-before-${v}`,d=`headlessui-focus-sentinel-after-${v}`,s=o.useRef(null),f=je(g),[h,M]=qe(f),J=Qe();f&&(w=!0);let[k,W]=o.useState(null),O=Q(s,l,f?h:null,y(r=>S({type:4,panel:r})),W),B=ie(s),j=De();Ne(()=>(S({type:5,panelId:x}),()=>{S({type:5,panelId:null})}),[x,S]);let L=$e(),[F,H]=Se(m,k,L!==null?(L&V.Open)===V.Open:t.popoverState===0);Ae(F,t.button,()=>{S({type:1})});let R=t.__demoMode?!1:a&&F;Le(R,B);let _=y(r=>{var p;switch(r.key){case U.Escape:if(t.popoverState!==0||!s.current||B!=null&&B.activeElement&&!s.current.contains(B.activeElement))return;r.preventDefault(),r.stopPropagation(),S({type:1}),(p=t.button)==null||p.focus();break}});o.useEffect(()=>{var r;e.static||t.popoverState===1&&((r=e.unmount)==null||r)&&S({type:4,panel:null})},[t.popoverState,e.unmount,e.static,S]),o.useEffect(()=>{if(t.__demoMode||!$||t.popoverState!==0||!s.current)return;let r=B?.activeElement;s.current.contains(r)||X(s.current,N.First)},[t.__demoMode,$,s.current,t.popoverState]);let q=o.useMemo(()=>({open:t.popoverState===0,close:b}),[t.popoverState,b]),z=ae(f?J():{},{ref:O,id:x,onKeyDown:_,onBlur:$&&t.popoverState===0?r=>{var p,c,T,C,K;let D=r.relatedTarget;D&&s.current&&((p=s.current)!=null&&p.contains(D)||(S({type:1}),((T=(c=t.beforePanelSentinel.current)==null?void 0:c.contains)!=null&&T.call(c,D)||(K=(C=t.afterPanelSentinel.current)==null?void 0:C.contains)!=null&&K.call(C,D))&&D.focus({preventScroll:!0})))}:void 0,tabIndex:-1,style:{...I.style,...M,"--button-width":He(t.button,!0).width},...ye(H)}),G=Pe(),u=y(()=>{let r=s.current;if(!r)return;function p(){Z(G.current,{[A.Forwards]:()=>{var c;X(r,N.First)===se.Error&&((c=t.afterPanelSentinel.current)==null||c.focus())},[A.Backwards]:()=>{var c;(c=t.button)==null||c.focus({preventScroll:!0})}})}p()}),n=y(()=>{let r=s.current;if(!r)return;function p(){Z(G.current,{[A.Forwards]:()=>{if(!t.button)return;let c=ce(),T=c.indexOf(t.button),C=c.slice(0,T+1),K=[...c.slice(T+1),...C];for(let D of K.slice())if(D.dataset.headlessuiFocusGuard==="true"||k!=null&&k.contains(D)){let ve=K.indexOf(D);ve!==-1&&K.splice(ve,1)}X(K,N.First,{sorted:!1})},[A.Backwards]:()=>{var c;X(r,N.Previous)===se.Error&&((c=t.button)==null||c.focus())}})}p()});return P.createElement(Ge,null,P.createElement(re.Provider,{value:x},P.createElement(oe.Provider,{value:{close:b,isPortalled:E}},P.createElement(Ke,{enabled:w?e.static||F:!1},F&&E&&P.createElement(le,{id:i,ref:t.beforePanelSentinel,features:ue.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:u}),ee({mergeRefs:j,ourProps:z,theirProps:I,slot:q,defaultTag:st,features:it,visible:F,name:"Popover.Panel"}),F&&E&&P.createElement(le,{id:d,ref:t.afterPanelSentinel,features:ue.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:n})))))}let pt="div";function dt(e,l){let v=o.useRef(null),x=Q(v,l),[$,g]=o.useState([]),w=y(i=>{g(d=>{let s=d.indexOf(i);if(s!==-1){let f=d.slice();return f.splice(s,1),f}return d})}),a=y(i=>(g(d=>[...d,i]),()=>w(i))),m=y(()=>{var i;let d=Ze(v);if(!d)return!1;let s=d.activeElement;return(i=v.current)!=null&&i.contains(s)?!0:$.some(f=>{var h,M;return((h=d.getElementById(f.buttonId.current))==null?void 0:h.contains(s))||((M=d.getElementById(f.panelId.current))==null?void 0:M.contains(s))})}),I=y(i=>{for(let d of $)d.buttonId.current!==i&&d.close()}),t=o.useMemo(()=>({registerPopover:a,unregisterPopover:w,isFocusWithinPopoverGroup:m,closeOthers:I}),[a,w,m,I]),S=o.useMemo(()=>({}),[]),b=e,E={ref:x};return P.createElement(me,null,P.createElement(fe.Provider,{value:t},ee({ourProps:E,theirProps:b,slot:S,defaultTag:pt,name:"Popover.Group"})))}let ft=Y(ot),vt=Y(at),bt=Y(Ie),mt=Y(Ie),Pt=Y(ct),$t=Y(dt),gt=Object.assign(ft,{Button:vt,Backdrop:mt,Overlay:bt,Panel:Pt,Group:$t});export{gt as a};
//# sourceMappingURL=g8brvxoq5bqc0cku.js.map