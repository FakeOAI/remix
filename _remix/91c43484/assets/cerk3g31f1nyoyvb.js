import{dh as s,aU as m,y as r,az as d,r as l,dI as c,X as h,bc as u,dt as p}from"./hbchlcqon2hwxr80.js";import{C as g}from"./ngwcmjl4t708mghh.js";import{ac as v,ad as f}from"./bj9u7c4m96v4ynu9.js";import{S as x}from"./gqxx6sn85y5l4b38.js";import{T as n}from"./dwa9sqyvk67hw6bw.js";import"./mu86dgakvedfv6hm.js";import"./nmbaat51mx0cnwxl.js";import"./ncy4hvjnjzcxnzjh.js";import"./iecjxwy4bdhrkjjx.js";import"./hnr9t72m288h52wy.js";import"./bxynqddfbn61ak0f.js";import"./f6z2m8gdbpzzrq6z.js";import"./j17phbzpsei7xean.js";import"./fopi3aherabk7cf4.js";import"./i7m4n3tcy28jqwxt.js";import"./frm3a708djqebpl7.js";import"./dkrigemuevrjmbmp.js";import"./icpk1o89aiyc59sk.js";import"./c7exg25ifvm7b7xd.js";import"./lrwr6p7cpg35s37u.js";import"./b0d858md1jzm3gmv.js";import"./k2c7tqr68enp7jbi.js";import"./i5rzxlz3df8nx271.js";import"./cruzcnx0z8l7qnv2.js";import"./ecgwjsca4j4ylx3d.js";import"./dqkrq5cl2g5enyuq.js";import"./dk7vcwo30rndmw6t.js";import"./ma7eitt2jslq45m8.js";import"./nsht6zklf2t4hwsh.js";import"./bq1bt5segii1kagi.js";import"./s97qhkol9pg9fyh4.js";import"./ijfune6n6oa8hq55.js";import"./lfqqnt0qvtxdwdjt.js";import"./due6zfduel3qrxw1.js";import"./hwn42mrc7s74zeac.js";import"./jwr4438x73wig7vn.js";import"./lwqxrye0gekqs8uy.js";import"./ljteyc9nf9afcur7.js";import"./ba1gq8c3oqycmeoo.js";import"./owzbleyy87ttrlbh.js";import"./l2qqpe2mz1mfai49.js";import"./lieeijh254qapg0f.js";import"./lf7xbpkewnaceqo8.js";function C(t){if(t.serverResponse.type==="error")return r.jsx(y,{error:t.serverResponse.error});const e={...t,conversationData:t.serverResponse.data};return t.continueMode||t.isContinueEnabled?r.jsx(S,{...e}):t.moderationMode?r.jsx(d,{children:r.jsx(o,{...e})}):r.jsx(o,{...e})}function S(t){const[e]=l.useState(()=>c());return n.initThreadFromServerData(e,t.conversationData,!0,t.sharedConversationId),t.chatPageProps!=null?r.jsx(v.Provider,{value:{serverSharedThreadId:t.sharedConversationId},children:r.jsx(g,{...t.chatPageProps,clientThreadId:e})}):null}function o(t){return n.initThreadFromServerData(t.sharedConversationId,t.conversationData,!0),r.jsx(x,{sharedConversationId:t.sharedConversationId,initiallyHighlightedMessageId:t.conversationData.highlighted_message_id,continueConversationUrl:t.conversationData.continue_conversation_url,isIndexable:t.conversationData.is_indexable,isBetterMetatagsEnabled:t.conversationData.is_better_metatags_enabled})}function y({error:t}){const e=h(),a=u();return r.jsx("div",{className:"flex h-full w-full justify-center",children:r.jsx("div",{className:"max-w-lg p-6",children:r.jsx(f,{content:t,primaryCtaText:e.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>a("/")})})})}const ct=({data:t})=>{const e=t;if(!e||e.serverResponse.type==="error"||!e.meta)return[{title:"ChatGPT"},{name:"robots",content:"noindex,nofollow"}];const{meta:a}=e;return a.isBetterMetatagsEnabled?[{title:"ChatGPT - "+a.title},{property:"og:site_name",content:"ChatGPT"},{name:"robots",content:a.isIndexable?"index,nofollow":"noindex,nofollow"},{property:"og:title",content:"ChatGPT - "+a.title},{property:"og:description",content:a.description},{property:"og:image",content:a.imageSrc},{property:"og:url",content:"https://chatgpt.com/share/"+e.sharedConversationId}]:[{title:"ChatGPT"},...p]};function ht(){const{sharedConversationId:t,...e}=s(),{layer:a}=m("2840731323"),i=a.get("is_direct_continue_enabled",!1);return r.jsx(C,{...e,sharedConversationId:t,isContinueEnabled:i})}export{ht as default,ct as meta};
//# sourceMappingURL=cerk3g31f1nyoyvb.js.map