import { ReorderableItem } from "../types";

export enum ReorderableItemStatus {
    NONE = "none",
    READY = "ready",
    ACTIVE = "active"
}

export class ReorderableItemState<T> {
    /** The value that is defining the current reorderable item status. */
    private _status = ReorderableItemStatus.NONE;

    /** Gets the current status of reorderable item. */
    get status(): ReorderableItemStatus {
        return this._status;
    }

    /** Sets the current status of reorderable item. */
    set status(newStatus: ReorderableItemStatus) {
        if (this.status != newStatus) {
            this._status = newStatus;
        }
    }

    /** The value that is defining the pointer event when this state started. */
    protected startedPointerEvent: PointerEvent;

    /** The value that is defining the pointer event when this state updated. */
    protected currentPointerEvent: PointerEvent;

    constructor(public parent: ReorderableItem<T>) {
        console.assert(parent != null, "The given parent must be not null.");
    }

    registerPointerEvent(event: PointerEvent) {
        switch (this.status) {
            case ReorderableItemStatus.NONE: return this.startedPointerEvent = null,
                                                    this.currentPointerEvent = null;

            case ReorderableItemStatus.READY : return this.startedPointerEvent = event;
            case ReorderableItemStatus.ACTIVE: return this.currentPointerEvent = event;
        }
    }
}