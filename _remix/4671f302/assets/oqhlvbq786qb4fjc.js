import{v as i}from"./o02kugc5eyp7bzuk.js";import{b1 as h,r as o,b5 as s}from"./cya1ek7zbsww3e8p.js";import"./m1h3d66e9x9d8av7.js";function c(){const[a]=h(),e=i(),r=o.useRef(!1);return o.useEffect(()=>{if(r.current)return;r.current=!0;let t;const u=a.get("auth_flow");u==="auth0"?t=s.Auth0:u==="authapi"&&(t=s.AuthApi),e({authType:"login",forceAuthFlow:t})},[e,a]),null}export{c as default};
//# sourceMappingURL=oqhlvbq786qb4fjc.js.map