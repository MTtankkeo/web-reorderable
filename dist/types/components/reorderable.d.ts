import { ReorderableContext, ReorderableItem, ReorderableListener, ReorderableState, ReorderableStatusListener } from "../types";
type Item = ReorderableItem;
type State = ReorderableState;
type Context = ReorderableContext;
export declare enum ReorderableStatus {
    NONE = 0,
    REORDERING = 1,
    REORDERED = 2
}
export declare abstract class ReorderableElement extends HTMLElement {
    private _listeners;
    private _statusListeners;
    /** Defined the current reorderable status. */
    private _status;
    /** Returns the current reorderable status. */
    get status(): ReorderableStatus;
    /** Defines the current reorderable status to a given new status. */
    set status(newStatus: ReorderableStatus);
    abstract onInit(): void;
    abstract onUpdateState(state: State): void;
    abstract onUpdateContext(context: Context): void;
    set onChange(callback: ReorderableListener);
    addListener(callback: ReorderableListener): void;
    removeListener(callback: ReorderableListener): void;
    addStatusListener(callback: ReorderableStatusListener): void;
    removeStatusListener(callback: ReorderableStatusListener): void;
    protected notifyListeners(oldIndex: number, newIndex: number, offset: number): void;
    protected notifyStatusListeners(status: ReorderableStatus): void;
    createState(items: Item[]): State;
    connectedCallback(): void;
}
export {};
