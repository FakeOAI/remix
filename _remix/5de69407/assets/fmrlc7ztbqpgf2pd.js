import{X as p,y as m,e0 as a,a6 as c}from"./p4yo0rzsteij4ihh.js";import{a as u,T as f}from"./kxwyftr8p9w7yc8v.js";import{d as S}from"./d3g4a0hcwihawz3e.js";import"./hd436y4ydqidgeiu.js";import"./m2xb5h49bu6lvq0z.js";import"./kn4kwfz3pcc0dh1y.js";import"./ip9uh04g30enj3b9.js";import"./ofvfxe9a1b2fhuri.js";import"./mslwg28fmsyi0i8b.js";import"./ucoghk4z1rejef9i.js";import"./j47f1y1dfugxdi4c.js";import"./e0csq37aq7fsoatu.js";import"./f1wmn65au0ke9jk0.js";import"./mf8aa04pcamvg3db.js";import"./kjnxb2s320ih2pof.js";import"./l48h3mdgj5xfyc0e.js";import"./o2246qj71dru3m9e.js";import"./nf6la2yi1otm0vo9.js";import"./eh2eng92zajjlxkp.js";const b=.75;function W({messages:s}){const l=p(),[i,e]=s,t=M(i,e);let n=u.Running,o=r.creatingPlan,g;switch(t.status){case"running":t.numTotalSubAgents>0&&t.numCompletedSubAgents/t.numTotalSubAgents>=b?o=r.almostDone:(o=r.running,g={numTasks:t.numTotalSubAgents});break;case"done":n=u.Finished,o=void 0;break;case"stopped":n=u.Stopped,o=r.cancelled;break}const d=o?l.formatMessage(o,g):null;return m.jsx(f,{highlightedCommand:d,status:n,showWorkUserSetting:!1})}function M(s,l){const i=l?.message.metadata?.parallel_browse?.frontend_info.sub_agent_infos??s.message.metadata?.parallel_browse?.frontend_info.sub_agent_infos;let e,t=0,n=0;i!=null&&(e=h(i),t=e.length,n=e.filter(_).length);let o="planning";return S(s.message)?o="stopped":l!=null&&(o=n===t?"done":"running"),{status:o,subAgentInfos:e,numTotalSubAgents:t,numCompletedSubAgents:n}}function h(s){const l=Object.values(s).reduce((e,t)=>{const n=t.task_index;return e[n]==null&&(e[n]=[]),e[n].push(t),e},{});return Object.values(l).map(e=>({...e[0],status:T(e)})).sort((e,t)=>e.task_index-t.task_index)}function T(s){const l=s.map(e=>e.status),i=[a.Starting,a.Running,a.Done,a.Error,a.Timeout,a.Cancelled];for(const e of i)if(l.some(t=>t===e))return e;return a.Starting}function _(s){return s.status===a.Done||s.status===a.Timeout||s.status===a.Error||s.status===a.Cancelled}const r=c({creatingPlan:{id:"parallelBrowsingMessage.creatingPlanV2",defaultMessage:"Making a research plan"},running:{id:"parallelBrowsingMessage.running_2",defaultMessage:"Visiting {numTasks, plural, one {# site} other {# sites}}"},almostDone:{id:"parallelBrowsingMessage.almostDone",defaultMessage:"Almost done"},cancelled:{id:"parallelBrowsingMessage.cancelledV2",defaultMessage:"Stopped doing research"},done:{id:"parallelBrowsingMessage.done",defaultMessage:"Finished research"}});export{W as default};
//# sourceMappingURL=fmrlc7ztbqpgf2pd.js.map