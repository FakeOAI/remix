import{u as m}from"./h1m0b4qkc9uqut2y.js";import{S as h,z as p,D as g,r as a,aH as A}from"./bahzwkph2ne3eyls.js";import{b9 as I}from"./osssmfbfx387nkfp.js";import"./l2euh9jr36irqfhd.js";var i={};Object.defineProperty(i,"__esModule",{value:!0});i.default=k;function k(t){return{id:"auth0",name:"Auth0",wellKnown:`${t.issuer}/.well-known/openid-configuration`,type:"oauth",authorization:{params:{scope:"openid email profile"}},checks:["pkce","state"],idToken:!0,profile(e){return{id:e.sub,name:e.nickname,email:e.email,image:e.picture}},style:{logo:"/auth0.svg",text:"#fff",bg:"#EB5424"},options:t}}function b(){const t=m(),e=h(),u=p(),s=I(),n=g(),[o,d]=a.useState(!1),[r,l]=a.useState(!1);a.useEffect(()=>{if(t.accountId&&!o){const{setCookie:f}=A(u,t.accountId,s,n);f&&d(!0)}},[t.accountId,o,u,s,n]);const c=!t.accountId||o;return a.useEffect(()=>{!r&&c&&(e.replace(t.toUrl),l(!0))},[r,c,t.accountId,t.toUrl,e]),null}export{b as default};
//# sourceMappingURL=il6y94i87halae5p.js.map