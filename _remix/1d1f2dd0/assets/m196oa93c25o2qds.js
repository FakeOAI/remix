import{h as r,e9 as n,D as p}from"./lyvmbpf7ocwbhkqv.js";var d=(e=>(e.SCALLION="scallion",e.SCALLION_RC="scallion-rc",e))(d||{});const y=async({queryKey:e})=>{const[t,c]=e;if(c.length<2)return[];const o=new URLSearchParams({query_fragment:c});return r.get(`${n}/suggestions?${o.toString()}`).then(s=>s.suggestions).catch(()=>[])};async function b({threadId:e,sessionId:t,query:c,agentSettingsOverrides:o,metadata:s}){const f=_(o),a=e?`${n}/threads/${e}/turns?blocking=false`:`${n}/turns?nonce=${t}`;o.emulated_location&&(s={...s,...o.emulated_location});const i=new PerformanceObserver(h=>{const l=h.getEntriesByName(a,"resource");if(l.length){const u=l[0];if(u.connectEnd){const g=u.connectEnd-u.fetchStart;p.addAction("sonic.web.home.new_turn_connection_time",{durationMs:g})}i.disconnect()}});return i.observe({type:"resource"}),r.post(a,{...f,turn:{user_query:c,now:o.emulated_date?new Date(o.emulated_date).toISOString():void 0},user_metadata:s})}async function $(){return r.delete(`${n}/threads`)}function _(e){return{settings_overrides:{search_results:{search_engines:e.use_labrador?{bing:{}}:{bing:{ranking_model:null,rrf_alpha:1,rrf_input_threshold:0},labrador:null}},model_response:{enable_multimodal:e.show_image_to_model,completion_model:e.completion_model&&e.completion_model!=="production"?{model:e.completion_model,clip_model:"@mmapi",direct_connection_urls:[]}:{}}},base_config:e.base_config??d.SCALLION,eval_preset:e.eval_preset}}async function k({threadId:e,threadUserId:t,routePrefix:c}){let o=n;c&&(o=o+c);const s=new URL(`${o}/threads/${e}/with_turns`);return t&&s.searchParams.append("thread_user_id",t),await r.get(s.toString())}async function w(e){const t=new FormData;return t.append("feedback",JSON.stringify({thread_id:e.threadId,turn_index:e.turnIndex,rating:e.rating,search_query:e.searchQuery,text:e.text,model_instructions:e.modelInstructions,tags:e.tags,user_email:e.userEmail})),e.screenshot&&t.append("file",new File([e.screenshot],"screenshot.jpeg",{type:"image/jpeg"})),r.post(`${n}/feedback/turns`,t)}async function L(e,t){return r.post(`${n}/threads/${e}/turns/${t}/images_try_hard`)}async function F(){return r.get(`${n}/feedback/turns`)}async function T(e,t){return r.get(`${n}/feedback/turns/${e}/${t}`)}async function I(e,t){return r.get(`${n}/feedback/links/${e}/${t}`)}async function x(e){const t=new FormData;return e.screenshot&&t.append("file",new File([e.screenshot],"screenshot.jpeg",{type:"image/jpeg"})),t.append("feedback",JSON.stringify({thread_id:e.threadId,url:e.url,title:e.title,snippet:e.snippet,rating:e.rating,search_query:e.searchQuery,text:e.text,tags:e.tags,user_email:e.userEmail,turn_index:e.turnIndex})),r.post(`${n}/feedback/links`,t)}function q(e){const t=_(e.agentSettingsOverrides);r.post(`${n}/prefetch`,{...t,turn:{user_query:e.query},user_metadata:e.metadata})}function D(){return r.get(`${n}/healthcheck`)}function E(){return r.post(`${n}/waitlist`)}export{d as B,I as a,T as b,F as c,$ as d,L as e,E as f,k as g,D as h,b as i,y as j,w as k,x as l,_ as p,q as r};
//# sourceMappingURL=m196oa93c25o2qds.js.map