import{a2 as o,W as c,l as e,u as j,a0 as i,a1 as v,j as w,b2 as L,r as m}from"./ba3fwhhjky1m504d.js";import{C as A,a as M,L as W,P as C,B as _,p as P,b as U,c as N,d as D}from"./cew7rejcjywhpt6f.js";import{a as T,b as V}from"./g5pfm6t2rxyzvyxn.js";import{u as S,a as q}from"./isrs0e5ri7cvxlck.js";import"./coje7kavm1uon508.js";import"./dnytedm08a8h3kff.js";import"./lyb3ci4ijnk33nee.js";import"./xk1khcqko3d1xkda.js";import"./ki1aj4gxymfaf44u.js";import"./nvd0p58sqo8se13g.js";import"./g52hzks2nta4ac14.js";import"./otuwydvkdmp4y2yq.js";import"./mkr022iftw3wwuj4.js";import"./kileugwiqaznkasc.js";import"./gs03avpm9nltligy.js";import"./krod5frvipe04kg4.js";import"./owypimcz1m9168ws.js";import"./ddilj5vy98nadyxu.js";import"./o5t9feso6k9lkdme.js";import"./oyi5pr6nen0zz0pu.js";A.register(M,W,C,_,P,U,N);async function R({queryKey:[s,{workspaceId:t}]}){return w.getWorkspaceAnalytics(t)}function B(s){return j({queryKey:["workspace-analytics",{workspaceId:s}],queryFn:R})}function E(s){const t=getComputedStyle(document.body);return{animation:!1,scales:{y:{position:"right",beginAtZero:!0,ticks:{stepSize:3,color:t.getPropertyValue("--text-tertiary"),padding:12},grid:{tickLength:0,color:t.getPropertyValue("--border-medium")},border:{display:!1}},x:{grid:{display:!1},ticks:{color:t.getPropertyValue("--text-tertiary"),padding:20}}},plugins:{legend:!1,tooltip:{backgroundColor:t.getPropertyValue("--surface-primary"),titleColor:t.getPropertyValue("--text-primary"),bodyColor:t.getPropertyValue("--text-secondary"),displayColors:!1,padding:{top:8,left:8,right:8,bottom:8}}}}}function g({data:s,label:t,getWeekValue:r}){const l=c(),d=L().theme,k=m.useMemo(()=>E(),[d]),b=m.useMemo(()=>getComputedStyle(document.body).getPropertyValue("--text-secondary"),[d]),h={labels:s.weekly_data.map(u=>l.formatDate(u.week,{month:"numeric",day:"numeric"})),datasets:[{label:t,data:s.weekly_data.map(r),borderWidth:0,backgroundColor:b,barThickness:20}]};return e.jsx("div",{className:"flex h-full w-full items-center justify-center bg-token-main-surface-secondary p-4",children:e.jsx(D,{options:k,data:h,height:192})})}function n({label:s,value:t}){return e.jsxs("div",{className:"w-1/3 rounded bg-token-main-surface-secondary px-4 py-2",children:[e.jsx("label",{className:"text-sm text-token-text-secondary",children:s}),e.jsx("div",{className:"text-xl font-semibold text-token-text-primary",children:t})]})}function F({data:s}){const t=c(),r=s.weekly_data[s.weekly_data.length-2];return e.jsxs("div",{className:"mt-10",children:[e.jsx("div",{className:"mb-2 font-semibold text-token-text-primary",children:e.jsx(i,{...a.totals})}),e.jsxs("div",{className:"mb-16 flex gap-4",children:[e.jsx(n,{label:t.formatMessage(a.usersLabel),value:s.total_users}),e.jsx(n,{label:t.formatMessage(a.conversationsLabel),value:s.total_conversations}),e.jsx(n,{label:t.formatMessage(a.messagesLabel),value:s.total_messages})]}),e.jsxs(p,{children:[e.jsx("div",{className:"flex flex-col justify-between p-4",children:e.jsxs("div",{children:[e.jsx(y,{children:e.jsx(i,{...a.usageTitle})}),r!=null&&e.jsxs("div",{children:[e.jsx(x,{children:r.message_count}),e.jsx(f,{children:e.jsx(i,{...a.messagesLastWeek})})]})]})}),e.jsx("div",{children:e.jsx(g,{data:s,label:t.formatMessage(a.messagesChartLabel),getWeekValue:l=>l.message_count})})]}),e.jsxs(p,{children:[e.jsx("div",{children:e.jsx(g,{data:s,label:t.formatMessage(a.activeUsersChartLabel),getWeekValue:l=>l.active_users_count})}),e.jsx("div",{className:"flex grow flex-col justify-between p-4",children:e.jsxs("div",{children:[e.jsx(y,{children:e.jsx(i,{...a.weeklyUsersTitle})}),r!=null&&e.jsxs("div",{children:[e.jsx(x,{children:r.active_users_count}),e.jsx(f,{children:e.jsx(i,{...a.activeUsersLastWeek})})]})]})})]})]})}const p=o.div`mb-12 grid grid-cols-1 rounded-lg overflow-hidden border border-token-border-light sm:grid-cols-2`,y=o.div`font-semibold`,x=o.div`font-semibold text-3xl`,f=o.div`text-sm text-token-text-tertiary`;function z({currentWorkspaceId:s}){const t=c(),{data:r,isLoading:l}=B(s);return e.jsxs(e.Fragment,{children:[e.jsx("title",{children:t.formatMessage(a.title)}),e.jsx(T,{title:t.formatMessage(a.title),subtitle:t.formatMessage(a.pageDescription)}),e.jsx(V,{showSpinner:l,children:r!==void 0?e.jsx(F,{data:r}):null})]})}const a=v({title:{id:"workspaceAnalytics.title",defaultMessage:"Workspace Analytics"},pageDescription:{id:"workspaceAnalytics.understand",defaultMessage:"Understand how your workspace is using ChatGPT"},totals:{id:"workspaceAnalytics.totals",defaultMessage:"Totals over last 30 days"},usersLabel:{id:"workspaceAnalytics.usersLabel",defaultMessage:"Users"},conversationsLabel:{id:"workspaceAnalytics.conversationsLabel",defaultMessage:"Conversations"},messagesLabel:{id:"workspaceAnalytics.messagesLabel",defaultMessage:"Messages"},usageTitle:{id:"workspaceAnalytics.usageTitle",defaultMessage:"Usage"},messagesLastWeek:{id:"workspaceAnalytics.messagesLastWeek",defaultMessage:"Messages processed last week"},messagesLast30Days:{id:"workspaceAnalytics.messagesLast30Days",defaultMessage:"{count, plural, =0 {No messages} one {# message} other {# messages}} processed over last 30 days"},messagesChartLabel:{id:"workspaceAnalytics.messagesChartLabel",defaultMessage:"Messages"},weeklyUsersTitle:{id:"workspaceAnalytics.weeklyUsersTitle",defaultMessage:"Weekly users"},activeUsersChartLabel:{id:"workspaceAnalytics.activeUsersChartLabel",defaultMessage:"Active users"},activeUsersLastWeek:{id:"workspaceAnalytics.activeUsersLastWeek",defaultMessage:"Active users last week"},usersLast30Days:{id:"workspaceAnalytics.usersLast30Days",defaultMessage:"{count, plural, =0 {No active users} one {# active user} other {# active user}} over last 30 days"}});function K(s){return e.jsx(z,{...s})}function de(){const s=S();return q(),e.jsx(K,{...s})}export{de as default};
//# sourceMappingURL=iwi4sl6ii33l56bw.js.map