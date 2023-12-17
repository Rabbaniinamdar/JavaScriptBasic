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
        let poppedElement = this.arr[this.arr.length - 1];
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
        let shiftedElement = this.arr[0];

        for (let i = 0; i < this.arr.length - 1; i++) {
            this.arr[i] = this.arr[i + 1];
        }

        this.arr.length--;

        return shiftedElement;
    }
    sort() {
        for (let i in this.arr) {
            for (let j in this.arr) {
                if (this.arr[i] < this.arr[j]) {
                    let temp = this.arr[i];
                    this.arr[i] = this.arr[j];
                    this.arr[j] = temp;
                }
            }
        }
        return this.arr
    }
    reverse() {
        for (let i in this.arr) {
            for (let j in this.arr) {
                if (this.arr[i] > this.arr[j]) {
                    let temp = this.arr[i];
                    this.arr[i] = this.arr[j];
                    this.arr[j] = temp;
                }
            }
        }
        return this.arr
    }
}

// Example usage
let arrManipulator = new ArrayDS([]);
arrManipulator.push(40);
arrManipulator.push(10);
arrManipulator.push(20);
arrManipulator.push(30);

console.log(arrManipulator.sort());

console.log(arrManipulator.reverse());

// arrManipulator.pop();
// console.log(arrManipulator.arr);

// arrManipulator.unshift(5);
// console.log(arrManipulator.arr);

// arrManipulator.shift();
// console.log(arrManipulator.arr);
