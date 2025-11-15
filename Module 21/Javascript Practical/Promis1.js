function getRandomInt(max) {
    return Math.floor(Math.random() * max);
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
        console.log("Exited the setTimeout function"); 
    })
}
console.log("Starting...!");
let x = createPromiseWithTimeout();
console.log("We are know waiting to get the result from the promise");
console.log("currently my promise object is like....", x);
console.log("Going to register my 1st set of handelers")
x
    .then(
        function successHandler(result) {
            console.log(result);
            setTimeout((exec) => {
                console.log("Inside setTimeout of success handler");
            }, 0);
        }
        ,function failureHandler( error) {
            console.log("Inside Rejection Handler" + error);
            setTimeout((exec) => {
                console.log("Inside setTimeout of failure handler");
            }, 0);
        }
)


console.log("Going to register my 2nd set of handelers");
x
    .then(
        function successHandler(result) {
            console.log(result);
            setTimeout((exec) => {
                console.log("Inside setTimeout of success handler");
            }, 0);
            console.log("Done with success handler");
        }
        ,function failureHandler( error) {
            console.log("Inside Rejection Handler" + error);
            setTimeout((exec) => {
                console.log("Inside setTimeout of failure handler");
            }, 0);
            console.log("Done with failure handler");
        }
)

console.log("Finished execution of the script");