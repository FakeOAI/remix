import{r as o,ay as S,ax as g,a6 as u}from"./l0y3ohwtclivvm2c.js";function a(t,e,s){try{const n=JSON.parse(window.localStorage.getItem(t)??"");return s(n)?n:e}catch{return e}}function E(t,e){window.localStorage.setItem(t,JSON.stringify(e))}function I(t,e,s){const[n,i]=o.useState(()=>a(t,e,s));return o.useEffect(()=>{i(()=>a(t,e,s))},[t,e,s]),o.useEffect(()=>{E(t,n)},[t,n]),[n,i]}const T="SONIC_SETTINGS_1717364375";function N(t){return typeof t.version=="number"&&t.version>=r.version}function m(t){return!(typeof t!="object"||typeof t.suggestions!="boolean")}const r={version:0,useLocation:!1,temperatureUnit:void 0};function c(t){try{const e=S.getItem(g.SearchSettings,{userId:t});return N(e)?e:r}catch{return r}}const f=o.createContext({settings:r,setSettings:()=>{}}),v=({userId:t,children:e})=>{const[s,n]=o.useState(()=>c(t));return o.useEffect(()=>n(c(t)),[t]),o.useEffect(()=>{S.setItem(g.SearchSettings,s,{userId:t})},[s,t]),u.jsx(f.Provider,{value:{settings:s,setSettings:n},children:e})},l={suggestions:!0,showInlineFollowups:!1},x=o.createContext({settings:l,setSettings:()=>{}}),L=({userId:t,children:e})=>{const[s,n]=I(`_INTERNAL_${t}_${T}`,l,m);return u.jsx(x.Provider,{value:{settings:s,setSettings:n},children:e})};function C(){const{settings:t,setSettings:e}=o.useContext(f);return[t,e]}function _(){const{settings:t,setSettings:e}=o.useContext(x);return[t,e]}export{l as I,v as S,_ as a,C as b,L as c,I as u};
//# sourceMappingURL=nmf6ngnnyd0g985i.js.map