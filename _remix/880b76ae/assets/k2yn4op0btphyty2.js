import{ag as j,aR as P,r as m,X as A,a9 as C,y as e,bv as O,bw as D,a1 as t,bM as p,l as v,ec as T,bT as I,ed as B,a6 as U,bh as R}from"./o1ivbuadejprpakj.js";import{ap as E,cg as _,ch as Y,ci as z,cj as H,ck as x,by as b,cl as g}from"./i16nwty7q09iq1st.js";import{U as L}from"./cydma3qyvyx80hyp.js";import{u as F}from"./nbsdgm0upgk4irzm.js";import"./hpmltgx65508529x.js";import"./l8i8os8zb9hbkizc.js";import"./j76lrd6kdu2dvuce.js";import"./bwu3xfza0pxwe6ru.js";import"./l4ck0jsx010sty0l.js";import"./jq9wblohokz1apkp.js";function G(){const o=E(),a=j(),{data:d}=P(),r=a!=null||d!=null,[i,c]=m.useState(!1),h=d?.accountItems,f=F(a?.id??""),w=a?.id,l=h?.find(n=>n.id===w),M=a?.isOwnerOfAccount()&&a.isTeam()&&!a.hasPaidSubscription(),W=a?.isOwnerOfAccount()&&a.isTeam()&&a.hasPaidSubscription(),u=h?.filter(n=>!n.isDeactivated()),k=A(),N=C(),S=m.useCallback(()=>{c(!0),L.setPurchaseWorkspaceData({minimumSeats:Math.max(f,_),existingAccount:l}),c(!1)},[f,l]),y=async()=>{c(!0);try{const n=await v.fetchCustomerPortalUrl();location.href=n.url,c(!1)}catch{c(!1),N.warning(k.formatMessage(s.unableToOpenStripeDashboard),{hasCloseButton:!0})}};return a==null||!l||!u?e.jsx(e.Fragment,{}):e.jsx(O,{type:"success",onClose:D,isOpen:r,title:e.jsx("span",{className:"text-lg",children:e.jsx(t,{...s.workspaceDeactivated})}),children:e.jsxs("div",{className:"flex flex-col items-center justify-center gap-4",children:[e.jsxs("div",{className:"flex w-full items-center gap-4",children:[e.jsx(Y,{src:l.data.profilePictureUrl,size:"large"}),e.jsx("div",{className:"font-semibold",children:l.data.name})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-base font-bold",children:e.jsx(t,{...s.workspaceDeactivated})}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{className:"mb-1",children:e.jsx(t,{...s.chatHistoryUnavailable})}),e.jsx("li",{children:e.jsx(t,{...s.otherWorkspacesAvailable})})]})]}),M&&e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("p",{children:e.jsx(t,{...s.purchaseNewSubscription})}),e.jsx(p,{className:"m-auto mt-2 w-full",loading:i,onClick:S,children:e.jsx(t,{...s.purchaseNewSubscriptionButton})})]}),W&&e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("p",{children:e.jsx(t,{...s.resolveOutstandingInvoice})}),e.jsx(p,{className:"m-auto mt-2 w-full",loading:i,onClick:y,children:e.jsx(t,{...s.manageSubscriptionButton})})]}),e.jsx(z,{}),e.jsx("div",{className:"w-full justify-center",children:u.length>0?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"mb-2 text-base font-bold",children:e.jsx(t,{...s.selectWorkspace})}),e.jsx(H,{data:u})]}):e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-base font-bold",children:e.jsx(t,{...s.createPersonalWorkspace})}),e.jsx(t,{...s.deactivatedWorkspaceReason})]}),e.jsxs("div",{className:"flex w-full items-center gap-4",children:[o&&o.picture&&e.jsx("img",{alt:"Profile",src:o.picture,width:x.workspaceMedium,height:x.workspaceMedium,className:"flex items-center justify-center rounded-sm"}),e.jsx("span",{className:"font-semibold",children:o&&e.jsx("span",{children:o.name})})]}),e.jsx("div",{className:"ml-auto",children:e.jsx(p,{title:k.formatMessage(s.createPersonalWorkspaceButton),loading:i,onClick:async()=>{c(!0),await v.upsertPersonalWorkspace(),T(B),I()},color:"primary",className:"ml-4"})})]})})]})})}const s=U({workspaceDeactivated:{id:"deactivatedWorkspaceModal.workspaceDeactivated",defaultMessage:"Your workspace has been deactivated"},workspaceDeactivatedDesc:{id:"deactivatedWorkspaceModal.workspaceDeactivatedDesc",defaultMessage:"Your workspace has been deactivated."},chatHistoryUnavailable:{id:"deactivatedWorkspaceModal.chatHistoryUnavailable",defaultMessage:"Your chat history and settings will not be available."},otherWorkspacesAvailable:{id:"deactivatedWorkspaceModal.otherWorkspacesAvailable",defaultMessage:"You will still be able to use ChatGPT with the other workspaces associated with this email address."},selectWorkspace:{id:"deactivatedWorkspaceModal.selectWorkspace",defaultMessage:"Select a workspace to continue"},createPersonalWorkspace:{id:"deactivatedWorkspaceModal.createPersonalWorkspace",defaultMessage:"Create a personal workspace to continue"},deactivatedWorkspaceReason:{id:"deactivatedWorkspaceModal.deactivatedWorkspaceReason",defaultMessage:"Because your workspace has been deactivated, you need to create a personal workspace to continue using ChatGPT."},profileAlt:{id:"deactivatedWorkspaceModal.profileAlt",defaultMessage:"Profile"},createPersonalWorkspaceButton:{id:"deactivatedWorkspaceModal.createPersonalWorkspaceButton",defaultMessage:"Create a personal workspace"},unableToOpenStripeDashboard:{id:"deactivatedWorkspaceModal.unableToOpenStripeDashboard",defaultMessage:"Unable to open Stripe dashboard"},purchaseNewSubscription:{id:"deactivatedWorkspaceModal.purchaseNewSubscription",defaultMessage:"You can reactivate your workspace by purchasing a new subscription."},purchaseNewSubscriptionButton:{id:"deactivatedWorkspaceModal.purchaseNewSubscriptionButton",defaultMessage:"Purchase subscription"},resolveOutstandingInvoice:{id:"deactivatedWorkspaceModal.resolveOutstandingInvoice",defaultMessage:"You can reactivate your workspace by resolving an outstanding invoice on your subscription."},manageSubscriptionButton:{id:"deactivatedWorkspaceModal.manageSubscriptionButton",defaultMessage:"Manage subscription"}});function se(){const o=b(g.workspaces),a=j(),d=b(g.workspaceId),r=o.find(c=>c.id===d),i=R();return m.useEffect(()=>{a?.data&&(!r||!r.deactivated)&&i("/")},[a,r,i]),a?.data&&(!r||!r.deactivated)?e.jsx("div",{}):e.jsx(G,{})}export{se as default};
//# sourceMappingURL=k2yn4op0btphyty2.js.map