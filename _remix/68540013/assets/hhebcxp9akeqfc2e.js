import{j as i,u as p,r as a,b1 as d,b2 as u,a_ as h,R as c}from"./jmev784jhg5gl93h.js";import{C as l}from"./h51vfgsptx8anqkb.js";import{S as f}from"./ns2y3dfwfnv6ah4g.js";import{l as S,T as x}from"./mkmwf5cswlkdwe2u.js";import{u as g}from"./foplq6qbmy7ztif6.js";import"./ft992wxwyhplmlso.js";import"./o0ueoz14tillcvwt.js";import"./nffpkw236nisrk2v.js";import"./hdt4ueyxfrljz6pb.js";import"./htrm4kc2f422x2zl.js";import"./o8giw66un1of2q4t.js";import"./f2isoygw8pqyci6n.js";import"./ip6b5lfyco4rn57s.js";import"./lzyhpsvz8aby5ue5.js";import"./io29y6vnxptykrvc.js";import"./zyxgpnntt6v0w1vx.js";import"./e281kh1sm1gu55rc.js";import"./bstrt1iqs4xnf9qn.js";import"./fwolcrsprdye2hy3.js";import"./inzn6n6q9x7jkg6h.js";import"./d52x0od9sdw22f6c.js";import"./ek79uijkotcohxtr.js";import"./nig9i8y6fpg45g7k.js";import"./k8q7qqb40hh9wuef.js";import"./okm2czyejlfe5bv0.js";import"./coehvz2qz378twkm.js";import"./bezxkwxzkaxbj7ua.js";import"./jo0zydtjawhpnbqv.js";import"./b7vzo7vma8r3scmr.js";import"./hu4u7bka39xgdjfb.js";import"./c920r32io4kkri5k.js";import"./h0sjg6xe67jlfyf3.js";import"./kac1lc5994y2bpti.js";import"./h9jmnxqg05ds4g1l.js";import"./wygpq25i0lfq9htg.js";import"./e539ir1d0b0yltcw.js";import"./nx8q301z0lhvo7x2.js";import"./dkuhndt2wjilwh6k.js";import"./h7v8uyii9flcrb7c.js";import"./bwfv290fhpv2e7rx.js";import"./garprab6n28760la.js";import"./nwg1lkkh0ffo5kss.js";import"./lg9alc88w2sfci8o.js";import"./ks40vzwg503sx0mk.js";import"./dxvf5a557whqt16f.js";function C(e){const t=e.sharedConversationId,{data:r,isError:s}=p({queryKey:[`shared-conversation/${t}`],queryFn:()=>c.getAuthedSharedConversation(t)}),[o]=a.useState(()=>S()),[m,n]=a.useState(!1);return a.useEffect(()=>{s&&(window.location.href=d(u.SHARE_NOT_FOUND))},[s]),a.useEffect(()=>{r&&o&&(x.initThreadFromServerData(o,r,!0,t),n(!0))},[r,t,o]),m&&r?e.continueMode?i.jsx(l,{...e.chatPageProps,clientThreadId:o}):i.jsx(f,{sharedConversationId:o,initiallyHighlightedMessageId:r.highlighted_message_id,continueConversationUrl:r.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):i.jsx("div",{className:"flex h-full items-center justify-center",children:i.jsx(h,{className:"text-token-text-tertiary"})})}function ut(){const{sharedConversationId:e,...t}=g();return i.jsx(C,{...t,sharedConversationId:e})}export{ut as default};
//# sourceMappingURL=hhebcxp9akeqfc2e.js.map