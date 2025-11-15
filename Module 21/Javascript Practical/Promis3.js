function createPromis() {
    return new Promise(function exec(resolve, reject) {
       setTimeout(function process() {
           resolve("Resolve Done");
       }, 0);
    } )
}



let p = createPromis();
p.then(
    function successHandler(result) {
        console.log("Inside Success Handler" + result);
    },function failureHandler(error) {
        console.log("Inside Failure Handler" + error);
    }
)

p.then(
    function successHandler(result) {
        console.log("Inside Success Handler" + result);
    },function failureHandler(error) {
        console.log("Inside Failure Handler" + error);
    }
)

console.log("Ending");