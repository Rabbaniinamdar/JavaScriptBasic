// Regular function
function regularFunction(value) {
    console.log(this)
    return value * 2;
}
console.log(regularFunction(13));

// Arrow function
const arrowFunction = (value) => {
    console.log(this)
    return value * 2
};
console.log(arrowFunction(10))