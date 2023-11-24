function varExample() {
  var x = 5;
  console.log(x); // Outputs 5
  if (true) {
    var x = 10;
    console.log(x); // Outputs 10
  }
  console.log(x); // Outputs 10
}
// varExample()


function letExample() {
  let x = 5;
  console.log(x); // Outputs 5
  if (true) {
    let x = 10;
    x = 20;
    console.log(x); // Outputs 20
  }
  console.log(x); // Outputs 10
}
// letExample()

function constExample() {
  const x = 5;
  console.log(x); // Outputs 5
  if (true) {
    const x = 10;
    // x = 20;
    console.log(x); // Outputs 10
  }
  console.log(x); // Outputs 10
}
constExample()