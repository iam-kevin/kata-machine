type Node<T> = {
    prev: Node<T> | null;
    value: T;
};

export default class Stack<T> {
    public length: number;
    private top: Node<T> | null;

    constructor() {
        this.length = 0;
        this.top = null;
    }

    push(item: T): void {
        const node: Node<T> = { value: item, prev: null };
        if (this.top === null) {
            this.top = node;
        } else {
            node.prev = this.top;
            this.top = node;
        }

        this.length += 1;
    }
    pop(): T | undefined {
        if (this.top === null) {
            return undefined;
        }

        const node = this.top;
        this.top = this.top.prev;

        node.prev = null; // 'free'-ing memory
        this.length -= 1;

        return node.value;
    }

    peek(): T | undefined {
        if (this.top === null) {
            return undefined;
        }

        return this.top.value;
    }
}
