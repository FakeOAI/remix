const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ifjh0poyei6a19s2.js","assets/ns1tfo6glfhr2njn.js","assets/jeba75ammv4sijqh.js","assets/root-jhvoex1m.css","assets/lnlvqx2sg8j5t2nm.js","assets/conversation-small-ict01xsi.css","assets/bf1fa2lxk3a560fa.js","assets/dhg44upmvo11lmri.js","assets/j5w4166bn3c02o6l.js","assets/ctgcnxnumowyd6ml.js","assets/c1wbub7bx0zpzv4l.js","assets/ADAVisualizationComponent-mi6em660.css"])))=>i.map(i=>d[i]);
import{au as _,av as j,M as C,j as e,ay as I,J as A,ca as S,cb as T}from"./ns1tfo6glfhr2njn.js";import{bs as b,bx as w,by as z,bz as F,ae as k,bA as O,bB as v,bC as D,bD as W,bE as R}from"./lnlvqx2sg8j5t2nm.js";import{T as c}from"./cmafqvgpikn9268a.js";import{T as U}from"./m67u2pvgcwadlzb0.js";import"./jeba75ammv4sijqh.js";import"./joyor72movlrkuny.js";import"./bf1fa2lxk3a560fa.js";const y=_(()=>j(()=>import("./ifjh0poyei6a19s2.js").then(t=>t.A),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])).then(t=>t.default));function Q({messages:t,isRequestActive:l,clientThreadId:u}){const[r,s]=t,n=b(r.message),a=s?.message.metadata?.aggregate_result,h=w(),g=z(),d=s?.message?F(s.message):[],o=s?.message.metadata?.aggregate_result?.messages.filter(k)??[],E=(d.filter(i=>i.type==="chart")??[]).length!==o.length,f=g&&!E;let m=c.Running;return a?.status==="success"?m=c.Finished:s!=null&&s.message.content.content_type!==C.ExecutionOutput||a!=null&&a.status!=="running"?m=c.Error:(n||!l)&&(m=c.Stopped),e.jsxs(e.Fragment,{children:[e.jsx(J,{messages:t,status:m,isRequestActive:l}),f&&d.map((i,x)=>{const{type:V}=i;return V==="chart"&&!h?(i.fallback_to_image=!0,e.jsx(M,{children:e.jsx(y,{clientThreadId:u,visualization:i})},x)):e.jsx(M,{children:e.jsx(y,{clientThreadId:u,visualization:i})},x)}),!f&&s!=null&&e.jsx(O,{message:s.message})]})}const M=I.div`mb-3 max-w-[80%]`;function J({messages:t,status:l,isRequestActive:u}){const[r,s]=t,n=A(),a=s?.message.metadata?.aggregate_result,h=b(r.message),{data:g,error:d}=S(T.ShowExpandedCodeView);let o=n.formatMessage({id:"message.tools.data-analysis.running",defaultMessage:"Analyzing"});if(a?.status==="success"?o=n.formatMessage({id:"message.tools.data-analysis.finished",defaultMessage:"Analyzed"}):s!=null&&s.message.content.content_type!==C.ExecutionOutput||a!=null&&a.status!=="running"?o=n.formatMessage({id:"message.tools.data-analysis.error",defaultMessage:"Analysis errored"}):(h||!u)&&(o=n.formatMessage({id:"message.tools.data-analysis.stopped",defaultMessage:"Analysis paused"})),g!==void 0||d){const p=v(r.message)!=null;return e.jsx(U,{status:l,highlightedCommand:o,showWorkUserSetting:g??!1,hideOnlyIfNotInteractedWith:!0,children:p?e.jsxs("div",{className:"mb-3 mt-0.5 overflow-hidden rounded-xl bg-black",children:[e.jsx(D,{message:r.message,FormattedText:W}),s!=null&&e.jsx(R,{message:s.message})]}):null})}return null}export{Q as DataAnalysisMessage};
//# sourceMappingURL=lhin7vqi3adnibbx.js.map