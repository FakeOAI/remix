import{dq as p,dr as v}from"./lj2b9v3ilohzzubf.js";import{i as b,g as M,l as N}from"./okddaa6koyd5xyj8.js";import"./np8fo7dxv82gt6zv.js";function S(o,w,h){var i;return p(this,void 0,void 0,function(){var s,l,c,d,n,g=this;return v(this,function(u){switch(u.label){case 0:return b()?[2,[]]:(s=M(),l=(i=w.enabledMiddleware)!==null&&i!==void 0?i:{},c=Object.entries(l).filter(function(r){r[0];var e=r[1];return e}).map(function(r){var e=r[0];return e}),d=c.map(function(r){return p(g,void 0,void 0,function(){var e,a,m,f;return v(this,function(t){switch(t.label){case 0:e=r.replace("@segment/",""),a=e,h&&(a=btoa(e).replace(/=/g,"")),m="".concat(s,"/middleware/").concat(a,"/latest/").concat(a,".js.gz"),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,N(m)];case 2:return t.sent(),[2,window["".concat(e,"Middleware")]];case 3:return f=t.sent(),o.log("error",f),o.stats.increment("failed_remote_middleware"),[3,4];case 4:return[2]}})})}),[4,Promise.all(d)]);case 1:return n=u.sent(),n=n.filter(Boolean),[2,n]}})})}export{S as remoteMiddlewares};
//# sourceMappingURL=ry0tyqqanre44m2b.js.map