import{an as a,r as o}from"./hwf9zvd1aw2q6bni.js";import{W as i,X as c}from"./gcq6nq5ilw3cni50.js";function f({threadId:r,threadUserId:n,refetchOnMount:e}){return a({queryKey:["thread",r,n],queryFn:async()=>{if(!r)return{thread:null,turns:null};const s=await c({threadId:r,threadUserId:n}),t=s.turns;return{thread:s,turns:t}},enabled:!!r,refetchOnMount:e})}function T({threadId:r,threadUserId:n}){var t,u;const e=f({threadId:r,threadUserId:n}),s=e.data;return o.useEffect(()=>{r&&i.setThread(r,(s==null?void 0:s.turns)??[])},[r,s]),{query:(u=(t=e.data)==null?void 0:t.turns[0])==null?void 0:u.user_query,refetch:e.refetch,isLoading:e.isLoading,isError:e.isError}}export{f as a,T as u};
//# sourceMappingURL=dqoeogg3yjw041er.js.map