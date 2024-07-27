import { ReorderableElement } from "./reorderable";

export class ReorderableListElement extends ReorderableElement {
    connectedCallback() {
        console.log("connected");
    }
}

customElements.define("reorderable-list", ReorderableListElement);