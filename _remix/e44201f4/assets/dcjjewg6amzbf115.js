import{V as p,l as m,ea as a,a0 as c}from"./m22vykpz3ufxnjxd.js";import{a as u,T as f,i as S}from"./favm7ked21eekqbf.js";import"./hfrc69bv614p09qd.js";import"./h96qd92qx1wl4bxm.js";import"./jf3uv159nnq8mz4l.js";import"./fjsffie7vnsc9yaf.js";import"./n13zt2dg444thhb4.js";import"./fzgvnbvf1g102okb.js";import"./g7au1nc7vrn1o6m1.js";import"./c1lxfkqsix2qq9xn.js";import"./i5939eroqfuo9u68.js";import"./kx976eoy7979gedm.js";import"./jz8h3ndcgqzael8h.js";import"./mkf3fsn6mshphj49.js";import"./kwaswicx5ahgniz3.js";import"./ks6fijcy00ptjpoc.js";import"./miejut141tryjzs3.js";const b=.75;function H({messages:s}){const l=p(),[i,e]=s,t=M(i,e);let n=u.Running,o=r.creatingPlan,g;switch(t.status){case"running":t.numTotalSubAgents>0&&t.numCompletedSubAgents/t.numTotalSubAgents>=b?o=r.almostDone:(o=r.running,g={numTasks:t.numTotalSubAgents});break;case"done":n=u.Finished,o=void 0;break;case"stopped":n=u.Stopped,o=r.cancelled;break}const d=o?l.formatMessage(o,g):null;return m.jsx(f,{highlightedCommand:d,status:n,showWorkUserSetting:!1})}function M(s,l){const i=l?.message.metadata?.parallel_browse?.frontend_info.sub_agent_infos??s.message.metadata?.parallel_browse?.frontend_info.sub_agent_infos;let e,t=0,n=0;i!=null&&(e=h(i),t=e.length,n=e.filter(_).length);let o="planning";return S(s.message)?o="stopped":l!=null&&(o=n===t?"done":"running"),{status:o,subAgentInfos:e,numTotalSubAgents:t,numCompletedSubAgents:n}}function h(s){const l=Object.values(s).reduce((e,t)=>{const n=t.task_index;return e[n]==null&&(e[n]=[]),e[n].push(t),e},{});return Object.values(l).map(e=>({...e[0],status:T(e)})).sort((e,t)=>e.task_index-t.task_index)}function T(s){const l=s.map(e=>e.status),i=[a.Starting,a.Running,a.Done,a.Error,a.Timeout,a.Cancelled];for(const e of i)if(l.some(t=>t===e))return e;return a.Starting}function _(s){return s.status===a.Done||s.status===a.Timeout||s.status===a.Error||s.status===a.Cancelled}const r=c({creatingPlan:{id:"parallelBrowsingMessage.creatingPlanV2",defaultMessage:"Making a research plan"},running:{id:"parallelBrowsingMessage.running_2",defaultMessage:"Visiting {numTasks, plural, one {# site} other {# sites}}"},almostDone:{id:"parallelBrowsingMessage.almostDone",defaultMessage:"Almost done"},cancelled:{id:"parallelBrowsingMessage.cancelledV2",defaultMessage:"Stopped doing research"},done:{id:"parallelBrowsingMessage.done",defaultMessage:"Finished research"}});export{H as default};
//# sourceMappingURL=dcjjewg6amzbf115.js.map