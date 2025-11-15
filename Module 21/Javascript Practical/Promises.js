function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createPromiseWithLoop() {
    return new Promise(function exec(resolve, reject) {
        for (let i = 0; i < 10000000; i++){
            let num = getRandomInt(10);
            if (num % 2 == 0) {
                resolve("Even number found: " + num);
            }
            else {
                reject("Odd number found: " + num);
            }
        }
    })
}



function createPromiseWithTimeout() {
    return new Promise(function exec(resolve, reject) {
        setTimeout(function () {
            let num = getRandomInt(10);
            if (num % 2 == 0) {
                resolve("Even number found: " + num);
                
            }
            else {
                reject("Odd number found: " + num);
                
            }
        }, 10000);
    })
}
let x = createPromiseWithTimeout();
console.log(x);
console.log("Promise with timeout created");


