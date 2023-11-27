function f1() {
    console.log("Function 1")
}
function f2() {
    console.log("Function 2")
}
function f3() {
    console.log("Function 3")
}
function f5() {
    console.log("Function 4")
}

// f1()
// f2()
// f3()
// f4()
// f5()

function f1() {
    console.log("Function 1")
}
function f2() {
    console.log("Function 2")
    f1()
}
function f3() {
    console.log("Function 3")
    f2()
}
function f4() {
    console.log("Function 4")
    f3()
}
f4()