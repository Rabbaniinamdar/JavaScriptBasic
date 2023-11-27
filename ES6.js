// let and const Declarations:
let n = 10;
const pi = 3.14;

// Regular function
function add(a, b) {
    return a + b;
}
// Arrow function
const add = (a, b) => a + b;

//   Template Literals:
let name = "John";
console.log(`Hello, ${name}!`);

// Array destructuring
const [x, y] = [1, 2];

// Object destructuring
obj = {
    firstname: "John",
    age: 30
};
const { firstname, age } = obj

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// Rest operator
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };


// ---------------------------------------------------------

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3)); // true
console.log(numbers.includes(6)); // false

let result = 2 ** 3; // 2 to the power of 3 (2 * 2 * 2)
console.log(result); // 8
