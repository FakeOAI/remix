import{H as c,j as f,e6 as a,N as S}from"./ez11474bqjo66p5i.js";import{b as g,a as b,j as h}from"./ekriqai908zppcta.js";import"./k83stg9qxgxqphbx.js";import"./cfb41k6efc3hcj52.js";import"./k1bk4p15rnnsrf5e.js";import"./ex63ej6mhmullknu.js";import"./fvshcr5rh004dfkt.js";import"./cm2trz63rske0xta.js";import"./ex6xouuwhxt5o2we.js";import"./fk97hmtvzg96eice.js";import"./oar5stbi88jbvaxi.js";import"./d1ghvv4hur3kpsbk.js";import"./htvuy2i3y3wcvw0q.js";import"./lioi74zf3mt1oe3n.js";import"./93mewq25d542i6ru.js";import"./jhnf4bie2nzsnq4v.js";import"./h8jmpdaz1bs44tiy.js";import"./ujoe4hp4dt0hl3e3.js";import"./onyz9bw0a5ukoplo.js";import"./olh1s5q2rvpf5l9h.js";import"./dvest74fzdhb46gg.js";const M=.75;function U({messages:s}){const o=c(),[l,e]=s,t=T(l,e);let n=g.Running,i=d.creatingPlan,r;switch(t.status){case"running":t.numTotalSubAgents>0&&t.numCompletedSubAgents/t.numTotalSubAgents>=M?i=d.almostDone:(i=d.running,r={numTasks:t.numTotalSubAgents});break;case"done":n=g.Finished,i=void 0;break;case"stopped":n=g.Stopped,i=d.cancelled;break}const u=i?o.formatMessage(i,r):null;return f.jsx(b,{highlightedCommand:u,status:n,showWorkUserSetting:!1})}function T(s,o){var r,u,p,m;const l=((u=(r=o==null?void 0:o.message.metadata)==null?void 0:r.parallel_browse)==null?void 0:u.frontend_info.sub_agent_infos)??((m=(p=s.message.metadata)==null?void 0:p.parallel_browse)==null?void 0:m.frontend_info.sub_agent_infos);let e,t=0,n=0;l!=null&&(e=_(l),t=e.length,n=e.filter(k).length);let i="planning";return h(s.message)?i="stopped":o!=null&&(i=n===t?"done":"running"),{status:i,subAgentInfos:e,numTotalSubAgents:t,numCompletedSubAgents:n}}function _(s){const o=Object.values(s).reduce((e,t)=>{const n=t.task_index;return e[n]==null&&(e[n]=[]),e[n].push(t),e},{});return Object.values(o).map(e=>({...e[0],status:A(e)})).sort((e,t)=>e.task_index-t.task_index)}function A(s){const o=s.map(e=>e.status),l=[a.Starting,a.Running,a.Done,a.Error,a.Timeout,a.Cancelled];for(const e of l)if(o.some(t=>t===e))return e;return a.Starting}function k(s){return s.status===a.Done||s.status===a.Timeout||s.status===a.Error||s.status===a.Cancelled}const d=S({creatingPlan:{id:"parallelBrowsingMessage.creatingPlanV2",defaultMessage:"Making a research plan"},running:{id:"parallelBrowsingMessage.running_2",defaultMessage:"Visiting {numTasks, plural, one {# site} other {# sites}}"},almostDone:{id:"parallelBrowsingMessage.almostDone",defaultMessage:"Almost done"},cancelled:{id:"parallelBrowsingMessage.cancelledV2",defaultMessage:"Stopped doing research"},done:{id:"parallelBrowsingMessage.done",defaultMessage:"Finished research"}});export{U as default};
//# sourceMappingURL=oansn5jggkxt2sv0.js.map