
// Declare variables
let val1 = 10
let val2 = 20

// Define a function that takes two numbers as parameters
function addNumber(num1, num2) {
    // Add the two numbers and store the result in a variable
    let total = num1 + num2

    // Return the result
    return total
}

// Call the function with the values of val1 and val2, and store the result in a variable
let result1 = addNumber(val1, val2)

// Call the function with the values 2 and 5, and store the result in a variable
let result2 = addNumber(2, 5)

// Log the results to the console
console.log(result1) // Output: 30
console.log(result2) // Output: 7

//This code defines a function called `addNumber` that takes two parameters, `num1` and `num2`. The function adds these two numbers together and returns the result. The code then calls this function with the values of `val1` and `val2`, and with the