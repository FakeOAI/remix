import{et as k,eu as O}from"./ez11474bqjo66p5i.js";import"./k83stg9qxgxqphbx.js";function f(a,i){return Object.keys(i).reduce(function(e,t){if(t.startsWith(a)){var r=t.substr(a.length);e[r]=i[t]}return e},{})}function x(a,i){var e=document.createElement("a");e.href=i;var t=e.search.slice(1),r=t.split("&").reduce(function(o,P){var j=P.split("="),b=j[0],S=j[1];return o[b]=k(S),o},{}),s=[],p=r.ajs_uid,c=r.ajs_event,m=r.ajs_aid,u=O(a.options.useQueryString)?a.options.useQueryString:{},n=u.aid,l=n===void 0?/.+/:n,_=u.uid,A=_===void 0?/.+/:_;if(m){var d=Array.isArray(r.ajs_aid)?r.ajs_aid[0]:r.ajs_aid;l.test(d)&&a.setAnonymousId(d)}if(p){var v=Array.isArray(r.ajs_uid)?r.ajs_uid[0]:r.ajs_uid;if(A.test(v)){var h=f("ajs_trait_",r);s.push(a.identify(v,h))}}if(c){var y=Array.isArray(r.ajs_event)?r.ajs_event[0]:r.ajs_event,g=f("ajs_prop_",r);s.push(a.track(y,g))}return Promise.all(s)}export{x as queryString};
//# sourceMappingURL=7a58zihxwgriacpt.js.map