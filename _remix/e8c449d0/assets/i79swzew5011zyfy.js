import{r as o,x as t,aq as g}from"./ocp1psdvo7s079n6.js";import{D as m,aE as p}from"./hw2syyb0zdm0dkqx.js";import{cf as f}from"./rdbylepeccge9tbg.js";function c({children:e,position:s,onClick:l}){return t.jsx("button",{onClick:l,className:`absolute ${s==="left"?"left-2":"right-2"} top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md`,"aria-label":s==="left"?"Previous":"Next",children:e})}function C({frames:e,setFrameSrc:s}){const[l,d]=o.useState(0),[n,i]=o.useState(!1),r=o.useCallback((a,x)=>{d((l+e.length+x)%e.length),i(!1),a.stopPropagation()},[e.length,l]),u=o.useCallback(a=>{a.stopPropagation(),s(e[l].src)},[e,l,s]),h=o.useCallback(()=>{i(!0)},[]);return e.length===0?null:t.jsxs("div",{className:"relative flex",children:[t.jsxs("div",{className:"relative",children:[t.jsx("div",{className:`absolute flex h-full w-full items-center justify-center bg-gray-50 ${n?"hidden":"block"}`,children:t.jsx(g,{})}),t.jsx("img",{onLoad:h,onClick:u,src:e[l].src,alt:`Image ${l}`}),t.jsx("p",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 rounded-sm bg-black bg-opacity-50 p-0.5 font-mono text-sm text-white ${n?"":"hidden"}`,children:f(Math.floor(e[l].timestamp))})]}),e.length>1&&t.jsxs(t.Fragment,{children:[t.jsx(c,{position:"left",onClick:a=>r(a,-1),children:t.jsx(m,{})}),t.jsx(c,{position:"right",onClick:a=>r(a,1),children:t.jsx(p,{})})]})]})}export{C as FramesViewer};
//# sourceMappingURL=i79swzew5011zyfy.js.map