import{F as r,j as e,G as u,I as o,M as n,a4 as c}from"./nkav6u5sgjh9k32o.js";import{c as m}from"./nkdpb84sj0t5lqnq.js";function x({gizmoId:i,onSuccess:l,onClose:t}){const a=r(),s=m(),d=async()=>{try{await s.mutateAsync({gizmoId:i}),l()}catch{c.danger("Failed to delete gizmo. Please try again.")}};return e.jsx(u,{isOpen:!0,onClose:t,type:"danger",title:e.jsx(o,{id:"shLmv5",defaultMessage:"Delete GPT"}),primaryButton:e.jsx(n.Button,{title:a.formatMessage({id:"nlWRPu",defaultMessage:"Delete GPT"}),color:"danger",loading:s.isPending,onClick:()=>{d()}}),secondaryButton:e.jsx(n.Button,{title:a.formatMessage({id:"D4IuIb",defaultMessage:"Cancel"}),color:"secondary",onClick:t}),children:e.jsx("div",{className:"text-sm",children:e.jsx(o,{id:"zIR+cK",defaultMessage:"Are you sure you want to delete this GPT? This cannot be undone."})})})}export{x as G};
//# sourceMappingURL=ut6ooc1pw5v4sup9.js.map