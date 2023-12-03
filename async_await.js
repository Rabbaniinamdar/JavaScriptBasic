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

readFilesSequentially();
