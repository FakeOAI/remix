import{dl as p,l as i,u as d,r as a,dL as u,c3 as c,c4 as h,a$ as l,j as f}from"./ba3fwhhjky1m504d.js";import{C as S}from"./h1r8qn6sfeel74q6.js";import{S as x}from"./i87j3e6f8qb1cc74.js";import{T as g}from"./nvd0p58sqo8se13g.js";import"./coje7kavm1uon508.js";import"./xk1khcqko3d1xkda.js";import"./dnytedm08a8h3kff.js";import"./ki1aj4gxymfaf44u.js";import"./otuwydvkdmp4y2yq.js";import"./mkr022iftw3wwuj4.js";import"./kileugwiqaznkasc.js";import"./gs03avpm9nltligy.js";import"./krod5frvipe04kg4.js";import"./jhb3ljmb0uuaitsi.js";import"./i90kdsw7n90elsqs.js";import"./n3daj9r7j1665lcj.js";import"./mv6cam5j0ikh9mqv.js";import"./g52hzks2nta4ac14.js";import"./ip9mg1bpxdefhkbk.js";import"./jhzfru96wg0dgdac.js";import"./l2ln4nt5j1ap5t71.js";import"./knyk3i9cmwskwcvv.js";import"./irweecroj8xj5fcb.js";import"./cj3gx43j626i6fnk.js";import"./dqym3crcamtvi3eh.js";import"./jezemksp8fnf0dh1.js";import"./icprelux2bypnc5s.js";import"./md5bzbnhex3pjfsu.js";import"./kdrep807l9low9of.js";import"./olwczll2x01p912v.js";import"./hkzw7un0fqr0fpl0.js";import"./ddilj5vy98nadyxu.js";import"./guxx30djwjhqt10z.js";import"./lr2id9xekd01hupt.js";import"./lyb3ci4ijnk33nee.js";import"./owypimcz1m9168ws.js";import"./hslpinwa3mqbvqpe.js";import"./ec796t3kbz5jytro.js";import"./h31dbjogv4ljoy6n.js";import"./j6c0jxggfdw2ihte.js";import"./cuaheqr4ppnb8m65.js";import"./jaxgszhaxcj5rzcb.js";function C(e){const t=e.sharedConversationId,{data:r,isError:s}=d({queryKey:[`shared-conversation/${t}`],queryFn:()=>f.getAuthedSharedConversation(t)}),[o]=a.useState(()=>u()),[m,n]=a.useState(!1);return a.useEffect(()=>{s&&(window.location.href=c(h.SHARE_NOT_FOUND))},[s]),a.useEffect(()=>{r&&o&&(g.initThreadFromServerData(o,r,!0,t),n(!0))},[r,t,o]),m&&r?e.continueMode?i.jsx(S,{...e.chatPageProps,clientThreadId:o}):i.jsx(x,{sharedConversationId:o,initiallyHighlightedMessageId:r.highlighted_message_id,continueConversationUrl:r.continue_conversation_url,isIndexable:!1,isBetterMetatagsEnabled:!1}):i.jsx("div",{className:"flex h-full items-center justify-center",children:i.jsx(l,{className:"text-token-text-tertiary"})})}function nt(){const{sharedConversationId:e,...t}=p();return i.jsx(C,{...t,sharedConversationId:e})}export{nt as default};
//# sourceMappingURL=h9pbzhh1qgclc4it.js.map