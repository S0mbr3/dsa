/*
  LinkedLists compared to arrays are not contiguous memory chunks, but they are data structures made with nodes. Each nodes store a value and the offset to the next node. For a double linked list each nodes stores also the offset of the previous nodes to allow double traversals good understanding of C pointers can helps 

  understanding Linked lists will also helps with trees, graphs and others high level data structures.
*/
interface LinkedList<T> {
    get length(): number;
    insertAt(item: T, index: number): void;
    remove(item: T): T | undefined;
    removeAt(index: number): T | undefined;
    append(item: T): void;
    prepend(item: T): void;
    get(index: number): T | undefined;
}
