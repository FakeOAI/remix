import{bg as s,l as r,b4 as m,r as d,dK as l,dL as c,W as h,bC as u,du as p}from"./lcuggoxt9lwlg24j.js";import{C as f}from"./kmocgr07icqo2287.js";import{ay as g}from"./oqyar3trpkqgxv15.js";import{S as v}from"./hn2me14r6d1o00e8.js";import{T as n}from"./ml68f4cxi6vaymzu.js";import{u as C}from"./k38hc6ladc03xcmb.js";import"./jpssqyi2li306ih2.js";import"./l4gk5gqg0dw83l0j.js";import"./natg1ot479i2a1pz.js";import"./jw1rwmsh8icfijxg.js";import"./i6gn6r1r8n0irw1d.js";import"./h1bkczz9wosds8fh.js";import"./cqf3y8iyt6qpsrmb.js";import"./gr7vx7uo927zz0lo.js";import"./j7sypngcl950eech.js";import"./h72c40y5bvlgu43c.js";import"./e9110isvrpw1t54x.js";import"./dupwes6znb4hcwzy.js";import"./bv89i7tn48ztyc3e.js";import"./hjv4htrqffi0076u.js";import"./gv46iztw3e9eolsn.js";import"./draymnwlp4mt9zbp.js";import"./ef8o2tcvblkitv6h.js";import"./dmz90gevfyjg6ks6.js";import"./gttizq3c6lf8c5na.js";import"./gzn0g03mvhfawrrz.js";import"./djeruxs366hxkmo8.js";import"./l0rnj5bxi73hseyj.js";import"./dmgu8zx9qc53hxnb.js";import"./gaxyhkjy01tg4uaj.js";import"./exumgz6qbrhhfotu.js";import"./c2p22l6y9xuyn2gt.js";import"./eii4phnckmaxr701.js";import"./nmm14nks2jr1r2i9.js";import"./n44t2oqve0gyo2ug.js";import"./h93jvvbujtrtjtwt.js";import"./okm4wf82c1gkzvqm.js";import"./l4xfiqic5zzqbug8.js";import"./ncyq5mer671mznl8.js";import"./l9z0sc1rfqt8y3ci.js";import"./ffcf085vy99n2wy2.js";import"./esws9adjnbthma76.js";function x(t){if(t.serverResponse.type==="error")return r.jsx(y,{error:t.serverResponse.error});const e={...t,conversationData:t.serverResponse.data};return t.continueMode||t.isContinueEnabled?r.jsx(S,{...e}):t.moderationMode?r.jsx(m,{children:r.jsx(o,{...e})}):r.jsx(o,{...e})}function S(t){const[e]=d.useState(()=>l());return n.initThreadFromServerData(e,t.conversationData,!0,t.sharedConversationId),t.chatPageProps!=null?r.jsx(c.Provider,{value:{serverSharedThreadId:t.sharedConversationId},children:r.jsx(f,{...t.chatPageProps,clientThreadId:e})}):null}function o(t){return n.initThreadFromServerData(t.sharedConversationId,t.conversationData,!0),r.jsx(v,{sharedConversationId:t.sharedConversationId,initiallyHighlightedMessageId:t.conversationData.highlighted_message_id,continueConversationUrl:t.conversationData.continue_conversation_url,isIndexable:t.conversationData.is_indexable,isBetterMetatagsEnabled:t.conversationData.is_better_metatags_enabled})}function y({error:t}){const e=h(),a=u();return r.jsx("div",{className:"flex h-full w-full justify-center",children:r.jsx("div",{className:"max-w-lg p-6",children:r.jsx(g,{content:t,primaryCtaText:e.formatMessage({id:"8rp1L0",defaultMessage:"Return to ChatGPT"}),onPrimaryCtaClick:()=>a("/")})})})}const lt=({data:t})=>{const e=t;if(!e||e.serverResponse.type==="error"||!e.meta)return[{title:"ChatGPT"},{name:"robots",content:"noindex,nofollow"}];const{meta:a}=e;return a.isBetterMetatagsEnabled?[{title:"ChatGPT - "+a.title},{property:"og:site_name",content:"ChatGPT"},{name:"robots",content:a.isIndexable?"index,nofollow":"noindex,nofollow"},{property:"og:title",content:"ChatGPT - "+a.title},{property:"og:description",content:a.description},{property:"og:image",content:a.imageSrc},{property:"og:url",content:"https://chatgpt.com/share/"+e.sharedConversationId}]:[{title:"ChatGPT"},...p]};function ct(){const{sharedConversationId:t,...e}=C(),{layer:a}=s("2840731323"),i=a.get("is_direct_continue_enabled",!1);return r.jsx(x,{...e,sharedConversationId:t,isContinueEnabled:i})}export{ct as default,lt as meta};
//# sourceMappingURL=d8lhljk99xuyh006.js.map