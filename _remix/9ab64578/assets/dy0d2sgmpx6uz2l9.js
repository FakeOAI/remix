import{aj as S,a3 as B,r as a,a6 as e,aG as b,bI as V,aK as L,P as C,d as P,b0 as I,aY as q,dB as U,U as _}from"./n6pd72le962cb7i2.js";import{Q as z,a4 as D,aW as Y,aX as G,P as Q,aY as R}from"./b84o1u0lhllftt1g.js";import{dB as y,F as M,bA as W,bc as H,dG as K,dH as X}from"./jz3yie9s5yhl0osu.js";import{u as J,a as Z,b as $}from"./hdi6da5gb8sjik9d.js";import{V as ee,T as se}from"./c8k21u4r4rgqxgaj.js";import{m as te}from"./j8qj2mi7846az0e7.js";import"./hy21uuzjkoi9r4jc.js";import"./iimzyot6hhcmz5qa.js";function ae({conversationId:t}){const s=S(),o=y(M.hasSeenAdvancedVoiceNuxFullPage),n=B(),c=n?.isPlus()??!1,r=n?.isEnterprisey()??!1,d=!c&&!r,u="https://help.openai.com/en/articles/8400625-voice-mode-faq#h_c5d6fe534b",[g,i]=a.useState(!1),[m,f]=a.useState(!1),[v,k]=a.useState(!1),[N,j]=a.useState(!0);a.useEffect(()=>{requestAnimationFrame(()=>f(!0))},[]);const l=()=>{k(!0),i(!0),setTimeout(async()=>{j(!1)},se)},x=()=>{o.markAsViewed()},h=e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(z,{className:"mr-4 h-8 w-8"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("h4",{className:"font-semibold text-token-text-primary",children:s.formatMessage({id:"TFfx7w",defaultMessage:"Natural conversations"})}),e.jsx("p",{className:"text-token-text-secondary",children:s.formatMessage({id:"qR+v5Q",defaultMessage:"Senses and responds to interruptions, humor, and more."})})]})]}),T=e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(D,{className:"mr-4 h-8 w-8"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("h4",{className:"font-semibold text-token-text-primary",children:s.formatMessage({id:"br49Gd",defaultMessage:"Free monthly preview"})}),e.jsx("p",{className:"text-token-text-secondary",children:s.formatMessage({id:"LhOfga",defaultMessage:"Use advanced voice for a short period each month."})})]})]}),F=e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(Y,{className:"mr-4 h-8 w-8"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("h4",{className:"font-semibold text-token-text-primary",children:s.formatMessage({id:"84QiAT",defaultMessage:"Multiple voices"})}),e.jsx("p",{className:"text-token-text-secondary",children:s.formatMessage({id:"yYgwEW",defaultMessage:"Offers an expanded set of voices to choose from."})})]})]}),w=e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(G,{className:"mr-4 h-8 w-8"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("h4",{className:"font-semibold text-token-text-primary",children:s.formatMessage({id:"M/x7uJ",defaultMessage:"Personalized to you"})}),e.jsx("p",{className:"text-token-text-secondary",children:s.formatMessage({id:"QZXq7u",defaultMessage:"Can use memory and custom instructions to shape responses."})})]})]}),A=e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(Q,{className:"mr-4 h-8 w-8"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("h4",{className:"font-semibold text-token-text-primary",children:s.formatMessage({id:"e6n5kr",defaultMessage:"You’re in control"})}),e.jsx("p",{className:"text-token-text-secondary",children:r?e.jsx(b,{id:"4szv66",defaultMessage:"Your audio recordings are saved but not used for training. Learn how to <link>manage recordings</link>.",values:{link:p=>e.jsx("a",{href:u,target:"_blank",rel:"noopener noreferrer",className:"underline",children:p})}}):e.jsx(b,{id:"M/k4S5",defaultMessage:"Audio recordings are saved, and you can delete them at any time. Learn how to <link>manage recordings</link>.",values:{link:p=>e.jsx("a",{href:u,target:"_blank",rel:"noopener noreferrer",className:"underline",children:p})}})})]})]}),E=d?[T,h,w,A]:[h,F,w,A];return e.jsxs(e.Fragment,{children:[e.jsx(V,{isOpen:g,onClose:x,type:"success",size:"fullscreen",className:"bg-token-main-surface-primary",children:e.jsx(W,{children:e.jsx(te.div,{children:e.jsx(ee,{conversationId:t,onClose:x,cameFromNux:!0})})})}),e.jsx(V,{isOpen:N,onClose:x,type:"success",size:"fullscreen",className:`transition-opacity duration-300 ${m&&!v?"opacity-100":"opacity-0"}`,showOverlayBackground:!1,children:e.jsxs("div",{className:"mx-auto flex h-full w-full max-w-lg flex-col items-center justify-center px-4 text-center",children:[e.jsx("h1",{className:"mb-9 text-2xl font-semibold text-token-text-primary",children:d?s.formatMessage({id:"XV3+9K",defaultMessage:"Sneak a peek at advanced voice mode"}):s.formatMessage({id:"9YnxDX",defaultMessage:"Say hello to advanced voice mode"})}),e.jsx("div",{className:"mb-9 space-y-5",children:E.map((p,O)=>e.jsx("div",{children:p},O))}),e.jsxs("p",{className:"mb-9 text-sm text-token-text-primary",children:[s.formatMessage({id:"vtcf3s",defaultMessage:"Voice mode can make mistakes — check important info."}),e.jsx("br",{}),s.formatMessage({id:"4nw2S2",defaultMessage:"Usage limits may change."})]}),e.jsx(L,{className:"rounded-full bg-token-text-primary px-20 py-3 font-semibold",onClick:l,children:e.jsx(b,{id:"ppi93b",defaultMessage:"Continue"})})]})})]})}const oe={default_voice_mode:"advanced",modes:[{mode:"advanced",default_model_slug:X,disabled_mode_metadata:null,description:"Advanced Voice Mode",display_name:"Advanced Voice",info_message:{actions:[],buttons:[],hint:"Advanced Voice",message_markdown:"Advanced Voice",message:"Advanced Voice",title:"Advanced Voice",display_at_launch:!1},disclosure_message:null,resets_after:"None"}],chatreq_token:"default"};function ne(){const t=_("2775516364").value,s=y(M.hasSeenAdvancedVoiceNuxFullPage);return!s.isLoading&&s.eligible&&t}function ie(){const t=_("562926978").value,s=y(M.hasSeenAdvancedVoiceWebNuxTooltip);return{shouldShowTooltipNux:!s.isLoading&&s.eligible&&t,tooltipAnnouncement:s}}function pe({clientThreadId:t,gizmoId:s}){const o=H(t),c=S().formatMessage({id:"HDu59A",defaultMessage:"Start voice mode"}),[r,d]=a.useState(!1),[u,g]=a.useState(!1),i=ne(),{shouldShowTooltipNux:m,tooltipAnnouncement:f}=ie(),v=J(),k=o??t,N=Z(l=>l.isVoiceModeActive);a.useEffect(()=>{i||g(!1)},[i]);const j=a.useCallback(async()=>{if(C.logEvent(P.composerSpeechButtonClicked),m&&f.markAsViewed(),i){g(!0);return}let l;d(!0);try{l=await v({conversation_id:o??null,requested_voice_mode:"advanced",gizmo_id:s??null},"composer_speech_button")}finally{d(!1)}const x=l??oe;$.setState(h=>{h.voiceStatus=x,h.isVoiceModeActive=!0})},[v,i,m,f,s,o]);return e.jsxs(e.Fragment,{children:[u&&e.jsx(ae,{conversationId:k}),!u&&e.jsx(le,{showNuxTooltip:m,tooltipAnnouncement:f,children:e.jsx("button",{"data-testid":"composer-speech-button",onClick:j,"aria-label":c,disabled:N||r,className:"flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:bg-white dark:text-black dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary",style:{viewTransitionName:"var(--vt-composer-speech-button)"},children:r?e.jsx(I,{}):e.jsx(R,{})})})]})}function le({children:t,showNuxTooltip:s,tooltipAnnouncement:o}){const n=S();return s?e.jsx(K,{side:"top",show:!0,badge:"new",dismissOnOutsideClick:!0,title:n.formatMessage({id:"DQ6CAP",defaultMessage:"Try advanced voice mode"}),contentAlign:"center",onDismiss:o.markAsViewed,sideOffset:2,children:e.jsx("div",{children:t})}):e.jsx(q,{sideOffset:14,label:n.formatMessage({id:"i4P/ix",defaultMessage:"Use voice mode"}),side:"top",onOpenChange:c=>{c&&(C.logEvent(P.composerSpeechButtonHovered),U.composerSpeechButton.hover())},children:t})}export{pe as ComposerSpeechButton};
//# sourceMappingURL=dy0d2sgmpx6uz2l9.js.map