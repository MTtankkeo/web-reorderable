import { ReorderableContext, ReorderableItem, ReorderableState } from "../types";

type Item = ReorderableItem;
type State = ReorderableState;

export abstract class ReorderableElement extends HTMLElement {
    abstract onInit(): void;
    abstract onUpdateState(state: State): void;
    abstract onUpdateContext(context: ReorderableContext): void;

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