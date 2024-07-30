import { ReorderableElement } from "./reorderable";

export class ReorderableDragElement extends HTMLElement {
    target: ReorderableElement;

    connectedCallback() {
        this.onInit();
        this.onInitEvent();
    }

    onInit() {
        if (!ReorderableElement.ancestorOf(this)) {
            throw new Error("<reorderable-drag> must have a reorderable ancestor element.");
        }
    }

    onInitEvent() {
        // TODO: ...
    }
}

customElements.define("reorderable-drag", ReorderableDragElement);