const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mua0dqkouh9nx1rd.js","assets/n62zftee9av9wxib.js","assets/cwe5tk2381hhmaki.js","assets/root-jo8sfy59.css"])))=>i.map(i=>d[i]);
import{H as z,fk as fe,fl as X,r as x,j as t,be as xe,cb as he,bf as be,bg as Ie,bi as pe,c as S,bm as we,bs as F,N as re,co as ve,c5 as je,cO as Y,cY as ye,aJ as Me,aN as Ce,bu as Se,aK as J,bM as ke,O as oe,ak as Q,A as W,P as Z,b3 as Ee}from"./n62zftee9av9wxib.js";import{a as _e,b as Ne,x as Ae,b5 as Ve,bA as Te,aK as le,aL as de,R as ce,W as De}from"./cwe5tk2381hhmaki.js";import{A as Le,eW as Fe,e5 as Pe,eX as Re,cH as $e,bK as Oe,bL as me,bj as Ge,bw as Be,bi as ze,cM as We,cI as He,eY as Ue,bk as ee,b_ as Ke,o as qe}from"./o7uqz2086hs2sxty.js";import{m as B}from"./gqih2li7wtf179yn.js";import{g as R,d as Xe}from"./eb50jk58smie7mpn.js";import{G as Ye,j as P,z as Je}from"./f04hhhnhjubnztqe.js";import{c as Qe,k as Ze,q as et}from"./otwiqv3ij3chyjvy.js";import"./dsfulqwjgg8b3rbn.js";import"./ewowfsm6mt6yl8be.js";import"./oebntra7pkpxix2r.js";import"./cnce15y1yn81dr2v.js";import"./dq77x2igq9ozz8e3.js";import"./owp8xspxl98w3sw0.js";import"./bidqp08wrw63i1zx.js";import"./gtunh3bdue2ip708.js";import"./nm9i3dg6yq3exjkz.js";import"./hit74na76trjx6mi.js";const tt={enter:e=>({zIndex:0,x:e===-1?"10%":"-10%",opacity:0}),center:{zIndex:1,x:0,opacity:1},exit:e=>({zIndex:0,x:e===1?"10%":"-10%",opacity:0})},at={enter:{opacity:0,y:"10%"},visible:{opacity:1,y:0},exit:{opacity:0,y:"10%"}},te=1e3,ae=1e3,se=(e,s)=>Math.abs(e)*s;function st(e){var G,C;const s=z(),i=fe(),r=[X.Small,X.Mobile].includes(i),[g,b]=x.useState({width:0,height:0}),[o,l]=x.useState(!1),[n,m]=x.useState(e.image),[u,c]=x.useState(!1),I=g.width>0&&g.height>0,M=x.useRef(null),[p,w]=x.useState(0);x.useEffect(()=>{if(!n.url)throw new Error("ExpandableImage requires a src");const a=new Image;a.onload=()=>{b({width:a.naturalWidth,height:a.naturalHeight})},a.onerror=()=>{},a.src=n.url},[n.url]),x.useEffect(()=>{const a=M.current;if(u)return a==null||a.addEventListener("keydown",O),()=>{a==null||a.removeEventListener("keydown",O)};m(e.image)},[u]);function j(){m(a=>{const h=(e.images.findIndex(f=>f.url===a.url)+1)%e.images.length;return e.images[h]}),w(-1)}function v(){m(a=>{const d=e.images.findIndex(f=>f.url===a.url),h=d>0?(d-1)%e.images.length:e.images.length-1;return e.images[h]}),w(1)}function $(a){var d;c(a),a&&((d=e.onOpen)==null||d.call(e,n))}function O(a){a.key==="ArrowLeft"?v():a.key==="ArrowRight"&&j()}const _=e.images.findIndex(a=>a.url===n.url);return t.jsxs(xe,{onOpenChange:$,children:[t.jsx(he,{disabled:!I,className:e.className,"aria-label":s.formatMessage(E.showImage),children:e.children}),t.jsx(be,{children:t.jsx(Ie,{className:"fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-xl radix-state-open:animate-show",children:t.jsxs(pe,{className:S("relative flex h-[100dvh] w-screen justify-stretch divide-x divide-white/10 focus:outline-none radix-state-open:animate-contentShow"),ref:M,children:[t.jsx("div",{className:S("flex flex-1 transition-[flex-basis]",!o&&"md:basis-[75vw]"),children:t.jsxs("div",{className:"flex flex-1 flex-col md:p-6",children:[t.jsxs("div",{className:"flex justify-between px-6 py-2 pt-6 text-white sm:mb-4 md:mt-2 md:px-0 md:py-2",children:[t.jsx(we,{asChild:!0,children:t.jsx("button",{"aria-label":s.formatMessage(E.closeModal),children:t.jsx(_e,{})})}),t.jsx("div",{children:!r&&t.jsxs(t.Fragment,{children:[(C=(G=e.getActions)==null?void 0:G.call(e,n))==null?void 0:C.map((a,d)=>t.jsx(F,{color:"ghost",size:"small",onClick:a.onClick,"aria-label":a.ariaLabel,disabled:a.disabled,icon:a.icon},d)),t.jsx(F,{color:"ghost",size:"small",onClick:()=>l(a=>!a),"aria-label":s.formatMessage(E.toggleSidebar),className:"md:inline-flex",icon:Ne})]})})]}),t.jsx("div",{className:"relative flex flex-1 flex-col items-center justify-center overflow-hidden",children:t.jsx(Le,{initial:!1,custom:p,children:t.jsxs(B.div,{className:"absolute grid h-full w-full grid-rows-2",custom:p,variants:tt,drag:"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:(a,{offset:d,velocity:h})=>{const f=se(d.x,h.x);f<-te?j():f>te&&v()},children:[t.jsx(B.img,{src:n.url,alt:n.alt,className:"row-span-4 mx-auto h-full object-scale-down",onPanEnd:(a,{offset:d,velocity:h})=>{const f=se(d.y,h.y);f<-ae?l(!0):f>ae&&l(!1)}},n.url),r&&o&&t.jsx(B.div,{className:"flex text-white",variants:at,initial:"enter",animate:"visible",exit:"exit",transition:{y:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},children:e.metadataRenderer(n)})]},n.url)})}),e.images.length>1?t.jsxs("div",{className:"flex items-center justify-center gap-4 p-8 text-white",children:[t.jsx(F,{color:"ghost",size:"small",onClick:v,"aria-label":s.formatMessage(E.previousImage),icon:Ae}),e.images.map((a,d)=>t.jsx("img",{src:a.url,alt:a.alt??"",className:S("h-12 w-12 cursor-pointer rounded object-cover transition duration-300 hover:opacity-100",a.url===n.url?"ring-2 ring-white ring-offset-4 ring-offset-black":"opacity-25"),onClick:()=>{m(a),w(d<_?1:-1)},"aria-label":s.formatMessage(E.showImage),role:"button"},a.url)),t.jsx(F,{color:"ghost",size:"small",onClick:j,"aria-label":s.formatMessage(E.nextImage),icon:Ve})]}):null]})}),t.jsx("div",{className:S("hidden items-center justify-start overflow-hidden bg-gray-900 text-white transition-[flex-basis] duration-500 md:flex",o?"md:basis-[25vw]":"md:basis-0"),children:t.jsx("div",{className:"w-[25vw] min-w-[25vw]",children:e.metadataRenderer(n)})})]})})})]})}const E=re({showImage:{id:"imageViewer.showImage",defaultMessage:"Show Image"},closeModal:{id:"imageViewer.closeModal",defaultMessage:"Close Modal"},toggleSidebar:{id:"imageViewer.toggleSidebar",defaultMessage:"Toggle Sidebar"},nextImage:{id:"imageViewer.nextImage",defaultMessage:"Next Image"},previousImage:{id:"imageViewer.previousImage",defaultMessage:"Previous Image"}}),it=25*1e3,H=new Map,nt=(e,s=it)=>{const i=rt(e),[r,g]=x.useState(H.get(e)??0);return x.useEffect(()=>{let o=0;const l=setInterval(()=>{o+=100,g(n=>{let m=1.5;if(o<s){const c=Math.sin(i+n/100)*.1+1;m=(1-Math.log10(1+n/10))*c}const u=n+m;return u>=100?(clearInterval(l),100):(H.set(e,u),u)})},100);return()=>{clearInterval(l),H.delete(e)}},[i,e,s]),r};function rt(e){if(typeof e=="number")return e;let s=0;if(e.length===0)return s;for(let i=0;i<e.length;i++){const r=e.charCodeAt(i);s=(s<<5)-s+r,s|=0}return s}const ot=ve(()=>je(()=>import("./mua0dqkouh9nx1rd.js"),__vite__mapDeps([0,1,2,3])));function lt(e){const s=e.matchTextColor??!0,i=x.useRef(null),[r,g]=x.useState(null);x.useEffect(()=>{if(!i.current||!s)return;const o=()=>{i.current&&g(getComputedStyle(i.current).color)},l=new MutationObserver(()=>{o()});return l.observe(window.document.documentElement,{attributes:!0,attributeFilter:["class","style"]}),l.observe(i.current,{attributes:!0,attributeFilter:["class","style"]}),o(),()=>l.disconnect()},[s]);const b=x.useMemo(()=>{var n;if(!s)return e.animationData;const o=(n=r==null?void 0:r.match(/\d+/g))==null?void 0:n.map(Number).map(m=>m/255);if(!o)return null;o.push(1);const l=e.animationData;return"layers"in l&&Array.isArray(l.layers)&&l.layers.forEach(m=>{"ty"in m&&m.ty===4&&"shapes"in m&&Array.isArray(m.shapes)&&m.shapes.forEach(u=>{"it"in u&&Array.isArray(u.it)&&u.it.forEach(c=>{c.ty==="fl"&&(c.c.k=o)})})}),l},[e.animationData,r,s]);return t.jsx("div",{ref:i,className:e.className,children:t.jsx(ot,{animationData:b,loop:!0,autoplay:!0},r)})}function dt({id:e,withLottie:s}){return t.jsxs("div",{className:"absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full",children:[s?t.jsx(lt,{className:"h-6 w-6",animationData:Fe}):t.jsx(Te,{className:"h-6 w-6"}),t.jsx(ct,{id:e})]})}function ct({id:e}){const s=nt(e);return t.jsx(Pe,{percentage:s,thickness:1.25/23,className:"absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2",backgroundStrokeClassName:"stroke-token-main-surface-tertiary",transitionDuration:`${(100-s)/100*.2}s`,transitionTimingFunction:"cubic-bezier(0.55, 0, 1, 1)"})}function Tt({messages:e,clientThreadId:s}){const[i,r]=e,g=Ye(i.message),b=Re(),o=e.some(m=>b.has(m.message.id));let l=null;r!=null&&Y.isMultimodalTextMessage(r.message)&&(l=Y.getImageAssetPointers(r.message));let n=P.Running;return l!=null?n=P.Finished:r!=null?n=P.Error:g&&(n=P.Stopped),t.jsx(t.Fragment,{children:!o&&t.jsx(mt,{imageAssets:l??[],clientThreadId:s,toolStatus:n,toolMessage:r==null?void 0:r.message,messageId:i.message.id})})}const mt=({imageAssets:e,clientThreadId:s,toolMessage:i,toolStatus:r,messageId:g})=>{const b=z(),o=$e(e);if((i==null?void 0:i.content.content_type)===ye.SystemError)return null;const l=ge(e[0]),n=o.map(c=>c.data).filter(c=>c!=null),m=n.map(c=>({...c,alt:R(c)})),u=(c=0)=>`${g}-image-${c}`;return t.jsx(t.Fragment,{children:t.jsxs(xt,{$numItems:o.length,className:"my-1 transition-opacity duration-300",children:[o.length===0&&r===P.Running&&t.jsx(ie,{layoutId:"loading:placeholder",shape:l,isToolRunning:!0},"loading"),o.map((c,I)=>{const{isLoading:M,data:p,error:w}=c;if(M)return t.jsx(ie,{shape:l,layoutId:u(I)},I);if(w!=null||(p==null?void 0:p.url)==null)return t.jsx(K,{layoutId:u(I),className:"text-sm text-token-text-tertiary",shape:l,children:t.jsx("div",{className:"flex min-h-full flex-col items-center justify-center gap-3 px-4 pb-5",children:b.formatMessage(y.imageLoadError)})},I);if(i&&p){const j={...p,alt:R(p)};return t.jsx(gt,{image:j,allImages:m,clientThreadId:s,toolMessage:i,index:I,onOpenImageEditor:()=>{Oe.setFocusedObject({type:me.Image,image:j,allImages:n,messageId:i.id})}},I)}})]})})};function gt({toolMessage:e,clientThreadId:s,allImages:i,image:r,index:g,onOpenImageEditor:b}){const o=z(),l=Qe(s),n=Me(),{value:m}=Ce("2189772492"),u=Se(),c=Je(s),I=ge(r),[M,p]=x.useState({}),w=c&&"gizmo"in c?c.gizmo:void 0,j=(w==null?void 0:w.gizmo.id)===Ge,v=u&&m&&!!(n!=null&&n.includes(J.D3Editor))&&(w==null||j||!!(n!=null&&n.includes(J.D3EditorAllGpts)));async function $(a){Xe(a,l,e.id)}function O(a){var d,h,f,k,N,A,V,T,D,L;Q.logEvent("chatgpt_dalle_image_view_full",null,{sourceOperation:((h=(d=a.metadata)==null?void 0:d.dalle)==null?void 0:h.edit_op)??"none",hasParent:(k=(f=a.metadata)==null?void 0:f.dalle)!=null&&k.parent_gen_id?"true":"false"}),Z.logEvent(W.dalleImageViewFull,{conversationId:l,messageId:e.id,generationId:(A=(N=a.metadata)==null?void 0:N.dalle)==null?void 0:A.gen_id,parentGenerationId:(T=(V=a.metadata)==null?void 0:V.dalle)==null?void 0:T.parent_gen_id,fileId:ee(a.asset_pointer),sourceOperation:(L=(D=a.metadata)==null?void 0:D.dalle)==null?void 0:L.edit_op})}function _(a,d){var h,f,k,N,A,V,T,D,L,q;p(ue=>({...ue,[a.asset_pointer]:d})),Q.logEvent(W.dalleImageRating,d?"like":"dislike",{liked:d?"true":"false",sourceOperation:((f=(h=a.metadata)==null?void 0:h.dalle)==null?void 0:f.edit_op)??"none",hasParent:(N=(k=a.metadata)==null?void 0:k.dalle)!=null&&N.parent_gen_id?"true":"false"}),Z.logEvent(W.dalleImageRating,{liked:d,conversationId:l,messageId:e.id,generationId:(V=(A=a.metadata)==null?void 0:A.dalle)==null?void 0:V.gen_id,parentGenerationId:(D=(T=a.metadata)==null?void 0:T.dalle)==null?void 0:D.parent_gen_id,fileId:ee(a.asset_pointer),sourceOperation:(q=(L=a.metadata)==null?void 0:L.dalle)==null?void 0:q.edit_op})}function G(a){const d=M[a.asset_pointer],h={label:o.formatMessage(y.likeImage),onClick:()=>_(a,!0),disabled:d===!0,ariaLabel:o.formatMessage(y.likeImage),icon:le},f={label:o.formatMessage(y.dislikeImage),onClick:()=>_(a,!1),disabled:d===!1,ariaLabel:o.formatMessage(y.dislikeImage),icon:de},k={label:o.formatMessage(y.downloadImage),onClick:()=>$(a),ariaLabel:o.formatMessage(y.downloadImage),icon:ce};return[d!==!1&&h,d!==!0&&f,k].filter(Boolean)}let C=t.jsx(ft,{image:r,shape:I,rating:M[r.asset_pointer],onDownload:()=>$(r),onRate:(a,d)=>_(a,d),clientThreadId:s,layoutId:void 0});return v?C=t.jsx("div",{role:"button",onClick:b,children:C}):C=t.jsx(st,{image:r,images:i,metadataRenderer:a=>t.jsx(ut,{image:a}),onOpen:O,getActions:G,children:C}),t.jsx("div",{className:"flex",children:C},g)}function ie({shape:e,layoutId:s,isToolRunning:i=!1}){return t.jsx(K,{shape:e,layoutId:s,children:t.jsx("div",{className:"flex min-h-full items-center justify-center",children:t.jsx(dt,{id:s,withLottie:i})})},"loading")}function ut({image:e}){const s=z(),[i,r]=x.useState(!1),g=Ee();function b(o){const l=R(e);r(!0),qe(l,g,o),setTimeout(()=>{r(!1)},2e3)}return t.jsxs("div",{className:"flex flex-col items-start gap-3 p-6",children:[t.jsx("div",{className:"text-sm text-gray-300 sm:text-base",children:s.formatMessage(y.imageViewerMetadataTitle)}),t.jsx("div",{className:"max-h-32 overflow-y-auto text-sm md:max-h-[80vh] md:text-lg",children:R(e)}),t.jsx(F,{color:"primary",onClick:b,disabled:i,className:"hidden sm:block",icon:De,children:i?s.formatMessage(y.imageViewerMetadataCopyButtonCopied):s.formatMessage(y.imageViewerMetadataCopyButton)})]})}function K({children:e,shape:s,className:i,layoutId:r}){return t.jsxs(B.div,{layoutId:r,className:S("relative",i,s==="1792x1024"&&"aspect-[7/4]",s==="1024x1024"&&"aspect-square max-w-[400px]",s==="1024x1792"&&"aspect-[4/7] max-w-xs","overflow-hidden rounded-2xl"),children:[t.jsx("div",{className:"pointer-events-none absolute inset-0 bg-token-main-surface-secondary"}),t.jsx("div",{className:"relative h-full",children:e})]})}function ft({image:e,shape:s,rating:i,onDownload:r,onRate:g,clientThreadId:b,layoutId:o}){const l=Ze(),n=Be(Ke.isBusinessWorkspace),m=et(b),u=ze(),c=We(),I=(c==null?void 0:c.type)===me.Image&&c.image.asset_pointer===e.asset_pointer,{url:M,width:p,height:w}=e,j=!l&&!n&&(m==null?void 0:m.kind)!==ke.GizmoMagicCreate;return t.jsxs(K,{shape:s,className:"group/dalle-image",layoutId:I?void 0:o,children:[t.jsx(He,{alt:R(e),src:M,width:p,height:w}),t.jsx("div",{className:S("pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]",I?"bg-black/50 group-hover/dalle-image:bg-black/70":"group-hover/dalle-image:bg-transparent")}),u?!I&&t.jsx("div",{className:"pointer-events-none invisible absolute right-3 top-3 text-white group-hover/dalle-image:visible",children:t.jsx(Ue,{})}):t.jsxs(t.Fragment,{children:[j&&t.jsxs(ne,{children:[i!==!1&&t.jsx(U,{icon:le,selected:i===!0,onClick:v=>{v.stopPropagation(),g(e,!0)}}),i!==!0&&t.jsx(U,{icon:de,selected:i===!1,onClick:v=>{v.stopPropagation(),g(e,!1)}})]}),t.jsx(ne,{$rightAlign:!0,children:t.jsx(U,{icon:ce,onClick:v=>{v.stopPropagation(),r()}})})]})]})}const ne=oe.div`invisible absolute top-3 flex gap-1 group-hover/dalle-image:visible
${({$rightAlign:e})=>e?"right-3":"left-3"}`;function U({icon:e,selected:s,onClick:i}){return t.jsx("button",{className:S("flex h-8 w-8 items-center justify-center rounded",s?"bg-gray-100":"bg-black/50 hover:opacity-70"),onClick:i,disabled:s,children:t.jsx(e,{className:S("icon-md",s?"text-gray-700":"text-white")})})}const xt=oe.div`grid gap-2
${({$numItems:e})=>e<=1?"grid-cols-1":"grid-cols-2"}`;function ge(e){if(!e)return"1024x1024";const{width:s,height:i}=e;return s>i?"1792x1024":s<i?"1024x1792":"1024x1024"}const y=re({creatingImages:{id:"dalleMessage.creatingImagesV2",defaultMessage:"Creating image"},stopped:{id:"dalleMessage.stoppedV3",defaultMessage:"Stopped creating image"},errorCreating:{id:"dalleMessage.errorCreatingV2",defaultMessage:"Error creating image"},imageLoadError:{id:"dalleMessage.imageLoadError",defaultMessage:"Error loading image"},imageViewerMetadataTitle:{id:"dalleMessage.imageViewerMetadataTitle",defaultMessage:"Prompt"},imageViewerMetadataCopyButton:{id:"dalleMessage.imageViewerMetadataCopyButton",defaultMessage:"Copy"},imageViewerMetadataCopyButtonCopied:{id:"dalleMessage.imageViewerMetadataCopyButtonCopied",defaultMessage:"Copied!"},imageEditButton:{id:"dalleMessage.imageEditButton",defaultMessage:"Edit"},downloadImage:{id:"imageViewer.downloadImage",defaultMessage:"Download Image"},likeImage:{id:"imageViewer.likeImage",defaultMessage:"Like Image"},dislikeImage:{id:"imageViewer.dislikeImage",defaultMessage:"Dislike Image"}});export{Tt as default};
//# sourceMappingURL=ozawh3ifpfanx52l.js.map