import{X as p,y as m,e5 as a,a6 as c}from"./ddcjry37y0ueobh3.js";import{a as u,T as f}from"./kg9tfaw6um1c8diz.js";import{d as S}from"./bo5lt597wbofkr1p.js";import"./ostblj7tqg38i6fa.js";import"./mlzz6djcph5fthpz.js";import"./kbm6e58dnhlxymg3.js";import"./g232mik5xb95sf81.js";import"./b9g8fafm8dztbaej.js";import"./m780wk85gg28bdfy.js";import"./dcc45rtf5i4crsq0.js";import"./s8ck5rhbggwsgpvb.js";import"./lxw6kvlkbnjsbx5r.js";import"./bwn9p8wp0adpm8es.js";import"./dqx1biyivpsf3few.js";import"./lw8c0noczs2rbs9j.js";import"./iwvyrmtfz5lkn9sl.js";import"./h9z74bskym3ttzc8.js";import"./jj3i5x6opi4xqiiv.js";import"./nx9wnt9smxe2g0dl.js";const b=.75;function W({messages:s}){const l=p(),[i,e]=s,t=M(i,e);let n=u.Running,o=r.creatingPlan,g;switch(t.status){case"running":t.numTotalSubAgents>0&&t.numCompletedSubAgents/t.numTotalSubAgents>=b?o=r.almostDone:(o=r.running,g={numTasks:t.numTotalSubAgents});break;case"done":n=u.Finished,o=void 0;break;case"stopped":n=u.Stopped,o=r.cancelled;break}const d=o?l.formatMessage(o,g):null;return m.jsx(f,{highlightedCommand:d,status:n,showWorkUserSetting:!1})}function M(s,l){const i=l?.message.metadata?.parallel_browse?.frontend_info.sub_agent_infos??s.message.metadata?.parallel_browse?.frontend_info.sub_agent_infos;let e,t=0,n=0;i!=null&&(e=h(i),t=e.length,n=e.filter(_).length);let o="planning";return S(s.message)?o="stopped":l!=null&&(o=n===t?"done":"running"),{status:o,subAgentInfos:e,numTotalSubAgents:t,numCompletedSubAgents:n}}function h(s){const l=Object.values(s).reduce((e,t)=>{const n=t.task_index;return e[n]==null&&(e[n]=[]),e[n].push(t),e},{});return Object.values(l).map(e=>({...e[0],status:T(e)})).sort((e,t)=>e.task_index-t.task_index)}function T(s){const l=s.map(e=>e.status),i=[a.Starting,a.Running,a.Done,a.Error,a.Timeout,a.Cancelled];for(const e of i)if(l.some(t=>t===e))return e;return a.Starting}function _(s){return s.status===a.Done||s.status===a.Timeout||s.status===a.Error||s.status===a.Cancelled}const r=c({creatingPlan:{id:"parallelBrowsingMessage.creatingPlanV2",defaultMessage:"Making a research plan"},running:{id:"parallelBrowsingMessage.running_2",defaultMessage:"Visiting {numTasks, plural, one {# site} other {# sites}}"},almostDone:{id:"parallelBrowsingMessage.almostDone",defaultMessage:"Almost done"},cancelled:{id:"parallelBrowsingMessage.cancelledV2",defaultMessage:"Stopped doing research"},done:{id:"parallelBrowsingMessage.done",defaultMessage:"Finished research"}});export{W as default};
//# sourceMappingURL=d8mjjfietrfkg3uv.js.map