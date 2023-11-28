// // let and const Declarations:
// let n = 10;
// const pi = 3.14;

// // Regular function
// function add(a, b) {
//     return a + b;
// }
// // Arrow function
// const add = (a, b) => a + b;

// //   Template Literals:
// let name = "John";
// console.log(`Hello, ${name}!`);

// // Array destructuring
// const [x, y] = [1, 2];

// // Object destructuring
// obj = {
//     firstname: "John",
//     age: 30
// };
// const { firstname, age } = obj

// // Spread operator
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];

// // Rest operator
// const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };

function example(height = 50, width = 40) { 
    const newH = height * 10;
    const newW = width * 10;
    return newH + newW;
}

example(); // 900 (50*10 + 40*10)

//class
class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    // This is a property on the prototype chain
    toString() {
        console.log('name:' + this.name + ', color:' + this.color);
    }
}
class Cat extends Animal {
    constructor(action) {
        super('cat', 'white');
        this.action = action;
    }
    toString() {
        super.toString();
        console.log(this.action)
    }
}

var animal = new Animal('myDog', 'yellow'); // instantiate
animal.toString(); // name: myDog, color: yellow

var cat = new Cat('catch')
cat.toString();

const mySymbol = Symbol('description');
