import{G as c,j as f,d_ as a,K as S}from"./flp62uidktb7m1ug.js";import{J as g,K as b,L as h}from"./iyl0qvrjzzm7sknb.js";import"./nvhnd25cbof9n9il.js";import"./gvolk5s4399xa3cv.js";import"./mwg6v0jkforocdtn.js";import"./hxhem7d493ftjdwe.js";import"./dueirgau4f6i1o1j.js";import"./hb9t536xg0y0xszu.js";import"./k33iqqh7r2wo1k0r.js";import"./k2od776hblaulj28.js";import"./ekvj2mit09uc82zf.js";import"./ljmho4vhf1pjpjsc.js";import"./e9048y05grlerpi9.js";import"./halxrn9nt2hlxo3o.js";import"./lwf5tl6ycy2l4px6.js";import"./eukmoqvynpidn6v6.js";import"./kzhs1p3awt7ru9kd.js";import"./etr41jmyodm6h27r.js";import"./chlazh9kjbq42g8x.js";import"./d9cvixzji3564j8v.js";import"./eginviiblln7awwq.js";import"./k8iaq8d0e4chicqq.js";import"./i9k7mgi0v5fug2uq.js";import"./miozercks6am731f.js";import"./ltdx7dfaxbse4vzd.js";const _=.75;function Q({messages:s}){const o=c(),[r,e]=s,t=M(r,e);let n=g.Running,i=d.creatingPlan,l;switch(t.status){case"running":t.numTotalSubAgents>0&&t.numCompletedSubAgents/t.numTotalSubAgents>=_?i=d.almostDone:(i=d.running,l={numTasks:t.numTotalSubAgents});break;case"done":n=g.Finished,i=void 0;break;case"stopped":n=g.Stopped,i=d.cancelled;break}const u=i?o.formatMessage(i,l):null;return f.jsx(b,{highlightedCommand:u,status:n,showWorkUserSetting:!1})}function M(s,o){var l,u,p,m;const r=((u=(l=o==null?void 0:o.message.metadata)==null?void 0:l.parallel_browse)==null?void 0:u.frontend_info.sub_agent_infos)??((m=(p=s.message.metadata)==null?void 0:p.parallel_browse)==null?void 0:m.frontend_info.sub_agent_infos);let e,t=0,n=0;r!=null&&(e=T(r),t=e.length,n=e.filter(k).length);let i="planning";return h(s.message)?i="stopped":o!=null&&(i=n===t?"done":"running"),{status:i,subAgentInfos:e,numTotalSubAgents:t,numCompletedSubAgents:n}}function T(s){const o=Object.values(s).reduce((e,t)=>{const n=t.task_index;return e[n]==null&&(e[n]=[]),e[n].push(t),e},{});return Object.values(o).map(e=>({...e[0],status:A(e)})).sort((e,t)=>e.task_index-t.task_index)}function A(s){const o=s.map(e=>e.status),r=[a.Starting,a.Running,a.Done,a.Error,a.Timeout,a.Cancelled];for(const e of r)if(o.some(t=>t===e))return e;return a.Starting}function k(s){return s.status===a.Done||s.status===a.Timeout||s.status===a.Error||s.status===a.Cancelled}const d=S({creatingPlan:{id:"parallelBrowsingMessage.creatingPlanV2",defaultMessage:"Making a research plan"},running:{id:"parallelBrowsingMessage.running_2",defaultMessage:"Visiting {numTasks, plural, one {# site} other {# sites}}"},almostDone:{id:"parallelBrowsingMessage.almostDone",defaultMessage:"Almost done"},cancelled:{id:"parallelBrowsingMessage.cancelledV2",defaultMessage:"Stopped doing research"},done:{id:"parallelBrowsingMessage.done",defaultMessage:"Finished research"}});export{Q as default};
//# sourceMappingURL=g4sjem0hz92tvo6u.js.map