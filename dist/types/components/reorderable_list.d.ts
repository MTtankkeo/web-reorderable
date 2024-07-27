import { ReorderableState, ReorderableContext } from "../types";
import { ReorderableElement } from "./reorderable";
export declare class ReorderableListElement extends ReorderableElement {
    onInit(): void;
    onUpdateState(state: ReorderableState<string>): void;
    onUpdateContext(context: ReorderableContext): void;
}
