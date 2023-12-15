class ArrayDS {
    constructor(arr) {
        this.arr = arr;
    }

    push(elem) {
        this.arr[this.arr.length] = elem;
        return this.arr;
    }

    pop() {
        if (this.arr.length === 0) {
            return undefined;
        }
        const poppedElement = this.arr[this.arr.length - 1];
        this.arr.length--;
        return poppedElement;
    }

    unshift(elem) {
        for (let i = this.arr.length; i > 0; i--) {
            this.arr[i] = this.arr[i - 1];
        }
        this.arr[0] = elem;
        return this.arr;
    }

    shift() {
        if (this.arr.length === 0) {
            return undefined;
        }
        const shiftedElement = this.arr[0];

        for (let i = 0; i < this.arr.length - 1; i++) {
            this.arr[i] = this.arr[i + 1];
        }

        this.arr.length--;

        return shiftedElement;
    }
}

// Example usage
const arrManipulator = new ArrayDS([]);
arrManipulator.push(10);
arrManipulator.push(20);
arrManipulator.push(30);

console.log(arrManipulator.arr); 

arrManipulator.pop();
console.log(arrManipulator.arr);

arrManipulator.unshift(5);
console.log(arrManipulator.arr);

arrManipulator.shift();
console.log(arrManipulator.arr);
