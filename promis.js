// function readfile(file) {
//     return new Promise((res, rej) => {
//         if (file) {
//             res("Promise is resolved")
//         } else {
//             rej()
//         }
//     })
// }
// readfile("file.txt").then(() => {
//     console.log("data reads from file")
// }).catch(() => {
//     console.log("data is not reade")
// })

let arr = [0, 0, 0, 1, 2, 3, 4, 5, 0];
let newarr = [];

for (let index in arr) {
    let elm = arr[index];

    if (elm !== 0) {
        newarr.unshift(elm);
    }
    if (elm === 0) {
        newarr.push(elm);
    }
}

console.log(newarr);
