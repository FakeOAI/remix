import{r as c,_ as H}from"./mcyyoqk6c65s5m7y.js";import{a as A,v as I,g as J,b as R,d as T}from"./cyokxgzk3nk1705p.js";import{cG as q,cH as b,cI as M,cJ as z}from"./eqi5dfq4lqgt3gmd.js";var B=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],j=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,n=String(t).toLowerCase(),r=String(o.getOptionValue(a)).toLowerCase(),g=String(o.getOptionLabel(a)).toLowerCase();return r===n||g===n},L={formatCreateLabel:function(t){return'Create "'.concat(t,'"')},isValidNewOption:function(t,a,o,n){return!(!t||a.some(function(r){return j(t,r,n)})||o.some(function(r){return j(t,r,n)}))},getNewOptionData:function(t,a){return{label:a,value:t,__isNew__:!0}}};function F(e){var t=e.allowCreateWhileLoading,a=t===void 0?!1:t,o=e.createOptionPosition,n=o===void 0?"last":o,r=e.formatCreateLabel,g=r===void 0?L.formatCreateLabel:r,w=e.isValidNewOption,N=w===void 0?L.isValidNewOption:w,$=e.getNewOptionData,d=$===void 0?L.getNewOptionData:$,f=e.onCreateOption,h=e.options,l=h===void 0?[]:h,O=e.onChange,i=q(e,B),S=i.getOptionValue,V=S===void 0?J:S,P=i.getOptionLabel,_=P===void 0?R:P,s=i.inputValue,y=i.isLoading,D=i.isMulti,v=i.value,W=i.name,p=c.useMemo(function(){return N(s,A(v),l,{getOptionValue:V,getOptionLabel:_})?d(s,g(s)):void 0},[g,d,_,V,s,N,l,v]),E=c.useMemo(function(){return(a||!y)&&p?n==="first"?[p].concat(b(l)):[].concat(b(l),[p]):l},[a,n,y,p,l]),k=c.useCallback(function(u,m){if(m.action!=="select-option")return O(u,m);var x=Array.isArray(u)?u:[u];if(x[x.length-1]===p){if(f)f(s);else{var C=d(s,s),G={action:"create-option",name:W,option:C};O(I(D,[].concat(b(A(v)),[C]),C),G)}return}O(u,m)},[d,s,D,W,p,f,O,v]);return M(M({},i),{},{options:E,onChange:k})}var K=c.forwardRef(function(e,t){var a=z(e),o=F(a);return c.createElement(T,H({ref:t},o))}),Y=K;export{Y as C};
//# sourceMappingURL=b26d4khzhx7ogybe.js.map