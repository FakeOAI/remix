import{ag as d,X as p,a9 as y,j as o,l as r,u,h as s,a6 as b}from"./flidd11gv2mtd3pr.js";function l(n){const t=p(),i=y();return o({queryKey:["organization-subscription",n],queryFn:async()=>await r.getSubscription(n).catch(e=>{i.danger(t.formatMessage(g.subscriptionLoadError,{error:e.message}))}),enabled:n.account_id!=null||n.organization_id!=null})}function q(){const n=d(),t=n?.id,i=n?.data.organizationId??void 0,e=n?.isEnterprisey();return l(e?{organization_id:i}:{account_id:t})}function f(n,t,i){return o({queryKey:["get-subscription-update-preview",t],queryFn:async()=>await r.getSubscriptionUpdatePreview(n,i,t)})}function z(n){const t=u();return s({mutationFn:async i=>r.cancelSubscription(i),onSuccess:()=>{t.invalidateQueries({queryKey:["organization-subscription",{account_id:n}]}),t.invalidateQueries({queryKey:["account-status"]})}})}function v(n){const t=u();return s({mutationFn:async i=>r.renewSubscription(i),onSuccess:()=>{t.invalidateQueries({queryKey:["organization-subscription",{account_id:n}]})}})}function w(n){const t=u();return s({mutationFn:({accountId:i,updatedPlan:e,updatedSeats:a,updatedPriceInterval:c})=>r.updateSubscription(i,e,a,c),onSuccess:()=>{t.invalidateQueries({queryKey:["organization-subscription",{account_id:n}]})}})}const g=b({subscriptionLoadError:{id:"useSubscriptionData.subscriptionLoadError",defaultMessage:"Failed to load subscription: {error}. Contact support@openai.com if error persists."}});export{f as a,v as b,q as c,z as d,w as u};
//# sourceMappingURL=hvweoiki9q8t0cje.js.map