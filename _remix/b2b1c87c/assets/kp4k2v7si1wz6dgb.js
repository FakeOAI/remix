import{ax as H,ay as D,az as P,aA as w,aB as L,aC as O,aD as m}from"./fz81i3fl330y5ew1.js";import{S as d,a as c,E as f,D as i}from"./fi1eifnoy9tspxqm.js";const h=d.define(),k=d.define(),F=d.define(),T=d.define();function x(e){return new Map(e.map(t=>[t.id,t.at]))}const u=c.define({create(){return null},update(e,t){for(const n of t.effects)if(n.is(h))return n.value;return e}}),l=c.define({create(){return[]},update(e,t){for(const a of t.effects)if(a.is(k))return a.value;const n=e,o=x(n),r=H(t,o);return D(o,r)?n:P(n,r)}}),C=c.define({create(){return null},update(e,t){for(const n of t.effects)if(n.is(F))return n.value;return e}}),p=c.define({create(){return null},update(e,t){for(const n of t.effects)if(n.is(T))return n.value;return e}});function I(e){if(!e||e.to-e.from===0)return i.none;const t=i.mark({class:w.code});return i.set([t.range(e.from,e.to)])}function g(e,t,n){if(e.length===0)return i.none;const r=[...e].sort((s,a)=>s.at.start-a.at.start).map(s=>{if(s.at.end-s.at.start===0)return null;const a=s.id===t,S=s.id===n,E=L({isHovered:a,isFocused:S,isCode:!0});return i.mark({class:E,attributes:{"data-comment-id":s.id}}).range(s.at.start,s.at.end)}).filter(O);return i.set(r)}const A=c.define({create(e){const t=e.field(u,!1);return I(t??null)},update(e,t){const n=t.state.field(u,!1);return I(n??null)},provide:e=>f.decorations.from(e)}),b=c.define({create(e){const t=e.field(l,!1),n=e.field(C,!1),o=e.field(p,!1);return g(t??[],n??null,o??null)},update(e,t){const n=t.state.field(l,!1),o=t.state.field(C,!1),r=t.state.field(p,!1);return g(n??[],o??null,r??null)},provide:e=>f.decorations.from(e)});function y(e){e.state.selection.main.empty&&e.dispatch({effects:h.of(null)})}function v(e){let t=e.dataset.commentId;for(let n=0;n<10&&!t&&e.parentElement;n++)e=e.parentElement,t=e.dataset.commentId;return t}function B(e){const t=e.target,n=v(t);n&&m.focusComment(n)}function G(e){const t=e.target,n=v(t);n?m.mouseEnterComment(n):m.mouseLeaveComment()}function _(e,t=null,n=null){return[l.init(()=>e),u,C.init(()=>t),p.init(()=>n),A,b,f.updateListener.of(o=>{o.selectionSet&&y(o.view)}),f.domEventHandlers({click:B,mouseover:G})]}export{_ as a,h as b,l as c,F as d,T as e,k as s};
//# sourceMappingURL=kp4k2v7si1wz6dgb.js.map