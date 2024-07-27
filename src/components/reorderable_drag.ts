import { ReorderableElement } from "./reorderable";

export class ReorderableDragElement extends HTMLElement {
    target: ReorderableElement;   

    connectedCallback() {
        this.onInit();
        this.onInitEvent();
    }

    onInit() {
        let parent = this.parentElement;

        // To check if a reorderable element exists in self ancestors.
        while (parent) {
            if (parent instanceof ReorderableElement) {
                return this.target = parent;
            }

            parent = parent.parentElement;
        }

        throw new Error("<reorderable-drag> must have a reorderable ancestor element.");
    }

    onInitEvent() {

    }
}

customElements.define("reorderable-drag", ReorderableDragElement);