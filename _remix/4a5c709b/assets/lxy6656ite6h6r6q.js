import{ap as Q,u as L,r as d,K as q,W as U,m as N,C as F,dY as C}from"./oekykjd73qa82yti.js";import{c as y,d as G,e as J,R as K,g as k,a as R,V as I,b as v,I as W,f as w,h as A,r as B,L as X,i as Y,j as h}from"./oirv62p8rnuyt431.js";import{cj as H,jc as z,b3 as Z,jd as O,q as P,je as ee,bd as te,g5 as _}from"./ea8db8p61xn3dl41.js";function $(){const t=Q("716722001").value,e=L("2436427643").value,n=L("1413999995").value;return{av:t,video:e,screenshare:n}}function ne(){ie(),oe(),se(),ae()}function ae(){const{room:t,debug:e}=y(),n=$(),s=n.video||n.av,c=d.useMemo(()=>{const a=["audioinput","audiooutput"];return s&&a.push("videoinput"),a},[s]);d.useEffect(()=>{async function a(){Promise.all(c.map(async o=>{const r=await K.getLocalDevices(o),u=t?.getActiveDevice(o);if(!r.find(S=>S.deviceId===u)){const S=await k(o);let m=null;S?m=S.deviceId:r[0]&&(m=r[0].deviceId),e(`switching ${o} to ${m}`),m&&await t?.switchActiveDevice(o,m)}}))}if(navigator)return navigator.mediaDevices.addEventListener("devicechange",a),()=>{navigator.mediaDevices.removeEventListener("devicechange",a)}},[t,e,c])}function ie(){const{room:t,debug:e}=y(),n=t?.getActiveDevice("audioinput"),s=t?.getActiveDevice("audiooutput");d.useEffect(()=>{async function c(){const a=(await k("audioinput"))?.deviceId,o=(await k("audiooutput"))?.deviceId,r=async()=>{a&&n!==a&&(e("switching audio input to default"),await t?.switchActiveDevice("audioinput",a))},u=async()=>{if(o&&s!==o){e("switching audio output to default");try{await t?.switchActiveDevice("audiooutput",o)}catch(p){e("failed to switch audio output",p)}}};await Promise.all([r(),u()])}c()},[n,s,e,t])}function oe(){const{isVideoEnabled:t,endStartingVideo:e}=G(),{room:n,debug:s}=y(),c=$(),a=c.video||c.av,o=a?n?.getActiveDevice("videoinput"):void 0;d.useEffect(()=>{async function r(){if(t)try{await n?.localParticipant.setCameraEnabled(!0),e(!0)}catch{e(!1)}else await n?.localParticipant.setCameraEnabled(!1)}n&&r()},[t,e,n]),d.useEffect(()=>{async function r(){const u=(await k("videoinput"))?.deviceId;await(async()=>{u&&o!==u&&(s("switching video input to default"),await n?.switchActiveDevice("videoinput",u))})()}a&&r()},[o,s,n,a])}function se(){const{room:t}=y(),{isScreenshareEnabled:e,endStartingScreenshare:n}=J();d.useEffect(()=>{async function s(){if(e)try{await t?.localParticipant.setScreenShareEnabled(!0,{video:{displaySurface:"monitor"}}),n(!0)}catch{n(!1)}else await t?.localParticipant.setScreenShareEnabled(!1)}t&&s()},[t,e,n])}function j(){const{debug:t}=y(),e=R(s=>s.conversationId),n=q();return d.useCallback(async s=>{const c=s,a=e&&!H(e)?e:void 0,o=c??a;if(o){t(`refetch conversationId ${o}`);try{await z(o,!0)}catch(r){const u="Failed to update conversation";t(u,r),n.danger(u)}}},[e,t,n])}const ce=5e3,re=2e3,de=t=>{const{room:e}=y(),n=R(l=>l.disconnectPending),s=R(l=>l.server.remoteState===I.Speaking),c=R(l=>l.conversationId)??void 0,a=Z(c),o=d.useRef(!1),r=j(),u=U(),p=N();o.current=s||o.current;const S=d.useCallback(async l=>{clearTimeout(n),v.setState(E=>{E.disconnectPending=void 0}),e?.disconnect(),await r(a),v.setState(W);const b=a??l;b&&O(u,p,b),t?.refetchLater&&window.setTimeout(()=>{r(a)},re)},[n,e,r,a,t?.refetchLater,u,p]),m=o.current&&!a,V=d.useCallback(()=>{v.setState(l=>{l.disconnectPending=window.setTimeout(S,ce)})},[S]);return{disconnectPending:n!==void 0,shouldDelayDisconnect:m,delayDisconnect:V,immediateDisconnect:S}};function ue(){const t=N(),{room:e,debug:n,decoder:s}=y(),{disconnectPending:c,immediateDisconnect:a}=de(),o=j(),r=U(),u=d.useRef(!1);d.useEffect(()=>{const p=async f=>{const{new_state:i}=f;v.setState(g=>{g.server.remoteState=i}),i===I.ListeningIntently?C.voiceSessionListeningIntently.stateChange():i===I.Listening?C.voiceSessionListening.stateChange():i===I.Thinking?C.voiceSessionThinking.stateChange():i===I.Speaking?C.voiceSessionSpeaking.stateChange():i===I.Halted&&C.voiceSessionHalted.stateChange()},S=async f=>{v.setState(i=>{i.server.usage=f})},m=async f=>{v.setState(i=>{i.server.toolUpdate={...f}})},V=async f=>{let i;try{i=JSON.parse(s.decode(f)),n("data recevied",i)}catch(g){n("error parsing data",g);return}switch(v.setState(g=>(g.server.messages.push({...i,timestamp:new Date,source:"remote"}),g)),i.type){case A.StateUpdate:n("state update",i.payload);const{new_state:g,delay_s:M}=i.payload;if(g===I.Listening&&!u.current){u.current=!0,performance.mark("voice_mode.end");const D=performance.measure("voice_mode","voice_mode.start","voice_mode.end").duration.toFixed(0);C.voiceMode.connect({durationMs:D})}g===I.Thinking&&M&&(n(`${e?.name} delay thinking state by ${M} seconds`),p({new_state:I.ListeningIntently,delay_s:M}),await new Promise(D=>setTimeout(D,M*1e3))),p(i.payload);break;case A.ConversationUpdate:{n("conversation update",i.payload);const D=v.getState().conversationId,{conversation_id:T}=i.payload;D&&H(D)&&(P.initThread(D,{kind:F.PrimaryAssistant}),P.setServerIdForNewThread(D,T),v.setState(x=>{x.conversationId=T}),O(te,t,T),ee(t)),await o(T),c&&a(T);break}case A.UsageUpdate:S(i.payload);break;case A.ToolUpdate:m(i.payload);break}},l=(f,i)=>{n("track published",f,i)},b=()=>{n("disconnected"),B(),C.voiceSessionDisconnected.stateChange()},E=(f,i)=>{i instanceof X&&(n(`Connection quality changed for participant ${i.identity}: ${f}`),v.setState(g=>{g.server.voiceConnectionQuality=f}))};return e?.on(w.DataReceived,V),e?.on(w.TrackPublished,l),e?.on(w.ConnectionQualityChanged,E),e?.on(w.Disconnected,b),()=>{e?.off(w.DataReceived,V),e?.off(w.TrackPublished,l),e?.off(w.ConnectionQualityChanged,E),e?.off(w.Disconnected,b)}},[t,e,o,n,s,r,c,a])}function ve(){le(),fe(),ge(),pe()}function le(){const{room:t}=y();d.useEffect(()=>{v.setState(e=>{e.dev.room=t})},[t])}function fe(){const{room:t}=y(),e=Y(t);d.useEffect(()=>{v.setState(n=>{n.server.connectionState=e})},[e])}function ge(){const{room:t,debug:e,encoder:n}=y();d.useEffect(()=>{const s=!!v.getState().server.actions;if(t&&!s){const c=async a=>{e("publishing action",a);const o={type:A.ActionRequest,payload:{action:a}};await t.localParticipant.publishData(n.encode(JSON.stringify(o)),{reliable:!0}),v.setState(r=>{r.server.messages.push({...o,timestamp:new Date,source:"local"})})};v.setState(a=>{a.server.actions={[h.StartListeningIntently]:()=>c(h.StartListeningIntently),[h.StopListeningIntently]:()=>c(h.StopListeningIntently),[h.HaltAllActivity]:()=>c(h.HaltAllActivity),[h.ResumeListening]:()=>c(h.ResumeListening),[h.RelayMessage]:()=>c(h.RelayMessage)}})}},[t,e,n])}function pe(){const t=v(e=>e.isVoiceModeActive);d.useEffect(()=>(_.setState({isVoiceActive:t}),()=>{_.setState({isVoiceActive:!1})}),[t])}const me=d.memo(function(){return ue(),ve(),ne(),null});export{me as V,$ as a,de as u};
//# sourceMappingURL=lxy6656ite6h6r6q.js.map