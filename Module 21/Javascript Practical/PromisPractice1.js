//Promis Creation

const newPromise = new Promise((resolve, reject) => {
    setTimeout((function () {
        let randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(randomNumber);
        } else {
            reject("Number is less than or equal to 0.5");
        }
    }), 1000);
});
console.log(newPromise);

//Promise Consumption

newPromise
    .then((value) => {
        console.log("Resolved with value:", value);
    })
    .catch((error) => {
        console.log("Rejected with error:", error);
    })
    .finally(() => {
        console.log("Promise has been settled (either resolved or rejected).");
    })