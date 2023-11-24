// Synchronous

console.log('Task 1 completed.');
console.log('Task 2 completed');
console.log('Task 3 completed');

// Asynchronous 
console.log('Task 1 completed');
setTimeout(function () {
    console.log('Task 2 completed');
}, 1000);
console.log('Task 3 completed');
