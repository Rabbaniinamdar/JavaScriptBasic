// Creating a map
let myMap = new Map();

// Adding key-value pairs
myMap.set('name', 'John');
myMap.set('age', 25);

// Accessing values
console.log(myMap.get('name')); // Output: John
console.log(myMap.get('age'));  // Output: 25

// Modifying values
myMap.set('age', 26);
console.log(myMap.get('age'));  // Output: 26

// Map methods
console.log(myMap.size); // Output: 2
myMap.delete('name');    // Removes the 'name' key-value pair

console.log(myMap)
