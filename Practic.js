var student = {
    name: "rabbani",
    age: 21,
    classs: 3
}
var { name: username, age: saal, classs: cla } = student

console.log(username)

var students = [1, 2, 3, 4, 5]
var [a, b, c, ...d] = students
console.log(d)