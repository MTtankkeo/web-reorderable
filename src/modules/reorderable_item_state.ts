import { ReorderableItem } from "../types";

export enum ReorderableItemStatus {
    NONE = "none",
    READY = "ready",
    ACTIVE = "active"
}

export class ReorderableItemState<T> {
    /** The value that is defining the current reorderable item status. */
    private _status = ReorderableItemStatus.NONE;

    constructor(public parent: ReorderableItem<T>) {
        console.assert(parent != null, "The given parent must be not null.");
    }
}