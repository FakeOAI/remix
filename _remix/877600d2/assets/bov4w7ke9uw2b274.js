import{fy as m,m as s,s as p,r as i,d3 as h,dp as u,dq as c,y as l,c5 as f,L as S}from"./hbhpmx2ipkndwudc.js";import{C as x}from"./bl44ud6ish9i5yq6.js";import{S as g}from"./hee8kdx2gr4n1aad.js";import"./mgr0w69u3c317psp.js";import"./ab2oz9enzsoo3wow.js";import"./dc04xqeim5g7thtb.js";import"./nb6f1twu9li01ii9.js";import"./m7u5z7sua6e1c9ci.js";import"./m0s651bq7jimn9ko.js";import"./ky07c7gm4e4zomhb.js";import"./f23evx1hkgbz32wj.js";import"./bv1tgraszqspgaxz.js";import"./t7u8ciwlz2voun1n.js";import"./hxvlxwkzr288aynn.js";import"./n5mnsu7wpta2bimq.js";import"./le5v2hqvx6xa2eig.js";import"./h1burzjdko4ksky5.js";import"./nqxrsem62j81khrd.js";import"./ex1buqdicemvrfma.js";import"./ibyggr6trj8ybd0e.js";import"./mdsiuh3cr4zxgc0k.js";import"./jcsi40okkq20gpy2.js";function y(r){const t=r.sharedConversationId,{data:e,isError:o}=p({queryKey:[`shared-conversation/${t}`],queryFn:()=>S.getAuthedSharedConversation(t)}),[a]=i.useState(()=>h()),[n,d]=i.useState(!1);return i.useEffect(()=>{o&&(window.location.href=u(c.SHARE_NOT_FOUND))},[o]),i.useEffect(()=>{e&&a&&(l.initThreadFromServerData(a,e,!0,t),d(!0))},[e,t,a]),n&&e?r.continueMode?s.jsx(x,{...r.chatPageProps,clientThreadId:a}):s.jsx(g,{sharedConversationId:a,initiallyHighlightedMessageId:e.highlighted_message_id,continueConversationUrl:e.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):s.jsx("div",{className:"flex h-full items-center justify-center",children:s.jsx(f,{className:"text-token-text-tertiary"})})}function U(){const{sharedConversationId:r,...t}=m();return s.jsx(y,{...t,sharedConversationId:r})}export{U as default};
//# sourceMappingURL=bov4w7ke9uw2b274.js.map