import{$ as j,aW as y,r as m,a0 as A,al as C,y as e,bs as O,bt as D,ae as t,bJ as p,N as x,e9 as I,bQ as T,ea as B,a1 as U,be as E}from"./ornmk1um6pytkf56.js";import{an as R,ce as _,cf as Y,cg as z,ch as H,ci as v,cj as b,ck as g}from"./fl6q9z66k3fbh83y.js";import{U as L}from"./h9d8gf8zabmyld3j.js";import{u as F}from"./d8sjg49twkp74c2n.js";import"./gyt8ikkud27lp54m.js";import"./gtkn2sln66iaqe9r.js";import"./c8zxz05g6fozv2d6.js";import"./lb77108t2pd7cmgz.js";import"./iolwngj4r86yp6qr.js";import"./cvtp1jqp0nbvrq61.js";function G(){const o=R(),a=j(),{data:d}=y(),r=a!=null||d!=null,[i,c]=m.useState(!1),h=d?.accountItems,f=F(a?.id??""),w=a?.id,l=h?.find(n=>n.id===w),M=a?.isOwnerOfAccount()&&a.isTeam()&&!a.hasPaidSubscription(),W=a?.isOwnerOfAccount()&&a.isTeam()&&a.hasPaidSubscription(),u=h?.filter(n=>!n.isDeactivated()),k=A(),N=C(),S=m.useCallback(()=>{c(!0),L.setPurchaseWorkspaceData({minimumSeats:Math.max(f,_),existingAccount:l}),c(!1)},[f,l]),P=async()=>{c(!0);try{const n=await x.fetchCustomerPortalUrl();location.href=n.url,c(!1)}catch{c(!1),N.warning(k.formatMessage(s.unableToOpenStripeDashboard),{hasCloseButton:!0})}};return a==null||!l||!u?e.jsx(e.Fragment,{}):e.jsx(O,{type:"success",onClose:D,isOpen:r,title:e.jsx("span",{className:"text-lg",children:e.jsx(t,{...s.workspaceDeactivated})}),children:e.jsxs("div",{className:"flex flex-col items-center justify-center gap-4",children:[e.jsxs("div",{className:"flex w-full items-center gap-4",children:[e.jsx(Y,{src:l.data.profilePictureUrl,size:"large"}),e.jsx("div",{className:"font-semibold",children:l.data.name})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-base font-bold",children:e.jsx(t,{...s.workspaceDeactivated})}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{className:"mb-1",children:e.jsx(t,{...s.chatHistoryUnavailable})}),e.jsx("li",{children:e.jsx(t,{...s.otherWorkspacesAvailable})})]})]}),M&&e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("p",{children:e.jsx(t,{...s.purchaseNewSubscription})}),e.jsx(p,{className:"m-auto mt-2 w-full",loading:i,onClick:S,children:e.jsx(t,{...s.purchaseNewSubscriptionButton})})]}),W&&e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("p",{children:e.jsx(t,{...s.resolveOutstandingInvoice})}),e.jsx(p,{className:"m-auto mt-2 w-full",loading:i,onClick:P,children:e.jsx(t,{...s.manageSubscriptionButton})})]}),e.jsx(z,{}),e.jsx("div",{className:"w-full justify-center",children:u.length>0?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"mb-2 text-base font-bold",children:e.jsx(t,{...s.selectWorkspace})}),e.jsx(H,{data:u})]}):e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-base font-bold",children:e.jsx(t,{...s.createPersonalWorkspace})}),e.jsx(t,{...s.deactivatedWorkspaceReason})]}),e.jsxs("div",{className:"flex w-full items-center gap-4",children:[o&&o.picture&&e.jsx("img",{alt:"Profile",src:o.picture,width:v.workspaceMedium,height:v.workspaceMedium,className:"flex items-center justify-center rounded-sm"}),e.jsx("span",{className:"font-semibold",children:o&&e.jsx("span",{children:o.name})})]}),e.jsx("div",{className:"ml-auto",children:e.jsx(p,{title:k.formatMessage(s.createPersonalWorkspaceButton),loading:i,onClick:async()=>{c(!0),await x.upsertPersonalWorkspace(),I(B),T()},color:"primary",className:"ml-4"})})]})})]})})}const s=U({workspaceDeactivated:{id:"deactivatedWorkspaceModal.workspaceDeactivated",defaultMessage:"Your workspace has been deactivated"},workspaceDeactivatedDesc:{id:"deactivatedWorkspaceModal.workspaceDeactivatedDesc",defaultMessage:"Your workspace has been deactivated."},chatHistoryUnavailable:{id:"deactivatedWorkspaceModal.chatHistoryUnavailable",defaultMessage:"Your chat history and settings will not be available."},otherWorkspacesAvailable:{id:"deactivatedWorkspaceModal.otherWorkspacesAvailable",defaultMessage:"You will still be able to use ChatGPT with the other workspaces associated with this email address."},selectWorkspace:{id:"deactivatedWorkspaceModal.selectWorkspace",defaultMessage:"Select a workspace to continue"},createPersonalWorkspace:{id:"deactivatedWorkspaceModal.createPersonalWorkspace",defaultMessage:"Create a personal workspace to continue"},deactivatedWorkspaceReason:{id:"deactivatedWorkspaceModal.deactivatedWorkspaceReason",defaultMessage:"Because your workspace has been deactivated, you need to create a personal workspace to continue using ChatGPT."},profileAlt:{id:"deactivatedWorkspaceModal.profileAlt",defaultMessage:"Profile"},createPersonalWorkspaceButton:{id:"deactivatedWorkspaceModal.createPersonalWorkspaceButton",defaultMessage:"Create a personal workspace"},unableToOpenStripeDashboard:{id:"deactivatedWorkspaceModal.unableToOpenStripeDashboard",defaultMessage:"Unable to open Stripe dashboard"},purchaseNewSubscription:{id:"deactivatedWorkspaceModal.purchaseNewSubscription",defaultMessage:"You can reactivate your workspace by purchasing a new subscription."},purchaseNewSubscriptionButton:{id:"deactivatedWorkspaceModal.purchaseNewSubscriptionButton",defaultMessage:"Purchase subscription"},resolveOutstandingInvoice:{id:"deactivatedWorkspaceModal.resolveOutstandingInvoice",defaultMessage:"You can reactivate your workspace by resolving an outstanding invoice on your subscription."},manageSubscriptionButton:{id:"deactivatedWorkspaceModal.manageSubscriptionButton",defaultMessage:"Manage subscription"}});function se(){const o=b(g.workspaces),a=j(),d=b(g.workspaceId),r=o.find(c=>c.id===d),i=E();return m.useEffect(()=>{a?.data&&(!r||!r.deactivated)&&i("/")},[a,r,i]),a?.data&&(!r||!r.deactivated)?e.jsx("div",{}):e.jsx(G,{})}export{se as default};
//# sourceMappingURL=op9avyycv6zlj7rl.js.map