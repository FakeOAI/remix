import{N as x,j as r,U as E,u as w,r as y,bU as c,V as b,R as j,c_ as N,c as C,M as p,D as f}from"./iryvtox9frru8zal.js";import{bt as S,cq as M,cr as k}from"./ibpo4l2zkh6u1ih1.js";import{b5 as v}from"./ju8uhwb40r1gh3q5.js";import{k as T}from"./i7imfmvlw2tpm5ab.js";function F({jupyterMessage:e}){const s=T(),t=x();if(s)return r.jsxs("div",{className:"my-1 flex h-52 w-full max-w-xs flex-col items-center justify-center gap-2 rounded-md border-black/5 bg-gray-100 p-7 text-center text-token-text-tertiary dark:border-white/10",children:[r.jsx(v,{className:"icon-lg"}),r.jsx(E,{...g.imageNotSupported})]});if(e.image_payload!=null)return r.jsx("img",{className:"my-1",src:`data:image/png;base64,${e.image_payload}`,alt:t.formatMessage(g.altText)});if(e.image_url!=null){const a=S(e.image_url);return r.jsx(R,{fileId:a})}return null}const I=30*1e3,h=100,d=1.5,O=Math.log(1-I*(1-d)/h)/Math.log(d);function R({fileId:e}){const s=x(),{data:t,isLoading:a,refetch:o}=w({queryKey:["getFileDownloadLink",e],queryFn:()=>j.getFileDownloadLink(e),refetchInterval:l=>{var i;const n=l.state.dataUpdateCount;return((i=l.state.data)==null?void 0:i.status)===c.Success||n>O||l.state.status===c.Error?!1:Math.pow(d,n)*h}});return y.useEffect(()=>{if((t==null?void 0:t.status)===c.Success){const n=new URL(t.download_url,location.toString()).searchParams.get("se");n!=null&&!a&&new Date>new Date(n)&&o()}},[t,a,o]),(t==null?void 0:t.status)!==c.Success?null:r.jsx("img",{src:t.download_url,className:"my-1 max-h-full max-w-full",alt:s.formatMessage(g.altText)})}const g=b({imageNotSupported:{id:"CodeExecutionOutputImage.imageNotSupported",defaultMessage:"Image output is not supported in a shared chat"},altText:{id:"CodeExecutionOutputImage.altText",defaultMessage:"Output image"}});function J({FormattedText:e,message:s}){const{resolvedTheme:t}=N();return r.jsx(k.Provider,{value:{isWithinDataAnalysisToolMessage:!0},children:r.jsx(e,{className:C("markdown prose w-full break-words dark:prose-invert",t==="dark"?"dark":"light"),children:D(s)})})}function D(e){function s(t,a){return`\`\`\`${a}
${t}
\`\`\``}if(e.content.content_type==="code")return s(e.content.text,"python");if(e.recipient==="python"){if(e.content.content_type!=="text")throw new Error("Unexpected content type for code message");const t=e.content.parts;if(t.length!==1||typeof t[0]!="string")throw new Error("Unexpected parts for code message");return s(t[0],"python")}throw new Error("Unexpected code message format")}function V({message:e}){var u;const s=x();if(e.content.content_type!==p.ExecutionOutput)return null;const t=(u=e.metadata)==null?void 0:u.aggregate_result;if(!t)return f.addError("Corrupt code execution result message"),null;const a=t.messages.filter(L),o=a.length>0,l=t.final_expression_output!=null,n=t.in_kernel_exception!=null;return r.jsxs(r.Fragment,{children:[o&&r.jsx(m,{label:"STDOUT/STDERR",output:a.map((i,_)=>r.jsx("span",{className:i.stream_name==="stderr"?"text-red-500":"",children:i.text},`${_}`))}),l&&r.jsx(m,{label:s.formatMessage({id:"codeInterpreterMessage.resultLabel",defaultMessage:"Result"}),output:t.final_expression_output}),n&&r.jsx(U,{traceback:t.in_kernel_exception.traceback.join("")})]})}function m({label:e,output:s}){return r.jsxs("div",{className:"bg-gray-700 p-4 text-xs",children:[r.jsx("div",{className:"mb-1 text-gray-400",children:e}),r.jsx("div",{className:"prose flex flex-col-reverse text-white",children:r.jsx("pre",{className:"shrink-0",children:s})})]})}function U({traceback:e}){return r.jsx("div",{className:"overflow-auto border-t border-gray-500 text-white",children:r.jsx("div",{className:"border-l-4 border-red-500 p-2 text-xs",children:r.jsx("div",{className:"scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700 flex max-h-64 flex-col-reverse",children:r.jsx("pre",{className:"shrink-0",children:e})})})})}function X({message:e}){var t;if(e.content.content_type!==p.ExecutionOutput)return null;const s=(t=e.metadata)==null?void 0:t.aggregate_result;return s?r.jsx(r.Fragment,{children:s.messages.filter(A).map((a,o)=>r.jsx(F,{jupyterMessage:a},o))}):(f.addError("Corrupt code execution result message"),null)}function L(e){return e.message_type==="stream"}function A(e){return e.message_type==="image"||"image_url"in e&&M(e.image_url+"")}export{F as C,X as a,J as b,V as c,D as g,A as i};
//# sourceMappingURL=jfohr2iyl3lnygl8.js.map