type Node<T> = {
    value: T;
    next: Node<T> | null;
};

export default class Queue<T> {
    public length: number;
    private head: Node<T> | null;
    private tail: Node<T> | null;

    constructor() {
        this.head = this.tail = null;
        this.length = 0;
    }

    enqueue(item: T): void {
        const hnode: Node<T> = { value: item, next: null };

        if (this.head === null) {
            this.head = hnode;
        }

        if (this.tail === null) {
            this.tail = hnode;
        } else {
            this.tail.next = hnode;
            this.tail = hnode;
        }

        this.length += 1;
    }
    deque(): T | undefined {
        // when no item onlist
        if (this.head === null) {
            return undefined;
        }

        const value = this.head.value;
        this.head = this.head.next;

        this.length -= 1;

        return value;
    }

    peek(): T | undefined {
        if (this.head === null) {
            return undefined;
        }

        return this.head.value;
    }
}
