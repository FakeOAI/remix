import{a8 as a}from"./h7m9odjd9i4xn2nr.js";function n(e){return e.message.metadata?.aggregate_result?.messages?.some(a)}function r(e){const s=e.message.content;return("parts"in s?s.parts.join(""):"").includes("sandbox:")}function g(e){return e.some(s=>s.messages.some(t=>n(t)||r(t)))}export{g as m};
//# sourceMappingURL=nvfegvq8no7200el.js.map
