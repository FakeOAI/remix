import{j as K,r as u,f as k,y as Q,R as U}from"./mvabgae368c8ppg9.js";import{ds as Y,dt as Z,du as $,dv as z,dw as X,dx as W,dy as ee,dz as P,dA as se,dB as te,cE as oe,dC as ne,dD as S,bJ as re,dE as ae,dF as ce,dG as de,dH as ie,dI as ue,dJ as w,dK as Te,dL as le,dM as me,dN as fe,dO as pe,dP as xe,dQ as G,dR as V,dS as Ie,dT as ge}from"./gne0fkkyhu79w0cj.js";import{k as ve}from"./h8c08huq7kdim7pd.js";import{a as Ee,T as h,i as Me,p as Ce,q as ye}from"./hrszfqnlwp1fnoth.js";const he=e=>k.safeGet("/conversation/{conversation_id}/textdocs",{parameters:{path:{conversation_id:e}}}),Re=async e=>{const o=await he(e),n=new Map(o?.map(t=>[t.id,t])),s=[];for(const{id:t,content:a,version:l,textdoc_type:r,title:g,comments:x}of o)s.push({textdocId:t,messageId:null,type:z(r),comments:X(x,a),title:g,content:a,versionInt:l,createdAt:0});return{persistedTextdocVersionById:new Map(s.map(t=>[t.textdocId,t])),persistedTextdocVersions:s,persistedTextdocById:n}};function Fe({clientThreadId:e,isEnabled:o}){const n=Ee(()=>h.getServerThreadId(e)),{data:s,error:T,isLoading:t,isFetching:a,refetch:l}=K({queryKey:[n,"textdocs"],enabled:!!n&&o,gcTime:0,queryFn:()=>n&&Re(n)});return u.useEffect(()=>{if(!s)return;const{persistedTextdocVersions:r}=s;Y(r),Z(r),$(r)},[s]),[{...s,error:T,isLoading:t,isFetching:a},l]}var _=(e=>(e[e.INITIALIZING=0]="INITIALIZING",e[e.READY=1]="READY",e[e.REFETCHING=2]="REFETCHING",e))(_||{});function Oe({clientThreadId:e,isEnabled:o}){const[{error:n,persistedTextdocVersionById:s=null,isLoading:T,isFetching:t},a]=Fe({clientThreadId:e,isEnabled:o}),l=W();ee(()=>{if(!o)return;const g=h.getThreadCurrentLeafId(e),x=h.getThreadConversationTurns(e,g),R=P(x)?.messages??[],m=se(R);if(m==null)return;const v=m.message.metadata?.canvas?.textdoc_id,F=m.message.metadata?.canvas?.version;v!=null&&F!=null&&l(v,F),a()});let r=0;return s&&t?r=2:s&&!t&&!T&&(r=1),u.useMemo(()=>({status:r,fetchError:n,textdocVersionById:s}),[r,n,s])}const j=e=>{if(!e)return;const{messages:o}=e,n=fe(o??[],({message:T})=>T.author.role===U.System),s=n===-1?o:o?.slice(n+1);if(s&&pe(s))return s};function Ve({clientThreadId:e,isEnabled:o}){const n=Me(e),s=Ce(e,n),T=ye(e),t=oe(T),a=Oe({isEnabled:o,clientThreadId:e}),l=ne(),[r,g]=u.useState(!0),x=o&&(t||!r||a.status===_.REFETCHING),c=P(s),R=u.useMemo(()=>{if(!c||!S(c))return null;const I=h.getTree(e),{variantIds:O}=c;return O.map(L=>{const A=I.getLeafFromNode(L).id;return P(h.getThreadConversationTurns(e,A))})},[e,c]),m=u.useMemo(()=>!x||!c?null:S(c)?R?.flatMap(j).filter(re):j(c),[x,c,R]),v=!!m,F=u.useMemo(()=>s.slice(0,v?-1:s.length),[s.length,v]),b=ae(F),B=ce(),D=de(),H=ie(),E=u.useMemo(()=>{let I=ue(b);const{textdocVersionById:O,fetchError:L,status:A}=a;return I=w(I,d=>{d.fetchError=L,d.isFetchingFromPersistence=A===_.REFETCHING;for(const{pastedAt:f,content:M,metadata:C,tempId:i}of H){const q=d.resolveTempTextdocId[i]??i,{title:y="",type:p=xe.DOCUMENT}=C??{};G(d,{textdocId:q,title:y,type:p,content:M,createdAt:f,versionInt:0,comments:[],messageId:null})}if(O)for(const[f,M]of O.entries()){d.allTextdocIdSet[f]=f;const C=l.get(f);let i=C&&(C.versionInt??V)>(M.versionInt??V)?{...M,...C}:M;const q=D.filter(p=>p.textdocId===f&&p.kind===Ie.REMOVE_COMMENT);let y=i.versionInt;for(const p of q)i=ge(i,p),y=Math.max(y??V,p.versionInt??V);i={...i,versionInt:y},d.textdocById[f]=void 0,G(d,i)}}),B?w(I,d=>{G(d,B,!1)}):I},[H,b,a,l,B,D]),J=u.useMemo(()=>m?.length?Te(t,E,m):null,[m,t,E]),N=le(t,J,g);return u.useMemo(()=>N?me(E,N):E,[E,N])}function Ge({clientThreadId:e,children:o}){const n=ve(e),s=Ve({clientThreadId:e,isEnabled:n});return Q.jsx(te.Provider,{value:s,children:o})}export{Ge as T};
//# sourceMappingURL=jtjwt6ccfv7khex0.js.map