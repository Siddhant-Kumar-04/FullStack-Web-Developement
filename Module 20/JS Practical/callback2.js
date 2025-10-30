setTimeout(function exec() {
    console.log("I am executed after 3 seconds");
}, 3000)
 

// Here the function exec is a callback function which is passed to setTimeout function
// function that we pass as an argument to another function is called callback function

/**
 * Disadvanages of Callbacks
 * 1. Inversion of control 
 * 2. Callback Hell  - Readability and Maintainability issues
 */


let arr = [1, 10, 20, 40, 2, 3, 4]

arr.sort(function compare(a, b) {
    return a - b;
});

console.log(arr);


function doTask(fn, x) {
    fn(x * x);
    fn(x * x);
}
doTask(function exec(num) {  //due to callbacks, I am passing control of how exec should be called to doTask
    //this is inversion of control
    console.log("The square is ", num);
}, 9);

