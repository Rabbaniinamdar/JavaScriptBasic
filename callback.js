
function readFile(filename, time, callback) {
    setTimeout(() => {
        const fileContent = `Content of ${filename}`;
        callback(fileContent);
    }, time);
}

function displayfileData(data) {
    console.log(data);
}

readFile('file.txt', 1000, displayfileData);


// Callback Hell
readFile('file1.txt', 5000, function (content1) {
    console.log(content1);
    readFile('file2.txt', 2000, function (content2) {
        console.log(content2);
        readFile('file3.txt', 1000, function (content3) {
            console.log(content3);
        });
    });
});

