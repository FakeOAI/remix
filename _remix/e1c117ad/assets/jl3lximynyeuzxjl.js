import{r as c,j as m,ar as I,aD as u,e8 as f,l,D as p}from"./ns1tfo6glfhr2njn.js";import{ac as h,bo as d,bp as g}from"./lnlvqx2sg8j5t2nm.js";function y({className:s,onLoad:a,fadeIn:r=!0,...t}){const[e,o]=c.useState(!1);function n(i){o(!0),a?.(i)}return m.jsx("img",{...t,alt:t.alt,onLoad:i=>n(i),className:I(s,r&&"transition-opacity duration-300",e?"opacity-100":"opacity-0")})}function T(s,a){const r=c.useContext(h),{isUnauthenticated:t}=u(),e=r?.serverSharedThreadId;return f({queries:s.map(o=>d.makeQueryOptions({asset:o,sharedThreadId:e,gizmoId:a,isUnauthenticated:t}))})}function v(s,a){const r=c.useContext(h),{isUnauthenticated:t}=u(),e=r?.serverSharedThreadId;return l(d.makeQueryOptions({asset:s,sharedThreadId:e,gizmoId:a,isUnauthenticated:t}))}async function A(s,a,r,t){return await Promise.all(a.map(e=>d.fetch(s,{asset:e,sharedThreadId:r,gizmoId:t}))).catch(e=>{const o=a.map(n=>g(n.asset_pointer));throw p.addError(new Error(`Could not fetch files with IDs ${o} from file service`,{cause:e})),e})}export{y as I,v as a,A as f,T as u};
//# sourceMappingURL=jl3lximynyeuzxjl.js.map