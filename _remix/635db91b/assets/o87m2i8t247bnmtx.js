import{r as g,bb as T}from"./j18nlqm348px4nxa.js";import{_ as q,a as A,b,v as z,d as M,g as B,e as F,u as G,f as H}from"./k6emwf4nkd3q4hgp.js";var I=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],j=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,n=String(t).toLowerCase(),r=String(o.getOptionValue(a)).toLowerCase(),c=String(o.getOptionLabel(a)).toLowerCase();return r===n||c===n},L={formatCreateLabel:function(t){return'Create "'.concat(t,'"')},isValidNewOption:function(t,a,o,n){return!(!t||a.some(function(r){return j(t,r,n)})||o.some(function(r){return j(t,r,n)}))},getNewOptionData:function(t,a){return{label:a,value:t,__isNew__:!0}}};function J(e){var t=e.allowCreateWhileLoading,a=t===void 0?!1:t,o=e.createOptionPosition,n=o===void 0?"last":o,r=e.formatCreateLabel,c=r===void 0?L.formatCreateLabel:r,w=e.isValidNewOption,N=w===void 0?L.isValidNewOption:w,$=e.getNewOptionData,d=$===void 0?L.getNewOptionData:$,f=e.onCreateOption,h=e.options,l=h===void 0?[]:h,O=e.onChange,i=q(e,I),S=i.getOptionValue,V=S===void 0?B:S,P=i.getOptionLabel,_=P===void 0?F:P,s=i.inputValue,y=i.isLoading,D=i.isMulti,v=i.value,W=i.name,p=g.useMemo(function(){return N(s,A(v),l,{getOptionValue:V,getOptionLabel:_})?d(s,c(s)):void 0},[c,d,_,V,s,N,l,v]),E=g.useMemo(function(){return(a||!y)&&p?n==="first"?[p].concat(b(l)):[].concat(b(l),[p]):l},[a,n,y,p,l]),k=g.useCallback(function(u,m){if(m.action!=="select-option")return O(u,m);var x=Array.isArray(u)?u:[u];if(x[x.length-1]===p){if(f)f(s);else{var C=d(s,s),R={action:"create-option",name:W,option:C};O(z(D,[].concat(b(A(v)),[C]),C),R)}return}O(u,m)},[d,s,D,W,p,f,O,v]);return M(M({},i),{},{options:E,onChange:k})}var K=g.forwardRef(function(e,t){var a=G(e),o=J(a);return g.createElement(H,T({ref:t},o))}),X=K;export{X as C};
//# sourceMappingURL=o87m2i8t247bnmtx.js.map