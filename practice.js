var string = "hello"
var reversed = ""
Array.from(string).forEach((char) => {
    reversed += char;
});
console.log(reversed)