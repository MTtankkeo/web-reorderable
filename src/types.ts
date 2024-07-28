import { ReorderableStatus } from "./components/reorderable";

/** Signature for the interface that is defining the info of reorderable items. */
export interface ReorderableItem<Key = string> {
    key: Key;
    element: HTMLElement;
}

/** Signature for the interface that is defining the state of reorderable items. */
export interface ReorderableState<Key = string> {
    items: ReorderableItem<Key>[];
}

/** Signature for the interface that is defining changes to the reoderable state. */
export interface ReorderableContext {
    old: ReorderableState;
    new: ReorderableState;
}

/**
 * Signature for the function that is notifying results about reordered.
 * 
 * @param oldIndex the previous offset of items.
 * @param newIndex the current offset of items.
 * @param offset the move count(to be given an integer) of reordered item.
 */
export type ReorderableListener = (oldIndex: number, newIndex: number, offset: number) => void;

/**
 * Signature for the function that is notifying the updated new status
 * about reorderable elements.
 * 
 * @param status new status of reorderable.
 */
export type ReorderableStatusListener = (status: ReorderableStatus) => void;