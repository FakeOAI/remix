import{H as c,j as f,ec as a,N as S}from"./mtnbdcyqrcvvklqa.js";import{j as g,i as b,G as h}from"./c0aeo0xdanj0dxxz.js";import"./fiqi1nsnq1a08oyy.js";import"./i25o23eggpk6999r.js";import"./kfjfn6a6uxbrxoqk.js";import"./j6m9c4ofoa0idx20.js";import"./f2euwl1bn0ufh792.js";import"./f0cgb9eadmvbtbq2.js";import"./lalgh526cf9apsgq.js";import"./oj5l5fhr9b92tcfo.js";import"./g056ar0phzt2ex7q.js";import"./ms9l0oi5q7ce3jgh.js";import"./ebt040vudkrowyg9.js";import"./oiya65f430wrxqul.js";import"./khf2b3hv98fp1uts.js";import"./f55qc8aw9qu8bdhv.js";import"./kf4kgvfmqb9bgaen.js";const M=.75;function N({messages:s}){const l=c(),[i,e]=s,t=T(i,e);let n=g.Running,o=d.creatingPlan,r;switch(t.status){case"running":t.numTotalSubAgents>0&&t.numCompletedSubAgents/t.numTotalSubAgents>=M?o=d.almostDone:(o=d.running,r={numTasks:t.numTotalSubAgents});break;case"done":n=g.Finished,o=void 0;break;case"stopped":n=g.Stopped,o=d.cancelled;break}const u=o?l.formatMessage(o,r):null;return f.jsx(b,{highlightedCommand:u,status:n,showWorkUserSetting:!1})}function T(s,l){var r,u,p,m;const i=((u=(r=l==null?void 0:l.message.metadata)==null?void 0:r.parallel_browse)==null?void 0:u.frontend_info.sub_agent_infos)??((m=(p=s.message.metadata)==null?void 0:p.parallel_browse)==null?void 0:m.frontend_info.sub_agent_infos);let e,t=0,n=0;i!=null&&(e=_(i),t=e.length,n=e.filter(k).length);let o="planning";return h(s.message)?o="stopped":l!=null&&(o=n===t?"done":"running"),{status:o,subAgentInfos:e,numTotalSubAgents:t,numCompletedSubAgents:n}}function _(s){const l=Object.values(s).reduce((e,t)=>{const n=t.task_index;return e[n]==null&&(e[n]=[]),e[n].push(t),e},{});return Object.values(l).map(e=>({...e[0],status:A(e)})).sort((e,t)=>e.task_index-t.task_index)}function A(s){const l=s.map(e=>e.status),i=[a.Starting,a.Running,a.Done,a.Error,a.Timeout,a.Cancelled];for(const e of i)if(l.some(t=>t===e))return e;return a.Starting}function k(s){return s.status===a.Done||s.status===a.Timeout||s.status===a.Error||s.status===a.Cancelled}const d=S({creatingPlan:{id:"parallelBrowsingMessage.creatingPlanV2",defaultMessage:"Making a research plan"},running:{id:"parallelBrowsingMessage.running_2",defaultMessage:"Visiting {numTasks, plural, one {# site} other {# sites}}"},almostDone:{id:"parallelBrowsingMessage.almostDone",defaultMessage:"Almost done"},cancelled:{id:"parallelBrowsingMessage.cancelledV2",defaultMessage:"Stopped doing research"},done:{id:"parallelBrowsingMessage.done",defaultMessage:"Finished research"}});export{N as default};
//# sourceMappingURL=chs1j9316ej7s4au.js.map