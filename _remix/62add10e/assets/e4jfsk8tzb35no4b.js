import{aj as u,a7 as c,a6 as e,bL as m,aG as o,cj as n}from"./nhth9ejvp1y38gpf.js";import{ab as g}from"./pdsi9ig2nufco8yv.js";function y({gizmoId:i,onSuccess:l,onClose:t}){const a=u(),r=c(),s=g(),d=async()=>{try{await s.mutateAsync({gizmoId:i}),l()}catch{r.danger("Failed to delete gizmo. Please try again.")}};return e.jsx(m,{isOpen:!0,onClose:t,type:"danger",title:e.jsx(o,{id:"shLmv5",defaultMessage:"Delete GPT"}),primaryButton:e.jsx(n.Button,{title:a.formatMessage({id:"nlWRPu",defaultMessage:"Delete GPT"}),color:"danger",loading:s.isPending,onClick:()=>{d()}}),secondaryButton:e.jsx(n.Button,{title:a.formatMessage({id:"D4IuIb",defaultMessage:"Cancel"}),color:"secondary",onClick:t}),children:e.jsx("div",{className:"text-sm",children:e.jsx(o,{id:"zIR+cK",defaultMessage:"Are you sure you want to delete this GPT? This cannot be undone."})})})}export{y as G};
//# sourceMappingURL=e4jfsk8tzb35no4b.js.map