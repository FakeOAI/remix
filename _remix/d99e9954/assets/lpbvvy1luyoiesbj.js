import{l as u,r as a}from"./mj0lqn4ze2fljnbl.js";import{g as o}from"./gx7tmjvc4qenanwq.js";import{T as i}from"./ikm7kobp44r0gloh.js";function c({threadId:r,threadUserId:t,refetchOnMount:e}){return u({queryKey:["thread",r,t],queryFn:async()=>{if(!r)return{thread:null,turns:null};const s=await o({threadId:r,threadUserId:t}),n=s.turns;return{thread:s,turns:n}},enabled:!!r,refetchOnMount:e})}function d({threadId:r,threadUserId:t}){const e=c({threadId:r,threadUserId:t??void 0}),s=e.data;return a.useEffect(()=>{r&&i.setThread(r,s?.turns??[])},[r,s]),{query:e.data?.turns[0]?.user_query,refetch:e.refetch,isLoading:e.isLoading,isError:e.isError}}export{c as a,d as u};
//# sourceMappingURL=lpbvvy1luyoiesbj.js.map