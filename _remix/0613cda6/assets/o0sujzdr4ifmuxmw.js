import{di as p,y as o,u as d,r as a,dK as u,bP as h,bQ as c,aw as l,N as f}from"./j2kz7iekbuf2lk7j.js";import{C as S}from"./nhstxjm9fm2wwq1z.js";import{S as x}from"./ekmqibmastrvwt4p.js";import{T as g}from"./do8518u43szfxnij.js";import"./i82yi0xftw7xnu8c.js";import"./le0rdv0puybx8i2m.js";import"./k7ijapezwxn0gldf.js";import"./edsbbff3hjliwmsy.js";import"./la9ho9khwsle3ipj.js";import"./htup5dwnbax7b6kd.js";import"./l3k0q6i660cci9gs.js";import"./7ipsxb1ziflxxehx.js";import"./eyqsg3qqtdkfk98w.js";import"./jpjqqpbn30fko74f.js";import"./ja1b9jvth2p43ta6.js";import"./j7mq5nf1vxeg7fkq.js";import"./ewb0evhr38szdnyo.js";import"./16qiumnq05saksju.js";import"./b7blrmw2f2rsy4xk.js";import"./m6ja8i3ndb249mop.js";import"./iwalt63h1v4xvqgr.js";import"./kawvie7nhoy7b5xf.js";import"./ebyv7xemoskqzdop.js";import"./eaaoouesduey4ffk.js";import"./h0azweck97u45dr6.js";import"./k3f9f9w3dyathkrt.js";import"./obzqpqgxugpntpyu.js";import"./m915zcyv891bnbyo.js";import"./ealecef5wv7wy2ad.js";import"./e6rd3uhbyhaywebc.js";import"./mc5sptj4mkj9uxem.js";import"./ni3b6td4z56jwe2m.js";import"./bei6thylcevdeq42.js";import"./bfbfsb70l0vf4jxg.js";import"./imolwwc9blvlxicq.js";import"./c5szd8ql34jskuew.js";import"./e7t3tykg4v6613sg.js";import"./lmjygzt103a8qxof.js";import"./hh4jf2kl0zghf52u.js";import"./en3g75iynq2rt808.js";import"./bnfarm88x21grgf5.js";import"./my7bnxus0xiawn8r.js";import"./egyp0l2t22pp5p8g.js";function C(e){const t=e.sharedConversationId,{data:r,isError:s}=d({queryKey:[`shared-conversation/${t}`],queryFn:()=>f.getAuthedSharedConversation(t)}),[i]=a.useState(()=>u()),[m,n]=a.useState(!1);return a.useEffect(()=>{s&&(window.location.href=h(c.SHARE_NOT_FOUND))},[s]),a.useEffect(()=>{r&&i&&(g.initThreadFromServerData(i,r,!0,t),n(!0))},[r,t,i]),m&&r?e.continueMode?o.jsx(S,{...e.chatPageProps,clientThreadId:i}):o.jsx(x,{sharedConversationId:i,initiallyHighlightedMessageId:r.highlighted_message_id,continueConversationUrl:r.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):o.jsx("div",{className:"flex h-full items-center justify-center",children:o.jsx(l,{className:"text-token-text-tertiary"})})}function pt(){const{sharedConversationId:e,...t}=p();return o.jsx(C,{...t,sharedConversationId:e})}export{pt as default};
//# sourceMappingURL=o0sujzdr4ifmuxmw.js.map