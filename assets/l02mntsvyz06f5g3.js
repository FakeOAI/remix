import{z as N,cP as E,v as K,cQ as A,E as H,r as y,cR as h,cS as I,R as T}from"./hc9xxm00a3r3byem.js";import{l as D}from"./ozzpumen10p6g0yq.js";const x=function(){var t={defaultValue:null,kind:"LocalArgument",name:"after"},s={defaultValue:null,kind:"LocalArgument",name:"expand"},e={defaultValue:null,kind:"LocalArgument",name:"first"},i={defaultValue:null,kind:"LocalArgument",name:"isArchived"},o={defaultValue:null,kind:"LocalArgument",name:"order"},l={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},u=[{alias:null,args:[{kind:"Variable",name:"after",variableName:"after"},{kind:"Variable",name:"expand",variableName:"expand"},{kind:"Variable",name:"first",variableName:"first"},{kind:"Variable",name:"is_archived",variableName:"isArchived"},{kind:"Variable",name:"order",variableName:"order"}],concreteType:"ConversationDisplayConnection",kind:"LinkedField",name:"conversationDisplayHistory",plural:!1,selections:[{alias:null,args:null,concreteType:"ConversationDisplayEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"ConversationDisplay",kind:"LinkedField",name:"node",plural:!1,selections:[l,{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"updateTime",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"createTime",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"currentNodeId",storageKey:null},{alias:null,args:null,concreteType:"Gizmo",kind:"LinkedField",name:"primaryGizmo",plural:!1,selections:[l],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"asyncStatus",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"startCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasPreviousPage",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[t,s,e,i,o],kind:"Fragment",metadata:null,name:"useConversationHistoryQuery",selections:u,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[e,t,o,s,i],kind:"Operation",name:"useConversationHistoryQuery",selections:u},params:{cacheID:"097c1fc0342383d3ae16a1757d2b9664",id:"5f5770417560c56ba8fa929b84900b53f40cdcc3906d5197003e9ecf7adf3bb7",metadata:{},name:"useConversationHistoryQuery",operationKind:"query",text:`query useConversationHistoryQuery(
  $first: Int
  $after: Cursor
  $order: String
  $expand: Boolean
  $isArchived: Boolean
) {
  conversationDisplayHistory(first: $first, after: $after, order: $order, expand: $expand, is_archived: $isArchived) {
    edges {
      node {
        id
        title
        updateTime
        createTime
        currentNodeId
        primaryGizmo {
          id
        }
        asyncStatus
      }
    }
    pageInfo {
      hasNextPage
      endCursor
      startCursor
      hasPreviousPage
    }
  }
}
`}}}();x.hash="377edfb04902b17f5e9aab4e1df62db0";const C=28,g="conversationHistory";function Q(){const t=N(),s=(t==null?void 0:t.includes(E))??!1,e=K(),i=!s&&!!(e!=null&&e.data),o=A.useRelayEnvironment(),{value:l}=H("2893406386"),u=L(o,i&&l),c=_(i&&!l),{conversations:n,data:r,fetchNextPage:d,hasNextPage:a,isInitialLoading:m,isFetchingNextPage:S,isError:P}=l?u:c,{setStatusMap:f,getState:p}=D.useStore();return y.useEffect(()=>{if(n.length){const{statusMap:b}=p(),F=n.reduce((v,k)=>(v[k.id]=k.async_status,v),{});f({...F,...b})}},[n,f,p]),{data:r,conversations:n,fetchNextPage:d,hasNextPage:a,isLoading:m,isFetchingNextPage:S,isError:i&&P}}function L(t,s){const{data:e,fetchNextPage:i,hasNextPage:o,isInitialLoading:l,isFetchingNextPage:u,isError:c}=h({queryKey:[g],queryFn:({pageParam:r})=>I.fetchQuery_DEPRECATED(t,R,{after:r,first:C,order:"updated",expand:!1,isArchived:!1}),initialPageParam:"aWR4Oi0x",getNextPageParam:r=>{var d,a;if((d=r.conversationDisplayHistory)!=null&&d.pageInfo.hasNextPage)return(a=r.conversationDisplayHistory)==null?void 0:a.pageInfo.endCursor},enabled:s});return{conversations:y.useMemo(()=>(e==null?void 0:e.pages.flatMap(r=>{var d;return(((d=r.conversationDisplayHistory)==null?void 0:d.edges)??[]).flatMap(a=>{var m;return a!=null&&a.node?[{id:a.node.id,title:a.node.title??"",create_time:a.node.createTime,update_time:a.node.updateTime,conversation_template_id:(m=a.node.primaryGizmo)==null?void 0:m.id,async_status:a.node.asyncStatus}]:[]})}))??[],[e]),data:e,fetchNextPage:i,hasNextPage:o,isInitialLoading:l,isFetchingNextPage:u,isError:c}}function _(t){const{data:s,fetchNextPage:e,hasNextPage:i,isInitialLoading:o,isFetchingNextPage:l,isError:u}=h({queryKey:[g],queryFn:({pageParam:n})=>T.getConversations({offset:n,limit:C}),initialPageParam:0,getNextPageParam:n=>{const r=n.offset+n.limit;return r<n.total?r:void 0},enabled:t});return{conversations:y.useMemo(()=>(s==null?void 0:s.pages.flatMap(n=>n.items))??[],[s]),data:s,fetchNextPage:e,hasNextPage:i,isInitialLoading:o,isFetchingNextPage:l,isError:u}}function $(t){t.invalidateQueries({queryKey:[g]})}const R=x;export{g as C,$ as r,Q as u};
//# sourceMappingURL=l02mntsvyz06f5g3.js.map
