console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

console.log(y); // Throws ReferenceError: y is not defined
let y = 10;
console.log(y); // Output: 10

sayHello(); // Output: "Hello, World!"

function sayHello() {
    console.log("Hello, World!");
}
