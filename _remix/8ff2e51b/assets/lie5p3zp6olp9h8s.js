import{bO as A,aj as L,bR as y,bh as d,r,P as u,A as g,j as n,K as c,bg as v,N as G,ar as D,ek as B,X as U,bk as K,H as I}from"./akpsmk6cb1cg4zar.js";import{bC as b,aE as f,c0 as R,c1 as V}from"./g39shxtad7atpc8r.js";import{L as T}from"./elyve5qg9n76v78m.js";import{e as E}from"./g5kkvpknp0ak80ql.js";function O(){return L("437245079").value}function X(){const e=O(),o=E(),a=A("1908072088").config.value,{eligible:i,isLoading:t}=b(f.AG8PqS2q);return{eligible:i&&e&&o&&a.blocking_modal===!0,singleButtonVariant:a.single_button_variant===!0,isLoading:t}}function ne(){const e=O(),o=E(),a=A("1908072088").config.value,{eligible:i,isLoading:t}=b(f.AG8PqS2q);return{eligible:i&&e&&o&&a.dropdown_tooltip,isLoading:t}}const x=f.UseSidekick,q=f.SidekickLauncherOnboarding,M="https://persistent.oaistatic.com/sidekick/public/ChatGPT_Desktop_public_latest.dmg",P="download";function S(){const e=D(),o=B("1696863369").layer.get("has_sidekick_access",!1);return e!=null&&o}function H(e){return e===P}function F(){const e=U(),a=(K(()=>e.asPath)??"").split("#"),i=H(a[1]);return{openModal:()=>{const l=e.asPath.split("#");e.replace(l[0]+"#"+P)},closeModal:()=>{e.replace(a[0])},isOpen:i}}function oe(e){var p;const{eligible:o,isLoading:a}=X(),i=S(),{eligible:t,isLoading:l}=b(x),{eligible:k,isLoading:m}=b(q),h=o||!t||!k||!i||((p=e.conversationMode)==null?void 0:p.kind)!==y.PrimaryAssistant,w=a||m||l;return{eligible:!h&&d.getLayerValue({layerName:"1696863369",key:"show_nux_banner",defaultValue:!1}),isLoading:w}}function ie({onClose:e}){r.useEffect(()=>{u.logEvent(g.sidekickAnnouncementShown),d.logEvent("chatgpt_sidekick_announcement_shown")},[]);const{markAsViewed:o}=b(x),a=r.useCallback(()=>{o(),u.logEvent(g.sidekickAnnouncementDismissed),d.logEvent("chatgpt_sidekick_announcement_closed"),e&&e()},[o,e]),i=r.useCallback(()=>{u.logEvent(g.sidekickAnnouncementLinkClicked),d.logEvent("chatgpt_sidekick_announcement_download_clicked"),o(),e&&e()},[o,e]),t={downloadUrl:M,markAsDownloaded:i,markAsViewed:a,isSidekickAvailable:S()};return n.jsx(Q,{...t})}function W(){window.open(M,"_blank")}function Y(){var e;return(e=D())!=null&&e.isPlus()?s.bannerTitleMentioningPlus:s.bannerTitleNotMentioningPlus}function ae(){const{closeModal:e,isOpen:o}=F(),a=S(),i=r.useMemo(()=>({isDesktopAppAvailable:a}),[a]),t=()=>{u.logEvent(g.sidekickDownloadModalClosed,i),d.logEvent("chatgpt_sidekick_modal_closed"),e()},l=()=>{u.logEvent(g.sidekickDownloadModalDownloaded,i),d.logEvent("chatgpt_sidekick_modal_download_clicked"),e()};return r.useEffect(()=>{o&&(u.logEvent(g.sidekickDownloadModalShown,{...i}),d.logEvent("chatgpt_sidekick_modal_shown"))},[i,o]),o?n.jsx(z,{downloadUrl:M,markAsDownloaded:l,markAsViewed:t,isSidekickAvailable:a}):null}function z({downloadUrl:e,markAsDownloaded:o,markAsViewed:a,isSidekickAvailable:i}){const t=i?s.modalTitleEligible:s.modalTitleNotEligible,l=n.jsx(c,{...t}),k=n.jsx(c,{...s.modalContent}),m=i?s.disclaimer:s.comingSoonDisclaimer,h=n.jsx(c,{...m,values:{learnMoreLink:j=>n.jsx(T,{openNewTab:!0,href:"https://help.openai.com/en/articles/9275200",children:j})}}),w=n.jsxs("div",{children:[n.jsx("div",{children:k}),n.jsx("div",{className:"mt-2",children:h})]}),p=n.jsx(v,{as:"link",to:e,color:"primary",onClick:o,openNewTab:!0,children:n.jsx(c,{...s.download})}),_=n.jsx(v,{color:"secondary",onClick:a,children:n.jsx(c,{...s.close})}),N=i?p:_,C=i?_:void 0;return n.jsx(R,{onClose:a,title:l,description:w,actionButton:N,cancelButton:C})}function Q({markAsDownloaded:e,markAsViewed:o}){const a=I(),i=r.useCallback(()=>{W(),e()},[e]),t=n.jsx(c,{...Y()}),l=n.jsx(c,{...s.bannerContent}),k=n.jsx(c,{...s.disclaimer,values:{learnMoreLink:h=>n.jsx(T,{openNewTab:!0,href:"https://help.openai.com/en/articles/9275200",children:h})}}),m=n.jsxs("div",{className:"flex-grow",children:[n.jsx("div",{className:"mb-0.5 font-semibold",children:t}),n.jsxs("span",{className:"text-token-text-secondary",children:[l," ",k]})]});return n.jsx(V,{onPrimaryCtaClick:i,primaryCtaText:a.formatMessage(s.download),onDismiss:o,content:m})}const s=G({bannerTitleNotMentioningPlus:{id:"SidekickOnboarding.bannerTitleEnterprisey_2",defaultMessage:"ChatGPT is available for macOS 14+ with Apple Silicon"},bannerTitleMentioningPlus:{id:"SidekickOnboarding.bannerTitleMentioningPlus",defaultMessage:"ChatGPT is now available for macOS—Plus users get early access"},modalTitleEligible:{id:"SidekickOnboarding.modalTitleEligible",defaultMessage:"The ChatGPT app is now available for macOS"},modalTitleNotEligible:{id:"SidekickOnboarding.modalTitleNotEligible",defaultMessage:"The ChatGPT macOS desktop app is coming soon"},modalContent:{id:"SidekickOnboarding.modal_content_eligible",defaultMessage:"Quickly access ChatGPT from anywhere on your computer with a shortcut: Option + Space. Share screenshots, upload files and photos, have voice conversations, and search through past conversations."},bannerContent:{id:"SidekickOnboarding.banner_content_3",defaultMessage:"Get faster access to ChatGPT with the Option + Space shortcut and the floating companion window."},disclaimer:{id:"SidekickOnboarding.disclaimer_3",defaultMessage:"<learnMoreLink>Learn more</learnMoreLink>."},comingSoonDisclaimer:{id:"SidekickOnboarding.coming_soon_disclaimer",defaultMessage:"The app will be available over the next couple of weeks."},download:{id:"SidekickOnboarding.download",defaultMessage:"Download"},close:{id:"SidekickOnboarding.close",defaultMessage:"Close"}});export{ae as D,S as a,F as b,ie as c,oe as d,ne as e,X as u};
//# sourceMappingURL=lie5p3zp6olp9h8s.js.map