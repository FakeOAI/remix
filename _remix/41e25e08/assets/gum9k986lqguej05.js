import{a3 as p,t as m,e9 as a,ad as c}from"./ius2rjc8aciuj2rl.js";import{a as u,T as f,i as S}from"./frgkesjr4ohtrucy.js";import"./lzyd9n5t1klxadwf.js";import"./jdz9mwngh3t5nytb.js";import"./n0xyk1p8mg8xlrhw.js";import"./oy4uroqongt50tdh.js";import"./ohr11q9jfhdrs62c.js";import"./og6klen52wg15s6b.js";import"./jxn2hsz21dzfafcn.js";import"./vx5bizwg1cu9jie5.js";import"./o9abjlquvgplxwex.js";import"./itvvna1wmnp67bph.js";import"./bixdynutlthfnow9.js";import"./kjc4oshqrhzrg3a0.js";import"./bii0ba6df7fk4nts.js";import"./nrbhchjhpmcxnzn5.js";import"./nz7exheo0ysu8iuh.js";import"./nsq2pgu8tq1tcawc.js";import"./fhdlfdpwiavhel0q.js";import"./neli2etkemqy682b.js";import"./bt3rjqq715dlb9rk.js";import"./e695g0c5z01sstpf.js";import"./gh97h5wmaiswo7ni.js";const b=.75;function U({messages:s}){const i=p(),[l,e]=s,t=M(l,e);let n=u.Running,o=r.creatingPlan,g;switch(t.status){case"running":t.numTotalSubAgents>0&&t.numCompletedSubAgents/t.numTotalSubAgents>=b?o=r.almostDone:(o=r.running,g={numTasks:t.numTotalSubAgents});break;case"done":n=u.Finished,o=void 0;break;case"stopped":n=u.Stopped,o=r.cancelled;break}const d=o?i.formatMessage(o,g):null;return m.jsx(f,{highlightedCommand:d,status:n,showWorkUserSetting:!1})}function M(s,i){const l=i?.message.metadata?.parallel_browse?.frontend_info.sub_agent_infos??s.message.metadata?.parallel_browse?.frontend_info.sub_agent_infos;let e,t=0,n=0;l!=null&&(e=h(l),t=e.length,n=e.filter(_).length);let o="planning";return S(s.message)?o="stopped":i!=null&&(o=n===t?"done":"running"),{status:o,subAgentInfos:e,numTotalSubAgents:t,numCompletedSubAgents:n}}function h(s){const i=Object.values(s).reduce((e,t)=>{const n=t.task_index;return e[n]==null&&(e[n]=[]),e[n].push(t),e},{});return Object.values(i).map(e=>({...e[0],status:T(e)})).sort((e,t)=>e.task_index-t.task_index)}function T(s){const i=s.map(e=>e.status),l=[a.Starting,a.Running,a.Done,a.Error,a.Timeout,a.Cancelled];for(const e of l)if(i.some(t=>t===e))return e;return a.Starting}function _(s){return s.status===a.Done||s.status===a.Timeout||s.status===a.Error||s.status===a.Cancelled}const r=c({creatingPlan:{id:"parallelBrowsingMessage.creatingPlanV2",defaultMessage:"Making a research plan"},running:{id:"parallelBrowsingMessage.running_2",defaultMessage:"Visiting {numTasks, plural, one {# site} other {# sites}}"},almostDone:{id:"parallelBrowsingMessage.almostDone",defaultMessage:"Almost done"},cancelled:{id:"parallelBrowsingMessage.cancelledV2",defaultMessage:"Stopped doing research"},done:{id:"parallelBrowsingMessage.done",defaultMessage:"Finished research"}});export{U as default};
//# sourceMappingURL=gum9k986lqguej05.js.map