import{dP as i,r as d,dq as P,bo as C,dQ as L,P as f,dR as A,ao as _,dS as m,ar as E,av as M,F as p}from"./nnyk78t8q5ujpq3v.js";import{k as T}from"./drlmw8ryhjw90sbn.js";import{aT as y,B as g,aU as b,aV as v}from"./iur75b70r43x5asm.js";const B="text-davinci-002-render-sha",N="gpt-4",W="gpt-4o",K="o1-preview",V="o1-mini",l=y({slug:g,max_tokens:4097,title:"Default",description:"",tags:[i.GPT_3_5],product_features:{}}),G=({default_model:e,tagline:o,color:t,human_category_name:s,category:r,human_category_short_name:n,human_category_shorter_name:a,subscription_level:c,short_explainer:h,subcategory:I,...O})=>({color:t,tagline:o,defaultModel:e,label:s,shortLabel:n,description:h,shorterLabel:a??n,subscriptionLevel:c,categoryId:r,subcategory:I,...O}),F=({icon:e,icon_filled_src:o,icon_outline_src:t})=>({iconName:e,iconFilledSrc:o,iconOutlineSrc:t}),x=({group:e,human_group_name:o,human_group_short_name:t,model_ids:s})=>({group:e,label:o,shortLabel:t,modelIds:s});function U(){return M({retry:5,queryKey:["modelIcons"],queryFn:async()=>await p.getModelIcons().then(e=>Object.fromEntries(Object.entries(e).map(([o,t])=>[o,F(t)])))})}function R(e){return M({retry:5,queryKey:["models",{isHistoryDisabled:e}],queryFn:async()=>await p.getModels(e).then(o=>{const{models:t,internal_groups:s,categories:r}=o,n=t.map(y);return{categories:r.concat().reverse().map(G),groups:(s==null?void 0:s.map(x))??[],modelsList:n,modelsMap:Object.fromEntries(n.map(a=>[a.id,a]))}})})}function u(){const e=A();return _(R(e))}function z(){return _(U())}function S({isRegen:e=!1}={}){const{isLoading:o,data:{categories:t=[],groups:s=[]}={}}=u(),r=d.useMemo(()=>e?t.filter(n=>n.is_regenerate_category!==!1):t.filter(n=>!n.is_regenerate_category),[t,e]);return{isLoading:o,categories:r,groups:s??[]}}function Z(){const{categories:e}=S();return!!e.find(({categoryId:o})=>o===b.GPT4o)}function $(){const{data:e}=u();return d.useMemo(()=>e?new Set(Object.keys(e.modelsMap)):new Set([g]),[e])}const D={[g]:l};function H(){const{data:e}=u();return(e==null?void 0:e.modelsMap)??D}function k(e,o,t){let s=i.GPT_3_5;return t?s=i.GPT_4:o&&(s=i.GPT_4o),(e==null?void 0:e.modelsList.find(r=>r.tags.includes(s)))??(e==null?void 0:e.modelsList[0])??l}function J(e=!1){const o=P(),t=C(),[,s]=L();return d.useCallback(({location:r,modelId:n})=>{const a=o.pathname.includes("/g/");e||a?(f.logNewChatButtonClicked({location:r}),t({pathname:"/",search:`?model=${encodeURIComponent(n)}`})):(s(c=>(c.set("model",encodeURIComponent(n)),c)),f.logNewChatButtonClicked({location:r}))},[e,o,t,s])}function X(){const{data:{categories:e=[]}={}}=u(),{doesUserHaveAnyAccountsWithPlusFeatures:o}=m();if(o)return null;const t=e.find(v);return(t==null?void 0:t.defaultModel)??null}function q(e){return T(e)}function Y(e){const o=q(e),t=H();return d.useMemo(()=>o==null?l:t[o]??l,[o,t])}function ee(e){return decodeURIComponent(e.model??"")||null}function te(){const{data:e}=u(),{doesUserHaveAnyAccountsWithPlusFeatures:o}=m(),t=E();return k(e,!!o,!!(t!=null&&t.isEnterprise()))}export{W as G,K as O,B as S,q as a,S as b,te as c,Z as d,u as e,Y as f,N as g,$ as h,ee as i,H as j,V as k,z as l,X as m,J as u};
//# sourceMappingURL=gernd4k9qsapeqs5.js.map