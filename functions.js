// Regular function
function regularFunction(value) {
    console.log(arguments)
    return value * 2;
}
// console.log(regularFunction(13,12,3,4,2,2,3));

// Arrow function
const arrowFunction = (value) => {
    // console.log(this)
    console.log(arguments)
    return value * 2
};
console.log(arrowFunction(10,2,3,5,7,8))