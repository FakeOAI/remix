import{o as a}from"./hwys1cva3r0syt2i.js";function n(e){return e.message.metadata?.aggregate_result?.messages?.some(a)}function r(e){const s=e.message.content;return("parts"in s?s.parts.join(""):"").includes("sandbox:")}function g(e){return e.some(s=>s.messages.some(t=>n(t)||r(t)))}export{g as m};
//# sourceMappingURL=n8ad50focc5vm69k.js.map
