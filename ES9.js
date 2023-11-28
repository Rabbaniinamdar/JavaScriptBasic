// function readFile(filename) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             const fileContent = `Content of ${filename}`;
//             if (fileContent) {
//                 resolve(fileContent)
//             } else {
//                 reject("Could not read file")
//             }
//         }, 1000);
//     });
// }

// // finally
// readFile('file1.txt')
//     .then(function (content1) {
//         console.log(content1);
//         return readFile('file2.txt');
//     })
//     .then(function (content2) {
//         console.log(content2);
//         return readFile('file3.txt');
//     })
//     .then(function (content3) {
//         console.log(content3);
//     })
//     .catch(function (error) {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log(`it must execut no matter success or fail`);
//     });


const number = /([6-9]{1})([0-9]{9})/;

const num = number.exec("7760375574")
console.log(num)


const regExpDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regExpDate.exec('2020-06-25');
const year = match[1]; // 2020
const month = match[2]; // 06
const day = match[3]; // 25
console.log(year)
console.log(month)
console.log(day)
