import{bK as T,ai as C,bN as q,bh as h,r as k,P as b,A as v,j as s,K as p,bg as N,N as U,ar as y,eN as K,X as B,bk as F,H as V,x as Q,a5 as X,az as Y,eO as W,eP as z,eQ as D,eR as Z,R as J}from"./pcnl88zwhe6noauc.js";import{bC as S,aC as _,d7 as $,cM as ee,d8 as ne}from"./id6kv7jv9hphxx5c.js";import{L as O}from"./i7j2ldt4wg0arock.js";import{e as L}from"./o3ih6na0xmna5yjk.js";import{T as oe}from"./jihcmvvrci5c89vd.js";function j(){return C("437245079").value}function te(){const e=j(),n=L(),o=T("1908072088").config.value,{eligible:t,isLoading:a}=S(_.AG8PqS2q);return{eligible:t&&e&&n&&o.blocking_modal===!0,singleButtonVariant:o.single_button_variant===!0,isLoading:a}}function ve(){const e=j(),n=L(),o=T("1908072088").config.value,{eligible:t,isLoading:a}=S(_.AG8PqS2q);return{eligible:t&&e&&n&&o.dropdown_tooltip,isLoading:a}}const G=_.UseSidekick,se=_.SidekickLauncherOnboarding,E="https://persistent.oaistatic.com/sidekick/public/ChatGPT_Desktop_public_latest.dmg",I="download";function P(){const e=y(),n=K("1696863369").layer.get("has_sidekick_access",!1);return e!=null&&n}function ae(e){return e===I}function ie(){const e=B(),o=(F(()=>e.asPath)??"").split("#"),t=ae(o[1]);return{openModal:()=>{const c=e.asPath.split("#");e.replace(c[0]+"#"+I)},closeModal:()=>{e.replace(o[0])},isOpen:t}}function Se(e){var d;const{eligible:n,isLoading:o}=te(),t=P(),{eligible:a,isLoading:c}=S(G),{eligible:g,isLoading:m}=S(se),i=n||!a||!g||!t||((d=e.conversationMode)==null?void 0:d.kind)!==q.PrimaryAssistant,l=o||m||c;return{eligible:!i&&h.getLayerValue({layerName:"1696863369",key:"show_nux_banner",defaultValue:!1}),isLoading:l}}function _e({onClose:e}){k.useEffect(()=>{b.logEvent(v.sidekickAnnouncementShown),h.logEvent("chatgpt_sidekick_announcement_shown")},[]);const{markAsViewed:n}=S(G),o=k.useCallback(()=>{n(),b.logEvent(v.sidekickAnnouncementDismissed),h.logEvent("chatgpt_sidekick_announcement_closed"),e&&e()},[n,e]),t=k.useCallback(()=>{b.logEvent(v.sidekickAnnouncementLinkClicked),h.logEvent("chatgpt_sidekick_announcement_download_clicked"),n(),e&&e()},[n,e]),a={downloadUrl:E,markAsDownloaded:t,markAsViewed:o,isSidekickAvailable:P()};return s.jsx(de,{...a})}function le(){window.open(E,"_blank")}function ce(){var e;return(e=y())!=null&&e.isPlus()?u.bannerTitleMentioningPlus:u.bannerTitleNotMentioningPlus}function Me(){const{closeModal:e,isOpen:n}=ie(),o=P(),t=k.useMemo(()=>({isDesktopAppAvailable:o}),[o]),a=()=>{b.logEvent(v.sidekickDownloadModalClosed,t),h.logEvent("chatgpt_sidekick_modal_closed"),e()},c=()=>{b.logEvent(v.sidekickDownloadModalDownloaded,t),h.logEvent("chatgpt_sidekick_modal_download_clicked"),e()};return k.useEffect(()=>{n&&(b.logEvent(v.sidekickDownloadModalShown,{...t}),h.logEvent("chatgpt_sidekick_modal_shown"))},[t,n]),n?s.jsx(re,{downloadUrl:E,markAsDownloaded:c,markAsViewed:a,isSidekickAvailable:o}):null}function re({downloadUrl:e,markAsDownloaded:n,markAsViewed:o,isSidekickAvailable:t}){const a=t?u.modalTitleEligible:u.modalTitleNotEligible,c=s.jsx(p,{...a}),g=s.jsx(p,{...u.modalContent}),m=t?u.disclaimer:u.comingSoonDisclaimer,i=s.jsx(p,{...m,values:{learnMoreLink:w=>s.jsx(O,{openNewTab:!0,href:"https://help.openai.com/en/articles/9275200",children:w})}}),l=s.jsxs("div",{children:[s.jsx("div",{children:g}),s.jsx("div",{className:"mt-2",children:i})]}),d=s.jsx(N,{as:"link",to:e,color:"primary",onClick:n,openNewTab:!0,children:s.jsx(p,{...u.download})}),r=s.jsx(N,{color:"secondary",onClick:o,children:s.jsx(p,{...u.close})}),f=t?d:r,M=t?r:void 0;return s.jsx($,{onClose:o,title:c,description:l,actionButton:f,cancelButton:M})}function de({markAsDownloaded:e,markAsViewed:n}){const o=V(),t=k.useCallback(()=>{le(),e()},[e]),a=s.jsx(p,{...ce()}),c=s.jsx(p,{...u.bannerContent}),g=s.jsx(p,{...u.disclaimer,values:{learnMoreLink:i=>s.jsx(O,{openNewTab:!0,href:"https://help.openai.com/en/articles/9275200",children:i})}}),m=s.jsxs("div",{className:"flex-grow",children:[s.jsx("div",{className:"mb-0.5 font-semibold",children:a}),s.jsxs("span",{className:"text-token-text-secondary",children:[c," ",g]})]});return s.jsx(ee,{onPrimaryCtaClick:t,primaryCtaText:o.formatMessage(u.download),onDismiss:n,content:m})}const u=U({bannerTitleNotMentioningPlus:{id:"SidekickOnboarding.bannerTitleEnterprisey_2",defaultMessage:"ChatGPT is available for macOS 14+ with Apple Silicon"},bannerTitleMentioningPlus:{id:"SidekickOnboarding.bannerTitleMentioningPlus",defaultMessage:"ChatGPT is now available for macOS—Plus users get early access"},modalTitleEligible:{id:"SidekickOnboarding.modalTitleEligible",defaultMessage:"The ChatGPT app is now available for macOS"},modalTitleNotEligible:{id:"SidekickOnboarding.modalTitleNotEligible",defaultMessage:"The ChatGPT macOS desktop app is coming soon"},modalContent:{id:"SidekickOnboarding.modal_content_eligible",defaultMessage:"Quickly access ChatGPT from anywhere on your computer with a shortcut: Option + Space. Share screenshots, upload files and photos, have voice conversations, and search through past conversations."},bannerContent:{id:"SidekickOnboarding.banner_content_3",defaultMessage:"Get faster access to ChatGPT with the Option + Space shortcut and the floating companion window."},disclaimer:{id:"SidekickOnboarding.disclaimer_3",defaultMessage:"<learnMoreLink>Learn more</learnMoreLink>."},comingSoonDisclaimer:{id:"SidekickOnboarding.coming_soon_disclaimer",defaultMessage:"The app will be available over the next couple of weeks."},download:{id:"SidekickOnboarding.download",defaultMessage:"Download"},close:{id:"SidekickOnboarding.close",defaultMessage:"Close"}}),x=Q(X(()=>({statusMap:{}}))),we=e=>x(n=>n.statusMap[e]),ye=(e,n)=>{x.setState(o=>{o.statusMap[e]=n;const t=oe.getServerThreadId(e);t&&(o.statusMap[t]=n)})},R=e=>{x.setState(n=>{for(const{id:o,async_status:t}of e)n.statusMap[o]=t})},H=28,A="conversationHistory";function Ee(){const e=Y(),n=(e==null?void 0:e.includes(W))??!1,o=y(),t=!n&&!!(o!=null&&o.data),a=z.useRelayEnvironment(),{value:c}=C("2893406386"),g=ue(a,t&&c),m=ge(t&&!c),{conversations:i,data:l,fetchNextPage:d,hasNextPage:r,isInitialLoading:f,isFetchingNextPage:M,isError:w}=c?g:m;return{data:l,conversations:i,fetchNextPage:d,hasNextPage:r,isLoading:f,isFetchingNextPage:M,isError:t&&w}}function ue(e,n){const{data:o,fetchNextPage:t,hasNextPage:a,isInitialLoading:c,isFetchingNextPage:g,isError:m}=D({queryKey:[A],queryFn:({pageParam:l})=>Z.fetchQuery_DEPRECATED(e,me,{after:l,first:H,order:"updated",expand:!1,isArchived:!1}),initialPageParam:"aWR4Oi0x",getNextPageParam:l=>{var d,r;if((d=l.conversationDisplayHistory)!=null&&d.pageInfo.hasNextPage)return(r=l.conversationDisplayHistory)==null?void 0:r.pageInfo.endCursor},enabled:n}),i=k.useMemo(()=>(o==null?void 0:o.pages.flatMap(l=>{var d;return(((d=l.conversationDisplayHistory)==null?void 0:d.edges)??[]).flatMap(r=>{var f;return r!=null&&r.node?[{id:r.node.id,title:r.node.title??"",create_time:r.node.createTime,update_time:r.node.updateTime,conversation_template_id:(f=r.node.primaryGizmo)==null?void 0:f.id,async_status:r.node.asyncStatus}]:[]})}))??[],[o]);return k.useEffect(()=>{R(i)},[i]),{conversations:i,data:o,fetchNextPage:t,hasNextPage:a,isInitialLoading:c,isFetchingNextPage:g,isError:m}}function ge(e){const{data:n,fetchNextPage:o,hasNextPage:t,isInitialLoading:a,isFetchingNextPage:c,isError:g}=D({queryKey:[A],queryFn:async({pageParam:i})=>{const l=await J.getConversations({offset:i,limit:H});return R(l.items),l},initialPageParam:0,getNextPageParam:i=>{const l=i.offset+i.limit;return l<i.total?l:void 0},enabled:e});return{conversations:k.useMemo(()=>(n==null?void 0:n.pages.flatMap(i=>i.items))??[],[n]),data:n,fetchNextPage:o,hasNextPage:t,isInitialLoading:a,isFetchingNextPage:c,isError:g}}function Pe(e){e.invalidateQueries({queryKey:[A]})}const me=ne;export{A as C,Me as D,P as a,ie as b,Ee as c,we as d,_e as e,Se as f,ve as g,Pe as r,ye as s,te as u};
//# sourceMappingURL=jgmbivmc27v0gy95.js.map