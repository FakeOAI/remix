import{m as e,G as S,r as u,F as Q,aT as r,aC as L,gG as d,cc as ee,aZ as E,Z as te,en as ae,c$ as _,cE as se,eq as O}from"./ndi7jo66fl6rg84p.js";import{A as re}from"./bjbi1aogtrd4mr07.js";import{e3 as w,cZ as J,hb as oe,hA as ne,hB as le,hC as b,n as ie,aK as ce}from"./id0jk80okmzlid6x.js";import{an as de,F as ue,aY as me,O as pe}from"./idygk0c4cylpz8ae.js";import{Y as B}from"./mzkxlhrlmxhntkvn.js";import{b as N,a as U,F as he}from"./clb9fhy7w1x6xpki.js";import{G as xe,a as fe}from"./gbyk3v32hscg6dme.js";import"./hxhtwg5i3zhj7nie.js";import"./nr3mycnxgq8z98wn.js";import"./c4bxzbp1808foto4.js";import"./k1mvqz0lev3ndwtx.js";import"./ibw8jr5hkrrbxzxt.js";import"./fzf75mkt6watik84.js";import"./mwg8ab4hw6kwwcgx.js";import"./ehxtjemwqtjnagpv.js";import"./iqerz6k3sbqq2l34.js";import"./oe1i21dmigdjh2r4.js";import"./cofxtaekwyioq26o.js";import"./ofza4i1qqi05iea2.js";import"./fv9y2yj8e2311z7m.js";import"./lt5y65bh8rqouj9f.js";import"./gqcu5gknpi8xhl0h.js";function ge({content:a,button:l,onClick:o}){return e.jsxs("div",{className:"flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",onClick:o,children:[e.jsx("div",{className:"h-9 grow px-3 py-2",children:a}),e.jsx("div",{className:"w-px bg-token-border-medium"}),l]})}function ye({onSelectExample:a}){const l=S(),o=u.useRef(null);return e.jsxs("select",{onChange:i=>{if(i.target.value==="label")return;const t=parseInt(i.target.value);a(H[t].spec),o.current.value="label"},className:"h-8 rounded-lg border border-token-border-medium bg-transparent px-2 py-0 text-sm",ref:o,children:[e.jsx("option",{value:"label",children:l.formatMessage(I.examples)}),H.map((i,t)=>e.jsx("option",{value:t,children:l.formatMessage(i.displayName)},t))]})}const je={openapi:"3.1.0",info:{title:"Get weather data",description:"Retrieves current weather data for a location.",version:"v1.0.0"},servers:[{url:"https://weather.example.com"}],paths:{"/location":{get:{description:"Get temperature for a specific location",operationId:"GetCurrentWeather",parameters:[{name:"location",in:"query",description:"The city and state to retrieve the weather for",required:!0,schema:{type:"string"}}],deprecated:!1}}},components:{schemas:{}}},ve=`# Taken from https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.0/petstore.yaml

openapi: "3.1.0"
info:
  version: 1.0.0
  title: Swagger Petstore
  license:
    name: MIT
servers:
  - url: https://petstore.swagger.io/v1
paths:
  /pets:
    get:
      summary: List all pets
      operationId: listPets
      tags:
        - pets
      parameters:
        - name: limit
          in: query
          description: How many items to return at one time (max 100)
          required: false
          schema:
            type: integer
            maximum: 100
            format: int32
      responses:
        '200':
          description: A paged array of pets
          headers:
            x-next:
              description: A link to the next page of responses
              schema:
                type: string
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Pets"
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
    post:
      summary: Create a pet
      operationId: createPets
      tags:
        - pets
      responses:
        '201':
          description: Null response
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
  /pets/{petId}:
    get:
      summary: Info for a specific pet
      operationId: showPetById
      tags:
        - pets
      parameters:
        - name: petId
          in: path
          required: true
          description: The id of the pet to retrieve
          schema:
            type: string
      responses:
        '200':
          description: Expected response to a valid request
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Pet"
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
components:
  schemas:
    Pet:
      type: object
      required:
        - id
        - name
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
        tag:
          type: string
    Pets:
      type: array
      maxItems: 100
      items:
        $ref: "#/components/schemas/Pet"
    Error:
      type: object
      required:
        - code
        - message
      properties:
        code:
          type: integer
          format: int32
        message:
          type: string`,be={openapi:"3.1.0",info:{title:"Untitled",description:"Your OpenAPI specification",version:"v1.0.0"},servers:[{url:""}],paths:{},components:{schemas:{}}},I=Q({examples:{id:"gizmo.actions.examples",defaultMessage:"Examples"},weatherExampleTitle:{id:"gizmo.actions.weatherExampleTitle",defaultMessage:"Weather (JSON)"},petStoreExampleTitle:{id:"gizmo.actions.petStoreExampleTitle",defaultMessage:"Pet Store (YAML)"},blankExampleTitle:{id:"gizmo.actions.blankExampleTitle",defaultMessage:"Blank Template"}}),H=[{displayName:I.weatherExampleTitle,spec:JSON.stringify(je,null,2)},{displayName:I.petStoreExampleTitle,spec:ve},{displayName:I.blankExampleTitle,spec:JSON.stringify(be,null,2)}];function Ne({onImport:a,onClose:l}){const[o,i]=u.useState(""),[t,m]=u.useState(!1);async function p(){let g;try{g=new URL(o)}catch{return}if(g?.hostname){m(!0);try{const n=await J.fetchOpenAPISpec(o);a(n.content),l()}finally{m(!1)}}}return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{name:"url",value:o,onChange:g=>{i(g.target.value)},placeholder:"https://...",className:"h-8 rounded border border-token-border-light px-2 text-sm",autoFocus:!0,dir:"ltr"}),e.jsx(w,{color:"primary",size:"small",loading:t,onClick:p,children:e.jsx(r,{id:"7sLuEB",defaultMessage:"Import"})}),e.jsx(w,{color:"secondary",size:"small",onClick:l,children:e.jsx(r,{id:"xHBR5t",defaultMessage:"Cancel"})})]})}function Me({className:a,children:l,...o}){return e.jsx(oe,{className:a,...o,children:l})}const ke=({value:a,className:l,label:o,...i})=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ne,{id:a,value:a,className:L("h-4 w-4 flex-shrink-0 gap-2 rounded-full border border-token-text-tertiary bg-transparent shadow-sm outline-none hover:bg-token-main-surface-tertiary",l),...i}),e.jsx("label",{htmlFor:a,className:"w-full cursor-pointer",children:o})]}),_e=({className:a,...l})=>e.jsx(le,{className:L("relative flex h-full w-full items-center justify-center after:block after:h-2 after:w-2 after:rounded-[50%] after:bg-token-text-primary after:content-['']",a),...l}),R={Root:Me,Item:ke,Indicator:_e};function y({children:a}){return e.jsx("label",{className:"mb-1 block text-sm font-semibold",children:a})}function we({jitPluginTool:a,onUpdateTool:l,onClose:o}){const i=S(),[t,m]=u.useState({apiKeyValue:"",oauthClientIdValue:"",oauthClientSecretValue:"",oauthAuthUrlValue:a?.metadata?.auth?.client_url??"",oauthTokenUrlValue:a?.metadata?.auth?.authorization_url??"",oauthScopeValue:a?.metadata?.auth?.scope??"",authTypeValue:a?.metadata?.auth?.type??d.None,httpAuthTypeValue:a?.metadata?.auth?.authorization_type??"basic",customHeaderValue:a?.metadata?.auth?.custom_auth_header??"",tokenExchangeMethodValue:a?.metadata?.auth?.token_exchange_method??"default_post"});function p(n){m(A=>({...A,...n}))}function g(){l(t.authTypeValue===d.None?{type:d.None}:t.authTypeValue===d.OAuth?{type:d.OAuth,client_url:t.oauthAuthUrlValue,authorization_url:t.oauthTokenUrlValue,authorization_content_type:"application/x-www-form-urlencoded",scope:t.oauthScopeValue,token_exchange_method:t.tokenExchangeMethodValue,oauth_client_id:t.oauthClientIdValue,oauth_client_secret:t.oauthClientSecretValue}:{type:d.ServiceHTTP,authorization_type:t.httpAuthTypeValue,custom_auth_header:t.customHeaderValue,api_key:t.apiKeyValue}),o()}return e.jsxs(ee,{type:"success",isOpen:!0,title:i.formatMessage({id:"kZ040s",defaultMessage:"Authentication"}),primaryButton:e.jsx(E,{color:"primary",onClick:()=>{g()},children:e.jsx(r,{id:"dchvRM",defaultMessage:"Save"})}),secondaryButton:e.jsx(E,{color:"secondary",onClick:o,children:e.jsx(r,{id:"xHBR5t",defaultMessage:"Cancel"})}),onClose:o,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(r,{id:"la7zPT",defaultMessage:"Authentication Type"}),e.jsxs(R.Root,{onValueChange:n=>{p({authTypeValue:n})},value:t.authTypeValue,className:"mt-2 flex gap-4",children:[e.jsx(b,{label:i.formatMessage({id:"Ml5rNZ",defaultMessage:"None"}),value:d.None}),e.jsx(b,{label:i.formatMessage({id:"rN0uCi",defaultMessage:"API Key"}),value:d.ServiceHTTP}),e.jsx(b,{label:i.formatMessage({id:"qG7Z4O",defaultMessage:"OAuth"}),value:d.OAuth})]})]}),t.authTypeValue==="service_http"?e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(r,{id:"hSd+5k",defaultMessage:"API Key"})}),e.jsx(N,{placeholder:i.formatMessage({id:"9W9lGr",defaultMessage:"[HIDDEN]"}),type:"password",value:t.apiKeyValue,onChange:n=>{p({apiKeyValue:n.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"PSnRGf",defaultMessage:"Auth Type"})}),e.jsxs(R.Root,{className:"mb-2 flex gap-6 overflow-hidden rounded-lg",value:t.httpAuthTypeValue,required:!0,onValueChange:n=>{p({httpAuthTypeValue:n})},children:[e.jsx(b,{value:"basic",label:"Basic"}),e.jsx(b,{value:"bearer",label:"Bearer"}),e.jsx(b,{value:"custom",label:i.formatMessage({id:"6kqx38",defaultMessage:"Custom"})})]}),t.httpAuthTypeValue==="custom"&&e.jsxs("div",{className:"mt-2",children:[e.jsx(y,{children:e.jsx(r,{id:"XqdT/P",defaultMessage:"Custom Header Name"})}),e.jsx(N,{value:t.customHeaderValue,onChange:n=>{p({customHeaderValue:n.target.value})},className:"mb-2",placeholder:"X-Api-Key",dir:"ltr"})]})]}):t.authTypeValue==="oauth"?e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(r,{id:"lS4nvz",defaultMessage:"Client ID"})}),e.jsx(N,{placeholder:"<HIDDEN>",type:"password",value:t.oauthClientIdValue,onChange:n=>{p({oauthClientIdValue:n.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"OvwGR3",defaultMessage:"Client Secret"})}),e.jsx(N,{placeholder:"<HIDDEN>",type:"password",value:t.oauthClientSecretValue,onChange:n=>{p({oauthClientSecretValue:n.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"I27qZU",defaultMessage:"Authorization URL"})}),e.jsx(N,{value:t.oauthAuthUrlValue,onChange:n=>{p({oauthAuthUrlValue:n.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"QywIpF",defaultMessage:"Token URL"})}),e.jsx(N,{value:t.oauthTokenUrlValue,onChange:n=>{p({oauthTokenUrlValue:n.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"1VAJqN",defaultMessage:"Scope"})}),e.jsx(N,{value:t.oauthScopeValue,onChange:n=>{p({oauthScopeValue:n.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"9MvwPc",defaultMessage:"Token Exchange Method"})}),e.jsxs(R.Root,{value:t.tokenExchangeMethodValue,required:!0,onValueChange:n=>{p({tokenExchangeMethodValue:n})},children:[e.jsx(b,{value:"default_post",label:i.formatMessage({id:"vXIzoE",defaultMessage:"Default (POST request)"})}),e.jsx(b,{value:"basic_auth_header",label:i.formatMessage({id:"38o+yX",defaultMessage:"Basic authorization header"})})]})]}):null]})}function Ae({rootDomain:a,operations:l}){return l==null||l.length===0?e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(r,{id:"L69u6d",defaultMessage:"Operations in your schema will show here"})}):e.jsx("table",{className:"w-full text-sm",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-token-border-light text-left text-xs text-token-text-tertiary",children:[e.jsx("th",{className:"py-1 font-normal",children:e.jsx(r,{id:"JizDcr",defaultMessage:"Name"})}),e.jsx("th",{className:"py-1 font-normal",children:e.jsx(r,{id:"zN16fd",defaultMessage:"Method"})}),e.jsx("th",{className:"py-1 font-normal",children:e.jsx(r,{id:"y2WJvt",defaultMessage:"Path"})}),e.jsx("th",{className:"py-1 font-normal"})]}),l.map(o=>e.jsxs("tr",{className:"border-b border-token-border-light",children:[e.jsx("td",{className:"py-2",children:o.operationName}),e.jsx("td",{className:"py-2 uppercase",children:o.method}),e.jsx("td",{className:"py-2",dir:"ltr",style:{textAlign:"match-parent"},children:o.path}),e.jsx("td",{className:"py-2",children:e.jsx(w,{color:"secondary",onClick:()=>{a&&xe.publish({kind:fe.TestGizmoAction,rootDomain:a,operationName:o.operationName})},children:e.jsx(r,{id:"Ag71GQ",defaultMessage:"Test"})})})]},o.operationName))]})})}function Te({validationResponse:a}){const l=S();return e.jsxs("div",{children:[e.jsx(U,{label:l.formatMessage({id:"hKfo5R",defaultMessage:"Available actions"})}),e.jsx(Ae,{rootDomain:a.success?a.spec.root_domain:void 0,operations:a.success?a.spec.operations:void 0})]})}const Ie="https://chatgpt.com/g/g-TYEliDU6A-actionsgpt";function Ee(a){switch(a){case d.None:return O({id:"G9qfIC",defaultMessage:"None"});case d.OAuth:return O({id:"t8MwwT",defaultMessage:"OAuth"});case d.ServiceHTTP:return O({id:"rN0uCi",defaultMessage:"API Key"})}}function Qe({currentlyEditingActionDomain:a,gizmoEditorData:l,updateGizmo:o,onClose:i}){const t=S(),[m,p]=u.useState(a),g=u.useRef(m),n=te(),{data:A}=ae(n?.getWorkspaceId());u.useEffect(()=>{g.current=m},[m]);const x=l?.tools?.find(s=>s.type===_.JIT_PLUGIN&&s.metadata.domain===m),[F]=u.useState(()=>x==null),M=x?.metadata?.raw_spec??"",[W,z]=u.useState(!1),[K,q]=u.useState(!1),[C,X]=u.useState(!1),f=u.useCallback(s=>{o(h=>({...h,tools:x?h.tools.map(c=>c.type===_.JIT_PLUGIN&&c.metadata.domain===m?{...c,metadata:{...c.metadata,...s,json_schema:void 0}}:c):[...h.tools,{type:_.JIT_PLUGIN,metadata:{raw_spec:"",domain:m??"Unknown domain",action_id:"",...s,json_schema:void 0}}]}))},[m,x,o]),[k,P]=u.useState(),Z=l,[V]=u.useState(()=>ie(async function(h){const c=await J.validateOpenAPISpec(h);P(c);const j=c.success?c.spec.root_domain:void 0;if(j){if(j!==g.current&&Z?.tools?.find(v=>v.type===_.JIT_PLUGIN&&v.metadata.domain===j)){P({success:!1,errors:[t.formatMessage({id:"nwBcmJ",defaultMessage:"Action sets cannot have duplicate domains - {domain} already exists on another action"},{domain:j})]});return}o(T=>({...T,tools:T.tools.map(v=>v.type===_.JIT_PLUGIN&&v.metadata.domain===g.current?{...v,metadata:{...v.metadata,domain:j}}:v)})),p(j)}if(c.success&&c.known_auth&&c.known_privacy_policy&&x){const T={type:d.OAuth,...c.known_auth};se(x.metadata.auth,T)||f({auth:{type:d.OAuth,...c.known_auth}}),x.metadata.privacy_policy_url!==c.known_privacy_policy&&f({privacy_policy_url:c.known_privacy_policy})}},1e3)),G=k!=null?k.success?k.warnings:k.errors:void 0;u.useEffect(()=>{M===""?(P(void 0),V.cancel()):V(M)},[V,M]);const D=s=>{try{f({raw_spec:JSON.stringify(JSON.parse(s),null,2)})}catch{try{f({raw_spec:B.stringify(B.parse(s),{lineWidth:120,indent:2})})}catch{}}},$=u.useCallback(s=>{switch(s.type){case d.None:{f({auth:{type:d.None}});break}case d.OAuth:{const{oauth_client_id:h,oauth_client_secret:c,...j}=s;f({auth:j,oauth_client_id:h,oauth_client_secret:c});break}case d.ServiceHTTP:{const{api_key:h,...c}=s;f({auth:c,api_key:h});break}}},[f]),Y=u.useCallback(()=>{window.confirm("Are you sure you want to delete this action?")&&(o(s=>({...s,tools:s.tools.filter(h=>!(h.type===_.JIT_PLUGIN&&h.metadata.domain===m))})),i())},[m,i,o]);return e.jsxs("div",{className:"h-full overflow-auto px-4 pb-12 text-sm",children:[e.jsxs("div",{className:"relative flex flex-col items-center px-16 py-6 text-center",children:[e.jsx("div",{className:"absolute left-0 top-6",children:e.jsx(E,{color:"secondary",onClick:i,icon:de})}),x!=null&&e.jsx("div",{className:"absolute right-0 top-6",children:e.jsx(E,{color:"secondary",onClick:Y,className:"text-red-500",children:e.jsx(ue,{className:"icon-md"})})}),e.jsx("div",{className:"text-xl font-semibold",children:F?e.jsx(r,{id:"LEn2vt",defaultMessage:"Add actions"}):e.jsx(r,{id:"WtVYgh",defaultMessage:"Edit actions"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(r,{id:"f0WG0Q",defaultMessage:"Let your GPT retrieve information or take actions outside of ChatGPT."})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx("a",{href:"https://help.openai.com/en/articles/8554397-creating-a-gpt",target:"_blank",rel:"noreferrer",className:"font-semibold",children:e.jsx(r,{id:"44M7/B",defaultMessage:"Learn more."})})})]}),e.jsxs(he,{className:"relative",children:[e.jsx(U,{label:t.formatMessage({id:"kZ040s",defaultMessage:"Authentication"})}),e.jsx(ge,{onClick:()=>{z(!0)},content:t.formatMessage(Ee(x?.metadata?.auth?.type??d.None)),button:e.jsx("button",{color:"secondary",className:"flex items-center gap-2 px-3",children:e.jsx(me,{className:"icon-sm"})})}),W&&e.jsx(we,{jitPluginTool:x,onUpdateTool:$,onClose:()=>z(!1)})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-1 flex h-8 items-center justify-between",children:[e.jsx("label",{className:"font-semibold text-token-text-primary",children:e.jsx(r,{id:"+xKwQg",defaultMessage:"Schema"})}),e.jsx("div",{className:"flex items-center",children:K?e.jsx(Ne,{onImport:s=>D(s),onClose:()=>q(!1)}):e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(w,{color:"secondary",size:"small",onClick:()=>q(!0),children:e.jsx(r,{id:"kTR+Ef",defaultMessage:"Import from URL"})}),e.jsx(ye,{onSelectExample:s=>{f({raw_spec:s})}})]})})]}),e.jsxs("div",{className:"mb-8 overflow-hidden rounded-lg border border-token-border-light",children:[e.jsxs("div",{className:"relative",children:[e.jsx("textarea",{value:M,onChange:s=>{f({raw_spec:s.target.value})},spellCheck:!1,placeholder:t.formatMessage({id:"zBM3o0",defaultMessage:"Enter your OpenAPI schema here"}),className:"block h-96 w-full border-none bg-transparent p-2 font-mono text-xs text-token-text-primary",dir:"ltr"}),e.jsx("div",{className:"absolute bottom-2 right-2 flex gap-2",children:M!==""?e.jsx(w,{onClick:()=>{D(M)},children:e.jsx(r,{id:"vJWnIM",defaultMessage:"Format"})}):e.jsxs(w,{as:"a",to:Ie,openNewTab:!0,size:"small",children:[e.jsx(r,{id:"gizmo.actions.actionsGptHelp",defaultMessage:"Get help from ActionsGPT"}),e.jsx(pe,{className:"icon-md"})]})})]}),G!=null&&G?.length>0&&e.jsx("div",{className:"border-t border-token-border-light p-2 text-red-500",children:G.map((s,h)=>e.jsx("div",{children:s},h))})]})]}),k!=null&&e.jsx(Te,{validationResponse:k}),A?.allowed_custom_actions_domains!=null&&(A?.allowed_custom_actions_domains?.length>0?e.jsxs("div",{className:"mt-4",children:[e.jsxs("p",{className:"mb-1 cursor-pointer font-semibold",onClick:()=>X(!C),children:[e.jsx(r,{id:"Gcxir6",defaultMessage:"Domains allowed by your workspace"}),e.jsx(re,{className:"inline",checked:C})]}),e.jsx("ul",{className:L("list-disc ps-4",!C&&"hidden"),children:A?.allowed_custom_actions_domains.map(s=>e.jsx("li",{children:s},s))})]}):e.jsx("p",{className:"text-sm italic",children:e.jsx(r,{id:"wWCl0j",defaultMessage:"No domains are allowed by your workspace's settings."})})),e.jsxs("div",{className:"mt-4",children:[e.jsx(U,{label:t.formatMessage({id:"Pbk0Gp",defaultMessage:"Privacy policy"}),description:"Privacy policy is required for all public GPTs."}),e.jsx(ce,{name:"privacyPolicyUrl",value:x?.metadata?.privacy_policy_url??"",placeholder:"https://app.example.com/privacy",onChange:s=>{f({privacy_policy_url:s.target.value})}})]})]})}export{Qe as GizmoActionsEditor};
//# sourceMappingURL=dtdg7fgrzg5rv344.js.map
