import{X as p,y as m,e5 as a,a6 as c}from"./ggdh7pjp5xcwrnsg.js";import{a as u,T as f}from"./ga5s79t7codos54i.js";import{d as S}from"./ncdxtihmnz7uzs2q.js";import"./mkisucl9ntf4tsct.js";import"./bmls73y1gwdy9wkg.js";import"./nrk2wv4lcsm4aots.js";import"./jp106jrxp4bfcof8.js";import"./nn7abvtqye2kbvi4.js";import"./ofl8v1acfagq5bb7.js";import"./byh20kidpgjmgfje.js";import"./bvmv4im6saihms8x.js";import"./ol6oz5ym28raltgk.js";import"./gzoio6oye21kcfa0.js";import"./ioh3yma6lma1f2tx.js";import"./f7pbuz9n7jc1m90v.js";import"./ry8yvnh99dahtrha.js";import"./jkxlt9rtggccetnk.js";import"./ejj4go3j2v7qycqx.js";import"./n4okdvbrbd9jb2rf.js";const b=.75;function W({messages:s}){const l=p(),[i,e]=s,t=M(i,e);let n=u.Running,o=r.creatingPlan,g;switch(t.status){case"running":t.numTotalSubAgents>0&&t.numCompletedSubAgents/t.numTotalSubAgents>=b?o=r.almostDone:(o=r.running,g={numTasks:t.numTotalSubAgents});break;case"done":n=u.Finished,o=void 0;break;case"stopped":n=u.Stopped,o=r.cancelled;break}const d=o?l.formatMessage(o,g):null;return m.jsx(f,{highlightedCommand:d,status:n,showWorkUserSetting:!1})}function M(s,l){const i=l?.message.metadata?.parallel_browse?.frontend_info.sub_agent_infos??s.message.metadata?.parallel_browse?.frontend_info.sub_agent_infos;let e,t=0,n=0;i!=null&&(e=h(i),t=e.length,n=e.filter(_).length);let o="planning";return S(s.message)?o="stopped":l!=null&&(o=n===t?"done":"running"),{status:o,subAgentInfos:e,numTotalSubAgents:t,numCompletedSubAgents:n}}function h(s){const l=Object.values(s).reduce((e,t)=>{const n=t.task_index;return e[n]==null&&(e[n]=[]),e[n].push(t),e},{});return Object.values(l).map(e=>({...e[0],status:T(e)})).sort((e,t)=>e.task_index-t.task_index)}function T(s){const l=s.map(e=>e.status),i=[a.Starting,a.Running,a.Done,a.Error,a.Timeout,a.Cancelled];for(const e of i)if(l.some(t=>t===e))return e;return a.Starting}function _(s){return s.status===a.Done||s.status===a.Timeout||s.status===a.Error||s.status===a.Cancelled}const r=c({creatingPlan:{id:"parallelBrowsingMessage.creatingPlanV2",defaultMessage:"Making a research plan"},running:{id:"parallelBrowsingMessage.running_2",defaultMessage:"Visiting {numTasks, plural, one {# site} other {# sites}}"},almostDone:{id:"parallelBrowsingMessage.almostDone",defaultMessage:"Almost done"},cancelled:{id:"parallelBrowsingMessage.cancelledV2",defaultMessage:"Stopped doing research"},done:{id:"parallelBrowsingMessage.done",defaultMessage:"Finished research"}});export{W as default};
//# sourceMappingURL=n7k4vsjc989xnkdz.js.map