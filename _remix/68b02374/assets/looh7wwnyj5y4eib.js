import{ar as b,j as e,aq as p,ak as g,aB as i,aK as m,J as j,aQ as w,b_ as u,I as y}from"./ign6lc5qqsbgzj3q.js";import{ad as k,aJ as v,b1 as T}from"./wrbxtg8dgsjl2z0d.js";import{d_ as M,d$ as N}from"./f2jm88xc868xaf4h.js";const P=b.textarea`w-full text-sm overflow-y-auto rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium bg-token-main-surface-primary h-32`,C=b.div`mb-6`,A=b.input`w-full resize-none overflow-y-auto rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 border focus:ring-blue-400 border-token-border-medium h-9 bg-token-main-surface-primary`;function B({label:o,description:s,collapsed:r,onClick:a}){const t=e.jsx("label",{className:"block font-semibold text-token-text-primary",children:o});return e.jsxs("div",{className:"mb-1.5 flex items-center",onClick:a,children:[r!==void 0&&(r?e.jsx(v,{className:"icon-sm"}):e.jsx(k,{className:"icon-sm"})),s?e.jsx(p,{label:s,sideOffset:4,side:"top",delayDuration:0,children:t}):e.jsx(e.Fragment,{children:t})]})}function E({actionTool:o,onShowActionsEditor:s,isDisabled:r}){const a="metadata"in o?o.metadata?.domain:void 0;return e.jsxs("div",{className:g("flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",r?"bg-token-main-surface-secondary":""),onClick:s,children:[e.jsx("div",{className:"h-9 grow px-3 py-2",children:a??e.jsx("span",{className:"text-red-500",children:e.jsx(i,{id:"TJYXrY",defaultMessage:"Invalid action"})})}),e.jsx("div",{className:"w-px bg-token-border-medium"}),e.jsx("button",{disabled:r,className:"flex h-9 w-9 items-center justify-center rounded-lg rounded-l-none",children:e.jsx(T,{className:"icon-sm"})})]})}function G(){return e.jsx("div",{className:"ml-2 flex h-3.5 w-3.5 cursor-default items-center justify-center rounded-full border border-token-border-medium text-[0.5rem] font-semibold leading-none text-token-text-tertiary",children:"?"})}function S({description:o}){return e.jsx(p,{wide:!0,label:o,delayDuration:0,children:e.jsx(G,{})})}function x({label:o,toolType:s,enabledTools:r,onEnabledToolsChange:a,disabled:t,disabledTooltip:d}){const n=c=>r.some(h=>h.type===c),l=e.jsx(N,{labelClassName:"w-full cursor-pointer",id:s,label:o,checked:!t&&n(s),disabled:t,onChange:()=>{n(s)?a(r.filter(c=>c.type!==s)):a([...r,{type:s}])}});return d!=null?e.jsx("div",{className:"opacity-70",children:e.jsx(p,{side:"top",label:d,children:l})}):l}function W({enabledTools:o,onEnabledToolsChange:s}){const r=M(m.BrowsingAvailable),a=j();var t,d;const n=w(),l=n?.includes(m.SearchTool)&&!n?.includes(m.SearchToolHoldout);return l?d=e.jsx(i,{id:"gs7/Pw",defaultMessage:"Web Search"}):d=e.jsx(i,{id:"tNlef1",defaultMessage:"Web Browsing"}),r?t=void 0:t=l?e.jsx(i,{...f.disabledSearchToolTip}):e.jsx(i,{...f.disabledBrowsingToolTip}),e.jsxs("div",{className:"flex flex-col items-start gap-2",children:[e.jsx(x,{label:d,toolType:u.BROWSER,enabledTools:o,onEnabledToolsChange:s,disabled:!r,disabledTooltip:t}),e.jsx(x,{label:e.jsx(i,{id:"uSmS/p",defaultMessage:"DALL·E Image Generation"}),toolType:u.DALLE,enabledTools:o,onEnabledToolsChange:s}),e.jsx(x,{label:e.jsxs("div",{className:"flex items-center",children:[e.jsx(i,{id:"8Lv1lK",defaultMessage:"Code Interpreter & Data Analysis"}),e.jsx(S,{description:a.formatMessage(f.codeInterpreterTooltip)})]}),toolType:u.PYTHON,enabledTools:o,onEnabledToolsChange:s})]})}const f=y({disabledBrowsingToolTip:{defaultMessage:"Web browsing is disabled for your workspace. Contact your admin to enable it.",id:"GizmoEditorModelPicker.disabledBrowsingToolTip"},disabledSearchToolTip:{defaultMessage:"Web search is disabled for your workspace. Contact your admin to enable it.",id:"GizmoEditorModelPicker.disabledSearchToolTip"},codeInterpreterTooltip:{id:"GizmoEditorModelPicker.codeInterpreterTooltip",defaultMessage:"Allow this GPT to run code. When enabled, this GPT can analyze data, work with files you’ve uploaded, do math, and more."},memoryTooltip:{id:"GizmoEditorModelPicker.memoryTooltip",defaultMessage:"Allow this GPT to pick up on users details and preferences to tailor its responses to them. When enabled, users will need to have memory on to use this GPT."}});export{C as F,W as G,B as a,A as b,P as c,E as d};
//# sourceMappingURL=looh7wwnyj5y4eib.js.map