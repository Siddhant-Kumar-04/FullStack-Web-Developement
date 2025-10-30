let x = function () {
    console.log("Function Expression in funcEcp2.js");
}

console.log(x);
x();

let y = () => {
    
}

//iffy imediately invoked function expression
(function () {
    console.log("IIFE in funcEcp2.js");
})();