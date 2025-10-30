function add(a, b) {
    return a + b;
    
}

function substract(a, b) {
    return a - b;
}

function Operation(a, b, fn) {
    return fn(a, b);
}

console.log(Operation(10, 5, add)); //15
console.log(Operation(10, 5, substract)); //5


//Example for function returning function
function createGreeting(greet) {
    return function (name) {
    console.log(greet + ", " + name);
    }
}
const morning = createGreeting("Good Morning");
morning("Alice"); // Good Morning, Alice
const evening = createGreeting("Good Evening");
evening("Bob"); // Good Evening, Bob