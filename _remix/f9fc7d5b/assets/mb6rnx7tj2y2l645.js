import{bh as s,l as r,b5 as m,r as d,dP as l,dQ as c,V as h,bp as u,dz as p}from"./ldmgmrz4k1q6ed5n.js";import{C as f}from"./ccu6b6bqvmvt2qar.js";import{ax as g}from"./il8crxbwclaclc75.js";import{S as v}from"./kh1ithe27jjpm04f.js";import{T as n}from"./cbyvodb06ds84vgq.js";import{u as x}from"./gpgm9mw8lloojjr9.js";import"./nfw6qo5mkhpyk7ym.js";import"./f844xbyapk4dqhm2.js";import"./idw7sys1c2oa2i6c.js";import"./ek18f4o0gb6hv959.js";import"./fom4zt3cusewtt6o.js";import"./h92f3ayftmoyqxjv.js";import"./gmezr8ivf0izcup2.js";import"./irdrgag61xlkj6se.js";import"./ckp7b0vb8mgdnbqd.js";import"./g93qmzmxf1wr9awg.js";import"./fb9zxvsrbhyl075h.js";import"./j2t40xcv7pbqw6af.js";import"./deod98p42ilzt8gy.js";import"./biot7k05ldcinew6.js";import"./f9gbfnnibb0jjzhy.js";import"./d41reewaqg3k8vdv.js";import"./e6gjhh4y6tgcyu2s.js";import"./bm17e8lvrnkb4wl5.js";import"./ha3do6qsqiigj5jo.js";import"./k0iy3jypcij2b2oo.js";import"./i90uh1dlzveuocly.js";import"./ox60ql9dc1lwx4l4.js";import"./miqdu419nfq6dj62.js";import"./70cqp64yxa9p6n2g.js";import"./nae970esod3k3i70.js";import"./e19oyuodg5cwjaak.js";import"./lugkzjbpl9wh0ixd.js";import"./jfq8gse5yfdt1bqf.js";import"./nkg4l2za6ncjgmyx.js";import"./e0hgums8fp9vcocl.js";import"./ojey1fwnyvb4z2ox.js";import"./ji3ehjaw9ep344w4.js";import"./hswf2q5jiucoa03z.js";import"./lh4vygeeg5osxtr0.js";import"./hv2kzb6f5zl7ebqt.js";function C(t){if(t.serverResponse.type==="error")return r.jsx(b,{error:t.serverResponse.error});const e={...t,conversationData:t.serverResponse.data};return t.continueMode||t.isContinueEnabled?r.jsx(S,{...e}):t.moderationMode?r.jsx(m,{children:r.jsx(o,{...e})}):r.jsx(o,{...e})}function S(t){const[e]=d.useState(()=>l());return n.initThreadFromServerData(e,t.conversationData,!0,t.sharedConversationId),t.chatPageProps!=null?r.jsx(c.Provider,{value:{serverSharedThreadId:t.sharedConversationId},children:r.jsx(f,{...t.chatPageProps,clientThreadId:e})}):null}function o(t){return n.initThreadFromServerData(t.sharedConversationId,t.conversationData,!0),r.jsx(v,{sharedConversationId:t.sharedConversationId,initiallyHighlightedMessageId:t.conversationData.highlighted_message_id,continueConversationUrl:t.conversationData.continue_conversation_url,isIndexable:t.conversationData.is_indexable,isBetterMetatagsEnabled:t.conversationData.is_better_metatags_enabled})}function b({error:t}){const e=h(),a=u();return r.jsx("div",{className:"flex h-full w-full justify-center",children:r.jsx("div",{className:"max-w-lg p-6",children:r.jsx(g,{content:t,primaryCtaText:e.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>a("/")})})})}const dt=({data:t})=>{const e=t;if(!e||e.serverResponse.type==="error"||!e.meta)return[{title:"ChatGPT"},{name:"robots",content:"noindex,nofollow"}];const{meta:a}=e;return a.isBetterMetatagsEnabled?[{title:"ChatGPT - "+a.title},{property:"og:site_name",content:"ChatGPT"},{name:"robots",content:a.isIndexable?"index,nofollow":"noindex,nofollow"},{property:"og:title",content:"ChatGPT - "+a.title},{property:"og:description",content:a.description},{property:"og:image",content:a.imageSrc},{property:"og:url",content:"https://chatgpt.com/share/"+e.sharedConversationId}]:[{title:"ChatGPT"},...p]};function lt(){const{sharedConversationId:t,...e}=x(),{layer:a}=s("2840731323"),i=a.get("is_direct_continue_enabled",!1);return r.jsx(C,{...e,sharedConversationId:t,isContinueEnabled:i})}export{lt as default,dt as meta};
//# sourceMappingURL=mb6rnx7tj2y2l645.js.map