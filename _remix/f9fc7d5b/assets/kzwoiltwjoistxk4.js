import{l as i,h as p,r as a,dP as d,c1 as h,c2 as u,a$ as c,j as l}from"./ldmgmrz4k1q6ed5n.js";import{C as f}from"./ccu6b6bqvmvt2qar.js";import{S}from"./kh1ithe27jjpm04f.js";import{T as x}from"./cbyvodb06ds84vgq.js";import{u as g}from"./gpgm9mw8lloojjr9.js";import"./nfw6qo5mkhpyk7ym.js";import"./f844xbyapk4dqhm2.js";import"./il8crxbwclaclc75.js";import"./idw7sys1c2oa2i6c.js";import"./ek18f4o0gb6hv959.js";import"./fom4zt3cusewtt6o.js";import"./h92f3ayftmoyqxjv.js";import"./gmezr8ivf0izcup2.js";import"./irdrgag61xlkj6se.js";import"./ckp7b0vb8mgdnbqd.js";import"./g93qmzmxf1wr9awg.js";import"./fb9zxvsrbhyl075h.js";import"./j2t40xcv7pbqw6af.js";import"./deod98p42ilzt8gy.js";import"./biot7k05ldcinew6.js";import"./f9gbfnnibb0jjzhy.js";import"./d41reewaqg3k8vdv.js";import"./e6gjhh4y6tgcyu2s.js";import"./bm17e8lvrnkb4wl5.js";import"./ha3do6qsqiigj5jo.js";import"./k0iy3jypcij2b2oo.js";import"./i90uh1dlzveuocly.js";import"./ox60ql9dc1lwx4l4.js";import"./miqdu419nfq6dj62.js";import"./70cqp64yxa9p6n2g.js";import"./nae970esod3k3i70.js";import"./e19oyuodg5cwjaak.js";import"./lugkzjbpl9wh0ixd.js";import"./jfq8gse5yfdt1bqf.js";import"./nkg4l2za6ncjgmyx.js";import"./e0hgums8fp9vcocl.js";import"./ojey1fwnyvb4z2ox.js";import"./ji3ehjaw9ep344w4.js";import"./hswf2q5jiucoa03z.js";import"./lh4vygeeg5osxtr0.js";import"./hv2kzb6f5zl7ebqt.js";function C(r){const t=r.sharedConversationId,{data:e,isError:s}=p({queryKey:[`shared-conversation/${t}`],queryFn:()=>l.getAuthedSharedConversation(t)}),[o]=a.useState(()=>d()),[m,n]=a.useState(!1);return a.useEffect(()=>{s&&(window.location.href=h(u.SHARE_NOT_FOUND))},[s]),a.useEffect(()=>{e&&o&&(x.initThreadFromServerData(o,e,!0,t),n(!0))},[e,t,o]),m&&e?r.continueMode?i.jsx(f,{...r.chatPageProps,clientThreadId:o}):i.jsx(S,{sharedConversationId:o,initiallyHighlightedMessageId:e.highlighted_message_id,continueConversationUrl:e.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):i.jsx("div",{className:"flex h-full items-center justify-center",children:i.jsx(c,{className:"text-token-text-tertiary"})})}function mt(){const{sharedConversationId:r,...t}=g();return i.jsx(C,{...t,sharedConversationId:r})}export{mt as default};
//# sourceMappingURL=kzwoiltwjoistxk4.js.map