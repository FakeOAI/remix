import{a9 as o,a0 as c,y as e,u as j,ae as l,a1 as v,N as w,az as L,r as m}from"./mmal6p4kl22zfrfg.js";import{cD as A}from"./i8crxwujeo3n60om.js";import{C as M,a as C,L as W,P as _,B as P,p as U,b as N,c as D,d as T}from"./d6ddmg1fz8o9f372.js";import{a as V,b as S,u as q,c as R}from"./k1tjrpntvfmpnowq.js";import"./esia9ah6q4vsupvt.js";import"./djrjzoma5dxlbo01.js";import"./jyusxtzzgs4ihqfz.js";import"./lwk11n9qbjlycof7.js";import"./a44b3m5ml1mx5nn4.js";import"./pbffjd4sant9qggz.js";import"./f5g3yf6rejksa6rn.js";import"./k7hb5o3308fwzisv.js";import"./iziiga9sc3emkx6a.js";import"./ewaqnxa4l26dslc9.js";import"./meoz9lbdxu4dt41d.js";import"./k88ys7sf9o5flgyw.js";import"./lcjgntdwka0pcoze.js";import"./bmhn0o3is180q73k.js";import"./m8lgth2hdwftjzpg.js";import"./mw4mmmapv415l2ql.js";import"./otbog8ic1x0jilh3.js";import"./fhhsgn4hg6gpu4zs.js";import"./j1s7boayhv0dkxht.js";import"./nwj1vq1qra0xgp2r.js";M.register(C,W,_,P,U,N,D);async function B({queryKey:[s,{workspaceId:t}]}){return w.getWorkspaceAnalytics(t)}function E(s){return j({queryKey:["workspace-analytics",{workspaceId:s}],queryFn:B})}function F(s){const t=getComputedStyle(document.body);return{animation:!1,scales:{y:{position:"right",beginAtZero:!0,ticks:{stepSize:3,color:t.getPropertyValue("--text-tertiary"),padding:12},grid:{tickLength:0,color:t.getPropertyValue("--border-medium")},border:{display:!1}},x:{grid:{display:!1},ticks:{color:t.getPropertyValue("--text-tertiary"),padding:20}}},plugins:{legend:!1,tooltip:{backgroundColor:t.getPropertyValue("--surface-primary"),titleColor:t.getPropertyValue("--text-primary"),bodyColor:t.getPropertyValue("--text-secondary"),displayColors:!1,padding:{top:8,left:8,right:8,bottom:8}}}}}function g({data:s,label:t,getWeekValue:r}){const i=c(),d=L().theme,k=m.useMemo(()=>F(),[d]),h=m.useMemo(()=>getComputedStyle(document.body).getPropertyValue("--text-secondary"),[d]),b={labels:s.weekly_data.map(u=>i.formatDate(u.week,{month:"numeric",day:"numeric"})),datasets:[{label:t,data:s.weekly_data.map(r),borderWidth:0,backgroundColor:h,barThickness:20}]};return e.jsx("div",{className:"flex h-full w-full items-center justify-center bg-token-main-surface-secondary p-4",children:e.jsx(T,{options:k,data:b,height:192})})}function n({label:s,value:t}){return e.jsxs("div",{className:"w-1/3 rounded bg-token-main-surface-secondary px-4 py-2",children:[e.jsx("label",{className:"text-sm text-token-text-secondary",children:s}),e.jsx("div",{className:"text-xl font-semibold text-token-text-primary",children:t})]})}function z({data:s}){const t=c(),r=s.weekly_data[s.weekly_data.length-2];return e.jsxs("div",{className:"mt-10",children:[e.jsx("div",{className:"mb-2 font-semibold text-token-text-primary",children:e.jsx(l,{...a.totals})}),e.jsxs("div",{className:"mb-16 flex gap-4",children:[e.jsx(n,{label:t.formatMessage(a.usersLabel),value:s.total_users}),e.jsx(n,{label:t.formatMessage(a.conversationsLabel),value:s.total_conversations}),e.jsx(n,{label:t.formatMessage(a.messagesLabel),value:s.total_messages})]}),e.jsxs(p,{children:[e.jsx("div",{className:"flex flex-col justify-between p-4",children:e.jsxs("div",{children:[e.jsx(y,{children:e.jsx(l,{...a.usageTitle})}),r!=null&&e.jsxs("div",{children:[e.jsx(x,{children:r.message_count}),e.jsx(f,{children:e.jsx(l,{...a.messagesLastWeek})})]})]})}),e.jsx("div",{children:e.jsx(g,{data:s,label:t.formatMessage(a.messagesChartLabel),getWeekValue:i=>i.message_count})})]}),e.jsxs(p,{children:[e.jsx("div",{children:e.jsx(g,{data:s,label:t.formatMessage(a.activeUsersChartLabel),getWeekValue:i=>i.active_users_count})}),e.jsx("div",{className:"flex grow flex-col justify-between p-4",children:e.jsxs("div",{children:[e.jsx(y,{children:e.jsx(l,{...a.weeklyUsersTitle})}),r!=null&&e.jsxs("div",{children:[e.jsx(x,{children:r.active_users_count}),e.jsx(f,{children:e.jsx(l,{...a.activeUsersLastWeek})})]})]})})]})]})}const p=o.div`mb-12 grid grid-cols-1 rounded-lg overflow-hidden border border-token-border-light sm:grid-cols-2`,y=o.div`font-semibold`,x=o.div`font-semibold text-3xl`,f=o.div`text-sm text-token-text-tertiary`;function H({currentWorkspaceId:s}){const t=c(),{data:r,isLoading:i}=E(s);return e.jsxs(e.Fragment,{children:[e.jsx(A,{children:e.jsx("title",{children:t.formatMessage(a.title)})}),e.jsx(V,{title:t.formatMessage(a.title),subtitle:t.formatMessage(a.pageDescription)}),e.jsx(S,{showSpinner:i,children:r!==void 0?e.jsx(z,{data:r}):null})]})}const a=v({title:{id:"workspaceAnalytics.title",defaultMessage:"Workspace Analytics"},pageDescription:{id:"workspaceAnalytics.understand",defaultMessage:"Understand how your workspace is using ChatGPT"},totals:{id:"workspaceAnalytics.totals",defaultMessage:"Totals over last 30 days"},usersLabel:{id:"workspaceAnalytics.usersLabel",defaultMessage:"Users"},conversationsLabel:{id:"workspaceAnalytics.conversationsLabel",defaultMessage:"Conversations"},messagesLabel:{id:"workspaceAnalytics.messagesLabel",defaultMessage:"Messages"},usageTitle:{id:"workspaceAnalytics.usageTitle",defaultMessage:"Usage"},messagesLastWeek:{id:"workspaceAnalytics.messagesLastWeek",defaultMessage:"Messages processed last week"},messagesLast30Days:{id:"workspaceAnalytics.messagesLast30Days",defaultMessage:"{count, plural, =0 {No messages} one {# message} other {# messages}} processed over last 30 days"},messagesChartLabel:{id:"workspaceAnalytics.messagesChartLabel",defaultMessage:"Messages"},weeklyUsersTitle:{id:"workspaceAnalytics.weeklyUsersTitle",defaultMessage:"Weekly users"},activeUsersChartLabel:{id:"workspaceAnalytics.activeUsersChartLabel",defaultMessage:"Active users"},activeUsersLastWeek:{id:"workspaceAnalytics.activeUsersLastWeek",defaultMessage:"Active users last week"},usersLast30Days:{id:"workspaceAnalytics.usersLast30Days",defaultMessage:"{count, plural, =0 {No active users} one {# active user} other {# active user}} over last 30 days"}});function K(s){return e.jsx(H,{...s})}function ye(){const s=q();return R(),e.jsx(K,{...s})}export{ye as default};
//# sourceMappingURL=io11nkwuqo3fhjtj.js.map