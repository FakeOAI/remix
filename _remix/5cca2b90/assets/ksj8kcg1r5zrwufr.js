import{N as o,G as c,j as e,el as j,ao as v,J as i,K as w,F as L,d5 as A,r as m}from"./d5wu36845ofngo69.js";import{C as M,a as C,L as W,P as _,B as P,p as U,b as N,c as D,d as T}from"./f5b1hjj5rrmhblcm.js";import{a as V,b as S}from"./b2ynyw0mhgiid7z4.js";import{u as q,a as F}from"./c7qtu6vh90e1n635.js";import"./obsrc10pp6le96ui.js";import"./dyuy7l4f2wj2f3nf.js";import"./hqtq1up2h84q4q9o.js";import"./k1a2u0e6teg521ch.js";import"./cdvaa0vibgsxrdy8.js";import"./fdjv7ui579wbejth.js";import"./ba4o01ip0fkgh8sg.js";import"./eod5vc095sbcr0ci.js";import"./xrc1m6jio1dd41hc.js";import"./kuhifkvym4x2tzxu.js";import"./crep23egosjffz2q.js";import"./gc2omo1hua62w3ca.js";import"./n0lkfy21uocx7rwn.js";import"./iwzcy1xmsaik6bz7.js";import"./goeaytrlijggs3xb.js";import"./euiw37fu7mjktxcn.js";M.register(C,W,_,P,U,N,D);async function R({queryKey:[s,{workspaceId:t}]}){return L.getWorkspaceAnalytics(t)}function B(s){return v({queryKey:["workspace-analytics",{workspaceId:s}],queryFn:R})}function E(s){const t=getComputedStyle(document.body);return{animation:!1,scales:{y:{position:"right",beginAtZero:!0,ticks:{stepSize:3,color:t.getPropertyValue("--text-tertiary"),padding:12},grid:{tickLength:0,color:t.getPropertyValue("--border-medium")},border:{display:!1}},x:{grid:{display:!1},ticks:{color:t.getPropertyValue("--text-tertiary"),padding:20}}},plugins:{legend:!1,tooltip:{backgroundColor:t.getPropertyValue("--surface-primary"),titleColor:t.getPropertyValue("--text-primary"),bodyColor:t.getPropertyValue("--text-secondary"),displayColors:!1,padding:{top:8,left:8,right:8,bottom:8}}}}}function g({data:s,label:t,getWeekValue:r}){const l=c(),d=A().theme,k=m.useMemo(()=>E(),[d]),h=m.useMemo(()=>getComputedStyle(document.body).getPropertyValue("--text-secondary"),[d]),b={labels:s.weekly_data.map(u=>l.formatDate(u.week,{month:"numeric",day:"numeric"})),datasets:[{label:t,data:s.weekly_data.map(r),borderWidth:0,backgroundColor:h,barThickness:20}]};return e.jsx("div",{className:"flex h-full w-full items-center justify-center bg-token-main-surface-secondary p-4",children:e.jsx(T,{options:k,data:b,height:192})})}function n({label:s,value:t}){return e.jsxs("div",{className:"w-1/3 rounded bg-token-main-surface-secondary px-4 py-2",children:[e.jsx("label",{className:"text-sm text-token-text-secondary",children:s}),e.jsx("div",{className:"text-xl font-semibold text-token-text-primary",children:t})]})}function K({data:s}){const t=c(),r=s.weekly_data[s.weekly_data.length-2];return e.jsxs("div",{className:"mt-10",children:[e.jsx("div",{className:"mb-2 font-semibold text-token-text-primary",children:e.jsx(i,{...a.totals})}),e.jsxs("div",{className:"mb-16 flex gap-4",children:[e.jsx(n,{label:t.formatMessage(a.usersLabel),value:s.total_users}),e.jsx(n,{label:t.formatMessage(a.conversationsLabel),value:s.total_conversations}),e.jsx(n,{label:t.formatMessage(a.messagesLabel),value:s.total_messages})]}),e.jsxs(p,{children:[e.jsx("div",{className:"flex flex-col justify-between p-4",children:e.jsxs("div",{children:[e.jsx(y,{children:e.jsx(i,{...a.usageTitle})}),r!=null&&e.jsxs("div",{children:[e.jsx(x,{children:r.message_count}),e.jsx(f,{children:e.jsx(i,{...a.messagesLastWeek})})]})]})}),e.jsx("div",{children:e.jsx(g,{data:s,label:t.formatMessage(a.messagesChartLabel),getWeekValue:l=>l.message_count})})]}),e.jsxs(p,{children:[e.jsx("div",{children:e.jsx(g,{data:s,label:t.formatMessage(a.activeUsersChartLabel),getWeekValue:l=>l.active_users_count})}),e.jsx("div",{className:"flex grow flex-col justify-between p-4",children:e.jsxs("div",{children:[e.jsx(y,{children:e.jsx(i,{...a.weeklyUsersTitle})}),r!=null&&e.jsxs("div",{children:[e.jsx(x,{children:r.active_users_count}),e.jsx(f,{children:e.jsx(i,{...a.activeUsersLastWeek})})]})]})})]})]})}const p=o.div`mb-12 grid grid-cols-1 rounded-lg overflow-hidden border border-token-border-light sm:grid-cols-2`,y=o.div`font-semibold`,x=o.div`font-semibold text-3xl`,f=o.div`text-sm text-token-text-tertiary`;function z({currentWorkspaceId:s}){const t=c(),{data:r,isLoading:l}=B(s);return e.jsxs(e.Fragment,{children:[e.jsx(j,{children:e.jsx("title",{children:t.formatMessage(a.title)})}),e.jsx(V,{title:t.formatMessage(a.title),subtitle:t.formatMessage(a.pageDescription)}),e.jsx(S,{showSpinner:l,children:r!==void 0?e.jsx(K,{data:r}):null})]})}const a=w({title:{id:"workspaceAnalytics.title",defaultMessage:"Workspace Analytics"},pageDescription:{id:"workspaceAnalytics.understand",defaultMessage:"Understand how your workspace is using ChatGPT"},totals:{id:"workspaceAnalytics.totals",defaultMessage:"Totals over last 30 days"},usersLabel:{id:"workspaceAnalytics.usersLabel",defaultMessage:"Users"},conversationsLabel:{id:"workspaceAnalytics.conversationsLabel",defaultMessage:"Conversations"},messagesLabel:{id:"workspaceAnalytics.messagesLabel",defaultMessage:"Messages"},usageTitle:{id:"workspaceAnalytics.usageTitle",defaultMessage:"Usage"},messagesLastWeek:{id:"workspaceAnalytics.messagesLastWeek",defaultMessage:"Messages processed last week"},messagesLast30Days:{id:"workspaceAnalytics.messagesLast30Days",defaultMessage:"{count, plural, =0 {No messages} one {# message} other {# messages}} processed over last 30 days"},messagesChartLabel:{id:"workspaceAnalytics.messagesChartLabel",defaultMessage:"Messages"},weeklyUsersTitle:{id:"workspaceAnalytics.weeklyUsersTitle",defaultMessage:"Weekly users"},activeUsersChartLabel:{id:"workspaceAnalytics.activeUsersChartLabel",defaultMessage:"Active users"},activeUsersLastWeek:{id:"workspaceAnalytics.activeUsersLastWeek",defaultMessage:"Active users last week"},usersLast30Days:{id:"workspaceAnalytics.usersLast30Days",defaultMessage:"{count, plural, =0 {No active users} one {# active user} other {# active user}} over last 30 days"}});function G(s){return e.jsx(z,{...s})}function ue(){const s=q();return F(),e.jsx(G,{...s})}export{ue as default};
//# sourceMappingURL=ksj8kcg1r5zrwufr.js.map