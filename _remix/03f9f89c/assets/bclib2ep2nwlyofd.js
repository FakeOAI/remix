import{dh as p,y as i,u as d,r as a,dI as h,bP as u,bQ as c,aw as l,N as f}from"./gk7hhvlifsus5j0c.js";import{C as S}from"./b05c3ht1mxy4fsoq.js";import{S as x}from"./ir7c2t27msgkzg3k.js";import{T as g}from"./eb6jfbxhzgg0t74v.js";import"./gsq1g1wlefg1zrxb.js";import"./efmr8kgkgno5urm3.js";import"./ky4v52nvoya01yw1.js";import"./kxy3cv8qlc46xaoc.js";import"./okdttqmt8zouh5er.js";import"./dw34g6t7selek28b.js";import"./jzb0h6hle04w3ure.js";import"./hfp4dj1kvb7emsdu.js";import"./8inwtmucdpjq49bt.js";import"./dj8j2icpmb1qmbbb.js";import"./h2aprefae1arxex5.js";import"./kfpni6bdqiev8lm7.js";import"./cwhi3mqs604mfde8.js";import"./hkjh14mzo175idic.js";import"./ccszp7ukqedghk0n.js";import"./mrifbckn0vrw8sti.js";import"./k63ma206j76uatv7.js";import"./jurhu77h31l4kh1j.js";import"./kkgc3pnctzonixhn.js";import"./es1toi6df3bfhc46.js";import"./bazua1f44iwup5b7.js";import"./h7wjk2khritr9ron.js";import"./flbqsgel4diucqnk.js";import"./lh3wjiu816f7irqu.js";import"./nr7ztr2qu559komi.js";import"./c61xxz7zzq2do10i.js";import"./b1bohafftlm5plh2.js";import"./b6nls6ygb1hkbx77.js";import"./ak6h9ay0a5stoyw0.js";import"./nb5qtt52etfoxqio.js";import"./h73bt42w7x67z9cp.js";import"./nr2jm2yq93f3m6fg.js";import"./ef3ewp14tnvljqal.js";import"./m87t1ytplgcv9b0n.js";import"./kp7dxqtrqf9hi65j.js";import"./cy70wrzp8gld6rj9.js";import"./buko6gcl8x9dk8jh.js";import"./o55lyb1v45wia96s.js";import"./bxghinxhgabk6rms.js";import"./m4jhdsp8gl5bb0dv.js";function C(e){const t=e.sharedConversationId,{data:r,isError:s}=d({queryKey:[`shared-conversation/${t}`],queryFn:()=>f.getAuthedSharedConversation(t)}),[o]=a.useState(()=>h()),[m,n]=a.useState(!1);return a.useEffect(()=>{s&&(window.location.href=u(c.SHARE_NOT_FOUND))},[s]),a.useEffect(()=>{r&&o&&(g.initThreadFromServerData(o,r,!0,t),n(!0))},[r,t,o]),m&&r?e.continueMode?i.jsx(S,{...e.chatPageProps,clientThreadId:o}):i.jsx(x,{sharedConversationId:o,initiallyHighlightedMessageId:r.highlighted_message_id,continueConversationUrl:r.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):i.jsx("div",{className:"flex h-full items-center justify-center",children:i.jsx(l,{className:"text-token-text-tertiary"})})}function dt(){const{sharedConversationId:e,...t}=p();return i.jsx(C,{...t,sharedConversationId:e})}export{dt as default};
//# sourceMappingURL=bclib2ep2nwlyofd.js.map