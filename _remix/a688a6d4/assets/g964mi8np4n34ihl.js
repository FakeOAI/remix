import{N as T,$ as x,Z as y,r as a,I as g,j,a6 as r,eF as F}from"./fw2sv6mo32vdb58s.js";import{O as u,Q as s,R as I,V as R,W as l,X as E,v as p,Y as P,Z as S,_ as N}from"./mvfp9xkrxbhizxzo.js";import{T as O,C as b}from"./b7vd6xkla5k355tj.js";import"./brnrasthlm0rpj0x.js";import"./fpjq4i80aohithht.js";import"./nrfrj4av9qbdbq3n.js";import"./e6w4twohzb8ryusl.js";import"./bhsv161b2mgumrql.js";import"./qyz36dy9hntdirmh.js";import"./ewwbaxt0c07cajys.js";import"./exejoj0p864knzaw.js";import"./eiri5a3ixcnhflmi.js";import"./nw2e45ofzhuyy2ku.js";import"./gmnioex2oqqhr2k4.js";import"./li5dlojsal06wvlm.js";import"./k75790v27xcy5v05.js";import"./k0dicfy8wfsmlpzh.js";import"./i57t73oer247d8lw.js";const D=()=>(F(),null);function G(){const n=T(),[o]=x(),i=y(),f=u(n.conversationId),d=s(o.get("readonly"),!1),C=s(o.get("isFullScreen"),!1),h=s(o.get("header"),!0),v=s(o.get("hideBottomComposer"),!!d),t=u(n.canmoreId),e=f,c=I();a.useEffect(()=>{R({type:l.Textdoc,textdocId:t})},[t]),E(e,{kind:g.PrimaryAssistant});const m=j();return a.useEffect(()=>(p.retainThread(e),()=>{setTimeout(()=>{m.invalidateQueries({queryKey:["conversation",e]})},0),p.releaseThread(e)}),[e,m]),a.useEffect(()=>{t||i("/")},[t,i]),!t||c?.type!==l.Textdoc?null:r.jsx("div",{className:"h-full w-full overflow-hidden contain-content",children:r.jsx(P,{clientThreadId:e,children:r.jsx(O,{isEmbedded:!0,isFullScreen:C,hideHeader:!h,hideBottomComposer:v,readonlyReason:d?S.QueryParam:void 0,clientThreadId:e,focusedTextdoc:c,onClose:()=>{N().sendMessage({type:b.Close})}},"textdocContent")})})}export{D as clientLoader,G as default};
//# sourceMappingURL=g964mi8np4n34ihl.js.map