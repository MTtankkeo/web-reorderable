import { ReorderableItemState } from "../modules/reorderable_item_state";
import { ReorderableItem, ReorderableContext, ReorderableListener, ReorderableState, ReorderableStatusListener } from "../types";

type Item = ReorderableItem;
type State = ReorderableState;
type Context = ReorderableContext;

export enum ReorderableStatus {
    NONE = "none",
    REORDERING = "reordering",
    REORDERED = "reordered"
}

export abstract class ReorderableElement extends HTMLElement {
    private _listeners: ReorderableListener[] = [];
    private _statusListeners: ReorderableStatusListener[] = [];

    /** The value that is defining the current reorderable status. */
    private _status: ReorderableStatus = ReorderableStatus.NONE;

    /** Gets the current reorderable status. */
    get status(): ReorderableStatus {
        return this._status;
    }

    /** Sets the current reorderable status to a given new status. */
    set status(newStatus: ReorderableStatus) {
        if (this._status != newStatus) {
            this.notifyStatusListeners(this._status = newStatus);
        }
    }

    /** The value that is defining the current reorderable state. */
    private _state: State = null;

    /** Gets the current reorderable state. */
    get state(): State {
        return this._state;
    }

    /** Sets the current reorderable state. */
    set state(newState: State) {
        this.onUpdateState(this._state = newState);
    }

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
        this._statusListeners.push(callback);
    }

    removeStatusListener(callback: ReorderableStatusListener) {
        console.assert(this._statusListeners.includes(callback), "Already not exists a given callback.");
        this._statusListeners.push(callback);
    }

    protected notifyListeners(oldIndex: number, newIndex: number, offset: number) {
        this._listeners.forEach(l => l(oldIndex, newIndex, offset));
    }

    protected notifyStatusListeners(status: ReorderableStatus) {
        this._statusListeners.forEach(l => l(status));
    }

    /**
     * Gets a reorderable ancestor of a given element by traversing
     * the tree in reverse order.
     */
    static ancestorOf(element: Element): ReorderableElement {
        let parent = element.parentElement;

        // To check if a reorderable element exists in self ancestors.
        while (parent) {
            if (parent instanceof ReorderableElement) {
                return parent;
            }

            parent = parent.parentElement;
        }
    }

    createState(items: Item[]): State {
        return {items: items.map(i => new ReorderableItemState(i))};
    }

    /** Called only once before the `this.onInitState()` is called. */
    onInit() { }

    onInitState(state: State) {
        for (const item of state.items) {
            item.parent.element.addEventListener("pointerdown", () => {
                console.log("pointer down");
            });

            item.parent.element.addEventListener("pointerup", () => {
                console.log("pointer up");
            });
        }
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
        this.onInitState(this.state = this.createState(items));
    }
}