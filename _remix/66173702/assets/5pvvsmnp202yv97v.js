import{c1 as T,aC as A,bT as H,an as h,r as k,P as b,F as v,j as s,U as p,aQ as N,V as q,as as E,ep as U,a2 as B,bB as F,N as K,aS as V,eq as Q,er as Y,d1 as D,es as X,R as W}from"./hloj85fregi26ji6.js";import{bO as _,aK as w,d3 as z,b3 as Z,d4 as J}from"./g7w33hsyqmw6f524.js";import{L as C}from"./gqd1dhcfmn5x8vwx.js";import{c as O}from"./oxm37jjpmmj4jh4x.js";import{a as L}from"./exbwrpd3te4zrj2f.js";function j(){return A("437245079").value}function $(){const e=j(),o=O(),n=T("1908072088").config.value,{eligible:t,isLoading:i}=_(w.AG8PqS2q);return{eligible:t&&e&&o&&n.blocking_modal===!0,singleButtonVariant:n.single_button_variant===!0,isLoading:i}}function pe(){const e=j(),o=O(),n=T("1908072088").config.value,{eligible:t,isLoading:i}=_(w.AG8PqS2q);return{eligible:t&&e&&o&&n.dropdown_tooltip,isLoading:i}}const G=w.UseSidekick,ee=w.SidekickLauncherOnboarding,P="https://persistent.oaistatic.com/sidekick/public/ChatGPT_Desktop_public_latest.dmg",I="download";function y(){const e=E(),o=U("1696863369").layer.get("has_sidekick_access",!1);return e!=null&&o}function ne(e){return e===I}function oe(){const e=B(),n=(F(()=>e.asPath)??"").split("#"),t=ne(n[1]);return{openModal:()=>{const c=e.asPath.split("#");e.replace(c[0]+"#"+I)},closeModal:()=>{e.replace(n[0])},isOpen:t}}function he(e){var d;const{eligible:o,isLoading:n}=$(),t=y(),{eligible:i,isLoading:c}=_(G),{eligible:g,isLoading:m}=_(ee),a=o||!i||!g||!t||((d=e.conversationMode)==null?void 0:d.kind)!==H.PrimaryAssistant,l=n||m||c;return{eligible:!a&&h.getLayerValue({layerName:"1696863369",key:"show_nux_banner",defaultValue:!1}),isLoading:l}}function fe({onClose:e}){k.useEffect(()=>{b.logEvent(v.sidekickAnnouncementShown),h.logEvent("chatgpt_sidekick_announcement_shown")},[]);const{markAsViewed:o}=_(G),n=k.useCallback(()=>{o(),b.logEvent(v.sidekickAnnouncementDismissed),h.logEvent("chatgpt_sidekick_announcement_closed"),e&&e()},[o,e]),t=k.useCallback(()=>{b.logEvent(v.sidekickAnnouncementLinkClicked),h.logEvent("chatgpt_sidekick_announcement_download_clicked"),o(),e&&e()},[o,e]),i={downloadUrl:P,markAsDownloaded:t,markAsViewed:n,isSidekickAvailable:y()};return s.jsx(ae,{...i})}function te(){window.open(P,"_blank")}function se(){var e;return(e=E())!=null&&e.isPlus()?u.bannerTitleMentioningPlus:u.bannerTitleNotMentioningPlus}function be(){const{closeModal:e,isOpen:o}=oe(),n=y(),t=k.useMemo(()=>({isDesktopAppAvailable:n}),[n]),i=()=>{b.logEvent(v.sidekickDownloadModalClosed,t),h.logEvent("chatgpt_sidekick_modal_closed"),e()},c=()=>{b.logEvent(v.sidekickDownloadModalDownloaded,t),h.logEvent("chatgpt_sidekick_modal_download_clicked"),e()};return k.useEffect(()=>{o&&(b.logEvent(v.sidekickDownloadModalShown,{...t}),h.logEvent("chatgpt_sidekick_modal_shown"))},[t,o]),o?s.jsx(ie,{downloadUrl:P,markAsDownloaded:c,markAsViewed:i,isSidekickAvailable:n}):null}function ie({downloadUrl:e,markAsDownloaded:o,markAsViewed:n,isSidekickAvailable:t}){const i=t?u.modalTitleEligible:u.modalTitleNotEligible,c=s.jsx(p,{...i}),g=s.jsx(p,{...u.modalContent}),m=t?u.disclaimer:u.comingSoonDisclaimer,a=s.jsx(p,{...m,values:{learnMoreLink:M=>s.jsx(C,{openNewTab:!0,href:"https://help.openai.com/en/articles/9275200",children:M})}}),l=s.jsxs("div",{children:[s.jsx("div",{children:g}),s.jsx("div",{className:"mt-2",children:a})]}),d=s.jsx(N,{as:"link",to:e,color:"primary",onClick:o,openNewTab:!0,children:s.jsx(p,{...u.download})}),r=s.jsx(N,{color:"secondary",onClick:n,children:s.jsx(p,{...u.close})}),f=t?d:r,S=t?r:void 0;return s.jsx(z,{onClose:n,title:c,description:l,actionButton:f,cancelButton:S})}function ae({markAsDownloaded:e,markAsViewed:o}){const n=K(),t=k.useCallback(()=>{te(),e()},[e]),i=s.jsx(p,{...se()}),c=s.jsx(p,{...u.bannerContent}),g=s.jsx(p,{...u.disclaimer,values:{learnMoreLink:a=>s.jsx(C,{openNewTab:!0,href:"https://help.openai.com/en/articles/9275200",children:a})}}),m=s.jsxs("div",{className:"flex-grow",children:[s.jsx("div",{className:"mb-0.5 font-semibold",children:i}),s.jsxs("span",{className:"text-token-text-secondary",children:[c," ",g]})]});return s.jsx(Z,{onPrimaryCtaClick:t,primaryCtaText:n.formatMessage(u.download),onDismiss:o,content:m})}const u=q({bannerTitleNotMentioningPlus:{id:"SidekickOnboarding.bannerTitleEnterprisey_2",defaultMessage:"ChatGPT is available for macOS 14+ with Apple Silicon"},bannerTitleMentioningPlus:{id:"SidekickOnboarding.bannerTitleMentioningPlus",defaultMessage:"ChatGPT is now available for macOS—Plus users get early access"},modalTitleEligible:{id:"SidekickOnboarding.modalTitleEligible",defaultMessage:"The ChatGPT app is now available for macOS"},modalTitleNotEligible:{id:"SidekickOnboarding.modalTitleNotEligible",defaultMessage:"The ChatGPT macOS desktop app is coming soon"},modalContent:{id:"SidekickOnboarding.modal_content_eligible",defaultMessage:"Quickly access ChatGPT from anywhere on your computer with a shortcut: Option + Space. Share screenshots, upload files and photos, have voice conversations, and search through past conversations."},bannerContent:{id:"SidekickOnboarding.banner_content_3",defaultMessage:"Get faster access to ChatGPT with the Option + Space shortcut and the floating companion window."},disclaimer:{id:"SidekickOnboarding.disclaimer_3",defaultMessage:"<learnMoreLink>Learn more</learnMoreLink>."},comingSoonDisclaimer:{id:"SidekickOnboarding.coming_soon_disclaimer",defaultMessage:"The app will be available over the next couple of weeks."},download:{id:"SidekickOnboarding.download",defaultMessage:"Download"},close:{id:"SidekickOnboarding.close",defaultMessage:"Close"}}),R=28,x="conversationHistory";function ve(){const e=V(),o=(e==null?void 0:e.includes(Q))??!1,n=E(),t=!o&&!!(n!=null&&n.data),i=Y.useRelayEnvironment(),{value:c}=A("2893406386"),g=le(i,t&&c),m=ce(t&&!c),{conversations:a,data:l,fetchNextPage:d,hasNextPage:r,isInitialLoading:f,isFetchingNextPage:S,isError:M}=c?g:m;return{data:l,conversations:a,fetchNextPage:d,hasNextPage:r,isLoading:f,isFetchingNextPage:S,isError:t&&M}}function le(e,o){const{data:n,fetchNextPage:t,hasNextPage:i,isInitialLoading:c,isFetchingNextPage:g,isError:m}=D({queryKey:[x],queryFn:({pageParam:l})=>X.fetchQuery_DEPRECATED(e,re,{after:l,first:R,order:"updated",expand:!1,isArchived:!1}),initialPageParam:"aWR4Oi0x",getNextPageParam:l=>{var d,r;if((d=l.conversationDisplayHistory)!=null&&d.pageInfo.hasNextPage)return(r=l.conversationDisplayHistory)==null?void 0:r.pageInfo.endCursor},enabled:o}),a=k.useMemo(()=>(n==null?void 0:n.pages.flatMap(l=>{var d;return(((d=l.conversationDisplayHistory)==null?void 0:d.edges)??[]).flatMap(r=>{var f;return r!=null&&r.node?[{id:r.node.id,title:r.node.title??"",create_time:r.node.createTime,update_time:r.node.updateTime,conversation_template_id:(f=r.node.primaryGizmo)==null?void 0:f.id,async_status:r.node.asyncStatus}]:[]})}))??[],[n]);return k.useEffect(()=>{L(a)},[a]),{conversations:a,data:n,fetchNextPage:t,hasNextPage:i,isInitialLoading:c,isFetchingNextPage:g,isError:m}}function ce(e){const{data:o,fetchNextPage:n,hasNextPage:t,isInitialLoading:i,isFetchingNextPage:c,isError:g}=D({queryKey:[x],queryFn:async({pageParam:a})=>{const l=await W.getConversations({offset:a,limit:R});return L(l.items),l},initialPageParam:0,getNextPageParam:a=>{const l=a.offset+a.limit;return l<a.total?l:void 0},enabled:e});return{conversations:k.useMemo(()=>(o==null?void 0:o.pages.flatMap(a=>a.items))??[],[o]),data:o,fetchNextPage:n,hasNextPage:t,isInitialLoading:i,isFetchingNextPage:c,isError:g}}function _e(e){e.invalidateQueries({queryKey:[x]})}const re=J;export{x as C,be as D,$ as a,y as b,oe as c,fe as d,he as e,pe as f,_e as r,ve as u};
//# sourceMappingURL=5pvvsmnp202yv97v.js.map