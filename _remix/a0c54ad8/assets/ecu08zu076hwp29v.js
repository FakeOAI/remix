import{aw as Q,u as P,r as d,K as q,W as L,m as U,C as F,dZ as G}from"./g96yqlzu8qctmxup.js";import{c as y,d as J,e as K,R as W,g as R,a as E,V as M,b as v,I as j,f as D,h as b,r as B,L as X,i as Z,j as m}from"./h7j7olgo1n0zgw52.js";import{cl as N,iS as z,b5 as Y,iT as O,q as k,iU as ee,bf as te,gc as _}from"./lciey5sok1ead3qa.js";function $(){const t=Q("716722001").value,e=P("2436427643").value,a=P("1413999995").value;return{av:t,video:e,screenshare:a}}function ae(){oe(),ie(),se(),ne()}function ne(){const{room:t,debug:e}=y(),a=$(),s=a.video||a.av,c=d.useMemo(()=>{const n=["audioinput","audiooutput"];return s&&n.push("videoinput"),n},[s]);d.useEffect(()=>{async function n(){Promise.all(c.map(async o=>{const r=await W.getLocalDevices(o),u=t?.getActiveDevice(o);if(!r.find(g=>g.deviceId===u)){const g=await R(o);let h=null;g?h=g.deviceId:r[0]&&(h=r[0].deviceId),e(`switching ${o} to ${h}`),h&&await t?.switchActiveDevice(o,h)}}))}if(navigator)return navigator.mediaDevices.addEventListener("devicechange",n),()=>{navigator.mediaDevices.removeEventListener("devicechange",n)}},[t,e,c])}function oe(){const{room:t,debug:e}=y(),a=t?.getActiveDevice("audioinput"),s=t?.getActiveDevice("audiooutput");d.useEffect(()=>{async function c(){const n=(await R("audioinput"))?.deviceId,o=(await R("audiooutput"))?.deviceId,r=async()=>{n&&a!==n&&(e("switching audio input to default"),await t?.switchActiveDevice("audioinput",n))},u=async()=>{if(o&&s!==o){e("switching audio output to default");try{await t?.switchActiveDevice("audiooutput",o)}catch(S){e("failed to switch audio output",S)}}};await Promise.all([r(),u()])}c()},[a,s,e,t])}function ie(){const{isVideoEnabled:t,endStartingVideo:e}=J(),{room:a,debug:s}=y(),c=$(),n=c.video||c.av,o=n?a?.getActiveDevice("videoinput"):void 0;d.useEffect(()=>{async function r(){if(t)try{await a?.localParticipant.setCameraEnabled(!0),e(!0)}catch{e(!1)}else await a?.localParticipant.setCameraEnabled(!1)}a&&r()},[t,e,a]),d.useEffect(()=>{async function r(){const u=(await R("videoinput"))?.deviceId;await(async()=>{u&&o!==u&&(s("switching video input to default"),await a?.switchActiveDevice("videoinput",u))})()}n&&r()},[o,s,a,n])}function se(){const{room:t}=y(),{isScreenshareEnabled:e,endStartingScreenshare:a}=K();d.useEffect(()=>{async function s(){if(e)try{await t?.localParticipant.setScreenShareEnabled(!0,{video:{displaySurface:"monitor"}}),a(!0)}catch{a(!1)}else await t?.localParticipant.setScreenShareEnabled(!1)}t&&s()},[t,e,a])}function H(){const{debug:t}=y(),e=E(s=>s.conversationId),a=q();return d.useCallback(async s=>{const c=s,n=e&&!N(e)?e:void 0,o=c??n;if(o){t(`refetch conversationId ${o}`);try{await z(o,!0)}catch(r){const u="Failed to update conversation";t(u,r),a.danger(u)}}},[e,t,a])}const ce=5e3,re=2e3,de=t=>{const{room:e}=y(),a=E(l=>l.disconnectPending),s=E(l=>l.server.remoteState===M.Speaking),c=E(l=>l.conversationId)??void 0,n=Y(c),o=d.useRef(!1),r=H(),u=L(),S=U();o.current=s||o.current;const g=d.useCallback(async l=>{clearTimeout(a),v.setState(A=>{A.disconnectPending=void 0}),e?.disconnect(),await r(n),v.setState(j);const w=n??l;w&&O(u,S,w),t?.refetchLater&&window.setTimeout(()=>{r(n)},re)},[a,e,r,n,t?.refetchLater,u,S]),h=o.current&&!n,T=d.useCallback(()=>{v.setState(l=>{l.disconnectPending=window.setTimeout(g,ce)})},[g]);return{disconnectPending:a!==void 0,shouldDelayDisconnect:h,delayDisconnect:T,immediateDisconnect:g}};function ue(){const t=U(),{room:e,debug:a,decoder:s}=y(),{disconnectPending:c,immediateDisconnect:n}=de(),o=H(),r=L(),u=d.useRef(!1);d.useEffect(()=>{const S=async f=>{const{new_state:i}=f;v.setState(p=>{p.server.remoteState=i})},g=async f=>{v.setState(i=>{i.server.usage=f})},h=async f=>{v.setState(i=>{i.server.toolUpdate={...f}})},T=async f=>{let i;try{i=JSON.parse(s.decode(f)),a("data recevied",i)}catch(p){a("error parsing data",p);return}switch(v.setState(p=>(p.server.messages.push({...i,timestamp:new Date,source:"remote"}),p)),i.type){case b.StateUpdate:a("state update",i.payload);const{new_state:p,delay_s:V}=i.payload;if(p===M.Listening&&!u.current){u.current=!0,performance.mark("voice_mode.end");const I=performance.measure("voice_mode","voice_mode.start","voice_mode.end").duration.toFixed(0);G.voiceMode.connect({durationMs:I})}p===M.Thinking&&V&&(a(`${e?.name} delay thinking state by ${V} seconds`),S({new_state:M.ListeningIntently,delay_s:V}),await new Promise(I=>setTimeout(I,V*1e3))),S(i.payload);break;case b.ConversationUpdate:{a("conversation update",i.payload);const I=v.getState().conversationId,{conversation_id:C}=i.payload;I&&N(I)&&(k.initThread(I,{kind:F.PrimaryAssistant}),k.setServerIdForNewThread(I,C),v.setState(x=>{x.conversationId=C}),O(te,t,C),ee(t)),await o(C),c&&n(C);break}case b.UsageUpdate:g(i.payload);break;case b.ToolUpdate:h(i.payload);break}},l=(f,i)=>{a("track published",f,i)},w=()=>{a("disconnected"),B()},A=(f,i)=>{i instanceof X&&(a(`Connection quality changed for participant ${i.identity}: ${f}`),v.setState(p=>{p.server.voiceConnectionQuality=f}))};return e?.on(D.DataReceived,T),e?.on(D.TrackPublished,l),e?.on(D.ConnectionQualityChanged,A),e?.on(D.Disconnected,w),()=>{e?.off(D.DataReceived,T),e?.off(D.TrackPublished,l),e?.off(D.ConnectionQualityChanged,A),e?.off(D.Disconnected,w)}},[t,e,o,a,s,r,c,n])}function ve(){le(),fe(),pe(),Se()}function le(){const{room:t}=y();d.useEffect(()=>{v.setState(e=>{e.dev.room=t})},[t])}function fe(){const{room:t}=y(),e=Z(t);d.useEffect(()=>{v.setState(a=>{a.server.connectionState=e})},[e])}function pe(){const{room:t,debug:e,encoder:a}=y();d.useEffect(()=>{const s=!!v.getState().server.actions;if(t&&!s){const c=async n=>{e("publishing action",n);const o={type:b.ActionRequest,payload:{action:n}};await t.localParticipant.publishData(a.encode(JSON.stringify(o)),{reliable:!0}),v.setState(r=>{r.server.messages.push({...o,timestamp:new Date,source:"local"})})};v.setState(n=>{n.server.actions={[m.StartListeningIntently]:()=>c(m.StartListeningIntently),[m.StopListeningIntently]:()=>c(m.StopListeningIntently),[m.HaltAllActivity]:()=>c(m.HaltAllActivity),[m.ResumeListening]:()=>c(m.ResumeListening),[m.RelayMessage]:()=>c(m.RelayMessage)}})}},[t,e,a])}function Se(){const t=v(e=>e.isVoiceModeActive);d.useEffect(()=>(_.setState({isVoiceActive:t}),()=>{_.setState({isVoiceActive:!1})}),[t])}const he=d.memo(function(){return ue(),ve(),ae(),null});export{he as V,$ as a,de as u};
//# sourceMappingURL=ecu08zu076hwp29v.js.map