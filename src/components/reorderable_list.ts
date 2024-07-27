import { ReorderableState, ReorderableContext } from "../types";
import { ReorderableElement } from "./reorderable";

export class ReorderableListElement extends ReorderableElement {
    onInit(): void {
        console.log("on init");
    }

    onUpdateState(state: ReorderableState<string>): void {
        console.log("on update state", state);
    }

    onUpdateContext(context: ReorderableContext): void {
        console.log(context);
    }
}

customElements.define("reorderable-list", ReorderableListElement);