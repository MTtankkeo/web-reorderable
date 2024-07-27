class e extends HTMLElement{createState(e){return{items:e}}connectedCallback(){var e;const t=[];for(let n=0;n<this.children.length;n++){const r=this.children.item(n),o=null!==(e=r.getAttribute("key"))&&void 0!==e?e:r.getAttribute("reorderable-key");if(!o)throw new Error("Should be defining key attributes missing from reorderable element items so that items can be identified.");t.push({key:o,element:r})}this.onInit(),this.onUpdateState(this.createState(t))}}class t extends e{onInit(){console.log("on init")}onUpdateState(e){console.log("on update state",e)}onUpdateContext(e){console.log(e)}}customElements.define("reorderable-list",t);class n{}class r extends HTMLElement{connectedCallback(){this.onInit(),this.onInitEvent()}onInit(){let t=this.parentElement;for(;t;){if(t instanceof e)return this.target=t;t=t.parentElement}throw new Error("<reorderable-drag> must have a reorderable ancestor element.")}onInitEvent(){}}customElements.define("reorderable-drag",r);const o=new CSSStyleSheet;o.insertRule("\n    reorderable-list {\n        display: flex;\n        flex-direction: column;\n    }\n"),o.insertRule("\n    reorderable-grid {}\n"),document.adoptedStyleSheets=[o];export{r as ReorderableDragElement,e as ReorderableElement,n as ReorderableGridElement,t as ReorderableListElement};
//# sourceMappingURL=index.esm.js.map
