!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).Reodeerable={})}(this,(function(e){"use strict";class n extends HTMLElement{}class t extends n{connectedCallback(){console.log("connected")}}customElements.define("reorderable-list",t);const l=new CSSStyleSheet;l.insertRule("\n    reorderable-list {\n        display: flex;\n        flex-direction: column;\n    }\n"),l.insertRule("\n    reorderable-grid {}\n"),document.adoptedStyleSheets=[l],e.ReorderableElement=n,e.ReorderableGridElement=class{},e.ReorderableListElement=t}));
//# sourceMappingURL=index.umd.js.map