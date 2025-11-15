function Operation(a, b, callback) {
    setTimeout(function exec(){
        callback(a, b);
    }, 2000);
}


Operation(5, 10, function sum(x, y) {
    console.log("sum is"+(x+y));
})


function Operation2(a, b) {
    return new Promise(function (resolve, reject) {
    setTimeout(function exec(){
        resolve(a + b);
    }, 2000);
    })
}

let proObj = Operation2(5, 10);
proObj.then(function success(value) {
    console.log("Sum is " + value);
})

