import{a0 as p,y as m,e4 as a,a1 as c}from"./cenhwbprxai3toix.js";import{a as u,T as f}from"./leqgnttd8q44vj5y.js";import{d as S}from"./hn877s1av7risab0.js";import"./lzqwtbp50roqvxnh.js";import"./bomvf441parvbl6l.js";import"./h0w2cfyxquh3a88t.js";import"./i2mam4exf28ww00h.js";import"./kcdclgxeuzpy449e.js";import"./hn586u5on2jlex6e.js";import"./kp41qb109q7zsu08.js";import"./e3lzzvpbrfw34hi0.js";import"./s26g8cj5crlmzrhm.js";import"./jth9gz8y4nfsu03x.js";import"./c657bb6sfxb67al1.js";import"./jyh9xl3syf7yrebg.js";import"./i5dl7qcorvwptxtt.js";import"./j72yt11gyo474tkr.js";import"./d01hwntyf2775ji3.js";import"./bh0hpeydruybhwyo.js";const b=.75;function W({messages:s}){const l=p(),[i,e]=s,t=M(i,e);let n=u.Running,o=r.creatingPlan,g;switch(t.status){case"running":t.numTotalSubAgents>0&&t.numCompletedSubAgents/t.numTotalSubAgents>=b?o=r.almostDone:(o=r.running,g={numTasks:t.numTotalSubAgents});break;case"done":n=u.Finished,o=void 0;break;case"stopped":n=u.Stopped,o=r.cancelled;break}const d=o?l.formatMessage(o,g):null;return m.jsx(f,{highlightedCommand:d,status:n,showWorkUserSetting:!1})}function M(s,l){const i=l?.message.metadata?.parallel_browse?.frontend_info.sub_agent_infos??s.message.metadata?.parallel_browse?.frontend_info.sub_agent_infos;let e,t=0,n=0;i!=null&&(e=h(i),t=e.length,n=e.filter(_).length);let o="planning";return S(s.message)?o="stopped":l!=null&&(o=n===t?"done":"running"),{status:o,subAgentInfos:e,numTotalSubAgents:t,numCompletedSubAgents:n}}function h(s){const l=Object.values(s).reduce((e,t)=>{const n=t.task_index;return e[n]==null&&(e[n]=[]),e[n].push(t),e},{});return Object.values(l).map(e=>({...e[0],status:T(e)})).sort((e,t)=>e.task_index-t.task_index)}function T(s){const l=s.map(e=>e.status),i=[a.Starting,a.Running,a.Done,a.Error,a.Timeout,a.Cancelled];for(const e of i)if(l.some(t=>t===e))return e;return a.Starting}function _(s){return s.status===a.Done||s.status===a.Timeout||s.status===a.Error||s.status===a.Cancelled}const r=c({creatingPlan:{id:"parallelBrowsingMessage.creatingPlanV2",defaultMessage:"Making a research plan"},running:{id:"parallelBrowsingMessage.running_2",defaultMessage:"Visiting {numTasks, plural, one {# site} other {# sites}}"},almostDone:{id:"parallelBrowsingMessage.almostDone",defaultMessage:"Almost done"},cancelled:{id:"parallelBrowsingMessage.cancelledV2",defaultMessage:"Stopped doing research"},done:{id:"parallelBrowsingMessage.done",defaultMessage:"Finished research"}});export{W as default};
//# sourceMappingURL=ypqz1n65omd7m62w.js.map