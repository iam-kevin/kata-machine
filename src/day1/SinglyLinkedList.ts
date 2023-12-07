type Node<T> = {
    value: T;
    next: Node<T> | null;
};

export default class SinglyLinkedList<T> {
    public length: number;
    public head: Node<T> | null;

    constructor() {
        this.head = null;
        this.length = 0;
    }

    // add to head
    prepend(item: T): void {
        const hnode: Node<T> = { value: item, next: null };

        if (this.head === null) {
            this.head = hnode;
        } else {
            hnode.next = this.head;
            this.head = hnode;
        }

        this.length += 1;
    }
    insertAt(item: T, idx: number): void {}
    append(item: T): void {
        const tnode: Node<T> = { value: item, next: null };
        this.length += 1;
        if (this.head === null) {
            this.head = tnode;
            return;
        }

        let current = this.head;

        while (true) {
            if (current.next !== null) {
                current = current.next;
                continue;
            } else {
                break;
            }
        }

        current.next = tnode;
    }
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}
