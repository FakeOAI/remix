import{eO as G}from"./otyn7m3v4o5hjv1m.js";import{U as b,V as K,c as L,W as k,X as U,Y as W,Z as j,p as y,a as O,_ as z,T as D,N as F,D as J,f as q,P as R,M as X}from"./guixxmttrchqsmhb.js";import{dt as H}from"./g98o1hu13svzcy4j.js";function Y(n){let e="",t=!1;const r=[];function s(i){if(t=!1,i.type.name==="paragraph")return i.descendants(l=>s(l)),e+=`
`,t=!0,!1;if(i.type.name==="command_token"){const l=i.textContent;return r.push({symbol:G.SystemHint,startIndex:e.length,endIndex:e.length+l.length}),e+=l,!1}else i.isText&&i.text!==void 0&&(e+=i.text)}return n.descendants(i=>s(i)),t&&e.endsWith(`
`)&&(e=e.slice(0,-1)),{content:e,metadata:{custom_symbol_offsets:r}}}function me(n){return Y(n.state.doc)}const Z=L(j,W,U);async function he(n,e){const{schema:t}=n.state,r=e.split(`
`);if(n.dispatch(n.state.tr.deleteSelection()),n.dispatch(n.state.tr.insertText(r[0])),r.length>1){Z(n.state,n.dispatch);const s=r.slice(1),i=b.fromArray(s.map(a=>t.nodes.paragraph.create(null,a===""?null:t.text(a)))),l=new k(i,0,0);n.dispatch(n.state.tr.replaceSelection(l)),K(n.state,n.dispatch,n)}}class p extends y{constructor(e){super(e,e)}map(e,t){let r=e.resolve(t.map(this.head));return p.valid(r)?new p(r):y.near(r)}content(){return k.empty}eq(e){return e instanceof p&&e.head==this.head}toJSON(){return{type:"gapcursor",pos:this.head}}static fromJSON(e,t){if(typeof t.pos!="number")throw new RangeError("Invalid input for GapCursor.fromJSON");return new p(e.resolve(t.pos))}getBookmark(){return new A(this.anchor)}static valid(e){let t=e.parent;if(t.isTextblock||!Q(e)||!_(e))return!1;let r=t.type.spec.allowGapCursor;if(r!=null)return r;let s=t.contentMatchAt(e.index()).defaultType;return s&&s.isTextblock}static findGapCursorFrom(e,t,r=!1){e:for(;;){if(!r&&p.valid(e))return e;let s=e.pos,i=null;for(let l=e.depth;;l--){let a=e.node(l);if(t>0?e.indexAfter(l)<a.childCount:e.index(l)>0){i=a.child(t>0?e.indexAfter(l):e.index(l)-1);break}else if(l==0)return null;s+=t;let o=e.doc.resolve(s);if(p.valid(o))return o}for(;;){let l=t>0?i.firstChild:i.lastChild;if(!l){if(i.isAtom&&!i.isText&&!F.isSelectable(i)){e=e.doc.resolve(s+i.nodeSize*t),r=!1;continue e}break}i=l,s+=t;let a=e.doc.resolve(s);if(p.valid(a))return a}return null}}}p.prototype.visible=!1;p.findFrom=p.findGapCursorFrom;y.jsonID("gapcursor",p);class A{constructor(e){this.pos=e}map(e){return new A(e.map(this.pos))}resolve(e){let t=e.resolve(this.pos);return p.valid(t)?new p(t):y.near(t)}}function Q(n){for(let e=n.depth;e>=0;e--){let t=n.index(e),r=n.node(e);if(t==0){if(r.type.spec.isolating)return!0;continue}for(let s=r.child(t-1);;s=s.lastChild){if(s.childCount==0&&!s.inlineContent||s.isAtom||s.type.spec.isolating)return!0;if(s.inlineContent)return!1}}return!0}function _(n){for(let e=n.depth;e>=0;e--){let t=n.indexAfter(e),r=n.node(e);if(t==r.childCount){if(r.type.spec.isolating)return!0;continue}for(let s=r.child(t);;s=s.firstChild){if(s.childCount==0&&!s.inlineContent||s.isAtom||s.type.spec.isolating)return!0;if(s.inlineContent)return!1}}return!0}function ge(){return new O({props:{decorations:te,createSelectionBetween(n,e,t){return e.pos==t.pos&&p.valid(t)?new p(t):null},handleClick:$,handleKeyDown:V,handleDOMEvents:{beforeinput:ee}}})}const V=z({ArrowLeft:x("horiz",-1),ArrowRight:x("horiz",1),ArrowUp:x("vert",-1),ArrowDown:x("vert",1)});function x(n,e){const t=n=="vert"?e>0?"down":"up":e>0?"right":"left";return function(r,s,i){let l=r.selection,a=e>0?l.$to:l.$from,o=l.empty;if(l instanceof D){if(!i.endOfTextblock(t)||a.depth==0)return!1;o=!1,a=r.doc.resolve(e>0?a.after():a.before())}let u=p.findGapCursorFrom(a,e,o);return u?(s&&s(r.tr.setSelection(new p(u))),!0):!1}}function $(n,e,t){if(!n||!n.editable)return!1;let r=n.state.doc.resolve(e);if(!p.valid(r))return!1;let s=n.posAtCoords({left:t.clientX,top:t.clientY});return s&&s.inside>-1&&F.isSelectable(n.state.doc.nodeAt(s.inside))?!1:(n.dispatch(n.state.tr.setSelection(new p(r))),!0)}function ee(n,e){if(e.inputType!="insertCompositionText"||!(n.state.selection instanceof p))return!1;let{$from:t}=n.state.selection,r=t.parent.contentMatchAt(t.index()).findWrapping(n.state.schema.nodes.text);if(!r)return!1;let s=b.empty;for(let l=r.length-1;l>=0;l--)s=b.from(r[l].createAndFill(null,s));let i=n.state.tr.replace(t.pos,t.pos,new k(s,0,0));return i.setSelection(D.near(i.doc.resolve(t.pos+1))),n.dispatch(i),!1}function te(n){if(!(n.selection instanceof p))return null;let e=document.createElement("div");return e.className="ProseMirror-gapcursor",J.create(n.doc,[q.widget(n.selection.head,e,{key:"gapcursor"})])}const ne=500;class h{constructor(e,t){this.items=e,this.eventCount=t}popEvent(e,t){if(this.eventCount==0)return null;let r=this.items.length;for(;;r--)if(this.items.get(r-1).selection){--r;break}let s,i;t&&(s=this.remapping(r,this.items.length),i=s.maps.length);let l=e.tr,a,o,u=[],d=[];return this.items.forEach((f,c)=>{if(!f.step){s||(s=this.remapping(r,c+1),i=s.maps.length),i--,d.push(f);return}if(s){d.push(new g(f.map));let m=f.step.map(s.slice(i)),w;m&&l.maybeStep(m).doc&&(w=l.mapping.maps[l.mapping.maps.length-1],u.push(new g(w,void 0,void 0,u.length+d.length))),i--,w&&s.appendMap(w,i)}else l.maybeStep(f.step);if(f.selection)return a=s?f.selection.map(s.slice(i)):f.selection,o=new h(this.items.slice(0,r).append(d.reverse().concat(u)),this.eventCount-1),!1},this.items.length,0),{remaining:o,transform:l,selection:a}}addTransform(e,t,r,s){let i=[],l=this.eventCount,a=this.items,o=!s&&a.length?a.get(a.length-1):null;for(let d=0;d<e.steps.length;d++){let f=e.steps[d].invert(e.docs[d]),c=new g(e.mapping.maps[d],f,t),m;(m=o&&o.merge(c))&&(c=m,d?i.pop():a=a.slice(0,a.length-1)),i.push(c),t&&(l++,t=void 0),s||(o=c)}let u=l-r.depth;return u>re&&(a=se(a,u),l-=u),new h(a.append(i),l)}remapping(e,t){let r=new X;return this.items.forEach((s,i)=>{let l=s.mirrorOffset!=null&&i-s.mirrorOffset>=e?r.maps.length-s.mirrorOffset:void 0;r.appendMap(s.map,l)},e,t),r}addMaps(e){return this.eventCount==0?this:new h(this.items.append(e.map(t=>new g(t))),this.eventCount)}rebased(e,t){if(!this.eventCount)return this;let r=[],s=Math.max(0,this.items.length-t),i=e.mapping,l=e.steps.length,a=this.eventCount;this.items.forEach(c=>{c.selection&&a--},s);let o=t;this.items.forEach(c=>{let m=i.getMirror(--o);if(m==null)return;l=Math.min(l,m);let w=i.maps[m];if(c.step){let B=e.steps[m].invert(e.docs[m]),E=c.selection&&c.selection.map(i.slice(o+1,m));E&&a++,r.push(new g(w,B,E))}else r.push(new g(w))},s);let u=[];for(let c=t;c<l;c++)u.push(new g(i.maps[c]));let d=this.items.slice(0,s).append(u).append(r),f=new h(d,a);return f.emptyItemCount()>ne&&(f=f.compress(this.items.length-r.length)),f}emptyItemCount(){let e=0;return this.items.forEach(t=>{t.step||e++}),e}compress(e=this.items.length){let t=this.remapping(0,e),r=t.maps.length,s=[],i=0;return this.items.forEach((l,a)=>{if(a>=e)s.push(l),l.selection&&i++;else if(l.step){let o=l.step.map(t.slice(r)),u=o&&o.getMap();if(r--,u&&t.appendMap(u,r),o){let d=l.selection&&l.selection.map(t.slice(r));d&&i++;let f=new g(u.invert(),o,d),c,m=s.length-1;(c=s.length&&s[m].merge(f))?s[m]=c:s.push(f)}}else l.map&&r--},this.items.length,0),new h(H.from(s.reverse()),i)}}h.empty=new h(H.empty,0);function se(n,e){let t;return n.forEach((r,s)=>{if(r.selection&&e--==0)return t=s,!1}),n.slice(t)}class g{constructor(e,t,r,s){this.map=e,this.step=t,this.selection=r,this.mirrorOffset=s}merge(e){if(this.step&&e.step&&!e.selection){let t=e.step.merge(this.step);if(t)return new g(t.getMap().invert(),t,this.selection)}}}class v{constructor(e,t,r,s,i){this.done=e,this.undone=t,this.prevRanges=r,this.prevTime=s,this.prevComposition=i}}const re=20;function ie(n,e,t,r){let s=t.getMeta(C),i;if(s)return s.historyState;t.getMeta(oe)&&(n=new v(n.done,n.undone,null,0,-1));let l=t.getMeta("appendedTransaction");if(t.steps.length==0)return n;if(l&&l.getMeta(C))return l.getMeta(C).redo?new v(n.done.addTransform(t,void 0,r,T(e)),n.undone,I(t.mapping.maps),n.prevTime,n.prevComposition):new v(n.done,n.undone.addTransform(t,void 0,r,T(e)),null,n.prevTime,n.prevComposition);if(t.getMeta("addToHistory")!==!1&&!(l&&l.getMeta("addToHistory")===!1)){let a=t.getMeta("composition"),o=n.prevTime==0||!l&&n.prevComposition!=a&&(n.prevTime<(t.time||0)-r.newGroupDelay||!le(t,n.prevRanges)),u=l?M(n.prevRanges,t.mapping):I(t.mapping.maps);return new v(n.done.addTransform(t,o?e.selection.getBookmark():void 0,r,T(e)),h.empty,u,t.time,a??n.prevComposition)}else return(i=t.getMeta("rebased"))?new v(n.done.rebased(t,i),n.undone.rebased(t,i),M(n.prevRanges,t.mapping),n.prevTime,n.prevComposition):new v(n.done.addMaps(t.mapping.maps),n.undone.addMaps(t.mapping.maps),M(n.prevRanges,t.mapping),n.prevTime,n.prevComposition)}function le(n,e){if(!e)return!1;if(!n.docChanged)return!0;let t=!1;return n.mapping.maps[0].forEach((r,s)=>{for(let i=0;i<e.length;i+=2)r<=e[i+1]&&s>=e[i]&&(t=!0)}),t}function I(n){let e=[];for(let t=n.length-1;t>=0&&e.length==0;t--)n[t].forEach((r,s,i,l)=>e.push(i,l));return e}function M(n,e){if(!n)return null;let t=[];for(let r=0;r<n.length;r+=2){let s=e.map(n[r],1),i=e.map(n[r+1],-1);s<=i&&t.push(s,i)}return t}function ae(n,e,t){let r=T(e),s=C.get(e).spec.config,i=(t?n.undone:n.done).popEvent(e,r);if(!i)return null;let l=i.selection.resolve(i.transform.doc),a=(t?n.done:n.undone).addTransform(i.transform,e.selection.getBookmark(),s,r),o=new v(t?a:i.remaining,t?i.remaining:a,null,0,-1);return i.transform.setSelection(l).setMeta(C,{redo:t,historyState:o})}let S=!1,P=null;function T(n){let e=n.plugins;if(P!=e){S=!1,P=e;for(let t=0;t<e.length;t++)if(e[t].spec.historyPreserveItems){S=!0;break}}return S}const C=new R("history"),oe=new R("closeHistory");function ve(n={}){return n={depth:n.depth||100,newGroupDelay:n.newGroupDelay||500},new O({key:C,state:{init(){return new v(h.empty,h.empty,null,0,-1)},apply(e,t,r){return ie(t,r,e,n)}},config:n,props:{handleDOMEvents:{beforeinput(e,t){let r=t.inputType,s=r=="historyUndo"?pe:r=="historyRedo"?ue:null;return s?(t.preventDefault(),s(e.state,e.dispatch)):!1}}}})}function N(n,e){return(t,r)=>{let s=C.getState(t);if(!s||(n?s.undone:s.done).eventCount==0)return!1;if(r){let i=ae(s,t,n);i&&r(e?i.scrollIntoView():i)}return!0}}const pe=N(!1,!0),ue=N(!0,!0);export{Z as c,ge as g,ve as h,he as i,Y as n,me as p,ue as r,pe as u};
//# sourceMappingURL=mdywhc6vbcew95e2.js.map