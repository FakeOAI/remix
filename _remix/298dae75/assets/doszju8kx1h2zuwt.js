import{W as p,l as m,e6 as a,a1 as c}from"./oee7i5r8ijmn1tdg.js";import{a as u,T as f,i as S}from"./j2839bdtxm3s295f.js";import"./f2inmqlbtoczvhek.js";import"./gi106u69uoz82g5o.js";import"./czc78ntp7lxbwobe.js";import"./k2crnwv3i5iv0rm1.js";import"./c6d4td7prifwq95v.js";import"./bgp9y7d45g2z8pgo.js";import"./jn1f9x6cs6bf4bm7.js";import"./g69fsvy6dz9oy2ih.js";import"./lg4zrpvt59dz7t5n.js";import"./b3uzntbkekuwtfz5.js";import"./nl9xd6prt79325d8.js";import"./bozp2hv7k58zd0lq.js";import"./bnfj7uaz5twrdu2q.js";import"./k9y2oj5l4hsorpoc.js";import"./hu7i3oo2bmxfqxd9.js";import"./omxlgelbri3m7ure.js";const b=.75;function H({messages:s}){const l=p(),[i,e]=s,t=M(i,e);let n=u.Running,o=r.creatingPlan,g;switch(t.status){case"running":t.numTotalSubAgents>0&&t.numCompletedSubAgents/t.numTotalSubAgents>=b?o=r.almostDone:(o=r.running,g={numTasks:t.numTotalSubAgents});break;case"done":n=u.Finished,o=void 0;break;case"stopped":n=u.Stopped,o=r.cancelled;break}const d=o?l.formatMessage(o,g):null;return m.jsx(f,{highlightedCommand:d,status:n,showWorkUserSetting:!1})}function M(s,l){const i=l?.message.metadata?.parallel_browse?.frontend_info.sub_agent_infos??s.message.metadata?.parallel_browse?.frontend_info.sub_agent_infos;let e,t=0,n=0;i!=null&&(e=h(i),t=e.length,n=e.filter(_).length);let o="planning";return S(s.message)?o="stopped":l!=null&&(o=n===t?"done":"running"),{status:o,subAgentInfos:e,numTotalSubAgents:t,numCompletedSubAgents:n}}function h(s){const l=Object.values(s).reduce((e,t)=>{const n=t.task_index;return e[n]==null&&(e[n]=[]),e[n].push(t),e},{});return Object.values(l).map(e=>({...e[0],status:T(e)})).sort((e,t)=>e.task_index-t.task_index)}function T(s){const l=s.map(e=>e.status),i=[a.Starting,a.Running,a.Done,a.Error,a.Timeout,a.Cancelled];for(const e of i)if(l.some(t=>t===e))return e;return a.Starting}function _(s){return s.status===a.Done||s.status===a.Timeout||s.status===a.Error||s.status===a.Cancelled}const r=c({creatingPlan:{id:"parallelBrowsingMessage.creatingPlanV2",defaultMessage:"Making a research plan"},running:{id:"parallelBrowsingMessage.running_2",defaultMessage:"Visiting {numTasks, plural, one {# site} other {# sites}}"},almostDone:{id:"parallelBrowsingMessage.almostDone",defaultMessage:"Almost done"},cancelled:{id:"parallelBrowsingMessage.cancelledV2",defaultMessage:"Stopped doing research"},done:{id:"parallelBrowsingMessage.done",defaultMessage:"Finished research"}});export{H as default};
//# sourceMappingURL=doszju8kx1h2zuwt.js.map