import { ReorderableItem, ReorderableContext, ReorderableListener, ReorderableState, ReorderableStatusListener } from "../types";
type Item = ReorderableItem;
type State = ReorderableState;
type Context = ReorderableContext;
export declare enum ReorderableStatus {
    NONE = "none",
    REORDERING = "reordering",
    REORDERED = "reordered"
}
export declare abstract class ReorderableElement extends HTMLElement {
    private _listeners;
    private _statusListeners;
    /** The value that is defining the current reorderable status. */
    private _status;
    /** Gets the current reorderable status. */
    get status(): ReorderableStatus;
    /** Sets the current reorderable status to a given new status. */
    set status(newStatus: ReorderableStatus);
    /** The value that is defining the current reorderable state. */
    private _state;
    /** Gets the current reorderable state. */
    get state(): State;
    /** Sets the current reorderable state. */
    set state(newState: State);
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
    /** Called only once before the `this.onInitState()` is called. */
    onInit(): void;
    onInitState(state: State): void;
    connectedCallback(): void;
}
export {};
