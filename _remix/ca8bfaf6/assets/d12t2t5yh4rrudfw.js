import{Y as p,j as m,eZ as a,X as c}from"./i50pu8hyebaw9kd6.js";import{T as u,a as f}from"./m3yi90cdwxleycje.js";import{bp as S}from"./mixmhi71ciem9jn6.js";import"./ler115iciu2bvc07.js";import"./g4gq7wj38irj9xjt.js";import"./obdrcw978epnpqji.js";import"./roq9fh68okqqi129.js";import"./gutqz9p5lfo53m3m.js";const b=.75;function P({messages:t}){const o=p(),[i,e]=t,s=M(i,e);let n=u.Running,l=r.creatingPlan,g;switch(s.status){case"running":s.numTotalSubAgents>0&&s.numCompletedSubAgents/s.numTotalSubAgents>=b?l=r.almostDone:(l=r.running,g={numTasks:s.numTotalSubAgents});break;case"done":n=u.Finished,l=void 0;break;case"stopped":n=u.Stopped,l=r.cancelled;break}const d=l?o.formatMessage(l,g):null;return m.jsx(f,{highlightedCommand:d,status:n,showWorkUserSetting:!1})}function M(t,o){const i=o?.message.metadata?.parallel_browse?.frontend_info.sub_agent_infos??t.message.metadata?.parallel_browse?.frontend_info.sub_agent_infos;let e,s=0,n=0;i!=null&&(e=h(i),s=e.length,n=e.filter(_).length);let l="planning";return S(t.message)?l="stopped":o!=null&&(l=n===s?"done":"running"),{status:l,subAgentInfos:e,numTotalSubAgents:s,numCompletedSubAgents:n}}function h(t){const o=Object.values(t).reduce((e,s)=>{const n=s.task_index;return e[n]==null&&(e[n]=[]),e[n].push(s),e},{});return Object.values(o).map(e=>({...e[0],status:T(e)})).sort((e,s)=>e.task_index-s.task_index)}function T(t){const o=t.map(e=>e.status),i=[a.Starting,a.Running,a.Done,a.Error,a.Timeout,a.Cancelled];for(const e of i)if(o.some(s=>s===e))return e;return a.Starting}function _(t){return t.status===a.Done||t.status===a.Timeout||t.status===a.Error||t.status===a.Cancelled}const r=c({creatingPlan:{id:"parallelBrowsingMessage.creatingPlanV2",defaultMessage:"Making a research plan"},running:{id:"parallelBrowsingMessage.running_2",defaultMessage:"Visiting {numTasks, plural, one {# site} other {# sites}}"},almostDone:{id:"parallelBrowsingMessage.almostDone",defaultMessage:"Almost done"},cancelled:{id:"parallelBrowsingMessage.cancelledV2",defaultMessage:"Stopped doing research"},done:{id:"parallelBrowsingMessage.done",defaultMessage:"Finished research"}});export{P as default};
//# sourceMappingURL=d12t2t5yh4rrudfw.js.map