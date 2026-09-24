class DynamicArray {
    private array: number[];
    private capacity: number;
    private size: number;
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.array = new Array(capacity);
        this.capacity = capacity;
        this.size = 0;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.array[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.getSize() === this.getCapacity()) {
            this.resize();
        }

        this.set(this.getSize(), n);
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        const num = this.array[this.getSize() - 1];
        this.size--;

        return num;
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity *= 2;

        let temp = new Array(this.getCapacity());
        for (let i = 0; i < this.array.length; i++) {
            temp[i] = this.array[i];
        }
        this.array = temp;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity;
    }
}
