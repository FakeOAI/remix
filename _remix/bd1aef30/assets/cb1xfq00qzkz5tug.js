const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pgbdayugg6r8b19r.js","assets/gghzs582a65dvm3m.js","assets/e34jsxd5qw5romn0.js","assets/root-eakuwlaq.css","assets/pd094ob9wacofnvk.js","assets/conversation-small-eplmind9.css","assets/hlwo8mj4kkypxx9x.js","assets/jxi5u24nhvbc2h09.js"])))=>i.map(i=>d[i]);
import{a1 as O,r as S,l as e,a5 as a,b5 as R,a6 as H,a4 as T,a2 as W,m as ee,aM as ae,bF as te,aF as re,aG as le,bS as de,u as ce,cM as ue,e7 as me,eQ as ge}from"./gghzs582a65dvm3m.js";import{c1 as pe,a4 as f,dG as fe,c2 as xe,u as se,dH as ye,dI as he,dJ as ne,dK as Se,I as be,ci as N,dL as Me,dM as je,dN as ve,g as B}from"./pd094ob9wacofnvk.js";import{j as Ie}from"./jk8w36bsokizpx57.js";import{Y as we,ai as Ce,bd as Ae,bn as De,aU as Te,bm as ke,S as Y}from"./e34jsxd5qw5romn0.js";import{a as Le,b as Ee}from"./m5c2xv8kv93qiq8g.js";import{D as C}from"./ljnuyiuz0czms6ve.js";import{f as q,a as Be,d as V,e as X}from"./jxi5u24nhvbc2h09.js";import{u as Re,b as Oe}from"./bdvpcpjomx86o3fd.js";import"./b7yh879a84xsoh1v.js";import"./egu0eqrtgme3ss9j.js";import"./l69acfj4t0bghaz3.js";import"./knl5287dkf7ic29t.js";import"./ke4wseue2s3xar0a.js";import"./inxv3p5hyolpb7jk.js";import"./h6nboy9daks7d3l6.js";import"./ezmptwrca6wtpbet.js";import"./hxxw62av1uep63qt.js";import"./bbie8a5uhoq6uzh7.js";import"./k410coeyc5c419jo.js";import"./h63g546sqzyfxlvo.js";function Pe({onRemoveDomainClick:s,onVerifyDomainClick:n}){return e.jsxs(C.Root,{children:[e.jsx(C.Trigger,{children:e.jsx(Ce,{className:"icon-sm"})}),e.jsx(C.Portal,{children:e.jsxs(C.Content,{children:[e.jsx(C.Item,{onClick:s,children:e.jsx(a,{...k.ssoDropdownRemoveButtonText})}),e.jsx(C.Item,{onClick:n,children:e.jsx(a,{...k.ssoDropdownVerifyButtonText})})]})})]})}function Ue({domains:s,workspaceId:n}){const o=O(),{mutateAsync:i}=pe(n),[t,d]=S.useState(!1),[u,x]=S.useState();return e.jsxs(e.Fragment,{children:[e.jsxs(f.Root,{className:"w-full table-auto",children:[e.jsxs(f.Header,{children:[e.jsx(f.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(a,{...k.domainTableHeader})}),e.jsx(f.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(a,{...k.statusTableHeader})}),e.jsx(f.HeaderCell,{className:"bg-token-main-surface-primary"})]}),e.jsx(f.Body,{children:s.map((m,v)=>e.jsxs("tr",{onClick:()=>x(m),className:"cursor-pointer",children:[e.jsx(f.Cell,{children:m.hostname}),e.jsx(f.Cell,{children:o.formatMessage(fe[m.status])}),e.jsx(f.Cell,{textAlign:"right",children:e.jsx("div",{onClick:g=>g.stopPropagation(),children:e.jsx(Pe,{onRemoveDomainClick:()=>{i({domainId:m.id})},onVerifyDomainClick:()=>{x(m)}})})})]},v))})]}),e.jsx(R,{color:"secondary",className:"mt-6",onClick:()=>{d(!0)},icon:we,children:e.jsx(a,{...k.addDomainButton})}),e.jsx(xe,{isOpen:t||u!==void 0,onClose:()=>{d(!1),x(void 0)},workspaceId:n,currentDomain:t?void 0:u,domains:s},u==null?void 0:u.id)]})}const k=H({ssoDropdownRemoveButtonText:{id:"workspaceIdentity.ssoDropdownRemoveButtonText",defaultMessage:"Remove Domain"},ssoDropdownVerifyButtonText:{id:"workspaceIdentity.ssoDropdownVerifyButtonText",defaultMessage:"Verify"},domainTableHeader:{id:"workspaceIdentity.domainTableHeader",defaultMessage:"Domain"},statusTableHeader:{id:"workspaceIdentity.statusTableHeader",defaultMessage:"Status"},addDomainButton:{id:"workspaceIdentity.addDomainButton.0",defaultMessage:"Add domain"}}),_e=async s=>new Promise((n,o)=>{const i=new FileReader;i.readAsText(s),i.onload=function(t){var d;n((d=t.target)==null?void 0:d.result)},i.onerror=o});function Ne({acsId:s,hasSSO:n}){const o=`https://auth0.openai.com/login/callback?connection=${s}`,i=`urn:auth0:openai:${s}`,t=`${location.host}/auth/login?sso=true&connection=${s}`,d=O(),u=ae();return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:e.jsx(a,{...c.setupSSOContent})}),e.jsxs("div",{className:"mb-6 flex flex-col space-y-4",children:[e.jsx(N,{label:"Assertion Consumer Service (ACS) URL",value:o,onCopied:()=>{u.success(d.formatMessage(c.copiedACSToClipboard),{duration:3})}}),e.jsx(N,{label:"Entity ID",value:i,onCopied:()=>{u.success(d.formatMessage(c.copiedEntityToClipboard),{duration:3})}}),n&&e.jsx(N,{label:d.formatMessage(c.idpSignInURL),value:t,onCopied:()=>{u.success(d.formatMessage(c.copiedIDPUrlToClipboard),{duration:3})}})]})]})}function Fe({workspaceId:s,data:n,isOpen:o,onClose:i}){const t=O(),d=se(),{mutateAsync:u}=ye(s),{mutateAsync:x}=he(s),{mutateAsync:m}=ne(s),v=S.useRef(null),g=n==null?void 0:n.connection,[b,A]=S.useState(g==null?void 0:g.sign_in_endpoint),[D,y]=S.useState(!1),[M,L]=S.useState(g==null?void 0:g.cert),h=n===null?1:2,P=async(l,p)=>{let I;try{I=await u({signInEndpoint:l,cert:p})}catch(w){if(w instanceof te&&w.code==="reauth_required"){y(!0);return}throw w}await m({connectionId:I.id,active:!0}),i()},E=h===1?e.jsx(T.Button,{title:t.formatMessage(c.doneButton),color:"primary",disabled:b===void 0||M===void 0,onClick:async()=>{b===void 0||M===void 0||await P(b,M)}}):n&&e.jsx(T.Button,{title:t.formatMessage(c.doneButton),color:"primary",onClick:async()=>{await m({connectionId:n==null?void 0:n.id,cert:M,signInEndpoint:b,active:!0}),i()}}),U=n===null?e.jsx(T.Button,{title:t.formatMessage(c.cancelButton),color:"secondary",onClick:()=>i()}):e.jsx(R,{as:"link",color:"danger-outline",onClick:async()=>{await x({connectionId:n==null?void 0:n.id}),i()},children:t.formatMessage(c.deleteButton)});return e.jsx(W,{isOpen:o,type:"success",title:t.formatMessage(h===1?c.createTitle:c.editTitle),primaryButton:E,secondaryButton:U,onClose:i,children:e.jsxs("form",{onSubmit:l=>l.preventDefault(),children:[e.jsx(Se,{children:e.jsx(a,{...c.createInstructionsManual})}),e.jsx("label",{className:"mb-2 flex items-center text-sm",children:e.jsx(a,{...c.signInLabel})}),e.jsx("div",{className:"mb-4",children:e.jsx(be,{className:"w-full appearance-none rounded border px-3 py-2",name:"Sign-In URL",type:"text",placeholder:"https://your.idp.here/saml2?idpid=123456",value:b??"",onChange:l=>{A(l.target.value)}})}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("label",{className:"text-sm",children:e.jsx(a,{...c.certLabel})}),e.jsx("input",{ref:v,type:"file",accept:".csv,.cer,.pem,text/plain",className:"hidden",onChange:async l=>{var p;if((p=l.target.files)!=null&&p[0]){const I=await _e(l.target.files[0]);L(I)}}}),e.jsx(R,{color:"secondary",onClick:()=>{var l;return(l=v.current)==null?void 0:l.click()},icon:Ae})]}),e.jsx("textarea",{rows:10,className:ee("w-full resize-none overflow-y-auto rounded border border-gray-300 px-3 py-2","outline-none focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600","text-token-text-primary placeholder-gray-500 dark:bg-gray-700"),placeholder:"-----BEGIN CERTIFICATE-----",value:M??"",onChange:l=>{L(l.target.value)}})]}),D&&e.jsx("label",{className:"text-token-text-error",children:e.jsx(a,{id:"ZfFabW",defaultMessage:"You need to re-authenticate to access this page. Please <login>log in</login> before continuing.",values:{login:l=>e.jsx("a",{href:"#",className:"text-token-text-primary underline",onClick:p=>{p.preventDefault(),d({authType:"login",callbackUrl:"/admin/identity"})},children:l})}})})]})})}const c=H({setupSSOContent:{id:"workspaceIdentity.setupSSOContent",defaultMessage:"Anyone using email addresses with a verified domain can log in via SAML SSO."},createInstructionsXML:{id:"ssoModal.createInstructionsXML",defaultMessage:"If your Identity Provider offers a metadata URL or an XML file, add it here for the quickest setup option."},createInstructionsManual:{id:"ssoModal.createInstructionsManual",defaultMessage:"Copy your Sign-in endpoint (SSO URL) and the public X.509 certificate from your Identity Provider."},createTitle:{id:"ssoModal.createTitle",defaultMessage:"Create SAML SSO Configuration"},editTitle:{id:"ssoModal.editTitle",defaultMessage:"Edit SAML SSO Configuration"},ssoMetadataLabel:{id:"ssoModal.ssoMetadataLabel",defaultMessage:"App Federation Metadata URL"},signInLabel:{id:"ssoModal.signInLabel",defaultMessage:"SSO URL"},certLabel:{id:"ssoModal.certLabel",defaultMessage:"X.509 Signing Certificate"},doneButton:{id:"ssoModal.doneButton",defaultMessage:"Done"},nextButton:{id:"ssoModal.nextButton",defaultMessage:"Next"},deleteButton:{id:"ssoModal.deleteButton",defaultMessage:"Delete configuration"},cancelButton:{id:"ssoModal.cancelButton",defaultMessage:"Cancel"},acsURLLabel:{id:"workspaceIdentity.acsURLLabel",defaultMessage:"Assertion Consumer Service (ACS) URL"},entityIDLabel:{id:"workspaceIdentity.entityIDLabel",defaultMessage:"Entity ID"},idpSignInURL:{id:"workspaceIdentity.idpSignInURL",defaultMessage:"IDP Tile URL"},copiedACSToClipboard:{id:"workspaceIdentity.copiedACSToClipboard",defaultMessage:"Copied ACS URL to clipboard"},copiedEntityToClipboard:{id:"workspaceIdentity.copiedEntityToClipboard",defaultMessage:"Copied entity ID to clipboard"},copiedIDPUrlToClipboard:{id:"workspaceIdentity.copiedIDPUrlToClipboard",defaultMessage:"Copied IDP URL to clipboard"},orDivider:{id:"workspaceIdentity.orDivider",defaultMessage:"or"},certExtractFailed:{id:"workspaceIdentity.certExtractFailed",defaultMessage:"Unable to find X.509 Certificate in provided XML"},ssoUrlExtractFailed:{id:"workspaceIdentity.ssoUrlExtractFailed",defaultMessage:"Unable to find Entity ID (sign-in endpoint) in provided XML"},ssoLearnMoreLink:{id:"workspaceIdentity.ssoLearnMoreLink",defaultMessage:"Learn more"}}),He=re(()=>le(()=>import("./pgbdayugg6r8b19r.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(s=>s.DirectorySyncSection)),qe=({title:s,footer:n,children:o})=>e.jsxs(V,{children:[e.jsx(X,{children:e.jsx(a,{...s})}),e.jsx("div",{children:o}),e.jsx(q,{children:n})]}),F=({icon:s,title:n,body:o,toggle:i})=>e.jsxs(V,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{className:"icon-sm"}),e.jsx(X,{children:e.jsx(a,{...n})})]}),e.jsx("div",{children:i})]}),e.jsx(q,{children:o})]});function Ve({currentWorkspaceId:s}){var $,G,Q,z,K,Z;const{value:n}=de("3999712942"),o=O(),i=ce(),{data:t,isLoading:d}=Me(s),u=se(),{mutateAsync:x}=ne(s),{variables:m,mutateAsync:v}=je(s),{variables:g,mutateAsync:b}=ve(s),A=(t==null?void 0:t.sso_connection)!=null,D=t==null?void 0:t.domains,y=!!(D!=null&&D.some(j=>j.status===ue.VERIFIED)),M=A?r.ssoEditButton:r.ssoAddButton,[L,h]=S.useState(!1),[P,E]=S.useState(!1),U=(($=t==null?void 0:t.sso_connection)==null?void 0:$.status)==="ACTIVE",l=((z=(Q=(G=t==null?void 0:t.sso_connection)==null?void 0:G.connection)==null?void 0:Q.enabled_client_names)==null?void 0:z.includes("chat"))??!1,p=U&&l,I=(K=t==null?void 0:t.sso_connection)==null?void 0:K.id,w=(g==null?void 0:g.shouldAllowExternalDomainInvites)??(t==null?void 0:t.allow_external_domain_invites)??!0,oe=y,ie=t?e.jsxs(Be,{children:[n&&e.jsx(He,{workspaceId:s}),e.jsx(qe,{title:r.domainSubtitle,footer:e.jsx(e.Fragment,{children:e.jsx(a,{...r.verifyDomainInfoText})}),children:e.jsx(Ue,{domains:t.domains,workspaceId:s})}),e.jsx(F,{icon:De,title:r.autoProvisionTitle,body:e.jsx(e.Fragment,{children:e.jsx(a,{...r.autoProvisionBody})}),toggle:e.jsx(B,{disabled:!y,enabled:(m==null?void 0:m.shouldAutoProvision)??t.should_auto_provision,onChange:j=>{v({shouldAutoProvision:j})},label:o.formatMessage(r.toggleAutoProvisionLabel)})}),oe&&e.jsx(F,{icon:Te,title:r.allowExternalDomainInvitesTitle,body:e.jsx(e.Fragment,{children:e.jsx(a,{...r.allowExternalDomainInvitesBody})}),toggle:e.jsx(B,{disabled:!y&&w,enabled:w,onChange:j=>{b({shouldAllowExternalDomainInvites:j})},label:o.formatMessage(r.toggleDisableExternalDomainInvitesLabel)})}),e.jsxs(V,{children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ke,{className:ee("icon-sm",p?"text-blue-600":"text-token-text-tertiary")}),e.jsx(X,{children:e.jsx(a,{...r.ssoTitle})})]}),A&&e.jsx("div",{children:e.jsx(B,{enabled:p,onChange:()=>{x({connectionId:I,active:!p})},label:o.formatMessage(r.ssoToggleActive)})})]}),y&&e.jsx(Ne,{acsId:t.acs_id,hasSSO:A}),e.jsxs("div",{children:[e.jsx(R,{as:"button",color:"primary",disabled:!y,onClick:()=>{J(i)?E(!0):h(!0)},children:e.jsx(a,{...M})}),e.jsx(Fe,{workspaceId:s,data:t.sso_connection,isOpen:P,onClose:()=>{E(!1)}}),e.jsx(W,{isOpen:L,onClose:()=>h(!1),type:"warning",title:o.formatMessage(r.reauthRequiredTitle),icon:Y,primaryButton:e.jsx(T.Button,{onClick:()=>{u({authType:"login",callbackUrl:"/admin/identity"})},color:"primary",children:e.jsx(a,{id:"qcl4gn",defaultMessage:"Login"})}),secondaryButton:e.jsx(T.Button,{onClick:()=>h(!1),children:e.jsx(a,{id:"E1vtdZ",defaultMessage:"Close"})}),children:e.jsx("label",{className:"mb-2 flex items-center text-sm",children:o.formatMessage(r.reauthRequiredExplanation)})})]})]}),t.sso_connection&&e.jsx(F,{icon:Y,title:r.enforceSSOTitle,body:e.jsx(e.Fragment,{children:e.jsx(a,{...r.enforceSSOBody})}),toggle:e.jsx(B,{disabled:!y,enabled:(Z=t.sso_connection.auth0_enforced_clients)==null?void 0:Z.includes("chat"),onChange:j=>{!J(i)||!t.sso_connection?h(!0):x({connectionId:t.sso_connection.id,enforcedClients:j?["chat"]:[]}).catch(_=>{throw _ instanceof te&&_.status===401&&h(!0),_})},label:o.formatMessage(r.enforceSSOLabel)})})]}):null;return e.jsxs(e.Fragment,{children:[e.jsx(me,{children:e.jsx("title",{children:o.formatMessage(r.title)})}),e.jsx(Le,{title:o.formatMessage(r.title)}),e.jsx(Ee,{showSpinner:d,children:ie})]})}const r=H({title:{id:"workspaceIdentity.title",defaultMessage:"Identity & Provisioning"},domainSubtitle:{id:"workspaceIdentity.domainSubtitle",defaultMessage:"Domain management"},ssoTitle:{id:"workspaceIdentity.ssoTitle",defaultMessage:"Single Sign On"},ssoToggleActive:{id:"WorkspaceIdentityPage.ssoToggleActive",defaultMessage:"Enable SSO for this workspace"},ssoAddButton:{id:"workspaceIdentity.ssoAddButton",defaultMessage:"Add SAML SSO"},ssoEditButton:{id:"workspaceIdentity.ssoEditButton",defaultMessage:"Edit SAML SSO"},autoProvisionTitle:{id:"workspaceIdentity.autoProvisionSubtitle",defaultMessage:"Automatic account creation"},autoProvisionBody:{id:"workspaceIdentity.autoProvisionBody",defaultMessage:"Automatically create workspace accounts for new users who log in with a verified domain."},toggleAutoProvisionLabel:{id:"workspaceIdentity.toggleAutoProvisionLabel",defaultMessage:"Toggle to enable or disable auto provisioning"},allowExternalDomainInvitesTitle:{id:"RQGwuu",defaultMessage:"Allow External Domain Invites"},allowExternalDomainInvitesBody:{id:"7KRqHk",defaultMessage:"If not checked, future invitations to this workspace will be limited to users from this organization's verified domains"},toggleDisableExternalDomainInvitesLabel:{id:"bQy24Z",defaultMessage:"Toggle to enable or disable external domain invites"},enforceSSOTitle:{id:"workspaceIdentity.enforceSSOTitle",defaultMessage:"Enforce SSO log in"},enforceSSOBody:{id:"workspaceIdentity.enforceSSOBody",defaultMessage:"When SSO is active, users will no longer be able to use social logins and will be redirected to your SSO portal."},enforceSSOLabel:{id:"workspaceIdentity.enforceSSOLabel",defaultMessage:"Toggle to enable or disable SSO enforcement"},verifyDomainInfoText:{id:"workspaceIdentity.verifyDomainInfoText",defaultMessage:"Verify ownership of an email domain to access advanced security features including single sign-on."},learnMoreLink:{id:"workspaceIdentity.learnMoreLink",defaultMessage:"Learn more"},reauthRequiredTitle:{id:"workspaceIdentity.reauthRequiredTitle",defaultMessage:"Please login again"},reauthRequiredExplanation:{id:"workspaceIdentity.reauthRequiredExplanation",defaultMessage:"For security reasons, we need you to reauthenticate before making changes to SSO settings."}});function J(s){var t;const n=(t=ge(s))==null?void 0:t.accessToken,o=n?Ie(n):null,i=o==null?void 0:o.pwd_auth_time;return i==null?!1:Date.now()-i<6e4}function ct(){const s=Re();return Oe(),e.jsx(Ve,{...s})}export{ct as default};
//# sourceMappingURL=cb1xfq00qzkz5tug.js.map