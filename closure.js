function outerFunction() {
    let outerVariable = "I am from the outer function";
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}

const closure = outerFunction();

closure();
