const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/eu2e194dcpsntkb4.js","assets/mvabgae368c8ppg9.js","assets/hrs6fo7evr0q6t9c.js","assets/root-erhliqbe.css"])))=>i.map(i=>d[i]);
import{X as D,a3 as n0,r as h,y as e,ah as o0,ai as r0,aj as l0,ak as d0,am as c0,O as C,al as m0,av as _,a6 as J,Z as x0,$ as g0,bc as u0,f2 as f0,M as h0,dV as p0,bw as k0,bA as y0,bx as R,a4 as b0,W as Q,S as O,b as $,P as B,a9 as I0}from"./mvabgae368c8ppg9.js";import{fI as w0,fJ as z,aD as v0,fK as j0,fC as M0,fL as C0,df as W,dg as S0,bT as T,bS as E0,w as _0,ay as N0,ch as V0,ax as A0,fM as D0,dj as F0,fN as L0,az as H,ci as $0,H as P0}from"./gne0fkkyhu79w0cj.js";import{S as T0,a as G0,D as R0,aE as O0,bq as B0,ac as Y,ad as e0,o as a0,Z as z0}from"./hrs6fo7evr0q6t9c.js";import{m as A}from"./odxqs5vnww3rcto3.js";import{g as V,d as W0}from"./i984y42mqndoktmp.js";import{d as H0,a as U0}from"./h8c08huq7kdim7pd.js";import{d as q0,c as K0,o as X0}from"./hrszfqnlwp1fnoth.js";import{a as N}from"./i0wzeah3lv8hvoq1.js";import"./bys7numkrxh763iw.js";import"./lzx8u2ugd2jcjw0l.js";import"./cgndeylrkni3styz.js";import"./fj28aivwf4skbrrx.js";import"./e4lojulx63yb1fnu.js";import"./f60kma9ld119vtbt.js";import"./cgk4v2mv167tmqt6.js";import"./eap3oc6wp9aeta5h.js";import"./im6spfpu2oz5vkzx.js";import"./ia6dvimohnab119m.js";import"./hj1jdsdid85oic0g.js";import"./lbjjhxggsgjm93zr.js";const Z0={enter:a=>({zIndex:0,x:a===-1?"10%":"-10%",opacity:0}),center:{zIndex:1,x:0,opacity:1},exit:a=>({zIndex:0,x:a===1?"10%":"-10%",opacity:0})},J0={enter:{opacity:0,y:"10%"},visible:{opacity:1,y:0},exit:{opacity:0,y:"10%"}},U=1e3,q=1e3,K=(a,s)=>Math.abs(a)*s;function Q0(a){const s=D(),n=n0(),r=w0(),g=[z.Small,z.Mobile].includes(r),[f,l]=h.useState({width:0,height:0}),[d,c]=h.useState(!1),[o,u]=h.useState(a.image),[I,w]=h.useState(!1),x=f.width>0&&f.height>0,p=h.useRef(null),[M,b]=h.useState(0);h.useEffect(()=>{if(!o.url)throw new Error("ExpandableImage requires a src");const t=new Image;t.onload=()=>{l({width:t.naturalWidth,height:t.naturalHeight})},t.onerror=()=>{},t.src=o.url},[o.url]),h.useEffect(()=>{const t=p.current;if(I)return t?.addEventListener("keydown",S),()=>{t?.removeEventListener("keydown",S)};u(a.image)},[I]);function k(){u(t=>{const m=(a.images.findIndex(y=>y.url===t.url)+1)%a.images.length;return a.images[m]}),b(-1)}function v(){u(t=>{const i=a.images.findIndex(y=>y.url===t.url),m=i>0?(i-1)%a.images.length:a.images.length-1;return a.images[m]}),b(1)}function F(t){w(t),t&&a.onOpen?.(o)}function S(t){t.key==="ArrowLeft"?v():t.key==="ArrowRight"&&k()}const L=a.images.findIndex(t=>t.url===o.url);return e.jsxs(o0,{onOpenChange:F,children:[e.jsx(r0,{disabled:!x,className:a.className,"aria-label":s.formatMessage(E.showImage),children:a.children}),e.jsx(l0,{container:n?.document.body,children:e.jsx(d0,{className:"fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-xl radix-state-open:animate-show",children:e.jsxs(c0,{className:C("relative flex h-[100dvh] w-screen justify-stretch divide-x divide-white/10 focus:outline-none radix-state-open:animate-contentShow"),ref:p,children:[e.jsx("div",{className:C("flex flex-1 transition-[flex-basis]",!d&&"md:basis-[75vw]"),children:e.jsxs("div",{className:"flex flex-1 flex-col md:p-6",children:[e.jsxs("div",{className:"flex justify-between px-6 py-2 pt-6 text-white sm:mb-4 md:mt-2 md:px-0 md:py-2",children:[e.jsx(m0,{asChild:!0,children:e.jsx("button",{"aria-label":s.formatMessage(E.closeModal),children:e.jsx(T0,{})})}),e.jsx("div",{children:!g&&e.jsxs(e.Fragment,{children:[a.getActions?.(o)?.map((t,i)=>e.jsx(_,{color:"ghost",size:"small",onClick:t.onClick,"aria-label":t.ariaLabel,disabled:t.disabled,icon:t.icon},i)),e.jsx(_,{color:"ghost",size:"small",onClick:()=>c(t=>!t),"aria-label":s.formatMessage(E.toggleSidebar),className:"md:inline-flex",icon:G0})]})})]}),e.jsx("div",{className:"relative flex flex-1 flex-col items-center justify-center overflow-hidden",children:e.jsx(v0,{initial:!1,custom:M,children:e.jsxs(A.div,{className:"absolute grid h-full w-full grid-rows-2",custom:M,variants:Z0,drag:"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:(t,{offset:i,velocity:m})=>{const y=K(i.x,m.x);y<-U?k():y>U&&v()},children:[e.jsx(A.img,{src:o.url,alt:o.alt,className:"row-span-4 mx-auto h-full object-scale-down",onPanEnd:(t,{offset:i,velocity:m})=>{const y=K(i.y,m.y);y<-q?c(!0):y>q&&c(!1)}},o.url),g&&d&&e.jsx(A.div,{className:"flex text-white",variants:J0,initial:"enter",animate:"visible",exit:"exit",transition:{y:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},children:a.metadataRenderer(o)})]},o.url)})}),a.images.length>1?e.jsxs("div",{className:"flex items-center justify-center gap-4 p-8 text-white",children:[e.jsx(_,{color:"ghost",size:"small",onClick:v,"aria-label":s.formatMessage(E.previousImage),icon:R0}),a.images.map((t,i)=>e.jsx("img",{src:t.url,alt:t.alt??"",className:C("h-12 w-12 cursor-pointer rounded object-cover transition duration-300 hover:opacity-100",t.url===o.url?"ring-2 ring-white ring-offset-4 ring-offset-black":"opacity-25"),onClick:()=>{u(t),b(i<L?1:-1)},"aria-label":s.formatMessage(E.showImage),role:"button"},t.url)),e.jsx(_,{color:"ghost",size:"small",onClick:k,"aria-label":s.formatMessage(E.nextImage),icon:O0})]}):null]})}),e.jsx("div",{className:C("hidden items-center justify-start overflow-hidden bg-gray-900 text-white transition-[flex-basis] duration-500 md:flex",d?"md:basis-[25vw]":"md:basis-0"),children:e.jsx("div",{className:"w-[25vw] min-w-[25vw]",children:a.metadataRenderer(o)})})]})})})]})}const E=J({showImage:{id:"imageViewer.showImage",defaultMessage:"Show Image"},closeModal:{id:"imageViewer.closeModal",defaultMessage:"Close Modal"},toggleSidebar:{id:"imageViewer.toggleSidebar",defaultMessage:"Toggle Sidebar"},nextImage:{id:"imageViewer.nextImage",defaultMessage:"Next Image"},previousImage:{id:"imageViewer.previousImage",defaultMessage:"Previous Image"}}),Y0=x0(()=>g0(()=>import("./eu2e194dcpsntkb4.js"),__vite__mapDeps([0,1,2,3])));function ee(a){const s=a.matchTextColor??!0,n=h.useRef(null),[r,g]=h.useState(null);h.useEffect(()=>{if(!n.current||!s)return;const l=()=>{n.current&&g(getComputedStyle(n.current).color)},d=new MutationObserver(()=>{l()});return d.observe(window.document.documentElement,{attributes:!0,attributeFilter:["class","style"]}),d.observe(n.current,{attributes:!0,attributeFilter:["class","style"]}),l(),()=>d.disconnect()},[s]);const f=h.useMemo(()=>{if(!s)return a.animationData;const l=r?.match(/\d+/g)?.map(Number).map(c=>c/255);if(!l)return null;l.push(1);const d=a.animationData;return"layers"in d&&Array.isArray(d.layers)&&d.layers.forEach(c=>{"ty"in c&&c.ty===4&&"shapes"in c&&Array.isArray(c.shapes)&&c.shapes.forEach(o=>{"it"in o&&Array.isArray(o.it)&&o.it.forEach(u=>{u.ty==="fl"&&(u.c.k=l)})})}),d},[a.animationData,r,s]);return e.jsx("div",{ref:n,className:a.className,children:e.jsx(Y0,{animationData:f,loop:!0,autoplay:!0},r)})}const ae="5.7.5",se=100,te=0,ie=400,ne=20,oe=20,re="Comp 1",le=0,de=[],ce=[{ddd:0,ind:1,ty:3,nm:"",sr:1,ks:{o:{a:0,k:100,ix:2},r:{a:1,k:[{t:50,s:[0],i:{x:[.2],y:[1]},o:{x:[.5],y:[-.5]}},{t:100,s:[90],i:{x:[.5],y:[1.5]},o:{x:[.8],y:[0]}},{t:150,s:[180],i:{x:[1],y:[1]},o:{x:[0],y:[0]}},{t:250,s:[180],i:{x:[.2],y:[1]},o:{x:[.5],y:[-.5]}},{t:300,s:[270],i:{x:[.5],y:[1.5]},o:{x:[.8],y:[0]}},{t:350,s:[360],i:{x:[1],y:[1]},o:{x:[0],y:[0]}}],ix:2},p:{a:0,k:[10,10],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2}},ao:0,ip:0,op:400,st:0,bm:0,hd:!1},{ddd:0,ind:2,ty:4,nm:"moon",sr:1,ks:{o:{a:0,k:100,ix:2},r:{a:0,k:0,ix:2},p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2}},ao:0,hd:!1,parent:1,shapes:[{ty:"gr",hd:!1,it:[{ty:"sh",hd:!1,d:1,ks:{a:0,k:{c:!1,v:[[2.66029,2.2502500000000003],[2.94257,2.2253300000000005],[3.16411,2.15946],[3.3642200000000004,2.1007100000000003],[3.4624800000000002,2.13988],[3.5,2.24491],[3.48749,2.3303700000000003],[3.45176,2.4336200000000003],[3.17483,2.87157],[2.79071,3.2080400000000004],[2.32261,3.42523],[1.8027100000000003,3.5],[1.08448,3.36648],[.5109700000000004,2.9926200000000005],[.13400000000000034,2.4229400000000005],[0,1.70727],[.13935999999999993,1.0129700000000001],[.5306300000000004,.4290440000000002],[1.1219999999999999,.03738600000000025],[1.2095500000000001,.00890100000000027],[1.2881600000000004,2220446049250313e-31],[1.4007100000000001,.042726000000000264],[1.4435900000000004,.14954200000000017],[1.4275099999999998,.23855500000000018],[1.3864200000000002,.33290900000000023],[1.3256800000000002,.49313300000000027],[1.2881600000000004,.6960800000000003],[1.2756499999999997,.9150600000000002],[1.3703399999999997,1.4722800000000003],[1.6472699999999998,1.8942000000000003],[2.0832100000000002,2.15946],[2.66029,2.2502500000000003],[2.66029,2.2502500000000003],[2.66029,2.2502500000000003]],i:[[0,0],[-.09170999999999996,.016619999999999635],[-.05597999999999992,.027300000000000324],[-.05837000000000003,0],[-.02382000000000062,-.02610999999999919],[0,-.04390999999999945],[.00833999999999957,-.03204999999999991],[.016680000000000028,-.03678999999999988],[.1131599999999997,-.13056],[.14412000000000003,-.09376000000000051],[.16795000000000027,-.04985000000000017],[.17985000000000007,0],[.21915999999999958,.08901000000000003],[.16317999999999966,.16141999999999967],[.08932999999999947,.2183799999999998],[0,.25873999999999997],[-.09290999999999983,.21957000000000004],[-.16794000000000064,.16853600000000002],[-.22510999999999992,.09138599999999997],[-.026209999999999845,.005934999999999913],[-.025020000000000486,0],[-.02739000000000047,-.028484000000000065],[0,-.04272599999999993],[.010720000000000063,-.030856999999999912],[.017869999999999386,-.03323100000000001],[.01666999999999952,-.06290200000000001],[.008329999999999949,-.07357999999999998],[0,-.07359000000000004],[-.06312999999999924,-.16497000000000006],[-.12029999999999941,-.11630999999999991],[-.17032999999999987,-.06170999999999971],[-.21321000000000012,0],[0,0],[0,0]],o:[[.09647000000000006,0],[.09172000000000047,-.016620000000000523],[.07504000000000044,-.03915999999999986],[.041679999999999495,0],[.025009999999999977,.026110000000000078],[0,.02493000000000034],[-.00714000000000059,.03204000000000029],[-.07146000000000008,.16141000000000005],[-.11195999999999984,.1305500000000004],[-.14412000000000003,.09493999999999936],[-.1667500000000004,.04985000000000017],[-.2596600000000002,0],[-.21916000000000047,-.0878300000000003],[-.16198000000000068,-.16141000000000005],[-.08933000000000035,-.21838000000000068],[0,-.24329999999999985],[.0929000000000002,-.22075],[.16913,-.16971899999999995],[.03216000000000019,-.013056000000000068],[.02738999999999958,-.005933999999999995],[.04763999999999946,0],[.02858999999999945,.028484999999999983],[0,.028484000000000065],[-.009520000000000195,.02967200000000003],[-.02382000000000062,.04391400000000001],[-.016680000000000028,.06171700000000002],[-.008340000000000458,.07240000000000002],[0,.20650999999999997],[.06432000000000038,.16496999999999984],[.1203000000000003,.11512999999999995],[.1715099999999996,.06052999999999997],[0,0],[0,0],[.09647000000000006,0]]}}},{ty:"fl",c:{a:0,k:[.6941176470588235,.3843137254901961,.9921568627450981],ix:2},o:{a:0,k:100,ix:2},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tm",s:{a:0,k:0,ix:2},e:{a:0,k:100,ix:2},o:{a:0,k:0,ix:2},m:1,hd:!1},{ty:"tr",hd:!1,p:{a:0,k:[3.75,5.5],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2},r:{a:0,k:-180,ix:2},o:{a:1,k:[{t:50,s:[0],i:{x:[.2],y:[1]},o:{x:[.5],y:[-.5]}},{t:100,s:[0],i:{x:[.5],y:[1.5]},o:{x:[.8],y:[0]}},{t:140,s:[100],i:{x:[1],y:[1]},o:{x:[0],y:[0]}},{t:250,s:[100],i:{x:[.2],y:[1]},o:{x:[.5],y:[-.5]}},{t:280,s:[0],i:{x:[.5],y:[1.5]},o:{x:[.8],y:[0]}},{t:350,s:[0],i:{x:[1],y:[1]},o:{x:[0],y:[0]}}],ix:2},sk:{a:0,k:0,ix:2},sa:{a:0,k:0,ix:2}}]}],ip:0,op:400,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:"sun",sr:1,ks:{o:{a:0,k:100,ix:2},r:{a:0,k:0,ix:2},p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2}},ao:0,hd:!1,parent:1,shapes:[{ty:"gr",hd:!1,it:[{ty:"el",hd:!1,d:1,s:{a:0,k:[3.00708,3.00704],ix:2},p:{a:0,k:[0,0],ix:2}},{ty:"fl",c:{a:0,k:[.6941176470588235,.3843137254901961,.9921568627450981],ix:2},o:{a:0,k:100,ix:2},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tm",s:{a:0,k:0,ix:2},e:{a:0,k:100,ix:2},o:{a:0,k:0,ix:2},m:1,hd:!1},{ty:"tr",hd:!1,p:{a:0,k:[-2.1999998092651376,-3.507655143737793],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2},r:{a:0,k:0,ix:2},o:{a:1,k:[{t:50,s:[100],i:{x:[.2],y:[1]},o:{x:[.5],y:[-.5]}},{t:80,s:[0],i:{x:[.5],y:[1.5]},o:{x:[.8],y:[0]}},{t:150,s:[0],i:{x:[1],y:[1]},o:{x:[0],y:[0]}},{t:250,s:[0],i:{x:[.2],y:[1]},o:{x:[.5],y:[-.5]}},{t:300,s:[0],i:{x:[.5],y:[1.5]},o:{x:[.8],y:[0]}},{t:340,s:[100],i:{x:[1],y:[1]},o:{x:[0],y:[0]}}],ix:2},sk:{a:0,k:0,ix:2},sa:{a:0,k:0,ix:2}}]}],ip:0,op:400,st:0,bm:0},{ddd:0,ind:4,ty:4,nm:"Shape Layer 1",sr:1,ks:{o:{a:0,k:100,ix:2},r:{a:0,k:0,ix:2},p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2}},ao:0,hd:!1,parent:1,shapes:[{ty:"gr",hd:!1,it:[{ty:"rc",hd:!1,d:1,s:{a:0,k:[18,18],ix:2},p:{a:0,k:[0,0],ix:2},r:{a:0,k:0,ix:2}},{ty:"fl",c:{a:0,k:[1,.8392156862745098,.25098039215686274],ix:2},o:{a:0,k:0,ix:2},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tm",s:{a:0,k:0,ix:2},e:{a:0,k:100,ix:2},o:{a:0,k:0,ix:2},m:1,hd:!1},{ty:"tr",hd:!1,p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2},r:{a:0,k:0,ix:2},o:{a:0,k:100,ix:2},sk:{a:0,k:0,ix:2},sa:{a:0,k:0,ix:2}}]}],ip:0,op:400,st:0,bm:0},{ddd:0,ind:5,ty:3,nm:"",sr:1,ks:{o:{a:0,k:100,ix:2},r:{a:0,k:0,ix:2},p:{a:1,k:[{t:50,s:[9.999999284744263,10.17067003250122],i:{x:[.2],y:[1]},o:{x:[.5],y:[-.5]}},{t:100,s:[9.999999284744263,11.17067003250122],i:{x:[.5],y:[1.5]},o:{x:[.8],y:[0]}},{t:150,s:[9.999999284744263,10.17067003250122],i:{x:[1],y:[1]},o:{x:[0],y:[0]}},{t:250,s:[9.999999284744263,10.17067003250122],i:{x:[.2],y:[1]},o:{x:[.5],y:[-.5]}},{t:300,s:[9.999999284744263,11.17067003250122],i:{x:[.5],y:[1.5]},o:{x:[.8],y:[0]}},{t:350,s:[9.999999284744263,10.17067003250122],i:{x:[1],y:[1]},o:{x:[0],y:[0]}}],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2}},ao:0,ip:0,op:400,st:0,bm:0,hd:!1},{ddd:0,ind:6,ty:4,nm:"line",sr:1,ks:{o:{a:0,k:100,ix:2},r:{a:0,k:0,ix:2},p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2}},ao:0,hd:!1,parent:5,shapes:[{ty:"gr",hd:!1,it:[{ty:"sh",hd:!1,d:1,ks:{a:0,k:{c:!1,v:[[0,0],[4.18847,0],[4.18847,.3221899999999991],[0,.3221899999999991],[0,0],[0,0],[0,0]],i:[[0,0],[-1.396156666666667,0],[0,-.1073966666666664],[1.396156666666666,0],[0,.1073966666666664],[0,0],[0,0]],o:[[1.396156666666666,0],[0,.1073966666666664],[-1.396156666666666,0],[0,-.1073966666666664],[0,0],[0,0],[1.396156666666666,0]]}}},{ty:"fl",c:{a:0,k:[.6941176470588235,.3843137254901961,.9921568627450981],ix:2},o:{a:0,k:100,ix:2},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tm",s:{a:0,k:0,ix:2},e:{a:0,k:100,ix:2},o:{a:0,k:0,ix:2},m:1,hd:!1},{ty:"tr",hd:!1,p:{a:0,k:[-2.900433540344238,3.517374992370605],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2},r:{a:0,k:0,ix:2},o:{a:0,k:100,ix:2},sk:{a:0,k:0,ix:2},sa:{a:0,k:0,ix:2}}]}],ip:0,op:400,st:0,bm:0},{ddd:0,ind:7,ty:4,nm:"small",sr:1,ks:{o:{a:0,k:100,ix:2},r:{a:0,k:0,ix:2},p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2}},ao:0,hd:!1,parent:5,shapes:[{ty:"gr",hd:!1,it:[{ty:"sh",hd:!1,d:1,ks:{a:0,k:{c:!1,v:[[3.215839629698487,.4155599999999988],[1.871029629698487,.4155599999999988],[.08033652969848645,3.996899999999999],[.7527406296984864,5.084849999999998],[4.334119629698487,5.084849999999998],[5.006529629698486,3.996899999999999],[3.215839629698487,.4155599999999988],[3.215839629698487,.4155599999999988],[3.215839629698487,.4155599999999988]],i:[[0,0],[.2770400000000002,-.5540800000000004],[.5968977000000001,-1.19378],[-.5588519999999999,0],[-1.193793,0],[.2499200000000004,.4998400000000003],[.5968966666666669,1.19378],[0,0],[0,0]],o:[[-.27705,-.5540800000000004],[-.5968977,1.1937799999999994],[-.2499269,.4998400000000003],[1.193793,0],[.5588600000000001,0],[-.5968966666666669,-1.19378],[0,0],[0,0],[-.27705,-.5540800000000004]]}}},{ty:"fl",c:{a:0,k:[.6941176470588235,.3843137254901961,.9921568627450981],ix:2},o:{a:0,k:100,ix:2},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tm",s:{a:0,k:0,ix:2},e:{a:0,k:100,ix:2},o:{a:0,k:0,ix:2},m:1,hd:!1},{ty:"tr",hd:!1,p:{a:0,k:[-6.000233173370361,-1.244344711303711],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2},r:{a:0,k:0,ix:2},o:{a:0,k:100,ix:2},sk:{a:0,k:0,ix:2},sa:{a:0,k:0,ix:2}}]}],ip:0,op:400,st:0,bm:0},{ddd:0,ind:8,ty:4,nm:"big",sr:1,ks:{o:{a:0,k:100,ix:2},r:{a:0,k:0,ix:2},p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2}},ao:0,hd:!1,parent:5,shapes:[{ty:"gr",hd:!1,it:[{ty:"sh",hd:!1,d:1,ks:{a:0,k:{c:!1,v:[[4.719378057214302,.41556],[3.374568057214302,.41556],[.08033805721430198,7.00394],[.7527380572143016,8.0919],[7.341158057214302,8.0919],[8.0136580572143,7.00394],[4.719378057214302,.41556],[4.719378057214302,.41556],[4.719378057214302,.41556]],i:[[0,0],[.27705,-.55408],[1.098076666666667,-2.196126666666667],[-.5588499999999996,0],[-2.196140000000002,0],[.2499000000000002,.4998400000000007],[1.098093333333333,2.196126666666667],[0,0],[0,0]],o:[[-.2770500000000009,-.55408],[-1.098076666666667,2.196126666666666],[-.24993,.4998400000000007],[2.19614,0],[.5588999999999995,0],[-1.098093333333332,-2.196126666666666],[0,0],[0,0],[-.2770500000000009,-.55408]]}}},{ty:"fl",c:{a:0,k:[.6941176470588235,.3843137254901961,.9921568627450981],ix:2},o:{a:0,k:100,ix:2},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tm",s:{a:0,k:0,ix:2},e:{a:0,k:100,ix:2},o:{a:0,k:0,ix:2},m:1,hd:!1},{ty:"tr",hd:!1,p:{a:0,k:[-2.093742370605469,-4.256064891815186],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2},r:{a:0,k:0,ix:2},o:{a:0,k:100,ix:2},sk:{a:0,k:0,ix:2},sa:{a:0,k:0,ix:2}}]}],ip:0,op:400,st:0,bm:0}],me=[],xe={v:ae,fr:se,ip:te,op:ie,w:ne,h:oe,nm:re,ddd:le,assets:de,layers:ce,markers:me};function ge({id:a,withLottie:s}){return e.jsxs("div",{className:"absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full",children:[s?e.jsx(ee,{className:"h-6 w-6",animationData:xe}):e.jsx(B0,{className:"h-6 w-6"}),e.jsx(ue,{id:a})]})}function ue({id:a}){const s=j0(a);return e.jsx(M0,{percentage:s,thickness:1.25/23,className:"absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2",backgroundStrokeClassName:"stroke-token-main-surface-tertiary",transitionDuration:`${(100-s)/100*.2}s`,transitionTimingFunction:"cubic-bezier(0.55, 0, 1, 1)"})}function Re({messages:a,clientThreadId:s}){const[n,r]=a,g=H0(n.message),f=C0(),l=a.some(o=>f.has(o.message.id));let d=null;r!=null&&W.isMultimodalTextMessage(r.message)&&(d=W.getImageAssetPointers(r.message));let c=N.Running;return d!=null?c=N.Finished:r!=null?c=N.Error:g&&(c=N.Stopped),e.jsx(e.Fragment,{children:!l&&e.jsx(fe,{imageAssets:d??[],clientThreadId:s,toolStatus:c,toolMessage:r?.message,messageId:n.message.id})})}const fe=({imageAssets:a,clientThreadId:s,toolMessage:n,toolStatus:r,messageId:g})=>{const f=D(),l=S0(a),d=u0(),c=f0();if(n?.content.content_type===h0.SystemError)return null;const o=s0(a[0]),u=l.map(x=>x.data).filter(x=>x!=null),I=u.map(x=>({...x,alt:V(x)})),w=(x=0)=>`${g}-image-${x}`;return e.jsx(e.Fragment,{children:e.jsxs(ye,{$numItems:l.length,className:"my-1 transition-opacity duration-300",children:[l.length===0&&r===N.Running&&e.jsx(X,{layoutId:"loading:placeholder",shape:o,isToolRunning:!0},"loading"),l.map((x,p)=>{const{isLoading:M,data:b,error:k}=x;if(M)return e.jsx(X,{shape:o,layoutId:w(p)},p);if(k!=null||b?.url==null)return e.jsx(G,{layoutId:w(p),className:"text-sm text-token-text-tertiary",shape:o,children:e.jsx("div",{className:"flex min-h-full flex-col items-center justify-center gap-3 px-4 pb-5",children:f.formatMessage(j.imageLoadError)})},p);if(n&&b){const v={...b,alt:V(b)};return e.jsx(he,{image:v,allImages:I,clientThreadId:s,toolMessage:n,index:p,onOpenImageEditor:()=>{c?(d(`/c/${s}`,{state:{focusObject:{type:T.Image,image:v,allImages:u,messageId:n.id}}}),p0.focusMainWindow()):E0.setFocusedObject({type:T.Image,image:v,allImages:u,messageId:n.id})}},p)}})]})})};function he({toolMessage:a,clientThreadId:s,allImages:n,image:r,index:g,onOpenImageEditor:f}){const l=D(),d=q0(s),c=k0(),{value:o}=y0("2189772492"),u=_0(),I=U0(s),w=s0(r),[x,p]=h.useState({}),M=I&&"gizmo"in I?I.gizmo:void 0,b=M?.gizmo.id===N0,k=u&&o&&!!c?.includes(R.D3Editor)&&(M==null||b||!!c?.includes(R.D3EditorAllGpts));async function v(i){W0(i,d,a.id)}function F(i){O.logEvent("chatgpt_dalle_image_view_full",null,{sourceOperation:i.metadata?.dalle?.edit_op??"none",hasParent:i.metadata?.dalle?.parent_gen_id?"true":"false"}),B.logEvent($.dalleImageViewFull,{conversationId:d,messageId:a.id,generationId:i.metadata?.dalle?.gen_id,parentGenerationId:i.metadata?.dalle?.parent_gen_id,fileId:H(i.asset_pointer),sourceOperation:i.metadata?.dalle?.edit_op})}function S(i,m){p(y=>({...y,[i.asset_pointer]:m})),O.logEvent($.dalleImageRating,m?"like":"dislike",{liked:m?"true":"false",sourceOperation:i.metadata?.dalle?.edit_op??"none",hasParent:i.metadata?.dalle?.parent_gen_id?"true":"false"}),B.logEvent($.dalleImageRating,{liked:m,conversationId:d,messageId:a.id,generationId:i.metadata?.dalle?.gen_id,parentGenerationId:i.metadata?.dalle?.parent_gen_id,fileId:H(i.asset_pointer),sourceOperation:i.metadata?.dalle?.edit_op})}function L(i){const m=x[i.asset_pointer],y={label:l.formatMessage(j.likeImage),onClick:()=>S(i,!0),disabled:m===!0,ariaLabel:l.formatMessage(j.likeImage),icon:Y},t0={label:l.formatMessage(j.dislikeImage),onClick:()=>S(i,!1),disabled:m===!1,ariaLabel:l.formatMessage(j.dislikeImage),icon:e0},i0={label:l.formatMessage(j.downloadImage),onClick:()=>v(i),ariaLabel:l.formatMessage(j.downloadImage),icon:a0};return[m!==!1&&y,m!==!0&&t0,i0].filter(Boolean)}let t=e.jsx(ke,{image:r,shape:w,rating:x[r.asset_pointer],onDownload:()=>v(r),onRate:(i,m)=>S(i,m),clientThreadId:s,layoutId:void 0});return k?t=e.jsx("div",{role:"button",onClick:f,children:t}):t=e.jsx(Q0,{image:r,images:n,metadataRenderer:i=>e.jsx(pe,{image:i}),onOpen:F,getActions:L,children:t}),e.jsx("div",{className:"flex",children:t},g)}function X({shape:a,layoutId:s,isToolRunning:n=!1}){return e.jsx(G,{shape:a,layoutId:s,children:e.jsx("div",{className:"flex min-h-full items-center justify-center",children:e.jsx(ge,{id:s,withLottie:n})})},"loading")}function pe({image:a}){const s=D(),[n,r]=h.useState(!1),g=I0();function f(l){const d=V(a);r(!0),P0(d,g,l),setTimeout(()=>{r(!1)},2e3)}return e.jsxs("div",{className:"flex flex-col items-start gap-3 p-6",children:[e.jsx("div",{className:"text-sm text-gray-300 sm:text-base",children:s.formatMessage(j.imageViewerMetadataTitle)}),e.jsx("div",{className:"max-h-32 overflow-y-auto text-sm md:max-h-[80vh] md:text-lg",children:V(a)}),e.jsx(_,{color:"primary",onClick:f,disabled:n,className:"hidden sm:block",icon:z0,children:n?s.formatMessage(j.imageViewerMetadataCopyButtonCopied):s.formatMessage(j.imageViewerMetadataCopyButton)})]})}function G({children:a,shape:s,className:n,layoutId:r}){return e.jsxs(A.div,{layoutId:r,className:C("relative",n,s==="1792x1024"&&"aspect-[7/4]",s==="1024x1024"&&"aspect-square max-w-[400px]",s==="1024x1792"&&"aspect-[4/7] max-w-xs","overflow-hidden rounded-2xl"),children:[e.jsx("div",{className:"pointer-events-none absolute inset-0 bg-token-main-surface-secondary"}),e.jsx("div",{className:"relative h-full",children:a})]})}function ke({image:a,shape:s,rating:n,onDownload:r,onRate:g,clientThreadId:f,layoutId:l}){const d=K0(),c=V0($0.isBusinessWorkspace),o=X0(f),u=A0(),I=D0(),w=I?.type===T.Image&&I.image.asset_pointer===a.asset_pointer,{url:x,width:p,height:M}=a,b=!d&&!c&&o?.kind!==b0.GizmoMagicCreate;return e.jsxs(G,{shape:s,className:"group/dalle-image",layoutId:w?void 0:l,children:[e.jsx(F0,{alt:V(a),src:x,width:p,height:M}),e.jsx("div",{className:C("pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]",w?"bg-black/50 group-hover/dalle-image:bg-black/70":"group-hover/dalle-image:bg-transparent")}),u?!w&&e.jsx("div",{className:"pointer-events-none invisible absolute right-3 top-3 text-white group-hover/dalle-image:visible",children:e.jsx(L0,{})}):e.jsxs(e.Fragment,{children:[b&&e.jsxs(Z,{children:[n!==!1&&e.jsx(P,{icon:Y,selected:n===!0,onClick:k=>{k.stopPropagation(),g(a,!0)}}),n!==!0&&e.jsx(P,{icon:e0,selected:n===!1,onClick:k=>{k.stopPropagation(),g(a,!1)}})]}),e.jsx(Z,{$rightAlign:!0,children:e.jsx(P,{icon:a0,onClick:k=>{k.stopPropagation(),r()}})})]})]})}const Z=Q.div`invisible absolute top-3 flex gap-1 group-hover/dalle-image:visible
${({$rightAlign:a})=>a?"right-3":"left-3"}`;function P({icon:a,selected:s,onClick:n}){return e.jsx("button",{className:C("flex h-8 w-8 items-center justify-center rounded",s?"bg-gray-100":"bg-black/50 hover:opacity-70"),onClick:n,disabled:s,children:e.jsx(a,{className:C("icon-md",s?"text-gray-700":"text-white")})})}const ye=Q.div`grid gap-2
${({$numItems:a})=>a<=1?"grid-cols-1":"grid-cols-2"}`;function s0(a){if(!a)return"1024x1024";const{width:s,height:n}=a;return s>n?"1792x1024":s<n?"1024x1792":"1024x1024"}const j=J({creatingImages:{id:"dalleMessage.creatingImagesV2",defaultMessage:"Creating image"},stopped:{id:"dalleMessage.stoppedV3",defaultMessage:"Stopped creating image"},errorCreating:{id:"dalleMessage.errorCreatingV2",defaultMessage:"Error creating image"},imageLoadError:{id:"dalleMessage.imageLoadError",defaultMessage:"Error loading image"},imageViewerMetadataTitle:{id:"dalleMessage.imageViewerMetadataTitle",defaultMessage:"Prompt"},imageViewerMetadataCopyButton:{id:"dalleMessage.imageViewerMetadataCopyButton",defaultMessage:"Copy"},imageViewerMetadataCopyButtonCopied:{id:"dalleMessage.imageViewerMetadataCopyButtonCopied",defaultMessage:"Copied!"},imageEditButton:{id:"dalleMessage.imageEditButton",defaultMessage:"Edit"},downloadImage:{id:"imageViewer.downloadImage",defaultMessage:"Download Image"},likeImage:{id:"imageViewer.likeImage",defaultMessage:"Like Image"},dislikeImage:{id:"imageViewer.dislikeImage",defaultMessage:"Dislike Image"}});export{Re as default};
//# sourceMappingURL=ketek6t2nnfay7sv.js.map