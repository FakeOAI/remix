import{r as l,z as wn,dZ as N,w as Tn,fX as Dn,g3 as Rn,g4 as Fn,dx as Mn,fZ as kn,g as _n,cG as U,j as u,bI as un,ar as En,cb as Pn,c0 as In,D as zn,ao as k,aL as Q,bB as Ln,J as Nn}from"./g96yqlzu8qctmxup.js";import{ak as Un,I as Bn}from"./blm69jdcvj6igj3e.js";import{u as On}from"./mt4dm81dj6fgisty.js";import{kG as Vn,d as jn,js as qn,cX as Wn,a7 as nn,cp as Gn,bf as Hn,ds as en,kH as Xn}from"./lciey5sok1ead3qa.js";import{X as $n,k as Kn,l as Yn,a as Zn}from"./h7j7olgo1n0zgw52.js";import{m as Jn}from"./obti0z5j5aljf92k.js";const tn=300,dn=async(t=1)=>{let n=0,e;return new Promise(s=>{const o=c=>(e||(e=c),c-e<t*1e3?(n+=1,requestAnimationFrame(o)):s(Math.floor(n/t)));requestAnimationFrame(o)})},Qn=t=>{const n=l.useRef(t),e=l.useCallback(s=>{(n.current[0]!==s.width||n.current[1]!==s.height)&&(n.current=[s.width,s.height])},[]);return{canvasSizeRef:n,handleCanvasSizeUpdate:e}},ne=2,ee=({viewport:t,canvasSize:n,shouldMeasurePerf:e,source:s})=>{const o=l.useRef({}),c=l.useCallback(r=>{const f=r.getExtension("WEBGL_debug_renderer_info");f&&(o.current.vendor=r.getParameter(f.UNMASKED_VENDOR_WEBGL),o.current.renderer=r.getParameter(f.UNMASKED_RENDERER_WEBGL))},[]);return l.useEffect(()=>{const r={vendor:o.current.vendor??"(unavailable)",renderer:o.current.renderer??"(unavailable)",width:t[0],height:t[1],canvasWidth:n[0],canvasHeight:n[1],dpr:window.devicePixelRatio,source:s};!wn(r,o)&&e&&(o.current=r,dn(ne).then(g=>{N.bloop.performance({...r,fps:g})}))},[n,e,t,s]),c},te=2,oe=58,on=1e3,ae=({viewport:t,initialScale:n,shouldCalibrate:e})=>{const[s,o]=l.useState(n),c=l.useRef(void 0),r=l.useRef(void 0),f=l.useCallback(()=>{dn(te).then(g=>{if(g<oe){const v=Math.sqrt(g/60);o(m=>m*v),r.current=window.setTimeout(f,on)}})},[]);return l.useEffect(()=>{const[g,v]=t,[m,p]=c.current??[];return e&&(m!==g||p!==v)&&(c.current=t,clearTimeout(r.current),o(n),r.current=window.setTimeout(f,on)),()=>{clearTimeout(r.current)}},[e,f,n,t]),s};var se=Tn,ie=Dn;function re(t){return ie(t)&&se(t)}var le=re,ce=Rn,ue=Mn,de=kn,fe=Fn,me=le,ge=Math.max;function ve(t){if(!(t&&t.length))return[];var n=0;return t=ce(t,function(e){if(me(e))return n=ge(e.length,n),!0}),fe(n,function(e){return ue(t,de(e))})}var pe=ve,he=Vn,be=pe,xe=he(be),Se=xe;const I=_n(Se),B=240,fn=2048,Ae=60,O=Math.floor(1e3/Ae),mn=new Array(B).fill(0),ye=t=>{const n=$n(t,{bands:B,updateInterval:O,loPass:0,hiPass:400,analyserOptions:{fftSize:fn}});return n.length===0?mn:n},V=t=>{const{magnitudes:n,binCount:e,gainMultiplier:s}=t;if(n.length===0)return new Array(e).fill(0);const o=Math.ceil(n.length/e),c=[];for(let r=0;r<n.length;r+=o){const f=Math.min(r+o,n.length),g=n.slice(r,f).sort((d,i)=>d-i),v=Math.floor(g.length/2);let m;g.length%2===0?m=(g[v-1]+g[v])/2:m=g[v],m=Math.abs(m),m*=s;const p=m/(m+1);c.push(p)}return c},gn=(t,n)=>{const e=n.sampleRate,s=t.length,o=n.bandCount,c=n.binCount,r=n.gainMultipliers;if(r.length!==o)throw new Error("gainMultipliers must have length equal to bandCount");const f=s*2,g=e/f,v=t.map((a,b)=>b*g),m=20,p=e/2,d=new Array(o+1).fill(0).map((a,b)=>m*Math.pow(p/m,b/o)),i=new Array(o).fill(null).map(()=>[]);for(let a=0;a<v.length;a+=1)for(let b=0;b<o;b+=1)if(v[a]>=d[b]&&v[a]<d[b+1]){i[b].push(t[a]);break}for(let a=0;a<o;a+=1){const b=i[a],y=r[a];i[a]=V({magnitudes:b,binCount:c,gainMultiplier:y})}return i},an=60,vn=48e3,Ce=1,we=2,Te=40,De=2;function sn({time:t,timeConstant:n}){return 1-Math.exp(-t/n)}function rn(t,n){const e=n[1]-n[0];return n[0]+t*e}const z=t=>{if(!Array.isArray(t)||t.length!==2||typeof t[0]!="number"||typeof t[1]!="number")throw new Error("zip failed - received a value that is not a [number, number] tuple")},Re=t=>{const{prevAudioData:n,prevCumulativeAudioData:e,deltaTimeS:s,audioDataRaw:o}=t,c=o.map(d=>d*s*an*Ce),r=sn({time:s,timeConstant:we}),f=I(n,c).map(d=>(z(d),rn(r,d))),g=o.map(d=>d*s*an*Te),v=I(e,g).map(d=>(z(d),d[0]+d[1])),m=sn({time:s,timeConstant:De}),p=I(e,v).map(d=>(z(d),rn(m,d)));return{audioData:f,cumulativeAudioData:p}},rt=(t,n)=>{const e=ye(t),s=gn(e,{sampleRate:vn,binCount:n.bins,bandCount:n.bands,gainMultipliers:n.gainMultipliers}),o=V({magnitudes:e,binCount:1,gainMultiplier:1});return{bandMagnitudes:s,cumulativeMagnitude:o}};function Fe(t){const n=l.useRef(t);n.current=t;const[e,s]=l.useState(null),o=l.useCallback(c=>{s(c)},[]);return U(()=>{const c=new ResizeObserver(r=>{for(const f of r)n.current(f)});return e&&c.observe(e),()=>{c.disconnect()}},[e]),o}const R=Kn.createChild("GLCanvas");function Me({className:t,vert:n,frag:e,Behaviors:s,onViewportUpdate:o,onRenderComplete:c,onGlAvailable:r,onCanvasSizeUpdate:f,scale:g}){const v=l.useRef(null),m=l.useRef(null),[p,d]=l.useState(null),[i,a]=l.useState(),b=l.useRef(jn(h=>{const{width:S,height:x}=h.contentRect,C=Math.floor(Math.min(S??0,x??0));d(C),o?.({width:C,height:C})},100)),y=Fe(b.current);if(U(()=>{const h=v.current,{width:S,height:x}=h??{};if(h&&p!=null&&S&&x){const C=h.getContext("webgl2",{premultipliedAlpha:!1});C?a(C):R.error("webgl2 context not supported")}},[p]),U(()=>{if(!i)return;const h=i.createProgram(),S=i.createShader(i.VERTEX_SHADER),x=i.createShader(i.FRAGMENT_SHADER);if(!h){R.debug("failed to create program");return}if(!S||!x){R.debug("failed to create shaders",S,x);return}let C="";if(i.shaderSource(S,n),i.compileShader(S),C+=`vertShader:
${i.getShaderInfoLog(S)}
`,i.attachShader(h,S),i.shaderSource(x,e),i.compileShader(x),C+=`fragShader:
${i.getShaderInfoLog(x)}
`,i.attachShader(h,x),i.linkProgram(h),i.useProgram(h),C+=i.getProgramInfoLog(h),!i.getProgramParameter(h,i.LINK_STATUS))throw`Could not compile WebGL program. 

${C}`;m.current=h,R.debug("program created"),r?.(i,h);const D=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);return D&&(i.waitSync(D,0,i.TIMEOUT_IGNORED),c?.()),()=>{R.debug("cleaning up"),m.current=null,i.detachShader(h,S),i.detachShader(h,x),i.deleteShader(S),i.deleteShader(x),i.deleteProgram(h)}},[i,e,n]),p!=null&&i&&v.current){const h=v.current,S=p*window.devicePixelRatio*(g??1);h.width=S,h.height=S,i.viewport(0,0,S,S),f?.({width:S,height:S})}const T=m.current;return u.jsxs("div",{className:t,ref:y,children:[u.jsx("canvas",{ref:v,style:{width:p??void 0,height:p??void 0}},p),i&&T&&s&&u.jsx(s,{ctx:i,program:T})]})}function ke({GLUniformsSetter:t,textureImage:n,textureName:e,variables:s,className:o,vert:c,frag:r,onViewportUpdate:f,onRenderComplete:g,onGlAvailable:v,onCanvasSizeUpdate:m,scale:p}){const d=l.useRef(void 0),i=l.useCallback(async(a,b)=>{if(d.current=new t(a,b),n&&e){const y=a.createTexture();a.bindTexture(a.TEXTURE_2D,y),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,n);const T=a.getUniformLocation(b,e);a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,y),a.uniform1i(T,0)}v?.(a,b)},[t,n,e,v]);return l.useEffect(()=>{d.current&&d.current.setVariablesAndRender(s)},[s]),u.jsx(Me,{className:o,vert:c,frag:r,onViewportUpdate:f,onRenderComplete:g,onGlAvailable:i,onCanvasSizeUpdate:m,scale:p,Behaviors:()=>null})}const _e="webp",Ee=512,Pe=512,Ie="srgb",ze=3,Le="uchar",Ne=72,Ue=!1,Be=8,Oe=!1,Ve=!1,je="https://cdn.oaistatic.com/assets/noise-watercolor-m3j88gni.webp",qe={format:_e,width:Ee,height:Pe,space:Ie,channels:ze,depth:Le,density:Ne,isProgressive:Ue,paletteBitDepth:Be,hasProfile:Oe,hasAlpha:Ve,src:je};let pn;const _=new window.Image;_.crossOrigin="anonymous";_.src=qe.src;_.onload=()=>{pn=_};var We=`#version 300 es
#define E (2.71828182846)
#define pi (3.14159265358979323844)
#define NUM_OCTAVES (4)

precision highp float;

struct ColoredSDF {
  float distance;
  vec4 color;
};

struct SDFArgs {
  vec2 st;
  float amount;
  float duration;
  float time;
  float mainRadius;
};

float triangle(float t, float p) {
  return 2.0 * abs(t / p - floor(t / p + 0.5));
}

float spring(float t, float d) {
  return 1.0 - exp(-E * 2.0 * t) * cos((1.0 - d) * 115.0 * t);
}

float silkySmooth(float t, float k) {
  return atan(k * sin((t - 0.5) * pi)) / atan(k) * 0.5 + 0.5;
}

float scaled(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), float(0), float(1));
}

float fixedSpring(float t, float d) {
  float s = mix(
    1.0 - exp(-E * 2.0 * t) * cos((1.0 - d) * 115.0 * t),
    1.0,
    scaled(0.0, 1.0, t)
  );
  return s * (1.0 - t) + t;
}

float bounce(float t, float d) {
  return -sin(pi * (1.0 - d) * t) *
  (1.0 - t) *
  exp(-2.71828182846 * 2.0 * t) *
  t *
  10.0;
}

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float random(ivec2 st) {
  return random(vec2(st));
}

float random(float p) {
  return random(vec2(p));
}

float opSmoothUnion(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) - k * h * (1.0 - h);
}

float opSmoothSubtraction(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 - 0.5 * (d2 + d1) / k, 0.0, 1.0);
  return mix(d2, -d1, h) + k * h * (1.0 - h);
}

float opSmoothIntersection(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 - 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) + k * h * (1.0 - h);
}

float sdRoundedBox(vec2 p, vec2 b, vec4 r) {
  r.xy = p.x > 0.0 ? r.xy : r.zw;
  r.x = p.y > 0.0 ? r.x : r.y;
  vec2 q = abs(p) - b + r.x;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;
}

float sdSegment(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

float sdArc(vec2 p, vec2 sca, vec2 scb, float ra, float rb) {
  p *= mat2(sca.x, sca.y, -sca.y, sca.x);
  p.x = abs(p.x);
  return scb.y * p.x > scb.x * p.y
    ? length(p - ra * scb) - rb
    : abs(length(p) - ra) - rb;
}

float arc(vec2 st, float startAngle, float length, float radius, float width) {
  return sdArc(
    st,
    vec2(sin(startAngle), cos(startAngle)),
    vec2(sin(length), cos(length)),
    radius,
    width
  );
}

vec2 rotate(vec2 v, float a) {
  float s = sin(a);
  float c = cos(a);
  mat2 m = mat2(c, s, -s, c);
  return m * v;
}

vec3 blendLinearBurn_13_5(vec3 base, vec3 blend) {
  
  return max(base + blend - vec3(1.0), vec3(0.0));
}

vec3 blendLinearBurn_13_5(vec3 base, vec3 blend, float opacity) {
  return blendLinearBurn_13_5(base, blend) * opacity + base * (1.0 - opacity);
}

vec4 permute(vec4 x) {
  return mod((x * 34.0 + 1.0) * x, 289.0);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float cnoise(vec3 P) {
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = vec4(Pi0.z);
  vec4 iz1 = vec4(Pi1.z);

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(vec4(0.0), gx0) - 0.5);
  gy0 -= sz0 * (step(vec4(0.0), gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(vec4(0.0), gx1) - 0.5);
  gy1 -= sz1 * (step(vec4(0.0), gy1) - 0.5);

  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

  vec4 norm0 = taylorInvSqrt(
    vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110))
  );
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(
    vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111))
  );
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(
    vec4(n000, n100, n010, n110),
    vec4(n001, n101, n011, n111),
    fade_xyz.z
  );
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

float rand(vec2 n) {
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 ip = floor(p);
  vec2 u = fract(p);
  u = u * u * (3.0 - 2.0 * u);

  float res = mix(
    mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
    mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x),
    u.y
  );
  return res * res;
}

float fbm(vec2 x) {
  float v = 0.0;
  float a = 0.5;
  vec2 shift = vec2(100.0);
  
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < NUM_OCTAVES; ++i) {
    v += a * noise(x);
    x = rot * x * 2.0 + shift;
    a *= 0.5;
  }
  return v;
}

/**
 * End new code for colored orb
 */

ColoredSDF applyIdleState(
  ColoredSDF sdf,
  SDFArgs args,
  bool isDarkMode /**
 * new bool
 */
) {
  float midRadius = 0.12; 
  float maxRadius = 0.3; 
  float t1 = 1.0; 
  float gamma = 3.0; 
  float omega = pi / 2.0; 

  
  float k = exp(-gamma) * omega;

  float radius;
  if (args.time <= t1) {
    
    float t_prime = args.time / t1;
    
    float springValue = 1.0 - exp(-gamma * t_prime) * cos(omega * t_prime);
    radius = midRadius * springValue;
  } else {
    
    float adjustedTime = args.time - t1;
    
    radius =
      midRadius + (maxRadius - midRadius) * (1.0 - exp(-k * adjustedTime));
  }

  
  float distance = length(args.st) - radius;

  
  sdf.distance = mix(sdf.distance, distance, args.amount);

  
  
  float alpha = sin(pi / 0.7 * args.time) * 0.3 + 0.7;
  vec4 color = vec4(isDarkMode ? vec3(1.0) : vec3(0.0), alpha);

  
  sdf.color = mix(sdf.color, color, args.amount);

  return sdf;
}

ColoredSDF applyIdleStateLegacy(ColoredSDF sdf, SDFArgs args, bool isDarkMode) {
  float connectedLinearAnimation = scaled(0.0, 2.0, args.duration);
  float connectedAnimation = fixedSpring(connectedLinearAnimation, 0.96);
  float circleSize =
    mix(
      pow(scaled(0.0, 3.0, args.time), 2.0) * 0.75 + 0.1,
      1.0,
      connectedAnimation
    ) *
    0.33;
  vec2 rotatedCoords = rotate(
    args.st,
    -args.time * pi -
      connectedAnimation * pi * 2.0 -
      pi * 2.0 * 5.0 * silkySmooth(scaled(0.0, 5.0, args.time), 2.0)
  );

  float strokeWidth = mix(circleSize / 2.0, circleSize, connectedAnimation);
  float connecting = abs(length(args.st) - circleSize) - strokeWidth;

  float connected = length(args.st) - circleSize;
  float idleDist = mix(connecting, connected, connectedAnimation);

  float d = min(sdf.distance, idleDist);
  sdf.distance = mix(sdf.distance, d, args.amount);
  float angle = atan(rotatedCoords.y, rotatedCoords.x);
  float alpha = mix(
    min(1.0, scaled(-pi, pi, angle)),
    1.0,
    connectedLinearAnimation
  );

  float spinningCircleDist =
    length(
      rotatedCoords -
        vec2(-mix(circleSize, strokeWidth, connectedAnimation), 0.0)
    ) -
    strokeWidth;

  alpha = min(
    1.0,
    max(
      alpha,
      smoothstep(0.005, 0.0, spinningCircleDist) + connectedAnimation * 4.0
    )
  );

  sdf.color = mix(
    sdf.color,
    vec4(isDarkMode ? vec3(1.0) : vec3(0.0), alpha),
    args.amount
  );
  return sdf;
}

ColoredSDF applyListenState(
  ColoredSDF sdf,
  SDFArgs args,
  float micLevel,
  float listenTimestamp, /* new */
  float touchDownTimestamp, /* new */
  float touchUpTimestamp, /* new */
  bool fadeBloopWhileListening /* new */
) {
  float breathingSequence = sin(args.time) * 0.5 + 0.5;
  float entryAnimation = fixedSpring(scaled(0.0, 3.0, args.duration), 0.9);

  float touch =
    fixedSpring(scaled(0.0, 1.0, args.time - touchDownTimestamp), 0.99) -
    fixedSpring(scaled(0.0, 0.8, args.time - touchUpTimestamp), 1.0);

  float listenAnimation = clamp(
    spring(scaled(0.0, 0.9, args.duration), 1.0),
    0.0,
    1.0
  );
  float radius = 0.0;
  float smoothlevel = micLevel;
  float l1 = smoothlevel;
  radius = 0.38 + l1 * 0.05 + breathingSequence * 0.03;
  radius *= 1.0 - (1.0 - entryAnimation) * 0.25;

  float ring = 10000.0;

  
  if (touch > 0.0) {
    touch = min(touch, listenAnimation); 
    float arcWidth = radius * 0.1;

    
    radius -= touch * arcWidth * 2.3;
    
    radius = min(
      radius,
      mix(radius, args.mainRadius - arcWidth * 2.3 - l1 * 0.01, touch)
    );

    float startAngle = 0.0;
    float arcLengthTouch =
      smoothstep(0.04, 1.0, touch) * pi * (1.0 - arcWidth / 3.0 / radius);

    float arcLength = 0.0;
    float radiusTouch =
      radius * fixedSpring(scaled(0.0, 1.0, args.duration), 1.0) * args.amount +
      l1 * 0.01;

    radiusTouch +=
      arcWidth * 1.3 * mix(-1.0, 1.0, smoothstep(0.0, 0.12, touch));

    float ringRadius = 0.0;
    arcLength = arcLengthTouch;
    ringRadius = radiusTouch;
    startAngle = pi / 2.0 - (args.time - touchDownTimestamp) / 2.0;

    ring = arc(args.st, startAngle, arcLength, ringRadius, arcWidth); 
  }

  float d = length(args.st) - radius;

  d = min(d, ring);

  sdf.distance = mix(sdf.distance, d, args.amount);

  if (fadeBloopWhileListening) {
    
    sdf.color.a = mix(
      sdf.color.a,
      mix(1.0, 1.0 - l1 * 0.6, listenAnimation),
      args.amount
    );
  } else {
    sdf.color.a = 1.0;
  }

  return sdf;
}

ColoredSDF applyThinkState(ColoredSDF sdf, SDFArgs args) {
  float d = 1000.0; 
  int count = 5; 
  float entryAnimation = spring(scaled(0.0, 1.0, args.duration), 1.0);

  float thinkingDotEntryAnimation = spring(
    scaled(0.1, 1.1, args.duration),
    1.0
  );
  float thinkingDotRadius =
    mix(0.2, 0.06, thinkingDotEntryAnimation) * args.amount;

  
  args.st.x -= thinkingDotRadius * 0.5 * thinkingDotEntryAnimation;

  for (int i = 0; i < count; i++) {
    float f = float(float(i) + 0.5) / float(count); 
    float a =
      -f * pi * 2.0 +
      args.time / 3.0 +
      spring(scaled(0.0, 10.0, args.duration), 1.0) * pi / 2.0;
    float ringRadi = args.mainRadius * 0.45 * entryAnimation;

    
    ringRadi -=
      (sin(
        entryAnimation * pi * 4.0 +
          a * pi * 2.0 +
          args.time * 3.0 -
          silkySmooth(args.time / 4.0, 2.0) * pi * 1.0
      ) *
        0.5 +
        0.5) *
      args.mainRadius *
      0.1;

    vec2 pos = vec2(cos(a), sin(a)) * ringRadi;
    float dd = length(args.st - pos) - args.mainRadius * 0.5;

    
    d = opSmoothUnion(
      d,
      dd,
      0.03 * scaled(0.0, 10.0, args.duration) + 0.8 * (1.0 - entryAnimation)
    );

    
    float dotAngle = f * pi * 2.0;
    float dotRingRadius =
      (sin(
        thinkingDotEntryAnimation * pi * 4.0 +
          a * pi * 2.0 +
          args.time * 0.1 * pi * 4.0
      ) *
        0.5 +
        0.5) *
      thinkingDotRadius *
      0.3;
    vec2 dotPos =
      vec2(-args.mainRadius, args.mainRadius) * 0.8 * thinkingDotEntryAnimation;
    vec2 dotOffset =
      vec2(cos(dotAngle + args.time), sin(dotAngle + args.time)) *
      dotRingRadius;
    float dotD = length(args.st - dotPos - dotOffset) - thinkingDotRadius * 0.8;
    d = opSmoothUnion(
      d,
      dotD,
      (1.0 - min(thinkingDotEntryAnimation, args.amount)) * thinkingDotRadius
    );
  }
  sdf.distance = mix(sdf.distance, d, args.amount);
  sdf.color.a = 1.0;
  return sdf;
}

ColoredSDF applySpeakState(
  ColoredSDF sdf,
  SDFArgs args,
  vec4 avgMag,
  float silenceAmount,
  float silenceDuration
) {
  float d = 1000.0;
  int barCount = 4;
  for (int i = 0; i < barCount; i++) {
    float f = float(float(i) + 0.5) / float(barCount); 

    
    float w = 1.0 / float(barCount) * 0.44;
    float h = w;

    
    float wave = sin(f * pi * 0.8 + args.time) * 0.5 + 0.5;
    float entryAnimation = spring(
      scaled(0.1 + wave * 0.4, 1.0 + wave * 0.4, args.duration),
      0.98
    );
    vec2 pos = vec2(f - 0.5, 0.0) * args.mainRadius * 1.9;
    pos.y = 0.25 * (1.0 - entryAnimation);

    
    if (silenceAmount > 0.0) {
      float bounceStagger = f / 5.0;
      float bounceDelay = 0.6;
      float bounceTimer = scaled(
        bounceDelay,
        bounceDelay + 1.0,
        fract((silenceDuration + bounceStagger) / 2.0) * 2.0
      );
      pos.y +=
        bounce(bounceTimer, 6.0) *
        w *
        0.25 *
        silenceAmount *
        pow(entryAnimation, 4.0) *
        pow(args.amount, 4.0); 
    }

    
    h += avgMag[i] * (0.1 + (1.0 - abs(f - 0.5) * 2.0) * 0.1);

    float dd = sdRoundedBox(args.st - pos, vec2(w, h), vec4(w));
    d = opSmoothUnion(d, dd, 0.2 * (1.0 - args.amount));

  }

  sdf.distance = mix(sdf.distance, d, args.amount);
  sdf.color.a = 1.0;
  return sdf;
}

ColoredSDF applyListenAndSpeakState(
  ColoredSDF sdf,
  SDFArgs args,
  float micLevel,
  vec4 avgMag,
  vec4 cumulativeAudio,
  int binCount,
  vec3 bloopColorMain,
  vec3 bloopColorLow,
  vec3 bloopColorMid,
  vec3 bloopColorHigh,
  sampler2D uTextureNoise,
  bool listening,
  bool isAdvancedBloop
) {
  float entryAnimation = fixedSpring(scaled(0.0, 2.0, args.duration), 0.92);

  
  
  float radius =
    (listening ? 0.37 : 0.43) * (1.0 - (1.0 - entryAnimation) * 0.25) +
    micLevel * 0.065;

  
  
  
  float maxDisplacement = 0.01;

  
  float oscillationPeriod = 4.0;
  
  float displacementOffset =
    maxDisplacement * sin(2.0 * pi / oscillationPeriod * args.time);
  
  vec2 adjusted_st = args.st - vec2(0.0, displacementOffset);

  
  if (!isAdvancedBloop) {
    sdf.color = mix(sdf.color, vec4(bloopColorMain, 1.0), args.amount);
    sdf.distance = mix(sdf.distance, length(adjusted_st) - radius, args.amount);
    return sdf;
  }

  
  
  vec4 uAudioAverage = avgMag;
  vec4 uCumulativeAudio = cumulativeAudio;

  
  float scaleFactor = 1.0 / (2.0 * radius);
  vec2 uv = adjusted_st * scaleFactor + 0.5;
  uv.y = 1.0 - uv.y;

  
  float noiseScale = 1.25; 
  float windSpeed = 0.075; 
  float warpPower = 0.19; 
  float waterColorNoiseScale = 18.0; 
  float waterColorNoiseStrength = 0.01; 
  float textureNoiseScale = 1.0; 
  float textureNoiseStrength = 0.08; 
  float verticalOffset = 0.09; 
  float waveSpread = 1.0; 
  float layer1Amplitude = 1.0; 
  float layer1Frequency = 1.0; 
  float layer2Amplitude = 1.0; 
  float layer2Frequency = 1.0; 
  float layer3Amplitude = 1.0; 
  float layer3Frequency = 1.0; 
  float fbmStrength = 1.0; 
  float fbmPowerDamping = 0.55; 
  float overallSoundScale = 1.0; 
  float blurRadius = 1.0;
  float timescale = 1.0;

  
  float time = args.time * timescale * 0.85;

  vec3 sinOffsets = vec3(
    uCumulativeAudio.x * 0.15 * overallSoundScale,
    -uCumulativeAudio.y * 0.5 * overallSoundScale,
    uCumulativeAudio.z * 1.5 * overallSoundScale
  );
  verticalOffset += 1.0 - waveSpread;

  
  float noiseX = cnoise(
    vec3(
      uv * 1.0 + vec2(0.0, 74.8572),
      (time + uCumulativeAudio.x * 0.05 * overallSoundScale) * 0.3
    )
  );
  float noiseY = cnoise(
    vec3(
      uv * 1.0 + vec2(203.91282, 10.0),
      (time + uCumulativeAudio.z * 0.05 * overallSoundScale) * 0.3
    )
  );

  uv += vec2(noiseX * 2.0, noiseY) * warpPower;

  
  float noiseA =
    cnoise(vec3(uv * waterColorNoiseScale + vec2(344.91282, 0.0), time * 0.3)) +
    cnoise(
      vec3(uv * waterColorNoiseScale * 2.2 + vec2(723.937, 0.0), time * 0.4)
    ) *
      0.5;
  uv += noiseA * waterColorNoiseStrength;
  uv.y -= verticalOffset;

  
  vec2 textureUv = uv * textureNoiseScale;
  float textureSampleR0 = texture(uTextureNoise, textureUv).r;
  float textureSampleG0 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp0 =
    mix(
      textureSampleR0 - 0.5,
      textureSampleG0 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  textureUv += vec2(63.861 + uCumulativeAudio.x * 0.05, 368.937);
  float textureSampleR1 = texture(uTextureNoise, textureUv).r;
  float textureSampleG1 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp1 =
    mix(
      textureSampleR1 - 0.5,
      textureSampleG1 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  textureUv += vec2(272.861, 829.937 + uCumulativeAudio.y * 0.1);
  textureUv += vec2(180.302 - uCumulativeAudio.z * 0.1, 819.871);
  float textureSampleR3 = texture(uTextureNoise, textureUv).r;
  float textureSampleG3 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp3 =
    mix(
      textureSampleR3 - 0.5,
      textureSampleG3 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  uv += textureNoiseDisp0;

  
  vec2 st = uv * noiseScale;

  vec2 q = vec2(0.0);
  q.x = fbm(
    st * 0.5 +
      windSpeed * (time + uCumulativeAudio.a * 0.175 * overallSoundScale)
  );
  q.y = fbm(
    st * 0.5 +
      windSpeed * (time + uCumulativeAudio.x * 0.136 * overallSoundScale)
  );

  vec2 r = vec2(0.0);
  r.x = fbm(
    st +
      1.0 * q +
      vec2(0.3, 9.2) +
      0.15 * (time + uCumulativeAudio.y * 0.234 * overallSoundScale)
  );
  r.y = fbm(
    st +
      1.0 * q +
      vec2(8.3, 0.8) +
      0.126 * (time + uCumulativeAudio.z * 0.165 * overallSoundScale)
  );

  float f = fbm(st + r - q);
  float fullFbm = (f + 0.6 * f * f + 0.7 * f + 0.5) * 0.5;
  fullFbm = pow(fullFbm, fbmPowerDamping);
  fullFbm *= fbmStrength;

  
  blurRadius = blurRadius * 1.5;
  vec2 snUv =
    (uv + vec2((fullFbm - 0.5) * 1.2) + vec2(0.0, 0.025) + textureNoiseDisp0) *
    vec2(layer1Frequency, 1.0);
  float sn =
    noise(
      snUv * 2.0 + vec2(sin(sinOffsets.x * 0.25), time * 0.5 + sinOffsets.x)
    ) *
    2.0 *
    layer1Amplitude;
  float sn2 = smoothstep(
    sn - 1.2 * blurRadius,
    sn + 1.2 * blurRadius,
    (snUv.y - 0.5 * waveSpread) *
      (5.0 - uAudioAverage.x * 0.1 * overallSoundScale * 0.5) +
      0.5
  );

  vec2 snUvBis =
    (uv + vec2((fullFbm - 0.5) * 0.85) + vec2(0.0, 0.025) + textureNoiseDisp1) *
    vec2(layer2Frequency, 1.0);
  float snBis =
    noise(
      snUvBis * 4.0 +
        vec2(
          sin(sinOffsets.y * 0.15) * 2.4 + 293.0,
          time * 1.0 + sinOffsets.y * 0.5
        )
    ) *
    2.0 *
    layer2Amplitude;
  float sn2Bis = smoothstep(
    snBis - (0.9 + uAudioAverage.y * 0.4 * overallSoundScale) * blurRadius,
    snBis + (0.9 + uAudioAverage.y * 0.8 * overallSoundScale) * blurRadius,
    (snUvBis.y - 0.6 * waveSpread) * (5.0 - uAudioAverage.y * 0.75) + 0.5
  );

  vec2 snUvThird =
    (uv + vec2((fullFbm - 0.5) * 1.1) + textureNoiseDisp3) *
    vec2(layer3Frequency, 1.0);
  float snThird =
    noise(
      snUvThird * 6.0 +
        vec2(
          sin(sinOffsets.z * 0.1) * 2.4 + 153.0,
          time * 1.2 + sinOffsets.z * 0.8
        )
    ) *
    2.0 *
    layer3Amplitude;
  float sn2Third = smoothstep(
    snThird - 0.7 * blurRadius,
    snThird + 0.7 * blurRadius,
    (snUvThird.y - 0.9 * waveSpread) * 6.0 + 0.5
  );

  sn2 = pow(sn2, 0.8);
  sn2Bis = pow(sn2Bis, 0.9);

  
  vec3 sinColor;
  sinColor = blendLinearBurn_13_5(bloopColorMain, bloopColorLow, 1.0 - sn2);
  sinColor = blendLinearBurn_13_5(
    sinColor,
    mix(bloopColorMain, bloopColorMid, 1.0 - sn2Bis),
    sn2
  );
  sinColor = mix(
    sinColor,
    mix(bloopColorMain, bloopColorHigh, 1.0 - sn2Third),
    sn2 * sn2Bis
  );

  
  sdf.color = mix(sdf.color, vec4(sinColor, 1), args.amount);

  
  sdf.distance = mix(sdf.distance, length(adjusted_st) - radius, args.amount);

  return sdf;
}

float micSdf(vec2 st, float muted) {
  float d = 100.0;
  float strokeWidth = 0.03;
  vec2 elementSize = vec2(0.12, 0.26);
  vec2 elementPos = vec2(0.0, elementSize.y * 0.585);
  float element = sdRoundedBox(
    st - elementPos,
    elementSize,
    vec4(min(elementSize.x, elementSize.y))
  );
  element = element - strokeWidth;
  d = min(d, element);

  vec2 standSize = elementSize * 2.2;
  vec2 standPos = vec2(elementPos.x, elementPos.y - 0.05);
  st.y += 0.08;
  float ta = -pi / 2.0; 
  float tb = pi / 2.0; 
  float w = 0.0;
  float stand = sdArc(
    st - standPos,
    vec2(sin(ta), cos(ta)),
    vec2(sin(tb), cos(tb)),
    standSize.x,
    w
  );
  stand = min(
    stand,
    sdSegment(st - standPos, vec2(standSize.x, 0.06), vec2(standSize.x, 0.0))
  );
  stand = min(
    stand,
    sdSegment(st - standPos, vec2(-standSize.x, 0.06), vec2(-standSize.x, 0.0))
  );

  float foot = sdSegment(
    st - standPos,
    vec2(0.0, -standSize.x),
    vec2(0.0, -standSize.x * 1.66)
  );
  foot = min(
    foot,
    sdSegment(
      st - standPos,
      vec2(-standSize.x * 0.68, -standSize.x * 1.66),
      vec2(standSize.x * 0.68, -standSize.x * 1.66)
    )
  );
  stand = min(stand, foot);

  d = min(d, abs(stand) - strokeWidth);

  return d;
}

ColoredSDF applyBottomAlignedBarsAndMicState(
  ColoredSDF sdf,
  SDFArgs args,
  vec4 avgMag,
  float micLevel,
  bool isDarkMode
) {
  float d = 1000.0;
  int barCount = 5;
  int loopCount = barCount;
  if (args.amount == 0.0) {
    loopCount = 1; 
  }
  for (int i = 0; i < loopCount; i++) {
    float f = float(float(i) + 0.5) / float(barCount); 

    
    float w = 1.0 / float(barCount) * 0.42;
    float h = w;

    
    float entryDuration = 1.8;
    float entryAnimation =
      fixedSpring(scaled(0.0, entryDuration, args.duration), 0.94) *
      args.amount;
    vec2 pos = vec2(f - 0.5, 0.0) * args.mainRadius * 1.9;
    pos.x *= entryAnimation;

    if (i == 0) {
      float micScale = mix(6.0 - micLevel * 2.0, 6.0, args.amount);
      float yOffset = w * 2.0;
      d =
        micSdf(
          (args.st - pos + vec2(-w * 0.15 * args.amount, yOffset)) * micScale,
          1.0 - args.amount
        ) /
        micScale;
    } else {
      
      h += avgMag[i - 1] * (0.1 + (1.0 - abs(f - 0.5) * 2.0) * 0.1) * 0.7;
      h = mix(w, h, smoothstep(0.8, 1.0, entryAnimation));

      float bubbleInDur = 0.5;
      float bubbleOutDur = 0.4;

      
      float bubbleEffect =
        fixedSpring(
          scaled(
            f / 4.0,
            f / 4.0 + bubbleInDur,
            args.duration - entryDuration / 8.0
          ),
          1.0
        ) *
        pow(
          1.0 -
            scaled(
              f / 8.0 + bubbleInDur / 8.0,
              f / 4.0 + bubbleInDur / 8.0 + bubbleOutDur,
              args.duration - entryDuration / 8.0
            ),
          2.0
        );

      h += bubbleEffect * min(h, w);

      
      w *= args.amount;
      h *= args.amount;

      h = min(h, 0.23); 

      pos.y -= 0.25;
      pos.y += h;
      pos.y += bubbleEffect * w * 0.5;

      float dd = sdRoundedBox(args.st - pos, vec2(w, h), vec4(w));
      d = min(d, dd);
    }
  }

  sdf.distance = d; 
  sdf.color = mix(
    sdf.color,
    isDarkMode
      ? vec4(1.0)
      : vec4(0.0, 0.0, 0.0, 1.0),
    args.amount
  );
  return sdf;
}

ColoredSDF applyHaltState(ColoredSDF sdf, SDFArgs args) {
  
  float radius = mix(
    0.4,
    mix(0.4, 0.45, args.amount),
    sin(args.time * 0.25) * 0.5 + 0.5
  );
  float strokeWidth = mix(radius / 2.0, 0.02, args.amount);

  
  radius -= strokeWidth;

  radius *= mix(0.7, 1.0, args.amount);
  float circle = abs(length(args.st) - radius) - strokeWidth;

  sdf.distance = mix(sdf.distance, circle, args.amount);
  sdf.color.a = mix(sdf.color.a, pow(0.8, 2.2), scaled(0.5, 1.0, args.amount));
  return sdf;
}

vec3 blendNormal(vec3 base, vec3 blend) {
  return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
  return blendNormal(base, blend) * opacity + base * (1.0 - opacity);
}

in vec2 out_uv;
out vec4 fragColor;

layout(std140) uniform BlorbUniformsObject {
  float time;
  float micLevel;
  float touchDownTimestamp;
  float touchUpTimestamp;
  float stateListen;
  float listenTimestamp;
  float stateThink;
  float thinkTimestamp;
  float stateSpeak;
  float speakTimestamp;
  float readyTimestamp;
  float stateHalt;
  float haltTimestamp;
  float stateFailedToConnect;
  float failedToConnectTimestamp;
  vec4 avgMag;
  vec4 cumulativeAudio;
  vec2 viewport;
  float screenScaleFactor;
  float silenceAmount;
  float silenceTimestamp;
  bool isDarkMode;
  bool fadeBloopWhileListening;
  bool isNewBloop;
  bool isAdvancedBloop;
  vec3 bloopColorMain;
  vec3 bloopColorLow;
  vec3 bloopColorMid;
  vec3 bloopColorHigh;
} ubo; 

uniform sampler2D uTextureNoise; 

void main() {
  vec2 st = out_uv - 0.5;
  float viewRatio = ubo.viewport.y / ubo.viewport.x;
  st.y *= viewRatio;

  ColoredSDF sdf;
  sdf.distance = 1000.0;
  sdf.color = vec4(1.0);

  SDFArgs args;
  args.st = st;
  args.time = ubo.time;
  args.mainRadius = 0.49;

  SDFArgs idleArgs = args;
  SDFArgs listenArgs = args;
  SDFArgs thinkArgs = args;
  SDFArgs speakArgs = args;
  SDFArgs haltArgs = args;
  SDFArgs failedToConnectArgs = args;

  idleArgs.amount = 1.0;
  listenArgs.amount = ubo.stateListen;
  thinkArgs.amount = ubo.stateThink;
  speakArgs.amount = ubo.stateSpeak;
  haltArgs.amount = ubo.stateHalt;
  failedToConnectArgs.amount = ubo.stateFailedToConnect;

  idleArgs.duration = ubo.time - ubo.readyTimestamp;
  listenArgs.duration = ubo.time - ubo.listenTimestamp;
  thinkArgs.duration = ubo.time - ubo.thinkTimestamp;
  speakArgs.duration = ubo.time - ubo.speakTimestamp;
  haltArgs.duration = ubo.time - ubo.haltTimestamp;
  failedToConnectArgs.duration = ubo.time - ubo.failedToConnectTimestamp;

  if (ubo.isNewBloop) {
    sdf = applyIdleState(sdf, idleArgs, ubo.isDarkMode);
  } else {
    sdf = applyIdleStateLegacy(sdf, idleArgs, ubo.isDarkMode);
  }

  if (failedToConnectArgs.amount > 0.0) {
    sdf = applyHaltState(sdf, failedToConnectArgs);
  }

  if (listenArgs.amount > 0.0) {
    if (ubo.isAdvancedBloop) {
      if (speakArgs.amount > 0.0) {
        listenArgs.amount = 1.0;
      }

      
      int binCount = 1;
      sdf = applyListenAndSpeakState(
        sdf,
        listenArgs,
        ubo.micLevel,
        ubo.avgMag,
        ubo.cumulativeAudio,
        binCount,
        ubo.bloopColorMain,
        ubo.bloopColorLow,
        ubo.bloopColorMid,
        ubo.bloopColorHigh,
        uTextureNoise,
        true,
        ubo.isAdvancedBloop
      );
    } else {
      sdf = applyListenState(
        sdf,
        listenArgs,
        ubo.micLevel,
        ubo.listenTimestamp,
        ubo.touchDownTimestamp,
        ubo.touchUpTimestamp,
        ubo.fadeBloopWhileListening
      );
    }
  }

  if (thinkArgs.amount > 0.0) {
    sdf = applyThinkState(sdf, thinkArgs);
  }

  if (speakArgs.amount > 0.0) {
    if (ubo.isAdvancedBloop) {
      int binCount = 1;
      sdf = applyListenAndSpeakState(
        sdf,
        speakArgs,
        ubo.micLevel,
        ubo.avgMag,
        ubo.cumulativeAudio,
        binCount,
        ubo.bloopColorMain,
        ubo.bloopColorLow,
        ubo.bloopColorMid,
        ubo.bloopColorHigh,
        uTextureNoise,
        false,
        ubo.isAdvancedBloop
      );
    } else {
      float silenceDuration = ubo.time - ubo.silenceTimestamp;
      sdf = applySpeakState(
        sdf,
        speakArgs,
        ubo.avgMag,
        ubo.silenceAmount,
        silenceDuration
      );
    }
  }

  if (haltArgs.amount > 0.0) {
    sdf = applyHaltState(sdf, haltArgs);
  }

  float clampingTolerance = 0.0075 / ubo.screenScaleFactor;
  float clampedShape = smoothstep(clampingTolerance, 0.0, sdf.distance);
  float alpha = sdf.color.a * clampedShape;
  if (!ubo.isNewBloop) {
    alpha *= scaled(0.0, 1.0, ubo.time);
  }
  fragColor = vec4(sdf.color.rgb, alpha);
}`,Ge=`#version 300 es

out vec4 out_position;
out vec2 out_uv;

const vec4 blitFullscreenTrianglePositions[6] = vec4[](
  vec4(-1.0, -1.0, 0.0, 1.0),
  vec4(3.0, -1.0, 0.0, 1.0),
  vec4(-1.0, 3.0, 0.0, 1.0),
  vec4(-1.0, -1.0, 0.0, 1.0),
  vec4(3.0, -1.0, 0.0, 1.0),
  vec4(-1.0, 3.0, 0.0, 1.0)
);

void main() {
  out_position = blitFullscreenTrianglePositions[gl_VertexID];
  out_uv = out_position.xy * 0.5 + 0.5;
  out_uv.y = 1.0 - out_uv.y;
  gl_Position = out_position;
}`;class j{#o;#i;#n;#a=[];#s={};#e;#t;static#r="BlorbUniformsObject";constructor(n,e){this.#n=n;const s=n.getUniformBlockIndex(e,j.#r),o=n.getActiveUniformBlockParameter(e,s,n.UNIFORM_BLOCK_DATA_SIZE);this.#e=n.createBuffer(),n.bindBuffer(n.UNIFORM_BUFFER,this.#e),n.bufferData(n.UNIFORM_BUFFER,o,n.DYNAMIC_DRAW);const c=0;n.bindBufferBase(n.UNIFORM_BUFFER,c,this.#e),n.uniformBlockBinding(e,s,c);const r=n.getActiveUniformBlockParameter(e,s,n.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES);this.#a=[],this.#s={};for(let f=0;f<r.length;f++){const g=r[f],v=n.getActiveUniform(e,g);if(!v)throw new Error("No uniformInfo for index "+g);let m=v.name;m=m.replace(/\[0\]$/,"");const p=n.getActiveUniforms(e,[g],n.UNIFORM_OFFSET)[0];this.#a.push(m),this.#s[m]=p}this.#t=new ArrayBuffer(o),this.#o=new Float32Array(this.#t),this.#i=new Int32Array(this.#t)}setVariablesAndRender(n){for(const e of this.#a){const[,s]=e.split("."),c=this.#s[e]/4,r=n[s];typeof r=="number"?this.#o[c]=r:typeof r=="boolean"?this.#i[c]=r?1:0:Array.isArray(r)&&this.#o.set(r,c)}this.#n.bindBuffer(this.#n.UNIFORM_BUFFER,this.#e),this.#n.bufferSubData(this.#n.UNIFORM_BUFFER,0,this.#t),this.#n.drawArrays(this.#n.TRIANGLE_STRIP,0,6)}}function A(t){const n=t.replace("#",""),e=parseInt(n.substring(0,2),16)/255,s=parseInt(n.substring(2,4),16)/255,o=parseInt(n.substring(4,6),16)/255;return new Float32Array([e,s,o])}const L={BLUE:{bloopColorMain:A("#DCF7FF"),bloopColorLow:A("#0181FE"),bloopColorMid:A("#A4EFFF"),bloopColorHigh:A("#FFFDEF")},DARK_BLUE:{bloopColorMain:A("#DAF5FF"),bloopColorLow:A("#0066CC"),bloopColorMid:A("#2EC6F5"),bloopColorHigh:A("#72EAF5")},GREYSCALE:{bloopColorMain:A("#D7D7D7"),bloopColorLow:A("#303030"),bloopColorMid:A("#989898"),bloopColorHigh:A("#FFFFFF")},WHITE:{bloopColorMain:A("#FFFFFF"),bloopColorLow:A("#FFFFFF"),bloopColorMid:A("#FFFFFF"),bloopColorHigh:A("#FFFFFF")},BLACK:{bloopColorMain:A("#000000"),bloopColorLow:A("#000000"),bloopColorMid:A("#000000"),bloopColorHigh:A("#000000")}},He=t=>{const{resolvedTheme:n}=un();return t?L.BLUE:n==="dark"?L.WHITE:L.BLACK},ln=[300,300],Xe={bands:4,loPass:0,hiPass:400},$e=t=>{const n=e=>{let c=1-Math.max(-100,Math.min(-10,e))*-1/100;return c=Math.sqrt(c),c};return t.map(e=>e===-1/0?0:n(e))};function hn(t,n){const[e,s]=l.useState([]),o=l.useRef(void 0);return l.useEffect(()=>{if(!t)return;if(!o.current){const p=new AudioContext,d=p.createMediaElementSource(t),i=p.createAnalyser();d.connect(i),i.connect(p.destination),o.current={audioContext:p,mediaElementAudioSourceNode:d,analyserNode:i}}const{analyserNode:c,audioContext:r}=o.current,f=c?.frequencyBinCount??0,g=new Float32Array(f),m=setInterval(()=>{if(!c)return;c.getFloatFrequencyData(g);let p=g.slice(n.loPass,n.hiPass);const d=$e(p),i=Math.ceil(d.length/n.bands),a=[];for(let b=0;b<n.bands;b++){const y=d.slice(b*i,(b+1)*i).reduce((T,h)=>T+h,0);a.push(y/i)}s(a)},n.updateInterval);return()=>{clearInterval(m),r&&r.close()}},[t,n.bands,n.hiPass,n.loPass,n.updateInterval]),e}const Ke=t=>{const n=hn(t,{bands:B,updateInterval:O,loPass:0,hiPass:400,analyserOptions:{fftSize:fn}});return n.length===0?mn:n},Ye=(t,n)=>{const e=Ke(t),s=gn(e,{sampleRate:vn,binCount:n.bins,bandCount:n.bands,gainMultipliers:n.gainMultipliers}),o=V({magnitudes:e,binCount:1,gainMultiplier:1});return{bandMagnitudes:s,cumulativeMagnitude:o}},Ze=t=>{const[n,e]=l.useState({audioData:[0,0,0,0],cumulativeAudioData:[0,0,0,0]}),s=l.useRef([0,0,0,0]),o=l.useRef(void 0),c=l.useRef(performance.now()),{bandMagnitudes:r,cumulativeMagnitude:f}=Ye(t,{bands:3,bins:1,gainMultipliers:[10,1,1]});s.current=[...r,f].flat();const g=l.useCallback(()=>{const v=performance.now(),m=(v-c.current)/1e3;c.current=v;const p=s.current,{audioData:d,cumulativeAudioData:i}=n,a=Re({deltaTimeS:m,audioDataRaw:p,prevAudioData:d,prevCumulativeAudioData:i});e(a)},[n]);return l.useEffect(()=>(o.current||(o.current=window.setInterval(g,O)),()=>{clearInterval(o.current),o.current=void 0}),[g]),n};function bn({url:t,readyToPlay:n}){const e=l.useRef(void 0);return l.useEffect(()=>(e.current||(e.current=document.createElement("audio")),()=>{e.current?.remove()}),[]),l.useEffect(()=>{t&&e.current&&e.current.src!==t&&n&&(e.current.crossOrigin="anonymous",e.current.src=t,e.current.play())},[n,t]),e.current}function Je({className:t,url:n}){const[e,s]=l.useState(!1),o=bn({url:n,readyToPlay:e}),c=hn(o,Xe),r=l.useMemo(()=>[0,0,0,0],[]);return u.jsx(xn,{className:t,isAdvanced:!1,avgMag:c,cumulativeAudioData:r,onRenderComplete:()=>s(!0)})}function Qe({className:t,url:n}){const[e,s]=l.useState(!1),o=bn({url:n,readyToPlay:e}),c=Ze(o),{audioData:r,cumulativeAudioData:f}=c;return u.jsx(xn,{className:t,isAdvanced:!0,avgMag:r,cumulativeAudioData:f,onRenderComplete:()=>s(!0)})}const xn=({className:t,avgMag:n,cumulativeAudioData:e,isAdvanced:s,onRenderComplete:o})=>{const{resolvedTheme:c}=un(),r=c==="dark",f=l.useMemo(()=>performance.now()/1e3,[]),g=l.useMemo(()=>performance.now()/1e3,[]),[v,m]=l.useState(ln),{canvasSizeRef:p,handleCanvasSizeUpdate:d}=Qn(ln),i=l.useCallback(x=>{m([x.width,x.height])},[]),[a,b]=l.useState(performance.now()/1e3);l.useEffect(()=>{const x=setInterval(()=>{b(performance.now()/1e3)},50);return()=>clearInterval(x)},[]);const y=He(s),T=ee({viewport:v,canvasSize:p.current,shouldMeasurePerf:!0,source:"VoicePicker"}),h=ae({shouldCalibrate:!0,viewport:v,initialScale:1}),S={time:a,micLevel:0,stateListen:0,listenTimestamp:0,stateThink:0,thinkTimestamp:0,stateSpeak:1,speakTimestamp:g,readyTimestamp:f,stateHalt:0,haltTimestamp:0,touchDownTimestamp:0,touchUpTimestamp:0,stateFailedToConnect:0,failedToConnectTimestamp:0,avgMag:n,cumulativeAudio:e,isNewBloop:!0,isAdvancedBloop:s,bloopColorMain:Array.from(y.bloopColorMain),bloopColorLow:Array.from(y.bloopColorLow),bloopColorMid:Array.from(y.bloopColorMid),bloopColorHigh:Array.from(y.bloopColorHigh),isDarkMode:r,screenScaleFactor:window.devicePixelRatio,viewport:v,silenceAmount:0,silenceTimestamp:0,fadeBloopWhileListening:!1};return u.jsx(ke,{className:En("flex items-center justify-center",t),vert:Ge,frag:We,GLUniformsSetter:j,variables:S,onViewportUpdate:i,onRenderComplete:o,textureImage:pn,textureName:"uTextureNoise",onGlAvailable:T,onCanvasSizeUpdate:d,scale:h})},nt={offscreenLeft:{x:"-24rem",opacity:0},left:{x:"-12rem",opacity:.5},center:{x:"0",opacity:1},right:{x:"12rem",opacity:.5},offscreenRight:{x:"24rem",opacity:0}};function lt({conversationId:t,onClose:n,cameFromNux:e=!1}){const{voiceName:s}=qn(),o=Wn(),[c,r]=l.useState(!1),f=nn.getGizmoId(t),[g,v]=l.useState(!1),[m,p]=l.useState(!1);l.useEffect(()=>{requestAnimationFrame(()=>v(!0))},[]);const[d,i]=l.useState(!1),[a,b]=l.useState(null);l.useEffect(()=>{if(o.length>0){const w=o.findIndex(J=>J.voice===s);w>=0?b(w):b(2),i(!0)}},[o,s]);const y=a!=null?(a-2+o.length)%o.length:0,T=a!=null?(a-1+o.length)%o.length:1,h=a!=null?(a+1)%o.length:3,S=a!=null?(a+2)%o.length:4,x=o[a??0],C=o[y],D=o[T],q=o[h],W=o[S],M=w=>{b(w)},{stopVoiceMode:G,startVoiceMode:H}=Yn(e),E=Gn(t),{setValue:X}=On(Pn.VoiceName),Sn=Zn(w=>w.voiceMode),P=e&&!f?"advanced":Sn,An=l.useCallback(async()=>{p(!e),setTimeout(async()=>{r(!0);const w=a!=null?o[a]?.voice:o[0]?.voice;if(e||w!==s){e||N.voiceSelected.click({action:"changed",voice:w}),X(w),await G(),Hn(`/?model=${E??en}`);try{await H({conversation_id:void 0,model_slug:E??en,eventSource:"voice_picker",voice_mode:P,voice:w,clientThreadId:In(),gizmo_id:nn.getGizmoId(t)})}catch(Cn){zn.addError(`Failed to start voice mode after voice picker: ${Cn}`)}}else N.voiceSelected.click({action:"kept",voice:s});r(!1),n()},tn)},[e,t,s,E,n,a,X,H,G,P,o]),yn=()=>{p(!0),setTimeout(n,tn)};Xn({setSelectedVoiceIndex:b,prevVoiceIndex:T,nextVoiceIndex:h});const[$,K]=l.useState(!1),Y=w=>{w==="prev"?M(T):w==="next"&&M(h),K(!0),setTimeout(()=>{K(!1)},175)},Z=l.useMemo(()=>({className:"h-max min-h-52 w-max min-w-52",url:x?.preview_url}),[x?.preview_url]);return!d||a==null?u.jsx("div",{className:"fixed left-0 top-0 z-50 flex h-full w-full bg-token-main-surface-primary"}):u.jsxs("div",{className:`fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-token-main-surface-primary transition-opacity duration-300 ${g&&!m?"opacity-100":"opacity-0"}`,children:[u.jsx("h1",{className:"mb-8 mt-36 text-3xl font-semibold",children:u.jsx(k,{id:"2whyE9",defaultMessage:"Choose a voice"})}),u.jsx("div",{className:"flex h-full w-full items-center justify-center",children:x?e&&!f||P==="advanced"?u.jsx(Qe,{...Z}):u.jsx(Je,{...Z}):null}),u.jsx("div",{className:"mb-8 flex items-center justify-between text-center",children:u.jsxs("div",{className:"relative flex h-24 w-48",children:[u.jsx(F,{voice:C,variant:"offscreenLeft"},C?.name),u.jsx(F,{voice:D,variant:"left",onClick:()=>M(T)},D?.name),u.jsx(cn,{direction:"prev",onClick:()=>Y("prev"),isFading:$}),u.jsx(F,{voice:x,variant:"center"},x?.name),u.jsx(cn,{direction:"next",onClick:()=>Y("next"),isFading:$}),u.jsx(F,{voice:q,variant:"right",onClick:()=>M(h)},q?.name),u.jsx(F,{voice:W,variant:"offscreenRight"},W?.name),u.jsx("div",{className:"pointer-events-none absolute h-full w-full -translate-x-52 transform bg-gradient-to-r from-[var(--main-surface-background)] to-transparent"}),u.jsx("div",{className:"pointer-events-none absolute h-full w-full translate-x-52 transform bg-gradient-to-l from-[var(--main-surface-background)] to-transparent"}),u.jsx("div",{className:"pointer-events-none absolute h-full w-full -translate-x-96 transform bg-token-main-surface-primary"}),u.jsx("div",{className:"pointer-events-none absolute h-full w-full translate-x-96 transform bg-token-main-surface-primary"})]})}),u.jsxs("div",{className:"mb-36 flex flex-col space-y-3",children:[u.jsx(Q,{className:"w-52 whitespace-nowrap rounded-full px-20 py-3 font-semibold text-white",onClick:An,children:c?u.jsx(Ln,{}):x?.voice===s&&!e?u.jsx(k,{id:"MyKAgb",defaultMessage:"Done"}):u.jsx(k,{id:"7+3LaJ",defaultMessage:"Start new chat"})}),u.jsx(Q,{className:"w-52 rounded-full px-20 py-3 font-semibold text-black dark:text-white",color:"ghost",onClick:yn,children:u.jsx(k,{id:"dUn4Wd",defaultMessage:"Cancel"})})]})]})}function F({voice:t,variant:n,onClick:e}){return u.jsxs(Jn.button,{onClick:e,className:"absolute flex w-48 select-none flex-col items-center justify-center",variants:nt,animate:n,initial:n,transition:{duration:.25,ease:"easeInOut"},children:[u.jsx("p",{className:`text-lg ${n==="center"?"font-semibold":""}`,children:t?.name}),u.jsx("p",{className:"text-sm text-gray-600 dark:text-[var(--text-secondary)]",children:t?.description})]})}function cn({direction:t,onClick:n,isFading:e}){const s=t==="prev"?Un:Bn,o=Nn(),c=t==="prev"?o.formatMessage({id:"ajuz05",defaultMessage:"Previous voice"}):o.formatMessage({id:"Dr8wrw",defaultMessage:"Next voice"});return u.jsx("button",{className:`duration-175 absolute ${t==="prev"?"-left-4":"-right-4"} top-2 z-50 transition-opacity ${e?"opacity-20":"opacity-100"}`,onClick:n,"aria-label":c,children:u.jsx(s,{className:"h-6 w-6 text-token-text-quaternary hover:text-token-text-secondary"})})}export{j as B,ke as G,tn as T,O as U,lt as V,Qn as a,He as b,ee as c,ae as d,We as e,pn as n,Re as s,rt as u,Ge as v};
//# sourceMappingURL=jay4uv541nttjnhd.js.map
