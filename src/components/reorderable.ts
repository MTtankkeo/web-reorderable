import { ReorderableContext, ReorderableItem, ReorderableListener, ReorderableState, ReorderableStatusListener } from "../types";

type Item = ReorderableItem;
type State = ReorderableState;
type Context = ReorderableContext;

export enum ReorderableStatus {
    NONE,
    REORDERING,
    REORDERED
}

export abstract class ReorderableElement extends HTMLElement {
    private _listeners: ReorderableListener[] = [];
    private _statusListeners: ReorderableStatusListener[] = [];

    /** Defined the current reorderable status. */
    private _status: ReorderableStatus = ReorderableStatus.NONE;

    /** Returns the current reorderable status. */
    get status(): ReorderableStatus {
        return this._status;
    }

    /** Defines the current reorderable status to a given new status. */
    set status(newStatus: ReorderableStatus) {
        if (this._status != newStatus) {
            this.notifyStatusListeners(this._status = newStatus);
        }
    }

    abstract onInit(): void;
    abstract onUpdateState(state: State): void;
    abstract onUpdateContext(context: Context): void;

    set onChange(callback: ReorderableListener) {
        if (callback != null) {
            this.addListener(callback);
        }
    }

    addListener(callback: ReorderableListener) {
        console.assert(!this._listeners.includes(callback), "Already exists a given callback.");
        this._listeners.push(callback);
    }

    removeListener(callback: ReorderableListener) {
        console.assert(this._listeners.includes(callback), "Already not exists a given callback.");
        this._listeners.push(callback);
    }

    addStatusListener(callback: ReorderableStatusListener) {
        console.assert(!this._statusListeners.includes(callback), "Already exists a given callback.");
        this._listeners.push(callback);
    }

    removeStatusListener(callback: ReorderableStatusListener) {
        console.assert(this._statusListeners.includes(callback), "Already not exists a given callback.");
        this._listeners.push(callback);
    }

    protected notifyListeners(oldIndex: number, newIndex: number, offset: number) {
        this._listeners.forEach(l => l(oldIndex, newIndex, offset));
    }

    protected notifyStatusListeners(status: ReorderableStatus) {
        this._statusListeners.forEach(l => l(status));
    }

    createState(items: Item[]): State {
        return {items};
    }

    connectedCallback() {
        const items: Item[] = [];

        for (let i = 0; i < this.children.length; i++) {
            const child = this.children.item(i);
            const key = child.getAttribute("key")
                     ?? child.getAttribute("reorderable-key");

            if (key) {
                items.push({key: key, element: child as HTMLElement});
            } else {
                throw new Error(
                    "Should be defining key attributes missing from reorderable element " +
                    "items so that items can be identified."
                );
            }
        }

        this.onInit();
        this.onUpdateState(this.createState(items));
    }
}