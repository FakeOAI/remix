import{dq as p,t as i,u as d,r as a,dP as u,bV as h,bW as c,ax as l,j as f}from"./b039tv8bwphg53xz.js";import{C as S}from"./h7xm3vohcxrubr7u.js";import{S as x}from"./nbexd5ipzqptuhp4.js";import{T as g}from"./nbo63fowdjyx721h.js";import"./bpe8tydriph2aal1.js";import"./g401cc2apf3gsyl6.js";import"./dfwyg6y7a7bz5yzr.js";import"./cgyi3450v82nz46b.js";import"./j1hbqggbv9x780av.js";import"./gl5lyqq5iuemkmyv.js";import"./iubd4o924tnhde2e.js";import"./h9i9u3ffkiu1lurw.js";import"./mcwisjv1cien5ac3.js";import"./f9e00zz4efklx1wm.js";import"./df9iumhzxqg3ninw.js";import"./iivzaeyg4w5jdwjd.js";import"./i61lrvppal5t258a.js";import"./73ptfkc8d3st104a.js";import"./oqxe8wpd4ueybilw.js";import"./9end2q34k6i4p3b3.js";import"./n7flp48xqush61tc.js";import"./kcitbzjuec6zap75.js";import"./bjz9077p8ing8oeq.js";import"./dmigr1js2f3333u1.js";import"./n8nw6i778jscasao.js";import"./ftp9179crveu9hyd.js";import"./gk2e7meqhigifzw0.js";import"./fekq2xjgjtbvyb61.js";import"./lm5ll09v77z8qm3e.js";import"./cngi69keurc6na28.js";import"./gasgej9vzvwrr1b4.js";import"./b3wbtfs8vouwmmij.js";import"./bww70256c0y37wjn.js";import"./msjbeylsaky1cbap.js";import"./c00afv2othr6d35q.js";import"./olpvluetlxo55t95.js";import"./hqz6m6njgcj0lyxq.js";import"./n9lt36kvx4tjd3ch.js";import"./gtiob7nk9sdrh7d0.js";import"./h6sva7jlw7nh9kpc.js";import"./e4d2dol21d4aerpf.js";import"./h8o74pklorpkbfqs.js";import"./ltx3cv9e24jdjvwg.js";import"./nifg47lcnke6hiil.js";import"./htefi6igxvjkanls.js";import"./c9woy6vjqzqgusgw.js";function C(e){const t=e.sharedConversationId,{data:r,isError:s}=d({queryKey:[`shared-conversation/${t}`],queryFn:()=>f.getAuthedSharedConversation(t)}),[o]=a.useState(()=>u()),[m,n]=a.useState(!1);return a.useEffect(()=>{s&&(window.location.href=h(c.SHARE_NOT_FOUND))},[s]),a.useEffect(()=>{r&&o&&(g.initThreadFromServerData(o,r,!0,t),n(!0))},[r,t,o]),m&&r?e.continueMode?i.jsx(S,{...e.chatPageProps,clientThreadId:o}):i.jsx(x,{sharedConversationId:o,initiallyHighlightedMessageId:r.highlighted_message_id,continueConversationUrl:r.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):i.jsx("div",{className:"flex h-full items-center justify-center",children:i.jsx(l,{className:"text-token-text-tertiary"})})}function ht(){const{sharedConversationId:e,...t}=p();return i.jsx(C,{...t,sharedConversationId:e})}export{ht as default};
//# sourceMappingURL=lod75h4yp1imb6oj.js.map