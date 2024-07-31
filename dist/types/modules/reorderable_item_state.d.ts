import { ReorderableItem } from "../types";
export declare enum ReorderableItemStatus {
    NONE = "none",
    READY = "ready",
    ACTIVE = "active"
}
export declare class ReorderableItemState<T> {
    parent: ReorderableItem<T>;
    /** The value that is defining the current reorderable item status. */
    private _status;
    /** Gets the current status of reorderable item. */
    get status(): ReorderableItemStatus;
    /** Sets the current status of reorderable item. */
    set status(newStatus: ReorderableItemStatus);
    /** The value that is defining the pointer event when this state started. */
    protected startedPointerEvent: PointerEvent;
    /** The value that is defining the pointer event when this state updated. */
    protected currentPointerEvent: PointerEvent;
    constructor(parent: ReorderableItem<T>);
    registerPointerEvent(event: PointerEvent): PointerEvent;
}
