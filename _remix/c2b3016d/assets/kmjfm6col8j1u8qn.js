import{h as u,r as a}from"./mi4ha5f7fhlqv21j.js";import{h as o,i}from"./jt9rrlbcub4nr1o1.js";function c({threadId:r,threadUserId:n,refetchOnMount:e}){return u({queryKey:["thread",r,n],queryFn:async()=>{if(!r)return{thread:null,turns:null};const s=await i({threadId:r,threadUserId:n}),t=s.turns;return{thread:s,turns:t}},enabled:!!r,refetchOnMount:e})}function h({threadId:r,threadUserId:n}){const e=c({threadId:r,threadUserId:n}),s=e.data;return a.useEffect(()=>{r&&o.setThread(r,s?.turns??[])},[r,s]),{query:e.data?.turns[0]?.user_query,refetch:e.refetch,isLoading:e.isLoading,isError:e.isError}}export{c as a,h as u};
//# sourceMappingURL=kmjfm6col8j1u8qn.js.map