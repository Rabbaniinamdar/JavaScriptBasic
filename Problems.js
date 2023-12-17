// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
// console.log(reverseString('Hello, World!'));

//Check for Palindrome string
function isPalindrome(str) {
    str = str.toLowerCase();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
// console.log(isPalindrome('abba'));

// Sorting Array
function sortArray() {
    return arr.sort((a, b) => a - b);
}
let arr = [1, 3, 4, 2, 3, 5, 5, 6]
// console.log(sortArray(arr))


// factorial of a number
function factorialNumber(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i
    }
    return fact;
}
// console.log(factorialNumber(5))

//Even Number
function evenNumber(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(evenNumber(arr))

// Odd Number
function oddNumber(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log(oddNumber(arr))

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num / 2; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7))

function findLargest() {
    let larget = arr[0];
    arr.forEach((ele) => {
        if (larget < ele) {
            larget = ele;
        }
    })
    return larget
}
// console.log(findLargest())


function findSmallest() {
    let smallest = arr[0];
    arr.forEach((ele) => {
        if (smallest < ele) {
            smallest = ele;
        }
    })
    return smallest
}
console.log(findSmallest())