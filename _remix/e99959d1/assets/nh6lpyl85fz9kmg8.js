import{J as u,K as c,j as e,bz as m,aB as o,cm as n}from"./gm14raa1g9oy5lze.js";import{v as g}from"./goq6gw3hck5id2f9.js";function y({gizmoId:i,onSuccess:l,onClose:t}){const s=u(),r=c(),a=g(),d=async()=>{try{await a.mutateAsync({gizmoId:i}),l()}catch{r.danger("Failed to delete gizmo. Please try again.")}};return e.jsx(m,{isOpen:!0,onClose:t,type:"danger",title:e.jsx(o,{id:"shLmv5",defaultMessage:"Delete GPT"}),primaryButton:e.jsx(n.Button,{title:s.formatMessage({id:"nlWRPu",defaultMessage:"Delete GPT"}),color:"danger",loading:a.isPending,onClick:()=>{d()}}),secondaryButton:e.jsx(n.Button,{title:s.formatMessage({id:"D4IuIb",defaultMessage:"Cancel"}),color:"secondary",onClick:t}),children:e.jsx("div",{className:"text-sm",children:e.jsx(o,{id:"zIR+cK",defaultMessage:"Are you sure you want to delete this GPT? This cannot be undone."})})})}export{y as G};
//# sourceMappingURL=nh6lpyl85fz9kmg8.js.map