import { ReorderableElement } from "./reorderable";
/** This element connects a number of reorderable list or grid elements. */
export declare class ReorderableConnectionElement extends HTMLElement {
    connectedElements: ReorderableElement[];
    /**
     * Gets a reorderable connection ancestor of a given element by
     * traversing the tree in reverse order.
     */
    static ancestorOf(element: Element): ReorderableConnectionElement;
    attach(element: ReorderableElement): void;
    detach(element: ReorderableElement): void;
    connectedCallback(): void;
}
