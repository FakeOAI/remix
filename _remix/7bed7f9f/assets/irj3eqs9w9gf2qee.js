import{r as i,P as m,y as c,bh as h,j as e,cO as u,aG as l,G as g,bo as v}from"./f7fcphlcmge2bakt.js";import{b as f,a as x}from"./etn4cxeheavqmn23.js";import{b_ as p}from"./btwi9uxkutuvbi6k.js";import{m as S,T as n}from"./im0epd41gm175054.js";import{u as C}from"./dg2u9gmzjed436y2.js";import"./j8d4rbgte5ok7mfe.js";import"./dmhecczd2e2n0nw1.js";import"./neo058twqbsiz326.js";import"./durf57ntrxthlin8.js";import"./e5iorvbd8rtoisj1.js";import"./etquy4kzj9sjmja2.js";import"./iul7w2jox0cbuxwa.js";import"./pd11x8r3lr6mtq53.js";import"./m0xek04y1vwhogku.js";import"./lmhbu9wcyfm99jpt.js";import"./g21195mofb8k58zn.js";import"./jnvsufadvms9c5gg.js";import"./dok0i9iq675kociz.js";import"./bkii3bemubvk7e5v.js";import"./itsi821kdouza31k.js";import"./ggpi11wim7tn42e0.js";import"./oz35hbebyaiavcow.js";import"./dc422xkxua51xp6p.js";import"./ffjwgh3ejpdvkcwj.js";import"./e5hasbde9aliy806.js";import"./m5geiwlfpvtfs2ha.js";import"./33a1pqpg3ts1sn7p.js";import"./g5mq01wux96y35t2.js";import"./n7lxoeirv9o7hcli.js";import"./ms88n92djvjrjrrt.js";import"./gx5u9afziy2fre3x.js";import"./keomfvpbgxvgo4pc.js";function j({sharedConversationId:t,initiallyHighlightedMessageId:r,continueConversationUrl:a,isIndexable:s}){const d=()=>{};return i.useEffect(()=>{m.logEvent(c.sharedConversationPageLoaded),h.logEvent("chatgpt_conversation_share_page_loaded")},[]),e.jsx(u.Provider,{value:{serverSharedThreadId:t,isIndexable:s},children:e.jsx(f,{clientThreadId:t,setClientThreadId:d,initiallyHighlightedMessageId:r,continueConversationUrl:a})})}function P(t){if(t.serverResponse.type==="error")return e.jsx(D,{error:t.serverResponse.error});const r={...t,conversationData:t.serverResponse.data};return t.continueMode?e.jsx(T,{...r}):t.moderationMode?e.jsx(l,{children:e.jsx(o,{...r})}):e.jsx(o,{...r})}function T(t){const[r]=i.useState(()=>S());return n.initThreadFromServerData(r,t.conversationData,!0,t.sharedConversationId),t.chatPageProps!=null?e.jsx(x,{...t.chatPageProps,clientThreadId:r}):null}function o(t){return n.initThreadFromServerData(t.sharedConversationId,t.conversationData,!0),e.jsx(j,{...t,initiallyHighlightedMessageId:t.conversationData.highlighted_message_id,continueConversationUrl:t.conversationData.continue_conversation_url,isIndexable:t.conversationData.is_indexable})}function D({error:t}){const r=g(),a=v();return e.jsx("div",{className:"flex h-full w-full justify-center",children:e.jsx("div",{className:"max-w-lg p-6",children:e.jsx(p,{content:t,primaryCtaText:r.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>a("/")})})})}function at(){const t=C();return e.jsx(P,{...t})}export{at as default};
//# sourceMappingURL=irj3eqs9w9gf2qee.js.map