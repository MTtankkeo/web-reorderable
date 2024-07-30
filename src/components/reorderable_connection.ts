import { ReorderableElement } from "./reorderable";

/** This element connects a number of reorderable list or grid elements. */
export class ReorderableConnectionElement extends HTMLElement {
    connectedElements: ReorderableElement[] = [];

    /**
     * Gets a reorderable connection ancestor of a given element by
     * traversing the tree in reverse order.
     */
    static ancestorOf(element: Element): ReorderableConnectionElement {
        let parent = element.parentElement;

        // To check if a reorderable element exists in self ancestors.
        while (parent) {
            if (parent instanceof ReorderableConnectionElement) {
                return parent;
            }

            parent = parent.parentElement;
        }
    }

    attach(element: ReorderableElement) {
        console.assert(!this.connectedElements.includes(element), "Already a given element connected.");
        this.connectedElements.push(element);
    }

    detach(element: ReorderableElement) {
        console.assert(!this.connectedElements.includes(element), "Already a given element not connected.");
        this.connectedElements.push(element);
    }
    
    connectedCallback() {
        queueMicrotask(() => {
            if (this.connectedElements.length == 0) {
                throw new Error(
                    "Current the reorderable elements are not connected, " +
                    "so they are unnecessary in the element-tree."
                );
            }
        });
    }
}

customElements.define("reorderable-connection", ReorderableConnectionElement);