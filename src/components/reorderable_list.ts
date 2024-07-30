import { ReorderableState, ReorderableContext } from "../types";
import { ReorderableElement } from "./reorderable";
import { ReorderableConnectionElement } from "./reorderable_connection";

export class ReorderableListElement extends ReorderableElement {
    onInit(): void {
        console.log("on init");
        ReorderableConnectionElement.ancestorOf(this)?.attach(this);
    }

    onUpdateState(state: ReorderableState<string>): void {
        console.log("on update state", state);
    }

    onUpdateContext(context: ReorderableContext): void {
        console.log(context);
    }
}

customElements.define("reorderable-list", ReorderableListElement);