import{l as i,h as p,r as a,dQ as d,c1 as h,c2 as u,a$ as c,j as l}from"./bkk1etpxp73xgxkk.js";import{C as f}from"./j9qvbd15p2o4wip6.js";import{S}from"./2ih9u0nmml497phn.js";import{T as x}from"./e2lvmkzz1krdd0vf.js";import{u as g}from"./e5m3auc1kljcjz1a.js";import"./ho6syd1yt6mfjuy1.js";import"./nuovggdyf0grhuwv.js";import"./grdjxd4t00xxfgii.js";import"./go6iqv7kynl41ls2.js";import"./d1ew373qviaqzay3.js";import"./c7q13bl1gi8tl4t7.js";import"./noj1s37nphyqi49g.js";import"./icc79zmdj63m59x2.js";import"./i3sou16n7aet43d5.js";import"./izghaikqsryeppfz.js";import"./on8dwna7kjymzk0v.js";import"./d6xtt9rkfeozcyvb.js";import"./ika2bxu0cscuhv38.js";import"./e9jy1ikfzj9e62os.js";import"./kef7p4k14zdf1y4l.js";import"./cxb826gvasyyhf74.js";import"./dabzk7p57vaeradh.js";import"./2fn0olgj9xj3x0p7.js";import"./nh4xoqtd53sztxo8.js";import"./jmirzj5na583pa7a.js";import"./ky3hwvkezt2frybr.js";import"./okhdof47k0vuhmqv.js";import"./gteko0382k8ggpbf.js";import"./brhx5v2rxlq0rxdf.js";import"./cvlbu2zjl8gk4d4y.js";import"./b06mfhbavpg5kqfv.js";import"./mn3nu14cs11ir8z4.js";import"./ejywl3vwz3cnyccm.js";import"./o8dnah8yviaknm2n.js";import"./ickzndvtcdrritpi.js";import"./bhiswq7l6vnbbd9g.js";import"./fw4xkoxv5qjc42j9.js";import"./hot1ma8xgzlmhu27.js";import"./md7l2no35bs4azqe.js";import"./hcdhxk4ik5ew34s0.js";import"./jp88kwcbyg6rl7z7.js";import"./cvoajkwgs6l5fhn8.js";function C(e){const t=e.sharedConversationId,{data:r,isError:s}=p({queryKey:[`shared-conversation/${t}`],queryFn:()=>l.getAuthedSharedConversation(t)}),[o]=a.useState(()=>d()),[m,n]=a.useState(!1);return a.useEffect(()=>{s&&(window.location.href=h(u.SHARE_NOT_FOUND))},[s]),a.useEffect(()=>{r&&o&&(x.initThreadFromServerData(o,r,!0,t),n(!0))},[r,t,o]),m&&r?e.continueMode?i.jsx(f,{...e.chatPageProps,clientThreadId:o}):i.jsx(S,{sharedConversationId:o,initiallyHighlightedMessageId:r.highlighted_message_id,continueConversationUrl:r.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):i.jsx("div",{className:"flex h-full items-center justify-center",children:i.jsx(c,{className:"text-token-text-tertiary"})})}function nt(){const{sharedConversationId:e,...t}=g();return i.jsx(C,{...t,sharedConversationId:e})}export{nt as default};
//# sourceMappingURL=jskjnqaoid9vtae8.js.map