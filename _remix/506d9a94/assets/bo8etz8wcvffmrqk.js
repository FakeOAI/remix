import{u,r as a}from"./dowr76ygy9ekiejb.js";import{k as o,l as i}from"./d29iiuqq6mahovze.js";function c({threadId:r,threadUserId:t,refetchOnMount:e}){return u({queryKey:["thread",r,t],queryFn:async()=>{if(!r)return{thread:null,turns:null};const s=await i({threadId:r,threadUserId:t}),n=s.turns;return{thread:s,turns:n}},enabled:!!r,refetchOnMount:e})}function d({threadId:r,threadUserId:t}){const e=c({threadId:r,threadUserId:t??void 0}),s=e.data;return a.useEffect(()=>{r&&o.setThread(r,s?.turns??[])},[r,s]),{query:e.data?.turns[0]?.user_query,refetch:e.refetch,isLoading:e.isLoading,isError:e.isError}}export{c as a,d as u};
//# sourceMappingURL=bo8etz8wcvffmrqk.js.map