function delay(ms, message) {
    return new Promise(resolve => {
        setTimeout(() => resolve(message), ms);
    });
}

delay(1000, "First Promise Resolved")

.then(value1 => {
    console.log(value1);
    return delay(2000, "Second Promise Resolved after 2 seconds");
})

.then(value2 => {
    console.log(value2);
    return delay(3000, "Third Promise Resolved after 3 seconds");
})

.then(value3 => {
    console.log(value3);
});
