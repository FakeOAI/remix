import{an as j,aE as y,r as m,S as w,D as A,j as e,E as D,F as O,G as t,aD as h,C as k,ee as B,aK as I,a2 as T,ef as E,H as U}from"./bi9nzlakut336dzw.js";import{a0 as R,U as _,cw as Y,cx as z,cy as H,cz as F,cA as v,cB as g,cC as b}from"./nbtnwh422004o6rf.js";import{u as L}from"./is6wy6v1tf98yunn.js";import"./o3o45rugqi7ysa5o.js";import"./lp7c78wpenuxxb63.js";import"./96zvt5ovgo7sipxv.js";function G(){const c=R(),a=j(),{data:i}=y(),r=a!=null||i!=null,[l,o]=m.useState(!1),M=w(),n=i==null?void 0:i.accountItems,f=L((a==null?void 0:a.id)??""),W=a==null?void 0:a.id,u=n==null?void 0:n.find(d=>d.id===W),N=(a==null?void 0:a.isOwnerOfAccount())&&a.isTeam()&&!a.hasPaidSubscription(),S=(a==null?void 0:a.isOwnerOfAccount())&&a.isTeam()&&a.hasPaidSubscription(),p=n==null?void 0:n.filter(d=>!d.isDeactivated()),x=A(),P=m.useCallback(()=>{o(!0),_.setPurchaseWorkspaceData({minimumSeats:Math.max(f,Y),existingAccount:u}),o(!1)},[f,u]),C=async()=>{o(!0);try{const d=await k.fetchCustomerPortalUrl();M.push(d.url),o(!1)}catch{o(!1),T.warning(x.formatMessage(s.unableToOpenStripeDashboard),{hasCloseButton:!0})}};return a==null||!u||!p?e.jsx(e.Fragment,{}):e.jsx(D,{type:"success",onClose:O,isOpen:r,title:e.jsx("span",{className:"text-lg",children:e.jsx(t,{...s.workspaceDeactivated})}),children:e.jsxs("div",{className:"flex flex-col items-center justify-center gap-4",children:[e.jsxs("div",{className:"flex w-full items-center gap-4",children:[e.jsx(z,{src:u.data.profilePictureUrl,size:"large"}),e.jsx("div",{className:"font-semibold",children:u.data.name})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-base font-bold",children:e.jsx(t,{...s.workspaceDeactivated})}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{className:"mb-1",children:e.jsx(t,{...s.chatHistoryUnavailable})}),e.jsx("li",{children:e.jsx(t,{...s.otherWorkspacesAvailable})})]})]}),N&&e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("p",{children:e.jsx(t,{...s.purchaseNewSubscription})}),e.jsx(h,{className:"m-auto mt-2 w-full",loading:l,onClick:P,children:e.jsx(t,{...s.purchaseNewSubscriptionButton})})]}),S&&e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("p",{children:e.jsx(t,{...s.resolveOutstandingInvoice})}),e.jsx(h,{className:"m-auto mt-2 w-full",loading:l,onClick:C,children:e.jsx(t,{...s.manageSubscriptionButton})})]}),e.jsx(H,{}),e.jsx("div",{className:"w-full justify-center",children:p.length>0?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"mb-2 text-base font-bold",children:e.jsx(t,{...s.selectWorkspace})}),e.jsx(F,{data:p})]}):e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-base font-bold",children:e.jsx(t,{...s.createPersonalWorkspace})}),e.jsx(t,{...s.deactivatedWorkspaceReason})]}),e.jsxs("div",{className:"flex w-full items-center gap-4",children:[c&&c.picture&&e.jsx("img",{alt:"Profile",src:c.picture,width:v.workspaceMedium,height:v.workspaceMedium,className:"flex items-center justify-center rounded-sm"}),e.jsx("span",{className:"font-semibold",children:c&&e.jsx("span",{children:c.name})})]}),e.jsx("div",{className:"ml-auto",children:e.jsx(h,{title:x.formatMessage(s.createPersonalWorkspaceButton),loading:l,onClick:async()=>{o(!0),await k.upsertPersonalWorkspace(),B(E),I()},color:"primary",className:"ml-4"})})]})})]})})}const s=U({workspaceDeactivated:{id:"deactivatedWorkspaceModal.workspaceDeactivated",defaultMessage:"Your workspace has been deactivated"},workspaceDeactivatedDesc:{id:"deactivatedWorkspaceModal.workspaceDeactivatedDesc",defaultMessage:"Your workspace has been deactivated."},chatHistoryUnavailable:{id:"deactivatedWorkspaceModal.chatHistoryUnavailable",defaultMessage:"Your chat history and settings will not be available."},otherWorkspacesAvailable:{id:"deactivatedWorkspaceModal.otherWorkspacesAvailable",defaultMessage:"You will still be able to use ChatGPT with the other workspaces associated with this email address."},selectWorkspace:{id:"deactivatedWorkspaceModal.selectWorkspace",defaultMessage:"Select a workspace to continue"},createPersonalWorkspace:{id:"deactivatedWorkspaceModal.createPersonalWorkspace",defaultMessage:"Create a personal workspace to continue"},deactivatedWorkspaceReason:{id:"deactivatedWorkspaceModal.deactivatedWorkspaceReason",defaultMessage:"Because your workspace has been deactivated, you need to create a personal workspace to continue using ChatGPT."},profileAlt:{id:"deactivatedWorkspaceModal.profileAlt",defaultMessage:"Profile"},createPersonalWorkspaceButton:{id:"deactivatedWorkspaceModal.createPersonalWorkspaceButton",defaultMessage:"Create a personal workspace"},unableToOpenStripeDashboard:{id:"deactivatedWorkspaceModal.unableToOpenStripeDashboard",defaultMessage:"Unable to open Stripe dashboard"},purchaseNewSubscription:{id:"deactivatedWorkspaceModal.purchaseNewSubscription",defaultMessage:"You can reactivate your workspace by purchasing a new subscription."},purchaseNewSubscriptionButton:{id:"deactivatedWorkspaceModal.purchaseNewSubscriptionButton",defaultMessage:"Purchase subscription"},resolveOutstandingInvoice:{id:"deactivatedWorkspaceModal.resolveOutstandingInvoice",defaultMessage:"You can reactivate your workspace by resolving an outstanding invoice on your subscription."},manageSubscriptionButton:{id:"deactivatedWorkspaceModal.manageSubscriptionButton",defaultMessage:"Manage subscription"}});function K(){const c=g(b.workspaces),a=j(),i=g(b.workspaceId),r=c.find(o=>o.id===i),l=w();return m.useEffect(()=>{a!=null&&a.data&&(!r||!r.deactivated)&&l.push("/")},[a,r,l]),a!=null&&a.data&&(!r||!r.deactivated)?e.jsx("div",{}):e.jsx(G,{})}function $(){return e.jsx(K,{})}export{$ as default};
//# sourceMappingURL=oonx8482nlw2z51g.js.map