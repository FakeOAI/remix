import{x as l,ab as u,q as c,m as a,aW as m,aS as d,aM as g,S as x,y as p}from"./mog4ji1enf6w9x04.js";import{a$ as f,b0 as M,b1 as h,t as v}from"./bp5aai1dwvlpcqfm.js";import{J as b}from"./j4s44eoworcfgpbk.js";import{m as T}from"./w3fqzwb6ljesm4i1.js";const y=s=>{for(const e of s.concat().reverse()){if("messages"in e)return e.messages[e.messages.length-1].nodeId;if("message"in e)return e.message.nodeId}},C=({clientThreadId:s,lastMessageNodeId:e})=>{const o=m(s),n=f({clientThreadId:s,conversationMode:o}),r=async()=>{const t=[c.CANMORE],i=new h;n({id:e,eventMetadata:{eventSource:"mouse"},systemMessage:"The user has requested the canvas tool be disabled for this conversation. You should not call the tool again.",systemMessageMetadata:{disable_tool_ids:t},turnTracker:i}),p.setDisabledToolsForThread(s,t)};return a.jsxs(T.div,{className:"flex flex-wrap gap-2 pt-[3px]",initial:{opacity:0},animate:{opacity:1},children:[a.jsx(d,{id:"Uf35c+",defaultMessage:"Don't want me to use canvas?"}),a.jsxs("button",{onClick:r,className:"inline-flex min-h-5 w-fit select-none items-center text-start text-token-text-secondary hover:text-token-text-primary",children:[a.jsx(d,{id:"u76bsE",defaultMessage:"I can answer in chat instead"}),a.jsx(b,{className:"icon-md text-token-text-secondary"})]})]})},S=()=>{const{config:s,isLoading:e}=g("139656171");if(e)return!1;const o=s.get("experiments",{});for(const[n,r]of Object.entries(o)){const t=x.getExperimentValue({experimentName:n,key:"treatment",defaultValue:null,shouldLogExposure:!1});if(t&&M(r,v).includes(t))return!0}return!1},R=({clientThreadId:s,groupedMessages:e,isFinalTurn:o,hasActiveRequest:n})=>{const r=S(),t=l(()=>u.getThreadDisabledToolIds(s)),i=y(e);return r&&o&&!n&&!t?.includes(c.CANMORE)&&i&&a.jsx(C,{clientThreadId:s,lastMessageNodeId:i})};export{R as CanvasOptOutMessage};
//# sourceMappingURL=einiiy2sagqhifcw.js.map