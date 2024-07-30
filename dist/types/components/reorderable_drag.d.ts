import { ReorderableElement } from "./reorderable";
export declare class ReorderableDragElement extends HTMLElement {
    target: ReorderableElement;
    connectedCallback(): void;
    onInit(): void;
    onInitEvent(): void;
}
