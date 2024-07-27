import { ReorderableElement } from "./reorderable";
export declare class ReorderableDragElement extends HTMLElement {
    target: ReorderableElement;
    connectedCallback(): void;
    onInit(): ReorderableElement;
    onInitEvent(): void;
}
