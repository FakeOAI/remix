import{dq as p,t as i,u as d,r as a,dP as u,bV as h,bW as c,ax as l,j as f}from"./dwj463axfl1a67vy.js";import{C as S}from"./my1uk9io0t0z2lnu.js";import{S as x}from"./dmwc1z7fjvqhwezb.js";import{T as g}from"./colyzmira78iz5iw.js";import"./cmznuno4cnc0148c.js";import"./bc5j38lbxslocd4f.js";import"./b11jkrv24syg2mqz.js";import"./16gu0sxlj72alb5n.js";import"./bk7xvzy43i0okmow.js";import"./dm3h9w3dbz5fq5qh.js";import"./oxio5aqkohwptci1.js";import"./mnngrpdzep3hw2x2.js";import"./lo7neq3qewtby87a.js";import"./nmgwa5bctjmlfg7z.js";import"./jlmg3ir0wltbfgae.js";import"./gjr13bcmggdj75uz.js";import"./k0qg7jm73j795ptc.js";import"./tloxpmr6k26coc4g.js";import"./f817xyr5sicavy4d.js";import"./l9649cnnu81npr1s.js";import"./d42fcqmx692w75ex.js";import"./e8j3qpyrfnt0cp29.js";import"./mjwhrblfnrhiphfw.js";import"./ifnl5a379stydjrl.js";import"./ocahmpp0i31aghnc.js";import"./myjxql1nxefzbuyw.js";import"./gjjn7009tn5qxqr0.js";import"./k1jydmt8qbz6xj4s.js";import"./jrek5i1zl0yjhdxz.js";import"./cvuk1d3oa4pviics.js";import"./h75zczv87n2j3le5.js";import"./mwnhohwd53xiu56o.js";import"./hw563qhaxzsjx85b.js";import"./h4bccsib32fzs13q.js";import"./lei9anjc9h5y6bzz.js";import"./gtjppmatlgzvi4rk.js";import"./g291f9ycq3ngztwq.js";import"./dqov8mqsrxsj8b5j.js";import"./bvy1m1fnx75biqs9.js";import"./fo7r8yj159k0884u.js";import"./fxxfqq0tjmirbkw1.js";import"./e2b6hmoilk54y1os.js";import"./ncmu1a2q6b4kgtvn.js";import"./ccztrmtxipx9v1h0.js";import"./ndalgqs5h73d9g8u.js";import"./fnphj55ad38d57wg.js";function C(e){const t=e.sharedConversationId,{data:r,isError:s}=d({queryKey:[`shared-conversation/${t}`],queryFn:()=>f.getAuthedSharedConversation(t)}),[o]=a.useState(()=>u()),[m,n]=a.useState(!1);return a.useEffect(()=>{s&&(window.location.href=h(c.SHARE_NOT_FOUND))},[s]),a.useEffect(()=>{r&&o&&(g.initThreadFromServerData(o,r,!0,t),n(!0))},[r,t,o]),m&&r?e.continueMode?i.jsx(S,{...e.chatPageProps,clientThreadId:o}):i.jsx(x,{sharedConversationId:o,initiallyHighlightedMessageId:r.highlighted_message_id,continueConversationUrl:r.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):i.jsx("div",{className:"flex h-full items-center justify-center",children:i.jsx(l,{className:"text-token-text-tertiary"})})}function ht(){const{sharedConversationId:e,...t}=p();return i.jsx(C,{...t,sharedConversationId:e})}export{ht as default};
//# sourceMappingURL=odgn872umaeji28c.js.map