import{dh as p,y as i,u as d,r as a,dI as h,bP as u,bQ as c,aw as l,N as f}from"./mmal6p4kl22zfrfg.js";import{C as S}from"./bjz2w9afskg2dxt5.js";import{S as x}from"./masshu734ybmqk2i.js";import{T as g}from"./a44b3m5ml1mx5nn4.js";import"./esia9ah6q4vsupvt.js";import"./i8crxwujeo3n60om.js";import"./jyusxtzzgs4ihqfz.js";import"./lwk11n9qbjlycof7.js";import"./iziiga9sc3emkx6a.js";import"./ewaqnxa4l26dslc9.js";import"./meoz9lbdxu4dt41d.js";import"./djrjzoma5dxlbo01.js";import"./f5g3yf6rejksa6rn.js";import"./k7hb5o3308fwzisv.js";import"./k88ys7sf9o5flgyw.js";import"./lcjgntdwka0pcoze.js";import"./bmhn0o3is180q73k.js";import"./pbffjd4sant9qggz.js";import"./m8lgth2hdwftjzpg.js";import"./mw4mmmapv415l2ql.js";import"./otbog8ic1x0jilh3.js";import"./fhhsgn4hg6gpu4zs.js";import"./o6w9okc5vn9scj4w.js";import"./iasulzfqw113jg8a.js";import"./nc3xijfim5xk9ym2.js";import"./mcabpsyr5i658ozc.js";import"./o690o1zkkh0iingt.js";import"./n6hph5et3w5xvb01.js";import"./c2od6pp1aqjfcuj0.js";import"./di7pi9i09i1gca8g.js";import"./fbhbhap15n2ybrok.js";import"./m4txjtjm8m1s6uyu.js";import"./lmh6u4cd3xl9crhl.js";import"./fwdwa0kv6nwta6rw.js";import"./gs8o2bb6o56rsr7i.js";import"./dfvfjpcshyn3uqws.js";import"./c7msnf6gkmps7cem.js";import"./itf451c6me7w899j.js";import"./g47wnxifsg6zyjt2.js";import"./gkl3caqa00v9h9ki.js";import"./ig7ox37cq831ixtp.js";import"./j5mxggmj6xq5i8rt.js";import"./cd4ygtn6384gqvyl.js";function C(e){const t=e.sharedConversationId,{data:r,isError:s}=d({queryKey:[`shared-conversation/${t}`],queryFn:()=>f.getAuthedSharedConversation(t)}),[o]=a.useState(()=>h()),[m,n]=a.useState(!1);return a.useEffect(()=>{s&&(window.location.href=u(c.SHARE_NOT_FOUND))},[s]),a.useEffect(()=>{r&&o&&(g.initThreadFromServerData(o,r,!0,t),n(!0))},[r,t,o]),m&&r?e.continueMode?i.jsx(S,{...e.chatPageProps,clientThreadId:o}):i.jsx(x,{sharedConversationId:o,initiallyHighlightedMessageId:r.highlighted_message_id,continueConversationUrl:r.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):i.jsx("div",{className:"flex h-full items-center justify-center",children:i.jsx(l,{className:"text-token-text-tertiary"})})}function pt(){const{sharedConversationId:e,...t}=p();return i.jsx(C,{...t,sharedConversationId:e})}export{pt as default};
//# sourceMappingURL=lubtmk88p8hik6dg.js.map