import{a0 as b,$ as L,r as a,y as e,ae as S,aA as O,P as V,d as _,aw as B,as as q,cT as I,L as P}from"./mmal6p4kl22zfrfg.js";import{L as D,aK as U,aL as z,aM as K,K as R,aN as Q}from"./esia9ah6q4vsupvt.js";import{df as y,L as M,bE as W,dh as Y}from"./i8crxwujeo3n60om.js";import{w as G}from"./meoz9lbdxu4dt41d.js";import{u as H,a as X,b as $}from"./l951i3tqtzl7uap8.js";import{d as J}from"./a44b3m5ml1mx5nn4.js";import{V as Z,T as ee}from"./dt57uuz3tezdglq7.js";import{m as se}from"./pbffjd4sant9qggz.js";import"./lwk11n9qbjlycof7.js";import"./bsb95162x99e4fe7.js";import"./lcjgntdwka0pcoze.js";import"./o6w9okc5vn9scj4w.js";import"./iziiga9sc3emkx6a.js";import"./ewaqnxa4l26dslc9.js";import"./jyusxtzzgs4ihqfz.js";import"./f5g3yf6rejksa6rn.js";function te({conversationId:t}){const s=b(),o=y(M.hasSeenAdvancedVoiceNuxFullPage),n=L(),c=n?.isPlus()??!1,r=n?.isEnterprisey()??!1,d=!c&&!r,m="https://help.openai.com/en/articles/8400625-voice-mode-faq#h_c5d6fe534b",[p,i]=a.useState(!1),[u,f]=a.useState(!1),[g,v]=a.useState(!1),[k,N]=a.useState(!0);a.useEffect(()=>{requestAnimationFrame(()=>f(!0))},[]);const l=()=>{v(!0),i(!0),setTimeout(async()=>{N(!1)},ee)},j=()=>{o.markAsViewed()},x=e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(D,{className:"mr-4 h-8 w-8"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("h4",{className:"font-semibold text-token-text-primary",children:s.formatMessage({id:"TFfx7w",defaultMessage:"Natural conversations"})}),e.jsx("p",{className:"text-token-text-secondary",children:s.formatMessage({id:"qR+v5Q",defaultMessage:"Senses and responds to interruptions, humor, and more."})})]})]}),C=e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(U,{className:"mr-4 h-8 w-8"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("h4",{className:"font-semibold text-token-text-primary",children:s.formatMessage({id:"br49Gd",defaultMessage:"Free monthly preview"})}),e.jsx("p",{className:"text-token-text-secondary",children:s.formatMessage({id:"LhOfga",defaultMessage:"Use advanced voice for a short period each month."})})]})]}),T=e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(z,{className:"mr-4 h-8 w-8"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("h4",{className:"font-semibold text-token-text-primary",children:s.formatMessage({id:"84QiAT",defaultMessage:"Multiple voices"})}),e.jsx("p",{className:"text-token-text-secondary",children:s.formatMessage({id:"yYgwEW",defaultMessage:"Offers an expanded set of voices to choose from."})})]})]}),w=e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(K,{className:"mr-4 h-8 w-8"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("h4",{className:"font-semibold text-token-text-primary",children:s.formatMessage({id:"M/x7uJ",defaultMessage:"Personalized to you"})}),e.jsx("p",{className:"text-token-text-secondary",children:s.formatMessage({id:"QZXq7u",defaultMessage:"Can use memory and custom instructions to shape responses."})})]})]}),A=e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(R,{className:"mr-4 h-8 w-8"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("h4",{className:"font-semibold text-token-text-primary",children:s.formatMessage({id:"e6n5kr",defaultMessage:"You’re in control"})}),e.jsx("p",{className:"text-token-text-secondary",children:r?e.jsx(S,{id:"4szv66",defaultMessage:"Your audio recordings are saved but not used for training. Learn how to <link>manage recordings</link>.",values:{link:h=>e.jsx("a",{href:m,target:"_blank",rel:"noopener noreferrer",className:"underline",children:h})}}):e.jsx(S,{id:"M/k4S5",defaultMessage:"Audio recordings are saved, and you can delete them at any time. Learn how to <link>manage recordings</link>.",values:{link:h=>e.jsx("a",{href:m,target:"_blank",rel:"noopener noreferrer",className:"underline",children:h})}})})]})]}),F=d?[C,x,w,A]:[x,T,w,A];return e.jsxs(e.Fragment,{children:[p&&e.jsx(W,{children:e.jsx(se.div,{children:e.jsx(Z,{conversationId:t,onClose:j,cameFromNux:!0})})}),k&&e.jsx("div",{className:`fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-token-main-surface-primary transition-opacity duration-300 ${u&&!g?"opacity-100":"opacity-0"} overflow-y-auto`,children:e.jsxs("div",{className:"mx-auto w-full max-w-lg px-4 text-center",children:[e.jsx("h1",{className:"mb-9 text-2xl font-semibold text-token-text-primary",children:d?s.formatMessage({id:"XV3+9K",defaultMessage:"Sneak a peek at advanced voice mode"}):s.formatMessage({id:"9YnxDX",defaultMessage:"Say hello to advanced voice mode"})}),e.jsx("div",{className:"mb-9 space-y-5",children:F.map((h,E)=>e.jsx("div",{children:h},E))}),e.jsxs("p",{className:"mb-9 text-sm text-token-text-primary",children:[s.formatMessage({id:"vtcf3s",defaultMessage:"Voice mode can make mistakes — check important info."}),e.jsx("br",{}),s.formatMessage({id:"4nw2S2",defaultMessage:"Usage limits may change."})]}),e.jsx(O,{className:"rounded-full bg-token-text-primary px-20 py-3 font-semibold",onClick:l,children:e.jsx(S,{id:"ppi93b",defaultMessage:"Continue"})})]})})]})}const ae={default_voice_mode:"advanced",modes:[{mode:"advanced",default_model_slug:G,disabled_mode_metadata:null,description:"Advanced Voice Mode",display_name:"Advanced Voice",info_message:{actions:[],buttons:[],hint:"Advanced Voice",message_markdown:"Advanced Voice",message:"Advanced Voice",title:"Advanced Voice",display_at_launch:!1},disclosure_message:null,resets_after:"None"}],chatreq_token:"default"};function oe(){const t=P("2775516364").value,s=y(M.hasSeenAdvancedVoiceNuxFullPage);return!s.isLoading&&s.eligible&&t}function ne(){const t=P("562926978").value,s=y(M.hasSeenAdvancedVoiceWebNuxTooltip);return{shouldShowTooltipNux:!s.isLoading&&s.eligible&&t,tooltipAnnouncement:s}}function be({clientThreadId:t,gizmoId:s}){const o=J(t),c=b().formatMessage({id:"HDu59A",defaultMessage:"Start voice mode"}),[r,d]=a.useState(!1),[m,p]=a.useState(!1),i=oe(),{shouldShowTooltipNux:u,tooltipAnnouncement:f}=ne(),g=H(),v=o??t,k=X(l=>l.isVoiceModeActive);a.useEffect(()=>{i||p(!1)},[i]);const N=a.useCallback(async()=>{if(V.logEvent(_.composerSpeechButtonClicked),u&&f.markAsViewed(),i){p(!0);return}let l;d(!0);try{l=await g({conversation_id:o??null,requested_voice_mode:"advanced",gizmo_id:s??null},"composer_speech_button")}finally{d(!1)}const j=l??ae;$.setState(x=>{x.voiceStatus=j,x.isVoiceModeActive=!0})},[g,i,u,f,s,o]);return e.jsxs(e.Fragment,{children:[m&&e.jsx(te,{conversationId:v}),!m&&e.jsx(ie,{showNuxTooltip:u,tooltipAnnouncement:f,children:e.jsx("button",{"data-testid":"composer-speech-button",onClick:N,"aria-label":c,disabled:k||r,className:"flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:bg-white dark:text-black dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary",children:r?e.jsx(B,{}):e.jsx(Q,{})})})]})}function ie({children:t,showNuxTooltip:s,tooltipAnnouncement:o}){const n=b();return s?e.jsx(Y,{side:"top",show:!0,badge:"new",dismissOnOutsideClick:!0,title:n.formatMessage({id:"DQ6CAP",defaultMessage:"Try advanced voice mode"}),contentAlign:"center",onDismiss:o.markAsViewed,sideOffset:2,children:e.jsx("div",{children:t})}):e.jsx(q,{sideOffset:14,label:n.formatMessage({id:"i4P/ix",defaultMessage:"Use voice mode"}),side:"top",onOpenChange:c=>{c&&(V.logEvent(_.composerSpeechButtonHovered),I.composerSpeechButton.hover())},children:t})}export{be as ComposerSpeechButton};
//# sourceMappingURL=ib7qgt0yo8n504ik.js.map