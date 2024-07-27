import { ReorderableContext, ReorderableItem, ReorderableState } from "../types";
type Item = ReorderableItem;
type State = ReorderableState;
export declare abstract class ReorderableElement extends HTMLElement {
    abstract onInit(): void;
    abstract onUpdateState(state: State): void;
    abstract onUpdateContext(context: ReorderableContext): void;
    createState(items: Item[]): State;
    connectedCallback(): void;
}
export {};
