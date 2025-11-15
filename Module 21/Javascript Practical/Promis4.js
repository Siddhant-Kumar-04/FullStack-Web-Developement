function fetchDate(url) {
    return new Promise((resolve, reject) => {
        console.log("Started Downloading from", url);
        setTimeout(() => {
            let data = "Dummy Data";
            console.log("Download Completed");
            resolve(data);
        }, 7000);
    })
}

console.log("Start");
let proObj = fetchDate("shdgashdgsahdfhad");
proObj
    .then(function success(value) {
        console.log("Value is",value);
    }, function failure(err) {
        console.log("Error is", err);
    })


function newPromisCreation() {
    return new Promise(function(resolve, reject) {
        resolve("Immediate Rsolve");
    });
        
    }

let newObj = Promise.resolve("Imediate Resolved");
newObj
    .then(function sucesss(value) {
        console.log("New Obj Value is", value);
})