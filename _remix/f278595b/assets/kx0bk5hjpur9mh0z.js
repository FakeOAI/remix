import{X as S,ag as L,r as a,y as e,a1 as b,av as O,P as V,b as P,ar as B,an as q,cU as D,bF as _}from"./ddcjry37y0ueobh3.js";import{K as U,aW as z,aX as W,aY as X,J as Y,aZ as I}from"./ostblj7tqg38i6fa.js";import{dp as y,V as M,aD as K,dr as Q}from"./mlzz6djcph5fthpz.js";import{w as G}from"./m780wk85gg28bdfy.js";import{u as H,a as R,b as J}from"./g4zv2i39jomarudz.js";import{d as Z}from"./dcc45rtf5i4crsq0.js";import{V as $}from"./lmpg2rjo2spxalqw.js";import{m as ee}from"./g232mik5xb95sf81.js";import"./s8ck5rhbggwsgpvb.js";import"./fd47f1vw3hzqfyg8.js";import"./jj3i5x6opi4xqiiv.js";import"./cu8ha0xsn15q3kuh.js";import"./nx9wnt9smxe2g0dl.js";import"./lw8c0noczs2rbs9j.js";import"./iwvyrmtfz5lkn9sl.js";import"./lxw6kvlkbnjsbx5r.js";function se({conversationId:t}){const s=S(),o=y(M.hasSeenAdvancedVoiceNuxFullPage),n=L(),r=n?.isPlus()??!1,c=n?.isEnterprisey()??!1,d=!r&&!c,m="https://help.openai.com/en/articles/8400625-voice-mode-faq#h_c5d6fe534b",[p,i]=a.useState(!1),[u,f]=a.useState(!1),[g,v]=a.useState(!1),[k,j]=a.useState(!0);a.useEffect(()=>{requestAnimationFrame(()=>f(!0))},[]);const l=()=>{v(!0),i(!0),setTimeout(async()=>{j(!1)},300)},N=()=>{o.markAsViewed()},x=e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(U,{className:"mr-4 h-8 w-8"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("h4",{className:"font-semibold text-token-text-primary",children:s.formatMessage({id:"TFfx7w",defaultMessage:"Natural conversations"})}),e.jsx("p",{className:"text-token-text-secondary",children:s.formatMessage({id:"qR+v5Q",defaultMessage:"Senses and responds to interruptions, humor, and more."})})]})]}),C=e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(z,{className:"mr-4 h-8 w-8"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("h4",{className:"font-semibold text-token-text-primary",children:s.formatMessage({id:"br49Gd",defaultMessage:"Free monthly preview"})}),e.jsx("p",{className:"text-token-text-secondary",children:s.formatMessage({id:"LhOfga",defaultMessage:"Use advanced voice for a short period each month."})})]})]}),F=e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(W,{className:"mr-4 h-8 w-8"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("h4",{className:"font-semibold text-token-text-primary",children:s.formatMessage({id:"84QiAT",defaultMessage:"Multiple voices"})}),e.jsx("p",{className:"text-token-text-secondary",children:s.formatMessage({id:"yYgwEW",defaultMessage:"Offers an expanded set of voices to choose from."})})]})]}),w=e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(X,{className:"mr-4 h-8 w-8"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("h4",{className:"font-semibold text-token-text-primary",children:s.formatMessage({id:"M/x7uJ",defaultMessage:"Personalized to you"})}),e.jsx("p",{className:"text-token-text-secondary",children:s.formatMessage({id:"QZXq7u",defaultMessage:"Can use memory and custom instructions to shape responses."})})]})]}),A=e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx(Y,{className:"mr-4 h-8 w-8"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("h4",{className:"font-semibold text-token-text-primary",children:s.formatMessage({id:"e6n5kr",defaultMessage:"You’re in control"})}),e.jsx("p",{className:"text-token-text-secondary",children:c?e.jsx(b,{id:"4szv66",defaultMessage:"Your audio recordings are saved but not used for training. Learn how to <link>manage recordings</link>.",values:{link:h=>e.jsx("a",{href:m,target:"_blank",rel:"noopener noreferrer",className:"underline",children:h})}}):e.jsx(b,{id:"M/k4S5",defaultMessage:"Audio recordings are saved, and you can delete them at any time. Learn how to <link>manage recordings</link>.",values:{link:h=>e.jsx("a",{href:m,target:"_blank",rel:"noopener noreferrer",className:"underline",children:h})}})})]})]}),T=d?[C,x,w,A]:[x,F,w,A];return e.jsxs(e.Fragment,{children:[p&&e.jsx(K,{children:e.jsx(ee.div,{children:e.jsx($,{conversationId:t,onClose:N,cameFromNux:!0})})}),k&&e.jsx("div",{className:`fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-token-main-surface-primary transition-opacity duration-300 ${u&&!g?"opacity-100":"opacity-0"}`,children:e.jsxs("div",{className:"mx-auto w-full max-w-lg px-4 text-center",children:[e.jsx("h1",{className:"mb-9 text-2xl font-semibold text-token-text-primary",children:d?s.formatMessage({id:"XV3+9K",defaultMessage:"Sneak a peek at advanced voice mode"}):s.formatMessage({id:"9YnxDX",defaultMessage:"Say hello to advanced voice mode"})}),e.jsx("div",{className:"mb-9 space-y-5",children:T.map((h,E)=>e.jsx("div",{children:h},E))}),e.jsxs("p",{className:"mb-9 text-sm text-token-text-primary",children:[s.formatMessage({id:"vtcf3s",defaultMessage:"Voice mode can make mistakes — check important info."}),e.jsx("br",{}),s.formatMessage({id:"4nw2S2",defaultMessage:"Usage limits may change."})]}),e.jsx(O,{className:"rounded-full bg-token-text-primary px-20 py-3 font-semibold",onClick:l,children:e.jsx(b,{id:"ppi93b",defaultMessage:"Continue"})})]})})]})}const te={default_voice_mode:"advanced",modes:[{mode:"advanced",default_model_slug:G,disabled_mode_metadata:null,description:"Advanced Voice Mode",display_name:"Advanced Voice",info_message:{actions:[],buttons:[],hint:"Advanced Voice",message_markdown:"Advanced Voice",message:"Advanced Voice",title:"Advanced Voice",display_at_launch:!1},disclosure_message:null,resets_after:"None"}],chatreq_token:"default"};function ae(){const t=_("2775516364").value,s=y(M.hasSeenAdvancedVoiceNuxFullPage);return!s.isLoading&&s.eligible&&t}function oe(){const t=_("562926978").value,s=y(M.hasSeenAdvancedVoiceWebNuxTooltip);return{shouldShowTooltipNux:!s.isLoading&&s.eligible&&t,tooltipAnnouncement:s}}function be({clientThreadId:t,gizmoId:s}){const o=Z(t),r=S().formatMessage({id:"HDu59A",defaultMessage:"Start voice mode"}),[c,d]=a.useState(!1),[m,p]=a.useState(!1),i=ae(),{shouldShowTooltipNux:u,tooltipAnnouncement:f}=oe(),g=H(),v=o??t,k=R(l=>l.isVoiceModeActive);a.useEffect(()=>{i||p(!1)},[i]);const j=a.useCallback(async()=>{if(V.logEvent(P.composerSpeechButtonClicked),u&&f.markAsViewed(),i){p(!0);return}let l;d(!0);try{l=await g({conversation_id:o??null,requested_voice_mode:"advanced",gizmo_id:s??null},"composer_speech_button")}finally{d(!1)}const N=l??te;J.setState(x=>{x.voiceStatus=N,x.isVoiceModeActive=!0})},[g,i,u,f,s,o]);return e.jsxs(e.Fragment,{children:[m&&e.jsx(se,{conversationId:v}),!m&&e.jsx(ne,{showNuxTooltip:u,tooltipAnnouncement:f,children:e.jsx("button",{"data-testid":"composer-speech-button",onClick:j,"aria-label":r,disabled:k||c,className:"flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:bg-white dark:text-black dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary",children:c?e.jsx(B,{}):e.jsx(I,{})})})]})}function ne({children:t,showNuxTooltip:s,tooltipAnnouncement:o}){const n=S();return s?e.jsx(Q,{side:"top",show:!0,badge:"new",dismissOnOutsideClick:!0,title:n.formatMessage({id:"DQ6CAP",defaultMessage:"Try advanced voice mode"}),contentAlign:"center",onDismiss:o.markAsViewed,sideOffset:2,children:e.jsx("div",{children:t})}):e.jsx(q,{sideOffset:14,label:n.formatMessage({id:"i4P/ix",defaultMessage:"Use voice mode"}),side:"top",onOpenChange:r=>{r&&(V.logEvent(P.composerSpeechButtonHovered),D.composerSpeechButton.hover())},children:t})}export{be as ComposerSpeechButton};
//# sourceMappingURL=kx0bk5hjpur9mh0z.js.map