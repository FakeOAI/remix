import{V as p,l as m,e5 as a,a0 as c}from"./dr7d3iwdkso0acad.js";import{a as u,T as f,i as S}from"./mdvtv1mc8g2bqrsl.js";import"./nk93elwanh2qmq79.js";import"./dmeh4acfgftb4ocn.js";import"./gb15fzh9avxbwr73.js";import"./dnerd8yjozxoav5t.js";import"./l97vil97vij75d6c.js";import"./mhaqcfmmdyzdbeu3.js";import"./gfbiklbu7iwavqxk.js";import"./fs94t0nwpxhmz7ny.js";import"./hy5i8xpuojx9el7d.js";import"./oj5tgfeg398yhzr0.js";import"./ctrx0vgo31qa9ogh.js";import"./nq80e3tcpxxq4d3f.js";import"./mb3598k4l6kvjexj.js";import"./d1veu52dtlvwcp39.js";import"./kk83ngqx38127x2h.js";const b=.75;function H({messages:s}){const l=p(),[i,e]=s,t=M(i,e);let n=u.Running,o=r.creatingPlan,g;switch(t.status){case"running":t.numTotalSubAgents>0&&t.numCompletedSubAgents/t.numTotalSubAgents>=b?o=r.almostDone:(o=r.running,g={numTasks:t.numTotalSubAgents});break;case"done":n=u.Finished,o=void 0;break;case"stopped":n=u.Stopped,o=r.cancelled;break}const d=o?l.formatMessage(o,g):null;return m.jsx(f,{highlightedCommand:d,status:n,showWorkUserSetting:!1})}function M(s,l){const i=l?.message.metadata?.parallel_browse?.frontend_info.sub_agent_infos??s.message.metadata?.parallel_browse?.frontend_info.sub_agent_infos;let e,t=0,n=0;i!=null&&(e=h(i),t=e.length,n=e.filter(_).length);let o="planning";return S(s.message)?o="stopped":l!=null&&(o=n===t?"done":"running"),{status:o,subAgentInfos:e,numTotalSubAgents:t,numCompletedSubAgents:n}}function h(s){const l=Object.values(s).reduce((e,t)=>{const n=t.task_index;return e[n]==null&&(e[n]=[]),e[n].push(t),e},{});return Object.values(l).map(e=>({...e[0],status:T(e)})).sort((e,t)=>e.task_index-t.task_index)}function T(s){const l=s.map(e=>e.status),i=[a.Starting,a.Running,a.Done,a.Error,a.Timeout,a.Cancelled];for(const e of i)if(l.some(t=>t===e))return e;return a.Starting}function _(s){return s.status===a.Done||s.status===a.Timeout||s.status===a.Error||s.status===a.Cancelled}const r=c({creatingPlan:{id:"parallelBrowsingMessage.creatingPlanV2",defaultMessage:"Making a research plan"},running:{id:"parallelBrowsingMessage.running_2",defaultMessage:"Visiting {numTasks, plural, one {# site} other {# sites}}"},almostDone:{id:"parallelBrowsingMessage.almostDone",defaultMessage:"Almost done"},cancelled:{id:"parallelBrowsingMessage.cancelledV2",defaultMessage:"Stopped doing research"},done:{id:"parallelBrowsingMessage.done",defaultMessage:"Finished research"}});export{H as default};
//# sourceMappingURL=gq8gj0l52c4o186b.js.map