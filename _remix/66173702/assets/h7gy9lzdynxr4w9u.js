import{N as c,j as f,e0 as a,V as S}from"./hloj85fregi26ji6.js";import{i as g,h as b,G as h}from"./emiobmo9yrp27p7q.js";import"./g65last9w3zpj4e1.js";import"./g7w33hsyqmw6f524.js";import"./dkqa9jl3k2y8d11k.js";import"./g0f573poiara0btd.js";import"./ee0lorinfbhctvv3.js";import"./oxm37jjpmmj4jh4x.js";import"./j8xrc2euwar8tjsu.js";import"./exbwrpd3te4zrj2f.js";import"./cc6pb8mmonp9vszn.js";import"./h3mpj2fxmaknxuj4.js";import"./5pvvsmnp202yv97v.js";import"./gqd1dhcfmn5x8vwx.js";import"./huar325mst1d1qc5.js";import"./dgwkym7sicm8o0u9.js";import"./nhwieeg0ur43kl0h.js";const M=.75;function N({messages:s}){const l=c(),[i,e]=s,t=T(i,e);let n=g.Running,o=d.creatingPlan,r;switch(t.status){case"running":t.numTotalSubAgents>0&&t.numCompletedSubAgents/t.numTotalSubAgents>=M?o=d.almostDone:(o=d.running,r={numTasks:t.numTotalSubAgents});break;case"done":n=g.Finished,o=void 0;break;case"stopped":n=g.Stopped,o=d.cancelled;break}const u=o?l.formatMessage(o,r):null;return f.jsx(b,{highlightedCommand:u,status:n,showWorkUserSetting:!1})}function T(s,l){var r,u,p,m;const i=((u=(r=l==null?void 0:l.message.metadata)==null?void 0:r.parallel_browse)==null?void 0:u.frontend_info.sub_agent_infos)??((m=(p=s.message.metadata)==null?void 0:p.parallel_browse)==null?void 0:m.frontend_info.sub_agent_infos);let e,t=0,n=0;i!=null&&(e=_(i),t=e.length,n=e.filter(k).length);let o="planning";return h(s.message)?o="stopped":l!=null&&(o=n===t?"done":"running"),{status:o,subAgentInfos:e,numTotalSubAgents:t,numCompletedSubAgents:n}}function _(s){const l=Object.values(s).reduce((e,t)=>{const n=t.task_index;return e[n]==null&&(e[n]=[]),e[n].push(t),e},{});return Object.values(l).map(e=>({...e[0],status:A(e)})).sort((e,t)=>e.task_index-t.task_index)}function A(s){const l=s.map(e=>e.status),i=[a.Starting,a.Running,a.Done,a.Error,a.Timeout,a.Cancelled];for(const e of i)if(l.some(t=>t===e))return e;return a.Starting}function k(s){return s.status===a.Done||s.status===a.Timeout||s.status===a.Error||s.status===a.Cancelled}const d=S({creatingPlan:{id:"parallelBrowsingMessage.creatingPlanV2",defaultMessage:"Making a research plan"},running:{id:"parallelBrowsingMessage.running_2",defaultMessage:"Visiting {numTasks, plural, one {# site} other {# sites}}"},almostDone:{id:"parallelBrowsingMessage.almostDone",defaultMessage:"Almost done"},cancelled:{id:"parallelBrowsingMessage.cancelledV2",defaultMessage:"Stopped doing research"},done:{id:"parallelBrowsingMessage.done",defaultMessage:"Finished research"}});export{N as default};
//# sourceMappingURL=h7gy9lzdynxr4w9u.js.map