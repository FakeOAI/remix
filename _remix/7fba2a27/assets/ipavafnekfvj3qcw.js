import{H as r,j as e,I as u,K as o,M as n,a7 as c}from"./mcyyoqk6c65s5m7y.js";import{i as m}from"./nh1durdkfwadep5g.js";function x({gizmoId:i,onSuccess:l,onClose:t}){const a=r(),s=m(),d=async()=>{try{await s.mutateAsync({gizmoId:i}),l()}catch{c.danger("Failed to delete gizmo. Please try again.")}};return e.jsx(u,{isOpen:!0,onClose:t,type:"danger",title:e.jsx(o,{id:"shLmv5",defaultMessage:"Delete GPT"}),primaryButton:e.jsx(n.Button,{title:a.formatMessage({id:"nlWRPu",defaultMessage:"Delete GPT"}),color:"danger",loading:s.isPending,onClick:()=>{d()}}),secondaryButton:e.jsx(n.Button,{title:a.formatMessage({id:"D4IuIb",defaultMessage:"Cancel"}),color:"secondary",onClick:t}),children:e.jsx("div",{className:"text-sm",children:e.jsx(o,{id:"zIR+cK",defaultMessage:"Are you sure you want to delete this GPT? This cannot be undone."})})})}export{x as G};
//# sourceMappingURL=ipavafnekfvj3qcw.js.map