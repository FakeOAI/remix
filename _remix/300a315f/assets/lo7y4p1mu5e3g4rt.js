import{a0 as u,al as c,y as e,bt as m,ae as o,bF as n}from"./go0egeb74rmznen8.js";import{d as g}from"./n5k6ufc82r8hib3t.js";function x({gizmoId:i,onSuccess:l,onClose:t}){const a=u(),d=c(),s=g(),r=async()=>{try{await s.mutateAsync({gizmoId:i}),l()}catch{d.danger("Failed to delete gizmo. Please try again.")}};return e.jsx(m,{isOpen:!0,onClose:t,type:"danger",title:e.jsx(o,{id:"shLmv5",defaultMessage:"Delete GPT"}),primaryButton:e.jsx(n.Button,{title:a.formatMessage({id:"nlWRPu",defaultMessage:"Delete GPT"}),color:"danger",loading:s.isPending,onClick:()=>{r()}}),secondaryButton:e.jsx(n.Button,{title:a.formatMessage({id:"D4IuIb",defaultMessage:"Cancel"}),color:"secondary",onClick:t}),children:e.jsx("div",{className:"text-sm",children:e.jsx(o,{id:"zIR+cK",defaultMessage:"Are you sure you want to delete this GPT? This cannot be undone."})})})}export{x as G};
//# sourceMappingURL=lo7y4p1mu5e3g4rt.js.map