import{a9 as a}from"./pdsi9ig2nufco8yv.js";function n(e){return e.message.metadata?.aggregate_result?.messages?.some(a)}function r(e){const s=e.message.content;return("parts"in s?s.parts.join(""):"").includes("sandbox:")}function g(e){return e.some(s=>s.messages.some(t=>n(t)||r(t)))}export{g as m};
//# sourceMappingURL=my8z1z14kykla3v6.js.map
