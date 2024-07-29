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
    constructor(parent: ReorderableItem<T>);
}
