
function readFile(filename, callback) {
    setTimeout(() => {
        const fileContent = `Content of ${filename}`;
        callback(fileContent);
    }, 1000);
}

function displayfileData(data) {
    console.log(data);
}

readFile('file1.txt', displayfileData);


// Callback Hell
readFile('file1.txt', function (content1) {
    console.log(content1);
    readFile('file2.txt', function (content2) {
        console.log(content2);
        readFile('file3.txt', function (content3) {
            console.log(content3);
        });
    });
});

