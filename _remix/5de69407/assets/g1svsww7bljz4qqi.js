import{dh as p,y as i,j as d,r as a,dI as h,bM as u,bN as c,ar as l,l as f}from"./p4yo0rzsteij4ihh.js";import{C as S}from"./l073i3o7wz5lnloz.js";import{S as x}from"./faczaiousfpcepem.js";import{T as g}from"./ucoghk4z1rejef9i.js";import"./hd436y4ydqidgeiu.js";import"./d3g4a0hcwihawz3e.js";import"./m2xb5h49bu6lvq0z.js";import"./mf8aa04pcamvg3db.js";import"./mslwg28fmsyi0i8b.js";import"./j47f1y1dfugxdi4c.js";import"./kjnxb2s320ih2pof.js";import"./l48h3mdgj5xfyc0e.js";import"./o2246qj71dru3m9e.js";import"./e0csq37aq7fsoatu.js";import"./nf6la2yi1otm0vo9.js";import"./f1wmn65au0ke9jk0.js";import"./eh2eng92zajjlxkp.js";import"./k38f533rijdcqgn0.js";import"./ip9uh04g30enj3b9.js";import"./ev2x16g8l9ld0mx0.js";import"./hqitv0sbw213sss9.js";import"./l8q6mtl17u7kkoap.js";import"./nbxponn7987qv6zb.js";import"./fs0687qtyw84v8q1.js";import"./lnpqnis7t2kel0cw.js";import"./kxwyftr8p9w7yc8v.js";import"./kn4kwfz3pcc0dh1y.js";import"./ofvfxe9a1b2fhuri.js";import"./obhqaj3zdb1rotq2.js";import"./c0l89ic47ub2421p.js";import"./hx0lipk659xndf71.js";import"./f62vqubb0r8xed1w.js";import"./nj8ushefqfuwoi4c.js";import"./mda38ewxonn8kvuj.js";import"./l2oo38vrfdv3orft.js";import"./d8l43kuu0o9ea9il.js";import"./buicxllnthhjkqpv.js";import"./ji0i2gthym3v2luf.js";import"./bld70ok0mq24oqdw.js";import"./hmjswdi4wh596fl1.js";import"./g233jbmgj8j86ygl.js";import"./c6zgb2lnq7ibqrw9.js";import"./od9zy3milg264no9.js";function C(e){const t=e.sharedConversationId,{data:r,isError:s}=d({queryKey:[`shared-conversation/${t}`],queryFn:()=>f.getAuthedSharedConversation(t)}),[o]=a.useState(()=>h()),[m,n]=a.useState(!1);return a.useEffect(()=>{s&&(window.location.href=u(c.SHARE_NOT_FOUND))},[s]),a.useEffect(()=>{r&&o&&(g.initThreadFromServerData(o,r,!0,t),n(!0))},[r,t,o]),m&&r?e.continueMode?i.jsx(S,{...e.chatPageProps,clientThreadId:o}):i.jsx(x,{sharedConversationId:o,initiallyHighlightedMessageId:r.highlighted_message_id,continueConversationUrl:r.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):i.jsx("div",{className:"flex h-full items-center justify-center",children:i.jsx(l,{className:"text-token-text-tertiary"})})}function pt(){const{sharedConversationId:e,...t}=p();return i.jsx(C,{...t,sharedConversationId:e})}export{pt as default};
//# sourceMappingURL=g1svsww7bljz4qqi.js.map