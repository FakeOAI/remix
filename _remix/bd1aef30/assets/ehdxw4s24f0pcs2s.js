import{a1 as c,l as f,dY as a,a6 as S}from"./gghzs582a65dvm3m.js";import{a as g,T as b,i as h}from"./jjibai5naylf11fy.js";import"./e34jsxd5qw5romn0.js";import"./pd094ob9wacofnvk.js";import"./oumq0lo7vo2u8qdw.js";import"./knl5287dkf7ic29t.js";import"./egu0eqrtgme3ss9j.js";import"./l69acfj4t0bghaz3.js";import"./ljnuyiuz0czms6ve.js";import"./ke4wseue2s3xar0a.js";import"./inxv3p5hyolpb7jk.js";import"./h6nboy9daks7d3l6.js";import"./ezmptwrca6wtpbet.js";import"./hxxw62av1uep63qt.js";import"./mjaocuyfmbcvmeq2.js";import"./l1ucg8fno55vfzot.js";import"./eca8j1i3jpdssmzb.js";const T=.75;function W({messages:s}){const l=c(),[i,e]=s,t=M(i,e);let n=g.Running,o=d.creatingPlan,r;switch(t.status){case"running":t.numTotalSubAgents>0&&t.numCompletedSubAgents/t.numTotalSubAgents>=T?o=d.almostDone:(o=d.running,r={numTasks:t.numTotalSubAgents});break;case"done":n=g.Finished,o=void 0;break;case"stopped":n=g.Stopped,o=d.cancelled;break}const u=o?l.formatMessage(o,r):null;return f.jsx(b,{highlightedCommand:u,status:n,showWorkUserSetting:!1})}function M(s,l){var r,u,p,m;const i=((u=(r=l==null?void 0:l.message.metadata)==null?void 0:r.parallel_browse)==null?void 0:u.frontend_info.sub_agent_infos)??((m=(p=s.message.metadata)==null?void 0:p.parallel_browse)==null?void 0:m.frontend_info.sub_agent_infos);let e,t=0,n=0;i!=null&&(e=_(i),t=e.length,n=e.filter(k).length);let o="planning";return h(s.message)?o="stopped":l!=null&&(o=n===t?"done":"running"),{status:o,subAgentInfos:e,numTotalSubAgents:t,numCompletedSubAgents:n}}function _(s){const l=Object.values(s).reduce((e,t)=>{const n=t.task_index;return e[n]==null&&(e[n]=[]),e[n].push(t),e},{});return Object.values(l).map(e=>({...e[0],status:A(e)})).sort((e,t)=>e.task_index-t.task_index)}function A(s){const l=s.map(e=>e.status),i=[a.Starting,a.Running,a.Done,a.Error,a.Timeout,a.Cancelled];for(const e of i)if(l.some(t=>t===e))return e;return a.Starting}function k(s){return s.status===a.Done||s.status===a.Timeout||s.status===a.Error||s.status===a.Cancelled}const d=S({creatingPlan:{id:"parallelBrowsingMessage.creatingPlanV2",defaultMessage:"Making a research plan"},running:{id:"parallelBrowsingMessage.running_2",defaultMessage:"Visiting {numTasks, plural, one {# site} other {# sites}}"},almostDone:{id:"parallelBrowsingMessage.almostDone",defaultMessage:"Almost done"},cancelled:{id:"parallelBrowsingMessage.cancelledV2",defaultMessage:"Stopped doing research"},done:{id:"parallelBrowsingMessage.done",defaultMessage:"Finished research"}});export{W as default};
//# sourceMappingURL=ehdxw4s24f0pcs2s.js.map