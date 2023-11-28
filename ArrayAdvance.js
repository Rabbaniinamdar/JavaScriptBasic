// map method
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map((number) => {
    return number * number;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// filter method
let ages = [20, 25, 18, 30, 22];
let adults = ages.filter((age) => {
    return age >= 21;
});
console.log(adults); // Output: [25, 30, 22]

//reduce method
let marks = [93, 82, 63, 74, 45];
let sum = marks.reduce((accumulator, currentMarks) => {
    return accumulator + currentMarks;
}, 0);

console.log(sum);

//find method
let products = ["phone", "laptop", "TV", "shoes", "dress"];
let found = products.find((product) => {
    return product === "laptop";
});
console.log(found);//output:laptop


//every method
let studentmarks = [93, 82, 33, 74, 45];
let result = studentmarks.every(mark => {
    return mark >= 36;
});
console.log(result); // Output: false

//some method
const number = [3, -2, 7, -5, 1];
const hasPositiveNumber = number.some((num) => {
    return num > 0;
});
console.log(hasPositiveNumber)//output:true

//fill method
const values = [3, -2, 7, -5, 1];
const fillvalue = values.fill(5 , 2, 3);
console.log(fillvalue)


// //for each
let colors = ["red", "blue", "green"];
colors.forEach((color) => {
    console.log(color);
});
// output
// red
// blue
// green



