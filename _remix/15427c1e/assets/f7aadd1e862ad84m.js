import{z as r,j as a}from"./lj2b9v3ilohzzubf.js";import{cj as u,ck as c,w as l}from"./m2xe8hrs3fe8d0zo.js";import{S as o,c as i}from"./jcdfkkc7iqnya4rn.js";function d(){const e=l();return a.jsx(a.Fragment,{children:a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between",children:["Force Use Search",!1]}),a.jsx(o,{id:"force-use-search",options:[{label:"Default",value:"default"},{label:"Force",value:"true"},{label:"Disable",value:"false"}],name:"force-use-search",className:"mt-1 shadow-none dark:text-gray-800",value:e.forceUseSearch==null?{value:"default",label:"Default"}:e.forceUseSearch?{value:"true",label:"Force"}:{value:"false",label:"Disable"},isMulti:!1,components:{Input:f},onChange:t=>{l.setState({forceUseSearch:(t?.value??"default")==="default"?null:t?.value==="true"})}})]})})}function b(){const[e]=u(),t=S(e,c);return Object.keys(t).length}const f=e=>a.jsx(i.Input,{...e,inputClassName:"focus:ring-0"});function S(e,t){return Object.keys(e).reduce((n,s)=>(r(e[s],t[s])||(n[s]=t[s]),n),{})}export{d as S,b as u};
//# sourceMappingURL=f7aadd1e862ad84m.js.map