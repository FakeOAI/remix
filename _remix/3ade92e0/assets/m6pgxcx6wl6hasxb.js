import{N as u,r as a}from"./jipkz7wahhvzzuqx.js";import{m as o,n as i}from"./e6zhtx99a7i1g9zc.js";function c({threadId:r,threadUserId:n,refetchOnMount:e}){return u({queryKey:["thread",r,n],queryFn:async()=>{if(!r)return{thread:null,turns:null};const s=await i({threadId:r,threadUserId:n}),t=s.turns;return{thread:s,turns:t}},enabled:!!r,refetchOnMount:e})}function d({threadId:r,threadUserId:n}){const e=c({threadId:r,threadUserId:n??void 0}),s=e.data;return a.useEffect(()=>{r&&o.setThread(r,s?.turns??[])},[r,s]),{query:e.data?.turns[0]?.user_query,refetch:e.refetch,isLoading:e.isLoading,isError:e.isError}}export{c as a,d as u};
//# sourceMappingURL=m6pgxcx6wl6hasxb.js.map