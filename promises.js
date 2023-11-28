function readFile(filename) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const fileContent = `Content of ${filename}`;
            if (fileContent) {
                resolve(fileContent)
            } else {
                reject("Could not read file")
            }
        }, 1000);
    });
}

// Using Promises to avoid Callback Hell
readFile('file1.txt')
    .then(function (content1) {
        console.log(content1);
        return readFile('file2.txt');
    })
    .then(function (content2) {
        console.log(content2);
        return readFile('file3.txt');
    })
    .then(function (content3) {
        console.log(content3);
    })
    .catch(function (error) {
        console.error(error);
    })
    .finally(() => {
        console.log(`it must execut no matter success or fail`);
    });
