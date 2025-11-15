function createPromis() {
    return new Promise(function exec(resolve, reject) {
        console.log("Resolving Promise");
        resolve("Resolve Done");
    } )
}

setTimeout(function process() {
    console.log("Timer Completed");
}, 0)

let p = createPromis();
console.log(p)
p.then(
    function successHandler(result) {
        console.log("Inside Success Handler" + result);
    },function failureHandler(error) {
        console.log("Inside Failure Handler" + error);
    }
)