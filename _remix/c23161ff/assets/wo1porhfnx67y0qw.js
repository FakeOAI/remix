import{fU as v,a4 as y,a3 as x,r as a,am as g,t as j,y as u,m as r,fV as F}from"./xdxfp24iz1v9yfag.js";import{t as l,a as s,u as E,s as I,C as p,b as P,T as S,g as b}from"./nu1fne0hxn0fobvc.js";import{T as B,C as N}from"./hdj43xsu0g9bpawj.js";import"./ig3bdi3tp2s0pq8f.js";import"./br6d6eytaa2r39nf.js";import"./kz643hykcwokllpy.js";import"./i36u1kcvzuratj55.js";import"./h7n2pckboj3yc1x6.js";import"./hz844s4gzmud96ba.js";import"./c5te6b87gqwl4nl9.js";import"./fte6tx67ld908dz9.js";import"./d4hjqmounxos3gfd.js";import"./fzrn137102spawew.js";import"./u3m0cvgprkz8kc5k.js";import"./ep2zpebimu8cy8ft.js";import"./jq0aeod53hc6fru0.js";import"./eufh7b63d8xjklnf.js";const W=()=>(F(),null);function X(){const n=v(),[o]=y(),i=x(),f=l(n.conversationId),c=s(o.get("readonly"),!1),C=s(o.get("isFullScreen"),!1),h=s(o.get("header"),!0),T=s(o.get("hideBottomComposer"),!!c),t=l(n.canmoreId),e=f,d=E();a.useEffect(()=>{I({type:p.Textdoc,textdocId:t})},[t]),P(e,{kind:g.PrimaryAssistant});const m=j();return a.useEffect(()=>(u.retainThread(e),()=>{setTimeout(()=>{m.invalidateQueries({queryKey:["conversation",e]})},0),u.releaseThread(e)}),[e,m]),a.useEffect(()=>{t||i("/")},[t,i]),!t||d?.type!==p.Textdoc?null:r.jsx("div",{className:"h-full w-full overflow-hidden contain-content",children:r.jsx(S,{clientThreadId:e,children:r.jsx(B,{isEmbedded:!0,isFullScreen:C,hideHeader:!h,hideBottomComposer:T,isReadonlyFromQueryParam:c,clientThreadId:e,focusedTextdoc:d,onClose:()=>{b().sendMessage({type:N.Close})}},"textdocContent")})})}export{W as clientLoader,X as default};
//# sourceMappingURL=wo1porhfnx67y0qw.js.map