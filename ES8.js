// async/await

function readFile(filename) {
    return new Promise(function (resolve, reject) {
        // Simulate reading a file asynchronously
        setTimeout(function () {
            const fileContent = `Content of ${filename}`;
            if (fileContent) {
                resolve(fileContent);
            } else {
                reject("Could't read file");
            }
        }, 1000);
    });
}

async function readFilesSequentially() {
    try {
        const content1 = await readFile('file1.txt');
        console.log(content1);

        const content2 = await readFile('file2.txt');
        console.log(content2);

        const content3 = await readFile('file3.txt');
        console.log(content3);
    } catch (error) {
        console.error(error);
    }
}

// readFilesSequentially();

const exampleObj = { a: 1, b: 2, c: 3, d: 4 };
console.log(Object.keys(exampleObj)); // [ 'a', 'b', 'c', 'd' ]

console.log(Object.values(exampleObj)); // [ 1, 2, 3, 4 ]

console.log(Object.entries(exampleObj)); // [["a", 1], ["b", 2], ["c", 3], ["d", 4]];

Object.getOwnPropertyDescriptors(exampleObj);


// padStart
let lstring = '100'.padStart(5, 0); // 00100
// If the content to be padded exceeds the "padding length". Then fill in from the left to the upper limit of the length
let leftstring = '100'.padStart(5, '987'); // 98100
console.log(lstring)
console.log(leftstring)

// padEnd
let rstring='100'.padEnd(5, 9); // 10099
// If the content to be padded exceeds the "padding length". Then fill in from the right to the upper limit of the length
let rightstring='100'.padStart(5, '987'); // 10098
console.log(rstring)
console.log(leftstring)