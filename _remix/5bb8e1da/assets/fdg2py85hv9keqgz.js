import{l as i,h as p,r as a,dM as d,c3 as h,c4 as u,a$ as c,j as l}from"./gie7t2ghpkmat91x.js";import{C as f}from"./ke8nollx111ccyk2.js";import{S}from"./izn7uhqysfpf8myq.js";import{T as x}from"./j7vda0o4435fpq77.js";import{u as g}from"./lgkh1cwsm388me29.js";import"./mlhieyi9z3gwttrn.js";import"./g9iu7nm903guujld.js";import"./eb3stsg8iy7t43kd.js";import"./cq1wr63lzayx7ig8.js";import"./h2sd1xa6f1fu46y0.js";import"./dj1r9dxm91vgn5c2.js";import"./l9f3mccvx9rgexey.js";import"./feb9subta6lf5bz0.js";import"./dcuy50ysngytazok.js";import"./ngdb9un7j510048b.js";import"./cap2emr12g2tghfb.js";import"./m73oatg382ylvuvx.js";import"./n86rj4z42qeu7i16.js";import"./ebqv5ph7c2sdk5gc.js";import"./gc1cav3hbynzlnwl.js";import"./f1k15lrwzctkk8t5.js";import"./me49ih2kp8p0srre.js";import"./m878e283hszmxxxu.js";import"./mh122gvlhdytz1u1.js";import"./e7e7sp2dnlssszco.js";import"./orr0fyu2bv33rv28.js";import"./b8jcru655m2j4vhf.js";import"./ola9q8b6skavyu55.js";import"./gr4woi3c8mqomb61.js";import"./ga5jdyirsc70un2e.js";import"./mc0991qkstsnty8z.js";import"./mrjyzik1prg8meni.js";import"./m3vztdz5bfiry3en.js";import"./bj1d6q8t8rls8y02.js";import"./l3evqf207ny5gavp.js";import"./m6n9c5wi3ggf47q7.js";import"./jiryc8pk66l5n8uv.js";import"./ijeybnf9kxodchsu.js";import"./jytf3f2tg4kbg5jh.js";import"./mb9svnuvn1ty1398.js";import"./bqwyz0dvbjgcukvw.js";import"./j91tsyeg0cq1qizp.js";function C(e){const t=e.sharedConversationId,{data:r,isError:s}=p({queryKey:[`shared-conversation/${t}`],queryFn:()=>l.getAuthedSharedConversation(t)}),[o]=a.useState(()=>d()),[m,n]=a.useState(!1);return a.useEffect(()=>{s&&(window.location.href=h(u.SHARE_NOT_FOUND))},[s]),a.useEffect(()=>{r&&o&&(x.initThreadFromServerData(o,r,!0,t),n(!0))},[r,t,o]),m&&r?e.continueMode?i.jsx(f,{...e.chatPageProps,clientThreadId:o}):i.jsx(S,{sharedConversationId:o,initiallyHighlightedMessageId:r.highlighted_message_id,continueConversationUrl:r.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):i.jsx("div",{className:"flex h-full items-center justify-center",children:i.jsx(c,{className:"text-token-text-tertiary"})})}function nt(){const{sharedConversationId:e,...t}=g();return i.jsx(C,{...t,sharedConversationId:e})}export{nt as default};
//# sourceMappingURL=fdg2py85hv9keqgz.js.map