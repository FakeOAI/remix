import{ao as d,r as a,aQ as p,aR as h,j as e,cO as u,aN as c,F as l}from"./f7fcphlcmge2bakt.js";import{a as f,b as S}from"./etn4cxeheavqmn23.js";import{m as x,T}from"./im0epd41gm175054.js";import{u as g}from"./dg2u9gmzjed436y2.js";import"./j8d4rbgte5ok7mfe.js";import"./dmhecczd2e2n0nw1.js";import"./btwi9uxkutuvbi6k.js";import"./neo058twqbsiz326.js";import"./durf57ntrxthlin8.js";import"./e5iorvbd8rtoisj1.js";import"./etquy4kzj9sjmja2.js";import"./iul7w2jox0cbuxwa.js";import"./pd11x8r3lr6mtq53.js";import"./m0xek04y1vwhogku.js";import"./lmhbu9wcyfm99jpt.js";import"./g21195mofb8k58zn.js";import"./jnvsufadvms9c5gg.js";import"./dok0i9iq675kociz.js";import"./bkii3bemubvk7e5v.js";import"./itsi821kdouza31k.js";import"./ggpi11wim7tn42e0.js";import"./oz35hbebyaiavcow.js";import"./dc422xkxua51xp6p.js";import"./ffjwgh3ejpdvkcwj.js";import"./e5hasbde9aliy806.js";import"./m5geiwlfpvtfs2ha.js";import"./33a1pqpg3ts1sn7p.js";import"./g5mq01wux96y35t2.js";import"./n7lxoeirv9o7hcli.js";import"./ms88n92djvjrjrrt.js";import"./gx5u9afziy2fre3x.js";import"./keomfvpbgxvgo4pc.js";function v(r){const i=r.sharedConversationId,{data:t,isError:s}=d({queryKey:[`shared-conversation/${i}`],queryFn:()=>l.getAuthedSharedConversation(i)}),[o]=a.useState(()=>x()),[n,m]=a.useState(!1);return a.useEffect(()=>{s&&(window.location.href=p(h.SHARE_NOT_FOUND))},[s]),a.useEffect(()=>{t&&o&&(T.initThreadFromServerData(o,t,!0,i),m(!0))},[t,i,o]),n?r.continueMode?e.jsx(f,{...r.chatPageProps,clientThreadId:o}):e.jsx(u.Provider,{value:{serverSharedThreadId:i,isIndexable:!1},children:e.jsx(S,{clientThreadId:o,setClientThreadId:()=>{},initiallyHighlightedMessageId:t==null?void 0:t.highlighted_message_id,continueConversationUrl:t==null?void 0:t.continue_conversation_url})}):e.jsx("div",{className:"flex h-full items-center justify-center",children:e.jsx(c,{className:"text-token-text-tertiary"})})}function Z(){const r=g();return e.jsx(v,{...r})}export{Z as default};
//# sourceMappingURL=k142s6anpzvdual9.js.map