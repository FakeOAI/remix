var c=Object.defineProperty;var i=(a,s,t)=>s in a?c(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t;var e=(a,s,t)=>i(a,typeof s!="symbol"?s+"":s,t);import{cQ as M,c$ as n}from"./bahzwkph2ne3eyls.js";class p extends M()(()=>({statusMap:{}})){constructor(){super(...arguments);e(this,"setStatusMap",t=>{this.setState({statusMap:t})});e(this,"setConversationStatus",(t,u)=>{this.setState(r=>({statusMap:{...r.statusMap,[t]:u}}))})}}e(p,"selectStatusMap",t=>t),e(p,"selectConversationStatus",t=>u=>t.statusMap[u]),e(p,"hasUnreadConversations",t=>Object.values(t.statusMap).some(u=>u===n.FINISHED));export{p as C};
//# sourceMappingURL=osuivvpe1e4iu4av.js.map