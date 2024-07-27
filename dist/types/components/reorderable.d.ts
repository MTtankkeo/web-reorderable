import { ReorderableContext, ReorderableItem, ReorderableListener, ReorderableState } from "../types";
type Item = ReorderableItem;
type State = ReorderableState;
type Context = ReorderableContext;
export declare abstract class ReorderableElement extends HTMLElement {
    private _listeners;
    abstract onInit(): void;
    abstract onUpdateState(state: State): void;
    abstract onUpdateContext(context: Context): void;
    set onChange(callback: ReorderableListener);
    addListener(callback: ReorderableListener): void;
    removeListener(callback: ReorderableListener): void;
    createState(items: Item[]): State;
    connectedCallback(): void;
}
export {};
