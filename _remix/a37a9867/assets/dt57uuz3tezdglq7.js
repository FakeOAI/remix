import{F as yn,cZ as Sn,ft as An,fu as Cn,cx as wn,c$ as Tn,g as Dn,r,c5 as L,y as l,az as rn,a4 as Rn,a0 as Fn,bD as Mn,dI as kn,D as _n,ae as M,aA as Q,aw as En}from"./mmal6p4kl22zfrfg.js";import{G as Pn,D as zn}from"./esia9ah6q4vsupvt.js";import{u as In}from"./bsb95162x99e4fe7.js";import{E as Ln,w as nn}from"./meoz9lbdxu4dt41d.js";import{k as Nn,l as Un,m as Bn,a as On}from"./l951i3tqtzl7uap8.js";import{iK as jn,d as Vn,iL as qn,c$ as Wn,bn as Gn}from"./i8crxwujeo3n60om.js";import{c as en}from"./a44b3m5ml1mx5nn4.js";import{b as Hn}from"./o6w9okc5vn9scj4w.js";import{m as $n}from"./pbffjd4sant9qggz.js";const tn=300;var Xn=yn,Kn=Sn;function Yn(o){return Kn(o)&&Xn(o)}var Zn=Yn,Jn=An,Qn=wn,ne=Tn,ee=Cn,te=Zn,oe=Math.max;function ae(o){if(!(o&&o.length))return[];var n=0;return o=Jn(o,function(t){if(te(t))return n=oe(t.length,n),!0}),ee(n,function(t){return Qn(o,ne(t))})}var se=ae,ie=jn,re=se,le=ie(re),ce=le;const P=Dn(ce),N=240,ln=2048,ue=60,U=Math.floor(1e3/ue),cn=new Array(N).fill(0),de=o=>{const n=Nn(o,{bands:N,updateInterval:U,loPass:0,hiPass:400,analyserOptions:{fftSize:ln}});return n.length===0?cn:n},B=o=>{const{magnitudes:n,binCount:t,gainMultiplier:s}=o;if(n.length===0)return new Array(t).fill(0);const a=Math.ceil(n.length/t),i=[];for(let c=0;c<n.length;c+=a){const v=Math.min(c+a,n.length),g=n.slice(c,v).sort((u,h)=>u-h),m=Math.floor(g.length/2);let p;g.length%2===0?p=(g[m-1]+g[m])/2:p=g[m],p=Math.abs(p),p*=s;const e=p/(p+1);i.push(e)}return i},un=(o,n)=>{const t=n.sampleRate,s=o.length,a=n.bandCount,i=n.binCount,c=n.gainMultipliers;if(c.length!==a)throw new Error("gainMultipliers must have length equal to bandCount");const v=s*2,g=t/v,m=o.map((b,d)=>d*g),p=20,e=t/2,u=new Array(a+1).fill(0).map((b,d)=>p*Math.pow(e/p,d/a)),h=new Array(a).fill(null).map(()=>[]);for(let b=0;b<m.length;b+=1)for(let d=0;d<a;d+=1)if(m[b]>=u[d]&&m[b]<u[d+1]){h[d].push(o[b]);break}for(let b=0;b<a;b+=1){const d=h[b],f=c[b];h[b]=B({magnitudes:d,binCount:i,gainMultiplier:f})}return h},on=60,dn=48e3,fe=1,me=2,ge=40,ve=2;function an({time:o,timeConstant:n}){return 1-Math.exp(-o/n)}function sn(o,n){const t=n[1]-n[0];return n[0]+o*t}const z=o=>{if(!Array.isArray(o)||o.length!==2||typeof o[0]!="number"||typeof o[1]!="number")throw new Error("zip failed - received a value that is not a [number, number] tuple")},pe=o=>{const{prevAudioData:n,prevCumulativeAudioData:t,deltaTimeS:s,audioDataRaw:a}=o,i=a.map(u=>u*s*on*fe),c=an({time:s,timeConstant:me}),v=P(n,i).map(u=>(z(u),sn(c,u))),g=a.map(u=>u*s*on*ge),m=P(t,g).map(u=>(z(u),u[0]+u[1])),p=an({time:s,timeConstant:ve}),e=P(t,m).map(u=>(z(u),sn(p,u)));return{audioData:v,cumulativeAudioData:e}},nt=(o,n)=>{const t=de(o),s=un(t,{sampleRate:dn,binCount:n.bins,bandCount:n.bands,gainMultipliers:n.gainMultipliers}),a=B({magnitudes:t,binCount:1,gainMultiplier:1});return{bandMagnitudes:s,cumulativeMagnitude:a}};function be(o){const n=r.useRef(o);n.current=o;const[t,s]=r.useState(null),a=r.useCallback(i=>{s(i)},[]);return L(()=>{const i=new ResizeObserver(c=>{for(const v of c)n.current(v)});return t&&i.observe(t),()=>{i.disconnect()}},[t]),a}const T=Un.createChild("GLCanvas");function he({className:o,vert:n,frag:t,Behaviors:s,onViewportUpdate:a,onRenderComplete:i,onGlAvailable:c}){const v=r.useRef(null),g=r.useRef(null),[m,p]=r.useState(null),[e,u]=r.useState(),h=r.useRef(Vn(f=>{const{width:x,height:S}=f.contentRect,A=Math.floor(Math.min(x??0,S??0));p(A),a?.({width:A,height:A})},100)),b=be(h.current);if(L(()=>{const f=v.current,{width:x,height:S}=f??{};if(f&&m!=null&&x&&S){const A=f.getContext("webgl2",{premultipliedAlpha:!1});A?u(A):T.error("webgl2 context not supported")}},[m]),L(()=>{if(!e)return;const f=e.createProgram(),x=e.createShader(e.VERTEX_SHADER),S=e.createShader(e.FRAGMENT_SHADER);if(!f){T.debug("failed to create program");return}if(!x||!S){T.debug("failed to create shaders",x,S);return}let A="";if(e.shaderSource(x,n),e.compileShader(x),A+=`vertShader:
${e.getShaderInfoLog(x)}
`,e.attachShader(f,x),e.shaderSource(S,t),e.compileShader(S),A+=`fragShader:
${e.getShaderInfoLog(S)}
`,e.attachShader(f,S),e.linkProgram(f),e.useProgram(f),A+=e.getProgramInfoLog(f),!e.getProgramParameter(f,e.LINK_STATUS))throw`Could not compile WebGL program. 

${A}`;g.current=f,T.debug("program created"),c?.(e,f);const R=e.fenceSync(e.SYNC_GPU_COMMANDS_COMPLETE,0);return R&&(e.waitSync(R,0,e.TIMEOUT_IGNORED),i?.()),()=>{T.debug("cleaning up"),g.current=null,e.detachShader(f,x),e.detachShader(f,S),e.deleteShader(x),e.deleteShader(S),e.deleteProgram(f)}},[e,t,n]),m!=null&&e&&v.current){const f=v.current,x=m*window.devicePixelRatio;f.width=x,f.height=x,e.viewport(0,0,x,x)}const d=g.current;return l.jsxs("div",{className:o,ref:b,children:[l.jsx("canvas",{ref:v,style:{width:m??void 0,height:m??void 0}},m),e&&d&&s&&l.jsx(s,{ctx:e,program:d})]})}function xe({GLUniformsSetter:o,textureImage:n,textureName:t,variables:s,className:a,vert:i,frag:c,onViewportUpdate:v,onRenderComplete:g}){const m=r.useRef(void 0),p=r.useCallback(async(e,u)=>{if(m.current=new o(e,u),n&&t){const h=e.createTexture();e.bindTexture(e.TEXTURE_2D,h),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n);const b=e.getUniformLocation(u,t);e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,h),e.uniform1i(b,0)}},[o,n,t]);return r.useEffect(()=>{m.current&&m.current.setVariablesAndRender(s)},[s]),l.jsx(he,{className:a,vert:i,frag:c,onViewportUpdate:v,onRenderComplete:g,onGlAvailable:p,Behaviors:()=>null})}const ye="webp",Se=512,Ae=512,Ce="srgb",we=3,Te="uchar",De=72,Re=!1,Fe=8,Me=!1,ke=!1,_e="https://cdn.oaistatic.com/assets/noise-watercolor-m3j88gni.webp",Ee={format:ye,width:Se,height:Ae,space:Ce,channels:we,depth:Te,density:De,isProgressive:Re,paletteBitDepth:Fe,hasProfile:Me,hasAlpha:ke,src:_e};let fn;const k=new window.Image;k.crossOrigin="anonymous";k.src=Ee.src;k.onload=()=>{fn=k};var Pe=`#version 300 es
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
}`,ze=`#version 300 es

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
}`;class O{#o;#i;#n;#a=[];#s={};#e;#t;static#r="BlorbUniformsObject";constructor(n,t){this.#n=n;const s=n.getUniformBlockIndex(t,O.#r),a=n.getActiveUniformBlockParameter(t,s,n.UNIFORM_BLOCK_DATA_SIZE);this.#e=n.createBuffer(),n.bindBuffer(n.UNIFORM_BUFFER,this.#e),n.bufferData(n.UNIFORM_BUFFER,a,n.DYNAMIC_DRAW);const i=0;n.bindBufferBase(n.UNIFORM_BUFFER,i,this.#e),n.uniformBlockBinding(t,s,i);const c=n.getActiveUniformBlockParameter(t,s,n.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES);this.#a=[],this.#s={};for(let v=0;v<c.length;v++){const g=c[v],m=n.getActiveUniform(t,g);if(!m)throw new Error("No uniformInfo for index "+g);let p=m.name;p=p.replace(/\[0\]$/,"");const e=n.getActiveUniforms(t,[g],n.UNIFORM_OFFSET)[0];this.#a.push(p),this.#s[p]=e}this.#t=new ArrayBuffer(a),this.#o=new Float32Array(this.#t),this.#i=new Int32Array(this.#t)}setVariablesAndRender(n){for(const t of this.#a){const[,s]=t.split("."),i=this.#s[t]/4,c=n[s];typeof c=="number"?this.#o[i]=c:typeof c=="boolean"?this.#i[i]=c?1:0:Array.isArray(c)&&this.#o.set(c,i)}this.#n.bindBuffer(this.#n.UNIFORM_BUFFER,this.#e),this.#n.bufferSubData(this.#n.UNIFORM_BUFFER,0,this.#t),this.#n.drawArrays(this.#n.TRIANGLE_STRIP,0,6)}}function y(o){const n=o.replace("#",""),t=parseInt(n.substring(0,2),16)/255,s=parseInt(n.substring(2,4),16)/255,a=parseInt(n.substring(4,6),16)/255;return new Float32Array([t,s,a])}const I={BLUE:{bloopColorMain:y("#DCF7FF"),bloopColorLow:y("#0181FE"),bloopColorMid:y("#A4EFFF"),bloopColorHigh:y("#FFFDEF")},DARK_BLUE:{bloopColorMain:y("#DAF5FF"),bloopColorLow:y("#0066CC"),bloopColorMid:y("#2EC6F5"),bloopColorHigh:y("#72EAF5")},GREYSCALE:{bloopColorMain:y("#D7D7D7"),bloopColorLow:y("#303030"),bloopColorMid:y("#989898"),bloopColorHigh:y("#FFFFFF")},WHITE:{bloopColorMain:y("#FFFFFF"),bloopColorLow:y("#FFFFFF"),bloopColorMid:y("#FFFFFF"),bloopColorHigh:y("#FFFFFF")},BLACK:{bloopColorMain:y("#000000"),bloopColorLow:y("#000000"),bloopColorMid:y("#000000"),bloopColorHigh:y("#000000")}},Ie=o=>{const{resolvedTheme:n}=rn();return o?I.BLUE:n==="dark"?I.WHITE:I.BLACK},Le=[300,300],Ne={bands:4,loPass:0,hiPass:400},Ue=o=>{const n=t=>{let i=1-Math.max(-100,Math.min(-10,t))*-1/100;return i=Math.sqrt(i),i};return o.map(t=>t===-1/0?0:n(t))};function mn(o,n){const[t,s]=r.useState([]),a=r.useRef(void 0);return r.useEffect(()=>{if(!o)return;if(!a.current){const e=new AudioContext,u=e.createMediaElementSource(o),h=e.createAnalyser();u.connect(h),h.connect(e.destination),a.current={audioContext:e,mediaElementAudioSourceNode:u,analyserNode:h}}const{analyserNode:i,audioContext:c}=a.current,v=i?.frequencyBinCount??0,g=new Float32Array(v),p=setInterval(()=>{if(!i)return;i.getFloatFrequencyData(g);let e=g.slice(n.loPass,n.hiPass);const u=Ue(e),h=Math.ceil(u.length/n.bands),b=[];for(let d=0;d<n.bands;d++){const f=u.slice(d*h,(d+1)*h).reduce((x,S)=>x+S,0);b.push(f/h)}s(b)},n.updateInterval);return()=>{clearInterval(p),c&&c.close()}},[o,n.bands,n.hiPass,n.loPass,n.updateInterval]),t}const Be=o=>{const n=mn(o,{bands:N,updateInterval:U,loPass:0,hiPass:400,analyserOptions:{fftSize:ln}});return n.length===0?cn:n},Oe=(o,n)=>{const t=Be(o),s=un(t,{sampleRate:dn,binCount:n.bins,bandCount:n.bands,gainMultipliers:n.gainMultipliers}),a=B({magnitudes:t,binCount:1,gainMultiplier:1});return{bandMagnitudes:s,cumulativeMagnitude:a}},je=o=>{const[n,t]=r.useState({audioData:[0,0,0,0],cumulativeAudioData:[0,0,0,0]}),s=r.useRef([0,0,0,0]),a=r.useRef(void 0),i=r.useRef(performance.now()),{bandMagnitudes:c,cumulativeMagnitude:v}=Oe(o,{bands:3,bins:1,gainMultipliers:[10,1,1]});s.current=[...c,v].flat();const g=r.useCallback(()=>{const m=performance.now(),p=(m-i.current)/1e3;i.current=m;const e=s.current,{audioData:u,cumulativeAudioData:h}=n,b=pe({deltaTimeS:p,audioDataRaw:e,prevAudioData:u,prevCumulativeAudioData:h});t(b)},[n]);return r.useEffect(()=>(a.current||(a.current=window.setInterval(g,U)),()=>{clearInterval(a.current),a.current=void 0}),[g]),n};function gn({url:o,readyToPlay:n}){const t=r.useRef(void 0);return r.useEffect(()=>(t.current||(t.current=document.createElement("audio")),()=>{t.current?.remove()}),[]),r.useEffect(()=>{o&&t.current&&t.current.src!==o&&n&&(t.current.crossOrigin="anonymous",t.current.src=o,t.current.play())},[n,o]),t.current}function Ve({className:o,url:n}){const[t,s]=r.useState(!1),a=gn({url:n,readyToPlay:t}),i=mn(a,Ne),c=r.useMemo(()=>[0,0,0,0],[]);return l.jsx(vn,{className:o,isAdvanced:!1,avgMag:i,cumulativeAudioData:c,onRenderComplete:()=>s(!0)})}function qe({className:o,url:n}){const[t,s]=r.useState(!1),a=gn({url:n,readyToPlay:t}),i=je(a),{audioData:c,cumulativeAudioData:v}=i;return l.jsx(vn,{className:o,isAdvanced:!0,avgMag:c,cumulativeAudioData:v,onRenderComplete:()=>s(!0)})}const vn=({className:o,avgMag:n,cumulativeAudioData:t,isAdvanced:s,onRenderComplete:a})=>{const{resolvedTheme:i}=rn(),c=i==="dark",v=r.useMemo(()=>performance.now()/1e3,[]),g=r.useMemo(()=>performance.now()/1e3,[]),[m,p]=r.useState(Le),e=r.useCallback(f=>{p([f.width,f.height])},[]),[u,h]=r.useState(performance.now()/1e3);r.useEffect(()=>{const f=setInterval(()=>{h(performance.now()/1e3)},50);return()=>clearInterval(f)},[]);const b=Ie(s),d={time:u,micLevel:0,stateListen:0,listenTimestamp:0,stateThink:0,thinkTimestamp:0,stateSpeak:1,speakTimestamp:g,readyTimestamp:v,stateHalt:0,haltTimestamp:0,touchDownTimestamp:0,touchUpTimestamp:0,stateFailedToConnect:0,failedToConnectTimestamp:0,avgMag:n,cumulativeAudio:t,isNewBloop:!0,isAdvancedBloop:s,bloopColorMain:Array.from(b.bloopColorMain),bloopColorLow:Array.from(b.bloopColorLow),bloopColorMid:Array.from(b.bloopColorMid),bloopColorHigh:Array.from(b.bloopColorHigh),isDarkMode:c,screenScaleFactor:window.devicePixelRatio,viewport:m,silenceAmount:0,silenceTimestamp:0,fadeBloopWhileListening:!1};return l.jsx(xe,{className:Rn("flex items-center justify-center",o),vert:ze,frag:Pe,GLUniformsSetter:O,variables:d,onViewportUpdate:e,onRenderComplete:a,textureImage:fn,textureName:"uTextureNoise"})},We={offscreenLeft:{x:"-24rem",opacity:0},left:{x:"-12rem",opacity:.5},center:{x:"0",opacity:1},right:{x:"12rem",opacity:.5},offscreenRight:{x:"24rem",opacity:0}};function et({conversationId:o,onClose:n,cameFromNux:t=!1}){const{voiceName:s}=qn(),a=Wn(),i=Fn(),[c,v]=r.useState(!1),g=en.getGizmoId(o),[m,p]=r.useState(!1),[e,u]=r.useState(!1);r.useEffect(()=>{requestAnimationFrame(()=>p(!0))},[]);const[h,b]=r.useState(!1),[d,f]=r.useState(null);r.useEffect(()=>{if(a.length>0){const C=a.findIndex(J=>J.voice===s);C>=0?f(C):f(2),b(!0)}},[a,s]);const x=d!=null?(d-2+a.length)%a.length:0,S=d!=null?(d-1+a.length)%a.length:1,A=d!=null?(d+1)%a.length:3,R=d!=null?(d+2)%a.length:4,w=a[d??0],j=a[x],V=a[S],q=a[A],W=a[R],F=C=>{f(C)},{stopVoiceMode:G,startVoiceMode:H}=Bn(t),_=Ln(o),{setValue:$}=In(Mn.VoiceName),pn=On(C=>C.voiceMode),E=t&&!g?"advanced":pn,bn=r.useCallback(async()=>{u(!t),setTimeout(async()=>{v(!0);const C=d!=null?a[d]?.voice:a[0]?.voice;if(t||C!==s){$(C),await G(),Gn(`/?model=${_??nn}`);try{await H({conversation_id:void 0,model_slug:_??nn,eventSource:"voice_picker",voice_mode:E,voice:C,clientThreadId:kn(),gizmo_id:en.getGizmoId(o)})}catch(xn){_n.addError(`Failed to start voice mode after voice picker: ${xn}`)}}v(!1),n()},tn)},[t,o,s,_,n,d,$,H,G,E,a]),hn=()=>{u(!0),setTimeout(n,tn)};Hn({setSelectedVoiceIndex:f,prevVoiceIndex:S,nextVoiceIndex:A});const[X,K]=r.useState(!1),Y=C=>{C==="prev"?F(S):C==="next"&&F(A),K(!0),setTimeout(()=>{K(!1)},175)},Z=r.useMemo(()=>({className:"h-max min-h-52 w-max min-w-52",url:w?.preview_url}),[w?.preview_url]);return!h||d==null?l.jsx("div",{className:"fixed left-0 top-0 z-50 flex h-full w-full bg-token-main-surface-primary"}):l.jsxs("div",{className:`fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-token-main-surface-primary transition-opacity duration-300 ${m&&!e?"opacity-100":"opacity-0"}`,children:[l.jsx("h1",{className:"mb-8 mt-36 text-3xl font-semibold",children:l.jsx(M,{id:"2whyE9",defaultMessage:"Choose a voice"})}),l.jsx("div",{className:"flex h-full w-full items-center justify-center",children:w?t&&!g||E==="advanced"?l.jsx(qe,{...Z}):l.jsx(Ve,{...Z}):null}),l.jsx("div",{className:"mb-8 flex items-center justify-between text-center",children:l.jsxs("div",{className:"relative flex h-24 w-48",children:[l.jsx(D,{voice:j,variant:"offscreenLeft"},j?.name),l.jsx(D,{voice:V,variant:"left",onClick:()=>F(S)},V?.name),l.jsx("button",{className:`duration-175 absolute -left-4 top-2 z-50 transition-opacity ${X?"opacity-20":"opacity-100"}`,onClick:()=>Y("prev"),"aria-label":i.formatMessage({id:"ajuz05",defaultMessage:"Previous voice"}),children:l.jsx(Pn,{className:"h-6 w-6 text-token-text-quaternary hover:text-token-text-secondary"})}),l.jsx(D,{voice:w,variant:"center"},w?.name),l.jsx("button",{className:`duration-175 absolute -right-4 top-2 z-50 transition-opacity ${X?"opacity-20":"opacity-100"}`,onClick:()=>Y("next"),"aria-label":i.formatMessage({id:"Dr8wrw",defaultMessage:"Next voice"}),children:l.jsx(zn,{className:"h-6 w-6 text-token-text-quaternary hover:text-token-text-secondary"})}),l.jsx(D,{voice:q,variant:"right",onClick:()=>F(A)},q?.name),l.jsx(D,{voice:W,variant:"offscreenRight"},W?.name),l.jsx("div",{className:"pointer-events-none absolute h-full w-full -translate-x-52 transform bg-gradient-to-r from-[var(--main-surface-background)] to-transparent"}),l.jsx("div",{className:"pointer-events-none absolute h-full w-full translate-x-52 transform bg-gradient-to-l from-[var(--main-surface-background)] to-transparent"}),l.jsx("div",{className:"pointer-events-none absolute h-full w-full -translate-x-96 transform bg-token-main-surface-primary"}),l.jsx("div",{className:"pointer-events-none absolute h-full w-full translate-x-96 transform bg-token-main-surface-primary"})]})}),l.jsxs("div",{className:"mb-36 flex flex-col space-y-3",children:[l.jsx(Q,{className:"w-52 whitespace-nowrap rounded-full px-20 py-3 font-semibold text-white",onClick:bn,children:c?l.jsx(En,{}):w?.voice===s&&!t?l.jsx(M,{id:"MyKAgb",defaultMessage:"Done"}):l.jsx(M,{id:"7+3LaJ",defaultMessage:"Start new chat"})}),l.jsx(Q,{className:"w-52 rounded-full px-20 py-3 font-semibold text-black dark:text-white",color:"ghost",onClick:hn,children:l.jsx(M,{id:"dUn4Wd",defaultMessage:"Cancel"})})]})]})}function D({voice:o,variant:n,onClick:t}){return l.jsxs($n.button,{onClick:t,className:"absolute flex w-48 select-none flex-col items-center justify-center",variants:We,animate:n,initial:n,transition:{duration:.25,ease:"easeInOut"},children:[l.jsx("p",{className:`text-lg ${n==="center"?"font-semibold":""}`,children:o?.name}),l.jsx("p",{className:"text-sm text-gray-600 dark:text-[var(--text-secondary)]",children:o?.description})]})}export{O as B,xe as G,tn as T,U,et as V,Ie as a,Pe as b,fn as n,pe as s,nt as u,ze as v};
//# sourceMappingURL=dt57uuz3tezdglq7.js.map
