import{dh as p,y as i,u as d,r as a,dI as h,bP as u,bQ as c,aw as l,N as f}from"./c18i0pp13au3y7ic.js";import{C as S}from"./ckuuaeibp6usx7mh.js";import{S as x}from"./abkxvgjs4lo7g3hv.js";import{T as g}from"./oebbfh7ymqr9h0bg.js";import"./haiie99g2z7r06p2.js";import"./g4twu77u2twhehgk.js";import"./a6yq7dxv0hbp7yf9.js";import"./d6pd9vw7xwm0s8og.js";import"./kj64znksxeizyr44.js";import"./l72gguc1sdhtezl5.js";import"./enssjn5g3z6y1cyn.js";import"./j5fp77xzoqlejbm4.js";import"./6821c7u8k44y6qgw.js";import"./h1mh4abdz9ajp2qf.js";import"./kp8msh463esg9se3.js";import"./8n4pdax1gjhvhr60.js";import"./tdlbzuru68c98r10.js";import"./ipokt9i7zjv6h6xg.js";import"./jd722thjwk9l119v.js";import"./l6q8z1di3hxp7im8.js";import"./uz674jecbic99odm.js";import"./hy6dx4j4e3itesri.js";import"./i0rsuleug17fm96j.js";import"./h9k2q1s6tchmizhu.js";import"./d2rynahwdk8zgr3h.js";import"./bvc0q1gds11j04iw.js";import"./d29skr3h0didb7mn.js";import"./ewx9shdrubeyyv1h.js";import"./gacwwf80r3e09egn.js";import"./mfvx3ufcdqql8z8f.js";import"./e84pdv6605u7dh25.js";import"./gnw06s083lr5f19e.js";import"./ercjloytnrkrpiaf.js";import"./nt5chjmu6n6hgb8b.js";import"./nhbvzkfqiq95cx4e.js";import"./ocp9qypl4gbd93gm.js";import"./juqs3lvx2wx3p6v6.js";import"./hbftftivxxnf28as.js";import"./h5zajrmsu588ivc7.js";import"./gh81skfwc2ue8g4f.js";import"./nhvy7iy1ucx17kzi.js";import"./kn3mkzykrdz1nxas.js";import"./b72hxrknkvm9xl0a.js";function C(e){const t=e.sharedConversationId,{data:r,isError:s}=d({queryKey:[`shared-conversation/${t}`],queryFn:()=>f.getAuthedSharedConversation(t)}),[o]=a.useState(()=>h()),[m,n]=a.useState(!1);return a.useEffect(()=>{s&&(window.location.href=u(c.SHARE_NOT_FOUND))},[s]),a.useEffect(()=>{r&&o&&(g.initThreadFromServerData(o,r,!0,t),n(!0))},[r,t,o]),m&&r?e.continueMode?i.jsx(S,{...e.chatPageProps,clientThreadId:o}):i.jsx(x,{sharedConversationId:o,initiallyHighlightedMessageId:r.highlighted_message_id,continueConversationUrl:r.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):i.jsx("div",{className:"flex h-full items-center justify-center",children:i.jsx(l,{className:"text-token-text-tertiary"})})}function pt(){const{sharedConversationId:e,...t}=p();return i.jsx(C,{...t,sharedConversationId:e})}export{pt as default};
//# sourceMappingURL=ffrm43bb7o9m3qey.js.map