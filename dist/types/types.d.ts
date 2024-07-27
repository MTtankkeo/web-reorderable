export interface ReorderableItem<Key = string> {
    key: Key;
    element: HTMLElement;
}
export interface ReorderableState<Key = string> {
    items: ReorderableItem<Key>[];
}
export interface ReorderableContext {
    old: ReorderableState;
    new: ReorderableState;
}
