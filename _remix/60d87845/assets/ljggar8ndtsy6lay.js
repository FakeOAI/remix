import{l as e,m as U,X as S,r as p,a0 as Y,aM as Z,co as Q,db as k,ex as d,ad as ee,bf as E,$ as r,Y as te,aY as R}from"./dwkd3b3c7kg0ot7l.js";import{n as ae,o as se,f0 as re,e as oe,ag as J,$ as w,I as ne,f1 as b}from"./ok65lib68mghk0mk.js";import{Y as B}from"./mzkxlhrlmxhntkvn.js";import{A as ie}from"./imo11jlx9l80y47y.js";import{G as le,R as ce,aZ as de,p as ue}from"./byou0827mflm7tmy.js";import{F as me,a as L,b as N}from"./o1csg33bg6t8szv3.js";import{a as pe,b as he}from"./kujeon0ojh2wxfwc.js";import"./lr2e0u44irbds248.js";import"./lmc4wszvjl4gg292.js";import"./f38uk28ff9agi8mz.js";import"./hu9vn59esh734ymj.js";import"./fu3ryqoahzknp7ja.js";import"./gsrrrfwrll6omvj2.js";import"./jfafu17xv0t0ph5c.js";import"./fsddy3bxlesj6ecw.js";import"./ll22crm7o6vtzswi.js";import"./l96b1uyg4ej6cwjh.js";import"./npagvawotm2a2fuv.js";import"./nov0yn9oognrye5r.js";import"./hvq6t2g1yzf639ud.js";import"./keqh8ykquezethwp.js";import"./jgynwps4grrtjuwd.js";import"./crdkvhpm20732qse.js";import"./iw2ygped6gyuasdc.js";import"./inoare35495u9m9k.js";import"./s32ujpnveivwtip1.js";import"./bjm22u7xm0rpa7z6.js";import"./jmzp1q0b1ceqgkkb.js";import"./iaq02e4tgcms3t7k.js";import"./o8ny37sdw3mgkuum.js";import"./mue5o3237589051v.js";import"./jozmr8arm2irlnyb.js";import"./jrj0t91a3xoyqfy7.js";import"./cbb2qmpg6ri69duw.js";import"./feo33aupyaeaeysi.js";function xe({className:a,children:i,...o}){return e.jsx(ae,{className:a,...o,children:i})}const fe=({value:a,className:i,label:o,...l})=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(se,{id:a,value:a,className:U("h-4 w-4 flex-shrink-0 gap-2 rounded-full border border-token-text-tertiary bg-transparent shadow-sm outline-none hover:bg-token-main-surface-tertiary",i),...l}),e.jsx("label",{htmlFor:a,className:"w-full cursor-pointer",children:o})]}),ge=({className:a,...i})=>e.jsx(re,{className:U("relative flex h-full w-full items-center justify-center after:block after:h-2 after:w-2 after:rounded-[50%] after:bg-token-text-primary after:content-['']",a),...i}),O={Root:xe,Item:fe,Indicator:ge};function ye({onSelectExample:a}){const i=S(),o=p.useRef(null);return e.jsxs("select",{onChange:l=>{if(l.target.value==="label")return;const t=parseInt(l.target.value);a(H[t].spec),o.current.value="label"},className:"h-8 rounded-lg border border-token-border-medium bg-transparent px-2 py-0 text-sm",ref:o,children:[e.jsx("option",{value:"label",children:i.formatMessage(I.examples)}),H.map((l,t)=>e.jsx("option",{value:t,children:i.formatMessage(l.displayName)},t))]})}const je={openapi:"3.1.0",info:{title:"Get weather data",description:"Retrieves current weather data for a location.",version:"v1.0.0"},servers:[{url:"https://weather.example.com"}],paths:{"/location":{get:{description:"Get temperature for a specific location",operationId:"GetCurrentWeather",parameters:[{name:"location",in:"query",description:"The city and state to retrieve the weather for",required:!0,schema:{type:"string"}}],deprecated:!1}}},components:{schemas:{}}},ve=`# Taken from https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.0/petstore.yaml

openapi: "3.0.0"
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
          type: string`,be={openapi:"3.1.0",info:{title:"Untitled",description:"Your OpenAPI specification",version:"v1.0.0"},servers:[{url:""}],paths:{},components:{schemas:{}}},I=Y({examples:{id:"gizmo.actions.examples",defaultMessage:"Examples"},weatherExampleTitle:{id:"gizmo.actions.weatherExampleTitle",defaultMessage:"Weather (JSON)"},petStoreExampleTitle:{id:"gizmo.actions.petStoreExampleTitle",defaultMessage:"Pet Store (YAML)"},blankExampleTitle:{id:"gizmo.actions.blankExampleTitle",defaultMessage:"Blank Template"}}),H=[{displayName:I.weatherExampleTitle,spec:JSON.stringify(je,null,2)},{displayName:I.petStoreExampleTitle,spec:ve},{displayName:I.blankExampleTitle,spec:JSON.stringify(be,null,2)}];function Ne({content:a,button:i,onClick:o}){return e.jsxs("div",{className:"flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",onClick:o,children:[e.jsx("div",{className:"h-9 grow px-3 py-2",children:a}),e.jsx("div",{className:"w-px bg-token-border-medium"}),i]})}const Me="https://chatgpt.com/g/g-TYEliDU6A-actionsgpt";function y({children:a}){return e.jsx("label",{className:"mb-1 block text-sm font-semibold",children:a})}function _e({jitPluginTool:a,onUpdateTool:i,onClose:o}){const l=S(),[t,h]=p.useState({apiKeyValue:"",oauthClientIdValue:"",oauthClientSecretValue:"",oauthAuthUrlValue:a?.metadata?.auth?.client_url??"",oauthTokenUrlValue:a?.metadata?.auth?.authorization_url??"",oauthScopeValue:a?.metadata?.auth?.scope??"",authTypeValue:a?.metadata?.auth?.type??d.None,httpAuthTypeValue:a?.metadata?.auth?.authorization_type??"basic",customHeaderValue:a?.metadata?.auth?.custom_auth_header??"",tokenExchangeMethodValue:a?.metadata?.auth?.token_exchange_method??"default_post"});function u(n){h(A=>({...A,...n}))}function x(){i(t.authTypeValue===d.None?{type:d.None}:t.authTypeValue===d.OAuth?{type:d.OAuth,client_url:t.oauthAuthUrlValue,authorization_url:t.oauthTokenUrlValue,authorization_content_type:"application/x-www-form-urlencoded",scope:t.oauthScopeValue,token_exchange_method:t.tokenExchangeMethodValue,oauth_client_id:t.oauthClientIdValue,oauth_client_secret:t.oauthClientSecretValue}:{type:d.ServiceHTTP,authorization_type:t.httpAuthTypeValue,custom_auth_header:t.customHeaderValue,api_key:t.apiKeyValue}),o()}return e.jsxs(te,{type:"success",isOpen:!0,title:l.formatMessage({id:"kZ040s",defaultMessage:"Authentication"}),primaryButton:e.jsx(E,{color:"primary",onClick:()=>{x()},children:e.jsx(r,{id:"dchvRM",defaultMessage:"Save"})}),secondaryButton:e.jsx(E,{color:"secondary",onClick:o,children:e.jsx(r,{id:"xHBR5t",defaultMessage:"Cancel"})}),onClose:o,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(r,{id:"la7zPT",defaultMessage:"Authentication Type"}),e.jsxs(O.Root,{onValueChange:n=>{u({authTypeValue:n})},value:t.authTypeValue,className:"mt-2 flex gap-4",children:[e.jsx(b,{label:l.formatMessage({id:"Ml5rNZ",defaultMessage:"None"}),value:d.None}),e.jsx(b,{label:l.formatMessage({id:"rN0uCi",defaultMessage:"API Key"}),value:d.ServiceHTTP}),e.jsx(b,{label:l.formatMessage({id:"qG7Z4O",defaultMessage:"OAuth"}),value:d.OAuth})]})]}),t.authTypeValue==="service_http"?e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(r,{id:"hSd+5k",defaultMessage:"API Key"})}),e.jsx(N,{placeholder:l.formatMessage({id:"9W9lGr",defaultMessage:"[HIDDEN]"}),type:"password",value:t.apiKeyValue,onChange:n=>{u({apiKeyValue:n.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"PSnRGf",defaultMessage:"Auth Type"})}),e.jsxs(O.Root,{className:"mb-2 flex gap-6 overflow-hidden rounded-lg",value:t.httpAuthTypeValue,required:!0,onValueChange:n=>{u({httpAuthTypeValue:n})},children:[e.jsx(b,{value:"basic",label:"Basic"}),e.jsx(b,{value:"bearer",label:"Bearer"}),e.jsx(b,{value:"custom",label:l.formatMessage({id:"6kqx38",defaultMessage:"Custom"})})]}),t.httpAuthTypeValue==="custom"&&e.jsxs("div",{className:"mt-2",children:[e.jsx(y,{children:e.jsx(r,{id:"XqdT/P",defaultMessage:"Custom Header Name"})}),e.jsx(N,{value:t.customHeaderValue,onChange:n=>{u({customHeaderValue:n.target.value})},className:"mb-2",placeholder:"X-Api-Key",dir:"ltr"})]})]}):t.authTypeValue==="oauth"?e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(r,{id:"lS4nvz",defaultMessage:"Client ID"})}),e.jsx(N,{placeholder:"<HIDDEN>",type:"password",value:t.oauthClientIdValue,onChange:n=>{u({oauthClientIdValue:n.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"OvwGR3",defaultMessage:"Client Secret"})}),e.jsx(N,{placeholder:"<HIDDEN>",type:"password",value:t.oauthClientSecretValue,onChange:n=>{u({oauthClientSecretValue:n.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"I27qZU",defaultMessage:"Authorization URL"})}),e.jsx(N,{value:t.oauthAuthUrlValue,onChange:n=>{u({oauthAuthUrlValue:n.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"QywIpF",defaultMessage:"Token URL"})}),e.jsx(N,{value:t.oauthTokenUrlValue,onChange:n=>{u({oauthTokenUrlValue:n.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"1VAJqN",defaultMessage:"Scope"})}),e.jsx(N,{value:t.oauthScopeValue,onChange:n=>{u({oauthScopeValue:n.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(r,{id:"9MvwPc",defaultMessage:"Token Exchange Method"})}),e.jsxs(O.Root,{value:t.tokenExchangeMethodValue,required:!0,onValueChange:n=>{u({tokenExchangeMethodValue:n})},children:[e.jsx(b,{value:"default_post",label:l.formatMessage({id:"vXIzoE",defaultMessage:"Default (POST request)"})}),e.jsx(b,{value:"basic_auth_header",label:l.formatMessage({id:"38o+yX",defaultMessage:"Basic authorization header"})})]})]}):null]})}function ke({onImport:a,onClose:i}){const[o,l]=p.useState(""),[t,h]=p.useState(!1);async function u(){let x;try{x=new URL(o)}catch{return}if(x?.hostname){h(!0);try{const n=await J.fetchOpenAPISpec(o);a(n.content),i()}finally{h(!1)}}}return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{name:"url",value:o,onChange:x=>{l(x.target.value)},placeholder:"https://...",className:"h-8 rounded border border-token-border-light px-2 text-sm",autoFocus:!0,dir:"ltr"}),e.jsx(w,{color:"primary",size:"small",loading:t,onClick:u,children:e.jsx(r,{id:"7sLuEB",defaultMessage:"Import"})}),e.jsx(w,{color:"secondary",size:"small",onClick:i,children:e.jsx(r,{id:"xHBR5t",defaultMessage:"Cancel"})})]})}function we({rootDomain:a,operations:i}){return i==null||i.length===0?e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(r,{id:"L69u6d",defaultMessage:"Operations in your schema will show here"})}):e.jsx("table",{className:"w-full text-sm",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-b border-token-border-light text-left text-xs text-token-text-tertiary",children:[e.jsx("th",{className:"py-1 font-normal",children:e.jsx(r,{id:"JizDcr",defaultMessage:"Name"})}),e.jsx("th",{className:"py-1 font-normal",children:e.jsx(r,{id:"zN16fd",defaultMessage:"Method"})}),e.jsx("th",{className:"py-1 font-normal",children:e.jsx(r,{id:"y2WJvt",defaultMessage:"Path"})}),e.jsx("th",{className:"py-1 font-normal"})]}),i.map(o=>e.jsxs("tr",{className:"border-b border-token-border-light",children:[e.jsx("td",{className:"py-2",children:o.operationName}),e.jsx("td",{className:"py-2 uppercase",children:o.method}),e.jsx("td",{className:"py-2",dir:"ltr",style:{textAlign:"match-parent"},children:o.path}),e.jsx("td",{className:"py-2",children:e.jsx(w,{color:"secondary",onClick:()=>{a&&pe.publish({kind:he.TestGizmoAction,rootDomain:a,operationName:o.operationName})},children:e.jsx(r,{id:"Ag71GQ",defaultMessage:"Test"})})})]},o.operationName))]})})}function Ae({validationResponse:a}){const i=S();return e.jsxs("div",{children:[e.jsx(L,{label:i.formatMessage({id:"hKfo5R",defaultMessage:"Available actions"})}),e.jsx(we,{rootDomain:a.success?a.spec.root_domain:void 0,operations:a.success?a.spec.operations:void 0})]})}function Te(a){switch(a){case d.None:return R({id:"G9qfIC",defaultMessage:"None"});case d.OAuth:return R({id:"t8MwwT",defaultMessage:"OAuth"});case d.ServiceHTTP:return R({id:"rN0uCi",defaultMessage:"API Key"})}}function dt({currentlyEditingActionDomain:a,gizmoEditorData:i,updateGizmo:o,onClose:l}){const t=S(),[h,u]=p.useState(a),x=p.useRef(h),n=Z(),{data:A}=Q(n?.getWorkspaceId());p.useEffect(()=>{x.current=h},[h]);const f=i?.tools?.find(s=>s.type===k.JIT_PLUGIN&&s.metadata.domain===h),[W]=p.useState(()=>f==null),M=f?.metadata?.raw_spec??"",[F,z]=p.useState(!1),[K,q]=p.useState(!1),[P,X]=p.useState(!1);function g(s){o(m=>({...m,tools:f?m.tools.map(c=>c.type===k.JIT_PLUGIN&&c.metadata.domain===h?{...c,metadata:{...c.metadata,...s,json_schema:void 0}}:c):[...m.tools,{type:k.JIT_PLUGIN,metadata:{raw_spec:"",domain:h??"Unknown domain",action_id:"",...s,json_schema:void 0}}]}))}const[_,V]=p.useState(),$=i,[C]=p.useState(()=>oe(async function(m){const c=await J.validateOpenAPISpec(m);V(c);const j=c.success?c.spec.root_domain:void 0;if(j){if(j!==x.current&&$?.tools?.find(v=>v.type===k.JIT_PLUGIN&&v.metadata.domain===j)){V({success:!1,errors:[t.formatMessage({id:"nwBcmJ",defaultMessage:"Action sets cannot have duplicate domains - {domain} already exists on another action"},{domain:j})]});return}o(T=>({...T,tools:T.tools.map(v=>v.type===k.JIT_PLUGIN&&v.metadata.domain===x.current?{...v,metadata:{...v.metadata,domain:j}}:v)})),u(j)}if(c.success&&c.known_auth&&c.known_privacy_policy&&f){const T={type:d.OAuth,...c.known_auth};ee(f.metadata.auth,T)||g({auth:{type:d.OAuth,...c.known_auth}}),f.metadata.privacy_policy_url!==c.known_privacy_policy&&g({privacy_policy_url:c.known_privacy_policy})}},1e3)),G=_!=null?_.success?_.warnings:_.errors:void 0;p.useEffect(()=>{M===""?(V(void 0),C.cancel()):C(M)},[C,M]);const D=s=>{try{g({raw_spec:JSON.stringify(JSON.parse(s),null,2)})}catch{try{g({raw_spec:B.stringify(B.parse(s),{lineWidth:120,indent:2})})}catch{}}};return e.jsxs("div",{className:"h-full overflow-auto px-4 pb-12 text-sm",children:[e.jsxs("div",{className:"relative flex flex-col items-center px-16 py-6 text-center",children:[e.jsx("div",{className:"absolute left-0 top-6",children:e.jsx(E,{color:"secondary",onClick:l,icon:le})}),f!=null&&e.jsx("div",{className:"absolute right-0 top-6",children:e.jsx(E,{color:"secondary",onClick:()=>{window.confirm("Are you sure you want to delete this action?")&&(o(s=>({...s,tools:s.tools.filter(m=>!(m.type===k.JIT_PLUGIN&&m.metadata.domain===h))})),l())},className:"text-red-500",children:e.jsx(ce,{className:"icon-md"})})}),e.jsx("div",{className:"text-xl font-semibold",children:W?e.jsx(r,{id:"LEn2vt",defaultMessage:"Add actions"}):e.jsx(r,{id:"WtVYgh",defaultMessage:"Edit actions"})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(r,{id:"f0WG0Q",defaultMessage:"Let your GPT retrieve information or take actions outside of ChatGPT."})}),e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx("a",{href:"https://help.openai.com/en/articles/8554397-creating-a-gpt",target:"_blank",rel:"noreferrer",className:"font-semibold",children:e.jsx(r,{id:"44M7/B",defaultMessage:"Learn more."})})})]}),e.jsxs(me,{className:"relative",children:[e.jsx(L,{label:t.formatMessage({id:"kZ040s",defaultMessage:"Authentication"})}),e.jsx(Ne,{onClick:()=>{z(!0)},content:t.formatMessage(Te(f?.metadata?.auth?.type??d.None)),button:e.jsx("button",{color:"secondary",className:"flex items-center gap-2 px-3",children:e.jsx(de,{className:"icon-sm"})})}),F&&e.jsx(_e,{jitPluginTool:f,onUpdateTool:s=>{switch(s.type){case d.None:{g({auth:{type:d.None}});break}case d.OAuth:{const{oauth_client_id:m,oauth_client_secret:c,...j}=s;g({auth:j,oauth_client_id:m,oauth_client_secret:c});break}case d.ServiceHTTP:{const{api_key:m,...c}=s;g({auth:c,api_key:m});break}}},onClose:()=>{z(!1)}})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-1 flex h-8 items-center justify-between",children:[e.jsx("label",{className:"font-semibold text-token-text-primary",children:e.jsx(r,{id:"+xKwQg",defaultMessage:"Schema"})}),e.jsx("div",{className:"flex items-center",children:K?e.jsx(ke,{onImport:s=>{D(s)},onClose:()=>{q(!1)}}):e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(w,{color:"secondary",size:"small",onClick:()=>{q(!0)},children:e.jsx(r,{id:"kTR+Ef",defaultMessage:"Import from URL"})}),e.jsx(ye,{onSelectExample:s=>{g({raw_spec:s})}})]})})]}),e.jsxs("div",{className:"mb-8 overflow-hidden rounded-lg border border-token-border-light",children:[e.jsxs("div",{className:"relative",children:[e.jsx("textarea",{value:M,onChange:s=>{g({raw_spec:s.target.value})},spellCheck:!1,placeholder:t.formatMessage({id:"zBM3o0",defaultMessage:"Enter your OpenAPI schema here"}),className:"block h-96 w-full border-none bg-transparent p-2 font-mono text-xs text-token-text-primary",dir:"ltr"}),e.jsx("div",{className:"absolute bottom-2 right-2 flex gap-2",children:M!==""?e.jsx(w,{onClick:()=>{D(M)},children:e.jsx(r,{id:"vJWnIM",defaultMessage:"Format"})}):e.jsxs(w,{as:"a",to:Me,openNewTab:!0,size:"small",children:[e.jsx(r,{id:"gizmo.actions.actionsGptHelp",defaultMessage:"Get help from ActionsGPT"}),e.jsx(ue,{className:"icon-md"})]})})]}),G!=null&&G?.length>0&&e.jsx("div",{className:"border-t border-token-border-light p-2 text-red-500",children:G.map((s,m)=>e.jsx("div",{children:s},m))})]})]}),_!=null&&e.jsx(Ae,{validationResponse:_}),A?.allowed_custom_actions_domains!=null&&(A?.allowed_custom_actions_domains.length>0?e.jsxs("div",{className:"mt-4",children:[e.jsxs("p",{className:"mb-1 cursor-pointer font-semibold",onClick:()=>X(!P),children:[e.jsx(r,{id:"Gcxir6",defaultMessage:"Domains allowed by your workspace"}),e.jsx(ie,{className:"inline",checked:P})]}),e.jsx("ul",{className:U("list-disc ps-4",!P&&"hidden"),children:A?.allowed_custom_actions_domains.map(s=>e.jsx("li",{children:s},s))})]}):e.jsx("p",{className:"text-sm italic",children:e.jsx(r,{id:"wWCl0j",defaultMessage:"No domains are allowed by your workspace's settings."})})),e.jsxs("div",{className:"mt-4",children:[e.jsx(L,{label:t.formatMessage({id:"Pbk0Gp",defaultMessage:"Privacy policy"}),description:"Privacy policy is required for all public GPTs."}),e.jsx(ne,{name:"privacyPolicyUrl",value:f?.metadata?.privacy_policy_url??"",placeholder:"https://app.example.com/privacy",onChange:s=>{g({privacy_policy_url:s.target.value})}})]})]})}export{dt as GizmoActionsEditor};
//# sourceMappingURL=ljggar8ndtsy6lay.js.map
