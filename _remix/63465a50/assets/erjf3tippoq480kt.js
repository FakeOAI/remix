import{m as e,L as S,r as u,K as Z,b6 as r,aE as L,gM as d,cI as ee,bn as E,a5 as te,eA as ae,b9 as _,cH as se,ez as R}from"./dfm2yceao9m2ilo9.js";import{A as re}from"./jo5ukylwalwwaok2.js";import{eS as w,dl as J,j4 as oe,j5 as ie,j6 as ne,j7 as b,eV as N,eU as U,i as le,ic as ce,cX as de,eT as ue,fP as me,bb as pe,aR as he}from"./o7wih49jz3zkdcav.js";import{Y as H}from"./mzkxlhrlmxhntkvn.js";import{G as xe,a as fe}from"./ox3buyo58swucw41.js";import"./mczvslbn3ff6fd7f.js";import"./hg5sf1ymbqlfp32x.js";import"./loa6txsy0p4dc7kk.js";import"./oz9mhv8xwj12nnpw.js";import"./c4bxzbp1808foto4.js";import"./oj002yr1cv5905d0.js";import"./ewpnojuykokmjpdh.js";import"./nvdtwttvqml9sy4p.js";import"./f6hms767mvgd5wdn.js";import"./ccrdffu4uq6bo5k0.js";import"./crgpn8kp0lsek69a.js";import"./lmos6opawwvf3yqw.js";import"./g1a8czag5zgtii4g.js";import"./odf16s7xmj505mjz.js";import"./h4mfvd1n299ropgw.js";import"./mwxmeau2u615h9c2.js";import"./d59bvqbgrtjhdi6a.js";import"./j3jvaqmbweoz0uvu.js";import"./huty6yhsfwt7jiw2.js";import"./gb721j76lu290i1c.js";import"./c3pv0g5u6p31bd14.js";import"./c1bxciuqfnnvqhe5.js";import"./fzrn137102spawew.js";import"./zbtw2a6a3r9x82tu.js";import"./mnx8lkd7acwrn154.js";import"./of3zireqs833qyjf.js";import"./h7x1gowp2f9zzh0d.js";import"./dcqw1exbxjpuudt7.js";import"./cyjanostgx80ah8i.js";import"./kb6nlpjb6lfuuize.js";import"./ni648vdhvct9krhm.js";import"./bp3vdqasuuueuouj.js";import"./btagl6w1gub4aw61.js";function ge({content:a,button:n,onClick:o}){return e.jsxs("div",{className:"flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",onClick:o,children:[e.jsx("div",{className:"h-9 grow px-3 py-2",children:a}),e.jsx("div",{className:"w-px bg-token-border-medium"}),n]})}function ye({onSelectExample:a}){const n=S(),o=u.useRef(null);return e.jsxs("select",{onChange:l=>{if(l.target.value==="label")return;const t=parseInt(l.target.value);a(B[t].spec),o.current.value="label"},className:"h-8 rounded-lg border border-token-border-medium bg-transparent px-2 py-0 text-sm",ref:o,children:[e.jsx("option",{value:"label",children:n.formatMessage(I.examples)}),B.map((l,t)=>e.jsx("option",{value:t,children:n.formatMessage(l.displayName)},t))]})}const je={openapi:"3.1.0",info:{title:"Get weather data",description:"Retrieves current weather data for a location.",version:"v1.0.0"},servers:[{url:"https://weather.example.com"}],paths:{"/location":{get:{description:"Get temperature for a specific location",operationId:"GetCurrentWeather",parameters:[{name:"location",in:"query",description:"The city and state to retrieve the weather for",required:!0,schema:{type:"string"}}],deprecated:!1}}},components:{schemas:{}}},ve=`# Taken from https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.0/petstore.yaml

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
          type: string`,be={openapi:"3.1.0",info:{title:"Untitled",description:"Your OpenAPI specification",version:"v1.0.0"},servers:[{url:""}],paths:{},components:{schemas:{}}},I=Z({examples:{id:"gizmo.actions.examples",defaultMessage:"Examples"},weatherExampleTitle:{id:"gizmo.actions.weatherExampleTitle",defaultMessage:"Weather (JSON)"},petStoreExampleTitle:{id:"gizmo.actions.petStoreExampleTitle",defaultMessage:"Pet Store (YAML)"},blankExampleTitle:{id:"gizmo.actions.blankExampleTitle",defaultMessage:"Blank Template"}}),B=[{displayName:I.weatherExampleTitle,spec:JSON.stringify(je,null,2)},{displayName:I.petStoreExampleTitle,spec:ve},{displayName:I.blankExampleTitle,spec:JSON.stringify(be,null,2)}];function Ne({onImport:a,onClose:n}){const[o,l]=u.useState(""),[t,m]=u.useState(!1);async function p(){let g;try{g=new URL(o)}catch{return}if(g?.hostname){m(!0);try{const i=await J.fetchOpenAPISpec(o);a(i.content),n()}finally{m(!1)}}}return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{name:"url",value:o,onChange:g=>{l(g.target.value)},placeholder:"https://...",className:"h-8 rounded border border-token-border-light px-2 text-sm",autoFocus:!0,dir:"ltr"}),e.jsx(w,{color:"primary",size:"small",loading:t,onClick:p,children:e.jsx(r,{id:"7sLuEB",defaultMessage:"Import"})}),e.jsx(w,{color:"secondary",size:"small",onClick:n,children:e.jsx(r,{id:"xHBR5t",defaultMessage:"Cancel"})})]})}function Me({className:a,children:n,...o}){return e.jsx(oe,{className:a,...o,children:n})}const ke=({value:a,className:n,label:o,...l})=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ie,{id:a,value:a,className:L("h-4 w-4 flex-shrink-0 gap-2 rounded-full border border-token-text-tertiary bg-transparent shadow-sm outline-none hover:bg-token-main-surface-tertiary",n),...l}),e.jsx("label",{htmlFor:a,className:"w-full cursor-pointer",children:o})]}),_e=({className:a,...n})=>e.jsx(ne,{className:L("relative flex h-full w-full items-center justify-center after:block after:h-2 after:w-2 after:rounded-[50%] after:bg-token-text-primary after:content-['']",a),...n}),O={Root:Me,Item:ke,Indicator:_e};function y({children:a}){return e.jsx("label",{className:"mb-1 block text-sm font-semibold",children:a})}function we({jitPluginTool:a,onUpdateTool:n,onClose:o}){const l=S(),[t,m]=u.useState({apiKeyValue:"",oauthClientIdValue:"",oauthClientSecretValue:"",oauthAuthUrlValue:a?.metadata?.auth?.client_url??"",oauthTokenUrlValue:a?.metadata?.auth?.authorization_url??"",oauthScopeValue:a?.metadata?.auth?.scope??"",authTypeValue:a?.metadata?.auth?.type??d.None,httpAuthTypeValue:a?.metadata?.auth?.authorization_type??"basic",customHeaderValue:a?.metadata?.auth?.custom_auth_header??"",tokenExchangeMethodValue:a?.metadata?.auth?.token_exchange_method??"default_post"});function p(i){m(A=>({...A,...i}))}function g(){n(t.authTypeValue===d.None?{type:d.None}:t.authTypeValue===d.OAuth?{type:d.OAuth,client_url:t.oauthAuthUrlValue,authorization_url:t.oauthTokenUrlValue,authorization_content_type:"application/x-www-form-urlencoded",scope:t.oauthScopeValue,token_exchange_method:t.tokenExchangeMethodValue,oauth_client_id:t.oauthClientIdValue,oauth_client_secret:t.oauthClientSecretValue}:{type:d.ServiceHTTP,authorization_type:t.httpAuthTypeValue,custom_auth_header:t.customHeaderValue,api_key:t.apiKeyValue}),o()}return e.jsxs(ee,{type:"success",isOpen:!0,title:l.formatMessage({id:"kZ040s",defaultMessage:"Authentication"}),primaryButton:e.jsx(E,{color:"primary",onClick:()=>{g()},children:e.jsx(r,{id:"dchvRM",defaultMessage:"Save"})}),secondaryButton:e.jsx(E,{color:"secondary",onClick:o,children:e.jsx(r,{id:"xHBR5t",defaultMessage:"Cancel"})}),onClose:o,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(r,{id:"la7zPT",defaultMessage:"Authentication Type"}),e.jsxs(O.Root,{onValueChange:i=>{p({authTypeValue:i})},value:t.authTypeValue,className:"mt-2 flex gap-4",children:[e.jsx(b,{label:l.formatMessage({id:"Ml5rNZ",defaultMessage:"None"}),value:d.None}),e.jsx(b,{label:l.formatMessage({id:"rN0uCi",defaultMessage:"API Key"}),value:d.ServiceHTTP}),e.jsx(b,{label:l.formatMessage({id:"qG7Z4O",defaultMessage:"OAuth"}),value:d.OAuth})]})]}),t.authTypeValue==="service_http"?e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(r,{id:"hSd+5k",defaultMessage:"API Key"})}),e.jsx(N,{placeholder:l.formatMessage({id:"9W9lGr",defaultMessage:"[HIDDEN]"}),type:"password",value:t.apiKeyValue,onChange:i=>{p({apiKeyValue:i.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"PSnRGf",defaultMessage:"Auth Type"})}),e.jsxs(O.Root,{className:"mb-2 flex gap-6 overflow-hidden rounded-lg",value:t.httpAuthTypeValue,required:!0,onValueChange:i=>{p({httpAuthTypeValue:i})},children:[e.jsx(b,{value:"basic",label:"Basic"}),e.jsx(b,{value:"bearer",label:"Bearer"}),e.jsx(b,{value:"custom",label:l.formatMessage({id:"6kqx38",defaultMessage:"Custom"})})]}),t.httpAuthTypeValue==="custom"&&e.jsxs("div",{className:"mt-2",children:[e.jsx(y,{children:e.jsx(r,{id:"XqdT/P",defaultMessage:"Custom Header Name"})}),e.jsx(N,{value:t.customHeaderValue,onChange:i=>{p({customHeaderValue:i.target.value})},className:"mb-2",placeholder:"X-Api-Key",dir:"ltr"})]})]}):t.authTypeValue==="oauth"?e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(r,{id:"lS4nvz",defaultMessage:"Client ID"})}),e.jsx(N,{placeholder:"<HIDDEN>",type:"password",value:t.oauthClientIdValue,onChange:i=>{p({oauthClientIdValue:i.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"OvwGR3",defaultMessage:"Client Secret"})}),e.jsx(N,{placeholder:"<HIDDEN>",type:"password",value:t.oauthClientSecretValue,onChange:i=>{p({oauthClientSecretValue:i.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"I27qZU",defaultMessage:"Authorization URL"})}),e.jsx(N,{value:t.oauthAuthUrlValue,onChange:i=>{p({oauthAuthUrlValue:i.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"QywIpF",defaultMessage:"Token URL"})}),e.jsx(N,{value:t.oauthTokenUrlValue,onChange:i=>{p({oauthTokenUrlValue:i.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"1VAJqN",defaultMessage:"Scope"})}),e.jsx(N,{value:t.oauthScopeValue,onChange:i=>{p({oauthScopeValue:i.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"9MvwPc",defaultMessage:"Token Exchange Method"})}),e.jsxs(O.Root,{value:t.tokenExchangeMethodValue,required:!0,onValueChange:i=>{p({tokenExchangeMethodValue:i})},children:[e.jsx(b,{value:"default_post",label:l.formatMessage({id:"vXIzoE",defaultMessage:"Default (POST request)"})}),e.jsx(b,{value:"basic_auth_header",label:l.formatMessage({id:"38o+yX",defaultMessage:"Basic authorization header"})})]})]}):null]})}function Ae({rootDomain:a,operations:n}){return n==null||n.length===0?e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(r,{id:"L69u6d",defaultMessage:"Operations in your schema will show here"})}):e.jsx("table",{className:"w-full text-sm",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-token-border-light text-left text-xs text-token-text-tertiary",children:[e.jsx("th",{className:"py-1 font-normal",children:e.jsx(r,{id:"JizDcr",defaultMessage:"Name"})}),e.jsx("th",{className:"py-1 font-normal",children:e.jsx(r,{id:"zN16fd",defaultMessage:"Method"})}),e.jsx("th",{className:"py-1 font-normal",children:e.jsx(r,{id:"y2WJvt",defaultMessage:"Path"})}),e.jsx("th",{className:"py-1 font-normal"})]}),n.map(o=>e.jsxs("tr",{className:"border-b border-token-border-light",children:[e.jsx("td",{className:"py-2",children:o.operationName}),e.jsx("td",{className:"py-2 uppercase",children:o.method}),e.jsx("td",{className:"py-2",dir:"ltr",style:{textAlign:"match-parent"},children:o.path}),e.jsx("td",{className:"py-2",children:e.jsx(w,{color:"secondary",onClick:()=>{a&&xe.publish({kind:fe.TestGizmoAction,rootDomain:a,operationName:o.operationName})},children:e.jsx(r,{id:"Ag71GQ",defaultMessage:"Test"})})})]},o.operationName))]})})}function Te({validationResponse:a}){const n=S();return e.jsxs("div",{children:[e.jsx(U,{label:n.formatMessage({id:"hKfo5R",defaultMessage:"Available actions"})}),e.jsx(Ae,{rootDomain:a.success?a.spec.root_domain:void 0,operations:a.success?a.spec.operations:void 0})]})}const Ie="https://chatgpt.com/g/g-TYEliDU6A-actionsgpt";function Ee(a){switch(a){case d.None:return R({id:"G9qfIC",defaultMessage:"None"});case d.OAuth:return R({id:"t8MwwT",defaultMessage:"OAuth"});case d.ServiceHTTP:return R({id:"rN0uCi",defaultMessage:"API Key"})}}function xt({currentlyEditingActionDomain:a,gizmoEditorData:n,updateGizmo:o,onClose:l}){const t=S(),[m,p]=u.useState(a),g=u.useRef(m),i=te(),{data:A}=ae(i?.getWorkspaceId());u.useEffect(()=>{g.current=m},[m]);const x=n?.tools?.find(s=>s.type===_.JIT_PLUGIN&&s.metadata.domain===m),[W]=u.useState(()=>x==null),M=x?.metadata?.raw_spec??"",[K,z]=u.useState(!1),[F,D]=u.useState(!1),[P,X]=u.useState(!1),f=u.useCallback(s=>{o(h=>({...h,tools:x?h.tools.map(c=>c.type===_.JIT_PLUGIN&&c.metadata.domain===m?{...c,metadata:{...c.metadata,...s,json_schema:void 0}}:c):[...h.tools,{type:_.JIT_PLUGIN,metadata:{raw_spec:"",domain:m??"Unknown domain",action_id:"",...s,json_schema:void 0}}]}))},[m,x,o]),[k,C]=u.useState(),$=n,[V]=u.useState(()=>le(async function(h){const c=await J.validateOpenAPISpec(h);C(c);const j=c.success?c.spec.root_domain:void 0;if(j){if(j!==g.current&&$?.tools?.find(v=>v.type===_.JIT_PLUGIN&&v.metadata.domain===j)){C({success:!1,errors:[t.formatMessage({id:"nwBcmJ",defaultMessage:"Action sets cannot have duplicate domains - {domain} already exists on another action"},{domain:j})]});return}o(T=>({...T,tools:T.tools.map(v=>v.type===_.JIT_PLUGIN&&v.metadata.domain===g.current?{...v,metadata:{...v.metadata,domain:j}}:v)})),p(j)}if(c.success&&c.known_auth&&c.known_privacy_policy&&x){const T={type:d.OAuth,...c.known_auth};se(x.metadata.auth,T)||f({auth:{type:d.OAuth,...c.known_auth}}),x.metadata.privacy_policy_url!==c.known_privacy_policy&&f({privacy_policy_url:c.known_privacy_policy})}},1e3)),G=k!=null?k.success?k.warnings:k.errors:void 0;u.useEffect(()=>{M===""?(C(void 0),V.cancel()):V(M)},[V,M]);const q=s=>{try{f({raw_spec:JSON.stringify(JSON.parse(s),null,2)})}catch{try{f({raw_spec:H.stringify(H.parse(s),{lineWidth:120,indent:2})})}catch{}}},Y=u.useCallback(s=>{switch(s.type){case d.None:{f({auth:{type:d.None}});break}case d.OAuth:{const{oauth_client_id:h,oauth_client_secret:c,...j}=s;f({auth:j,oauth_client_id:h,oauth_client_secret:c});break}case d.ServiceHTTP:{const{api_key:h,...c}=s;f({auth:c,api_key:h});break}}},[f]),Q=u.useCallback(()=>{window.confirm("Are you sure you want to delete this action?")&&(o(s=>({...s,tools:s.tools.filter(h=>!(h.type===_.JIT_PLUGIN&&h.metadata.domain===m))})),l())},[m,l,o]);return e.jsxs("div",{className:"h-full overflow-auto px-4 pb-12 text-sm",children:[e.jsxs("div",{className:"relative flex flex-col items-center px-16 py-6 text-center",children:[e.jsx("div",{className:"absolute left-0 top-6",children:e.jsx(E,{color:"secondary",onClick:l,icon:ce})}),x!=null&&e.jsx("div",{className:"absolute right-0 top-6",children:e.jsx(E,{color:"secondary",onClick:Q,className:"text-red-500",children:e.jsx(de,{className:"icon-md"})})}),e.jsx("div",{className:"text-xl font-semibold",children:W?e.jsx(r,{id:"LEn2vt",defaultMessage:"Add actions"}):e.jsx(r,{id:"WtVYgh",defaultMessage:"Edit actions"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(r,{id:"f0WG0Q",defaultMessage:"Let your GPT retrieve information or take actions outside of ChatGPT."})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx("a",{href:"https://help.openai.com/en/articles/8554397-creating-a-gpt",target:"_blank",rel:"noreferrer",className:"font-semibold",children:e.jsx(r,{id:"44M7/B",defaultMessage:"Learn more."})})})]}),e.jsxs(ue,{className:"relative",children:[e.jsx(U,{label:t.formatMessage({id:"kZ040s",defaultMessage:"Authentication"})}),e.jsx(ge,{onClick:()=>{z(!0)},content:t.formatMessage(Ee(x?.metadata?.auth?.type??d.None)),button:e.jsx("button",{color:"secondary",className:"flex items-center gap-2 px-3",children:e.jsx(me,{className:"icon-sm"})})}),K&&e.jsx(we,{jitPluginTool:x,onUpdateTool:Y,onClose:()=>z(!1)})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-1 flex h-8 items-center justify-between",children:[e.jsx("label",{className:"font-semibold text-token-text-primary",children:e.jsx(r,{id:"+xKwQg",defaultMessage:"Schema"})}),e.jsx("div",{className:"flex items-center",children:F?e.jsx(Ne,{onImport:s=>q(s),onClose:()=>D(!1)}):e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(w,{color:"secondary",size:"small",onClick:()=>D(!0),children:e.jsx(r,{id:"kTR+Ef",defaultMessage:"Import from URL"})}),e.jsx(ye,{onSelectExample:s=>{f({raw_spec:s})}})]})})]}),e.jsxs("div",{className:"mb-8 overflow-hidden rounded-lg border border-token-border-light",children:[e.jsxs("div",{className:"relative",children:[e.jsx("textarea",{value:M,onChange:s=>{f({raw_spec:s.target.value})},spellCheck:!1,placeholder:t.formatMessage({id:"zBM3o0",defaultMessage:"Enter your OpenAPI schema here"}),className:"block h-96 w-full border-none bg-transparent p-2 font-mono text-xs text-token-text-primary",dir:"ltr"}),e.jsx("div",{className:"absolute bottom-2 right-2 flex gap-2",children:M!==""?e.jsx(w,{onClick:()=>{q(M)},children:e.jsx(r,{id:"vJWnIM",defaultMessage:"Format"})}):e.jsxs(w,{as:"a",to:Ie,openNewTab:!0,size:"small",children:[e.jsx(r,{id:"gizmo.actions.actionsGptHelp",defaultMessage:"Get help from ActionsGPT"}),e.jsx(pe,{className:"icon-md"})]})})]}),G!=null&&G?.length>0&&e.jsx("div",{className:"border-t border-token-border-light p-2 text-red-500",children:G.map((s,h)=>e.jsx("div",{children:s},h))})]})]}),k!=null&&e.jsx(Te,{validationResponse:k}),A?.allowed_custom_actions_domains!=null&&(A?.allowed_custom_actions_domains?.length>0?e.jsxs("div",{className:"mt-4",children:[e.jsxs("p",{className:"mb-1 cursor-pointer font-semibold",onClick:()=>X(!P),children:[e.jsx(r,{id:"Gcxir6",defaultMessage:"Domains allowed by your workspace"}),e.jsx(re,{className:"inline",checked:P})]}),e.jsx("ul",{className:L("list-disc ps-4",!P&&"hidden"),children:A?.allowed_custom_actions_domains.map(s=>e.jsx("li",{children:s},s))})]}):e.jsx("p",{className:"text-sm italic",children:e.jsx(r,{id:"wWCl0j",defaultMessage:"No domains are allowed by your workspace's settings."})})),e.jsxs("div",{className:"mt-4",children:[e.jsx(U,{htmlFor:"privacyPolicyUrl",label:t.formatMessage({id:"Pbk0Gp",defaultMessage:"Privacy policy"}),description:"Privacy policy is required for all public GPTs."}),e.jsx(he,{ariaLabel:!1,name:"privacyPolicyUrl",value:x?.metadata?.privacy_policy_url??"",placeholder:"https://app.example.com/privacy",onChange:s=>{f({privacy_policy_url:s.target.value})}})]})]})}export{xt as GizmoActionsEditor};
//# sourceMappingURL=erjf3tippoq480kt.js.map
