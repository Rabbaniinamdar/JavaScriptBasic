// Synchronous

function getUser() {
    console.log('Fetching user...');
    return 'User data';
}

function getPosts() {
    console.log('Fetching posts...');
    return 'Posts data';
}

function fetchDataSynchronously() {
    const user = getUser();
    const posts = getPosts();

    console.log('User:', user);
    console.log('Posts:', posts);
}

// fetchDataSynchronously();


// Asynchronous 
function getUserAsync(callback) {
    console.log('Fetching user...');
    setTimeout(() => {
        callback('User data');
    }, 1000);
}

function getPostsAsync(callback) {
    console.log('Fetching posts...');
    setTimeout(() => {
        callback('Posts data');
    }, 1000);
}

// Asynchronous code using callbacks
function fetchDataAsynchronouslyWithCallbacks() {
    getUserAsync((user) => {
        getPostsAsync((posts) => {
            console.log('User:', user);
            console.log('Posts:', posts);
        });
    });
}

fetchDataAsynchronouslyWithCallbacks();


