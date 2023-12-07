type Item<T> = {
    value: T;
};

export default class ArrayList<T> {
    public length: number;
    private capacity: number;
    private array: Array<T>;

    constructor(capacity?: number) {
        this.length = 0;
        this.capacity = capacity ?? 10; // default
        this.array = Array(capacity);
    }

    private growArray(newCapacity: number) {
        const newarray = new Array(newCapacity);
        for (let i = 0; i < this.length; ++i) {
            newarray[i] = this.array[i];
        }

        this.array = newarray;
    }

    prepend(item: T): void {
        if (this.length === 0) {
            this.array[this.length] = item;
            this.length += 1;
            return;
        }

        // grow array
        if (this.length === this.capacity) {
            const newarray = new Array(this.capacity * 2);
            // optim
            newarray[0] = item;
            for (let c = 1; c <= this.length; ++c) {
                newarray[c] = this.array[c - 1];
            }

            this.array = newarray;
        } else {
            for (let i = this.length - 1; i >= 0; i--) {
                this.array[i + 1] = this.array[i];
            }
            this.array[0] = item;
        }
        ``;
        this.length += 1;
        // prepend new item
    }
    insertAt(item: T, idx: number): void {
        if (this.length >= this.capacity) {
            const newarray = new Array(this.capacity * 2);

            // left side
            for (let i = 0; i < idx; i++) {
                newarray[i] = this.array[i];
            }

            newarray[idx] = item;

            // right side
            for (let i = idx; i < this.length; ++i) {
                newarray[i + 1] = this.array[i];
            }

            this.array = newarray;
        } else {
            for (let i = idx; i <= this.length; ++i) {
                this.array[i + 1] = this.array[i];
            }

            this.array[idx] = item;
        }

        this.length += 1;
    }
    append(item: T): void {
        if (this.length === this.capacity) {
            this.growArray(this.capacity * 2);
        }

        this.array[this.length] = item;
        this.length += 1;
    }
    remove(item: T): T | undefined {
        if (this.length === 0) {
            return undefined;
        }

        // search
        let index = undefined;
        for (let i = this.length - 1; i >= 0; i--) {
            if (item === this.array[i]) {
                index = i;
                break;
            }
        }

        if (index === undefined) {
            return undefined;
        }

        // remove item / "pop-ing"
        return this.removeAt(index);
    }
    get(idx: number): T | undefined {
        return this.array[idx];
    }
    removeAt(idx: number): T | undefined {
        if (this.length === 0 || idx >= this.length) {
            return undefined;
        }

        const popeditem = this.array[idx];

        for (let i = idx + 1; i < this.length; i++) {
            this.array[i - 1] = this.array[i];
        }

        delete this.array[this.length - 1]; // remove last
        this.length -= 1;

        return popeditem;
    }
}
